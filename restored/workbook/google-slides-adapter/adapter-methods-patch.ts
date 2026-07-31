// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-71: GoogleSlidesAdapter prototype install — constructor + hydrate/applyPatch + early private helpers.
// Semantic implementation: method peel kept flat under maxFlatLines.

import { WorkbookColor } from "../theme-color";
import { parseFontSizePx } from "../text-style";
import { gsaH } from "./boundary-hooks";
import {
  oJe,
  sJe,
  cJe,
  lJe,
  uJe,
  fJe,
  workbookBinding1807,
  workbookBinding1808,
  workbookBinding1809,
  workbookBinding1810,
  workbookBinding1811,
  mJe,
  hJe,
  gJe,
  _Je,
  vJe,
  yJe,
  bJe,
  xJe,
} from "./adapter-slots";

void gsaH;
void WorkbookColor;
void parseFontSizePx;

export function installAdapterMethodsPatch(proto: any): void {
  proto._gsaConstruct = function (gsaIn8069: any, gsaIn8070: any) {
    this._e = gsaIn8069;
    this._t = gsaIn8070.client;
    this._n = gsaIn8070.presentationId;
    this._r = gsaIn8070.fields;
    this._i = gsaIn8070.writeControl;
  };
  Object.defineProperty(proto, "presentationId", {
    configurable: true,
    enumerable: false,
    get() {
      return this._n;
    },
  });
  proto["hydrateFromSlides"] = async function (gsaIn3988: any) {
    let workbookBinding12890 = this._e.layouts.add("Slides Blank", {
      type: "blank",
    });
    (gsaIn3988.slides ?? []).forEach((item) => {
      let workbookBinding15755 = this._e.slides.add({
        layoutId: workbookBinding12890.id,
      });
      item.objectId && this._I(workbookBinding15755, item.objectId);
      let workbookBinding15756 =
        item.slideProperties?.notesPage?.notesProperties?.speakerNotesObjectId;
      workbookBinding15756 &&
        this._s.set(workbookBinding15755.speakerNotes, workbookBinding15756);
      this._W(item, workbookBinding15755);
    });
  };
  proto["applyPatch"] = async function (gsaIn5134: any, gsaIn5135: any) {
    let workbookBinding14631 = [...gsaIn5135.warnings],
      { requests, pendingNotesSlides } = this._u(
        gsaIn5134,
        gsaIn5135,
        workbookBinding14631,
      );
    if (requests.length > 0) {
      let workbookBinding21077 = {
        requests,
        writeControl: this._i,
      };
      await this._t.batchUpdate(this._n, workbookBinding21077);
    }
    return (
      pendingNotesSlides.length > 0 && (await this._Y()),
      {
        ...gsaIn5135,
        warnings: workbookBinding14631,
      }
    );
  };
  proto["_u"] = function (gsaIn256: any, gsaIn257: any, gsaIn258: any) {
    let workbookBinding3337 = [],
      workbookBinding3338 = gsaIn257.idMap,
      workbookBinding3339 = [],
      workbookBinding3340 = new Set(),
      workbookBinding3341 = this._e.slides.items.filter(
        (item) => !this._a.has(item),
      ),
      workbookBinding3342 = new Map();
    this._e.slides.items.forEach((item) => {
      let workbookBinding20932 = item.shapes.items.filter(
        (_item) => !this._o.has(_item),
      );
      workbookBinding20932.length > 0 &&
        workbookBinding3342.set(item, workbookBinding20932);
    });
    for (let workbookBinding3548 of gsaIn256)
      switch (workbookBinding3548.op) {
        case "slide.add": {
          let workbookBinding14277 = this._d(
              workbookBinding3548.as,
              workbookBinding3338,
              workbookBinding3341,
            ),
            workbookBinding14278 = this._R(workbookBinding14277);
          workbookBinding3337.push({
            createSlide: {
              objectId: workbookBinding14278,
            },
          });
          workbookBinding3339.push(workbookBinding14277);
          (workbookBinding3548.layout || workbookBinding3548.layoutId) &&
            gsaIn258.push(
              "googleSlides: slide.add layout mapping is not implemented.",
            );
          break;
        }
        case "slide.remove": {
          let workbookBinding18874 = this._m(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding18875 = this._z(workbookBinding18874);
          workbookBinding3337.push({
            deleteObject: {
              objectId: workbookBinding18875,
            },
          });
          this._L(workbookBinding18874, workbookBinding18875);
          break;
        }
        case "shape.add": {
          let workbookBinding8356 = this._m(
              workbookBinding3548.slide,
              workbookBinding3338,
            ),
            workbookBinding8357 = this._f(
              workbookBinding3548.as,
              workbookBinding3338,
              workbookBinding8356,
              workbookBinding3342,
            ),
            workbookBinding8358 = this._z(workbookBinding8356),
            workbookBinding8359 = this._S(workbookBinding3548.props, gsaIn258),
            workbookBinding8360 = workbookBinding8357.frame;
          if (!workbookBinding8360)
            throw Error("googleSlides: shape.add requires a frame.");
          let workbookBinding8361 = this._P(workbookBinding8360),
            workbookBinding8362 = this._F(workbookBinding8360),
            workbookBinding8363 = !this._o.has(workbookBinding8357),
            workbookBinding8364 = this._B(workbookBinding8357);
          workbookBinding8363 && workbookBinding3340.add(workbookBinding8364);
          this._U(
            workbookBinding8364,
            workbookBinding8361.widthPt,
            workbookBinding8361.heightPt,
          );
          workbookBinding3337.push({
            createShape: {
              objectId: workbookBinding8364,
              shapeType: workbookBinding8359,
              elementProperties: {
                pageObjectId: workbookBinding8358,
                size: workbookBinding8361.size,
                transform: workbookBinding8362,
              },
            },
          });
          break;
        }
        case "shape.remove": {
          let workbookBinding18876 = this._h(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding18877 = this._H(workbookBinding18876);
          workbookBinding3337.push({
            deleteObject: {
              objectId: workbookBinding18877,
            },
          });
          this._V(workbookBinding18876, workbookBinding18877);
          break;
        }
        case "shape.set": {
          let workbookBinding19800 = this._h(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding19801 = this._H(workbookBinding19800);
          this._C(
            workbookBinding19800,
            workbookBinding19801,
            workbookBinding3548.props,
            workbookBinding3337,
            gsaIn258,
          );
          break;
        }
        case "text.set": {
          let workbookBinding18146 = this._h(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding18147 = this._H(workbookBinding18146),
            a = workbookBinding18146.text.toString();
          this._w(workbookBinding18147, a, workbookBinding3337, {
            skipDelete: workbookBinding3340.has(workbookBinding18147),
          });
          break;
        }
        case "text.replace": {
          let workbookBinding18148 = this._h(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding18149 = this._H(workbookBinding18148),
            a = workbookBinding18148.text.toString();
          this._w(workbookBinding18149, a, workbookBinding3337, {
            skipDelete: workbookBinding3340.has(workbookBinding18149),
          });
          break;
        }
        case "text.style.set": {
          let workbookBinding17967 = this._h(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding17968 = this._H(workbookBinding17967);
          this._T(
            workbookBinding17968,
            workbookBinding3548.props,
            {
              type: "ALL",
            },
            workbookBinding3337,
            gsaIn258,
          );
          this._E(
            workbookBinding17968,
            workbookBinding3548.props,
            workbookBinding3337,
            gsaIn258,
          );
          break;
        }
        case "textrange.style.set": {
          let workbookBinding20372 = this.__(
            workbookBinding3548.target,
            workbookBinding3338,
          );
          this._T(
            workbookBinding20372.objectId,
            workbookBinding3548.props,
            workbookBinding20372.range,
            workbookBinding3337,
            gsaIn258,
          );
          break;
        }
        case "notes.set": {
          let workbookBinding15127 = this._g(
              workbookBinding3548.target,
              workbookBinding3338,
            ),
            workbookBinding15128 = this._s.get(workbookBinding15127);
          if (!workbookBinding15128)
            throw Error(
              "googleSlides: notes.set requires a mapped notes object id.",
            );
          let workbookBinding15129 = workbookBinding15127.text;
          this._w(
            workbookBinding15128,
            workbookBinding15129,
            workbookBinding3337,
          );
          break;
        }
        default:
          throw Error(
            `googleSlides: op not supported: ${workbookBinding3548.op}`,
          );
      }
    return {
      requests: workbookBinding3337,
      pendingNotesSlides: workbookBinding3339,
    };
  };
  proto["_d"] = function (gsaIn3991: any, gsaIn3992: any, gsaIn3993: any) {
    if (gsaIn3991) {
      let workbookBinding16642 = gsaIn3992[gsaIn3991];
      if (!workbookBinding16642)
        throw Error(`googleSlides: missing alias mapping for ${gsaIn3991}`);
      let workbookBinding16643 = this._e.resolve(workbookBinding16642);
      if (workbookBinding16643 instanceof gsaH.getSlideClass())
        return workbookBinding16643;
      throw Error("googleSlides: slide.add alias is not a slide.");
    }
    let workbookBinding12902 = gsaIn3993.shift();
    if (!workbookBinding12902)
      throw Error("googleSlides: slide.add failed to find a new slide.");
    return workbookBinding12902;
  };
  proto["_f"] = function (
    gsaIn3633: any,
    gsaIn3634: any,
    gsaIn3635: any,
    gsaIn3636: any,
  ) {
    if (gsaIn3633) {
      let workbookBinding16644 = gsaIn3634[gsaIn3633];
      if (!workbookBinding16644)
        throw Error(`googleSlides: missing alias mapping for ${gsaIn3633}`);
      let workbookBinding16645 = this._e.resolve(workbookBinding16644);
      if (workbookBinding16645 instanceof gsaH.getShapeClass())
        return workbookBinding16645;
      throw Error("googleSlides: shape.add alias is not a shape.");
    }
    let workbookBinding12189 = gsaIn3636.get(gsaIn3635) ?? [],
      workbookBinding12190 = workbookBinding12189.shift();
    if (!workbookBinding12190)
      throw Error("googleSlides: shape.add failed to find a new shape.");
    return (
      gsaIn3636.set(gsaIn3635, workbookBinding12189),
      workbookBinding12190
    );
  };
  proto["_p"] = function (gsaIn7159: any, gsaIn7160: any) {
    if (this._x(gsaIn7159)) {
      let workbookBinding19987 = gsaIn7160[gsaIn7159];
      if (!workbookBinding19987)
        throw Error(`googleSlides: missing alias mapping for ${gsaIn7159}`);
      return this._e.resolve(workbookBinding19987);
    }
    return this._e.resolve(gsaIn7159);
  };
  proto["_m"] = function (gsaIn9477: any, gsaIn9478: any) {
    let workbookBinding19988 = this._p(gsaIn9477, gsaIn9478);
    if (workbookBinding19988 instanceof gsaH.getSlideClass())
      return workbookBinding19988;
    throw Error("googleSlides: expected a slide target.");
  };
  proto["_h"] = function (gsaIn9479: any, gsaIn9480: any) {
    let workbookBinding19989 = this._p(gsaIn9479, gsaIn9480);
    if (workbookBinding19989 instanceof gsaH.getShapeClass())
      return workbookBinding19989;
    throw Error("googleSlides: expected a shape target.");
  };
  proto["_g"] = function (gsaIn9481: any, gsaIn9482: any) {
    let workbookBinding19990 = this._p(gsaIn9481, gsaIn9482);
    if (workbookBinding19990 instanceof gsaH.getNotesClass())
      return workbookBinding19990;
    throw Error("googleSlides: expected a notes target.");
  };
  proto["__"] = function (gsaIn4370: any, gsaIn4371: any) {
    let workbookBinding13519 = this._y(gsaIn4370);
    if (workbookBinding13519) {
      let workbookBinding18878 = gsaIn4371[workbookBinding13519.alias];
      if (!workbookBinding18878)
        throw Error(
          `googleSlides: missing alias mapping for ${workbookBinding13519.alias}`,
        );
      return this._v(
        workbookBinding18878,
        workbookBinding13519.start,
        workbookBinding13519.length,
      );
    }
    let workbookBinding13520 = this._b(gsaIn4370);
    if (!workbookBinding13520)
      throw Error(`googleSlides: invalid text range target ${gsaIn4370}`);
    return this._v(
      workbookBinding13520.anchor,
      workbookBinding13520.start,
      workbookBinding13520.length,
    );
  };
  proto["_v"] = function (gsaIn5855: any, gsaIn5856: any, gsaIn5857: any) {
    let workbookBinding15819 = this._e.resolve(gsaIn5855);
    if (!(workbookBinding15819 instanceof gsaH.getShapeClass()))
      throw Error("googleSlides: text range anchor is not a shape.");
    return {
      objectId: this._H(workbookBinding15819),
      range: {
        type: "FIXED_RANGE",
        startIndex: gsaIn5856,
        endIndex: gsaIn5856 + gsaIn5857,
      },
    };
  };
  proto["_y"] = function (gsaIn4022: any) {
    if (!gsaIn4022.startsWith("tr/@")) return null;
    let workbookBinding12952 = gsaIn4022.split("/");
    if (workbookBinding12952.length !== 4)
      throw Error(`googleSlides: invalid text range alias ${gsaIn4022}`);
    let workbookBinding12953 = workbookBinding12952[1],
      workbookBinding12954 = Number(workbookBinding12952[2]),
      workbookBinding12955 = Number(workbookBinding12952[3]);
    if (
      !Number.isFinite(workbookBinding12954) ||
      !Number.isFinite(workbookBinding12955)
    )
      throw Error(`googleSlides: invalid text range ${gsaIn4022}`);
    return {
      alias: workbookBinding12953,
      start: workbookBinding12954,
      length: workbookBinding12955,
    };
  };
  proto["_b"] = function (gsaIn4777: any) {
    if (!gsaIn4777.startsWith("tr/")) return null;
    let workbookBinding14127 = gsaIn4777.split("/");
    if (workbookBinding14127.length !== 5) return null;
    let workbookBinding14128 = workbookBinding14127[1],
      workbookBinding14129 = workbookBinding14127[2],
      workbookBinding14130 = Number(workbookBinding14127[3]),
      workbookBinding14131 = Number(workbookBinding14127[4]);
    return !workbookBinding14128 ||
      !workbookBinding14129 ||
      !Number.isFinite(workbookBinding14130) ||
      !Number.isFinite(workbookBinding14131)
      ? null
      : {
          anchor: `${workbookBinding14128}/${workbookBinding14129}`,
          start: workbookBinding14130,
          length: workbookBinding14131,
        };
  };
  proto["_x"] = function (gsaIn13126: any) {
    return gsaIn13126.startsWith("@") && gsaIn13126.length > 1;
  };
  proto["_S"] = function (gsaIn4652: any, gsaIn4653: any) {
    if (gsaIn4652.geometry === "custom" || gsaIn4652.geometry === "connector")
      throw Error("googleSlides: shape.add does not support custom shapes.");
    return (
      mJe[gsaIn4652.geometry] ||
      (gsaIn4653.push(
        `googleSlides: shape.add geometry "${gsaIn4652.geometry}" is not mapped.`,
      ),
      "RECTANGLE")
    );
  };
  proto["_C"] = function (
    gsaIn1690: any,
    gsaIn1691: any,
    gsaIn1692: any,
    gsaIn1693: any,
    gsaIn1694: any,
  ) {
    if (gsaIn1692.position) {
      let workbookBinding17488 = this._N(gsaIn1690, gsaIn1691);
      gsaIn1693.push({
        updatePageElementTransform: {
          objectId: gsaIn1691,
          transform: workbookBinding17488,
          applyMode: "ABSOLUTE",
        },
      });
    }
    if (gsaIn1692.fill !== undefined) {
      let workbookBinding14180 = this._j(gsaIn1692.fill, gsaIn1694);
      workbookBinding14180 &&
        gsaIn1693.push({
          updateShapeProperties: {
            objectId: gsaIn1691,
            shapeProperties: {
              shapeBackgroundFill: {
                solidFill: {
                  color: workbookBinding14180,
                },
              },
            },
            fields: "shapeBackgroundFill.solidFill.color",
          },
        });
    }
    (gsaIn1692.line ||
      gsaIn1692.name !== undefined ||
      gsaIn1692.zIndex !== undefined ||
      gsaIn1692.placeholderType !== undefined ||
      gsaIn1692.placeholderIndex !== undefined) &&
      gsaIn1694.push("googleSlides: shape.set props are partially supported.");
  };
  proto["_w"] = function (
    gsaIn6117: any,
    gsaIn6118: any,
    gsaIn6119: any,
    gsaIn6120: any,
  ) {
    let workbookBinding16189 = String(gsaIn6118);
    gsaIn6120?.skipDelete ||
      gsaIn6119.push({
        deleteText: {
          objectId: gsaIn6117,
          textRange: {
            type: "ALL",
          },
        },
      });
    workbookBinding16189 &&
      gsaIn6119.push({
        insertText: {
          objectId: gsaIn6117,
          text: workbookBinding16189,
          insertionIndex: 0,
        },
      });
  };
  proto["_T"] = function (
    gsaIn3021: any,
    gsaIn3022: any,
    gsaIn3023: any,
    gsaIn3024: any,
    gsaIn3025: any,
  ) {
    let { style, fields } = this._D(gsaIn3022, gsaIn3025);
    fields.length > 0 &&
      style &&
      gsaIn3024.push({
        updateTextStyle: {
          objectId: gsaIn3021,
          style,
          textRange: gsaIn3023,
          fields: fields.join(","),
        },
      });
    let workbookBinding11058 = this._O(gsaIn3022);
    workbookBinding11058 &&
      gsaIn3024.push({
        updateParagraphStyle: {
          objectId: gsaIn3021,
          style: workbookBinding11058.style,
          textRange: gsaIn3023,
          fields: workbookBinding11058.fields.join(","),
        },
      });
  };
  proto["_E"] = function (
    gsaIn1584: any,
    gsaIn1585: any,
    gsaIn1586: any,
    gsaIn1587: any,
  ) {
    let workbookBinding7718 = {},
      workbookBinding7719 = [];
    if (gsaIn1585.verticalAlignment) {
      let workbookBinding16586 = vJe[gsaIn1585.verticalAlignment];
      workbookBinding16586
        ? ((workbookBinding7718.contentAlignment = workbookBinding16586),
          workbookBinding7719.push("contentAlignment"))
        : gsaIn1587.push(
            `googleSlides: unsupported vertical alignment "${gsaIn1585.verticalAlignment}".`,
          );
    }
    if (gsaIn1585.autoFit) {
      let workbookBinding17667 = yJe[gsaIn1585.autoFit];
      workbookBinding17667
        ? ((workbookBinding7718.autofit = {
            autofitType: workbookBinding17667,
          }),
          workbookBinding7719.push("autofit.autofitType"))
        : gsaIn1587.push(
            `googleSlides: unsupported autoFit "${gsaIn1585.autoFit}".`,
          );
    }
    workbookBinding7719.length > 0 &&
      gsaIn1586.push({
        updateShapeProperties: {
          objectId: gsaIn1584,
          shapeProperties: workbookBinding7718,
          fields: workbookBinding7719.join(","),
        },
      });
    (gsaIn1585.wrap || gsaIn1585.insets || gsaIn1585.style) &&
      gsaIn1587.push(
        "googleSlides: text.style.set wrap/insets/style are not mapped.",
      );
  };
}
