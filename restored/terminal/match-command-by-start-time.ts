// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `kvu`) / export `it`.

export type MatchCommandByStartTimePeers = {
  startTimeMatcher: unknown;
  findByPid: (
    pid: unknown,
    procs: unknown,
  ) => { command: unknown; pid: unknown } | null;
  commandsMatch: (a: unknown, b: unknown) => boolean;
  commandText: (command: unknown) => unknown;
  resolveOsPid: (processId: unknown) => unknown | null;
  filterCandidates: (
    entry: unknown,
    procs: unknown,
    now: number,
    matcher: unknown,
  ) => { pid: unknown } | null;
  procsForPid: (pid: unknown, procs: unknown) => unknown;
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
 * Match a terminal command process by pid / processId / start time.
 */
export type TerminalCommandEntry = {
  osPid?: unknown | null;
  processId?: unknown;
  command?: unknown;
  commandExecutionStartedAtMs?: number | null;
  source?: string;
};

export function matchCommandByStartTime(
  entry: TerminalCommandEntry,
  processes: unknown,
  now: number = Date.now(),
  opts: { matchCommandStartTime?: boolean } = {},
): unknown {
  if (peers == null) {
    throw new Error("MatchCommandByStartTime peers are not configured");
  }
  if (processes == null) return null;
  const matcher =
    opts.matchCommandStartTime && entry.commandExecutionStartedAtMs != null
      ? peers.startTimeMatcher
      : null;
  if (entry.osPid != null) {
    const hit = peers.findByPid(entry.osPid, processes);
    if (
      hit != null &&
      peers.commandsMatch(peers.commandText(entry.command), hit.command)
    ) {
      return hit;
    }
  }
  const osPid = peers.resolveOsPid(entry.processId);
  if (osPid != null) {
    if (entry.source !== "restored-process" && matcher == null) {
      const hit = peers.findByPid(osPid, processes);
      if (hit != null) return hit;
    }
    const candidate = peers.filterCandidates(
      entry,
      peers.procsForPid(osPid, processes),
      now,
      matcher,
    );
    if (candidate != null) return peers.findByPid(candidate.pid, processes);
  }
  const fallback = peers.filterCandidates(entry, processes, now, matcher);
  return fallback == null ? null : peers.findByPid(fallback.pid, processes);
}
