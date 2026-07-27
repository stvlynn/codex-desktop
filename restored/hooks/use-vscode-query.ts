// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `np`) / export `ndt`.

export type UseVscodeQueryPeers = {
  useQuery: (opts: Record<string, unknown>) => unknown;
  useMutation: (opts: Record<string, unknown>) => unknown;
  buildQueryOptions: (
    method: unknown,
    options: Record<string, unknown>,
  ) => Record<string, unknown>;
  buildMutationOptions: (
    method: unknown,
    options: Record<string, unknown>,
  ) => Record<string, unknown>;
};

let peers: UseVscodeQueryPeers | null = null;

/** Wire useVscodeQuery peers once companions land. */
export function setUseVscodeQueryPeers(next: UseVscodeQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `ndt` / internal `np`.
 * VS Code host query with cache key / interval options.
 */
export type VscodeQueryConfig = Record<string, unknown>;
export type VscodeQueryOptions = {
  params?: unknown;
  queryConfig?: VscodeQueryConfig;
  placeholderData?: unknown;
  source?: unknown;
};

export function useVscodeQuery(
  method: unknown,
  options?: VscodeQueryOptions,
): unknown {
  if (peers == null) {
    throw new Error("UseVscodeQuery peers are not configured");
  }
  const opts = options ?? {};
  return peers.useQuery(peers.buildQueryOptions(method, opts));
}

export function useVscodeMutation(
  method: unknown,
  options?: Record<string, unknown>,
): unknown {
  if (peers == null) {
    throw new Error("UseVscodeQuery peers are not configured");
  }
  return peers.useMutation(peers.buildMutationOptions(method, options ?? {}));
}

export function bindUseVscodeQuery(_next: unknown): void {}
export function bindUseVscodeMutation(_next: unknown): void {}
