// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CY`) / export `dE`.

export type BindClientLocalThreadPeers = {
  $D: (...args: unknown[]) => unknown;
  $Gi: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  CT: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  KCo: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  LL: (...args: unknown[]) => unknown;
  RE: (...args: unknown[]) => unknown;
  RP: (...args: unknown[]) => unknown;
  U$o: (...args: unknown[]) => unknown;
  UD: (...args: unknown[]) => unknown;
  WBr: (...args: unknown[]) => unknown;
  YGi: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  Zh: (...args: unknown[]) => unknown;
  _Co: (...args: unknown[]) => unknown;
  bxo: (...args: unknown[]) => unknown;
  d1o: (...args: unknown[]) => unknown;
  dwo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hCo: (...args: unknown[]) => unknown;
  jD: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  mwo: (...args: unknown[]) => unknown;
  nL: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oL: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  pCo: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rS: (...args: unknown[]) => unknown;
  two: (...args: unknown[]) => unknown;
  vT: (...args: unknown[]) => unknown;
  vxo: (...args: unknown[]) => unknown;
  yK: (...args: unknown[]) => unknown;
  ywo: (...args: unknown[]) => unknown;
  zj: (...args: unknown[]) => unknown;
};

let peers: BindClientLocalThreadPeers | null = null;

/** Wire bindClientLocalThread peers once companions land. */
export function setBindClientLocalThreadPeers(next: BindClientLocalThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `dE` / internal `CY`.
 */
export function bindClientLocalThread() {
  if (peers == null) {
    throw new Error("bindClientLocalThread peers are not configured");
  }

  return peers.e(() => {
    (peers.Hb(),
      peers.Au(),
      (d1o = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.DD(),
      peers.jD(),
      peers.zj(),
      peers.WBr(),
      peers.UD(),
      peers.nO(),
      peers.$D(),
      peers.fb(),
      peers.vxo(),
      peers.Zh(),
      peers.bxo(),
      peers.RE(),
      peers.pCo(),
      peers.yK(),
      peers.Yf(),
      peers.Kb(),
      peers.RP(),
      peers.LL(),
      peers.hCo(),
      peers.gT(),
      peers.jI(),
      peers.oT(),
      peers.rS(),
      peers._Co(),
      peers.KCo(),
      peers.two(),
      peers.dwo(),
      peers.oL(),
      peers.CT(),
      peers.nL(),
      peers.YGi(),
      peers.mwo(),
      peers.ywo(),
      peers.U$o(),
      peers.vT(),
      peers.$Gi());
  });
}
