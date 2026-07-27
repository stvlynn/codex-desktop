// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rd`) / export `Mft`.

export type MftPeers = {
  _Me: (...args: unknown[]) => unknown;
};

let peers: MftPeers | null = null;

/** Wire Mft peers once companions land. */
export function setMftPeers(next: MftPeers): void {
  peers = next;
}

/**
 * Bundle export `Mft` / internal `rd`.
 */
export function Mft(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("Mft peers are not configured");
  }

  peers._Me().setItem(e, t);
}
