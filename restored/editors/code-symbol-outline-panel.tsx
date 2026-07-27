// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m$a`) / export `Nj`.

export type BindCodeSymbolOutlinePanelPeers = {
  Ila: (...args: unknown[]) => unknown;
  Su: (...args: unknown[]) => unknown;
  Xni: (...args: unknown[]) => unknown;
  bp: (...args: unknown[]) => unknown;
  g$a: (...args: unknown[]) => unknown;
  h$a: (...args: unknown[]) => unknown;
  hP: (...args: unknown[]) => unknown;
  jP: (...args: unknown[]) => unknown;
  jla: (...args: unknown[]) => unknown;
  lL: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  querySelectorAll: (...args: unknown[]) => unknown;
  replaceChildren: (...args: unknown[]) => unknown;
  s$a: (...args: unknown[]) => unknown;
  uL: (...args: unknown[]) => unknown;
  v$a: (...args: unknown[]) => unknown;
  y$a: (...args: unknown[]) => unknown;
};
let peers: BindCodeSymbolOutlinePanelPeers | null = null;

/** Wire bindCodeSymbolOutlinePanel peers once companions land. */
export function setBindCodeSymbolOutlinePanelPeers(
  next: BindCodeSymbolOutlinePanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nj` / internal `m$a`.
 */
export function bindCodeSymbolOutlinePanel(props: unknown) {
  const Ha = peers.h$a;
  if (peers == null) {
    throw new Error("bindCodeSymbolOutlinePanel peers are not configured");
  }
  let {
    fileDiff,
    className,
    hunkSeparators = "line-info",
    lineAnnotations,
    lineDiffType,
    metrics,
    onGutterUtilityClick,
    onPostRender,
    renderAnnotation,
    selectedLines,
    overflow = "scroll",
    useReviewLineInfoSeparators = false,
    ...rest
  } = props;
  let v = peers.uL(peers.lL()),
    y = peers.bp(peers.Su.lightCodeThemeId),
    b = peers.bp(peers.Su.darkCodeThemeId),
    x = peers.bp(peers.Su.diffMarkerStyle),
    S = peers.hP(),
    C = x === "symbols",
    w = v === "light" ? peers.jP(y, "light") : peers.jP(b, "dark");
  let T = w,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R;
  peers.Xni(undefined);
  D = peers.s$a;
  N = lineDiffType == null ? null : <Ha lineDiffType={lineDiffType} />;
  M = className;
  E = peers.jla;
  R = fileDiff;
  O = lineAnnotations;
  k = metrics;
  A = renderAnnotation;
  j = selectedLines;
  P = overflow;
  F = hunkSeparators;
  I = v;
  L = T.name;
  let z = C ? "classic" : "bars",
    B = onGutterUtilityClick != null,
    V = (e, t, n) => {
      let r = e.shadowRoot?.querySelectorAll("[data-placeholder]");
      if (n === "unmount") {
        r?.length === 0 && e.shadowRoot?.replaceChildren();
        return;
      }
      r != null &&
        r.length > 1 &&
        e.shadowRoot?.replaceChildren(r.item(r.length - 1));
      onPostRender?.(e);
    };
  let H = peers.Ila({
    includeDiffHeader: true,
    includeSimpleLineSeparators: true,
    rootSelector: peers.y$a,
    surface: "var(--codex-diffs-surface)",
    useReviewLineInfoSeparators,
  });
  let U = {
    overflow: P,
    hunkSeparators: F,
    themeType: I,
    theme: L,
    disableFileHeader: true,
    diffIndicators: z,
    enableGutterUtility: B,
    lineDiffType,
    onGutterUtilityClick,
    onPostRender: V,
    unsafeCSS: H,
    ...rest,
  };
  let W = (
    <E
      fileDiff={R}
      lineAnnotations={O}
      metrics={k}
      renderAnnotation={A}
      selectedLines={j}
      options={U}
    />
  );
  let G = <div className={M}>{W}</div>;
  return (
    <D>
      {N}
      {G}
    </D>
  );
}
