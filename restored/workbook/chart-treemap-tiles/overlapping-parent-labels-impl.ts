// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: overlapping treemap parent-label layout.
// Stage-3 wave-113.

export function layoutOverlappingParentLabels(
  cttIn3011: any,
  cttIn3012: any,
  cttIn3013: any,
) {
  let cttBind11038 = [],
    cttBind11039 = new Map();
  for (let cttBind12287 of cttIn3012) {
    let cttBind12563 = cttIn3013.filter((item) =>
      isLeafUnderParent(item, cttBind12287),
    );
    if (cttBind12563.length === 0) continue;
    let cttBind12564 = pickDominantLeaf(cttBind12563);
    if (!cttBind12564) continue;
    let cttBind12565 = cttBind12564.width - _R * 2,
      cttBind12566 = cttBind12564.height - _R * 2;
    if (cttBind12565 <= 0 || cttBind12566 <= cttBind1195) continue;
    let cttBind12567 = Math.max(cttBind1199, cttBind12566 - cttBind1195),
      cttBind12568 = cttHelper562(
        cttIn3011,
        cttBind12287.name,
        cttBind12565,
        cttBind12567,
        cttBind1198,
      );
    if (cttBind12568.length === 0) continue;
    let cttBind12569 = cttBind12568.length * cttBind1199 + cttBind1200;
    if (cttBind12566 - cttBind12569 < cttBind1195) continue;
    let cttBind12570 = {
        parent: cttBind12287,
        leaf: cttBind12564,
        lines: cttBind12568,
        reservedTop: cttBind12569,
      },
      cttBind12571 = treemapLeafKey(cttBind12564);
    cttBind11038.push(cttBind12570);
    cttBind11039.set(cttBind12571, cttBind12570);
  }
  return {
    placements: cttBind11038,
    byLeafKey: cttBind11039,
  };
}
export function treemapLeafKey(cttIn14220: any) {
  return cttIn14220.path.join("\0") || cttIn14220.name;
}
export function isLeafUnderParent(cttIn9070: any, cttIn9071: any) {
  if (cttIn9070.path.length < cttIn9071.path.length) return false;
  for (
    let cttBind22267 = 0;
    cttBind22267 < cttIn9071.path.length;
    cttBind22267 += 1
  )
    if (cttIn9070.path[cttBind22267] !== cttIn9071.path[cttBind22267])
      return false;
  return true;
}
export function pickDominantLeaf(props: any) {
  if (props.length === 0) return;
  let cttBind17021 = props[0];
  for (let cttBind19296 = 1; cttBind19296 < props.length; cttBind19296 += 1) {
    let cttBind20458 = props[cttBind19296];
    if (cttBind20458.y < cttBind17021.y - cttBind1197) {
      cttBind17021 = cttBind20458;
      continue;
    }
    Math.abs(cttBind20458.y - cttBind17021.y) <= cttBind1197 &&
      cttBind20458.x < cttBind17021.x - cttBind1197 &&
      (cttBind17021 = cttBind20458);
  }
  return cttBind17021;
}

export const PSe = layoutOverlappingParentLabels;
export const LSe = pickDominantLeaf;
