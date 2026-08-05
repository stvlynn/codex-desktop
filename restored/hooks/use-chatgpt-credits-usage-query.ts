// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ngs`) / export `nx`.

export type UseChatgptCreditsUsageQueryPeers = {
  FZ: (...args: unknown[]) => unknown;
  Mgs: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  yM: (...args: unknown[]) => unknown;
};

let peers: UseChatgptCreditsUsageQueryPeers | null = null;

/** Wire useChatgptCreditsUsageQuery peers once companions land. */
export function setUseChatgptCreditsUsageQueryPeers(
  next: UseChatgptCreditsUsageQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nx` / internal `Ngs`.
 */
export function useChatgptCreditsUsageQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useChatgptCreditsUsageQuery peers are not configured");
  }

  let t = (0, peers.FZ.c)(5),
    { enabled: n } = e,
    { accountId: r, authMethod: i, userId: a } = peers.yM(),
    o = n && i === `chatgpt` && a != null && r != null,
    s;
  return (
    t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== a
      ? ((s = peers.Mgs({
          accountId: r,
          authMethod: i,
          enabled: o,
          userId: a,
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = o),
        (t[3] = a),
        (t[4] = s))
      : (s = t[4]),
    peers.jt(s)
  );
}
