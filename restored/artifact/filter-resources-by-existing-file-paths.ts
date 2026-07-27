// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `N0n` / export `t6` (uses workspace path join+normalize).

import {
  normalizePathKey,
  resolveWorkspacePath,
  toPosixPath,
} from "../utils/workspace-paths";

function workspaceFileKey(cwd: string, filePath: string): string {
  const joined = resolveWorkspacePath(cwd ?? "", toPosixPath(filePath));
  if (joined === "") return "";
  // Mirror bundle: path.posix.normalize then wf/normalizePathKey.
  const parts = joined.split("/");
  const out: string[] = [];
  for (const part of parts) {
    if (part === "" || part === ".") continue;
    if (part === "..") {
      out.pop();
      continue;
    }
    out.push(part);
  }
  const normalized = joined.startsWith("/")
    ? `/${out.join("/")}`
    : out.join("/");
  return normalizePathKey(
    normalized === "/"
      ? "/"
      : normalized.replace(/\/+$/, "") === "" && joined.startsWith("/")
        ? "/"
        : normalized,
  );
}

export type ArtifactResourceRef = {
  type: string;
  path?: string;
  [key: string]: unknown;
};

/** Drop file resources whose paths are not in the existing-file set. */
export function filterResourcesByExistingFilePaths(args: {
  cwd: string;
  existingFilePaths: readonly string[] | null | undefined;
  resources: readonly ArtifactResourceRef[];
}): ArtifactResourceRef[] {
  if (args.existingFilePaths == null) return [...args.resources];
  const existing = new Set(
    Array.from(args.existingFilePaths, (p) => workspaceFileKey(args.cwd, p)),
  );
  return args.resources.filter(
    (resource) =>
      resource.type !== "file" ||
      (resource.path != null &&
        existing.has(workspaceFileKey(args.cwd, resource.path))),
  );
}
