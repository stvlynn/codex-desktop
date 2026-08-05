// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aWn`) / export `D5`.

export type UseAppgenScreenshotDataUrlQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Zf: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  lWn: (...args: unknown[]) => unknown;
  sWn: (...args: unknown[]) => unknown;
};

let peers: UseAppgenScreenshotDataUrlQueryPeers | null = null;

/** Wire useAppgenScreenshotDataUrlQuery peers once companions land. */
export function setUseAppgenScreenshotDataUrlQueryPeers(
  next: UseAppgenScreenshotDataUrlQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `D5` / internal `aWn`.
 */
export function useAppgenScreenshotDataUrlQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useAppgenScreenshotDataUrlQuery peers are not configured");
  }

  let t = (0, peers.sWn.c)(7),
    n = e != null,
    r,
    i;
  t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : ((r = async () => {
        if (e == null) throw Error(`Missing AppGen screenshot URL`);
        let { body: t } = await peers.Zf.getInstance().get(
          e.replace(/^\/api\/codex(?=\/|$)/u, `/wham`),
        );
        return `data:${t.contentType};base64,${t.base64}`;
      }),
      (i = [...peers.lWn, e]),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i));
  let a;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i
      ? ((a = {
          enabled: n,
          queryFn: r,
          queryKey: i,
          staleTime: peers.Hf.INFINITE,
        }),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a))
      : (a = t[6]),
    peers.jt(a)
  );
}
