// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paint mids (legacy Vye/Zye/awe/helper597).
// Stage-3 wave-129.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Vn as ensureSpreadsheetVn,
  d as CellDataType,
} from "../spreadsheet-protobuf";

export function clampCenteredLabelX(
  pmdIn7993: any,
  pmdIn7994: any,
  pmdIn7995: any,
  pmdIn7996: any,
  pmdIn7997: any,
) {
  let pmdBind18484 = pmdIn7993.measureText(pmdIn7994).width;
  if (
    !Number.isFinite(pmdBind18484) ||
    pmdBind18484 <= 0 ||
    pmdIn7997 <= pmdIn7996
  )
    return pmdIn7995;
  let pmdBind18485 = Math.min(pmdBind18484 / 2, (pmdIn7997 - pmdIn7996) / 2);
  return Math.min(
    Math.max(pmdIn7995, pmdIn7996 + pmdBind18485),
    pmdIn7997 - pmdBind18485,
  );
}
export function flattenCategoryPaths(pmdIn4624: any) {
  let pmdBind13897 = {
    name: "root",
    path: [],
    children: new Map(),
  };
  for (let pmdBind15726 of pmdIn4624) {
    let pmdBind16096 = pmdBind13897;
    pmdBind15726.path.forEach((item, index) => {
      let pmdBind17162 = pmdBind16096.children.get(item);
      pmdBind17162 ||
        ((pmdBind17162 = {
          name: item,
          path: pmdBind16096.path.concat(item),
          children: new Map(),
        }),
        pmdBind16096.children.set(item, pmdBind17162));
      pmdBind16096 = pmdBind17162;
      index === pmdBind15726.path.length - 1 &&
        (pmdBind16096.value = (pmdBind16096.value ?? 0) + pmdBind15726.value);
    });
  }
  return pmdBind13897;
}
export function checkboxHitTest({
  cell: any,
  isCheckbox: any,
  x: any,
  y: any,
  w: any,
  h: any,
  zoom,
}: any) {
  if (!isCheckbox) return null;
  let pmdBind12908 = Math.min(checkboxMaxSize, Math.max(0, Math.min(w, h)));
  if (pmdBind12908 <= 0) return null;
  let pmdBind12909 = x + (w - pmdBind12908) / 2,
    pmdBind12910 = y + (h - pmdBind12908) / 2;
  return {
    checked:
      cell.dataType === CellDataType.CELL_DATA_TYPE_BOOLEAN &&
      (cell.value === "1" || cell.value === "TRUE"),
    boxRect: {
      x: pmdBind12909,
      y: pmdBind12910,
      size: pmdBind12908,
    },
    cssBounds: {
      x: pmdBind12909 * zoom,
      y: pmdBind12910 * zoom,
      width: pmdBind12908 * zoom,
      height: pmdBind12908 * zoom,
    },
  };
}
export let checkboxMaxSize: number;
export let checkboxRadius: number;
export const ensureCheckboxHitTestInit = esmInit(() => {
  ensureSpreadsheetVn();
  checkboxMaxSize = 16;
  checkboxRadius = 2;
});
export function fillIconCircle(
  pmdIn5969: any,
  pmdIn5970: any,
  pmdIn5971: any,
  pmdIn5972: any,
) {
  let pmdBind15997 = pmdIn5970.x + pmdIn5970.width / 2,
    pmdBind15998 = pmdIn5970.y + pmdIn5970.height / 2,
    pmdBind15999 = Math.min(pmdIn5970.width, pmdIn5970.height) * 0.42;
  pmdIn5969.beginPath();
  pmdIn5969.arc(pmdBind15997, pmdBind15998, pmdBind15999, 0, Math.PI * 2);
  pmdIn5969.fillStyle = pmdIn5971;
  pmdIn5969.fill();
  pmdIn5969.lineWidth = Math.max(1, pmdBind15999 * 0.12);
  pmdIn5969.strokeStyle = pmdIn5972;
  pmdIn5969.stroke();
}

export const Vye = clampCenteredLabelX;
export const Zye = flattenCategoryPaths;
export const awe = checkboxHitTest;
export const workbookHelper597 = fillIconCircle;
export const cwe = ensureCheckboxHitTestInit;
