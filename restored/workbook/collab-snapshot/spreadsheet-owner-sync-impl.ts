// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet Yjs owner-sync facades (legacy Pgt…Wgt/Ggt).
// Stage-3 wave-145.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookBinding818,
  workbookBinding819,
} from "./yjs-snapshot-sync-impl";
import { ensureSchemaMetaInit } from "../schema-meta";
import { workbookBinding1812, TJe } from "./presentation-owner-sync-impl";

export class Pgt {
  #e;
  constructor(sosIn4317) {
    this.#e = new workbookBinding818({
      root: sosIn4317.root,
      prefix: sosIn4317.prefix,
      schemaVersion: 1,
      runLocalTransaction: sosIn4317.runLocalTransaction,
      getCollabOrigins: sosIn4317.getCollabOrigins,
      readSnapshotFromOwner: sosIn4317.readTheme,
      applySnapshotToOwner: sosIn4317.applyTheme,
      encodeSnapshot: (sosIn16691) => sosIn16691,
      decodeSnapshot: (sosIn16692) => sosIn16692,
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

export const Fgt = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});

export class Igt {
  #e;
  constructor(sosIn4024) {
    this.#e = new workbookBinding818({
      root: sosIn4024.root,
      prefix: sosIn4024.prefix,
      schemaVersion: 1,
      runLocalTransaction: sosIn4024.runLocalTransaction,
      getCollabOrigins: sosIn4024.getCollabOrigins,
      readSnapshotFromOwner: sosIn4024.readFeaturePropertyBags,
      applySnapshotToOwner: sosIn4024.applyFeaturePropertyBags,
      encodeSnapshot: (sosIn16693) => sosIn16693,
      decodeSnapshot: (sosIn16694) => sosIn16694,
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

export const Lgt = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});

export class Rgt {
  #e;
  constructor(sosIn4011) {
    this.#e = new workbookBinding818({
      root: sosIn4011.root,
      prefix: sosIn4011.prefix,
      schemaVersion: 1,
      runLocalTransaction: sosIn4011.runLocalTransaction,
      getCollabOrigins: sosIn4011.getCollabOrigins,
      readSnapshotFromOwner: sosIn4011.readDefinedNames,
      applySnapshotToOwner: (sosIn15776) =>
        sosIn4011.applyDefinedNames(sosIn15776 ?? []),
      encodeSnapshot: (sosIn16695) => sosIn16695,
      decodeSnapshot: (sosIn16696) => sosIn16696,
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

export const zgt = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});

export class Bgt {
  #e;
  constructor(sosIn3119) {
    this.#e = new workbookBinding818({
      root: sosIn3119.root,
      prefix: sosIn3119.prefix,
      schemaVersion: 1,
      runLocalTransaction: sosIn3119.runLocalTransaction,
      getCollabOrigins: sosIn3119.getCollabOrigins,
      readSnapshotFromOwner: sosIn3119.readImages,
      applySnapshotToOwner: (sosIn15931) =>
        sosIn3119.applyImages(sosIn15931 ?? []),
      encodeSnapshot: (sosIn12648) =>
        sosIn12648.map((item) => ({
          ...item,
          data: Array.from(item.data ?? []),
        })),
      decodeSnapshot: (sosIn12385) =>
        sosIn12385.map((item) => ({
          ...item,
          data: new Uint8Array(item.data ?? []),
        })),
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

export const Vgt = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});

export class Hgt {
  #e;
  constructor(sosIn4158) {
    this.#e = new workbookBinding818({
      root: sosIn4158.root,
      prefix: sosIn4158.prefix,
      schemaVersion: 1,
      runLocalTransaction: sosIn4158.runLocalTransaction,
      getCollabOrigins: sosIn4158.getCollabOrigins,
      readSnapshotFromOwner: sosIn4158.readNotes,
      applySnapshotToOwner: (sosIn16039) =>
        sosIn4158.applyNotes(sosIn16039 ?? []),
      encodeSnapshot: (sosIn16697) => sosIn16697,
      decodeSnapshot: (sosIn16698) => sosIn16698,
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

export const Ugt = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});

export class Wgt {
  #e;
  constructor(sosIn713) {
    this.#e = [
      new Pgt({
        root: sosIn713.root,
        prefix: "theme",
        runLocalTransaction: sosIn713.runLocalTransaction,
        getCollabOrigins: sosIn713.getCollabOrigins,
        readTheme: sosIn713.readTheme,
        applyTheme: sosIn713.applyTheme,
      }),
      new Igt({
        root: sosIn713.root,
        prefix: "featurePropertyBags",
        runLocalTransaction: sosIn713.runLocalTransaction,
        getCollabOrigins: sosIn713.getCollabOrigins,
        readFeaturePropertyBags: sosIn713.readFeaturePropertyBags,
        applyFeaturePropertyBags: sosIn713.applyFeaturePropertyBags,
      }),
      new Rgt({
        root: sosIn713.root,
        prefix: "definedNames",
        runLocalTransaction: sosIn713.runLocalTransaction,
        getCollabOrigins: sosIn713.getCollabOrigins,
        readDefinedNames: sosIn713.readDefinedNames,
        applyDefinedNames: sosIn713.applyDefinedNames,
      }),
      new Bgt({
        root: sosIn713.root,
        prefix: "images",
        runLocalTransaction: sosIn713.runLocalTransaction,
        getCollabOrigins: sosIn713.getCollabOrigins,
        readImages: sosIn713.readImages,
        applyImages: sosIn713.applyImages,
      }),
      new workbookBinding1812({
        root: sosIn713.root,
        prefix: "comments",
        runLocalTransaction: sosIn713.runLocalTransaction,
        getCollabOrigins: sosIn713.getCollabOrigins,
        readComments: sosIn713.readComments,
        applyComments: sosIn713.applyComments,
      }),
      new Hgt({
        root: sosIn713.root,
        prefix: "notes",
        runLocalTransaction: sosIn713.runLocalTransaction,
        getCollabOrigins: sosIn713.getCollabOrigins,
        readNotes: sosIn713.readNotes,
        applyNotes: sosIn713.applyNotes,
      }),
    ];
  }
  dispose() {
    for (let sosBind23061 of this.#e) sosBind23061.dispose();
  }
  activate() {
    for (let sosBind23050 of this.#e) sosBind23050.activate();
  }
  flushFromOwner() {
    for (let sosBind23003 of this.#e) sosBind23003.flushFromOwner();
  }
}

export const Ggt = esmInit(() => {
  Fgt();
  Lgt();
  zgt();
  Vgt();
  TJe();
  Ugt();
});

export function getSpreadsheetOwnerSyncClass(): typeof Wgt {
  Ggt();
  return Wgt;
}

export const ensureSpreadsheetOwnerSyncInit = Ggt;
