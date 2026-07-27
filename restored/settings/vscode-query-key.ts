// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// React-query key builder scoped to the vscode host namespace
// (bundle `$f` / export `Qut`; `LZe = "vscode"`).

export const VSCODE_QUERY_NAMESPACE = "vscode";

/**
 * Bundle `$f` / export `Qut`.
 */
export function buildVscodeQueryKey(
  method: string,
  params?: unknown,
  extra?: unknown | readonly unknown[],
): unknown[] {
  return [
    VSCODE_QUERY_NAMESPACE,
    method,
    ...(extra == null ? [] : Array.isArray(extra) ? extra : [extra]),
    params != null ? JSON.stringify(params) : undefined,
  ].filter((part) => part !== undefined);
}
