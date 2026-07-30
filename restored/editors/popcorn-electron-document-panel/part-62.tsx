// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 62/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const hazelR15: any = undefined;
const pearlR15: any = undefined;
const quartzR15: any = undefined;
const umbraR2: any = undefined;
const violetR2: any = undefined;

function willowR2() {
  let umbraR17 = pearlR15.create();
  umbraR17.name = "Popcorn Document";
  let violetR17 = umbraR17.sections.first;
  violetR17.pageSetup = willowR15;
  violetR17.columns = yellowR15;
  violetR17.header.text = ["Popcorn artifact engine"];
  violetR17.footer.text = ["Popcorn document demo"];
  umbraR17.body.paragraphs.add({
    text: "Popcorn is growing into a unified artifact engine for workbook, presentation, and document editing."
  });
  umbraR17.body.paragraphs.add({
    text: "Granola owns the document model and layout cache. Popcorn owns the editor shell, host integration, and worker-driven canvas presentation."
  });
  umbraR17.body.paragraphs.add({
    text: "This default document is both a manual demo and a deterministic feature corpus for the document route, its browser smoke, and agent-driven debugging loops."
  });
  umbraR17.body.text.get("Popcorn is growing into a unified artifact engine for workbook, presentation, and document editing.").style = "title";
  umbraR17.body.text.get("Granola owns the document model and layout cache. Popcorn owns the editor shell, host integration, and worker-driven canvas presentation.").style = "heading2";
  umbraR17.body.text.get("This default document is both a manual demo and a deterministic feature corpus for the document route, its browser smoke, and agent-driven debugging loops.").spacingAfter = 320;
  umbraR17.body.tables.add({
    rows: 5,
    columns: 4,
    values: [["Artifact", "Primary surface", "Worker model", "Status"], ["Workbook", "Grid + formula chrome", "Granola workbook", "Advanced"], ["Presentation", "Slide stage", "Granola presentation", "Expanding"], ["Document", "Paged canvas", "Granola document", "Expanding"], ["Shared", "Worker split + devtools", "Popcorn shared", "Core"]],
    style: {
      preset: "TableGrid",
      headerRow: true
    },
    position: {
      left: 72,
      top: 260,
      width: 560,
      height: 188
    }
  });
  umbraR17.body.shapes.add({
    geometry: "roundRect",
    position: {
      left: 666,
      top: 260,
      width: 280,
      height: 168
    },
    fill: {
      type: "solid",
      color: "#E0F2FE"
    },
    line: {
      style: "solid",
      fill: {
        type: "solid",
        color: "#38BDF8"
      },
      width: 1
    },
    text: "Shared object editing, find, and pagination-aware text sessions live in the same artifact-engine family now."
  });
  umbraR17.body.images.add({
    dataUrl: RemoteTextEditSessionA,
    alt: "Popcorn artifact marker",
    size: {
      width: 96,
      height: 96
    },
    style: {
      wrap: "inline",
      alignment: "center"
    }
  });
  umbraR17.body.paragraphs.add({
    text: "Feature highlights across the engine:"
  });
  umbraR17.body.text.get("Feature highlights across the engine:").style = "heading1";
  for (let questR14 of umbraR2()) umbraR17.body.paragraphs.add(questR14);
  for (let flintR24 = 0; flintR24 < 70; flintR24 += 1) umbraR17.body.paragraphs.add({
    text: `Artifact engine note ${flintR24 + 1}: Popcorn should keep artifact ownership explicit while Granola owns the document model, pagination, and reusable text-edit primitives.`
  });
  let willowR17 = umbraR17.sections.add({
    pageSetup: willowR15,
    columns: zincR15
  });
  willowR17.header.text = ["Artifact catalog"];
  willowR17.footer.text = ["Sectioned feature catalog"];
  willowR17.body.paragraphs.add({
    text: "Artifact feature catalog"
  });
  willowR17.body.text.get("Artifact feature catalog").style = "heading1";
  for (let groveR21 of getFeatureCatalogEntries()) {
    willowR17.body.paragraphs.add({
      text: `${violetR2(groveR21.artifact)} / ${groveR21.area}`,
      style: {
        spaceBefore: 120,
        spaceAfter: 60
      }
    });
    willowR17.body.text.get(`${violetR2(groveR21.artifact)} / ${groveR21.area}`).style = "heading2";
    willowR17.body.paragraphs.add({
      text: `${groveR21.feature}: ${groveR21.summary}`,
      style: {
        bulletCharacter: "•",
        marginLeft: 720,
        indent: 360,
        spaceAfter: 120
      }
    });
  }
  let yellowR17 = umbraR17.sections.add({
    pageSetup: willowR15,
    columns: yellowR15
  });
  return yellowR17.header.text = ["Document figures"], yellowR17.footer.text = ["Media and object coverage"], yellowR17.body.paragraphs.add({
    text: "Embedded content and pagination coverage"
  }), yellowR17.body.text.get("Embedded content and pagination coverage").style = "heading1", yellowR17.body.tables.add({
    rows: 4,
    columns: 3,
    values: [["Coverage", "Example", "Why it matters"], ["Sections", "Headers, footers, and columns", "Tests pagination, structure, and exported layout."], ["Objects", "Shapes, images, and tables", "Exercises selection overlays and page-aware object hit testing."], ["Search", "Find over long note sequences", "Keeps human UI and agent inspection aligned."]],
    style: {
      preset: "TableGrid",
      headerRow: true
    },
    position: {
      left: 72,
      top: 144,
      width: 560,
      height: 210
    }
  }), yellowR17.body.images.add({
    dataUrl: RemoteTextEditSessionA,
    alt: "Document figure placeholder",
    position: {
      left: 120,
      top: 396,
      width: 220,
      height: 220
    }
  }), yellowR17.body.shapes.add({
    geometry: "roundRect",
    size: {
      width: 300,
      height: 120
    },
    position: {
      left: 420,
      top: 436
    },
    style: {
      wrap: "square",
      alignment: "center"
    },
    fill: "accent2",
    line: {
      style: "solid",
      fill: "accent5",
      width: 1
    },
    text: "Object selection in documents now follows the same model-backed controller pattern as workbook charts and slide objects."
  }), umbraR17;
}
var willowR15,
  yellowR15,
  zincR15,
  amberR15 = esmInit(() => {
    quartzR15();
    RemoteTextEditSessionC();
    ensureFeatureCatalogInit();
    willowR15 = {
      widthEmu: 12240,
      heightEmu: 15840,
      pageMargin: {
        top: 1440,
        bottom: 1440,
        left: 1440,
        right: 1267,
        header: 720,
        footer: 720,
        gutter: 0
      }
    };
    yellowR15 = {
      count: 1,
      space: 360,
      widths: [],
      hasSeparatorLine: false
    };
    zincR15 = {
      count: 2,
      space: 360,
      widths: [],
      hasSeparatorLine: false
    };
  }),
  basaltR15 = esmInit(() => {});
