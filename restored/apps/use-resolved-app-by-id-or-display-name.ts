// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JHc`) / export `Nd`.

export type UseResolvedAppByIdOrDisplayNamePeers = {
  Fo: (...args: unknown[]) => unknown;
  XHc: (...args: unknown[]) => unknown;
  YHc: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
};

let peers: UseResolvedAppByIdOrDisplayNamePeers | null = null;

/** Wire useResolvedAppByIdOrDisplayName peers once companions land. */
export function setUseResolvedAppByIdOrDisplayNamePeers(
  next: UseResolvedAppByIdOrDisplayNamePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nd` / internal `JHc`.
 */
export function useResolvedAppByIdOrDisplayName(e: unknown) {
  if (peers == null) {
    throw new Error("useResolvedAppByIdOrDisplayName peers are not configured");
  }

  let { data: t } = peers.Fo(peers.YHc, e?.kind === `appId` ? e.appId : null),
    { data: n } = peers.Fo(
      peers.XHc,
      e?.kind === `displayName` ? e.displayName : null,
    );
  return t ?? n ?? null;
}
