// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H5` / export `Aa`.

/** Whether a project can accept rename / actions. */
export function isProjectActionable(project: {
  projectKind: "local" | "remote" | string;
  hostId?: string | null;
}): boolean {
  switch (project.projectKind) {
    case "local":
      return true;
    case "remote":
      return project.hostId != null;
    default:
      return false;
  }
}
