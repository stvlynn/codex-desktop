// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: image-source cluster ensure (legacy Binding661 consts).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRoundRectAdjInit } from "./round-rect-adj";
import { imageExtensionMimeMap } from "./extension-mime";
import { DEFAULT_OCTET_STREAM } from "./default-octet-stream";
import { clampUnit } from "./clamp-unit";
import { hasImageSourceFields } from "./has-image-source";
import { reverseShapeGeometryNameMap } from "./reverse-shape-geometry-names";
import { normalizeImagePayload } from "./normalize-image-payload";
import { normalizeImageOptions } from "./normalize-image-options";

/** Touch image-source constants + normalize helpers. */
export const ensureImageSourceInit = esmInit(() => {
  ensureRoundRectAdjInit();
  void DEFAULT_OCTET_STREAM;
  void imageExtensionMimeMap;
  void clampUnit;
  void hasImageSourceFields;
  void reverseShapeGeometryNameMap;
  void normalizeImagePayload;
  void normalizeImageOptions;
});
