// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MGr`) / export `GX`.

export type UseConfigNoticesApiPeers = {
  EGr: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  NGr: (...args: unknown[]) => unknown;
  _M: (...args: unknown[]) => unknown;
};

let peers: UseConfigNoticesApiPeers | null = null;

/** Wire useConfigNoticesApi peers once companions land. */
export function setUseConfigNoticesApiPeers(next: UseConfigNoticesApiPeers): void {
  peers = next;
}

/**
 * Bundle export `GX` / internal `MGr`.
 */
export function useConfigNoticesApi(e: unknown) {
  if (peers == null) {
    throw new Error("useConfigNoticesApi peers are not configured");
  }

  let t = (0, peers.NGr.c)(3),
    n = peers.EGr(e === void 0 ? peers.H_ : e),
    r,
    i;
  return (
    t[0] === n
      ? ((r = t[1]), (i = t[2]))
      : ((r = (e) => n.addConfigNoticeCallback(e)),
        (i = () => n.getConfigNotices()),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i)),
    (0, peers._M.useSyncExternalStore)(r, i)
  );
}
