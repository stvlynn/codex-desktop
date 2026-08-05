// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jDe`) / export `fpt`.

export type BindBindSubAgentThreadSpawnPeers = {
  ADe: (...args: unknown[]) => unknown;
  DDe: (...args: unknown[]) => unknown;
  ODe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kDe: (...args: unknown[]) => unknown;
};

let peers: BindBindSubAgentThreadSpawnPeers | null = null;

/** Wire bindBindSubAgentThreadSpawn peers once companions land. */
export function setBindBindSubAgentThreadSpawnPeers(
  next: BindBindSubAgentThreadSpawnPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fpt` / internal `jDe`.
 */
export function bindBindSubAgentThreadSpawn() {
  if (peers == null) {
    throw new Error("bindBindSubAgentThreadSpawn peers are not configured");
  }

  return peers.e(() => {
    ((DDe = []),
      (ODe = [`subAgentThreadSpawn`]),
      (kDe = `composer_link`),
      (ADe = `pull_request_fix_automation`));
  });
}
