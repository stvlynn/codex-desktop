// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tAr`) / export `O$`.

export type DeferredOPeers = {
  $kr: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jkr: (...args: unknown[]) => unknown;
  ND: (...args: unknown[]) => unknown;
  Qkr: (...args: unknown[]) => unknown;
  Wkr: (...args: unknown[]) => unknown;
  Xkr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eAr: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  lp: (...args: unknown[]) => unknown;
  rOr: (...args: unknown[]) => unknown;
};

let peers: DeferredOPeers | null = null;

/** Wire deferredO peers once companions land. */
export function setDeferredOPeers(next: DeferredOPeers): void {
  peers = next;
}

/**
 * Bundle export `O$` / internal `tAr`.
 */
export function deferredO() {
  if (peers == null) {
    throw new Error("deferredO peers are not configured");
  }

  return peers.e(() => {
    ((Qkr = peers.c()),
      peers.Ho(),
      peers.Au(),
      peers.$u(),
      peers.lp(),
      peers.ND(),
      peers.ed(),
      peers.rOr(),
      peers.Jkr(),
      peers.Wkr(),
      peers.Xkr(),
      ($kr = peers.J()),
      (eAr = {
        color: `black`,
        marker: {
          kind: `icon`,
          icon: `folder`,
        },
      }));
  });
}
