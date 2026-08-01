// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helper: connector geometry predicate (legacy hTe / Binding1265).
// Stage-3 wave-144.

import { ShapeGeometry as workbookDt } from "../shape-geometry";

const CONNECTOR_GEOMETRIES = new Set([
  workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1,
  workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR2,
  workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR3,
  workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR4,
  workbookDt.SHAPE_GEOMETRY_BENT_CONNECTOR5,
  workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR2,
  workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR3,
  workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR4,
  workbookDt.SHAPE_GEOMETRY_CURVED_CONNECTOR5,
]);

export function hTe(geometry: any): boolean {
  return geometry == null ? false : CONNECTOR_GEOMETRIES.has(geometry);
}

export const isConnectorGeometry = hTe;
export const workbookBinding1265 = CONNECTOR_GEOMETRIES;
