// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-36: base slide Element VO (legacy `_workbookZ`).

import { j } from "../presentation-protobuf";
import { EffectList } from "../document-style";
import { FrameBbox } from "../geometry-transform";
import { Paragraphs } from "../text-run";
import { TextStyle } from "../text-style";
import { DetachedText } from "../detached-text";
import {
  bracedUuidUpper,
  composeScopedId,
  nextNumericIdString,
} from "../stable-id";
import { expandPlaceholderTypeCandidates } from "../presentation-theme";
import {
  computeAutoFitScale,
  computeAutoFitOuterHeight,
} from "../text-element-autofit";
import { ensureElementStyleReferences } from "./style-reference";
import { isPositiveNumericId } from "./is-positive-numeric-id";

/** Legacy `_workbookZ` — presentation slide element value object. */
export class SlideElement {
  context;
  data;
  #e;
  #t;
  #n;
  #r;
  #i;
  #a = false;
  #o = false;
  constructor(elIn683, elIn684) {
    this.context = elIn683;
    this.context.fontFamilyCache?.addTextStyle(elIn684.textStyle);
    this.context.fontFamilyCache?.addLevelStyles(
      elIn684.levelsStyles,
    );
    this.context.fontFamilyCache?.addElements(elIn684.children);
    this.#r = FrameBbox.fromProto(elIn684.bbox);
    this.#r.setChangeHandler((elIn13589) => {
      this.recordPositionSet(elIn13589);
    });
    this.#i = new EffectList(elIn684.effects);
    let elBind4946 = this.#s(elIn684.id);
    this.data = {
      id: elBind4946,
      name: elIn684.name ?? "",
      zIndex: elIn684.zIndex,
      type: elIn684.type ?? j.ELEMENT_TYPE_UNSPECIFIED,
      children: elIn684.children ?? [],
      levelsStyles: elIn684.levelsStyles ?? [],
      citations: elIn684.citations ?? [],
      placement: elIn684.placement,
      placeholderIndex: elIn684.placeholderIndex,
      placeholderType: elIn684.placeholderType,
      placeholderHasCustomPrompt:
        elIn684.placeholderHasCustomPrompt,
      hyperlink: elIn684.hyperlink,
      fill: elIn684.fill,
      line: elIn684.line,
      lineReference: elIn684.lineReference,
      fillReference: elIn684.fillReference,
      effectReference: elIn684.effectReference,
      fontReference: elIn684.fontReference,
      shape: elIn684.shape,
      pictureHasPresetGeometry: elIn684.pictureHasPresetGeometry,
      useBackgroundFill: elIn684.useBackgroundFill,
      chartReference: elIn684.chartReference,
      imageReference: elIn684.imageReference,
      video: elIn684.video,
      table: elIn684.table,
      embeddedArtifact: elIn684.embeddedArtifact,
      smartArt: elIn684.smartArt,
      codeBlock: elIn684.codeBlock,
      connector: elIn684.connector,
      creationId: elIn684.creationId ?? bracedUuidUpper(),
      hidden: elIn684.hidden,
    };
    this.#e = new Paragraphs(
      this.#c(),
      elIn684.paragraphs ?? [],
    );
    this.#n = elIn684.textStyle
      ? new TextStyle(elIn684.textStyle)
      : undefined;
  }
  get name() {
    return this.data.name ?? "";
  }
  set name(elIn11787) {
    this.data.name = elIn11787;
    this.recordShapeSet({
      name: elIn11787,
    });
  }
  get slideId() {
    return this.context.getSlide?.().id;
  }
  get paragraphs() {
    return this.#e;
  }
  get placeholderIndex() {
    return this.data.placeholderIndex;
  }
  get placeholderType() {
    return this.data.placeholderType;
  }
  get placeholderTypeCandidates() {
    return expandPlaceholderTypeCandidates(this.placeholderType, {
      additionalSourceTypes: [this.data.placeholderType],
    });
  }
  get hasPlaceholderMetadata() {
    return (
      this.placeholderIndex !== undefined ||
      this.placeholderType !== undefined ||
      this.data.placeholderType !== undefined
    );
  }
  get hyperlink() {
    return this.data.hyperlink;
  }
  get effects() {
    return this.#i;
  }
  get placement() {
    return this.data.placement
      ? structuredClone(this.data.placement)
      : undefined;
  }
  set placement(elIn11039) {
    this.data.placement = elIn11039
      ? structuredClone(elIn11039)
      : undefined;
    this.#x();
  }
  get text() {
    return (
      (this.#t ||= new DetachedText(this.#e, {
        getDefaultTextStyle: () => this.#n,
        setDefaultTextStyle: (elIn5828) => {
          if (
            elIn5828 instanceof TextStyle ||
            elIn5828 === undefined
          ) {
            this.#n = elIn5828 ?? undefined;
            return;
          }
          if (elIn5828 === null) {
            this.#n = undefined;
            return;
          }
          this.#n = new TextStyle(elIn5828);
        },
        resolveTextStyle: (elIn15489) =>
          this.context.getTextStyleByName(elIn15489),
        listPresetProfile:
          this.context.getListPresetProfile?.() ?? "presentation",
        onLayoutInvalidated: () => this.#h(),
        onMutated: () => this.#x(),
        record: {
          recordOp: (elIn15941) =>
            this.recordPatchOp(elIn15941),
          getTargetRef: () => this.recordTargetRef(),
          getAnchorId: () => this.recordTargetRef(),
        },
      })),
      this.#t
    );
  }
  set text(elIn14703) {
    this.text.set(elIn14703);
  }
  get textStyle() {
    return this.#n;
  }
  set textStyle(elIn13293) {
    this.#n = elIn13293;
    this.#x();
  }
  get rotation() {
    return this.#r.rotation;
  }
  get zIndex() {
    return this.data.zIndex;
  }
  get hidden() {
    return this.data.hidden;
  }
  set zIndex(elIn11516) {
    this.data.zIndex = elIn11516;
    this.recordShapeSet({
      zIndex: elIn11516,
    });
  }
  set rotation(elIn7534) {
    if (elIn7534 == null) {
      this.#r.rotation = undefined;
      return;
    }
    this.#r.rotation = elIn7534;
    this.recordShapeSet({
      position: {
        rotation: elIn7534,
      },
    });
  }
  get levelsStyles() {
    return this.data.levelsStyles;
  }
  get position() {
    return this.#r;
  }
  set position(elIn5713) {
    if (elIn5713 === undefined) {
      this.#r.reset();
      this.#h();
      return;
    }
    if (elIn5713 instanceof FrameBbox) {
      this.#r = elIn5713.clone();
      this.#h();
      return;
    }
    this.#r.merge(elIn5713);
    this.#h();
    this.recordPositionSet(this.#b(elIn5713));
  }
  get frame() {
    let { left, top, width, height } = this.position;
    if (
      !(
        left === undefined ||
        top === undefined ||
        width === undefined ||
        height === undefined
      )
    )
      return {
        left,
        top,
        width,
        height,
      };
  }
  resolveFrame() {
    let elBind17504 = this.#f(this.#r.toPartialRect());
    if (elBind17504) return elBind17504;
    let elBind17505 = this.#l();
    return elBind17505
      ? this.#p(elBind17505)
      : this.#p({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        });
  }
  set frame(elIn3890) {
    if (elIn3890 === undefined) {
      this.#r.reset();
      this.#h();
      return;
    }
    let elBind12747 = {};
    elIn3890.left !== undefined &&
      (elBind12747.left = elIn3890.left);
    elIn3890.top !== undefined &&
      (elBind12747.top = elIn3890.top);
    elIn3890.width !== undefined &&
      (elBind12747.width = elIn3890.width);
    elIn3890.height !== undefined &&
      (elBind12747.height = elIn3890.height);
    Object.keys(elBind12747).length !== 0 &&
      (this.#r.merge(elBind12747),
      this.#h(),
      this.recordPositionSet(elBind12747));
  }
  get previewFrame() {
    return this.#r.getPreviewRect();
  }
  set previewFrame(elIn13477) {
    this.#r.setPreview(elIn13477);
  }
  clearPreviewFrame() {
    this.#r.clearPreview();
  }
  commitPreviewFrame() {
    let elBind20699 = this.#r.getPreviewRect();
    elBind20699 &&
      ((this.frame = elBind20699), this.#r.clearPreview());
  }
  #s(elIn5010) {
    let elBind14442 = this.context.getSlide?.(),
      elBind14443 = [
        ...(elBind14442?.elements?.items.map(
          (elIn16626) => elIn16626.id,
        ) ?? []),
        ...(this.context.getExistingElementIds?.() ?? []),
      ];
    return elIn5010 &&
      elIn5010.trim().length > 0 &&
      !elBind14443.includes(elIn5010) &&
      (!elBind14442?.id || isPositiveNumericId(elIn5010))
      ? elIn5010
      : nextNumericIdString(elBind14443);
  }
  getParagraphs() {
    return this.#e;
  }
  #c() {
    return {
      ...this.context,
      fontFamilyCache: this.context.fontFamilyCache,
      getResolvedParagraphTextStyle: (elIn12593) =>
        this.context.getResolvedParagraphTextStyle?.(
          elIn12593,
          this.#n,
        ),
      getResolvedParagraphStyle: (elIn13478) =>
        this.context.getResolvedParagraphStyle?.(elIn13478),
      getResolvedRunTextStyle: (elIn12594, elIn12595) =>
        this.context.getResolvedRunTextStyle?.(
          elIn12594,
          elIn12595,
          this.#n,
        ),
    };
  }
  #l() {
    let elBind13653 = this.placeholderIndex,
      elBind13654 = new Set(this.placeholderTypeCandidates);
    if (
      elBind13653 === undefined &&
      elBind13654.size === 0
    )
      return;
    let elBind13655 = this.context.getPresentation?.(),
      elBind13656 = this.context.getSlide?.();
    if (!elBind13655 || !elBind13656) return;
    let { layout, masterLayout } =
      elBind13656.resolveRenderContext();
    return (
      this.#u(layout, elBind13653, elBind13654) ||
      this.#u(masterLayout, elBind13653, elBind13654)
    );
  }
  #u(elIn9303, elIn9304, elIn9305) {
    let elBind19871 = this.#d(
      elIn9303,
      elIn9304,
      elIn9305,
    );
    if (!elBind19871) return;
    let elBind19872 = elBind19871.resolveFrame();
    return this.#m(elBind19872) ? elBind19872 : undefined;
  }
  #d(elIn5241, elIn5242, elIn5243) {
    if (elIn5241) {
      if (elIn5242 !== undefined) {
        let elBind21263 = elIn5241.elements.find(
          (item) => item.placeholderIndex === elIn5242,
        );
        if (elBind21263) return elBind21263;
      }
      if (elIn5243.size !== 0)
        return elIn5241.elements.find((item) =>
          item.placeholderTypeCandidates.some((_item) =>
            elIn5243.has(_item),
          ),
        );
    }
  }
  #f(elIn3771) {
    if (
      !(
        elIn3771.width === undefined ||
        elIn3771.height === undefined ||
        elIn3771.width <= 0 ||
        elIn3771.height <= 0
      )
    )
      return {
        left: elIn3771.left ?? 0,
        top: elIn3771.top ?? 0,
        width: elIn3771.width,
        height: elIn3771.height,
        rotation: elIn3771.rotation,
        horizontalFlip: elIn3771.horizontalFlip,
        verticalFlip: elIn3771.verticalFlip,
      };
  }
  #p(elIn3810) {
    let elBind12596 = this.#r.toPartialRect();
    return {
      left: elBind12596.left ?? elIn3810.left,
      top: elBind12596.top ?? elIn3810.top,
      width:
        elBind12596.width !== undefined &&
        elBind12596.width > 0
          ? elBind12596.width
          : elIn3810.width,
      height:
        elBind12596.height !== undefined &&
        elBind12596.height > 0
          ? elBind12596.height
          : elIn3810.height,
      rotation: elBind12596.rotation ?? elIn3810.rotation,
      horizontalFlip:
        elBind12596.horizontalFlip ??
        elIn3810.horizontalFlip,
      verticalFlip:
        elBind12596.verticalFlip ?? elIn3810.verticalFlip,
    };
  }
  #m(elIn13590) {
    return elIn13590.width > 0 && elIn13590.height > 0;
  }
  toProto() {
    this.#a && !this.#o && this.#g();
    let elBind15204 = {
        ...this.data,
        effects: this.#i.toProto(),
        textStyle: this.#n?.toProto(),
        paragraphs: this.#e.toProto(),
      },
      elBind15205 = this.#r.toProto();
    return (
      elBind15205 &&
        (elBind15204.bbox = elBind15205),
      ensureElementStyleReferences(elBind15204),
      elBind15204
    );
  }
  #h() {
    this.#o || ((this.#a = true), this.#g());
  }
  #g() {
    let elBind5922 = this.#n;
    if (!elBind5922) {
      this.#a = false;
      return;
    }
    let elBind5923 = elBind5922.autoFit;
    if (!elBind5923) {
      elBind5922.autoFitScale = undefined;
      elBind5922.autoFitLineSpaceReduction = undefined;
      this.#a = false;
      return;
    }
    if (this.#e.toPlainText().length === 0) {
      elBind5922.autoFitScale = undefined;
      elBind5922.autoFitLineSpaceReduction = undefined;
      this.#a = false;
      return;
    }
    let elBind5924 = this.context.getPresentation?.(),
      elBind5925 = this.context.getSlide?.();
    if (!elBind5924 || !elBind5925) return;
    let elBind5926 = this.#_(),
      elBind5927 = elBind5922.wrap !== "none";
    this.#o = true;
    try {
      if (elBind5923 === "shrinkText")
        elBind5922.autoFitScale = computeAutoFitScale({
          element: elBind5926,
          presentation: elBind5924,
          slide: elBind5925,
          wrap: elBind5927,
        });
      else if (elBind5923 === "resizeShapeToFitText") {
        let elBind18639 = computeAutoFitOuterHeight({
            element: elBind5926,
            presentation: elBind5924,
            slide: elBind5925,
            wrap: elBind5927,
          }),
          elBind18640 = this.frame?.height;
        elBind18640 !== undefined &&
          elBind18639 > elBind18640 &&
          this.#r.merge({
            height: elBind18639,
          });
      } else {
        elBind5922.autoFitScale = undefined;
        elBind5922.autoFitLineSpaceReduction = undefined;
      }
    } finally {
      this.#o = false;
      this.#a = false;
      this.context.invalidateRenderContextCache?.();
    }
  }
  #_() {
    let elBind16390 = {
        ...this.data,
        effects: this.#i.toProto(),
        textStyle: this.#n?.toProto(),
        paragraphs: this.#e.toProto(),
      },
      elBind16391 = this.#r.toProto();
    return (
      elBind16391 &&
        (elBind16390.bbox = elBind16391),
      elBind16390
    );
  }
  recordShapeSet(elIn5802) {
    if (
      !Object.values(elIn5802).some((item) => item !== undefined)
    )
      return;
    this.#x();
    let elBind15720 = this.#v();
    if (!elBind15720 || !elBind15720.startsWith("sh/"))
      return;
    let elBind15721 = this.recordTargetRef(elBind15720);
    elBind15721 &&
      this.recordPatchOp({
        op: "shape.set",
        target: elBind15721,
        props: elIn5802,
      });
  }
  recordPositionSet(elIn12401) {
    this.recordShapeSet({
      position: elIn12401,
    });
  }
  elementAnchor() {
    return this.#v();
  }
  recordTargetRef(elIn7780) {
    let elBind18261 = elIn7780 ?? this.#v();
    if (!elBind18261) return;
    let elBind18262 = this.context
      .getPresentation?.()
      ?.getRecorder?.();
    return elBind18262
      ? elBind18262.targetRefForElement(this, elBind18261)
      : elBind18261;
  }
  recordPatchOp(elIn7833) {
    this.#x();
    let elBind18328 = this.context.getPresentation?.();
    elBind18328?.queuePresentationCollabPublish();
    let elBind18329 = elBind18328?.getRecorder?.();
    elBind18329 && elBind18329.record(elIn7833);
  }
  #v() {
    let elBind19093 = this.#y();
    if (!elBind19093) return;
    let elBind19094 = this.context.getSlide?.().id;
    if (!(!elBind19094 || !this.data.id))
      return composeScopedId(
        elBind19093,
        elBind19094,
        this.data.id,
      );
  }
  #y() {
    switch (this.data.type) {
      case j.ELEMENT_TYPE_SHAPE:
      case j.ELEMENT_TYPE_TEXT:
      case j.ELEMENT_TYPE_TEXT_GROUP:
        return "sh";
      case j.ELEMENT_TYPE_CHART:
      case j.ELEMENT_TYPE_CHART_REFERENCE:
        return "ch";
      case j.ELEMENT_TYPE_IMAGE:
      case j.ELEMENT_TYPE_IMAGE_REFERENCE:
        return "im";
      case j.ELEMENT_TYPE_TABLE:
        return "tb";
      case j.ELEMENT_TYPE_EMBEDDED_ARTIFACT:
        return "ea";
      default:
        return;
    }
  }
  #b(elIn2984) {
    if (
      !elIn2984 ||
      elIn2984 instanceof FrameBbox
    )
      return;
    let elBind10990 = {};
    return (
      elIn2984.left !== undefined &&
        (elBind10990.left = elIn2984.left),
      elIn2984.top !== undefined &&
        (elBind10990.top = elIn2984.top),
      elIn2984.width !== undefined &&
        (elBind10990.width = elIn2984.width),
      elIn2984.height !== undefined &&
        (elBind10990.height = elIn2984.height),
      elIn2984.rotation !== undefined &&
        (elBind10990.rotation = elIn2984.rotation),
      elIn2984.horizontalFlip !== undefined &&
        (elBind10990.horizontalFlip =
          elIn2984.horizontalFlip),
      elIn2984.verticalFlip !== undefined &&
        (elBind10990.verticalFlip =
          elIn2984.verticalFlip),
      Object.keys(elBind10990).length > 0
        ? elBind10990
        : undefined
    );
  }
  #x() {
    this.context.onElementMutated?.(this.data.id);
  }
}
