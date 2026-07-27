// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JWi`) / export `JV`.

export type EmptyMemoSlotPeers = {
  $Wi: (...args: unknown[]) => unknown;
  QWi: (...args: unknown[]) => unknown;
  XWi: (...args: unknown[]) => unknown;
  YWi: (...args: unknown[]) => unknown;
  ZWi: (...args: unknown[]) => unknown;
};
let peers: EmptyMemoSlotPeers | null = null;

/** Wire EmptyMemoSlot peers once companions land. */
export function setEmptyMemoSlotPeers(next: EmptyMemoSlotPeers): void {
  peers = next;
}

/**
 * Bundle export `JV` / internal `JWi`.
 */
export function EmptyMemoSlot(props: unknown) {
  const YWi = peers.YWi;
  const Suspense = peers.ZWi.Suspense;
  const Wi = peers.$Wi;
  if (peers == null) {
    throw new Error("EmptyMemoSlot peers are not configured");
  }
  let n = <YWi />;
  return (
    <Suspense fallback={n}>
      <Wi {...props} />
    </Suspense>
  );
}
