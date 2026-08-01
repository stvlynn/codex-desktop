// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: mermaid→elements convert + bbox helpers (legacy DIe/PIe/NIe).
// Stage-3 wave-149.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../../runtime/vite-preload";
import {
  ensureMermaidSlideAdaptersInit,
  getConvertTreeView,
  getIsTreeViewSource,
  getMermaidSlidePlugins,
} from "../mermaid-slide-adapters";
import { wIe } from "../presentation-plugin-add";

const appInitialGmt = ensureViteModulepreloadRuntime;
const appInitialWmt = vitePreload;

const lIe = ensureMermaidSlideAdaptersInit;
const CIe = ensureMermaidSlideAdaptersInit;
const SIe = (...args: any[]) => {
  ensureMermaidSlideAdaptersInit();
  return getConvertTreeView()(...args);
};
const _Ie = (src: any) => {
  ensureMermaidSlideAdaptersInit();
  return getIsTreeViewSource()(src);
};
const P$: any = new Proxy([] as any[], {
  get(_target, prop) {
    ensureMermaidSlideAdaptersInit();
    const arr = getMermaidSlidePlugins();
    const value = (arr as any)[prop];
    return typeof value === "function" ? value.bind(arr) : value;
  },
});

export let G$: any;

export let EIe = (props: any) => {
  if (!props.bbox) return;
  let mcBind16948 = Number(props.bbox.xEmu ?? 0),
    mcBind16949 = Number(props.bbox.yEmu ?? 0),
    mcBind16950 = Number(props.bbox.widthEmu ?? 0),
    mcBind16951 = Number(props.bbox.heightEmu ?? 0);
  return {
    minX: mcBind16948,
    minY: mcBind16949,
    maxX: mcBind16948 + mcBind16950,
    maxY: mcBind16949 + mcBind16951,
  };
};

export let H$ = (mcIn3864: any) => {
  let mcBind12702;
  return (
    mcIn3864.forEach((item) => {
      let mcBind14276 = EIe(item);
      if (mcBind14276) {
        if (!mcBind12702) {
          mcBind12702 = {
            ...mcBind14276,
          };
          return;
        }
        mcBind12702.minX = Math.min(mcBind12702.minX, mcBind14276.minX);
        mcBind12702.minY = Math.min(mcBind12702.minY, mcBind14276.minY);
        mcBind12702.maxX = Math.max(mcBind12702.maxX, mcBind14276.maxX);
        mcBind12702.maxY = Math.max(mcBind12702.maxY, mcBind14276.maxY);
      }
    }),
    mcBind12702
  );
};

export let U$ = (mcIn7158: any) =>
  mcIn7158
    ? {
        xEmu: mcIn7158.minX,
        yEmu: mcIn7158.minY,
        widthEmu: mcIn7158.maxX - mcIn7158.minX,
        heightEmu: mcIn7158.maxY - mcIn7158.minY,
      }
    : {
        xEmu: 0,
        yEmu: 0,
        widthEmu: 0,
        heightEmu: 0,
      };

export let W$ = false;

export let K$ = false;

export let OIe = "/node_modules/mermaid/";

export let q$ = "dompurify/dist/purify.es.mjs";

export let kIe = (mcIn4651: any) => {
  let mcBind13911 = new URL(mcIn4651);
  if (mcBind13911.protocol !== "file:") return;
  let mcBind13912 = mcBind13911.href.lastIndexOf(OIe);
  if (mcBind13912 < 0) return;
  let mcBind13913 = new URL(mcBind13911.href.slice(0, mcBind13912 + 14)),
    mcBind13914 = new URL(q$, mcBind13913);
  if (
    !(
      !mcBind13914.href.startsWith(mcBind13913.href) ||
      !mcBind13914.pathname.endsWith(`/node_modules/${q$}`)
    )
  )
    return mcBind13914.href;
};

export let AIe = async () => {
  if (K$) return;
  K$ = true;
  let mcBind10518 = import.meta.resolve;
  if (typeof mcBind10518 == "function")
    try {
      let mcBind12309 = mcBind10518("mermaid"),
        mcBind12310 = kIe(mcBind12309);
      if (!mcBind12310) return;
      let mcBind12311 = (
        await appInitialWmt(() => import(mcBind12310), [], import.meta.url)
      ).default;
      if (!mcBind12311) return;
      typeof mcBind12311.sanitize != "function" &&
        (mcBind12311.sanitize = (mcIn16673) => mcIn16673);
      typeof mcBind12311.addHook != "function" &&
        (mcBind12311.addHook = () => {});
      typeof mcBind12311.removeHook != "function" &&
        (mcBind12311.removeHook = () => {});
      typeof mcBind12311.setConfig != "function" &&
        (mcBind12311.setConfig = () => {});
    } catch {}
};

export let jIe = async () =>
  G$ ||
  ((G$ = (
    await appInitialWmt(
      () => import("../../workbook/lazy-mermaid-core"),
      [] /* vite mapDeps stripped */,
      import.meta.url,
    )
  ).default),
  G$);

