// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: SparklineGroups collection (legacy _D / ensureSparklineGroupsInit).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Cn as spreadsheetCn,
  d,
  En as spreadsheetEn,
  Sn,
  Vn as ensureSpreadsheetProtoInit,
} from "../spreadsheet-protobuf";
import { WorkbookColor, ensureWorkbookColorInit } from "../theme-color";
import {
  ensureStableIdConstantsInit,
  bracedUuidUpper,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  normalizeA1Token,
  parseSheetRef,
} from "../../utils/spreadsheet-address-utils";
import {
  buildSparklineSetOp,
  buildSparklineAddOp,
  buildSparklineSelector,
} from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import { sparklines } from "./sparkline-bindings";

import { ensureSparklineGroupInit } from "./sparkline-group";
export const ensureSparklineGroupsInit = esmInit(() => {
  ensureSpreadsheetProtoInit();
  ensureSparklineGroupInit();
  ensureBinding662();
  ensureSparklineGroupInit();
  sparklines.SparklineGroups = class SparklineGroups {
    #e;
    #t = [];
    #n = [];
    #r = new WeakMap();
    #i = new WeakSet();
    constructor(spIn7105: any, spIn7106: any) {
      this.#e = spIn7105;
      this.#t =
        spIn7106?.groups?.map((spIn10479: any) => {
          let spBind20951 = new sparklines.SparklineGroup(spIn7105, spIn10479);
          return (spBind20951.setChangeHandler(() => this.#s()), spBind20951);
        }) ?? [];
    }
    add(spIn15111: any) {
      return this.#a(spIn15111);
    }
    __addForApply(spIn11408: any) {
      return this.#a(spIn11408, {
        explicitId: spIn11408.id,
        explicitUid: spIn11408.uid,
      });
    }
    #a(spIn334: any, spIn335: any) {
      let { type, targetRange, sourceData, ...rest } = spIn334,
        spBind3647 = spIn335?.explicitId,
        spBind3648 = spIn335?.explicitUid;
      if (spBind3647 && this.#t.some((item) => item.id === spBind3647))
        throw Error(`Sparkline group id already exists: ${spBind3647}`);
      if (spBind3648 && this.#t.some((item) => item.uid === spBind3648))
        throw Error(`Sparkline group uid already exists: ${spBind3648}`);
      let spBind3649 = {
          displayEmptyCellsAs:
            rest.displayEmptyCellsAs ??
            spreadsheetCn.SPARKLINE_DISPLAY_BLANKS_AS_GAP,
          axis: rest.axis ?? {
            showAxis: true,
          },
          lineWeight: rest.lineWeight ?? 1,
          ...rest,
        },
        spBind3650 = {
          sparklines: [],
          type: undefined,
        },
        spBind3651 = this.#e.workbook.getRecorder(),
        spBind3652 = new sparklines.SparklineGroup(this.#e, spBind3650, {
          id: spBind3647,
          uid: spBind3648,
          createdInRecorder: spBind3651,
        });
      if (
        ((spBind3652.type = type),
        (spBind3652.locationRange = this.#o(targetRange)),
        (spBind3652.sourceData = this.#o(sourceData)),
        spBind3649.dateAxisRange &&
          (spBind3652.dateAxisRange = this.#o(spBind3649.dateAxisRange)),
        spBind3649.lineWeight !== undefined &&
          (spBind3652.lineWeight = spBind3649.lineWeight),
        spBind3649.displayEmptyCellsAs &&
          (spBind3652.displayEmptyCellsAs = spBind3649.displayEmptyCellsAs),
        spBind3649.displayHidden !== undefined &&
          (spBind3652.displayHidden = spBind3649.displayHidden),
        spBind3649.seriesColor &&
          (spBind3652.seriesColor = spBind3649.seriesColor),
        spBind3649.negativeColor &&
          (spBind3652.negativeColor = spBind3649.negativeColor),
        spBind3649.axisColor && (spBind3652.axisColor = spBind3649.axisColor),
        spBind3649.markersColor &&
          (spBind3652.markersColor = spBind3649.markersColor),
        spBind3649.firstMarkerColor &&
          (spBind3652.firstMarkerColor = spBind3649.firstMarkerColor),
        spBind3649.lastMarkerColor &&
          (spBind3652.lastMarkerColor = spBind3649.lastMarkerColor),
        spBind3649.highMarkerColor &&
          (spBind3652.highMarkerColor = spBind3649.highMarkerColor),
        spBind3649.lowMarkerColor &&
          (spBind3652.lowMarkerColor = spBind3649.lowMarkerColor),
        spBind3649.axis?.manualMin !== undefined &&
          (spBind3652.axis.manualMin = spBind3649.axis.manualMin),
        spBind3649.axis?.manualMax !== undefined &&
          (spBind3652.axis.manualMax = spBind3649.axis.manualMax),
        spBind3649.axis?.minMode &&
          (spBind3652.axis.minMode = spBind3649.axis.minMode),
        spBind3649.axis?.maxMode &&
          (spBind3652.axis.maxMode = spBind3649.axis.maxMode),
        spBind3649.axis?.showAxis !== undefined &&
          (spBind3652.axis.showAxis = spBind3649.axis.showAxis),
        spBind3649.axis?.rightToLeft !== undefined &&
          (spBind3652.rightToLeft = spBind3649.axis.rightToLeft),
        spBind3649.markers &&
          (spBind3649.markers.show !== undefined &&
            (spBind3652.markers.show = spBind3649.markers.show),
          spBind3649.markers.high !== undefined &&
            (spBind3652.markers.high = spBind3649.markers.high),
          spBind3649.markers.low !== undefined &&
            (spBind3652.markers.low = spBind3649.markers.low),
          spBind3649.markers.first !== undefined &&
            (spBind3652.markers.first = spBind3649.markers.first),
          spBind3649.markers.last !== undefined &&
            (spBind3652.markers.last = spBind3649.markers.last),
          spBind3649.markers.negative !== undefined &&
            (spBind3652.markers.negative = spBind3649.markers.negative)),
        spBind3651)
      ) {
        this.#r.set(spBind3652, spBind3651);
        let spBind16763 = spBind3651.assignAlias(
          spBind3652,
          `sp/${spBind3652.uid}`,
          "sparkline",
        );
        spBind3651.defer(() =>
          this.#i.has(spBind3652)
            ? null
            : buildSparklineAddOp({
                group: spBind3652,
                sheetName: this.#e.name,
                as: spBind16763,
              }),
        );
      }
      return (
        spBind3652.setChangeHandler(() => this.#s()),
        this.#t.push(spBind3652),
        this.#s(),
        spBind3652
      );
    }
    getAll() {
      return [...this.#t];
    }
    getGroupForCell(spIn12009: any) {
      return this.#t.find((item) => item.containsCell(spIn12009));
    }
    clear() {
      for (let spBind22984 of [...this.#t]) this.delete(spBind22984);
    }
    deleteAll() {
      this.clear();
    }
    delete(spIn10212: any) {
      this.#c(spIn10212);
      let spBind20679 = this.#t.indexOf(spIn10212);
      spBind20679 >= 0 && this.#t.splice(spBind20679, 1);
      this.#s();
    }
    toProto() {
      if (this.#t.length)
        return {
          groups: this.#t.map((item) => item.toProto()),
        };
    }
    get renderContext() {
      return this.#n;
    }
    __refreshRenderContext() {
      this.#s();
    }
    replaceFromProto(spIn7188: any) {
      this.#t =
        spIn7188?.groups?.map((spIn10480: any) => {
          let spBind20952 = new sparklines.SparklineGroup(this.#e, spIn10480);
          return (spBind20952.setChangeHandler(() => this.#s()), spBind20952);
        }) ?? [];
      this.#s();
    }
    #o(spIn12292: any) {
      return typeof spIn12292 == "string"
        ? this.#e.getRange(spIn12292)
        : spIn12292;
    }
    #s() {
      this.#n = this.#t.flatMap(
        (item) => (item.updateRenderContext(), item.renderContext),
      );
      this.#e.__queueCollaborativePublish();
    }
    #c(spIn4373: any) {
      let spBind13524 = this.#e.workbook.getRecorder();
      if (!spBind13524) return;
      if (this.#r.get(spIn4373) === spBind13524) {
        this.#i.add(spIn4373);
        return;
      }
      let spBind13525 = {
        op: "sparkline.remove",
        target: {
          sheet: this.#e.name,
          uid: spIn4373.uid,
          selector: buildSparklineSelector(spIn4373, this.#e.name),
        },
      };
      spBind13524.record(spBind13525);
    }
  };
});
