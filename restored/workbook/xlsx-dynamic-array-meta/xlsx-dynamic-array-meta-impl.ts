// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: annotate dynamic-array / LAMBDA cells + XLDAPR meta (legacy opt..bpt).
// Stage-3 wave-124. Owns preferred _pt nest.

import { replaceFormulaFunctionName } from "../formula-text-replace";
import { parseFormula } from "../formula";
import { exprContainsLambda } from "../formula-ast-remap";

/** Legacy Binding1952. */
const XLDAP_METADATA_NAME = "XLDAPR";
/** Legacy Binding1953. */
const DYNAMIC_ARRAY_EXTENSION_URI = "{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}";
/** Legacy Binding1954. */
const XLDAP_MIN_SUPPORTED_VERSION = 12e4;
/** Legacy xpt — FILTER/SORT/UNIQUE compatibility prefixes. */
const DYNAMIC_ARRAY_FN_PREFIXES = [
  { name: "FILTER", prefix: "_xlfn._xlws." },
  { name: "SORT", prefix: "_xlfn._xlws." },
  { name: "UNIQUE", prefix: "_xlfn." },
];
/** Legacy Spt — LAMBDA compatibility prefix. */
const LAMBDA_FN_PREFIXES = [{ name: "LAMBDA", prefix: "_xlfn." }];

