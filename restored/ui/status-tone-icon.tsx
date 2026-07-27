// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fqo`) / export `sD`.

export type StatusToneIconPeers = {
  $: (...args: unknown[]) => unknown;
  _qo: (...args: unknown[]) => unknown;
  hqo: (...args: unknown[]) => unknown;
  vqo: (...args: unknown[]) => unknown;
};
let peers: StatusToneIconPeers | null = null;

/** Wire StatusToneIcon peers once companions land. */
export function setStatusToneIconPeers(next: StatusToneIconPeers): void {
  peers = next;
}

/**
 * Bundle export `sD` / internal `fqo`.
 */
export function StatusToneIcon(props: unknown) {
  const O = o;
  if (peers == null) {
    throw new Error("StatusToneIcon peers are not configured");
  }
  let { status, className, tone = "status" } = props,
    o,
    s;
  {
    let { Icon, iconClassName } = peers.hqo({
      status,
      tone,
    });
    o = Icon;
    s = peers.$(className, iconClassName);
  }
  return <O className={s} />;
}
