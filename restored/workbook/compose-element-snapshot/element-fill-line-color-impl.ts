// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: element fill image / fill color / line color (legacy _Oe/SOe/COe).
// Stage-3 wave-140.

import { Fill } from "../fill";
import { imageAssetRef } from "./layout-blob-impl";

export function _Oe(cesIn10330: any, cesIn10331: any) {
  let cesBind20797 = (cesIn10330?.shape?.fill ?? cesIn10330?.fill)
    ?.imageReference?.id;
  if (!(!cesIn10331 || !cesBind20797))
    return imageAssetRef(cesIn10331.images.getById(cesBind20797));
}
export function SOe(cesIn10532: any) {
  let cesBind20992 = cesIn10532?.shape?.fill ?? cesIn10532?.fill;
  if (cesBind20992)
    return new Fill({
      type: "proto",
      proto: cesBind20992,
    }).color.toConfig();
}
export function COe(cesIn10668: any) {
  let cesBind21174 = cesIn10668?.shape?.line?.fill;
  if (cesBind21174)
    return new Fill({
      type: "proto",
      proto: cesBind21174,
    }).color.toConfig();
}
