// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `j0n` / export `a6` (+ companion `l2n` / `WT`).

import {
  normalizePathKey,
  resolveWorkspacePath,
  toPosixPath,
} from "../utils/workspace-paths";

/** Roots treated as Codex work / scratch output (`l2n`). */
export const CODEX_WORK_OR_SCRATCH_ROOTS = ["work", ".codex_scratch"] as const;

function resolveUnderCwdKey(
  cwd: string | null | undefined,
  target: string,
): string {
  const joined = resolveWorkspacePath(cwd ?? "", toPosixPath(target));
  if (joined === "") return "";
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
  const trimmed =
    normalized === "/"
      ? "/"
      : normalized.replace(/\/+$/, "") === "" && joined.startsWith("/")
        ? "/"
        : normalized.replace(/\/+$/, "");
  return normalizePathKey(trimmed);
}

/** True when a resource path sits under `work` or `.codex_scratch`. */
export function isUnderCodexWorkOrScratch(args: {
  cwd: string | null | undefined;
  resourcePath: string;
}): boolean {
  const resource = resolveUnderCwdKey(args.cwd, args.resourcePath);
  return CODEX_WORK_OR_SCRATCH_ROOTS.some((rootName) => {
    const root = resolveUnderCwdKey(args.cwd, rootName);
    return resource === root || resource.startsWith(`${root}/`);
  });
}
