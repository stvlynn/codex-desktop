// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `JHc`) / export `Nd`.

export type ResolvedAppLookup =
  | { kind: "appId"; appId: string }
  | { kind: "displayName"; displayName: string }
  | null
  | undefined;

export type UseResolvedAppByIdOrDisplayNamePeers = {
  useAppById: (appId: string | null) => { data?: unknown };
  useAppByDisplayName: (displayName: string | null) => { data?: unknown };
};

let peers: UseResolvedAppByIdOrDisplayNamePeers | null = null;

/** Wire app lookup hooks once companions land. */
export function setUseResolvedAppByIdOrDisplayNamePeers(
  next: UseResolvedAppByIdOrDisplayNamePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nd` / internal `JHc`.
 * Resolve an app by id or display name query.
 */
export function useResolvedAppByIdOrDisplayName(
  lookup: ResolvedAppLookup,
): unknown {
  if (peers == null) {
    throw new Error("UseResolvedAppByIdOrDisplayName peers are not configured");
  }
  const byId = peers.useAppById(lookup?.kind === "appId" ? lookup.appId : null);
  const byName = peers.useAppByDisplayName(
    lookup?.kind === "displayName" ? lookup.displayName : null,
  );
  return byId.data ?? byName.data ?? null;
}
