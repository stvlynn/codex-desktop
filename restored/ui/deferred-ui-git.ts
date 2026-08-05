// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iFt`) / export `Git`.

export type BindDeferredUiGitPeers = {
  $Pt: (...args: unknown[]) => unknown;
  GPt: (...args: unknown[]) => unknown;
  JPt: (...args: unknown[]) => unknown;
  KPt: (...args: unknown[]) => unknown;
  QPt: (...args: unknown[]) => unknown;
  UPt: (...args: unknown[]) => unknown;
  WPt: (...args: unknown[]) => unknown;
  XPt: (...args: unknown[]) => unknown;
  YPt: (...args: unknown[]) => unknown;
  ZPt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eFt: (...args: unknown[]) => unknown;
  hv: (...args: unknown[]) => unknown;
  jPt: (...args: unknown[]) => unknown;
  nFt: (...args: unknown[]) => unknown;
  qPt: (...args: unknown[]) => unknown;
  rFt: (...args: unknown[]) => unknown;
  tFt: (...args: unknown[]) => unknown;
  xv: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGitPeers | null = null;

/** Wire bindDeferredUiGit peers once companions land. */
export function setBindDeferredUiGitPeers(next: BindDeferredUiGitPeers): void {
  peers = next;
}

/**
 * Bundle export `Git` / internal `iFt`.
 */
export function bindDeferredUiGit() {
  if (peers == null) {
    throw new Error("bindDeferredUiGit peers are not configured");
  }

  return peers.e(() => {
    (peers.hv(),
      peers.jPt(),
      (GPt = peers.UPt(0)),
      (KPt = peers.UPt(1)),
      (qPt = peers.UPt(2)),
      (JPt = peers.UPt(3)),
      (xv = peers.UPt(4)),
      (YPt = peers.UPt(5)),
      (XPt = peers.UPt(6)),
      peers.GPt.range,
      peers.KPt.range,
      peers.qPt.range,
      peers.JPt.range,
      peers.xv.range,
      peers.YPt.range,
      peers.XPt.range,
      (ZPt = peers.WPt(0)),
      (QPt = peers.WPt(1)),
      ($Pt = peers.WPt(2)),
      (eFt = peers.WPt(3)),
      (tFt = peers.WPt(4)),
      (nFt = peers.WPt(5)),
      (rFt = peers.WPt(6)),
      peers.ZPt.range,
      peers.QPt.range,
      peers.$Pt.range,
      peers.eFt.range,
      peers.tFt.range,
      peers.nFt.range,
      peers.rFt.range);
  });
}
