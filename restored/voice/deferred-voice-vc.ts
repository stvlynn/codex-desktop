// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wns`) / export `VC`.

export type BindDeferredVoiceVCPeers = {
  Q: (...args: unknown[]) => unknown;
  Vns: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: BindDeferredVoiceVCPeers | null = null;

/** Wire bindDeferredVoiceVC peers once companions land. */
export function setBindDeferredVoiceVCPeers(next: BindDeferredVoiceVCPeers): void {
  peers = next;
}

/**
 * Bundle export `VC` / internal `Wns`.
 */
export function bindDeferredVoiceVC() {
  if (peers == null) {
    throw new Error("bindDeferredVoiceVC peers are not configured");
  }

  return peers.ka(peers.Q, ({
    enabled: e,
    hostId: t
  }, {
    scope: n
  }) => ({
    ...peers.Vns(n, t),
    enabled: e
  }), {
    key: ({
      enabled: e,
      hostId: t
    }) => `${t}:${e}`
  });
}
