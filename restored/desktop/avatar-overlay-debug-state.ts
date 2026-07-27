// Restored from ref/webview/assets/avatar-overlay-debug-state-CtxOR8Zi.js
// Persisted debug toggles for the avatar overlay window.
// Stage 3: nut/rut→persisted scope signal; no app-initial body.

import {
  createPersistedScopeSignal,
  ensurePersistedScopeSignalInit,
} from "../boundaries/turn-sources-runtime";
ensurePersistedScopeSignalInit();

/** Bundle export `r` — hide avatar overlay resize button. */
export const avatarOverlayResizeButtonHidden = createPersistedScopeSignal(
  "avatar-overlay-resize-button-hidden",
  false,
);

/** Bundle export `t` — show debug window border. */
export const avatarOverlayDebugWindowBorderVisible = createPersistedScopeSignal(
  "avatar-overlay-debug-window-border-visible",
  false,
);

/** Bundle export `n` — force non-native avatar overlay rendering. */
export const avatarOverlayForceNonNativeRendering = createPersistedScopeSignal(
  "avatar-overlay-force-non-native-rendering",
  false,
);

/** Bundle export `i` — Rolldown ESM init retained as no-op. */
export function ensureAvatarOverlayDebugStateInit(): void {}
