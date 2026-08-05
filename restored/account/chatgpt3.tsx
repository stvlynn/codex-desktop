// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y6s`) / export `Hm`.

export type Chatgpt3Peers = {
  J: (...args: unknown[]) => unknown;
  J6s: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  q6s: (...args: unknown[]) => unknown;
  uir: (...args: unknown[]) => unknown;
};

let peers: Chatgpt3Peers | null = null;

/** Wire Chatgpt3 peers once companions land. */
export function setChatgpt3Peers(next: Chatgpt3Peers): void {
  peers = next;
}

/**
 * Bundle export `Hm` / internal `Y6s`.
 */
export function Chatgpt3() {
  if (peers == null) {
    throw new Error("Chatgpt3 peers are not configured");
  }
  return peers.e(() => {
    ((q6s = peers.c()), peers.uir(), (J6s = peers.J()));
  });
}
