// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation slide shapes collection VO
// (legacy _workbookY / _workbookV / Binding1313).
// Stage-3 wave-81 cohesive slides-collection impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Map as workbookBinding266 } from "../../vendor/yjs";
import { Qt, j } from "../presentation-protobuf";
import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../shape-geometry";
import {
  ensurePluginSlotsInit as workbookU,
  ensureShapeFormulaOpsInit as _S,
  ensureAdjAliasInit as workbookBinding643,
  lookupPresetShapeDefinition,
  evalShapeFormula,
  evalPresetGuides,
} from "../preset-shape";
import { workbookBinding736, workbookBinding739 } from "../shape-element";
import { workbookBinding734, icFn353 } from "../image-connector";
import {
  ensureStableIdClusterInit as workbookBinding647,
  composeScopedId,
} from "../stable-id";
import {
  dotProduct2d,
  cardinalDirectionFromDelta,
  oppositeCardinalDirection,
  axisFromCardinalDirection,
  pointsAlignedOnAxis,
  isPointOnCardinalSide,
  buildShapeAddProps,
  resolveShapeLocalIdAlias,
} from "./slides-geometry-helpers";
import { _workbookV, workbookBinding1313 } from "./sc-slots";
import { ensureUuidClusterInit, allocateLocalId } from "../stable-id";

