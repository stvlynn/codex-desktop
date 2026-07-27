// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Met`) / export `ylt`.

export type ResponsiveSelectNoneLabelPeers = {
  $: (...args: unknown[]) => unknown;
  Fet: (...args: unknown[]) => unknown;
  Pet: (...args: unknown[]) => unknown;
  gh: (...args: unknown[]) => unknown;
};
let peers: ResponsiveSelectNoneLabelPeers | null = null;

/** Wire ResponsiveSelectNoneLabel peers once companions land. */
export function setResponsiveSelectNoneLabelPeers(
  next: ResponsiveSelectNoneLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ylt` / internal `Met`.
 */
export function ResponsiveSelectNoneLabel(props: unknown) {
  if (peers == null) {
    throw new Error("ResponsiveSelectNoneLabel peers are not configured");
  }
  let { className, responsive, ...rest } = props;
  let a = (responsive === undefined ? true : responsive) && peers.gh.footer,
    o = peers.$("select-none", a, className);
  return <div className={o} {...rest} />;
}
