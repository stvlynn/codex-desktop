// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: compose placement Binding1411.

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

export const ensureComposeMeasureB2Init = esmInit(() => {
  composeLayout.clBind1411 = (
    clIn47,
    clIn48,
    clIn49,
    clIn50,
    clIn51,
    clIn52,
  ) => {
    if (clIn48.node.kind === "text")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "text",
          text: composeLayout.valueToPlainTextWithCase(
            clIn48.node.value,
            clIn48.node.transform,
          ),
          transform: clIn48.node.transform,
        }
      );
    if (clIn48.node.kind === "rule")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "rule",
          weight: clIn48.node.weight,
          opacity: clIn48.node.opacity,
        }
      );
    if (clIn48.node.kind === "shape")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "shape",
          geometry: clIn48.node.geometry,
        }
      );
    if (clIn48.node.kind === "connector")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "connector",
          connectorKind: clIn48.node.connectorKind,
          orientation: clIn48.node.orientation,
          from: clIn48.node.from,
          to: clIn48.node.to,
          fromElement: composeLayout.clBind1462(clIn48.node.fromElement),
          toElement: composeLayout.clBind1462(clIn48.node.toElement),
          fromSide: clIn48.node.fromSide,
          toSide: clIn48.node.toSide,
          fromIdx: clIn48.node.fromIdx,
          toIdx: clIn48.node.toIdx,
        }
      );
    if (clIn48.node.kind === "image")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "image",
          source: composeLayout.clBind1461(clIn48.node.source),
          contentType: clIn48.node.contentType,
          fit: clIn48.node.fit,
          alt: clIn48.node.alt,
          geometry: clIn48.node.geometry,
          crop: clIn48.node.crop,
          rotation: clIn48.node.rotation,
          flipHorizontal: clIn48.node.flipHorizontal,
          flipVertical: clIn48.node.flipVertical,
          lockAspectRatio: clIn48.node.lockAspectRatio,
        }
      );
    if (clIn48.node.kind === "table")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "table",
          rows: clIn48.node.rows,
          columns: clIn48.node.columns,
          columnWidths: clIn48.node.columnWidths,
          columnTracks: clIn48.node.columnTracks,
          style: clIn48.node.style,
        }
      );
    if (clIn48.node.kind === "chart")
      return (
        composeLayout.clBind1454(clIn49) && clIn52.push(clIn51),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, true),
          kind: "chart",
          chartType: clIn48.node.chartType,
          title:
            typeof clIn48.node.config?.title == "string"
              ? clIn48.node.config.title
              : undefined,
        }
      );
    if (clIn48.node.kind === "panel") {
      let clBind7735 = clIn48.node;
      clBind7735.materialize &&
        composeLayout.clBind1454(clIn49) &&
        clIn52.push(clIn51);
      let clBind7736 = clIn48.children[0],
        clBind7737 = composeLayout.clBind1443(clIn48, clIn49, clIn50),
        clBind7738 = composeLayout.clBind1439(clBind7737, clBind7735.padding),
        clBind7739 = [];
      if (clBind7736 && clBind7738.width > 0 && clBind7738.height > 0) {
        let clBind12034 = composeLayout.clBind1414(
            clBind7736,
            clBind7738.width,
            clBind7735.align === "stretch",
          ),
          clBind12035 = composeLayout.clBind1415(
            clIn47,
            clBind7736,
            clBind12034,
            clBind7738.height,
            clBind7735.justify === "stretch",
          ),
          clBind12036 = composeLayout.clBind1441(
            clBind7738.left,
            clBind7738.width,
            clBind12034,
            clBind7735.align,
            clIn50,
            composeLayout.clBind1446(clBind7736, "x"),
          ),
          clBind12037 = composeLayout.clBind1441(
            clBind7738.top,
            clBind7738.height,
            clBind12035,
            clBind7735.justify,
            clIn50,
            composeLayout.clBind1446(clBind7736, "y"),
          );
        clBind7739.push(
          composeLayout.clBind1411(
            clIn47,
            clBind7736,
            {
              left: clBind12036.start,
              top: clBind12037.start,
              width: clBind12036.size,
              height: clBind12037.size,
            },
            clIn50,
            composeLayout.clBind1455(clIn51, 0),
            clIn52,
          ),
        );
      }
      return {
        ...composeLayout.clBind1412(
          clIn48,
          clIn49,
          clIn50,
          clIn51,
          clBind7735.materialize,
        ),
        kind: "panel",
        padding: composeLayout.clBind1456(clBind7735.padding),
        align: clBind7735.align,
        justify: clBind7735.justify,
        contentFrame: composeLayout.clBind1463(clBind7738),
        children: clBind7739,
      };
    }
    if (clIn48.node.kind === "layers") {
      let clBind8993 = clIn48.node,
        clBind8994 = composeLayout.clBind1443(clIn48, clIn49, clIn50),
        clBind8995 = composeLayout.clBind1439(clBind8994, clBind8993.padding),
        clBind8996 = [],
        clBind8997 = [];
      return (
        clBind8995.width > 0 &&
          clBind8995.height > 0 &&
          clIn48.children.length > 0 &&
          clIn48.children.forEach((item, index) => {
            let clBind17891 = composeLayout.clBind1455(clIn51, index),
              clBind17892 = composeLayout.clBind1407(
                clIn47,
                item,
                clBind8995,
                clBind8993.justifyItems,
                clBind8993.alignItems,
                clIn50,
              );
            clBind8997.push({
              path: clBind17891,
              frame: composeLayout.clBind1463(clBind17892),
            });
            clBind8996.push(
              composeLayout.clBind1411(
                clIn47,
                item,
                clBind17892,
                clIn50,
                clBind17891,
                clIn52,
              ),
            );
          }),
        {
          ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, false),
          kind: "layers",
          padding: composeLayout.clBind1456(clBind8993.padding),
          alignItems: clBind8993.alignItems,
          justifyItems: clBind8993.justifyItems,
          contentFrame: composeLayout.clBind1463(clBind8995),
          items: clBind8997,
          children: clBind8996,
        }
      );
    }
    if (clIn48.node.kind === "row") {
      let clBind5398 = clIn48.node,
        clBind5399 = composeLayout.clBind1443(clIn48, clIn49, clIn50),
        clBind5400 = composeLayout.clBind1439(clBind5399, clBind5398.padding),
        clBind5401 = [],
        clBind5402 = [],
        clBind5403 = clBind5398.gap,
        clBind5404 = 0;
      if (
        clBind5400.width > 0 &&
        clBind5400.height > 0 &&
        clIn48.children.length > 0
      ) {
        let clBind7512 = clIn48.children.map((item) =>
            composeLayout.clBind1430(item, "x"),
          ),
          clBind7513 = clIn48.children.map((item) =>
            item.node.width.mode === "fill" ? item.node.width.value : 0,
          ),
          clBind7514 = composeLayout.clBind1417({
            available: clBind5400.width,
            baseSizes: clBind7512,
            gap: clBind5398.gap,
            fillWeights: clBind7513,
            kind: clBind5398.kind,
            name: clBind5398.name,
            axis: "x",
            warnOverflow: false,
          }),
          clBind7515 = composeLayout.clBind1418(
            clBind5400.width,
            clBind7514,
            clBind5398.gap,
            clBind5398.justify,
          );
        clBind5403 = clBind7515.gap;
        clBind5404 = clBind7515.offset;
        let clBind7516 = clBind5400.left + clBind7515.offset;
        clIn48.children.forEach((item, index) => {
          let clBind13552 = clBind7514[index] ?? 0,
            clBind13553 = composeLayout.clBind1415(
              clIn47,
              item,
              clBind13552,
              clBind5400.height,
              clBind5398.align === "stretch",
            ),
            clBind13554 = composeLayout.clBind1441(
              clBind5400.top,
              clBind5400.height,
              clBind13553,
              clBind5398.align,
              clIn50,
              composeLayout.clBind1446(item, "y"),
            ),
            clBind13555 = {
              left: clBind7516,
              top: clBind13554.start,
              width: clBind13552,
              height: clBind13554.size,
            },
            clBind13556 = composeLayout.clBind1455(clIn51, index);
          clBind5402.push({
            path: clBind13556,
            frame: composeLayout.clBind1463(clBind13555),
          });
          clBind5401.push(
            composeLayout.clBind1411(
              clIn47,
              item,
              clBind13555,
              clIn50,
              clBind13556,
              clIn52,
            ),
          );
          clBind7516 += clBind13552 + clBind7515.gap;
        });
      }
      return {
        ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, false),
        kind: "row",
        padding: composeLayout.clBind1456(clBind5398.padding),
        gap: clBind5398.gap,
        effectiveGap: composeLayout.clBind1464(clBind5403),
        justifyOffset: composeLayout.clBind1464(clBind5404),
        align: clBind5398.align,
        justify: clBind5398.justify,
        contentFrame: composeLayout.clBind1463(clBind5400),
        items: clBind5402,
        children: clBind5401,
      };
    }
    if (clIn48.node.kind === "column") {
      let clBind5214 = clIn48.node,
        clBind5215 = composeLayout.clBind1443(clIn48, clIn49, clIn50),
        clBind5216 = composeLayout.clBind1439(clBind5215, clBind5214.padding),
        clBind5217 = [],
        clBind5218 = [],
        clBind5219 = clBind5214.gap,
        clBind5220 = 0;
      if (
        clBind5216.width > 0 &&
        clBind5216.height > 0 &&
        clIn48.children.length > 0
      ) {
        let clBind6909 = clIn48.children.map((item) =>
            composeLayout.clBind1414(
              item,
              clBind5216.width,
              clBind5214.align === "stretch",
            ),
          ),
          clBind6910 = clIn48.children.map((item, index) =>
            composeLayout.composeTrackSize(
              clIn47,
              item,
              clBind6909[index] ?? 0,
              true,
            ),
          ),
          clBind6911 = clIn48.children.map((item) =>
            item.node.height.mode === "fill" ? item.node.height.value : 0,
          ),
          clBind6912 = composeLayout.clBind1417({
            available: clBind5216.height,
            baseSizes: clBind6910,
            gap: clBind5214.gap,
            fillWeights: clBind6911,
            kind: clBind5214.kind,
            name: clBind5214.name,
            axis: "y",
            warnOverflow: false,
          }),
          clBind6913 = composeLayout.clBind1418(
            clBind5216.height,
            clBind6912,
            clBind5214.gap,
            clBind5214.justify,
          );
        clBind5219 = clBind6913.gap;
        clBind5220 = clBind6913.offset;
        let clBind6914 = clBind5216.top + clBind6913.offset;
        clIn48.children.forEach((item, index) => {
          let clBind14242 = clBind6909[index] ?? 0,
            clBind14243 = clBind6912[index] ?? 0,
            clBind14244 = composeLayout.clBind1441(
              clBind5216.left,
              clBind5216.width,
              clBind14242,
              clBind5214.align,
              clIn50,
              composeLayout.clBind1446(item, "x"),
            ),
            clBind14245 = {
              left: clBind14244.start,
              top: clBind6914,
              width: clBind14244.size,
              height: clBind14243,
            },
            clBind14246 = composeLayout.clBind1455(clIn51, index);
          clBind5218.push({
            path: clBind14246,
            frame: composeLayout.clBind1463(clBind14245),
          });
          clBind5217.push(
            composeLayout.clBind1411(
              clIn47,
              item,
              clBind14245,
              clIn50,
              clBind14246,
              clIn52,
            ),
          );
          clBind6914 += clBind14243 + clBind6913.gap;
        });
      }
      return {
        ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, false),
        kind: "column",
        padding: composeLayout.clBind1456(clBind5214.padding),
        gap: clBind5214.gap,
        effectiveGap: composeLayout.clBind1464(clBind5219),
        justifyOffset: composeLayout.clBind1464(clBind5220),
        align: clBind5214.align,
        justify: clBind5214.justify,
        contentFrame: composeLayout.clBind1463(clBind5216),
        items: clBind5218,
        children: clBind5217,
      };
    }
    let clBind2374 = clIn48.node,
      clBind2375 = composeLayout.clBind1443(clIn48, clIn49, clIn50),
      clBind2376 = composeLayout.clBind1439(clBind2375, clBind2374.padding),
      clBind2377 = [],
      clBind2378 = [],
      clBind2379 = [],
      clBind2380 = [],
      clBind2381 = clBind2374.rows
        ? composeLayout.clBind1460(clBind2374.rows)
        : [];
    if (
      clBind2376.width > 0 &&
      clBind2376.height > 0 &&
      clIn48.children.length > 0
    ) {
      let clBind5571 = composeLayout.clBind1419(
        clIn47,
        clBind2374,
        composeLayout.clBind1423(clBind2374, clIn48.children),
        clBind2376.width,
        clBind2376.height,
        true,
      );
      clBind2379 = clBind5571.columnSizes.map(composeLayout.clBind1464);
      clBind2380 = clBind5571.rowSizes.map(composeLayout.clBind1464);
      clBind2381 = composeLayout.clBind1460(clBind5571.rows);
      clBind5571.items.forEach((item, index) => {
        let clBind6271 =
            clBind2376.left +
            composeLayout.clBind1442(
              clBind5571.columnSizes.slice(0, item.column),
            ) +
            item.column * clBind2374.columnGap,
          clBind6272 =
            clBind2376.top +
            composeLayout.clBind1442(clBind5571.rowSizes.slice(0, item.row)) +
            item.row * clBind2374.rowGap,
          clBind6273 =
            composeLayout.clBind1442(
              clBind5571.columnSizes.slice(
                item.column,
                item.column + item.columnSpan,
              ),
            ) +
            Math.max(0, item.columnSpan - 1) * clBind2374.columnGap,
          clBind6274 =
            composeLayout.clBind1442(
              clBind5571.rowSizes.slice(item.row, item.row + item.rowSpan),
            ) +
            Math.max(0, item.rowSpan - 1) * clBind2374.rowGap,
          clBind6275 = composeLayout.clBind1414(
            item.child,
            clBind6273,
            clBind2374.justifyItems === "stretch",
          ),
          clBind6276 = composeLayout.clBind1415(
            clIn47,
            item.child,
            clBind6275,
            clBind6274,
            clBind2374.alignItems === "stretch",
          ),
          clBind6277 = composeLayout.clBind1441(
            clBind6271,
            clBind6273,
            clBind6275,
            clBind2374.justifyItems,
            clIn50,
            composeLayout.clBind1446(item.child, "x"),
          ),
          clBind6278 = composeLayout.clBind1441(
            clBind6272,
            clBind6274,
            clBind6276,
            clBind2374.alignItems,
            clIn50,
            composeLayout.clBind1446(item.child, "y"),
          ),
          clBind6279 = composeLayout.clBind1455(clIn51, index),
          clBind6280 = {
            left: clBind6277.start,
            top: clBind6278.start,
            width: clBind6277.size,
            height: clBind6278.size,
          };
        clBind2378.push({
          path: clBind6279,
          column: item.column,
          row: item.row,
          columnSpan: item.columnSpan,
          rowSpan: item.rowSpan,
          cellFrame: composeLayout.clBind1463({
            left: clBind6271,
            top: clBind6272,
            width: clBind6273,
            height: clBind6274,
          }),
        });
        clBind2377.push(
          composeLayout.clBind1411(
            clIn47,
            item.child,
            clBind6280,
            clIn50,
            clBind6279,
            clIn52,
          ),
        );
      });
    }
    return {
      ...composeLayout.clBind1412(clIn48, clIn49, clIn50, clIn51, false),
      kind: "grid",
      padding: composeLayout.clBind1456(clBind2374.padding),
      columnGap: clBind2374.columnGap,
      rowGap: clBind2374.rowGap,
      alignItems: clBind2374.alignItems,
      justifyItems: clBind2374.justifyItems,
      contentFrame: composeLayout.clBind1463(clBind2376),
      columns: composeLayout.clBind1460(clBind2374.columns),
      rows: clBind2374.rows
        ? composeLayout.clBind1460(clBind2374.rows)
        : undefined,
      autoRows: composeLayout.clBind1459(clBind2374.autoRows),
      resolvedRows: clBind2381,
      columnSizes: clBind2379,
      rowSizes: clBind2380,
      cells: clBind2378,
      children: clBind2377,
    };
  };
});
