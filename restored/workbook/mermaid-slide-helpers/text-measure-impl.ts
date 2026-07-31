// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: canvas text measure + Binding1615 block (legacy Binding1616).
// Stage-3 wave-69 cohesive mermaid-slide-helpers impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureZodRuntime as appInitialBst } from "../../vendor/zod";
import { ensureChartProtoNameMapsInit as workbookBinding404 } from "../chart-proto-name-maps";
import { mshH } from "./boundary-hooks";
import {
  workbookBinding1592,
  workbookBinding1593,
  workbookBinding1594,
  workbookBinding1595,
  workbookBinding1596,
  workbookBinding1597,
  workbookBinding1598,
  workbookBinding1599,
  workbookBinding1600,
  _X,
  workbookBinding1601,
  workbookBinding1602,
  workbookBinding1603,
  workbookBinding1604,
  workbookBinding1605,
  workbookBinding1606,
  workbookBinding1607,
  workbookBinding1608,
  workbookBinding1609,
  workbookBinding1610,
  workbookBinding1611,
  workbookBinding1612,
  workbookBinding1613,
  workbookBinding1614,
  workbookBinding1615,
  workbookBinding1617,
  workbookBinding1619,
  workbookBinding1621,
  workbookBinding1622,
  workbookBinding1623,
  workbookBinding1624,
  workbookBinding1625,
  workbookBinding1626,
  workbookBinding1627,
  workbookBinding1628,
  workbookBinding1629,
  workbookBinding1630,
  workbookBinding1631,
  workbookBinding1632,
  workbookBinding1633,
  workbookBinding1634,
  workbookBinding1635,
  $X,
  workbookBinding1636,
  workbookBinding1637,
  workbookBinding1638,
  workbookBinding1639,
  workbookBinding1640,
  workbookBinding1641,
  workbookBinding1642,
  workbookBinding1643,
  workbookBinding1644,
  workbookBinding1645,
  workbookBinding1646,
  workbookBinding1647,
  workbookBinding1648,
  workbookBinding1649,
  workbookBinding1650,
  workbookBinding1651,
  workbookBinding1652,
  _Z,
  workbookBinding1653,
  workbookBinding1654,
  workbookBinding1655,
  workbookBinding1656,
  workbookBinding1657,
  workbookBinding1658,
  workbookBinding1659,
  workbookBinding1660,
  workbookBinding1661,
  workbookBinding1662,
  CAe,
  wAe,
  workbookBinding1663,
  TAe,
  EAe,
  DAe,
  OAe,
  kAe,
  AAe,
  jAe,
  MAe,
  NAe,
  PAe,
  FAe,
  IAe,
  LAe,
  RAe,
  zAe,
  VAe,
  UAe,
  WAe,
  GAe,
  workbookBinding1664,
  qAe,
  workbookBinding1665,
  JAe,
  workbookBinding1666,
  YAe,
  workbookBinding1667,
  ZAe,
  workbookBinding1668,
} from "./helper-slots";

export const ensureTextMeasureInit = esmInit(() => {
  workbookBinding1608 = 14;
  workbookBinding1609 = 1.2;
  workbookBinding1610 = "Arial";
  workbookBinding1611 = "normal";
  workbookBinding1612 = null;
  workbookBinding1613 = () => {
    if (workbookBinding1612) return workbookBinding1612;
    if (typeof OffscreenCanvas < "u") {
      let workbookBinding21477 = new OffscreenCanvas(1, 1).getContext("2d");
      return (
        workbookBinding21477 && (workbookBinding1612 = workbookBinding21477),
        workbookBinding1612
      );
    }
    if (typeof document < "u" && document.createElement) {
      let workbookBinding21274 = document
        .createElement("canvas")
        .getContext("2d");
      return (
        workbookBinding21274 && (workbookBinding1612 = workbookBinding21274),
        workbookBinding1612
      );
    }
    return null;
  };
  workbookBinding1614 = (mshIn13788) =>
    mshIn13788 ? mshIn13788.split(/\r?\n/).map((item) => item.trimEnd()) : [""];
  workbookBinding1615 = (mshIn2652, mshIn2653 = {}) => {
    let workbookBinding10141 = mshIn2653.fontSize ?? workbookBinding1608,
      workbookBinding10142 =
        mshIn2653.lineHeight ??
        Math.ceil(workbookBinding10141 * workbookBinding1609),
      workbookBinding10143 = mshIn2653.fontFamily ?? workbookBinding1610,
      workbookBinding10144 = mshIn2653.fontWeight ?? workbookBinding1611,
      workbookBinding10145 = workbookBinding1614(mshIn2652),
      workbookBinding10146 = workbookBinding1613();
    if (!workbookBinding10146) {
      let workbookBinding18055 = Math.max(
        ...workbookBinding10145.map((item) => item.length),
      );
      return {
        width: Math.ceil(workbookBinding18055 * workbookBinding10141 * 0.6),
        height: workbookBinding10142 * workbookBinding10145.length,
        lineHeight: workbookBinding10142,
        lines: workbookBinding10145,
      };
    }
    workbookBinding10146.font = `${workbookBinding10144} ${workbookBinding10141}px ${workbookBinding10143}`;
    let workbookBinding10147 = workbookBinding10145.map(
      (item) => workbookBinding10146.measureText(item).width,
    );
    return {
      width: Math.ceil(Math.max(0, ...workbookBinding10147)),
      height: workbookBinding10142 * workbookBinding10145.length,
      lineHeight: workbookBinding10142,
      lines: workbookBinding10145,
    };
  };
});

/** Legacy ensure alias. */
export const workbookBinding1616 = ensureTextMeasureInit;
