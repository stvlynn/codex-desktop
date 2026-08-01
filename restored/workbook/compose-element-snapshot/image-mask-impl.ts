// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: resolve image mask geometry (legacy zDe).
// Stage-3 wave-135b.

import { ImageElement as workbookBinding660 } from "../image-element";
import { trimNonEmpty as workbookHelper695 } from "./layout-blob-impl";

export function zDe(cesIn5642: any) {
  if (!(cesIn5642 instanceof workbookBinding660)) return;
  let cesBind15505 = cesIn5642.resolveImageMask();
  if (!cesBind15505) return;
  let cesBind15506 =
    cesBind15505.adjustmentList.length > 0
      ? cesBind15505.adjustmentList.map((item) => ({
          name: workbookHelper695(item.name),
          formula: workbookHelper695(item.formula),
        }))
      : undefined;
  return {
    geometry: cesBind15505.geometry,
    adjustmentList: cesBind15506,
  };
}
