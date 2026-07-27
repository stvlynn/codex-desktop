// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `PCu` / export `l` with companions `ICu` / `LCu`.

import { getPersistedAtomItem } from "../boundaries/persisted-atom-store";

/** Statsig / prefs key for default-mode "request user input". */
export const DEFAULT_MODE_REQUEST_USER_INPUT_ENABLED_KEY =
  "default-mode-request-user-input-enabled";

/** Default when the persisted value is missing. */
export const DEFAULT_MODE_REQUEST_USER_INPUT_ENABLED_FALLBACK = true;

/** Read persisted default-mode request-user-input flag (bundle `l`). */
export function defaultModeRequestUserInputEnabled(
  override?: boolean | null,
): boolean {
  return (
    override ??
    getPersistedAtomItem(
      DEFAULT_MODE_REQUEST_USER_INPUT_ENABLED_KEY,
      DEFAULT_MODE_REQUEST_USER_INPUT_ENABLED_FALLBACK,
    )
  );
}
