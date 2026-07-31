// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: image-source barrel (Binding656/$S/Pde + Fde…Kde + Binding657–659/Jde).

export type {
  RoundRectAdjInput,
  ShapeAdjustment,
  ParsedDataUrl,
  ImageAssetPayload,
  ImageCropFractions,
  ImageOptionsBag,
} from "./types";
export {
  ROUND_RECT_ADJ_MAX,
  clampRoundRectAdj,
  buildRoundRectAdjList,
  ensureRoundRectAdjInit,
} from "./round-rect-adj";
export {
  imageExtensionMimeMap,
  stripUrlPath,
  mimeFromPathExtension,
} from "./extension-mime";
export {
  decodeBase64ToBytes,
  encodeBytesToBase64,
  isBinaryBuffer,
  copyUint8Array,
  parseDataUrlBase64,
} from "./binary-codec";
export { clampUnit } from "./clamp-unit";
export { normalizeCropFraction } from "./normalize-crop-fraction";
export { DEFAULT_OCTET_STREAM } from "./default-octet-stream";
export { hasImageSourceFields, hasImageContent } from "./has-image-source";
export { normalizeImagePayload } from "./normalize-image-payload";
export {
  normalizeImageOptions,
  normalizeImageReplaceProps,
} from "./normalize-image-options";
export { withDefaultObjectFit } from "./with-default-object-fit";
export { composeImageAid } from "./compose-image-aid";
export {
  buildReverseShapeGeometryNameMap,
  reverseShapeGeometryNameMap,
} from "./reverse-shape-geometry-names";
export { ensureImageSourceInit } from "./ensure-image-source-init";
