// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oXi`) / export `XB`.

export type InsetBorderPanelPeers = {
  $: (...args: unknown[]) => unknown;
  GR: (...args: unknown[]) => unknown;
  HR: (...args: unknown[]) => unknown;
  RR: (...args: unknown[]) => unknown;
  WR: (...args: unknown[]) => unknown;
  aXi: (...args: unknown[]) => unknown;
  sXi: (...args: unknown[]) => unknown;
};
let peers: InsetBorderPanelPeers | null = null;

/** Wire InsetBorderPanel peers once companions land. */
export function setInsetBorderPanelPeers(next: InsetBorderPanelPeers): void {
  peers = next;
}

/**
 * Bundle export `XB` / internal `oXi`.
 */
export function InsetBorderPanel(props: unknown) {
  const RR = peers.RR;
  const AXi = peers.aXi;
  if (peers == null) {
    throw new Error("InsetBorderPanel peers are not configured");
  }
  let {
    className,
    inputClassName,
    onKeyDown,
    trailingContent,
    variant,
    ...rest
  } = props;
  let c =
      (variant === undefined ? "default" : variant) === "inset" &&
      "m-2 !w-auto rounded-lg border border-token-input-border",
    l = peers.$(
      peers.GR.content,
      "px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
      c,
      className,
    );
  let u = <RR className="icon-2xs shrink-0 text-token-text-tertiary" />;
  let d = peers.$(
    "!w-auto flex-1 appearance-none !rounded-none !border-none bg-transparent !px-0 !py-0 text-token-foreground placeholder:text-token-input-placeholder-foreground",
    inputClassName,
  );
  let f = (event) => {
    onKeyDown?.(event);
    !event.defaultPrevented &&
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      peers.sXi(
        event.currentTarget,
        event.key === "ArrowDown" ? "next" : "previous",
      ) &&
      event.preventDefault();
  };
  let p = <AXi className={d} onKeyDown={f} {...rest} />;
  let m = trailingContent ? (
    <div className="shrink-0">{trailingContent}</div>
  ) : null;
  return (
    <div className={l}>
      {u}
      {p}
      {m}
    </div>
  );
}
