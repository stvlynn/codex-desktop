// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IAl`) / export `ic`.

export type BindBindElectronConversationalOnboardingConversationPeers = {
  Da: (...args: unknown[]) => unknown;
  FAl: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: BindBindElectronConversationalOnboardingConversationPeers | null = null;

/** Wire bindBindElectronConversationalOnboardingConversation peers once companions land. */
export function setBindBindElectronConversationalOnboardingConversationPeers(next: BindBindElectronConversationalOnboardingConversationPeers): void {
  peers = next;
}

/**
 * Bundle export `ic` / internal `IAl`.
 */
export function bindBindElectronConversationalOnboardingConversation() {
  if (peers == null) {
    throw new Error("bindBindElectronConversationalOnboardingConversation peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), FAl = peers.Da(peers.Q, e => null, void 0, {
      key: ({
        hostId: e,
        threadId: t
      }) => `${peers.e}:${t}`
    });
  });
}
