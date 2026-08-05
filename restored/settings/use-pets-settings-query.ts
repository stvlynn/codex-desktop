// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qln`) / export `I7`.

export type UsePetsSettingsQueryPeers = {
  Gb: (...args: unknown[]) => unknown;
  Sp: (...args: unknown[]) => unknown;
  ZEe: (...args: unknown[]) => unknown;
  eQt: (...args: unknown[]) => unknown;
  eun: (...args: unknown[]) => unknown;
  tun: (...args: unknown[]) => unknown;
};

let peers: UsePetsSettingsQueryPeers | null = null;

/** Wire UsePetsSettingsQuery peers once companions land. */
export function setUsePetsSettingsQueryPeers(
  next: UsePetsSettingsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `I7` / internal `Qln`.
 */
export function UsePetsSettingsQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("UsePetsSettingsQuery peers are not configured");
  }

  let n = e.get(peers.tun),
    r = {
      detailLevel: t,
    };
  e.set(peers.eun, r);
  let i = peers.Sp(e, peers.ZEe.conversationDetailMode, t, {
    optimistic: !1,
  });
  e.get(peers.Gb).logProductEvent(peers.eQt, {
    previousWorkMode: n === `STEPS_PROSE` ? `everyday` : `coding`,
    selectedWorkMode: t === `STEPS_PROSE` ? `everyday` : `coding`,
    previousThreadDetailLevel: n,
    selectedThreadDetailLevel: t,
  });
  let a = () => {
    e.get(peers.eun) === r && e.set(peers.eun, null);
  };
  return (i.then(a, a), i);
}
