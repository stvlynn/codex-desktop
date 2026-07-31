// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: magic-byte image mime sniff (legacy Binding648).

/**
 * Legacy `workbookBinding648` — sniff PNG / JPEG / GIF / WEBP from bytes.
 */
export function sniffImageMimeFromBytes(
  bytes: Uint8Array | null | undefined,
): string | undefined {
  if (!(!bytes || bytes.byteLength < 4)) {
    if (
      bytes.byteLength >= 8 &&
      bytes[0] === 137 &&
      bytes[1] === 80 &&
      bytes[2] === 78 &&
      bytes[3] === 71 &&
      bytes[4] === 13 &&
      bytes[5] === 10 &&
      bytes[6] === 26 &&
      bytes[7] === 10
    )
      return "image/png";
    if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255)
      return "image/jpeg";
    if (
      bytes.byteLength >= 4 &&
      bytes[0] === 71 &&
      bytes[1] === 73 &&
      bytes[2] === 70 &&
      bytes[3] === 56
    )
      return "image/gif";
    if (
      bytes.byteLength >= 12 &&
      bytes[0] === 82 &&
      bytes[1] === 73 &&
      bytes[2] === 70 &&
      bytes[3] === 70 &&
      bytes[8] === 87 &&
      bytes[9] === 69 &&
      bytes[10] === 66 &&
      bytes[11] === 80
    )
      return "image/webp";
  }
}
