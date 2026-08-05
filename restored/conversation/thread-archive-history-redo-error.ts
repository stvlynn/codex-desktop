// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QSo`) / export `eA`.

export type BindThreadArchiveHistoryRedoErrorPeers = {
  ASo: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  HA: (...args: unknown[]) => unknown;
  IA: (...args: unknown[]) => unknown;
  NSo: (...args: unknown[]) => unknown;
  TK: (...args: unknown[]) => unknown;
  ZA: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
};

let peers: BindThreadArchiveHistoryRedoErrorPeers | null = null;

/** Wire bindThreadArchiveHistoryRedoError peers once companions land. */
export function setBindThreadArchiveHistoryRedoErrorPeers(
  next: BindThreadArchiveHistoryRedoErrorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eA` / internal `QSo`.
 */
export function bindThreadArchiveHistoryRedoError() {
  if (peers == null) {
    throw new Error(
      "bindThreadArchiveHistoryRedoError peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Au(),
      peers.ASo(),
      peers.IA(),
      peers.oT(),
      peers.NSo(),
      peers.ZA(),
      peers.HA(),
      peers.TK(),
      peers.Gf());
  });
}
