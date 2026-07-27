// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `h2l`) / export `li`.

export type SidebarLegacyContentLayoutPeers = {
  $: (...args: unknown[]) => unknown;
  Gar: (...args: unknown[]) => unknown;
  JIr: (...args: unknown[]) => unknown;
  S7: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  g2l: (...args: unknown[]) => unknown;
  qD: (...args: unknown[]) => unknown;
  uM: (...args: unknown[]) => unknown;
};
let peers: SidebarLegacyContentLayoutPeers | null = null;

/** Wire SidebarLegacyContentLayout peers once companions land. */
export function setSidebarLegacyContentLayoutPeers(
  next: SidebarLegacyContentLayoutPeers,
): void {
  peers = next;
}

/**
 * Bundle export `li` / internal `h2l`.
 */
export function SidebarLegacyContentLayout(props: unknown) {
  const LeftPanel = peers.uM.LeftPanel;
  const Root = peers.uM.Root;
  if (peers == null) {
    throw new Error("SidebarLegacyContentLayout peers are not configured");
  }
  let { children, legacyContentRef, sidebar } = props,
    a = peers.Y(peers.qD),
    o = peers.Y(peers.Gar);
  if (peers.JIr()) {
    let e = a && (
      <LeftPanel>
        <div
          className={
            "flex h-full min-h-0 flex-col overflow-hidden [&>nav]:pt-2"
          }
        >
          {sidebar}
        </div>
      </LeftPanel>
    );
    let r = <div className="h-full min-w-0 overflow-visible">{children}</div>;
    let o;
    return (
      <Root>
        {e}
        {r}
      </Root>
    );
  }
  let s = {
    width: "calc(100vw / var(--codex-window-zoom))",
    height: "calc(100vh / var(--codex-window-zoom))",
    zoom: "var(--codex-window-zoom)",
  };
  let c = peers.$(
    "app-shell-left-panel relative flex min-h-0 shrink-0 flex-col overflow-hidden",
    false,
  );
  let l = {
    width: o,
  };
  let u = <div className="draggable h-toolbar w-full shrink-0" />;
  let d = (
    <div className={c} style={l}>
      {u}
      {sidebar}
    </div>
  );
  let f = (
    <div
      ref={legacyContentRef}
      className="relative isolate min-w-0 flex-1 overflow-visible"
    >
      {children}
    </div>
  );
  return (
    <div className="flex h-full min-h-0" style={s}>
      {d}
      {f}
    </div>
  );
}
