// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-40: presentation Image element VO (legacy Binding660).

import { j } from "../presentation-protobuf";
import { ShapeGeometry } from "../shape-geometry";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { Line } from "../line";
import { SlideElement } from "../slide-element";
import { frameUnitToEmu } from "../geometry-transform";
import { randomBase36Id } from "../stable-id";
import { coerceBorderRadiusPx } from "../shape-utility";
import {
  computeContainLayout,
  computeObjectFitRects,
  probeImageSize,
} from "../image-mime";
import {
  DEFAULT_OCTET_STREAM,
  buildRoundRectAdjList,
  clampUnit,
  composeImageAid,
  hasImageContent,
  hasImageSourceFields,
  normalizeCropFraction,
  normalizeImagePayload,
  normalizeImageReplaceProps,
  reverseShapeGeometryNameMap,
  withDefaultObjectFit,
} from "../image-source";

/** Legacy `workbookBinding660` — slide image element value object. */
export class ImageElement extends SlideElement {
  type = "image";
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
  #u = false;
  constructor(imgIn1007, imgIn1008) {
    super(imgIn1007, imgIn1008);
    this.data.line = imgIn1008.line;
    this.data.imageReference = imgIn1008.imageReference?.id
      ? {
          id: imgIn1008.imageReference.id,
        }
      : undefined;
    (this.data.type === undefined ||
      this.data.type === j.ELEMENT_TYPE_UNSPECIFIED) &&
      (this.data.type = j.ELEMENT_TYPE_IMAGE_REFERENCE);
    let imgBind6151 = imgIn1008.image;
    if (
      ((this.#n = imgBind6151?.alt ?? ""),
      (this.#r = undefined),
      (this.#t = undefined),
      (this.#e = false),
      (this.#i = false),
      (this.#a = this.#S(imgIn1008)),
      (this.#o = this.#C(imgIn1008)),
      (this.#s = imgIn1008.imageMask?.adjustmentList?.map(
        (imgIn16412) => ({
          ...imgIn16412,
        }),
      )),
      (this.#c = undefined),
      (this.#l = undefined),
      !this.data.imageReference && imgBind6151)
    ) {
      let imgBind13175 = {};
      imgBind6151.data && imgBind6151.data.length > 0
        ? ((imgBind13175.data = new Uint8Array(
            imgBind6151.data,
          )),
          (imgBind13175.contentType =
            imgBind6151.contentType &&
            imgBind6151.contentType.length > 0
              ? imgBind6151.contentType
              : DEFAULT_OCTET_STREAM))
        : imgBind6151.contentType &&
          (imgBind13175.contentType =
            imgBind6151.contentType);
      let imgBind13176 =
        this.context.createImageAsset(imgBind13175);
      this.setImageReference(imgBind13176.id);
    }
    this.data.shape = undefined;
    this.data.image = undefined;
    this.#v();
  }
  get id() {
    return this.data.id;
  }
  get aid() {
    return this.slideId ? composeImageAid("im", this.slideId, this.id) : undefined;
  }
  toSnapshot() {
    this.#v();
    let imgBind9878 = this.slideId,
      imgBind9879 = this.id;
    return {
      aid: composeImageAid("im", imgBind9878, imgBind9879),
      kind: "image",
      id: imgBind9879,
      slideId: imgBind9878,
      name: this.name,
      alt: this.alt,
      prompt: this.prompt,
      isPlaceholder: this.isPlaceholder,
      contentType: this.image?.contentType,
      fit: this.fit,
      geometry: this.geometry,
      crop: this.crop,
      rotation: this.rotation,
      flipHorizontal: this.flipHorizontal,
      flipVertical: this.flipVertical,
      lockAspectRatio: this.lockAspectRatio,
      frame: this.frame,
    };
  }
  get image() {
    let imgBind21016 = this.data.imageReference?.id;
    if (imgBind21016)
      return this.context.getImageById(imgBind21016);
  }
  get imageReferenceId() {
    return this.data.imageReference?.id;
  }
  async getBitmap() {
    let imgBind9745 = this.image;
    if (!imgBind9745) {
      if (this.prompt || this.isPlaceholder) return;
      console.warn("Image element missing asset", {
        elementId: this.id,
      });
      return;
    }
    if (this.#x(imgBind9745)) return;
    let imgBind9746 = this.resolveFrame();
    try {
      return await imgBind9745.getBitmap(
        imgBind9746.width,
        imgBind9746.height,
      );
    } catch (imgBind15404) {
      console.warn(
        "Image element asset decode failure",
        {
          elementId: this.id,
          assetId: imgBind9745.id,
          contentType: imgBind9745.contentType,
          uri: imgBind9745.uri ?? null,
        },
        imgBind15404,
      );
      return;
    }
  }
  get alt() {
    return this.#n;
  }
  set alt(imgIn12285) {
    this.#n = imgIn12285 ?? "";
    this.#E({
      alt: this.#n,
    });
  }
  get prompt() {
    return (this.#v(), this.#r);
  }
  set prompt(imgIn6504) {
    let imgBind16713 = this.#y(imgIn6504);
    if (imgBind16713) this.#g().prompt = imgBind16713;
    else {
      let imgBind22341 = this.image;
      imgBind22341 && (imgBind22341.prompt = undefined);
    }
    this.#r = imgBind16713;
    this.#i = !!(imgBind16713 && !this.#b(this.image));
    this.#O();
  }
  get isPlaceholder() {
    return (this.#v(), this.#i);
  }
  set isPlaceholder(imgIn12915) {
    this.#i = !!imgIn12915;
    this.#O();
  }
  get fit() {
    return this.#t;
  }
  set fit(imgIn13044) {
    this.#t = imgIn13044;
    this.#E({
      fit: imgIn13044,
    });
  }
  get geometry() {
    return this.#o;
  }
  get line() {
    return new Line({
      type: "proto",
      proto: this.data.line,
    });
  }
  set geometry(imgIn4035) {
    if (!imgIn4035) {
      this.#o = undefined;
      this.#s = undefined;
      this.#c = undefined;
      this.data.shape = undefined;
      this.#E({
        geometry: undefined,
      });
      return;
    }
    this.#o = imgIn4035;
    this.#s = undefined;
    imgIn4035 !== "roundRect" && (this.#c = undefined);
    this.data.shape = undefined;
    this.#E({
      geometry: imgIn4035,
    });
  }
  get borderRadius() {
    return this.#c;
  }
  set borderRadius(imgIn2575) {
    if (imgIn2575 === undefined) {
      this.#s = undefined;
      this.#c = undefined;
      this.#O();
      return;
    }
    if (
      this.#o !== undefined &&
      this.#o !== "rect" &&
      this.#o !== "roundRect"
    )
      throw Error(
        "image.borderRadius only supports rect or roundRect image masks.",
      );
    let imgBind9961 = coerceBorderRadiusPx(imgIn2575);
    this.#s = undefined;
    this.#c = imgIn2575;
    imgBind9961 > 0
      ? (this.#o = "roundRect")
      : this.#o === "roundRect" && (this.#o = undefined);
    this.data.shape = undefined;
    this.#O();
    this.#E({
      borderRadius: imgIn2575,
    });
  }
  get lockAspectRatio() {
    return this.#e;
  }
  set lockAspectRatio(imgIn11268) {
    this.#e = !!imgIn11268;
    this.#E({
      lockAspectRatio: this.#e,
    });
  }
  get crop() {
    if (this.#a)
      return {
        ...this.#a,
      };
  }
  set crop(imgIn1265) {
    if (!imgIn1265) {
      this.#a = undefined;
      this.data.fill?.srcRect &&
        (this.data.fill = {
          ...this.data.fill,
          srcRect: undefined,
        });
      this.#E({
        crop: undefined,
      });
      return;
    }
    let imgBind6886 = this.#m(),
      imgBind6887 = {
        left: normalizeCropFraction(
          imgIn1265.left,
          imgBind6886?.width,
          "image.crop.left",
        ),
        top: normalizeCropFraction(
          imgIn1265.top,
          imgBind6886?.height,
          "image.crop.top",
        ),
        right: normalizeCropFraction(
          imgIn1265.right,
          imgBind6886?.width,
          "image.crop.right",
        ),
        bottom: normalizeCropFraction(
          imgIn1265.bottom,
          imgBind6886?.height,
          "image.crop.bottom",
        ),
      };
    this.#a = imgBind6887;
    let imgBind6888 = (imgIn15641) =>
        Math.round(clampUnit(imgIn15641, 0, 1) * 1e5),
      imgBind6889 = this.data.fill ?? {
        id: "",
        type: 0,
        color: undefined,
        gradientStops: [],
        pictureEffects: [],
      };
    imgBind6889.type = imgBind6889.type ?? 0;
    Array.isArray(imgBind6889.gradientStops) ||
      (imgBind6889.gradientStops = []);
    imgBind6889.srcRect = {
      l: imgBind6888(imgBind6887.left),
      t: imgBind6888(imgBind6887.top),
      r: imgBind6888(imgBind6887.right),
      b: imgBind6888(imgBind6887.bottom),
    };
    this.data.fill = imgBind6889;
    this.#E({
      crop: imgBind6887,
    });
  }
  get width() {
    return this.position.width;
  }
  set width(imgIn6505) {
    let imgBind16714 = Number.isFinite(imgIn6505)
        ? Math.max(0, imgIn6505)
        : 0,
      imgBind16715 = this.#d(),
      imgBind16716 = this.#e
        ? this.#f(imgBind16715)
        : undefined;
    imgBind16715.width = imgBind16714;
    imgBind16716 &&
      imgBind16716 > 0 &&
      this.#e &&
      (imgBind16715.height =
        imgBind16714 / imgBind16716);
    this.position = imgBind16715;
  }
  get height() {
    return this.position.height;
  }
  set height(imgIn6495) {
    let imgBind16698 = Number.isFinite(imgIn6495)
        ? Math.max(0, imgIn6495)
        : 0,
      imgBind16699 = this.#d(),
      imgBind16700 = this.#e
        ? this.#f(imgBind16699)
        : undefined;
    imgBind16699.height = imgBind16698;
    imgBind16700 &&
      imgBind16700 > 0 &&
      this.#e &&
      (imgBind16699.width =
        imgBind16698 * imgBind16700);
    this.position = imgBind16699;
  }
  get size() {
    return {
      width: this.position.width,
      height: this.position.height,
    };
  }
  set size(imgIn8301) {
    let imgBind18802 = this.#d();
    imgIn8301.width !== undefined &&
      (imgBind18802.width = imgIn8301.width);
    imgIn8301.height !== undefined &&
      (imgBind18802.height = imgIn8301.height);
    this.position = imgBind18802;
  }
  get flipHorizontal() {
    return this.position.horizontalFlip;
  }
  set flipHorizontal(imgIn12494) {
    this.position.horizontalFlip = !!imgIn12494;
  }
  get flipVertical() {
    return this.position.verticalFlip;
  }
  set flipVertical(imgIn12718) {
    this.position.verticalFlip = !!imgIn12718;
  }
  replace(imgIn2761) {
    let imgBind10400 = withDefaultObjectFit({
      options: imgIn2761,
      currentFit: this.fit,
      frameWidth: this.position.width,
      frameHeight: this.position.height,
    });
    this.#k(() => {
      "alt" in imgBind10400 &&
        imgBind10400.alt !== undefined &&
        (this.alt = imgBind10400.alt);
      "fit" in imgBind10400 &&
        imgBind10400.fit !== undefined &&
        ((this.fit = imgBind10400.fit),
        (this.lockAspectRatio = true));
      "prompt" in imgBind10400
        ? (this.prompt = imgBind10400.prompt)
        : hasImageSourceFields(imgBind10400) &&
          (this.prompt = undefined);
      let imgBind13707 = normalizeImagePayload(imgBind10400);
      this.applyAssetPayload(imgBind13707);
      this.#v();
    });
    this.#D(imgBind10400);
  }
  regenerate(imgIn1125 = {}) {
    let computeObjectFitRects2 = this.context.getPresentation?.();
    if (!computeObjectFitRects2)
      throw Error("Image regeneration is not available in this context.");
    let computeObjectFitRects3 = this.elementAnchor(),
      computeObjectFitRects4 = this.slideId;
    if (
      !computeObjectFitRects3 ||
      !computeObjectFitRects3.startsWith("im/") ||
      !computeObjectFitRects4
    )
      throw Error("Image regeneration requires a slide-anchored image.");
    let computeObjectFitRects5 =
        imgIn1125.prompt ?? this.prompt ?? this.image?.prompt,
      computeObjectFitRects6 =
        typeof computeObjectFitRects5 == "string" &&
        computeObjectFitRects5.trim().length > 0
          ? computeObjectFitRects5.trim()
          : undefined;
    if (!computeObjectFitRects6)
      throw Error(
        "image.regenerate requires a prompt. Set image.prompt or pass { prompt }.",
      );
    this.prompt = computeObjectFitRects6;
    let computeObjectFitRects7 = {
      requestId: `imggen_${randomBase36Id()}`,
      aid: computeObjectFitRects3,
      slideId: computeObjectFitRects4,
      elementId: this.id,
      prompt: computeObjectFitRects6,
      kind: imgIn1125.kind ?? "content",
      fit: imgIn1125.fit ?? this.fit ?? "contain",
      frameWidthPx: this.frame?.width,
      frameHeightPx: this.frame?.height,
      size: imgIn1125.size,
      quality: imgIn1125.quality,
      background: imgIn1125.background,
      outputFormat: imgIn1125.outputFormat,
      source: "image.regenerate",
    };
    computeObjectFitRects2.queueImageGenerationRequest(computeObjectFitRects7);
  }
  delete() {
    let imgBind16555 = this.elementAnchor();
    if (imgBind16555 && imgBind16555.startsWith("im/")) {
      let imgBind20853 = this.recordTargetRef(imgBind16555);
      imgBind20853 &&
        this.recordPatchOp({
          op: "image.remove",
          target: imgBind20853,
        });
    }
    this.context.deleteElement?.(this.id);
  }
  setImageReference(imgIn9664) {
    this.data.imageReference = imgIn9664
      ? {
          id: imgIn9664,
        }
      : undefined;
    this.#l = undefined;
    this.#v();
  }
  resolveFrame() {
    let imgBind11511 = super.resolveFrame();
    if (
      this.#t !== "contain" ||
      !this.#e ||
      imgBind11511.width <= 0 ||
      imgBind11511.height <= 0
    )
      return imgBind11511;
    let imgBind11512 = this.#p();
    if (!imgBind11512) return imgBind11511;
    let { width, height, offsetX, offsetY } = computeContainLayout(
      imgBind11511.width,
      imgBind11511.height,
      imgBind11512,
    );
    return width <= 0 || height <= 0
      ? imgBind11511
      : {
          ...imgBind11511,
          left: imgBind11511.left + offsetX,
          top: imgBind11511.top + offsetY,
          width,
          height,
        };
  }
  resolveImageFill() {
    let imgBind8269 = this.data.fill?.pictureEffects;
    if (!this.#t || !this.#e)
      return {
        srcRect: this.data.fill?.srcRect,
        stretchFillRect: this.data.fill?.stretchFillRect,
        pictureEffects: imgBind8269,
      };
    let imgBind8270 = super.resolveFrame();
    if (imgBind8270.width <= 0 || imgBind8270.height <= 0)
      return {
        srcRect: this.data.fill?.srcRect,
        stretchFillRect: this.data.fill?.stretchFillRect,
        pictureEffects: imgBind8269,
      };
    let imgBind8271 = this.#p();
    return imgBind8271
      ? this.#t === "contain"
        ? {
            pictureEffects: imgBind8269,
          }
        : {
            ...computeObjectFitRects(
              this.#t,
              imgBind8270.width,
              imgBind8270.height,
              imgBind8271,
            ),
            pictureEffects: imgBind8269,
          }
      : {
          srcRect: this.data.fill?.srcRect,
          stretchFillRect: this.data.fill?.stretchFillRect,
          pictureEffects: imgBind8269,
        };
  }
  resolveImageMask() {
    if (this.#o)
      return {
        geometry: this.#o,
        adjustmentList: this.#T() ?? [],
      };
  }
  toProto() {
    let imgBind15150 = super.toProto();
    return (
      (imgBind15150.image &&= undefined),
      imgBind15150.imageReference &&
        !imgBind15150.imageReference.id &&
        (imgBind15150.imageReference = undefined),
      (imgBind15150.shape &&= undefined),
      this.#h(imgBind15150),
      (imgBind15150.imageMask = this.#w()),
      imgBind15150
    );
  }
  applyAssetPayload(imgIn10382) {
    if (!hasImageContent(imgIn10382)) return;
    let imgBind20854 = this.#g();
    this.#_(imgBind20854, imgIn10382);
    this.#v();
  }
  recordPositionSet(imgIn13156) {
    this.#E({
      position: imgIn13156,
    });
  }
  #d() {
    return this.position.toJSON();
  }
  #f(imgIn10420) {
    let imgBind20890 = imgIn10420.width ?? 0,
      imgBind20891 = imgIn10420.height ?? 0;
    if (!(imgBind20890 <= 0 || imgBind20891 <= 0))
      return imgBind20890 / imgBind20891;
  }
  #p() {
    if (this.#l !== undefined) return this.#l;
    let imgBind17763 = this.#m();
    if (!imgBind17763) return;
    let imgBind17764 =
      imgBind17763.width / imgBind17763.height;
    if (
      !(!Number.isFinite(imgBind17764) || imgBind17764 <= 0)
    )
      return ((this.#l = imgBind17764), imgBind17764);
  }
  #m() {
    let imgBind19679 = this.image;
    if (!imgBind19679) return;
    let imgBind19680 = imgBind19679.data;
    return imgBind19680 && imgBind19680.byteLength > 0
      ? probeImageSize(
          imgBind19680,
          imgBind19679.contentType,
        )
      : undefined;
  }
  #h(imgIn1065) {
    if (!this.#t || !this.#e) return;
    let imgBind6349 = this.position.width,
      imgBind6350 = this.position.height;
    if (imgBind6349 <= 0 || imgBind6350 <= 0) return;
    let imgBind6351 = this.#p();
    if (!imgBind6351) return;
    if (this.#t === "contain") {
      let { width, height, offsetX, offsetY } = computeContainLayout(
        imgBind6349,
        imgBind6350,
        imgBind6351,
      );
      if (width > 0 && height > 0) {
        let imgBind15497 = imgIn1065.bbox
            ? {
                ...imgIn1065.bbox,
              }
            : {},
          imgBind15498 = this.position.left,
          imgBind15499 = this.position.top;
        imgBind15497.xEmu = frameUnitToEmu(
          imgBind15498 + offsetX,
        );
        imgBind15497.yEmu = frameUnitToEmu(
          imgBind15499 + offsetY,
        );
        imgBind15497.widthEmu = frameUnitToEmu(width);
        imgBind15497.heightEmu = frameUnitToEmu(height);
        imgIn1065.bbox = imgBind15497;
      }
      imgIn1065.fill &&= {
        ...imgIn1065.fill,
        srcRect: undefined,
        stretchFillRect: undefined,
      };
      return;
    }
    let imgBind6352 = computeObjectFitRects(
        this.#t,
        imgBind6349,
        imgBind6350,
        imgBind6351,
      ),
      imgBind6353 = imgIn1065.fill
        ? {
            ...imgIn1065.fill,
          }
        : {
            id: "",
            type: 0,
            color: undefined,
            gradientStops: [],
            pictureEffects: [],
          };
    imgBind6353.type = imgBind6353.type ?? 0;
    Array.isArray(imgBind6353.gradientStops) ||
      (imgBind6353.gradientStops = []);
    imgBind6353.srcRect = imgBind6352.srcRect;
    imgBind6353.stretchFillRect =
      imgBind6352.stretchFillRect;
    imgIn1065.fill = imgBind6353;
  }
  #g() {
    let imgBind18483 = this.image;
    return (
      imgBind18483 ||
        ((imgBind18483 = this.context.createImageAsset()),
        this.setImageReference(imgBind18483.id)),
      imgBind18483
    );
  }
  #_(imgIn2979, imgIn2980) {
    (imgIn2980.data ||
      imgIn2980.uri !== undefined ||
      imgIn2980.contentType) &&
      (this.#l = undefined);
    imgIn2980.data &&
      ((imgIn2979.data = imgIn2980.data),
      (imgIn2980.contentType ||= DEFAULT_OCTET_STREAM),
      (imgIn2979.uri = imgIn2980.uri ?? undefined),
      (imgIn2979.prompt = imgIn2980.prompt ?? undefined));
    imgIn2980.contentType &&
      (imgIn2979.contentType = imgIn2980.contentType);
    imgIn2980.uri === undefined
      ? imgIn2980.data && (imgIn2979.uri = undefined)
      : ((imgIn2979.uri = imgIn2980.uri),
        imgIn2980.data ||
          (imgIn2979.data = new Uint8Array()));
    imgIn2980.prompt === undefined
      ? (imgIn2980.data || imgIn2980.uri) &&
        (imgIn2979.prompt = undefined)
      : (imgIn2979.prompt = imgIn2980.prompt);
  }
  #v() {
    let imgBind20138 = this.image,
      imgBind20139 = this.#y(
        imgBind20138?.prompt ?? this.#r,
      );
    this.#r = imgBind20139;
    this.#i = !!(imgBind20139 && !this.#b(imgBind20138));
  }
  #y(imgIn10289) {
    if (typeof imgIn10289 != "string") return;
    let imgBind20768 = imgIn10289.trim();
    return imgBind20768.length > 0
      ? imgBind20768
      : undefined;
  }
  #b(imgIn8902) {
    return imgIn8902
      ? imgIn8902.data.byteLength > 0
        ? true
        : typeof imgIn8902.uri == "string" &&
          imgIn8902.uri.trim().length > 0
      : false;
  }
  #x(imgIn13294) {
    return !!(this.prompt && !this.#b(imgIn13294));
  }
  #S(imgIn7567) {
    let imgBind18046 = imgIn7567.fill?.srcRect;
    if (!imgBind18046) return;
    let imgBind18047 = (imgIn15104) =>
      imgIn15104 === undefined
        ? 0
        : clampUnit(imgIn15104, 0, 1e5) / 1e5;
    return {
      left: imgBind18047(imgBind18046.l),
      top: imgBind18047(imgBind18046.t),
      right: imgBind18047(imgBind18046.r),
      bottom: imgBind18047(imgBind18046.b),
    };
  }
  #C(imgIn2973) {
    let imgBind10921 = imgIn2973,
      imgBind10922 = imgBind10921.imageMask?.geometry;
    if (
      imgBind10922 !== undefined &&
      imgBind10922 in shapeGeometryNameToProto &&
      imgBind10922 !== "custom" &&
      imgBind10922 !== "connector"
    )
      return imgBind10922;
    let imgBind10923 = imgBind10921.image?.mask?.geometry;
    if (
      typeof imgBind10923 == "string" &&
      imgBind10923 in shapeGeometryNameToProto &&
      imgBind10923 !== "custom" &&
      imgBind10923 !== "connector"
    )
      return imgBind10923;
    let imgBind10924 = imgIn2973.shape?.geometry;
    if (
      !(
        imgBind10924 === undefined ||
        imgBind10924 === ShapeGeometry.SHAPE_GEOMETRY_UNSPECIFIED ||
        imgBind10924 === ShapeGeometry.UNRECOGNIZED
      )
    )
      return reverseShapeGeometryNameMap[imgBind10924];
  }
  #w() {
    let imgBind15957 = this.resolveImageMask();
    if (imgBind15957)
      return {
        geometry: imgBind15957.geometry,
        cropLeft: 0,
        cropTop: 0,
        cropRight: 0,
        cropBottom: 0,
        adjustmentList: imgBind15957.adjustmentList,
      };
  }
  #T() {
    if (this.#c === undefined) return this.#s;
    if (this.#o !== "roundRect") return;
    let imgBind15541 = coerceBorderRadiusPx(this.#c);
    if (!(imgBind15541 <= 0))
      return buildRoundRectAdjList({
        widthPx: this.position.width,
        heightPx: this.position.height,
        radiusPx: imgBind15541,
      });
  }
  #E(imgIn5190) {
    if (
      this.#u ||
      (this.#O(),
      !Object.values(imgIn5190).some((item) => item !== undefined))
    )
      return;
    let imgBind14704 = this.elementAnchor();
    if (!imgBind14704 || !imgBind14704.startsWith("im/"))
      return;
    let imgBind14705 = this.recordTargetRef(imgBind14704);
    imgBind14705 &&
      this.recordPatchOp({
        op: "image.set",
        target: imgBind14705,
        props: imgIn5190,
      });
  }
  #D(imgIn5564) {
    if (this.#u) return;
    let imgBind15381 = this.elementAnchor();
    if (!imgBind15381 || !imgBind15381.startsWith("im/"))
      return;
    let imgBind15382 = this.recordTargetRef(imgBind15381);
    imgBind15382 &&
      this.recordPatchOp({
        op: "image.replace",
        target: imgBind15382,
        props: normalizeImageReplaceProps(imgIn5564),
      });
  }
  #O() {
    this.context.getPresentation?.()?.queuePresentationCollabPublish();
  }
  #k(imgIn9424) {
    let imgBind19951 = this.#u;
    this.#u = true;
    try {
      imgIn9424();
    } finally {
      this.#u = imgBind19951;
    }
  }
}
