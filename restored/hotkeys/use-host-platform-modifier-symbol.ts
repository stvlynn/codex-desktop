// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uk`) / export `X1`.

export type UseHostPlatformModifierSymbolPeers = {
  ZGn: (...args: unknown[]) => unknown;
  Zxr: (...args: unknown[]) => unknown;
  eSr: (...args: unknown[]) => unknown;
  platform: (...args: unknown[]) => unknown;
  tSr: (...args: unknown[]) => unknown;
};

let peers: UseHostPlatformModifierSymbolPeers | null = null;

/** Wire useHostPlatformModifierSymbol peers once companions land. */
export function setUseHostPlatformModifierSymbolPeers(
  next: UseHostPlatformModifierSymbolPeers,
): void {
  peers = next;
}

/**
 * Bundle export `X1` / internal `uk`.
 */
export function useHostPlatformModifierSymbol() {
  if (peers == null) {
    throw new Error("useHostPlatformModifierSymbol peers are not configured");
  }

  let e = (0, peers.tSr.c)(7),
    { data: t, isLoading: n } = peers.Zxr(),
    r,
    i;
  if (e[0] !== t?.platform) {
    let n = peers.ZGn(t?.platform);
    ((r = n), (i = peers.eSr(n)), (e[0] = t?.platform), (e[1] = r), (e[2] = i));
  } else ((r = e[1]), (i = e[2]));
  let a;
  return (
    e[3] !== n || e[4] !== r || e[5] !== i
      ? ((a = {
          platform: r,
          modifierSymbol: i,
          isLoading: n,
        }),
        (e[3] = n),
        (e[4] = r),
        (e[5] = i),
        (e[6] = a))
      : (a = e[6]),
    a
  );
}
