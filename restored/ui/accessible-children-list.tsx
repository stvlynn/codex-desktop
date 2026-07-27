// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vsu`) / export `vn`.

export type BindAccessibleChildrenListPeers = {
  $: (...args: unknown[]) => unknown;
  Ssu: (...args: unknown[]) => unknown;
  c9: (...args: unknown[]) => unknown;
};
let peers: BindAccessibleChildrenListPeers | null = null;

/** Wire bindAccessibleChildrenList peers once companions land. */
export function setBindAccessibleChildrenListPeers(
  next: BindAccessibleChildrenListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vn` / internal `vsu`.
 */
export function bindAccessibleChildrenList(props: unknown) {
  if (peers == null) {
    throw new Error("bindAccessibleChildrenList peers are not configured");
  }
  let { children, ariaLabel, className } = props,
    a = peers.$(
      "flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-token-border bg-token-surface-primary px-5 py-4",
      className,
    );
  return (
    <div className={a} role="list" aria-label={ariaLabel}>
      {children}
    </div>
  );
}
