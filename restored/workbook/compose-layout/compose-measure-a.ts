// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: compose intrinsic measure Binding1394–1406.

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

export const ensureComposeMeasureAInit = esmInit(() => {
  composeLayout.COMPOSE_SCALE = 1e5;
  composeLayout.materializeComposeRun = (clIn2925, clIn2926, clIn2927 = {}) => {
    let clBind10828 = composeLayout.clBind1451(
        clIn2927.frame ?? clIn2925.frame,
        "slide.compose frame",
      ),
      clBind10829 = composeLayout.clBind1450(clIn2927.baseUnit),
      clBind10830 = {
        slide: clIn2925,
        presentation: composeLayout.clBind1436(clIn2925),
      },
      clBind10831 = composeLayout.clBind1396(clBind10830, clIn2926),
      clBind10832 = composeLayout.clBind1452(
        clIn2926.width,
        clBind10831.intrinsicWidth,
        clBind10828.width,
      ),
      clBind10833 = {
        left: clBind10828.left,
        top: clBind10828.top,
        width: clBind10832,
        height: composeLayout.clBind1453(
          clBind10830,
          clBind10831,
          clBind10832,
          clBind10828.height,
        ),
      },
      clBind10834 = [];
    composeLayout.clBind1403(
      clBind10830,
      clBind10831,
      clBind10833,
      clBind10834,
      clBind10829,
    );
    let clBind10835 = [],
      clBind10836 = composeLayout.clBind1411(
        clBind10830,
        clBind10831,
        clBind10833,
        clBind10829,
        "0",
        clBind10835,
      );
    return {
      placements: clBind10834,
      materializedPaths: clBind10835,
      run: {
        frame: composeLayout.clBind1463(clBind10828),
        baseUnit: clBind10829,
        root: clBind10836,
      },
    };
  };
  composeLayout.clBind1396 = (clIn1300, clIn1301) => {
    if (clIn1301.kind === "text") {
      let clBind18927 = composeLayout.measureComposeTextNode(
        clIn1300,
        clIn1301,
      );
      return {
        node: clIn1301,
        intrinsicWidth: clBind18927.width,
        intrinsicHeight: clBind18927.height,
        children: [],
      };
    }
    return clIn1301.kind === "rule"
      ? {
          node: clIn1301,
          intrinsicWidth: composeLayout.clBind1432(clIn1301.width, 0),
          intrinsicHeight: composeLayout.clBind1432(
            clIn1301.height,
            clIn1301.weight,
          ),
          children: [],
        }
      : clIn1301.kind === "shape"
        ? composeLayout.clBind1397(clIn1301, 24, 24)
        : clIn1301.kind === "connector"
          ? composeLayout.clBind1397(clIn1301, 160, 16)
          : clIn1301.kind === "image"
            ? composeLayout.clBind1397(clIn1301, 320, 180)
            : clIn1301.kind === "table"
              ? composeLayout.clBind1397(clIn1301, 360, 200)
              : clIn1301.kind === "chart"
                ? composeLayout.clBind1397(clIn1301, 640, 360)
                : clIn1301.kind === "panel"
                  ? composeLayout.clBind1398(clIn1300, clIn1301)
                  : clIn1301.kind === "layers"
                    ? composeLayout.clBind1399(clIn1300, clIn1301)
                    : clIn1301.kind === "row"
                      ? composeLayout.clBind1400(clIn1300, clIn1301)
                      : clIn1301.kind === "column"
                        ? composeLayout.clBind1401(clIn1300, clIn1301)
                        : composeLayout.clBind1402(clIn1300, clIn1301);
  };
  composeLayout.clBind1397 = (clIn9894, clIn9895, clIn9896) => ({
    node: clIn9894,
    intrinsicWidth: composeLayout.clBind1432(clIn9894.width, clIn9895),
    intrinsicHeight: composeLayout.clBind1432(clIn9894.height, clIn9896),
    children: [],
  });
  composeLayout.clBind1398 = (clIn5454, clIn5455) => {
    let clBind15250 = clIn5455.child
      ? composeLayout.clBind1396(clIn5454, clIn5455.child)
      : undefined;
    return {
      node: clIn5455,
      intrinsicWidth:
        (clBind15250 ? composeLayout.clBind1430(clBind15250, "x") : 0) +
        clIn5455.padding.left +
        clIn5455.padding.right,
      intrinsicHeight:
        (clBind15250 ? composeLayout.clBind1430(clBind15250, "y") : 0) +
        clIn5455.padding.top +
        clIn5455.padding.bottom,
      children: clBind15250 ? [clBind15250] : [],
    };
  };
  composeLayout.clBind1399 = (clIn4499, clIn4500) => {
    let clBind13745 = clIn4500.children.map((item) =>
      composeLayout.clBind1396(clIn4499, item),
    );
    return {
      node: clIn4500,
      intrinsicWidth:
        Math.max(
          0,
          ...clBind13745.map((item) => composeLayout.clBind1431(item, "x")),
        ) +
        clIn4500.padding.left +
        clIn4500.padding.right,
      intrinsicHeight:
        Math.max(
          0,
          ...clBind13745.map((item) => composeLayout.clBind1431(item, "y")),
        ) +
        clIn4500.padding.top +
        clIn4500.padding.bottom,
      children: clBind13745,
    };
  };
  composeLayout.clBind1400 = (clIn4445, clIn4446) => {
    let clBind13687 = clIn4446.children.map((item) =>
        composeLayout.clBind1396(clIn4445, item),
      ),
      clBind13688 = composeLayout.clBind1442(
        clBind13687.map((item) => composeLayout.clBind1430(item, "x")),
      ),
      clBind13689 = Math.max(0, clBind13687.length - 1) * clIn4446.gap,
      clBind13690 = Math.max(
        0,
        ...clBind13687.map((item) => composeLayout.clBind1430(item, "y")),
      );
    return {
      node: clIn4446,
      intrinsicWidth:
        clBind13688 +
        clBind13689 +
        clIn4446.padding.left +
        clIn4446.padding.right,
      intrinsicHeight:
        clBind13690 + clIn4446.padding.top + clIn4446.padding.bottom,
      children: clBind13687,
    };
  };
  composeLayout.clBind1401 = (clIn4269, clIn4270) => {
    let clBind13322 = clIn4270.children.map((item) =>
        composeLayout.clBind1396(clIn4269, item),
      ),
      clBind13323 = composeLayout.clBind1442(
        clBind13322.map((item) => composeLayout.clBind1430(item, "y")),
      ),
      clBind13324 = Math.max(0, clBind13322.length - 1) * clIn4270.gap;
    return {
      node: clIn4270,
      intrinsicWidth:
        Math.max(
          0,
          ...clBind13322.map((item) => composeLayout.clBind1430(item, "x")),
        ) +
        clIn4270.padding.left +
        clIn4270.padding.right,
      intrinsicHeight:
        clBind13323 +
        clBind13324 +
        clIn4270.padding.top +
        clIn4270.padding.bottom,
      children: clBind13322,
    };
  };
  composeLayout.clBind1402 = (clIn1396, clIn1397) => {
    let clBind7190 = clIn1397.children.map((item) =>
        composeLayout.clBind1396(clIn1396, item),
      ),
      clBind7191 = composeLayout.clBind1423(clIn1397, clBind7190),
      clBind7192 = composeLayout.clBind1422(
        clIn1397,
        composeLayout.clBind1421(clIn1397, clBind7191),
      );
    if (
      clIn1397.width.mode === "hug" &&
      clIn1397.columns.some((item) => composeLayout.clBind1437(item))
    )
      throw Error(
        `Grid "${clIn1397.name ?? "(unnamed)"}" cannot use width: "hug" with fr columns.`,
      );
    if (
      clIn1397.height.mode === "hug" &&
      clBind7192.some((item) => composeLayout.clBind1437(item))
    )
      throw Error(
        `Grid "${clIn1397.name ?? "(unnamed)"}" cannot use height: "hug" with fr rows.`,
      );
    let clBind7193 = composeLayout.clBind1427(
        clIn1397.columns,
        clIn1397.columnGap,
        clBind7191,
        "x",
      ),
      clBind7194 = composeLayout.clBind1427(
        clBind7192,
        clIn1397.rowGap,
        clBind7191,
        "y",
      ),
      clBind7195 = clIn1397.columns.map((item, index) =>
        item === "auto"
          ? (clBind7193[index] ?? 0)
          : composeLayout.clBind1438(item),
      ),
      clBind7196 = clBind7192.map((item, index) =>
        item === "auto"
          ? (clBind7194[index] ?? 0)
          : composeLayout.clBind1438(item),
      );
    return {
      node: clIn1397,
      intrinsicWidth:
        composeLayout.clBind1442(clBind7195) +
        Math.max(0, clIn1397.columns.length - 1) * clIn1397.columnGap +
        clIn1397.padding.left +
        clIn1397.padding.right,
      intrinsicHeight:
        composeLayout.clBind1442(clBind7196) +
        Math.max(0, clBind7192.length - 1) * clIn1397.rowGap +
        clIn1397.padding.top +
        clIn1397.padding.bottom,
      children: clBind7190,
    };
  };
  composeLayout.clBind1403 = (clIn289, clIn290, clIn291, clIn292, clIn293) => {
    if (clIn291.width <= 0 || clIn291.height <= 0) return;
    let clBind3505 = composeLayout.clBind1413(clIn290, clIn291, clIn293);
    if (clIn290.node.kind === "text") {
      clIn292.push({
        kind: "text",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        value: composeLayout.applyTextCaseToValue(
          clIn290.node.value,
          clIn290.node.transform,
        ),
        style: clIn290.node.style,
        shadow: clIn290.node.shadow,
      });
      return;
    }
    if (clIn290.node.kind === "rule") {
      clIn292.push({
        kind: "rule",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        stroke: clIn290.node.stroke,
        opacity: clIn290.node.opacity,
        weight: clIn290.node.weight,
      });
      return;
    }
    if (clIn290.node.kind === "shape") {
      clIn292.push({
        kind: "shape",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        geometry: clIn290.node.geometry,
        customPaths: clIn290.node.customPaths,
        fill: clIn290.node.fill,
        line: clIn290.node.line,
        borderRadius: clIn290.node.borderRadius,
        shadow: clIn290.node.shadow,
      });
      return;
    }
    if (clIn290.node.kind === "connector") {
      clIn292.push({
        kind: "connector",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        connectorKind: clIn290.node.connectorKind,
        orientation: clIn290.node.orientation,
        from: clIn290.node.from,
        to: clIn290.node.to,
        fromElement: composeLayout.clBind1462(clIn290.node.fromElement),
        toElement: composeLayout.clBind1462(clIn290.node.toElement),
        fromSide: clIn290.node.fromSide,
        toSide: clIn290.node.toSide,
        fromIdx: clIn290.node.fromIdx,
        toIdx: clIn290.node.toIdx,
        line: clIn290.node.line,
        head: clIn290.node.head,
        tail: clIn290.node.tail,
        cap: clIn290.node.cap,
        join: clIn290.node.join,
      });
      return;
    }
    if (clIn290.node.kind === "image") {
      clIn292.push({
        kind: "image",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        source: clIn290.node.source,
        contentType: clIn290.node.contentType,
        fit: clIn290.node.fit,
        alt: clIn290.node.alt,
        geometry: clIn290.node.geometry,
        borderRadius: clIn290.node.borderRadius,
        crop: clIn290.node.crop,
        rotation: clIn290.node.rotation,
        flipHorizontal: clIn290.node.flipHorizontal,
        flipVertical: clIn290.node.flipVertical,
        lockAspectRatio: clIn290.node.lockAspectRatio,
      });
      return;
    }
    if (clIn290.node.kind === "table") {
      clIn292.push({
        kind: "table",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        rows: clIn290.node.rows,
        columns: clIn290.node.columns,
        values: clIn290.node.values,
        columnWidths: clIn290.node.columnWidths,
        columnTracks: clIn290.node.columnTracks,
        style: clIn290.node.style,
        styleOptions: clIn290.node.styleOptions,
      });
      return;
    }
    if (clIn290.node.kind === "chart") {
      clIn292.push({
        kind: "chart",
        frame: composeLayout.clBind1444(clIn290, clIn291, clBind3505),
        name: clIn290.node.name,
        chartType: clIn290.node.chartType,
        config: clIn290.node.config,
      });
      return;
    }
    if (clIn290.node.kind === "panel") {
      composeLayout.clBind1404(clIn289, clIn290, clIn291, clIn292, clIn293);
      return;
    }
    if (clIn290.node.kind === "layers") {
      composeLayout.clBind1406(clIn289, clIn290, clIn291, clIn292, clIn293);
      return;
    }
    if (clIn290.node.kind === "row") {
      composeLayout.clBind1405(clIn289, clIn290, clIn291, clIn292, clIn293);
      return;
    }
    if (clIn290.node.kind === "column") {
      composeLayout.clBind1409(clIn289, clIn290, clIn291, clIn292, clIn293);
      return;
    }
    composeLayout.clBind1410(clIn289, clIn290, clIn291, clIn292, clIn293);
  };
  composeLayout.clBind1404 = (
    clIn1894,
    clIn1895,
    clIn1896,
    clIn1897,
    clIn1898,
  ) => {
    let clBind8551 = clIn1895.node,
      clBind8552 = composeLayout.clBind1443(clIn1895, clIn1896, clIn1898);
    clBind8551.materialize &&
      clIn1897.push({
        kind: "shape",
        frame: clBind8552,
        name: clBind8551.name,
        geometry: "rect",
        fill: clBind8551.fill,
        line: clBind8551.line,
        borderRadius: clBind8551.borderRadius,
        shadow: clBind8551.shadow,
      });
    let clBind8553 = clIn1895.children[0];
    if (!clBind8553) return;
    let clBind8554 = composeLayout.clBind1439(clBind8552, clBind8551.padding);
    if (clBind8554.width <= 0 || clBind8554.height <= 0) return;
    let clBind8555 = composeLayout.clBind1414(
        clBind8553,
        clBind8554.width,
        clBind8551.align === "stretch",
      ),
      clBind8556 = composeLayout.clBind1415(
        clIn1894,
        clBind8553,
        clBind8555,
        clBind8554.height,
        clBind8551.justify === "stretch",
      ),
      clBind8557 = composeLayout.clBind1441(
        clBind8554.left,
        clBind8554.width,
        clBind8555,
        clBind8551.align,
        clIn1898,
        composeLayout.clBind1446(clBind8553, "x"),
      ),
      clBind8558 = composeLayout.clBind1441(
        clBind8554.top,
        clBind8554.height,
        clBind8556,
        clBind8551.justify,
        clIn1898,
        composeLayout.clBind1446(clBind8553, "y"),
      );
    composeLayout.clBind1403(
      clIn1894,
      clBind8553,
      {
        left: clBind8557.start,
        top: clBind8558.start,
        width: clBind8557.size,
        height: clBind8558.size,
      },
      clIn1897,
      clIn1898,
    );
  };
  composeLayout.clBind1405 = (
    clIn1364,
    clIn1365,
    clIn1366,
    clIn1367,
    clIn1368,
  ) => {
    let clBind7137 = clIn1365.node,
      clBind7138 = composeLayout.clBind1443(clIn1365, clIn1366, clIn1368),
      clBind7139 = composeLayout.clBind1439(clBind7138, clBind7137.padding);
    if (
      clBind7139.width <= 0 ||
      clBind7139.height <= 0 ||
      clIn1365.children.length === 0
    )
      return;
    let clBind7140 = clIn1365.children.map((item) =>
        composeLayout.clBind1430(item, "x"),
      ),
      clBind7141 = clIn1365.children.map((item) =>
        item.node.width.mode === "fill" ? item.node.width.value : 0,
      ),
      clBind7142 = composeLayout.clBind1417({
        available: clBind7139.width,
        baseSizes: clBind7140,
        gap: clBind7137.gap,
        fillWeights: clBind7141,
        kind: clBind7137.kind,
        name: clBind7137.name,
        axis: "x",
        warnOverflow: true,
        slideNumber: clIn1364.slide.index + 1,
        slideId: clIn1364.slide.id,
        childNames: clIn1365.children.map((item) => item.node.name),
      }),
      clBind7143 = composeLayout.clBind1418(
        clBind7139.width,
        clBind7142,
        clBind7137.gap,
        clBind7137.justify,
      ),
      clBind7144 = clBind7139.left + clBind7143.offset;
    clIn1365.children.forEach((item, index) => {
      let clBind16403 = clBind7142[index] ?? 0,
        clBind16404 = composeLayout.clBind1415(
          clIn1364,
          item,
          clBind16403,
          clBind7139.height,
          clBind7137.align === "stretch",
        ),
        clBind16405 = composeLayout.clBind1441(
          clBind7139.top,
          clBind7139.height,
          clBind16404,
          clBind7137.align,
          clIn1368,
          composeLayout.clBind1446(item, "y"),
        );
      composeLayout.clBind1403(
        clIn1364,
        item,
        {
          left: clBind7144,
          top: clBind16405.start,
          width: clBind16403,
          height: clBind16405.size,
        },
        clIn1367,
        clIn1368,
      );
      clBind7144 += clBind16403 + clBind7143.gap;
    });
  };
  composeLayout.clBind1406 = (
    clIn5383,
    clIn5384,
    clIn5385,
    clIn5386,
    clIn5387,
  ) => {
    let clBind15124 = clIn5384.node,
      clBind15125 = composeLayout.clBind1443(clIn5384, clIn5385, clIn5387),
      clBind15126 = composeLayout.clBind1439(clBind15125, clBind15124.padding);
    clBind15126.width <= 0 ||
      clBind15126.height <= 0 ||
      clIn5384.children.length === 0 ||
      clIn5384.children.forEach((item) => {
        let clBind21305 = composeLayout.clBind1407(
          clIn5383,
          item,
          clBind15126,
          clBind15124.justifyItems,
          clBind15124.alignItems,
          clIn5387,
        );
        composeLayout.clBind1403(
          clIn5383,
          item,
          clBind21305,
          clIn5386,
          clIn5387,
        );
      });
  };
});