function yellowR2() {
  return new Worker(new URL("" + new URL("runtime.worker-CMXNKFNH.js", import.meta.url).href, "" + import.meta.url), {
    type: "module",
    name: "popcorn-document-worker"
  });
}
var cedarR15 = esmInit(() => {
    basaltR15();
  }),
  daisyR15,
  emberR15 = esmInit(() => {
    daisyR15 = {
      documentVersion: 0,
      title: "Untitled document",
      bodyText: "",
      canUndo: false,
      canRedo: false,
      zoom: 1,
      pageIndex: 0,
      pageCount: 0,
      pageLayouts: [],
      selectedTextBlockId: null,
      selectedObjectId: null,
      selectedObjectKind: null,
      textEditState: null,
      findOpen: false,
      findQuery: "",
      findResultCount: 0,
      findActiveResultIndex: -1,
      findSummary: "",
      findFocusToken: 0
    };
  });
function _l(deltaR13 = daisyR15) {
  return new RemoteTextEditSessionR(deltaR13);
}
var flintR15 = esmInit(() => {
  RemoteTextEditSessionI();
  emberR15();
});
function zincR2() {
  return typeof window < "u" && typeof Worker < "u" && typeof HTMLCanvasElement < "u" && "transferControlToOffscreen" in HTMLCanvasElement.prototype;
}
function amberR2(topazR9) {
  return topazR9.documentProto ? topazR9.documentProto : topazR9.document ? topazR9.document.toProto() : willowR2().toProto();
}
function basaltR2() {
  return yellowR2();
}
function cedarR2(echoR13 = {}) {
  return new hazelR15(echoR13);
}
