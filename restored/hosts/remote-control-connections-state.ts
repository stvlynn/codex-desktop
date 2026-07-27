// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yhu`) / export `zt`.

export type BindRemoteControlConnectionsStatePeers = {
  Dh: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  K1l: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PE: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R_: (...args: unknown[]) => unknown;
  U1l: (...args: unknown[]) => unknown;
  allowLockedComputerUse: (...args: unknown[]) => unknown;
  computerUse: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  requirements: (...args: unknown[]) => unknown;
  vhu: (...args: unknown[]) => unknown;
  z_: (...args: unknown[]) => unknown;
};

let peers: BindRemoteControlConnectionsStatePeers | null = null;

/** Wire bindRemoteControlConnectionsState peers once companions land. */
export function setBindRemoteControlConnectionsStatePeers(next: BindRemoteControlConnectionsStatePeers): void {
  peers = next;
}

/**
 * Bundle export `zt` / internal `yhu`.
 */
export function bindRemoteControlConnectionsState() {
  if (peers == null) {
    throw new Error("bindRemoteControlConnectionsState peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.IE(), peers.K1l(), peers.ed(), peers.z_(), peers.Dh(), vhu = peers.Oa(peers.Q, (e, {
      get: t
    }) => t(peers.Eh, `2296472986`) && peers.U1l({
      remoteControlConnectionsState: peers.R_(t, `remote_control_connections_state`),
      slingshotEnabled: t(peers.Eh, `1042620455`)
    }) && t(peers.PE, {
      hostId: peers.e
    }).data?.requirements?.computerUse?.allowLockedComputerUse !== !1);
  });
}
