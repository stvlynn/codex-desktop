// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 51/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const slateR24: any = undefined;

esmInit(() => {
    slateR24 = {
      "List Table 5 Dark Accent 2": {
        styleId: "ListTable5Dark-Accent2",
        name: "List Table 5 Dark Accent 2",
        basedOn: "TableNormal",
        uiPriority: "50",
        pPr: {
          spacing: {
            after: "0",
            line: "240",
            lineRule: "auto"
          }
        },
        rPr: {
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tblPr: {
          rowBandSize: "1",
          colBandSize: "1",
          borders: {
            top: {
              val: "single",
              sz: "24",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            left: {
              val: "single",
              sz: "24",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            bottom: {
              val: "single",
              sz: "24",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            right: {
              val: "single",
              sz: "24",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
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
                sz: "18",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
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
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "firstCol",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "lastCol",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "band1Vert",
          tcPr: {
            borders: {
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
                color: "FFFFFF",
                themeColor: "background1"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
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
                color: "FFFFFF",
                themeColor: "background1"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "neCell",
          tcPr: {
            borders: {
              left: {
                val: "nil"
              }
            }
          }
        }, {
          type: "nwCell",
          tcPr: {
            borders: {
              right: {
                val: "nil"
              }
            }
          }
        }, {
          type: "seCell",
          tcPr: {
            borders: {
              top: {
                val: "nil"
              },
              left: {
                val: "nil"
              }
            }
          }
        }, {
          type: "swCell",
          tcPr: {
            borders: {
              top: {
                val: "nil"
              },
              right: {
                val: "nil"
              }
            }
          }
        }]
      },
      "List Table 5 Dark Accent 3": {
        styleId: "ListTable5Dark-Accent3",
        name: "List Table 5 Dark Accent 3",
        basedOn: "TableNormal",
        uiPriority: "50",
        pPr: {
          spacing: {
            after: "0",
            line: "240",
            lineRule: "auto"
          }
        },
        rPr: {
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tblPr: {
          rowBandSize: "1",
          colBandSize: "1",
          borders: {
            top: {
              val: "single",
              sz: "24",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            left: {
              val: "single",
              sz: "24",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            bottom: {
              val: "single",
              sz: "24",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            right: {
              val: "single",
              sz: "24",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
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
                sz: "18",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
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
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "firstCol",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "lastCol",
          rPr: {
            bold: true
          },
          tcPr: {
            borders: {
              left: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "band1Vert",
          tcPr: {
            borders: {
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
                color: "FFFFFF",
                themeColor: "background1"
              },
              right: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
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
                color: "FFFFFF",
                themeColor: "background1"
              },
              bottom: {
                val: "single",
                sz: "4",
                space: "0",
                color: "FFFFFF",
                themeColor: "background1"
              }
            }
          }
        }, {
          type: "neCell",
          tcPr: {
            borders: {
              left: {
                val: "nil"
              }
            }
          }
        }, {
          type: "nwCell",
          tcPr: {
            borders: {
              right: {
                val: "nil"
              }
            }
          }
        }, {
          type: "seCell",
          tcPr: {
            borders: {
              top: {
                val: "nil"
              },
              left: {
                val: "nil"
              }
            }
          }
        }, {
          type: "swCell",
          tcPr: {
            borders: {
              top: {
                val: "nil"
              },
              right: {
                val: "nil"
              }
            }
          }
        }]
      }
    };
})();
