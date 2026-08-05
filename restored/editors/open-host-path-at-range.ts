// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uJr`) / export `uX`.

export type OpenHostPathAtRangePeers = {
  OM: (...args: unknown[]) => unknown;
  column: (...args: unknown[]) => unknown;
  dJr: (...args: unknown[]) => unknown;
  line: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
};

let peers: OpenHostPathAtRangePeers | null = null;

/** Wire openHostPathAtRange peers once companions land. */
export function setOpenHostPathAtRangePeers(
  next: OpenHostPathAtRangePeers,
): void {
  peers = next;
}

/**
 * Bundle export `uX` / internal `uJr`.
 */
async function openHostPathAtRange(e) {
  if (peers == null) {
    throw new Error("openHostPathAtRange peers are not configured");
  }

  peers.OM({
    path: e.path,
    cwd: null,
    hostId: e.hostId,
    target: await peers.dJr(e.hostId),
    line: e.range?.start.line,
    column: e.range?.start.column,
  });
}
