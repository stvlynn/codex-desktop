// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vnl`) / export `cl`.

export type StatsigGateTitleViewPeers = {
  VD: (...args: unknown[]) => unknown;
  eO: (...args: unknown[]) => unknown;
  p7c: (...args: unknown[]) => unknown;
  qGi: (...args: unknown[]) => unknown;
  wh: (...args: unknown[]) => unknown;
  xnl: (...args: unknown[]) => unknown;
  ynl: (...args: unknown[]) => unknown;
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
 */
export function statsigGateTitleView(
  e: unknown,
  { initialView = "single", title, ...rest }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("statsigGateTitleView peers are not configured");
  }
  if (!peers.wh(e, "120995366")) return false;
  let i = `image:${crypto.randomUUID()}`,
    a =
      rest.generatedImages != null &&
      rest.initialImageId != null &&
      peers.wh(e, "4176837627"),
    o = initialView === "playground" && a ? "playground" : "single";
  return (
    e.set(peers.VD, o === "playground"),
    peers.eO.openTab(e, peers.ynl, {
      defaultState: () => {
        return o;
      },
      icon: peers.xnl.createElement(peers.p7c, {
        className: "icon-xs shrink-0",
      }),
      id: i,
      isPreview: true,
      props: {
        ...rest,
        playgroundEnabled: a,
      },
      title,
      tooltip: title,
    }),
    peers.qGi(e),
    true
  );
}
