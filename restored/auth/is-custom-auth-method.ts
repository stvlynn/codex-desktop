// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `P6r` / export `IK`.

/** True when auth is not chatgpt / apikey / amazonBedrock. */
export function isCustomAuthMethod(method: string): boolean {
  return (
    method !== "chatgpt" && method !== "apikey" && method !== "amazonBedrock"
  );
}
