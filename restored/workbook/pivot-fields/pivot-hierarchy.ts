// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotHierarchy VO (Binding359–360 / `$l`).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensurePivotFieldsCollectionInit,
  PivotFields,
} from "./pivot-hierarchies";
import { ensurePivotFieldInit, getPivotFieldProto } from "./pivot-field";

export function getPivotFieldFromHierarchy(pivotIn11027: any) {
  let pivotBind21557 = pivotHierarchyFieldByInstance.get(pivotIn11027);
  if (!pivotBind21557) throw Error("PivotHierarchy field not found");
  return pivotBind21557;
}
export function getPivotFieldProtoFromHierarchy(pivotIn15571: any) {
  return getPivotFieldProto(getPivotFieldFromHierarchy(pivotIn15571));
}
export let pivotHierarchyFieldByInstance: WeakMap<object, any>;
export let PivotHierarchy: any;
export const ensurePivotHierarchyInit = esmInit(() => {
  ensurePivotFieldsCollectionInit();
  ensurePivotFieldInit();
  pivotHierarchyFieldByInstance = new WeakMap();
  PivotHierarchy = class {
    #e;
    constructor(pivotIn12394) {
      pivotHierarchyFieldByInstance.set(this, pivotIn12394);
      this.#e = new PivotFields([pivotIn12394]);
    }
    get name() {
      return this.#t().name;
    }
    get fields() {
      return this.#e;
    }
    #t() {
      let pivotBind20759 = pivotHierarchyFieldByInstance.get(this);
      if (!pivotBind20759) throw Error("PivotHierarchy field not found");
      return pivotBind20759;
    }
  };
});
