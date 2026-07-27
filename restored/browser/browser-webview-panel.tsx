// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r7l`) / export `Cr`.

export type BrowserWebviewPanelPeers = {
  $: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  R7: (...args: unknown[]) => unknown;
  bw: (...args: unknown[]) => unknown;
  i7l: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  oRr: (...args: unknown[]) => unknown;
  t7l: (...args: unknown[]) => unknown;
  wj: (...args: unknown[]) => unknown;
};
let peers: BrowserWebviewPanelPeers | null = null;

/** Wire BrowserWebviewPanel peers once companions land. */
export function setBrowserWebviewPanelPeers(
  next: BrowserWebviewPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cr` / internal `r7l`.
 */
export function BrowserWebviewPanel(props: unknown) {
  const Wj = peers.wj;
  const Np = peers.Np;
  const Jp = peers.jp;
  if (peers == null) {
    throw new Error("BrowserWebviewPanel peers are not configured");
  }
  let { isLoading, partition, src, webviewRef } = props,
    o = peers.Ju(),
    s = peers.bw(),
    c = peers.oRr(),
    l = o.formatMessage({
      id: "checkout.webview.backToChatGpt",
      defaultMessage: "Back to ChatGPT",
      description:
        "Button label in an authenticated ChatGPT webview toolbar that returns the user to ChatGPT in the Codex app",
    });
  let u = l,
    d = Math.max(c.left, 8),
    f = {
      paddingInlineStart: d,
    };
  let p = () => {
    s("/", {
      replace: true,
    });
  };
  let m = <Wj className="icon-xs" />;
  let h = (
    <Np
      aria-label={u}
      className="ms-3"
      color="ghost"
      size="toolbar"
      onClick={p}
    >
      {m}
      {u}
    </Np>
  );
  let g = (
    <header
      className="draggable flex h-toolbar w-full shrink-0 items-center border-b border-token-border pe-2"
      style={f}
    >
      {h}
    </header>
  );
  let _ = isLoading ? (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-token-main-surface-primary">
      {<Jp Icon={peers.t7l} />}
    </div>
  ) : null;
  let v = isLoading && "invisible",
    y = peers.$("block h-full w-full bg-token-main-surface-primary", v);
  let b = (
    <webview className={y} partition={partition} ref={webviewRef} src={src} />
  );
  let x = (
    <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
      {_}
      {b}
    </div>
  );
  return (
    <main className="no-drag flex h-full min-h-0 flex-col overflow-hidden bg-token-main-surface-primary">
      {g}
      {x}
    </main>
  );
}
