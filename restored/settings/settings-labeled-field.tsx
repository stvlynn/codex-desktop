// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ais`) / export `gC`.

export type SettingsLabeledFieldPeers = {
  $: (...args: unknown[]) => unknown;
  PX: (...args: unknown[]) => unknown;
  jis: (...args: unknown[]) => unknown;
};
let peers: SettingsLabeledFieldPeers | null = null;

/** Wire SettingsLabeledField peers once companions land. */
export function setSettingsLabeledFieldPeers(
  next: SettingsLabeledFieldPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gC` / internal `Ais`.
 */
export function SettingsLabeledField(props: unknown) {
  if (peers == null) {
    throw new Error("SettingsLabeledField peers are not configured");
  }
  let {
      children,
      compactLabelInset = true,
      label,
      valueAlignment = "start",
      variant = "default",
    } = props,
    u =
      variant === "compact"
        ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-token-foreground electron:opacity-75"
        : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6",
    d = peers.$("grid items-center", u);
  let f = peers.$(
    "min-w-0",
    variant === "compact"
      ? peers.$("flex items-center pr-2 text-left", compactLabelInset && "pl-1")
      : "text-sm text-token-text-secondary",
  );
  let p = <div className={f}>{label}</div>;
  let m = peers.$(
    "min-w-0",
    variant === "compact"
      ? "flex items-center justify-end justify-self-stretch overflow-hidden"
      : peers.$(
          "break-words whitespace-normal text-sm text-token-text-primary",
          valueAlignment === "end" && "text-right",
        ),
  );
  let h = <div className={m}>{children}</div>;
  return (
    <div className={d}>
      {p}
      {h}
    </div>
  );
}
