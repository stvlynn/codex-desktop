// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `GKi` / export `_V`.

import { createClientNewThreadId } from "../conversation/client-new-thread-id";

/** Start a pending worktree conversation with a fresh client thread id. */
export function beginPendingWorktreeConversationStart<T>(
  addPending: (payload: T & { clientThreadId: string }) => string,
  payload: T,
  clientThreadId: string = createClientNewThreadId(),
): { clientThreadId: string; pendingWorktreeId: string } {
  return {
    clientThreadId,
    pendingWorktreeId: addPending({ ...payload, clientThreadId }),
  };
}
