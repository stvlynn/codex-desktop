// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: compose placement Binding1407–1410.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr } from "../presentation-protobuf";
import {
  isMathInline,
  isPlainRunList,
  isParagraphPartial,
  normalizeParagraphInputs,
  ensureDetachedTextHelpersInit,
} from "../detached-text";
import { ensureTextStyleInit } from "../text-style";
import { ensureFillInit } from "../fill";
import { ensureWorkbookColorInit } from "../theme-color";
import { ensureLineInit } from "../line";
import { ensureTextElementAutofitInit } from "../text-element-autofit";
import {
  ensureWorkbookEt,
  ensureBinding412,
  ensureBinding739,
  getShapeElementClass,
  getWorkbookTt,
} from "./boundary-hooks";
import { composeLayout } from "./compose-bindings";
import { ensureCaseTransformInit } from "./case-transform";
import {
  mapRunsTextCase,
  mapParagraphTextCase,
  applyTextCase,
  mapTextCaseValue,
  isPlainRunListArray,
} from "./text-case";

export const ensureComposeMeasureBInit = esmInit(() => {
  composeLayout.clBind1407 = (
    clIn1302,
    clIn1303,
    clIn1304,
    clIn1305,
    clIn1306,
    clIn1307,
  ) => {
    let clBind7005 = clIn1303.node.position;
    if (!clBind7005) {
      let clBind15773 = composeLayout.clBind1414(
          clIn1303,
          clIn1304.width,
          clIn1305 === "stretch",
        ),
        clBind15774 = composeLayout.clBind1415(
          clIn1302,
          clIn1303,
          clBind15773,
          clIn1304.height,
          clIn1306 === "stretch",
        ),
        clBind15775 = composeLayout.clBind1441(
          clIn1304.left,
          clIn1304.width,
          clBind15773,
          clIn1305,
          clIn1307,
          composeLayout.clBind1446(clIn1303, "x"),
        ),
        clBind15776 = composeLayout.clBind1441(
          clIn1304.top,
          clIn1304.height,
          clBind15774,
          clIn1306,
          clIn1307,
          composeLayout.clBind1446(clIn1303, "y"),
        );
      return {
        left: clBind15775.start,
        top: clBind15776.start,
        width: clBind15775.size,
        height: clBind15776.size,
      };
    }
    let clBind7006 = composeLayout.clBind1408({
        origin: clIn1304.left,
        available: clIn1304.width,
        startOffset: clBind7005.left,
        endOffset: clBind7005.right,
        intrinsicSize: composeLayout.clBind1429(clIn1303, "x"),
        sizeFromAvailable: (clIn16314, clIn16315) =>
          composeLayout.clBind1414(clIn1303, clIn16314, clIn16315),
        align: clIn1305,
        baseUnit: clIn1307,
        preserveSize: composeLayout.clBind1446(clIn1303, "x"),
      }),
      clBind7007 = composeLayout.clBind1408({
        origin: clIn1304.top,
        available: clIn1304.height,
        startOffset: clBind7005.top,
        endOffset: clBind7005.bottom,
        intrinsicSize: composeLayout.clBind1429(clIn1303, "y"),
        sizeFromAvailable: (clIn15828, clIn15829) =>
          composeLayout.clBind1415(
            clIn1302,
            clIn1303,
            clBind7006.size,
            clIn15828,
            clIn15829,
          ),
        align: clIn1306,
        baseUnit: clIn1307,
        preserveSize: composeLayout.clBind1446(clIn1303, "y"),
      });
    return {
      left: clBind7006.start,
      top: clBind7007.start,
      width: clBind7006.size,
      height: clBind7007.size,
    };
  };
  composeLayout.clBind1408 = (clIn2470) => {
    let clBind9782 = clIn2470.startOffset ?? 0,
      clBind9783 = clIn2470.endOffset ?? 0,
      clBind9784 = clIn2470.startOffset !== undefined,
      clBind9785 = clIn2470.endOffset !== undefined,
      clBind9786 = Math.max(0, clIn2470.available - clBind9782 - clBind9783);
    if (clBind9784 && clBind9785)
      return {
        start: clIn2470.origin + clBind9782,
        size: clBind9786,
      };
    let clBind9787 = clIn2470.sizeFromAvailable(
      clBind9784 || clBind9785 ? clBind9786 : clIn2470.available,
      clIn2470.align === "stretch",
    );
    if (clBind9784)
      return {
        start: clIn2470.origin + clBind9782,
        size: clBind9787,
      };
    if (clBind9785)
      return {
        start: clIn2470.origin + clIn2470.available - clBind9783 - clBind9787,
        size: clBind9787,
      };
    let clBind9788 = composeLayout.clBind1441(
      clIn2470.origin,
      clIn2470.available,
      clBind9787 || clIn2470.intrinsicSize,
      clIn2470.align,
      clIn2470.baseUnit,
      clIn2470.preserveSize,
    );
    return {
      start: clBind9788.start,
      size: clBind9788.size,
    };
  };
  composeLayout.clBind1409 = (
    clIn1238,
    clIn1239,
    clIn1240,
    clIn1241,
    clIn1242,
  ) => {
    let clBind6790 = clIn1239.node,
      clBind6791 = composeLayout.clBind1443(clIn1239, clIn1240, clIn1242),
      clBind6792 = composeLayout.clBind1439(clBind6791, clBind6790.padding);
    if (
      clBind6792.width <= 0 ||
      clBind6792.height <= 0 ||
      clIn1239.children.length === 0
    )
      return;
    let clBind6793 = clIn1239.children.map((item) =>
        composeLayout.clBind1414(
          item,
          clBind6792.width,
          clBind6790.align === "stretch",
        ),
      ),
      clBind6794 = clIn1239.children.map((item, index) =>
        composeLayout.composeTrackSize(
          clIn1238,
          item,
          clBind6793[index] ?? 0,
          true,
        ),
      ),
      clBind6795 = clIn1239.children.map((item) =>
        item.node.height.mode === "fill" ? item.node.height.value : 0,
      ),
      clBind6796 = composeLayout.clBind1417({
        available: clBind6792.height,
        baseSizes: clBind6794,
        gap: clBind6790.gap,
        fillWeights: clBind6795,
        kind: clBind6790.kind,
        name: clBind6790.name,
        axis: "y",
        warnOverflow: true,
        slideNumber: clIn1238.slide.index + 1,
        slideId: clIn1238.slide.id,
        childNames: clIn1239.children.map((item) => item.node.name),
      }),
      clBind6797 = composeLayout.clBind1418(
        clBind6792.height,
        clBind6796,
        clBind6790.gap,
        clBind6790.justify,
      ),
      clBind6798 = clBind6792.top + clBind6797.offset;
    clIn1239.children.forEach((item, index) => {
      let clBind17294 = clBind6793[index] ?? 0,
        clBind17295 = clBind6796[index] ?? 0,
        clBind17296 = composeLayout.clBind1441(
          clBind6792.left,
          clBind6792.width,
          clBind17294,
          clBind6790.align,
          clIn1242,
          composeLayout.clBind1446(item, "x"),
        );
      composeLayout.clBind1403(
        clIn1238,
        item,
        {
          left: clBind17296.start,
          top: clBind6798,
          width: clBind17296.size,
          height: clBind17295,
        },
        clIn1241,
        clIn1242,
      );
      clBind6798 += clBind17295 + clBind6797.gap;
    });
  };
  composeLayout.clBind1410 = (
    clIn1210,
    clIn1211,
    clIn1212,
    clIn1213,
    clIn1214,
  ) => {
    let clBind6744 = clIn1211.node,
      clBind6745 = composeLayout.clBind1443(clIn1211, clIn1212, clIn1214),
      clBind6746 = composeLayout.clBind1439(clBind6745, clBind6744.padding);
    if (
      clBind6746.width <= 0 ||
      clBind6746.height <= 0 ||
      clIn1211.children.length === 0
    )
      return;
    let clBind6747 = composeLayout.clBind1419(
      clIn1210,
      clBind6744,
      composeLayout.clBind1423(clBind6744, clIn1211.children),
      clBind6746.width,
      clBind6746.height,
      true,
    );
    clBind6747.items.forEach((item) => {
      let clBind8343 =
          clBind6746.left +
          composeLayout.clBind1442(
            clBind6747.columnSizes.slice(0, item.column),
          ) +
          item.column * clBind6744.columnGap,
        clBind8344 =
          clBind6746.top +
          composeLayout.clBind1442(clBind6747.rowSizes.slice(0, item.row)) +
          item.row * clBind6744.rowGap,
        clBind8345 =
          composeLayout.clBind1442(
            clBind6747.columnSizes.slice(
              item.column,
              item.column + item.columnSpan,
            ),
          ) +
          Math.max(0, item.columnSpan - 1) * clBind6744.columnGap,
        clBind8346 =
          composeLayout.clBind1442(
            clBind6747.rowSizes.slice(item.row, item.row + item.rowSpan),
          ) +
          Math.max(0, item.rowSpan - 1) * clBind6744.rowGap,
        clBind8347 = composeLayout.clBind1414(
          item.child,
          clBind8345,
          clBind6744.justifyItems === "stretch",
        ),
        clBind8348 = composeLayout.clBind1415(
          clIn1210,
          item.child,
          clBind8347,
          clBind8346,
          clBind6744.alignItems === "stretch",
        ),
        clBind8349 = composeLayout.clBind1441(
          clBind8343,
          clBind8345,
          clBind8347,
          clBind6744.justifyItems,
          clIn1214,
          composeLayout.clBind1446(item.child, "x"),
        ),
        clBind8350 = composeLayout.clBind1441(
          clBind8344,
          clBind8346,
          clBind8348,
          clBind6744.alignItems,
          clIn1214,
          composeLayout.clBind1446(item.child, "y"),
        );
      composeLayout.clBind1403(
        clIn1210,
        item.child,
        {
          left: clBind8349.start,
          top: clBind8350.start,
          width: clBind8349.size,
          height: clBind8350.size,
        },
        clIn1213,
        clIn1214,
      );
    });
  };
});
