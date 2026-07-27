// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pot`) / export `Xst`.

export type BindSubAgent2Peers = {
  Au: (...args: unknown[]) => unknown;
  Not: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindSubAgent2Peers | null = null;

/** Wire bindSubAgent2 peers once companions land. */
export function setBindSubAgent2Peers(next: BindSubAgent2Peers): void {
  peers = next;
}

/**
 * Bundle export `Xst` / internal `Pot`.
 */
export function bindSubAgent2() {
  if (peers == null) {
    throw new Error("bindSubAgent2 peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), Not = [`final`];
  });
}
