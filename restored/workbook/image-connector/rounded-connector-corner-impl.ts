// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: rounded connector corner geometry.
// Stage-3 wave-113.

import { CONNECTOR_EPSILON } from "../mermaid-slide-adapters";

void CONNECTOR_EPSILON;

export function roundedConnectorCorner(icIn1970: any, icIn1971: any) {
  let icBind8722 = Math.abs(icIn1971.x - icIn1970.x),
    icBind8723 = Math.abs(icIn1971.y - icIn1970.y);
  if (icBind8722 < CONNECTOR_EPSILON || icBind8723 < CONNECTOR_EPSILON)
    throw Error(
      "Rounded connector corner requires endpoints with horizontal and vertical separation.",
    );
  let icBind8724 = {
    left: Math.min(icIn1970.x, icIn1971.x),
    top: Math.min(icIn1970.y, icIn1971.y),
    width: icBind8722,
    height: icBind8723,
  };
  return (
    icIn1970.x > icIn1971.x && (icBind8724.horizontalFlip = true),
    icIn1970.y > icIn1971.y && (icBind8724.verticalFlip = true),
    {
      geometry: "curvedConnector4",
      position: icBind8724,
      adjustmentList: [
        {
          name: "adj1",
          formula: "val 0",
        },
        {
          name: "adj2",
          formula: "val 100000",
        },
      ],
      routeStart: icIn1970,
      routeEnd: icIn1971,
      pathStart: icIn1970,
      pathEnd: icIn1971,
      enginePoints: {
        start: icIn1970,
        firstHandle: {
          x: icIn1970.x,
          y: (icIn1970.y + icIn1971.y) / 2,
        },
        secondHandle: {
          x: (icIn1970.x + icIn1971.x) / 2,
          y: icIn1971.y,
        },
        end: icIn1971,
      },
    }
  );
}

export const FPe = roundedConnectorCorner;
