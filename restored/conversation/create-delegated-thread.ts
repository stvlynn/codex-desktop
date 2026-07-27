// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `p4o` / export `jT` — create a delegated/worktree thread.

type Target =
  | {
      type: "project";
      projectId: string;
      environment: { type: string };
      [key: string]: unknown;
    }
  | {
      type: "remoteProject";
      projectId: string;
      hostId: string;
      path: string;
      environment: { type: string };
      [key: string]: unknown;
    }
  | {
      type: "projectless";
      environment: { type: string };
      [key: string]: unknown;
    };

let createFromProject: (args: {
  projectId: string;
  prompt: string;
}) => Promise<{
  cwd: string;
  workspaceRoots: string[];
  projectAssignment: unknown;
  projectlessOutputDirectory?: string | null;
} | null> = async () => null;
let listWorkspaceRoots: (args: {
  hostId: string;
}) => Promise<{ roots: string[] }> = async () => ({ roots: [] });
let toAssignment: (args: Record<string, unknown>) => unknown = (a) => a;
let spawnThread: (
  args: Record<string, unknown>,
) => Promise<unknown> = async () => null;
const LOCAL_HOST = "local";

export function setCreateDelegatedThreadDeps(args: {
  createFromProject: typeof createFromProject;
  listWorkspaceRoots: typeof listWorkspaceRoots;
  toAssignment: typeof toAssignment;
  spawnThread: typeof spawnThread;
  localHostId?: string;
}): void {
  createFromProject = args.createFromProject;
  listWorkspaceRoots = args.listWorkspaceRoots;
  toAssignment = args.toAssignment;
  spawnThread = args.spawnThread;
}

export async function createDelegatedThread(args: {
  config?: unknown;
  model: unknown;
  memoryPreferences?: unknown;
  prompt: string;
  additionalDeveloperInstructions?: unknown;
  scope: unknown;
  sourceThreadId?: string | null;
  target: Target;
  thinking?: unknown;
}): Promise<unknown> {
  if (args.config != null && args.sourceThreadId != null) {
    throw new Error(
      "createThread config is not supported for delegated thread creation",
    );
  }
  const { target } = args;
  if (target.type === "projectless" || target.environment.type !== "worktree") {
    return spawnThread({ ...args, hostId: LOCAL_HOST });
  }
  let projectPath: string;
  let workspaceRoots: string[];
  let projectAssignment: unknown;
  if (target.type === "project") {
    const project = await createFromProject({
      projectId: target.projectId,
      prompt: args.prompt,
    });
    if (project == null) throw new Error("Unknown local project");
    if (project.projectlessOutputDirectory != null) {
      throw new Error("Worktree threads require a project with a directory");
    }
    projectPath = project.cwd;
    workspaceRoots = project.workspaceRoots;
    projectAssignment = toAssignment({
      type: "assignment",
      assignment: project.projectAssignment,
      executionHostId: LOCAL_HOST,
    });
  } else {
    projectPath = target.path;
    workspaceRoots = [projectPath];
    const { roots } = await listWorkspaceRoots({ hostId: target.hostId });
    if (!roots.includes(projectPath)) {
      throw new Error(
        `Unknown remote project path: ${projectPath}\nSaved remote paths:\n${roots.join(" ")}`,
      );
    }
    projectAssignment = toAssignment({
      type: "remote-project",
      projectId: target.projectId,
      hostId: target.hostId,
      path: target.path,
    });
  }
  return spawnThread({
    hostId: target.type === "remoteProject" ? target.hostId : LOCAL_HOST,
    memoryPreferences: args.memoryPreferences,
    model: args.model,
    projectAssignment,
    projectId: target.projectId,
    projectPath,
    prompt: args.prompt,
    additionalDeveloperInstructions: args.additionalDeveloperInstructions,
    scope: args.scope,
    thinking: args.thinking,
    workspaceRoots,
  });
}
