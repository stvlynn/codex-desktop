// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UGt` / export `Gnt`.

function bytesToString(bytes: Uint8Array): string {
  const chunk = 8192;
  if (bytes.length < chunk) {
    return String.fromCharCode.apply(null, Array.from(bytes));
  }
  const parts: string[] = [];
  for (let i = 0; i < bytes.length; i += chunk) {
    const slice = bytes.subarray(i, Math.min(i + chunk, bytes.length));
    parts.push(String.fromCharCode.apply(null, Array.from(slice)));
  }
  return parts.join("");
}

/** Prefer `crypto.randomUUID`; fall back to random bytes. */
export function createRandomId(): string {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return bytesToString(bytes);
}
