// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose size modes fixed/grow/wrap (legacy Binding1499).
// Stage-3 wave-72 cohesive compose-dsl impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
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

/** Initialize compose size helpers (legacy Binding1499). */
export const ensureComposeSizeHelpersInit = esmInit(() => {
  workbookBinding1493 = "fill";
  workbookBinding1494 = (cdslIn13538) => ({
    mode: "fixed",
    value: workbookBinding1498(cdslIn13538, "compose.fixed(value)"),
  });
  workbookBinding1495 = (cdslIn13320 = 1) => ({
    mode: "fill",
    value: workbookBinding1498(cdslIn13320, "compose.grow(value)"),
  });
  workbookBinding1496 = (cdslIn14041) => ({
    mode: "wrap",
    max: workbookBinding1498(cdslIn14041, "compose.wrap(max)"),
  });
  workbookBinding1497 = (
    cdslIn1535,
    cdslIn1536 = "hug",
    cdslIn1537 = "compose.size",
  ) => {
    let workbookBinding7607 = cdslIn1535 ?? cdslIn1536;
    if (workbookBinding7607 === "hug" || workbookBinding7607 === "fill")
      return workbookBinding7607 === "hug"
        ? {
            mode: "hug",
          }
        : {
            mode: "fill",
            value: 1,
          };
    if (typeof workbookBinding7607 == "number")
      return {
        mode: "fixed",
        value: workbookBinding1498(
          workbookBinding7607,
          `${cdslIn1537}.fixed.value`,
        ),
      };
    if (typeof workbookBinding7607 == "string") {
      let workbookBinding17004 = $K(workbookBinding7607, cdslIn1537);
      if (workbookBinding17004 !== undefined)
        return {
          mode: "fixed",
          value: workbookBinding17004,
        };
      throw Error(
        `${cdslIn1537} must be hug, fill, a positive pixel number, a "[number]px" string, grow(...), fixed(...), or wrap(...).`,
      );
    }
    if (workbookBinding7607.mode === "fixed")
      return {
        mode: "fixed",
        value: workbookBinding1498(
          workbookBinding7607.value,
          `${cdslIn1537}.fixed.value`,
        ),
      };
    if (workbookBinding7607.mode === "fill")
      return {
        mode: "fill",
        value: workbookBinding1498(
          workbookBinding7607.value,
          `${cdslIn1537}.fill.value`,
        ),
      };
    if (workbookBinding7607.mode === "wrap")
      return {
        mode: "wrap",
        max: workbookBinding1498(
          workbookBinding7607.max,
          `${cdslIn1537}.wrap.max`,
        ),
      };
    throw Error(
      `${cdslIn1537} must be hug, fill, a positive pixel number, a "[number]px" string, grow(...), fixed(...), or wrap(...).`,
    );
  };
  workbookBinding1498 = (cdslIn10154, cdslIn10155) => {
    if (!Number.isFinite(cdslIn10154) || cdslIn10154 <= 0)
      throw Error(`${cdslIn10155} must be a positive number.`);
    return cdslIn10154;
  };
  $K = (cdslIn10695, cdslIn10696) => {
    let workbookBinding21199 = /^(\d+(?:\.\d+)?)\s*px$/i.exec(
      cdslIn10695.trim(),
    );
    if (workbookBinding21199)
      return workbookBinding1498(Number(workbookBinding21199[1]), cdslIn10696);
  };
});

/** Legacy workbookBinding1499. */
export const workbookBinding1499 = ensureComposeSizeHelpersInit;
