// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide layout blob + table overlap (legacy PDe/BDe/vOe).
// Stage-3 wave-115.

import { Fill } from "../fill";
import {
  workbookBinding1490 as LAYOUT_SCHEMA,
  workbookBinding1491 as LAYOUT_BLOB_MIME,
} from "../compose-dsl";
import { buildComposeElementSnapshot } from "./compose-element-snapshot-impl";
import { cesH } from "./boundary-hooks";
import { buildElementTextLayoutMap } from "../element-text-layout";
import { collectSlideThemeFonts } from "../presentation-theme";
import {
  resolvePlaceholderLevelStyles,
  levelStyleAtOutline,
} from "../placeholder-resolve";

void Fill;
void LAYOUT_SCHEMA;
void LAYOUT_BLOB_MIME;
void buildComposeElementSnapshot;
void cesH;
void buildElementTextLayoutMap;
void collectSlideThemeFonts;
void resolvePlaceholderLevelStyles;
void levelStyleAtOutline;

export function buildSlideLayoutBlob(cesIn1133: any, cesIn1134: any) {
  let cesBind6586 = cesIn1133.getPresentation(),
    cesBind6587 = new Map(),
    cesBind6588 = mapDrawElementProtos(cesIn1133),
    cesBind6589 = buildElementTextLayoutMap(cesIn1133, cesBind6588);
  cesIn1134.forEach((item, index) => {
    indexComposeAids(item.root, index + 1, cesBind6587);
  });
  let cesBind6590 = cesIn1133.elements.items.map((item, index) =>
    buildComposeElementSnapshot({
      scope: "slide",
      order: index + 1,
      modelElement: item,
      slide: cesIn1133,
      presentation: cesBind6586,
      protoElement: cesBind6588.get(item),
      composeSource: cesBind6587.get(cesH.bh681(item).aid),
      textLayout: cesBind6589.get(item.id),
    }),
  );
  attachOverlappingTableCells(cesBind6590);
  let cesBind6591 =
      cesBind6586 && cesIn1133.useLayoutId
        ? cesBind6586.layouts.getById(cesIn1133.useLayoutId)
        : undefined,
    cesBind6592 =
      cesBind6586 && cesBind6591?.parentLayoutId
        ? cesBind6586.layouts.getById(cesBind6591.parentLayoutId)
        : undefined,
    cesBind6593 = cesBind6586
      ? buildInheritedLayers(
          cesBind6586,
          cesIn1133,
          cesBind6591,
          cesBind6592,
          cesBind6588,
        )
      : undefined,
    cesBind6594 = collectSlideThemeFonts(cesBind6586, cesBind6590, cesBind6593);
  return {
    schema: LAYOUT_SCHEMA,
    unit: "px",
    slide: {
      aid: `sl/${cesIn1133.id}`,
      id: cesIn1133.id,
      slide: cesIn1133.slideNumber,
      layoutId: cesBind6591?.id,
      layoutName: trimNonEmpty(cesBind6591?.name),
      layoutType: trimNonEmpty(cesBind6591?.type),
      masterLayoutId: cesBind6592?.id,
      masterLayoutName: trimNonEmpty(cesBind6592?.name),
      backgroundColor: backgroundFillColor(cesIn1133.toProto().background),
      backgroundImage: backgroundFillImage(
        cesIn1133.toProto().background,
        cesBind6586,
      ),
      frame: frameToLayoutRect(cesIn1133.frame),
    },
    theme: cesBind6594,
    inheritedLayers: cesBind6593,
    elements: cesBind6590,
    composeRuns: cesIn1134.map((item, index) => ({
      index: index + 1,
      frame: frameToLayoutRect(item.frame),
      baseUnit: item.baseUnit,
      root: item.root,
    })),
  };
}
export function exportLayoutBlob(cesIn11131: any, cesIn11132: any) {
  let cesBind21625 = buildSlideLayoutBlob(cesIn11131, cesIn11132);
  return new Blob([JSON.stringify(cesBind21625, null, 2)], {
    type: LAYOUT_BLOB_MIME,
  });
}
export function mapDrawElementProtos(props: any) {
  let cesBind18601 = props.resolveRenderContext(),
    cesBind18602 = new Map();
  return (
    cesBind18601.drawElements.forEach((item, index) => {
      let cesBind22422 = cesBind18601.drawElementProtos[index];
      cesBind22422 && cesBind18602.set(item, cesBind22422);
    }),
    cesBind18602
  );
}
export function indexComposeAids(
  cesIn10151: any,
  cesIn10152: any,
  cesIn10153: any,
) {
  cesIn10151.element?.aid &&
    cesIn10153.set(cesIn10151.element.aid, {
      run: cesIn10152,
      path: cesIn10151.path,
    });
  cesIn10151.children.forEach((item) =>
    indexComposeAids(item, cesIn10152, cesIn10153),
  );
}
export function buildInheritedLayers(
  cesIn1524: any,
  cesIn1525: any,
  cesIn1526: any,
  cesIn1527: any,
  cesIn1528: any,
) {
  let cesBind7572 = [],
    cesBind7573 = (cesIn1786, cesIn1787) => {
      if (!cesIn1787) return;
      let cesBind8308 = new Map(
          cesIn1787.toProto().elements.map((item) => [item.id ?? "", item]),
        ),
        cesBind8309 = (
          cesIn1786 === "master" && cesIn1525.showMasterShapes === false
            ? cesIn1787.elements.filter(
                (item) =>
                  item.placeholderIndex !== undefined ||
                  item.placeholderType !== undefined,
              )
            : cesIn1787.elements
        ).map((item, index) =>
          buildComposeElementSnapshot({
            scope: cesIn1786,
            order: index + 1,
            modelElement: item,
            slide: cesIn1525,
            presentation: cesIn1524,
            protoElement: cesIn1528.get(item) ?? cesBind8308.get(item.id),
            aid: `template/${cesIn1786}/${cesIn1787.id}/${item.id}`,
          }),
        );
      cesBind7572.push({
        scope: cesIn1786,
        id: cesIn1787.id,
        name: trimNonEmpty(cesIn1787.name),
        type: trimNonEmpty(cesIn1787.type),
        parentLayoutId: trimNonEmpty(cesIn1787.parentLayoutId),
        backgroundColor: backgroundFillColor(cesIn1787.toProto().background),
        backgroundImage: backgroundFillImage(
          cesIn1787.toProto().background,
          cesIn1524,
        ),
        elements: cesBind8309,
      });
    };
  return (
    cesBind7573("layout", cesIn1526),
    cesBind7573("master", cesIn1527),
    cesBind7572.length > 0 ? cesBind7572 : undefined
  );
}
export function applyOutlineLevelStyles(
  cesIn2585: any,
  cesIn2586: any,
  cesIn2587: any,
) {
  let cesBind10001 = resolvePlaceholderLevelStyles(cesIn2586, cesIn2587);
  return cesBind10001.length === 0
    ? cesIn2585
    : cesIn2585.map((item, index) => {
        let cesBind10917 = levelStyleAtOutline(cesBind10001, cesIn2586, index);
        return cesBind10917
          ? {
              ...item,
              bulletCharacter:
                item.bulletCharacter ??
                cesBind10917.paragraphStyle?.bulletCharacter,
              marginLeft:
                item.marginLeft ??
                round2(cesBind10917.paragraphStyle?.marginLeft),
              indent:
                item.indent ?? round2(cesBind10917.paragraphStyle?.indent),
              lineSpacingPercent:
                item.lineSpacingPercent ??
                round2(cesBind10917.paragraphStyle?.lineSpacingPercent),
              spaceBefore: item.spaceBefore ?? round2(cesBind10917.spaceBefore),
              spaceAfter: item.spaceAfter ?? round2(cesBind10917.spaceAfter),
            }
          : item;
      });
}
export function backgroundFillColor(cesIn11092: any) {
  let cesBind21598 = cesIn11092?.fill;
  if (cesBind21598)
    return new Fill({
      type: "proto",
      proto: cesBind21598,
    }).color.toConfig();
}
export function backgroundFillImage(cesIn10960: any, cesIn10961: any) {
  let cesBind21476 = cesIn10960?.fill?.imageReference?.id;
  if (!(!cesIn10961 || !cesBind21476))
    return imageAssetRef(cesIn10961.images.getById(cesBind21476));
}
export function imageAssetRef(cesIn6193: any) {
  if (!cesIn6193) return;
  let cesBind16273 = {
    assetId: trimNonEmpty(cesIn6193.id),
    contentType: trimNonEmpty(cesIn6193.contentType),
    uri: trimNonEmpty(cesIn6193.uri),
    prompt: trimNonEmpty(cesIn6193.prompt),
    byteLength:
      cesIn6193.data.byteLength > 0 ? cesIn6193.data.byteLength : undefined,
  };
  return Object.values(cesBind16273).some((item) => item !== undefined)
    ? cesBind16273
    : undefined;
}
export function attachOverlappingTableCells(cesIn1751: any) {
  let cesBind8208 = [];
  cesIn1751.forEach((item) => {
    item.kind === "table" &&
      item.cells?.forEach((cesIn11053) => {
        let cesBind21575 = bboxToRect(cesIn11053.bbox);
        cesBind21575 &&
          cesBind8208.push({
            cell: cesIn11053,
            tableAid: item.aid,
            bboxRect: cesBind21575,
          });
      });
  });
  cesBind8208.length !== 0 &&
    cesIn1751.forEach((item) => {
      if (item.kind === "table") return;
      let cesBind10232 = bboxToRect(item.bbox);
      if (!cesBind10232) return;
      let cesBind10233,
        cesBind10234 = 0;
      if (
        (cesBind8208.forEach((_item) => {
          let cesBind19810 = overlapArea(cesBind10232, _item.bboxRect);
          if (cesBind19810 <= 0) return;
          let cesBind19811 = cesBind19810 / rectArea(cesBind10232);
          cesBind19811 > cesBind10234 &&
            ((cesBind10234 = cesBind19811), (cesBind10233 = _item));
        }),
        !cesBind10233 || cesBind10234 < 0.5)
      )
        return;
      item.tableCell = {
        tableAid: cesBind10233.tableAid,
        cellIndex: cesBind10233.cell.index,
        row: cesBind10233.cell.row,
        column: cesBind10233.cell.column,
        overlap: round2(cesBind10234) ?? cesBind10234,
      };
      let cesBind10235 = cesBind10233.cell.ownedElementAids ?? [];
      cesBind10235.push(item.aid);
      cesBind10233.cell.ownedElementAids = cesBind10235;
    });
}
export function bboxToRect(cesIn6703: any) {
  if (!isBboxTuple(cesIn6703)) return;
  let [cesBind17000, cesBind17001, cesBind17002, cesBind17003] = cesIn6703;
  if (
    !(
      !Number.isFinite(cesBind17000) ||
      !Number.isFinite(cesBind17001) ||
      !Number.isFinite(cesBind17002) ||
      !Number.isFinite(cesBind17003)
    )
  )
    return {
      left: cesBind17000,
      top: cesBind17001,
      right: cesBind17000 + cesBind17002,
      bottom: cesBind17001 + cesBind17003,
    };
}
export function isBboxTuple(cesIn13945: any) {
  return cesIn13945 !== undefined && cesIn13945.length >= 4;
}
export function overlapArea(cesIn8575: any, cesIn8576: any) {
  let cesBind19071 =
      Math.min(cesIn8575.right, cesIn8576.right) -
      Math.max(cesIn8575.left, cesIn8576.left),
    cesBind19072 =
      Math.min(cesIn8575.bottom, cesIn8576.bottom) -
      Math.max(cesIn8575.top, cesIn8576.top);
  return cesBind19071 <= 0 || cesBind19072 <= 0
    ? 0
    : cesBind19071 * cesBind19072;
}
export function rectArea(cesIn11807: any) {
  return (
    Math.max(0, cesIn11807.right - cesIn11807.left) *
    Math.max(0, cesIn11807.bottom - cesIn11807.top)
  );
}
export function frameToLayoutRect(cesIn9852: any) {
  return {
    left: round2(cesIn9852.left) ?? 0,
    top: round2(cesIn9852.top) ?? 0,
    width: round2(cesIn9852.width) ?? 0,
    height: round2(cesIn9852.height) ?? 0,
  };
}
export function trimNonEmpty(cesIn12016: any) {
  if (typeof cesIn12016 == "string")
    return cesIn12016.trim().length > 0 ? cesIn12016 : undefined;
}
export function round2(cesIn11481: any) {
  if (!(cesIn11481 === undefined || !Number.isFinite(cesIn11481)))
    return Math.round(cesIn11481 * 100) / 100;
}

export function unionCellsBbox(props: any) {
  let cesBind14737 = props
    .map((item) => bboxToRect(item.bbox))
    .filter((item) => item !== undefined);
  if (cesBind14737.length === 0) return;
  let cesBind14738 = Math.min(...cesBind14737.map((item) => item.left)),
    cesBind14739 = Math.min(...cesBind14737.map((item) => item.top)),
    cesBind14740 = Math.max(...cesBind14737.map((item) => item.right)),
    cesBind14741 = Math.max(...cesBind14737.map((item) => item.bottom));
  return [
    round2(cesBind14738) ?? cesBind14738,
    round2(cesBind14739) ?? cesBind14739,
    round2(cesBind14740 - cesBind14738) ?? cesBind14740 - cesBind14738,
    round2(cesBind14741 - cesBind14739) ?? cesBind14741 - cesBind14739,
  ];
}

export const GDe = unionCellsBbox;
