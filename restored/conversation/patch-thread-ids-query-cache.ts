// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EK`) / export `tA`.

export type PatchThreadIdsQueryCachePeers = {
  FA: (...args: unknown[]) => unknown;
  JA: (...args: unknown[]) => unknown;
  QSe: (...args: unknown[]) => unknown;
  XSo: (...args: unknown[]) => unknown;
  ZSo: (...args: unknown[]) => unknown;
  jSo: (...args: unknown[]) => unknown;
  kSo: (...args: unknown[]) => unknown;
  qA: (...args: unknown[]) => unknown;
  wK: (...args: unknown[]) => unknown;
};

let peers: PatchThreadIdsQueryCachePeers | null = null;

/** Wire patchThreadIdsQueryCache peers once companions land. */
export function setPatchThreadIdsQueryCachePeers(
  next: PatchThreadIdsQueryCachePeers,
): void {
  peers = next;
}

/**
 * Bundle export `tA` / internal `EK`.
 */
async function patchThreadIdsQueryCache(e, t, n, r) {
  if (peers == null) {
    throw new Error("patchThreadIdsQueryCache peers are not configured");
  }

  let i = e.query.snapshot(peers.FA),
    a = i.getData(),
    o =
      a == null
        ? null
        : {
            threadIds: n
              ? peers.QSe({
                  threadIds: a.threadIds,
                  threadId: t,
                  beforeThreadId: r ?? null,
                })
              : a.threadIds.filter((e) => e !== t),
          },
    s = e.get(peers.qA),
    c = s != null && peers.XSo(e, s, t) ? e.get(peers.JA) : void 0;
  (c !== void 0 && e.set(peers.JA, null), o != null && i.setData(o));
  try {
    return (
      r === void 0 ? await peers.jSo(t, n) : await peers.jSo(t, n, r),
      n && peers.kSo(e, t),
      !0
    );
  } catch (t) {
    let n = i.getData(),
      r = o == null;
    return (
      o != null &&
        n != null &&
        peers.wK(n.threadIds, o.threadIds) &&
        (i.setData(a), (r = !0)),
      r &&
        c !== void 0 &&
        e.get(peers.qA) === s &&
        e.set(peers.JA, e.get(peers.JA) == null ? c : null),
      peers.ZSo(t),
      !1
    );
  }
}
