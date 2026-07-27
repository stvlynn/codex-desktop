// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JB`) / export `xL`.

export type RelativeDateByMinutePeers = {
  Gla: (...args: unknown[]) => unknown;
  dua: (...args: unknown[]) => unknown;
  mua: (...args: unknown[]) => unknown;
  pua: (...args: unknown[]) => unknown;
};
let peers: RelativeDateByMinutePeers | null = null;

/** Wire RelativeDateByMinute peers once companions land. */
export function setRelativeDateByMinutePeers(
  next: RelativeDateByMinutePeers,
): void {
  peers = next;
}

/**
 * Bundle export `xL` / internal `JB`.
 */
export function RelativeDateByMinute(props: unknown) {
  const Dua = peers.dua;
  if (peers == null) {
    throw new Error("RelativeDateByMinute peers are not configured");
  }
  let { dateString } = props,
    r = peers.Gla();
  return <Dua dateString={dateString} now={r} />;
}
