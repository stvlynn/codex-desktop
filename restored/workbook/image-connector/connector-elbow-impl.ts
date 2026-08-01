// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: orthogonal connector elbow (legacy IPe).
// Stage-3 wave-132.

import { CONNECTOR_EPSILON } from "../mermaid-slide-adapters/connector-epsilon";
import { roundedConnectorCorner } from "./rounded-connector-corner-impl";

export function IPe(
  icIn6603: any,
  icIn6604: any,
  icIn6605: any,
  icIn6606: any,
  icIn6607: any,
) {
  let icBind16881 = Math.abs(icIn6604.x - icIn6603.x) < CONNECTOR_EPSILON,
    icBind16882 = Math.abs(icIn6604.y - icIn6603.y) < CONNECTOR_EPSILON,
    icBind16883 = Math.abs(icIn6605.x - icIn6604.x) < CONNECTOR_EPSILON,
    icBind16884 = Math.abs(icIn6605.y - icIn6604.y) < CONNECTOR_EPSILON;
  if (icBind16881 && icBind16884)
    return roundedConnectorCorner(icIn6606, icIn6607);
  if (icBind16882 && icBind16883)
    return {
      ...roundedConnectorCorner(icIn6607, icIn6606),
      routeStart: icIn6606,
      routeEnd: icIn6607,
    };
}

export const resolveConnectorElbow = IPe;
