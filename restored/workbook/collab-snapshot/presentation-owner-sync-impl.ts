// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation Yjs owner-sync facades (legacy Binding1812…tYe).
// Stage-3 wave-145.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookBinding818,
  workbookBinding819,
} from "./yjs-snapshot-sync-impl";
import { ensureSchemaMetaInit } from "../schema-meta";
import { VJe, HJe } from "../embedded-font-codec";

export const jJe = "presentationState";
export const MJe = "meta";
export const workbookBinding1813 = "schemaVersion";
export const workbookBinding1814 = "slidesById";

export const workbookBinding1815 = esmInit(() => {});

export class workbookBinding1812 {
  #e;
  constructor(posIn3779) {
    this.#e = new workbookBinding818({
      root: posIn3779.root,
      prefix: posIn3779.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn3779.runLocalTransaction,
      getCollabOrigins: posIn3779.getCollabOrigins,
      readSnapshotFromOwner: posIn3779.readComments,
      applySnapshotToOwner: (posIn13069) =>
        posIn3779.applyComments(
          posIn13069 ?? {
            people: [],
            threads: [],
          },
        ),
      encodeSnapshot: (posIn16677) => posIn16677,
      decodeSnapshot: (posIn16678) => posIn16678,
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

export const TJe = esmInit(() => {
  workbookBinding819();
  ensureSchemaMetaInit();
});

export class NJe {
  #e;
  constructor(posIn4117) {
    this.#e = new workbookBinding818({
      root: posIn4117.root,
      prefix: posIn4117.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4117.runLocalTransaction,
      getCollabOrigins: posIn4117.getCollabOrigins,
      readSnapshotFromOwner: posIn4117.readCharts,
      applySnapshotToOwner: (posIn15915) =>
        posIn4117.applyCharts(posIn15915 ?? []),
      encodeSnapshot: (posIn16679) => posIn16679,
      decodeSnapshot: (posIn16680) => posIn16680,
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

export const PJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class FJe {
  #e;
  constructor(posIn4046) {
    this.#e = new workbookBinding818({
      root: posIn4046.root,
      prefix: posIn4046.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4046.runLocalTransaction,
      getCollabOrigins: posIn4046.getCollabOrigins,
      readSnapshotFromOwner: posIn4046.readCitations,
      applySnapshotToOwner: (posIn15834) =>
        posIn4046.applyCitations(posIn15834 ?? []),
      encodeSnapshot: (posIn16681) => posIn16681,
      decodeSnapshot: (posIn16682) => posIn16682,
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

export const IJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class LJe {
  #e;
  constructor(posIn3367) {
    this.#e = new workbookBinding818({
      root: posIn3367.root,
      prefix: posIn3367.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn3367.runLocalTransaction,
      getCollabOrigins: posIn3367.getCollabOrigins,
      readSnapshotFromOwner: posIn3367.readImages,
      applySnapshotToOwner: (posIn15916) =>
        posIn3367.applyImages(posIn15916 ?? []),
      encodeSnapshot: (posIn15134) =>
        posIn15134.map(({ data, ...rest }) => ({
          ...rest,
        })),
      decodeSnapshot: (posIn13127) =>
        posIn13127.map((item) => ({
          ...item,
          data: new Uint8Array(),
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

export const RJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class zJe {
  #e;
  constructor(posIn4094) {
    this.#e = new workbookBinding818({
      root: posIn4094.root,
      prefix: posIn4094.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4094.runLocalTransaction,
      getCollabOrigins: posIn4094.getCollabOrigins,
      readSnapshotFromOwner: posIn4094.readLayouts,
      applySnapshotToOwner: (posIn15876) =>
        posIn4094.applyLayouts(posIn15876 ?? []),
      encodeSnapshot: (posIn16683) => posIn16683,
      decodeSnapshot: (posIn16684) => posIn16684,
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

export const BJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class KJe {
  #e;
  constructor(posIn4275) {
    this.#e = new workbookBinding818({
      root: posIn4275.root,
      prefix: posIn4275.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4275.runLocalTransaction,
      getCollabOrigins: posIn4275.getCollabOrigins,
      readSnapshotFromOwner: posIn4275.readFonts,
      applySnapshotToOwner: (posIn16032) =>
        posIn4275.applyFonts(posIn16032 ?? []),
      encodeSnapshot: VJe,
      decodeSnapshot: HJe,
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

export const qJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class JJe {
  #e;
  constructor(posIn4118) {
    this.#e = new workbookBinding818({
      root: posIn4118.root,
      prefix: posIn4118.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4118.runLocalTransaction,
      getCollabOrigins: posIn4118.getCollabOrigins,
      readSnapshotFromOwner: posIn4118.readSlides,
      applySnapshotToOwner: (posIn15917) =>
        posIn4118.applySlides(posIn15917 ?? []),
      encodeSnapshot: (posIn16685) => posIn16685,
      decodeSnapshot: (posIn16686) => posIn16686,
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

export const YJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class XJe {
  #e;
  constructor(posIn4192) {
    this.#e = new workbookBinding818({
      root: posIn4192.root,
      prefix: posIn4192.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4192.runLocalTransaction,
      getCollabOrigins: posIn4192.getCollabOrigins,
      readSnapshotFromOwner: posIn4192.readTableStyles,
      applySnapshotToOwner: posIn4192.applyTableStyles,
      encodeSnapshot: (posIn16687) => posIn16687,
      decodeSnapshot: (posIn16688) => posIn16688,
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

export const ZJe = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class QJe {
  #e;
  constructor(posIn4316) {
    this.#e = new workbookBinding818({
      root: posIn4316.root,
      prefix: posIn4316.prefix,
      schemaVersion: 1,
      runLocalTransaction: posIn4316.runLocalTransaction,
      getCollabOrigins: posIn4316.getCollabOrigins,
      readSnapshotFromOwner: posIn4316.readTheme,
      applySnapshotToOwner: posIn4316.applyTheme,
      encodeSnapshot: (posIn16689) => posIn16689,
      decodeSnapshot: (posIn16690) => posIn16690,
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

export const $Je = esmInit(() => {
  workbookBinding819();
  workbookBinding1815();
});

export class eYe {
  #e;
  constructor(posIn443) {
    this.#e = [
      new QJe({
        root: posIn443.root,
        prefix: "theme",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readTheme: posIn443.readTheme,
        applyTheme: posIn443.applyTheme,
      }),
      new XJe({
        root: posIn443.root,
        prefix: "tableStyles",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readTableStyles: posIn443.readTableStyles,
        applyTableStyles: posIn443.applyTableStyles,
      }),
      new KJe({
        root: posIn443.root,
        prefix: "fonts",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readFonts: posIn443.readFonts,
        applyFonts: posIn443.applyFonts,
      }),
      new zJe({
        root: posIn443.root,
        prefix: "layouts",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readLayouts: posIn443.readLayouts,
        applyLayouts: posIn443.applyLayouts,
      }),
      new NJe({
        root: posIn443.root,
        prefix: "charts",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readCharts: posIn443.readCharts,
        applyCharts: posIn443.applyCharts,
      }),
      new LJe({
        root: posIn443.root,
        prefix: "images",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readImages: posIn443.readImages,
        applyImages: posIn443.applyImages,
      }),
      new FJe({
        root: posIn443.root,
        prefix: "citations",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readCitations: posIn443.readCitations,
        applyCitations: posIn443.applyCitations,
      }),
      new workbookBinding1812({
        root: posIn443.root,
        prefix: "comments",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readComments: posIn443.readComments,
        applyComments: posIn443.applyComments,
      }),
      new JJe({
        root: posIn443.root,
        prefix: "slides",
        runLocalTransaction: posIn443.runLocalTransaction,
        getCollabOrigins: posIn443.getCollabOrigins,
        readSlides: posIn443.readSlides,
        applySlides: posIn443.applySlides,
      }),
    ];
  }
  dispose() {
    for (let posBind23056 of this.#e) posBind23056.dispose();
  }
  activate() {
    for (let posBind23049 of this.#e) posBind23049.activate();
  }
  flushFromOwner() {
    for (let posBind22999 of this.#e) posBind22999.flushFromOwner();
  }
}

export const tYe = esmInit(() => {
  TJe();
  PJe();
  IJe();
  RJe();
  BJe();
  qJe();
  YJe();
  ZJe();
  $Je();
});

export function getPresentationOwnerSyncClass(): typeof eYe {
  tYe();
  return eYe;
}

export const ensurePresentationOwnerSyncInit = tYe;
