// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ODs`) / export `Lv`.

export type AnimatedPercentFillBarPeers = {
  $: (...args: unknown[]) => unknown;
  ADs: (...args: unknown[]) => unknown;
  EDs: (...args: unknown[]) => unknown;
  ef: (...args: unknown[]) => unknown;
  jDs: (...args: unknown[]) => unknown;
  kDs: (...args: unknown[]) => unknown;
  rf: (...args: unknown[]) => unknown;
};
let peers: AnimatedPercentFillBarPeers | null = null;

/** Wire AnimatedPercentFillBar peers once companions land. */
export function setAnimatedPercentFillBarPeers(
  next: AnimatedPercentFillBarPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Lv` / internal `ODs`.
 */
export function AnimatedPercentFillBar(props: unknown) {
  const Div = peers.ef.div;
  if (peers == null) {
    throw new Error("AnimatedPercentFillBar peers are not configured");
  }
  let {
      accessibleLabel,
      animatedPercent,
      isResetFillActive,
      remainingPercent,
      resetFillAnimation,
    } = props,
    s = peers.rf(animatedPercent, peers.kDs),
    c = `inset(0 ${100 - remainingPercent}% 0 0 round 999px)`,
    l = isResetFillActive ? s : c,
    u = {
      backgroundColor: resetFillAnimation.fillColor,
      clipPath: l,
    };
  let d = peers.$(
    "absolute inset-0 origin-right rounded-full [will-change:opacity,transform]",
    peers.EDs.bloom,
  );
  let f = (
    <Div
      className={d}
      style={{
        opacity: resetFillAnimation.bloomOpacity,
        scaleX: resetFillAnimation.bloomScale,
      }}
    />
  );
  let p = peers.$(
    "absolute inset-y-0 left-0 w-[68%] mix-blend-screen [will-change:opacity,transform]",
    peers.EDs.shimmer,
  );
  let m = (
    <Div
      className={p}
      style={{
        opacity: resetFillAnimation.shimmerOpacity,
        x: resetFillAnimation.shimmerX,
      }}
    />
  );
  let h = (
    <Div
      aria-hidden={true}
      className="absolute inset-0 overflow-hidden rounded-full [will-change:background-color,clip-path]"
      style={u}
    >
      {f}
      {m}
    </Div>
  );
  return (
    <div
      role="progressbar"
      aria-label={accessibleLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={remainingPercent}
      className="relative h-2 overflow-hidden rounded-full bg-token-foreground/10"
    >
      {h}
    </div>
  );
}
