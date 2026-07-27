// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$ge`) / export `ngt`.

export type AvatarOverlayCompositionFocusComposerPeers = {
  Jge: (...args: unknown[]) => unknown;
  Qge: (...args: unknown[]) => unknown;
  Xge: (...args: unknown[]) => unknown;
  Yge: (...args: unknown[]) => unknown;
  Zge: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: AvatarOverlayCompositionFocusComposerPeers | null = null;

/** Wire avatarOverlayCompositionFocusComposer peers once companions land. */
export function setAvatarOverlayCompositionFocusComposerPeers(next: AvatarOverlayCompositionFocusComposerPeers): void {
  peers = next;
}

/**
 * Bundle export `ngt` / internal `$ge`.
 */
export function avatarOverlayCompositionFocusComposer() {
  if (peers == null) {
    throw new Error("avatarOverlayCompositionFocusComposer peers are not configured");
  }

  return peers.e(() => {
    Jge = `avatar-overlay-composition:focus-composer`, Yge = `avatar-overlay-composition:surface-preparation-updated`, Xge = [`voice-microphone`, `voice-controls`, `voice-output`], Zge = [`voice-status`, ...peers.Xge], Qge = [`composer`, `realtime-caption`, `activity-slot-8`, `activity-slot-7`, `activity-slot-6`, `activity-slot-5`, `activity-slot-4`, `activity-slot-3`, `activity-slot-2`, `activity-slot-1`, `activity-slot-0`, ...peers.Zge, `mascot-badge`];
  });
}
