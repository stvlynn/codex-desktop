// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FDe` companion + `ku` / export `lpt`.

export type ProjectAssignmentLike = {
  projectKind?: string;
  cwd?: string | null;
  path?: string | null;
  hostId?: string | null;
};

/** Cwd/path from a local/remote project assignment. */
export function cwdFromProjectAssignment(
  assignment: ProjectAssignmentLike,
): string | null | undefined {
  switch (assignment.projectKind) {
    case "local":
      return assignment.cwd ?? assignment.path ?? null;
    case "remote":
      return assignment.cwd ?? assignment.path;
  }
}

/** Prefer assignment cwd when present; otherwise keep `cwd`. Bundle `ku` / `lpt`. */
export function cwdWithProjectAssignment(input: {
  cwd: string | null | undefined;
  assignment?: ProjectAssignmentLike | null;
}): string | null | undefined {
  if (input.assignment == null) return input.cwd;
  return cwdFromProjectAssignment(input.assignment) ?? input.cwd;
}
