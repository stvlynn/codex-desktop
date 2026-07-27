// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `b$l`) / export `Ri`.

export type UseGateEnabledWithAccountDataPeers = {
  f$l: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  l7: (...args: unknown[]) => unknown;
  rN: (...args: unknown[]) => unknown;
  u7: (...args: unknown[]) => unknown;
  x$l: (...args: unknown[]) => unknown;
};
let peers: UseGateEnabledWithAccountDataPeers | null = null;

/** Wire useGateEnabledWithAccountData peers once companions land. */
export function setUseGateEnabledWithAccountDataPeers(
  next: UseGateEnabledWithAccountDataPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ri` / internal `b$l`.
 */
export function useGateEnabledWithAccountData() {
  const Xl = peers.x$l;
  if (peers == null) {
    throw new Error("useGateEnabledWithAccountData peers are not configured");
  }
  let t = peers.kh("2304191375"),
    { data } = peers.rN();
  if (!t || data == null || !peers.f$l(data.plan_type)) return null;
  return <Xl accountId={data.id} />;
}
