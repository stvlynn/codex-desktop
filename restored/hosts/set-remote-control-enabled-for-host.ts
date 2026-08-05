// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `axu`) / export `setRemoteControlEnabledForHost`.

export type RemoteControlEnabledForHostPeers = {
  Bf: (...args: unknown[]) => unknown;
  O6n: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
};
let peers: RemoteControlEnabledForHostPeers | null = null;

/** Wire setRemoteControlEnabledForHost peers once companions land. */
export function setRemoteControlEnabledForHostPeers(
  next: RemoteControlEnabledForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `setRemoteControlEnabledForHost` / internal `axu`.
 */
export async function setRemoteControlEnabledForHost(
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
    throw new Error("setRemoteControlEnabledForHost peers are not configured");
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
