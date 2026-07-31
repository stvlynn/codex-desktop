// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: path command → points (legacy Sde).

import type { PathCommandPoint, Point2D } from "./types";
import { simplifyPolyline } from "./simplify-polyline";

/**
 * Legacy `Sde` — collect move/line/cubic endpoints then simplify.
 */
export function pathCommandsToSimplifiedPoints(
  commands: PathCommandPoint[],
): Point2D[] {
  const points: Point2D[] = [];
  for (const command of commands)
    (command.cmd === "moveTo" ||
      command.cmd === "lineTo" ||
      command.cmd === "cubicBezTo") &&
      points.push({
        x: command.x,
        y: command.y,
      });
  return simplifyPolyline(points);
}
