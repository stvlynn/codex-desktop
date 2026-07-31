// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches VO (legacy Binding676); large methods peeled.

import { parseA1Range } from "../../utils/spreadsheet-address-utils";
import { getAttachedWorksheet } from "../worksheet-attachment";
import {
  refreshPivotTableLayout,
  getPivotTableProto,
  getPivotCacheProto,
  getPivotTableSource,
  PivotCacheModel,
  createOrReusePivotTable,
} from "./boundary-hooks";
import type { PivotCachesOpsHost } from "./types";
import { hydratePivotRenderLayout } from "./pivot-render-layout";
import { collectPivotSourceNumFmtIds } from "./pivot-num-fmt-map";
import { extractPivotSourceHeaders } from "./pivot-source-headers";
import { buildPivotTableProto } from "./build-pivot-table-proto";

/** Legacy `workbookBinding676` — workbook/worksheet PivotCaches collection. */
export class PivotCaches {
  #workbook;
  #worksheet;
  #items;
  #pivotCacheList;
  constructor(pivotIn5543: any) {
    if (
      ((this.#workbook = pivotIn5543.workbook),
      (this.#worksheet = pivotIn5543.worksheet),
      (this.#pivotCacheList = pivotIn5543.context.pivotCaches),
      (this.#items = []),
      this.#worksheet)
    )
      this.#workbook || this.#a(this.#worksheet);
    else if (this.#workbook)
      for (let pivotBind22963 of this.#workbook.worksheets)
        this.#a(pivotBind22963);
  }
  add(pivotIn1567, pivotIn1568, pivotIn1569) {
    let pivotBind7661 = this.#i();
    this.#F(pivotIn1567);
    let pivotBind7662 = this.#T(pivotBind7661, pivotIn1568),
      pivotBind7663 = this.#A(
        pivotBind7661,
        pivotIn1569,
        pivotBind7662.worksheet,
      ),
      pivotBind7664 = this.#j(
        pivotBind7662.headers,
        pivotBind7662.rows,
        pivotBind7662.numFmtIdByFieldIndex,
        pivotIn1567,
        pivotBind7662.worksheet.name,
        pivotBind7662.address,
      ),
      pivotBind7665 = this.#M(
        pivotIn1567,
        pivotBind7664.id,
        pivotBind7663.address,
        pivotBind7662.headers,
        pivotBind7662.numFmtIdByFieldIndex,
      );
    pivotBind7663.worksheet.__getPivotTables().push(pivotBind7665);
    let pivotBind7666 = this.#x({
      workbook: pivotBind7661,
      worksheet: pivotBind7663.worksheet,
      cache: pivotBind7664,
      pivot: pivotBind7665,
      source: {
        headers: pivotBind7662.headers,
        rows: pivotBind7662.rows,
        address: pivotBind7662.address,
        worksheet: pivotBind7662.worksheet,
      },
    });
    return (
      this.#items.push(pivotBind7666),
      refreshPivotTableLayout(pivotBind7666),
      (this.#worksheet == null ||
        pivotBind7663.worksheet !== this.#worksheet) &&
        this.#S(pivotBind7663.worksheet, pivotBind7666),
      pivotBind7663.worksheet.__queueCollaborativePublish(),
      pivotBind7666
    );
  }
  getItem(pivotIn9589) {
    let pivotBind20119 = this.#items.find((item) => item.name === pivotIn9589);
    if (!pivotBind20119) throw Error(`PivotTable ${pivotIn9589} not found`);
    return pivotBind20119;
  }
  getItemOrNullObject(pivotIn11625) {
    return this.#items.find((item) => item.name === pivotIn11625) ?? null;
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
      for (let pivotBind22964 of this.#workbook.worksheets)
        this.#a(pivotBind22964);
  }
  _registerShared(pivotIn7836) {
    this.#items.includes(pivotIn7836) ||
      (pivotIn7836.addDeleteListener((pivotIn16415) => this.#C(pivotIn16415)),
      pivotIn7836.addNameChangeListener(
        (pivotIn15896, pivotIn15897, pivotIn15898) =>
          this.#w(pivotIn15896, pivotIn15897, pivotIn15898),
      ),
      this.#items.push(pivotIn7836));
  }
  #i() {
    if (this.#workbook) return this.#workbook;
    if (this.#worksheet?.workbook) return this.#worksheet.workbook;
    throw Error("Workbook context not available");
  }
  #a(pivotIn4036) {
    let pivotBind12986 = pivotIn4036.__getPivotTables() ?? [];
    for (let pivotBind14340 of pivotBind12986) {
      let pivotBind14691 = this.#P(pivotBind14340.cacheId);
      if (!pivotBind14691) continue;
      let pivotBind14692 = this.#o(pivotIn4036, pivotBind14691),
        pivotBind14693 = this.#x({
          workbook: this.#i(),
          worksheet: pivotIn4036,
          cache: pivotBind14691,
          pivot: pivotBind14340,
          source: pivotBind14692,
        });
      this.#items.push(pivotBind14693);
      this.#worksheet ?? this.#S(pivotIn4036, pivotBind14693);
    }
  }
  #o(pivotIn5829, pivotIn5830) {
    return (
      this.#s(pivotIn5830) ||
      this.#c(pivotIn5830) || {
        headers: (pivotIn5830.fields ?? []).map(
          (item, index) => item.name ?? `Column${index + 1}`,
        ),
        rows: [],
        address: "",
        worksheet: pivotIn5829,
      }
    );
  }
  #s(pivotIn1833) {
    let pivotBind8411 = pivotIn1833.worksheetSourceReference?.trim();
    if (!pivotBind8411) return null;
    let pivotBind8412 = this.#i(),
      pivotBind8413 = pivotIn1833.worksheetSourceSheet?.trim(),
      pivotBind8414;
    if (pivotBind8413 && pivotBind8413.length > 0)
      try {
        pivotBind8414 = pivotBind8412.worksheets.getItem(pivotBind8413);
      } catch {
        pivotBind8414 = undefined;
      }
    if (
      ((pivotBind8414 ||=
        this.#worksheet ??
        pivotBind8412.worksheets.getActiveWorksheet() ??
        Array.from(pivotBind8412.worksheets)[0]),
      !pivotBind8414)
    )
      return null;
    try {
      let pivotBind15936 = pivotBind8414.getRange(pivotBind8411),
        pivotBind15937 = parseA1Range(pivotBind15936.address),
        pivotBind15938 = pivotBind15937
          ? pivotBind15937.ref
          : pivotBind15936.address,
        pivotBind15939 = this.#k(pivotBind15936, pivotBind15938);
      return {
        worksheet: pivotBind8414,
        address: pivotBind15938,
        headers: pivotBind15939.headers,
        rows: pivotBind15939.rows,
      };
    } catch {
      return null;
    }
  }
  #c(pivotIn2178) {
    let pivotBind9168 = (pivotIn2178.fields ?? []).map(
      (item, index) => item.name ?? `Column${index + 1}`,
    );
    if (pivotBind9168.length === 0) return null;
    let pivotBind9169 = this.#I();
    for (let pivotBind10995 of pivotBind9169) {
      let pivotBind11190 = pivotBind10995.__getTables() ?? [];
      for (let pivotBind11969 of pivotBind11190) {
        let pivotBind12230 = pivotBind11969.ref?.trim();
        if (!pivotBind12230) continue;
        let pivotBind12231;
        try {
          pivotBind12231 = pivotBind10995.getRange(pivotBind12230);
        } catch {
          continue;
        }
        let pivotBind12232 = pivotBind12231.values[0] ?? [];
        if (!this.#b(pivotBind9168, pivotBind12232)) continue;
        let pivotBind12233 = this.#k(pivotBind12231, pivotBind12230);
        return {
          worksheet: pivotBind10995,
          address: pivotBind12230,
          headers: pivotBind12233.headers,
          rows: pivotBind12233.rows,
        };
      }
    }
    return null;
  }
  hydrateLayouts() {
    for (let pivotBind17445 of this.#items) {
      let pivotBind18105 = getPivotTableSource(pivotBind17445),
        pivotBind18106 = getPivotTableProto(pivotBind17445).dataFields ?? [];
      if (pivotBind18105.rows.length === 0 || pivotBind18106.length === 0) {
        this.#l(pivotBind17445);
        continue;
      }
      refreshPivotTableLayout(pivotBind17445);
    }
  }
  #l(pivotIn279: any) {
    return hydratePivotRenderLayout(this.#opsHost(), pivotIn279);
  }
  #u(pivotIn4536, pivotIn4537, pivotIn4538, pivotIn4539, pivotIn4540) {
    let pivotBind13796 = pivotIn4539?.trim();
    if (pivotBind13796 && pivotBind13796.length > 0) return pivotBind13796;
    let pivotBind13797 = this.#f(pivotIn4536, pivotIn4538);
    if (pivotBind13797 == null) return "";
    let pivotBind13798 = (
        Array.isArray(pivotIn4536.pivotFields) ? pivotIn4536.pivotFields : []
      )[pivotBind13797],
      pivotBind13799 =
        pivotIn4537.fields?.[pivotBind13798?.index ?? pivotBind13797],
      pivotBind13800 =
        pivotIn4540[
          typeof pivotBind13798?.index == "number"
            ? pivotBind13798.index
            : pivotBind13797
        ];
    return this.#h(
      pivotBind13798?.name,
      pivotBind13799?.name,
      pivotBind13800,
      `Field ${pivotBind13797 + 1}`,
    );
  }
  #d(pivotIn1682, pivotIn1683, pivotIn1684) {
    let pivotBind7984 = this.#f(pivotIn1682, pivotIn1684);
    if (pivotBind7984 == null) return "";
    let pivotBind7985 = Array.isArray(pivotIn1682.filters)
      ? pivotIn1682.filters
      : [];
    for (let pivotBind14809 of pivotBind7985) {
      if (pivotBind14809?.field !== pivotBind7984) continue;
      let pivotBind15208 = this.#p(pivotBind14809.description);
      if (!pivotBind15208 || pivotBind15208.kind !== "manualFilter") continue;
      let pivotBind15209 = pivotBind15208.payload.selectedItems;
      if (Array.isArray(pivotBind15209) && pivotBind15209.length > 0) {
        let pivotBind22144 = pivotBind15209[0];
        if (pivotBind22144 != null) return String(pivotBind22144);
      }
    }
    let pivotBind7986 = (
        Array.isArray(pivotIn1682.pivotFields) ? pivotIn1682.pivotFields : []
      )[pivotBind7984],
      pivotBind7987 = Array.isArray(pivotBind7986?.items)
        ? pivotBind7986.items
        : [],
      pivotBind7988 =
        pivotIn1683.fields?.[pivotBind7986?.index ?? pivotBind7984]?.sharedItems
          ?.values ?? [];
    for (let pivotBind17795 of pivotBind7987) {
      if (pivotBind17795?.hidden === true) continue;
      let pivotBind18265 = pivotBind17795?.index;
      if (typeof pivotBind18265 != "number" || pivotBind18265 < 0) continue;
      let pivotBind18266 = this.#m(pivotBind7988[pivotBind18265]);
      if (pivotBind18266 != null) return pivotBind18266;
    }
    return "";
  }
  #f(pivotIn5748, pivotIn5749) {
    if (typeof pivotIn5749 == "number" && pivotIn5749 >= 0) return pivotIn5749;
    let pivotBind15676 = Array.isArray(pivotIn5748.filters)
        ? pivotIn5748.filters
        : [],
      pivotBind15677 = new Set();
    for (let pivotBind22104 of pivotBind15676)
      typeof pivotBind22104?.field == "number" &&
        pivotBind22104.field >= 0 &&
        pivotBind15677.add(pivotBind22104.field);
    if (pivotBind15677.size === 1) return Array.from(pivotBind15677)[0];
  }
  #p(pivotIn4809) {
    let pivotBind14173 = pivotIn4809?.trim();
    if (!pivotBind14173) return null;
    try {
      let pivotBind17121 = JSON.parse(pivotBind14173);
      return pivotBind17121.kind === "manualFilter" ||
        pivotBind17121.kind === "labelFilter" ||
        pivotBind17121.kind === "dateFilter" ||
        pivotBind17121.kind === "valueFilter"
        ? pivotBind17121
        : null;
    } catch {
      return null;
    }
  }
  #m(pivotIn2797) {
    if (pivotIn2797 == null) return null;
    if (
      typeof pivotIn2797 == "string" ||
      typeof pivotIn2797 == "number" ||
      typeof pivotIn2797 == "boolean"
    )
      return String(pivotIn2797);
    if (typeof pivotIn2797 != "object") return null;
    let pivotBind10489 = pivotIn2797,
      pivotBind10490 = this.#h(
        pivotBind10489.text,
        pivotBind10489.string,
        pivotBind10489.number == null
          ? undefined
          : String(pivotBind10489.number),
        pivotBind10489.datetime == null
          ? undefined
          : String(pivotBind10489.datetime),
        pivotBind10489.dateTime == null
          ? undefined
          : String(pivotBind10489.dateTime),
        pivotBind10489.boolean == null
          ? undefined
          : String(pivotBind10489.boolean),
      );
    return pivotBind10490.length > 0 ? pivotBind10490 : null;
  }
  #h(...pivotIn9494) {
    for (let pivotBind21617 of pivotIn9494) {
      let pivotBind22173 = pivotBind21617?.trim();
      if (pivotBind22173 && pivotBind22173.length > 0) return pivotBind22173;
    }
    return "";
  }
  #g(pivotIn2853) {
    let pivotBind10640 = new Map(),
      pivotBind10641 = getPivotTableSource(pivotIn2853);
    if (pivotBind10641.rows.length === 0) return pivotBind10640;
    let pivotBind10642 = getPivotTableProto(pivotIn2853),
      pivotBind10643 = Array.isArray(pivotBind10642.rowFields)
        ? pivotBind10642.rowFields
        : [],
      pivotBind10644 = Array.isArray(pivotBind10642.pivotFields)
        ? pivotBind10642.pivotFields
        : [];
    if (pivotBind10643.length === 0) return pivotBind10640;
    for (
      let pivotBind15828 = 0;
      pivotBind15828 < pivotBind10643.length;
      pivotBind15828++
    ) {
      let pivotBind16630 = pivotBind10643[pivotBind15828];
      if (typeof pivotBind16630 != "number" || pivotBind16630 < 0) continue;
      let pivotBind16631 =
        pivotBind10644[pivotBind16630]?.index ?? pivotBind16630;
      for (let pivotBind20857 of pivotBind10641.rows) {
        let pivotBind21565 = this.#_(pivotBind20857[pivotBind16631]);
        pivotBind21565 == null ||
          pivotBind10640.has(pivotBind21565) ||
          pivotBind10640.set(pivotBind21565, pivotBind15828 + 1);
      }
    }
    return pivotBind10640;
  }
  #_(pivotIn9392) {
    if (pivotIn9392 == null || pivotIn9392 === "") return null;
    let pivotBind19931 = String(pivotIn9392).trim().toLowerCase();
    return pivotBind19931.length === 0 ? null : pivotBind19931;
  }
  #v(pivotIn5714, pivotIn5715, pivotIn5716, pivotIn5717) {
    for (
      let pivotBind17048 = pivotIn5716;
      pivotBind17048 <= pivotIn5717;
      pivotBind17048++
    ) {
      let pivotBind17825 =
        pivotIn5714.__getRawValue(pivotBind17048, pivotIn5715) ??
        pivotIn5714.__getCell(pivotBind17048, pivotIn5715)?.value;
      if (
        typeof pivotBind17825 == "string" &&
        pivotBind17825.trim().toLowerCase() === "grand total"
      )
        return pivotBind17048;
    }
    return null;
  }
  #y(pivotIn7837, pivotIn7838, pivotIn7839) {
    let pivotBind18332 = pivotIn7837.__getLogicalStyleIndex(
      pivotIn7838,
      pivotIn7839,
    );
    if (typeof pivotBind18332 == "number") return pivotBind18332;
    let pivotBind18333 = pivotIn7837.__getCell(
      pivotIn7838,
      pivotIn7839,
    )?.styleIndex;
    if (typeof pivotBind18333 == "number") return pivotBind18333;
  }
  #b(pivotIn4953, pivotIn4954) {
    if (pivotIn4953.length === 0 || pivotIn4954.length < pivotIn4953.length)
      return false;
    for (
      let pivotBind16928 = 0;
      pivotBind16928 < pivotIn4953.length;
      pivotBind16928++
    )
      if (
        pivotIn4953[pivotBind16928]?.trim().toLowerCase() !==
        (pivotIn4954[pivotBind16928] != null &&
        pivotIn4954[pivotBind16928] !== ""
          ? String(pivotIn4954[pivotBind16928]).trim().toLowerCase()
          : `column${pivotBind16928 + 1}`)
      )
        return false;
    return true;
  }
  #x(pivotIn9094) {
    return createOrReusePivotTable({
      ...pivotIn9094,
      onDelete: (pivotIn16416) => this.#C(pivotIn16416),
      onNameChange: (pivotIn15899, pivotIn15900, pivotIn15901) =>
        this.#w(pivotIn15899, pivotIn15900, pivotIn15901),
    });
  }
  #S(pivotIn11402, pivotIn11403) {
    let pivotBind21858 = pivotIn11402.pivotTables;
    pivotBind21858 !== this && pivotBind21858._registerShared(pivotIn11403);
  }
  #C(pivotIn3832) {
    let pivotBind12635 = getPivotTableProto(pivotIn3832),
      pivotBind12636 = pivotIn3832.worksheet.__getPivotTables(),
      pivotBind12637 = pivotBind12636.indexOf(pivotBind12635);
    pivotBind12637 >= 0 && pivotBind12636.splice(pivotBind12637, 1);
    let pivotBind12638 = getPivotCacheProto(pivotIn3832);
    if (
      !this.#I().some((item) =>
        item
          .__getPivotTables()
          .some(
            (_item) =>
              _item.cacheId === pivotBind12638.id && _item !== pivotBind12635,
          ),
      )
    ) {
      let pivotBind21923 = this.#pivotCacheList.indexOf(pivotBind12638);
      pivotBind21923 >= 0 && this.#pivotCacheList.splice(pivotBind21923, 1);
    }
    this.#items = this.#items.filter((item) => item !== pivotIn3832);
  }
  #w(pivotIn7781, pivotIn7782, pivotIn7783) {
    if (
      !(!pivotIn7782 || pivotIn7782 === pivotIn7783) &&
      this.#items.filter(
        (item) => item !== pivotIn7781 && item.name === pivotIn7783,
      ).length > 0
    )
      throw Error(`PivotTable name ${pivotIn7783} already exists`);
  }
  #T(pivotIn4873, pivotIn4874) {
    let pivotBind14285 =
        pivotIn4874 instanceof Range
          ? this.#D(pivotIn4874)
          : this.#O(pivotIn4873, pivotIn4874, this.#worksheet),
      pivotBind14286 = this.#k(pivotBind14285.range, pivotBind14285.address);
    return {
      ...pivotBind14285,
      headers: pivotBind14286.headers,
      rows: pivotBind14286.rows,
      numFmtIdByFieldIndex: this.#E(
        pivotBind14285.worksheet,
        pivotBind14285.address,
        pivotBind14286.headers.length,
      ),
    };
  }
  #E(pivotIn2467: any, pivotIn2468: any, pivotIn2469: any) {
    return collectPivotSourceNumFmtIds(pivotIn2467, pivotIn2468, pivotIn2469);
  }
  #D(pivotIn7702) {
    let pivotBind18200 = getAttachedWorksheet(pivotIn7702);
    if (!pivotBind18200) throw Error("Range must belong to a worksheet");
    let pivotBind18201 = parseA1Range(pivotIn7702.address);
    return {
      worksheet: pivotBind18200,
      range: pivotIn7702,
      address: pivotBind18201 ? pivotBind18201.ref : pivotIn7702.address,
    };
  }
  #O(pivotIn3155, pivotIn3156, pivotIn3157) {
    let pivotBind11292 = pivotIn3156.trim();
    if (!pivotBind11292) throw Error("Source range cannot be empty");
    let pivotBind11293,
      pivotBind11294 = pivotBind11292,
      pivotBind11295 = pivotBind11292.indexOf("!");
    pivotBind11295 !== -1 &&
      ((pivotBind11293 = pivotBind11292.slice(0, pivotBind11295)),
      (pivotBind11294 = pivotBind11292.slice(pivotBind11295 + 1)));
    let pivotBind11296 = pivotBind11293
      ? pivotIn3155.worksheets.getItem(pivotBind11293)
      : (pivotIn3157 ??
        this.#worksheet ??
        pivotIn3155.worksheets.getActiveWorksheet());
    if (!pivotBind11296) throw Error("Worksheet not found for source range");
    let pivotBind11297 = pivotBind11296.getRange(pivotBind11294),
      pivotBind11298 = parseA1Range(pivotBind11297.address);
    return {
      worksheet: pivotBind11296,
      range: pivotBind11297,
      address: pivotBind11298 ? pivotBind11298.ref : pivotBind11297.address,
    };
  }
  #k(pivotIn2772: any, pivotIn2773: any) {
    return extractPivotSourceHeaders(pivotIn2772, pivotIn2773);
  }
  #A(pivotIn2036, pivotIn2037, pivotIn2038) {
    if (pivotIn2037 instanceof Range) {
      let pivotBind19424 = getAttachedWorksheet(pivotIn2037);
      if (!pivotBind19424)
        throw Error("Destination range must belong to a worksheet");
      return {
        worksheet: pivotBind19424,
        address: pivotIn2037.address,
      };
    }
    let pivotBind8896 = pivotIn2037?.trim(),
      pivotBind8897 = pivotIn2038,
      pivotBind8898 = pivotBind8896;
    if (pivotBind8896) {
      let pivotBind18833 = pivotBind8896.indexOf("!");
      if (pivotBind18833 !== -1) {
        let pivotBind21167 = pivotBind8896.slice(0, pivotBind18833);
        pivotBind8898 = pivotBind8896.slice(pivotBind18833 + 1);
        pivotBind8897 = pivotIn2036.worksheets.getItem(pivotBind21167);
      }
    }
    if (
      ((pivotBind8897 ||=
        this.#worksheet ?? pivotIn2036.worksheets.getActiveWorksheet()),
      !pivotBind8897)
    )
      throw Error("Unable to determine destination worksheet");
    let pivotBind8899 =
        pivotBind8898 && pivotBind8898.length > 0 ? pivotBind8898 : "A1",
      pivotBind8900 = parseA1Range(pivotBind8899);
    if (!pivotBind8900)
      throw Error(`Invalid destination address: ${pivotBind8899}`);
    return {
      worksheet: pivotBind8897,
      address: pivotBind8900.ref,
    };
  }
  #j(
    pivotIn2625,
    pivotIn2626,
    pivotIn2627,
    pivotIn2628,
    pivotIn2629,
    pivotIn2630,
  ) {
    let pivotBind10103 = this.#N(),
      pivotBind10104 = PivotCacheModel.createFromSource({
        id: pivotBind10103,
        name: `${pivotIn2628} Cache`,
        headers: pivotIn2625,
        rows: pivotIn2626,
      }).toProto(),
      pivotBind10105 = pivotBind10104.fields ?? [];
    for (
      let pivotBind19097 = 0;
      pivotBind19097 < pivotBind10105.length;
      pivotBind19097++
    ) {
      let pivotBind20170 = pivotBind10105[pivotBind19097];
      if (!pivotBind20170) continue;
      let pivotBind20171 = pivotIn2627.get(pivotBind19097);
      typeof pivotBind20171 == "number" &&
        (pivotBind20170.numFmtId = pivotBind20171);
    }
    return (
      (pivotBind10104.worksheetSourceSheet = pivotIn2629),
      (pivotBind10104.worksheetSourceReference = pivotIn2630),
      (pivotBind10104.recordCount = pivotIn2626.length),
      this.#pivotCacheList.push(pivotBind10104),
      pivotBind10104
    );
  }
  #M(
    pivotIn977: any,
    pivotIn978: any,
    pivotIn979: any,
    pivotIn980: any,
    pivotIn981: any,
  ) {
    return buildPivotTableProto(
      pivotIn977,
      pivotIn978,
      pivotIn979,
      pivotIn980,
      pivotIn981,
    );
  }
  #N() {
    let pivotBind21264 = 0;
    for (let pivotBind22947 of this.#pivotCacheList)
      pivotBind22947.id > pivotBind21264 &&
        (pivotBind21264 = pivotBind22947.id);
    return pivotBind21264 + 1;
  }
  #P(pivotIn13229) {
    return this.#pivotCacheList.find((item) => item.id === pivotIn13229);
  }
  #F(pivotIn7864) {
    if (
      this.#I().some((item) =>
        item.__getPivotTables().some((_item) => _item.name === pivotIn7864),
      )
    )
      throw Error(`PivotTable ${pivotIn7864} already exists`);
  }
  #I() {
    return this.#worksheet
      ? [this.#worksheet]
      : this.#workbook
        ? Array.from(this.#workbook.worksheets)
        : [];
  }

  #opsHost(): PivotCachesOpsHost {
    const caches = this;
    return {
      caches,
      get workbook() {
        return caches.#workbook;
      },
      set workbook(value) {
        caches.#workbook = value;
      },
      get worksheet() {
        return caches.#worksheet;
      },
      set worksheet(value) {
        caches.#worksheet = value;
      },
      get items() {
        return caches.#items;
      },
      set items(value) {
        caches.#items = value;
      },
      get pivotCacheList() {
        return caches.#pivotCacheList;
      },
      set pivotCacheList(value) {
        caches.#pivotCacheList = value;
      },
      normalizeBlankLabel: (value) => caches.#_(value),
      formatPageFieldValue: (pivot, field, item) =>
        caches.#d(pivot, field, item),
      buildRowFieldValueMap: (pivot) => caches.#g(pivot),
      resolvePageFieldCaption: (a, b, c, d, e) => caches.#u(a, b, c, d, e),
      paintHeaderCells: (worksheet, row, startCol, endCol) =>
        caches.#v(worksheet, row, startCol, endCol),
      resolveStyleIndex: (worksheet, row, col) =>
        caches.#y(worksheet, row, col),
    };
  }
}
