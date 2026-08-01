// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 50/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const elmR23: any = undefined;

esmInit(() => {
    Object.assign(elmR23, {
      "List Table 4 Accent 5": {
        styleId: "ListTable4-Accent5",
        name: "List Table 4 Accent 5",
        basedOn: "TableNormal",
        uiPriority: "49",
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
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            },
            insideH: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
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
                color: "A02B93",
                themeColor: "accent5"
              },
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "A02B93",
                themeColor: "accent5"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "A02B93",
                themeColor: "accent5"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "A02B93",
                themeColor: "accent5"
              },
              insideH: {
                val: "nil"
              }
            },
            shading: {
              val: "clear",
              color: "A02B93",
              fill: "A02B93",
              themeFill: "accent5"
            }
          }
        }, {
          type: "lastRow",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              top: {
                val: "double",
                sz: "4",
                space: "0",
                color: "D86ECC",
                themeColor: "accent5",
                themeTint: "99"
              }
            }
          }
        }, {
          type: "firstCol",
          rPr: {
            bold: true
          }
        }, {
          type: "lastCol",
          rPr: {
            bold: true
          }
        }, {
          type: "band1Vert",
          tcPr: {
            shading: {
              val: "clear",
              color: "F2CFEE",
              fill: "F2CFEE",
              themeFill: "accent5",
              themeFillTint: "33"
            }
          }
        }, {
          type: "band1Horz",
          tcPr: {
            shading: {
              val: "clear",
              color: "F2CFEE",
              fill: "F2CFEE",
              themeFill: "accent5",
              themeFillTint: "33"
            }
          }
        }]
      },
      "List Table 4 Accent 6": {
        styleId: "ListTable4-Accent6",
        name: "List Table 4 Accent 6",
        basedOn: "TableNormal",
        uiPriority: "49",
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
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            },
            insideH: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
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
                color: "4EA72E",
                themeColor: "accent6"
              },
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "4EA72E",
                themeColor: "accent6"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "4EA72E",
                themeColor: "accent6"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "4EA72E",
                themeColor: "accent6"
              },
              insideH: {
                val: "nil"
              }
            },
            shading: {
              val: "clear",
              color: "4EA72E",
              fill: "4EA72E",
              themeFill: "accent6"
            }
          }
        }, {
          type: "lastRow",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              top: {
                val: "double",
                sz: "4",
                space: "0",
                color: "8ED973",
                themeColor: "accent6",
                themeTint: "99"
              }
            }
          }
        }, {
          type: "firstCol",
          rPr: {
            bold: true
          }
        }, {
          type: "lastCol",
          rPr: {
            bold: true
          }
        }, {
          type: "band1Vert",
          tcPr: {
            shading: {
              val: "clear",
              color: "D9F2D0",
              fill: "D9F2D0",
              themeFill: "accent6",
              themeFillTint: "33"
            }
          }
        }, {
          type: "band1Horz",
          tcPr: {
            shading: {
              val: "clear",
              color: "D9F2D0",
              fill: "D9F2D0",
              themeFill: "accent6",
              themeFillTint: "33"
            }
          }
        }]
      }
    });
})();

var slateR24;

var slateR24;

var daisyR24 = esmInit(() => {});
