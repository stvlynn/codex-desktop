// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sheet structure collab activator (legacy Binding832 / aye).
// Stage-3 wave-144. Hook name getTableStyleClass is legacy misnomer.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSchemaMetaInit, Yve } from "../schema-meta";
import {
  workbookBinding824,
  workbookBinding825,
  workbookBinding826,
  workbookBinding827,
  workbookBinding828,
  workbookBinding829,
  workbookBinding830,
  workbookBinding831,
  Zve,
  Qve,
  $ve,
  eye,
  tye,
  nye,
  rye,
  iye,
} from "./sheet-structure-collab-impl";

export class workbookBinding832 {
  #e;
  constructor(sscIn480) {
    this.#e = [
      new workbookBinding827({
        root: sscIn480.root,
        prefix: "sheetStructure",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readStructure: sscIn480.readStructure,
        applyStructure: sscIn480.applyStructure,
      }),
      new workbookBinding828({
        root: sscIn480.root,
        prefix: "conditionalFormatting",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readConditionalFormattings: sscIn480.readConditionalFormattings,
        applyConditionalFormattings: sscIn480.applyConditionalFormattings,
      }),
      new workbookBinding829({
        root: sscIn480.root,
        prefix: "dataValidations",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readDataValidations: sscIn480.readDataValidations,
        applyDataValidations: sscIn480.applyDataValidations,
      }),
      new workbookBinding826({
        root: sscIn480.root,
        prefix: "tables",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readTables: sscIn480.readTables,
        applyTables: sscIn480.applyTables,
      }),
      new workbookBinding824({
        root: sscIn480.root,
        prefix: "pivotTables",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readPivotTables: sscIn480.readPivotTables,
        applyPivotTables: sscIn480.applyPivotTables,
      }),
      new workbookBinding825({
        root: sscIn480.root,
        prefix: "slicers",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readSlicers: sscIn480.readSlicers,
        applySlicers: sscIn480.applySlicers,
      }),
      new workbookBinding831({
        root: sscIn480.root,
        prefix: "sparklineGroups",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readSparklineGroups: sscIn480.readSparklineGroups,
        applySparklineGroups: sscIn480.applySparklineGroups,
      }),
      new workbookBinding830({
        root: sscIn480.root,
        prefix: "drawings",
        runLocalTransaction: sscIn480.runLocalTransaction,
        getCollabOrigins: sscIn480.getCollabOrigins,
        readDrawings: sscIn480.readDrawings,
        applyDrawings: sscIn480.applyDrawings,
      }),
    ];
  }
  activate(sscIn9817) {
    Yve({
      root: sscIn9817.root,
      runLocalTransaction: sscIn9817.runLocalTransaction,
    });
    for (let sscBind23046 of this.#e) sscBind23046.activate();
  }
  dispose() {
    for (let sscBind23054 of this.#e) sscBind23054.dispose();
  }
  flushFromOwner() {
    for (let sscBind22997 of this.#e) sscBind22997.flushFromOwner();
  }
}

export const aye = esmInit(() => {
  Zve();
  Qve();
  $ve();
  ensureSchemaMetaInit();
  eye();
  tye();
  nye();
  rye();
  iye();
});

export function getSheetStructureCollabClass(): typeof workbookBinding832 {
  aye();
  return workbookBinding832;
}

export const getTableStyleClass = getSheetStructureCollabClass;
export const ensureAye = aye;
