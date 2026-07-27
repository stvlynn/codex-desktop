// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fKc` / export `bd`.

export function activityItemStableId(entry: {
  item: Record<string, unknown>;
}): string | null {
  const item = entry.item;
  if (typeof item.id === "string") return item.id;
  if (typeof item.callId === "string") return item.callId;
  if (typeof item.requestId === "string") return item.requestId;
  if (typeof item.handoffId === "string") return item.handoffId;
  return null;
}
