// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eR`) / export `GV`.

export type ResolveStableWorktreeStatusPeers = {
  Bf: (...args: unknown[]) => unknown;
  Fx: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  cnr: (...args: unknown[]) => unknown;
  gtr: (...args: unknown[]) => unknown;
  lGi: (...args: unknown[]) => unknown;
  uGi: (...args: unknown[]) => unknown;
  ytr: (...args: unknown[]) => unknown;
};

let peers: ResolveStableWorktreeStatusPeers | null = null;

/** Wire resolveStableWorktreeStatus peers once companions land. */
export function setResolveStableWorktreeStatusPeers(
  next: ResolveStableWorktreeStatusPeers,
): void {
  peers = next;
}

/**
 * Bundle export `GV` / internal `eR`.
 */
async function resolveStableWorktreeStatus(e, t, n) {
  if (peers == null) {
    throw new Error("resolveStableWorktreeStatus peers are not configured");
  }

  try {
    let r = await peers.lGi(e, t),
      i = e.get(peers.cnr, t);
    if (i.type !== `fromConfig`) return peers.gtr(null, peers.ytr(i, null), r);
    let { config: a } = await peers.Bf(`read-config-for-host`, {
        hostId: t,
        includeLayers: !1,
        cwd: null,
        priority: `critical`,
      }),
      o = peers.Fx(a);
    return o.service_tier == null
      ? peers.gtr(await peers.uGi(t, n ?? o.model), o.service_tier, r)
      : peers.gtr(null, o.service_tier, r);
  } catch (e) {
    return (
      peers.Wf.error(`Failed to read service tier for request`, {
        safe: {},
        sensitive: {
          error: e,
        },
      }),
      null
    );
  }
}
