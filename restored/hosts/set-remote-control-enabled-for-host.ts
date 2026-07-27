// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `axu`) / export `V`.

export type SetRemoteControlEnabledForHostPeers = {
  statusAtom: unknown;
  invoke: (
    channel: "set-remote-control-enabled-for-host",
    payload: { enabled: boolean; hostId: unknown },
  ) => Promise<unknown>;
  applyStatus: (store: any, hostId: unknown, result: unknown) => void;
};

let peers: SetRemoteControlEnabledForHostPeers | null = null;

/** Wire set-remote-control-enabled peers once companions land. */
export function setSetRemoteControlEnabledForHostPeers(
  next: SetRemoteControlEnabledForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `V` / internal `axu`.
 * Enable/disable remote control for a host and optionally apply status.
 */
export async function setRemoteControlEnabledForHost(
  store: { get: (atom: unknown, hostId: unknown) => any },
  hostId: unknown,
  enabled: boolean,
  options: { shouldApplyStatus?: () => boolean } = {},
): Promise<unknown> {
  if (peers == null) {
    throw new Error("SetRemoteControlEnabledForHost peers are not configured");
  }
  const { shouldApplyStatus = () => true } = options;
  const before = store.get(peers.statusAtom, hostId);
  const result = await peers.invoke("set-remote-control-enabled-for-host", {
    enabled,
    hostId,
  });
  const after = store.get(peers.statusAtom, hostId);
  const statusChanged =
    after !== before &&
    (after?.status === "connected" || after?.status === "errored");
  if (shouldApplyStatus() && (!enabled || !statusChanged)) {
    peers.applyStatus(store, hostId, result);
  }
  return result;
}
