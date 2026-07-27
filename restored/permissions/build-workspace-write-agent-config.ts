// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Build a granular workspace-write agent permission snapshot (`Cl` / `qgt`).

export type WorkspaceWriteRootsConfig = {
  writable_roots?: readonly string[] | null;
  exclude_slash_tmp?: boolean | null;
  exclude_tmpdir_env_var?: boolean | null;
  network_access?: boolean | null;
} | null;

export type PermissionProfileRef = {
  id: string;
  extends: string | null;
};

export type WorkspaceWriteAgentConfig = {
  activePermissionProfile: PermissionProfileRef | null;
  sandboxPolicy: {
    type: "workspaceWrite";
    writableRoots: string[];
    excludeSlashTmp: boolean;
    excludeTmpdirEnvVar: boolean;
    networkAccess: boolean;
  };
  approvalPolicy: string;
  approvalsReviewer: string;
};

/**
 * Bundle `Cl` / export `qgt`.
 * Default profile is `:workspace` when no existing profile is supplied; approval
 * defaults to `on-request` / `user`.
 */
export function buildWorkspaceWriteAgentConfig(
  projectRoots: readonly string[],
  existingSandbox: WorkspaceWriteRootsConfig,
  approvalPolicy: string | null | undefined = "on-request",
  approvalsReviewer: string = "user",
  activePermissionProfile: PermissionProfileRef | null = existingSandbox == null
    ? { id: ":workspace", extends: null }
    : null,
): WorkspaceWriteAgentConfig {
  return {
    activePermissionProfile,
    sandboxPolicy: {
      type: "workspaceWrite",
      writableRoots: [
        ...projectRoots,
        ...(existingSandbox?.writable_roots ?? []),
      ],
      excludeSlashTmp: existingSandbox?.exclude_slash_tmp ?? false,
      excludeTmpdirEnvVar: existingSandbox?.exclude_tmpdir_env_var ?? false,
      networkAccess: existingSandbox?.network_access ?? false,
    },
    approvalPolicy: approvalPolicy ?? "on-request",
    approvalsReviewer,
  };
}
