// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Km`) / export `Glt`.

export type HotkeyKeysLabelPeers = {
  $: (...args: unknown[]) => unknown;
  H7e: (...args: unknown[]) => unknown;
  U7e: (...args: unknown[]) => unknown;
};
let peers: HotkeyKeysLabelPeers | null = null;

/** Wire HotkeyKeysLabel peers once companions land. */
export function setHotkeyKeysLabelPeers(next: HotkeyKeysLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `Glt` / internal `Km`.
 */
export function HotkeyKeysLabel(props: unknown) {
  if (peers == null) {
    throw new Error("HotkeyKeysLabel peers are not configured");
  }
  let { keysLabel, variant, className } = props,
    a =
      (variant === undefined ? "default" : variant) === "button"
        ? "h-4 min-w-4 items-center justify-center !px-1.5 !py-0 !leading-4"
        : "!px-1.5 !py-0.5 !leading-none",
    o = peers.$(
      "inline-flex !rounded-md !border-0 !bg-current/10 !font-sans !text-xs !text-current !shadow-none",
      a,
      className,
    );
  return <kbd className={o}>{keysLabel}</kbd>;
}
