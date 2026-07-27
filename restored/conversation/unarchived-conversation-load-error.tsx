// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Enn`) / export `y9`.

export type BindBindUnarchivedConversationLoadErrorPeers = {
  Au: (...args: unknown[]) => unknown;
  Cnn: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Snn: (...args: unknown[]) => unknown;
  Tnn: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  cu: (...args: unknown[]) => unknown;
  dg: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lnn: (...args: unknown[]) => unknown;
  pg: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  wnn: (...args: unknown[]) => unknown;
  xnn: (...args: unknown[]) => unknown;
};

let peers: BindBindUnarchivedConversationLoadErrorPeers | null = null;

/** Wire bindBindUnarchivedConversationLoadError peers once companions land. */
export function setBindBindUnarchivedConversationLoadErrorPeers(next: BindBindUnarchivedConversationLoadErrorPeers): void {
  peers = next;
}

/**
 * Bundle export `y9` / internal `Enn`.
 */
export function bindBindUnarchivedConversationLoadError() {
  if (peers == null) {
    throw new Error("bindBindUnarchivedConversationLoadError peers are not configured");
  }

  return peers.e(() => {
    xnn = peers.r(peers.cu(), 1), peers.Au(), peers.Sl(), peers.dg(), peers.lnn(), peers.Gf(), peers.pg(), Snn = class extends Error {
      constructor(e) {
        super(`Unarchived conversation ${peers.e} could not be loaded`), this.name = `UnarchivedConversationLoadError`;
      }
    }, Cnn = peers.sl({
      message: peers.X()
    }).passthrough(), wnn = peers.sl({
      error: peers.Cnn
    }).passthrough(), Tnn = new Map();
  });
}
