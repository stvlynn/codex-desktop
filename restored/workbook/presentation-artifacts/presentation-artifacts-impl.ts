// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation workbook artifact registry + view props (legacy rYe/aYe/iYe).
// Stage-3 wave-146.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Dn as _presentationDn,
  Fn as _presentationFn,
} from "../presentation-protobuf";
import {
  ensureStableIdConstantsInit,
  randomBase36Id as workbookHelper299,
} from "../stable-id";

export class workbookBinding1816 {
  #e;
  constructor(paIn14915) {
    this.#e = paIn14915;
  }
  get id() {
    return this.#e.id;
  }
  get kind() {
    return "workbook";
  }
  get title() {
    return this.#e.title;
  }
  set title(paIn14558) {
    this.#e.title = paIn14558;
  }
  get workbook() {
    return this.#e.workbook;
  }
  toRef() {
    return {
      id: this.#e.id,
      kind: _presentationDn.ARTIFACT_KIND_WORKBOOK,
      title: this.#e.title,
    };
  }
}

export class nYe {
  #e;
  #t = new Map();
  #n = new WeakMap();
  constructor(paIn14916) {
    this.#e = paIn14916;
  }
  get rootArtifactId() {
    return this.#e;
  }
  addWorkbook(paIn3291, paIn3292 = {}) {
    let paBind11545 = this.#n.get(paIn3291);
    if (paBind11545) {
      let paBind18700 = this.#t.get(paBind11545);
      if (!paBind18700)
        throw Error(`Workbook artifact ${paBind11545} is not registered.`);
      return (
        paIn3292.title !== undefined && (paBind18700.title = paIn3292.title),
        new workbookBinding1816(paBind18700)
      );
    }
    let paBind11546 = paIn3292.id ?? `workbook-${workbookHelper299()}`;
    if (this.#t.has(paBind11546))
      throw Error(`Workbook artifact ${paBind11546} is already registered.`);
    let paBind11547 = {
      id: paBind11546,
      title: paIn3292.title,
      workbook: paIn3291,
    };
    return (
      this.#t.set(paBind11546, paBind11547),
      this.#n.set(paIn3291, paBind11546),
      new workbookBinding1816(paBind11547)
    );
  }
  getWorkbook(paIn9537) {
    let paBind20058 = this.#t.get(paIn9537);
    if (!paBind20058) throw Error(`Workbook artifact ${paIn9537} not found.`);
    return paBind20058.workbook;
  }
  getWorkbookArtifact(paIn9292) {
    let paBind19853 = this.#t.get(paIn9292);
    if (!paBind19853) throw Error(`Workbook artifact ${paIn9292} not found.`);
    return new workbookBinding1816(paBind19853);
  }
  toArtifacts(paIn6411) {
    let paBind16587 = [
      {
        id: this.#e,
        presentation: paIn6411,
      },
    ];
    for (let paBind19746 of this.#t.values())
      paBind16587.push({
        id: paBind19746.id,
        title: paBind19746.title,
        workbook: paBind19746.workbook.toProto(),
      });
    return paBind16587;
  }
  toBundle(paIn11336) {
    return {
      rootArtifactId: this.#e,
      artifacts: this.toArtifacts(paIn11336),
    };
  }
  hydrateWorkbook(paIn6550, paIn6551, paIn6552 = {}) {
    if (this.#t.has(paIn6550))
      throw Error(`Workbook artifact ${paIn6550} is already registered.`);
    let paBind16798 = {
      id: paIn6550,
      title: paIn6552.title,
      workbook: paIn6551,
    };
    return (
      this.#t.set(paIn6550, paBind16798),
      this.#n.set(paIn6551, paIn6550),
      new workbookBinding1816(paBind16798)
    );
  }
}

export const rYe = esmInit(() => {
  _presentationFn();
  ensureStableIdConstantsInit();
});

export class iYe {
  #e;
  #t;
  #n = false;
  constructor(paIn11537, paIn11538) {
    this.#e = paIn11537;
    this.#t = paIn11538 ? structuredClone(paIn11538) : undefined;
  }
  get gridlinesVisible() {
    return this.#n;
  }
  get guidesVisible() {
    return this.#t?.slideViewShowGuides === true;
  }
  get gridSpacingCxEmu() {
    return this.#t?.gridSpacingCxEmu;
  }
  get gridSpacingCyEmu() {
    return this.#t?.gridSpacingCyEmu;
  }
  showGridlines() {
    this.#r(true);
  }
  hideGridlines() {
    this.#r(false);
  }
  toggleGridlines() {
    let paBind22299 = !this.#n;
    return (this.#r(paBind22299), paBind22299);
  }
  showGuides() {
    this.#i(true);
  }
  hideGuides() {
    this.#i(false);
  }
  toggleGuides() {
    let paBind22059 = !this.guidesVisible;
    return (this.#i(paBind22059), paBind22059);
  }
  toProto() {
    if (!this.#t) return;
    let paBind18544 = structuredClone(this.#t);
    return (
      paBind18544.slideViewShowGuides !== undefined &&
        (paBind18544.slideViewShowGuides = false),
      paBind18544
    );
  }
  #r(paIn11020) {
    this.#n !== paIn11020 &&
      ((this.#n = paIn11020), this.#e.queuePresentationCollabPublish());
  }
  #i(paIn8959) {
    this.guidesVisible !== paIn8959 &&
      ((this.#t = {
        ...(this.#t ?? {}),
        slideViewShowGuides: paIn8959,
      }),
      this.#e.queuePresentationCollabPublish());
  }
}

export const aYe = esmInit(() => {});

export function getWorkbookArtifactClass(): typeof workbookBinding1816 {
  rYe();
  return workbookBinding1816;
}

export function getPresentationViewClass(): typeof iYe {
  aYe();
  return iYe;
}

export function getWorkbookArtifactRegistryClass(): typeof nYe {
  rYe();
  return nYe;
}

export const ensurePresentationArtifactsInit = () => {
  rYe();
  aYe();
};
