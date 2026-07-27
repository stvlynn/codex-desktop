// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lPr`) / export `cQ`.

export type BindDeferredGitCQPeers = {
  DD: (...args: unknown[]) => unknown;
  Enr: (...args: unknown[]) => unknown;
  HA: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IAr: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RAr: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  XNr: (...args: unknown[]) => unknown;
  aj: (...args: unknown[]) => unknown;
  cPr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  iPr: (...args: unknown[]) => unknown;
  sPr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitCQPeers | null = null;

/** Wire bindDeferredGitCQ peers once companions land. */
export function setBindDeferredGitCQPeers(next: BindDeferredGitCQPeers): void {
  peers = next;
}

/**
 * Bundle export `cQ` / internal `lPr`.
 */
export function bindDeferredGitCQ() {
  if (peers == null) {
    throw new Error("bindDeferredGitCQ peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.Vf(), peers.RAr(), peers.ed(), peers.K_(), peers.aj(), peers.HA(), peers.Wh(), sPr = peers.Oa(peers.Q, (e, {
      get: t
    }) => peers.iPr(t(peers.XNr, peers.e), (e, n) => [...(t(peers.Enr, peers.e) ?? n ? [peers.e] : []), ...t(peers.IAr, peers.e)])), cPr = 8;
  });
}
