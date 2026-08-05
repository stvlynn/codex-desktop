// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `J8l`) / export `Vr`.

export type BindBindHeartbeatThreadPermissionsById2Peers = {
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  K8l: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  U8l: (...args: unknown[]) => unknown;
  dD: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  q8l: (...args: unknown[]) => unknown;
  yD: (...args: unknown[]) => unknown;
};

let peers: BindBindHeartbeatThreadPermissionsById2Peers | null = null;

/** Wire bindBindHeartbeatThreadPermissionsById2 peers once companions land. */
export function setBindBindHeartbeatThreadPermissionsById2Peers(
  next: BindBindHeartbeatThreadPermissionsById2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Vr` / internal `J8l`.
 */
export function bindBindHeartbeatThreadPermissionsById2() {
  if (peers == null) {
    throw new Error(
      "bindBindHeartbeatThreadPermissionsById2 peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.DD(),
      peers.ed(),
      peers.Im(),
      (K8l = peers.Pm(`heartbeat-thread-permissions-by-id`, {})),
      (q8l = peers.Oa(peers.Q, (e, { get: t }) => {
        let n = peers.U8l(t(peers.yD, peers.e), t(peers.dD, peers.e));
        return n == null ? null : JSON.stringify(n);
      })));
  });
}
