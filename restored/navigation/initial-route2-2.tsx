// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lia`) / export `PL`.

export type BindBindInitialRoute2Peers = {
  cia: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sia: (...args: unknown[]) => unknown;
};

let peers: BindBindInitialRoute2Peers | null = null;

/** Wire bindBindInitialRoute2 peers once companions land. */
export function setBindBindInitialRoute2Peers(next: BindBindInitialRoute2Peers): void {
  peers = next;
}

/**
 * Bundle export `PL` / internal `lia`.
 */
export function bindBindInitialRoute2() {
  if (peers == null) {
    throw new Error("bindBindInitialRoute2 peers are not configured");
  }

  return peers.e(() => {
    cia = peers.sia();
  });
}
