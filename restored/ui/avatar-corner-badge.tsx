// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xza`) / export `ZM`.

export type AvatarCornerBadgePeers = {
  B9r: (...args: unknown[]) => unknown;
  Cza: (...args: unknown[]) => unknown;
  Sza: (...args: unknown[]) => unknown;
};
let peers: AvatarCornerBadgePeers | null = null;

/** Wire AvatarCornerBadge peers once companions land. */
export function setAvatarCornerBadgePeers(next: AvatarCornerBadgePeers): void {
  peers = next;
}

/**
 * Bundle export `ZM` / internal `xza`.
 */
export function AvatarCornerBadge(props: unknown) {
  const B9r = peers.B9r;
  if (peers == null) {
    throw new Error("AvatarCornerBadge peers are not configured");
  }
  let { children } = props,
    r = (
      <span className="absolute -right-0.5 -bottom-0.5 flex size-3 items-center justify-center rounded-full border border-token-bg-primary bg-token-bg-primary text-token-foreground">
        {<B9r className="size-2" />}
      </span>
    );
  return (
    <span className="relative shrink-0">
      {children}
      {r}
    </span>
  );
}
