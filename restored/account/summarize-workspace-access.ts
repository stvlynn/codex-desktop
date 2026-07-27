// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `AIo` / export `pO`.

export type WorkspaceAccessSummary = {
  accessMode: string;
  groupCount: number;
  userCount: number;
};

/** Summarize workspace ACL counts for settings UI. */
export function summarizeWorkspaceAccess(
  access:
    | {
        access_mode: string;
        allowed_tenant_group_ids: unknown[];
        allowed_workspace_group_ids: unknown[];
        allowed_account_user_ids: unknown[];
      }
    | null
    | undefined,
): WorkspaceAccessSummary {
  return access == null
    ? { accessMode: "admins_only", groupCount: 0, userCount: 0 }
    : {
        accessMode: access.access_mode,
        groupCount:
          access.allowed_tenant_group_ids.length +
          access.allowed_workspace_group_ids.length,
        userCount: Math.max(access.allowed_account_user_ids.length - 1, 0),
      };
}
