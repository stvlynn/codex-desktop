// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotHierarchies / Fields / DataFields collections.
import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ensurePivotFieldEnumsInit } from "./pivot-field-enums";
import { ensurePivotShowAsInit } from "./pivot-show-as";
import { ensurePivotDataFieldInit } from "./pivot-data-field";
import { refreshPivotTableLayout } from "./refresh-pivot-layout";

export const ensurePivotHierarchyClusterInit = esmInit(() => {
  spreadsheetVn();
  ensurePivotFieldEnumsInit();
  initAddressUtils();
  ensurePivotDataFieldInit();
  ensurePivotShowAsInit();
});
export let PivotHierarchies: any;
export const ensurePivotHierarchiesInit = esmInit(() => {
  ensurePivotHierarchyClusterInit();
  PivotHierarchies = class {
    #e;
    #t;
    #n;
    constructor(pivotIn11119) {
      this.#e = pivotIn11119.pivotTable;
      this.#t = pivotIn11119.kind;
      this.#n = pivotIn11119.source;
    }
    add(pivotIn8228) {
      if (this.#t === "all")
        throw Error("Cannot add hierarchies to the master collection");
      return (
        this.#e._assignHierarchy(this.#t, pivotIn8228),
        refreshPivotTableLayout(this.#e),
        pivotIn8228
      );
    }
    getItem(pivotIn9338) {
      let pivotBind19897 = this.items.find((item) => item.name === pivotIn9338);
      if (!pivotBind19897)
        throw Error(`PivotHierarchy ${pivotIn9338} not found`);
      return pivotBind19897;
    }
    getItemOrNullObject(pivotIn11509) {
      return this.items.find((item) => item.name === pivotIn11509) ?? null;
    }
    load(pivotIn15329) {
      return this;
    }
    get items() {
      return this.#t === "all" && this.#n
        ? [...this.#n]
        : this.#e._getHierarchies(this.#t);
    }
  };
});
export let PivotFields: any;
export const ensurePivotFieldsCollectionInit = esmInit(() => {
  PivotFields = class {
    #e;
    constructor(pivotIn14779 = []) {
      this.#e = pivotIn14779;
    }
    getItem(pivotIn9811) {
      let pivotBind20352 = this.#e.find((item) => item.name === pivotIn9811);
      if (!pivotBind20352) throw Error(`PivotField ${pivotIn9811} not found`);
      return pivotBind20352;
    }
    get items() {
      return [...this.#e];
    }
    _replace(pivotIn15330) {
      this.#e = pivotIn15330;
    }
  };
});
export let PivotDataFields: any;
export const ensurePivotDataFieldsCollectionInit = esmInit(() => {
  PivotDataFields = class {
    #e;
    constructor(pivotIn14780 = []) {
      this.#e = pivotIn14780;
    }
    getItem(pivotIn9840) {
      let pivotBind20383 = this.#e.find((item) => item.name === pivotIn9840);
      if (!pivotBind20383) throw Error(`PivotItem ${pivotIn9840} not found`);
      return pivotBind20383;
    }
    get items() {
      return [...this.#e];
    }
    _replace(pivotIn15331) {
      this.#e = pivotIn15331;
    }
  };
});
