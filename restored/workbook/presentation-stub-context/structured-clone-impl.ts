// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helper: structuredClone with JSON fallback (legacy _Ye).
// Stage-3 wave-144.

export function _Ye(value: any): any {
  return typeof structuredClone == "function"
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));
}

export const structuredCloneJson = _Ye;
