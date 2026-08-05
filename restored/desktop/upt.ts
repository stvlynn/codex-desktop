// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zTe`) / export `Upt`.

export type BindUptPeers = {
  Il: (...args: unknown[]) => unknown;
  LTe: (...args: unknown[]) => unknown;
  RTe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindUptPeers | null = null;

/** Wire bindUpt peers once companions land. */
export function setBindUptPeers(next: BindUptPeers): void {
  peers = next;
}

/**
 * Bundle export `Upt` / internal `zTe`.
 */
export function bindUpt() {
  if (peers == null) {
    throw new Error("bindUpt peers are not configured");
  }

  return peers.e(() => {
    ((LTe = peers.r(peers.Il())), (RTe = `/.codex`));
  });
}
