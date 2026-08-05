// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `frr`) / export `c2`.

export type BindBindDeferredUiC2Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R_: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
  nu: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiC2Peers | null = null;

/** Wire bindBindDeferredUiC2 peers once companions land. */
export function setBindBindDeferredUiC2Peers(
  next: BindBindDeferredUiC2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `c2` / internal `frr`.
 */
export function bindBindDeferredUiC2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiC2 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.wD, e),
      r = t(peers.eD, n);
    if (r != null)
      return {
        hostId: n,
        manager: r,
        status: `ready`,
      };
    if (n === `local` || peers.nu(n))
      return {
        hostId: n,
        status: `recovering`,
      };
    let i = peers.R_(t, `remote_ssh_connections`),
      a = peers.R_(t, `remote_wsl_connections`),
      o = peers.R_(t, `remote_control_connections`);
    return i == null ||
      o == null ||
      [...(i ?? []), ...(a ?? []), ...(o ?? [])].some((e) => e.hostId === n)
      ? {
          hostId: n,
          status: `recovering`,
        }
      : {
          hostId: n,
          status: `unavailable`,
        };
  });
}
