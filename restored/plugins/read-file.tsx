// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Khu`) / export `Ot`.

export type BindBindReadFilePeers = {
  Ghu: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindReadFilePeers | null = null;

/** Wire bindBindReadFile peers once companions land. */
export function setBindBindReadFilePeers(next: BindBindReadFilePeers): void {
  peers = next;
}

/**
 * Bundle export `Ot` / internal `Khu`.
 */
export function bindBindReadFile() {
  if (peers == null) {
    throw new Error("bindBindReadFile peers are not configured");
  }

  return peers.e(() => {
    ((Ghu = peers.c()), peers.Qt(), peers.Uf(), peers.ap());
  });
}
