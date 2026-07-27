// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `Tt`) / export `Dvt`.

export type UseDvtBindablePeers = {
  useQueryClient: (queryClient?: unknown) => {
    defaultQueryOptions: (opts: unknown) => Record<string, unknown>;
  };
  useIsRestoring: () => boolean;
  useQueryCacheNotify: () => unknown;
  useMemo: <T>(factory: () => T, deps: unknown[]) => T;
  useState: <T>(init: () => T) => [T, (next: T) => void];
  useSyncExternalStore: (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => unknown,
  ) => unknown;
  prepareOptions: (opts: Record<string, unknown>) => void;
  track: (opts: Record<string, unknown>, notify: unknown) => void;
  flush: (notify: unknown) => void;
  QueriesObserver: new (
    client: unknown,
    options: unknown[],
  ) => {
    subscribe: (listener: () => void) => () => void;
    getCurrentResult: () => unknown;
    setQueries: (options: unknown[]) => void;
  };
};

let peers: UseDvtBindablePeers | null = null;

/** Wire useDvtBindable peers once companions land. */
export function setUseDvtBindablePeers(next: UseDvtBindablePeers): void {
  peers = next;
}

/**
 * Bundle export `Dvt` / internal `Tt`.
 * TanStack useQueries-style multi-query observer hook.
 */
export function useDvtBindable(
  options: { queries: unknown[] } & Record<string, unknown>,
  queryClient?: unknown,
): unknown {
  if (peers == null) {
    throw new Error("UseDvtBindable peers are not configured");
  }
  const { queries, ...rest } = options;
  const client = peers.useQueryClient(queryClient);
  const isRestoring = peers.useIsRestoring();
  const notify = peers.useQueryCacheNotify();
  const defaulted = peers.useMemo(
    () =>
      queries.map((query) => {
        const opts = client.defaultQueryOptions(query);
        opts._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
        return opts;
      }),
    [queries, client, isRestoring],
  );
  defaulted.forEach((opts) => {
    peers!.prepareOptions(opts);
    peers!.track(opts, notify);
  });
  peers.flush(notify);
  const [observer] = peers.useState(
    () => new peers!.QueriesObserver(client, defaulted),
  );
  peers.useMemo(() => {
    observer.setQueries(defaulted);
    return null;
  }, [observer, defaulted, rest]);
  return peers.useSyncExternalStore(
    (onStoreChange) => observer.subscribe(onStoreChange),
    () => observer.getCurrentResult(),
  );
}
