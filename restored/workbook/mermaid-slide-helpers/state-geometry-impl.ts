// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: state/mind node geometry maps (legacy KAe / UAe/WAe/GAe).
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

export const ensureStateGeometryInit = esmInit(() => {
  UAe = (mshIn2180) => {
    switch (mshIn2180) {
      case "round":
      case "stadium":
        return "roundRect";
      case "circle":
      case "doublecircle":
      case "ellipse":
        return "ellipse";
      case "diamond":
        return "flowChartDecision";
      case "hexagon":
        return "hexagon";
      case "odd":
        return "ellipse";
      case "trapezoid":
        return "trapezoid";
      case "inv_trapezoid":
        return "trapezoid";
      case "lean_right":
      case "lean_left":
        return "parallelogram";
      case "subroutine":
        return "flowChartPredefinedProcess";
      case "cylinder":
        return "can";
      case "terminal":
        return "flowChartTerminator";
      default:
        return "rect";
    }
  };
  WAe = (mshIn5262) => {
    switch (mshIn5262) {
      case "start":
      case "end":
        return "ellipse";
      case "choice":
        return "diamond";
      case "divider":
        return "bracePair";
      case "fork":
      case "join":
        return "rect";
      default:
        return "roundRect";
    }
  };
  GAe = (mshIn5618) => {
    switch (mshIn5618) {
      case 1:
        return "roundRect";
      case 2:
        return "rect";
      case 3:
        return "ellipse";
      case 4:
        return "cloud";
      case 6:
        return "hexagon";
      default:
        return "rect";
    }
  };
});

/** Legacy ensure alias. */
export const KAe = ensureStateGeometryInit;
