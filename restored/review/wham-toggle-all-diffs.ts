// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DBo`) / export `XD`.

export type BindWhamToggleAllDiffsPeers = {
  EBo: (...args: unknown[]) => unknown;
  TBo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  wBo: (...args: unknown[]) => unknown;
};

let peers: BindWhamToggleAllDiffsPeers | null = null;

/** Wire bindWhamToggleAllDiffs peers once companions land. */
export function setBindWhamToggleAllDiffsPeers(
  next: BindWhamToggleAllDiffsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `XD` / internal `DBo`.
 */
export function bindWhamToggleAllDiffs() {
  if (peers == null) {
    throw new Error("bindWhamToggleAllDiffs peers are not configured");
  }

  return peers.e(() => {
    ((wBo = peers.c()),
      (TBo = peers.r(peers.o(), 1)),
      (EBo = `wham-toggle-all-diffs`));
  });
}
