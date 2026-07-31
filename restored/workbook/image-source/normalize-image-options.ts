// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: image options / replace props (legacy Wde/Hde/h313).

import { encodeBytesToBase64, isBinaryBuffer } from "./binary-codec";
import { normalizeImagePayload } from "./normalize-image-payload";
import type { ImageOptionsBag } from "./types";

/** Legacy `Wde` — normalize image element options (+ blob → dataUrl). */
export function normalizeImageOptions(
  props: ImageOptionsBag,
): ImageOptionsBag {
  const out: ImageOptionsBag = {};
  const fromBlob =
    "blob" in props && isBinaryBuffer(props.blob)
      ? normalizeImagePayload(props)
      : undefined;
  if ("alt" in props && props.alt !== undefined) out.alt = props.alt;
  if ("fit" in props && props.fit !== undefined) out.fit = props.fit;
  if (fromBlob?.contentType) out.contentType = fromBlob.contentType;
  else if ("contentType" in props && props.contentType !== undefined)
    out.contentType = props.contentType;
  if ("position" in props && props.position !== undefined)
    out.position = { ...props.position };
  if ("frame" in props && props.frame !== undefined)
    out.frame = { ...props.frame };
  if ("crop" in props && props.crop !== undefined)
    out.crop = { ...props.crop };
  if ("geometry" in props && props.geometry !== undefined)
    out.geometry = props.geometry;
  if ("borderRadius" in props && props.borderRadius !== undefined)
    out.borderRadius = props.borderRadius;
  if (fromBlob?.prompt === undefined) {
    if ("prompt" in props && typeof props.prompt == "string")
      out.prompt = props.prompt;
  } else out.prompt = fromBlob.prompt;
  if ("path" in props && typeof props.path == "string") out.path = props.path;
  if ("uri" in props && typeof props.uri == "string") out.uri = props.uri;
  if ("dataUrl" in props && typeof props.dataUrl == "string")
    out.dataUrl = props.dataUrl;
  if (
    fromBlob?.data &&
    fromBlob.data.length > 0 &&
    fromBlob.contentType
  )
    out.dataUrl = `data:${fromBlob.contentType};base64,${encodeBytesToBase64(fromBlob.data)}`;
  return out;
}

/** Legacy workbookHelper 313 / `Hde` — alias of normalizeImageOptions. */
export function normalizeImageReplaceProps(
  props: ImageOptionsBag,
): ImageOptionsBag {
  return normalizeImageOptions(props);
}
