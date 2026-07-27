// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ags`) / export `tx`.

export type UseChatgptCreditsBillingQueryPeers = {
  FZ: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  d_s: (...args: unknown[]) => unknown;
  i_s: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  p_s: (...args: unknown[]) => unknown;
  u_s: (...args: unknown[]) => unknown;
  yM: (...args: unknown[]) => unknown;
};

let peers: UseChatgptCreditsBillingQueryPeers | null = null;

/** Wire useChatgptCreditsBillingQuery peers once companions land. */
export function setUseChatgptCreditsBillingQueryPeers(next: UseChatgptCreditsBillingQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `tx` / internal `Ags`.
 */
export function useChatgptCreditsBillingQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useChatgptCreditsBillingQuery peers are not configured");
  }

  let t = (0, peers.FZ.c)(14),
    { enabled: n, includePaymentMethod: r } = e,
    i = r === void 0 ? !1 : r,
    { accountId: a, authMethod: o, userId: s } = peers.yM(),
    c = i ? peers.p_s : peers.d_s,
    l;
  t[0] !== a || t[1] !== o || t[2] !== c || t[3] !== s
    ? ((l = [...c, o, s, a]),
      (t[0] = a),
      (t[1] = o),
      (t[2] = c),
      (t[3] = s),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === i ? (u = t[6]) : ((u = () => peers.i_s(i)), (t[5] = i), (t[6] = u));
  let d = n && o === `chatgpt` && s != null && a != null,
    f;
  t[7] === i
    ? (f = t[8])
    : ((f = (e) => peers.u_s(e, i)), (t[7] = i), (t[8] = f));
  let p;
  return (
    t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== f
      ? ((p = {
          queryKey: l,
          queryFn: u,
          enabled: d,
          staleTime: peers.Hf.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          select: f,
        }),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    peers.jt(p)
  );
}
