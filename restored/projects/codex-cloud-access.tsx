// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x2r`) / export `Gq`.

export type BindBindCodexCloudAccessPeers = {
  Ap: (...args: unknown[]) => unknown;
  DN: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qf: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  _2r: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  b2r: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  v2r: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
  y2r: (...args: unknown[]) => unknown;
};

let peers: BindBindCodexCloudAccessPeers | null = null;

/** Wire bindBindCodexCloudAccess peers once companions land. */
export function setBindBindCodexCloudAccessPeers(
  next: BindBindCodexCloudAccessPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gq` / internal `x2r`.
 */
export function bindBindCodexCloudAccess() {
  if (peers == null) {
    throw new Error("bindBindCodexCloudAccess peers are not configured");
  }

  return peers.e(() => {
    ((_2r = peers.c()),
      peers.Qt(),
      peers.fr(),
      peers.Ho(),
      (v2r = peers.r(peers.o(), 1)),
      peers.aN(),
      peers.ed(),
      peers.Fh(),
      peers.Gf(),
      peers.Ap(),
      peers.Uf(),
      peers.Wh(),
      peers.qx(),
      peers.Qf(),
      peers.xM(),
      peers.DN(),
      (y2r = peers.kp(`codexCloudAccess`, null)),
      (b2r = peers.Ta(peers.Q, () => null)));
  });
}
