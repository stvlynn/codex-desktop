// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gE`) / export `p3`.

export type BindDeferredUiP3Peers = {
  Eh: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Th: (...args: unknown[]) => unknown;
  a8n: (...args: unknown[]) => unknown;
  checkGate: (...args: unknown[]) => unknown;
  i8n: (...args: unknown[]) => unknown;
  o8n: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiP3Peers | null = null;

/** Wire bindDeferredUiP3 peers once companions land. */
export function setBindDeferredUiP3Peers(next: BindDeferredUiP3Peers): void {
  peers = next;
}

/**
 * Bundle export `p3` / internal `gE`.
 */
export function bindDeferredUiP3() {
  if (peers == null) {
    throw new Error("bindDeferredUiP3 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => {
    let t = e(peers.Eh, peers.a8n),
      n = e(peers.Th);
    return peers.i8n(e(peers.o8n), t || n?.checkGate(`2333235660`) === !0);
  });
}
