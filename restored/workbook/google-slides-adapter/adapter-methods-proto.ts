// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-71: GoogleSlidesAdapter prototype install — text/geometry proto builders + hydrate helpers.
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

export function installAdapterMethodsProto(proto: any): void {
  proto["_D"] = function (gsaIn1024: any, gsaIn1025: any) {
    let workbookBinding6212 = {},
      workbookBinding6213 = [];
    if (
      (gsaIn1024.bold !== undefined &&
        ((workbookBinding6212.bold = gsaIn1024.bold),
        workbookBinding6213.push("bold")),
      gsaIn1024.italic !== undefined &&
        ((workbookBinding6212.italic = gsaIn1024.italic),
        workbookBinding6213.push("italic")),
      gsaIn1024.underline !== undefined)
    ) {
      let workbookBinding20212 = String(gsaIn1024.underline)
        .trim()
        .toLowerCase();
      workbookBinding6212.underline =
        workbookBinding20212 !== "" && workbookBinding20212 !== "none";
      workbookBinding6213.push("underline");
    }
    let workbookBinding6214 = this._k(gsaIn1024);
    if (
      (workbookBinding6214 !== undefined &&
        ((workbookBinding6212.fontSize = {
          magnitude: workbookBinding6214,
          unit: "PT",
        }),
        workbookBinding6213.push("fontSize")),
      gsaIn1024.color !== undefined)
    ) {
      let workbookBinding19687 = this._A(gsaIn1024.color, gsaIn1025);
      workbookBinding19687 &&
        ((workbookBinding6212.foregroundColor = {
          opaqueColor: workbookBinding19687,
        }),
        workbookBinding6213.push("foregroundColor"));
    }
    if ("link" in gsaIn1024 && gsaIn1024.link !== undefined) {
      let workbookBinding16975 = gsaIn1024.link;
      workbookBinding16975 === null
        ? workbookBinding6213.push("link")
        : workbookBinding16975.isExternal
          ? ((workbookBinding6212.link = {
              url: workbookBinding16975.uri,
            }),
            workbookBinding6213.push("link"))
          : gsaIn1025.push("googleSlides: only external links are supported.");
    }
    return (
      "style" in gsaIn1024 &&
        gsaIn1024.style &&
        gsaIn1025.push("googleSlides: named text styles are not mapped."),
      workbookBinding6213.length === 0
        ? {
            style: null,
            fields: [],
          }
        : {
            style: workbookBinding6212,
            fields: workbookBinding6213,
          }
    );
  };
  proto["_O"] = function (gsaIn1084: any) {
    let workbookBinding6433 = {},
      workbookBinding6434 = [];
    if ("alignment" in gsaIn1084 && gsaIn1084.alignment) {
      let workbookBinding21519 = _Je[gsaIn1084.alignment];
      workbookBinding21519 &&
        ((workbookBinding6433.alignment = workbookBinding21519),
        workbookBinding6434.push("alignment"));
    }
    return (
      "lineSpacing" in gsaIn1084 &&
        gsaIn1084.lineSpacing !== undefined &&
        ((workbookBinding6433.lineSpacing = gsaIn1084.lineSpacing * 100),
        workbookBinding6434.push("lineSpacing")),
      "spacingBefore" in gsaIn1084 &&
        gsaIn1084.spacingBefore !== undefined &&
        ((workbookBinding6433.spaceAbove = {
          magnitude: workbookBinding1807(gsaIn1084.spacingBefore),
          unit: "PT",
        }),
        workbookBinding6434.push("spaceAbove")),
      "spacingAfter" in gsaIn1084 &&
        gsaIn1084.spacingAfter !== undefined &&
        ((workbookBinding6433.spaceBelow = {
          magnitude: workbookBinding1807(gsaIn1084.spacingAfter),
          unit: "PT",
        }),
        workbookBinding6434.push("spaceBelow")),
      "indentLeft" in gsaIn1084 &&
        gsaIn1084.indentLeft !== undefined &&
        ((workbookBinding6433.indentStart = {
          magnitude: workbookBinding1807(gsaIn1084.indentLeft),
          unit: "PT",
        }),
        workbookBinding6434.push("indentStart")),
      "indentFirstLine" in gsaIn1084 &&
        gsaIn1084.indentFirstLine !== undefined &&
        ((workbookBinding6433.indentFirstLine = {
          magnitude: workbookBinding1807(gsaIn1084.indentFirstLine),
          unit: "PT",
        }),
        workbookBinding6434.push("indentFirstLine")),
      workbookBinding6434.length === 0
        ? null
        : {
            style: workbookBinding6433,
            fields: workbookBinding6434,
          }
    );
  };
  proto["_k"] = function (gsaIn7854: any) {
    if (gsaIn7854.fontSize !== undefined) {
      let workbookBinding21870 = parseFontSizePx(gsaIn7854.fontSize);
      return workbookBinding21870 === undefined
        ? undefined
        : workbookBinding1807(workbookBinding21870);
    }
    if (gsaIn7854.fontSizePt !== undefined) return gsaIn7854.fontSizePt;
  };
  proto["_A"] = function (gsaIn8265: any, gsaIn8266: any) {
    try {
      return this._M(gsaIn8265);
    } catch (workbookBinding21239) {
      gsaIn8266.push(
        `googleSlides: failed to map text color: ${workbookBinding21239.message}`,
      );
      return;
    }
  };
  proto["_j"] = function (gsaIn6923: any, gsaIn6924: any) {
    if (gsaIn6923) {
      if (typeof gsaIn6923 == "string") return this._M(gsaIn6923);
      if ("type" in gsaIn6923 && gsaIn6923.type === "solid")
        return this._M(gsaIn6923.color);
      gsaIn6924.push("googleSlides: only solid fills are supported.");
    }
  };
  proto["_M"] = function (gsaIn3151: any) {
    let workbookBinding11275 = new WorkbookColor(gsaIn3151);
    if (workbookBinding11275.type === "theme") {
      let workbookBinding20098 = gJe[workbookBinding11275.value];
      if (!workbookBinding20098)
        throw Error(`theme color not mapped: ${workbookBinding11275.value}`);
      return {
        themeColor: workbookBinding20098,
      };
    }
    let workbookBinding11276 = workbookBinding11275.hex.replace("#", "");
    if (workbookBinding11276.length !== 6)
      throw Error(`invalid hex color: ${workbookBinding11275.hex}`);
    return {
      rgbColor: {
        red: parseInt(workbookBinding11276.slice(0, 2), 16) / 255,
        green: parseInt(workbookBinding11276.slice(2, 4), 16) / 255,
        blue: parseInt(workbookBinding11276.slice(4, 6), 16) / 255,
      },
    };
  };
  proto["_N"] = function (gsaIn2610: any, gsaIn2611: any) {
    let workbookBinding10049 = this._l.get(gsaIn2611);
    if (!workbookBinding10049)
      throw Error("googleSlides: missing base size for transform.");
    if (workbookBinding10049.widthPt <= 0 || workbookBinding10049.heightPt <= 0)
      throw Error("googleSlides: base size must be positive.");
    let { left, top, width, height } = gsaIn2610.position;
    if (
      left === undefined ||
      top === undefined ||
      width === undefined ||
      height === undefined
    )
      throw Error("googleSlides: shape position is incomplete.");
    let workbookBinding10050 = workbookBinding1807(width),
      workbookBinding10051 = workbookBinding1807(height);
    return {
      scaleX: workbookBinding10050 / workbookBinding10049.widthPt,
      scaleY: workbookBinding10051 / workbookBinding10049.heightPt,
      translateX: workbookBinding1807(left),
      translateY: workbookBinding1807(top),
      unit: "PT",
    };
  };
  proto["_P"] = function (gsaIn4400: any) {
    if (gsaIn4400.width === undefined || gsaIn4400.height === undefined)
      throw Error("googleSlides: shape frame is missing size.");
    let workbookBinding13589 = workbookBinding1807(gsaIn4400.width),
      workbookBinding13590 = workbookBinding1807(gsaIn4400.height);
    return {
      size: {
        width: {
          magnitude: workbookBinding13589,
          unit: "PT",
        },
        height: {
          magnitude: workbookBinding13590,
          unit: "PT",
        },
      },
      widthPt: workbookBinding13589,
      heightPt: workbookBinding13590,
    };
  };
  proto["_F"] = function (gsaIn5763: any) {
    if (gsaIn5763.left === undefined || gsaIn5763.top === undefined)
      throw Error("googleSlides: shape frame is missing position.");
    return {
      scaleX: 1,
      scaleY: 1,
      translateX: workbookBinding1807(gsaIn5763.left),
      translateY: workbookBinding1807(gsaIn5763.top),
      unit: "PT",
    };
  };
  proto["_I"] = function (gsaIn13065: any, gsaIn13066: any) {
    this._a.set(gsaIn13065, gsaIn13066);
    this._c.set(gsaIn13066, gsaIn13065);
  };
  proto["_L"] = function (gsaIn10544: any, gsaIn10545: any) {
    this._a.delete(gsaIn10544);
    this._c.delete(gsaIn10545);
    this._s.delete(gsaIn10544.speakerNotes);
  };
  proto["_R"] = function (gsaIn9265: any) {
    let workbookBinding19816 = this._a.get(gsaIn9265);
    if (workbookBinding19816) return workbookBinding19816;
    let workbookBinding19817 = workbookBinding1811([
      "granola",
      "slide",
      gsaIn9265.id,
    ]);
    return (this._I(gsaIn9265, workbookBinding19817), workbookBinding19817);
  };
  proto["_z"] = function (gsaIn9743: any) {
    let workbookBinding20270 = this._a.get(gsaIn9743);
    if (!workbookBinding20270)
      throw Error("googleSlides: slide object id is not mapped.");
    return workbookBinding20270;
  };
  proto["_B"] = function (gsaIn8522: any) {
    let workbookBinding19031 = this._o.get(gsaIn8522);
    if (workbookBinding19031) return workbookBinding19031;
    let workbookBinding19032 = workbookBinding1811([
      "granola",
      "shape",
      gsaIn8522.slideId ?? "slide",
      gsaIn8522.id,
    ]);
    return (this._o.set(gsaIn8522, workbookBinding19032), workbookBinding19032);
  };
  proto["_V"] = function (gsaIn13067: any, gsaIn13068: any) {
    this._o.delete(gsaIn13067);
    this._l.delete(gsaIn13068);
  };
  proto["_H"] = function (gsaIn9744: any) {
    let workbookBinding20271 = this._o.get(gsaIn9744);
    if (!workbookBinding20271)
      throw Error("googleSlides: shape object id is not mapped.");
    return workbookBinding20271;
  };
  proto["_U"] = function (gsaIn9799: any, gsaIn9800: any, gsaIn9801: any) {
    !Number.isFinite(gsaIn9800) ||
      !Number.isFinite(gsaIn9801) ||
      this._l.set(gsaIn9799, {
        widthPt: gsaIn9800,
        heightPt: gsaIn9801,
      });
  };
  proto["_W"] = function (gsaIn2825: any, gsaIn2826: any) {
    (gsaIn2825.pageElements ?? []).forEach((item) => {
      if (!item.objectId || !item.shape) return;
      let workbookBinding11204 = hJe[item.shape.shapeType ?? ""] ?? "rect",
        workbookBinding11205 = this._G(item);
      if (!workbookBinding11205) {
        console.warn(
          `googleSlides: skipped shape ${item.objectId} without size.`,
        );
        return;
      }
      let workbookBinding11206 = gsaIn2826.shapes.add({
          geometry: workbookBinding11204,
          position: workbookBinding11205,
        }),
        workbookBinding11207 = this._J(item.shape.text);
      workbookBinding11207 &&
        (workbookBinding11206.text = workbookBinding11207);
      this._o.set(workbookBinding11206, item.objectId);
      let workbookBinding11208 = this._q(item);
      workbookBinding11208 &&
        this._U(
          item.objectId,
          workbookBinding11208.widthPt,
          workbookBinding11208.heightPt,
        );
    });
  };
  proto["_G"] = function (gsaIn3786: any) {
    let workbookBinding12526 = gsaIn3786.size;
    if (!workbookBinding12526?.width || !workbookBinding12526.height)
      return null;
    let workbookBinding12527 = workbookBinding1810(workbookBinding12526.width),
      workbookBinding12528 = workbookBinding1810(workbookBinding12526.height);
    if (
      workbookBinding12527 === undefined ||
      workbookBinding12528 === undefined
    )
      return null;
    let workbookBinding12529 = gsaIn3786.transform,
      workbookBinding12530 = workbookBinding12529?.scaleX ?? 1,
      workbookBinding12531 = workbookBinding12529?.scaleY ?? 1,
      workbookBinding12532 = this._K(workbookBinding12529);
    if (!workbookBinding12532) return null;
    let workbookBinding12533 = workbookBinding1808(
        workbookBinding12527 * workbookBinding12530,
      ),
      workbookBinding12534 = workbookBinding1808(
        workbookBinding12528 * workbookBinding12531,
      );
    return {
      left: workbookBinding1808(workbookBinding12532.x),
      top: workbookBinding1808(workbookBinding12532.y),
      width: workbookBinding12533,
      height: workbookBinding12534,
    };
  };
  proto["_K"] = function (gsaIn3380: any) {
    if (!gsaIn3380)
      return {
        x: 0,
        y: 0,
      };
    let workbookBinding11723 = gsaIn3380.translateX,
      workbookBinding11724 = gsaIn3380.translateY;
    if (
      typeof workbookBinding11723 != "number" ||
      typeof workbookBinding11724 != "number" ||
      !Number.isFinite(workbookBinding11723) ||
      !Number.isFinite(workbookBinding11724)
    )
      return null;
    if (gsaIn3380.unit === "PT")
      return {
        x: workbookBinding11723,
        y: workbookBinding11724,
      };
    let workbookBinding11725 = workbookBinding1809({
        magnitude: workbookBinding11723,
        unit: "EMU",
      }),
      workbookBinding11726 = workbookBinding1809({
        magnitude: workbookBinding11724,
        unit: "EMU",
      });
    return workbookBinding11725 === undefined ||
      workbookBinding11726 === undefined
      ? null
      : {
          x: workbookBinding1807(workbookBinding11725),
          y: workbookBinding1807(workbookBinding11726),
        };
  };
  proto["_q"] = function (gsaIn8312: any) {
    let workbookBinding18813 = workbookBinding1810(gsaIn8312.size?.width),
      workbookBinding18814 = workbookBinding1810(gsaIn8312.size?.height);
    return workbookBinding18813 === undefined ||
      workbookBinding18814 === undefined
      ? null
      : {
          widthPt: workbookBinding18813,
          heightPt: workbookBinding18814,
        };
  };
  proto["_J"] = function (gsaIn3842: any) {
    let workbookBinding12650 = gsaIn3842?.textElements ?? [],
      workbookBinding12651 = "",
      workbookBinding12652 = true;
    for (let workbookBinding14935 of workbookBinding12650) {
      if (workbookBinding14935.paragraphMarker) {
        workbookBinding12652 || (workbookBinding12651 += "\n");
        workbookBinding12652 = false;
        continue;
      }
      if (workbookBinding14935.textRun?.content) {
        workbookBinding12651 += workbookBinding14935.textRun.content;
        continue;
      }
      workbookBinding14935.autoText?.content &&
        (workbookBinding12651 += workbookBinding14935.autoText.content);
    }
    return workbookBinding12651;
  };
  proto["_Y"] = async function () {
    (
      (
        await this._t.getPresentation(this._n, {
          fields: this._r,
        })
      ).slides ?? []
    ).forEach((item) => {
      if (!item.objectId) return;
      let workbookBinding16101 = this._c.get(item.objectId);
      if (!workbookBinding16101) return;
      let workbookBinding16102 =
        item.slideProperties?.notesPage?.notesProperties?.speakerNotesObjectId;
      workbookBinding16102 &&
        this._s.set(workbookBinding16101.speakerNotes, workbookBinding16102);
    });
  };
}
