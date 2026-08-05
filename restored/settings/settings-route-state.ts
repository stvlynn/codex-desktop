// Restored from ref/webview/assets/settings-route-state-Jk1wyRLN.js
// Settings route helpers: beta-section gate + location-state parsers.
// Stage 3: zod aliases → vendor/zod; b/e2/opt ESM inits dropped (literals inlined).

import {
  ensureZodRuntime,
  zodLiteral,
  zodObject,
  zodString,
} from "../vendor/zod";
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
export type SettingsBetaSection = {
  stage: string;
  name: string;
};
export type SettingsLocationState = {
  returnToPreviousHistoryEntry?: boolean;
  workspaceRoot?: string | null;
};
const settingsLocationStateSchema = zodObject({
  returnToPreviousHistoryEntry: zodLiteral(true).optional(),
  workspaceRoot: zodString().min(1).nullable().optional(),
}).passthrough();

/**
 * True when a settings section is beta-gated and should stay hidden
 * from the default nav (export `a`).
 */
export function isSettingsBetaSectionHidden(
  section: SettingsBetaSection,
): boolean {
  if (section.stage !== "beta") return false;
  const { name } = section;
  return (
    name !== "memories" &&
    name !== "multi_agent" &&
    name !== "plugins" &&
    name !== "plugin" &&
    name !== "remote_control" &&
    !name.startsWith("realtime_") &&
    name !== "chronicle" &&
    name !== "workspace_dependencies"
  );
}

/**
 * Init for route-state side effects (export `i`).
 * Alias-out: opt→ensureAppShellAtomsInit; b/e2 string inits dropped
 * (CHRONICLE_APP_ID / MEMORIES_ID already restored elsewhere).
 */
export function initSettingsRouteState(): void {
  ensureAppShellAtomsInit();
}

/** Whether location state requests returning to the previous history entry (export `t`). */
export function shouldReturnToPreviousHistoryEntry(state: unknown): boolean {
  ensureZodRuntime();
  const parsed = settingsLocationStateSchema.safeParse(state);
  return parsed.success && parsed.data.returnToPreviousHistoryEntry === true;
}

/** Parse optional workspaceRoot from settings location state (export `n`). */
export function parseSettingsWorkspaceRootState(state: unknown): {
  hasValue: boolean;
  workspaceRoot: string | null;
} {
  ensureZodRuntime();
  const parsed = settingsLocationStateSchema.safeParse(state);
  if (!parsed.success || !Object.hasOwn(parsed.data, "workspaceRoot")) {
    return {
      hasValue: false,
      workspaceRoot: null,
    };
  }
  return {
    hasValue: true,
    workspaceRoot: parsed.data.workspaceRoot ?? null,
  };
}

/** Ensure zod schema for settings location state is ready (export `r`). */
export function ensureSettingsLocationStateSchema(): void {
  ensureZodRuntime();
}
