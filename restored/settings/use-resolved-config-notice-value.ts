// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ePl`) / export `ys`.

export type UseResolvedConfigNoticeValuePeers = {
  Mh: (...args: unknown[]) => unknown;
  iPl: (...args: unknown[]) => unknown;
  nPl: (...args: unknown[]) => unknown;
  rPl: (...args: unknown[]) => unknown;
};

let peers: UseResolvedConfigNoticeValuePeers | null = null;

/** Wire useResolvedConfigNoticeValue peers once companions land. */
export function setUseResolvedConfigNoticeValuePeers(next: UseResolvedConfigNoticeValuePeers): void {
  peers = next;
}

/**
 * Bundle export `ys` / internal `ePl`.
 */
export function useResolvedConfigNoticeValue() {
  if (peers == null) {
    throw new Error("useResolvedConfigNoticeValue peers are not configured");
  }

  let e = (0, peers.rPl.c)(2),
    { value: t } = peers.Mh(peers.iPl),
    n;
  return (
    e[0] === t ? (n = e[1]) : ((n = peers.nPl(t)), (e[0] = t), (e[1] = n)),
    n
  );
}
