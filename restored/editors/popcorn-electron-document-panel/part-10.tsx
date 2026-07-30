// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 10/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const marbleR23: any = undefined;

esmInit(() => {
    marbleR23 = {
      "Normal Table": {
        styleId: "TableNormal",
        name: "Normal Table",
        uiPriority: "99",
        default: "1",
        tblPr: {
          cellMargins: {
            top: {
              w: "0",
              type: "dxa"
            },
            left: {
              w: "108",
              type: "dxa"
            },
            bottom: {
              w: "0",
              type: "dxa"
            },
            right: {
              w: "108",
              type: "dxa"
            }
          }
        }
      },
      "Table Grid": {
        styleId: "TableGrid",
        name: "Table Grid",
        basedOn: "TableNormal",
        uiPriority: "39",
        pPr: {
          spacing: {
            after: "0",
            line: "240",
            lineRule: "auto"
          }
        },
        tblPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "auto"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "auto"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "auto"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "auto"
            },
            insideH: {
              val: "single",
              sz: "4",
              space: "0",
              color: "auto"
            },
            insideV: {
              val: "single",
              sz: "4",
              space: "0",
              color: "auto"
            }
          }
        }
      },
      "Grid Table Light": {
        styleId: "TableGridLight",
        name: "Grid Table Light",
        basedOn: "TableNormal",
        uiPriority: "40",
        pPr: {
          spacing: {
            after: "0",
            line: "240",
            lineRule: "auto"
          }
        },
        tblPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            insideH: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            insideV: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            }
          }
        }
      },
      "Plain Table 1": {
        styleId: "PlainTable1",
        name: "Plain Table 1",
        basedOn: "TableNormal",
        uiPriority: "41",
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
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            insideH: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            },
            insideV: {
              val: "single",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            }
          }
        },
        tblStylePr: [{
          type: "firstRow",
          rPr: {
            bold: true
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
                color: "BFBFBF",
                themeColor: "background1",
                themeShade: "BF"
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
              color: "auto",
              fill: "F2F2F2",
              themeFill: "background1",
              themeFillShade: "F2"
            }
          }
        }, {
          type: "band1Horz",
          tcPr: {
            shading: {
              val: "clear",
              color: "auto",
              fill: "F2F2F2",
              themeFill: "background1",
              themeFillShade: "F2"
            }
          }
        }]
      },
      "Plain Table 2": {
        styleId: "PlainTable2",
        name: "Plain Table 2",
        basedOn: "TableNormal",
        uiPriority: "42",
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
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        },
        tblStylePr: [{
          type: "firstRow",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              }
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
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
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
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              }
            }
          }
        }, {
          type: "band2Vert",
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              }
            }
          }
        }, {
          type: "band1Horz",
          tcPr: {
            borders: {
              top: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "7F7F7F",
                themeColor: "text1",
                themeTint: "80"
              }
            }
          }
        }]
      }
    };
})();
