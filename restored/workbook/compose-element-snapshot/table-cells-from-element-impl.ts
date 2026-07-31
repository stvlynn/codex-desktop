// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table cell snapshot from element (legacy table-cells cluster).
// Stage-3 wave-110.

import { cesH } from "./boundary-hooks";
import { snapshotParagraphs } from "./snapshot-paragraphs-impl";

void cesH;
void snapshotParagraphs;

export function snapshotCellRuns(cesIn9176: any, cesIn9177: any) {
  return cesIn9176.paragraphs.items.flatMap((item) =>
    item.runs.items
      .map((_item) => cesH.bh689(_item.resolvedTextStyle, cesIn9177))
      .filter((_item) => _item !== undefined),
  );
}

export function runPlainStyle(cesIn10842: any, cesIn10843: any) {
  return (
    cesIn10843.resolvedTextStyle ??
    cesIn10843.textStyle ??
    cesIn10842.resolvedTextStyle ??
    cesIn10842.textStyle
  );
}

export function sumSpanSizes(
  cesIn11287: any,
  cesIn11288: any,
  cesIn11289: any,
) {
  let cesBind21760 = 0;
  for (
    let cesBind22907 = cesIn11288;
    cesBind22907 < cesIn11288 + cesIn11289;
    cesBind22907 += 1
  )
    cesBind21760 += cesIn11287[cesBind22907] ?? 0;
  return cesBind21760;
}

export function pickResolvedTextStyle(cesIn9676: any) {
  return (
    cesIn9676.find((item) => {
      let cesBind21940 = item.fontSize;
      return typeof cesBind21940 == "number" && Number.isFinite(cesBind21940);
    }) ?? cesIn9676[0]
  );
}

export function tableCellsFromElement(cesIn1391: any, cesIn1392: any) {
  let cesBind7176 = cesIn1391.rows;
  if (cesBind7176.length === 0) return;
  let cesBind7177 = resolveColumnWidths(cesIn1391),
    cesBind7178 = resolveRowHeights(cesIn1391),
    cesBind7179 = cesIn1391.frame,
    cesBind7180 = [],
    cesBind7181 = cesBind7179?.top ?? 0,
    cesBind7182 = 0;
  return (
    cesBind7176.forEach((item, index) => {
      let cesBind8539 = cesBind7179?.left ?? 0,
        cesBind8540 = cesBind7178[index] ?? 0;
      item.cells.forEach((_item, _index) => {
        let cesBind9425 = Math.max(1, _item.gridSpan ?? 1),
          cesBind9426 = Math.max(1, _item.rowSpan ?? 1),
          cesBind9427 = sumSpanSizes(cesBind7177, _index, cesBind9425),
          cesBind9428 = sumSpanSizes(cesBind7178, index, cesBind9426),
          cesBind9429 = snapshotParagraphs(_item, cesIn1392),
          cesBind9430 = pickResolvedTextStyle(
            snapshotCellRuns(_item, cesIn1392),
          ),
          cesBind9431 = cesH.bh695(_item.value),
          cesBind9432 = _item.fill.color.toConfig();
        cesBind7180.push({
          index: ++cesBind7182,
          row: index + 1,
          column: _index + 1,
          rowSpan: cesBind9426 > 1 ? cesBind9426 : undefined,
          colSpan: cesBind9425 > 1 ? cesBind9425 : undefined,
          bbox:
            cesBind7179 === undefined
              ? undefined
              : cesH.bh682({
                  left: cesBind8539,
                  top: cesBind7181,
                  width: cesBind9427,
                  height: cesBind9428,
                }),
          text: cesBind9431,
          textPreview: cesH.bh684(cesBind9431),
          textDirection: cesH.bh695(_item.textDirection),
          fillColor: cesBind9432,
          resolvedTextStyle: cesBind9430,
          paragraphs: cesBind9429,
        });
        cesBind8539 += cesBind7177[_index] ?? 0;
      });
      cesBind7181 += cesBind8540;
    }),
    cesBind7180.length > 0 ? cesBind7180 : undefined
  );
}

export function cellsPreviewText(cesIn5371: any) {
  if (cesIn5371.length === 0) return;
  let cesBind15087 = new Map();
  if (
    (cesIn5371.forEach((item) => {
      if (!item.text) return;
      let cesBind21334 = cesBind15087.get(item.row) ?? [];
      cesBind21334.push(item.text);
      cesBind15087.set(item.row, cesBind21334);
    }),
    cesBind15087.size !== 0)
  )
    return Array.from(cesBind15087.entries())
      .sort(([cesIn16365], [cesIn16366]) => cesIn16365 - cesIn16366)
      .map(([, cesIn16177]) => cesIn16177.join(" | "))
      .join("\n");
}

export function resolveColumnWidths(cesIn3801: any) {
  let cesBind12558 = cesIn3801.columnCount;
  if (cesBind12558 <= 0) return [];
  let cesBind12559 = cesIn3801.columnWidths;
  if (cesIn3801.hasExplicitColumnWidths && cesBind12559.length > 0) {
    let cesBind18775 = cesBind12559.map((item) =>
      Number.isFinite(item) && item > 0 ? item : 1,
    );
    if (cesBind18775.length >= cesBind12558)
      return cesBind18775.slice(0, cesBind12558);
    let cesBind18776 = cesBind18775[cesBind18775.length - 1] ?? 1;
    return cesBind18775.concat(
      Array(cesBind12558 - cesBind18775.length).fill(cesBind18776),
    );
  }
  let cesBind12560 = cesIn3801.frame?.width;
  if (cesBind12560 && Number.isFinite(cesBind12560) && cesBind12560 > 0) {
    let cesBind22857 = cesBind12560 / cesBind12558;
    return Array(cesBind12558).fill(cesBind22857);
  }
  return Array(cesBind12558).fill(1);
}

export function resolveRowHeights(cesIn3658: any) {
  let cesBind12238 = cesIn3658.rows,
    cesBind12239 = cesBind12238.length;
  if (cesBind12239 <= 0) return [];
  let cesBind12240 = cesBind12238.map((item) => item.height);
  if (cesBind12240.some((item) => item > 0)) {
    let cesBind18140 = cesIn3658.frame?.height,
      cesBind18141 = cesBind12240.reduce(
        (accumulator, current) => accumulator + (current > 0 ? current : 0),
        0,
      ),
      cesBind18142 = cesBind12240.filter((item) => item <= 0).length,
      cesBind18143 =
        cesBind18140 && cesBind18142 > 0 && cesBind18140 > cesBind18141
          ? (cesBind18140 - cesBind18141) / cesBind18142
          : 1;
    return cesBind12240.map((item) => (item > 0 ? item : cesBind18143));
  }
  let cesBind12241 = cesIn3658.frame?.height;
  if (cesBind12241 && Number.isFinite(cesBind12241) && cesBind12241 > 0) {
    let cesBind22858 = cesBind12241 / cesBind12239;
    return Array(cesBind12239).fill(cesBind22858);
  }
  return Array(cesBind12239).fill(1);
}

/** Legacy aliases. */
export const rOe = runPlainStyle;
export const iOe = tableCellsFromElement;
export const aOe = cellsPreviewText;
export const oOe = resolveColumnWidths;
export const sOe = resolveRowHeights;
