// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Convert between sidebar project atoms and selection refs (`AAr` / `jAr`).

export type SidebarProject = {
  projectId: string;
  type: "local" | "remote" | string;
};

export type SidebarProjectSelection = {
  projectId: string;
  projectKind: "local" | "remote" | string;
};

/**
 * Bundle `AAr` / export `p$`.
 * Atom / query project → sidebar selection ref.
 */
export function toSidebarProjectSelection(project: SidebarProject | null | undefined): SidebarProjectSelection | null {
  return project == null
    ? null
    : { projectId: project.projectId, projectKind: project.type };
}

/**
 * Bundle `jAr` / export `m$`.
 * Sidebar selection ref → atom project (`au` is identity in this bundle).
 */
export function fromSidebarProjectSelection(selection: SidebarProjectSelection | null | undefined): SidebarProject | null {
  return selection == null
    ? null
    : { type: selection.projectKind, projectId: selection.projectId };
}
