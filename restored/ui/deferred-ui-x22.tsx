// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hrr`) / export `x2`.

export type BindBindDeferredUiX22Peers = {
  Knr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  vD: (...args: unknown[]) => unknown;
  yD: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiX22Peers | null = null;

/** Wire bindBindDeferredUiX22 peers once companions land. */
export function setBindBindDeferredUiX22Peers(next: BindBindDeferredUiX22Peers): void {
  peers = next;
}

/**
 * Bundle export `x2` / internal `hrr`.
 */
export function bindBindDeferredUiX22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiX22 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    let n = t(peers.hD, e);
    if (n == null) return !1;
    if (n === `needs_resume`) return t(peers.Knr, e)?.type === `active`;
    if (t(peers.vD, e) === 0) return n === `resuming`;
    let r = t(peers.yD, e);
    return r == null ? !0 : r.status === `inProgress`;
  });
}
