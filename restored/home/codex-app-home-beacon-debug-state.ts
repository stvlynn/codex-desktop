// Restored from ref/webview/assets/codex-app-home-beacon-debug-state-DG7Gx8ls.js
// Persisted debug flag + helper for the Codex app home beacon.
// Stage 3: nut/rut→persisted scope signal; no app-initial body.

import {
  createPersistedScopeSignal,
  ensurePersistedScopeSignalInit,
} from "../boundaries/turn-sources-runtime";

ensurePersistedScopeSignalInit();

/** Bundle export `t` — Statsig / debug gate id. */
export const CODEX_APP_HOME_BEACON_DEBUG_ID = "codex_app_home_beacon_debug";

/** Bundle export `n` — persisted electron debug enabled flag. */
export const codexAppHomeBeaconDebugEnabled = createPersistedScopeSignal(
  "electron:codex-app-home-beacon-debug-enabled",
  false,
);

/** Bundle export `i` — whether a gate id matches the beacon debug id. */
export function isCodexAppHomeBeaconDebugId(id: string): boolean {
  return id === CODEX_APP_HOME_BEACON_DEBUG_ID;
}

/** Bundle export `r` — Rolldown ESM init retained as no-op. */
export function ensureCodexAppHomeBeaconDebugStateInit(): void {}
