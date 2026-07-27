// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fgu`) / export `St`.

export type ChartsPurpleBadgePeers = {
  D9: (...args: unknown[]) => unknown;
  Jrr: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  dh: (...args: unknown[]) => unknown;
  mgu: (...args: unknown[]) => unknown;
};
let peers: ChartsPurpleBadgePeers | null = null;

/** Wire ChartsPurpleBadge peers once companions land. */
export function setChartsPurpleBadgePeers(next: ChartsPurpleBadgePeers): void {
  peers = next;
}

/**
 * Bundle export `St` / internal `fgu`.
 */
export function ChartsPurpleBadge() {
  const Dh = peers.dh;
  const Jrr = peers.Jrr;
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("ChartsPurpleBadge peers are not configured");
  }
  return (
    <Dh className="gap-1 !bg-token-charts-purple/10 px-1.5 py-1 text-xs font-medium !text-token-charts-purple">
      <Jrr className="icon-xs" />
      <Z
        id="plugins.googleUpgrade.badge"
        defaultMessage="Upgrade to unlock"
        description="Badge label shown on Google plugins that need a paid plan"
      />
    </Dh>
  );
}
