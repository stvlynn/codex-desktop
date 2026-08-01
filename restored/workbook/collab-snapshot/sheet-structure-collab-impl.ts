// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: per-prefix sheet structure collab facades (legacy Binding824–831).
// Stage-3 wave-144.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookBinding818,
  workbookBinding819,
} from "./yjs-snapshot-sync-impl";
import { ensureSchemaMetaInit } from "../schema-meta";

export class workbookBinding824 {
  #e;
  constructor(sscIn4015) {
    this.#e = new workbookBinding818({
      root: sscIn4015.root,
      prefix: sscIn4015.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn4015.runLocalTransaction,
      getCollabOrigins: sscIn4015.getCollabOrigins,
      readSnapshotFromOwner: sscIn4015.readPivotTables,
      applySnapshotToOwner: (sscIn15791) =>
        sscIn4015.applyPivotTables(sscIn15791 ?? []),
      encodeSnapshot: (sscIn16657) => sscIn16657,
      decodeSnapshot: (sscIn16658) => sscIn16658,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding825 {
  #e;
  constructor(sscIn4091) {
    this.#e = new workbookBinding818({
      root: sscIn4091.root,
      prefix: sscIn4091.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn4091.runLocalTransaction,
      getCollabOrigins: sscIn4091.getCollabOrigins,
      readSnapshotFromOwner: sscIn4091.readSlicers,
      applySnapshotToOwner: (sscIn15866) =>
        sscIn4091.applySlicers(sscIn15866 ?? []),
      encodeSnapshot: (sscIn16659) => sscIn16659,
      decodeSnapshot: (sscIn16660) => sscIn16660,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding826 {
  #e;
  constructor(sscIn4108) {
    this.#e = new workbookBinding818({
      root: sscIn4108.root,
      prefix: sscIn4108.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn4108.runLocalTransaction,
      getCollabOrigins: sscIn4108.getCollabOrigins,
      readSnapshotFromOwner: sscIn4108.readTables,
      applySnapshotToOwner: (sscIn15911) =>
        sscIn4108.applyTables(sscIn15911 ?? []),
      encodeSnapshot: (sscIn16661) => sscIn16661,
      decodeSnapshot: (sscIn16662) => sscIn16662,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding827 {
  #e;
  constructor(sscIn3825) {
    this.#e = new workbookBinding818({
      root: sscIn3825.root,
      prefix: sscIn3825.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn3825.runLocalTransaction,
      getCollabOrigins: sscIn3825.getCollabOrigins,
      readSnapshotFromOwner: sscIn3825.readStructure,
      applySnapshotToOwner: (sscIn13669) => {
        sscIn13669 && sscIn3825.applyStructure(sscIn13669);
      },
      encodeSnapshot: (sscIn16663) => sscIn16663,
      decodeSnapshot: (sscIn16664) => sscIn16664,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding828 {
  #e;
  constructor(sscIn3862) {
    this.#e = new workbookBinding818({
      root: sscIn3862.root,
      prefix: sscIn3862.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn3862.runLocalTransaction,
      getCollabOrigins: sscIn3862.getCollabOrigins,
      readSnapshotFromOwner: sscIn3862.readConditionalFormattings,
      applySnapshotToOwner: (sscIn15224) =>
        sscIn3862.applyConditionalFormattings(sscIn15224 ?? []),
      encodeSnapshot: (sscIn16665) => sscIn16665,
      decodeSnapshot: (sscIn16666) => sscIn16666,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding829 {
  #e;
  constructor(sscIn3944) {
    this.#e = new workbookBinding818({
      root: sscIn3944.root,
      prefix: sscIn3944.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn3944.runLocalTransaction,
      getCollabOrigins: sscIn3944.getCollabOrigins,
      readSnapshotFromOwner: sscIn3944.readDataValidations,
      applySnapshotToOwner: (sscIn15600) =>
        sscIn3944.applyDataValidations(sscIn15600 ?? []),
      encodeSnapshot: (sscIn16667) => sscIn16667,
      decodeSnapshot: (sscIn16668) => sscIn16668,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding830 {
  #e;
  constructor(sscIn4061) {
    this.#e = new workbookBinding818({
      root: sscIn4061.root,
      prefix: sscIn4061.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn4061.runLocalTransaction,
      getCollabOrigins: sscIn4061.getCollabOrigins,
      readSnapshotFromOwner: sscIn4061.readDrawings,
      applySnapshotToOwner: (sscIn15855) =>
        sscIn4061.applyDrawings(sscIn15855 ?? []),
      encodeSnapshot: (sscIn16669) => sscIn16669,
      decodeSnapshot: (sscIn16670) => sscIn16670,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export class workbookBinding831 {
  #e;
  constructor(sscIn4092) {
    this.#e = new workbookBinding818({
      root: sscIn4092.root,
      prefix: sscIn4092.prefix,
      schemaVersion: 1,
      runLocalTransaction: sscIn4092.runLocalTransaction,
      getCollabOrigins: sscIn4092.getCollabOrigins,
      readSnapshotFromOwner: sscIn4092.readSparklineGroups,
      applySnapshotToOwner: sscIn4092.applySparklineGroups,
      encodeSnapshot: (sscIn16671) => sscIn16671,
      decodeSnapshot: (sscIn16672) => sscIn16672,
    });
  }
  dispose() {
    this.#e.dispose();
  }
  activate() {
    this.#e.activate();
  }
  flushFromOwner() {
    this.#e.flushFromOwner();
  }
}

export const Zve = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const Qve = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const $ve = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const eye = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const tye = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const nye = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const rye = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
export const iye = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});
