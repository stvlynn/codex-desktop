// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `u7n` / export `T4`.

export type AppActionRequest = Record<string, unknown>;

type RunInPrimaryWindow = (
  action: AppActionRequest,
  options?: { sourceHostId?: string; sourceThreadId?: string },
) => Promise<unknown>;

let runInPrimaryWindow: RunInPrimaryWindow | null = null;

/** Bind primary-window app action runner (bundle `gp.appActions`). */
export function bindRunAppActionInPrimaryWindow(next: RunInPrimaryWindow): void {
  runInPrimaryWindow = next;
}

/** Dispatch an app action to the primary window host. */
export function runAppActionInPrimaryWindow(
  action: AppActionRequest,
  options: { sourceHostId?: string; sourceThreadId?: string } = {},
): Promise<unknown> {
  if (runInPrimaryWindow == null) {
    throw new Error("App actions are unavailable in this host");
  }
  return runInPrimaryWindow(action, options);
}
