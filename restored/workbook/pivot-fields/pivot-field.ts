// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotField VO (Binding356–358).
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensurePivotItemInit, PivotItem } from "./pivot-item";
import {
  ensurePivotDataFieldsCollectionInit,
  PivotDataFields,
} from "./pivot-hierarchies";

export function getPivotFieldProto(pivotIn11150: any) {
  let pivotBind21635 = pivotFieldProtoByInstance.get(pivotIn11150);
  if (!pivotBind21635) throw Error("PivotField proto not found");
  return pivotBind21635;
}
export let pivotFieldProtoByInstance: WeakMap<object, any>;
export let PivotField: any;
export const ensurePivotFieldInit = esmInit(() => {
  ensurePivotItemInit();
  ensurePivotDataFieldsCollectionInit();
  pivotFieldProtoByInstance = new WeakMap();
  PivotField = class {
    #e;
    #t;
    constructor(pivotIn11889, pivotIn11890 = {}) {
      pivotFieldProtoByInstance.set(this, pivotIn11889);
      this.#e = pivotIn11890.pivotTable;
    }
    get name() {
      return this.#n().name ?? "";
    }
    get numberFormatId() {
      return this.#n().numberFormatId ?? undefined;
    }
    set numberFormatId(pivotIn12862) {
      this.#n().numberFormatId = pivotIn12862;
    }
    get showAll() {
      return this.#n().showAll !== false;
    }
    set showAll(pivotIn13921) {
      this.#n().showAll = pivotIn13921;
    }
    get items() {
      if (!this.#t) {
        let pivotBind15007 = this.#n(),
          pivotBind15008 =
            pivotBind15007.index == null
              ? []
              : (this.#e?.cache.fields[pivotBind15007.index]?.sharedItems
                  ?.values ?? []),
          pivotBind15009 = pivotBind15007.items.map(
            (item) =>
              new PivotItem(
                item,
                item.index == null ? undefined : pivotBind15008[item.index],
              ),
          );
        this.#t = new PivotDataFields(pivotBind15009);
      }
      return this.#t;
    }
    get pivotTable() {
      return this.#e;
    }
    applyFilter(pivotIn9059) {
      if (!this.#e) throw Error("PivotField is not attached to a PivotTable");
      this.#e.__applyFilterForField(this, pivotIn9059);
    }
    clearAllFilters() {
      this.#e && this.#e.__clearAllFiltersForField(this);
    }
    #n() {
      let pivotBind20879 = pivotFieldProtoByInstance.get(this);
      if (!pivotBind20879) throw Error("PivotField proto not found");
      return pivotBind20879;
    }
    __ensureIndex(pivotIn6523) {
      let pivotBind16738 = this.#n();
      if (pivotBind16738.index != null) return pivotBind16738.index;
      let pivotBind16739 = pivotIn6523.indexOf(pivotBind16738);
      if (pivotBind16739 === -1)
        throw Error("PivotField proto not registered with PivotTable");
      return ((pivotBind16738.index = pivotBind16739), pivotBind16739);
    }
  };
});
