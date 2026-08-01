// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comment VO (legacy fRe / Binding1729).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import { of, workbookTt, ensureWorkbookEtInit } from "../emu-units";

export let workbookBinding1729 = class WorkbookClass29 {
  #e;
  #t;
  constructor(cvIn9203, cvIn9204) {
    this.#e = workbookBinding1730(cvIn9203);
    this.#t = cvIn9204;
    this.#e.reactions ??= [];
    this.#e.citations ??= [];
  }
  static fromProto(cvIn13541, cvIn13542) {
    return new WorkbookClass29(cvIn13541, cvIn13542);
  }
  static create(cvIn2685, cvIn2686) {
    if (!cvIn2685.id) throw Error("Comment id is required.");
    if (!cvIn2685.authorId) throw Error("Comment authorId is required.");
    let cvBind10244 = cRe(cvIn2685.body),
      cvBind10245 = uRe(cvIn2685.position);
    return new WorkbookClass29(
      {
        id: cvIn2685.id,
        parentId: cvIn2685.parentId,
        authorId: cvIn2685.authorId,
        createdAt: cvIn2685.createdAt ?? cvIn2686.now(),
        editedAt: cvIn2685.editedAt,
        body: cvBind10244,
        isDeleted: cvIn2685.isDeleted ?? false,
        reactions: cvIn2685.reactions
          ? workbookBinding1731(cvIn2685.reactions)
          : [],
        citations: cvIn2685.citations ?? [],
        position: cvBind10245,
      },
      cvIn2686,
    );
  }
  get id() {
    return this.#e.id;
  }
  get parentId() {
    return this.#e.parentId;
  }
  get authorId() {
    return this.#e.authorId;
  }
  get createdAt() {
    return this.#e.createdAt;
  }
  get editedAt() {
    return this.#e.editedAt;
  }
  get text() {
    return this.#e.body?.plainText ?? "";
  }
  set text(cvIn15132) {
    this.edit(cvIn15132);
  }
  get reactions() {
    return this.#e.reactions ? workbookBinding1731(this.#e.reactions) : [];
  }
  get position() {
    return this.#e.position
      ? {
          ...this.#e.position,
        }
      : undefined;
  }
  get positionPx() {
    let cvBind21142 = this.#e.position;
    if (cvBind21142)
      return {
        x: of(cvBind21142.xEmu),
        y: of(cvBind21142.yEmu),
      };
  }
  edit(cvIn10217, cvIn10218 = {}) {
    this.#e.body = {
      plainText: cvIn10217,
    };
    this.#e.editedAt = cvIn10218.editedAt ?? this.#t.now();
  }
  delete() {
    this.#e.isDeleted = true;
  }
  toggleReaction(cvIn2251, cvIn2252) {
    if (!cvIn2251) throw Error("Reaction type is required.");
    let cvBind9312 = this.#t.resolveAuthorId(cvIn2252),
      cvBind9313 = this.#e.reactions ?? [],
      cvBind9314 = cvBind9313.find((item) => item.type === cvIn2251);
    if (!cvBind9314) {
      cvBind9313.push({
        type: cvIn2251,
        instances: [
          {
            authorId: cvBind9312,
            time: this.#t.now(),
          },
        ],
      });
      this.#e.reactions = cvBind9313;
      return;
    }
    let cvBind9315 = cvBind9314.instances.findIndex(
      (item) => item.authorId === cvBind9312,
    );
    if (cvBind9315 >= 0) {
      if (
        (cvBind9314.instances.splice(cvBind9315, 1),
        cvBind9314.instances.length === 0)
      ) {
        let cvBind22115 = cvBind9313.indexOf(cvBind9314);
        cvBind22115 >= 0 && cvBind9313.splice(cvBind22115, 1);
      }
    } else
      cvBind9314.instances.push({
        authorId: cvBind9312,
        time: this.#t.now(),
      });
    this.#e.reactions = cvBind9313;
  }
  toProto() {
    return workbookBinding1730(this.#e);
  }
};

export let cRe = (cvIn7881: any) => {
  if (typeof cvIn7881 == "string")
    return {
      plainText: cvIn7881,
    };
  if (cvIn7881.plainText === undefined)
    throw Error("Comment body requires plainText.");
  return {
    plainText: cvIn7881.plainText,
  };
};

export let lRe = (cvIn15811: any) => "xEmu" in cvIn15811 && "yEmu" in cvIn15811;

export let uRe = (cvIn7400: any) => {
  if (cvIn7400)
    return lRe(cvIn7400)
      ? {
          xEmu: cvIn7400.xEmu,
          yEmu: cvIn7400.yEmu,
        }
      : (cvIn7400.unit ?? "px") === "emu"
        ? {
            xEmu: cvIn7400.x,
            yEmu: cvIn7400.y,
          }
        : {
            xEmu: workbookTt(cvIn7400.x),
            yEmu: workbookTt(cvIn7400.y),
          };
};

export let workbookBinding1730 = (cvIn2495: any) => {
  if (!cvIn2495.id) throw Error("Comment id is required.");
  if (!cvIn2495.authorId) throw Error("Comment authorId is required.");
  if (!cvIn2495.createdAt) throw Error("Comment createdAt is required.");
  return {
    id: cvIn2495.id,
    parentId: cvIn2495.parentId,
    authorId: cvIn2495.authorId,
    createdAt: cvIn2495.createdAt,
    editedAt: cvIn2495.editedAt,
    body: cvIn2495.body
      ? {
          plainText: cvIn2495.body.plainText,
        }
      : undefined,
    isDeleted: cvIn2495.isDeleted ?? false,
    reactions: cvIn2495.reactions
      ? workbookBinding1731(cvIn2495.reactions)
      : [],
    citations: cvIn2495.citations ? [...cvIn2495.citations] : [],
    position: cvIn2495.position
      ? {
          xEmu: cvIn2495.position.xEmu,
          yEmu: cvIn2495.position.yEmu,
        }
      : undefined,
  };
};

export let workbookBinding1731 = (cvIn8746: any) =>
  cvIn8746.map((item) => {
    if (!item.type) throw Error("Comment reaction requires a type.");
    return {
      type: item.type,
      instances: dRe(item.instances ?? []),
    };
  });

export let dRe = (cvIn6987: any) =>
  cvIn6987.map((item) => {
    if (!item.authorId) throw Error("Reaction instance requires authorId.");
    if (!item.time) throw Error("Reaction instance requires time.");
    return {
      authorId: item.authorId,
      time: item.time,
    };
  });

export const fRe = esmInit(() => {
  ensureWorkbookEtInit();
});

export function ensureCommentVoInit(): void {
  fRe();
}

export function getCommentClass(): typeof workbookBinding1729 {
  fRe();
  return workbookBinding1729;
}
