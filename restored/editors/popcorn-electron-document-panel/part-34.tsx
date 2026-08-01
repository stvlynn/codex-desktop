// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 34/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const frostR23: any = undefined;

esmInit(() => {
    Object.assign(frostR23, {
      "Grid Table 5 Dark Accent 2": {
        styleId: "GridTable5Dark-Accent2",
        name: "Grid Table 5 Dark Accent 2",
        basedOn: "TableNormal",
        uiPriority: "50",
        pPr: {
          spacing: {
            after: "0",
            line: "240",
            lineRule: "auto"
          }
        },
        tblPr: {
          rowBandSize: "1",
          colBandSize: "1",
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        },
        tblStylePr: [{
          type: "firstRow",
          rPr: {
            bold: true,
            color: {
              val: "FFFFFF",
              themeColor: "background1"
            }
          },
          tcPr: {
            borders: {
              top: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              insideH: {
                val: "nil"
              },
              insideV: {
                val: "nil"
              }
            },
            shading: {
              val: "clear",
              color: "E97132",
              fill: "E97132",
              themeFill: "accent2"
            }
          }
        }, {
          type: "lastRow",
          rPr: {
            bold: true,
            color: {
              val: "FFFFFF",
              themeColor: "background1"
            }
          },
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              insideH: {
                val: "nil"
              },
              insideV: {
                val: "nil"
              }
            },
            shading: {
              val: "clear",
              color: "E97132",
              fill: "E97132",
              themeFill: "accent2"
            }
          }
        }, {
          type: "firstCol",
          rPr: {
            bold: true,
            color: {
              val: "FFFFFF",
              themeColor: "background1"
            }
          },
          tcPr: {
            borders: {
              top: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              insideV: {
                val: "nil"
              }
            },
            shading: {
              val: "clear",
              color: "E97132",
              fill: "E97132",
              themeFill: "accent2"
            }
          }
        }, {
          type: "lastCol",
          rPr: {
            bold: true,
            color: {
              val: "FFFFFF",
              themeColor: "background1"
            }
          },
          tcPr: {
            borders: {
              top: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              },
              insideV: {
                val: "nil"
              }
            },
            shading: {
              val: "clear",
              color: "E97132",
              fill: "E97132",
              themeFill: "accent2"
            }
          }
        }, {
          type: "band1Vert",
          tcPr: {
            shading: {
              val: "clear",
              color: "F6C6AD",
              fill: "F6C6AD",
              themeFill: "accent2",
              themeFillTint: "66"
            }
          }
        }, {
          type: "band1Horz",
          tcPr: {
            shading: {
              val: "clear",
              color: "F6C6AD",
              fill: "F6C6AD",
              themeFill: "accent2",
              themeFillTint: "66"
            }
          }
        }]
      }
    });
})();
