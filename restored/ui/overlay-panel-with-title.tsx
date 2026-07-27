// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `e1c`) / export `ru`.

export type OverlayPanelWithTitlePeers = {
  n1c: (...args: unknown[]) => unknown;
  t1c: (...args: unknown[]) => unknown;
};
let peers: OverlayPanelWithTitlePeers | null = null;

/** Wire OverlayPanelWithTitle peers once companions land. */
export function setOverlayPanelWithTitlePeers(
  next: OverlayPanelWithTitlePeers,
): void {
  peers = next;
}

/**
 * Bundle export `ru` / internal `e1c`.
 */
export function OverlayPanelWithTitle(props: unknown) {
  if (peers == null) {
    throw new Error("OverlayPanelWithTitle peers are not configured");
  }
  let { actions, children, title } = props,
    a = <span className="opacity-75">{title}</span>;
  let o = (
    <div className="flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-token-input-placeholder-foreground">
      {a}
      {actions}
    </div>
  );
  let s = <div className="flex min-h-0 flex-col">{children}</div>;
  return (
    <section className="flex min-h-0 flex-col">
      {o}
      {s}
    </section>
  );
}
