// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RGc` — used by build-renderable-agent-items.

export function isTurnItemInProgress(
  item:
    | {
        type?: string;
        completed?: boolean;
        status?: string;
        output?: { exitCode?: number };
        success?: unknown;
        plan?: Array<{ status?: string }>;
      }
    | null
    | undefined,
): boolean {
  if (!item) return false;
  switch (item.type) {
    case "user-message":
    case "realtime-transcript":
    case "turn-diff":
    case "system-error":
    case "stream-error":
    case "steered":
    case "remote-task-created":
    case "personality-changed":
    case "forked-from-conversation":
    case "model-changed":
    case "model-rerouted":
    case "auto-review-interruption-warning":
    case "automation-update":
    case "plan-implementation":
    case "worked-for":
    case "generated-image":
    case "worktree-init":
    case "subagent-activity":
    case "image-view":
      return false;
    case "context-compaction":
    case "assistant-message":
    case "proposed-plan":
    case "reasoning":
      return !item.completed;
    case "exec":
      return item.output?.exitCode === undefined;
    case "patch":
      return item.success == null;
    case "mcp-tool-call":
    case "dynamic-tool-call":
      return !item.completed;
    case "automatic-approval-review":
    case "multi-agent-action":
      return item.status === "inProgress";
    case "web-search":
      return !item.completed;
    case "todo-list":
      return (item.plan ?? []).some((step) => step.status !== "completed");
    case "userInput":
    case "user-input-response":
    case "mcp-server-elicitation":
    case "permission-request":
      return !item.completed;
    default:
      return false;
  }
}
