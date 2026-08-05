// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zqa`) / export `dM`.

export type UseAtMentionThreadRootsPeers = {
  Bf: (...args: unknown[]) => unknown;
  Bqa: (...args: unknown[]) => unknown;
  Dqa: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  Gqa: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Hqa: (...args: unknown[]) => unknown;
  Jqa: (...args: unknown[]) => unknown;
  Kqa: (...args: unknown[]) => unknown;
  MD: (...args: unknown[]) => unknown;
  Rl: (...args: unknown[]) => unknown;
  Uqa: (...args: unknown[]) => unknown;
  Vqa: (...args: unknown[]) => unknown;
  Yqa: (...args: unknown[]) => unknown;
  Zu: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  kGr: (...args: unknown[]) => unknown;
  ku: (...args: unknown[]) => unknown;
  tN: (...args: unknown[]) => unknown;
};

let peers: UseAtMentionThreadRootsPeers | null = null;

/** Wire useAtMentionThreadRoots peers once companions land. */
export function setUseAtMentionThreadRootsPeers(
  next: UseAtMentionThreadRootsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dM` / internal `zqa`.
 */
export function useAtMentionThreadRoots(e: unknown) {
  if (peers == null) {
    throw new Error("useAtMentionThreadRoots peers are not configured");
  }

  let t = (0, peers.Gqa.c)(18),
    { excludedThreadIds: n, hostId: r, query: i, roots: a } = e,
    o = peers.tN(i, 100),
    s = i.trim(),
    c;
  t[0] === o ? (c = t[1]) : ((c = o.trim()), (t[0] = o), (t[1] = c));
  let l = c,
    u = l !== s,
    { data: d } = peers.kGr(),
    { data: f } = peers.MD(peers.Fl.PROJECTLESS_THREAD_IDS),
    { data: p } = peers.MD(peers.Fl.THREAD_PROJECT_ASSIGNMENTS),
    { data: m } = peers.MD(peers.Fl.THREAD_WORKSPACE_ROOT_HINTS),
    h,
    g;
  t[2] !== r || t[3] !== l
    ? ((h = [`composer-thread-search`, r, l]),
      (g = () =>
        peers.Bf(`search-threads-for-host`, {
          hostId: r,
          query: l,
          limit: peers.Kqa,
        })),
      (t[2] = r),
      (t[3] = l),
      (t[4] = h),
      (t[5] = g))
    : ((h = t[4]), (g = t[5]));
  let _ = a != null && l.length > 0,
    v;
  t[6] !== h || t[7] !== g || t[8] !== _
    ? ((v = {
        queryKey: h,
        queryFn: g,
        enabled: _,
        staleTime: peers.Hf.THIRTY_SECONDS,
      }),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let { data: y, isFetching: b } = peers.jt(v);
  if (a == null) return null;
  if (s.length === 0) return peers.Jqa;
  let x = d == null ? [] : peers.Uqa(d, r),
    S = u ? [] : (y ?? []),
    C = a.map(peers.Hqa).filter(peers.Vqa),
    w = new Set(f),
    T = peers
      .Dqa({
        asyncResults: S,
        loadedChatSearchResults: x,
        limit: x.length + S.length,
        query: s,
      })
      .filter((e) => e.kind === `local` && !n.includes(e.threadId)),
    E = [],
    D = [],
    O = [];
  for (let e of T) {
    let t = p?.[e.threadId],
      n = peers.ku({
        assignment: t,
        cwd: m?.[e.threadId] ?? e.cwd,
      }),
      r = n == null ? `` : peers.Rl(n).replace(/\/+$/, ``);
    C.some((e) => r === e || r.startsWith(`${e}/`))
      ? E.push(e)
      : w.has(e.threadId)
        ? D.push(e)
        : O.push(e);
  }
  let k = [...E, ...D, ...O].map(peers.Bqa);
  if (k.length === 0 && !u && !b) return peers.Yqa;
  let A;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = peers.Zu({
        id: `composer.atMentionList.chats`,
        defaultMessage: `Chats`,
        description: `Section header for past task results in the @ mention list.`,
      })),
      (t[10] = A))
    : (A = t[10]);
  let j;
  t[11] === k.length
    ? (j = t[12])
    : ((j =
        k.length === 0
          ? peers.Zu({
              id: `composer.atMentionList.chats.loading`,
              defaultMessage: `Searching chats…`,
              description: `Shown in the tasks section while past tasks are loading`,
            })
          : null),
      (t[11] = k.length),
      (t[12] = j));
  let M = u || b,
    N;
  return (
    t[13] !== k || t[14] !== A || t[15] !== j || t[16] !== M
      ? ((N = {
          sections: [
            {
              id: `threads`,
              title: A,
              items: k,
              emptyState: j,
              isLoading: M,
            },
          ],
        }),
        (t[13] = k),
        (t[14] = A),
        (t[15] = j),
        (t[16] = M),
        (t[17] = N))
      : (N = t[17]),
    N
  );
}
