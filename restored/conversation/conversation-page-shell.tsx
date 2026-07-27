// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A8`) / export `us`.

export type ConversationPageShellPeers = {
  $: (...args: unknown[]) => unknown;
  M8: (...args: unknown[]) => unknown;
  nFl: (...args: unknown[]) => unknown;
  tFl: (...args: unknown[]) => unknown;
};
let peers: ConversationPageShellPeers | null = null;

/** Wire ConversationPageShell peers once companions land. */
export function setConversationPageShellPeers(
  next: ConversationPageShellPeers,
): void {
  peers = next;
}

/**
 * Bundle export `us` / internal `A8`.
 */
export function ConversationPageShell(props: unknown) {
  if (peers == null) {
    throw new Error("ConversationPageShell peers are not configured");
  }
  let {
    icon,
    label,
    hideLabel,
    fullWidth = true,
    hoverBackground = true,
    onClick,
    isActive = false,
    activeVariant = "default",
    disabled = false,
    className,
    weightClassName,
    iconClassName = "icon-xs",
    trailing,
    interactiveTrailing,
    ...rest
  } = props;
  let C =
      activeVariant === "accent"
        ? "bg-token-text-link-foreground/10 hover:bg-token-text-link-foreground/15"
        : "bg-token-list-hover-background",
    w =
      activeVariant === "accent"
        ? "text-token-text-link-foreground"
        : "text-token-list-active-selection-foreground",
    T =
      activeVariant === "accent"
        ? "text-token-text-link-foreground"
        : "text-token-list-active-selection-icon-foreground",
    E = fullWidth ? "flex w-full" : "inline-flex w-auto",
    D = isActive
      ? C
      : hoverBackground && "hover:bg-token-list-hover-background",
    O = peers.$(
      "sidebar-item focus-visible:outline-token-border relative h-[var(--height-token-row)] px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y cursor-interaction shrink-0 items-center overflow-hidden text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-2",
      E,
      D,
      weightClassName,
      className,
    );
  let k = O,
    A = fullWidth && "flex-1",
    j = hideLabel !== undefined && "min-h-6",
    M = isActive ? w : "text-token-foreground",
    N = peers.$("flex min-w-0 items-center text-base gap-2", A, j, M);
  let P = peers.nFl.isValidElement(icon)
    ? icon
    : peers.nFl.createElement(icon, {
        className: peers.$(iconClassName, isActive && T),
      });
  let F = (
    <span className="flex w-4 shrink-0 items-center justify-center">{P}</span>
  );
  let I = hideLabel ? null : (
    <span className="text-fade-truncate">{label}</span>
  );
  let L = (
    <div className={N}>
      {F}
      {I}
    </div>
  );
  let R = L;
  if (interactiveTrailing != null) {
    let e = isActive ? "page" : undefined,
      n = rest,
      r = (
        <button
          type="button"
          className="flex min-w-0 flex-1 cursor-interaction items-center text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border disabled:cursor-not-allowed"
          onClick={onClick}
          aria-current={e}
          disabled={disabled}
          {...n}
        >
          {R}
        </button>
      );
    let i;
    return (
      <div className={k}>
        {r}
        {interactiveTrailing}
      </div>
    );
  }
  let z = isActive ? "page" : undefined,
    B = rest;
  return (
    <button
      type="button"
      className={k}
      onClick={onClick}
      aria-current={z}
      disabled={disabled}
      {...B}
    >
      {R}
      {trailing}
    </button>
  );
}
