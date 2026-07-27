// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ahs`) / export `Tx`.

export type QueuedMessageTraySurfacePeers = {
  $: (...args: unknown[]) => unknown;
  chs: (...args: unknown[]) => unknown;
  lhs: (...args: unknown[]) => unknown;
  ohs: (...args: unknown[]) => unknown;
  shs: (...args: unknown[]) => unknown;
};
let peers: QueuedMessageTraySurfacePeers | null = null;

/** Wire QueuedMessageTraySurface peers once companions land. */
export function setQueuedMessageTraySurfacePeers(
  next: QueuedMessageTraySurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Tx` / internal `ahs`.
 */
export function QueuedMessageTraySurface(props: unknown) {
  if (peers == null) {
    throw new Error("QueuedMessageTraySurface peers are not configured");
  }
  let { className, children, opaque = false, tone = "normal" } = props,
    { expandedTopTray } = peers.shs.useContext(peers.lhs),
    l =
      !expandedTopTray &&
      "border-token-border/80 border-x border-t first:rounded-t-2xl",
    u =
      !expandedTopTray && (!opaque || tone === "warning") && "backdrop-blur-sm",
    d = tone === "warning" && "bg-token-input-validation-warning-background/30",
    f =
      !expandedTopTray &&
      tone === "normal" &&
      (opaque ? "bg-token-input-background" : "bg-token-input-background/70"),
    p = peers.$(
      "relative min-w-0 overflow-clip text-token-foreground",
      l,
      u,
      d,
      f,
      className,
    );
  return <div className={p}>{children}</div>;
}
