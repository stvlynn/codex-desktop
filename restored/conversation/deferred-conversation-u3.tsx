// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JFi`) / export `$U`.

export type BindDeferredConversationU3Peers = {
  BFi: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  N3n: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
  qFi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationU3Peers | null = null;

/** Wire bindDeferredConversationU3 peers once companions land. */
export function setBindDeferredConversationU3Peers(
  next: BindDeferredConversationU3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `$U` / internal `JFi`.
 */
export function bindDeferredConversationU3() {
  if (peers == null) {
    throw new Error("bindDeferredConversationU3 peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => {
    let t = e(peers.qFi),
      n = t.data ?? null;
    return n == null
      ? peers.N3n(t)
      : e(peers.BFi, {
          commonDir: n.commonDir,
          enabled: !0,
          hostConfig: e(peers.kI),
          operationSource: `local_conversation_thread`,
          root: n.root,
        });
  });
}
