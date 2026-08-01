// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sunburst arc layout (legacy BSe; paintTrendlines misnomer).
// Stage-3 wave-109.

import { c, s } from "../../boundaries/d3-hierarchy";
import { cslH } from "./boundary-hooks";

void c;
void s;
void cslH;

export function layoutSunburstArcs(
  cslIn1441: any,
  cslIn1442: any,
  cslIn1443: any,
) {
  let cslBind7344 = collectSunburstLeaves(cslIn1441),
    cslBind7345 = Math.max(0, Math.min(cslIn1442.width, cslIn1442.height) / 2);
  if (cslBind7344.length === 0 || cslBind7345 === 0)
    return {
      arcs: [],
      maxDepth: 0,
      radius: cslBind7345,
    };
  let cslBind7346 = c(treeToHierarchy(buildSunburstTree(cslBind7344)))
      .sum((cslIn13535) =>
        typeof cslIn13535.value == "number" && cslIn13535.value > 0
          ? cslIn13535.value
          : 0,
      )
      .sort(
        (cslIn15494, cslIn15495) =>
          (cslIn15495.value ?? 0) - (cslIn15494.value ?? 0),
      ),
    cslBind7347 = s().size([2 * Math.PI, cslBind7345])(cslBind7346),
    cslBind7348 = sunburstColorScale(cslIn1443, cslBind7344),
    cslBind7349 = cslBind7347
      .descendants()
      .filter(
        (item) =>
          item.depth > 0 &&
          (item.value ?? 0) > 0 &&
          Number.isFinite(item.x0) &&
          Number.isFinite(item.x1) &&
          item.x1 > item.x0,
      )
      .map((item) => {
        let cslBind14505 = item.data.path,
          cslBind14506 = cslBind14505[0],
          cslBind14507 = cslBind7348(cslBind14506);
        return {
          name: item.data.name,
          path: cslBind14505,
          value: item.value ?? 0,
          depth: item.depth,
          startAngle: item.x0,
          endAngle: item.x1,
          innerRadius: Math.max(0, item.y0),
          outerRadius: Math.max(0, item.y1),
          fill: cslBind14507,
        };
      });
  return {
    arcs: cslBind7349,
    maxDepth: cslBind7349.reduce(
      (accumulator, current) => Math.max(accumulator, current.depth),
      0,
    ),
    radius: cslBind7345,
  };
}
export function collectSunburstLeaves(props: any) {
  let cslBind9614 = new Map();
  for (let cslBind10284 of props.series) {
    let cslBind10549 = cslBind10284.values ?? [],
      cslBind10550 = padCategoryPaths(
        cslBind10284.categoryPaths,
        cslBind10549.length,
      ),
      cslBind10551 = cslH.bh347(cslBind10284, props.categories);
    for (
      let cslBind11693 = 0;
      cslBind11693 < cslBind10549.length;
      cslBind11693 += 1
    ) {
      let cslBind12200 = cslBind10549[cslBind11693];
      if (
        typeof cslBind12200 != "number" ||
        !Number.isFinite(cslBind12200) ||
        cslBind12200 <= 0
      )
        continue;
      let cslBind12201 =
        cslBind10550[cslBind11693]?.levels?.filter(
          (cslIn15304) =>
            typeof cslIn15304 == "string" && cslIn15304.length > 0,
        ) ?? undefined;
      if (!cslBind12201 || cslBind12201.length === 0) {
        let cslBind22081 = cslBind10551?.[cslBind11693];
        typeof cslBind22081 == "string" &&
          cslBind22081.length > 0 &&
          (cslBind12201 = [cslBind22081]);
      }
      if (!cslBind12201 || cslBind12201.length === 0) continue;
      let cslBind12202 = [...cslBind12201].reverse(),
        cslBind12203 = cslBind12202.join(cslH.pathSep),
        cslBind12204 = cslBind9614.get(cslBind12203);
      cslBind12204
        ? (cslBind12204.value += cslBind12200)
        : cslBind9614.set(cslBind12203, {
            path: cslBind12202,
            value: cslBind12200,
          });
    }
  }
  return Array.from(cslBind9614.values());
}
export function padCategoryPaths(cslIn8457: any, cslIn8458: any) {
  if (!cslIn8457 || cslIn8457.length === 0)
    return Array(cslIn8458).fill(undefined);
  if (cslIn8457.length >= cslIn8458) return cslIn8457;
  let cslBind18959 = cslIn8457.slice();
  for (; cslBind18959.length < cslIn8458; )
    cslBind18959.push({
      levels: [],
    });
  return cslBind18959;
}
export function buildSunburstTree(cslIn4650: any) {
  let cslBind13910 = {
    name: "root",
    path: [],
    children: new Map(),
  };
  for (let cslBind15797 of cslIn4650) {
    let cslBind16155 = cslBind13910;
    cslBind15797.path.forEach((item, index) => {
      let cslBind17211 = cslBind16155.children.get(item);
      cslBind17211 ||
        ((cslBind17211 = {
          name: item,
          path: [...cslBind16155.path, item],
          children: new Map(),
        }),
        cslBind16155.children.set(item, cslBind17211));
      cslBind16155 = cslBind17211;
      index === cslBind15797.path.length - 1 &&
        (cslBind16155.value = (cslBind16155.value ?? 0) + cslBind15797.value);
    });
  }
  return cslBind13910;
}
export function treeToHierarchy(cslIn8188: any) {
  let cslBind18691 = Array.from(cslIn8188.children.values()).map(
    treeToHierarchy,
  );
  return cslBind18691.length === 0
    ? {
        name: cslIn8188.name,
        path: cslIn8188.path,
        value: cslIn8188.value ?? 0,
      }
    : {
        name: cslIn8188.name,
        path: cslIn8188.path,
        children: cslBind18691,
      };
}
export function sunburstColorScale(cslIn2932: any, cslIn2933: any) {
  let cslBind10849 = new Set();
  for (let cslBind22409 of cslIn2933) {
    let cslBind22693 = cslBind22409.path[0];
    cslBind22693 && cslBind22693.length > 0 && cslBind10849.add(cslBind22693);
  }
  let cslBind10850 = Array.from(cslBind10849.values());
  if (cslBind10850.length === 0) return () => cslH.palette[0] ?? "#999999";
  let cslBind10851 = [
      "accent1",
      "accent2",
      "accent3",
      "accent4",
      "accent5",
      "accent6",
    ],
    cslBind10852 = (cslIn10588) => {
      let cslBind21063 = cslBind10851[cslIn10588 % cslBind10851.length];
      return (
        cslIn2932.colorMap[cslBind21063 ?? ""] ||
        (cslH.palette[cslIn10588 % cslH.palette.length] ??
          cslH.palette[0] ??
          "#999999")
      );
    },
    cslBind10853 = cslBind10850.map((item, index) => cslBind10852(index)),
    cslBind10854 = cslH.scaleOrdinal().domain(cslBind10850).range(cslBind10853);
  return (cslIn10388) => {
    if (!cslIn10388) return cslH.palette[0] ?? "#999999";
    if (cslBind10849.has(cslIn10388)) return cslBind10854(cslIn10388);
    let cslBind20860 = cslBind10854.domain().length;
    return cslBind10852(cslBind20860);
  };
}

/** Legacy aliases. */
export const BSe = layoutSunburstArcs;
export const VSe = collectSunburstLeaves;
export const HSe = padCategoryPaths;
export const USe = buildSunburstTree;
export const workbookHelper567 = treeToHierarchy;
export const WSe = sunburstColorScale;
