// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hwr`) / export `D1`.

export type TabStripSizedButtonPeers = {
  Np: (...args: unknown[]) => unknown;
  _wr: (...args: unknown[]) => unknown;
  gwr: (...args: unknown[]) => unknown;
  vwr: (...args: unknown[]) => unknown;
  ywr: (...args: unknown[]) => unknown;
};
let peers: TabStripSizedButtonPeers | null = null;

/** Wire TabStripSizedButton peers once companions land. */
export function setTabStripSizedButtonPeers(
  next: TabStripSizedButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `D1` / internal `hwr`.
 */
export function TabStripSizedButton(props: unknown) {
  const Np = peers.Np;
  if (peers == null) {
    throw new Error("TabStripSizedButton peers are not configured");
  }
  let { size = "toolbar", ...rest } = props;
  let a = peers._wr.useContext(peers.ywr) ? "tabStripAction" : size;
  return <Np size={a} {...rest} />;
}
