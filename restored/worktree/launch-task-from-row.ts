// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Click handler that launches a sidebar task (`qVl` / export alias `vo`).

export type TaskLaunchMode =
  | "create-stable-worktree"
  | "fork-conversation"
  | "start-conversation"
  | (string & {});

export type LaunchableSidebarTask = {
  id: string;
  launchMode: TaskLaunchMode;
  clientThreadId: string;
};

/**
 * Side-effect hooks the minified row wired to the app store.
 * Kept injectable so this module does not pull the ESM dialog init graph.
 */
export type LaunchTaskFromRowHandlers = {
  /** `Wk(store, StableWorktreeStatusDialog, { pendingWorktreeId })` */
  openStableWorktreeStatusDialog: (
    store: unknown,
    pendingWorktreeId: string,
  ) => void;
  /** `f3o(store, lu(clientThreadId))` for fork/start conversation */
  openClientThread: (store: unknown, clientThreadId: string) => void;
};

/**
 * Dispatches the default click action for a worktree / conversation task row.
 */
export function launchTaskFromRow(store: unknown, task: LaunchableSidebarTask, handlers: LaunchTaskFromRowHandlers): void {
  switch (task.launchMode) {
    case "create-stable-worktree":
      handlers.openStableWorktreeStatusDialog(store, task.id);
      return;
    case "fork-conversation":
    case "start-conversation":
      handlers.openClientThread(store, task.clientThreadId);
      return;
    default:
      return;
  }
}
