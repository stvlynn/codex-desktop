// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Al`) / export `nc`.

export type BumpPluginUsageCounterPeers = {
  LAl: (...args: unknown[]) => unknown;
  rjl: (...args: unknown[]) => unknown;
  ujl: (...args: unknown[]) => unknown;
};

let peers: BumpPluginUsageCounterPeers | null = null;

/** Wire bumpPluginUsageCounter peers once companions land. */
export function setBumpPluginUsageCounterPeers(next: BumpPluginUsageCounterPeers): void {
  peers = next;
}

/**
 * Bundle export `nc` / internal `$Al`.
 */
export function bumpPluginUsageCounter(e: unknown) {
  if (peers == null) {
    throw new Error("bumpPluginUsageCounter peers are not configured");
  }

  peers.ujl.set(e, (peers.ujl.get(e) ?? 0) + 1);
  let t = peers.LAl(e);
  t != null && peers.rjl(t);
}
