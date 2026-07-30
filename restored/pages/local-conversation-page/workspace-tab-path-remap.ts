// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Remap open editor/workspace tab paths when a worktree root moves.

import { isUncPath, isWinDrivePath } from "../../utils/win-path-predicates";
import {
  isAbsoluteWorkspacePath,
  toPosixPath,
} from "../../utils/workspace-paths";

function posixJoin(root: string, relative: string): string {
  if (!relative) return root;
  if (!root) return relative;
  return `${root.replace(/\/+$/u, "")}/${relative.replace(/^\/+/u, "")}`;
}

function posixIsAbsolute(pathValue: string): boolean {
  return pathValue.startsWith("/");
}

/** Minimal `path.posix.relative` for absolute POSIX inputs. */
function posixRelative(from: string, to: string): string {
  const fromParts = from.replace(/\/+$/u, "").split("/").filter(Boolean);
  const toParts = to.replace(/\/+$/u, "").split("/").filter(Boolean);
  let shared = 0;
  while (
    shared < fromParts.length &&
    shared < toParts.length &&
    fromParts[shared] === toParts[shared]
  ) {
    shared += 1;
  }
  const up = fromParts.length - shared;
  const down = toParts.slice(shared);
  return [...Array.from({ length: up }, () => ".."), ...down].join("/") || "";
}

/**
 * If `filePath` is under `sourceWorkspaceRoot`, rewrite it under
 * `targetWorkspaceRoot`; otherwise return unchanged.
 */
export function remapWorkspaceTabPath(
  filePath: string,
  sourceWorkspaceRoot: string,
  targetWorkspaceRoot: string,
): string {
  if (!isAbsoluteWorkspacePath(filePath)) return filePath;

  const posixFile = toPosixPath(filePath);
  const posixSource = toPosixPath(sourceWorkspaceRoot);
  const caseFold = isWinDrivePath(posixSource) || isUncPath(posixSource);
  const relative = posixRelative(
    caseFold ? posixSource.toLowerCase() : posixSource,
    caseFold ? posixFile.toLowerCase() : posixFile,
  );

  if (
    relative === ".." ||
    relative.startsWith("../") ||
    posixIsAbsolute(relative)
  ) {
    return filePath;
  }

  const relativeWithCasing =
    relative === ""
      ? ""
      : posixFile
          .split("/")
          .slice(-relative.split("/").length)
          .join("/");
  const joined = toPosixPath(posixJoin(targetWorkspaceRoot, relativeWithCasing));
  return isUncPath(targetWorkspaceRoot)
    ? `//${joined.replace(/^\/+/u, "")}`
    : joined;
}
