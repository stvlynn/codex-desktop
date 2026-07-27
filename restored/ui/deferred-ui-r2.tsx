// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$tr`) / export `r2`.

export type BindBindDeferredUiR2Peers = {
  Da: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qer: (...args: unknown[]) => unknown;
  ltn: (...args: unknown[]) => unknown;
  w9t: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiR2Peers | null = null;

/** Wire bindBindDeferredUiR2 peers once companions land. */
export function setBindBindDeferredUiR2Peers(next: BindBindDeferredUiR2Peers): void {
  peers = next;
}

/**
 * Bundle export `r2` / internal `$tr`.
 */
export function bindBindDeferredUiR2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiR2 peers are not configured");
  }

  return peers.Da(peers.Q, (e, { scope: t }) => {
    let n = new peers.w9t(e, (e, t) => peers.Jf.dispatchMessage(e, t), !0),
      r = new peers.ltn(e),
      i = peers.Qer(t);
    return (
      n.addRequestLifecycleListener((e) => {
        (r.handleRequestLifecycleEvent(e), e.type !== `started` && i(e));
      }),
      n
    );
  });
}
