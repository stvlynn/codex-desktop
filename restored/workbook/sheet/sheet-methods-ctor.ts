// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: Sheet prototype install (sheet-methods-ctor.ts).

import { sheet } from "./sheet-bag";
import { randomBase36Id } from "../stable-id";
import { Map as YMap } from "../../vendor/yjs";
import {
  columnWidthPx,
  formatA1,
  formatA1Range,
  parseA1Range,
  parseSheetRef,
  boundsIntersect,
  defaultCharWidth,
  pointsToPixels,
} from "../../utils/spreadsheet-address-utils";
import { columnNumberToLetters } from "../formula";
import {
  applyWorksheetDrawingLayout,
  getWorksheetDrawingsClass,
  createWorksheetDrawingContext,
} from "../worksheet-drawings";
import {
  getCellClass,
  getCellGridClass,
  getSparklineGroupsClass,
} from "../sparklines";
import { Range } from "../range";
import { PivotCaches } from "../pivot-caches";
import { Slicers } from "../slicers";
import { ConditionalFormattings } from "../conditional-format";
import { DataValidations } from "../data-validation";
import { p } from "../spreadsheet-protobuf";
import {
  getStyleRefsCollabClass,
  getTableStyleClass,
  getMergedRangeIndexClass,
  getTablesCollectionClass,
  getSparklinesFacadeClass,
  isCheckboxStyle,
  notifyRowHeights,
  buildSparklinePreview,
} from "./boundary-hooks";
import {
  GYe,
  parseSheetColWidth,
  clampNonNegInt,
  asFiniteNumber,
  qYe,
  JYe,
  YYe,
  XYe,
  ZYe,
  QYe,
  $Ye,
  eXe,
  tXe,
  nXe,
  oXe,
  sXe,
  cXe,
  lXe,
  uXe,
  dXe,
  fXe,
  pXe,
  mXe,
  hXe,
  gXe,
  ensureSheetAutoHeightInit,
  ensureAutoHeightCacheInit,
} from "./sheet-helpers";

const Cell: any = new Proxy(function CellProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getCellClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getCellClass();
    if (prop === "prototype") return (getCellClass() as any)?.prototype;
    const Ctor = getCellClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});
const CellGrid: any = new Proxy(function CellGridProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getCellGridClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getCellGridClass();
    if (prop === "prototype") return (getCellGridClass() as any)?.prototype;
    const Ctor = getCellGridClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});
const SparklineGroups: any = new Proxy(function SparklineGroupsProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getSparklineGroupsClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getSparklineGroupsClass();
    if (prop === "prototype")
      return (getSparklineGroupsClass() as any)?.prototype;
    const Ctor = getSparklineGroupsClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});
const WorksheetDrawings: any = new Proxy(function WorksheetDrawingsProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getWorksheetDrawingsClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getWorksheetDrawingsClass();
    if (prop === "prototype")
      return (getWorksheetDrawingsClass() as any)?.prototype;
    const Ctor = getWorksheetDrawingsClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});

