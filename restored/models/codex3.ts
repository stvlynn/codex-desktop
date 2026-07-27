// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `q_s`) / export `Wb`.

export type Codex3Peers = {
  K_s: (...args: unknown[]) => unknown;
  NZ: (...args: unknown[]) => unknown;
  PZ: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  k_s: (...args: unknown[]) => unknown;
};

let peers: Codex3Peers | null = null;

/** Wire codex3 peers once companions land. */
export function setCodex3Peers(next: Codex3Peers): void {
  peers = next;
}

/**
 * Bundle export `Wb` / internal `q_s`.
 */
export function codex3() {
  if (peers == null) {
    throw new Error("codex3 peers are not configured");
  }

  return peers.e(() => {
    peers.NZ(), peers.PZ(), peers.k_s(), K_s = `codex`;
  });
}
