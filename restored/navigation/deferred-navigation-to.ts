// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OHl`) / export `to`.

export type BindDeferredNavigationToPeers = {
  CHl: (...args: unknown[]) => unknown;
  Cnr: (...args: unknown[]) => unknown;
  EHl: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  cD: (...args: unknown[]) => unknown;
  dJ: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  xHl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredNavigationToPeers | null = null;

/** Wire bindDeferredNavigationTo peers once companions land. */
export function setBindDeferredNavigationToPeers(next: BindDeferredNavigationToPeers): void {
  peers = next;
}

/**
 * Bundle export `to` / internal `OHl`.
 */
export function bindDeferredNavigationTo() {
  if (peers == null) {
    throw new Error("bindDeferredNavigationTo peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    if (!t(peers.EHl)) return null;
    let n = t(peers.oD, e),
      r = t(peers.cD, e),
      i = t(peers.Cnr, e),
      a = t(peers.rD, e) ?? `local`;
    if (e == null || n == null || r == null) return null;
    let {
      data: o
    } = t(peers.dJ, {
      cwd: n,
      headBranch: r,
      hostId: a,
      operationSource: `sidebar_task_pr_chip`,
      originUrl: i
    });
    return o == null ? null : o.details == null ? peers.xHl(o.state === `open` && o.isDraft ? `draft` : o.state, t(peers.LE), o.title, o.url) : peers.CHl(o.details, t(peers.LE));
  });
}
