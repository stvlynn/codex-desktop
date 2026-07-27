// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z_`) / export `Not`.

export type BindSharedObjectUpdatedPeers = {
  Da: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  getSharedObjectSnapshotValue: (...args: unknown[]) => unknown;
  iOt: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rOt: (...args: unknown[]) => unknown;
};

let peers: BindSharedObjectUpdatedPeers | null = null;

/** Wire bindSharedObjectUpdated peers once companions land. */
export function setBindSharedObjectUpdatedPeers(next: BindSharedObjectUpdatedPeers): void {
  peers = next;
}

/**
 * Bundle export `Not` / internal `z_`.
 */
export function bindSharedObjectUpdated() {
  if (peers == null) {
    throw new Error("bindSharedObjectUpdated peers are not configured");
  }

  return peers.e(() => {
    ((rOt = peers.r(peers.Mo(), 1)),
      peers.Ho(),
      peers.Yf(),
      peers.ed(),
      (iOt = peers.Da(
        peers.Q,
        (e) => window.electronBridge?.getSharedObjectSnapshotValue?.(peers.e),
        {
          isEqual: peers.rOt.default,
          onMount: (e, { key: t }) => {
            let n = peers.Jf.subscribe(`shared-object-updated`, (n) => {
              n.key === t && peers.e(n.value);
            });
            return (
              peers.Jf.dispatchMessage(`shared-object-subscribe`, {
                key: t,
              }),
              () => {
                (n(),
                  peers.Jf.dispatchMessage(`shared-object-unsubscribe`, {
                    key: t,
                  }));
              }
            );
          },
        },
      )));
  });
}
