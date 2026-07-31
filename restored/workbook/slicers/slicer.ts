// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-48: Slicer VO (legacy Binding683).

import { refreshPivotTableLayout } from "../pivot-caches";
import {
  ensureSlicerMeta,
  getSlicerProto,
  setSlicerProto,
} from "./slicer-meta";
import type { SlicerConstructorOpts } from "./types";

/** Legacy `workbookBinding683` — worksheet pivot slicer handle. */
export class Slicer {
  #worksheet: any;
  #pivotTable: any;
  #field: any;
  #deleteListeners: Set<(slicer: Slicer) => void>;
  #nameChangeListeners: Set<
    (slicer: Slicer, oldName: string | undefined, newName: string) => void
  >;
  constructor(slicerIn4955: any, slicerIn4956: SlicerConstructorOpts) {
    setSlicerProto(this, slicerIn4955);
    this.#worksheet = slicerIn4956.worksheet;
    this.#pivotTable = slicerIn4956.pivotTable;
    this.#field = slicerIn4956.field;
    this.#deleteListeners = new Set();
    this.#nameChangeListeners = new Set();
    slicerIn4956.onDelete && this.addDeleteListener(slicerIn4956.onDelete);
    slicerIn4956.onNameChange &&
      this.addNameChangeListener(slicerIn4956.onNameChange);
  }
  get name() {
    return this.#e().name ?? "";
  }
  set name(slicerIn8477: string) {
    let slicerBind18990 = this.#e(),
      slicerBind18991 = slicerBind18990.name || undefined;
    slicerBind18990.name = slicerIn8477;
    this.#t().__queueCollaborativePublish();
    this.#a(slicerBind18991, slicerIn8477);
  }
  get caption() {
    return this.#e().caption ?? "";
  }
  set caption(slicerIn11187: string) {
    this.#e().caption = slicerIn11187;
    this.#t().__queueCollaborativePublish();
  }
  get left() {
    return 0;
  }
  set left(slicerIn16584: number) {}
  get top() {
    return 0;
  }
  set top(slicerIn16594: number) {}
  get height() {
    return this.#e().height ?? 0;
  }
  set height(slicerIn11272: number) {
    this.#e().height = slicerIn11272;
    this.#t().__queueCollaborativePublish();
  }
  get width() {
    return this.#e().width ?? 0;
  }
  set width(slicerIn11355: number) {
    this.#e().width = slicerIn11355;
    this.#t().__queueCollaborativePublish();
  }
  get style() {
    return this.#e().style ?? "";
  }
  set style(slicerIn11356: string) {
    this.#e().style = slicerIn11356;
    this.#t().__queueCollaborativePublish();
  }
  selectItems(slicerIn7375: string[]) {
    this.#r().applyFilter({
      manualFilter: {
        selectedItems: slicerIn7375,
      },
    });
    ensureSlicerMeta(this.#e()).selectedItems = [...slicerIn7375];
    this.#t().__queueCollaborativePublish();
    refreshPivotTableLayout(this.#n());
  }
  clearFilters() {
    this.#r().clearAllFilters();
    ensureSlicerMeta(this.#e()).selectedItems = [];
    this.#t().__queueCollaborativePublish();
    refreshPivotTableLayout(this.#n());
  }
  delete() {
    let slicerBind17412 = this.#e(),
      slicerBind17413 = this.#t(),
      slicerBind17414 = slicerBind17413.__getSlicers(),
      slicerBind17415 = slicerBind17414.indexOf(slicerBind17412);
    slicerBind17415 >= 0 && slicerBind17414.splice(slicerBind17415, 1);
    slicerBind17413.__queueCollaborativePublish();
    this.#i();
  }
  addDeleteListener(slicerIn13486: (slicer: Slicer) => void) {
    this.#deleteListeners.add(slicerIn13486);
  }
  removeDeleteListener(slicerIn13048: (slicer: Slicer) => void) {
    this.#deleteListeners.delete(slicerIn13048);
  }
  addNameChangeListener(
    slicerIn13159: (
      slicer: Slicer,
      oldName: string | undefined,
      newName: string,
    ) => void,
  ) {
    this.#nameChangeListeners.add(slicerIn13159);
  }
  removeNameChangeListener(
    slicerIn12808: (
      slicer: Slicer,
      oldName: string | undefined,
      newName: string,
    ) => void,
  ) {
    this.#nameChangeListeners.delete(slicerIn12808);
  }
  #e() {
    return getSlicerProto(this);
  }
  #t() {
    if (!this.#worksheet) throw new Error("Slicer worksheet not found");
    return this.#worksheet;
  }
  #n() {
    if (!this.#pivotTable) throw new Error("Slicer pivot table not found");
    return this.#pivotTable;
  }
  #r() {
    if (!this.#field) throw new Error("Slicer pivot field not found");
    return this.#field;
  }
  #i() {
    for (const listener of this.#deleteListeners) listener(this);
  }
  #a(slicerIn11324: string | undefined, slicerIn11325: string) {
    for (const listener of this.#nameChangeListeners)
      listener(this, slicerIn11324, slicerIn11325);
  }
}
