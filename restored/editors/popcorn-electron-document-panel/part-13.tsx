// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 13/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
} from "../../boundaries/react-cjs-runtime";
import {
  __workbookT,
  _workbookT,
  workbookA,
  workbookB,
  workbookC,
  workbookD,
  workbookE,
  workbookF,
  workbookG,
  WorkbookI,
  workbookIt,
  workbookJ,
  workbookK,
  workbookL,
  workbookLt,
  workbookM,
  workbookN,
  workbookNt,
  workbookO,
  workbookOt,
  workbookP,
  workbookQ,
  WorkbookR,
  workbookRt,
  workbookS,
  workbookSt,
  workbookU,
  workbookUnderscore,
  workbookV,
  workbookW,
  WorkbookW,
  workbookX,
  workbookY,
  workbookZ,
} from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  getFeatureCatalogEntries,
  PopcornFindBar,
} from "../feature-catalog";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  ensureRemoteTextEditSessionInit,
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const marbleR23: any = undefined;

esmInit(() => {
  Object.assign(marbleR23, {
    "Grid Table 1 Light Accent 5": {
      styleId: "GridTable1Light-Accent5",
      name: "Grid Table 1 Light Accent 5",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto",
        },
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66",
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66",
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66",
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66",
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66",
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66",
          },
        },
      },
      tblStylePr: [
        {
          type: "firstRow",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              bottom: {
                val: "single",
                sz: "12",
                space: "0",
                color: "D86DCB",
                themeColor: "accent5",
                themeTint: "99",
              },
            },
          },
        },
        {
          type: "lastRow",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              top: {
                val: "double",
                sz: "2",
                space: "0",
                color: "D86DCB",
                themeColor: "accent5",
                themeTint: "99",
              },
            },
          },
        },
        {
          type: "firstCol",
          rPr: {
            bold: true,
          },
        },
        {
          type: "lastCol",
          rPr: {
            bold: true,
          },
        },
      ],
    },
    "Grid Table 2": {
      styleId: "GridTable2",
      name: "Grid Table 2",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto",
        },
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99",
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99",
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99",
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99",
          },
        },
      },
      tblStylePr: [
        {
          type: "firstRow",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              top: {
                val: "nil",
              },
              bottom: {
                val: "single",
                sz: "12",
                space: "0",
                color: "666666",
                themeColor: "text1",
                themeTint: "99",
              },
              insideH: {
                val: "nil",
              },
              insideV: {
                val: "nil",
              },
            },
            shading: {
              val: "clear",
              color: "auto",
              fill: "FFFFFF",
              themeFill: "background1",
            },
          },
        },
        {
          type: "lastRow",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              top: {
                val: "double",
                sz: "2",
                space: "0",
                color: "666666",
                themeColor: "text1",
                themeTint: "99",
              },
              bottom: {
                val: "nil",
              },
              insideH: {
                val: "nil",
              },
              insideV: {
                val: "nil",
              },
            },
            shading: {
              val: "clear",
              color: "auto",
              fill: "FFFFFF",
              themeFill: "background1",
            },
          },
        },
        {
          type: "firstCol",
          rPr: {
            bold: true,
          },
        },
        {
          type: "lastCol",
          rPr: {
            bold: true,
          },
        },
        {
          type: "band1Vert",
          tcPr: {
            shading: {
              val: "clear",
              color: "auto",
              fill: "CCCCCC",
              themeFill: "text1",
              themeFillTint: "33",
            },
          },
        },
        {
          type: "band1Horz",
          tcPr: {
            shading: {
              val: "clear",
              color: "auto",
              fill: "CCCCCC",
              themeFill: "text1",
              themeFillTint: "33",
            },
          },
        },
      ],
    },
  });
})();
