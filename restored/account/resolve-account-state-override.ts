// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wys` / export `gb`.

import { versionedAccountState } from "./versioned-account-state";

/** Resolve account-state override mode, else versioned store entry. */
export function resolveAccountStateOverride<T extends { version: number }>(
  store: Record<string, T> | null | undefined,
  key: string,
  override:
    | { mode: "disabled" }
    | { mode: "enabled"; accountState: T }
    | { mode?: string; accountState?: T }
    | null
    | undefined,
): T | undefined {
  if (override?.mode !== "disabled") {
    return override?.mode === "enabled"
      ? override.accountState
      : versionedAccountState(store, key);
  }
  return undefined;
}
