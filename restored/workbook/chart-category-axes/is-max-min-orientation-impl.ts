// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: axis max-min orientation check (legacy $O).
// Stage-3 wave-141.

import { Mn as _presentationMn } from "../presentation-protobuf";

export function $O(ccaIn12360: any) {
  return (
    ccaIn12360.xAxis?.orientation === _presentationMn.AXIS_ORIENTATION_MAX_MIN
  );
}
