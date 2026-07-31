// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: PivotTable VO (legacy Binding369); rebuildCache + #D peeled.

import { parseA1Range } from "../../utils/spreadsheet-address-utils";
import { PivotLayoutType } from "./pivot-layout-type";
import { pivotAxisEnum, pivotAxisToken } from "./pivot-axis-tokens";
import { rebuildPivotCache } from "./rebuild-pivot-cache";
import { describePivotFilter } from "./pivot-filter-descriptor";
import {
  refreshPivotTableLayout,
  getPivotLayoutCtor,
  getPivotFieldCtor,
  getPivotHierarchyCtor,
  getPivotHierarchiesCtor,
  getPivotDataFieldCtor,
  getPivotDataHierarchiesCtor,
  getPivotFieldFromHierarchy,
  cellHintKey,
} from "./boundary-hooks";
import {
  pivotProtoByInstance,
  pivotCacheProtoByInstance,
  pivotSourceByInstance,
  pivotTableByProto,
  pivotLayoutMetaByInstance,
  pivotCellHintsByInstance,
  getPivotCacheProto,
} from "./pivot-table-maps";
import type {
  PivotLayoutMeta,
  PivotTableConstructorOpts,
  PivotTableOpsHost,
} from "./types";

/** Legacy `workbookBinding369` — worksheet PivotTable handle. */
export class PivotTable {
  #opsHost(): PivotTableOpsHost {
    const pivotTable = this;
    return {
      pivotTable,
      get workbook() {
        return pivotTable.#e;
      },
      get worksheet() {
        return pivotTable.#t;
      },
      getProto: () => pivotTable.#T(),
      syncItemsFromCache: () => pivotTable.#O(),
      syncFieldAxes: () => pivotTable.#k(),
    };
  }
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m;
  #h;
  constructor(pivotIn752: PivotTableConstructorOpts) {
    this.#e = pivotIn752.workbook;
    this.#t = pivotIn752.worksheet;
    this.#m = new Set();
    this.#h = new Set();
    pivotProtoByInstance.set(this, pivotIn752.pivot);
    pivotCacheProtoByInstance.set(this, pivotIn752.cache);
    pivotSourceByInstance.set(this, pivotIn752.source);
    pivotLayoutMetaByInstance.set(this, {
      fillEmptyCells: false,
      preserveFormatting: false,
      emptyCellText: "",
    });
    pivotCellHintsByInstance.set(this, new Map());
    const PivotLayout = getPivotLayoutCtor();
    this.#n = new PivotLayout(this);
    let pivotBind5235 = this.#T();
    pivotBind5235.pivotFields ??= [];
    this.#c = [];
    this.#l = [];
    this.#p = new Map();
    pivotBind5235.pivotFields.forEach((item) => {
      const PivotField = getPivotFieldCtor();
      const PivotHierarchy = getPivotHierarchyCtor();
      let pivotBind17848 = new PivotField(item, {
        pivotTable: this,
      });
      pivotBind17848.__ensureIndex(pivotBind5235.pivotFields);
      let pivotBind17849 = new PivotHierarchy(pivotBind17848);
      this.#c.push(pivotBind17848);
      this.#l.push(pivotBind17849);
      this.#p.set(item.index, pivotBind17849);
    });
    this.#O();
    const PivotHierarchies = getPivotHierarchiesCtor();
    this.#r = new PivotHierarchies({
      pivotTable: this,
      kind: "all",
      source: this.#l,
    });
    this.#u = [];
    this.#d = [];
    this.#f = [];
    this.#g();
    const PivotHierarchies2 = getPivotHierarchiesCtor();
    this.#i = new PivotHierarchies2({
      pivotTable: this,
      kind: "row",
    });
    this.#a = new PivotHierarchies2({
      pivotTable: this,
      kind: "column",
    });
    this.#s = new PivotHierarchies2({
      pivotTable: this,
      kind: "filter",
    });
    const PivotDataField = getPivotDataFieldCtor();
    const PivotDataHierarchies = getPivotDataHierarchiesCtor();
    let pivotBind5236 = (pivotBind5235.dataFields ?? []).map(
      (item) =>
        new PivotDataField(item, {
          pivotTable: this,
        }),
    );
    this.#o = new PivotDataHierarchies({
      pivotTable: this,
      items: pivotBind5236,
    });
    this.#k();
    pivotIn752.onDelete && this.addDeleteListener(pivotIn752.onDelete);
    pivotIn752.onNameChange &&
      this.addNameChangeListener(pivotIn752.onNameChange);
    pivotTableByProto.set(pivotIn752.pivot, this);
  }
  get workbook() {
    return this.#e;
  }
  get worksheet() {
    return this.#t;
  }
  get name() {
    return this.#T().name;
  }
  set name(pivotIn8250: string) {
    let pivotBind18763 = this.#T(),
      pivotBind18764 = pivotBind18763.name || undefined;
    pivotBind18763.name = pivotIn8250;
    this.#t.__queueCollaborativePublish();
    for (let pivotBind23042 of this.#h)
      pivotBind23042(this, pivotBind18764, pivotIn8250);
  }
  get layout() {
    return this.#n;
  }
  get hierarchies() {
    return this.#r;
  }
  get rowHierarchies() {
    return this.#i;
  }
  get columnHierarchies() {
    return this.#a;
  }
  get dataHierarchies() {
    return this.#o;
  }
  get filterHierarchies() {
    return this.#s;
  }
  _assignHierarchy(pivotIn7560: string, pivotIn7561: any) {
    this.#w(pivotIn7561);
    let pivotBind18040 = this.#C(pivotIn7560);
    this.#x(pivotIn7561);
    pivotBind18040.includes(pivotIn7561) || pivotBind18040.push(pivotIn7561);
    this.#y();
    this.#t.__queueCollaborativePublish();
  }
  _getHierarchies(pivotIn11662: string) {
    return pivotIn11662 === "all" ? [...this.#l] : [...this.#C(pivotIn11662)];
  }
  _getHierarchyByFieldIndex(pivotIn12863: number) {
    return this.#p.get(pivotIn12863);
  }
  _ensureHierarchyIndex(pivotIn12474: any) {
    return (this.#w(pivotIn12474), this.#b(pivotIn12474));
  }
  delete() {
    for (let pivotBind23074 of this.#m) pivotBind23074(this);
  }
  get cache() {
    return getPivotCacheProto(this);
  }
  toProto() {
    return this.#T();
  }
  rebuildCache() {
    rebuildPivotCache(this.#opsHost());
  }
  #g() {
    let pivotBind15057 = this.#T(),
      pivotBind15058 = Array.isArray(pivotBind15057.rowFields)
        ? pivotBind15057.rowFields
        : [],
      pivotBind15059 = Array.isArray(pivotBind15057.columnFields)
        ? pivotBind15057.columnFields
        : [],
      pivotBind15060 = Array.isArray(pivotBind15057.pageFields)
        ? pivotBind15057.pageFields
        : [];
    this.#u = this.#_(pivotBind15058);
    this.#d = this.#_(pivotBind15059);
    this.#f = this.#v(pivotBind15060);
  }
  #_(pivotIn7779) {
    let pivotBind18258 = new Set(),
      pivotBind18259 = [];
    for (let pivotBind21208 of pivotIn7779) {
      let pivotBind21738 = this.#p.get(pivotBind21208);
      pivotBind21738 &&
        !pivotBind18258.has(pivotBind21738) &&
        (pivotBind18258.add(pivotBind21738),
        pivotBind18259.push(pivotBind21738));
    }
    return pivotBind18259;
  }
  #v(pivotIn6647) {
    let pivotBind16942 = new Set(),
      pivotBind16943 = [];
    for (let pivotBind19730 of pivotIn6647) {
      if (pivotBind19730.field == null) continue;
      let pivotBind20221 = this.#p.get(pivotBind19730.field);
      pivotBind20221 &&
        !pivotBind16942.has(pivotBind20221) &&
        (pivotBind16942.add(pivotBind20221),
        pivotBind16943.push(pivotBind20221));
    }
    return pivotBind16943;
  }
  #y() {
    let pivotBind15107 = this.#T();
    pivotBind15107.rowFields = this.#u.map((item) => this.#b(item));
    pivotBind15107.columnFields = this.#d.map((item) => this.#b(item));
    pivotBind15107.pageFields = this.#f.map((item) => ({
      field: this.#b(item),
      item: undefined,
      name: item.name,
    }));
    this.#k();
  }
  #b(pivotIn10113) {
    let pivotBind20585 = this.#T(),
      pivotBind20586 = getPivotFieldFromHierarchy(pivotIn10113).__ensureIndex(
        pivotBind20585.pivotFields,
      );
    return (this.#p.set(pivotBind20586, pivotIn10113), pivotBind20586);
  }
  #x(pivotIn11719) {
    this.#S(this.#u, pivotIn11719);
    this.#S(this.#d, pivotIn11719);
    this.#S(this.#f, pivotIn11719);
  }
  #S(pivotIn11952, pivotIn11953) {
    let pivotBind22204 = pivotIn11952.indexOf(pivotIn11953);
    pivotBind22204 >= 0 && pivotIn11952.splice(pivotBind22204, 1);
  }
  #C(pivotIn6041) {
    switch (pivotIn6041) {
      case "row":
        return this.#u;
      case "column":
        return this.#d;
      case "filter":
        return this.#f;
      default:
        throw Error(`Unknown hierarchy kind: ${pivotIn6041}`);
    }
  }
  #w(pivotIn10512) {
    if (!this.#l.includes(pivotIn10512))
      throw Error("Hierarchy does not belong to this PivotTable");
  }
  #T() {
    let pivotBind20880 = pivotProtoByInstance.get(this);
    if (!pivotBind20880) throw Error("PivotTable proto not found");
    return pivotBind20880;
  }
  addDeleteListener(pivotIn13999: (pivot: PivotTable) => void) {
    this.#m.add(pivotIn13999);
  }
  removeDeleteListener(pivotIn13460: (pivot: PivotTable) => void) {
    this.#m.delete(pivotIn13460);
  }
  addNameChangeListener(
    pivotIn13652: (
      pivot: PivotTable,
      oldName: string | undefined,
      newName: string,
    ) => void,
  ) {
    this.#h.add(pivotIn13652);
  }
  removeNameChangeListener(
    pivotIn13148: (
      pivot: PivotTable,
      oldName: string | undefined,
      newName: string,
    ) => void,
  ) {
    this.#h.delete(pivotIn13148);
  }
  __getLayoutType() {
    let pivotBind18853 = this.#T();
    return pivotBind18853.outline
      ? PivotLayoutType.outline
      : pivotBind18853.compact === false
        ? PivotLayoutType.tabular
        : PivotLayoutType.compact;
  }
  __setLayoutType(pivotIn3867: string) {
    let pivotBind12707 = this.#T();
    switch (pivotIn3867) {
      case PivotLayoutType.compact:
        pivotBind12707.compact = true;
        pivotBind12707.outline = false;
        break;
      case PivotLayoutType.outline:
        pivotBind12707.compact = false;
        pivotBind12707.outline = true;
        break;
      case PivotLayoutType.tabular:
      default:
        pivotBind12707.compact = false;
        pivotBind12707.outline = false;
        break;
    }
    this.#t.__queueCollaborativePublish();
    refreshPivotTableLayout(this);
  }
  __getLayoutMeta() {
    return {
      ...(pivotLayoutMetaByInstance.get(this) ?? this.#E()),
    };
  }
  __setLayoutMeta(pivotIn9551: Partial<PivotLayoutMeta>) {
    let pivotBind20075 = pivotLayoutMetaByInstance.get(this) ?? this.#E();
    pivotLayoutMetaByInstance.set(this, {
      ...pivotBind20075,
      ...pivotIn9551,
    });
    this.#t.__queueCollaborativePublish();
  }
  #E() {
    return {
      fillEmptyCells: false,
      preserveFormatting: false,
      emptyCellText: "",
    };
  }
  __getLocationForLayout() {
    let pivotBind14807 = this.#T().location;
    return {
      reference: pivotBind14807?.reference ?? "",
      firstHeaderRow: pivotBind14807?.firstHeaderRow ?? 0,
      firstDataRow: pivotBind14807?.firstDataRow ?? 0,
      firstHeaderColumn: pivotBind14807?.firstHeaderColumn ?? 0,
      firstDataColumn: pivotBind14807?.firstDataColumn ?? 0,
    };
  }
  __getDataBodyShapeForLayout() {
    let pivotBind16306 = this.#T();
    return {
      dataRowCount: Array.isArray(pivotBind16306.rowItems)
        ? pivotBind16306.rowItems.length
        : 0,
      dataColCount: Array.isArray(pivotBind16306.columnItems)
        ? pivotBind16306.columnItems.length
        : 0,
    };
  }
  __setRowItems(pivotIn13149) {
    this.#T().rowItems = pivotIn13149 ?? [];
  }
  __setColumnItems(pivotIn12796) {
    this.#T().columnItems = pivotIn12796 ?? [];
  }
  __clearPivotCellRenderHints() {
    let pivotBind19242 = pivotCellHintsByInstance.get(this);
    if (!pivotBind19242) {
      pivotCellHintsByInstance.set(this, new Map());
      return;
    }
    pivotBind19242.clear();
  }
  __setPivotCellRenderHint(pivotIn7585, pivotIn7586, pivotIn7587) {
    let pivotBind18072 = pivotCellHintsByInstance.get(this),
      pivotBind18073 = cellHintKey(pivotIn7585, pivotIn7586);
    if (!pivotBind18072) {
      pivotCellHintsByInstance.set(
        this,
        new Map([[pivotBind18073, pivotIn7587]]),
      );
      return;
    }
    pivotBind18072.set(pivotBind18073, pivotIn7587);
  }
  __getPivotCellRenderHint(pivotIn10411, pivotIn10412) {
    let pivotBind20881 = pivotCellHintsByInstance.get(this);
    return pivotBind20881
      ? (pivotBind20881.get(cellHintKey(pivotIn10411, pivotIn10412)) ?? null)
      : null;
  }
  __getPivotCellRenderHints() {
    let pivotBind18886 = pivotCellHintsByInstance.get(this);
    if (!pivotBind18886) {
      let pivotBind22284 = new Map();
      return (
        pivotCellHintsByInstance.set(this, pivotBind22284),
        pivotBind22284
      );
    }
    return pivotBind18886;
  }
  __findDataFieldProto(pivotIn8712) {
    let pivotBind19220 = this.#T();
    return (
      Array.isArray(pivotBind19220.dataFields) ? pivotBind19220.dataFields : []
    ).find((item) => item.field === pivotIn8712);
  }
  __addDataFieldProto(pivotIn8053) {
    let pivotBind18559 = this.#T();
    pivotBind18559.dataFields ??= [];
    pivotBind18559.dataFields.push(pivotIn8053);
    this.#k();
    this.#t.__queueCollaborativePublish();
  }
  __getPivotFieldProtos() {
    let pivotBind21124 = this.#T();
    return ((pivotBind21124.pivotFields ??= []), pivotBind21124.pivotFields);
  }
  __updateLocation(pivotIn2769) {
    let pivotBind10412 = this.#T();
    pivotBind10412.location ??= {
      reference: pivotIn2769.reference,
      firstHeaderRow: pivotIn2769.firstHeaderRow,
      firstDataRow: pivotIn2769.firstDataRow,
      firstHeaderColumn: pivotIn2769.firstHeaderColumn,
      firstDataColumn: pivotIn2769.firstDataColumn,
    };
    pivotBind10412.location.reference = pivotIn2769.reference;
    pivotBind10412.location.firstHeaderRow = pivotIn2769.firstHeaderRow;
    pivotBind10412.location.firstDataRow = pivotIn2769.firstDataRow;
    pivotBind10412.location.firstHeaderColumn = pivotIn2769.firstHeaderColumn;
    pivotBind10412.location.firstDataColumn = pivotIn2769.firstDataColumn;
    this.#t.__queueCollaborativePublish();
  }
  __applyFilterForField(pivotIn3399, pivotIn3400) {
    let pivotBind11782 = this.#T();
    pivotBind11782.filters ??= [];
    let pivotBind11783 = pivotIn3399.__ensureIndex(pivotBind11782.pivotFields);
    pivotBind11782.filters = pivotBind11782.filters.filter(
      (item) => item.field !== pivotBind11783,
    );
    let { descriptor, typeToken, typeEnum } = this.#D(pivotIn3400),
      pivotBind11784 = {
        field: pivotBind11783,
        type: typeToken,
        typeEnum,
        name: pivotIn3399.name,
        description: JSON.stringify(descriptor),
      };
    pivotBind11782.filters.push(pivotBind11784);
    this.#t.__queueCollaborativePublish();
    refreshPivotTableLayout(this);
  }
  __clearAllFiltersForField(pivotIn6182) {
    let pivotBind16259 = this.#T();
    if (!pivotBind16259.filters) return;
    let pivotBind16260 = pivotIn6182.__ensureIndex(pivotBind16259.pivotFields);
    pivotBind16259.filters = pivotBind16259.filters.filter(
      (item) => item.field !== pivotBind16260,
    );
    this.#t.__queueCollaborativePublish();
    refreshPivotTableLayout(this);
  }
  #D(pivotIn866: any) {
    return describePivotFilter(pivotIn866);
  }
  preview() {
    let pivotBind10226 = this.#T().location,
      pivotBind10227 = pivotBind10226?.reference ?? "",
      pivotBind10228 = pivotBind10227 ? parseA1Range(pivotBind10227) : null;
    if (!pivotBind10228)
      return {
        grid: [],
        header: {
          headerRows: 0,
          headerCols: 0,
        },
        bounds: {
          rowCount: 0,
          colCount: 0,
        },
      };
    let pivotBind10229 = this.#t.getRange(pivotBind10228.ref).values,
      pivotBind10230 = pivotBind10229.length,
      pivotBind10231 = pivotBind10229[0]?.length ?? 0;
    return {
      grid: pivotBind10229,
      header: {
        headerRows: Math.max(0, pivotBind10226?.firstDataRow ?? 0),
        headerCols: Math.max(0, pivotBind10226?.firstDataColumn ?? 0),
      },
      bounds: {
        rowCount: pivotBind10230,
        colCount: pivotBind10231,
      },
    };
  }
  #O() {
    let pivotBind9720 = this.#T(),
      pivotBind9721 = getPivotCacheProto(this),
      pivotBind9722 = Array.isArray(pivotBind9721.fields)
        ? pivotBind9721.fields
        : [];
    for (
      let pivotBind11076 = 0;
      pivotBind11076 < pivotBind9720.pivotFields.length;
      pivotBind11076++
    ) {
      let pivotBind11589 = pivotBind9720.pivotFields[pivotBind11076];
      if (!pivotBind11589) continue;
      let pivotBind11590 =
        pivotBind9722[pivotBind11589.index ?? pivotBind11076]?.sharedItems
          ?.values ?? [];
      (Array.isArray(pivotBind11589.items) &&
        pivotBind11589.items.length > 0) ||
        (pivotBind11589.items = pivotBind11590
          .map((item, index) => ({
            name: item,
            index,
          }))
          .sort((pivotIn15591, pivotIn15592) =>
            pivotIn15591.name.localeCompare(pivotIn15592.name),
          )
          .map(({ index }) => index)
          .map((item) => ({
            index: item,
            memberPropertyIndexes: [],
            memberProperties: [],
          })));
    }
  }
  #k() {
    let pivotBind9632 = this.#T(),
      pivotBind9633 = pivotBind9632.pivotFields ?? [];
    for (let pivotBind21917 of pivotBind9633)
      pivotBind21917 &&
        ((pivotBind21917.axis = undefined),
        (pivotBind21917.axisEnum = undefined),
        (pivotBind21917.dataField = false));
    let pivotBind9634 = (pivotIn8559, pivotIn8560) => {
      for (let pivotBind20162 of pivotIn8559) {
        let pivotBind20665 = this.#b(pivotBind20162),
          pivotBind20666 = pivotBind9633[pivotBind20665];
        pivotBind20666 &&
          ((pivotBind20666.axisEnum = pivotAxisEnum(pivotIn8560)),
          (pivotBind20666.axis = pivotAxisToken(pivotIn8560)));
      }
    };
    pivotBind9634(this.#u, "rows");
    pivotBind9634(this.#d, "columns");
    pivotBind9634(this.#f, "filters");
    let pivotBind9635 = Array.isArray(pivotBind9632.dataFields)
      ? pivotBind9632.dataFields
      : [];
    for (let pivotBind18634 of pivotBind9635) {
      let pivotBind19149 = pivotBind9633[pivotBind18634.field ?? -1];
      pivotBind19149 &&
        ((pivotBind19149.dataField = true),
        (pivotBind19149.axisEnum = pivotAxisEnum("values")),
        (pivotBind19149.axis = pivotAxisToken("values")));
    }
  }
}
