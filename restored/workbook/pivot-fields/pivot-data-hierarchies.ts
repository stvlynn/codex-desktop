// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotDataHierarchies VO (Binding361 / ure).
import { esmInit } from "../../runtime/rolldown-runtime";
import { j as spreadsheetJ } from "../spreadsheet-protobuf";
import { ensurePivotHierarchyClusterInit } from "./pivot-hierarchies";
import { ensurePivotDataFieldInit, PivotDataField } from "./pivot-data-field";
import { ensurePivotHierarchyInit } from "./pivot-hierarchy";
import { getPivotFieldProtoFromHierarchy } from "./pivot-hierarchy";
import { setDataFieldSubtotal } from "./pivot-data-field-helpers";
import { refreshPivotTableLayout } from "./refresh-pivot-layout";

export let PivotDataHierarchies: any;
export const ensurePivotDataHierarchiesInit = esmInit(() => {
  ensurePivotHierarchyClusterInit();
  ensurePivotDataFieldInit();
  ensurePivotHierarchyInit();
  PivotDataHierarchies = class {
    #e;
    #t;
    constructor(pivotIn11783) {
      this.#e = pivotIn11783.pivotTable;
      this.#t = pivotIn11783.items ?? [];
    }
    add(pivotIn3304) {
      let pivotBind11585 = this.#e._ensureHierarchyIndex(pivotIn3304),
        pivotBind11586 = getPivotFieldProtoFromHierarchy(pivotIn3304),
        pivotBind11587 = {
          field: pivotBind11585,
          name: this.#n(pivotIn3304),
          subtotal: undefined,
          numberFormatId: pivotBind11586.numberFormatId,
          showAs: undefined,
          baseField: undefined,
          baseItem: undefined,
        };
      setDataFieldSubtotal(
        pivotBind11587,
        spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM,
      );
      this.#e.__addDataFieldProto(pivotBind11587);
      let pivotBind11588 = new PivotDataField(pivotBind11587, {
        pivotTable: this.#e,
      });
      return (
        this.#t.push(pivotBind11588),
        refreshPivotTableLayout(this.#e),
        pivotBind11588
      );
    }
    getItem(pivotIn9300) {
      let pivotBind19867 = this.#t.find((item) => item.name === pivotIn9300);
      if (!pivotBind19867)
        throw Error(`PivotDataHierarchy ${pivotIn9300} not found`);
      return pivotBind19867;
    }
    load(pivotIn15332) {
      return this;
    }
    get items() {
      return [...this.#t];
    }
    #n(pivotIn13033) {
      return `Sum of ${getPivotFieldProtoFromHierarchy(pivotIn13033).name ?? "Values"}`;
    }
  };
});
