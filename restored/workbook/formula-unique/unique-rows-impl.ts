// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: UNIQUE by rows (legacy Dst). Stage-3 wave-127.

import { columnFingerprintKey } from "./formula-unique-impl";

export function uniqueRows(furIn4883: any, furIn4884: any) {
  let furBind14299 = new Map(),
    furBind14300 = [];
  for (let furBind20283 of furIn4883) {
    let furBind20786 = [...furBind20283],
      furBind20787 = columnFingerprintKey(furBind20786),
      furBind20788 = furBind14299.get(furBind20787);
    furBind20788
      ? (furBind20788.count += 1)
      : (furBind14299.set(furBind20787, {
          row: furBind20786,
          count: 1,
        }),
        furBind14300.push(furBind20787));
  }
  let furBind14301 = [];
  for (let furBind21604 of furBind14300) {
    let furBind22159 = furBind14299.get(furBind21604);
    furBind22159 &&
      (furIn4884
        ? furBind22159.count === 1 && furBind14301.push(furBind22159.row)
        : furBind14301.push(furBind22159.row));
  }
  return furBind14301.length === 0 && furIn4883.length > 0
    ? [[null]]
    : furBind14301;
}

export const Dst = uniqueRows;
