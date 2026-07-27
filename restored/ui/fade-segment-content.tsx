// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aFc`) / export `df`.

export type FadeSegmentContentPeers = {
  HTMLElement: (...args: unknown[]) => unknown;
  cFc: (...args: unknown[]) => unknown;
  jRa: (...args: unknown[]) => unknown;
  lFc: (...args: unknown[]) => unknown;
  oFc: (...args: unknown[]) => unknown;
  sFc: (...args: unknown[]) => unknown;
};
let peers: FadeSegmentContentPeers | null = null;

/** Wire FadeSegmentContent peers once companions land. */
export function setFadeSegmentContentPeers(
  next: FadeSegmentContentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `df` / internal `aFc`.
 */
export function FadeSegmentContent(props: unknown) {
  const JRa = peers.jRa;
  if (peers == null) {
    throw new Error("FadeSegmentContent peers are not configured");
  }
  let {
      animate,
      children,
      className = "[&>p:not(:last-child)]:mb-4",
      completionFallbackMs,
      components,
      fadeSegmentDelayMs = 24,
      onComplete,
    } = props,
    l = completionFallbackMs === undefined ? peers.lFc : completionFallbackMs,
    d = peers.sFc.useRef(null),
    f = () => {
      onComplete?.();
    };
  let p = peers.sFc.useEffectEvent(f),
    m = onComplete != null,
    h = () => {
      if (!animate || !m) return;
      let e = window.setTimeout(() => {
        d.current === e && ((d.current = null), p());
      }, l);
      return (
        (d.current = e),
        () => {
          window.clearTimeout(e);
          d.current === e && (d.current = null);
        }
      );
    };
  let g;
  g = [animate, children, l, m];
  peers.sFc.useEffect(h, g);
  let _ = (event) => {
    if (
      !animate ||
      !m ||
      d.current == null ||
      !(event.target instanceof peers.HTMLElement)
    )
      return;
    let t = event.target.style.getPropertyValue("--fade-delay");
    if (t === "") return;
    let r = Number.parseFloat(t);
    Array.from(
      event.currentTarget.querySelectorAll('[style*="--fade-delay"]'),
    ).some((item) => {
      return Number.parseFloat(item.style.getPropertyValue("--fade-delay")) > r;
    }) || (window.clearTimeout(d.current), (d.current = null), onComplete());
  };
  let y = (
    <JRa
      className={className}
      components={components}
      fadeSegmentDelayMs={fadeSegmentDelayMs}
      fadeSegmentMaxDelayMs={800}
      isStreaming={animate}
    >
      {children}
    </JRa>
  );
  return <div onAnimationEnd={_}>{y}</div>;
}
