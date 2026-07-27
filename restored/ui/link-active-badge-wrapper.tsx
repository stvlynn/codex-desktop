// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MZl`) / export `ya`.

export type LinkActiveBadgeWrapperPeers = {
  $: (...args: unknown[]) => unknown;
  NZl: (...args: unknown[]) => unknown;
  PZl: (...args: unknown[]) => unknown;
};
let peers: LinkActiveBadgeWrapperPeers | null = null;

/** Wire LinkActiveBadgeWrapper peers once companions land. */
export function setLinkActiveBadgeWrapperPeers(
  next: LinkActiveBadgeWrapperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ya` / internal `MZl`.
 */
export function LinkActiveBadgeWrapper(props: unknown) {
  if (peers == null) {
    throw new Error("LinkActiveBadgeWrapper peers are not configured");
  }
  let {
    children,
    color = "bg-token-text-link-active-foreground",
    borderColor,
    badgeEnabled = true,
  } = props;
  if (!badgeEnabled) {
    let e;
    return <>{children}</>;
  }
  let c = !badgeEnabled && "hidden",
    l = peers.$(
      "border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]",
      color,
      borderColor,
      c,
    );
  let u = <div className={l} />;
  return (
    <div className="relative">
      {children}
      {u}
    </div>
  );
}
