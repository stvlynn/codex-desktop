// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fnr`) / export `w2`.

export type BindBindDeferredUiW2Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  eventId: (...args: unknown[]) => unknown;
  nD: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiW2Peers | null = null;

/** Wire bindBindDeferredUiW2 peers once companions land. */
export function setBindBindDeferredUiW2Peers(
  next: BindBindDeferredUiW2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `w2` / internal `fnr`.
 */
export function bindBindDeferredUiW2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiW2 peers are not configured");
  }

  return peers.Ta(peers.Q, null, {
    onMount: (e, t) =>
      t.watch(({ get: t }) => {
        let n = t(peers.nD).map((t) =>
          t.addMcpLoginCallback((n) => {
            e((e) => ({
              ...n,
              eventId: (e?.eventId ?? -1) + 1,
              hostId: t.getHostId(),
            }));
          }),
        );
        return () => {
          for (let e of n) e();
        };
      }),
  });
}
