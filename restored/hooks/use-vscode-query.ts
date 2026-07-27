// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `np`) / export `ndt`.

export type UseVscodeQueryPeers = {
  $f: (...args: unknown[]) => unknown;
  FZe: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  IZe: (...args: unknown[]) => unknown;
  Zf: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  select: (...args: unknown[]) => unknown;
};
let peers: UseVscodeQueryPeers | null = null;

/** Wire useVscodeQuery peers once companions land. */
export function setUseVscodeQueryPeers(next: UseVscodeQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `ndt` / internal `np`.
 */
export function useVscodeQuery(...e: unknown) {
  if (peers == null) {
    throw new Error("useVscodeQuery peers are not configured");
  }
  let [n, r] = e,
    i = r ?? {};
  let { params, queryConfig = {}, placeholderData, source } = i;
  let {
      cacheKey,
      intervalMs,
      refetchIntervalInBackground,
      enabled,
      gcTime,
      refetchOnMount,
      refetchOnWindowFocus,
      staleTime: _,
      structuralSharing,
      initialData,
    } = queryConfig,
    b = _ ?? peers.Hf.FIVE_SECONDS,
    x = peers.$f(n, params, cacheKey);
  let S = async () => {
    return (
      await peers.Zf.getInstance().post(
        `vscode://codex/${n}`,
        JSON.stringify(params),
        peers.FZe(source),
      )
    ).body;
  };
  let C = r?.select,
    w;
  return (
    (w = {
      queryKey: x,
      queryFn: S,
      select: C,
      refetchInterval: intervalMs,
      refetchIntervalInBackground,
      refetchOnMount,
      refetchOnWindowFocus,
      enabled,
      gcTime,
      staleTime: b,
      structuralSharing,
      initialData,
      placeholderData,
    }),
    peers.jt(w)
  );
}

export type UseVscodeMutationOptions = { source?: unknown } & Record<
  string,
  unknown
>;

/**
 * Bundle export `rdt` / internal `ip`.
 */
export function useVscodeMutation(
  method: string,
  options?: UseVscodeMutationOptions,
): unknown {
  if (peers == null) {
    throw new Error("useVscodeMutation peers are not configured");
  }
  const { source, ...rest } = options ?? {};
  const mutationFn = async (params: unknown) => {
    return (
      await peers.Zf.getInstance().post(
        `vscode://codex/${method}`,
        JSON.stringify(params),
        peers.FZe(source),
      )
    ).body;
  };
  return peers.qt({
    mutationFn,
    ...rest,
    networkMode: `always`,
  });
}
