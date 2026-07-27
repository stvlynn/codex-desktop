// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tsl`) / export `Yc`.

export type PreviewExpandCollapseListPeers = {
  $: (...args: unknown[]) => unknown;
  Dsl: (...args: unknown[]) => unknown;
  Esl: (...args: unknown[]) => unknown;
  Osl: (...args: unknown[]) => unknown;
};
let peers: PreviewExpandCollapseListPeers | null = null;

/** Wire PreviewExpandCollapseList peers once companions land. */
export function setPreviewExpandCollapseListPeers(
  next: PreviewExpandCollapseListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yc` / internal `Tsl`.
 */
export function PreviewExpandCollapseList(props: unknown) {
  if (peers == null) {
    throw new Error("PreviewExpandCollapseList peers are not configured");
  }
  let {
      items,
      className,
      contentClassName,
      maxHeightByState,
      viewState = "preview",
      autoScrollToBottom = true,
      disableMaxHeight = false,
      allowHorizontalScroll = false,
    } = props,
    m =
      viewState === "expanded"
        ? maxHeightByState.expanded
        : viewState === "collapsed"
          ? maxHeightByState.collapsed
          : maxHeightByState.preview,
    h = autoScrollToBottom && "flex flex-col-reverse",
    g = !allowHorizontalScroll && "overflow-x-hidden",
    _ = peers.$(
      "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem] overflow-y-auto",
      h,
      g,
      className,
    );
  let v = disableMaxHeight
    ? undefined
    : {
        maxHeight: m,
      };
  let y = viewState === "preview" && "pb-1",
    b = peers.$("flex flex-col gap-1", contentClassName, y);
  let x = viewState === "collapsed" ? null : items.map(peers.Esl);
  let S = <div className={b}>{x}</div>;
  return (
    <div className={_} style={v}>
      {S}
    </div>
  );
}
