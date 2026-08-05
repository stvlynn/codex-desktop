// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rac`) / export `Rp`.

export type ParseCachedVacValuePeers = {
  M8s: (...args: unknown[]) => unknown;
  hac: (...args: unknown[]) => unknown;
  vac: (...args: unknown[]) => unknown;
};

let peers: ParseCachedVacValuePeers | null = null;

/** Wire parseCachedVacValue peers once companions land. */
export function setParseCachedVacValuePeers(
  next: ParseCachedVacValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rp` / internal `rac`.
 */
export function parseCachedVacValue(e: unknown) {
  if (peers == null) {
    throw new Error("parseCachedVacValue peers are not configured");
  }

  let t = peers.hac.safeParse(e.get(peers.vac));
  return t.success ? peers.M8s(t.data) : null;
}
