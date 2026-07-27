// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pqo`) / export `cD`.

export type StateToneIconPeers = {
  $: (...args: unknown[]) => unknown;
  _qo: (...args: unknown[]) => unknown;
  gqo: (...args: unknown[]) => unknown;
  vqo: (...args: unknown[]) => unknown;
};
let peers: StateToneIconPeers | null = null;

/** Wire StateToneIcon peers once companions land. */
export function setStateToneIconPeers(next: StateToneIconPeers): void {
  peers = next;
}

/**
 * Bundle export `cD` / internal `pqo`.
 */
export function StateToneIcon(props: unknown) {
  const O = o;
  if (peers == null) {
    throw new Error("StateToneIcon peers are not configured");
  }
  let { className, state, tone = "status" } = props,
    o,
    s;
  {
    let { Icon, iconClassName } = peers.gqo({
      state,
      tone,
    });
    o = Icon;
    s = peers.$(className, iconClassName);
  }
  return <O className={s} />;
}
