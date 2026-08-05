// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ejs`) / export `yv`.

export type BindBindForkLocalTaskPeers = {
  $As: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  PXr: (...args: unknown[]) => unknown;
  QAs: (...args: unknown[]) => unknown;
  SA: (...args: unknown[]) => unknown;
  ZAs: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lQr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindForkLocalTaskPeers | null = null;

/** Wire bindBindForkLocalTask peers once companions land. */
export function setBindBindForkLocalTaskPeers(
  next: BindBindForkLocalTaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yv` / internal `ejs`.
 */
export function bindBindForkLocalTask() {
  if (peers == null) {
    throw new Error("bindBindForkLocalTask peers are not configured");
  }

  return peers.e(() => {
    ((ZAs = peers.c()),
      (QAs = peers.r(peers.Mo(), 1)),
      peers.Ho(),
      peers.Au(),
      ($As = peers.r(peers.o(), 1)),
      peers.SA(),
      peers.ap(),
      peers.Gf(),
      peers.lQr(),
      peers.PXr());
  });
}
