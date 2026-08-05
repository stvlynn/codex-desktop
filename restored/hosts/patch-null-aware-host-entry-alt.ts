// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m0r`) / export `uJ`.

export type PatchNullAwareHostEntryAltPeers = {
  P$r: (...args: unknown[]) => unknown;
  h0r: (...args: unknown[]) => unknown;
  k$r: (...args: unknown[]) => unknown;
};

let peers: PatchNullAwareHostEntryAltPeers | null = null;

/** Wire patchNullAwareHostEntryAlt peers once companions land. */
export function setPatchNullAwareHostEntryAltPeers(
  next: PatchNullAwareHostEntryAltPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uJ` / internal `m0r`.
 */
export function patchNullAwareHostEntryAlt(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("patchNullAwareHostEntryAlt peers are not configured");
  }

  (t == null ? peers.k$r(e, n) : peers.P$r(e, t, n), peers.h0r(e, n));
}
