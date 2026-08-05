// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KPl`) / export `ms`.

export type UseInboxItemsControllerPeers = {
  $f: (...args: unknown[]) => unknown;
  GPl: (...args: unknown[]) => unknown;
  JPl: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  items: (...args: unknown[]) => unknown;
  qPl: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  unreadRunCounts: (...args: unknown[]) => unknown;
};

let peers: UseInboxItemsControllerPeers | null = null;

/** Wire useInboxItemsController peers once companions land. */
export function setUseInboxItemsControllerPeers(
  next: UseInboxItemsControllerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ms` / internal `KPl`.
 */
export function useInboxItemsController() {
  if (peers == null) {
    throw new Error("useInboxItemsController peers are not configured");
  }

  let e = (0, peers.qPl.c)(15),
    t = peers.rt(),
    n = peers.Y(peers.JPl),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = (e) => {
        (t.setQueryData(
          peers.$f(`inbox-items`, {
            limit: 200,
          }),
          (t) => (t == null ? t : peers.GPl(t, e, !0)),
        ),
          peers.Jf.dispatchMessage(`inbox-item-set-read-state`, {
            id: e,
            isRead: !0,
          }));
      }),
      (e[0] = t),
      (e[1] = r));
  let i = r,
    a;
  e[2] === t
    ? (a = e[3])
    : ((a = (e) => {
        (t.setQueryData(
          peers.$f(`inbox-items`, {
            limit: 200,
          }),
          (t) => (t == null ? t : peers.GPl(t, e, !1)),
        ),
          peers.Jf.dispatchMessage(`inbox-item-set-read-state`, {
            id: e,
            isRead: !1,
          }));
      }),
      (e[2] = t),
      (e[3] = a));
  let o = a,
    s;
  e[4] === t
    ? (s = e[5])
    : ((s = () => {
        let e = Date.now();
        (t.setQueryData(
          peers.$f(`inbox-items`, {
            limit: 200,
          }),
          (t) =>
            t == null
              ? t
              : {
                  ...t,
                  items: t.items.map((t) =>
                    t.readAt == null &&
                    (t.status === `PENDING_REVIEW` ||
                      t.status === `ACCEPTED` ||
                      t.status === `ARCHIVED`)
                      ? {
                          ...t,
                          readAt: e,
                        }
                      : t,
                  ),
                  unreadRunCounts: {
                    total: 0,
                    automationIds: [],
                    unreadRuns: [],
                  },
                },
        ),
          peers.Jf.dispatchMessage(`inbox-automation-runs-mark-all-read`, {
            readAt: e,
          }));
      }),
      (e[4] = t),
      (e[5] = s));
  let c = s,
    l;
  e[6] === n.data?.items
    ? (l = e[7])
    : ((l = n.data?.items ?? []), (e[6] = n.data?.items), (e[7] = l));
  let u = n.data?.unreadRunCounts,
    d;
  return (
    e[8] !== n.isLoading ||
    e[9] !== c ||
    e[10] !== i ||
    e[11] !== o ||
    e[12] !== l ||
    e[13] !== u
      ? ((d = {
          items: l,
          isLoading: n.isLoading,
          markAllRead: c,
          markRead: i,
          markUnread: o,
          unreadRunCounts: u,
        }),
        (e[8] = n.isLoading),
        (e[9] = c),
        (e[10] = i),
        (e[11] = o),
        (e[12] = l),
        (e[13] = u),
        (e[14] = d))
      : (d = e[14]),
    d
  );
}
