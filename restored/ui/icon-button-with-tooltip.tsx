// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ara`) / export `GL`.

export type BindIconButtonWithTooltipPeers = {
  DB: (...args: unknown[]) => unknown;
  EB: (...args: unknown[]) => unknown;
  M7r: (...args: unknown[]) => unknown;
  TB: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  hB: (...args: unknown[]) => unknown;
  jna: (...args: unknown[]) => unknown;
  jra: (...args: unknown[]) => unknown;
};
let peers: BindIconButtonWithTooltipPeers | null = null;

/** Wire bindIconButtonWithTooltip peers once companions land. */
export function setBindIconButtonWithTooltipPeers(
  next: BindIconButtonWithTooltipPeers,
): void {
  peers = next;
}

/**
 * Bundle export `GL` / internal `Ara`.
 */
export function bindIconButtonWithTooltip(props: unknown) {
  const Jra = peers.jra;
  const N = n;
  if (peers == null) {
    throw new Error("bindIconButtonWithTooltip peers are not configured");
  }
  let n, r, i, a, o, s, c;
  c = Symbol.for("react.early_return_sentinel");
  bb0: {
    let { iconSmall, showTooltip, ...rest } = props;
    r = rest;
    i = showTooltip === undefined ? true : showTooltip;
    let f = peers.M7r(iconSmall);
    let p = f;
    if (p != null) {
      c = <Jra connectorLogoRequest={p} showTooltip={i} {...r} />;
      break bb0;
    }
    n = peers.TB;
    a = r.brandColor;
    o = r.dataAttributes;
    s = peers.jna(null, {
      alt: r.displayName,
      iconSmall,
      basePath: r.href ?? "",
      fallbackName: r.fallbackName,
      fallbackDescription: r.description,
      fallbackIcon: r.fallbackIcon ?? peers.hB(),
    });
  }
  if (c !== Symbol.for("react.early_return_sentinel")) return c;
  let l = i ? (r.description ?? r.tooltipText) : undefined;
  return (
    <N
      brandColor={a}
      dataAttributes={o}
      icon={s}
      text={r.displayName}
      textClassName={r.textClassName}
      tooltipText={l}
    />
  );
}
