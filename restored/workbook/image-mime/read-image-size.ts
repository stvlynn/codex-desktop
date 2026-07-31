// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: PNG/GIF/JPEG/WEBP size readers + mime dispatch
// (legacy cde / lde / ude / dde / fde / Binding650).

import { bytesMatchAscii } from "./bytes-match-ascii";
import { parseContentTypeMime } from "./parse-content-type";
import { sniffImageMimeFromBytes } from "./sniff-image-mime";
import type { ImagePixelSize } from "./types";

/** Legacy `cde` — JPEG SOF marker codes that carry frame dimensions. */
export const jpegSofMarkerCodes: ReadonlySet<number> = new Set([
  192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207,
]);

/** Legacy `lde` — PNG IHDR width/height. */
export function readPngSize(
  bytes: Uint8Array,
): ImagePixelSize | undefined {
  if (
    bytes.byteLength < 24 ||
    bytes[0] !== 137 ||
    bytes[1] !== 80 ||
    bytes[2] !== 78 ||
    bytes[3] !== 71
  )
    return;
  let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength),
    width = view.getUint32(16),
    height = view.getUint32(20);
  if (!(width <= 0 || height <= 0))
    return {
      width,
      height,
    };
}

/** Legacy `ude` — GIF logical screen descriptor size. */
export function readGifSize(
  bytes: Uint8Array,
): ImagePixelSize | undefined {
  if (bytes.byteLength < 10 || !bytesMatchAscii(bytes, 0, "GIF")) return;
  let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength),
    width = view.getUint16(6, true),
    height = view.getUint16(8, true);
  if (!(width <= 0 || height <= 0))
    return {
      width,
      height,
    };
}

/** Legacy `dde` — JPEG SOF frame size. */
export function readJpegSize(
  bytes: Uint8Array,
): ImagePixelSize | undefined {
  if (bytes.byteLength < 4) return;
  let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint8(0) !== 255 || view.getUint8(1) !== 216) return;
  let offset = 2;
  for (; offset + 9 < bytes.byteLength; ) {
    if (view.getUint8(offset) !== 255) {
      offset += 1;
      continue;
    }
    let marker = view.getUint8(offset + 1);
    for (; marker === 255 && offset + 2 < bytes.byteLength; ) {
      offset += 1;
      marker = view.getUint8(offset + 1);
    }
    if (marker === 217 || marker === 218) break;
    let segmentLength =
      (view.getUint8(offset + 2) << 8) + view.getUint8(offset + 3);
    if (segmentLength < 2 || offset + 2 + segmentLength > bytes.byteLength)
      break;
    if (jpegSofMarkerCodes.has(marker)) {
      let height =
          (view.getUint8(offset + 5) << 8) + view.getUint8(offset + 6),
        width =
          (view.getUint8(offset + 7) << 8) + view.getUint8(offset + 8);
      return height <= 0 || width <= 0
        ? undefined
        : {
            width,
            height,
          };
    }
    offset += 2 + segmentLength;
  }
}

/** Legacy `fde` — WEBP VP8X / VP8L / VP8 size. */
export function readWebpSize(
  bytes: Uint8Array,
): ImagePixelSize | undefined {
  if (
    bytes.byteLength < 30 ||
    !bytesMatchAscii(bytes, 0, "RIFF") ||
    !bytesMatchAscii(bytes, 8, "WEBP")
  )
    return;
  let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  switch (
    String.fromCharCode(
      view.getUint8(12),
      view.getUint8(13),
      view.getUint8(14),
      view.getUint8(15),
    )
  ) {
    case "VP8X": {
      if (bytes.byteLength < 30) return;
      let width =
          1 +
          (view.getUint8(24) |
            (view.getUint8(25) << 8) |
            (view.getUint8(26) << 16)),
        height =
          1 +
          (view.getUint8(27) |
            (view.getUint8(28) << 8) |
            (view.getUint8(29) << 16));
      return width <= 0 || height <= 0
        ? undefined
        : {
            width,
            height,
          };
    }
    case "VP8L": {
      if (bytes.byteLength < 25 || view.getUint8(20) !== 47) return;
      let bits = view.getUint32(21, true),
        width = (bits & 16383) + 1,
        height = ((bits >> 14) & 16383) + 1;
      return width <= 0 || height <= 0
        ? undefined
        : {
            width,
            height,
          };
    }
    case "VP8 ": {
      if (
        bytes.byteLength < 30 ||
        view.getUint8(23) !== 157 ||
        view.getUint8(24) !== 1 ||
        view.getUint8(25) !== 42
      )
        return;
      let width =
          (view.getUint8(26) | (view.getUint8(27) << 8)) & 16383,
        height =
          (view.getUint8(28) | (view.getUint8(29) << 8)) & 16383;
      return width <= 0 || height <= 0
        ? undefined
        : {
            width,
            height,
          };
    }
    default:
      return;
  }
}

/**
 * Legacy `workbookBinding650` — resolve mime (header or sniff) then
 * dispatch to the matching size reader.
 */
export function probeImageSize(
  bytes: Uint8Array,
  contentType?: string | null,
): ImagePixelSize | undefined {
  switch (parseContentTypeMime(contentType) ?? sniffImageMimeFromBytes(bytes)) {
    case "image/png":
      return readPngSize(bytes);
    case "image/jpeg":
    case "image/jpg":
      return readJpegSize(bytes);
    case "image/gif":
      return readGifSize(bytes);
    case "image/webp":
      return readWebpSize(bytes);
    default:
      return;
  }
}
