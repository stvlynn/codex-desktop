// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yKo`) / export `vD`.

export type DataTooltipOverflowTargetPeers = {
  Ho: (...args: unknown[]) => unknown;
  XHo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  vKo: (...args: unknown[]) => unknown;
};

let peers: DataTooltipOverflowTargetPeers | null = null;

/** Wire dataTooltipOverflowTarget peers once companions land. */
export function setDataTooltipOverflowTargetPeers(next: DataTooltipOverflowTargetPeers): void {
  peers = next;
}

/**
 * Bundle export `vD` / internal `yKo`.
 */
export function dataTooltipOverflowTarget() {
  if (peers == null) {
    throw new Error("dataTooltipOverflowTarget peers are not configured");
  }

  return peers.e(() => {
    vKo = peers.c(), peers.Ho(), peers.XHo();
  });
}
