// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lnr`) / export `i2`.

export type BindBindDeferredUiI22Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  itn: (...args: unknown[]) => unknown;
  rtn: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiI22Peers | null = null;

/** Wire bindBindDeferredUiI22 peers once companions land. */
export function setBindBindDeferredUiI22Peers(
  next: BindBindDeferredUiI22Peers,
): void {
  peers = next;
}

/**
 * Bundle export `i2` / internal `lnr`.
 */
export function bindBindDeferredUiI22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiI22 peers are not configured");
  }

  return peers.Ta(peers.Q, peers.itn, {
    onMount: (e) => {
      let t = () => {
        e(peers.itn());
      };
      return (t(), peers.rtn(t));
    },
  });
}
