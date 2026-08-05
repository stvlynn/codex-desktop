// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TJs`) / export `Pg`.

export type BindMoveThreadPeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  ND: (...args: unknown[]) => unknown;
  SJs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  wJs: (...args: unknown[]) => unknown;
};

let peers: BindMoveThreadPeers | null = null;

/** Wire bindMoveThread peers once companions land. */
export function setBindMoveThreadPeers(next: BindMoveThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `Pg` / internal `TJs`.
 */
export function bindMoveThread() {
  if (peers == null) {
    throw new Error("bindMoveThread peers are not configured");
  }

  return peers.e(() => {
    ((wJs = peers.c()),
      peers.Ho(),
      peers.Au(),
      peers.$u(),
      peers.SJs(),
      peers.ND());
  });
}
