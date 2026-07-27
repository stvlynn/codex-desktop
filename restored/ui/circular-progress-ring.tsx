// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MK`) / export `Fk`.

export type CircularProgressRingPeers = {
  $: (...args: unknown[]) => unknown;
  Cwo: (...args: unknown[]) => unknown;
  Dwo: (...args: unknown[]) => unknown;
  Ewo: (...args: unknown[]) => unknown;
  Owo: (...args: unknown[]) => unknown;
  Two: (...args: unknown[]) => unknown;
  kwo: (...args: unknown[]) => unknown;
  wwo: (...args: unknown[]) => unknown;
  xwo: (...args: unknown[]) => unknown;
};
let peers: CircularProgressRingPeers | null = null;

/** Wire CircularProgressRing peers once companions land. */
export function setCircularProgressRingPeers(
  next: CircularProgressRingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fk` / internal `MK`.
 */
export function CircularProgressRing(props: unknown) {
  if (peers == null) {
    throw new Error("CircularProgressRing peers are not configured");
  }
  let {
      className,
      progressClassName,
      animateOnMount = false,
      animateOnMountDelayMs = 0,
      percent,
      reducedMotion = false,
      size,
      strokeWidth = 2,
      transitionDurationMs,
    } = props,
    m = size === undefined ? peers.Ewo : size,
    g = transitionDurationMs === undefined ? peers.Dwo : transitionDurationMs,
    _ = (m - strokeWidth) / 2,
    v = peers.Cwo(percent),
    y = peers.kwo - v,
    b = `0 0 ${m} ${m}`,
    x = peers.$("shrink-0", className);
  let S = m / 2,
    C = m / 2,
    w = (
      <circle
        cx={S}
        cy={C}
        r={_}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.16}
      />
    );
  let T = m / 2,
    E = m / 2,
    D = v === peers.Owo ? 0 : 1,
    O = animateOnMount && !reducedMotion && peers.xwo.fillOnMount,
    k = peers.$(progressClassName, O);
  let A =
      animateOnMount && !reducedMotion
        ? `${animateOnMountDelayMs}ms`
        : undefined,
    j = reducedMotion
      ? "none"
      : `stroke-dashoffset ${g}ms ease-out, opacity ${g}ms ease-out`,
    M = {
      animationDelay: A,
      transition: j,
    };
  let N = `rotate(-90 ${m / 2} ${m / 2})`,
    P = (
      <circle
        cx={T}
        cy={E}
        r={_}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity={D}
        strokeLinecap="round"
        fill="none"
        pathLength={peers.kwo}
        strokeDasharray={peers.kwo}
        strokeDashoffset={y}
        className={k}
        style={M}
        transform={N}
      />
    );
  return (
    <svg aria-hidden="true" width={m} height={m} viewBox={b} className={x}>
      {w}
      {P}
    </svg>
  );
}
