// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Peer-window query-cache invalidation broadcaster (bundle `vp` / export `zut`).

export type QueryCacheInvalidationClient = {
  invalidateQueryCache(args: { queryKey: unknown[] }): Promise<void>;
};

export type QueryCacheInvalidationLogger = {
  warning(
    message: string,
    context: {
      safe: Record<string, unknown>;
      sensitive: Record<string, unknown>;
    },
  ): void;
};

let coordinationClient: QueryCacheInvalidationClient | null | undefined;
let logger: QueryCacheInvalidationLogger | null = null;

/** Wire the app-host clientCoordination service (from `gp.clientCoordination`). */
export function setQueryCacheCoordinationClient(client: QueryCacheInvalidationClient | null | undefined): void {
  coordinationClient = client;
}

/** Optional logger sink (bundle uses `Wf.warning`). */
export function setQueryCacheInvalidationLogger(nextLogger: QueryCacheInvalidationLogger): void {
  logger = nextLogger;
}

/**
 * Broadcast a TanStack-style queryKey invalidation to peer clients
 * (bundle `vp` / export `zut`).
 */
export function broadcastQueryCacheInvalidation(queryKey: unknown[]): void {
  void coordinationClient
    ?.invalidateQueryCache({ queryKey: [...queryKey] })
    .catch((error: unknown) => {
      logger?.warning("Failed to broadcast query cache invalidation", {
        safe: {},
        sensitive: { error, queryKey },
      });
    });
}