export function installCtor(proto: any): void {
  proto._sheetConstruct = function (shIn84: any, shIn85: any) {
    let shBind2666 = shIn84.id ?? randomBase36Id(),
      shBind2667 = shIn84.sheetId;
    this._e = shIn85;
    this._r = shIn84.defaultColWidth != null;
    this._t = {
      id: shBind2666,
      sheetId: shBind2667,
      index: shIn84.index ?? 0,
      name: shIn84.name ?? "",
      innerXml: shIn84.innerXml ?? "",
      outerXml: shIn84.outerXml ?? "",
      defaultRowHeight: shIn84.defaultRowHeight ?? 15,
      defaultColWidth: shIn84.defaultColWidth ?? 8.43,
      baseColWidth: shIn84.baseColWidth,
      showGridLines: shIn84.showGridLines,
    };
    this._n = shIn84.tabColor;
    this._i = {
      rows: shIn84.rows ?? [],
      columns: shIn84.columns ?? [],
      mergedCells: shIn84.mergedCells ?? [],
      conditionalFormattings: shIn84.conditionalFormattings ?? [],
      dataValidations: shIn84.dataValidations?.items ?? [],
      sharedFormulas: shIn84.sharedFormulas ?? [],
      tables: shIn84.tables ?? [],
      pivotTables: shIn84.pivotTables ?? [],
      slicers: shIn84.slicers ?? [],
      timelines: shIn84.timelines ?? [],
      drawings: shIn84.drawings ?? [],
    };
    this._a = new Map();
    this._o = new CellGrid();
    this._s = new Map();
    this._c = new Map();
    this._l = new Map();
    this._h = new Map();
    shBind2667 && shBind2667.length > 0
      ? ((this._C = this._e.getOrCreateWorksheetState(shBind2667)),
        (this._w = this._K(this._C)),
        this._w.observe((shIn13688, shIn13689) => {
          this._$(shIn13688, shIn13689);
        }))
      : console.warn(
          `Worksheet "${shIn84.name ?? ""}" is missing a required sheetId.`,
        );
    let shBind2668 = [];
    for (let shBind6770 of this._i.rows) {
      let shBind6885 = Math.max(0, (shBind6770.index ?? 1) - 1);
      this._s.set(shBind6885, shBind6770);
      shBind6770.cells ||= [];
      for (
        let shBind7646 = 0;
        shBind7646 < shBind6770.cells.length;
        shBind7646 += 1
      ) {
        let shBind7882 = shBind6770.cells[shBind7646];
        if (!shBind7882?.address) continue;
        let shBind7883 = asFiniteNumber(shBind7882.address);
        if (!shBind7883) continue;
        let shBind7884 = Cell.from(shBind7882).toProto();
        this._e.fontFamilyCache?.addParagraphs(shBind7884.paragraphs);
        shBind6770.cells[shBind7646] = shBind7884;
        this._o.set(shBind7883.row, shBind7883.col, shBind7884);
        this._pe(shBind7883.row, shBind7883.col);
        shBind7884.styleIndex !== undefined &&
          this.__setLogicalStyleIndex(
            shBind7883.row,
            shBind7883.col,
            shBind7884.styleIndex,
          );
        shBind7884.formulaType === p.CELL_FORMULA_TYPE_DATA_TABLE &&
          shBind2668.push({
            row: shBind7883.row,
            col: shBind7883.col,
            formulaRef: shBind7884.formulaRef ?? null,
            rowInput: shBind7884.dataTableRowInput ?? undefined,
            columnInput: shBind7884.dataTableColumnInput ?? undefined,
            rowOriented: shBind7884.dataTableRowOriented ?? undefined,
            twoVariable: shBind7884.dataTableTwoVariable ?? undefined,
          });
      }
    }
    this._u = new PivotCaches({
      workbook: this._e.workbook,
      worksheet: this,
      context: this._e.pivotTables,
    });
    this._d = new Slicers({
      workbook: this._e.workbook,
      worksheet: this,
      context: this._e.slicers,
    });
    this._f = new (getSparklinesFacadeClass())(this);
    this._p = new (getTablesCollectionClass())(this);
    this._C &&
      shBind2667 &&
      (this._g = new (getStyleRefsCollabClass())({
        isCollaborativeStateReady: () =>
          this._e.workbook.isCollaborativeStateReady(),
        styleRefsState: this._e.getOrCreateWorksheetStyleRefsState(shBind2667),
        runLocalTransaction: (shIn13070) =>
          this._e.workbook.runLocalCollabTransaction(shIn13070),
        getCollabOrigins: () => this._e.workbook.getCollabOrigins(),
        resolveStyleIndexForStyleId: (shIn12848) =>
          this._e.workbook.__resolveStyleIndexForStyleId(shIn12848),
        getOrCreateStyleIdForStyleIndex: (shIn12572) =>
          this._e.workbook.__getOrCreateStyleIdForStyleIndex(shIn12572),
        subscribeToStyleStore: (shIn12633) =>
          this._e.workbook.__subscribeToCollaborativeStyles(shIn12633),
        getCurrentStyleIndex: (shIn10849, shIn10850) =>
          this.__getLogicalStyleIndex(shIn10849, shIn10850) ??
          this.__getCell(shIn10849, shIn10850)?.styleIndex,
        getOrCreateCell: (shIn15615, shIn15616) =>
          this.__getOrCreateCell(shIn15615, shIn15616),
        setLogicalStyleIndex: (shIn13269, shIn13270, shIn13271) =>
          this.__setLogicalStyleIndex(shIn13269, shIn13270, shIn13271),
        iterateCells: () =>
          (function* (shIn12137) {
            for (let [, shBind23086] of shIn12137) yield shBind23086;
          })(this._o.entries()),
      }));
    this._C &&
      ((this._O = (shIn13955, shIn13956) => {
        this._ee(shIn13955, shIn13956);
      }),
      (this._k = (shIn13957, shIn13958) => {
        this._te(shIn13957, shIn13958);
      }),
      this._ne(this._J(this._C)),
      this._re(this._X(this._C)));
    this._v = new WorksheetDrawings(shIn84.drawings ?? [], {
      shapeContext: {
        ...createWorksheetDrawingContext({
          getImages: () => this._e.workbook.images,
          createImageAsset: (shIn15319) =>
            this._e.workbook.createImageAsset(shIn15319),
        }),
        fontFamilyCache: this._e.fontFamilyCache,
        getRecorder: () => this._e.workbook.getRecorder(),
        getSheetName: () => this.name,
        queueCollaborativePublish: () => this.__queueCollaborativePublish(),
      },
      imageContext: {
        createImageAsset: (shIn15320) =>
          this._e.workbook.createImageAsset(shIn15320),
        getRecorder: () => this._e.workbook.getRecorder(),
        getSheetName: () => this.name,
        queueCollaborativePublish: () => this.__queueCollaborativePublish(),
      },
      chartContext: {
        fontFamilyCache: this._e.fontFamilyCache,
        getRecorder: () => this._e.workbook.getRecorder(),
        getSheetName: () => this.name,
        getSheetId: () => this.sheetId ?? this.id ?? this.name,
        getChartsState: () => this.__getChartsState(),
        getOrCreateChartsState: () => this.__getOrCreateChartsState(),
        isCollaborativeStateReady: () =>
          this._e.workbook.isCollaborativeStateReady(),
        runLocalTransaction: (shIn13071) =>
          this._e.workbook.runLocalCollabTransaction(shIn13071),
        getCollabOrigins: () => this._e.workbook.getCollabOrigins(),
      },
    });
    this._y = new ConditionalFormattings(this);
    this._b = new DataValidations(this);
    this._x = new sheet._Xe(this, oXe(shIn84));
    this.__ = new SparklineGroups(this, shIn84.sparklineGroups);
    for (let shBind15576 of shBind2668)
      this._p.__hydrateFromProto({
        anchor: {
          row: shBind15576.row,
          col: shBind15576.col,
        },
        formulaRef: shBind15576.formulaRef,
        rowInput: shBind15576.rowInput,
        columnInput: shBind15576.columnInput,
        rowOriented: shBind15576.rowOriented,
        twoVariable: shBind15576.twoVariable,
      });
    this._C && (this._S = this._R(this._C));
    this._Z();
    this._m = new sheet.bXe(this);
    this._Q();
  };

  Object.defineProperty(proto, "workbook", {
    configurable: true,
    enumerable: false,
    get() {
      return this._e.workbook;
    },
  });

  proto["_R"] = function (shIn517: any) {
    return new (getTableStyleClass())({
      root: shIn517,
      runLocalTransaction: (shIn13330) =>
        this._e.workbook.runLocalCollabTransaction(shIn13330),
      getCollabOrigins: () => this._e.workbook.getCollabOrigins(),
      readStructure: () => this._V(),
      applyStructure: (shIn11298) => {
        this._H(shIn11298);
        this._e.workbook.__invalidateCalcStateFromCollab();
      },
      readConditionalFormattings: () => this._i.conditionalFormattings,
      applyConditionalFormattings: (shIn8396) => {
        this._i.conditionalFormattings = shIn8396;
        this._e.workbook.invalidateConditionalFormattingCache(this.name);
      },
      readDataValidations: () => this._i.dataValidations,
      applyDataValidations: (shIn10699) => {
        this._i.dataValidations = shIn10699;
        this.__invalidateViewportLayout();
      },
      readTables: () => this._i.tables,
      applyTables: (shIn7607) => {
        this._i.tables = shIn7607;
        this._f.replaceFromProto();
        this.__invalidateViewportLayout();
        this._e.workbook.__invalidateCalcStateFromCollab();
      },
      readPivotTables: () => this._i.pivotTables,
      applyPivotTables: (shIn7648) => {
        this._i.pivotTables = shIn7648;
        this._u.reload();
        this.__invalidateViewportLayout();
        this._e.workbook.__reloadPivotCollectionsFromCollab();
      },
      readSlicers: () => this._i.slicers,
      applySlicers: (shIn7753) => {
        this._i.slicers = shIn7753;
        this._d.reload();
        this.__invalidateViewportLayout();
        this._e.workbook.__reloadSlicerCollectionsFromCollab();
      },
      readSparklineGroups: () => this.__.toProto(),
      applySparklineGroups: (shIn8344) => {
        this.__.replaceFromProto(shIn8344);
        this.__invalidateViewportLayout();
        this._e.workbook.__refreshSparklineRenderContextsFromCollab();
      },
      readDrawings: () => this._v.toNonChartProto(),
      applyDrawings: (shIn10573) => {
        this._v.replaceNonChartDrawings(shIn10573);
        this.__invalidateViewportLayout();
      },
    });
  };

  Object.defineProperty(proto, "names", {
    configurable: true,
    enumerable: false,
    get() {
      return this._e.workbook.__getNamesFacadeForSheet(this.name);
    },
  });

  Object.defineProperty(proto, "id", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.id;
    },
  });

  Object.defineProperty(proto, "name", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.name;
    },
  });

  Object.defineProperty(proto, "isNullObject", {
    configurable: true,
    enumerable: false,
    get() {
      return false;
    },
  });

  Object.defineProperty(proto, "name", {
    configurable: true,
    enumerable: false,
    set(shIn14636: any) {
      this.writeName(shIn14636);
    },
  });

  Object.defineProperty(proto, "index", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.index;
    },
  });

  Object.defineProperty(proto, "sheetId", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.sheetId;
    },
  });

  Object.defineProperty(proto, "tabColor", {
    configurable: true,
    enumerable: false,
    get() {
      return this._n;
    },
  });

  Object.defineProperty(proto, "showGridLines", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.showGridLines;
    },
  });

  Object.defineProperty(proto, "showGridLines", {
    configurable: true,
    enumerable: false,
    set(shIn11021: any) {
      this._t.showGridLines = shIn11021;
      this.__queueCollaborativePublish();
    },
  });

  Object.defineProperty(proto, "defaultRowHeight", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.defaultRowHeight;
    },
  });

  Object.defineProperty(proto, "defaultColWidth", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.defaultColWidth;
    },
  });

  Object.defineProperty(proto, "baseColWidth", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.baseColWidth;
    },
  });

  Object.defineProperty(proto, "innerXml", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.innerXml;
    },
  });

  Object.defineProperty(proto, "outerXml", {
    configurable: true,
    enumerable: false,
    get() {
      return this._t.outerXml;
    },
  });

  Object.defineProperty(proto, "index", {
    configurable: true,
    enumerable: false,
    set(shIn14401: any) {
      this.writeIndex(shIn14401);
    },
  });

  proto["writeName"] = function (shIn4451: any, shIn4452: any = {}) {
    let shBind13692 = shIn4452.record ?? true,
      shBind13693 = this._t.name || undefined;
    if (
      shBind13693 === shIn4451 ||
      ((this._t.name = shIn4451),
      this._e.onNameChange?.(this, shBind13693, shIn4451),
      !shBind13692)
    )
      return;
    let shBind13694 = this.workbook.getRecorder();
    if (!shBind13694) return;
    let shBind13695 = {
      op: "sheet.set",
      target: shBind13693 ?? shIn4451,
      props: {
        name: shIn4451,
      },
    };
    shBind13694.record(shBind13695);
  };

  proto["writeIndex"] = function (shIn3017: any, shIn3018: any = {}) {
    let shBind11042 = shIn3018.notifyCollection ?? true,
      shBind11043 = shIn3018.record ?? true,
      shBind11044 = Number.isFinite(shIn3017)
        ? Math.max(0, Math.floor(shIn3017))
        : this._t.index,
      shBind11045 = this._t.index;
    if (
      shBind11045 === shBind11044 ||
      (shBind11042 && this._e.onIndexChange
        ? this._e.onIndexChange(this, shBind11045, shBind11044)
        : (this._t.index = shBind11044),
      !shBind11043)
    )
      return;
    let shBind11046 = this.workbook.getRecorder();
    if (!shBind11046) return;
    let shBind11047 = {
      op: "sheet.set",
      target: this.name,
      props: {
        index: shBind11044,
      },
    };
    shBind11046.record(shBind11047);
  };

  proto["getRange"] = function (shIn3403: any, ...shIn3404: any[]) {
    if (typeof shIn3403 != "string") {
      let shBind15757 = [shIn3403, ...shIn3404].map((item) => typeof item),
        shBind15758 = shBind15757.length
          ? `(${shBind15757.join(", ")})`
          : "(unknown)";
      throw Error(
        `getRange(address) requires an A1 string; you passed ${shBind15758}. Use sheet.getRange("A1") / "A1:B2"; getRange(row,col) is not supported.`,
      );
    }
    return (
      this._a.has(shIn3403) ||
        this._a.set(
          shIn3403,
          new Range({
            address: shIn3403,
            worksheet: this,
          }),
        ),
      this._a.get(shIn3403)
    );
  };

  proto["getRangeByIndexes"] = function (
    shIn1655: any,
    shIn1656: any,
    shIn1657: any,
    shIn1658: any,
  ) {
    if (
      [shIn1655, shIn1656, shIn1657, shIn1658].some(
        (item) => !Number.isFinite(item),
      )
    )
      throw Error(
        "getRangeByIndexes(startRow, startColumn, rowCount, columnCount) requires numeric arguments.",
      );
    if (
      !Number.isInteger(shIn1655) ||
      !Number.isInteger(shIn1656) ||
      !Number.isInteger(shIn1657) ||
      !Number.isInteger(shIn1658)
    )
      throw Error(
        "getRangeByIndexes(startRow, startColumn, rowCount, columnCount) requires integer arguments.",
      );
    if (shIn1655 < 0 || shIn1656 < 0 || shIn1657 < 1 || shIn1658 < 1)
      throw Error(
        `getRangeByIndexes(startRow, startColumn, rowCount, columnCount) requires non-negative indexes and positive sizes; got (${shIn1655}, ${shIn1656}, ${shIn1657}, ${shIn1658}).`,
      );
    let shBind7903 = formatA1Range({
      startRow: shIn1655,
      startCol: shIn1656,
      endRow: shIn1655 + shIn1657 - 1,
      endCol: shIn1656 + shIn1658 - 1,
    });
    return this.getRange(shBind7903);
  };

  proto["getCell"] = function (shIn12573: any, shIn12574: any) {
    return this.getRangeByIndexes(shIn12573, shIn12574, 1, 1);
  };

  proto["getUsedRange"] = function (shIn1841: any) {
    if (shIn1841) {
      let shBind15577 = this._G();
      return shBind15577
        ? this.getRangeByIndexes(
            shBind15577.startRow,
            shBind15577.startCol,
            shBind15577.endRow - shBind15577.startRow + 1,
            shBind15577.endCol - shBind15577.startCol + 1,
          )
        : this.getRangeByIndexes(0, 0, 1, 1);
    }
    if (this._l.size === 0) return this.getRangeByIndexes(0, 0, 1, 1);
    let shBind8427 = 1 / 0,
      shBind8428 = -1,
      shBind8429 = 1 / 0,
      shBind8430 = -1;
    for (let [shBind19079, shBind19080] of this._l.entries()) {
      shBind8427 = Math.min(shBind8427, shBind19079);
      shBind8428 = Math.max(shBind8428, shBind19079);
      shBind8429 = Math.min(shBind8429, shBind19080.min);
      shBind8430 = Math.max(shBind8430, shBind19080.max);
    }
    return !Number.isFinite(shBind8427) ||
      !Number.isFinite(shBind8429) ||
      shBind8428 < 0
      ? this.getRangeByIndexes(0, 0, 1, 1)
      : this.getRangeByIndexes(
          shBind8427,
          shBind8429,
          shBind8428 - shBind8427 + 1,
          shBind8430 - shBind8429 + 1,
        );
  };
}
