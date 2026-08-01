// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet sheet/view/awareness state (legacy qht/Kht).
// Stage-3 wave-148.

import { esmInit } from "../../runtime/rolldown-runtime";

export class Kht {
  #e = new Map();
  #t = new Map();
  #n = [];
  #r = [];
  activeSheetName;
  dialog = null;
  clipboard = null;
  showFormulas = false;
  missingActions = [];
  constructor(svsIn12039 = {}) {
    this.activeSheetName = svsIn12039.activeSheetName ?? null;
  }
  getSheetState(svsIn9756) {
    let svsBind20290 = this.#e.get(svsIn9756);
    if (svsBind20290) return svsBind20290;
    let svsBind20291 = this.#i(svsIn9756);
    return (this.#e.set(svsIn9756, svsBind20291), svsBind20291);
  }
  setActiveSheetName(svsIn13455) {
    this.activeSheetName = svsIn13455;
  }
  renameSheet(svsIn2149, svsIn2150) {
    let svsBind9109 = svsIn2149?.trim(),
      svsBind9110 = svsIn2150?.trim();
    if (!svsBind9109 || !svsBind9110 || svsBind9109 === svsBind9110) return;
    this.activeSheetName === svsBind9109 &&
      (this.activeSheetName = svsBind9110);
    this.dialog?.args &&
      this.dialog.args.sheetName === svsBind9109 &&
      (this.dialog = {
        ...this.dialog,
        args: {
          ...this.dialog.args,
          sheetName: svsBind9110,
        },
      });
    this.clipboard?.source.sheetName === svsBind9109 &&
      (this.clipboard = {
        ...this.clipboard,
        source: {
          ...this.clipboard.source,
          sheetName: svsBind9110,
        },
      });
    let svsBind9111 = this.#e.get(svsBind9109);
    svsBind9111 &&
      ((svsBind9111.sheetName = svsBind9110),
      this.#e.delete(svsBind9109),
      this.#e.set(svsBind9110, svsBind9111));
    for (let svsBind21553 of this.#t.values())
      for (let svsBind22609 of svsBind21553.selections)
        svsBind22609.sheetName === svsBind9109 &&
          (svsBind22609.sheetName = svsBind9110);
  }
  forgetSheet(svsIn2884) {
    let svsBind10729 = svsIn2884?.trim();
    if (svsBind10729) {
      this.activeSheetName === svsBind10729 && (this.activeSheetName = null);
      this.dialog?.args &&
        this.dialog.args.sheetName === svsBind10729 &&
        (this.dialog = null);
      this.clipboard?.source.sheetName === svsBind10729 &&
        (this.clipboard = null);
      this.#e.delete(svsBind10729);
      for (let [svsBind17279, svsBind17280] of this.#t.entries()) {
        let svsBind18324 = svsBind17280.selections.filter(
          (item) => item.sheetName !== svsBind10729,
        );
        if (svsBind18324.length === 0) {
          this.#t.delete(svsBind17279);
          continue;
        }
        svsBind17280.selections = svsBind18324;
      }
    }
  }
  setDialog(svsIn15170) {
    this.dialog = svsIn15170;
  }
  setPresenceSelections(svsIn6417, svsIn6418, svsIn6419 = {}) {
    if (!svsIn6417) throw Error("Presence id is required.");
    let svsBind16596 = this.#t.get(svsIn6417),
      svsBind16597 = svsIn6419.kind ?? svsBind16596?.kind ?? "collaborator",
      svsBind16598 = svsIn6418.map((item) => $7(item));
    this.#t.set(svsIn6417, {
      id: svsIn6417,
      kind: svsBind16597,
      selections: svsBind16598,
    });
  }
  clearPresenceSelections(svsIn3536, svsIn3537 = {}) {
    if (!svsIn3536) throw Error("Presence id is required.");
    let svsBind12005 = this.#t.get(svsIn3536);
    if (!svsBind12005) return;
    if (!svsIn3537.sheetName) {
      this.#t.delete(svsIn3536);
      return;
    }
    let svsBind12006 = svsBind12005.selections.filter(
      (item) => item.sheetName !== svsIn3537.sheetName,
    );
    if (svsBind12006.length === 0) {
      this.#t.delete(svsIn3536);
      return;
    }
    this.#t.set(svsIn3536, {
      id: svsBind12005.id,
      kind: svsBind12005.kind,
      selections: svsBind12006.map((item) => $7(item)),
    });
  }
  getSelectionsForSheet(svsIn6960) {
    let svsBind17315 = [];
    for (let svsBind19693 of this.#t.values())
      for (let svsBind20943 of svsBind19693.selections)
        svsBind20943.sheetName === svsIn6960 &&
          svsBind17315.push({
            presenceId: svsBind19693.id,
            kind: svsBind19693.kind,
            ...$7(svsBind20943),
          });
    return svsBind17315;
  }
  recordMissingAction(svsIn13137) {
    this.missingActions.push(svsIn13137);
  }
  pushUndoEntry(svsIn13138) {
    this.#n.push(svsIn13138);
    this.#r = [];
  }
  popUndoEntry() {
    return this.#n.pop() ?? null;
  }
  pushRedoEntry(svsIn14769) {
    this.#r.push(svsIn14769);
  }
  popRedoEntry() {
    return this.#r.pop() ?? null;
  }
  clearHistory() {
    this.#n = [];
    this.#r = [];
  }
  #i(svsIn3270) {
    let svsBind11509 = {
        row: 0,
        col: 0,
      },
      svsBind11510 = {
        r1: 0,
        c1: 0,
        r2: 0,
        c2: 0,
      };
    return {
      sheetName: svsIn3270,
      mode: "grid",
      activeCell: {
        ...svsBind11509,
      },
      anchorCell: {
        ...svsBind11509,
      },
      selection: {
        ...svsBind11510,
      },
      selectionRanges: [
        {
          ...svsBind11510,
        },
      ],
      activeRangeIndex: 0,
      extendSelection: false,
      selectAllStage: 0,
      selectionCornerIndex: 0,
      selectionVisibility: "all",
      editBuffer: null,
      scroll: {
        row: 0,
        col: 0,
      },
      copyOutline: null,
    };
  }
}

export const qht = esmInit(() => {});

export function getSpreadsheetViewStateClass(): typeof Kht {
  qht();
  return Kht;
}

export const ensureSpreadsheetViewStateInit = qht;
