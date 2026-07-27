// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `KKi` / export `gV` — extractFn(KKi); companions WKi/IKi/YKi/JKi/OKi/jKi/mR; GKi mapped.

import { v4 as uuidV4 } from "uuid";
import { hostMessageBus } from "../navigation/host-message-bus";
import { beginPendingWorktreeConversationStart } from "./begin-pending-worktree-conversation-start";

type PendingWorktreeRequest = {
  hostId: string;
  launchMode?: string;
} & Record<string, unknown>;

const pendingWorktreeStates = new Map<string, { state: string }>();
const pendingWorktreeListeners = new Set<() => void>();

/** Bundle `IKi`. */
function pendingWorktreeIdForHost(hostId: string): string {
  return `${hostId}:${uuidV4()}`;
}

/** Bundle `YKi`. */
function withPendingWorktreeId<T extends object>(
  id: string,
  payload: T,
): T & { id: string } {
  return { id, ...payload };
}

/** Bundle `jKi`. */
function notifyPendingWorktreeListeners(): void {
  for (const listener of pendingWorktreeListeners) listener();
}

/** Bundle `OKi`. */
function markPendingWorktreeWaiting(pendingWorktreeId: string): void {
  pendingWorktreeStates.set(pendingWorktreeId, { state: "waiting" });
  notifyPendingWorktreeListeners();
}

/** Bundle `JKi`. */
function dispatchPendingWorktreeCreate(
  pendingWorktreeId: string,
  payload: PendingWorktreeRequest,
): string {
  const bridge = (window as Window & { electronBridge?: unknown })
    .electronBridge;
  if (bridge == null) {
    throw Error("Worktree app actions require the ChatGPT desktop app");
  }
  const request = withPendingWorktreeId(pendingWorktreeId, payload);
  if (request.launchMode !== "create-stable-worktree") {
    markPendingWorktreeWaiting(pendingWorktreeId);
  }
  hostMessageBus.dispatchMessage("pending-worktree-create", {
    hostId: payload.hostId,
    request,
  });
  return pendingWorktreeId;
}

/** Bundle `WKi`. */
function addPendingWorktreeForHost(payload: PendingWorktreeRequest): string {
  return dispatchPendingWorktreeCreate(
    pendingWorktreeIdForHost(payload.hostId),
    payload,
  );
}

/** Begin a pending worktree conversation via the host bridge (bundle `KKi` / `gV`). */
export function beginPendingWorktreeViaHost(payload: PendingWorktreeRequest): {
  clientThreadId: string;
  pendingWorktreeId: string;
} {
  return beginPendingWorktreeConversationStart(
    addPendingWorktreeForHost,
    payload,
  );
}
