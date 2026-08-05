// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jwe`) / export `smt`.

export type BindBindChatgptPeers = {
  Al: (...args: unknown[]) => unknown;
  Awe: (...args: unknown[]) => unknown;
  Dge: (...args: unknown[]) => unknown;
  Dwe: (...args: unknown[]) => unknown;
  Ewe: (...args: unknown[]) => unknown;
  Owe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Twe: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gl: (...args: unknown[]) => unknown;
  kwe: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  ul: (...args: unknown[]) => unknown;
};

let peers: BindBindChatgptPeers | null = null;

/** Wire bindBindChatgpt peers once companions land. */
export function setBindBindChatgptPeers(next: BindBindChatgptPeers): void {
  peers = next;
}

/**
 * Bundle export `smt` / internal `jwe`.
 */
export function bindBindChatgpt() {
  if (peers == null) {
    throw new Error("bindBindChatgpt peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.Dge(),
      (Twe = `::codex-realtime-inline{}`),
      (Ewe =
        /^ {0,3}::codex-inline-vis\{file="([^"]+)"(?:[ \t]+threadId="([^"]+)")?\}[ \t]*$/),
      (Dwe = /^ {0,3}(`{3,}|~{3,})/),
      (Owe = /^\[([A-Z][A-Z0-9_-]*)\][ \t]*/),
      (kwe = /^\[[A-Z][A-Z0-9_-]*$/),
      (Awe = peers.ul([
        peers.sl({
          kind: peers.ml(`chatgpt`),
          threadId: peers.X().trim().min(1),
        }),
        peers.sl({
          kind: peers.ml(`chatgpt`),
          clientThreadId: peers.X().trim().min(1),
        }),
        peers.sl({
          kind: peers.ml(`codex`).optional(),
          threadId: peers.X().trim().min(1),
        }),
        peers.sl({
          kind: peers.ml(`codex`).optional(),
          clientThreadId: peers.gl(
            (e) => typeof peers.e == `string` && peers.Al(peers.e),
          ),
        }),
      ])));
  });
}
