// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose layout MIME/meta + geometry reverse map (legacy DOe).
// Stage-3 wave-72 cohesive compose-dsl impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensureFillInit } from "../fill";
import { ensurePlaceholderResolveDepsInit } from "../placeholder-resolve";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { ensureDefaultTextBoxInsetsInit } from "../text-box";
import { ensurePresetShapeClusterInit } from "../preset-shape";
import { ensureThemeTypefaceInit } from "../placeholder-resolve";
import { ensureStyleResolveInit } from "../text-style";
import { ensureTextBoxClusterInit } from "../text-box";
import { ensureGeometryTransformDepsInit } from "../geometry-transform";
import { ensureFontMetricsInit } from "../font-metrics";
import { cdslH } from "./boundary-hooks";
import { ensureTableElementInit } from "../table-element";
import {
  workbookBinding1490,
  workbookBinding1491,
  workbookBinding1492,
  workbookBinding1493,
  workbookBinding1494,
  workbookBinding1495,
  workbookBinding1496,
  workbookBinding1497,
  workbookBinding1498,
  $K,
  workbookBinding1500,
  workbookBinding1501,
  workbookBinding1502,
  workbookBinding1503,
  workbookBinding1504,
  workbookBinding1505,
  workbookBinding1506,
  workbookBinding1507,
  workbookBinding1508,
  workbookBinding1509,
  workbookBinding1510,
  workbookBinding1511,
  workbookBinding1512,
  workbookBinding1513,
  workbookBinding1514,
  workbookBinding1515,
  _q,
  workbookBinding1516,
  workbookBinding1517,
  workbookBinding1518,
  workbookBinding1519,
  workbookBinding1520,
  workbookBinding1521,
  workbookBinding1522,
  workbookBinding1523,
  workbookBinding1524,
  workbookBinding1525,
  workbookBinding1526,
  workbookBinding1527,
} from "./dsl-slots";

void wr;
void ensureFillInit;
void ensurePlaceholderResolveDepsInit;
void ensureChartProtoNameMapsInit;
void shapeGeometryNameToProto;
void ensureDefaultTextBoxInsetsInit;
void ensurePresetShapeClusterInit;
void ensureThemeTypefaceInit;
void ensureStyleResolveInit;
void ensureTextBoxClusterInit;
void ensureGeometryTransformDepsInit;
void ensureFontMetricsInit;
void cdslH;

/** Initialize compose layout meta (legacy DOe). */
export const ensureComposeLayoutMetaInit = esmInit(() => {
  wr();
  ensureFillInit();
  cdslH.ensureBinding661();
  ensurePlaceholderResolveDepsInit();
  cdslH.ensureBinding739();
  cdslH.ensureBinding1489();
  ensureTableElementInit();
  cdslH.ensureBinding433();
  ensureChartProtoNameMapsInit();
  cdslH.ensureBinding1213();
  ensureDefaultTextBoxInsetsInit();
  ensurePresetShapeClusterInit();
  ensureThemeTypefaceInit();
  ensureStyleResolveInit();
  ensureTextBoxClusterInit();
  ensureGeometryTransformDepsInit();
  ensureFontMetricsInit();
  workbookBinding1490 = "openai.presentation.layout/v4";
  workbookBinding1491 = "application/vnd.openai.presentation-layout+json";
  workbookBinding1492 = Object.entries(shapeGeometryNameToProto).reduce(
    (accumulator, [cdslIn14905, cdslIn14906]) => (
      accumulator[cdslIn14906] === undefined &&
        (accumulator[cdslIn14906] = cdslIn14905),
      accumulator
    ),
    {},
  );
});

/** Legacy DOe. */
export const DOe = ensureComposeLayoutMetaInit;
