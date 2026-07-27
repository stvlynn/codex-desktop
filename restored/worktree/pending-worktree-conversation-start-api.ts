// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `DKi` / export `EV`.

type PendingState =
  | { state: "waiting" }
  | { state: "starting" }
  | { state: "failed" }
  | { state: "succeeded"; conversationId: string };

const pending = new Map<string, PendingState>();
const listeners = new Set<() => void>();

function notify(): void {
  for (const listener of listeners) listener();
}

function addPendingWorktreeConversationStart(id: string): void {
  pending.set(id, { state: "waiting" });
  notify();
}

/** Mutable API for pending worktree → conversation starts. */
export function pendingWorktreeConversationStartApi(): {
  addPendingWorktreeConversationStart: (id: string) => void;
  beginPendingWorktreeConversationStart: (id: string) => boolean;
  failPendingWorktreeConversationStart: (id: string) => void;
  succeedPendingWorktreeConversationStart: (
    id: string,
    conversationId: string,
  ) => void;
  retryPendingWorktreeConversationStart: (id: string) => void;
  removePendingWorktreeConversationStart: (id: string) => void;
  subscribe: (listener: () => void) => () => void;
  get: (id: string) => PendingState | undefined;
} {
  return {
    addPendingWorktreeConversationStart,
    beginPendingWorktreeConversationStart: (id) => {
      if (pending.get(id)?.state === "waiting") {
        pending.set(id, { state: "starting" });
        notify();
        return true;
      }
      return false;
    },
    failPendingWorktreeConversationStart: (id) => {
      if (pending.has(id)) {
        pending.set(id, { state: "failed" });
        notify();
      }
    },
    succeedPendingWorktreeConversationStart: (id, conversationId) => {
      if (pending.has(id)) {
        pending.set(id, { state: "succeeded", conversationId });
        notify();
      }
    },
    retryPendingWorktreeConversationStart: (id) => {
      if (pending.has(id)) {
        pending.set(id, { state: "waiting" });
        notify();
      }
    },
    removePendingWorktreeConversationStart: (id) => {
      if (pending.delete(id)) notify();
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    get: (id) => pending.get(id),
  };
}
