// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-42: shape.add/set mutation builders (legacy Pfe…configFromToConfigable).

import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import type { LooseBag } from "./types";

const shapeProtoToGeometryName = Object.entries(
  shapeGeometryNameToProto,
).reduce(
  (accumulator: Record<number, string>, [name, proto]) => (
    (proto as number) in accumulator || (accumulator[proto as number] = name),
    accumulator
  ),
  {} as Record<number, string>,
);

export function buildShapeAddOp(props: LooseBag) {
  let { sheet, shape, as: _as } = props,
    opBind19335 = buildShapeAddProps(shape);
  if (!opBind19335) return null;
  let opBind19336 = {
    op: "shape.add",
    sheet,
    props: opBind19335,
  };
  return (_as && (opBind19336.as = _as), opBind19336);
}
export function buildShapeSetOp(props: LooseBag) {
  let { sheet, shape } = props,
    opBind18453 = serializeShapeProps(shape);
  return Object.values(opBind18453).some((item) => item !== undefined)
    ? {
        op: "shape.set",
        target: {
          sheet,
          selector: buildShapeSelector(shape),
        },
        props: opBind18453,
      }
    : null;
}
export function buildShapeSelector(props: LooseBag) {
  let opBind18396 = props.toProto().shape?.geometry,
    opBind18397 = opBind18396
      ? shapeProtoToGeometryName[opBind18396]
      : undefined;
  return {
    anchor: props.anchor.toConfig(),
    ...(opBind18397
      ? {
          geometry: opBind18397,
        }
      : {}),
    ...(props.name
      ? {
          name: props.name,
        }
      : {}),
  };
}
export function buildShapeAddProps(props: LooseBag) {
  let opBind15032 = serializeShapeProps(props),
    opBind15033 = props.toProto().shape?.geometry,
    opBind15034 = opBind15033
      ? shapeProtoToGeometryName[opBind15033]
      : undefined,
    opBind15035 = serializeShapeLine(props.line);
  return !opBind15034 || opBind15034 === "custom"
    ? null
    : {
        id: props.id,
        geometry: opBind15034,
        ...(opBind15032.anchor
          ? {
              anchor: opBind15032.anchor,
            }
          : {}),
        ...(opBind15032.fill
          ? {
              fill: opBind15032.fill,
            }
          : {}),
        ...(opBind15035
          ? {
              line: opBind15035,
            }
          : {}),
      };
}
export function serializeShapeProps(props: LooseBag) {
  let opBind15227 = configFromToConfigable(props.fill),
    opBind15228 = serializeShapeLineFromProto(props.line);
  return {
    name: props.name,
    zIndex: props.zIndex,
    placeholderType: props.placeholderType,
    placeholderIndex: props.placeholderIndex,
    position: props.position,
    anchor: props.anchor.toConfig(),
    ...(opBind15227 === undefined
      ? {}
      : {
          fill: opBind15227,
        }),
    ...(opBind15228 === undefined
      ? {}
      : {
          line: opBind15228,
        }),
  };
}
export function serializeShapeLineFromProto(opIn6627: LooseBag) {
  let opBind16918 = configFromToConfigable(opIn6627.fill),
    opBind16919 = opIn6627.style,
    opBind16920 = opIn6627.width;
  if (
    !(
      opBind16918 === undefined &&
      opBind16919 === undefined &&
      opBind16920 === undefined
    )
  )
    return {
      ...(opBind16918 === undefined
        ? {}
        : {
            fill: opBind16918,
          }),
      style: opBind16919 ?? "solid",
      ...(opBind16920 === undefined
        ? {}
        : {
            width: opBind16920,
          }),
    };
}
export function serializeShapeLine(props: LooseBag) {
  let opBind16921 = configFromToConfigable(props.fill),
    opBind16922 = props.style ?? "solid",
    opBind16923 = props.width;
  if (
    !(
      opBind16921 === undefined &&
      opBind16922 === undefined &&
      opBind16923 === undefined
    )
  )
    return {
      style: opBind16922,
      ...(opBind16921 === undefined
        ? {}
        : {
            fill: opBind16921,
          }),
      ...(opBind16923 === undefined
        ? {}
        : {
            width: opBind16923,
          }),
    };
}
export function configFromToConfigable(opIn6841: unknown) {
  if (
    !opIn6841 ||
    typeof opIn6841 != "object" ||
    !("toConfig" in opIn6841) ||
    typeof opIn6841.toConfig != "function"
  )
    return;
  let opBind17161 = opIn6841.toConfig();
  if (
    opBind17161 &&
    !(
      typeof opBind17161 == "object" &&
      opBind17161 &&
      "type" in opBind17161 &&
      opBind17161.type === "proto"
    )
  )
    return opBind17161;
}
