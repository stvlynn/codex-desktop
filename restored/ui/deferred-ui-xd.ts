// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gKo`) / export `xD`.

export type BindDeferredUiXDPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Bk: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  EJ: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  MJ: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  PR: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  WHo: (...args: unknown[]) => unknown;
  Wq: (...args: unknown[]) => unknown;
  XH: (...args: unknown[]) => unknown;
  aP: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eA: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fUo: (...args: unknown[]) => unknown;
  fWo: (...args: unknown[]) => unknown;
  hKo: (...args: unknown[]) => unknown;
  iUo: (...args: unknown[]) => unknown;
  lKo: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  mKo: (...args: unknown[]) => unknown;
  mh: (...args: unknown[]) => unknown;
  nN: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oJ: (...args: unknown[]) => unknown;
  oKo: (...args: unknown[]) => unknown;
  oUo: (...args: unknown[]) => unknown;
  qHo: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  qm: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  tKo: (...args: unknown[]) => unknown;
  vJ: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiXDPeers | null = null;

/** Wire bindDeferredUiXD peers once companions land. */
export function setBindDeferredUiXDPeers(next: BindDeferredUiXDPeers): void {
  peers = next;
}

/**
 * Bundle export `xD` / internal `gKo`.
 */
export function bindDeferredUiXD() {
  if (peers == null) {
    throw new Error("bindDeferredUiXD peers are not configured");
  }

  return peers.e(() => {
    ((mKo = peers.c()),
      peers.XH(),
      peers.Ho(),
      peers.Au(),
      (hKo = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.WHo(),
      peers.DD(),
      peers.PR(),
      peers.eA(),
      peers.qR(),
      peers.qm(),
      peers.Mp(),
      peers.$m(),
      peers.Wq(),
      peers.qHo(),
      peers.oJ(),
      peers.aP(),
      peers.Vm(),
      peers.ld(),
      peers.iUo(),
      peers.mh(),
      peers.oUo(),
      peers.Bk(),
      peers.ed(),
      peers.wp(),
      peers.nN(),
      peers.fUo(),
      peers.fWo(),
      peers.vJ(),
      peers.EJ(),
      peers.tKo(),
      peers.oKo(),
      peers.lKo(),
      (MJ = peers.J()));
  });
}
