// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ios`) / export `LS`.

export type UtilityBarCategoryValuePeers = {
  $: (...args: unknown[]) => unknown;
  GX: (...args: unknown[]) => unknown;
  Los: (...args: unknown[]) => unknown;
  gh: (...args: unknown[]) => unknown;
  zos: (...args: unknown[]) => unknown;
};
let peers: UtilityBarCategoryValuePeers | null = null;

/** Wire UtilityBarCategoryValue peers once companions land. */
export function setUtilityBarCategoryValuePeers(
  next: UtilityBarCategoryValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `LS` / internal `Ios`.
 */
export function UtilityBarCategoryValue(props: unknown) {
  const Los = peers.Los;
  if (peers == null) {
    throw new Error("UtilityBarCategoryValue peers are not configured");
  }
  let { categoryLabel, className, collapse, icon, value, valueClassName } =
      props,
    c = peers.$(
      peers.gh.utilityBarLabel,
      "flex min-w-0 items-center gap-1",
      className,
    );
  let l = (
    <Los
      categoryLabel={categoryLabel}
      collapse={collapse}
      icon={icon}
      indicator="none"
      selectedValue={value}
      selectedValueClassName={valueClassName}
      foreground="primary"
    />
  );
  return <div className={c}>{l}</div>;
}
