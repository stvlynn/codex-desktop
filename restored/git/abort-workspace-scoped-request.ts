// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hWo` / export `AD`; companions `mWo` / `gWo` / `_Wo`.

export type WorkspaceScopedRequestKey = {
  hostId: string;
  cwd: string;
};

const controllers = new Map<string, AbortController>();

/** Stable key for workspace-scoped git requests. */
export function workspaceScopedRequestKey(input: WorkspaceScopedRequestKey): string {
  return JSON.stringify([input.hostId, input.cwd]);
}

/** Create (and register) an AbortSignal for a workspace-scoped request. */
export function createWorkspaceScopedAbortSignal(input: WorkspaceScopedRequestKey): AbortSignal {
  const controller = new AbortController();
  controllers.set(workspaceScopedRequestKey(input), controller);
  return controller.signal;
}

/** Abort any in-flight workspace-scoped request for `input`. */
export function abortWorkspaceScopedRequest(input: WorkspaceScopedRequestKey): void {
  controllers.get(workspaceScopedRequestKey(input))?.abort();
}

/** Clear a registered controller when the matching signal completes. */
export function clearWorkspaceScopedAbortSignal(input: WorkspaceScopedRequestKey, signal: AbortSignal): void {
  const key = workspaceScopedRequestKey(input);
  if (controllers.get(key)?.signal === signal) controllers.delete(key);
}
