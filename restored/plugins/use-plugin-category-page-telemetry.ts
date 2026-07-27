// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `c3i`) / export `Cz`.

export type UsePluginCategoryPageTelemetryPeers = {
  useRef: <T>(init: T) => { current: T };
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  trackPage: (payload: Record<string, unknown>) => void;
  trackSearch: (payload: Record<string, unknown>) => void;
  unspecifiedPageName: unknown;
};

let peers: UsePluginCategoryPageTelemetryPeers | null = null;

/** Wire usePluginCategoryPageTelemetry peers once companions land. */
export function setUsePluginCategoryPageTelemetryPeers(
  next: UsePluginCategoryPageTelemetryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cz` / internal `c3i`.
 * Emit plugin category page telemetry on mount/search changes.
 */
export function usePluginCategoryPageTelemetry(args: {
  scope?: unknown;
  categoryId?: unknown;
  enabled?: boolean;
  entrypoint?: unknown;
  pageName?: unknown;
  searchQuery?: string;
  source?: unknown;
}): void {
  if (peers == null) {
    throw new Error("UsePluginCategoryPageTelemetry peers are not configured");
  }
  const enabled = args.enabled ?? true;
  const seen = peers.useRef(false);
  const lastQuery = peers.useRef<string | null>(null);
  peers.useEffect(() => {
    if (!enabled || seen.current) return;
    seen.current = true;
    peers!.trackPage({
      scope: args.scope,
      categoryId: args.categoryId,
      entrypoint: args.entrypoint,
      pageName: args.pageName ?? peers!.unspecifiedPageName,
      source: args.source,
    });
  }, [
    enabled,
    args.scope,
    args.categoryId,
    args.entrypoint,
    args.pageName,
    args.source,
  ]);
  peers.useEffect(() => {
    if (!enabled) return;
    const query = args.searchQuery ?? "";
    if (lastQuery.current === query) return;
    lastQuery.current = query;
    peers!.trackSearch({
      scope: args.scope,
      categoryId: args.categoryId,
      searchQuery: query,
      source: args.source,
    });
  }, [enabled, args.searchQuery, args.scope, args.categoryId, args.source]);
}
