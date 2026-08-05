// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BYo`) / export `UE`.

export type BindWorktreeBranchSetupModalPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  RYo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zYo: (...args: unknown[]) => unknown;
};

let peers: BindWorktreeBranchSetupModalPeers | null = null;

/** Wire bindWorktreeBranchSetupModal peers once companions land. */
export function setBindWorktreeBranchSetupModalPeers(
  next: BindWorktreeBranchSetupModalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UE` / internal `BYo`.
 */
export function bindWorktreeBranchSetupModal() {
  if (peers == null) {
    throw new Error("bindWorktreeBranchSetupModal peers are not configured");
  }

  return peers.e(() => {
    ((RYo = peers.c()), peers.$u(), peers.Nw(), (zYo = peers.J()));
  });
}