export let MIe = async () => {
  if (W$ && G$) return G$;
  let mcBind7151 = globalThis;
  mcBind7151.injected ||= {
    includeLargeFeatures: true,
    version: "c-star",
  };
  let mcBind7152 = mcBind7151.document ?? {};
  mcBind7152.nodeType = mcBind7152.nodeType ?? 9;
  mcBind7152.getElementById =
    mcBind7152.getElementById ??
    (() => ({
      innerHTML: "{}",
    }));
  mcBind7152.createElement =
    mcBind7152.createElement ??
    (() => ({
      getContext: () => null,
    }));
  mcBind7152.createElementNS =
    mcBind7152.createElementNS ??
    (() => ({
      getContext: () => null,
    }));
  mcBind7151.document = mcBind7152;
  let mcBind7153 = mcBind7151.window ?? globalThis;
  mcBind7151.window = mcBind7153;
  mcBind7151.Element ||= class {};
  mcBind7153.document = mcBind7152;
  mcBind7153.Element = mcBind7153.Element ?? mcBind7151.Element;
  mcBind7153.addEventListener = mcBind7153.addEventListener ?? (() => {});
  mcBind7151.addEventListener = mcBind7151.addEventListener ?? (() => {});
  let mcBind7154 = await jIe();
  return (
    await AIe(),
    mcBind7154.mermaidAPI.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      flowchart: {
        htmlLabels: false,
      },
    }),
    (W$ = true),
    mcBind7154
  );
};

export let J$ = (mcIn1275: any) => {
  let mcBind6915 = mcIn1275.replace(/\r\n?/g, "\n").split("\n"),
    mcBind6916 = 0,
    mcBind6917 = () => {
      for (; mcBind6916 < mcBind6915.length; ) {
        let mcBind21478 = mcBind6915[mcBind6916]?.trim() ?? "";
        if (((mcBind6916 += 1), mcBind21478.length > 0)) return mcBind21478;
      }
    },
    mcBind6918 = mcBind6917();
  if (!mcBind6918) return;
  if (mcBind6918 === "---") {
    for (; mcBind6916 < mcBind6915.length; ) {
      let mcBind21799 = mcBind6915[mcBind6916]?.trim() ?? "";
      if (((mcBind6916 += 1), mcBind21799 === "---")) break;
    }
    let mcBind18579 = mcBind6917();
    return mcBind18579 ? J$(mcBind18579) : undefined;
  }
  if (mcBind6918.startsWith("%%")) {
    let mcBind22550 = mcBind6917();
    return mcBind22550 ? J$(mcBind22550) : undefined;
  }
  let mcBind6919 = mcBind6918.trimStart().split(/\s+/)[0]?.trim() ?? "";
  if (mcBind6919)
    switch (mcBind6919) {
      case "pie":
      case "quadrantChart":
      case "timeline":
      case "gantt":
      case "sankey":
      case "xychart":
      case "treemap":
      case "radar":
        return mcBind6919;
      case "packet":
      case "packet-beta":
        return "packet";
      default:
        return;
    }
};

export let NIe = async (mcIn732: any, mcIn733: any = {}) => {
  let mcBind5160 = wIe(mcIn732),
    mcBind5161 = [],
    mcBind5162 = (mcIn14047) => {
      mcBind5161.push(mcIn14047);
      mcIn733.warn?.(mcIn14047);
    };
  if (
    mcIn733.diagramType === "treeView" ||
    mcIn733.diagramType === "treeView-beta" ||
    _Ie(mcBind5160)
  ) {
    let mcBind17893 = SIe(mcBind5160),
      mcBind17894 = mcBind17893.elements;
    return {
      elements: mcBind17894,
      bboxEmu: U$(H$(mcBind17894)),
      meta: {
        diagramType: "treeView",
        idMap: mcBind17893.idMap,
        warnings: mcBind5161,
      },
    };
  }
  let mcBind5163 = await MIe(),
    mcBind5164 = mcIn733.diagramType ?? J$(mcBind5160);
  if (
    mcBind5164 &&
    [
      "pie",
      "quadrantChart",
      "timeline",
      "gantt",
      "sankey",
      "xychart",
      "treemap",
      "radar",
      "packet",
    ].includes(mcBind5164)
  ) {
    let mcBind12611 = P$.find((item) => item.id === "chart-like");
    if (!mcBind12611) throw Error("Chart-like plugin is not registered.");
    await mcBind5163.mermaidAPI.parse(mcBind5160);
    let mcBind12612 =
        await mcBind5163.mermaidAPI.getDiagramFromText(mcBind5160),
      mcBind12613 = await mcBind12611.convert(mcBind12612, {
        options: mcIn733,
        warn: mcBind5162,
      }),
      mcBind12614 = mcBind12613.elements;
    return {
      elements: mcBind12614,
      bboxEmu: U$(H$(mcBind12614)),
      meta: {
        diagramType: mcBind12612.type,
        idMap: mcBind12613.idMap,
        warnings: mcBind5161,
      },
    };
  }
  await mcBind5163.mermaidAPI.parse(mcBind5160);
  let mcBind5165 = await mcBind5163.mermaidAPI.getDiagramFromText(mcBind5160),
    mcBind5166 = mcIn733.diagramType ?? mcBind5165.type,
    mcBind5167 = P$.find((item) => item.supports(mcBind5166));
  if (!mcBind5167)
    throw Error(`No plugin found for diagram type ${mcBind5166}`);
  let mcBind5168 = await mcBind5167.convert(mcBind5165, {
      options: mcIn733,
      warn: mcBind5162,
    }),
    mcBind5169 = mcBind5168.elements;
  return {
    elements: mcBind5169,
    bboxEmu: U$(H$(mcBind5169)),
    meta: {
      diagramType: mcBind5165.type,
      idMap: mcBind5168.idMap,
      warnings: mcBind5161,
    },
  };
};

export const DIe = esmInit(() => {});
export const TIe = esmInit(() => {});

export const PIe = esmInit(() => {
  lIe();
  CIe();
  TIe();
  DIe();
  appInitialGmt();
});

export const FIe = esmInit(() => {
  PIe();
  TIe();
});

export function ensureMermaidConvertInit(): void {
  FIe();
}

export async function mermaidToElements(
  ...args: Parameters<typeof NIe>
): Promise<ReturnType<typeof NIe>> {
  FIe();
  return NIe(...args);
}
