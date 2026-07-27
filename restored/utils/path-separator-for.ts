// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `ilu` for `nlu` / export `nn`.

/** Pick `\\` when `path` already uses backslashes; otherwise `/`. */
export function pathSeparatorFor(pathValue: string): "\\" | "/" {
  return pathValue.includes("\\") ? "\\" : "/";
}
