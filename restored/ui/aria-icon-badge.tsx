// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Chu`) / export `Pt`.

export type AriaIconBadgePeers = {
  Thu: (...args: unknown[]) => unknown;
  whu: (...args: unknown[]) => unknown;
};
let peers: AriaIconBadgePeers | null = null;

/** Wire AriaIconBadge peers once companions land. */
export function setAriaIconBadgePeers(next: AriaIconBadgePeers): void {
  peers = next;
}

/**
 * Bundle export `Pt` / internal `Chu`.
 */
export function AriaIconBadge(props: unknown) {
  if (peers == null) {
    throw new Error("AriaIconBadge peers are not configured");
  }
  let { ariaLabel, icon } = props;
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className="flex h-7 w-7 items-center justify-center rounded-md text-token-description-foreground"
    >
      {icon}
    </span>
  );
}
