// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kvu`) / export `it`.

export type MatchCommandByStartTimePeers = {
  Avu: (...args: unknown[]) => unknown;
  Bvu: (...args: unknown[]) => unknown;
  Fvu: (...args: unknown[]) => unknown;
  Hvu: (...args: unknown[]) => unknown;
  Ivu: (...args: unknown[]) => unknown;
  Mvu: (...args: unknown[]) => unknown;
  Nvu: (...args: unknown[]) => unknown;
};
let peers: MatchCommandByStartTimePeers | null = null;

/** Wire matchCommandByStartTime peers once companions land. */
export function setMatchCommandByStartTimePeers(
  next: MatchCommandByStartTimePeers,
): void {
  peers = next;
}

/**
 * Bundle export `it` / internal `kvu`.
 */
export function matchCommandByStartTime(
  e: unknown,
  t: unknown,
  n: unknown = Date.now(),
  { matchCommandStartTime = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("matchCommandByStartTime peers are not configured");
  }
  if (t == null) return null;
  let i =
    matchCommandStartTime && e.commandExecutionStartedAtMs != null
      ? peers.Hvu
      : null;
  if (e.osPid != null) {
    let n = peers.Nvu(e.osPid, t);
    if (n != null && peers.Ivu(peers.Bvu(e.command), n.command)) return n;
  }
  let a = peers.Mvu(e.processId);
  if (a != null) {
    if (e.source !== "restored-process" && i == null) {
      let e = peers.Nvu(a, t);
      if (e != null) return e;
    }
    let r = peers.Fvu(e, peers.Avu(a, t), n, i);
    if (r != null) return peers.Nvu(r.pid, t);
  }
  let o = peers.Fvu(e, t, n, i);
  return o == null ? null : peers.Nvu(o.pid, t);
}
