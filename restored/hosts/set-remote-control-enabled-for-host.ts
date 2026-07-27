// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `axu`) / export `V`.

export type VPeers = {
  Bf: (...args: unknown[]) => unknown;
  O6n: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
};
let peers: VPeers | null = null;

/** Wire V peers once companions land. */
export function setVPeers(next: VPeers): void {
  peers = next;
}

/**
 * Bundle export `V` / internal `axu`.
 */
export async function V(
  e: unknown,
  t: unknown,
  n: unknown,
  {
    shouldApplyStatus = () => {
      return true;
    },
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("V peers are not configured");
  }
  let i = e.get(peers.sE, t),
    a = await peers.Bf("set-remote-control-enabled-for-host", {
      enabled: n,
      hostId: t,
    }),
    o = e.get(peers.sE, t),
    s = o !== i && (o?.status === "connected" || o?.status === "errored");
  return (shouldApplyStatus() && (!n || !s) && peers.O6n(e, t, a), a);
}
