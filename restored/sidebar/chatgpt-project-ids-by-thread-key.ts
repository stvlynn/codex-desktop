// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rGl` / export `Ua`.

import { isChatgptProjectsWorkspace } from "../environments/is-chatgpt-projects-workspace";

type LocalProject = { rootPaths: readonly string[] };
type ProjectGroup = {
  projectKind: string;
  projectId: string;
  threadKeys: readonly string[];
};
type SidebarTask = {
  kind: string;
  key: string;
  conversation?: { id: string } | null;
};
type ThreadProjectAssignment = {
  projectKind: string;
  projectId: string;
};

/** Map local thread keys to ChatGPT project ids (and orphans). */
export function chatgptProjectIdsByThreadKey(args: {
  tasks: readonly SidebarTask[];
  localProjects: Record<string, LocalProject> | null | undefined;
  projectGroups: readonly ProjectGroup[];
  threadProjectAssignments:
    | Record<string, ThreadProjectAssignment | undefined>
    | null
    | undefined;
}): {
  chatGptProjectIdByThreadKey: Map<string, string>;
  localProjectThreadKeys: Set<string>;
} {
  const { tasks, localProjects, projectGroups, threadProjectAssignments } =
    args;
  const chatGptProjectIdByThreadKey = new Map<string, string>();
  const localProjectThreadKeys = new Set<string>();
  const localThreadKeys = new Set(
    tasks.flatMap((task) =>
      task.kind === "local" && task.conversation != null ? [task.key] : [],
    ),
  );
  for (const group of projectGroups) {
    if (group.projectKind !== "local") continue;
    const project = localProjects?.[group.projectId];
    const isChatGpt = project != null && isChatgptProjectsWorkspace(project);
    for (const threadKey of group.threadKeys) {
      if (!localThreadKeys.has(threadKey)) continue;
      if (isChatGpt)
        chatGptProjectIdByThreadKey.set(threadKey, group.projectId);
      else localProjectThreadKeys.add(threadKey);
    }
  }
  for (const task of tasks) {
    if (task.kind !== "local" || task.conversation == null) continue;
    const assignment = threadProjectAssignments?.[task.conversation.id];
    if (assignment?.projectKind !== "local") continue;
    const project = localProjects?.[assignment.projectId];
    if (project != null && isChatgptProjectsWorkspace(project)) {
      localProjectThreadKeys.delete(task.key);
      chatGptProjectIdByThreadKey.set(task.key, assignment.projectId);
    } else {
      chatGptProjectIdByThreadKey.delete(task.key);
      localProjectThreadKeys.add(task.key);
    }
  }
  return { chatGptProjectIdByThreadKey, localProjectThreadKeys };
}
