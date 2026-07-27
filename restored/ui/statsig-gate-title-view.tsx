// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `vnl`) / export `cl`.

export type StatsigGateTitleViewPeers = {
  useGate: (gateId: string) => boolean;
  buildImageRef: () => string;
  openTitleView: (args: Record<string, unknown>) => unknown;
};

let peers: StatsigGateTitleViewPeers | null = null;

/** Wire statsigGateTitleView peers once companions land. */
export function setStatsigGateTitleViewPeers(
  next: StatsigGateTitleViewPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cl` / internal `vnl`.
 * Gate a title/view payload behind Statsig gate 120995366.
 */
export function statsigGateTitleView(
  gateEnabledInput: unknown,
  args: {
    initialView?: string;
    title?: unknown;
    [key: string]: unknown;
  },
): unknown {
  if (peers == null) {
    throw new Error("StatsigGateTitleView peers are not configured");
  }
  const enabled =
    typeof gateEnabledInput === "boolean"
      ? gateEnabledInput
      : peers.useGate("120995366");
  if (!enabled) return false;
  const imageRef = peers.buildImageRef();
  return peers.openTitleView({
    initialView: args.initialView ?? "single",
    title: args.title,
    imageRef,
    ...args,
  });
}
