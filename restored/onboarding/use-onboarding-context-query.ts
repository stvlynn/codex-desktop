// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `n$r`) / export `sY`.

export type UseOnboardingContextQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  r$r: (...args: unknown[]) => unknown;
  yM: (...args: unknown[]) => unknown;
};

let peers: UseOnboardingContextQueryPeers | null = null;

/** Wire useOnboardingContextQuery peers once companions land. */
export function setUseOnboardingContextQueryPeers(
  next: UseOnboardingContextQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sY` / internal `n$r`.
 */
export function useOnboardingContextQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useOnboardingContextQuery peers are not configured");
  }

  let t = (0, peers.iN.c)(8),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: r } = n,
    i = r === void 0 ? !0 : r,
    { accountId: a, authMethod: o } = peers.yM(),
    s;
  t[2] !== a || t[3] !== o
    ? ((s = [`onboarding`, `context`, o, a]),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s))
    : (s = t[4]);
  let c = i && o === `chatgpt`,
    l;
  return (
    t[5] !== s || t[6] !== c
      ? ((l = {
          queryKey: s,
          queryFn: peers.r$r,
          staleTime: peers.Hf.TEN_MINUTES,
          enabled: c,
        }),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    peers.jt(l)
  );
}
