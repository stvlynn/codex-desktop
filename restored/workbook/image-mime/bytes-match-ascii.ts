// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: ASCII byte-prefix matcher (legacy Binding649).

/** Legacy `workbookBinding649` — compare bytes[offset..] to ASCII string. */
export function bytesMatchAscii(
  bytes: Uint8Array,
  offset: number,
  ascii: string,
): boolean {
  if (offset + ascii.length > bytes.byteLength) return false;
  for (let i = 0; i < ascii.length; i += 1)
    if (bytes[offset + i] !== ascii.charCodeAt(i)) return false;
  return true;
}
