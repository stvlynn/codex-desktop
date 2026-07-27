// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FAl`) / export `rc`.

export type BindBindElectronConversationalOnboardingConversation2Peers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindBindElectronConversationalOnboardingConversation2Peers | null = null;

/** Wire bindBindElectronConversationalOnboardingConversation2 peers once companions land. */
export function setBindBindElectronConversationalOnboardingConversation2Peers(next: BindBindElectronConversationalOnboardingConversation2Peers): void {
  peers = next;
}

/**
 * Bundle export `rc` / internal `FAl`.
 */
export function bindBindElectronConversationalOnboardingConversation2() {
  if (peers == null) {
    throw new Error("bindBindElectronConversationalOnboardingConversation2 peers are not configured");
  }

  return peers.Da(peers.Q, e => null, void 0, {
    key: ({
      hostId: e,
      threadId: t
    }) => `${e}:${t}`
  });
}
