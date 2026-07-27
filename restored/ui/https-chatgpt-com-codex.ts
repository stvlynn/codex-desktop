// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dte`) / export `j_t`.

export type BindHttpsChatgptComCodexPeers = {
  Uo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindHttpsChatgptComCodexPeers | null = null;

/** Wire bindHttpsChatgptComCodex peers once companions land. */
export function setBindHttpsChatgptComCodexPeers(next: BindHttpsChatgptComCodexPeers): void {
  peers = next;
}

/**
 * Bundle export `j_t` / internal `dte`.
 */
export function bindHttpsChatgptComCodex() {
  if (peers == null) {
    throw new Error("bindHttpsChatgptComCodex peers are not configured");
  }

  return peers.e(() => {
    Uo = `https://chatgpt.com/codex`;
  });
}
