// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sxu`) / export `z`.

export type ForceSetRemoteControlEnabledPeers = {
  H_: (...args: unknown[]) => unknown;
  axu: (...args: unknown[]) => unknown;
  cxu: (...args: unknown[]) => unknown;
  dxu: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  lxu: (...args: unknown[]) => unknown;
  promise: (...args: unknown[]) => unknown;
  sxu: (...args: unknown[]) => unknown;
  uxu: (...args: unknown[]) => unknown;
};
let peers: ForceSetRemoteControlEnabledPeers | null = null;

/** Wire forceSetRemoteControlEnabled peers once companions land. */
export function setForceSetRemoteControlEnabledPeers(
  next: ForceSetRemoteControlEnabledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `z` / internal `sxu`.
 */
export async function forceSetRemoteControlEnabled(
  e: unknown,
  t: unknown,
  { force = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("forceSetRemoteControlEnabled peers are not configured");
  }
  if (((lxu = t), peers.dxu?.enabled === t)) return peers.dxu.promise;
  if (!force && peers.cxu === t) return null;
  let r = ++peers.uxu,
    i = peers.axu(e, peers.H_, t, {
      shouldApplyStatus: () => {
        return r === peers.uxu;
      },
    });
  dxu = {
    enabled: t,
    promise: i,
  };
  try {
    let n = await i;
    return r === peers.uxu
      ? ((cxu = t), n)
      : (peers.lxu != null &&
          peers.lxu !== t &&
          (await peers.sxu(e, peers.lxu, {
            force: true,
          })),
        n);
  } catch (e) {
    throw (r === peers.uxu && peers.cxu === t && (cxu = undefined), e);
  } finally {
    peers.dxu?.promise === i && (dxu = undefined);
  }
}
