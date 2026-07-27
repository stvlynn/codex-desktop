// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kHl`) / export `eo`.

export type BindSidebarTaskPrChipPeers = {
  BUo: (...args: unknown[]) => unknown;
  CHl: (...args: unknown[]) => unknown;
  Cnr: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DHl: (...args: unknown[]) => unknown;
  EHl: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OHl: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Oqo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RE: (...args: unknown[]) => unknown;
  THl: (...args: unknown[]) => unknown;
  Tqo: (...args: unknown[]) => unknown;
  Zh: (...args: unknown[]) => unknown;
  cD: (...args: unknown[]) => unknown;
  dJ: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eS: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  gHl: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  rS: (...args: unknown[]) => unknown;
  uHl: (...args: unknown[]) => unknown;
  xHl: (...args: unknown[]) => unknown;
  yHl: (...args: unknown[]) => unknown;
};

let peers: BindSidebarTaskPrChipPeers | null = null;

/** Wire bindSidebarTaskPrChip peers once companions land. */
export function setBindSidebarTaskPrChipPeers(next: BindSidebarTaskPrChipPeers): void {
  peers = next;
}

/**
 * Bundle export `eo` / internal `kHl`.
 */
export function bindSidebarTaskPrChip() {
  if (peers == null) {
    throw new Error("bindSidebarTaskPrChip peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.fb(), peers.Zh(), peers.RE(), peers.uHl(), peers.gHl(), peers.BUo(), peers.Tqo(), peers.yHl(), peers.Oqo(), peers.ed(), peers.rS(), peers.K_(), THl = peers.J(), EHl = peers.Ma(peers.Q, ({
      get: e
    }) => !peers.eS(peers.e)), DHl = peers.Oa(peers.Q, (e, {
      get: t
    }) => !t(peers.EHl) || peers.e == null ? null : peers.xHl(peers.e, t(peers.LE))), OHl = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      if (!t(peers.EHl)) return null;
      let n = t(peers.oD, peers.e),
        r = t(peers.cD, peers.e),
        i = t(peers.Cnr, peers.e),
        a = t(peers.rD, peers.e) ?? `local`;
      if (peers.e == null || n == null || r == null) return null;
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
  });
}
