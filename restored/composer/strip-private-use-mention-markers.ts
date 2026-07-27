// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `o0c` / export `Gl`.

export function stripPrivateUseMentionMarkers(text: string): string {
  return text.replaceAll(/\uE200[^\uE201]*\uE201/g, "");
}
