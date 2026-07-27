// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cSo`/`lSo`/`dSo`/`fSo`/`pSo` — exports sA/cA/aA/iA.

import { identityCwd } from "../utils/workspace-paths";

export type HostWorkspaceRef = {
  hostId: string;
  root: string;
  cwd: string;
};

export type HostWorkspaceWithConfig = HostWorkspaceRef & {
  hostConfig: { id: string; [key: string]: unknown };
};

export type GroupedWorkspaceRoots = HostWorkspaceRef & {
  id: string;
  runtimeWorkspaceRoots: string[];
};

/** `cSo` / `sA` */
export function createHostWorkspaceRef(args: {
  hostId: string;
  root: string;
  cwd?: string;
}): HostWorkspaceRef {
  return {
    hostId: args.hostId,
    root: args.root,
    cwd: args.cwd ?? identityCwd(args.root),
  };
}

/** `lSo` / `cA` */
export function createHostWorkspaceWithConfig(args: {
  hostConfig: { id: string; [key: string]: unknown };
  root: string;
  cwd?: string;
}): HostWorkspaceWithConfig {
  return {
    ...createHostWorkspaceRef({
      hostId: args.hostConfig.id,
      root: args.root,
      cwd: args.cwd,
    }),
    hostConfig: args.hostConfig,
  };
}

/** `dSo` / `aA` */
export function resolveRuntimeWorkspaceRoots(args: {
  cwd: string | null | undefined;
  runtimeWorkspaceRoots: string[] | null | undefined;
}): string[] {
  return args.runtimeWorkspaceRoots == null
    ? args.cwd == null
      ? []
      : [args.cwd]
    : [...args.runtimeWorkspaceRoots];
}

/** Internal `pSo` — stable group id. */
function workspaceGroupId(hostId: string, root: string): string {
  return JSON.stringify([hostId, root]);
}

type GitOrigin = {
  dir: string;
  root?: string | null;
  commonDir?: string | null;
  [key: string]: unknown;
};

/** `fSo` / `iA` — group workspace roots by git origin commonDir. */
export function groupWorkspaceRootsByGitOrigin(args: {
  hostId: string;
  origins: GitOrigin[];
  workspaceRoots: string[];
}): GroupedWorkspaceRoots[] {
  const byDir = new Map(args.origins.map((o) => [o.dir, o]));
  const groups = new Map<string, GroupedWorkspaceRoots>();
  for (const rootPath of args.workspaceRoots) {
    const origin = byDir.get(rootPath);
    if (origin?.commonDir == null) continue;
    const originRoot = origin.root;
    if (originRoot == null) continue;
    const id = workspaceGroupId(args.hostId, originRoot);
    const existing = groups.get(id);
    if (existing != null) {
      existing.runtimeWorkspaceRoots.push(rootPath);
      continue;
    }
    groups.set(id, {
      ...createHostWorkspaceRef({ hostId: args.hostId, root: originRoot }),
      id,
      runtimeWorkspaceRoots: [rootPath],
    });
  }
  return Array.from(groups.values());
}
