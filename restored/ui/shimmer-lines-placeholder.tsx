// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_zo`) / export `eO`.

export type ShimmerLinesPlaceholderPeers = {
  $: (...args: unknown[]) => unknown;
  Czo: (...args: unknown[]) => unknown;
  Szo: (...args: unknown[]) => unknown;
  Tzo: (...args: unknown[]) => unknown;
  gzo: (...args: unknown[]) => unknown;
  vzo: (...args: unknown[]) => unknown;
  wzo: (...args: unknown[]) => unknown;
  yzo: (...args: unknown[]) => unknown;
};
let peers: ShimmerLinesPlaceholderPeers | null = null;

/** Wire ShimmerLinesPlaceholder peers once companions land. */
export function setShimmerLinesPlaceholderPeers(
  next: ShimmerLinesPlaceholderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eO` / internal `_zo`.
 */
export function ShimmerLinesPlaceholder(props: unknown) {
  if (peers == null) {
    throw new Error("ShimmerLinesPlaceholder peers are not configured");
  }
  let {
      className,
      lineClassName,
      lines = 3,
      maxWidth = 100,
      minWidth = 55,
      seed = "shimmer-lines",
      size = "md",
    } = props,
    m = peers.vzo({
      count: lines,
      maxWidth,
      minWidth,
      seed,
    });
  let h = m,
    g = peers.$("flex w-full flex-col items-start gap-2", className);
  let _;
  {
    let e;
    e = (e, t) => {
      return (
        <peers.gzo
          key={t}
          className={peers.$(peers.wzo[size], lineClassName)}
          style={{
            width: `${peers.yzo(e)}%`,
            "--loading-results-shimmer-delay": `${-t * peers.Tzo}ms`,
          }}
        />
      );
    };
    _ = h.map(e);
  }
  return <div className={g}>{_}</div>;
}
