// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `T6s` / export `qm`.

import { projectDeletePermissionMessages } from "./project-delete-permission-messages";

/** Message descriptor for ChatGPT project edit/delete permission tooltips. */
export function projectCrudPermissionTooltip(args: {
  action: "edit" | "delete" | string;
  projectCrudStatus: string;
}):
  | (typeof projectDeletePermissionMessages)[keyof typeof projectDeletePermissionMessages]
  | undefined {
  const { action, projectCrudStatus } = args;
  if (projectCrudStatus === "disabled_by_admin") {
    return projectDeletePermissionMessages.disabledByAdmin;
  }
  if (projectCrudStatus === "allowed") {
    return action === "edit"
      ? projectDeletePermissionMessages.editPermissionRequired
      : projectDeletePermissionMessages.deletePermissionRequired;
  }
  return undefined;
}
