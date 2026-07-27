// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zHa`) / export `MM`.

export type VerticalScrollFadeMaskPeers = {
  $: (...args: unknown[]) => unknown;
  GHa: (...args: unknown[]) => unknown;
  WHa: (...args: unknown[]) => unknown;
};
let peers: VerticalScrollFadeMaskPeers | null = null;

/** Wire VerticalScrollFadeMask peers once companions land. */
export function setVerticalScrollFadeMaskPeers(
  next: VerticalScrollFadeMaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `MM` / internal `zHa`.
 */
export function VerticalScrollFadeMask(props: unknown) {
  if (peers == null) {
    throw new Error("VerticalScrollFadeMask peers are not configured");
  }
  let { children, className, fadeMaskVariant = "both", listRef } = props,
    s = "vertical-scroll-fade-mask";
  fadeMaskVariant === "bottom"
    ? (s = "vertical-scroll-fade-mask-bottom")
    : fadeMaskVariant === "top" && (s = "vertical-scroll-fade-mask-top");
  let c = peers.$(s, "flex w-full flex-1 flex-col overflow-y-auto", className);
  return (
    <div ref={listRef} className={c}>
      {children}
    </div>
  );
}
