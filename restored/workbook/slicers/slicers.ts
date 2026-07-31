// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-48: Slicers collection VO (legacy Binding684).

import { Slicer } from "./slicer";
import { ensureSlicerMeta, getSlicerProto } from "./slicer-meta";
import type { SlicersConstructorOpts } from "./types";

/** Legacy `workbookBinding684` — workbook/worksheet slicers collection. */
export class Slicers {
  #workbook: any;
  #worksheet: any;
  #items: Slicer[];
  #slicerCaches: any[];

  constructor(slicerIn5636: SlicersConstructorOpts) {
    if (
      ((this.#workbook = slicerIn5636.workbook),
      (this.#worksheet = slicerIn5636.worksheet),
      (this.#slicerCaches = slicerIn5636.context.slicerCaches),
      (this.#items = []),
      this.#worksheet)
    )
      this.#a(this.#worksheet);
    else if (this.#workbook)
      for (let slicerBind22965 of this.#workbook.worksheets)
        this.#a(slicerBind22965);
  }
  add(slicerIn2367: string, slicerIn2368: string) {
    let slicerBind9551 = this.#i(),
      slicerBind9552 = slicerBind9551.pivotTables.getItem(slicerIn2367),
      slicerBind9553 = slicerBind9552.hierarchies
        .getItem(slicerIn2368)
        .fields.getItem(slicerIn2368),
      slicerBind9554 = this.#worksheet ?? slicerBind9552.worksheet,
      slicerBind9555 = this.#o(slicerIn2367, slicerIn2368);
    slicerBind9554.__getSlicers().push(slicerBind9555);
    let slicerBind9556 = new Slicer(slicerBind9555, {
      workbook: slicerBind9551,
      worksheet: slicerBind9554,
      pivotTable: slicerBind9552,
      field: slicerBind9553,
      onDelete: (slicerIn16417) => this.#c(slicerIn16417),
      onNameChange: (slicerIn15902, slicerIn15903, slicerIn15904) =>
        this.#l(slicerIn15902, slicerIn15903, slicerIn15904),
    });
    this.#items.push(slicerBind9556);
    let slicerBind9557 = slicerBind9551.slicers;
    this !== slicerBind9557 && slicerBind9557._registerShared(slicerBind9556);
    let slicerBind9558 = slicerBind9554.slicers;
    return (
      this !== slicerBind9558 && slicerBind9558._registerShared(slicerBind9556),
      slicerBind9554.__queueCollaborativePublish(),
      slicerBind9556
    );
  }
  getItem(slicerIn9705: string) {
    let slicerBind20225 = this.#items.find(
      (item) => item.name === slicerIn9705,
    );
    if (!slicerBind20225) throw Error(`Slicer ${slicerIn9705} not found`);
    return slicerBind20225;
  }
  getItemAt(slicerIn10118: number) {
    let slicerBind20594 = this.#items[slicerIn10118];
    if (!slicerBind20594)
      throw Error(`Slicer at index ${slicerIn10118} not found`);
    return slicerBind20594;
  }
  get items() {
    return [...this.#items];
  }
  reload() {
    if (((this.#items = []), this.#worksheet)) {
      this.#a(this.#worksheet);
      return;
    }
    if (this.#workbook)
      for (let slicerBind22966 of this.#workbook.worksheets)
        this.#a(slicerBind22966);
  }
  synthesizeCaches() {
    for (let slicerBind7298 of this.#items) {
      let slicerBind7431 = getSlicerProto(slicerBind7298),
        slicerBind7432 = ensureSlicerMeta(slicerBind7431),
        slicerBind7433 =
          slicerBind7432.fieldName ||
          slicerBind7431.caption ||
          slicerBind7431.name ||
          "Field",
        slicerBind7434 =
          slicerBind7431.cache ||
          `${slicerBind7432.pivotTableName}_${slicerBind7433}_cache`;
      slicerBind7431.cache = slicerBind7434;
      let slicerBind7435 = this.#slicerCaches.find(
        (item) => item.name === slicerBind7434,
      );
      slicerBind7435 ||
        ((slicerBind7435 = {
          name: slicerBind7434,
          caption: slicerBind7431.caption ?? slicerBind7433,
          type: "pivot",
          pivotCacheId: undefined,
          pivotTableIds: [],
          sourceName: slicerBind7433,
          tableId: undefined,
          tableName: undefined,
          columnName: slicerBind7433,
          crossFilter: undefined,
          sortOrder: undefined,
          items: [],
          pivotTableRefs: [],
          olapLevels: [],
          olapSelections: [],
        }),
        this.#slicerCaches.push(slicerBind7435));
      slicerBind7431.cacheId =
        this.#slicerCaches.findIndex((item) => item === slicerBind7435) + 1;
      slicerBind7435.caption = slicerBind7431.caption ?? slicerBind7433;
      slicerBind7435.sourceName = slicerBind7433;
      slicerBind7435.columnName = slicerBind7433;
      slicerBind7435.items = slicerBind7435.items ?? [];
    }
  }
  _registerShared(slicerIn7840: Slicer) {
    this.#items.includes(slicerIn7840) ||
      (slicerIn7840.addDeleteListener((slicerIn16418) =>
        this.#c(slicerIn16418),
      ),
      slicerIn7840.addNameChangeListener(
        (slicerIn15905, slicerIn15906, slicerIn15907) =>
          this.#l(slicerIn15905, slicerIn15906, slicerIn15907),
      ),
      this.#items.push(slicerIn7840));
  }
  #i() {
    if (this.#workbook) return this.#workbook;
    if (this.#worksheet?.workbook) return this.#worksheet.workbook;
    throw Error("Workbook context not available");
  }
  #a(slicerIn2533: any) {
    let slicerBind9900 = slicerIn2533.__getSlicers() ?? [];
    for (let slicerBind10597 of slicerBind9900) {
      let slicerBind10767 = ensureSlicerMeta(slicerBind10597),
        slicerBind10768 = this.#i(),
        slicerBind10769;
      try {
        slicerBind10769 = slicerBind10768.pivotTables.getItem(
          slicerBind10767.pivotTableName,
        );
      } catch {
        continue;
      }
      let slicerBind10770 = slicerBind10769.hierarchies
          .getItem(slicerBind10767.fieldName)
          .fields.getItem(slicerBind10767.fieldName),
        slicerBind10771 = new Slicer(slicerBind10597, {
          workbook: slicerBind10768,
          worksheet: slicerIn2533,
          pivotTable: slicerBind10769,
          field: slicerBind10770,
          onDelete: (slicerIn16419) => this.#c(slicerIn16419),
          onNameChange: (slicerIn15908, slicerIn15909, slicerIn15910) =>
            this.#l(slicerIn15908, slicerIn15909, slicerIn15910),
        });
      this.#items.push(slicerBind10771);
    }
  }
  #o(slicerIn1087: string, slicerIn1088: string) {
    let slicerBind6435 = `${slicerIn1087}_${slicerIn1088}_cache`,
      slicerBind6436 = this.#slicerCaches.findIndex(
        (item) => item.name === slicerBind6435,
      );
    slicerBind6436 === -1 &&
      (this.#slicerCaches.push({
        name: slicerBind6435,
        caption: slicerIn1088,
        type: "pivot",
        pivotCacheId: undefined,
        pivotTableIds: [],
        sourceName: slicerIn1088,
        tableId: undefined,
        tableName: undefined,
        columnName: slicerIn1088,
        crossFilter: undefined,
        sortOrder: undefined,
        items: [],
        pivotTableRefs: [],
        olapLevels: [],
        olapSelections: [],
      }),
      (slicerBind6436 = this.#slicerCaches.length - 1));
    let slicerBind6437 = slicerBind6436 + 1,
      slicerBind6438 = {
        name: this.#s(slicerIn1088),
        caption: slicerIn1088,
        cache: slicerBind6435,
        lockedPosition: false,
        displayHeader: true,
        showNoDataItems: false,
        sortBy: undefined,
        style: undefined,
        fromAnchor: undefined,
        toAnchor: undefined,
        cacheId: slicerBind6437,
        width: undefined,
        height: undefined,
      },
      slicerBind6439 = ensureSlicerMeta(slicerBind6438);
    return (
      (slicerBind6439.pivotTableName = slicerIn1087),
      (slicerBind6439.fieldName = slicerIn1088),
      (slicerBind6439.selectedItems = []),
      slicerBind6438
    );
  }
  #s(slicerIn8978: string) {
    let slicerBind19522 = 1,
      slicerBind19523 = slicerIn8978;
    for (; this.#items.some((item) => item.name === slicerBind19523); ) {
      slicerBind19522 += 1;
      slicerBind19523 = `${slicerIn8978}_${slicerBind19522}`;
    }
    return slicerBind19523;
  }
  #c(slicerIn13107: Slicer) {
    this.#items = this.#items.filter((item) => item !== slicerIn13107);
  }
  #l(
    slicerIn9307: Slicer,
    slicerIn9308: string | undefined,
    slicerIn9309: string,
  ) {
    if (
      !(!slicerIn9308 || slicerIn9308 === slicerIn9309) &&
      this.#items.some(
        (item) => item !== slicerIn9307 && item.name === slicerIn9309,
      )
    )
      throw Error(`Slicer name ${slicerIn9309} already exists`);
  }
}
