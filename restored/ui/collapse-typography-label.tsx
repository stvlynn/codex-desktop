// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Net`) / export `blt`.

export type CollapseTypographyLabelPeers = {
  $: (...args: unknown[]) => unknown;
  Fet: (...args: unknown[]) => unknown;
  Pet: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  gh: (...args: unknown[]) => unknown;
};
let peers: CollapseTypographyLabelPeers | null = null;

/** Wire CollapseTypographyLabel peers once companions land. */
export function setCollapseTypographyLabelPeers(
  next: CollapseTypographyLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `blt` / internal `Net`.
 */
export function CollapseTypographyLabel(props: unknown) {
  if (peers == null) {
    throw new Error("CollapseTypographyLabel peers are not configured");
  }
  let { className, collapse, ...rest } = props;
  let a;
  {
    let e;
    bb0: switch (collapse) {
      case "none":
        e = undefined;
        break bb0;
      case "sm":
        e = peers.gh.labelSm;
        break bb0;
      case "xs":
        e = peers.gh.labelXs;
        break bb0;
      case "secondary":
        e = peers.$(peers.gh.labelSm, peers.gh.secondaryLabel);
    }
    a = peers.$(e, className);
  }
  return <span className={a} {...rest} />;
}
