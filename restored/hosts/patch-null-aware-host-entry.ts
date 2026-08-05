// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g0r`) / export `cJ`.

export type PatchNullAwareHostEntryPeers = {
  A$r: (...args: unknown[]) => unknown;
  N$r: (...args: unknown[]) => unknown;
  O0r: (...args: unknown[]) => unknown;
};

let peers: PatchNullAwareHostEntryPeers | null = null;

/** Wire patchNullAwareHostEntry peers once companions land. */
export function setPatchNullAwareHostEntryPeers(
  next: PatchNullAwareHostEntryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cJ` / internal `g0r`.
 */
export function patchNullAwareHostEntry(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("patchNullAwareHostEntry peers are not configured");
  }

  (t == null ? peers.A$r(e) : peers.N$r(e, t, n), peers.O0r(e, n));
}
