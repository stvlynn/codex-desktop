// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GM`) / export `kY`.

export type DeferredConversationKYPeers = {
  WM: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationKYPeers | null = null;

/** Wire deferredConversationKY peers once companions land. */
export function setDeferredConversationKYPeers(
  next: DeferredConversationKYPeers,
): void {
  peers = next;
}

/**
 * Bundle export `kY` / internal `GM`.
 */
export function deferredConversationKY() {
  if (peers == null) {
    throw new Error("deferredConversationKY peers are not configured");
  }

  return peers.wa(`ComposerScope`, {
    key: (e) =>
      e.kind === `new` &&
      e.entrypoint === `home` &&
      e.focusComposerNonce != null
        ? `${peers.WM(e)}:${e.focusComposerNonce}`
        : peers.WM(e),
    parent: peers.hT,
    retain: {
      max: 100,
    },
  });
}
