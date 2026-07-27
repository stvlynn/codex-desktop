// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Fnt` — pure helper.

/** Encode bytes as base64 (prefer native `toBase64` when present). */
export function bytesToBase64(bytes: Uint8Array): string {
  const withNative = bytes as Uint8Array & { toBase64?: () => string };
  if ("toBase64" in bytes && typeof withNative.toBase64 === "function") {
    return withNative.toBase64();
  }
  let out = "";
  const chunk = 32768;
  for (let i = 0; i < bytes.byteLength; i += chunk) {
    out += String.fromCharCode.apply(
      null,
      bytes.subarray(i, i + chunk) as unknown as number[],
    );
  }
  return btoa(out);
}

/** UTF-8 string → base64. Bundle export `Fnt`. */
export function stringToBase64(value: string): string {
  return bytesToBase64(new TextEncoder().encode(value));
}
