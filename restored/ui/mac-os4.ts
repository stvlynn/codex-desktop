// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dk`) / export `Y1`.

export type MacOS4Peers = {
  $xr: (...args: unknown[]) => unknown;
  Gw: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  tSr: (...args: unknown[]) => unknown;
};

let peers: MacOS4Peers | null = null;

/** Wire macOS4 peers once companions land. */
export function setMacOS4Peers(next: MacOS4Peers): void {
  peers = next;
}

/**
 * Bundle export `Y1` / internal `dk`.
 */
export function macOS4() {
  if (peers == null) {
    throw new Error("macOS4 peers are not configured");
  }

  return peers.e(() => {
    ((tSr = peers.c()), peers.$xr(), peers.Gw());
  });
}
