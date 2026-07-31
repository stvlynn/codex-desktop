// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation Slides collection VO
// (legacy cLe / sLe / aLe / oLe).
// Stage-3 wave-87 cohesive slides-list impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  randomBase36Id,
  ensureStableIdConstantsInit as ensureStableIdConstants,
} from "../stable-id";
import { X$, aLe, oLe, sLe } from "./ps-slots";
import { Z$ } from "./slide-vo-impl";

export const cLe = esmInit(() => {
  Z$();
  ensureStableIdConstants();
  aLe = 12192e3;
  oLe = 6858e3;
  sLe = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(psIn4352: any, psIn4353: any, psIn4354: any = {}) {
      this.#e = psIn4352;
      this.#r = psIn4354.defaultWidthEmu ?? aLe;
      this.#i = psIn4354.defaultHeightEmu ?? oLe;
      this.#t = [];
      this.#a = new Map();
      (psIn4353 ?? []).forEach((item) => {
        let psBind22088 = new X$(this.#u(), item);
        this.#d(psBind22088);
      });
      this.#c(0);
      this.#n = this.#t.length > 0 ? 0 : -1;
    }
    get items() {
      return [...this.#t];
    }
    getItem(psIn4515: any) {
      if (typeof psIn4515 == "number") {
        let psBind20743 = this.#t[psIn4515];
        if (!psBind20743) throw Error(`Slide index out of range: ${psIn4515}`);
        return psBind20743;
      }
      let psBind13764 = psIn4515?.id ?? "";
      if (!psBind13764) throw Error("Slide id selector requires an id value.");
      let psBind13765 = this.#a.get(psBind13764);
      if (!psBind13765) throw Error(`Slide with id ${psBind13764} not found.`);
      return psBind13765;
    }
    add(psIn929: any = {}) {
      let { layout, layoutId } = psIn929,
        psBind5928 = {
          id: randomBase36Id(),
          index: this.#t.length,
          elements: [],
          useLayoutId: "",
          widthEmu: this.#r,
          heightEmu: this.#i,
        },
        psBind5929 = new X$(this.#u(), psBind5928);
      if (
        ((psIn929.width !== undefined || psIn929.height !== undefined) &&
          psBind5929.setViewportSize(psIn929.width, psIn929.height),
        layoutId)
      ) {
        let psBind20313 = this.#e.getLayoutById(layoutId);
        if (!psBind20313) throw Error(`Layout id not found: ${layoutId}`);
        psBind5929.setLayout(psBind20313);
      } else if (layout) {
        let psBind22188 = this.#e.getLayoutByName(layout);
        psBind5929.setLayout(psBind22188);
      } else {
        let psBind21967 = this.#e.getDefaultLayout?.();
        psBind21967 && psBind5929.setLayout(psBind21967);
      }
      this.#d(psBind5929);
      this.#e.getPresentation?.()?.hydrateSlideCollaborativeState(psBind5929);
      this.#e.getPresentation?.()?.queuePresentationCollabPublish();
      this.#n === -1 && (this.#n = 0);
      let psBind5930 = this.#e.getPresentation?.()?.getRecorder?.();
      if (psBind5930) {
        let psBind15528 = `sl/${psBind5929.id}`,
          psBind15529 = psBind5930.assignAlias(
            psBind5929,
            psBind15528,
            "slide",
          ),
          psBind15530 = psBind5929.frame;
        psBind5930.record({
          op: "slide.add",
          as: psBind15529,
          layout,
          layoutId,
          width: psBind15530.width,
          height: psBind15530.height,
        });
      }
      return psBind5929;
    }
    insert(psIn7202: any = {}) {
      let { after, ...rest } = psIn7202,
        psBind17563 = this.add(rest),
        psBind17564 = this.#p(after);
      return (
        psBind17564 !== this.#t.length - 1 && psBind17563.moveTo(psBind17564),
        {
          slide: psBind17563,
          index: psBind17564,
        }
      );
    }
    #o(psIn1910) {
      let psBind8592 = this.#t.indexOf(psIn1910);
      if (psBind8592 === -1)
        throw Error("Cannot duplicate a slide that is not in this collection.");
      let psBind8593 = {
          ...psIn1910.toProto(),
          id: randomBase36Id(),
          index: psBind8592 + 1,
        },
        psBind8594 = new X$(this.#u(), psBind8593);
      psBind8594.copyComposeRunsFrom(psIn1910);
      this.#d(psBind8594, psBind8592 + 1);
      this.#e.getPresentation?.()?.hydrateSlideCollaborativeState(psBind8594);
      this.#c(psBind8592);
      this.#e.getPresentation?.()?.queuePresentationCollabPublish();
      let psBind8595 = this.#e.getPresentation?.()?.getRecorder?.();
      if (psBind8595) {
        let psBind17245 = `sl/${psBind8594.id}`,
          psBind17246 = psBind8595.assignAlias(
            psBind8594,
            psBind17245,
            "slide",
          );
        psBind8595.record({
          op: "slide.duplicate",
          target: psBind8595.targetRefForElement(psIn1910, `sl/${psIn1910.id}`),
          as: psBind17246,
        });
      }
      return psBind8594;
    }
    #s(psIn1852, psIn1853) {
      let psBind8452 = this.#t.indexOf(psIn1852);
      if (psBind8452 === -1)
        throw Error("Cannot move a slide that is not in this collection.");
      let psBind8453 = Math.max(
        0,
        Math.min(
          Number.isFinite(psIn1853) ? Math.trunc(psIn1853) : 0,
          this.#t.length - 1,
        ),
      );
      if (psBind8453 === psBind8452) return;
      let psBind8454 =
        this.#n >= 0 && this.#n < this.#t.length ? this.#t[this.#n] : undefined;
      this.#t.splice(psBind8452, 1);
      let psBind8455 = Math.max(0, Math.min(psBind8453, this.#t.length));
      this.#t.splice(psBind8455, 0, psIn1852);
      let psBind8456 = Math.min(psBind8452, psBind8455);
      if (
        (this.#c(psBind8456 < 0 ? 0 : psBind8456),
        this.#e.getPresentation?.()?.queuePresentationCollabPublish(),
        psBind8454)
      ) {
        let psBind22442 = this.#t.indexOf(psBind8454);
        this.#n = psBind22442;
      } else this.#n = -1;
    }
    #c(psIn9778) {
      for (
        let psBind21175 = psIn9778;
        psBind21175 < this.#t.length;
        psBind21175 += 1
      ) {
        let psBind22465 = this.#t[psBind21175];
        psBind22465 && psBind22465.setIndex(psBind21175);
      }
    }
    remove(psIn12566: any) {
      let psBind22443 = this.#t[psIn12566];
      psBind22443 && psBind22443.delete();
    }
    replace(psIn4093: any) {
      let psBind13065 = this.getActive()?.id;
      this.#t = [];
      this.#a = new Map();
      for (let psBind22859 of psIn4093 ?? [])
        this.#d(new X$(this.#u(), psBind22859));
      for (let psBind22588 = 0; psBind22588 < this.#t.length; psBind22588 += 1)
        this.#t[psBind22588]?.setIndex(psBind22588);
      if (psBind13065) {
        let psBind20864 = this.#t.findIndex((item) => item.id === psBind13065);
        this.#n = psBind20864 >= 0 ? psBind20864 : -1;
        return;
      }
      this.#n = this.#t.length > 0 ? 0 : -1;
    }
    #l(psIn3865) {
      let psBind12703 = this.#t.indexOf(psIn3865);
      psBind12703 !== -1 &&
        (this.#e
          .getPresentation?.()
          ?.removeSlideCollaborativeState(psIn3865.id),
        this.#f(psIn3865, psBind12703),
        this.#t.length === 0
          ? (this.#n = -1)
          : this.#n > psBind12703
            ? --this.#n
            : this.#n === psBind12703 &&
              (this.#n = Math.min(psBind12703, this.#t.length - 1)),
        this.#c(psBind12703),
        this.#e.getPresentation?.()?.queuePresentationCollabPublish());
    }
    getActive() {
      if (!(this.#n < 0)) return this.#t[this.#n];
    }
    setActive(psIn11534: any) {
      let psBind21941 = this.#t.indexOf(psIn11534);
      psBind21941 >= 0 && (this.#n = psBind21941);
    }
    get count() {
      return this.#t.length;
    }
    toProto() {
      return this.#t.map((item) => item.toProto());
    }
    #u() {
      return {
        ...this.#e,
        duplicateSlide: (psIn16444) => this.#o(psIn16444),
        moveSlide: (psIn16233, psIn16234) => this.#s(psIn16233, psIn16234),
        deleteSlide: (psIn16445) => this.#l(psIn16445),
        renderSlidePreview: (psIn15345, psIn15346) =>
          this.#e.renderSlidePreview(psIn15345, psIn15346),
        resolveSlideRenderContext: (psIn14166) =>
          this.#e.resolveSlideRenderContext(psIn14166),
      };
    }
    #d(psIn6660, psIn6661) {
      if (typeof psIn6661 == "number" && Number.isFinite(psIn6661)) {
        let psBind21074 = Math.max(
          0,
          Math.min(Math.trunc(psIn6661), this.#t.length),
        );
        this.#t.splice(psBind21074, 0, psIn6660);
      } else this.#t.push(psIn6660);
      psIn6660.id && this.#a.set(psIn6660.id, psIn6660);
    }
    #f(psIn7879, psIn7880) {
      let psBind18362 =
        psIn7880 ?? this.#t.findIndex((item) => item === psIn7879);
      psBind18362 >= 0 &&
        psBind18362 < this.#t.length &&
        this.#t.splice(psBind18362, 1);
      psIn7879.id &&
        this.#a.get(psIn7879.id) === psIn7879 &&
        this.#a.delete(psIn7879.id);
    }
    #p(psIn2883) {
      if (psIn2883 == null || this.#t.length <= 1) return this.#t.length - 1;
      let psBind10727;
      if (typeof psIn2883 == "number") {
        if (!Number.isFinite(psIn2883))
          throw Error("Insert index must be a finite number.");
        if (
          ((psBind10727 = Math.trunc(psIn2883)),
          psBind10727 < 0 || psBind10727 >= this.#t.length)
        )
          throw Error("Insert index is out of range.");
      } else if (
        ((psBind10727 = this.#t.indexOf(psIn2883)), psBind10727 === -1)
      )
        throw Error(
          "Cannot insert relative to a slide outside this collection.",
        );
      let psBind10728 = psBind10727 + 1;
      return Math.min(Math.max(psBind10728, 0), this.#t.length - 1);
    }
  };
});
