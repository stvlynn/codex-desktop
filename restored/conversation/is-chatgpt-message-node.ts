// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `U_a` / export `NI` (inlines plain-object check `EV`).

function isPlainObjectRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && !!value && !Array.isArray(value);
}

export function isChatgptMessageNode(value: unknown): boolean {
  if (!isPlainObjectRecord(value)) return false;
  const author = value.author;
  return (
    typeof value.id === "string" &&
    isPlainObjectRecord(author) &&
    typeof author.role === "string" &&
    "content" in value
  );
}
