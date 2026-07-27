// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Persisted Codex Micro device-detection signals (bundle `S9o`/`b9o`/`x9o`).
// Export aliases: Jw (init), Kw, qw.

import {
  createPersistedScopeSignal,
  ensurePersistedScopeSignalInit,
} from "../boundaries/turn-sources-runtime";

ensurePersistedScopeSignalInit();

/** Bundle `b9o` / export `Kw` — whether a micro device was ever detected. */
export const codexMicroHasEverBeenDetected = createPersistedScopeSignal(
  "codex-micro-has-ever-been-detected",
  false,
);

/** Bundle `x9o` / export `qw` — last detected micro device model id. */
export const codexMicroLastDetectedDeviceModel = createPersistedScopeSignal<
  string | undefined
>("codex-micro-last-detected-device-model", undefined);

/** Bundle `S9o` / export `Jw` — Rolldown ESM init retained as no-op. */
export function ensureCodexMicroDetectionSignalsInit(): void {}
