// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide layout/master VO (legacy Binding1344 / uDe).
// Stage-3 wave-142.

import { randomPositiveIntString as workbookHelper298 } from "../stable-id";
import { workbookHelper667 } from "../placeholder-resolve";
import { workbookBinding1294 } from "./slide-background-impl";
import { workbookBinding1340 } from "./slide-elements-collection-impl";

export class workbookBinding1344 {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  constructor(slIn1394: any, slIn1395: any) {
    if (((this.#e = slIn1395), "proto" in slIn1394)) {
      let slBind11349 = slIn1394.proto;
      this.#e.fontFamilyCache?.addLevelStyles(slBind11349.bodyLevelStyles);
      this.#e.fontFamilyCache?.addLevelStyles(slBind11349.titleLevelStyles);
      this.#e.fontFamilyCache?.addLevelStyles(slBind11349.otherLevelStyles);
      this.#e.fontFamilyCache?.addThemeFontScheme(
        slBind11349.theme?.fontScheme,
      );
      this.#t = slBind11349;
      this.#n = new workbookBinding1340(this.#e, slBind11349.elements ?? []);
      this.#r = new workbookBinding1294(
        this.#o(),
        slBind11349.background ?? undefined,
      );
      this.#a = slBind11349.theme
        ? this.#e.createTheme(slBind11349.theme)
        : undefined;
    } else {
      this.#t = {
        id: workbookHelper298(),
        name: slIn1394.name,
        type: slIn1394.type ?? "",
        bodyLevelStyles: [],
        titleLevelStyles: [],
        otherLevelStyles: [],
        parentLayoutId: "",
        colorMap: undefined,
        slideGuides: [],
      };
      this.#n = new workbookBinding1340(this.#e, []);
      this.#r = new workbookBinding1294(this.#o(), undefined);
      this.#a = undefined;
    }
  }
  get id() {
    return this.#t.id;
  }
  get name() {
    return this.#t.name;
  }
  rename(slIn14901) {
    this.#t.name = slIn14901;
  }
  get background() {
    return this.#r;
  }
  get titleLevelStyles() {
    return this.#t.titleLevelStyles;
  }
  get bodyLevelStyles() {
    return this.#t.bodyLevelStyles;
  }
  get otherLevelStyles() {
    return this.#t.otherLevelStyles;
  }
  get shapes() {
    return this.#n.shapes;
  }
  get images() {
    return this.#n.images;
  }
  get tables() {
    return this.#n.tables;
  }
  get charts() {
    return this.#n.charts;
  }
  get parentLayoutId() {
    return this.#t.parentLayoutId;
  }
  setParentLayoutId(slIn10464) {
    this.#t.parentLayoutId = slIn10464;
    this.#e.invalidateRenderContextCache?.();
  }
  setColorMap(slIn11197) {
    this.#t.colorMap = slIn11197;
    this.#e.invalidateRenderContextCache?.();
  }
  get elements() {
    return this.#n.items;
  }
  get type() {
    return this.#t.type;
  }
  get colorMap() {
    return this.#t.colorMap;
  }
  get showMasterShapes() {
    return this.#t.showMasterShapes;
  }
  get furnitureVisibility() {
    return this.#t.furnitureVisibility;
  }
  get slideGuides() {
    return this.#t.slideGuides ?? [];
  }
  get theme() {
    return this.#a;
  }
  get placeholders() {
    return ((this.#i ||= new slBind1342(this.#n.shapes, "layout")), this.#i);
  }
  findPlaceholder(slIn2953, slIn2954, slIn2955) {
    let slBind10886 = Array.isArray(slIn2953) ? slIn2953 : [],
      slBind10887 = slIn2955?.allowIndexMatchWithoutType === true;
    if (slBind10886.length === 0 && !slBind10887) return;
    let slBind10888 = this.#n.items;
    if (!slBind10888.length) return;
    let slBind10889 = (slIn13734) =>
        slIn13734.placeholderTypeCandidates.some((item) =>
          slBind10886.includes(item),
        ),
      slBind10890 =
        slBind10886.length > 0
          ? slBind10888.find(
              (item) =>
                slBind10889(item) && (item.placeholderIndex ?? 0) === slIn2954,
            )
          : undefined,
      slBind10891 = slBind10887
        ? slBind10888.find((item) => item.placeholderIndex === slIn2954)
        : undefined,
      slBind10892 =
        slBind10886.length > 0
          ? slBind10888.find((item) => slBind10889(item))
          : undefined;
    return slBind10890 ?? slBind10891 ?? slBind10892;
  }
  toProto() {
    return {
      id: this.#t.id,
      name: this.#t.name,
      elements: this.#n.toProto(),
      background: this.#r.toProto(),
      type: this.#t.type,
      bodyLevelStyles: this.#t.bodyLevelStyles.map(workbookHelper667),
      titleLevelStyles: this.#t.titleLevelStyles.map(workbookHelper667),
      otherLevelStyles: this.#t.otherLevelStyles.map(workbookHelper667),
      parentLayoutId: this.#t.parentLayoutId,
      colorMap: this.#t.colorMap,
      theme: this.#a?.toProto(),
      showMasterShapes: this.#t.showMasterShapes,
      showMasterPlaceholderAnimations: this.#t.showMasterPlaceholderAnimations,
      matchingName: this.#t.matchingName,
      preserve: this.#t.preserve,
      userDrawn: this.#t.userDrawn,
      furnitureVisibility: this.#t.furnitureVisibility,
      slideGuides: this.#t.slideGuides,
    };
  }
  #o() {
    return {
      stub: () => {},
    };
  }
}
