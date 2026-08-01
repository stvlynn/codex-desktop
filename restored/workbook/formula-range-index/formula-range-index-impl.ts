// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula address column/row index (Uft/Wft) + spill
// projection cache (Gft/Kft). Stage-3 wave-120. Legacy resolveAddressOptions..Kft.

import { esmInit } from "../../runtime/rolldown-runtime";

export function resolveAddressOptions(props: any) {
  return {
    fallbackSheet: props.fallbackSheet ?? "",
    activeCellAddress: props.activeCellAddress,
  };
}
export var Uft,
  Wft = esmInit(() => {
    Uft = class {
      #e;
      constructor(friIn15242) {
        this.#e = friIn15242;
      }
      getColumnIndex(friIn1715, friIn1716 = {}) {
        switch (friIn1715.kind) {
          case "Cell":
            return friIn1715.addr.col;
          case "Range":
            return Math.min(friIn1715.start.col, friIn1715.end.col);
          case "WholeColumn":
            return friIn1715.col;
          case "ColumnRange":
            return Math.min(friIn1715.startCol, friIn1715.endCol);
          case "Spill":
            return this.getColumnIndex(friIn1715.base, friIn1716);
          case "Structured": {
            let friBind18711 = this.#e.structuredReferences.resolveArea(
              friIn1715.reference,
              resolveAddressOptions(friIn1716),
            );
            return friBind18711.kind === "Error"
              ? null
              : friBind18711.area.startCol;
          }
          case "Named": {
            let friBind17197 = friIn1716.fallbackSheet ?? "";
            return (
              this.#e.expandRange(
                friIn1715,
                friIn1715.sheet?.sheetName ?? friBind17197,
                friIn1716.activeCellAddress,
              )[0]?.col ?? null
            );
          }
          default:
            return null;
        }
      }
      getSheetName(friIn1230, friIn1231 = {}) {
        switch (friIn1230.kind) {
          case "Cell":
            return (
              friIn1230.addr.sheet?.sheetName ?? friIn1231.fallbackSheet ?? null
            );
          case "Range":
            return (
              friIn1230.start.sheet?.sheetName ??
              friIn1230.end.sheet?.sheetName ??
              friIn1231.fallbackSheet ??
              null
            );
          case "WholeColumn":
          case "ColumnRange":
          case "WholeRow":
            return (
              friIn1230.sheet?.sheetName ?? friIn1231.fallbackSheet ?? null
            );
          case "Spill":
            return this.getSheetName(friIn1230.base, friIn1231);
          case "Structured": {
            let friBind18675 = this.#e.structuredReferences.resolveArea(
              friIn1230.reference,
              resolveAddressOptions(friIn1231),
            );
            return friBind18675.kind === "Error"
              ? null
              : friBind18675.area.sheetName;
          }
          case "Named": {
            if (friIn1230.sheet?.sheetName) return friIn1230.sheet.sheetName;
            let friBind15935 = friIn1231.fallbackSheet ?? "";
            return (
              this.#e.expandRange(
                friIn1230,
                friBind15935,
                friIn1231.activeCellAddress,
              )[0]?.sheet?.sheetName ??
              friIn1231.fallbackSheet ??
              null
            );
          }
          default:
            return friIn1231.fallbackSheet ?? null;
        }
      }
      getSheetSpan(friIn1138, friIn1139 = {}) {
        switch (friIn1138.kind) {
          case "Range": {
            let friBind17974 =
                friIn1138.start.sheet?.sheetName ??
                friIn1139.fallbackSheet ??
                null,
              friBind17975 =
                friIn1138.end.sheet?.sheetName ??
                friBind17974 ??
                friIn1139.fallbackSheet ??
                null;
            return friBind17974
              ? {
                  startSheet: friBind17974,
                  endSheet: friBind17975 ?? friBind17974,
                }
              : null;
          }
          case "Spill":
            return this.getSheetSpan(friIn1138.base, friIn1139);
          case "Structured": {
            let friBind18214 = this.#e.structuredReferences.resolveArea(
              friIn1138.reference,
              resolveAddressOptions(friIn1139),
            );
            return friBind18214.kind === "Error"
              ? null
              : {
                  startSheet: friBind18214.area.sheetName,
                };
          }
          case "Named": {
            let friBind20913 =
              friIn1138.sheet?.sheetName ??
              this.getSheetName(friIn1138, friIn1139);
            return friBind20913
              ? {
                  startSheet: friBind20913,
                }
              : null;
          }
          case "Cell": {
            let friBind20755 =
              friIn1138.addr.sheet?.sheetName ??
              friIn1139.fallbackSheet ??
              null;
            return friBind20755
              ? {
                  startSheet: friBind20755,
                }
              : null;
          }
          case "WholeColumn":
          case "ColumnRange":
          case "WholeRow": {
            let friBind20914 =
              friIn1138.sheet?.sheetName ?? friIn1139.fallbackSheet ?? null;
            return friBind20914
              ? {
                  startSheet: friBind20914,
                }
              : null;
          }
          default:
            return friIn1139.fallbackSheet
              ? {
                  startSheet: friIn1139.fallbackSheet,
                }
              : null;
        }
      }
      isSingleCell(friIn3343, friIn3344) {
        switch (friIn3343.kind) {
          case "Cell":
            return true;
          case "Spill":
            return this.isSingleCell(friIn3343.base, friIn3344);
          case "Structured": {
            let friBind16071 = this.#e.structuredReferences.resolveArea(
              friIn3343.reference,
              resolveAddressOptions(friIn3344),
            );
            return friBind16071.kind === "Error"
              ? false
              : friBind16071.area.startRow === friBind16071.area.endRow &&
                  friBind16071.area.startCol === friBind16071.area.endCol;
          }
          default:
            return false;
        }
      }
      referencesBlankCell(friIn3523, friIn3524) {
        switch (friIn3523.kind) {
          case "Cell":
            return this.#e.cellAddressIsBlank(
              friIn3523.addr,
              friIn3524.fallbackSheet ?? "",
            );
          case "Spill":
            return this.referencesBlankCell(friIn3523.base, friIn3524);
          case "Structured": {
            let friBind18676 = this.#e.structuredReferences.expand(
              friIn3523.reference,
              resolveAddressOptions(friIn3524),
            )[0];
            return friBind18676
              ? this.#e.cellAddressIsBlank(
                  friBind18676,
                  friIn3524.fallbackSheet ?? "",
                )
              : false;
          }
          default:
            return false;
        }
      }
    };
  }),
  Gft,
  Kft = esmInit(() => {
    Gft = class {
      #e = new Map();
      #t = new Map();
      setRecord(friIn3765, friIn3766) {
        this.clear(friIn3765.anchorKey);
        this.#e.set(friIn3765.anchorKey, {
          record: friIn3765,
          cellKeys: friIn3766,
        });
        for (
          let friBind14801 = 0;
          friBind14801 < friIn3766.length;
          friBind14801 += 1
        ) {
          let friBind15593 = friIn3766[friBind14801];
          if (friBind15593)
            for (
              let friBind17111 = 0;
              friBind17111 < friBind15593.length;
              friBind17111 += 1
            ) {
              let friBind18160 = friBind15593[friBind17111];
              friBind18160 &&
                this.#t.set(friBind18160, {
                  anchorKey: friIn3765.anchorKey,
                  rowOffset: friBind14801,
                  colOffset: friBind17111,
                });
            }
        }
      }
      clear(friIn8018) {
        let friBind18508 = this.#e.get(friIn8018);
        if (!friBind18508) return null;
        this.#e.delete(friIn8018);
        for (let friBind22630 of friBind18508.cellKeys)
          for (let friBind23019 of friBind22630)
            friBind23019 && this.#t.delete(friBind23019);
        return friBind18508.cellKeys;
      }
      getRecord(friIn11884) {
        let friBind22160 = this.#e.get(friIn11884);
        return friBind22160 ? friBind22160.record : null;
      }
      getCellProjection(friIn5179) {
        let friBind14682 = this.#t.get(friIn5179);
        if (!friBind14682) return null;
        let friBind14683 = this.#e.get(friBind14682.anchorKey);
        return friBind14683
          ? {
              record: friBind14683.record,
              isAnchor:
                friBind14682.rowOffset === 0 && friBind14682.colOffset === 0,
              rowOffset: friBind14682.rowOffset,
              colOffset: friBind14682.colOffset,
            }
          : null;
      }
    };
  });
