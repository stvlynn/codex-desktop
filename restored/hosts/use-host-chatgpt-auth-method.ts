// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kYr`) / export `WY`.

export type UseHostChatgptAuthMethodPeers = {
  AYr: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  PE: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  authMethod: (...args: unknown[]) => unknown;
  bM: (...args: unknown[]) => unknown;
  fast_mode: (...args: unknown[]) => unknown;
  featureRequirements: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  isLoading: (...args: unknown[]) => unknown;
  requirements: (...args: unknown[]) => unknown;
};

let peers: UseHostChatgptAuthMethodPeers | null = null;

/** Wire useHostChatgptAuthMethod peers once companions land. */
export function setUseHostChatgptAuthMethodPeers(next: UseHostChatgptAuthMethodPeers): void {
  peers = next;
}

/**
 * Bundle export `WY` / internal `kYr`.
 */
export function useHostChatgptAuthMethod(e: unknown) {
  if (peers == null) {
    throw new Error("useHostChatgptAuthMethod peers are not configured");
  }

  let t = (0, peers.AYr.c)(6),
    n = peers.Y(peers.SD),
    r = e?.hostId ?? n,
    i = peers.bM(r),
    a = i?.authMethod === `chatgpt`,
    o = i?.authMethod ?? null,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = {
        authMethod: o,
        hostId: r,
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let { data: c, isPending: l } = peers.Fo(peers.PE, s),
    u = !!i?.isLoading || (a && l),
    d =
      a &&
      !u &&
      c != null &&
      c?.requirements?.featureRequirements?.fast_mode !== !1,
    f;
  return (
    t[3] !== u || t[4] !== d
      ? ((f = {
          isServiceTierAllowed: d,
          isLoading: u,
        }),
        (t[3] = u),
        (t[4] = d),
        (t[5] = f))
      : (f = t[5]),
    f
  );
}
