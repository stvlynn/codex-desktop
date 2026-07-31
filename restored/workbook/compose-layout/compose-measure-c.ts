// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: compose track Binding1412–1420.

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

export const ensureComposeMeasureCInit = esmInit(() => {
  composeLayout.clBind1412 = (
    clIn3694,
    clIn3695,
    clIn3696,
    clIn3697,
    clIn3698,
  ) => ({
    path: clIn3697,
    kind: clIn3694.node.kind,
    name: clIn3694.node.name,
    position: clIn3694.node.position
      ? composeLayout.clBind1457(clIn3694.node.position)
      : undefined,
    requestedSize: {
      width: composeLayout.clBind1458(clIn3694.node.width),
      height: composeLayout.clBind1458(clIn3694.node.height),
    },
    intrinsicSize: {
      width: composeLayout.clBind1464(clIn3694.intrinsicWidth),
      height: composeLayout.clBind1464(clIn3694.intrinsicHeight),
    },
    frame: composeLayout.clBind1463(clIn3695),
    snappedFrame:
      clIn3698 && clIn3696 !== undefined && composeLayout.clBind1454(clIn3695)
        ? composeLayout.clBind1463(
            composeLayout.clBind1444(
              clIn3694,
              clIn3695,
              composeLayout.clBind1413(clIn3694, clIn3695, clIn3696),
            ),
          )
        : undefined,
    children: [],
  });
  composeLayout.clBind1413 = (clIn3368, clIn3369, clIn3370) => {
    if (clIn3370 !== undefined && !clIn3368.node.position)
      return clIn3368.node.kind === "text" ||
        clIn3368.node.kind === "rule" ||
        (clIn3368.node.kind === "shape" &&
          clIn3369.width <= clIn3370 * 2 &&
          clIn3369.height <= clIn3370 * 2)
        ? Math.max(1, clIn3370 / 4)
        : clIn3368.node.kind === "shape" &&
            clIn3369.width <= clIn3370 * 10 &&
            clIn3369.height <= clIn3370 * 10
          ? Math.max(1, clIn3370 / 2)
          : clIn3368.node.kind === "connector"
            ? Math.max(1, clIn3370 / 4)
            : clIn3368.node.kind === "shape"
              ? clIn3370
              : undefined;
  };
  composeLayout.clBind1414 = (clIn5565, clIn5566, clIn5567) => {
    let clBind15389 = clIn5565.node.width;
    return clBind15389.mode === "fill"
      ? Math.max(0, clIn5566)
      : clBind15389.mode === "fixed"
        ? clBind15389.value
        : clBind15389.mode === "wrap"
          ? Math.min(clIn5565.intrinsicWidth, clBind15389.max)
          : clIn5567
            ? Math.max(0, clIn5566)
            : clIn5565.intrinsicWidth;
  };
  composeLayout.clBind1415 = (
    clIn6569,
    clIn6570,
    clIn6571,
    clIn6572,
    clIn6573,
  ) => {
    let clBind16829 = clIn6570.node.height;
    if (clBind16829.mode === "fill") return Math.max(0, clIn6572);
    if (clBind16829.mode === "fixed") return clBind16829.value;
    let clBind16830 = composeLayout.clBind1416(clIn6569, clIn6570, clIn6571);
    return clBind16829.mode === "wrap"
      ? Math.min(clBind16830, clBind16829.max)
      : clIn6573
        ? Math.max(0, clIn6572)
        : clBind16830;
  };
  composeLayout.composeTrackSize = (
    clIn6698,
    clIn6699,
    clIn6700,
    clIn6701 = false,
  ) => {
    let clBind16997 = clIn6699.node.height;
    if (clBind16997.mode === "fill")
      return clIn6701
        ? composeLayout.clBind1416(clIn6698, clIn6699, clIn6700, true)
        : 0;
    if (clBind16997.mode === "fixed") return clBind16997.value;
    let clBind16998 = composeLayout.clBind1416(
      clIn6698,
      clIn6699,
      clIn6700,
      clIn6701,
    );
    return clBind16997.mode === "wrap"
      ? Math.min(clBind16998, clBind16997.max)
      : clBind16998;
  };
  composeLayout.clBind1416 = (clIn397, clIn398, clIn399, clIn400 = false) => {
    if (clIn398.node.kind === "text")
      return clIn400 && clIn398.node.height.mode === "fill"
        ? composeLayout.measureComposeTextNode(
            clIn397,
            {
              ...clIn398.node,
              height: {
                mode: "hug",
              },
            },
            clIn399,
          ).height
        : composeLayout.measureComposeTextNode(clIn397, clIn398.node, clIn399)
            .height;
    if (
      clIn398.node.kind === "rule" ||
      clIn398.node.kind === "shape" ||
      clIn398.node.kind === "connector" ||
      clIn398.node.kind === "image" ||
      clIn398.node.kind === "table" ||
      clIn398.node.kind === "chart"
    )
      return clIn400 && clIn398.node.height.mode === "fill"
        ? clIn398.intrinsicHeight
        : composeLayout.clBind1432(
            clIn398.node.height,
            clIn398.intrinsicHeight,
          );
    if (clIn398.node.kind === "panel") {
      let clBind15605 = clIn398.children[0],
        clBind15606 = Math.max(
          0,
          clIn399 - clIn398.node.padding.left - clIn398.node.padding.right,
        ),
        clBind15607 = clBind15605
          ? composeLayout.clBind1452(
              clBind15605.node.width,
              clBind15605.intrinsicWidth,
              clBind15606,
            )
          : 0;
      return (
        (clBind15605
          ? composeLayout.composeTrackSize(
              clIn397,
              clBind15605,
              clBind15607,
              true,
            )
          : 0) +
        clIn398.node.padding.top +
        clIn398.node.padding.bottom
      );
    }
    if (clIn398.node.kind === "layers") {
      let clBind15436 = clIn398.node,
        clBind15437 = Math.max(
          0,
          clIn399 - clBind15436.padding.left - clBind15436.padding.right,
        ),
        clBind15438 = clIn398.children.map((item) => {
          let clBind21139 = composeLayout.clBind1414(
            item,
            clBind15437,
            clBind15436.justifyItems === "stretch",
          );
          return composeLayout.composeTrackSize(
            clIn397,
            item,
            clBind21139,
            true,
          );
        });
      return (
        Math.max(0, ...clBind15438) +
        clBind15436.padding.top +
        clBind15436.padding.bottom
      );
    }
    if (clIn398.node.kind === "row") {
      let clBind9604 = Math.max(
          0,
          clIn399 - clIn398.node.padding.left - clIn398.node.padding.right,
        ),
        clBind9605 = clIn398.children.map((item) =>
          composeLayout.clBind1430(item, "x"),
        ),
        clBind9606 = clIn398.children.map((item) =>
          item.node.width.mode === "fill" ? item.node.width.value : 0,
        ),
        clBind9607 = composeLayout.clBind1417({
          available: clBind9604,
          baseSizes: clBind9605,
          gap: clIn398.node.gap,
          fillWeights: clBind9606,
          kind: clIn398.node.kind,
          name: clIn398.node.name,
          axis: "x",
          warnOverflow: false,
        });
      return (
        Math.max(
          0,
          ...clIn398.children.map((item, index) =>
            composeLayout.clBind1415(
              clIn397,
              item,
              clBind9607[index] ?? 0,
              0,
              false,
            ),
          ),
        ) +
        clIn398.node.padding.top +
        clIn398.node.padding.bottom
      );
    }
    if (clIn398.node.kind === "column") {
      let clBind13782 = Math.max(
          0,
          clIn399 - clIn398.node.padding.left - clIn398.node.padding.right,
        ),
        clBind13783 = clIn398.node.align === "stretch",
        clBind13784 = clIn398.children.map((item) =>
          composeLayout.clBind1414(item, clBind13782, clBind13783),
        );
      return (
        composeLayout.clBind1442(
          clIn398.children.map((item, index) =>
            composeLayout.composeTrackSize(
              clIn397,
              item,
              clBind13784[index] ?? 0,
              true,
            ),
          ),
        ) +
        Math.max(0, clIn398.children.length - 1) * clIn398.node.gap +
        clIn398.node.padding.top +
        clIn398.node.padding.bottom
      );
    }
    let clBind3823 = Math.max(
        0,
        clIn399 - clIn398.node.padding.left - clIn398.node.padding.right,
      ),
      clBind3824 = composeLayout.clBind1419(
        clIn397,
        clIn398.node,
        composeLayout.clBind1423(clIn398.node, clIn398.children),
        clBind3823,
        undefined,
        false,
      );
    return (
      composeLayout.clBind1442(clBind3824.rowSizes) +
      Math.max(0, clBind3824.rowSizes.length - 1) * clIn398.node.rowGap +
      clIn398.node.padding.top +
      clIn398.node.padding.bottom
    );
  };
  composeLayout.clBind1417 = (clIn1262) => {
    let clBind6850 = Math.max(0, clIn1262.baseSizes.length - 1) * clIn1262.gap,
      clBind6851 =
        composeLayout.clBind1442(
          clIn1262.baseSizes.filter(
            (item, index) => (clIn1262.fillWeights[index] ?? 0) <= 0,
          ),
        ) + clBind6850,
      clBind6852 = Math.max(0, clBind6851 - clIn1262.available);
    if (clIn1262.warnOverflow && clBind6852 > 0.5) {
      let clBind10602 =
          clIn1262.slideNumber === undefined
            ? `slide ${clIn1262.slideId ?? "(unknown)"}`
            : `slide ${clIn1262.slideNumber}`,
        clBind10603 = clIn1262.childNames?.map(
          (clIn15809, clIn15810) => clIn15809 ?? `(child ${clIn15810 + 1})`,
        );
      console.warn(
        `Compose ${clIn1262.kind} "${clIn1262.name ?? "(unnamed)"}" overflowed ${clBind10602} ${clIn1262.axis === "x" ? "width" : "height"} by ${clBind6852.toFixed(1)}px.`,
        {
          kind: clIn1262.kind,
          name: clIn1262.name,
          slideNumber: clIn1262.slideNumber,
          slideId: clIn1262.slideId,
          axis: clIn1262.axis,
          overflowPx: clBind6852,
          childNames: clBind10603,
        },
      );
    }
    let clBind6853 = composeLayout.clBind1442(clIn1262.fillWeights);
    if (clBind6853 <= 0) return [...clIn1262.baseSizes];
    let clBind6854 = Math.max(0, clIn1262.available - clBind6851) / clBind6853;
    return clIn1262.baseSizes.map((item, index) => {
      let clBind21472 = clIn1262.fillWeights[index] ?? 0;
      return clBind21472 > 0 ? Math.max(item, clBind6854 * clBind21472) : item;
    });
  };
  composeLayout.clBind1418 = (clIn4163, clIn4164, clIn4165, clIn4166) => {
    let clBind13185 =
        composeLayout.clBind1442(clIn4164) +
        Math.max(0, clIn4164.length - 1) * clIn4165,
      clBind13186 = Math.max(0, clIn4163 - clBind13185),
      clBind13187 = clIn4165,
      clBind13188 = 0;
    return (
      clIn4166 === "center"
        ? (clBind13188 = clBind13186 / 2)
        : clIn4166 === "end"
          ? (clBind13188 = clBind13186)
          : clIn4166 === "between" &&
            clIn4164.length > 1 &&
            clBind13186 > 0 &&
            (clBind13187 = clIn4165 + clBind13186 / (clIn4164.length - 1)),
      {
        gap: clBind13187,
        offset: clBind13188,
      }
    );
  };
  composeLayout.clBind1419 = (
    clIn1324,
    clIn1325,
    clIn1326,
    clIn1327,
    clIn1328,
    clIn1329,
  ) => {
    let clBind7039 = composeLayout.clBind1422(
        clIn1325,
        composeLayout.clBind1421(clIn1325, clIn1326),
      ),
      clBind7040 = Array.from(
        {
          length: clIn1325.columns.length,
        },
        () => 0,
      );
    clIn1326.forEach((item) => {
      composeLayout.clBind1428({
        tracks: clIn1325.columns,
        sizes: clBind7040,
        start: item.column,
        span: item.columnSpan,
        gap: clIn1325.columnGap,
        required: composeLayout.clBind1430(item.child, "x"),
      });
    });
    let clBind7041 = composeLayout.clBind1420(
        clIn1325.columns,
        clBind7040,
        clIn1327,
        clIn1325.columnGap,
        true,
      ),
      clBind7042 = Array.from(
        {
          length: clBind7039.length,
        },
        () => 0,
      );
    return (
      clIn1326.forEach((item) => {
        let clBind12858 =
            composeLayout.clBind1442(
              clBind7041.slice(item.column, item.column + item.columnSpan),
            ) +
            Math.max(0, item.columnSpan - 1) * clIn1325.columnGap,
          clBind12859 = composeLayout.clBind1414(
            item.child,
            clBind12858,
            clIn1325.justifyItems === "stretch",
          ),
          clBind12860 = composeLayout.composeTrackSize(
            clIn1324,
            item.child,
            clBind12859,
            true,
          );
        composeLayout.clBind1428({
          tracks: clBind7039,
          sizes: clBind7042,
          start: item.row,
          span: item.rowSpan,
          gap: clIn1325.rowGap,
          required: clBind12860,
        });
      }),
      {
        items: clIn1326,
        rows: clBind7039,
        columnSizes: clBind7041,
        rowSizes: composeLayout.clBind1420(
          clBind7039,
          clBind7042,
          clIn1328,
          clIn1325.rowGap,
          clIn1329,
        ),
      }
    );
  };
  composeLayout.clBind1420 = (
    clIn2181,
    clIn2182,
    clIn2183,
    clIn2184,
    clIn2185,
  ) => {
    let clBind9178 = clIn2181.map((item, index) =>
        item === "auto"
          ? (clIn2182[index] ?? 0)
          : item.mode === "fixed"
            ? item.value
            : 0,
      ),
      clBind9179 = Math.max(0, clIn2181.length - 1) * clIn2184,
      clBind9180 = composeLayout.clBind1442(clBind9178) + clBind9179,
      clBind9181 = composeLayout.clBind1442(
        clIn2181.map((item) =>
          item !== "auto" && item.mode === "fr" ? item.value : 0,
        ),
      ),
      clBind9182 =
        clIn2183 === undefined ? 0 : Math.max(0, clIn2183 - clBind9180),
      clBind9183 = clIn2181
        .map((item, index) => ({
          track: item,
          index,
        }))
        .filter(({ track }) => track === "auto")
        .map(({ index }) => index),
      clBind9184 = clBind9181 > 0 ? clBind9182 / clBind9181 : 0,
      clBind9185 =
        clIn2185 && clBind9181 === 0 && clBind9183.length > 0
          ? clBind9182 / clBind9183.length
          : 0;
    return clIn2181.map((item, index) =>
      item !== "auto" && item.mode === "fr"
        ? clBind9184 * item.value
        : item === "auto" && clBind9185 > 0
          ? (clBind9178[index] ?? 0) + clBind9185
          : (clBind9178[index] ?? 0),
    );
  };
});
