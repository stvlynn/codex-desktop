// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Settings snapshot helpers: read, optimistic write, query-cache broadcast.

import { broadcastQueryCacheInvalidation } from "./broadcast-query-cache-invalidation";
import { persistSettingValue } from "./settings-ipc";
import type { SettingDefinition } from "./setting-definition";

/** Aggregated settings payload from the `get-settings` query. */
export type SettingsSnapshotData = {
  configuredValues?: Record<string, unknown>;
  values?: Record<string, unknown>;
};

export type SettingsQuerySnapshot = {
  queryKey: unknown[];
  cancel: () => void | Promise<void>;
  getData: () => SettingsSnapshotData | undefined;
  setData: (data: SettingsSnapshotData | undefined) => void;
  invalidate: () => void | Promise<void>;
};

export type SettingsStoreContext = {
  query: {
    snapshot: (queryAtom: unknown) => SettingsQuerySnapshot;
  };
};

export type SetSettingOptions = {
  optimistic?: boolean;
};

/** Injected setting-value atom family (`FQe`) used by {@link getSettingValue}. */
let settingValueAtomFamily: unknown = null;

/** Wire the setting-value atom family created by the settings bootstrap. */
export function setSettingValueAtomFamily(atomFamily: unknown): void {
  settingValueAtomFamily = atomFamily;
}

/**
 * Read a setting value from a store getter against the values atom family
 * (bundle `xp` / export `Nut`).
 */
export function getSettingValue<T>(
  get: (atomFamily: unknown, setting: SettingDefinition<T>) => T,
  setting: SettingDefinition<T>,
): T {
  if (settingValueAtomFamily == null) {
    throw new Error("Setting value atom family has not been configured");
  }
  return get(settingValueAtomFamily, setting);
}

/**
 * Apply an in-memory optimistic patch for one setting key (bundle `MQe`).
 */
export function applyOptimisticSettingValue<T>(
  context: SettingsStoreContext,
  settingsQueryAtom: unknown,
  setting: SettingDefinition<T>,
  value: T,
): void {
  const snapshot = context.query.snapshot(settingsQueryAtom);
  const current = snapshot.getData();
  snapshot.setData({
    configuredValues:
      current?.configuredValues == null
        ? undefined
        : { ...current.configuredValues, [setting.key]: value },
    values: { ...current?.values, [setting.key]: value },
  });
}

/**
 * Optimistically (by default) write a setting, persist via IPC, then invalidate
 * (bundle `Sp` / export `Iut`).
 */
export async function setSettingValue<T>(
  context: SettingsStoreContext,
  settingsQueryAtom: unknown,
  setting: SettingDefinition<T>,
  value: T,
  options?: SetSettingOptions,
): Promise<void> {
  const snapshot = context.query.snapshot(settingsQueryAtom);
  const cancelPromise = snapshot.cancel();
  const previous = snapshot.getData();
  const optimistic = options?.optimistic ?? true;

  if (optimistic) {
    snapshot.setData({
      configuredValues:
        previous?.configuredValues == null
          ? undefined
          : { ...previous.configuredValues, [setting.key]: value },
      values: { ...previous?.values, [setting.key]: value },
    });
  }

  await cancelPromise;

  try {
    await persistSettingValue(setting, value);
    if (!optimistic) {
      const current = snapshot.getData();
      snapshot.setData({
        configuredValues:
          current?.configuredValues == null
            ? undefined
            : { ...current.configuredValues, [setting.key]: value },
        values: { ...current?.values, [setting.key]: value },
      });
    }
  } catch (error) {
    if (optimistic) {
      snapshot.setData(previous);
    }
    throw error;
  } finally {
    await snapshot.invalidate();
    broadcastQueryCacheInvalidation(snapshot.queryKey);
  }
}

/** Stale-time used by the `get-settings` query atom (bundle `Hf.FIVE_SECONDS`). */
export const SETTINGS_QUERY_STALE_TIME_MS = 5_000;
