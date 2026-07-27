// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `XFo` / export `CO`.

/** Keep local projects, or remote projects for a specific host id. */
export function filterProjectsByHost<
  T extends { projectKind?: string; hostId?: string | null },
>(projects: T[], hostOrLocal: string): T[] {
  return projects.filter((project) =>
    hostOrLocal === "local"
      ? project.projectKind === "local"
      : project.projectKind === "remote" && project.hostId === hostOrLocal,
  );
}
