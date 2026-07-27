// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fWa`) / export `CM`.

export type SeededActiveSvgIconPeers = {
  $: (...args: unknown[]) => unknown;
  WUa: (...args: unknown[]) => unknown;
  eU: (...args: unknown[]) => unknown;
  mWa: (...args: unknown[]) => unknown;
  pWa: (...args: unknown[]) => unknown;
  uWa: (...args: unknown[]) => unknown;
};
let peers: SeededActiveSvgIconPeers | null = null;

/** Wire SeededActiveSvgIcon peers once companions land. */
export function setSeededActiveSvgIconPeers(
  next: SeededActiveSvgIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `CM` / internal `fWa`.
 */
export function SeededActiveSvgIcon(props: unknown) {
  if (peers == null) {
    throw new Error("SeededActiveSvgIcon peers are not configured");
  }
  let { active = false, className, seed, ...rest } = props;
  let s, c, l, u, d, f, p, m;
  {
    let e = peers.WUa(seed);
    s = rest;
    c = peers.$("shrink-0", className);
    l = "-2 -1 24 24";
    u = "none";
    d = "crispEdges";
    f = "http://www.w3.org/2000/svg";
    p = e.cells.map((item) => {
      return (
        <rect
          key={`${item.row}:${item.column}`}
          className={active ? peers.uWa.filledScanCell : undefined}
          x={item.column * peers.eU}
          y={item.row * peers.eU}
          width={peers.eU}
          height={peers.eU}
          fill={e.color}
          style={
            active
              ? {
                  animationDelay: `${item.animationDelayMs}ms`,
                }
              : undefined
          }
        />
      );
    });
    m = active
      ? e.scanCells.map((item) => {
          return item.filled ? null : (
            <rect
              key={`scan:${item.row}:${item.column}`}
              className={peers.uWa.emptyScanCell}
              x={item.column * peers.eU}
              y={item.row * peers.eU}
              width={peers.eU}
              height={peers.eU}
              fill={e.color}
              style={{
                animationDelay: `${item.animationDelayMs}ms`,
              }}
            />
          );
        })
      : null;
  }
  return (
    <svg {...s} className={c} viewBox={l} fill={u} shapeRendering={d} xmlns={f}>
      {p}
      {m}
    </svg>
  );
}
