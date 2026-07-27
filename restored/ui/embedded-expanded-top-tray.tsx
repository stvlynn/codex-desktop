// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RHa`) / export `jM`.

export type BindEmbeddedExpandedTopTrayPeers = {
  $: (...args: unknown[]) => unknown;
  GHa: (...args: unknown[]) => unknown;
  QH: (...args: unknown[]) => unknown;
  WHa: (...args: unknown[]) => unknown;
  jHa: (...args: unknown[]) => unknown;
  vw: (...args: unknown[]) => unknown;
};
let peers: BindEmbeddedExpandedTopTrayPeers | null = null;

/** Wire bindEmbeddedExpandedTopTray peers once companions land. */
export function setBindEmbeddedExpandedTopTrayPeers(
  next: BindEmbeddedExpandedTopTrayPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jM` / internal `RHa`.
 */
export function bindEmbeddedExpandedTopTray(props: unknown) {
  const JHa = peers.jHa;
  if (peers == null) {
    throw new Error("bindEmbeddedExpandedTopTray peers are not configured");
  }
  let {
      children,
      className,
      chromeVariant = "default",
      containerRef,
      padded = true,
    } = props,
    l = peers.vw(),
    u = chromeVariant === "embeddedExpandedTopTray";
  if (chromeVariant === "expandedTopTray" || u || peers.QH(l.pathname)) {
    let e = peers.$(
      "relative flex w-full flex-col overflow-hidden text-sm",
      className,
    );
    let i;
    return (
      <JHa
        embedded={u}
        expandedTopTray={true}
        containerRef={containerRef}
        className={e}
      >
        {children}
      </JHa>
    );
  }
  let d = padded && "p-1",
    f = peers.$(
      "border-token-border bg-token-dropdown-background/90 relative flex w-full flex-col overflow-hidden rounded-2xl border text-sm backdrop-blur-sm",
      d,
      className,
    );
  return (
    <div ref={containerRef} className={f}>
      {children}
    </div>
  );
}
