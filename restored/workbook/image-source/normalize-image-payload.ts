// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: normalize image asset bag (legacy workbookHelper 312).

import { sniffImageMimeFromBytes } from "../image-mime";
import { DEFAULT_OCTET_STREAM } from "./default-octet-stream";
import { mimeFromPathExtension } from "./extension-mime";
import {
  copyUint8Array,
  isBinaryBuffer,
  parseDataUrlBase64,
} from "./binary-codec";
import type { ImageAssetPayload } from "./types";

/**
 * Legacy workbookHelper 312 — coalesce contentType / prompt / dataUrl /
 * blob / data / uri / path into a normalized asset payload.
 */
export function normalizeImagePayload(
  input: Record<string, unknown>,
): ImageAssetPayload {
  const out: ImageAssetPayload = {};
  if ("contentType" in input && typeof input.contentType == "string") {
    const trimmed = input.contentType.trim().toLowerCase();
    if (trimmed) out.contentType = trimmed;
  }
  if ("prompt" in input && typeof input.prompt == "string")
    out.prompt = input.prompt;
  if ("dataUrl" in input && typeof input.dataUrl == "string") {
    const parsed = parseDataUrlBase64(input.dataUrl);
    if (parsed) {
      out.data = parsed.data;
      out.contentType = parsed.contentType;
    }
  }
  if ("blob" in input && isBinaryBuffer(input.blob))
    out.data = copyUint8Array(input.blob);
  if ("data" in input && input.data)
    out.data = new Uint8Array(input.data as ArrayBuffer | Uint8Array);
  if ("uri" in input && typeof input.uri == "string") {
    out.uri = input.uri;
    const mime = mimeFromPathExtension(input.uri);
    if (mime) out.contentType = mime;
  }
  if ("path" in input && typeof input.path == "string") {
    out.uri = input.path;
    const mime = mimeFromPathExtension(input.path);
    if (mime) out.contentType = mime;
  }
  if (out.data) {
    const sniffed = sniffImageMimeFromBytes(out.data);
    if (sniffed) out.contentType = sniffed;
    else if (out.data.byteLength < 32 && !out.contentType)
      out.data = undefined;
    else out.contentType ||= DEFAULT_OCTET_STREAM;
  }
  if (out.data && !out.contentType) out.contentType = DEFAULT_OCTET_STREAM;
  return out;
}
