// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wZi` companion for `NB`.

/** True when the path's parent segment is `.chatgpt-projects`. */
export function isChatgptProjectsParentPath(filePath: string): boolean {
  return (
    filePath
      .split(/[\\/]+/)
      .filter(Boolean)
      .at(-2) === ".chatgpt-projects"
  );
}
