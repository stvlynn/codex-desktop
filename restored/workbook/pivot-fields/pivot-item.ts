// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotItem VO (Binding343–345 / `_l`).
import { esmInit } from "../../runtime/rolldown-runtime";

export function getPivotItemProto(pivotIn11222: any) {
  let pivotBind21697 = pivotItemProtoByInstance.get(pivotIn11222);
  if (!pivotBind21697) throw Error("PivotItem proto not found");
  return pivotBind21697;
}
export let pivotItemProtoByInstance: WeakMap<object, any>;
export let pivotItemCaptionByInstance: WeakMap<object, any>;
export let PivotItem: any;
export const ensurePivotItemInit = esmInit(() => {
  pivotItemProtoByInstance = new WeakMap();
  pivotItemCaptionByInstance = new WeakMap();
  PivotItem = class {
    constructor(pivotIn11779, pivotIn11780) {
      pivotItemProtoByInstance.set(this, pivotIn11779);
      pivotIn11780 !== undefined &&
        pivotItemCaptionByInstance.set(this, pivotIn11780);
    }
    get name() {
      let pivotBind15287 = this.#e();
      if (pivotBind15287.name && pivotBind15287.name.length > 0)
        return pivotBind15287.name;
      let pivotBind15288 = pivotItemCaptionByInstance.get(this);
      return pivotBind15288 && pivotBind15288.length > 0
        ? pivotBind15288
        : pivotBind15287.index == null
          ? pivotBind15287.type == null
            ? ""
            : String(pivotBind15287.type)
          : String(pivotBind15287.index);
    }
    #e() {
      let pivotBind20921 = pivotItemProtoByInstance.get(this);
      if (!pivotBind20921) throw Error("PivotItem proto not found");
      return pivotBind20921;
    }
  };
});
