// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (broadcastMatrix, readFormulasBlock, readValuesBlock, mapMatrix, probeMatrix).

import type { RangeOpsHost } from "./types";
import { formatA1Range } from "../../utils/spreadsheet-address-utils";
import { d } from "../spreadsheet-protobuf";

export function broadcastMatrix(
  host: RangeOpsHost,
  rngIn785: unknown,
  rngIn786: unknown,
  rngIn787: unknown,
) {
  if (!Array.isArray(rngIn785))
    throw Error(`Range.${rngIn787} expects a 2D array.`);
  if (rngIn785.length === 0 || !Array.isArray(rngIn785[0])) {
    let rngBind14273 = rngIn785;
    if ((rngIn786.rows === 1 && rngIn786.cols === 1) || rngIn786.rows === 1)
      return [rngBind14273];
    if (rngIn786.cols === 1) return rngBind14273.map((item) => [item]);
    let rngBind14274 = host.range.address || "range";
    throw Error(
      `Range.${rngIn787} expects a ${rngIn786.rows}x${rngIn786.cols} matrix for ${rngBind14274}, but you passed a 1D array. Use a 2D array like [[...], ...].`,
    );
  }
  let rngBind5373 = rngIn785,
    { rows, cols, ragged, colCounts } = host.probeMatrix(rngBind5373, rngIn787);
  if (
    !ragged &&
    rows === rngIn786.cols &&
    cols === rngIn786.rows &&
    (rngIn786.rows === 1 || rngIn786.cols === 1) &&
    (rows === 1 || cols === 1)
  ) {
    let rngBind17794 = [];
    for (let rngBind19930 = 0; rngBind19930 < cols; rngBind19930 += 1) {
      let rngBind20856 = [];
      for (let rngBind22916 = 0; rngBind22916 < rows; rngBind22916 += 1)
        rngBind20856.push(rngBind5373[rngBind22916]?.[rngBind19930]);
      rngBind17794.push(rngBind20856);
    }
    return rngBind17794;
  }
  if (ragged && rows === rngIn786.rows) {
    if (Math.max(0, ...colCounts) > rngIn786.cols) {
      let rngBind17648 = host.range.address || "range";
      throw Error(
        `Range.${rngIn787} expects a ${rngIn786.rows}x${rngIn786.cols} matrix for ${rngBind17648}, but one or more rows exceed the expected column count.`,
      );
    }
    let rngBind11242 = [];
    for (
      let rngBind17707 = 0;
      rngBind17707 < rngIn786.rows;
      rngBind17707 += 1
    ) {
      let rngBind18744 = rngBind5373[rngBind17707] ?? [],
        rngBind18745 = [];
      for (
        let rngBind22226 = 0;
        rngBind22226 < rngIn786.cols;
        rngBind22226 += 1
      )
        rngBind18745.push(
          rngBind22226 < rngBind18744.length
            ? rngBind18744[rngBind22226]
            : null,
        );
      rngBind11242.push(rngBind18745);
    }
    return rngBind11242;
  }
  return rngBind5373;
}

export function readFormulasBlock(host: RangeOpsHost, rngIn3247: unknown) {
  let rngBind11449 = rngIn3247.bounds;
  if (!rngBind11449) return [];
  let rngBind11450 = Math.max(1, rngIn3247.sampleLimit ?? 3),
    rngBind11451 = rngBind11449.startRow + rngBind11449.rows - 1,
    rngBind11452 = rngBind11449.startCol + rngBind11449.cols - 1,
    rngBind11453 = [];
  for (
    let rngBind15827 = rngBind11449.startRow;
    rngBind15827 <= rngBind11451;
    rngBind15827 += 1
  )
    for (
      let rngBind17097 = rngBind11449.startCol;
      rngBind17097 <= rngBind11452;
      rngBind17097 += 1
    )
      if (
        host.copyCellStyle(rngIn3247.worksheet, rngBind15827, rngBind17097) &&
        (rngBind11453.push(
          formatA1Range({
            startRow: rngBind15827,
            startCol: rngBind17097,
            endRow: rngBind15827,
            endCol: rngBind17097,
          }),
        ),
        rngBind11453.length >= rngBind11450)
      )
        return rngBind11453;
  return rngBind11453;
}

