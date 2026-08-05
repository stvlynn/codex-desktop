// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jJe`) / export `ift`.

export type KeyframesPeers = {
  AJe: (...args: unknown[]) => unknown;
  DUe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kUe: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: KeyframesPeers | null = null;

/** Wire keyframes peers once companions land. */
export function setKeyframesPeers(next: KeyframesPeers): void {
  peers = next;
}

/**
 * Bundle export `ift` / internal `jJe`.
 */
export function keyframes() {
  if (peers == null) {
    throw new Error("keyframes peers are not configured");
  }

  return peers.e(() => {
    ((AJe = peers.r(peers.o(), 1)), peers.kUe(), peers.DUe());
  });
}
