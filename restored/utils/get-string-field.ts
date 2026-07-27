// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cw` / export `n7`.

export function getStringField(record: Record<string, unknown>, key: string): string | undefined {
  const value = record[key];
  return typeof value === "string" ? value : undefined;
}
