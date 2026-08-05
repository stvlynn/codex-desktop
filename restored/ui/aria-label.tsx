// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QVl`) / export `go`.

export type BindBindAriaLabelPeers = {
  $u: (...args: unknown[]) => unknown;
  CM: (...args: unknown[]) => unknown;
  Dzl: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  JVl: (...args: unknown[]) => unknown;
  OK: (...args: unknown[]) => unknown;
  XVl: (...args: unknown[]) => unknown;
  YB: (...args: unknown[]) => unknown;
  ZVl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gR: (...args: unknown[]) => unknown;
  vzl: (...args: unknown[]) => unknown;
  wRl: (...args: unknown[]) => unknown;
  x_: (...args: unknown[]) => unknown;
};

let peers: BindBindAriaLabelPeers | null = null;

/** Wire bindBindAriaLabel peers once companions land. */
export function setBindBindAriaLabelPeers(next: BindBindAriaLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `go` / internal `QVl`.
 */
export function bindBindAriaLabel() {
  if (peers == null) {
    throw new Error("bindBindAriaLabel peers are not configured");
  }

  return peers.e(() => {
    ((XVl = peers.c()),
      peers.Ho(),
      peers.$u(),
      peers.YB(),
      peers.CM(),
      peers.x_(),
      peers.OK(),
      peers.ed(),
      peers.JVl(),
      peers.gR(),
      peers.wRl(),
      peers.vzl(),
      peers.Dzl(),
      (ZVl = peers.J()));
  });
}
