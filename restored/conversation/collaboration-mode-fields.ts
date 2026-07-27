// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H8l` companion + `U8l` / export `Lr` + `W8l` / export `Rr`.

export type CollaborationModeFields = {
  activePermissionProfile?: unknown;
  runtimeWorkspaceRoots?: unknown;
  approvalPolicy: unknown;
  approvalsReviewer: unknown;
  sandboxPolicy: unknown;
};

/** Extract collaboration-mode fields when the three policies are present. */
export function collaborationModeFieldsFromParams(params: Record<string, unknown> | null | undefined): CollaborationModeFields | null {
  if (
    params?.approvalPolicy == null ||
    params.approvalsReviewer == null ||
    params.sandboxPolicy == null
  ) {
    return null;
  }
  return {
    ...("activePermissionProfile" in params &&
    params.activePermissionProfile !== undefined
      ? { activePermissionProfile: params.activePermissionProfile }
      : "permissions" in params && params.permissions != null
        ? {
            activePermissionProfile: {
              id: params.permissions,
              extends: null,
            },
          }
        : {}),
    ...("runtimeWorkspaceRoots" in params &&
    params.runtimeWorkspaceRoots != null
      ? { runtimeWorkspaceRoots: params.runtimeWorkspaceRoots }
      : {}),
    approvalPolicy: params.approvalPolicy,
    approvalsReviewer: params.approvalsReviewer,
    sandboxPolicy: params.sandboxPolicy,
  };
}

/** Prefer explicit params; else turn.params when turnId + collaborationMode set. */
export function collaborationModeFromTurnOrParams(
  turn:
    | {
        turnId?: string | null;
        params?: Record<string, unknown> | null;
      }
    | null
    | undefined,
  params: Record<string, unknown> | null | undefined,
): CollaborationModeFields | null {
  return (
    collaborationModeFieldsFromParams(params) ??
    (turn?.turnId == null || turn.params?.collaborationMode == null
      ? null
      : collaborationModeFieldsFromParams(turn.params))
  );
}

/** `Lr` result, else fallback, else null. Bundle `W8l` / `Rr`. */
export function collaborationModeOrFallback(
  turn:
    | {
        turnId?: string | null;
        params?: Record<string, unknown> | null;
      }
    | null
    | undefined,
  params: Record<string, unknown> | null | undefined,
  fallback?: CollaborationModeFields | null,
): CollaborationModeFields | null {
  return collaborationModeFromTurnOrParams(turn, params) ?? fallback ?? null;
}
