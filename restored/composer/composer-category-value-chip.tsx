// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Fos`) / export `IS`.

export type ComposerCategoryValueChipPeers = {
  $: (...args: unknown[]) => unknown;
  GX: (...args: unknown[]) => unknown;
  Los: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  gh: (...args: unknown[]) => unknown;
  zos: (...args: unknown[]) => unknown;
};
let peers: ComposerCategoryValueChipPeers | null = null;

/** Wire ComposerCategoryValueChip peers once companions land. */
export function setComposerCategoryValueChipPeers(
  next: ComposerCategoryValueChipPeers,
): void {
  peers = next;
}

/**
 * Bundle export `IS` / internal `Fos`.
 */
export function ComposerCategoryValueChip(props: unknown) {
  const Los = peers.Los;
  const Np = peers.Np;
  if (peers == null) {
    throw new Error("ComposerCategoryValueChip peers are not configured");
  }
  let {
    categoryLabel,
    className,
    collapse,
    icon,
    indicator,
    value,
    valueClassName,
    ...rest
  } = props;
  let u = peers.$(peers.gh.utilityBarLabel, "min-w-0 items-center", className);
  let d = (
    <Los
      categoryLabel={categoryLabel}
      collapse={collapse}
      icon={icon}
      indicator={indicator}
      selectedValue={value}
      selectedValueClassName={valueClassName}
      foreground="primary"
    />
  );
  return (
    <Np className={u} color="ghost" size="composerSm" {...rest}>
      {d}
    </Np>
  );
}
