// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ez` / export `AB`.

export type ThreadProjectSelectionInput =
  | { type: "local-project"; projectId?: string | null }
  | {
      type: "remote-project";
      projectId: string;
      hostId: string;
      path: string;
    }
  | {
      type: "assignment";
      assignment?:
        | ({
            projectKind: "local" | "remote";
            hostId?: string | null;
            cwd?: string;
          } & Record<string, unknown>)
        | null;
      executionHostId: string;
    };

/** Normalize composer/thread project picker values into a project locator. */
export function resolveThreadProjectSelection(
  input: ThreadProjectSelectionInput,
): Record<string, unknown> | undefined {
  switch (input.type) {
    case "local-project":
      return input.projectId == null || input.projectId === "~"
        ? undefined
        : {
            projectKind: "local",
            projectId: input.projectId,
            pendingCoreUpdate: false,
          };
    case "remote-project":
      return {
        projectKind: "remote",
        projectId: input.projectId,
        hostId: input.hostId,
        path: input.path,
        pendingCoreUpdate: false,
      };
    case "assignment": {
      if (
        input.assignment == null ||
        !(input.assignment.projectKind === "local"
          ? input.executionHostId === "local"
          : input.executionHostId !== "local" &&
            (input.assignment.hostId == null ||
              input.assignment.hostId === input.executionHostId))
      ) {
        return;
      }
      const { cwd: _cwd, ...rest } = input.assignment;
      return { ...rest, pendingCoreUpdate: false };
    }
  }
}
