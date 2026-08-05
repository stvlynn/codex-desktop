// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `unr`) / export `T2`.

export type BindBindDeferredUiT22Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  nD: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiT22Peers | null = null;

/** Wire bindBindDeferredUiT22 peers once companions land. */
export function setBindBindDeferredUiT22Peers(
  next: BindBindDeferredUiT22Peers,
): void {
  peers = next;
}

/**
 * Bundle export `T2` / internal `unr`.
 */
export function bindBindDeferredUiT22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiT22 peers are not configured");
  }

  return peers.Ta(peers.Q, null, {
    onMount: (e, t) =>
      t.watch(({ get: t }) => {
        let n = t(peers.nD).map((t) => t.addTurnCompletedListener(e));
        return () => {
          for (let e of n) e();
        };
      }),
  });
}
