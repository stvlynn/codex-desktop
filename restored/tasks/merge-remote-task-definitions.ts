// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `_sc`) / export `ip`.

export type MergeRemoteTaskDefinitionsPeers = {
  remoteTasksSchema: {
    safeParse: (value: unknown) => {
      success: boolean;
      data?: { tasks: Record<string, unknown> };
    };
  };
  taskDefinitionSchema: {
    safeParse: (value: unknown) => {
      success: boolean;
      data?: Record<string, unknown>;
    };
  };
  defaultTasks: Record<string, unknown>;
  skippedTaskIds: Set<string>;
};

let peers: MergeRemoteTaskDefinitionsPeers | null = null;

/** Wire remote task-definition merge peers once companions land. */
export function setMergeRemoteTaskDefinitionsPeers(
  next: MergeRemoteTaskDefinitionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ip` / internal `_sc`.
 * Merge remote task definitions into defaults, skipping reserved ids.
 */
export function mergeRemoteTaskDefinitions(
  raw: unknown,
): Record<string, unknown> {
  if (peers == null) {
    throw new Error("MergeRemoteTaskDefinitions peers are not configured");
  }
  const parsed = peers.remoteTasksSchema.safeParse(raw);
  if (!parsed.success || parsed.data == null) return { ...peers.defaultTasks };
  const next: Record<string, unknown> = { ...peers.defaultTasks };
  for (const [id, def] of Object.entries(parsed.data.tasks)) {
    if (peers.skippedTaskIds.has(id)) continue;
    const task = peers.taskDefinitionSchema.safeParse(def);
    if (task.success && task.data != null) {
      next[id] = { ...task.data, origin: "remote" };
    }
  }
  return next;
}
