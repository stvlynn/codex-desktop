// Restored from ref/webview/assets/mermaid-diagram-BzeSLuAD.js
// Mermaid diagram React renderer for markdown code fences.
// Stage 3: UI aliases → semantic modules; auto-renamed export→local; ESM inits dropped.
// Flat boundary facade — Mermaid diagram/doc vendor React renderer (faithful bundled Mermaid markdown host).

import type { RefObject } from "react";
import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import { useIntl } from "../../i18n/use-intl";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { writeClipboardContents } from "../../clipboard/write-clipboard-contents";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { CopyButton } from "../../ui/copy-button";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { ImagePreviewDialog } from "../../ui/image-preview-dialog";
import { MarkdownContentCssClass } from "../../markdown/markdown-content-css-classes";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../../runtime/vite-preload";
import { react, jsxRuntime } from "../react-cjs-runtime";
import { zodString, zodObject, zodLiteral } from "../../vendor/zod";
import { n as isEmptyN, t as isEmptyT } from "../lodash-is-empty-alt";
import {
  setLogLevel as chunkAGHRB4JFA,
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  F as chunkABZYJK2DF,
  G as chunkABZYJK2DG,
  H as chunkABZYJK2DH,
  J as chunkABZYJK2DJ,
  M as chunkABZYJK2DM,
  N as chunkABZYJK2DN,
  Q as chunkABZYJK2DQ,
  S as chunkABZYJK2DS,
  X as chunkABZYJK2DX,
  Y as chunkABZYJK2DY,
  Z as chunkABZYJK2DZ,
  c as chunkABZYJK2DC,
  f as _chunkABZYJK2DF,
  g as _chunkABZYJK2DG,
  h as _chunkABZYJK2DH,
  k as chunkABZYJK2DK,
  l as chunkABZYJK2DL,
  n as _chunkABZYJK2DN,
  p as chunkABZYJK2DP,
  r as chunkABZYJK2DR,
  t as chunkABZYJK2DT,
  w as chunkABZYJK2DW,
  x as _chunkABZYJK2DX,
  y as _chunkABZYJK2DY,
  z as _chunkABZYJK2DZ,
} from "../../diagrams/mermaid-config";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import { selectSvgElement as chunkEXTU4WIEN, initSelectSvgElementChunk as chunkEXTU4WIET } from "../../diagrams/select-svg-element";
import {
  chunkS3R3BYOJA,
  chunkS3R3BYOJF,
  chunkS3R3BYOJG,
  chunkS3R3BYOJH,
  chunkS3R3BYOJI,
  chunkS3R3BYOJR,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import { n as esmN, t as esmT } from "../iconify-utils";
import {
  chunkJA3XYJ7ZI as chunkJA3XYJ7ZA,
  chunkJA3XYJ7ZA as chunkJA3XYJ7ZI,
} from "./mermaid-create-text";
import { initMermaidLineOffsetChunk as chunkHN2XXSSUN } from "../../diagrams/line-offset-helpers";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "../../diagrams/subgraph-title-margins";
import { initStyleHelpersChunk as chunkATLVNIR6N } from "../../diagrams/style-helpers";
import { chunkJZLCHNYAI } from "./mermaid-flowchart-nodes";
import { chunkQXUST7PYN } from "./mermaid-flowchart-edges";
import {
  chunkN4CR4FBYN,
  chunkN4CR4FBYR,
} from "../../diagrams/mermaid-layout-loaders";
import { initMermaidJsYamlAlt as chunkMI3HLSF2N, yamlLoad as chunkMI3HLSF2R, yamlCoreSchema as chunkMI3HLSF2T } from "../../utils/mermaid-js-yaml-alt";
import {
  mermaidPackageJson as chunkKS23V3DPN,
  initMermaidPackageJson as chunkKS23V3DPT,
} from "../../utils/mermaid-package-json";
import {
  compile as mermaidDiagramImport1,
  stringify as mermaidDiagramImport2,
  serialize as mermaidDiagramImport3,
  ensureStylisRuntime as mermaidDiagramImport4,
} from "../../vendor/stylis";
export type MermaidDiagramProps = {
  blockRef: RefObject<HTMLElement | null>;
  code: string;
  isCodeFenceOpen?: boolean;
  isDark?: boolean;
  isVisible?: boolean;
  onError?: (renderKey: string | number) => void;
  onRendered?: (renderKey: string | number, height: number) => void;
  renderKey: string | number;
};
function mermaidDiagramHelper1(mermaidDiagramInput123, mermaidDiagramInput124) {
  mermaidDiagramInput123.attr("role", mermaidDiagramBinding58);
  mermaidDiagramInput124 !== "" &&
    mermaidDiagramInput123.attr("aria-roledescription", mermaidDiagramInput124);
}
function mermaidDiagramHelper2(
  mermaidDiagramInput48,
  mermaidDiagramInput49,
  mermaidDiagramInput50,
  mermaidDiagramInput51,
) {
  if (mermaidDiagramInput48.insert !== undefined) {
    if (mermaidDiagramInput50) {
      let mermaidDiagramBinding253 = `chart-desc-${mermaidDiagramInput51}`;
      mermaidDiagramInput48.attr("aria-describedby", mermaidDiagramBinding253);
      mermaidDiagramInput48
        .insert("desc", ":first-child")
        .attr("id", mermaidDiagramBinding253)
        .text(mermaidDiagramInput50);
    }
    if (mermaidDiagramInput49) {
      let mermaidDiagramBinding252 = `chart-title-${mermaidDiagramInput51}`;
      mermaidDiagramInput48.attr("aria-labelledby", mermaidDiagramBinding252);
      mermaidDiagramInput48
        .insert("title", ":first-child")
        .attr("id", mermaidDiagramBinding252)
        .text(mermaidDiagramInput49);
    }
  }
}
function mermaidDiagramHelper3(mermaidDiagramInput39) {
  let mermaidDiagramBinding221 = mermaidDiagramInput39.match(_chunkABZYJK2DG);
  if (!mermaidDiagramBinding221)
    return {
      text: mermaidDiagramInput39,
      metadata: {},
    };
  let mermaidDiagramBinding222 =
    chunkMI3HLSF2R(mermaidDiagramBinding221[1], {
      schema: chunkMI3HLSF2T,
    }) ?? {};
  mermaidDiagramBinding222 =
    typeof mermaidDiagramBinding222 == "object" &&
    !Array.isArray(mermaidDiagramBinding222)
      ? mermaidDiagramBinding222
      : {};
  let mermaidDiagramBinding223 = {};
  return (
    mermaidDiagramBinding222.displayMode &&
      (mermaidDiagramBinding223.displayMode =
        mermaidDiagramBinding222.displayMode.toString()),
    mermaidDiagramBinding222.title &&
      (mermaidDiagramBinding223.title =
        mermaidDiagramBinding222.title.toString()),
    mermaidDiagramBinding222.config &&
      (mermaidDiagramBinding223.config = mermaidDiagramBinding222.config),
    {
      text: mermaidDiagramInput39.slice(mermaidDiagramBinding221[0].length),
      metadata: mermaidDiagramBinding223,
    }
  );
}
function mermaidDiagramHelper4(mermaidDiagramInput100) {
  let mermaidDiagramBinding248 = mermaidDiagramBinding64(
      mermaidDiagramBinding63(mermaidDiagramInput100),
    ),
    mermaidDiagramBinding249 = mermaidDiagramBinding65(
      mermaidDiagramBinding248.text,
    ),
    mermaidDiagramBinding250 = chunkS3R3BYOJR(
      mermaidDiagramBinding248.config,
      mermaidDiagramBinding249.directive,
    );
  return (
    (mermaidDiagramInput100 = mermaidDiagramBinding62(
      mermaidDiagramBinding249.text,
    )),
    {
      code: mermaidDiagramInput100,
      title: mermaidDiagramBinding248.title,
      config: mermaidDiagramBinding250,
    }
  );
}
function mermaidDiagramHelper5(mermaidDiagramInput110) {
  let mermaidDiagramBinding254 = new TextEncoder().encode(
      mermaidDiagramInput110,
    ),
    mermaidDiagramBinding255 = Array.from(
      mermaidDiagramBinding254,
      (mermaidDiagramInput162) => String.fromCodePoint(mermaidDiagramInput162),
    ).join("");
  return btoa(mermaidDiagramBinding255);
}
function mermaidDiagramHelper6(mermaidDiagramInput134) {
  let mermaidDiagramBinding265 = mermaidDiagramHelper4(mermaidDiagramInput134);
  return (
    chunkABZYJK2DF(),
    _chunkABZYJK2DN(mermaidDiagramBinding265.config ?? {}),
    mermaidDiagramBinding265
  );
}
async function mermaidDiagramHelper7(
  mermaidDiagramInput80,
  mermaidDiagramInput81,
) {
  mermaidDiagramBinding57();
  try {
    let { code, config } = mermaidDiagramHelper6(mermaidDiagramInput80);
    return {
      diagramType: (await mermaidDiagramBinding89(code)).type,
      config,
    };
  } catch (mermaidDiagramBinding266) {
    if (mermaidDiagramInput81?.suppressErrors) return false;
    throw mermaidDiagramBinding266;
  }
}
function _t(mermaidDiagramInput101, mermaidDiagramInput102) {
  return mermaidDiagramInput101
    .append("iframe")
    .attr("id", mermaidDiagramInput102)
    .attr("style", "width: 100%; height: 100%;")
    .attr("sandbox", "");
}
function mermaidDiagramHelper8(mermaidDiagramInput37 = {}) {
  let mermaidDiagramBinding216 = chunkABZYJK2DR({}, mermaidDiagramInput37);
  mermaidDiagramBinding216?.fontFamily &&
    !mermaidDiagramBinding216.themeVariables?.fontFamily &&
    ((mermaidDiagramBinding216.themeVariables ||= {}),
    (mermaidDiagramBinding216.themeVariables.fontFamily =
      mermaidDiagramBinding216.fontFamily));
  _chunkABZYJK2DZ(mermaidDiagramBinding216);
  mermaidDiagramBinding216?.theme &&
  mermaidDiagramBinding216.theme in chunkABZYJK2DY
    ? (mermaidDiagramBinding216.themeVariables = chunkABZYJK2DY[
        mermaidDiagramBinding216.theme
      ].getThemeVariables(mermaidDiagramBinding216.themeVariables))
    : mermaidDiagramBinding216 &&
      (mermaidDiagramBinding216.themeVariables =
        chunkABZYJK2DY.default.getThemeVariables(
          mermaidDiagramBinding216.themeVariables,
        ));
  chunkAGHRB4JFA(
    (typeof mermaidDiagramBinding216 == "object"
      ? chunkABZYJK2DG(mermaidDiagramBinding216)
      : chunkABZYJK2DW()
    ).logLevel,
  );
  mermaidDiagramBinding57();
}
function mermaidDiagramHelper9(
  mermaidDiagramInput139,
  mermaidDiagramInput140,
  mermaidDiagramInput141,
  mermaidDiagramInput142,
) {
  mermaidDiagramHelper1(mermaidDiagramInput140, mermaidDiagramInput139);
  mermaidDiagramHelper2(
    mermaidDiagramInput140,
    mermaidDiagramInput141,
    mermaidDiagramInput142,
    mermaidDiagramInput140.attr("id"),
  );
}
var mermaidDiagramBinding1,
  mermaidDiagramBinding2,
  mermaidDiagramBinding3,
  mermaidDiagramBinding4,
  mermaidDiagramBinding5,
  mermaidDiagramBinding6,
  mermaidDiagramBinding7,
  mermaidDiagramBinding8,
  mermaidDiagramBinding9,
  mermaidDiagramBinding10,
  mermaidDiagramBinding11,
  mermaidDiagramBinding12,
  mermaidDiagramBinding13,
  mermaidDiagramBinding14,
  mermaidDiagramBinding15,
  mermaidDiagramBinding16,
  mermaidDiagramBinding17,
  mermaidDiagramBinding18,
  mermaidDiagramBinding19,
  mermaidDiagramBinding20,
  mermaidDiagramBinding21,
  mermaidDiagramBinding22,
  mermaidDiagramBinding23,
  mermaidDiagramBinding24,
  mermaidDiagramBinding25,
  mermaidDiagramBinding26,
  mermaidDiagramBinding27,
  mermaidDiagramBinding28,
  mermaidDiagramBinding29,
  mermaidDiagramBinding30,
  mermaidDiagramBinding31,
  mermaidDiagramBinding32,
  mermaidDiagramBinding33,
  mermaidDiagramBinding34,
  mermaidDiagramBinding35,
  mermaidDiagramBinding36,
  mermaidDiagramBinding37,
  mermaidDiagramBinding38,
  mermaidDiagramBinding39,
  mermaidDiagramBinding40,
  $t,
  mermaidDiagramBinding41,
  mermaidDiagramBinding42,
  mermaidDiagramBinding43,
  mermaidDiagramBinding44,
  mermaidDiagramBinding45,
  mermaidDiagramBinding46,
  on,
  mermaidDiagramBinding47,
  mermaidDiagramBinding48,
  mermaidDiagramBinding49,
  mermaidDiagramBinding50,
  mermaidDiagramBinding51,
  mermaidDiagramBinding52,
  mermaidDiagramBinding53,
  mermaidDiagramBinding54,
  mermaidDiagramBinding55,
  mermaidDiagramBinding56,
  mermaidDiagramBinding57,
  _n,
  mermaidDiagramBinding58,
  mermaidDiagramBinding59,
  mermaidDiagramBinding60,
  mermaidDiagramBinding61,
  mermaidDiagramBinding62,
  mermaidDiagramBinding63,
  mermaidDiagramBinding64,
  mermaidDiagramBinding65,
  mermaidDiagramBinding66,
  mermaidDiagramBinding67,
  mermaidDiagramBinding68,
  mermaidDiagramBinding69,
  mermaidDiagramBinding70,
  mermaidDiagramBinding71,
  mermaidDiagramBinding72,
  mermaidDiagramBinding73,
  mermaidDiagramBinding74,
  mermaidDiagramBinding75,
  mermaidDiagramBinding76,
  mermaidDiagramBinding77,
  mermaidDiagramBinding78,
  mermaidDiagramBinding79,
  mermaidDiagramBinding80,
  mermaidDiagramBinding81,
  mermaidDiagramBinding82,
  mermaidDiagramBinding83,
  mermaidDiagramBinding84,
  mermaidDiagramBinding85,
  mermaidDiagramBinding86,
  mermaidDiagramBinding87,
  mermaidDiagramBinding88,
  mermaidDiagramBinding89,
  mermaidDiagramBinding90,
  mermaidDiagramBinding91,
  mermaidDiagramBinding92,
  mermaidDiagramBinding93,
  mermaidDiagramBinding94,
  $n,
  mermaidDiagramBinding95,
  mermaidDiagramBinding96,
  mermaidDiagramBinding97,
  mermaidDiagramBinding98,
  mermaidDiagramBinding99,
  mermaidDiagramBinding100,
  mermaidDiagramBinding101,
  mermaidDiagramBinding102,
  mermaidDiagramBinding103,
  or,
  mermaidDiagramBinding104 = esmInit(() => {
    chunkKS23V3DPT();
    chunkEXTU4WIET();
    chunkMI3HLSF2N();
    chunkN4CR4FBYN();
    chunkQXUST7PYN();
    chunkHN2XXSSUN();
    chunkJZLCHNYAI();
    chunkCVBHYZKIN();
    chunkATLVNIR6N();
    chunkJA3XYJ7ZI();
    chunkS3R3BYOJU();
    chunkABZYJK2DK();
    chunkAGHRB4JFR();
    esmN();
    srcT();
    mermaidDiagramImport4();
    chunkABZYJK2DZ();
    isEmptyT();
    ensureViteModulepreloadRuntime();
    mermaidDiagramBinding1 = "c4";
    mermaidDiagramBinding2 = {
      id: mermaidDiagramBinding1,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput118) =>
          /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(
            mermaidDiagramInput118,
          ),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./c4-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding1,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding3 = "flowchart";
    mermaidDiagramBinding4 = {
      id: mermaidDiagramBinding3,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput96, mermaidDiagramInput97) =>
          mermaidDiagramInput97?.flowchart?.defaultRenderer ===
            "dagre-wrapper" ||
          mermaidDiagramInput97?.flowchart?.defaultRenderer === "elk"
            ? false
            : /^\s*graph/.test(mermaidDiagramInput96),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./flow-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding3,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding5 = "flowchart-v2";
    mermaidDiagramBinding6 = {
      id: mermaidDiagramBinding5,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput55, mermaidDiagramInput56) =>
          mermaidDiagramInput56?.flowchart?.defaultRenderer === "dagre-d3"
            ? false
            : (mermaidDiagramInput56?.flowchart?.defaultRenderer === "elk" &&
                (mermaidDiagramInput56.layout = "elk"),
              /^\s*graph/.test(mermaidDiagramInput55) &&
              mermaidDiagramInput56?.flowchart?.defaultRenderer ===
                "dagre-wrapper"
                ? true
                : /^\s*flowchart/.test(mermaidDiagramInput55)),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./flow-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding5,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding7 = "er";
    mermaidDiagramBinding8 = {
      id: mermaidDiagramBinding7,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput163) =>
          /^\s*erDiagram/.test(mermaidDiagramInput163),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./er-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding7,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding9 = "gitGraph";
    mermaidDiagramBinding10 = {
      id: mermaidDiagramBinding9,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput164) => /^\s*gitGraph/.test(mermaidDiagramInput164),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./git-graph-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding9,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding11 = "gantt";
    mermaidDiagramBinding12 = {
      id: mermaidDiagramBinding11,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput170) => /^\s*gantt/.test(mermaidDiagramInput170),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./gantt-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding11,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding13 = "info";
    mermaidDiagramBinding14 = {
      id: mermaidDiagramBinding13,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput171) => /^\s*info/.test(mermaidDiagramInput171),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/info-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding13,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding15 = "pie";
    mermaidDiagramBinding16 = {
      id: mermaidDiagramBinding15,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput172) => /^\s*pie/.test(mermaidDiagramInput172),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/pie-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding15,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding17 = "quadrantChart";
    mermaidDiagramBinding18 = {
      id: mermaidDiagramBinding17,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput157) =>
          /^\s*quadrantChart/.test(mermaidDiagramInput157),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./quadrant-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding17,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding19 = "xychart";
    mermaidDiagramBinding20 = {
      id: mermaidDiagramBinding19,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput153) =>
          /^\s*xychart(-beta)?/.test(mermaidDiagramInput153),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./xychart-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding19,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding21 = "requirement";
    mermaidDiagramBinding22 = {
      id: mermaidDiagramBinding21,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput151) =>
          /^\s*requirement(Diagram)?/.test(mermaidDiagramInput151),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./requirement-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding21,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding23 = "sequence";
    mermaidDiagramBinding24 = {
      id: mermaidDiagramBinding23,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput154) =>
          /^\s*sequenceDiagram/.test(mermaidDiagramInput154),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./sequence-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding23,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding25 = "class";
    mermaidDiagramBinding26 = {
      id: mermaidDiagramBinding25,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput111, mermaidDiagramInput112) =>
          mermaidDiagramInput112?.class?.defaultRenderer === "dagre-wrapper"
            ? false
            : /^\s*classDiagram/.test(mermaidDiagramInput111),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/class-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding25,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding27 = "classDiagram";
    mermaidDiagramBinding28 = {
      id: mermaidDiagramBinding27,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput98, mermaidDiagramInput99) =>
          /^\s*classDiagram/.test(mermaidDiagramInput98) &&
          mermaidDiagramInput99?.class?.defaultRenderer === "dagre-wrapper"
            ? true
            : /^\s*classDiagram-v2/.test(mermaidDiagramInput98),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/class-diagram-v2");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding27,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding29 = "state";
    mermaidDiagramBinding30 = {
      id: mermaidDiagramBinding29,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput113, mermaidDiagramInput114) =>
          mermaidDiagramInput114?.state?.defaultRenderer === "dagre-wrapper"
            ? false
            : /^\s*stateDiagram/.test(mermaidDiagramInput113),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./state-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding29,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding31 = "stateDiagram";
    mermaidDiagramBinding32 = {
      id: mermaidDiagramBinding31,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput83, mermaidDiagramInput84) =>
          !!(
            /^\s*stateDiagram-v2/.test(mermaidDiagramInput83) ||
            (/^\s*stateDiagram/.test(mermaidDiagramInput83) &&
              mermaidDiagramInput84?.state?.defaultRenderer === "dagre-wrapper")
          ),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/state-diagram-v2");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding31,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding33 = "journey";
    mermaidDiagramBinding34 = {
      id: mermaidDiagramBinding33,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput166) => /^\s*journey/.test(mermaidDiagramInput166),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./journey-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding33,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding35 = {
      draw: chunkAGHRB4JFN(
        (mermaidDiagramInput1, mermaidDiagramInput2, mermaidDiagramInput3) => {
          chunkAGHRB4JFI.debug("rendering svg for syntax error\n");
          let mermaidDiagramBinding140 = chunkEXTU4WIEN(mermaidDiagramInput2),
            mermaidDiagramBinding141 = mermaidDiagramBinding140.append("g");
          mermaidDiagramBinding140.attr("viewBox", "0 0 2412 512");
          chunkABZYJK2DC(mermaidDiagramBinding140, 100, 512, true);
          mermaidDiagramBinding141
            .append("path")
            .attr("class", "error-icon")
            .attr(
              "d",
              "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z",
            );
          mermaidDiagramBinding141
            .append("path")
            .attr("class", "error-icon")
            .attr(
              "d",
              "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z",
            );
          mermaidDiagramBinding141
            .append("path")
            .attr("class", "error-icon")
            .attr(
              "d",
              "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z",
            );
          mermaidDiagramBinding141
            .append("path")
            .attr("class", "error-icon")
            .attr(
              "d",
              "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z",
            );
          mermaidDiagramBinding141
            .append("path")
            .attr("class", "error-icon")
            .attr(
              "d",
              "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z",
            );
          mermaidDiagramBinding141
            .append("path")
            .attr("class", "error-icon")
            .attr(
              "d",
              "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z",
            );
          mermaidDiagramBinding141
            .append("text")
            .attr("class", "error-text")
            .attr("x", 1440)
            .attr("y", 250)
            .attr("font-size", "150px")
            .style("text-anchor", "middle")
            .text("Syntax error in text");
          mermaidDiagramBinding141
            .append("text")
            .attr("class", "error-text")
            .attr("x", 1250)
            .attr("y", 400)
            .attr("font-size", "100px")
            .style("text-anchor", "middle")
            .text(`mermaid version ${mermaidDiagramInput3}`);
        },
        "draw",
      ),
    };
    mermaidDiagramBinding36 = mermaidDiagramBinding35;
    mermaidDiagramBinding37 = {
      db: {},
      renderer: mermaidDiagramBinding35,
      parser: {
        parse: chunkAGHRB4JFN(() => {}, "parse"),
      },
    };
    mermaidDiagramBinding38 = "flowchart-elk";
    mermaidDiagramBinding39 = {
      id: mermaidDiagramBinding38,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput78, mermaidDiagramInput79 = {}) =>
          /^\s*flowchart-elk/.test(mermaidDiagramInput78) ||
          (/^\s*(flowchart|graph)/.test(mermaidDiagramInput78) &&
            mermaidDiagramInput79?.flowchart?.defaultRenderer === "elk")
            ? ((mermaidDiagramInput79.layout = "elk"), true)
            : false,
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./flow-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding38,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding40 = "timeline";
    $t = {
      id: mermaidDiagramBinding40,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput165) => /^\s*timeline/.test(mermaidDiagramInput165),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./timeline-definition");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding40,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding41 = "mindmap";
    mermaidDiagramBinding42 = {
      id: mermaidDiagramBinding41,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput167) => /^\s*mindmap/.test(mermaidDiagramInput167),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./mindmap-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding41,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding43 = "kanban";
    mermaidDiagramBinding44 = {
      id: mermaidDiagramBinding43,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput169) => /^\s*kanban/.test(mermaidDiagramInput169),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./kanban-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding43,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding45 = "sankey";
    mermaidDiagramBinding46 = {
      id: mermaidDiagramBinding45,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput155) =>
          /^\s*sankey(-beta)?/.test(mermaidDiagramInput155),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./sankey-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding45,
          diagram,
        };
      }, "loader"),
    };
    on = "packet";
    mermaidDiagramBinding47 = {
      id: on,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput156) =>
          /^\s*packet(-beta)?/.test(mermaidDiagramInput156),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/packet-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: on,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding48 = "radar";
    mermaidDiagramBinding49 = {
      id: mermaidDiagramBinding48,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput161) =>
          /^\s*radar-beta/.test(mermaidDiagramInput161),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/radar-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding48,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding50 = "block";
    mermaidDiagramBinding51 = {
      id: mermaidDiagramBinding50,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput158) =>
          /^\s*block(-beta)?/.test(mermaidDiagramInput158),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } = await import("./block-diagram");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding50,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding52 = "architecture";
    mermaidDiagramBinding53 = {
      id: mermaidDiagramBinding52,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput160) =>
          /^\s*architecture/.test(mermaidDiagramInput160),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("./architecture-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding52,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding54 = "treemap";
    mermaidDiagramBinding55 = {
      id: mermaidDiagramBinding54,
      detector: chunkAGHRB4JFN(
        (mermaidDiagramInput168) => /^\s*treemap/.test(mermaidDiagramInput168),
        "detector",
      ),
      loader: chunkAGHRB4JFN(async () => {
        let { diagram } = await vitePreload(
          async () => {
            let { diagram: _diagram } =
              await import("../../diagrams/treemap-diagram-alt");
            return {
              diagram: _diagram,
            };
          },
          [],
          import.meta.url,
        );
        return {
          id: mermaidDiagramBinding54,
          diagram,
        };
      }, "loader"),
    };
    mermaidDiagramBinding56 = false;
    mermaidDiagramBinding57 = chunkAGHRB4JFN(() => {
      mermaidDiagramBinding56 ||
        ((mermaidDiagramBinding56 = true),
        chunkABZYJK2DM(
          "error",
          mermaidDiagramBinding37,
          (mermaidDiagramInput152) =>
            mermaidDiagramInput152.toLowerCase().trim() === "error",
        ),
        chunkABZYJK2DM(
          "---",
          {
            db: {
              clear: chunkAGHRB4JFN(() => {}, "clear"),
            },
            styles: {},
            renderer: {
              draw: chunkAGHRB4JFN(() => {}, "draw"),
            },
            parser: {
              parse: chunkAGHRB4JFN(() => {
                throw Error(
                  "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks",
                );
              }, "parse"),
            },
            init: chunkAGHRB4JFN(() => null, "init"),
          },
          (mermaidDiagramInput148) =>
            mermaidDiagramInput148.toLowerCase().trimStart().startsWith("---"),
        ),
        chunkABZYJK2DN(
          mermaidDiagramBinding39,
          mermaidDiagramBinding42,
          mermaidDiagramBinding53,
        ),
        chunkABZYJK2DN(
          mermaidDiagramBinding2,
          mermaidDiagramBinding44,
          mermaidDiagramBinding28,
          mermaidDiagramBinding26,
          mermaidDiagramBinding8,
          mermaidDiagramBinding12,
          mermaidDiagramBinding14,
          mermaidDiagramBinding16,
          mermaidDiagramBinding22,
          mermaidDiagramBinding24,
          mermaidDiagramBinding6,
          mermaidDiagramBinding4,
          $t,
          mermaidDiagramBinding10,
          mermaidDiagramBinding32,
          mermaidDiagramBinding30,
          mermaidDiagramBinding34,
          mermaidDiagramBinding18,
          mermaidDiagramBinding46,
          mermaidDiagramBinding47,
          mermaidDiagramBinding20,
          mermaidDiagramBinding51,
          mermaidDiagramBinding49,
          mermaidDiagramBinding55,
        ));
    }, "addDiagrams");
    _n = chunkAGHRB4JFN(async () => {
      chunkAGHRB4JFI.debug("Loading registered diagrams");
      let mermaidDiagramBinding189 = (
        await Promise.allSettled(
          Object.entries(chunkABZYJK2DP).map(
            async ([
              mermaidDiagramInput26,
              {
                detector: mermaidDiagramInput27,
                loader: mermaidDiagramInput28,
              },
            ]) => {
              if (mermaidDiagramInput28)
                try {
                  _chunkABZYJK2DX(mermaidDiagramInput26);
                } catch {
                  try {
                    let { diagram, id } = await mermaidDiagramInput28();
                    chunkABZYJK2DM(id, diagram, mermaidDiagramInput27);
                  } catch (mermaidDiagramBinding234) {
                    throw (
                      chunkAGHRB4JFI.error(
                        `Failed to load external diagram with key ${mermaidDiagramInput26}. Removing from detectors.`,
                      ),
                      delete chunkABZYJK2DP[mermaidDiagramInput26],
                      mermaidDiagramBinding234
                    );
                  }
                }
            },
          ),
        )
      ).filter((item) => item.status === "rejected");
      if (mermaidDiagramBinding189.length > 0) {
        chunkAGHRB4JFI.error(
          `Failed to load ${mermaidDiagramBinding189.length} external diagrams`,
        );
        for (let mermaidDiagramBinding268 of mermaidDiagramBinding189)
          chunkAGHRB4JFI.error(mermaidDiagramBinding268);
        throw Error(
          `Failed to load ${mermaidDiagramBinding189.length} external diagrams`,
        );
      }
    }, "loadRegisteredDiagrams");
    mermaidDiagramBinding58 = "graphics-document document";
    chunkAGHRB4JFN(mermaidDiagramHelper1, "setA11yDiagramInfo");
    chunkAGHRB4JFN(mermaidDiagramHelper2, "addSVGa11yTitleDescription");
    mermaidDiagramBinding59 = class MermaidDiagramClass1 {
      constructor(
        mermaidDiagramInput85,
        mermaidDiagramInput86,
        mermaidDiagramInput87,
        mermaidDiagramInput88,
        mermaidDiagramInput89,
      ) {
        this.type = mermaidDiagramInput85;
        this.text = mermaidDiagramInput86;
        this.db = mermaidDiagramInput87;
        this.parser = mermaidDiagramInput88;
        this.renderer = mermaidDiagramInput89;
      }
      static {
        chunkAGHRB4JFN(this, "Diagram");
      }
      static async fromText(mermaidDiagramInput19, mermaidDiagramInput20 = {}) {
        let mermaidDiagramBinding203 = _chunkABZYJK2DY(),
          mermaidDiagramBinding204 = _chunkABZYJK2DF(
            mermaidDiagramInput19,
            mermaidDiagramBinding203,
          );
        mermaidDiagramInput19 = chunkS3R3BYOJA(mermaidDiagramInput19) + "\n";
        try {
          _chunkABZYJK2DX(mermaidDiagramBinding204);
        } catch {
          let mermaidDiagramBinding247 = chunkABZYJK2DS(
            mermaidDiagramBinding204,
          );
          if (!mermaidDiagramBinding247)
            throw new chunkABZYJK2DT(
              `Diagram ${mermaidDiagramBinding204} not found.`,
            );
          let { id, diagram } = await mermaidDiagramBinding247();
          chunkABZYJK2DM(id, diagram);
        }
        let { db, parser, renderer, init } = _chunkABZYJK2DX(
          mermaidDiagramBinding204,
        );
        return (
          parser.parser && (parser.parser.yy = db),
          db.clear?.(),
          init?.(mermaidDiagramBinding203),
          mermaidDiagramInput20.title &&
            db.setDiagramTitle?.(mermaidDiagramInput20.title),
          await parser.parse(mermaidDiagramInput19),
          new MermaidDiagramClass1(
            mermaidDiagramBinding204,
            mermaidDiagramInput19,
            db,
            parser,
            renderer,
          )
        );
      }
      async render(mermaidDiagramInput127, mermaidDiagramInput128) {
        await this.renderer.draw(
          this.text,
          mermaidDiagramInput127,
          mermaidDiagramInput128,
          this,
        );
      }
      getParser() {
        return this.parser;
      }
      getType() {
        return this.type;
      }
    };
    mermaidDiagramBinding60 = [];
    mermaidDiagramBinding61 = chunkAGHRB4JFN(() => {
      mermaidDiagramBinding60.forEach((item) => {
        item();
      });
      mermaidDiagramBinding60 = [];
    }, "attachFunctions");
    mermaidDiagramBinding62 = chunkAGHRB4JFN(
      (mermaidDiagramInput146) =>
        mermaidDiagramInput146
          .replace(/^\s*%%(?!{)[^\n]+\n?/gm, "")
          .trimStart(),
      "cleanupComments",
    );
    chunkAGHRB4JFN(mermaidDiagramHelper3, "extractFrontMatter");
    mermaidDiagramBinding63 = chunkAGHRB4JFN(
      (mermaidDiagramInput72) =>
        mermaidDiagramInput72
          .replace(/\r\n?/g, "\n")
          .replace(
            /<(\w+)([^>]*)>/g,
            (
              mermaidDiagramInput143,
              mermaidDiagramInput144,
              mermaidDiagramInput145,
            ) =>
              "<" +
              mermaidDiagramInput144 +
              mermaidDiagramInput145.replace(/="([^"]*)"/g, "='$1'") +
              ">",
          ),
      "cleanupText",
    );
    mermaidDiagramBinding64 = chunkAGHRB4JFN((mermaidDiagramInput71) => {
      let { text, metadata } = mermaidDiagramHelper3(mermaidDiagramInput71),
        { displayMode, title, config = {} } = metadata;
      return (
        displayMode &&
          ((config.gantt ||= {}), (config.gantt.displayMode = displayMode)),
        {
          title,
          config,
          text,
        }
      );
    }, "processFrontmatter");
    mermaidDiagramBinding65 = chunkAGHRB4JFN((mermaidDiagramInput65) => {
      let mermaidDiagramBinding228 =
          chunkS3R3BYOJG.detectInit(mermaidDiagramInput65) ?? {},
        mermaidDiagramBinding229 = chunkS3R3BYOJG.detectDirective(
          mermaidDiagramInput65,
          "wrap",
        );
      return (
        Array.isArray(mermaidDiagramBinding229)
          ? (mermaidDiagramBinding228.wrap = mermaidDiagramBinding229.some(
              ({ type }) => type === "wrap",
            ))
          : mermaidDiagramBinding229?.type === "wrap" &&
            (mermaidDiagramBinding228.wrap = true),
        {
          text: chunkS3R3BYOJH(mermaidDiagramInput65),
          directive: mermaidDiagramBinding228,
        }
      );
    }, "processDirectives");
    chunkAGHRB4JFN(mermaidDiagramHelper4, "preprocessDiagram");
    chunkAGHRB4JFN(mermaidDiagramHelper5, "toBase64");
    mermaidDiagramBinding66 = 5e4;
    mermaidDiagramBinding67 =
      "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
    mermaidDiagramBinding68 = "sandbox";
    mermaidDiagramBinding69 = "loose";
    mermaidDiagramBinding70 = "http://www.w3.org/2000/svg";
    mermaidDiagramBinding71 = "http://www.w3.org/1999/xlink";
    mermaidDiagramBinding72 = "http://www.w3.org/1999/xhtml";
    mermaidDiagramBinding73 = "100%";
    mermaidDiagramBinding74 = "100%";
    mermaidDiagramBinding75 = "border:0;margin:0;";
    mermaidDiagramBinding76 = "margin:0";
    mermaidDiagramBinding77 =
      "allow-top-navigation-by-user-activation allow-popups";
    mermaidDiagramBinding78 =
      'The "iframe" tag is not supported by your browser.';
    mermaidDiagramBinding79 = ["foreignobject"];
    mermaidDiagramBinding80 = ["dominant-baseline"];
    chunkAGHRB4JFN(mermaidDiagramHelper6, "processAndSetConfigs");
    chunkAGHRB4JFN(mermaidDiagramHelper7, "parse");
    mermaidDiagramBinding81 = chunkAGHRB4JFN(
      (
        mermaidDiagramInput135,
        mermaidDiagramInput136,
        mermaidDiagramInput137 = [],
      ) => `
.${mermaidDiagramInput135} ${mermaidDiagramInput136} { ${mermaidDiagramInput137.join(" !important; ")} !important; }`,
      "cssImportantStyles",
    );
    mermaidDiagramBinding82 = chunkAGHRB4JFN(
      (mermaidDiagramInput12, mermaidDiagramInput13 = new Map()) => {
        let mermaidDiagramBinding190 = "";
        if (
          (mermaidDiagramInput12.themeCSS !== undefined &&
            (mermaidDiagramBinding190 += `
${mermaidDiagramInput12.themeCSS}`),
          mermaidDiagramInput12.fontFamily !== undefined &&
            (mermaidDiagramBinding190 += `
:root { --mermaid-font-family: ${mermaidDiagramInput12.fontFamily}}`),
          mermaidDiagramInput12.altFontFamily !== undefined &&
            (mermaidDiagramBinding190 += `
:root { --mermaid-alt-font-family: ${mermaidDiagramInput12.altFontFamily}}`),
          mermaidDiagramInput13 instanceof Map)
        ) {
          let mermaidDiagramBinding210 =
            (mermaidDiagramInput12.htmlLabels ??
            mermaidDiagramInput12.flowchart?.htmlLabels)
              ? ["> *", "span"]
              : ["rect", "polygon", "ellipse", "circle", "path"];
          mermaidDiagramInput13.forEach((item) => {
            isEmptyN(item.styles) ||
              mermaidDiagramBinding210.forEach((_item) => {
                mermaidDiagramBinding190 += mermaidDiagramBinding81(
                  item.id,
                  _item,
                  item.styles,
                );
              });
            isEmptyN(item.textStyles) ||
              (mermaidDiagramBinding190 += mermaidDiagramBinding81(
                item.id,
                "tspan",
                (item?.textStyles || []).map((_item) =>
                  _item.replace("color", "fill"),
                ),
              ));
          });
        }
        return mermaidDiagramBinding190;
      },
      "createCssStyles",
    );
    mermaidDiagramBinding83 = chunkAGHRB4JFN(
      (
        mermaidDiagramInput129,
        mermaidDiagramInput130,
        mermaidDiagramInput131,
        mermaidDiagramInput132,
      ) =>
        mermaidDiagramImport3(
          mermaidDiagramImport1(
            `${mermaidDiagramInput132}{${chunkABZYJK2DJ(mermaidDiagramInput130, mermaidDiagramBinding82(mermaidDiagramInput129, mermaidDiagramInput131), mermaidDiagramInput129.themeVariables)}}`,
          ),
          mermaidDiagramImport2,
        ),
      "createUserStyles",
    );
    mermaidDiagramBinding84 = chunkAGHRB4JFN(
      (
        mermaidDiagramInput57 = "",
        mermaidDiagramInput58,
        mermaidDiagramInput59,
      ) => {
        let mermaidDiagramBinding225 = mermaidDiagramInput57;
        return (
          !mermaidDiagramInput59 &&
            !mermaidDiagramInput58 &&
            (mermaidDiagramBinding225 = mermaidDiagramBinding225.replace(
              /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
              'marker-end="url(#',
            )),
          (mermaidDiagramBinding225 = chunkS3R3BYOJI(mermaidDiagramBinding225)),
          (mermaidDiagramBinding225 = mermaidDiagramBinding225.replace(
            /<br>/g,
            "<br/>",
          )),
          mermaidDiagramBinding225
        );
      },
      "cleanUpSvgCode",
    );
    mermaidDiagramBinding85 = chunkAGHRB4JFN(
      (
        mermaidDiagramInput69 = "",
        mermaidDiagramInput70,
      ) => `<iframe style="width:${mermaidDiagramBinding73};height:${mermaidDiagramInput70?.viewBox?.baseVal?.height ? mermaidDiagramInput70.viewBox.baseVal.height + "px" : mermaidDiagramBinding74};${mermaidDiagramBinding75}" src="data:text/html;charset=UTF-8;base64,${mermaidDiagramHelper5(`<body style="${mermaidDiagramBinding76}">${mermaidDiagramInput69}</body>`)}" sandbox="${mermaidDiagramBinding77}">
  ${mermaidDiagramBinding78}
</iframe>`,
      "putIntoIFrame",
    );
    mermaidDiagramBinding86 = chunkAGHRB4JFN(
      (
        mermaidDiagramInput60,
        mermaidDiagramInput61,
        mermaidDiagramInput62,
        mermaidDiagramInput63,
        mermaidDiagramInput64,
      ) => {
        let mermaidDiagramBinding226 = mermaidDiagramInput60.append("div");
        mermaidDiagramBinding226.attr("id", mermaidDiagramInput62);
        mermaidDiagramInput63 &&
          mermaidDiagramBinding226.attr("style", mermaidDiagramInput63);
        let mermaidDiagramBinding227 = mermaidDiagramBinding226
          .append("svg")
          .attr("id", mermaidDiagramInput61)
          .attr("width", "100%")
          .attr("xmlns", mermaidDiagramBinding70);
        return (
          mermaidDiagramInput64 &&
            mermaidDiagramBinding227.attr("xmlns:xlink", mermaidDiagramInput64),
          mermaidDiagramBinding227.append("g"),
          mermaidDiagramInput60
        );
      },
      "appendDivSvgG",
    );
    chunkAGHRB4JFN(_t, "sandboxedIframe");
    mermaidDiagramBinding87 = chunkAGHRB4JFN(
      (
        mermaidDiagramInput103,
        mermaidDiagramInput104,
        mermaidDiagramInput105,
        mermaidDiagramInput106,
      ) => {
        mermaidDiagramInput103.getElementById(mermaidDiagramInput104)?.remove();
        mermaidDiagramInput103.getElementById(mermaidDiagramInput105)?.remove();
        mermaidDiagramInput103.getElementById(mermaidDiagramInput106)?.remove();
      },
      "removeExistingElements",
    );
    mermaidDiagramBinding88 = chunkAGHRB4JFN(async function (
      mermaidDiagramInput7,
      mermaidDiagramInput8,
      mermaidDiagramInput9,
    ) {
      mermaidDiagramBinding57();
      let mermaidDiagramBinding142 =
        mermaidDiagramHelper6(mermaidDiagramInput8);
      mermaidDiagramInput8 = mermaidDiagramBinding142.code;
      let mermaidDiagramBinding143 = _chunkABZYJK2DY();
      chunkAGHRB4JFI.debug(mermaidDiagramBinding143);
      mermaidDiagramInput8.length >
        (mermaidDiagramBinding143?.maxTextSize ?? mermaidDiagramBinding66) &&
        (mermaidDiagramInput8 = mermaidDiagramBinding67);
      let mermaidDiagramBinding144 = "#" + mermaidDiagramInput7,
        mermaidDiagramBinding145 = "i" + mermaidDiagramInput7,
        mermaidDiagramBinding146 = "#" + mermaidDiagramBinding145,
        mermaidDiagramBinding147 = "d" + mermaidDiagramInput7,
        mermaidDiagramBinding148 = "#" + mermaidDiagramBinding147,
        mermaidDiagramBinding149 = chunkAGHRB4JFN(() => {
          let mermaidDiagramBinding258 = srcR(
            mermaidDiagramBinding151
              ? mermaidDiagramBinding146
              : mermaidDiagramBinding148,
          ).node();
          mermaidDiagramBinding258 &&
            "remove" in mermaidDiagramBinding258 &&
            mermaidDiagramBinding258.remove();
        }, "removeTempElements"),
        mermaidDiagramBinding150 = srcR("body"),
        mermaidDiagramBinding151 =
          mermaidDiagramBinding143.securityLevel === mermaidDiagramBinding68,
        mermaidDiagramBinding152 =
          mermaidDiagramBinding143.securityLevel === mermaidDiagramBinding69,
        mermaidDiagramBinding153 = mermaidDiagramBinding143.fontFamily;
      mermaidDiagramInput9 === undefined
        ? (mermaidDiagramBinding87(
            document,
            mermaidDiagramInput7,
            mermaidDiagramBinding147,
            mermaidDiagramBinding145,
          ),
          mermaidDiagramBinding151
            ? ((mermaidDiagramBinding150 = srcR(
                _t(srcR("body"), mermaidDiagramBinding145).nodes()[0]
                  .contentDocument.body,
              )),
              (mermaidDiagramBinding150.node().style.margin = 0))
            : (mermaidDiagramBinding150 = srcR("body")),
          mermaidDiagramBinding86(
            mermaidDiagramBinding150,
            mermaidDiagramInput7,
            mermaidDiagramBinding147,
          ))
        : (mermaidDiagramInput9 && (mermaidDiagramInput9.innerHTML = ""),
          mermaidDiagramBinding151
            ? ((mermaidDiagramBinding150 = srcR(
                _t(
                  srcR(mermaidDiagramInput9),
                  mermaidDiagramBinding145,
                ).nodes()[0].contentDocument.body,
              )),
              (mermaidDiagramBinding150.node().style.margin = 0))
            : (mermaidDiagramBinding150 = srcR(mermaidDiagramInput9)),
          mermaidDiagramBinding86(
            mermaidDiagramBinding150,
            mermaidDiagramInput7,
            mermaidDiagramBinding147,
            `font-family: ${mermaidDiagramBinding153}`,
            mermaidDiagramBinding71,
          ));
      let mermaidDiagramBinding154, mermaidDiagramBinding155;
      try {
        mermaidDiagramBinding154 = await mermaidDiagramBinding59.fromText(
          mermaidDiagramInput8,
          {
            title: mermaidDiagramBinding142.title,
          },
        );
      } catch (mermaidDiagramBinding256) {
        if (mermaidDiagramBinding143.suppressErrorRendering)
          throw (mermaidDiagramBinding149(), mermaidDiagramBinding256);
        mermaidDiagramBinding154 =
          await mermaidDiagramBinding59.fromText("error");
        mermaidDiagramBinding155 = mermaidDiagramBinding256;
      }
      let mermaidDiagramBinding156 = mermaidDiagramBinding150
          .select(mermaidDiagramBinding148)
          .node(),
        mermaidDiagramBinding157 = mermaidDiagramBinding154.type,
        mermaidDiagramBinding158 = mermaidDiagramBinding156.firstChild,
        mermaidDiagramBinding159 = mermaidDiagramBinding158.firstChild,
        mermaidDiagramBinding160 =
          mermaidDiagramBinding154.renderer.getClasses?.(
            mermaidDiagramInput8,
            mermaidDiagramBinding154,
          ),
        mermaidDiagramBinding161 = mermaidDiagramBinding83(
          mermaidDiagramBinding143,
          mermaidDiagramBinding157,
          mermaidDiagramBinding160,
          mermaidDiagramBinding144,
        ),
        mermaidDiagramBinding162 = document.createElement("style");
      mermaidDiagramBinding162.innerHTML = mermaidDiagramBinding161;
      mermaidDiagramBinding158.insertBefore(
        mermaidDiagramBinding162,
        mermaidDiagramBinding159,
      );
      try {
        await mermaidDiagramBinding154.renderer.draw(
          mermaidDiagramInput8,
          mermaidDiagramInput7,
          chunkKS23V3DPN.version,
          mermaidDiagramBinding154,
        );
      } catch (mermaidDiagramBinding260) {
        throw (
          mermaidDiagramBinding143.suppressErrorRendering
            ? mermaidDiagramBinding149()
            : mermaidDiagramBinding36.draw(
                mermaidDiagramInput8,
                mermaidDiagramInput7,
                chunkKS23V3DPN.version,
              ),
          mermaidDiagramBinding260
        );
      }
      let mermaidDiagramBinding163 = mermaidDiagramBinding150.select(
          `${mermaidDiagramBinding148} svg`,
        ),
        mermaidDiagramBinding164 = mermaidDiagramBinding154.db.getAccTitle?.(),
        mermaidDiagramBinding165 =
          mermaidDiagramBinding154.db.getAccDescription?.();
      mermaidDiagramHelper9(
        mermaidDiagramBinding157,
        mermaidDiagramBinding163,
        mermaidDiagramBinding164,
        mermaidDiagramBinding165,
      );
      mermaidDiagramBinding150
        .select(`[id="${mermaidDiagramInput7}"]`)
        .selectAll("foreignobject > *")
        .attr("xmlns", mermaidDiagramBinding72);
      let mermaidDiagramBinding166 = mermaidDiagramBinding150
        .select(mermaidDiagramBinding148)
        .node().innerHTML;
      if (
        (chunkAGHRB4JFI.debug(
          "config.arrowMarkerAbsolute",
          mermaidDiagramBinding143.arrowMarkerAbsolute,
        ),
        (mermaidDiagramBinding166 = mermaidDiagramBinding84(
          mermaidDiagramBinding166,
          mermaidDiagramBinding151,
          _chunkABZYJK2DH(mermaidDiagramBinding143.arrowMarkerAbsolute),
        )),
        mermaidDiagramBinding151)
      ) {
        let mermaidDiagramBinding262 = mermaidDiagramBinding150
          .select(mermaidDiagramBinding148 + " svg")
          .node();
        mermaidDiagramBinding166 = mermaidDiagramBinding85(
          mermaidDiagramBinding166,
          mermaidDiagramBinding262,
        );
      } else
        mermaidDiagramBinding152 ||
          (mermaidDiagramBinding166 = chunkABZYJK2DQ.sanitize(
            mermaidDiagramBinding166,
            {
              ADD_TAGS: mermaidDiagramBinding79,
              ADD_ATTR: mermaidDiagramBinding80,
              HTML_INTEGRATION_POINTS: {
                foreignobject: true,
              },
            },
          ));
      if ((mermaidDiagramBinding61(), mermaidDiagramBinding155))
        throw mermaidDiagramBinding155;
      return (
        mermaidDiagramBinding149(),
        {
          diagramType: mermaidDiagramBinding157,
          svg: mermaidDiagramBinding166,
          bindFunctions: mermaidDiagramBinding154.db.bindFunctions,
        }
      );
    }, "render");
    chunkAGHRB4JFN(mermaidDiagramHelper8, "initialize");
    mermaidDiagramBinding89 = chunkAGHRB4JFN(
      (mermaidDiagramInput125, mermaidDiagramInput126 = {}) => {
        let { code } = mermaidDiagramHelper4(mermaidDiagramInput125);
        return mermaidDiagramBinding59.fromText(code, mermaidDiagramInput126);
      },
      "getDiagramFromText",
    );
    chunkAGHRB4JFN(mermaidDiagramHelper9, "addA11yInfo");
    mermaidDiagramBinding90 = Object.freeze({
      render: mermaidDiagramBinding88,
      parse: mermaidDiagramHelper7,
      getDiagramFromText: mermaidDiagramBinding89,
      initialize: mermaidDiagramHelper8,
      getConfig: _chunkABZYJK2DY,
      setConfig: chunkABZYJK2DH,
      getSiteConfig: chunkABZYJK2DW,
      updateSiteConfig: chunkABZYJK2DX,
      reset: chunkAGHRB4JFN(() => {
        chunkABZYJK2DF();
      }, "reset"),
      globalReset: chunkAGHRB4JFN(() => {
        chunkABZYJK2DF(chunkABZYJK2DL);
      }, "globalReset"),
      defaultConfig: chunkABZYJK2DL,
    });
    chunkAGHRB4JFA(_chunkABZYJK2DY().logLevel);
    chunkABZYJK2DF(_chunkABZYJK2DY());
    mermaidDiagramBinding91 = chunkAGHRB4JFN(
      (mermaidDiagramInput41, mermaidDiagramInput42, mermaidDiagramInput43) => {
        chunkAGHRB4JFI.warn(mermaidDiagramInput41);
        chunkS3R3BYOJF(mermaidDiagramInput41)
          ? (mermaidDiagramInput43 &&
              mermaidDiagramInput43(
                mermaidDiagramInput41.str,
                mermaidDiagramInput41.hash,
              ),
            mermaidDiagramInput42.push({
              ...mermaidDiagramInput41,
              message: mermaidDiagramInput41.str,
              error: mermaidDiagramInput41,
            }))
          : (mermaidDiagramInput43 &&
              mermaidDiagramInput43(mermaidDiagramInput41),
            mermaidDiagramInput41 instanceof Error &&
              mermaidDiagramInput42.push({
                str: mermaidDiagramInput41.message,
                message: mermaidDiagramInput41.message,
                hash: mermaidDiagramInput41.name,
                error: mermaidDiagramInput41,
              }));
      },
      "handleError",
    );
    mermaidDiagramBinding92 = chunkAGHRB4JFN(async function (
      mermaidDiagramInput40 = {
        querySelector: ".mermaid",
      },
    ) {
      try {
        await mermaidDiagramBinding93(mermaidDiagramInput40);
      } catch (mermaidDiagramBinding238) {
        if (
          (chunkS3R3BYOJF(mermaidDiagramBinding238) &&
            chunkAGHRB4JFI.error(mermaidDiagramBinding238.str),
          mermaidDiagramBinding103.parseError &&
            mermaidDiagramBinding103.parseError(mermaidDiagramBinding238),
          !mermaidDiagramInput40.suppressErrors)
        )
          throw (
            chunkAGHRB4JFI.error(
              "Use the suppressErrors option to suppress these errors",
            ),
            mermaidDiagramBinding238
          );
      }
    }, "run");
    mermaidDiagramBinding93 = chunkAGHRB4JFN(async function (
      { postRenderCallback, querySelector, nodes } = {
        querySelector: ".mermaid",
      },
    ) {
      let mermaidDiagramBinding184 = mermaidDiagramBinding90.getConfig();
      chunkAGHRB4JFI.debug(
        `${postRenderCallback ? "" : "No "}Callback function found`,
      );
      let mermaidDiagramBinding185;
      if (nodes) mermaidDiagramBinding185 = nodes;
      else if (querySelector)
        mermaidDiagramBinding185 = document.querySelectorAll(querySelector);
      else throw Error("Nodes and querySelector are both undefined");
      chunkAGHRB4JFI.debug(`Found ${mermaidDiagramBinding185.length} diagrams`);
      mermaidDiagramBinding184?.startOnLoad !== undefined &&
        (chunkAGHRB4JFI.debug(
          "Start On Load: " + mermaidDiagramBinding184?.startOnLoad,
        ),
        mermaidDiagramBinding90.updateSiteConfig({
          startOnLoad: mermaidDiagramBinding184?.startOnLoad,
        }));
      let mermaidDiagramBinding186 = new chunkS3R3BYOJG.InitIDGenerator(
          mermaidDiagramBinding184.deterministicIds,
          mermaidDiagramBinding184.deterministicIDSeed,
        ),
        mermaidDiagramBinding187,
        mermaidDiagramBinding188 = [];
      for (let mermaidDiagramBinding200 of Array.from(
        mermaidDiagramBinding185,
      )) {
        if (
          (chunkAGHRB4JFI.info(
            "Rendering diagram: " + mermaidDiagramBinding200.id,
          ),
          mermaidDiagramBinding200.getAttribute("data-processed"))
        )
          continue;
        mermaidDiagramBinding200.setAttribute("data-processed", "true");
        let mermaidDiagramBinding201 = `mermaid-${mermaidDiagramBinding186.next()}`;
        mermaidDiagramBinding187 = mermaidDiagramBinding200.innerHTML;
        mermaidDiagramBinding187 = esmT(
          chunkS3R3BYOJG.entityDecode(mermaidDiagramBinding187),
        )
          .trim()
          .replace(/<br\s*\/?>/gi, "<br/>");
        let mermaidDiagramBinding202 = chunkS3R3BYOJG.detectInit(
          mermaidDiagramBinding187,
        );
        mermaidDiagramBinding202 &&
          chunkAGHRB4JFI.debug(
            "Detected early reinit: ",
            mermaidDiagramBinding202,
          );
        try {
          let { svg, bindFunctions } = await mermaidDiagramBinding102(
            mermaidDiagramBinding201,
            mermaidDiagramBinding187,
            mermaidDiagramBinding200,
          );
          mermaidDiagramBinding200.innerHTML = svg;
          postRenderCallback &&
            (await postRenderCallback(mermaidDiagramBinding201));
          bindFunctions && bindFunctions(mermaidDiagramBinding200);
        } catch (mermaidDiagramBinding267) {
          mermaidDiagramBinding91(
            mermaidDiagramBinding267,
            mermaidDiagramBinding188,
            mermaidDiagramBinding103.parseError,
          );
        }
      }
      if (mermaidDiagramBinding188.length > 0)
        throw mermaidDiagramBinding188[0];
    }, "runThrowsErrors");
    mermaidDiagramBinding94 = chunkAGHRB4JFN(function (mermaidDiagramInput150) {
      mermaidDiagramBinding90.initialize(mermaidDiagramInput150);
    }, "initialize");
    $n = chunkAGHRB4JFN(async function (
      mermaidDiagramInput52,
      mermaidDiagramInput53,
      mermaidDiagramInput54,
    ) {
      chunkAGHRB4JFI.warn(
        "mermaid.init is deprecated. Please use run instead.",
      );
      mermaidDiagramInput52 && mermaidDiagramBinding94(mermaidDiagramInput52);
      let mermaidDiagramBinding224 = {
        postRenderCallback: mermaidDiagramInput54,
        querySelector: ".mermaid",
      };
      typeof mermaidDiagramInput53 == "string"
        ? (mermaidDiagramBinding224.querySelector = mermaidDiagramInput53)
        : mermaidDiagramInput53 &&
          (mermaidDiagramInput53 instanceof HTMLElement
            ? (mermaidDiagramBinding224.nodes = [mermaidDiagramInput53])
            : (mermaidDiagramBinding224.nodes = mermaidDiagramInput53));
      await mermaidDiagramBinding92(mermaidDiagramBinding224);
    }, "init");
    mermaidDiagramBinding95 = chunkAGHRB4JFN(
      async (mermaidDiagramInput119, { lazyLoad = true } = {}) => {
        mermaidDiagramBinding57();
        chunkABZYJK2DN(...mermaidDiagramInput119);
        lazyLoad === false && (await _n());
      },
      "registerExternalDiagrams",
    );
    mermaidDiagramBinding96 = chunkAGHRB4JFN(function () {
      if (mermaidDiagramBinding103.startOnLoad) {
        let { startOnLoad } = mermaidDiagramBinding90.getConfig();
        startOnLoad &&
          mermaidDiagramBinding103
            .run()
            .catch((error) =>
              chunkAGHRB4JFI.error("Mermaid failed to initialize", error),
            );
      }
    }, "contentLoaded");
    typeof document < "u" &&
      window.addEventListener("load", mermaidDiagramBinding96, false);
    mermaidDiagramBinding97 = chunkAGHRB4JFN(function (mermaidDiagramInput149) {
      mermaidDiagramBinding103.parseError = mermaidDiagramInput149;
    }, "setParseErrorHandler");
    mermaidDiagramBinding98 = [];
    mermaidDiagramBinding99 = false;
    mermaidDiagramBinding100 = chunkAGHRB4JFN(async () => {
      if (!mermaidDiagramBinding99) {
        for (
          mermaidDiagramBinding99 = true;
          mermaidDiagramBinding98.length > 0;
        ) {
          let mermaidDiagramBinding241 = mermaidDiagramBinding98.shift();
          if (mermaidDiagramBinding241)
            try {
              await mermaidDiagramBinding241();
            } catch (mermaidDiagramBinding263) {
              chunkAGHRB4JFI.error(
                "Error executing queue",
                mermaidDiagramBinding263,
              );
            }
        }
        mermaidDiagramBinding99 = false;
      }
    }, "executeQueue");
    mermaidDiagramBinding101 = chunkAGHRB4JFN(
      async (mermaidDiagramInput24, mermaidDiagramInput25) =>
        new Promise((mermaidDiagramInput32, mermaidDiagramInput33) => {
          let mermaidDiagramBinding209 = chunkAGHRB4JFN(
            () =>
              new Promise((mermaidDiagramInput46, mermaidDiagramInput47) => {
                mermaidDiagramBinding90
                  .parse(mermaidDiagramInput24, mermaidDiagramInput25)
                  .then(
                    (value) => {
                      mermaidDiagramInput46(value);
                      mermaidDiagramInput32(value);
                    },
                    (mermaidDiagramInput90) => {
                      chunkAGHRB4JFI.error(
                        "Error parsing",
                        mermaidDiagramInput90,
                      );
                      mermaidDiagramBinding103.parseError?.(
                        mermaidDiagramInput90,
                      );
                      mermaidDiagramInput47(mermaidDiagramInput90);
                      mermaidDiagramInput33(mermaidDiagramInput90);
                    },
                  );
              }),
            "performCall",
          );
          mermaidDiagramBinding98.push(mermaidDiagramBinding209);
          mermaidDiagramBinding100().catch(mermaidDiagramInput33);
        }),
      "parse",
    );
    mermaidDiagramBinding102 = chunkAGHRB4JFN(
      (mermaidDiagramInput21, mermaidDiagramInput22, mermaidDiagramInput23) =>
        new Promise((mermaidDiagramInput30, mermaidDiagramInput31) => {
          let mermaidDiagramBinding208 = chunkAGHRB4JFN(
            () =>
              new Promise((mermaidDiagramInput44, mermaidDiagramInput45) => {
                mermaidDiagramBinding90
                  .render(
                    mermaidDiagramInput21,
                    mermaidDiagramInput22,
                    mermaidDiagramInput23,
                  )
                  .then(
                    (value) => {
                      mermaidDiagramInput44(value);
                      mermaidDiagramInput30(value);
                    },
                    (mermaidDiagramInput91) => {
                      chunkAGHRB4JFI.error(
                        "Error parsing",
                        mermaidDiagramInput91,
                      );
                      mermaidDiagramBinding103.parseError?.(
                        mermaidDiagramInput91,
                      );
                      mermaidDiagramInput45(mermaidDiagramInput91);
                      mermaidDiagramInput31(mermaidDiagramInput91);
                    },
                  );
              }),
            "performCall",
          );
          mermaidDiagramBinding98.push(mermaidDiagramBinding208);
          mermaidDiagramBinding100().catch(mermaidDiagramInput31);
        }),
      "render",
    );
    mermaidDiagramBinding103 = {
      startOnLoad: true,
      mermaidAPI: mermaidDiagramBinding90,
      parse: mermaidDiagramBinding101,
      render: mermaidDiagramBinding102,
      init: $n,
      run: mermaidDiagramBinding92,
      registerExternalDiagrams: mermaidDiagramBinding95,
      registerLayoutLoaders: chunkN4CR4FBYR,
      initialize: mermaidDiagramBinding94,
      parseError: undefined,
      contentLoaded: mermaidDiagramBinding96,
      setParseErrorHandler: mermaidDiagramBinding97,
      detectType: _chunkABZYJK2DF,
      registerIconPacks: chunkJA3XYJ7ZA,
      getRegisteredDiagramsMetadata: chunkAGHRB4JFN(
        () =>
          Object.keys(chunkABZYJK2DP).map((item) => ({
            id: item,
          })),
        "getRegisteredDiagramsMetadata",
      ),
    };
    or = mermaidDiagramBinding103;
  });
