// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B6i`) / export `QR`.

export type UseTurnDiffEnrichmentQueryPeers = {
  H6i: (...args: unknown[]) => unknown;
  J6i: (...args: unknown[]) => unknown;
  U6i: (...args: unknown[]) => unknown;
  W6i: (...args: unknown[]) => unknown;
  availableTargets: (...args: unknown[]) => unknown;
  mode: (...args: unknown[]) => unknown;
  preferredTarget: (...args: unknown[]) => unknown;
  targets: (...args: unknown[]) => unknown;
};
let peers: UseTurnDiffEnrichmentQueryPeers | null = null;

/** Wire useTurnDiffEnrichmentQuery peers once companions land. */
export function setUseTurnDiffEnrichmentQueryPeers(
  next: UseTurnDiffEnrichmentQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `QR` / internal `B6i`.
 */
export function useTurnDiffEnrichmentQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useTurnDiffEnrichmentQuery peers are not configured");
  }
  let { turnId, cwd, deferEnrichment = false, hostId, openPath } = e,
    c = {
      cwd,
      hostId,
      isQueryEnabled: deferEnrichment,
      openPath,
      deferEnrichment,
    };
  let { data, isFetching } = peers.W6i(c),
    d = data?.targets,
    f = {
      turnId,
      cwd,
      deferEnrichment,
      hostId,
      openPath,
      targets: d,
    };
  let p = peers.U6i(f),
    m = peers.H6i({
      cwd,
      hostId,
      openPath,
    });
  let h = m,
    g = data?.preferredTarget ?? null,
    _ = data?.targets ?? [];
  let v = data?.availableTargets ?? [];
  let y = data?.mode,
    b = data != null;
  return {
    canLoadTargets: h,
    preferredTarget: g,
    targets: _,
    availableTargets: v,
    mode: y,
    hasLoadedTargets: b,
    isLoadingTargets: isFetching,
    open: p,
  };
}
