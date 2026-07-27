// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bsu`) / export `bn`.

export type IconTitleEmptyStatePeers = {
  $: (...args: unknown[]) => unknown;
  Ssu: (...args: unknown[]) => unknown;
  c9: (...args: unknown[]) => unknown;
};
let peers: IconTitleEmptyStatePeers | null = null;

/** Wire IconTitleEmptyState peers once companions land. */
export function setIconTitleEmptyStatePeers(
  next: IconTitleEmptyStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `bn` / internal `bsu`.
 */
export function IconTitleEmptyState(props: unknown) {
  if (peers == null) {
    throw new Error("IconTitleEmptyState peers are not configured");
  }
  let {
      children,
      icon = null,
      title,
      subtitle,
      className,
      textClassName,
      titleClassName,
      subtitleClassName,
    } = props,
    u = peers.$("flex w-full flex-col items-center gap-6", className);
  let f = peers.$(
    "flex w-full flex-col items-center text-center",
    textClassName,
  );
  let p = peers.$(
    "text-heading-lg font-semibold text-token-foreground",
    titleClassName,
  );
  let m = <span className={p}>{title}</span>;
  let h =
    subtitle == null ? null : (
      <span
        className={peers.$(
          "text-lg leading-6 text-token-description-foreground",
          subtitleClassName,
        )}
      >
        {subtitle}
      </span>
    );
  let g = (
    <div className={f}>
      {m}
      {h}
    </div>
  );
  return (
    <div className={u}>
      {icon}
      {g}
      {children}
    </div>
  );
}
