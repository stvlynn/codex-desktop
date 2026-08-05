// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XN`) / export `mK`.

export type BindBindCODEXPeers = {
  Gf: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  a7r: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  i7r: (...args: unknown[]) => unknown;
  o7r: (...args: unknown[]) => unknown;
  s7r: (...args: unknown[]) => unknown;
};

let peers: BindBindCODEXPeers | null = null;

/** Wire bindBindCODEX peers once companions land. */
export function setBindBindCODEXPeers(next: BindBindCODEXPeers): void {
  peers = next;
}

/**
 * Bundle export `mK` / internal `XN`.
 */
export function bindBindCODEX() {
  if (peers == null) {
    throw new Error("bindBindCODEX peers are not configured");
  }

  return peers.e(() => {
    (peers.Gf(),
      peers.Uf(),
      peers.Wh(),
      peers.ap(),
      (i7r = `OAI-Product-Sku`),
      (a7r = `CODEX`),
      (o7r = `codex`),
      (s7r = [`mcp-settings`, `app-connect`]));
  });
}
