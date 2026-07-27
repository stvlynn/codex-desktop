// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wFs`) / export `V_`.

export type BindIconLabeledAlignedRowPeers = {
  $: (...args: unknown[]) => unknown;
  EFs: (...args: unknown[]) => unknown;
  TFs: (...args: unknown[]) => unknown;
};
let peers: BindIconLabeledAlignedRowPeers | null = null;

/** Wire bindIconLabeledAlignedRow peers once companions land. */
export function setBindIconLabeledAlignedRowPeers(
  next: BindIconLabeledAlignedRowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `V_` / internal `wFs`.
 */
export function bindIconLabeledAlignedRow(props: unknown) {
  if (peers == null) {
    throw new Error("bindIconLabeledAlignedRow peers are not configured");
  }
  let { align, children, className, icon, label } = props,
    s =
      (align === undefined ? "center" : align) === "start"
        ? "[@container_(min-width:24rem)]:items-start"
        : "[@container_(min-width:24rem)]:items-center",
    c = peers.$(
      "grid min-h-[var(--height-token-row)] grid-cols-1 items-start gap-x-3 gap-y-0.5 py-row-y text-[length:var(--detail-row-font-size,var(--text-base))] leading-5 [@container_(min-width:24rem)]:grid-cols-[var(--detail-property-label-width,120px)_minmax(0,1fr)]",
      s,
      className,
    );
  let l = (
    <dt className="flex min-w-0 items-center gap-2 wrap-anywhere text-token-description-foreground">
      {icon}
      {label}
    </dt>
  );
  let u = (
    <dd className="m-0 flex min-w-0 items-center wrap-anywhere text-token-foreground">
      {children}
    </dd>
  );
  return (
    <div className={c}>
      {l}
      {u}
    </div>
  );
}
