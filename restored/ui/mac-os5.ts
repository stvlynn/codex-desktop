// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$xr`) / export `Z1`.

export type MacOS5Peers = {
  Ho: (...args: unknown[]) => unknown;
  Qxr: (...args: unknown[]) => unknown;
  XGn: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: MacOS5Peers | null = null;

/** Wire macOS5 peers once companions land. */
export function setMacOS5Peers(next: MacOS5Peers): void {
  peers = next;
}

/**
 * Bundle export `Z1` / internal `$xr`.
 */
export function macOS5() {
  if (peers == null) {
    throw new Error("macOS5 peers are not configured");
  }

  return peers.e(() => {
    ((Qxr = peers.c()), peers.Ho(), peers.XGn());
  });
}
