// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `J2s`) / export `Nh`.

export type BindHasSeenRealtimeVoiceNuxAtomPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: BindHasSeenRealtimeVoiceNuxAtomPeers | null = null;

/** Wire bindHasSeenRealtimeVoiceNuxAtom peers once companions land. */
export function setBindHasSeenRealtimeVoiceNuxAtomPeers(next: BindHasSeenRealtimeVoiceNuxAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `Nh` / internal `J2s`.
 */
export function bindHasSeenRealtimeVoiceNuxAtom() {
  if (peers == null) {
    throw new Error("bindHasSeenRealtimeVoiceNuxAtom peers are not configured");
  }

  return peers.Ta(peers.Q, !1);
}
