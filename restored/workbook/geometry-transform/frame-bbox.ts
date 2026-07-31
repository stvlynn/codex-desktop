// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: FrameBbox VO (legacy Binding632 / WorkbookClass11).

import {
  coerceFiniteNumber,
  degreesToRotationEmu,
  rotationEmuToDegrees,
} from "./rotation-units";
import {
  emuToFrameUnit,
  emuToFrameUnitOrUndefined,
  frameUnitToEmu,
} from "./emu-bridge";
export class FrameBbox {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l = false;
  #u;
  constructor(fbIn2139, fbIn2140 = false) {
    if (!fbIn2139) {
      this.#e = undefined;
      this.#t = undefined;
      this.#n = undefined;
      this.#r = undefined;
      this.#i = undefined;
      this.#a = undefined;
      this.#o = undefined;
      this.#l = fbIn2140;
      return;
    }
    fbIn2139.left !== undefined &&
      (this.#e = coerceFiniteNumber(fbIn2139.left));
    fbIn2139.top !== undefined && (this.#t = coerceFiniteNumber(fbIn2139.top));
    fbIn2139.width !== undefined &&
      (this.#n = coerceFiniteNumber(fbIn2139.width));
    fbIn2139.height !== undefined &&
      (this.#r = coerceFiniteNumber(fbIn2139.height));
    fbIn2139.rotation !== undefined &&
      (this.#i = coerceFiniteNumber(fbIn2139.rotation));
    fbIn2139.horizontalFlip !== undefined &&
      (this.#a = !!fbIn2139.horizontalFlip);
    fbIn2139.verticalFlip !== undefined && (this.#o = !!fbIn2139.verticalFlip);
    this.#l = fbIn2140;
  }
  static fromProto(fbIn3405) {
    if (!fbIn3405) return new FrameBbox();
    let fbBind11798 = {
      left:
        fbIn3405.xEmu === undefined ? undefined : emuToFrameUnit(fbIn3405.xEmu),
      top:
        fbIn3405.yEmu === undefined ? undefined : emuToFrameUnit(fbIn3405.yEmu),
      width:
        fbIn3405.widthEmu === undefined
          ? undefined
          : emuToFrameUnit(fbIn3405.widthEmu),
      height:
        fbIn3405.heightEmu === undefined
          ? undefined
          : emuToFrameUnit(fbIn3405.heightEmu),
      rotation: rotationEmuToDegrees(fbIn3405.rotation) ?? undefined,
      horizontalFlip: fbIn3405.horizontalFlip ?? undefined,
      verticalFlip: fbIn3405.verticalFlip ?? undefined,
    };
    return new FrameBbox(fbBind11798, true);
  }
  bindToBboxStruct(fbIn11514, fbIn11515) {
    this.#c = fbIn11514;
    fbIn11515 && fbIn11514.size === 0 && this.#C(fbIn11514, fbIn11515);
  }
  clone() {
    let fbBind21013 = this.#S(),
      fbBind21014 = new FrameBbox(fbBind21013, this.#f());
    return ((fbBind21014.#u = this.#u), fbBind21014);
  }
  setChangeHandler(fbIn14361) {
    this.#u = fbIn14361;
  }
  setPreview(fbIn1487) {
    if (!fbIn1487) {
      this.#s = undefined;
      return;
    }
    let fbBind7456 = {};
    if (fbIn1487.left !== undefined) {
      let fbBind22224 = coerceFiniteNumber(fbIn1487.left);
      fbBind22224 !== undefined && (fbBind7456.left = fbBind22224);
    }
    if (fbIn1487.top !== undefined) {
      let fbBind22290 = coerceFiniteNumber(fbIn1487.top);
      fbBind22290 !== undefined && (fbBind7456.top = fbBind22290);
    }
    if (fbIn1487.width !== undefined) {
      let fbBind22171 = coerceFiniteNumber(fbIn1487.width);
      fbBind22171 !== undefined && (fbBind7456.width = fbBind22171);
    }
    if (fbIn1487.height !== undefined) {
      let fbBind22103 = coerceFiniteNumber(fbIn1487.height);
      fbBind22103 !== undefined && (fbBind7456.height = fbBind22103);
    }
    if (fbIn1487.rotation !== undefined) {
      let fbBind21996 = coerceFiniteNumber(fbIn1487.rotation);
      fbBind21996 !== undefined && (fbBind7456.rotation = fbBind21996);
    }
    if (
      (fbIn1487.horizontalFlip !== undefined &&
        (fbBind7456.horizontalFlip = !!fbIn1487.horizontalFlip),
      fbIn1487.verticalFlip !== undefined &&
        (fbBind7456.verticalFlip = !!fbIn1487.verticalFlip),
      Object.keys(fbBind7456).length === 0)
    ) {
      this.#s = undefined;
      return;
    }
    this.#s = fbBind7456;
  }
  clearPreview() {
    this.#s = undefined;
  }
  getPreviewRect() {
    if (this.#s)
      return {
        ...this.#S(),
        ...this.#s,
      };
  }
  #d(fbIn14791) {
    this.#u && this.#u(fbIn14791);
  }
  #f() {
    return this.#c ? this.#c.size > 0 : this.#l;
  }
  #p(fbIn10239) {
    if (!this.#c) return;
    let fbBind20698 = this.#c.get(fbIn10239);
    return typeof fbBind20698 == "number" ? fbBind20698 : undefined;
  }
  #m(fbIn10609) {
    if (!this.#c) return;
    let fbBind21099 = this.#c.get(fbIn10609);
    if (fbBind21099 !== undefined) return !!fbBind21099;
  }
  #h(fbIn4821) {
    if (this.#s)
      switch (fbIn4821) {
        case "xEmu":
          return this.#s.left;
        case "yEmu":
          return this.#s.top;
        case "widthEmu":
          return this.#s.width;
        case "heightEmu":
          return this.#s.height;
        default:
          return;
      }
  }
  #g() {
    return this.#s?.rotation;
  }
  #_(fbIn13933) {
    if (this.#s) return this.#s[fbIn13933];
  }
  #v(fbIn11899) {
    let fbBind22172 = this.#h(fbIn11899);
    if (fbBind22172 !== undefined) return frameUnitToEmu(fbBind22172);
  }
  #y(fbIn13154, fbIn13155) {
    return this.#c ? emuToFrameUnitOrUndefined(this.#p(fbIn13154)) : fbIn13155;
  }
  #b(fbIn12869) {
    return this.#c ? rotationEmuToDegrees(this.#p("rotation")) : fbIn12869;
  }
  #x(fbIn13587, fbIn13588) {
    return this.#c ? this.#m(fbIn13587) : fbIn13588;
  }
  #S() {
    let fbBind10355 = {},
      fbBind10356 = this.#y("xEmu", this.#e);
    fbBind10356 !== undefined && (fbBind10355.left = fbBind10356);
    let fbBind10357 = this.#y("yEmu", this.#t);
    fbBind10357 !== undefined && (fbBind10355.top = fbBind10357);
    let fbBind10358 = this.#y("widthEmu", this.#n);
    fbBind10358 !== undefined && (fbBind10355.width = fbBind10358);
    let fbBind10359 = this.#y("heightEmu", this.#r);
    fbBind10359 !== undefined && (fbBind10355.height = fbBind10359);
    let fbBind10360 = this.#b(this.#i);
    fbBind10360 !== undefined && (fbBind10355.rotation = fbBind10360);
    let fbBind10361 = this.#x("horizontalFlip", this.#a);
    fbBind10361 !== undefined && (fbBind10355.horizontalFlip = fbBind10361);
    let fbBind10362 = this.#x("verticalFlip", this.#o);
    return (
      fbBind10362 !== undefined && (fbBind10355.verticalFlip = fbBind10362),
      fbBind10355
    );
  }
  #C(fbIn3598, fbIn3599) {
    fbIn3599.xEmu !== undefined && fbIn3598.set("xEmu", fbIn3599.xEmu);
    fbIn3599.yEmu !== undefined && fbIn3598.set("yEmu", fbIn3599.yEmu);
    fbIn3599.widthEmu !== undefined &&
      fbIn3598.set("widthEmu", fbIn3599.widthEmu);
    fbIn3599.heightEmu !== undefined &&
      fbIn3598.set("heightEmu", fbIn3599.heightEmu);
    fbIn3599.rotation !== undefined &&
      fbIn3598.set("rotation", fbIn3599.rotation);
    fbIn3599.horizontalFlip !== undefined &&
      fbIn3598.set("horizontalFlip", fbIn3599.horizontalFlip);
    fbIn3599.verticalFlip !== undefined &&
      fbIn3598.set("verticalFlip", fbIn3599.verticalFlip);
  }
  reset() {
    this.#c &&
      (this.#c.delete("xEmu"),
      this.#c.delete("yEmu"),
      this.#c.delete("widthEmu"),
      this.#c.delete("heightEmu"),
      this.#c.delete("rotation"),
      this.#c.delete("horizontalFlip"),
      this.#c.delete("verticalFlip"));
    this.#e = undefined;
    this.#t = undefined;
    this.#n = undefined;
    this.#r = undefined;
    this.#i = undefined;
    this.#a = undefined;
    this.#o = undefined;
    this.#s = undefined;
    this.#l = false;
  }
  set(fbIn7224) {
    if (fbIn7224 instanceof FrameBbox) {
      let fbBind20430 = fbIn7224.#S(),
        fbBind20431 = fbIn7224.#f();
      this.reset();
      this.merge(fbBind20430);
      this.#l = fbBind20431;
      return;
    }
    this.reset();
    fbIn7224 && this.merge(fbIn7224);
  }
  merge(fbIn670) {
    if (fbIn670.left !== undefined) {
      let fbBind17503 = coerceFiniteNumber(fbIn670.left);
      this.#c
        ? fbBind17503 === undefined
          ? this.#c.delete("xEmu")
          : this.#c.set("xEmu", frameUnitToEmu(fbBind17503))
        : (this.#e = fbBind17503);
      this.#l = true;
    }
    if (fbIn670.top !== undefined) {
      let fbBind17529 = coerceFiniteNumber(fbIn670.top);
      this.#c
        ? fbBind17529 === undefined
          ? this.#c.delete("yEmu")
          : this.#c.set("yEmu", frameUnitToEmu(fbBind17529))
        : (this.#t = fbBind17529);
      this.#l = true;
    }
    if (fbIn670.width !== undefined) {
      let fbBind17290 = coerceFiniteNumber(fbIn670.width);
      this.#c
        ? fbBind17290 === undefined
          ? this.#c.delete("widthEmu")
          : this.#c.set("widthEmu", frameUnitToEmu(fbBind17290))
        : (this.#n = fbBind17290);
      this.#l = true;
    }
    if (fbIn670.height !== undefined) {
      let fbBind17206 = coerceFiniteNumber(fbIn670.height);
      this.#c
        ? fbBind17206 === undefined
          ? this.#c.delete("heightEmu")
          : this.#c.set("heightEmu", frameUnitToEmu(fbBind17206))
        : (this.#r = fbBind17206);
      this.#l = true;
    }
    if (fbIn670.rotation !== undefined) {
      let fbBind14371 = coerceFiniteNumber(fbIn670.rotation);
      if (this.#c) {
        if (fbBind14371 === undefined) this.#c.delete("rotation");
        else {
          let fbBind19583 = degreesToRotationEmu(fbBind14371);
          fbBind19583 === undefined
            ? this.#c.delete("rotation")
            : this.#c.set("rotation", fbBind19583);
        }
      } else this.#i = fbBind14371;
      this.#l = true;
    }
    if (fbIn670.horizontalFlip !== undefined) {
      let fbBind20039 = !!fbIn670.horizontalFlip;
      this.#c
        ? this.#c.set("horizontalFlip", fbBind20039)
        : (this.#a = fbBind20039);
      this.#l = true;
    }
    if (fbIn670.verticalFlip !== undefined) {
      let fbBind20167 = !!fbIn670.verticalFlip;
      this.#c
        ? this.#c.set("verticalFlip", fbBind20167)
        : (this.#o = fbBind20167);
      this.#l = true;
    }
  }
  toProto() {
    let fbBind4102 =
      this.#s !== undefined &&
      (this.#s.left !== undefined ||
        this.#s.top !== undefined ||
        this.#s.width !== undefined ||
        this.#s.height !== undefined ||
        this.#s.rotation !== undefined ||
        this.#s.horizontalFlip !== undefined ||
        this.#s.verticalFlip !== undefined);
    if (this.#c) {
      let fbBind8165 = {},
        fbBind8166 = this.#v("xEmu") ?? this.#p("xEmu");
      fbBind8166 !== undefined && (fbBind8165.xEmu = fbBind8166);
      let fbBind8167 = this.#v("yEmu") ?? this.#p("yEmu");
      fbBind8167 !== undefined && (fbBind8165.yEmu = fbBind8167);
      let fbBind8168 = this.#v("widthEmu") ?? this.#p("widthEmu");
      fbBind8168 !== undefined && (fbBind8165.widthEmu = fbBind8168);
      let fbBind8169 = this.#v("heightEmu") ?? this.#p("heightEmu");
      fbBind8169 !== undefined && (fbBind8165.heightEmu = fbBind8169);
      let fbBind8170 = this.#g(),
        fbBind8171 =
          fbBind8170 === undefined
            ? this.#p("rotation")
            : degreesToRotationEmu(fbBind8170);
      fbBind8171 !== undefined &&
        Number.isFinite(fbBind8171) &&
        (fbBind8165.rotation = fbBind8171);
      let fbBind8172 = this.#_("horizontalFlip") ?? this.#m("horizontalFlip");
      fbBind8172 !== undefined && (fbBind8165.horizontalFlip = fbBind8172);
      let fbBind8173 = this.#_("verticalFlip") ?? this.#m("verticalFlip");
      return (
        fbBind8173 !== undefined && (fbBind8165.verticalFlip = fbBind8173),
        Object.keys(fbBind8165).length === 0 ? undefined : fbBind8165
      );
    }
    if (!this.#l && !fbBind4102) return;
    let fbBind4103 = {},
      fbBind4104 = this.#v("xEmu");
    fbBind4104 === undefined
      ? this.#e !== undefined && (fbBind4103.xEmu = frameUnitToEmu(this.#e))
      : (fbBind4103.xEmu = fbBind4104);
    let fbBind4105 = this.#v("yEmu");
    fbBind4105 === undefined
      ? this.#t !== undefined && (fbBind4103.yEmu = frameUnitToEmu(this.#t))
      : (fbBind4103.yEmu = fbBind4105);
    let fbBind4106 = this.#v("widthEmu");
    fbBind4106 === undefined
      ? this.#n !== undefined && (fbBind4103.widthEmu = frameUnitToEmu(this.#n))
      : (fbBind4103.widthEmu = fbBind4106);
    let fbBind4107 = this.#v("heightEmu");
    fbBind4107 === undefined
      ? this.#r !== undefined &&
        (fbBind4103.heightEmu = frameUnitToEmu(this.#r))
      : (fbBind4103.heightEmu = fbBind4107);
    let fbBind4108 = this.#g();
    if (fbBind4108 !== undefined || this.#i !== undefined) {
      let fbBind21920 = degreesToRotationEmu(fbBind4108 ?? this.#i);
      fbBind21920 !== undefined && (fbBind4103.rotation = fbBind21920);
    }
    let fbBind4109 = this.#_("horizontalFlip");
    (fbBind4109 !== undefined || this.#a !== undefined) &&
      (fbBind4103.horizontalFlip = fbBind4109 ?? this.#a);
    let fbBind4110 = this.#_("verticalFlip");
    if (
      ((fbBind4110 !== undefined || this.#o !== undefined) &&
        (fbBind4103.verticalFlip = fbBind4110 ?? this.#o),
      Object.keys(fbBind4103).length !== 0)
    )
      return fbBind4103;
  }
  toJSON() {
    return {
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      rotation: this.rotation,
      horizontalFlip: this.horizontalFlip,
      verticalFlip: this.verticalFlip,
    };
  }
  toPartialRect() {
    return this.#S();
  }
  get left() {
    return this.#y("xEmu", this.#e) ?? 0;
  }
  set left(fbIn6330) {
    let fbBind16463 = coerceFiniteNumber(fbIn6330);
    this.#c
      ? fbBind16463 === undefined
        ? this.#c.delete("xEmu")
        : this.#c.set("xEmu", frameUnitToEmu(fbBind16463))
      : (this.#e = fbBind16463);
    this.#l = true;
    fbBind16463 !== undefined &&
      this.#d({
        left: fbBind16463,
      });
  }
  get top() {
    return this.#y("yEmu", this.#t) ?? 0;
  }
  set top(fbIn6356) {
    let fbBind16504 = coerceFiniteNumber(fbIn6356);
    this.#c
      ? fbBind16504 === undefined
        ? this.#c.delete("yEmu")
        : this.#c.set("yEmu", frameUnitToEmu(fbBind16504))
      : (this.#t = fbBind16504);
    this.#l = true;
    fbBind16504 !== undefined &&
      this.#d({
        top: fbBind16504,
      });
  }
  get width() {
    return this.#y("widthEmu", this.#n) ?? 0;
  }
  set width(fbIn6145) {
    let fbBind16236 = coerceFiniteNumber(fbIn6145);
    this.#c
      ? fbBind16236 === undefined
        ? this.#c.delete("widthEmu")
        : this.#c.set("widthEmu", frameUnitToEmu(fbBind16236))
      : (this.#n = fbBind16236);
    this.#l = true;
    fbBind16236 !== undefined &&
      this.#d({
        width: fbBind16236,
      });
  }
  get height() {
    return this.#y("heightEmu", this.#r) ?? 0;
  }
  set height(fbIn6071) {
    let fbBind16119 = coerceFiniteNumber(fbIn6071);
    this.#c
      ? fbBind16119 === undefined
        ? this.#c.delete("heightEmu")
        : this.#c.set("heightEmu", frameUnitToEmu(fbBind16119))
      : (this.#r = fbBind16119);
    this.#l = true;
    fbBind16119 !== undefined &&
      this.#d({
        height: fbBind16119,
      });
  }
  get rotation() {
    return this.#b(this.#i);
  }
  set rotation(fbIn4587) {
    let fbBind13865 = coerceFiniteNumber(fbIn4587);
    if (this.#c) {
      if (fbBind13865 === undefined) this.#c.delete("rotation");
      else {
        let fbBind19899 = degreesToRotationEmu(fbBind13865);
        fbBind19899 === undefined
          ? this.#c.delete("rotation")
          : this.#c.set("rotation", fbBind19899);
      }
    } else this.#i = fbBind13865;
    this.#l = true;
    fbBind13865 !== undefined &&
      this.#d({
        rotation: fbBind13865,
      });
  }
  get horizontalFlip() {
    return this.#x("horizontalFlip", this.#a);
  }
  set horizontalFlip(fbIn5529) {
    let fbBind15323 = fbIn5529 == null ? undefined : !!fbIn5529;
    this.#c
      ? fbBind15323 === undefined
        ? this.#c.delete("horizontalFlip")
        : this.#c.set("horizontalFlip", fbBind15323)
      : (this.#a = fbBind15323);
    this.#l = true;
    fbBind15323 !== undefined &&
      this.#d({
        horizontalFlip: fbBind15323,
      });
  }
  get verticalFlip() {
    return this.#x("verticalFlip", this.#o);
  }
  set verticalFlip(fbIn5604) {
    let fbBind15432 = fbIn5604 == null ? undefined : !!fbIn5604;
    this.#c
      ? fbBind15432 === undefined
        ? this.#c.delete("verticalFlip")
        : this.#c.set("verticalFlip", fbBind15432)
      : (this.#o = fbBind15432);
    this.#l = true;
    fbBind15432 !== undefined &&
      this.#d({
        verticalFlip: fbBind15432,
      });
  }
}
