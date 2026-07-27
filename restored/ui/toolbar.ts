// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kFr`) / export `HZ`.

export type ToolbarPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  DFr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  OFr: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  UD: (...args: unknown[]) => unknown;
  Uk: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dj: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hj: (...args: unknown[]) => unknown;
  wFr: (...args: unknown[]) => unknown;
  xFr: (...args: unknown[]) => unknown;
};

let peers: ToolbarPeers | null = null;

/** Wire toolbar peers once companions land. */
export function setToolbarPeers(next: ToolbarPeers): void {
  peers = next;
}

/**
 * Bundle export `HZ` / internal `kFr`.
 */
export function toolbar() {
  if (peers == null) {
    throw new Error("toolbar peers are not configured");
  }

  return peers.e(() => {
    DFr = peers.c(), peers.Ho(), peers.$u(), peers.Uk(), peers.dj(), peers.hj(), peers.Pp(), peers.$m(), peers.xFr(), peers.wFr(), peers.gT(), peers.UD(), OFr = peers.J();
  });
}