export const _workbookY = esmInit(() => {
  Qt();
  workbookOt();
  workbookU();
  workbookBinding643();
  _S();
  workbookBinding739();
  workbookBinding734();
  ensureUuidClusterInit();
  workbookBinding647();
  _workbookV = class {
    #e;
    #t;
    #n;
    #r;
    constructor(scIn6439, scIn6440 = []) {
      this.#e = scIn6439;
      this.#t = [];
      this.#n = new Map();
      let scBind16639 = this.#e.getSlideCollabState?.();
      scBind16639 && (this.#r = this.#u(scBind16639));
      scIn6440.forEach((item) => {
        this.add({
          proto: item,
        });
      });
    }
    get items() {
      return [...this.#t];
    }
    getItem(scIn7261) {
      return typeof scIn7261 == "number"
        ? this.getItemAt(scIn7261)
        : typeof scIn7261 == "string"
          ? this.getById(scIn7261) ||
            this.#t.find((item) => item.name === scIn7261)
          : this.getById(scIn7261?.id ?? "");
    }
    getItemAt(scIn9226) {
      if (!Number.isFinite(scIn9226)) return;
      let scBind19792 = Math.trunc(scIn9226);
      if (!(scBind19792 < 0 || scBind19792 >= this.#t.length))
        return this.#t[scBind19792];
    }
    getById(scIn11738) {
      let scBind22084 = this.#a(scIn11738);
      if (scBind22084) return this.#n.get(scBind22084);
    }
    add(scIn2405) {
      let scBind9622 = new workbookBinding736(this.#i(), scIn2405),
        scBind9623 =
          !("proto" in scIn2405) && scIn2405.geometry === "connector",
        scBind9624 = this.#o(scBind9622),
        scBind9625 =
          "proto" in scIn2405
            ? scIn2405.proto.bbox
            : scBind9624.position.toProto();
      if ((this.#m(scBind9624, scBind9625), !("proto" in scIn2405))) {
        let scBind13072 = this.#e.getPresentation?.()?.getRecorder?.(),
          scBind13073 = this.#e.getSlide?.();
        if (scBind13072 && scBind13073) {
          let scBind15911 = composeScopedId(
              "sh",
              scBind13073.id,
              scBind9622.id,
            ),
            scBind15912 = scBind13072.assignAlias(
              scBind9622,
              scBind15911,
              "shape",
            );
          scBind13072.record({
            op: "shape.add",
            slide: scBind13072.targetRefForElement(
              scBind13073,
              `sl/${scBind13073.id}`,
            ),
            as: scBind15912,
            props: buildShapeAddProps(scIn2405, scBind13073, scBind13072),
          });
        }
      }
      return (scBind9623 && scBind9624.sendToBack(), scBind9624);
    }
    connect(scIn2306, scIn2307, scIn2308 = {}) {
      let scBind9407 = this.#h(scIn2306, "from"),
        scBind9408 = this.#h(scIn2307, "to"),
        scBind9409 = scIn2308.kind ?? "elbow",
        scBind9410 = this.#_(scIn2308)
          ? this.#v(scBind9407, scBind9408, scBind9409)
          : null,
        [scBind9411, scBind9412] = this.#g(scBind9407, scBind9408),
        scBind9413 = this.#T(
          scBind9410?.fromIdx ?? scIn2308.fromIdx,
          scIn2308.fromSide,
          scBind9411,
          scBind9407,
          "from",
        ),
        scBind9414 = this.#T(
          scBind9410?.toIdx ?? scIn2308.toIdx,
          scIn2308.toSide,
          scBind9412,
          scBind9408,
          "to",
        ),
        scBind9415 = {
          ...scIn2308,
        };
      return (
        delete scBind9415.fromIdx,
        delete scBind9415.toIdx,
        delete scBind9415.fromSide,
        delete scBind9415.toSide,
        delete scBind9415.kind,
        this.add({
          ...scBind9415,
          geometry: "connector",
          from: scBind9407,
          to: scBind9408,
          fromIdx: scBind9413,
          toIdx: scBind9414,
          kind: scBind9409,
        })
      );
    }
    getConnectionSiteIndex(scIn8189, scIn8190) {
      let scBind18693 =
        scIn8189 instanceof workbookBinding736
          ? scIn8189
          : this.getById(scIn8189);
      if (!scBind18693)
        throw Error(`Connector shape not found for id: ${scIn8189}`);
      return this.#E(scBind18693, scIn8190);
    }
    addPlaceholder(scIn3472) {
      let scBind11910 = {
          id: allocateLocalId(),
          name: scIn3472,
          placeholderIndex: this.#l(),
          paragraphs: [],
          type: j.ELEMENT_TYPE_TEXT,
          effects: [],
          children: [],
          levelsStyles: [],
          citations: [],
        },
        scBind11911 = new workbookBinding736(this.#i(), {
          proto: scBind11910,
        });
      scBind11911.placeholderIndex = scBind11910.placeholderIndex;
      scBind11911.text = "";
      let scBind11912 = this.#o(scBind11911);
      return (this.#m(scBind11912, scBind11910.bbox), scBind11912);
    }
    deleteById(scIn6602) {
      let scBind16874 = this.#n.get(scIn6602);
      if (!scBind16874) return;
      let scBind16875 = this.#t.indexOf(scBind16874);
      scBind16875 !== -1 && this.#t.splice(scBind16875, 1);
      this.#n.delete(scIn6602);
      this.#r?.delete(scIn6602);
      this.#e._unregister(scIn6602);
    }
    deleteAll() {
      let scBind17942 = this.#t;
      this.#t = [];
      this.#n.clear();
      scBind17942.forEach((item) => {
        item.id && (this.#r?.delete(item.id), this.#e._unregister(item.id));
      });
    }
    toProto() {
      return this.items.map((item) => item.toProto());
    }
    setPlaceholdersFromProtos(scIn5544) {
      let scBind15341 = scIn5544.map(
        (item) =>
          new workbookBinding736(this.#i(), {
            proto: item,
          }),
      );
      this.#t.slice().forEach((item) => {
        item.isPlaceholder() && this.#c(item);
      });
      scBind15341.forEach((item) => {
        let scBind21684 = this.#o(item);
        this.#m(scBind21684, item.position.toProto());
      });
    }
    hydrateCollaborativeRefsFromProto() {
      let scBind17833 = this.#e.getSlideCollabState?.();
      if (scBind17833) {
        this.#r = this.#u(scBind17833);
        for (let scBind22807 of this.#t)
          this.#m(scBind22807, scBind22807.position.toProto());
      }
    }
    #i() {
      return this.#e;
    }
    #a(scIn9196) {
      let scBind19765 = scIn9196.trim();
      if (!scBind19765) return "";
      let scBind19766 = this.#e.getSlide?.()?.id;
      return (
        resolveShapeLocalIdAlias(scBind19765, scBind19766, this.#n.keys()) || ""
      );
    }
    #o(scIn13536) {
      return this.#s(scIn13536, {
        register: true,
      });
    }
    #s(scIn6949, scIn6950 = {}) {
      this.#t.push(scIn6949);
      let scBind17312 = scIn6949.id;
      return (
        scBind17312 &&
          (this.#n.set(scBind17312, scIn6949),
          scIn6950.register !== false &&
            this.#e._register(scIn6949, {
              index: scIn6950.index,
            })),
        scIn6949
      );
    }
    #c(scIn7411) {
      let scBind17863 = this.#t.indexOf(scIn7411);
      scBind17863 !== -1 && this.#t.splice(scBind17863, 1);
      let scBind17864 = scIn7411.id;
      scBind17864 &&
        this.#n.get(scBind17864) === scIn7411 &&
        (this.#n.delete(scBind17864), this.#e._unregister(scBind17864));
    }
    #l() {
      let scBind19169 = this.#t
        .map((item) => item.placeholderIndex)
        .filter((item) => item !== undefined);
      return scBind19169.length === 0 ? 0 : Math.max(...scBind19169) + 1;
    }
    #u(scIn9316) {
      let scBind19882 = scIn9316.get("shapes");
      if (scBind19882 instanceof workbookBinding266) return scBind19882;
      let scBind19883 = new workbookBinding266();
      return (scIn9316.set("shapes", scBind19883), scBind19883);
    }
    #d(scIn8459) {
      if (!this.#r) return;
      let scBind18962 = this.#r.get(scIn8459);
      if (scBind18962 instanceof workbookBinding266) return scBind18962;
      let scBind18963 = new workbookBinding266();
      return (this.#r.set(scIn8459, scBind18963), scBind18963);
    }
    #f(scIn6047, scIn6048) {
      let scBind16078 = this.#d(scIn6047);
      if (!scBind16078) return;
      let scBind16079 = scBind16078.get("bbox"),
        scBind16080 =
          scBind16079 instanceof workbookBinding266
            ? scBind16079
            : new workbookBinding266();
      return (
        scBind16079 instanceof workbookBinding266 ||
          scBind16078.set("bbox", scBind16080),
        scIn6048 && scBind16080.size === 0 && this.#p(scBind16080, scIn6048),
        scBind16080
      );
    }
    #p(scIn3442, scIn3443) {
      scIn3443 &&
        (scIn3443.xEmu !== undefined && scIn3442.set("xEmu", scIn3443.xEmu),
        scIn3443.yEmu !== undefined && scIn3442.set("yEmu", scIn3443.yEmu),
        scIn3443.widthEmu !== undefined &&
          scIn3442.set("widthEmu", scIn3443.widthEmu),
        scIn3443.heightEmu !== undefined &&
          scIn3442.set("heightEmu", scIn3443.heightEmu),
        scIn3443.rotation !== undefined &&
          scIn3442.set("rotation", scIn3443.rotation),
        scIn3443.horizontalFlip !== undefined &&
          scIn3442.set("horizontalFlip", scIn3443.horizontalFlip),
        scIn3443.verticalFlip !== undefined &&
          scIn3442.set("verticalFlip", scIn3443.verticalFlip));
    }
    #m(scIn11128, scIn11129) {
      let scBind21624 = this.#f(scIn11128.id, scIn11129);
      scBind21624 &&
        scIn11128.position.bindToBboxStruct(scBind21624, scIn11129);
    }
    #h(scIn8421, scIn8422) {
      if (scIn8421 instanceof workbookBinding736) return scIn8421;
      let scBind18924 = this.getById(scIn8421);
      if (!scBind18924)
        throw Error(
          `Connector ${scIn8422} shape not found for id: ${scIn8421}`,
        );
      return scBind18924;
    }
    #g(scIn5144, scIn5145) {
      let scBind14644 = this.#w(scIn5144, "from"),
        scBind14645 = this.#w(scIn5145, "to"),
        scBind14646 = scBind14645.x - scBind14644.x,
        scBind14647 = scBind14645.y - scBind14644.y;
      return Math.abs(scBind14646) >= Math.abs(scBind14647)
        ? scBind14646 >= 0
          ? ["right", "left"]
          : ["left", "right"]
        : scBind14647 >= 0
          ? ["bottom", "top"]
          : ["top", "bottom"];
    }
    #_(scIn8603) {
      return (
        scIn8603.fromIdx === undefined &&
        scIn8603.toIdx === undefined &&
        scIn8603.fromSide === undefined &&
        scIn8603.toSide === undefined
      );
    }
    #v(scIn4177, scIn4178, scIn4179) {
      let scBind13204 = this.#y(scIn4177),
        scBind13205 = this.#y(scIn4178);
      if (scBind13204.length === 0 || scBind13205.length === 0) return null;
      let scBind13206;
      for (let scBind18499 of scBind13204)
        for (let scBind19393 of scBind13205) {
          let scBind19908 = this.#S(scBind18499, scBind19393, scIn4179);
          (!scBind13206 || scBind19908 < scBind13206.score) &&
            (scBind13206 = {
              fromIdx: scBind18499.index,
              toIdx: scBind19393.index,
              score: scBind19908,
            });
        }
      return scBind13206
        ? {
            fromIdx: scBind13206.fromIdx,
            toIdx: scBind13206.toIdx,
          }
        : null;
    }
    #y(scIn2661) {
      let scBind10161 = this.#e.getPresentation?.(),
        scBind10162 = this.#e.getSlide?.();
      if (!scBind10161 || !scBind10162) return this.#b(scIn2661);
      let scBind10163 = scIn2661.toProto(),
        scBind10164 = scBind10163.shape?.geometry,
        scBind10165 =
          (scBind10164 !== undefined && scBind10164 !== workbookDt.UNRECOGNIZED
            ? lookupPresetShapeDefinition(scBind10164)
            : undefined
          )?.cxnLst?.length ?? 0,
        scBind10166 = scBind10165 > 0 ? scBind10165 : 4,
        scBind10167 = [];
      for (let scBind17270 = 0; scBind17270 < scBind10166; scBind17270 += 1)
        try {
          let scBind19955 = icFn353({
            element: scBind10163,
            siteIndex: scBind17270,
            pres: scBind10161,
            slide: scBind10162,
          });
          scBind10167.push({
            index: scBind17270,
            point: scBind19955.point,
            normal: scBind19955.normal,
          });
        } catch {
          continue;
        }
      return scBind10167.length > 0 ? scBind10167 : this.#b(scIn2661);
    }
    #b(scIn10529) {
      return [0, 1, 2, 3]
        .map((item) => this.#x(scIn10529, item))
        .filter((item) => item !== null);
    }
    #x(scIn1431, scIn1432) {
      let scBind7302 = scIn1431.frame;
      if (
        !scBind7302 ||
        scBind7302.left === undefined ||
        scBind7302.top === undefined ||
        scBind7302.width === undefined ||
        scBind7302.height === undefined
      )
        return null;
      let scBind7303 = scBind7302.left + scBind7302.width / 2,
        scBind7304 = scBind7302.top + scBind7302.height / 2;
      switch (scIn1432) {
        case 0:
          return {
            index: scIn1432,
            point: {
              x: scBind7303,
              y: scBind7302.top,
            },
            normal: {
              x: 0,
              y: -1,
            },
          };
        case 1:
          return {
            index: scIn1432,
            point: {
              x: scBind7302.left,
              y: scBind7304,
            },
            normal: {
              x: -1,
              y: 0,
            },
          };
        case 2:
          return {
            index: scIn1432,
            point: {
              x: scBind7303,
              y: scBind7302.top + scBind7302.height,
            },
            normal: {
              x: 0,
              y: 1,
            },
          };
        case 3:
          return {
            index: scIn1432,
            point: {
              x: scBind7302.left + scBind7302.width,
              y: scBind7304,
            },
            normal: {
              x: 1,
              y: 0,
            },
          };
        default:
          return null;
      }
    }
    #S(scIn3542, scIn3543, scIn3544) {
      let scBind12012 = scIn3543.point.x - scIn3542.point.x,
        scBind12013 = scIn3543.point.y - scIn3542.point.y,
        scBind12014 = Math.hypot(scBind12012, scBind12013),
        scBind12015 = Math.abs(scBind12012) + Math.abs(scBind12013),
        scBind12016 = scIn3544 === "straight" ? scBind12014 : scBind12015,
        scBind12017 = dotProduct2d(
          {
            x: scBind12012,
            y: scBind12013,
          },
          scIn3542.normal,
        ),
        scBind12018 = dotProduct2d(
          {
            x: -scBind12012,
            y: -scBind12013,
          },
          scIn3543.normal,
        ),
        scBind12019 = scBind12016;
      return (
        (scBind12019 += this.#C(scIn3542, scIn3543, scIn3544) * 96),
        scBind12017 < 0 && (scBind12019 += 220 + Math.abs(scBind12017) * 2),
        scBind12018 < 0 && (scBind12019 += 220 + Math.abs(scBind12018) * 2),
        scBind12019
      );
    }
    #C(scIn3849, scIn3850, scIn3851) {
      if (scIn3851 === "straight") return 0;
      let scBind12667 = cardinalDirectionFromDelta(scIn3849.normal),
        scBind12668 = oppositeCardinalDirection(
          cardinalDirectionFromDelta(scIn3850.normal),
        ),
        scBind12669 = axisFromCardinalDirection(scBind12667),
        scBind12670 = axisFromCardinalDirection(scBind12668);
      if (scBind12669 === "none" || scBind12670 === "none") return 2;
      let scBind12671 = 0;
      return (
        (scBind12671 =
          scBind12669 === scBind12670
            ? scBind12667 === scBind12668
              ? +!pointsAlignedOnAxis(
                  scIn3849.point,
                  scIn3850.point,
                  scBind12669,
                )
              : 2
            : 1),
        isPointOnCardinalSide(scIn3849.point, scIn3850.point, scBind12667) ||
          (scBind12671 += 2),
        isPointOnCardinalSide(
          scIn3850.point,
          scIn3849.point,
          cardinalDirectionFromDelta(scIn3850.normal),
        ) || (scBind12671 += 2),
        scBind12671
      );
    }
    #w(scIn5406, scIn5407) {
      let scBind15157 = scIn5406.frame,
        scBind15158 = scBind15157?.left,
        scBind15159 = scBind15157?.top,
        scBind15160 = scBind15157?.width,
        scBind15161 = scBind15157?.height;
      if (
        scBind15158 === undefined ||
        scBind15159 === undefined ||
        scBind15160 === undefined ||
        scBind15161 === undefined
      )
        throw Error(`Connector ${scIn5407} shape is missing frame data.`);
      return {
        x: scBind15158 + scBind15160 / 2,
        y: scBind15159 + scBind15161 / 2,
      };
    }
    #T(scIn5812, scIn5813, scIn5814, scIn5815, scIn5816) {
      if (scIn5812 !== undefined) return scIn5812;
      let scBind15747 = scIn5813 ?? scIn5814,
        scBind15748 = this.#E(scIn5815, scBind15747);
      if (Number.isFinite(scBind15748)) return scBind15748;
      let scBind15749 = workbookBinding1313[scBind15747];
      if (!Number.isFinite(scBind15749))
        throw Error(`Failed to resolve connector ${scIn5816} index.`);
      return scBind15749;
    }
    #E(scIn883, scIn884) {
      if (scIn883.connector) return workbookBinding1313[scIn884];
      let scBind5657 = scIn883.frame,
        scBind5658 = scBind5657?.width,
        scBind5659 = scBind5657?.height;
      if (
        scBind5658 === undefined ||
        scBind5659 === undefined ||
        scBind5658 <= 0 ||
        scBind5659 <= 0
      )
        return workbookBinding1313[scIn884];
      let scBind5660 = scIn883.toProto(),
        scBind5661 = scBind5660.shape?.geometry;
      if (scBind5661 === undefined || scBind5661 === workbookDt.UNRECOGNIZED)
        return workbookBinding1313[scIn884];
      let scBind5662 = lookupPresetShapeDefinition(scBind5661);
      if (!scBind5662) return workbookBinding1313[scIn884];
      let scBind5663 = scBind5662.cxnLst ?? [];
      if (scBind5663.length === 0) return workbookBinding1313[scIn884];
      let scBind5664 = {};
      for (let scBind21685 of scBind5660.shape?.adjustmentList ?? [])
        scBind21685.name &&
          scBind21685.formula &&
          (scBind5664[scBind21685.name] = scBind21685.formula);
      let scBind5665 = evalPresetGuides(
          scBind5662,
          scBind5658,
          scBind5659,
          scBind5664,
        ),
        scBind5666,
        scBind5667 = 1 / 0,
        scBind5668 = 1 / 0,
        scBind5669 = scBind5658 / 2,
        scBind5670 = scBind5659 / 2;
      for (let [scBind9669, scBind9670] of scBind5663.entries()) {
        let scBind9962 = evalShapeFormula(scBind9670.pos?.x, scBind5665),
          scBind9963 = evalShapeFormula(scBind9670.pos?.y, scBind5665);
        if (!Number.isFinite(scBind9962) || !Number.isFinite(scBind9963))
          continue;
        let scBind9964, scBind9965;
        switch (scIn884) {
          case "left":
            scBind9964 = scBind9962;
            scBind9965 = Math.abs(scBind9963 - scBind5670);
            break;
          case "right":
            scBind9964 = Math.abs(scBind9962 - scBind5658);
            scBind9965 = Math.abs(scBind9963 - scBind5670);
            break;
          case "top":
            scBind9964 = scBind9963;
            scBind9965 = Math.abs(scBind9962 - scBind5669);
            break;
          case "bottom":
            scBind9964 = Math.abs(scBind9963 - scBind5659);
            scBind9965 = Math.abs(scBind9962 - scBind5669);
            break;
        }
        (scBind9964 < scBind5667 ||
          (scBind9964 === scBind5667 && scBind9965 < scBind5668)) &&
          ((scBind5667 = scBind9964),
          (scBind5668 = scBind9965),
          (scBind5666 = scBind9669));
      }
      return scBind5666 ?? workbookBinding1313[scIn884];
    }
  };
  workbookBinding1313 = {
    top: 0,
    left: 1,
    bottom: 2,
    right: 3,
  };
});
