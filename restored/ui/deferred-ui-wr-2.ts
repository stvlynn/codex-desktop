// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rz`) / export `WR`.

export type BindDeferredUiWRPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  Iz: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Lqr: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
  P6i: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  SA: (...args: unknown[]) => unknown;
  T6i: (...args: unknown[]) => unknown;
  U_: (...args: unknown[]) => unknown;
  Um: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  W2i: (...args: unknown[]) => unknown;
  X6i: (...args: unknown[]) => unknown;
  Y2i: (...args: unknown[]) => unknown;
  _8i: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  h4i: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  k6i: (...args: unknown[]) => unknown;
  ld: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  o8i: (...args: unknown[]) => unknown;
  pk: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  v8i: (...args: unknown[]) => unknown;
  y8i: (...args: unknown[]) => unknown;
  zL: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWRPeers | null = null;

/** Wire bindDeferredUiWR peers once companions land. */
export function setBindDeferredUiWRPeers(next: BindDeferredUiWRPeers): void {
  peers = next;
}

/**
 * Bundle export `WR` / internal `Rz`.
 */
export function bindDeferredUiWR() {
  if (peers == null) {
    throw new Error("bindDeferredUiWR peers are not configured");
  }

  return peers.e(() => {
    ((Iz = peers.c()),
      (_8i = peers.r(peers.Il(), 1)),
      peers.Hb(),
      peers.Ho(),
      peers.Au(),
      (v8i = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.W2i(),
      peers.Pp(),
      peers.Y2i(),
      peers.qR(),
      peers.fb(),
      peers.ih(),
      peers.$m(),
      peers.h4i(),
      peers.T6i(),
      peers.Lqr(),
      peers.SA(),
      peers.k6i(),
      peers.P6i(),
      peers.Vm(),
      peers.Um(),
      peers.ld(),
      peers.pk(),
      peers.zL(),
      peers.X6i(),
      peers.ed(),
      peers.U_(),
      peers.K_(),
      peers.jf(),
      peers.ap(),
      peers.o8i(),
      (Lz = peers.J()),
      (y8i = 150));
  });
}
