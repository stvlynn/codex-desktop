// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JDo`) / export `ok`.

export type BindDeferredUiOk2Peers = {
  GK: (...args: unknown[]) => unknown;
  KDo: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RDo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiOk2Peers | null = null;

/** Wire bindDeferredUiOk2 peers once companions land. */
export function setBindDeferredUiOk2Peers(next: BindDeferredUiOk2Peers): void {
  peers = next;
}

/**
 * Bundle export `ok` / internal `JDo`.
 */
export function bindDeferredUiOk2() {
  if (peers == null) {
    throw new Error("bindDeferredUiOk2 peers are not configured");
  }

  return peers.Oa(
    peers.Q,
    ({ conversationId: e, hostId: t }, { get: n }) =>
      peers.RDo({
        artifacts: n(peers.KDo, {
          conversationId: e,
          hostId: t,
        }),
        get: n,
        hostId: t,
      }),
    {
      isEqual: peers.GK.default,
    },
  );
}
