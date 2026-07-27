// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Int` / export `Zct`.

export function decodeBase64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  return Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
}