export function annotateDynamicArrayCells(xdamIn2304: any) {
  let xdamBind9405 = [];
  for (let xdamBind10625 of xdamIn2304.proto.sheets ?? []) {
    let xdamBind10976 = xdamBind10625.name?.trim();
    if (xdamBind10976)
      for (let xdamBind11476 of xdamBind10625.rows ?? [])
        for (let xdamBind11924 of xdamBind11476.cells ?? []) {
          let xdamBind12333 = xdamBind11924.address?.trim().toUpperCase();
          if (!xdamBind12333) continue;
          let xdamBind12334 = xdamIn2304.makeCellKey(
              xdamBind10976,
              xdamBind12333,
            ),
            xdamBind12335 = xdamIn2304.getSpillProjection(xdamBind12334);
          if (xdamBind12335) {
            cellMatchesSpillProjection(xdamBind11924, xdamBind12335) &&
              xdamBind9405.push(xdamBind11924);
            continue;
          }
          cellHasLambdaFormula({
            cell: xdamBind11924,
            address: xdamBind12333,
            contextSheet: xdamBind10976,
            hasLambdaDefinedName: xdamIn2304.hasLambdaDefinedName,
            stripCompatibilityPrefixes: xdamIn2304.stripCompatibilityPrefixes,
          }) && xdamBind9405.push(xdamBind11924);
        }
  }
  if (xdamBind9405.length === 0) return;
  let xdamBind9406 = ensureXldapCellMetadataIndex(xdamIn2304.proto);
  for (let xdamBind23013 of xdamBind9405)
    xdamBind23013.cellMetadataIndex = xdamBind9406;
}
export function cellMatchesSpillProjection(xdamIn2515: any, xdamIn2516: any) {
  return xdamIn2516.isAnchor
    ? !xdamIn2515.formula || !xdamIn2515.formula.trim()
      ? false
      : ((xdamIn2515.formula = stripDynamicArrayFnPrefixes(xdamIn2515.formula)),
        (xdamIn2515.formulaType = p.CELL_FORMULA_TYPE_ARRAY),
        (xdamIn2515.formulaRef = formatA1Range({
          startRow: xdamIn2516.record.startRow,
          startCol: xdamIn2516.record.startCol,
          endRow:
            xdamIn2516.record.startRow +
            Math.max(0, xdamIn2516.record.rows - 1),
          endCol:
            xdamIn2516.record.startCol +
            Math.max(0, xdamIn2516.record.cols - 1),
        })),
        (xdamIn2515.formulaAlwaysCalculateArray = undefined),
        (xdamIn2515.sharedFormulaSi = undefined),
        true)
    : ((xdamIn2515.formula = undefined),
      (xdamIn2515.formulaType = undefined),
      (xdamIn2515.formulaRef = undefined),
      (xdamIn2515.formulaAlwaysCalculateArray = undefined),
      (xdamIn2515.sharedFormulaSi = undefined),
      false);
}
export function cellHasLambdaFormula(xdamIn3178: any) {
  return !xdamIn3178.cell.formula ||
    !xdamIn3178.cell.formula.trim() ||
    ((xdamIn3178.cell.formula = stripDynamicArrayFnPrefixes(
      xdamIn3178.cell.formula,
    )),
    !formulaExprContainsLambda({
      formula: xdamIn3178.cell.formula,
      contextSheet: xdamIn3178.contextSheet,
      hasLambdaDefinedName: xdamIn3178.hasLambdaDefinedName,
      stripCompatibilityPrefixes: xdamIn3178.stripCompatibilityPrefixes,
    }))
    ? false
    : ((xdamIn3178.cell.formula = stripLambdaFnPrefixes(
        xdamIn3178.cell.formula,
      )),
      (xdamIn3178.cell.formulaType = p.CELL_FORMULA_TYPE_ARRAY),
      (xdamIn3178.cell.formulaRef = xdamIn3178.address),
      (xdamIn3178.cell.formulaAlwaysCalculateArray = undefined),
      (xdamIn3178.cell.sharedFormulaSi = undefined),
      true);
}
export function formulaExprContainsLambda(xdamIn5117: any) {
  let xdamBind14610 = parseFormula(
    xdamIn5117.formula.trim().startsWith("=")
      ? xdamIn5117.formula.trim()
      : `=${xdamIn5117.formula.trim()}`,
  );
  return xdamBind14610.errors.length > 0
    ? false
    : exprContainsLambda({
        expr: xdamBind14610.expr,
        contextSheet: xdamIn5117.contextSheet,
        hasLambdaDefinedName: xdamIn5117.hasLambdaDefinedName,
        stripCompatibilityPrefixes: xdamIn5117.stripCompatibilityPrefixes,
      });
}
export function stripDynamicArrayFnPrefixes(xdamIn15529: any) {
  return replaceFormulaFnNameList(xdamIn15529, DYNAMIC_ARRAY_FN_PREFIXES);
}
export function stripLambdaFnPrefixes(xdamIn15530: any) {
  return replaceFormulaFnNameList(xdamIn15530, LAMBDA_FN_PREFIXES);
}
export function replaceFormulaFnNameList(xdamIn10821: any, xdamIn10822: any) {
  if (!xdamIn10821) return xdamIn10821;
  let xdamBind21343 = xdamIn10821;
  for (let xdamBind22952 of xdamIn10822)
    xdamBind21343 = replaceFormulaFunctionName(
      xdamBind21343,
      xdamBind22952.name,
      xdamBind22952.prefix,
    );
  return xdamBind21343;
}
export function ensureXldapCellMetadataIndex(xdamIn6491: any) {
  let xdamBind16683 = (xdamIn6491.metadata ??= createEmptyWorkbookMetadata()),
    xdamBind16684 = xdamBind16683.metadataTypes,
    xdamBind16685 = ensureXldapMetadataType(xdamBind16684),
    xdamBind16686 = xdamBind16683.futureMetadata;
  ensureDynamicArrayFutureMetadata(xdamBind16686);
  let xdamBind16687 = xdamBind16683.cellMetadata,
    xdamBind16688 = findXldapCellMetadataIndex(xdamBind16687, xdamBind16685);
  return xdamBind16688 > 0
    ? xdamBind16688
    : (xdamBind16687.push({
        blocks: [
          {
            entries: [
              {
                type: xdamBind16685,
                value: 0,
              },
            ],
          },
        ],
      }),
      xdamBind16687.length);
}
export function createEmptyWorkbookMetadata() {
  return {
    metadataTypes: [],
    futureMetadata: [],
    cellMetadata: [],
    valueMetadata: [],
  };
}
export function ensureXldapMetadataType(xdamIn1955: any) {
  let xdamBind8686 = xdamIn1955.findIndex(
    (item) => item.name?.trim().toUpperCase() === XLDAP_METADATA_NAME,
  );
  if (xdamBind8686 < 0)
    return (
      xdamIn1955.push({
        name: XLDAP_METADATA_NAME,
        minSupportedVersion: XLDAP_MIN_SUPPORTED_VERSION,
        copy: true,
        pasteAll: true,
        pasteValues: true,
        merge: true,
        splitFirst: true,
        rowColShift: true,
        clearFormats: true,
        clearComments: true,
        assign: true,
        coerce: true,
        cellMeta: true,
      }),
      (xdamBind8686 = xdamIn1955.length - 1),
      xdamBind8686 + 1
    );
  let xdamBind8687 = xdamIn1955[xdamBind8686];
  return xdamBind8687
    ? ((xdamBind8687.name = XLDAP_METADATA_NAME),
      (xdamBind8687.minSupportedVersion ??= XLDAP_MIN_SUPPORTED_VERSION),
      (xdamBind8687.copy = true),
      (xdamBind8687.pasteAll = true),
      (xdamBind8687.pasteValues = true),
      (xdamBind8687.merge = true),
      (xdamBind8687.splitFirst = true),
      (xdamBind8687.rowColShift = true),
      (xdamBind8687.clearFormats = true),
      (xdamBind8687.clearComments = true),
      (xdamBind8687.assign = true),
      (xdamBind8687.coerce = true),
      (xdamBind8687.cellMeta = true),
      xdamBind8686 + 1)
    : xdamBind8686 + 1;
}
export function ensureDynamicArrayFutureMetadata(xdamIn3673: any) {
  let xdamBind12288 = xdamIn3673.find(
    (item) => item.name?.trim().toUpperCase() === XLDAP_METADATA_NAME,
  );
  if (!xdamBind12288) {
    xdamBind12288 = {
      name: XLDAP_METADATA_NAME,
      count: 1,
      blocks: [createDynamicArrayExtensionUri()],
    };
    xdamIn3673.push(xdamBind12288);
    return;
  }
  xdamBind12288.name = XLDAP_METADATA_NAME;
  xdamBind12288.count = Math.max(1, xdamBind12288.count ?? 0);
  let xdamBind12289 = (xdamBind12288.blocks ??= []),
    xdamBind12290 = xdamBind12289.find(
      (item) =>
        item.extensionUri?.trim().toLowerCase() ===
        DYNAMIC_ARRAY_EXTENSION_URI.toLowerCase(),
    );
  if (!xdamBind12290) {
    xdamBind12290 = createDynamicArrayExtensionUri();
    xdamBind12289.push(xdamBind12290);
    return;
  }
  xdamBind12290.extensionUri = DYNAMIC_ARRAY_EXTENSION_URI;
  xdamBind12290.dynamicArrayProperties = {
    isDynamic: true,
    collapsed: false,
  };
}
export function createDynamicArrayExtensionUri() {
  return {
    extensionUri: DYNAMIC_ARRAY_EXTENSION_URI,
    dynamicArrayProperties: {
      isDynamic: true,
      collapsed: false,
    },
  };
}
export function findXldapCellMetadataIndex(xdamIn5445: any, xdamIn5446: any) {
  for (
    let xdamBind15953 = 0;
    xdamBind15953 < xdamIn5445.length;
    xdamBind15953 += 1
  ) {
    let xdamBind16854 = xdamIn5445[xdamBind15953];
    if (!xdamBind16854) continue;
    let xdamBind16855 = xdamBind16854.blocks ?? [];
    for (let xdamBind19039 of xdamBind16855) {
      let xdamBind19542 = xdamBind19039.entries ?? [];
      for (let xdamBind20915 of xdamBind19542) {
        let xdamBind21449 = xdamBind20915.type ?? 0,
          xdamBind21450 = xdamBind20915.value ?? 0;
        if (xdamBind21449 === xdamIn5446 && xdamBind21450 === 0)
          return xdamBind15953 + 1;
      }
    }
  }
  return 0;
}

/** Legacy aliases (wave-124). */
export const opt = annotateDynamicArrayCells;
export const spt = cellMatchesSpillProjection;
export const cpt = cellHasLambdaFormula;
export const lpt = formulaExprContainsLambda;
export const upt = stripDynamicArrayFnPrefixes;
export const dpt = stripLambdaFnPrefixes;
export const fpt = replaceFormulaFnNameList;
export const hpt = ensureXldapCellMetadataIndex;
export const gpt = createEmptyWorkbookMetadata;
export const _pt = ensureXldapMetadataType;
export const vpt = ensureDynamicArrayFutureMetadata;
export const ypt = createDynamicArrayExtensionUri;
export const bpt = findXldapCellMetadataIndex;
