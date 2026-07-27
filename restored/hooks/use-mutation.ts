// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `qt`) / export `_vt`.

export type UseMutationPeers = {
  useQueryClient: (queryClient?: unknown) => unknown;
  useState: <T>(init: () => T) => [T, (next: T) => void];
  useEffect: (effect: () => void, deps: unknown[]) => void;
  useSyncExternalStore: (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => unknown,
    getServerSnapshot?: () => unknown,
  ) => unknown;
  useCallback: <T extends (...args: never[]) => unknown>(
    fn: T,
    deps: unknown[],
  ) => T;
  MutationObserver: new (
    client: unknown,
    options: unknown,
  ) => {
    setOptions: (options: unknown) => void;
    subscribe: (listener: () => void) => () => void;
    getCurrentResult: () => unknown;
    mutate: (variables: unknown, options?: unknown) => unknown;
  };
  batchCalls: (listener: () => void) => () => void;
};

let peers: UseMutationPeers | null = null;

/** Wire useMutation peers once companions land. */
export function setUseMutationPeers(next: UseMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `_vt` / internal `qt`.
 * TanStack-style mutation observer hook over QueryClient.
 */
export type UseMutationResult = {
  mutate: (variables?: unknown, options?: unknown) => unknown;
  [key: string]: unknown;
};

export function useMutation(
  options: unknown,
  queryClient?: unknown,
): UseMutationResult {
  if (peers == null) {
    throw new Error("UseMutation peers are not configured");
  }
  const client = peers.useQueryClient(queryClient);
  const [observer] = peers.useState(
    () => new peers!.MutationObserver(client, options),
  );
  peers.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = peers.useSyncExternalStore(
    peers.useCallback(
      (onStoreChange) => observer.subscribe(peers!.batchCalls(onStoreChange)),
      [observer],
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult(),
  ) as Record<string, unknown>;
  const mutate = peers.useCallback(
    (variables?: unknown, mutateOptions?: unknown) =>
      observer.mutate(variables, mutateOptions),
    [observer],
  );
  return { ...result, mutate };
}