export function readValuesBlock(host: RangeOpsHost, rngIn2856: unknown) {
  let rngBind10648 = Math.max(1, rngIn2856.sampleLimit ?? 3),
    { startRow, startCol, rows, cols } = rngIn2856.bounds,
    rngBind10649 = startRow + rows - 1,
    rngBind10650 = startCol + cols - 1,
    rngBind10651 = startRow + rngIn2856.spillRows - 1,
    rngBind10652 = startCol + rngIn2856.spillCols - 1,
    rngBind10653 = [];
  for (
    let rngBind15406 = startRow;
    rngBind15406 <= rngBind10651;
    rngBind15406 += 1
  )
    for (
      let rngBind16340 = startCol;
      rngBind16340 <= rngBind10652;
      rngBind16340 += 1
    )
      if (
        !(rngBind15406 <= rngBind10649 && rngBind16340 <= rngBind10650) &&
        host.copyCellStyle(rngIn2856.worksheet, rngBind15406, rngBind16340) &&
        (rngBind10653.push(
          formatA1Range({
            startRow: rngBind15406,
            startCol: rngBind16340,
            endRow: rngBind15406,
            endCol: rngBind16340,
          }),
        ),
        rngBind10653.length >= rngBind10648)
      )
        return rngBind10653;
  return rngBind10653;
}

export function mapMatrix(
  host: RangeOpsHost,
  rngIn1333: unknown,
  rngIn1334: unknown,
  rngIn1335: unknown,
) {
  let { rows, cols, ragged, colCounts } = host.probeMatrix(
      rngIn1333,
      rngIn1335,
    ),
    rngBind7046 = rngIn1334.rows,
    rngBind7047 = rngIn1334.cols;
  if (rows !== rngBind7046 || ragged || cols !== rngBind7047) {
    let rngBind8095 = host.range.address || "range",
      rngBind8096 = ragged ? ` (ragged rows: ${colCounts.join(", ")})` : "",
      rngBind8097 =
        !ragged &&
        rows === rngBind7047 &&
        cols === rngBind7046 &&
        (rngBind7046 === 1 || rngBind7047 === 1) &&
        (rows === 1 || cols === 1)
          ? " Input looks transposed; pass a row-shaped matrix like [[...]] or a 1D array for single-row/single-column ranges."
          : "",
      rngBind8098 =
        !ragged && rows > 0 && cols > 0
          ? (() => {
              let rngBind16601 = host.isBlankCell(rngIn1334),
                rngBind16602 = host.clearCellAt(rngIn1334, rows, cols);
              return !rngBind16602 || rngBind16602 === rngBind8095
                ? ""
                : ` To write this ${rows}x${cols} matrix starting at ${rngBind16601}, use ${rngBind16602}.`;
            })()
          : "";
    throw Error(
      `Range.${rngIn1335} expects a ${rngBind7046}x${rngBind7047} matrix for ${rngBind8095}, got ${rows}x${cols}${rngBind8096}.${rngBind8097}${rngBind8098}`,
    );
  }
}

export function probeMatrix(
  host: RangeOpsHost,
  rngIn3097: unknown,
  rngIn3098: unknown,
) {
  if (!Array.isArray(rngIn3097))
    throw Error(`Range.${rngIn3098} expects a 2D array.`);
  let rngBind11187 = [];
  for (
    let rngBind16927 = 0;
    rngBind16927 < rngIn3097.length;
    rngBind16927 += 1
  ) {
    let rngBind17939 = rngIn3097[rngBind16927];
    if (!Array.isArray(rngBind17939))
      throw Error(
        `Range.${rngIn3098} expects a 2D array; row ${rngBind16927 + 1} is not an array.`,
      );
    rngBind11187.push(rngBind17939.length);
  }
  let rngBind11188 = rngIn3097.length,
    rngBind11189 = rngBind11187[0] ?? 0;
  return {
    rows: rngBind11188,
    cols: rngBind11189,
    ragged: rngBind11187.some((item) => item !== rngBind11189),
    colCounts: rngBind11187,
  };
}
