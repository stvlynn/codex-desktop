// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mfs`) / export `oS`.

export type ComputerUseFrontmostWindowPeers = {
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  pfs: (...args: unknown[]) => unknown;
};

let peers: ComputerUseFrontmostWindowPeers | null = null;

/** Wire computerUseFrontmostWindow peers once companions land. */
export function setComputerUseFrontmostWindowPeers(next: ComputerUseFrontmostWindowPeers): void {
  peers = next;
}

/**
 * Bundle export `oS` / internal `mfs`.
 */
export function computerUseFrontmostWindow() {
  if (peers == null) {
    throw new Error("computerUseFrontmostWindow peers are not configured");
  }

  return peers.e(() => {
    pfs = peers.c(), peers.Ho(), peers.DD();
  });
}
