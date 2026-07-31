// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helpers: slide shape connector geometry + shape-props builders
// (legacy 660–665 / GEe / KEe / qEe → dotProduct2d…resolveShapeLocalIdAlias).
// Stage-3 wave-81 slides geometry helpers kept under flat limit.

import { composeScopedId, resolveLocalIdAlias } from "../stable-id";

export function dotProduct2d(scIn14541: any, scIn14542: any) {
  return scIn14541.x * scIn14542.x + scIn14541.y * scIn14542.y;
}
export function cardinalDirectionFromDelta(scIn7569: any) {
  let scBind18053 = Math.abs(scIn7569.x),
    scBind18054 = Math.abs(scIn7569.y);
  return scBind18053 < 1e-6 && scBind18054 < 1e-6
    ? "none"
    : scBind18053 >= scBind18054
      ? scIn7569.x >= 0
        ? "right"
        : "left"
      : scIn7569.y >= 0
        ? "down"
        : "up";
}
export function oppositeCardinalDirection(scIn7625: any) {
  switch (scIn7625) {
    case "up":
      return "down";
    case "down":
      return "up";
    case "left":
      return "right";
    case "right":
      return "left";
    default:
      return "none";
  }
}
export function axisFromCardinalDirection(scIn9924: any) {
  return scIn9924 === "left" || scIn9924 === "right"
    ? "horizontal"
    : scIn9924 === "up" || scIn9924 === "down"
      ? "vertical"
      : "none";
}
export function pointsAlignedOnAxis(
  scIn10691: any,
  scIn10692: any,
  scIn10693: any,
) {
  return scIn10693 === "horizontal"
    ? Math.abs(scIn10691.y - scIn10692.y) < 1e-6
    : Math.abs(scIn10691.x - scIn10692.x) < 1e-6;
}
export function isPointOnCardinalSide(
  scIn7239: any,
  scIn7240: any,
  scIn7241: any,
) {
  switch (scIn7241) {
    case "left":
      return scIn7240.x <= scIn7239.x;
    case "right":
      return scIn7240.x >= scIn7239.x;
    case "up":
      return scIn7240.y <= scIn7239.y;
    case "down":
      return scIn7240.y >= scIn7239.y;
    default:
      return false;
  }
}
export function buildShapeAddProps(
  scIn1148: any,
  scIn1149: any,
  scIn1150: any,
) {
  if ("proto" in scIn1148)
    throw Error("Cannot build shape props from proto config.");
  return scIn1148.geometry === "custom"
    ? {
        geometry: "custom",
        position: scIn1148.position,
        fill: scIn1148.fill,
        line: scIn1148.line,
        adjustmentList: scIn1148.adjustmentList,
        borderRadius: scIn1148.borderRadius,
        shadow: scIn1148.shadow,
        className: scIn1148.className,
        name: scIn1148.name,
        customPaths: scIn1148.customPaths,
      }
    : scIn1148.geometry === "connector"
      ? {
          geometry: "connector",
          position: scIn1148.position,
          fill: scIn1148.fill,
          line: scIn1148.line,
          adjustmentList: scIn1148.adjustmentList,
          className: scIn1148.className,
          name: scIn1148.name,
          from: resolveConnectorEndpointRef(scIn1148.from, scIn1149, scIn1150),
          to: resolveConnectorEndpointRef(scIn1148.to, scIn1149, scIn1150),
          fromIdx: scIn1148.fromIdx,
          toIdx: scIn1148.toIdx,
          kind: scIn1148.kind,
          head: scIn1148.head,
          tail: scIn1148.tail,
          cap: scIn1148.cap,
          join: scIn1148.join,
        }
      : {
          geometry: scIn1148.geometry,
          position: scIn1148.position,
          fill: scIn1148.fill,
          line: scIn1148.line,
          adjustmentList: scIn1148.adjustmentList,
          borderRadius: scIn1148.borderRadius,
          shadow: scIn1148.shadow,
          className: scIn1148.className,
          name: scIn1148.name,
        };
}
export function resolveConnectorEndpointRef(
  scIn5809: any,
  scIn5810: any,
  scIn5811: any,
) {
  if (typeof scIn5809 == "string") {
    let scBind19196 = resolveShapeLocalIdAlias(
      scIn5809,
      scIn5810.id,
      scIn5810.shapes.items.map((item) => item.id),
    );
    if (!scBind19196) throw Error("Connector target id must be non-empty.");
    return composeScopedId("sh", scIn5810.id, scBind19196);
  }
  let scBind15746 = composeScopedId("sh", scIn5810.id, scIn5809.id);
  return scIn5811
    ? scIn5811.targetRefForElement(scIn5809, scBind15746)
    : scBind15746;
}
export function resolveShapeLocalIdAlias(
  scIn11191: any,
  scIn11192: any,
  scIn11193: any,
) {
  return resolveLocalIdAlias(scIn11191, {
    prefix: "sh",
    aliases: ["shape"],
    slideId: scIn11192,
    localIds: scIn11193,
  });
}
