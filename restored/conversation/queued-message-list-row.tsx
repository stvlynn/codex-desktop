// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xCs`) / export `eb`.

export type QueuedMessageListRowPeers = {
  $: (...args: unknown[]) => unknown;
  CCs: (...args: unknown[]) => unknown;
  SCs: (...args: unknown[]) => unknown;
};
let peers: QueuedMessageListRowPeers | null = null;

/** Wire QueuedMessageListRow peers once companions land. */
export function setQueuedMessageListRowPeers(
  next: QueuedMessageListRowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eb` / internal `xCs`.
 */
export function QueuedMessageListRow(props: unknown) {
  if (peers == null) {
    throw new Error("QueuedMessageListRow peers are not configured");
  }
  let {
    actions,
    className,
    icon,
    meta,
    title,
    titleClassName,
    trailing,
    ...rest
  } = props;
  let u = peers.$(
    "group flex min-w-0 items-center justify-between gap-2 py-0.5 text-sm",
    className,
  );
  let d =
    icon == null ? null : (
      <span className="flex h-4 shrink-0 items-center justify-center">
        {icon}
      </span>
    );
  let f = peers.$("min-w-0 flex-1 leading-4", titleClassName);
  let p =
    meta == null ? null : (
      <span className="ml-1 text-token-description-foreground">{meta}</span>
    );
  let m = (
    <div className={f}>
      {title}
      {p}
    </div>
  );
  let h = (
    <div className="flex min-w-0 flex-1 items-center gap-1.5">
      {d}
      {m}
    </div>
  );
  let g =
    trailing != null || actions != null ? (
      <div className="flex shrink-0 items-center gap-1">
        {trailing}
        {actions}
      </div>
    ) : null;
  return (
    <div {...rest} className={u}>
      {h}
      {g}
    </div>
  );
}
