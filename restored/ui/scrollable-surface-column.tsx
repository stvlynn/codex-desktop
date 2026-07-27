// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wIa`) / export `uN`.

export type BindScrollableSurfaceColumnPeers = {
  $: (...args: unknown[]) => unknown;
  AH: (...args: unknown[]) => unknown;
  kH: (...args: unknown[]) => unknown;
};
let peers: BindScrollableSurfaceColumnPeers | null = null;

/** Wire bindScrollableSurfaceColumn peers once companions land. */
export function setBindScrollableSurfaceColumnPeers(
  next: BindScrollableSurfaceColumnPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uN` / internal `wIa`.
 */
export function bindScrollableSurfaceColumn(props: unknown) {
  if (peers == null) {
    throw new Error("bindScrollableSurfaceColumn peers are not configured");
  }
  let { children, className, surfaceClassName, scrollClassName } = props,
    o = peers.$("flex h-full min-h-0 flex-col pt-4", className);
  let s = peers.$(
    "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-token-border-default/70 bg-token-bg-primary/40",
    surfaceClassName,
  );
  let c = peers.$("h-full min-h-0 overflow-y-auto", scrollClassName);
  let l = <div className={c}>{children}</div>;
  let u = <div className={s}>{l}</div>;
  return <div className={o}>{u}</div>;
}
