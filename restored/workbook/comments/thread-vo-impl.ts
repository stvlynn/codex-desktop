// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comment thread VO (legacy Binding1736 / Binding1734).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, Sr } from "../presentation-protobuf";
import { ensureStableIdConstantsInit as workbookH } from "../stable-id";
import { buildThreadSelector as Xde } from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import {
  workbookBinding1725,
  ensureCommentTargetInit,
} from "./comment-target-impl";
import { workbookBinding1729, ensureCommentVoInit } from "./comment-vo-impl";

export let workbookBinding1734 = class WorkbookClass24 {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  constructor(event, tvIn6639) {
    this.#r = event.id;
    this.#t = event.target;
    this.#n = event.comments;
    this.#i = event.status;
    this.#a = event.resolvedBy;
    this.#o = event.resolvedAt;
    this.#e = tvIn6639;
  }
  static create(event, tvIn2999) {
    let tvBind11009 = workbookBinding1725.fromConfig(event.target),
      tvBind11010 = tvIn2999.resolveAuthorId(event.author),
      tvBind11011 = workbookBinding1735(tvIn2999),
      tvBind11012 = workbookBinding1729.create(
        {
          id: event.id,
          authorId: tvBind11010,
          createdAt: event.createdAt,
          body: event.body,
          position: event.position,
        },
        tvBind11011,
      );
    return new WorkbookClass24(
      {
        id: event.id,
        target: tvBind11009,
        comments: [tvBind11012],
        status: event.status ?? Sr.THREAD_STATUS_ACTIVE,
      },
      tvIn2999,
    );
  }
  static fromProto(event, tvIn3220) {
    if (!event.id) throw Error("Thread id is required.");
    if (!event.target) throw Error("Thread target is required.");
    let tvBind11406 = workbookBinding1735(tvIn3220),
      tvBind11407 = (event.comments ?? []).map((item) =>
        workbookBinding1729.fromProto(item, tvBind11406),
      );
    return new WorkbookClass24(
      {
        id: event.id,
        target: workbookBinding1725.fromProto(event.target),
        comments: tvBind11407,
        status: event.status ?? Sr.THREAD_STATUS_UNSPECIFIED,
        resolvedBy: event.resolvedBy,
        resolvedAt: event.resolvedAt,
      },
      tvIn3220,
    );
  }
  get id() {
    return this.#r;
  }
  get target() {
    return this.#t;
  }
  get comments() {
    return [...this.#n];
  }
  get status() {
    return this.#i;
  }
  get resolvedBy() {
    return this.#a;
  }
  get resolvedAt() {
    return this.#o;
  }
  toSnapshot() {
    return {
      aid: `th/${this.#r}`,
      kind: "thread",
      id: this.#r,
      status: this.#i,
      target: {
        slideId: this.#t.slideId,
        elementId: this.#t.elementId,
        spreadsheetCell: this.#t.spreadsheetCell,
        spreadsheetRange: this.#t.spreadsheetRange,
      },
      comments: this.#n.map((item) => ({
        id: item.id,
        text: item.text,
        authorId: item.authorId,
        createdAt: item.createdAt,
      })),
    };
  }
  addReply(tvIn2043, tvIn2044 = {}) {
    let tvBind8903 = this.#n[0];
    if (!tvBind8903)
      throw Error("Cannot reply to a thread without a root comment.");
    let tvBind8904 = this.#e.resolveAuthorId(tvIn2044.author),
      tvBind8905 = workbookBinding1735(this.#e),
      tvBind8906 = workbookBinding1729.create(
        {
          id: tvIn2044.id ?? workbookV(),
          parentId: tvBind8903.id,
          authorId: tvBind8904,
          createdAt: tvIn2044.createdAt,
          body: tvIn2043,
          position: tvIn2044.position,
        },
        tvBind8905,
      );
    return (
      this.#n.push(tvBind8906),
      this.#e.recordOp?.({
        op: "thread.reply",
        target: this.#s(),
        body: tvIn2043,
        author: tvIn2044.author,
        createdAt: tvIn2044.createdAt,
        position: tvIn2044.position,
      }),
      tvBind8906
    );
  }
  getComment(tvIn12751) {
    return this.#n.find((item) => item.id === tvIn12751);
  }
  resolve(tvIn6988, tvIn6989) {
    this.#i = Sr.THREAD_STATUS_RESOLVED;
    this.#a = this.#e.resolveAuthorId(tvIn6988);
    this.#o = tvIn6989 ?? this.#e.now();
    this.#e.recordOp?.({
      op: "thread.resolve",
      target: this.#s(),
    });
  }
  reopen() {
    this.#i = Sr.THREAD_STATUS_ACTIVE;
    this.#a = undefined;
    this.#o = undefined;
    this.#e.recordOp?.({
      op: "thread.reopen",
      target: this.#s(),
    });
  }
  delete() {
    this.#e.recordOp?.({
      op: "thread.remove",
      target: this.#s(),
    });
    this.#e.removeThread(this);
  }
  toProto() {
    return {
      id: this.#r,
      target: this.#t.toProto(),
      comments: this.#n.map((item) => item.toProto()),
      status: this.#i,
      resolvedBy: this.#a,
      resolvedAt: this.#o,
    };
  }
  #s() {
    let tvBind13325 = this.#n[0];
    return (
      Xde({
        threadId: this.#r,
        target: {
          spreadsheetCell: this.#t.spreadsheetCell,
          spreadsheetRange: this.#t.spreadsheetRange,
        },
        rootBody: tvBind13325?.text,
        rootAuthorId: tvBind13325?.authorId,
        rootCreatedAt: tvBind13325?.createdAt,
      }) || `th/${this.#r}`
    );
  }
};

export let workbookBinding1735 = (tvIn13950: any) => ({
  resolveAuthorId: tvIn13950.resolveAuthorId,
  now: tvIn13950.now,
});

export const workbookBinding1736 = esmInit(() => {
  wr();
  ensureCommentTargetInit();
  ensureCommentVoInit();
  ensureBinding662();
  workbookH();
});

export function ensureThreadVoInit(): void {
  workbookBinding1736();
}

export function getCommentThreadClass(): typeof workbookBinding1734 {
  workbookBinding1736();
  return workbookBinding1734;
}
