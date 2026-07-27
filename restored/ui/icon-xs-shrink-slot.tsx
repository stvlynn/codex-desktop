// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H1c`) / export `Zl`.

export type IconXsShrinkSlotPeers = {
  U1c: (...args: unknown[]) => unknown;
  Xh: (...args: unknown[]) => unknown;
  w3: (...args: unknown[]) => unknown;
};
let peers: IconXsShrinkSlotPeers | null = null;

/** Wire IconXsShrinkSlot peers once companions land. */
export function setIconXsShrinkSlotPeers(next: IconXsShrinkSlotPeers): void {
  peers = next;
}

/**
 * Bundle export `Zl` / internal `H1c`.
 */
export function IconXsShrinkSlot() {
  const Xh = peers.Xh;
  if (peers == null) {
    throw new Error("IconXsShrinkSlot peers are not configured");
  }
  return <Xh className="icon-xs shrink-0" />;
}
