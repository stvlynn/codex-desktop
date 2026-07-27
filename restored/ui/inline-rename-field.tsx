// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `URl`) / export `Wo`.

export type BindInlineRenameFieldPeers = {
  $8: (...args: unknown[]) => unknown;
  KRl: (...args: unknown[]) => unknown;
  WRl: (...args: unknown[]) => unknown;
};
let peers: BindInlineRenameFieldPeers | null = null;

/** Wire bindInlineRenameField peers once companions land. */
export function setBindInlineRenameFieldPeers(
  next: BindInlineRenameFieldPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Wo` / internal `URl`.
 */
export function bindInlineRenameField(props: unknown) {
  const WRl = peers.WRl;
  if (peers == null) {
    throw new Error("bindInlineRenameField peers are not configured");
  }
  let {
    initialValue,
    initialColor = null,
    showColorPicker = false,
    requireNonEmpty = false,
    trimOnSave = false,
    ...rest
  } = props;
  let f = `${initialValue}:${initialColor ?? "default"}:${showColorPicker}`;
  return (
    <WRl
      key={f}
      initialValue={initialValue}
      initialColor={initialColor}
      showColorPicker={showColorPicker}
      requireNonEmpty={requireNonEmpty}
      trimOnSave={trimOnSave}
      {...rest}
    />
  );
}
