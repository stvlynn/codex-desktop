// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: scheme-color ref parse + element→AID (yze/bze/dze).
// Stage-3 wave-126. Unlocks rze leave-behind path (rze itself not peeled).

import { DetachedText } from "../detached-text";
import { ImageElement } from "../image-element";
import { workbookBinding736 as ShapeElement } from "../shape-element";
import { composeScopedId } from "../stable-id";
import { prefH } from "./boundary-hooks";

/** Slide class — wired by boundary as X$. */
export type SlideClass = abstract new (...args: any[]) => any;
let Slide: SlideClass = class {
  id!: string;
} as any;
export function setPresentationRefSlideClass(next: SlideClass): void {
  Slide = next;
}

const SCHEME_REF_SEP = ":";
const SCHEME_INDEX_FALLBACK = 1001;
const DEFAULT_SCHEME_COLOR = "bg1";

export function ensureDetachedTextValue(prefIn11202: any) {
  if (typeof prefIn11202 == "string") return prefIn11202;
  let prefBind21687 = DetachedText.create();
  return (prefBind21687.set(prefIn11202), prefBind21687);
}
export function parseSchemeColorRef(prefIn4435: any) {
  if (prefIn4435 == null) return;
  let prefBind13671 = prefIn4435.trim();
  if (!prefBind13671) return;
  let prefBind13672 = prefBind13671.indexOf(SCHEME_REF_SEP);
  if (prefBind13672 > 0) {
    let prefBind20055 = prefBind13671.slice(0, prefBind13672),
      prefBind20056 = prefBind13671.slice(prefBind13672 + 1).trim(),
      prefBind20057 = Number(prefBind20055);
    if (Number.isFinite(prefBind20057))
      return {
        index: prefBind20057,
        schemeColor: prefBind20056 || DEFAULT_SCHEME_COLOR,
      };
  }
  let prefBind13673 = Number(prefBind13671);
  return Number.isFinite(prefBind13673) &&
    String(prefBind13673) === prefBind13671
    ? {
        index: prefBind13673,
        schemeColor: DEFAULT_SCHEME_COLOR,
      }
    : {
        index: SCHEME_INDEX_FALLBACK,
        schemeColor: prefBind13671,
      };
}
export function elementToAid(prefIn4941: any) {
  if (prefIn4941 instanceof Slide) return `sl/${prefIn4941.id}`;
  if (prefIn4941 instanceof ShapeElement) {
    let prefBind22551 = prefIn4941.slideId;
    return prefBind22551
      ? composeScopedId("sh", prefBind22551, prefIn4941.id)
      : undefined;
  }
  if (prefIn4941 instanceof ImageElement) {
    let prefBind22552 = prefIn4941.slideId;
    return prefBind22552 ? `im/${prefBind22552}.${prefIn4941.id}` : undefined;
  }
  if (prefIn4941 instanceof prefH.NotesSlide) {
    let prefBind22695 = prefIn4941.slideId;
    return prefBind22695 ? `nt/${prefBind22695}` : undefined;
  }
  if (prefIn4941 instanceof prefH.CommentThread) return `th/${prefIn4941.id}`;
}

/** Legacy aliases (wave-126). */
export const dze = ensureDetachedTextValue;
export const yze = parseSchemeColorRef;
export const bze = elementToAid;
