// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table frame layout + paint (legacy workbookA).
// Stage-3 wave-94.

import { resolveFillStyle } from "../canvas-fill";
import { mergeStyleLayers, workbookGt } from "../text-style";
import { paintTextElement } from "../text-box";
import { twipToCssPx } from "../font-stack";
import { tflH } from "./boundary-hooks";

void tflH;

/** Legacy Binding1269 — auto row min height (px). */
export const DEFAULT_AUTO_ROW_MIN_HEIGHT_PX = 24;
/** Legacy Binding1270 — default row height (EMU). */
export const DEFAULT_ROW_HEIGHT_EMU = 24;
/** Legacy Binding1272 — default table width (EMU). */
export const DEFAULT_TABLE_WIDTH_EMU = 600;
/** Legacy Binding1271 — row height scale factor. */
export const DEFAULT_TABLE_ROW_HEIGHT_SCALE = 1;
/** Legacy Binding1268 — 1 / workbookGt. */
export const TABLE_EMU_INV_GT = 1 / workbookGt;
/** Legacy Binding1275 — default cell margins. */
export const DEFAULT_CELL_MARGINS = {
  left: twipToCssPx(108),
  right: twipToCssPx(108),
  top: 0,
  bottom: 0,
};

export function layoutTableFrame(
  tflIn133: any,
  tflIn134: any,
  tflIn135: any,
  tflIn136: any = {},
) {
  if (!tflIn133.table) return;
  let tflBind2840 = tflIn133.table.rows.length,
    tflBind2841 = tflIn136.drawDefaultCellBorders ?? true,
    tflBind2842 = tflH.resolveCellMargins(tflIn133.table),
    tflBind2843 = {
      ...tflIn133.bbox,
      heightEmu:
        tflIn133.bbox?.heightEmu ?? DEFAULT_ROW_HEIGHT_EMU * tflBind2840,
      widthEmu: tflIn133.bbox?.widthEmu ?? DEFAULT_TABLE_WIDTH_EMU,
      xEmu: tflIn133.bbox?.xEmu ?? 0,
      yEmu: tflIn133.bbox?.yEmu ?? 0,
    },
    tflBind2844 = tflH.layoutTableColumns(tflIn133.table, {
      frameWidthEmu: tflBind2843.widthEmu,
      fitColumnWidthsToFrame: tflIn136.fitColumnWidthsToFrame,
    }),
    tflBind2845 = tflBind2844.columnCount;
  if (tflBind2845 <= 0) return;
  let tflBind2846 = tflIn136.explicitRowHeightBehavior ?? "exact",
    tflBind2847 =
      tflIn136.autoRowMinimumHeightPx ?? DEFAULT_AUTO_ROW_MIN_HEIGHT_PX,
    tflBind2848 = Array(tflIn133.table.rows.length).fill(0),
    tflBind2849 = Array(tflIn133.table.rows.length).fill(0),
    tflBind2850 = [];
  for (let tflBind6070 of tflBind2844.rows) {
    let tflBind6173 = tflBind6070.rowIndex,
      tflBind6174 = tflIn133.table.rows[tflBind6173];
    if (!tflBind6174) continue;
    for (let tflBind7667 of tflBind6070.cells) {
      let tflBind7785 = tflBind7667.widthEmu,
        tflBind7786 = tflBind7667.cell,
        tflBind7787 = tflH.bh644(tflBind7786, tflBind2842),
        tflBind7788 = tflH.bh639(
          tflBind7786,
          {
            xEmu: tflBind7667.xEmu,
            yEmu: 0,
            widthEmu: tflBind7785,
            heightEmu: 1,
          },
          {
            collapseParagraphBoundarySpacing:
              tflIn136.collapseParagraphBoundarySpacing,
          },
        ),
        tflBind7789 = paintTextElement(
          tflBind7788,
          tflIn134,
          tflIn135,
          undefined,
          {
            mode: "layout",
            resolvedStyle: mergeStyleLayers(
              tflBind7788.textStyle ?? {},
              tflIn136?.resolvedStyle,
            ),
            paddingPx: tflBind7787,
            paragraphSpacingUnit: tflIn136?.paragraphSpacingUnit,
            masterDefaults: tflIn136?.masterDefaults,
            documentGridLinePitchTwips: tflIn136?.documentGridLinePitchTwips,
          },
        ),
        tflBind7790 = Math.max(
          (tflBind7789?.height ?? 0) + tflBind7787.top + tflBind7787.bottom,
          tflH.measureEmbeddedHeight(
            tflBind7786,
            {
              xPx: tflBind7667.xEmu * workbookGt,
              yPx: 0,
              widthPx: tflBind7785 * workbookGt,
              heightPx: 0,
            },
            tflIn134,
            tflIn135,
            tflBind2842,
            tflIn136,
          ),
        );
      tflBind7667.rowSpan > 1
        ? tflBind2850.push({
            rowIndex: tflBind6173,
            rowSpan: tflBind7667.rowSpan,
            requiredHeightPx: tflBind7790,
          })
        : (tflBind2849[tflBind6173] = Math.max(
            tflBind2849[tflBind6173] ?? 0,
            tflBind7790,
          ));
    }
    let tflBind6175 = 0;
    tflBind6174.heightEmu !== undefined &&
      tflBind6174.heightEmu > 0 &&
      (tflBind6175 = tflBind6174.heightEmu * workbookGt);
    let tflBind6176 = tflBind6175 > 0,
      tflBind6177;
    tflBind6177 = tflBind6176
      ? tflBind2846 === "atLeast"
        ? Math.max(tflBind6175, tflBind2849[tflBind6173] ?? 0)
        : tflBind6175
      : Math.max(tflBind2847, tflBind2849[tflBind6173] ?? 0);
    tflBind2848[tflBind6173] = Math.max(
      DEFAULT_TABLE_ROW_HEIGHT_SCALE,
      tflBind6177,
    );
  }
  for (
    let tflBind21302 = 0;
    tflBind21302 < tflIn133.table.rows.length;
    tflBind21302++
  ) {
    let tflBind22547 = tflBind2848[tflBind21302];
    (!tflBind22547 || tflBind22547 <= 0) &&
      (tflBind2848[tflBind21302] = Math.max(
        DEFAULT_TABLE_ROW_HEIGHT_SCALE,
        tflBind2847,
      ));
  }
  if (tflBind2846 === "atLeast")
    for (let tflBind13942 of tflBind2850) {
      let tflBind14293 = tflH.bh645(
        tflBind2848,
        tflBind13942.rowIndex,
        tflBind13942.rowSpan,
      );
      if (tflBind14293 >= tflBind13942.requiredHeightPx) continue;
      let tflBind14294 = tflBind13942.requiredHeightPx - tflBind14293,
        tflBind14295 = Array(tflBind13942.rowSpan)
          .fill(0)
          .map((item, index) => tflBind13942.rowIndex + index)
          .filter((item) => item < tflBind2848.length);
      if (tflBind14295.length === 0) continue;
      let tflBind14296 = tflBind14294 / tflBind14295.length;
      for (let tflBind22845 of tflBind14295)
        tflBind2848[tflBind22845] = Math.max(
          DEFAULT_TABLE_ROW_HEIGHT_SCALE,
          (tflBind2848[tflBind22845] ?? tflBind2847) + tflBind14296,
        );
    }
  if (tflBind2846 === "exact")
    for (let tflBind12182 of tflBind2850) {
      let tflBind12430 = tflH.bh645(
        tflBind2848,
        tflBind12182.rowIndex,
        tflBind12182.rowSpan,
      );
      if (tflBind12430 >= tflBind12182.requiredHeightPx) continue;
      let tflBind12431 = tflBind12182.requiredHeightPx - tflBind12430;
      for (
        let tflBind14909 = tflBind12182.rowSpan - 1;
        tflBind14909 >= 0;
        --tflBind14909
      ) {
        let tflBind15743 = tflBind12182.rowIndex + tflBind14909,
          tflBind15744 = tflIn133.table.rows[tflBind15743];
        if (
          tflBind15744 === undefined ||
          (tflBind15744.heightEmu !== undefined && tflBind15744.heightEmu > 0)
        )
          continue;
        let tflBind15745 = tflBind2848[tflBind15743];
        if (tflBind15745 === undefined)
          throw Error(`Missing table row height at index ${tflBind15743}.`);
        tflBind2848[tflBind15743] = tflBind15745 + tflBind12431;
        break;
      }
    }
  let tflBind2851 = tflH.paintTableCells(tflIn133, tflBind2848, {
      fitColumnWidthsToFrame: tflIn136.fitColumnWidthsToFrame,
    }),
    tflBind2852 = tflBind2851.length > 0,
    tflBind2853 = tflBind2848.map((item) =>
      Math.max(1, item * TABLE_EMU_INV_GT),
    );
  tflIn134.save();
  let tflBind2854 = [],
    tflBind2855 = tflBind2843.yEmu,
    tflBind2856 = [],
    tflBind2857 = [],
    tflBind2858 = [];
  for (let tflBind4570 of tflBind2844.rows) {
    let tflBind4588 = tflBind4570.rowIndex;
    if (!tflIn133.table.rows[tflBind4588]) continue;
    let tflBind4589 = tflBind2853[tflBind4588] || 0;
    tflBind2854.push(tflBind4589 * workbookGt);
    for (let tflBind4763 of tflBind4570.cells) {
      let tflBind4821 = tflBind4763.cell,
        tflBind4822 = tflBind4763.columnIndex,
        tflBind4823 = tflBind2843.xEmu + tflBind4763.xEmu,
        tflBind4824 = tflBind4763.widthEmu,
        tflBind4825 = tflH.sumRowSpan(
          tflBind2853,
          tflBind4588,
          tflBind4763.rowSpan,
        ),
        tflBind4826 = tflH.bh644(tflBind4821, tflBind2842),
        tflBind4827 = tflH.bh639(
          tflBind4821,
          {
            xEmu: tflBind4823,
            yEmu: tflBind2855,
            widthEmu: tflBind4824,
            heightEmu: tflBind4825,
          },
          {
            collapseParagraphBoundarySpacing:
              tflIn136.collapseParagraphBoundarySpacing,
          },
        ),
        tflBind4828 = mergeStyleLayers(
          tflBind4827.textStyle ?? {},
          tflIn136?.resolvedStyle,
        ),
        tflBind4829 = tflBind4823 * workbookGt,
        tflBind4830 = tflBind2855 * workbookGt,
        tflBind4831 = tflBind4824 * workbookGt,
        tflBind4832 = tflBind4825 * workbookGt;
      tflIn134.fillStyle = resolveFillStyle(
        tflIn134,
        {
          x: tflBind4829,
          y: tflBind4830,
          width: tflBind4831,
          height: tflBind4832,
        },
        tflBind4821.fill,
        tflIn135,
        "transparent",
      );
      tflIn134.fillRect(tflBind4829, tflBind4830, tflBind4831, tflBind4832);
      let tflBind4833 = paintTextElement(
        tflBind4827,
        tflIn134,
        tflIn135,
        undefined,
        {
          resolvedStyle: tflBind4828,
          paddingPx: tflBind4826,
          paragraphSpacingUnit: tflIn136?.paragraphSpacingUnit,
          masterDefaults: tflIn136?.masterDefaults,
          documentGridLinePitchTwips: tflIn136?.documentGridLinePitchTwips,
        },
      );
      tflBind4833 &&
        tflBind2858.push({
          row: tflBind4588,
          col: tflBind4822,
          cellId: tflBind4821.id,
          xPx: tflBind4829,
          yPx: tflBind4830,
          widthPx: tflBind4831,
          heightPx: tflBind4832,
          block: tflBind4833,
        });
      for (let tflBind11737 of tflH.bh643(
        tflBind4821,
        {
          xPx: tflBind4829,
          yPx: tflBind4830,
          widthPx: tflBind4831,
          heightPx: tflBind4832,
        },
        tflBind2842,
        tflIn134,
        tflIn135,
        tflIn136,
      ).frames) {
        let tflBind13943 = tflBind11737.element;
        tflBind2857.push({
          row: tflBind4588,
          col: tflBind4822,
          elementId: tflBind13943.id ?? "",
          xPx: tflBind11737.xPx,
          yPx: tflBind11737.yPx,
          widthPx: tflBind11737.widthPx,
          heightPx: tflBind11737.heightPx,
        });
        tflIn136.drawCellElement?.(tflBind13943, {
          xPx: tflBind11737.xPx,
          yPx: tflBind11737.yPx,
          widthPx: tflBind11737.widthPx,
          heightPx: tflBind11737.heightPx,
        });
      }
      !tflBind2852 &&
        tflBind2841 &&
        tflH.strokeTableBorders(
          tflIn134,
          tflBind4829,
          tflBind4830,
          tflBind4831,
          tflBind4832,
          tflBind4822 + tflBind4763.columnSpan >= tflBind2845,
          tflBind4588 + tflBind4763.rowSpan >= tflIn133.table.rows.length,
        );
      tflBind2856.push({
        row: tflBind4588,
        col: tflBind4822,
        xPx: tflBind4829,
        yPx: tflBind4830,
        widthPx: tflBind4831,
        heightPx: tflBind4832,
      });
    }
    tflBind2855 += tflBind4589;
  }
  return (
    tflBind2852 && tflH.fillTableBackground(tflIn134, tflIn135, tflBind2851),
    tflIn134.restore(),
    {
      cellRects: tflBind2856,
      cellElementFrames: tflBind2857,
      cellLayouts: tflBind2858,
      rowHeightsPx: tflBind2854,
      heightPx: (tflBind2855 - tflBind2843.yEmu) * workbookGt,
    }
  );
}

/** Legacy alias. */
export const workbookA = layoutTableFrame;
