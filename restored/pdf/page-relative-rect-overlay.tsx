// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bXs`) / export `dg`.

export type PageRelativeRectOverlayPeers = {
  M$: (...args: unknown[]) => unknown;
  OXs: (...args: unknown[]) => unknown;
  dXs: (...args: unknown[]) => unknown;
  fXs: (...args: unknown[]) => unknown;
};
let peers: PageRelativeRectOverlayPeers | null = null;

/** Wire PageRelativeRectOverlay peers once companions land. */
export function setPageRelativeRectOverlayPeers(
  next: PageRelativeRectOverlayPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dg` / internal `bXs`.
 */
export function PageRelativeRectOverlay(props: unknown) {
  if (peers == null) {
    throw new Error("PageRelativeRectOverlay peers are not configured");
  }
  let { pageSize, rect, testId } = props,
    a = `${(rect.height / pageSize.height) * 100}%`,
    o = `${(rect.x / pageSize.width) * 100}%`,
    s = `${(rect.y / pageSize.height) * 100}%`,
    c = `${(rect.width / pageSize.width) * 100}%`,
    l = {
      backgroundColor: peers.fXs,
      borderColor: peers.dXs,
      borderStyle: "dashed",
      borderWidth: 2,
      height: a,
      left: o,
      top: s,
      width: c,
    };
  return (
    <div
      className="pointer-events-none absolute box-border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]"
      data-testid={testId}
      style={l}
    />
  );
}
