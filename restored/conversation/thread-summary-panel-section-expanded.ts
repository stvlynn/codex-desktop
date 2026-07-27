// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SJo`) / export `$E`.

export type BindThreadSummaryPanelSectionExpandedPeers = {
  Da: (...args: unknown[]) => unknown;
  Ep: (...args: unknown[]) => unknown;
  Fm: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Nk: (...args: unknown[]) => unknown;
  RJ: (...args: unknown[]) => unknown;
  _Jo: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  bJo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dJo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fJo: (...args: unknown[]) => unknown;
  gJo: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hJo: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  mJo: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oo: (...args: unknown[]) => unknown;
  pJo: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  vJo: (...args: unknown[]) => unknown;
  xJo: (...args: unknown[]) => unknown;
  yJo: (...args: unknown[]) => unknown;
};

let peers: BindThreadSummaryPanelSectionExpandedPeers | null = null;

/** Wire bindThreadSummaryPanelSectionExpanded peers once companions land. */
export function setBindThreadSummaryPanelSectionExpandedPeers(next: BindThreadSummaryPanelSectionExpandedPeers): void {
  peers = next;
}

/**
 * Bundle export `$E` / internal `SJo`.
 */
export function bindThreadSummaryPanelSectionExpanded() {
  if (peers == null) {
    throw new Error("bindThreadSummaryPanelSectionExpanded peers are not configured");
  }

  return peers.e(() => {
    dJo = peers.c(), peers.sd(), peers.af(), fJo = peers.r(peers.oo(), 1), peers.Ho(), pJo = peers.r(peers.o(), 1), peers.qR(), peers.ld(), peers.gT(), peers.Ep(), peers.Nk(), peers.Im(), RJ = peers.J(), mJo = 3e4, hJo = `thread-summary-panel-section-expanded-`, gJo = null, _Jo = `flex flex-col gap-0.5 px-3.5`, vJo = {
      height: 0,
      opacity: 0,
      marginTop: 0
    }, yJo = {
      height: `auto`,
      opacity: 1,
      marginTop: 2
    }, bJo = peers.Fm(e => `${peers.hJo}${peers.e}`, peers.gJo), xJo = peers.Da(peers.hT, e => `pending`);
  });
}
