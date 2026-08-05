// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vhu`) / export `Rt`.

export type BindDeferredHostsRtPeers = {
  Eh: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PE: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R_: (...args: unknown[]) => unknown;
  U1l: (...args: unknown[]) => unknown;
  allowLockedComputerUse: (...args: unknown[]) => unknown;
  computerUse: (...args: unknown[]) => unknown;
  requirements: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsRtPeers | null = null;

/** Wire bindDeferredHostsRt peers once companions land. */
export function setBindDeferredHostsRtPeers(
  next: BindDeferredHostsRtPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rt` / internal `vhu`.
 */
export function bindDeferredHostsRt() {
  if (peers == null) {
    throw new Error("bindDeferredHostsRt peers are not configured");
  }

  return peers.Oa(
    peers.Q,
    (e, { get: t }) =>
      t(peers.Eh, `2296472986`) &&
      peers.U1l({
        remoteControlConnectionsState: peers.R_(
          t,
          `remote_control_connections_state`,
        ),
        slingshotEnabled: t(peers.Eh, `1042620455`),
      }) &&
      t(peers.PE, {
        hostId: e,
      }).data?.requirements?.computerUse?.allowLockedComputerUse !== !1,
  );
}
