// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FTe` companion for worktree path helpers.

/** Normalize separators to POSIX and collapse `.` / `..`. */
export function normalizePosixPathSlashes(value: string): string {
  const parts = value.replaceAll("\\", "/").split("/");
  const out: string[] = [];
  for (const part of parts) {
    if (part === "" || part === ".") {
      if (part === "" && out.length === 0) out.push("");
      continue;
    }
    if (part === "..") {
      if (out.length > 0 && out[out.length - 1] !== "..") out.pop();
      else out.push("..");
      continue;
    }
    out.push(part);
  }
  if (out.length === 0) return ".";
  if (out.length === 1 && out[0] === "") return "/";
  return out.join("/");
}
