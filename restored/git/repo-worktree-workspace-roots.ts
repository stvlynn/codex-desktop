// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qzc` / export `Rd` (+ companion `$zc`).

import {
  joinRelativePathSegments,
  normalizePathKey,
  toPosixPath,
} from "../utils/workspace-paths";

function relativePathUnderWorktree(args: {
  cwd: string;
  sourceWorktreeRoot: string;
}): string {
  const cwdPosix = toPosixPath(args.cwd);
  const rootPosix = toPosixPath(args.sourceWorktreeRoot).replace(/\/+$/, "");
  const cwdKey = normalizePathKey(args.cwd);
  const rootKey = normalizePathKey(args.sourceWorktreeRoot).replace(/\/+$/, "");
  if (cwdKey === rootKey) return "";
  if (!cwdKey.startsWith(`${rootKey}/`)) return "";
  return cwdPosix.slice(`${rootPosix}/`.length);
}

export type RepoWorktreeEntry = { root: string };

/** Map repo worktree entries to workspace roots relative to the source worktree. */
export function repoWorktreeWorkspaceRoots(args: {
  cwd: string;
  sourceWorktreeRoot: string;
  repoWorktreeEntries: readonly RepoWorktreeEntry[] | null | undefined;
}): Array<{ gitRoot: string; workspaceRoot: string }> {
  const relative = relativePathUnderWorktree(args);
  const sourceKey = normalizePathKey(args.sourceWorktreeRoot);
  return (args.repoWorktreeEntries ?? [])
    .filter((entry) => normalizePathKey(entry.root) !== sourceKey)
    .map((entry) => ({
      gitRoot: entry.root,
      workspaceRoot:
        relative.length > 0
          ? joinRelativePathSegments(entry.root, relative)
          : entry.root,
    }));
}
