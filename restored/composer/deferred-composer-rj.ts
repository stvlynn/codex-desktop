// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xN`) / export `rJ`.

export type BindDeferredComposerRJPeers = {
  GM: (...args: unknown[]) => unknown;
  H0r: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  WM: (...args: unknown[]) => unknown;
  z0r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerRJPeers | null = null;

/** Wire bindDeferredComposerRJ peers once companions land. */
export function setBindDeferredComposerRJPeers(next: BindDeferredComposerRJPeers): void {
  peers = next;
}

/**
 * Bundle export `rJ` / internal `xN`.
 */
export function bindDeferredComposerRJ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerRJ peers are not configured");
  }

  return peers.Ma(peers.GM, ({
    get: e,
    scope: t
  }) => {
    if (t.value.kind === `local` && t.value.conversationId != null) {
      let n = e(peers.z0r, t.value.conversationId);
      if (n != null) return n.prompt;
    }
    return e(peers.H0r)[peers.WM(t.value)] ?? ``;
  });
}
