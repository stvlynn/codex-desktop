// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BR`) / export `YB`.

export type IconTrailingHintRowPeers = {
  $: (...args: unknown[]) => unknown;
  GR: (...args: unknown[]) => unknown;
  HR: (...args: unknown[]) => unknown;
  PYi: (...args: unknown[]) => unknown;
  UR: (...args: unknown[]) => unknown;
  WR: (...args: unknown[]) => unknown;
  iXi: (...args: unknown[]) => unknown;
  nXi: (...args: unknown[]) => unknown;
  yXi: (...args: unknown[]) => unknown;
};
let peers: IconTrailingHintRowPeers | null = null;

/** Wire IconTrailingHintRow peers once companions land. */
export function setIconTrailingHintRowPeers(
  next: IconTrailingHintRowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `YB` / internal `BR`.
 */
export function IconTrailingHintRow(props: unknown) {
  const K2 = k;
  const PYi = peers.PYi;
  const YXi = peers.yXi;
  if (peers == null) {
    throw new Error("IconTrailingHintRow peers are not configured");
  }
  let {
    children,
    LeftIcon,
    keyboardShortcut,
    leftIconClassName,
    RightIcon,
    rightIcon,
    rightIconClassName = "icon-xs",
    className,
    onClick,
    onSelect,
    disabled,
    focusableWhenDisabled = false,
    href,
    SubText,
    tooltipText,
    tooltipDisabled,
    tooltipTextClassName,
    tooltipInteractive,
    tooltipSide,
    tooltipAlign,
    tooltipOpenWhen,
    allowWrap: _ = false,
    subTextAllowWrap = false,
    ...rest
  } = props;
  let k = href ? "a" : "div",
    A = !!disabled && focusableWhenDisabled,
    j = !disabled && (!!href || !!onClick || !!onSelect),
    M,
    N;
  {
    let e = peers.UR.Children.toArray(children);
    M = peers.UR.isValidElement(e[0]) && e[0].type === peers.iXi ? e[0] : null;
    N = M ? e.slice(1) : children;
  }
  let P = N,
    F = SubText == null ? "icon-xs" : "icon-sm",
    I =
      M ??
      (LeftIcon ? (
        <LeftIcon className={peers.$(leftIconClassName ?? F, peers.GR.icon)} />
      ) : null);
  let L = I,
    z = peers.$(rightIconClassName, peers.GR.icon);
  let B = z,
    V = rightIcon ?? (RightIcon ? <RightIcon className={B} /> : null);
  let H = V,
    U =
      keyboardShortcut || H ? (
        <>
          {keyboardShortcut ? (
            <span className="ml-2 shrink-0 text-xs text-token-description-foreground">
              {keyboardShortcut}
            </span>
          ) : null}
          {H}
        </>
      ) : null;
  let W = U,
    G =
      SubText == null ? (
        <div className={peers.GR.content}>
          {L}
          <span
            data-tooltip-overflow-target={
              tooltipOpenWhen === "trigger-overflows" ? "" : undefined
            }
            className={peers.$(
              "flex-1 min-w-0",
              _ ? "whitespace-normal" : "truncate",
            )}
          >
            {P}
          </span>
          {W}
        </div>
      ) : (
        <div
          className={
            L == null ? peers.GR.content : peers.GR.contentWithIconAndSubText
          }
        >
          {L}
          <div className="flex min-w-0 flex-1 flex-col">
            <span
              data-tooltip-overflow-target={
                tooltipOpenWhen === "trigger-overflows" ? "" : undefined
              }
              className={peers.$(
                "min-w-0",
                _ ? "whitespace-normal" : "truncate",
              )}
            >
              {P}
            </span>
            <span
              className={peers.$(
                "min-w-0",
                subTextAllowWrap ? "whitespace-normal" : "truncate",
              )}
            >
              {SubText}
            </span>
          </div>
          {W}
        </div>
      );
  let K = G,
    q = disabled ? "cursor-default opacity-50" : j && peers.GR.itemInteractive,
    ee = peers.$("no-drag", peers.GR.itemBase, q, className);
  let te = disabled || undefined,
    ne = disabled ? undefined : onClick,
    re = A ? peers.nXi : disabled ? undefined : onSelect,
    ie = disabled && !focusableWhenDisabled,
    ae = href && "!text-token-foreground focus:!outline-none",
    oe = peers.$(ae, "flex flex-col");
  let se = (
    <K2 href={href} className={oe}>
      {K}
    </K2>
  );
  let ce = (
    <PYi
      asChild={true}
      className={ee}
      aria-disabled={te}
      onClick={ne}
      onSelect={re}
      disabled={ie}
      {...rest}
    >
      {se}
    </PYi>
  );
  return (
    <YXi
      tooltipText={tooltipText}
      tooltipDisabled={tooltipDisabled}
      tooltipTextClassName={tooltipTextClassName}
      tooltipInteractive={tooltipInteractive}
      tooltipSide={tooltipSide}
      tooltipAlign={tooltipAlign}
      tooltipOpenWhen={tooltipOpenWhen}
    >
      {ce}
    </YXi>
  );
}
