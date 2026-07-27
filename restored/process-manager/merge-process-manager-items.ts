// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dvu` / export `st`.

/** Merge live process-manager rows with restored-process snapshots. */
export function mergeProcessManagerItems<
  T extends {
    id: string;
    source?: string | null;
    workspaceRoot?: unknown;
    chatTitle?: unknown;
    commandExecutionStartedAtMs?: unknown;
    cwd?: unknown;
    osPid?: unknown;
    processId?: unknown;
    startedAtMs?: unknown;
  },
>(live: T[], restored: T[]): T[] {
  const pending = new Map(restored.map((row) => [row.id, row]));
  const merged = live.map((row) => {
    const prior = pending.get(row.id);
    if (prior == null) return row;
    pending.delete(row.id);
    if (row.source === "restored-process") {
      return { ...prior, workspaceRoot: row.workspaceRoot } as T;
    }
    return {
      ...row,
      chatTitle: row.chatTitle ?? prior.chatTitle,
      commandExecutionStartedAtMs:
        prior.commandExecutionStartedAtMs ?? row.commandExecutionStartedAtMs,
      cwd: row.cwd ?? prior.cwd,
      osPid: row.osPid ?? prior.osPid,
      processId: row.processId ?? prior.processId,
      startedAtMs:
        prior.commandExecutionStartedAtMs ??
        row.startedAtMs ??
        prior.startedAtMs,
    } as T;
  });
  return [...merged, ...pending.values()];
}
