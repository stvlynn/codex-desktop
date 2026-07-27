// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vAo`) / export `QO`.

export type RtlAwareToggleThumbPeers = {
  $: (...args: unknown[]) => unknown;
  CAo: (...args: unknown[]) => unknown;
  EAo: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  SAo: (...args: unknown[]) => unknown;
  TAo: (...args: unknown[]) => unknown;
  bAo: (...args: unknown[]) => unknown;
  gAo: (...args: unknown[]) => unknown;
  wAo: (...args: unknown[]) => unknown;
  xAo: (...args: unknown[]) => unknown;
  yAo: (...args: unknown[]) => unknown;
};
let peers: RtlAwareToggleThumbPeers | null = null;

/** Wire RtlAwareToggleThumb peers once companions land. */
export function setRtlAwareToggleThumbPeers(
  next: RtlAwareToggleThumbPeers,
): void {
  peers = next;
}

/**
 * Bundle export `QO` / internal `vAo`.
 */
export function RtlAwareToggleThumb(props: unknown) {
  const GAo = peers.gAo;
  const Np = peers.Np;
  if (peers == null) {
    throw new Error("RtlAwareToggleThumb peers are not configured");
  }
  let {
    active,
    activeHoverSuppressed,
    activeLabel,
    className,
    direction,
    disabled,
    label,
    onActiveHoverSuppressedChange,
    onClick,
    onPointerLeave,
    style,
    ...rest
  } = props;
  let [m, h] = peers.SAo.useState(false),
    g = (direction ?? peers.bAo()) === "rtl",
    _ = activeHoverSuppressed ?? m,
    v = onActiveHoverSuppressedChange ?? h,
    y = _ ? peers.wAo : peers.TAo,
    b = "translate-x-0";
  active && (b = g ? "translate-x-0.5" : "-translate-x-0.5");
  let x = active ? activeLabel : label,
    S = active
      ? {
          "--annotation-mode-button-annotation-background": peers.yAo(
            "charts-blue",
            peers.wAo,
          ),
          "--annotation-mode-button-annotation-hover-background": peers.yAo(
            "charts-blue",
            y,
          ),
        }
      : {};
  let C = {
    ...style,
    ...S,
  };
  let w = C,
    T = active ? "max-w-40 justify-start" : "max-w-8 justify-center px-0",
    E = active && peers.EAo,
    D = peers.$(
      "ease-basic relative isolate min-w-8 overflow-hidden transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none disabled:opacity-100",
      T,
      E,
      className,
    );
  let O = (e) => {
    v(!active);
    onClick(e);
  };
  let k = (e) => {
    v(false);
    onPointerLeave?.(e);
  };
  let A = active ? "justify-start" : "w-full justify-center",
    j = peers.$("flex min-w-0 items-center", A);
  let M = peers.$(
    "icon-sm relative shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none",
    b,
  );
  let N = (
    <GAo
      className={peers.$(
        "absolute inset-0 size-full rotate-0 scale-100 opacity-100",
      )}
    />
  );
  let P = <span className={M}>{N}</span>;
  let F = active ? "ms-1 max-w-32 opacity-100" : "ms-0 max-w-0 opacity-0",
    I = peers.$(
      "ease-basic min-w-0 overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none",
      F,
    );
  let L = <span className={I}>{activeLabel}</span>;
  let R = (
    <span className={j}>
      {P}
      {L}
    </span>
  );
  return (
    <Np
      {...rest}
      color="ghost"
      size="toolbarLabel"
      disabled={disabled}
      aria-label={x}
      aria-pressed={active}
      style={w}
      className={D}
      onClick={O}
      onPointerLeave={k}
    >
      {R}
    </Np>
  );
}
