// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comment target VO (legacy sRe / Binding1725).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  formatA1,
  parseA1Range,
  parseSheetRef,
  initAddressUtils,
} from "../../utils/spreadsheet-address-utils";

export let workbookBinding1725 = class WorkbookClass36 {
  #e;
  constructor(ctIn14556) {
    this.#e = workbookBinding1728(ctIn14556);
  }
  static fromProto(ctIn14050) {
    return new WorkbookClass36(ctIn14050);
  }
  static fromConfig(ctIn3041) {
    return "proto" in ctIn3041
      ? new WorkbookClass36(ctIn3041.proto)
      : "slide" in ctIn3041
        ? new WorkbookClass36({
            slide: $Le(ctIn3041.slide),
          })
        : "element" in ctIn3041
          ? new WorkbookClass36({
              element: eRe(ctIn3041.element),
            })
          : "textRange" in ctIn3041
            ? new WorkbookClass36({
                textRange: tRe(ctIn3041.textRange),
              })
            : "textMatch" in ctIn3041
              ? new WorkbookClass36({
                  textRange: nRe(ctIn3041.textMatch),
                })
              : "cell" in ctIn3041
                ? new WorkbookClass36({
                    spreadsheetCell: rRe(ctIn3041.cell),
                  })
                : new WorkbookClass36({
                    spreadsheetRange: iRe(ctIn3041.range),
                  });
  }
  toProto() {
    return workbookBinding1728(this.#e);
  }
  get kind() {
    return this.#e.slide
      ? "slide"
      : this.#e.element
        ? "element"
        : this.#e.textRange
          ? "textRange"
          : this.#e.spreadsheetCell
            ? "spreadsheetCell"
            : this.#e.spreadsheetRange
              ? "spreadsheetRange"
              : "unknown";
  }
  get slideId() {
    return (
      this.#e.slide?.slideId ??
      this.#e.element?.slideId ??
      this.#e.textRange?.slideId
    );
  }
  get elementId() {
    return this.#e.element?.elementId ?? this.#e.textRange?.elementId;
  }
  get spreadsheetCell() {
    let ctBind17746 = this.#e.spreadsheetCell;
    if (ctBind17746)
      return {
        sheetName: ctBind17746.sheetName,
        sheetId: ctBind17746.sheetId,
        address: ctBind17746.address,
      };
  }
  get spreadsheetRange() {
    let ctBind16407 = this.#e.spreadsheetRange;
    if (ctBind16407)
      return {
        sheetName: ctBind16407.sheetName,
        sheetId: ctBind16407.sheetId,
        startAddress: ctBind16407.startAddress,
        endAddress: ctBind16407.endAddress,
      };
  }
};

export let $Le = (ctIn10732: any) => {
  if (!ctIn10732.id) throw Error("Slide target requires a slide id.");
  return {
    slideId: ctIn10732.id,
  };
};

export let eRe = (ctIn7382: any) => {
  if (!ctIn7382.id) throw Error("Element target requires an element id.");
  let ctBind17802 = ctIn7382.slideId;
  if (!ctBind17802) throw Error("Element target requires a slide id.");
  return {
    slideId: ctBind17802,
    elementId: ctIn7382.id,
  };
};

export let tRe = (ctIn4738: any) => {
  let { element, startCp, length } = ctIn4738;
  if (!element.id) throw Error("Text range target requires an element id.");
  let ctBind14081 = element.slideId;
  if (!ctBind14081) throw Error("Text range target requires a slide id.");
  return {
    slideId: ctBind14081,
    elementId: element.id,
    startCp,
    length,
    context: workbookBinding1726(ctIn4738.context),
  };
};

export let nRe = (ctIn2928: any) => {
  let { element, query } = ctIn2928;
  if (!element.id) throw Error("Text match target requires an element id.");
  let ctBind10837 = element.slideId;
  if (!ctBind10837) throw Error("Text match target requires a slide id.");
  if (!query) throw Error("Text match target requires a query.");
  let i = element.text.toString(),
    ctBind10838 = ctIn2928.occurrence ?? 0,
    ctBind10839 = oRe(i, query, ctBind10838);
  if (ctBind10839 < 0)
    throw Error(`Text match target could not find "${query}".`);
  return {
    slideId: ctBind10837,
    elementId: element.id,
    startCp: ctBind10839,
    length: query.length,
    context: workbookBinding1726(ctIn2928.context),
  };
};

export let workbookBinding1726 = (ctIn9039: any) => {
  if (
    ctIn9039 &&
    (ctIn9039.contextLength !== undefined || ctIn9039.contextHash !== undefined)
  )
    return {
      contextLength: ctIn9039.contextLength,
      contextHash: ctIn9039.contextHash,
    };
};

export let rRe = (ctIn5753: any) => {
  let { worksheet, address } = workbookBinding1727(ctIn5753),
    ctBind15681 = parseA1Range(address);
  if (!ctBind15681) throw Error(`Invalid cell address: ${address}`);
  if (ctBind15681.ref.includes(":"))
    throw Error(`Cell target expects a single cell: ${address}`);
  return {
    sheetName: worksheet.name,
    sheetId: worksheet.sheetId,
    address: ctBind15681.ref,
  };
};

export let iRe = (ctIn4793: any) => {
  let { worksheet, address } = workbookBinding1727(ctIn4793),
    ctBind14156 = parseA1Range(address);
  if (!ctBind14156) throw Error(`Invalid range address: ${address}`);
  let ctBind14157 = formatA1(
      ctBind14156.bounds.startRow,
      ctBind14156.bounds.startCol,
    ),
    ctBind14158 = formatA1(
      ctBind14156.bounds.endRow,
      ctBind14156.bounds.endCol,
    );
  return {
    sheetName: worksheet.name,
    sheetId: worksheet.sheetId,
    startAddress: ctBind14157,
    endAddress: ctBind14158,
  };
};

export let workbookBinding1727 = (ctIn5198: any) => {
  if (aRe(ctIn5198)) {
    let ctBind18540 = ctIn5198.__getWorksheet();
    if (!ctBind18540) throw Error("Range target requires a worksheet.");
    let { ref: _ref } = parseSheetRef(ctIn5198.address);
    return {
      worksheet: ctBind18540,
      address: _ref,
    };
  }
  let { worksheet, address } = ctIn5198,
    { ref } = parseSheetRef(address);
  return {
    worksheet,
    address: ref,
  };
};

export let aRe = (ctIn13948: any) =>
  typeof ctIn13948 == "object" && !!ctIn13948 && "__getWorksheet" in ctIn13948;

export let oRe = (ctIn7769: any, ctIn7770: any, ctIn7771: any) => {
  let ctBind18255 = -1,
    ctBind18256 = 0;
  for (let ctBind20826 = 0; ctBind20826 <= ctIn7771; ctBind20826 += 1) {
    if (
      ((ctBind18255 = ctIn7769.indexOf(ctIn7770, ctBind18256)),
      ctBind18255 === -1)
    )
      return -1;
    ctBind18256 = ctBind18255 + ctIn7770.length;
  }
  return ctBind18255;
};

export let workbookBinding1728 = (ctIn1071: any) => {
  if (ctIn1071.spreadsheetCell) {
    let ctBind17842 = ctIn1071.spreadsheetCell;
    return {
      spreadsheetCell: {
        sheetName: ctBind17842.sheetName,
        sheetId: ctBind17842.sheetId,
        address: ctBind17842.address,
      },
    };
  }
  if (ctIn1071.spreadsheetRange) {
    let ctBind16477 = ctIn1071.spreadsheetRange;
    return {
      spreadsheetRange: {
        sheetName: ctBind16477.sheetName,
        sheetId: ctBind16477.sheetId,
        startAddress: ctBind16477.startAddress,
        endAddress: ctBind16477.endAddress,
      },
    };
  }
  if (ctIn1071.slide)
    return {
      slide: {
        slideId: ctIn1071.slide.slideId,
      },
    };
  if (ctIn1071.element)
    return {
      element: {
        slideId: ctIn1071.element.slideId,
        elementId: ctIn1071.element.elementId,
      },
    };
  if (ctIn1071.textRange) {
    let ctBind13449 = ctIn1071.textRange.context;
    return {
      textRange: {
        slideId: ctIn1071.textRange.slideId,
        elementId: ctIn1071.textRange.elementId,
        startCp: ctIn1071.textRange.startCp,
        length: ctIn1071.textRange.length,
        context: ctBind13449
          ? {
              contextLength: ctBind13449.contextLength,
              contextHash: ctBind13449.contextHash,
            }
          : undefined,
      },
    };
  }
  return {};
};

export const sRe = esmInit(() => {
  initAddressUtils();
});

export function ensureCommentTargetInit(): void {
  sRe();
}

export function getCommentTargetClass(): typeof workbookBinding1725 {
  sRe();
  return workbookBinding1725;
}
