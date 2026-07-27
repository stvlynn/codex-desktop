// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dhu`) / export `Mt`.

export type StackedCardHeaderPeers = {
  $: (...args: unknown[]) => unknown;
  C9: (...args: unknown[]) => unknown;
  Ohu: (...args: unknown[]) => unknown;
  khu: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
};
let peers: StackedCardHeaderPeers | null = null;

/** Wire StackedCardHeader peers once companions land. */
export function setStackedCardHeaderPeers(next: StackedCardHeaderPeers): void {
  peers = next;
}

/**
 * Bundle export `Mt` / internal `Dhu`.
 */
export function StackedCardHeader(props: unknown) {
  if (peers == null) {
    throw new Error("StackedCardHeader peers are not configured");
  }
  let {
      icon,
      title,
      description,
      contentClassName,
      descriptionClassName,
      descriptionPlacement = "stacked",
      badges,
      actions,
      actionsPlacement = "top",
      onClick,
      iconContainer = true,
      iconContainerVariant = "filled",
      iconPlacement = "outside",
      isHighlighted = false,
      presentation = "card",
      className: _,
    } = props,
    T = (event) => {
      onClick &&
        event.target === event.currentTarget &&
        (event.key === "Enter" || event.key === " ") &&
        (event.preventDefault(), onClick());
    };
  let E = T,
    D = actionsPlacement === "center" && !!actions,
    O = actions ? (
      <div className="flex shrink-0 items-center">{actions}</div>
    ) : null;
  let k = O,
    A = icon ? (
      iconContainer ? (
        <span
          className={peers.$(
            "flex shrink-0 items-center justify-center rounded-lg",
            presentation === "row" ? "size-9" : "size-10",
            iconContainerVariant === "outline"
              ? "border border-token-border-default bg-transparent"
              : "bg-token-bg-primary",
          )}
        >
          {icon}
        </span>
      ) : (
        <span className="shrink-0">{icon}</span>
      )
    ) : null;
  let j = A,
    M =
      presentation === "row"
        ? "min-h-[var(--height-token-row)] w-full min-w-0 justify-center rounded-[var(--radius-token-row)] px-[var(--padding-row-x)] py-[var(--padding-row-y)]"
        : "border-token-border/40 rounded-2xl border p-2.5 hover:bg-token-foreground/5",
    N =
      presentation === "row" &&
      onClick &&
      "hover:bg-token-list-hover-background",
    P = isHighlighted && "bg-token-foreground/5",
    F = onClick ? "cursor-interaction" : null,
    I = peers.$("flex flex-col gap-2.5", M, N, P, F, _);
  let L = isHighlighted ? "true" : undefined,
    R = onClick ? "button" : undefined,
    z = onClick ? 0 : -1,
    B = descriptionPlacement === "inline" && "gap-2",
    V = peers.$("flex items-center gap-3", B);
  let H = iconPlacement === "outside" ? j : null,
    U = D ? "items-center gap-3" : null,
    W = peers.$("flex min-w-0 flex-1", U);
  let G =
      descriptionPlacement === "stacked" ? "flex-col" : "items-center gap-3",
    K = peers.$(
      "flex min-w-0 flex-1 justify-center gap-0.5",
      G,
      contentClassName,
    );
  let q = descriptionPlacement === "inline" && "w-28 shrink-0 sm:w-48",
    ee = D || iconPlacement === "inline" ? null : "justify-between",
    te = peers.$("flex min-w-0 items-center gap-2", q, ee);
  let ne = iconPlacement === "inline" ? j : null,
    re =
      presentation === "row"
        ? "text-[length:var(--detail-row-font-size,var(--text-base))]"
        : "font-medium",
    ie = peers.$("truncate text-token-foreground", re);
  let ae = <div className={ie}>{title}</div>;
  let oe = badges?.length ? (
    <div className="flex shrink-0 items-center gap-1">
      {badges.map(peers.Ohu)}
    </div>
  ) : null;
  let se = (
    <div className="flex min-w-0 items-center gap-2">
      {ae}
      {oe}
    </div>
  );
  let ce = D ? null : k,
    le = (
      <div className={te}>
        {ne}
        {se}
        {ce}
      </div>
    );
  let ue = description ? (
    <div
      className={peers.$(
        "text-token-text-secondary text-sm leading-relaxed",
        descriptionPlacement === "inline"
          ? "min-w-0 flex-1 truncate text-left"
          : null,
        descriptionClassName ?? "line-clamp-3",
      )}
    >
      {description}
    </div>
  ) : null;
  let de = (
    <div className={K}>
      {le}
      {ue}
    </div>
  );
  let fe = D ? k : null,
    pe = (
      <div className={W}>
        {de}
        {fe}
      </div>
    );
  let me = (
    <div className={V}>
      {H}
      {pe}
    </div>
  );
  return (
    <div
      className={I}
      data-search-result-active={L}
      role={R}
      tabIndex={z}
      onClick={onClick}
      onKeyDown={E}
    >
      {me}
    </div>
  );
}
