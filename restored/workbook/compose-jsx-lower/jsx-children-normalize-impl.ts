// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: JSX children normalize / flatten (legacy jOe/701/FOe).
// Stage-3 wave-137.

import {
  isPresentationJsxElement,
  paragraphsFromChildren,
} from "./semantic-tags-impl";
import { workbookHelper698 } from "./semantic-tag-sets-impl";

export function jOe(cjlIn6951: any) {
  return cjlIn6951 == null ||
    typeof cjlIn6951 == "boolean" ||
    typeof cjlIn6951 == "string" ||
    typeof cjlIn6951 == "number"
    ? true
    : !isPresentationJsxElement(cjlIn6951) || typeof cjlIn6951.type != "string"
      ? false
      : cjlIn6951.type === "paragraph" ||
        cjlIn6951.type === "run" ||
        workbookHelper698(cjlIn6951.type);
}
export function workbookHelper701(
  cjlIn14724: any,
  cjlIn14725: any,
  cjlIn14726: any,
) {
  return FOe(paragraphsFromChildren(cjlIn14724, cjlIn14725, cjlIn14726));
}
export function FOe(props: any) {
  if (props.length === 0) return "";
  if (props.length === 1) {
    let cjlBind20052 = props[0];
    return cjlBind20052 === undefined
      ? ""
      : Array.isArray(cjlBind20052) &&
          cjlBind20052.every((item) => typeof item == "string")
        ? cjlBind20052.join("")
        : cjlBind20052;
  }
  return props;
}
