// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GFc`) / export `uf`.

export type BindLocalThread3Peers = {
  DD: (...args: unknown[]) => unknown;
  HFc: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  UFc: (...args: unknown[]) => unknown;
  VFc: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  WFc: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vFs: (...args: unknown[]) => unknown;
};

let peers: BindLocalThread3Peers | null = null;

/** Wire bindLocalThread3 peers once companions land. */
export function setBindLocalThread3Peers(next: BindLocalThread3Peers): void {
  peers = next;
}

/**
 * Bundle export `uf` / internal `GFc`.
 */
export function bindLocalThread3() {
  if (peers == null) {
    throw new Error("bindLocalThread3 peers are not configured");
  }

  return peers.e(() => {
    ((VFc = peers.c()),
      peers.Ho(),
      (HFc = peers.r(peers.o(), 1)),
      peers.DD(),
      peers.vFs(),
      peers.Vf(),
      peers._p(),
      peers.gT(),
      peers.jI(),
      (UFc = peers.J()),
      (WFc = peers.Ma(peers.hT, ({ get: e, scope: t }) =>
        t.value.routeKind === `local-thread` ? peers.e(peers.OI) : null,
      )));
  });
}
