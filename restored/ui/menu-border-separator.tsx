// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lXi`) / export `ZB`.

export type MenuBorderSeparatorPeers = {
  $: (...args: unknown[]) => unknown;
  HR: (...args: unknown[]) => unknown;
  WR: (...args: unknown[]) => unknown;
};
let peers: MenuBorderSeparatorPeers | null = null;

/** Wire MenuBorderSeparator peers once companions land. */
export function setMenuBorderSeparatorPeers(
  next: MenuBorderSeparatorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZB` / internal `lXi`.
 */
export function MenuBorderSeparator(props: unknown) {
  if (peers == null) {
    throw new Error("MenuBorderSeparator peers are not configured");
  }
  let { className, paddingClassName = "py-1" } = props,
    a = peers.$(
      "w-full px-[var(--padding-row-x)]",
      paddingClassName,
      className,
    );
  let o = <div className="h-[1px] w-full bg-token-menu-border" />;
  return <div className={a}>{o}</div>;
}
