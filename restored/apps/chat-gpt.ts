// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gme`) / export `Fgt`.

export type ChatGPTPeers = {
  El: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Wme: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  vl: (...args: unknown[]) => unknown;
};

let peers: ChatGPTPeers | null = null;

/** Wire chatGPT peers once companions land. */
export function setChatGPTPeers(next: ChatGPTPeers): void {
  peers = next;
}

/**
 * Bundle export `Fgt` / internal `Gme`.
 */
export function chatGPT() {
  if (peers == null) {
    throw new Error("chatGPT peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), El = {
      Codex: `codex`,
      ChatGPT: `chatgpt`
    }, peers.pl([peers.El.Codex, peers.El.ChatGPT]), Wme = peers.vl(e => peers.e === `codex-light` || peers.e === `codex-dark` ? `codex-system` : peers.e, peers.pl([`app-default`, `codex-system`]));
  });
}
