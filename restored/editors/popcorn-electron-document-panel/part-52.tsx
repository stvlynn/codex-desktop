// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 52/65
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
const slateR24: any = undefined;

esmInit(() => {
  Object.assign(slateR24, {
    "List Table 5 Dark Accent 4": {
      styleId: "ListTable5Dark-Accent4",
      name: "List Table 5 Dark Accent 4",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto",
        },
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1",
        },
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4",
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4",
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4",
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4",
          },
        },
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "0F9ED5",
          fill: "0F9ED5",
          themeFill: "accent4",
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
                sz: "18",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
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
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "firstCol",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "lastCol",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "band1Vert",
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "band2Vert",
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "band1Horz",
          tcPr: {
            borders: {
              top: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "neCell",
          tcPr: {
            borders: {
              left: {
                val: "nil",
              },
            },
          },
        },
        {
          type: "nwCell",
          tcPr: {
            borders: {
              right: {
                val: "nil",
              },
            },
          },
        },
        {
          type: "seCell",
          tcPr: {
            borders: {
              top: {
                val: "nil",
              },
              left: {
                val: "nil",
              },
            },
          },
        },
        {
          type: "swCell",
          tcPr: {
            borders: {
              top: {
                val: "nil",
              },
              right: {
                val: "nil",
              },
            },
          },
        },
      ],
    },
    "List Table 5 Dark Accent 5": {
      styleId: "ListTable5Dark-Accent5",
      name: "List Table 5 Dark Accent 5",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto",
        },
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1",
        },
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5",
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5",
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5",
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5",
          },
        },
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "A02B93",
          fill: "A02B93",
          themeFill: "accent5",
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
                sz: "18",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
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
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "firstCol",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "lastCol",
          rPr: {
            bold: true,
          },
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "band1Vert",
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "band2Vert",
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "band1Horz",
          tcPr: {
            borders: {
              top: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1",
              },
            },
          },
        },
        {
          type: "neCell",
          tcPr: {
            borders: {
              left: {
                val: "nil",
              },
            },
          },
        },
        {
          type: "nwCell",
          tcPr: {
            borders: {
              right: {
                val: "nil",
              },
            },
          },
        },
        {
          type: "seCell",
          tcPr: {
            borders: {
              top: {
                val: "nil",
              },
              left: {
                val: "nil",
              },
            },
          },
        },
        {
          type: "swCell",
          tcPr: {
            borders: {
              top: {
                val: "nil",
              },
              right: {
                val: "nil",
              },
            },
          },
        },
      ],
    },
  });
})();
