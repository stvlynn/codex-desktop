// Restored from ref/webview/assets/mermaid.core-CtG2uVQZ.js
// Mermaid core aggregator — diagram registry + lazy loaders. Gmt/Wmt → vite-preload; stylis → vendor shim.
// Stage 3 candidate: auto-renamed export→local; empty vite preload deps.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../../runtime/vite-preload";
import { n as isEmptyN, t as isEmptyT } from "../lodash-is-empty";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import { n as esmN, t as esmT } from "../iconify-utils";
import {
  setLogLevel as chunkAGHRB4JFA,
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  $ as chunkICPOFSXXDollar,
  A as chunkICPOFSXXA,
  B as chunkICPOFSXXB,
  I as chunkICPOFSXXI,
  K as chunkICPOFSXXK,
  N as chunkICPOFSXXN,
  P as chunkICPOFSXXP,
  Q as chunkICPOFSXXQ,
  S as chunkICPOFSXXS,
  T as chunkICPOFSXXT,
  U as chunkICPOFSXXU,
  X as chunkICPOFSXXX,
  Y as chunkICPOFSXXY,
  Z as chunkICPOFSXXZ,
  c as chunkICPOFSXXC,
  f as chunkICPOFSXXF,
  g as chunkICPOFSXXG,
  h as chunkICPOFSXXH,
  l as chunkICPOFSXXL,
  n as _chunkICPOFSXXN,
  p as _chunkICPOFSXXP,
  r as chunkICPOFSXXR,
  t as _chunkICPOFSXXT,
  w as chunkICPOFSXXW,
  x as _chunkICPOFSXXX,
  y as _chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import { selectSvgElement as chunk426QAEUCN, initSelectSvgElementChunk as chunk426QAEUCT } from "../../diagrams/select-svg-element-alt";
import {
  chunk5PVQY5BWA,
  chunk5PVQY5BWF,
  chunk5PVQY5BWG,
  chunk5PVQY5BWH,
  chunk5PVQY5BWI,
  chunk5PVQY5BWR,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import {
  chunkU2HBQHQKI as chunkU2HBQHQKA,
  chunkU2HBQHQKA as chunkU2HBQHQKI,
} from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk as chunkBSJP7CBPR } from "../../diagrams/line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "../../diagrams/subgraph-title-margins-alt";
import { initStyleHelpersChunk as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import {
  chunk336JU56ON,
  chunk336JU56OR,
} from "../../diagrams/mermaid-layout-loaders-alt";
import { initMermaidJsYamlCore as chunkXPW4576IN, yamlLoad as chunkXPW4576IR, yamlCoreSchema as chunkXPW4576IT } from "../../utils/mermaid-js-yaml-core";
import {
  compile as mermaidCoreImport1,
  stringify as mermaidCoreImport2,
  serialize as mermaidCoreImport3,
  ensureStylisRuntime as mermaidCoreImport4,
} from "../../vendor/stylis";
function mermaidCoreHelper1(mermaidCoreInput93, mermaidCoreInput94) {
  mermaidCoreInput93.attr("role", mermaidCoreBinding66);
  mermaidCoreInput94 !== "" &&
    mermaidCoreInput93.attr("aria-roledescription", mermaidCoreInput94);
}
function mermaidCoreHelper2(
  mermaidCoreInput29,
  mermaidCoreInput30,
  mermaidCoreInput31,
  mermaidCoreInput32,
) {
  if (mermaidCoreInput29.insert !== undefined) {
    if (mermaidCoreInput31) {
      let mermaidCoreBinding169 = `chart-desc-${mermaidCoreInput32}`;
      mermaidCoreInput29.attr("aria-describedby", mermaidCoreBinding169);
      mermaidCoreInput29
        .insert("desc", ":first-child")
        .attr("id", mermaidCoreBinding169)
        .text(mermaidCoreInput31);
    }
    if (mermaidCoreInput30) {
      let mermaidCoreBinding168 = `chart-title-${mermaidCoreInput32}`;
      mermaidCoreInput29.attr("aria-labelledby", mermaidCoreBinding168);
      mermaidCoreInput29
        .insert("title", ":first-child")
        .attr("id", mermaidCoreBinding168)
        .text(mermaidCoreInput30);
    }
  }
}
function mermaidCoreHelper3(mermaidCoreInput27) {
  let mermaidCoreBinding152 = mermaidCoreInput27.match(chunkICPOFSXXG);
  if (!mermaidCoreBinding152)
    return {
      text: mermaidCoreInput27,
      metadata: {},
    };
  let mermaidCoreBinding153 =
    chunkXPW4576IR(mermaidCoreBinding152[1], {
      schema: chunkXPW4576IT,
    }) ?? {};
  mermaidCoreBinding153 =
    typeof mermaidCoreBinding153 == "object" &&
    !Array.isArray(mermaidCoreBinding153)
      ? mermaidCoreBinding153
      : {};
  let mermaidCoreBinding154 = {};
  return (
    mermaidCoreBinding153.displayMode &&
      (mermaidCoreBinding154.displayMode =
        mermaidCoreBinding153.displayMode.toString()),
    mermaidCoreBinding153.title &&
      (mermaidCoreBinding154.title = mermaidCoreBinding153.title.toString()),
    mermaidCoreBinding153.config &&
      (mermaidCoreBinding154.config = mermaidCoreBinding153.config),
    {
      text: mermaidCoreInput27.slice(mermaidCoreBinding152[0].length),
      metadata: mermaidCoreBinding154,
    }
  );
}
function mermaidCoreHelper4(mermaidCoreInput79) {
  let mermaidCoreBinding165 = mermaidCoreBinding72(
      mermaidCoreBinding71(mermaidCoreInput79),
    ),
    mermaidCoreBinding166 = mermaidCoreBinding73(mermaidCoreBinding165.text),
    mermaidCoreBinding167 = chunk5PVQY5BWR(
      mermaidCoreBinding165.config,
      mermaidCoreBinding166.directive,
    );
  return (
    (mermaidCoreInput79 = mermaidCoreBinding70(mermaidCoreBinding166.text)),
    {
      code: mermaidCoreInput79,
      title: mermaidCoreBinding165.title,
      config: mermaidCoreBinding167,
    }
  );
}
function mermaidCoreHelper5(mermaidCoreInput86) {
  let mermaidCoreBinding170 = new TextEncoder().encode(mermaidCoreInput86),
    mermaidCoreBinding171 = Array.from(
      mermaidCoreBinding170,
      (mermaidCoreInput127) => String.fromCodePoint(mermaidCoreInput127),
    ).join("");
  return btoa(mermaidCoreBinding171);
}
function mermaidCoreHelper6(mermaidCoreInput102) {
  let mermaidCoreBinding177 = mermaidCoreHelper4(mermaidCoreInput102);
  return (
    chunkICPOFSXXI(),
    _chunkICPOFSXXN(mermaidCoreBinding177.config ?? {}),
    mermaidCoreBinding177
  );
}
async function mermaidCoreHelper7(mermaidCoreInput58, mermaidCoreInput59) {
  mermaidCoreBinding64();
  try {
    let { code, config } = mermaidCoreHelper6(mermaidCoreInput58);
    return {
      diagramType: (await mermaidCoreBinding95(code)).type,
      config,
    };
  } catch (mermaidCoreBinding178) {
    if (mermaidCoreInput59?.suppressErrors) return false;
    throw mermaidCoreBinding178;
  }
}
function mermaidCoreHelper8(mermaidCoreInput80, mermaidCoreInput81) {
  return mermaidCoreInput80
    .append("iframe")
    .attr("id", mermaidCoreInput81)
    .attr("style", "width: 100%; height: 100%;")
    .attr("sandbox", "");
}
function mermaidCoreHelper9(mermaidCoreInput26 = {}) {
  let mermaidCoreBinding151 = chunkICPOFSXXR({}, mermaidCoreInput26);
  mermaidCoreBinding151?.fontFamily &&
    !mermaidCoreBinding151.themeVariables?.fontFamily &&
    ((mermaidCoreBinding151.themeVariables ||= {}),
    (mermaidCoreBinding151.themeVariables.fontFamily =
      mermaidCoreBinding151.fontFamily));
  chunkICPOFSXXB(mermaidCoreBinding151);
  mermaidCoreBinding151?.theme && mermaidCoreBinding151.theme in chunkICPOFSXXX
    ? (mermaidCoreBinding151.themeVariables = chunkICPOFSXXX[
        mermaidCoreBinding151.theme
      ].getThemeVariables(mermaidCoreBinding151.themeVariables))
    : mermaidCoreBinding151 &&
      (mermaidCoreBinding151.themeVariables =
        chunkICPOFSXXX.default.getThemeVariables(
          mermaidCoreBinding151.themeVariables,
        ));
  chunkAGHRB4JFA(
    (typeof mermaidCoreBinding151 == "object"
      ? chunkICPOFSXXK(mermaidCoreBinding151)
      : chunkICPOFSXXT()
    ).logLevel,
  );
  mermaidCoreBinding64();
}
function mermaidCoreHelper10(
  mermaidCoreInput103,
  mermaidCoreInput104,
  mermaidCoreInput105,
  mermaidCoreInput106,
) {
  mermaidCoreHelper1(mermaidCoreInput104, mermaidCoreInput103);
  mermaidCoreHelper2(
    mermaidCoreInput104,
    mermaidCoreInput105,
    mermaidCoreInput106,
    mermaidCoreInput104.attr("id"),
  );
}
var mermaidCoreBinding1,
  mermaidCoreBinding2,
  mermaidCoreBinding3,
  mermaidCoreBinding4,
  mermaidCoreBinding5,
  mermaidCoreBinding6,
  mermaidCoreBinding7,
  mermaidCoreBinding8,
  mermaidCoreBinding9,
  mermaidCoreBinding10,
  mermaidCoreBinding11,
  mermaidCoreBinding12,
  mermaidCoreBinding13,
  mermaidCoreBinding14,
  mermaidCoreBinding15,
  mermaidCoreBinding16,
  mermaidCoreBinding17,
  mermaidCoreBinding18,
  mermaidCoreBinding19,
  $e,
  mermaidCoreBinding20,
  mermaidCoreBinding21,
  mermaidCoreBinding22,
  mermaidCoreBinding23,
  mermaidCoreBinding24,
  mermaidCoreBinding25,
  mermaidCoreBinding26,
  mermaidCoreBinding27,
  mermaidCoreBinding28,
  mermaidCoreBinding29,
  mermaidCoreBinding30,
  at,
  mermaidCoreBinding31,
  mermaidCoreBinding32,
  mermaidCoreBinding33,
  mermaidCoreBinding34,
  mermaidCoreBinding35,
  mermaidCoreBinding36,
  mermaidCoreBinding37,
  mermaidCoreBinding38,
  mermaidCoreBinding39,
  mermaidCoreBinding40,
  mermaidCoreBinding41,
  mermaidCoreBinding42,
  mermaidCoreBinding43,
  _t,
  mermaidCoreBinding44,
  mermaidCoreBinding45,
  mermaidCoreBinding46,
  mermaidCoreBinding47,
  mermaidCoreBinding48,
  mermaidCoreBinding49,
  mermaidCoreBinding50,
  mermaidCoreBinding51,
  mermaidCoreBinding52,
  mermaidCoreBinding53,
  mermaidCoreBinding54,
  mermaidCoreBinding55,
  mermaidCoreBinding56,
  mermaidCoreBinding57,
  mermaidCoreBinding58,
  mermaidCoreBinding59,
  mermaidCoreBinding60,
  mermaidCoreBinding61,
  mermaidCoreBinding62,
  mermaidCoreBinding63,
  mermaidCoreBinding64,
  mermaidCoreBinding65,
  mermaidCoreBinding66,
  mermaidCoreBinding67,
  mermaidCoreBinding68,
  mermaidCoreBinding69,
  mermaidCoreBinding70,
  mermaidCoreBinding71,
  mermaidCoreBinding72,
  mermaidCoreBinding73,
  mermaidCoreBinding74,
  mermaidCoreBinding75,
  mermaidCoreBinding76,
  mermaidCoreBinding77,
  mermaidCoreBinding78,
  mermaidCoreBinding79,
  mermaidCoreBinding80,
  $t,
  mermaidCoreBinding81,
  mermaidCoreBinding82,
  mermaidCoreBinding83,
  mermaidCoreBinding84,
  mermaidCoreBinding85,
  on,
  mermaidCoreBinding86,
  mermaidCoreBinding87,
  mermaidCoreBinding88,
  mermaidCoreBinding89,
  mermaidCoreBinding90,
  mermaidCoreBinding91,
  mermaidCoreBinding92,
  mermaidCoreBinding93,
  mermaidCoreBinding94,
  mermaidCoreBinding95,
  mermaidCoreBinding96,
  _n,
  mermaidCoreBinding97,
  mermaidCoreBinding98,
  mermaidCoreBinding99,
  mermaidCoreBinding100,
  mermaidCoreBinding101,
  mermaidCoreBinding102,
  mermaidCoreBinding103,
  mermaidCoreBinding104,
  mermaidCoreBinding105,
  mermaidCoreBinding106,
  mermaidCoreBinding107,
  mermaidCoreBinding108,
  $,
  MermaidCore;
esmInit(() => {
  chunk426QAEUCT();
  chunkXPW4576IN();
  chunk336JU56ON();
  chunkENJZ2VHEN();
  chunkBSJP7CBPR();
  chunk5FUZZQ4RI();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKI();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  esmN();
  srcT();
  mermaidCoreImport4();
  chunkICPOFSXXQ();
  isEmptyT();
  ensureViteModulepreloadRuntime();
  mermaidCoreBinding1 = "c4";
  mermaidCoreBinding2 = {
    id: mermaidCoreBinding1,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput91) =>
        /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(
          mermaidCoreInput91,
        ),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./c4-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding1,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding3 = "flowchart";
  mermaidCoreBinding4 = {
    id: mermaidCoreBinding3,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput75, mermaidCoreInput76) =>
        mermaidCoreInput76?.flowchart?.defaultRenderer === "dagre-wrapper" ||
        mermaidCoreInput76?.flowchart?.defaultRenderer === "elk"
          ? false
          : /^\s*graph/.test(mermaidCoreInput75),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./flow-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding3,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding5 = "flowchart-v2";
  mermaidCoreBinding6 = {
    id: mermaidCoreBinding5,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput43, mermaidCoreInput44) =>
        mermaidCoreInput44?.flowchart?.defaultRenderer === "dagre-d3"
          ? false
          : (mermaidCoreInput44?.flowchart?.defaultRenderer === "elk" &&
              (mermaidCoreInput44.layout = "elk"),
            /^\s*graph/.test(mermaidCoreInput43) &&
            mermaidCoreInput44?.flowchart?.defaultRenderer === "dagre-wrapper"
              ? true
              : /^\s*flowchart/.test(mermaidCoreInput43)),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./flow-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding5,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding7 = "er";
  mermaidCoreBinding8 = {
    id: mermaidCoreBinding7,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput128) => /^\s*erDiagram/.test(mermaidCoreInput128),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./er-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding7,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding9 = "gitGraph";
  mermaidCoreBinding10 = {
    id: mermaidCoreBinding9,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput130) => /^\s*gitGraph/.test(mermaidCoreInput130),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./git-graph-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding9,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding11 = "gantt";
  mermaidCoreBinding12 = {
    id: mermaidCoreBinding11,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput136) => /^\s*gantt/.test(mermaidCoreInput136),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./gantt-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding11,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding13 = "info";
  mermaidCoreBinding14 = {
    id: mermaidCoreBinding13,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput137) => /^\s*info/.test(mermaidCoreInput137),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/info-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding13,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding15 = "pie";
  mermaidCoreBinding16 = {
    id: mermaidCoreBinding15,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput138) => /^\s*pie/.test(mermaidCoreInput138),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/pie-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding15,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding17 = "quadrantChart";
  mermaidCoreBinding18 = {
    id: mermaidCoreBinding17,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput121) => /^\s*quadrantChart/.test(mermaidCoreInput121),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./quadrant-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding17,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding19 = "xychart";
  $e = {
    id: mermaidCoreBinding19,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput117) => /^\s*xychart(-beta)?/.test(mermaidCoreInput117),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./xychart-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding19,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding20 = "requirement";
  mermaidCoreBinding21 = {
    id: mermaidCoreBinding20,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput114) =>
        /^\s*requirement(Diagram)?/.test(mermaidCoreInput114),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./requirement-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding20,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding22 = "sequence";
  mermaidCoreBinding23 = {
    id: mermaidCoreBinding22,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput118) => /^\s*sequenceDiagram/.test(mermaidCoreInput118),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./sequence-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding22,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding24 = "class";
  mermaidCoreBinding25 = {
    id: mermaidCoreBinding24,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput87, mermaidCoreInput88) =>
        mermaidCoreInput88?.class?.defaultRenderer === "dagre-wrapper"
          ? false
          : /^\s*classDiagram/.test(mermaidCoreInput87),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/class-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding24,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding26 = "classDiagram";
  mermaidCoreBinding27 = {
    id: mermaidCoreBinding26,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput77, mermaidCoreInput78) =>
        /^\s*classDiagram/.test(mermaidCoreInput77) &&
        mermaidCoreInput78?.class?.defaultRenderer === "dagre-wrapper"
          ? true
          : /^\s*classDiagram-v2/.test(mermaidCoreInput77),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/class-diagram-v2-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding26,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding28 = "state";
  mermaidCoreBinding29 = {
    id: mermaidCoreBinding28,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput89, mermaidCoreInput90) =>
        mermaidCoreInput90?.state?.defaultRenderer === "dagre-wrapper"
          ? false
          : /^\s*stateDiagram/.test(mermaidCoreInput89),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./state-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding28,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding30 = "stateDiagram";
  at = {
    id: mermaidCoreBinding30,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput62, mermaidCoreInput63) =>
        !!(
          /^\s*stateDiagram-v2/.test(mermaidCoreInput62) ||
          (/^\s*stateDiagram/.test(mermaidCoreInput62) &&
            mermaidCoreInput63?.state?.defaultRenderer === "dagre-wrapper")
        ),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/state-diagram-v2-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding30,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding31 = "journey";
  mermaidCoreBinding32 = {
    id: mermaidCoreBinding31,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput132) => /^\s*journey/.test(mermaidCoreInput132),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./journey-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding31,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding33 = {
    draw: chunkAGHRB4JFN(
      (mermaidCoreInput4, mermaidCoreInput5, mermaidCoreInput6) => {
        chunkAGHRB4JFI.debug("rendering svg for syntax error\n");
        let mermaidCoreBinding109 = chunk426QAEUCN(mermaidCoreInput5),
          mermaidCoreBinding110 = mermaidCoreBinding109.append("g");
        mermaidCoreBinding109.attr("viewBox", "0 0 2412 512");
        chunkICPOFSXXC(mermaidCoreBinding109, 100, 512, true);
        mermaidCoreBinding110
          .append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z",
          );
        mermaidCoreBinding110
          .append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z",
          );
        mermaidCoreBinding110
          .append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z",
          );
        mermaidCoreBinding110
          .append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z",
          );
        mermaidCoreBinding110
          .append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z",
          );
        mermaidCoreBinding110
          .append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z",
          );
        mermaidCoreBinding110
          .append("text")
          .attr("class", "error-text")
          .attr("x", 1440)
          .attr("y", 250)
          .attr("font-size", "150px")
          .style("text-anchor", "middle")
          .text("Syntax error in text");
        mermaidCoreBinding110
          .append("text")
          .attr("class", "error-text")
          .attr("x", 1250)
          .attr("y", 400)
          .attr("font-size", "100px")
          .style("text-anchor", "middle")
          .text(`mermaid version ${mermaidCoreInput6}`);
      },
      "draw",
    ),
  };
  mermaidCoreBinding34 = mermaidCoreBinding33;
  mermaidCoreBinding35 = {
    db: {},
    renderer: mermaidCoreBinding33,
    parser: {
      parse: chunkAGHRB4JFN(() => {}, "parse"),
    },
  };
  mermaidCoreBinding36 = "flowchart-elk";
  mermaidCoreBinding37 = {
    id: mermaidCoreBinding36,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput60, mermaidCoreInput61 = {}) =>
        /^\s*flowchart-elk/.test(mermaidCoreInput60) ||
        (/^\s*(flowchart|graph)/.test(mermaidCoreInput60) &&
          mermaidCoreInput61?.flowchart?.defaultRenderer === "elk")
          ? ((mermaidCoreInput61.layout = "elk"), true)
          : false,
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./flow-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding36,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding38 = "timeline";
  mermaidCoreBinding39 = {
    id: mermaidCoreBinding38,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput131) => /^\s*timeline/.test(mermaidCoreInput131),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./timeline-definition-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding38,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding40 = "mindmap";
  mermaidCoreBinding41 = {
    id: mermaidCoreBinding40,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput133) => /^\s*mindmap/.test(mermaidCoreInput133),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./mindmap-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding40,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding42 = "kanban";
  mermaidCoreBinding43 = {
    id: mermaidCoreBinding42,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput135) => /^\s*kanban/.test(mermaidCoreInput135),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./kanban-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding42,
        diagram,
      };
    }, "loader"),
  };
  _t = "sankey";
  mermaidCoreBinding44 = {
    id: _t,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput119) => /^\s*sankey(-beta)?/.test(mermaidCoreInput119),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./sankey-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: _t,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding45 = "packet";
  mermaidCoreBinding46 = {
    id: mermaidCoreBinding45,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput120) => /^\s*packet(-beta)?/.test(mermaidCoreInput120),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/packet-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding45,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding47 = "radar";
  mermaidCoreBinding48 = {
    id: mermaidCoreBinding47,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput126) => /^\s*radar-beta/.test(mermaidCoreInput126),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/radar-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding47,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding49 = "block";
  mermaidCoreBinding50 = {
    id: mermaidCoreBinding49,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput122) => /^\s*block(-beta)?/.test(mermaidCoreInput122),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./block-diagram-alt");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding49,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding51 = "treeView";
  mermaidCoreBinding52 = {
    id: mermaidCoreBinding51,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput123) => /^\s*treeView-beta/.test(mermaidCoreInput123),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/tree-view-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding51,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding53 = "architecture";
  mermaidCoreBinding54 = {
    id: mermaidCoreBinding53,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput125) => /^\s*architecture/.test(mermaidCoreInput125),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./architecture-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding53,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding55 = "ishikawa";
  mermaidCoreBinding56 = {
    id: mermaidCoreBinding55,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput116) =>
        /^\s*ishikawa(-beta)?\b/i.test(mermaidCoreInput116),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./ishikawa-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding55,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding57 = "venn";
  mermaidCoreBinding58 = {
    id: mermaidCoreBinding57,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput129) => /^\s*venn-beta/.test(mermaidCoreInput129),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./venn-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding57,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding59 = "treemap";
  mermaidCoreBinding60 = {
    id: mermaidCoreBinding59,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput134) => /^\s*treemap/.test(mermaidCoreInput134),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } =
            await import("../../diagrams/treemap-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding59,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding61 = "wardley-beta";
  mermaidCoreBinding62 = {
    id: mermaidCoreBinding61,
    detector: chunkAGHRB4JFN(
      (mermaidCoreInput124) => /^\s*wardley-beta/i.test(mermaidCoreInput124),
      "detector",
    ),
    loader: chunkAGHRB4JFN(async () => {
      let { diagram } = await vitePreload(
        async () => {
          let { diagram: _diagram } = await import("./wardley-diagram");
          return {
            diagram: _diagram,
          };
        },
        [],
        import.meta.url,
      );
      return {
        id: mermaidCoreBinding61,
        diagram,
      };
    }, "loader"),
  };
  mermaidCoreBinding63 = false;
  mermaidCoreBinding64 = chunkAGHRB4JFN(() => {
    mermaidCoreBinding63 ||
      ((mermaidCoreBinding63 = true),
      chunkICPOFSXXN(
        "error",
        mermaidCoreBinding35,
        (mermaidCoreInput115) =>
          mermaidCoreInput115.toLowerCase().trim() === "error",
      ),
      chunkICPOFSXXN(
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
        (mermaidCoreInput111) =>
          mermaidCoreInput111.toLowerCase().trimStart().startsWith("---"),
      ),
      chunkICPOFSXXP(
        mermaidCoreBinding37,
        mermaidCoreBinding41,
        mermaidCoreBinding54,
      ),
      chunkICPOFSXXP(
        mermaidCoreBinding2,
        mermaidCoreBinding43,
        mermaidCoreBinding27,
        mermaidCoreBinding25,
        mermaidCoreBinding8,
        mermaidCoreBinding12,
        mermaidCoreBinding14,
        mermaidCoreBinding16,
        mermaidCoreBinding21,
        mermaidCoreBinding23,
        mermaidCoreBinding6,
        mermaidCoreBinding4,
        mermaidCoreBinding39,
        mermaidCoreBinding10,
        at,
        mermaidCoreBinding29,
        mermaidCoreBinding32,
        mermaidCoreBinding18,
        mermaidCoreBinding44,
        mermaidCoreBinding46,
        $e,
        mermaidCoreBinding50,
        mermaidCoreBinding52,
        mermaidCoreBinding48,
        mermaidCoreBinding56,
        mermaidCoreBinding60,
        mermaidCoreBinding58,
        mermaidCoreBinding62,
      ));
  }, "addDiagrams");
  mermaidCoreBinding65 = chunkAGHRB4JFN(async () => {
    chunkAGHRB4JFI.debug("Loading registered diagrams");
    let mermaidCoreBinding141 = (
      await Promise.allSettled(
        Object.entries(_chunkICPOFSXXP).map(
          async ([
            mermaidCoreInput14,
            { detector: mermaidCoreInput15, loader: mermaidCoreInput16 },
          ]) => {
            if (mermaidCoreInput16)
              try {
                _chunkICPOFSXXX(mermaidCoreInput14);
              } catch {
                try {
                  let { diagram, id } = await mermaidCoreInput16();
                  chunkICPOFSXXN(id, diagram, mermaidCoreInput15);
                } catch (mermaidCoreBinding161) {
                  throw (
                    chunkAGHRB4JFI.error(
                      `Failed to load external diagram with key ${mermaidCoreInput14}. Removing from detectors.`,
                    ),
                    delete _chunkICPOFSXXP[mermaidCoreInput14],
                    mermaidCoreBinding161
                  );
                }
              }
          },
        ),
      )
    ).filter((item) => item.status === "rejected");
    if (mermaidCoreBinding141.length > 0) {
      chunkAGHRB4JFI.error(
        `Failed to load ${mermaidCoreBinding141.length} external diagrams`,
      );
      for (let mermaidCoreBinding180 of mermaidCoreBinding141)
        chunkAGHRB4JFI.error(mermaidCoreBinding180);
      throw Error(
        `Failed to load ${mermaidCoreBinding141.length} external diagrams`,
      );
    }
  }, "loadRegisteredDiagrams");
  mermaidCoreBinding66 = "graphics-document document";
  chunkAGHRB4JFN(mermaidCoreHelper1, "setA11yDiagramInfo");
  chunkAGHRB4JFN(mermaidCoreHelper2, "addSVGa11yTitleDescription");
  mermaidCoreBinding67 = class MermaidCoreClass1 {
    constructor(
      mermaidCoreInput70,
      mermaidCoreInput71,
      mermaidCoreInput72,
      mermaidCoreInput73,
      mermaidCoreInput74,
    ) {
      this.type = mermaidCoreInput70;
      this.text = mermaidCoreInput71;
      this.db = mermaidCoreInput72;
      this.parser = mermaidCoreInput73;
      this.renderer = mermaidCoreInput74;
    }
    static {
      chunkAGHRB4JFN(this, "Diagram");
    }
    static async fromText(mermaidCoreInput12, mermaidCoreInput13 = {}) {
      let mermaidCoreBinding146 = _chunkICPOFSXXY(),
        mermaidCoreBinding147 = chunkICPOFSXXF(
          mermaidCoreInput12,
          mermaidCoreBinding146,
        );
      mermaidCoreInput12 = chunk5PVQY5BWA(mermaidCoreInput12) + "\n";
      try {
        _chunkICPOFSXXX(mermaidCoreBinding147);
      } catch {
        let mermaidCoreBinding164 = chunkICPOFSXXS(mermaidCoreBinding147);
        if (!mermaidCoreBinding164)
          throw new _chunkICPOFSXXT(
            `Diagram ${mermaidCoreBinding147} not found.`,
          );
        let { id, diagram } = await mermaidCoreBinding164();
        chunkICPOFSXXN(id, diagram);
      }
      let { db, parser, renderer, init } = _chunkICPOFSXXX(
        mermaidCoreBinding147,
      );
      return (
        parser.parser && (parser.parser.yy = db),
        db.clear?.(),
        init?.(mermaidCoreBinding146),
        mermaidCoreInput13.title &&
          db.setDiagramTitle?.(mermaidCoreInput13.title),
        await parser.parse(mermaidCoreInput12),
        new MermaidCoreClass1(
          mermaidCoreBinding147,
          mermaidCoreInput12,
          db,
          parser,
          renderer,
        )
      );
    }
    async render(mermaidCoreInput95, mermaidCoreInput96) {
      await this.renderer.draw(
        this.text,
        mermaidCoreInput95,
        mermaidCoreInput96,
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
  mermaidCoreBinding68 = [];
  mermaidCoreBinding69 = chunkAGHRB4JFN(() => {
    mermaidCoreBinding68.forEach((item) => {
      item();
    });
    mermaidCoreBinding68 = [];
  }, "attachFunctions");
  mermaidCoreBinding70 = chunkAGHRB4JFN(
    (mermaidCoreInput110) =>
      mermaidCoreInput110.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(),
    "cleanupComments",
  );
  chunkAGHRB4JFN(mermaidCoreHelper3, "extractFrontMatter");
  mermaidCoreBinding71 = chunkAGHRB4JFN(
    (mermaidCoreInput57) =>
      mermaidCoreInput57
        .replace(/\r\n?/g, "\n")
        .replace(
          /<(\w+)([^>]*)>/g,
          (mermaidCoreInput107, mermaidCoreInput108, mermaidCoreInput109) =>
            "<" +
            mermaidCoreInput108 +
            mermaidCoreInput109.replace(/="([^"]*)"/g, "='$1'") +
            ">",
        ),
    "cleanupText",
  );
  mermaidCoreBinding72 = chunkAGHRB4JFN((mermaidCoreInput56) => {
    let { text, metadata } = mermaidCoreHelper3(mermaidCoreInput56),
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
  mermaidCoreBinding73 = chunkAGHRB4JFN((mermaidCoreInput53) => {
    let mermaidCoreBinding159 =
        chunk5PVQY5BWG.detectInit(mermaidCoreInput53) ?? {},
      mermaidCoreBinding160 = chunk5PVQY5BWG.detectDirective(
        mermaidCoreInput53,
        "wrap",
      );
    return (
      Array.isArray(mermaidCoreBinding160)
        ? (mermaidCoreBinding159.wrap = mermaidCoreBinding160.some(
            ({ type }) => type === "wrap",
          ))
        : mermaidCoreBinding160?.type === "wrap" &&
          (mermaidCoreBinding159.wrap = true),
      {
        text: chunk5PVQY5BWH(mermaidCoreInput53),
        directive: mermaidCoreBinding159,
      }
    );
  }, "processDirectives");
  chunkAGHRB4JFN(mermaidCoreHelper4, "preprocessDiagram");
  chunkAGHRB4JFN(mermaidCoreHelper5, "toBase64");
  mermaidCoreBinding74 = 5e4;
  mermaidCoreBinding75 =
    "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
  mermaidCoreBinding76 = "sandbox";
  mermaidCoreBinding77 = "loose";
  mermaidCoreBinding78 = "http://www.w3.org/2000/svg";
  mermaidCoreBinding79 = "http://www.w3.org/1999/xlink";
  mermaidCoreBinding80 = "http://www.w3.org/1999/xhtml";
  $t = "100%";
  mermaidCoreBinding81 = "100%";
  mermaidCoreBinding82 = "border:0;margin:0;";
  mermaidCoreBinding83 = "margin:0";
  mermaidCoreBinding84 = "allow-top-navigation-by-user-activation allow-popups";
  mermaidCoreBinding85 = 'The "iframe" tag is not supported by your browser.';
  on = ["foreignobject"];
  mermaidCoreBinding86 = ["dominant-baseline"];
  chunkAGHRB4JFN(mermaidCoreHelper6, "processAndSetConfigs");
  chunkAGHRB4JFN(mermaidCoreHelper7, "parse");
  mermaidCoreBinding87 = chunkAGHRB4JFN(
    (mermaidCoreInput99, mermaidCoreInput100, mermaidCoreInput101 = []) => `
.${mermaidCoreInput99} ${mermaidCoreInput100} { ${mermaidCoreInput101.join(" !important; ")} !important; }`,
    "cssImportantStyles",
  );
  mermaidCoreBinding88 = chunkAGHRB4JFN(
    (mermaidCoreInput10, mermaidCoreInput11 = new Map()) => {
      let mermaidCoreBinding142 = "";
      if (
        (mermaidCoreInput10.themeCSS !== undefined &&
          (mermaidCoreBinding142 += `
${mermaidCoreInput10.themeCSS}`),
        mermaidCoreInput10.fontFamily !== undefined &&
          (mermaidCoreBinding142 += `
:root { --mermaid-font-family: ${mermaidCoreInput10.fontFamily}}`),
        mermaidCoreInput10.altFontFamily !== undefined &&
          (mermaidCoreBinding142 += `
:root { --mermaid-alt-font-family: ${mermaidCoreInput10.altFontFamily}}`),
        mermaidCoreInput11 instanceof Map)
      ) {
        let mermaidCoreBinding150 = chunkICPOFSXXW(mermaidCoreInput10)
          ? ["> *", "span"]
          : ["rect", "polygon", "ellipse", "circle", "path"];
        mermaidCoreInput11.forEach((item) => {
          isEmptyN(item.styles) ||
            mermaidCoreBinding150.forEach((_item) => {
              mermaidCoreBinding142 += mermaidCoreBinding87(
                item.id,
                _item,
                item.styles,
              );
            });
          isEmptyN(item.textStyles) ||
            (mermaidCoreBinding142 += mermaidCoreBinding87(
              item.id,
              "tspan",
              (item?.textStyles || []).map((_item) =>
                _item.replace("color", "fill"),
              ),
            ));
        });
      }
      return mermaidCoreBinding142;
    },
    "createCssStyles",
  );
  mermaidCoreBinding89 = chunkAGHRB4JFN(
    (
      mermaidCoreInput64,
      mermaidCoreInput65,
      mermaidCoreInput66,
      mermaidCoreInput67,
    ) =>
      mermaidCoreImport3(
        mermaidCoreImport1(
          `${mermaidCoreInput67}{${chunkICPOFSXXY(
            mermaidCoreInput65,
            mermaidCoreBinding88(mermaidCoreInput64, mermaidCoreInput66),
            {
              ...mermaidCoreInput64.themeVariables,
              theme: mermaidCoreInput64.theme,
              look: mermaidCoreInput64.look,
            },
            mermaidCoreInput67,
          )}}`,
        ),
        mermaidCoreImport2,
      ),
    "createUserStyles",
  );
  mermaidCoreBinding90 = chunkAGHRB4JFN(
    (mermaidCoreInput45 = "", mermaidCoreInput46, mermaidCoreInput47) => {
      let mermaidCoreBinding156 = mermaidCoreInput45;
      return (
        !mermaidCoreInput47 &&
          !mermaidCoreInput46 &&
          (mermaidCoreBinding156 = mermaidCoreBinding156.replace(
            /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
            'marker-end="url(#',
          )),
        (mermaidCoreBinding156 = chunk5PVQY5BWI(mermaidCoreBinding156)),
        (mermaidCoreBinding156 = mermaidCoreBinding156.replace(
          /<br>/g,
          "<br/>",
        )),
        mermaidCoreBinding156
      );
    },
    "cleanUpSvgCode",
  );
  mermaidCoreBinding91 = chunkAGHRB4JFN(
    (
      mermaidCoreInput54 = "",
      mermaidCoreInput55,
    ) => `<iframe style="width:${$t};height:${mermaidCoreInput55?.viewBox?.baseVal?.height ? mermaidCoreInput55.viewBox.baseVal.height + "px" : mermaidCoreBinding81};${mermaidCoreBinding82}" src="data:text/html;charset=UTF-8;base64,${mermaidCoreHelper5(`<body style="${mermaidCoreBinding83}">${mermaidCoreInput54}</body>`)}" sandbox="${mermaidCoreBinding84}">
  ${mermaidCoreBinding85}
</iframe>`,
    "putIntoIFrame",
  );
  mermaidCoreBinding92 = chunkAGHRB4JFN(
    (
      mermaidCoreInput48,
      mermaidCoreInput49,
      mermaidCoreInput50,
      mermaidCoreInput51,
      mermaidCoreInput52,
    ) => {
      let mermaidCoreBinding157 = mermaidCoreInput48.append("div");
      mermaidCoreBinding157.attr("id", mermaidCoreInput50);
      mermaidCoreInput51 &&
        mermaidCoreBinding157.attr("style", mermaidCoreInput51);
      let mermaidCoreBinding158 = mermaidCoreBinding157
        .append("svg")
        .attr("id", mermaidCoreInput49)
        .attr("width", "100%")
        .attr("xmlns", mermaidCoreBinding78);
      return (
        mermaidCoreInput52 &&
          mermaidCoreBinding158.attr("xmlns:xlink", mermaidCoreInput52),
        mermaidCoreBinding158.append("g"),
        mermaidCoreInput48
      );
    },
    "appendDivSvgG",
  );
  chunkAGHRB4JFN(mermaidCoreHelper8, "sandboxedIframe");
  mermaidCoreBinding93 = chunkAGHRB4JFN(
    (
      mermaidCoreInput82,
      mermaidCoreInput83,
      mermaidCoreInput84,
      mermaidCoreInput85,
    ) => {
      mermaidCoreInput82.getElementById(mermaidCoreInput83)?.remove();
      mermaidCoreInput82.getElementById(mermaidCoreInput84)?.remove();
      mermaidCoreInput82.getElementById(mermaidCoreInput85)?.remove();
    },
    "removeExistingElements",
  );
  mermaidCoreBinding94 = chunkAGHRB4JFN(async function (
    mermaidCoreInput7,
    mermaidCoreInput8,
    mermaidCoreInput9,
  ) {
    mermaidCoreBinding64();
    let mermaidCoreBinding111 = mermaidCoreHelper6(mermaidCoreInput8);
    mermaidCoreInput8 = mermaidCoreBinding111.code;
    let mermaidCoreBinding112 = _chunkICPOFSXXY();
    chunkAGHRB4JFI.debug(mermaidCoreBinding112);
    mermaidCoreInput8.length >
      (mermaidCoreBinding112?.maxTextSize ?? mermaidCoreBinding74) &&
      (mermaidCoreInput8 = mermaidCoreBinding75);
    let mermaidCoreBinding113 = "#" + mermaidCoreInput7,
      mermaidCoreBinding114 = "i" + mermaidCoreInput7,
      mermaidCoreBinding115 = "#" + mermaidCoreBinding114,
      mermaidCoreBinding116 = "d" + mermaidCoreInput7,
      mermaidCoreBinding117 = "#" + mermaidCoreBinding116,
      mermaidCoreBinding118 = chunkAGHRB4JFN(() => {
        let mermaidCoreBinding173 = srcR(
          mermaidCoreBinding120 ? mermaidCoreBinding115 : mermaidCoreBinding117,
        ).node();
        mermaidCoreBinding173 &&
          "remove" in mermaidCoreBinding173 &&
          mermaidCoreBinding173.remove();
      }, "removeTempElements"),
      mermaidCoreBinding119 = srcR("body"),
      mermaidCoreBinding120 =
        mermaidCoreBinding112.securityLevel === mermaidCoreBinding76,
      mermaidCoreBinding121 =
        mermaidCoreBinding112.securityLevel === mermaidCoreBinding77,
      mermaidCoreBinding122 = mermaidCoreBinding112.fontFamily;
    mermaidCoreInput9 === undefined
      ? (mermaidCoreBinding93(
          document,
          mermaidCoreInput7,
          mermaidCoreBinding116,
          mermaidCoreBinding114,
        ),
        mermaidCoreBinding120
          ? ((mermaidCoreBinding119 = srcR(
              mermaidCoreHelper8(srcR("body"), mermaidCoreBinding114).nodes()[0]
                .contentDocument.body,
            )),
            (mermaidCoreBinding119.node().style.margin = 0))
          : (mermaidCoreBinding119 = srcR("body")),
        mermaidCoreBinding92(
          mermaidCoreBinding119,
          mermaidCoreInput7,
          mermaidCoreBinding116,
        ))
      : (mermaidCoreInput9 && (mermaidCoreInput9.innerHTML = ""),
        mermaidCoreBinding120
          ? ((mermaidCoreBinding119 = srcR(
              mermaidCoreHelper8(
                srcR(mermaidCoreInput9),
                mermaidCoreBinding114,
              ).nodes()[0].contentDocument.body,
            )),
            (mermaidCoreBinding119.node().style.margin = 0))
          : (mermaidCoreBinding119 = srcR(mermaidCoreInput9)),
        mermaidCoreBinding92(
          mermaidCoreBinding119,
          mermaidCoreInput7,
          mermaidCoreBinding116,
          `font-family: ${mermaidCoreBinding122}`,
          mermaidCoreBinding79,
        ));
    let mermaidCoreBinding123, mermaidCoreBinding124;
    try {
      mermaidCoreBinding123 = await mermaidCoreBinding67.fromText(
        mermaidCoreInput8,
        {
          title: mermaidCoreBinding111.title,
        },
      );
    } catch (mermaidCoreBinding172) {
      if (mermaidCoreBinding112.suppressErrorRendering)
        throw (mermaidCoreBinding118(), mermaidCoreBinding172);
      mermaidCoreBinding123 = await mermaidCoreBinding67.fromText("error");
      mermaidCoreBinding124 = mermaidCoreBinding172;
    }
    let mermaidCoreBinding125 = mermaidCoreBinding119
        .select(mermaidCoreBinding117)
        .node(),
      mermaidCoreBinding126 = mermaidCoreBinding123.type,
      mermaidCoreBinding127 = mermaidCoreBinding125.firstChild,
      mermaidCoreBinding128 = mermaidCoreBinding127.firstChild,
      mermaidCoreBinding129 = mermaidCoreBinding123.renderer.getClasses?.(
        mermaidCoreInput8,
        mermaidCoreBinding123,
      ),
      mermaidCoreBinding130 = mermaidCoreBinding89(
        mermaidCoreBinding112,
        mermaidCoreBinding126,
        mermaidCoreBinding129,
        mermaidCoreBinding113,
      ),
      mermaidCoreBinding131 = document.createElement("style");
    mermaidCoreBinding131.innerHTML = mermaidCoreBinding130;
    mermaidCoreBinding127.insertBefore(
      mermaidCoreBinding131,
      mermaidCoreBinding128,
    );
    try {
      await mermaidCoreBinding123.renderer.draw(
        mermaidCoreInput8,
        mermaidCoreInput7,
        "11.14.0",
        mermaidCoreBinding123,
      );
    } catch (mermaidCoreBinding174) {
      throw (
        mermaidCoreBinding112.suppressErrorRendering
          ? mermaidCoreBinding118()
          : mermaidCoreBinding34.draw(
              mermaidCoreInput8,
              mermaidCoreInput7,
              "11.14.0",
            ),
        mermaidCoreBinding174
      );
    }
    let mermaidCoreBinding132 = mermaidCoreBinding119.select(
        `${mermaidCoreBinding117} svg`,
      ),
      mermaidCoreBinding133 = mermaidCoreBinding123.db.getAccTitle?.(),
      mermaidCoreBinding134 = mermaidCoreBinding123.db.getAccDescription?.();
    mermaidCoreHelper10(
      mermaidCoreBinding126,
      mermaidCoreBinding132,
      mermaidCoreBinding133,
      mermaidCoreBinding134,
    );
    mermaidCoreBinding119
      .select(`[id="${mermaidCoreInput7}"]`)
      .selectAll("foreignobject > *")
      .attr("xmlns", mermaidCoreBinding80);
    let mermaidCoreBinding135 = mermaidCoreBinding119
      .select(mermaidCoreBinding117)
      .node().innerHTML;
    if (
      (chunkAGHRB4JFI.debug(
        "config.arrowMarkerAbsolute",
        mermaidCoreBinding112.arrowMarkerAbsolute,
      ),
      (mermaidCoreBinding135 = mermaidCoreBinding90(
        mermaidCoreBinding135,
        mermaidCoreBinding120,
        chunkICPOFSXXH(mermaidCoreBinding112.arrowMarkerAbsolute),
      )),
      mermaidCoreBinding120)
    ) {
      let mermaidCoreBinding175 = mermaidCoreBinding119
        .select(mermaidCoreBinding117 + " svg")
        .node();
      mermaidCoreBinding135 = mermaidCoreBinding91(
        mermaidCoreBinding135,
        mermaidCoreBinding175,
      );
    } else
      mermaidCoreBinding121 ||
        (mermaidCoreBinding135 = chunkICPOFSXXDollar.sanitize(
          mermaidCoreBinding135,
          {
            ADD_TAGS: on,
            ADD_ATTR: mermaidCoreBinding86,
            HTML_INTEGRATION_POINTS: {
              foreignobject: true,
            },
          },
        ));
    if ((mermaidCoreBinding69(), mermaidCoreBinding124))
      throw mermaidCoreBinding124;
    return (
      mermaidCoreBinding118(),
      {
        diagramType: mermaidCoreBinding126,
        svg: mermaidCoreBinding135,
        bindFunctions: mermaidCoreBinding123.db.bindFunctions,
      }
    );
  }, "render");
  chunkAGHRB4JFN(mermaidCoreHelper9, "initialize");
  mermaidCoreBinding95 = chunkAGHRB4JFN(
    (mermaidCoreInput97, mermaidCoreInput98 = {}) => {
      let { code } = mermaidCoreHelper4(mermaidCoreInput97);
      return mermaidCoreBinding67.fromText(code, mermaidCoreInput98);
    },
    "getDiagramFromText",
  );
  chunkAGHRB4JFN(mermaidCoreHelper10, "addA11yInfo");
  mermaidCoreBinding96 = Object.freeze({
    render: mermaidCoreBinding94,
    parse: mermaidCoreHelper7,
    getDiagramFromText: mermaidCoreBinding95,
    initialize: mermaidCoreHelper9,
    getConfig: _chunkICPOFSXXY,
    setConfig: chunkICPOFSXXU,
    getSiteConfig: chunkICPOFSXXT,
    updateSiteConfig: chunkICPOFSXXZ,
    reset: chunkAGHRB4JFN(() => {
      chunkICPOFSXXI();
    }, "reset"),
    globalReset: chunkAGHRB4JFN(() => {
      chunkICPOFSXXI(chunkICPOFSXXL);
    }, "globalReset"),
    defaultConfig: chunkICPOFSXXL,
  });
  chunkAGHRB4JFA(_chunkICPOFSXXY().logLevel);
  chunkICPOFSXXI(_chunkICPOFSXXY());
  _n = chunkAGHRB4JFN(
    (mermaidCoreInput37, mermaidCoreInput38, mermaidCoreInput39) => {
      chunkAGHRB4JFI.warn(mermaidCoreInput37);
      chunk5PVQY5BWF(mermaidCoreInput37)
        ? (mermaidCoreInput39 &&
            mermaidCoreInput39(mermaidCoreInput37.str, mermaidCoreInput37.hash),
          mermaidCoreInput38.push({
            ...mermaidCoreInput37,
            message: mermaidCoreInput37.str,
            error: mermaidCoreInput37,
          }))
        : (mermaidCoreInput39 && mermaidCoreInput39(mermaidCoreInput37),
          mermaidCoreInput37 instanceof Error &&
            mermaidCoreInput38.push({
              str: mermaidCoreInput37.message,
              message: mermaidCoreInput37.message,
              hash: mermaidCoreInput37.name,
              error: mermaidCoreInput37,
            }));
    },
    "handleError",
  );
  mermaidCoreBinding97 = chunkAGHRB4JFN(async function (
    mermaidCoreInput28 = {
      querySelector: ".mermaid",
    },
  ) {
    try {
      await mermaidCoreBinding98(mermaidCoreInput28);
    } catch (mermaidCoreBinding162) {
      if (
        (chunk5PVQY5BWF(mermaidCoreBinding162) &&
          chunkAGHRB4JFI.error(mermaidCoreBinding162.str),
        $.parseError && $.parseError(mermaidCoreBinding162),
        !mermaidCoreInput28.suppressErrors)
      )
        throw (
          chunkAGHRB4JFI.error(
            "Use the suppressErrors option to suppress these errors",
          ),
          mermaidCoreBinding162
        );
    }
  }, "run");
  mermaidCoreBinding98 = chunkAGHRB4JFN(async function (
    { postRenderCallback, querySelector, nodes } = {
      querySelector: ".mermaid",
    },
  ) {
    let mermaidCoreBinding136 = mermaidCoreBinding96.getConfig();
    chunkAGHRB4JFI.debug(
      `${postRenderCallback ? "" : "No "}Callback function found`,
    );
    let mermaidCoreBinding137;
    if (nodes) mermaidCoreBinding137 = nodes;
    else if (querySelector)
      mermaidCoreBinding137 = document.querySelectorAll(querySelector);
    else throw Error("Nodes and querySelector are both undefined");
    chunkAGHRB4JFI.debug(`Found ${mermaidCoreBinding137.length} diagrams`);
    mermaidCoreBinding136?.startOnLoad !== undefined &&
      (chunkAGHRB4JFI.debug(
        "Start On Load: " + mermaidCoreBinding136?.startOnLoad,
      ),
      mermaidCoreBinding96.updateSiteConfig({
        startOnLoad: mermaidCoreBinding136?.startOnLoad,
      }));
    let mermaidCoreBinding138 = new chunk5PVQY5BWG.InitIDGenerator(
        mermaidCoreBinding136.deterministicIds,
        mermaidCoreBinding136.deterministicIDSeed,
      ),
      mermaidCoreBinding139,
      mermaidCoreBinding140 = [];
    for (let mermaidCoreBinding143 of Array.from(mermaidCoreBinding137)) {
      if (
        (chunkAGHRB4JFI.info("Rendering diagram: " + mermaidCoreBinding143.id),
        mermaidCoreBinding143.getAttribute("data-processed"))
      )
        continue;
      mermaidCoreBinding143.setAttribute("data-processed", "true");
      let mermaidCoreBinding144 = `mermaid-${mermaidCoreBinding138.next()}`;
      mermaidCoreBinding139 = mermaidCoreBinding143.innerHTML;
      mermaidCoreBinding139 = esmT(
        chunk5PVQY5BWG.entityDecode(mermaidCoreBinding139),
      )
        .trim()
        .replace(/<br\s*\/?>/gi, "<br/>");
      let mermaidCoreBinding145 = chunk5PVQY5BWG.detectInit(
        mermaidCoreBinding139,
      );
      mermaidCoreBinding145 &&
        chunkAGHRB4JFI.debug("Detected early reinit: ", mermaidCoreBinding145);
      try {
        let { svg, bindFunctions } = await mermaidCoreBinding108(
          mermaidCoreBinding144,
          mermaidCoreBinding139,
          mermaidCoreBinding143,
        );
        mermaidCoreBinding143.innerHTML = svg;
        postRenderCallback && (await postRenderCallback(mermaidCoreBinding144));
        bindFunctions && bindFunctions(mermaidCoreBinding143);
      } catch (mermaidCoreBinding179) {
        _n(mermaidCoreBinding179, mermaidCoreBinding140, $.parseError);
      }
    }
    if (mermaidCoreBinding140.length > 0) throw mermaidCoreBinding140[0];
  }, "runThrowsErrors");
  mermaidCoreBinding99 = chunkAGHRB4JFN(function (mermaidCoreInput113) {
    mermaidCoreBinding96.initialize(mermaidCoreInput113);
  }, "initialize");
  mermaidCoreBinding100 = chunkAGHRB4JFN(async function (
    mermaidCoreInput40,
    mermaidCoreInput41,
    mermaidCoreInput42,
  ) {
    chunkAGHRB4JFI.warn("mermaid.init is deprecated. Please use run instead.");
    mermaidCoreInput40 && mermaidCoreBinding99(mermaidCoreInput40);
    let mermaidCoreBinding155 = {
      postRenderCallback: mermaidCoreInput42,
      querySelector: ".mermaid",
    };
    typeof mermaidCoreInput41 == "string"
      ? (mermaidCoreBinding155.querySelector = mermaidCoreInput41)
      : mermaidCoreInput41 &&
        (mermaidCoreInput41 instanceof HTMLElement
          ? (mermaidCoreBinding155.nodes = [mermaidCoreInput41])
          : (mermaidCoreBinding155.nodes = mermaidCoreInput41));
    await mermaidCoreBinding97(mermaidCoreBinding155);
  }, "init");
  mermaidCoreBinding101 = chunkAGHRB4JFN(
    async (mermaidCoreInput92, { lazyLoad = true } = {}) => {
      mermaidCoreBinding64();
      chunkICPOFSXXP(...mermaidCoreInput92);
      lazyLoad === false && (await mermaidCoreBinding65());
    },
    "registerExternalDiagrams",
  );
  mermaidCoreBinding102 = chunkAGHRB4JFN(function () {
    if ($.startOnLoad) {
      let { startOnLoad } = mermaidCoreBinding96.getConfig();
      startOnLoad &&
        $.run().catch((error) =>
          chunkAGHRB4JFI.error("Mermaid failed to initialize", error),
        );
    }
  }, "contentLoaded");
  typeof document < "u" &&
    window.addEventListener("load", mermaidCoreBinding102, false);
  mermaidCoreBinding103 = chunkAGHRB4JFN(function (mermaidCoreInput112) {
    $.parseError = mermaidCoreInput112;
  }, "setParseErrorHandler");
  mermaidCoreBinding104 = [];
  mermaidCoreBinding105 = false;
  mermaidCoreBinding106 = chunkAGHRB4JFN(async () => {
    if (!mermaidCoreBinding105) {
      for (mermaidCoreBinding105 = true; mermaidCoreBinding104.length > 0; ) {
        let mermaidCoreBinding163 = mermaidCoreBinding104.shift();
        if (mermaidCoreBinding163)
          try {
            await mermaidCoreBinding163();
          } catch (mermaidCoreBinding176) {
            chunkAGHRB4JFI.error(
              "Error executing queue",
              mermaidCoreBinding176,
            );
          }
      }
      mermaidCoreBinding105 = false;
    }
  }, "executeQueue");
  mermaidCoreBinding107 = chunkAGHRB4JFN(
    async (mermaidCoreInput20, mermaidCoreInput21) =>
      new Promise((mermaidCoreInput24, mermaidCoreInput25) => {
        let mermaidCoreBinding149 = chunkAGHRB4JFN(
          () =>
            new Promise((mermaidCoreInput35, mermaidCoreInput36) => {
              mermaidCoreBinding96
                .parse(mermaidCoreInput20, mermaidCoreInput21)
                .then(
                  (value) => {
                    mermaidCoreInput35(value);
                    mermaidCoreInput24(value);
                  },
                  (mermaidCoreInput68) => {
                    chunkAGHRB4JFI.error("Error parsing", mermaidCoreInput68);
                    $.parseError?.(mermaidCoreInput68);
                    mermaidCoreInput36(mermaidCoreInput68);
                    mermaidCoreInput25(mermaidCoreInput68);
                  },
                );
            }),
          "performCall",
        );
        mermaidCoreBinding104.push(mermaidCoreBinding149);
        mermaidCoreBinding106().catch(mermaidCoreInput25);
      }),
    "parse",
  );
  mermaidCoreBinding108 = chunkAGHRB4JFN(
    (mermaidCoreInput17, mermaidCoreInput18, mermaidCoreInput19) =>
      new Promise((mermaidCoreInput22, mermaidCoreInput23) => {
        let mermaidCoreBinding148 = chunkAGHRB4JFN(
          () =>
            new Promise((mermaidCoreInput33, mermaidCoreInput34) => {
              mermaidCoreBinding96
                .render(
                  mermaidCoreInput17,
                  mermaidCoreInput18,
                  mermaidCoreInput19,
                )
                .then(
                  (value) => {
                    mermaidCoreInput33(value);
                    mermaidCoreInput22(value);
                  },
                  (mermaidCoreInput69) => {
                    chunkAGHRB4JFI.error("Error parsing", mermaidCoreInput69);
                    $.parseError?.(mermaidCoreInput69);
                    mermaidCoreInput34(mermaidCoreInput69);
                    mermaidCoreInput23(mermaidCoreInput69);
                  },
                );
            }),
          "performCall",
        );
        mermaidCoreBinding104.push(mermaidCoreBinding148);
        mermaidCoreBinding106().catch(mermaidCoreInput23);
      }),
    "render",
  );
  $ = {
    startOnLoad: true,
    mermaidAPI: mermaidCoreBinding96,
    parse: mermaidCoreBinding107,
    render: mermaidCoreBinding108,
    init: mermaidCoreBinding100,
    run: mermaidCoreBinding97,
    registerExternalDiagrams: mermaidCoreBinding101,
    registerLayoutLoaders: chunk336JU56OR,
    initialize: mermaidCoreBinding99,
    parseError: undefined,
    contentLoaded: mermaidCoreBinding102,
    setParseErrorHandler: mermaidCoreBinding103,
    detectType: chunkICPOFSXXF,
    registerIconPacks: chunkU2HBQHQKA,
    getRegisteredDiagramsMetadata: chunkAGHRB4JFN(
      () =>
        Object.keys(_chunkICPOFSXXP).map((item) => ({
          id: item,
        })),
      "getRegisteredDiagramsMetadata",
    ),
  };
  MermaidCore = $;
})();
export { MermaidCore as default };
