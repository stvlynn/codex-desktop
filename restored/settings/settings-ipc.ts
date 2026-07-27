// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Host IPC for single-setting get/set (`NQe` / `Cp` via `rp`).

import type { SettingDefinition } from "./setting-definition";

/**
 * Minimal host RPC surface used by settings helpers.
 * Production wires this to `vscode://codex/<method>` posts.
 */
export type SettingsHostRpc = {
  post<TResponse>(
    method: string,
    params: Record<string, unknown>,
  ): Promise<TResponse>;
};

let hostRpc: SettingsHostRpc | null = null;

/** Inject the host RPC implementation (call once during app bootstrap). */
export function setSettingsHostRpc(rpc: SettingsHostRpc): void {
  hostRpc = rpc;
}

function requireHostRpc(): SettingsHostRpc {
  if (hostRpc == null) {
    throw new Error("Settings host RPC has not been configured");
  }
  return hostRpc;
}

type GetSettingResponse<T> = {
  value?: T;
};

/**
 * Fetch one setting value from the host, falling back to the definition default
 * (bundle `NQe` / export `Fut`).
 */
export async function fetchSettingValue<T>(
  setting: SettingDefinition<T>,
): Promise<T> {
  const response = await requireHostRpc().post<GetSettingResponse<T>>(
    "get-setting",
    { key: setting.key },
  );
  return response.value ?? setting.default;
}

/**
 * Persist one setting value on the host (bundle `Cp` / export `Rut`).
 */
export async function persistSettingValue<T>(
  setting: SettingDefinition<T>,
  value: T,
): Promise<void> {
  await requireHostRpc().post("set-setting", {
    key: setting.key,
    value,
  });
}

/**
 * Settings query / global-state `__esm` inits used by register-app-actions:
 * - But / yp — tiny settings-atom deps
 * - Put / wp — get-settings query + per-key derived atoms
 * - tdt / ap — vscode global-state helpers
 *
 * Restored registry talks to the host via `fetchSettingValue` /
 * `persistSettingValue` + injectable RPC; these producer inits are no-ops.
 */
export function ensureSettingsQueryAtomsInit(): void {}
