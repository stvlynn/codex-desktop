// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation awareness / presence state (legacy CJe).
// Stage-3 wave-139.

import {
  workbookHelper820,
  workbookHelper821,
} from "./clone-presence-cursor-impl";

export class CJe {
  #e = new Map();
  activeSlideId;
  cursor = null;
  selection = null;
  constructor(ppIn12265 = {}) {
    this.activeSlideId = ppIn12265.activeSlideId ?? null;
  }
  setActiveSlideId(ppIn12631) {
    this.activeSlideId = ppIn12631?.trim() || null;
  }
  setCursor(ppIn14736) {
    this.cursor = workbookHelper820(ppIn14736);
  }
  setSelection(ppIn14168) {
    this.selection = workbookHelper821(ppIn14168);
  }
  clearCursor(ppIn9745 = {}) {
    this.cursor &&
      ((ppIn9745.slideId && this.cursor.slideId !== ppIn9745.slideId) ||
        (this.cursor = null));
  }
  clearSelection(ppIn9350 = {}) {
    this.selection &&
      ((ppIn9350.slideId && this.selection.slideId !== ppIn9350.slideId) ||
        (this.selection = null));
  }
  setPresenceCursor(ppIn4815, ppIn4816, ppIn4817 = {}) {
    if (!ppIn4815) throw Error("Presence id is required.");
    if (!ppIn4816) {
      this.clearPresenceCursor(ppIn4815);
      return;
    }
    let ppBind14185 = this.#e.get(ppIn4815);
    this.#e.set(ppIn4815, {
      id: ppIn4815,
      kind: ppIn4817.kind ?? ppBind14185?.kind ?? "collaborator",
      cursor: workbookHelper820(ppIn4816),
      selection: workbookHelper821(ppBind14185?.selection ?? null),
    });
  }
  setPresenceSelection(ppIn4786, ppIn4787, ppIn4788 = {}) {
    if (!ppIn4786) throw Error("Presence id is required.");
    if (!ppIn4787) {
      this.clearPresenceSelection(ppIn4786);
      return;
    }
    let ppBind14147 = this.#e.get(ppIn4786);
    this.#e.set(ppIn4786, {
      id: ppIn4786,
      kind: ppIn4788.kind ?? ppBind14147?.kind ?? "collaborator",
      cursor: workbookHelper820(ppBind14147?.cursor ?? null),
      selection: workbookHelper821(ppIn4787),
    });
  }
  clearPresenceCursor(ppIn5373, ppIn5374 = {}) {
    if (!ppIn5373) throw Error("Presence id is required.");
    let ppBind15099 = this.#e.get(ppIn5373);
    if (
      ppBind15099 &&
      !(ppIn5374.slideId && ppBind15099.cursor?.slideId !== ppIn5374.slideId)
    ) {
      if (ppBind15099.selection) {
        this.#e.set(ppIn5373, {
          ...ppBind15099,
          cursor: null,
        });
        return;
      }
      this.#e.delete(ppIn5373);
    }
  }
  clearPresenceSelection(ppIn5309, ppIn5310 = {}) {
    if (!ppIn5309) throw Error("Presence id is required.");
    let ppBind14947 = this.#e.get(ppIn5309);
    if (
      ppBind14947 &&
      !(ppIn5310.slideId && ppBind14947.selection?.slideId !== ppIn5310.slideId)
    ) {
      if (ppBind14947.cursor) {
        this.#e.set(ppIn5309, {
          ...ppBind14947,
          selection: null,
        });
        return;
      }
      this.#e.delete(ppIn5309);
    }
  }
  getPresenceCursorsForSlide(ppIn3657) {
    let ppBind12228 = ppIn3657?.trim();
    if (!ppBind12228) return [];
    let ppBind12229 = [];
    for (let ppBind14559 of this.#e.values())
      !ppBind14559.cursor ||
        ppBind14559.cursor.slideId !== ppBind12228 ||
        ppBind12229.push({
          presenceId: ppBind14559.id,
          kind: ppBind14559.kind,
          slideId: ppBind14559.cursor.slideId,
          point: {
            x: ppBind14559.cursor.point.x,
            y: ppBind14559.cursor.point.y,
          },
          label: ppBind14559.cursor.label,
          status: ppBind14559.cursor.status,
        });
    return ppBind12229;
  }
  getPresenceSelectionsForSlide(ppIn3460) {
    let ppBind11883 = ppIn3460?.trim();
    if (!ppBind11883) return [];
    let ppBind11884 = [];
    for (let ppBind14230 of this.#e.values())
      !ppBind14230.selection ||
        ppBind14230.selection.slideId !== ppBind11883 ||
        ppBind11884.push({
          presenceId: ppBind14230.id,
          kind: ppBind14230.kind,
          slideId: ppBind14230.selection.slideId,
          selectedElementIds: [...ppBind14230.selection.selectedElementIds],
          label: ppBind14230.selection.label,
          status: ppBind14230.selection.status,
        });
    return ppBind11884;
  }
}