function mermaidDiagramHelper10(mermaidDiagramInput67) {
  let mermaidDiagramBinding235 = mermaidDiagramInput67
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && !item.startsWith("%%"));
  if (mermaidDiagramBinding235.length === 0) return null;
  let mermaidDiagramBinding236 = mermaidDiagramBinding235[0].split(/\s+/)[0];
  if (!mermaidDiagramBinding236) return null;
  let mermaidDiagramBinding237 = mermaidDiagramBinding236
    .replace(/[-_]/g, "")
    .toLowerCase();
  return mermaidDiagramBinding105[mermaidDiagramBinding237] ?? null;
}
var mermaidDiagramBinding105,
  mermaidDiagramBinding106 = esmInit(() => {
    mermaidDiagramBinding105 = {
      sequencediagram: "sequence",
      pie: "pie",
      classdiagram: "class",
      statediagram: "state",
      erdiagram: "entityRelationship",
      entityrelationshipdiagram: "entityRelationship",
      journey: "journey",
      userjourney: "journey",
      gitgraph: "gitgraph",
      gitgraphbeta: "gitgraph",
      xychart: "xychart",
      packet: "packet",
      kanban: "kanban",
    };
  });
function mermaidDiagramHelper11(mermaidDiagramInput34) {
  let mermaidDiagramBinding211 = false,
    mermaidDiagramBinding212 = mermaidDiagramInput34.replace(
      mermaidDiagramBinding115,
      (mermaidDiagramInput38) => {
        mermaidDiagramBinding117.test(mermaidDiagramInput38) &&
          (mermaidDiagramBinding211 = true);
        let mermaidDiagramBinding218 = mermaidDiagramInput38.match(
          mermaidDiagramBinding116,
        );
        if (mermaidDiagramBinding218 != null)
          try {
            let mermaidDiagramBinding230 = mermaidDiagramBinding119.safeParse(
                JSON.parse(
                  (mermaidDiagramBinding218[1] ?? "").replaceAll("'", '"'),
                ),
              ),
              mermaidDiagramBinding231 = mermaidDiagramBinding230.success
                ? mermaidDiagramBinding230.data.themeVariables
                    ?.sequenceNumberColor
                : undefined;
            if (mermaidDiagramBinding231 != null)
              return `%%{init: ${JSON.stringify({
                theme: mermaidDiagramBinding111,
                themeVariables: {
                  sequenceNumberColor: mermaidDiagramBinding231,
                },
              })}}%%`;
          } catch {}
        return "";
      },
    );
  if (!mermaidDiagramBinding211)
    return mermaidDiagramBinding212
      .replace(mermaidDiagramBinding118, "")
      .replaceAll("\\n", "<br/>");
}
function mermaidDiagramHelper12(mermaidDiagramInput35, mermaidDiagramInput36) {
  let mermaidDiagramBinding214 = mermaidDiagramHelper18(
      mermaidDiagramInput35,
      mermaidDiagramInput36,
    ),
    mermaidDiagramBinding215 = mermaidDiagramHelper19(mermaidDiagramInput35);
  or.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    suppressErrorRendering: true,
    deterministicIds: true,
    deterministicIDSeed: "codex-mermaid",
    htmlLabels: false,
    flowchart: {
      htmlLabels: false,
    },
    darkMode: mermaidDiagramInput36,
    fontFamily: mermaidDiagramBinding215,
    theme: mermaidDiagramBinding111,
    themeCSS:
      ".edgeLabel .label rect { fill: var(--mermaid-surface-background); opacity: 1; }",
    themeVariables: mermaidDiagramBinding214,
  });
}
export function MermaidDiagram({
  blockRef,
  code,
  isCodeFenceOpen,
  isDark,
  isVisible,
  onError,
  onRendered,
  renderKey,
}: MermaidDiagramProps) {
  let mermaidDiagramBinding122 = useIntl(),
    mermaidDiagramBinding123 = mermaidDiagramBinding107.useRef(null),
    mermaidDiagramBinding124 = mermaidDiagramBinding107.useRef(null),
    mermaidDiagramBinding125 = mermaidDiagramBinding107.useRef(0),
    [mermaidDiagramBinding126, mermaidDiagramBinding127] =
      mermaidDiagramBinding107.useState(null);
  mermaidDiagramBinding126 != null &&
    mermaidDiagramBinding126.renderKey !== renderKey &&
    mermaidDiagramBinding127(null);
  let mermaidDiagramBinding128 = mermaidDiagramBinding107.useId(),
    mermaidDiagramBinding129 = mermaidDiagramBinding107.useMemo(
      () =>
        `mermaid-${mermaidDiagramBinding128.replace(/[^a-zA-Z0-9_-]/g, "")}`,
      [mermaidDiagramBinding128],
    ),
    mermaidDiagramBinding130 = mermaidDiagramBinding107.useMemo(
      () => mermaidDiagramHelper11(code),
      [code],
    ),
    mermaidDiagramBinding131 = mermaidDiagramBinding107.useMemo(
      () =>
        mermaidDiagramBinding130 == null
          ? null
          : mermaidDiagramHelper10(mermaidDiagramBinding130),
      [mermaidDiagramBinding130],
    ),
    mermaidDiagramBinding132 = mermaidDiagramBinding107.useMemo(
      () => ["```mermaid", code, "```"].join("\n"),
      [code],
    ),
    mermaidDiagramBinding133 = mermaidDiagramBinding107.useCallback(
      (mermaidDiagramInput159) => {
        writeClipboardContents(
          mermaidDiagramBinding132,
          mermaidDiagramInput159,
        );
      },
      [mermaidDiagramBinding132],
    ),
    mermaidDiagramBinding134 = mermaidDiagramBinding122.formatMessage({
      id: "mermaidDiagram.ariaLabel",
      defaultMessage: "Mermaid diagram",
      description: "ARIA label for rendered mermaid diagrams",
    }),
    mermaidDiagramBinding135 = mermaidDiagramBinding122.formatMessage({
      id: "mermaidDiagram.expand",
      defaultMessage: "Expand Mermaid diagram",
      description:
        "Accessible label for opening a Mermaid diagram in a zoomable preview",
    }),
    mermaidDiagramBinding136 = (event) => {
      let mermaidDiagramBinding242 =
          mermaidDiagramBinding123.current?.querySelector("svg"),
        mermaidDiagramBinding243 = mermaidDiagramBinding123.current;
      mermaidDiagramBinding242 == null ||
        mermaidDiagramBinding243 == null ||
        ((mermaidDiagramBinding124.current = event.currentTarget),
        mermaidDiagramBinding127({
          renderKey,
          src: mermaidDiagramHelper14(
            mermaidDiagramBinding242,
            mermaidDiagramBinding243,
            isDark,
          ),
        }));
    },
    mermaidDiagramBinding137 = mermaidDiagramBinding107.useEffectEvent(
      (mermaidDiagramInput29) => {
        let mermaidDiagramBinding205 = blockRef.current,
          mermaidDiagramBinding206 = mermaidDiagramBinding123.current;
        if (
          mermaidDiagramBinding205 == null ||
          mermaidDiagramBinding206 == null
        )
          return;
        let mermaidDiagramBinding207 = mermaidDiagramHelper15(
          mermaidDiagramInput29,
        );
        mermaidDiagramInput29.style.height = "auto";
        mermaidDiagramInput29.style.maxWidth = "100%";
        mermaidDiagramInput29.style.maxHeight = "none";
        mermaidDiagramInput29.style.width =
          mermaidDiagramBinding207 == null
            ? "auto"
            : `${mermaidDiagramBinding207}px`;
        mermaidDiagramBinding207 == null
          ? mermaidDiagramBinding205.style.removeProperty(
              mermaidDiagramBinding112,
            )
          : mermaidDiagramBinding205.style.setProperty(
              mermaidDiagramBinding112,
              `${mermaidDiagramBinding207 + _r(mermaidDiagramBinding206)}px`,
            );
        mermaidDiagramBinding206.ownerDocument.defaultView?.requestAnimationFrame?.(
          () => {
            let mermaidDiagramBinding259 =
              mermaidDiagramBinding206.querySelector(":scope > svg");
            mermaidDiagramBinding259 != null &&
              mermaidDiagramHelper17(
                mermaidDiagramBinding205,
                mermaidDiagramBinding206,
                mermaidDiagramBinding259,
              );
          },
        );
      },
    ),
    mermaidDiagramBinding138 = mermaidDiagramBinding107.useEffectEvent(onError),
    mermaidDiagramBinding139 =
      mermaidDiagramBinding107.useEffectEvent(onRendered);
  return (
    mermaidDiagramBinding107.useEffect(() => {
      if (typeof window > "u" || isCodeFenceOpen) return;
      let mermaidDiagramBinding180 = blockRef.current,
        mermaidDiagramBinding181 = mermaidDiagramBinding123.current;
      if (mermaidDiagramBinding180 == null || mermaidDiagramBinding181 == null)
        return;
      if (
        mermaidDiagramBinding130 == null ||
        mermaidDiagramBinding130.length === 0
      ) {
        mermaidDiagramBinding181.replaceChildren();
        mermaidDiagramBinding181.removeAttribute("data-mermaid-diagram");
        mermaidDiagramBinding181.removeAttribute("data-mermaid-theme");
        mermaidDiagramBinding180.removeAttribute(mermaidDiagramBinding113);
        mermaidDiagramBinding180.style.removeProperty(mermaidDiagramBinding112);
        mermaidDiagramBinding138(renderKey);
        return;
      }
      let mermaidDiagramBinding182 = false,
        mermaidDiagramBinding183 = null;
      return (
        (async () => {
          try {
            mermaidDiagramHelper12(mermaidDiagramBinding181, isDark);
            mermaidDiagramBinding125.current += 1;
            let { svg } = await or.render(
              `${mermaidDiagramBinding129}-${mermaidDiagramBinding125.current}`,
              mermaidDiagramBinding130,
            );
            if (mermaidDiagramBinding182) return;
            let mermaidDiagramBinding191 =
              mermaidDiagramBinding181.ownerDocument.createElement("template");
            mermaidDiagramBinding191.innerHTML = svg;
            let mermaidDiagramBinding192 =
              mermaidDiagramBinding191.content.querySelector("svg");
            if (mermaidDiagramBinding192 == null)
              throw Error("Mermaid returned no SVG");
            isDark &&
              mermaidDiagramHelper13(
                mermaidDiagramBinding192,
                mermaidDiagramBinding181,
              );
            mermaidDiagramBinding137(mermaidDiagramBinding192);
            mermaidDiagramBinding181.replaceChildren(mermaidDiagramBinding192);
            mermaidDiagramBinding181.setAttribute(
              "data-mermaid-theme",
              mermaidDiagramBinding111,
            );
            mermaidDiagramBinding131 == null
              ? mermaidDiagramBinding181.removeAttribute("data-mermaid-diagram")
              : mermaidDiagramBinding181.setAttribute(
                  "data-mermaid-diagram",
                  mermaidDiagramBinding131,
                );
            let mermaidDiagramBinding193 = () => {
              mermaidDiagramBinding139(
                renderKey,
                mermaidDiagramBinding181.offsetHeight || 240,
              );
            };
            mermaidDiagramBinding193();
            typeof ResizeObserver < "u" &&
              ((mermaidDiagramBinding183 = new ResizeObserver(() => {
                mermaidDiagramBinding193();
                mermaidDiagramHelper17(
                  mermaidDiagramBinding180,
                  mermaidDiagramBinding181,
                  mermaidDiagramBinding192,
                );
              })),
              mermaidDiagramBinding183.observe(mermaidDiagramBinding181));
          } catch {
            if (mermaidDiagramBinding182) return;
            mermaidDiagramBinding181.replaceChildren();
            mermaidDiagramBinding181.removeAttribute("data-mermaid-diagram");
            mermaidDiagramBinding181.removeAttribute("data-mermaid-theme");
            mermaidDiagramBinding180.removeAttribute(mermaidDiagramBinding113);
            mermaidDiagramBinding180.style.removeProperty(
              mermaidDiagramBinding112,
            );
            mermaidDiagramBinding138(renderKey);
          }
        })(),
        () => {
          mermaidDiagramBinding182 = true;
          mermaidDiagramBinding183?.disconnect();
        }
      );
    }, [
      blockRef,
      mermaidDiagramBinding129,
      mermaidDiagramBinding131,
      isCodeFenceOpen,
      isDark,
      renderKey,
      mermaidDiagramBinding130,
    ]),
    (
      <div
        className="relative"
        data-markdown-copy="code-block"
        data-markdown-copy-text={mermaidDiagramBinding132}
      >
        {isVisible ? (
          <div
            className="absolute top-2 right-2 z-10 flex gap-1"
            data-markdown-copy="exclude"
          >
            {
              <OptionalTooltip
                tooltipContent={mermaidDiagramBinding135}
                delayOpen={true}
              >
                <Button
                  className={MarkdownContentCssClass.mermaidExpandButton}
                  aria-label={mermaidDiagramBinding135}
                  aria-haspopup="dialog"
                  color="ghost"
                  size="icon"
                  onClick={mermaidDiagramBinding136}
                >
                  <PanelWidthIcon className="icon-2xs" />
                </Button>
              </OptionalTooltip>
            }
            {
              <CopyButton
                iconClassName="icon-2xs"
                iconOnly={true}
                buttonText={mermaidDiagramBinding122.formatMessage({
                  id: "mermaidDiagram.copySource",
                  defaultMessage: "Copy mermaid",
                  description:
                    "Tooltip label for the copy button on rendered mermaid diagrams",
                })}
                onCopy={mermaidDiagramBinding133}
              />
            }
          </div>
        ) : null}
        <div
          ref={mermaidDiagramBinding123}
          className={cx(mermaidDiagramBinding109, !isVisible && "invisible")}
          aria-hidden={!isVisible || undefined}
          aria-label={isVisible ? mermaidDiagramBinding134 : undefined}
          role={isVisible ? "img" : undefined}
          tabIndex={-1}
        />
        {mermaidDiagramBinding126?.renderKey === renderKey ? (
          <ImagePreviewDialog
            src={mermaidDiagramBinding126.src}
            alt={mermaidDiagramBinding134}
            open={true}
            closeAriaLabel={mermaidDiagramBinding122.formatMessage({
              id: "mermaidDiagram.closePreview",
              defaultMessage: "Close Mermaid diagram preview",
              description:
                "Accessible label for closing the Mermaid diagram preview",
            })}
            dialogAriaLabel={mermaidDiagramBinding122.formatMessage({
              id: "mermaidDiagram.preview",
              defaultMessage: "Mermaid diagram preview",
              description:
                "Accessible label for the Mermaid diagram preview dialog",
            })}
            downloadAriaLabel={mermaidDiagramBinding122.formatMessage({
              id: "mermaidDiagram.download",
              defaultMessage: "Download Mermaid diagram",
              description:
                "Accessible label for downloading the Mermaid diagram",
            })}
            downloadFileName="mermaid-diagram.svg"
            imageDraggable={false}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              let mermaidDiagramBinding220 = mermaidDiagramBinding124.current;
              if (
                mermaidDiagramBinding220 != null &&
                mermaidDiagramBinding220.isConnected &&
                mermaidDiagramBinding220.ownerDocument.defaultView?.getComputedStyle(
                  mermaidDiagramBinding220,
                ).display !== "none"
              ) {
                mermaidDiagramBinding220.focus();
                return;
              }
              mermaidDiagramBinding123.current?.focus();
            }}
            onOpenChange={(mermaidDiagramInput147) => {
              mermaidDiagramInput147 || mermaidDiagramBinding127(null);
            }}
          />
        ) : null}
        {isVisible ? (
          <>
            <span className="sr-only">
              {
                <MemoizedFormattedMessage
                  id="mermaidDiagram.originalCode"
                  defaultMessage="Mermaid source code"
                  description="Screen reader label for the hidden mermaid source code."
                />
              }
            </span>
            <pre className="sr-only whitespace-pre-wrap">{code}</pre>
          </>
        ) : null}
      </div>
    )
  );
}
function mermaidDiagramHelper13(mermaidDiagramInput17, mermaidDiagramInput18) {
  let mermaidDiagramBinding196 = mermaidDiagramInput17.querySelectorAll(
    '.node > .label-container[style*="fill"], .node > .label-container.outer-path > path[style*="fill"]',
  );
  if (mermaidDiagramBinding196.length === 0) return;
  let mermaidDiagramBinding197 =
    mermaidDiagramInput18.ownerDocument.defaultView?.CSS;
  if (mermaidDiagramBinding197 == null) return;
  let mermaidDiagramBinding198 = mermaidDiagramHelper20(
      mermaidDiagramInput18,
      "var(--color-token-main-surface-primary)",
      $.background,
    ),
    mermaidDiagramBinding199 = mermaidDiagramHelper21(
      mermaidDiagramInput18,
      "var(--color-token-foreground)",
      $.textColor,
    );
  for (let mermaidDiagramBinding217 of mermaidDiagramBinding196) {
    let mermaidDiagramBinding219 =
      mermaidDiagramBinding217.style.getPropertyValue("fill");
    mermaidDiagramBinding197.supports("color", mermaidDiagramBinding219) &&
      (mermaidDiagramBinding219.trim().toLowerCase() !== "transparent" &&
        mermaidDiagramBinding217.style.setProperty(
          "fill",
          `color-mix(in oklab, ${mermaidDiagramBinding219} ${mermaidDiagramBinding110}%, ${mermaidDiagramBinding198})`,
          "important",
        ),
      mermaidDiagramBinding217
        .closest(".node")
        ?.querySelectorAll("text, tspan")
        .forEach((mermaidDiagramInput138) => {
          mermaidDiagramInput138.style.setProperty(
            "fill",
            mermaidDiagramBinding199,
            "important",
          );
        }));
  }
}
function mermaidDiagramHelper14(
  mermaidDiagramInput14,
  mermaidDiagramInput15,
  mermaidDiagramInput16,
) {
  let mermaidDiagramBinding194 = mermaidDiagramInput14.ownerDocument.importNode(
      mermaidDiagramInput14,
      true,
    ),
    mermaidDiagramBinding195 = mermaidDiagramHelper20(
      mermaidDiagramInput15,
      "var(--mermaid-surface-background)",
      mermaidDiagramInput16
        ? $.background
        : mermaidDiagramBinding121.background,
    );
  mermaidDiagramBinding194.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  mermaidDiagramBinding194.style.setProperty(
    "--mermaid-surface-background",
    mermaidDiagramBinding195,
  );
  let { x, y, width, height } = mermaidDiagramInput14.viewBox.baseVal;
  if (width > 0 && height > 0) {
    mermaidDiagramBinding194.setAttribute("width", `${width}`);
    mermaidDiagramBinding194.setAttribute("height", `${height}`);
    mermaidDiagramBinding194.style.width = `${width}px`;
    mermaidDiagramBinding194.style.height = `${height}px`;
    mermaidDiagramBinding194.style.maxWidth = "none";
    mermaidDiagramBinding194.style.maxHeight = "none";
    let mermaidDiagramBinding213 =
      mermaidDiagramInput14.ownerDocument.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect",
      );
    mermaidDiagramBinding213.setAttribute("x", `${x}`);
    mermaidDiagramBinding213.setAttribute("y", `${y}`);
    mermaidDiagramBinding213.setAttribute("width", `${width}`);
    mermaidDiagramBinding213.setAttribute("height", `${height}`);
    mermaidDiagramBinding213.setAttribute("fill", mermaidDiagramBinding195);
    mermaidDiagramBinding194.prepend(mermaidDiagramBinding213);
  }
  return svgToDataUri(mermaidDiagramBinding194.outerHTML);
}
function mermaidDiagramHelper15(mermaidDiagramInput133) {
  let mermaidDiagramBinding264 = mermaidDiagramInput133.viewBox.baseVal.width;
  return mermaidDiagramBinding264 > 0 ? mermaidDiagramBinding264 : null;
}
function _r(mermaidDiagramInput68) {
  let mermaidDiagramBinding239 =
    mermaidDiagramInput68.ownerDocument.defaultView?.getComputedStyle(
      mermaidDiagramInput68,
    );
  return mermaidDiagramBinding239 == null
    ? 0
    : (parseFloat(mermaidDiagramBinding239.borderLeftWidth) || 0) +
        (parseFloat(mermaidDiagramBinding239.borderRightWidth) || 0) +
        (parseFloat(mermaidDiagramBinding239.paddingLeft) || 0) +
        (parseFloat(mermaidDiagramBinding239.paddingRight) || 0);
}
function mermaidDiagramHelper16(mermaidDiagramInput82) {
  let mermaidDiagramBinding244 =
    mermaidDiagramInput82.ownerDocument.defaultView?.getComputedStyle(
      mermaidDiagramInput82,
    );
  if (mermaidDiagramBinding244 == null) return 0;
  let mermaidDiagramBinding245 =
    parseFloat(mermaidDiagramBinding244.width) || 0;
  return mermaidDiagramBinding244.boxSizing === "border-box"
    ? mermaidDiagramBinding245 - _r(mermaidDiagramInput82)
    : mermaidDiagramBinding245;
}
function mermaidDiagramHelper17(
  mermaidDiagramInput120,
  mermaidDiagramInput121,
  mermaidDiagramInput122,
) {
  let mermaidDiagramBinding261 = mermaidDiagramHelper15(mermaidDiagramInput122);
  mermaidDiagramInput120.toggleAttribute(
    mermaidDiagramBinding113,
    mermaidDiagramBinding261 != null &&
      mermaidDiagramBinding261 >
        mermaidDiagramHelper16(mermaidDiagramInput121) +
          mermaidDiagramBinding114,
  );
}
function mermaidDiagramHelper18(mermaidDiagramInput10, mermaidDiagramInput11) {
  let mermaidDiagramBinding167 = mermaidDiagramInput11
      ? $
      : mermaidDiagramBinding121,
    mermaidDiagramBinding168 = mermaidDiagramHelper20(
      mermaidDiagramInput10,
      "var(--color-background-elevated-primary)",
      mermaidDiagramBinding167.primaryColor,
    ),
    mermaidDiagramBinding169 = mermaidDiagramHelper20(
      mermaidDiagramInput10,
      "var(--color-background-elevated-secondary)",
      mermaidDiagramBinding167.secondaryColor,
    ),
    mermaidDiagramBinding170 = mermaidDiagramHelper20(
      mermaidDiagramInput10,
      "var(--color-token-text-code-block-background)",
      mermaidDiagramBinding167.tertiaryColor,
    ),
    mermaidDiagramBinding171 = mermaidDiagramHelper20(
      mermaidDiagramInput10,
      "var(--mermaid-surface-background)",
      mermaidDiagramBinding167.background,
    ),
    mermaidDiagramBinding172 = mermaidDiagramHelper21(
      mermaidDiagramInput10,
      "var(--color-token-foreground)",
      mermaidDiagramBinding167.textColor,
    ),
    mermaidDiagramBinding173 = mermaidDiagramHelper21(
      mermaidDiagramInput10,
      "var(--color-token-description-foreground)",
      mermaidDiagramBinding167.secondaryTextColor,
    ),
    mermaidDiagramBinding174 = mermaidDiagramHelper21(
      mermaidDiagramInput10,
      "var(--color-text-foreground-tertiary)",
      mermaidDiagramBinding167.tertiaryTextColor,
    ),
    mermaidDiagramBinding175 = mermaidDiagramHelper22(
      mermaidDiagramInput10,
      "var(--color-token-input-border)",
      mermaidDiagramBinding167.primaryBorderColor,
    ),
    mermaidDiagramBinding176 = mermaidDiagramHelper21(
      mermaidDiagramInput10,
      "var(--color-token-description-foreground)",
      mermaidDiagramBinding167.lineColor,
    ),
    mermaidDiagramBinding177 = {
      actorBorder: mermaidDiagramBinding176,
      actorBkg: mermaidDiagramBinding168,
      actorLineColor: mermaidDiagramBinding176,
      actorTextColor: mermaidDiagramBinding172,
      activationBkgColor: mermaidDiagramBinding169,
      activationBorderColor: mermaidDiagramBinding176,
      background: mermaidDiagramBinding171,
      clusterBkg: mermaidDiagramBinding169,
      clusterBorder: mermaidDiagramBinding175,
      defaultLinkColor: mermaidDiagramBinding176,
      edgeLabelBackground: mermaidDiagramBinding171,
      labelBackgroundColor: mermaidDiagramBinding171,
      labelBoxBkgColor: mermaidDiagramBinding168,
      labelBoxBorderColor: mermaidDiagramBinding175,
      labelTextColor: mermaidDiagramBinding172,
      lineColor: mermaidDiagramBinding176,
      loopTextColor: mermaidDiagramBinding172,
      mainBkg: mermaidDiagramBinding168,
      nodeBorder: mermaidDiagramBinding175,
      noteBkgColor: mermaidDiagramBinding169,
      noteBorderColor: mermaidDiagramBinding175,
      noteTextColor: mermaidDiagramBinding172,
      primaryBorderColor: mermaidDiagramBinding175,
      primaryColor: mermaidDiagramBinding168,
      primaryTextColor: mermaidDiagramBinding172,
      relationColor: mermaidDiagramBinding176,
      relationLabelBackground: mermaidDiagramBinding171,
      relationLabelColor: mermaidDiagramBinding172,
      secondaryBorderColor: mermaidDiagramBinding175,
      secondaryColor: mermaidDiagramBinding169,
      secondaryTextColor: mermaidDiagramBinding173,
      sequenceNumberColor: mermaidDiagramBinding172,
      signalColor: mermaidDiagramBinding176,
      signalTextColor: mermaidDiagramBinding172,
      tertiaryBorderColor: mermaidDiagramBinding175,
      tertiaryColor: mermaidDiagramBinding170,
      tertiaryTextColor: mermaidDiagramBinding174,
      textColor: mermaidDiagramBinding172,
      titleColor: mermaidDiagramBinding172,
    };
  if (!mermaidDiagramInput11) return mermaidDiagramBinding177;
  let mermaidDiagramBinding178 = mermaidDiagramHelper20(
      mermaidDiagramInput10,
      "var(--color-background-status-error)",
      "#3b1b1d",
    ),
    mermaidDiagramBinding179 = mermaidDiagramHelper22(
      mermaidDiagramInput10,
      "var(--color-border-error)",
      "#b95b64",
    );
  return {
    ...mermaidDiagramBinding177,
    activeTaskBkgColor: mermaidDiagramBinding170,
    activeTaskBorderColor: mermaidDiagramBinding175,
    altSectionBkgColor: mermaidDiagramBinding171,
    attributeBackgroundColorEven: mermaidDiagramBinding169,
    attributeBackgroundColorOdd: mermaidDiagramBinding168,
    branchLabelColor: mermaidDiagramBinding172,
    critBkgColor: mermaidDiagramBinding178,
    critBorderColor: mermaidDiagramBinding179,
    darkMode: true,
    doneTaskBkgColor: mermaidDiagramBinding169,
    doneTaskBorderColor: mermaidDiagramBinding175,
    excludeBkgColor: mermaidDiagramBinding170,
    gridColor: mermaidDiagramBinding175,
    radar: {
      axisColor: mermaidDiagramBinding176,
      graticuleColor: mermaidDiagramBinding175,
    },
    taskTextClickableColor: mermaidDiagramBinding172,
    taskTextColor: mermaidDiagramBinding172,
    taskTextDarkColor: mermaidDiagramBinding172,
    taskTextLightColor: mermaidDiagramBinding172,
    taskTextOutsideColor: mermaidDiagramBinding172,
    todayLineColor: mermaidDiagramBinding179,
    vertLineColor: mermaidDiagramBinding175,
  };
}
function mermaidDiagramHelper19(mermaidDiagramInput66) {
  let mermaidDiagramBinding232 =
    mermaidDiagramInput66.ownerDocument.createElement("div");
  mermaidDiagramBinding232.style.fontFamily = "var(--font-sans)";
  mermaidDiagramBinding232.setAttribute("aria-hidden", "true");
  mermaidDiagramHelper24(mermaidDiagramInput66, mermaidDiagramBinding232);
  let mermaidDiagramBinding233 =
    mermaidDiagramInput66.ownerDocument.defaultView
      ?.getComputedStyle(mermaidDiagramBinding232)
      .fontFamily.trim() ?? "";
  return (
    mermaidDiagramBinding232.remove(),
    mermaidDiagramBinding233.length > 0
      ? mermaidDiagramBinding233
      : mermaidDiagramBinding120
  );
}
function mermaidDiagramHelper20(
  mermaidDiagramInput107,
  mermaidDiagramInput108,
  mermaidDiagramInput109,
) {
  let mermaidDiagramBinding251 =
    mermaidDiagramInput107.ownerDocument.createElement("div");
  return (
    (mermaidDiagramBinding251.style.backgroundColor = mermaidDiagramInput108),
    mermaidDiagramHelper23(
      mermaidDiagramInput107,
      mermaidDiagramBinding251,
      "backgroundColor",
      mermaidDiagramInput109,
    )
  );
}
function mermaidDiagramHelper21(
  mermaidDiagramInput115,
  mermaidDiagramInput116,
  mermaidDiagramInput117,
) {
  let mermaidDiagramBinding257 =
    mermaidDiagramInput115.ownerDocument.createElement("div");
  return (
    (mermaidDiagramBinding257.style.color = mermaidDiagramInput116),
    mermaidDiagramHelper23(
      mermaidDiagramInput115,
      mermaidDiagramBinding257,
      "color",
      mermaidDiagramInput117,
    )
  );
}
function mermaidDiagramHelper22(
  mermaidDiagramInput73,
  mermaidDiagramInput74,
  mermaidDiagramInput75,
) {
  let mermaidDiagramBinding240 =
    mermaidDiagramInput73.ownerDocument.createElement("div");
  return (
    (mermaidDiagramBinding240.style.borderTopStyle = "solid"),
    (mermaidDiagramBinding240.style.borderTopWidth = "1px"),
    (mermaidDiagramBinding240.style.borderTopColor = mermaidDiagramInput74),
    mermaidDiagramHelper23(
      mermaidDiagramInput73,
      mermaidDiagramBinding240,
      "borderTopColor",
      mermaidDiagramInput75,
    )
  );
}
function mermaidDiagramHelper23(
  mermaidDiagramInput92,
  mermaidDiagramInput93,
  mermaidDiagramInput94,
  mermaidDiagramInput95,
) {
  mermaidDiagramHelper24(mermaidDiagramInput92, mermaidDiagramInput93);
  let mermaidDiagramBinding246 =
    mermaidDiagramInput92.ownerDocument.defaultView
      ?.getComputedStyle(mermaidDiagramInput93)
      [mermaidDiagramInput94].trim() ?? "";
  return (
    mermaidDiagramInput93.remove(),
    mermaidDiagramBinding246.length > 0 &&
    !mermaidDiagramBinding246.startsWith("var(")
      ? mermaidDiagramBinding246
      : mermaidDiagramInput95
  );
}
function mermaidDiagramHelper24(mermaidDiagramInput76, mermaidDiagramInput77) {
  mermaidDiagramInput77.style.opacity = "0";
  mermaidDiagramInput77.style.pointerEvents = "none";
  mermaidDiagramInput77.style.position = "absolute";
  mermaidDiagramInput77.style.inset = "0";
  mermaidDiagramInput77.style.width = "0";
  mermaidDiagramInput77.style.height = "0";
  mermaidDiagramInput76.appendChild(mermaidDiagramInput77);
}
var mermaidDiagramBinding107,
  mermaidDiagramBinding108,
  mermaidDiagramBinding109,
  mermaidDiagramBinding110,
  mermaidDiagramBinding111,
  mermaidDiagramBinding112,
  mermaidDiagramBinding113,
  mermaidDiagramBinding114,
  mermaidDiagramBinding115,
  mermaidDiagramBinding116,
  mermaidDiagramBinding117,
  mermaidDiagramBinding118,
  mermaidDiagramBinding119,
  mermaidDiagramBinding120,
  mermaidDiagramBinding121,
  $;
