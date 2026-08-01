// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comment person VO (legacy Binding1733 / Binding1732).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  bracedUuidUpper as workbookV,
  ensureStableIdConstantsInit as workbookH,
} from "../stable-id";

export let workbookBinding1732 = class WorkbookClass35 {
  #e;
  constructor(pvIn14913) {
    this.#e = pvIn14913;
  }
  static create(pvIn4739) {
    if (!pvIn4739.displayName.trim())
      throw Error("Person displayName is required.");
    return new WorkbookClass35({
      id: pvIn4739.id ?? workbookV(),
      displayName: pvIn4739.displayName,
      initials: pvIn4739.initials,
      email: pvIn4739.email,
      avatarUrl: pvIn4739.avatarUrl,
      userId: pvIn4739.userId,
      providerId: pvIn4739.providerId,
    });
  }
  static fromProto(pvIn13612) {
    return new WorkbookClass35(hRe(pvIn13612));
  }
  get id() {
    return this.#e.id;
  }
  get displayName() {
    return this.#e.displayName;
  }
  set displayName(pvIn10162) {
    if (!pvIn10162.trim()) throw Error("Person displayName is required.");
    this.#e.displayName = pvIn10162;
  }
  get initials() {
    return this.#e.initials;
  }
  set initials(pvIn13949) {
    this.#e.initials = pvIn13949;
  }
  get email() {
    return this.#e.email;
  }
  set email(pvIn14557) {
    this.#e.email = pvIn14557;
  }
  get avatarUrl() {
    return this.#e.avatarUrl;
  }
  set avatarUrl(pvIn13744) {
    this.#e.avatarUrl = pvIn13744;
  }
  get userId() {
    return this.#e.userId;
  }
  set userId(pvIn14328) {
    this.#e.userId = pvIn14328;
  }
  get providerId() {
    return this.#e.providerId;
  }
  set providerId(pvIn13613) {
    this.#e.providerId = pvIn13613;
  }
  update(pvIn4392) {
    pvIn4392.displayName !== undefined &&
      (this.displayName = pvIn4392.displayName);
    pvIn4392.initials !== undefined && (this.initials = pvIn4392.initials);
    pvIn4392.email !== undefined && (this.email = pvIn4392.email);
    pvIn4392.avatarUrl !== undefined && (this.avatarUrl = pvIn4392.avatarUrl);
    pvIn4392.userId !== undefined && (this.userId = pvIn4392.userId);
    pvIn4392.providerId !== undefined &&
      (this.providerId = pvIn4392.providerId);
  }
  toProto() {
    return {
      id: this.#e.id,
      displayName: this.#e.displayName,
      initials: this.#e.initials,
      email: this.#e.email,
      avatarUrl: this.#e.avatarUrl,
      userId: this.#e.userId,
      providerId: this.#e.providerId,
    };
  }
};

export let pRe = (pvIn11096: any) =>
  pvIn11096 instanceof workbookBinding1732
    ? false
    : typeof pvIn11096 == "object" && !!pvIn11096 && "displayName" in pvIn11096;

export let mRe = (pvIn12567: any) =>
  pvIn12567 instanceof workbookBinding1732
    ? true
    : typeof pvIn12567 == "object" && !!pvIn12567 && "id" in pvIn12567;

export let hRe = (pvIn4847: any) => {
  if (!pvIn4847.id) throw Error("Person id is required.");
  if (!pvIn4847.displayName) throw Error("Person displayName is required.");
  return {
    id: pvIn4847.id,
    displayName: pvIn4847.displayName,
    initials: pvIn4847.initials,
    email: pvIn4847.email,
    avatarUrl: pvIn4847.avatarUrl,
    userId: pvIn4847.userId,
    providerId: pvIn4847.providerId,
  };
};

export const workbookBinding1733 = esmInit(() => {
  workbookH();
});

export function ensurePersonVoInit(): void {
  workbookBinding1733();
}

export function getPersonClass(): typeof workbookBinding1732 {
  workbookBinding1733();
  return workbookBinding1732;
}