esmInit(() => {
  mermaidDiagramBinding104();
  mermaidDiagramBinding107 = toEsm(react(), 1);
  mermaidDiagramBinding106();
  mermaidDiagramBinding108 = jsxRuntime();
  mermaidDiagramBinding109 =
    "relative overflow-x-auto px-4 py-3 [&>svg]:h-auto [&>svg]:text-left";
  mermaidDiagramBinding110 = 22;
  mermaidDiagramBinding111 = "base";
  mermaidDiagramBinding112 = "--mermaid-natural-block-width";
  mermaidDiagramBinding113 = "data-mermaid-overflow";
  mermaidDiagramBinding114 = 1;
  mermaidDiagramBinding115 = /%%\{[\s\S]*?\}%%/g;
  mermaidDiagramBinding116 =
    /^%%\{\s*(?:init|initialize)\s*:\s*(\{[\s\S]*\})\s*\}%%$/i;
  mermaidDiagramBinding117 = /["']?securityLevel["']?\s*:/i;
  mermaidDiagramBinding118 = /^\s*click\s+.*$/gim;
  mermaidDiagramBinding119 = zodObject({
    theme: zodLiteral(mermaidDiagramBinding111).optional(),
    themeVariables: zodObject({
      sequenceNumberColor: zodString().regex(
        /^#(?:[a-f0-9]{3}|(?:[a-f0-9]{2}){2,4})$/i,
      ),
    })
      .strict()
      .optional(),
  }).strict();
  mermaidDiagramBinding120 =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  mermaidDiagramBinding121 = {
    background: "rgb(255, 255, 255)",
    clusterBkg: "rgba(0, 0, 0, 0.04)",
    lineColor: "rgba(17, 24, 28, 0.7)",
    mainBkg: "rgb(255, 255, 255)",
    noteBkgColor: "rgba(0, 0, 0, 0.04)",
    noteBorderColor: "rgba(17, 24, 28, 0.14)",
    noteTextColor: "rgb(17, 24, 28)",
    primaryBorderColor: "rgba(17, 24, 28, 0.12)",
    primaryColor: "rgb(255, 255, 255)",
    primaryTextColor: "rgb(17, 24, 28)",
    secondaryColor: "rgba(0, 0, 0, 0.04)",
    secondaryTextColor: "rgba(17, 24, 28, 0.7)",
    tertiaryColor: "rgba(0, 0, 0, 0.04)",
    tertiaryTextColor: "rgba(17, 24, 28, 0.55)",
    textColor: "rgb(17, 24, 28)",
  };
  $ = {
    background: "rgb(10, 10, 10)",
    clusterBkg: "rgba(255, 255, 255, 0.06)",
    lineColor: "rgba(255, 255, 255, 0.72)",
    mainBkg: "rgba(255, 255, 255, 0.08)",
    noteBkgColor: "rgba(255, 255, 255, 0.08)",
    noteBorderColor: "rgba(255, 255, 255, 0.18)",
    noteTextColor: "rgb(255, 255, 255)",
    primaryBorderColor: "rgba(255, 255, 255, 0.16)",
    primaryColor: "rgba(255, 255, 255, 0.08)",
    primaryTextColor: "rgb(255, 255, 255)",
    secondaryColor: "rgba(255, 255, 255, 0.04)",
    secondaryTextColor: "rgba(255, 255, 255, 0.72)",
    tertiaryColor: "rgba(255, 255, 255, 0.06)",
    tertiaryTextColor: "rgba(255, 255, 255, 0.6)",
    textColor: "rgb(255, 255, 255)",
  };
})();

/** Bundle public export name. */
export const MermaidDiagramRenderer = MermaidDiagram;
