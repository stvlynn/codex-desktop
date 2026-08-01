import { CJe, AJe } from "../../workbook/presentation-presence";

// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Flat boundary facade — vendored oversized workbook runtime module.
// Intentional oversized vendor-runtime terminal (openBoundary).
// Stage-3 wave-160: slim top chart/compose/html-paste wires (20) → direct imports; openBoundary kept.
// Stage-3 wave-161: slim remaining ≥5 LOC wires (49) → direct imports; leave-behind consts via getters; defineProperties cleanup; openBoundary kept.
// Stage-3 wave-162: relocate setFormulaImplBag → formula-impl-bag; trim bag-only imports; drop no-op empty wires; openBoundary kept.
// Stage-3 wave-163: retire remaining ≤4 LOC wires (31) → direct imports; drop defineProperties leave-behinds; prune dead mega imports; openBoundary kept.
// Not stock npm (Codex popcorn workbook engine). Exit: Stage-3 split into workbook/.
// Stage-3 waves: shape-geometry; theme-color; presentation-theme (Mae/Sle); fill; stylesheet; line; color-resolve; text-style; placeholder-style + font-metrics; style-resolve + glyph-advance; math-plain-text; math-ml; font-stack; math-layout; document-style/effects; placeholder-resolve; text-layout; canvas-fill; fill-resolve; text-canvas; text-box; design-tokens; ssf-npm; jstat+bessel-npm; yjs-npm; three-npm; highlightjs-npm; zod-npm; presentation-recipes; compose-layout; workbook-core; worksheet-drawings; drawing-layout+sparklines; mermaid-slide-adapters; decimal-npm; canvas-paint (BYe); chart-elements (The/Ohe…ige); formula-stats (Binding1831/1874); mermaid-slide-helpers (Binding1592/SAe…QAe); table-styles (Nme/Ume/ahe); google-slides-adapter (oJe/pJe/SJe); compose-dsl (Binding1490–1528); graphlib+dagre-npm (Binding1671/wNe); image-connector (Binding723–735); chart-asset (She/Che…Binding721); table-vo (fhe/yhe/xhe); charts-collection (CEe/REe/Binding1299/workbookC); mermaid-flowchart ($Ne/Binding1675/OPe/Binding1685/NPe/PPe); deck-kinds (wRe/qRe/Binding1738–1748); shape-element (Binding736/739); slides-collection (_workbookY/_workbookV); constraint-solver (bDe/Binding1364+prelude1350–1363); formula-opcodes (Z_t/X_t); table-element (_workbookH/eDe…cDe/_workbookM); table-row-range (YEe/Binding1321/QEe/$Ee); formula-registry ($dt/Xdt/Zdt); presentation-slide (Z$/X$/cLe/sLe); JEe table-cell reunite; TXe/wXe worksheets; chart-paint (helper579–585); doc-op-apply (Zht/_gt); three-chart-paint (helper521/Qbe/$be); unit-convert (N1e); named-ranges (zXe/RXe); styles-yjs (kgt/Ogt); chart-legend (helper491/lbe); shape-path (helper605–607); html-table-export (Wpt/Gpt/Kpt); chart-jsx-lower (dke/helper722/_ke); compose-jsx-lower (vke/helper745/Cke); chart-axis-ticks (helper462); shape-geometry-paint (helper616); table-frame-layout (workbookA); slide-canvas-render (vEe); chart-bar-direction (Dbe); chart-bar-series (helper501); chart-radar (Txe); chart-plot-layout (Xxe); chart-category-axes (Tbe); chart-scatter-series (nCe); chart-histogram-axes (gCe); chart-data-table (helper561); chart-scatter-axes (helper570); three-chart-camera (rxe); chart-trendline (helper525); chart-scatter-scale (helper540); paint-images (Fwe); constraint-layout (ODe/kDe); selection-style-grid (Upt); chart-data-labels (helper500); chart-legend-plot (jxe/wSe); chart-category-axis-labels (Nxe…Lxe); chart-box-whisker (ECe/OCe/jCe); chart-line-series (helper528); chart-group-scales (helper423); shape-path-endpoints (Vwe); table-cell-paint (STe); text-frame-embeds (helper643); slide-image-paint ($Te); chart-legend-layout (helper490); chart-area-series (helper529); chart-histogram-bars (sCe); chart-surface-map (Kye); compose-inline-text (NOe); chart-waterfall-bar (dCe); chart-pie-series (helper496); chart-bubble-series (aCe); sparkline-paint (YCe); icon-set-symbols (helper594); formula-irr (F0e); html-paste (wmt); formula-ast-remap (helper1022); chart-pie-labels (fbe); chart-treemap-plot-layout (Cbe); chart-histogram-bins (helper555); chart-funnel-segments (helper576); sheet-hidden-boundaries (ewe); slide-background-paint (RTe); formula-matrix-inverse (Alt); chart-axis-auto-domain (bye); chart-bar-series/computeBarSegments (helper421); three-chart-paint/paintPie3d (txe); chart-line-series/stackLineLayers (axe); chart-combo-groups (yxe); chart-funnel-segments/paintFunnelBars (vCe); shape-path-densify (dTe); compose-element-snapshot (helper678); formula-yearfrac (helper884); chart-scatter-axes/planScatterAxes (helper545); chart-legend-plot/reserveTitleBand (uSe); chart-series-values (helper551); icon-set-paint (uwe); table-cell-paint/layoutTableColumns ($B); compose-jsx-lower/lowerPanelSurfaceTag (JOe); formula-irr/computeXirr (Z0e); formula-ast-remap/exprContainsLambda (helper1008); html-paste/Dmt+Jpt; sparkline-paint/XCe+ZCe; canvas-paint/fillCellBackground (helper600); shape-path-densify/trimPathStart (uTe); slide-canvas-render/paintSlideText (nEe); chart-treemap-tiles (Yye); floating-placement (jTe); presentation-code-block (cAe/vAe); canvas-paint/paintCharts (zCe/BCe/VCe); table-styles/helper384; chart-card-paint (ASe); compose-element-snapshot/helper685; formula-dep-scc (VXe); formula-criteria-match (helper896); formula-irr/RATE (W0e); formula-matrix-det (klt); html-paste/Tmt+Emt; formula-ast-remap/Bht; wave-107: chart-trendline/helper524; chart-scatter-scale/helper539; chart-histogram-bins/_Se; chart-pie-series/qSe; chart-waterfall-bar/pCe; shape-path/Rwe+cTe; shape-path-densify/mTe; table-cell-paint/bTe+xTe; slide-canvas-render/dEe-cluster; presentation-theme/VDe; formula-dep-scc/WXe; formula-growth/pQe; formula-securities/k0e+H0e. wave-108: chart-legend-layout/ibe+abe; chart-legend-plot/helper458; chart-combo-groups/helper532; worksheet-used-range/UTe; formula-datedif/helper876; formula-complex/helper893+$4; formula-financial/E0e+D0e; conditional-format/oht+Nht+Pht. wave-109: compose-jsx-lower/helper713; formula-match/DZe; chart-stacked-domain/helper389; chart-line-series/helper480; chart-sunburst-layout/BSe; element-text-layout/XDe+helper676; chart-data-labels/helper495; shape-element/hze; shape-path/NSe. wave-110: formula-criteria-predicate/I8e+F8e; compose-element-snapshot/iOe; compose-jsx-lower/QOe; formula-financial/T0e+O0e+P0e; shape-path/tTe; formula-unique/Ost. wave-111: table-bands/fye+dye+386; axis-title/460; ube+dbe; Zbe+519; err-bars/527; lSe; card/562; fCe; pTe; bAe. wave-112: table-bands/fye+dye+386; helper546; helper440-cluster; swe/Swe; Lwe+647/648. wave-113: scales/388+391+403; axis/433+438+RCe; treemap/475+PSe; series/hxe+Cxe+cxe+Oxe; UCe+JCe; FPe; Qwe-stroke. wave-114: hbe+489+Wye; _xe+530/531; 601; 626; BTe; sbe; 439/478 SSF; 559. wave-115: MOe/XOe/YOe+Binding154-inline; PDe/BDe/vOe+693; dead CSe; 695/696. wave-116: yye/593/ROe+704–711/LIe+RIe/BXe+$Xe+836–853/xlsx-Tpt+Apt+kpt (ict false mid-file). wave-117: presentation-edit lLe..bLe + html-paste Ypt..1013/Qpt + chart-raster Amt..Zmt. wave-118: grid-frame-layout helper672+ADe+jDe + formula-sort-filter helper967. wave-119: formula-criteria-lookup helper976..Rut + formula-text-split vdt..Jdt + cf-icon-color-scale Fht/Iht..Ict (Tct/Pct/wct). wave-120: formula-call-dispatch (eft/Tft/Nft) + formula-range-index (Uft/Gft) + formula-structured-ref (qft/tpt) + cf Rht. wave-121: formula-scalar-funcs (854..days360/qQe/z$e) + formula-bond-basis (oat/sat/Kat/955..961). wave-122: formula-financial annuity (897..Q0e/w0e/fv/pmt) + formula-bond-basis lat/uat/dat/fat + formula-average-a ($3/Q2e/l4e/_4e). wave-123: shape-style-apply fze..vze + formula-dsum-criteria P8e/j8e + formula-averageif g4e + apt/ppt/mpt + jht + Lst + bSe. wave-124: formula-skew W4e/s4e + helper477/608/398/419/595/lwe/MTe + shared-refs 589..592 + opt..bpt + DSe..ISe + text-frame-style 689. wave-125: formula-criteria-shape a3e/h6e/916 + chart-axis-reserve _be/vbe/ybe + _O + NTe + cf-range-stats mht/Sht/1020. wave-126: chart-axis-scale-domain bbe/402/406/wye + presentation-aid ZRe + presentation-ref yze/bze/dze + helper483 + helper892 + iSe + iCe + r3e. wave-127: formula-byrow Yot/Jot nest + compose-code-children YIe + bond Uat/Kit/Wat/gat/_at + tSe + text-frame-resolve + QCe + TTe + Kwe + presentation-images + Dst + jgt + vrt + dead zye/Bye/Rxe/Vxe. wave-128: formula-eng-mids s1e nest + F9e/N9e/_9e + Mst + A8e + v8e + A7e + dead dollarOe/eke + cvt + gSe + owe + Gwe + 614/qwe + mid-paint 470/481/523/596/617/_Ee/700. wave-129: sheet-range-map 587 nest + jwe + uuid-v4/stable-id + formula-ast-walk 1038 + Xwe/Zwe + dead bwe/ySe/$1e + cfvo wht + paint Vye/Zye/awe/597 + F1e/I1e/q1e. wave-130: stroke 473/482 nest + 536 + twe + Jwe/Ywe + 639 + GDe + JSe + weeknum + D-stats + 917 + dollarXe→chart-data-labels + Aht/Mht unlock. wave-131: cf-engine unlock. wave-132: rze unlock. wave-133: preferred nests. wave-134: Oat/d4e/20s/18s mid batch. wave-135: qOe unlock + IIe + financial/chart ≥15. wave-136: preferred nests + Hit…Hat. wave-137: Binding874→446 + Binding1273→642. wave-138: I4e/910 + E3e/918 nest + Owe/vTe/575/484 + formula ≥10–14. wave-139: CJe/820 + 603 + 572/wOe + AJe + ZTe + ≥10 wire batch. wave-140: helper464/_A + formula g1e…n0e/Qnt/n2e + oYe/$2/$7/Agt + ≥8 wire batch. wave-141: Binding833/379/oye + helper667 + formula u4e…sst/$2e + $O/$I + dead≥6. wave-142: Binding1340/1294/1342→1344 + formula _3e/v3e/Dot + wire≥6 + helper376/824.
// Stage-3 wave-6: Line Binding431 stroke VO + dash/compound maps → workbook/line/.
// Stage-3 wave-7: color-resolve helpers (Sae/Cae/wae/Tae/workbookSt) → workbook/color-resolve/.
// Stage-3 wave-8: TextStyle VO (workbookVt) + alignment/autofit/caps → workbook/text-style/.
// Stage-3 wave-9: text-style CSS declaration/shadow parsers (workbookHelper 80-83, noe, workbookYt) → workbook/text-style/.
// Stage-3 wave-10: placeholder-style helpers (Vae/Uae/helper97+) + font-metrics (workbookMt/Pt) → workbook/presentation-theme + workbook/font-metrics/.
// Stage-3 wave-11: TextStyle style-resolve (helper106–110/workbookT) + glyph-advance cache ($p/Binding456) → workbook/text-style + workbook/font-metrics/.
// Stage-3 wave-12: math LaTeX parse + AST→plain-text (Coe/helper121–126/Binding457–465) → workbook/math-plain-text/.
// Stage-3 wave-13: MathML codec (helper127–146/Doe/Eoe/Binding466–482) → workbook/math-ml/.
// Stage-3 wave-14: font-stack / math-font / typography units (helper147–153/Binding483–496) → workbook/font-stack/.
// Stage-3 wave-15: math-layout engine (lse/use/helper154–180/Hse) → workbook/math-layout/.
// Stage-3 wave-16: effects/`_g` + document-style/theme maps (Binding516 / Lt/It/Nt/Rt / helper181–188) → workbook/document-style/.
// Stage-3 wave-17: `_workbookTt` + placeholder-resolve / theme-typeface / docx-scheme helpers (helper189–198 / ece–vce) → workbook/placeholder-resolve/.
// Stage-3 wave-18: `yce` + line-box helpers + text-layout engine (`kce`/`j_`) → workbook/text-layout/.
// Stage-3 wave-19: `M_`/`N_` line-dash + gradient painters (`Pce`/`Ice`) + pattern fill (`Wce`/`Gce`) → workbook/canvas-fill/.
// Stage-3 wave-20: picture-effects (`helper200`…`Binding542`) + fill-resolve (`helper212`/`Binding543`) → workbook/canvas-fill/.
// Stage-3 wave-21: text-canvas (`helper213`/`yle`/`helper214`) → workbook/text-canvas/.
// Stage-3 wave-22: text-box insets (`ble`/`Binding215+`) + layout/render (`workbookQ`/`X`) + `workbookZ` → workbook/text-box/.
// Stage-3 wave-23: design-token Binding558–565 + WorkbookTheme (`workbookJ`/`workbookY`) + Binding569–570 → workbook/design-tokens/.
// Stage-3 wave-24: SSF Binding571 → vendor/ssf npm shim (ssf@0.11.2); inlined body deleted.
// Stage-3 wave-25: jStat qXe + Bessel JXe → vendor/jstat + vendor/bessel npm shims; inlined bodies deleted.
// Stage-3 wave-26: cell-XF / numFmt / col-row extents (Binding223–586) → workbook/cell-xf-format/.
// Stage-3 wave-27: worksheet autofit helpers (Tle / Binding232–Rle) → workbook/worksheet-autofit/.
// Stage-3 wave-28: Binding337 + helper240–Jle + RangeFormat Binding589–593/Yle → workbook/range-format/.
// Stage-3 wave-29: Binding594/helper256–259 → workbook/icon-set/; Binding597–612/Xle/Zle/helper260–261 → workbook/text-run/.
// Stage-3 wave-30: Qle/Binding613–620/helper262 + helper263–271/iue/aue/_x/Binding621 → workbook/style-tokens/.
// Stage-3 wave-31: Binding622/623 TextSelection (WorkbookClass6) → workbook/text-selection/.
// Stage-3 wave-32: helper272–285 + Binding624–627 DetachedText (WorkbookClass4) → workbook/detached-text/.
// Stage-3 wave-33: helper286–290 + Binding628–632 FrameBbox (WorkbookClass11) → workbook/geometry-transform/.
// Stage-3 wave-34: kue–helper297 + Binding633–644 preset-shape formula cluster → workbook/preset-shape/.
// Stage-3 wave-35: Rue–Hue text-element autofit + Uue–Binding647 stable-id → workbook/text-element-autofit/ + workbook/stable-id/.
// Stage-3 wave-36: helper303/ide style-ref + `_workbookZ`/ade/workbookB → workbook/slide-element/.
// Stage-3 wave-37: ode/Binding648–654 mime-sniff + image-size + object-fit → workbook/image-mime/.
// Stage-3 wave-38: helper304+ shape-utility (hde/_de/bde) + path-geometry (xde…jde) → workbook/shape-utility/ + workbook/path-geometry/.
// Stage-3 wave-39: post-Mde image-source VO (Binding656/$S/Pde + Fde…Kde + Binding657–659/Jde) → workbook/image-source/; Image class Binding660 remains.
// Stage-3 wave-40: Binding660 Image class + Binding661 ensure → workbook/image-element/; thin Mde + residual Binding661 (workbookEt/Mde) remain.
// Stage-3 wave-41: Yde…helper319 thread/chart/CF mutation builders → workbook/mutation-ops/; sparkline Sfe+ remains.
// Stage-3 wave-42: Sfe…Wfe sparkline/DV/shape/image mutation builders → workbook/mutation-ops/; helper333/Binding669 → workbook/worksheet-attachment/.
// Stage-3 wave-43: helper322…Bpe CF/DV VO+API cluster → workbook/conditional-format/ + workbook/data-validation/; Binding662/_C remains.
// Stage-3 wave-44: Vpe…workbookF formula/token/WorkbookR cluster → workbook/formula/; Binding662/_C + dme+ remain.
// Stage-3 wave-45: dme…helper336 fill-from / formula-address cluster → workbook/range-fill/ + workbook/formula-address/; Binding662/_C + Binding669+ remain.
// Stage-3 wave-46: Binding675 Range VO + bme/xme/Sme → workbook/range/; Binding662/_C + pivot 335/336/338 remain.
// Stage-3 wave-47: Binding676 PivotCaches (Cme) peeled → workbook/pivot-caches/; Binding662/_C + pivot 335/336/338 remain.
// Stage-3 wave-48: Binding677–684 slicer/Slicers (Tme/Eme) → workbook/slicers/; Binding662/_C + pivot 335/336/338 + Binding369 remain.
// Stage-3 wave-49: Binding369 PivotTable (_u) peeled → workbook/pivot-table/; Binding338 layout enum extracted; Binding335/336 + Class53 remain with field VOs.
// Stage-3 wave-50: Binding343–361 field VOs + enums 335/336 + Class53 + layout helpers/filter tokens → workbook/pivot-fields/.
// Stage-3 wave-51: helper31–61 formula array/eval + $u Binding370–374 → workbook/formula-array/.
// Stage-3 wave-52: Binding334/wne + Cne/$c/el + Binding332/333 + helper24/hre → pivot-table/pivot-caches.
// Stage-3 wave-53: inlined Yjs+lib0 (Binding1–331 / no / Bte) → vendor/yjs npm shim (yjs@13.6.27); inlined body deleted.
// Stage-3 wave-54: inlined Three.js (Binding929/Xbe + helper502–Ybe) → vendor/three npm shim (three@0.170.0); inlined body deleted.
// Stage-3 wave-55: inlined highlight.js grammars (wke…aAe) + oAe/sAe → boundaries/highlight-js Core() (highlight.js@^11.11.1); Binding1574/Cke layout schemas retained; inlined HLJS body deleted.
// Stage-3 wave-56: inlined Zod (helper789 / Binding1751… / $Zod* / Binding1790–1799) → vendor/zod npm shim (zod@^4.4.3); recipe cluster qWe… kept with helper816–819/YUe/Binding1799 aliases; inlined Zod body deleted.
// Stage-3 wave-57: presentation recipes Binding1800/qWe…Yqe + Xqe/runPresentationRecipeMod/aJe → workbook/presentation-recipes/; dJe templates + Google Slides adapter retained; thin aJe/Xqe/runPresentationRecipeMod stubs + layout hooks.
// Stage-3 wave-58: compose-layout engine Binding1390/MDe…Binding1488 → workbook/compose-layout/; compose DSL Binding1490–1528 → workbook/compose-dsl (wave-72).
// Stage-3 wave-59: Binding1996 WorkbookN / __workbookT → workbook/workbook-core/ (method peels); Binding662/_C + Binding1574/Cke + compose DSL + intentional terminals retained.
// Stage-3 wave-60: helper373…xve/Sve + Binding740–789 worksheet drawings → workbook/worksheet-drawings/.
// Stage-3 wave-61: Lve+Binding790–803 drawing-layout → worksheet-drawings/; Binding804–815+_D sparklines → workbook/sparklines/.
// Stage-3 wave-62: Binding1687 Mermaid→slide adapters (gitGraph/sequence/class/state/er/requirement/mindmap/treeView) → workbook/mermaid-slide-adapters/.
// Stage-3 wave-63: inlined decimal.js (helper939…/Binding1906/lit/Vit) → vendor/decimal npm shim (decimal.js@10.6.0); Binding1926/Vit aliases kept; inlined body deleted.

const __vite__mapDeps = (
  workbookInput1438,
  workbookInput1439 = __vite__mapDeps,
  workbookInput1440 = workbookInput1439.f ||
    (workbookInput1439.f = [
      "./lazy-mermaid-core",
      "./rolldown-runtime-BG2f4sTM.js",
      "./app-initial-Czet5G9g.css",
      "./isEmpty-D-5ng6I7.js",
      "./_baseFor-DBc6wfxY.js",
      "./src-aUHGwSbR.js",
      "./src-DWyvtO7a.js",
      "./esm-B1fsB5y-.js",
      "./chunk-AGHRB4JF-COxpu2PX.js",
      "./chunk-ICPOFSXX-CvbMQlkM.js",
      "./dist-CKldyVGb.js",
      "./chunk-426QAEUC-Ba0rbZj9.js",
      "./chunk-5PVQY5BW-CGFDLcnR.js",
      "./merge-DIqo0EGT.js",
      "./dist-BNkeg5V9.js",
      "./chunk-U2HBQHQK-ggTnsiuo.js",
      "./chunk-BSJP7CBP-DFvoyeko.js",
      "./chunk-ZZ45TVLE-Mx_-ndvi.js",
      "./chunk-X2U36JSP-CWOrW9Mm.js",
      "./chunk-5FUZZQ4R-ahKtDU8f.js",
      "./rough.esm-CxIZKu28.js",
      "./chunk-ENJZ2VHE-C_FEqIVX.js",
      "./chunk-336JU56O-BErXv-xv.js",
      "./chunk-XPW4576I-D2l7hhLl.js",
      "./stylis-BHkIrgUB.js",
      "./lazy-workbook-from-markdown",
      "./workbook-from-csv-CDfYIljB.js",
      "./address-utils-xK0e4BjB.js",
    ]),
) => workbookInput1438.map((item) => workbookInput1440[item]);
import {
  ensureCssNamedColorsInit as workbookXt,
  ensureChatgptThemeInit as Mae,
  ensureChatgptThemeWarmInit as Sle,
  placeholderTypeToStyleKey as Vae,
  isFurniturePlaceholderType as Uae,
} from "../../workbook/presentation-theme";

import { collectSlideThemeFonts as VDe } from "../../workbook/presentation-theme";

import {
  workbookHt,
  ensureFontMetricsInit as workbookMt,
  ensureTextSegmenterInit as workbookFt,
  segmentGraphemes as workbookPt,
} from "../../workbook/font-metrics";

import { parseMathFromLatex as Coe } from "../../workbook/math-plain-text";

import {
  mathDocumentToMathMlTree as Eoe,
  mathMlTreeToMathDocument as Doe,
} from "../../workbook/math-ml";
import {
  createWorksheetDrawingContext as Sve,
  getChartDrawingClass,
  getWorksheetImageDrawingClass,
  getWorksheetDrawingsClass,
  applyWorksheetDrawingLayout as Lve,
} from "../../workbook/worksheet-drawings";
const workbookBinding756 = new Proxy(function workbookBinding756Proxy() {}, {
  construct(_target, args) {
    const Ctor = getChartDrawingClass();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, _receiver) {
    if (prop === Symbol.hasInstance) {
      return (instance: any) => instance instanceof getChartDrawingClass();
    }
    if (prop === "prototype") return getChartDrawingClass()?.prototype;
    const Ctor = getChartDrawingClass();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
const workbookBinding786 = new Proxy(function workbookBinding786Proxy() {}, {
  construct(_target, args) {
    const Ctor = getWorksheetImageDrawingClass();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, _receiver) {
    if (prop === Symbol.hasInstance) {
      return (instance: any) =>
        instance instanceof getWorksheetImageDrawingClass();
    }
    if (prop === "prototype") return getWorksheetImageDrawingClass()?.prototype;
    const Ctor = getWorksheetImageDrawingClass();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
const workbookBinding788 = new Proxy(function workbookBinding788Proxy() {}, {
  construct(_target, args) {
    const Ctor = getWorksheetDrawingsClass();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, _receiver) {
    if (prop === Symbol.hasInstance) {
      return (instance: any) => instance instanceof getWorksheetDrawingsClass();
    }
    if (prop === "prototype") return getWorksheetDrawingsClass()?.prototype;
    const Ctor = getWorksheetDrawingsClass();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
import {
  getCellClass,
  getCellGridClass,
  getSparklineGroupsClass,
} from "../../workbook/sparklines";
const workbookBinding804 = new Proxy(function workbookBinding804Proxy() {}, {
  construct(_target, args) {
    const Ctor = getCellClass();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, _receiver) {
    if (prop === Symbol.hasInstance) {
      return (instance: any) => instance instanceof getCellClass();
    }
    if (prop === "prototype") return getCellClass()?.prototype;
    const Ctor = getCellClass();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
const workbookBinding806 = new Proxy(function workbookBinding806Proxy() {}, {
  construct(_target, args) {
    const Ctor = getCellGridClass();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, _receiver) {
    if (prop === Symbol.hasInstance) {
      return (instance: any) => instance instanceof getCellGridClass();
    }
    if (prop === "prototype") return getCellGridClass()?.prototype;
    const Ctor = getCellGridClass();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
const _D = new Proxy(function _DProxy() {}, {
  construct(_target, args) {
    const Ctor = getSparklineGroupsClass();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, _receiver) {
    if (prop === Symbol.hasInstance) {
      return (instance: any) => instance instanceof getSparklineGroupsClass();
    }
    if (prop === "prototype") return getSparklineGroupsClass()?.prototype;
    const Ctor = getSparklineGroupsClass();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
import { getSlideComposeTheme } from "../../workbook/compose-layout";

const workbookBinding1486 = new Proxy(function SlideComposeThemeProxy() {}, {
  construct(_target, args) {
    const Ctor = getSlideComposeTheme();
    return new Ctor(...args);
  },
  apply(_target, _thisArg, args) {
    const Ctor = getSlideComposeTheme();
    return new Ctor(...(args as any[]));
  },
  get(_target, prop, receiver) {
    if (prop === "prototype") return getSlideComposeTheme()?.prototype;
    const Ctor = getSlideComposeTheme();
    const value = (Ctor as any)?.[prop];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
}) as any;
import { runPresentationRecipe as runPresentationRecipeMod } from "../../workbook/presentation-recipes";

import {
  twipToCssPx as _workbookDt,
  ensureTypographyUnitsInit as workbookUt,
  oYe,
  _workbookC,
  _workbookL,
} from "../../workbook/font-stack";

import {
  paragraphIsPureMath as lse,
  layoutParagraphMath as use,
  ensureMathLayoutEngineInit as Hse,
} from "../../workbook/math-layout";

import {
  EffectList as _g,
  mergeParagraphStyle as workbookLt,
  mergeTextStyle as _workbookCt,
  DocumentStyleResolver as workbookIt,
  ensureDocumentStylesInit as _workbookSt,
  isContextualSpacingEnabled as _workbookOt,
  ensureContextualSpacingScheme as WorkbookAt,
  buildThemeStyleMaps as workbookNt,
  ensureThemeStyleMapsInit as workbookRt,
  elementParagraphSpacingPx as workbookDollar,
} from "../../workbook/document-style";

import {
  ensurePlaceholderResolveThemeInit as _workbookTt,
  masterLevelStylesForPlaceholder as ece,
  formatAutoNumberLabel as vce,
} from "../../workbook/placeholder-resolve";

import {
  tokenizeTextRuns as yce,
  TextLayoutEngine as j_,
  ensureTextLayoutEngineInit as kce,
} from "../../workbook/text-layout";

import { buildElementTextLayoutMap as XDe } from "../../workbook/element-text-layout";

import {
  applyCanvasLineDash as M_,
  ensureCanvasLineDashInit as N_,
  _A,
} from "../../workbook/canvas-fill";

import { ensureTextCanvasRendererInit as yle } from "../../workbook/text-canvas";

import {
  ensureDefaultTextInsetsValuesInit as ble,
  layoutTextElement as workbookQ,
  paintTextElement as workbookX,
  ensureTextBoxClusterInit as workbookZ,
} from "../../workbook/text-box";

import {
  WorkbookTheme as workbookJ,
  nonEmptyStringOrUndefined as by,
  ensureWorkbookThemeInit as workbookY,
} from "../../workbook/design-tokens";

import { mergeUpdates as yMergeUpdates } from "../../vendor/yjs";
import {
  solidFillFromColor as Tle,
  ensureWorksheetAutofitInit as Rle,
} from "../../workbook/worksheet-autofit";

import {
  fillSolidColorFromFill as Jle,
  ensureRangeFormatInit as Yle,
} from "../../workbook/range-format";

import {
  ensureTextRunsInit as Xle,
  ensureParagraphInit as Zle,
} from "../../workbook/text-run";

import {
  resolveFontWeightUtilityBold as Qle,
  trimNonEmptyString as _x,
  textRunStyleConfigFromPartial as iue,
  applyStyleConfigToParagraph as aue,
} from "../../workbook/style-tokens";

import {
  isDetachedTextPayload as _workbookQ,
  normalizeParagraphInputs as workbookG,
  ensureDetachedTextHelpersInit as workbookK,
} from "../../workbook/detached-text";

import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../../workbook/shape-geometry";
import { mapProjectionProtoToName as pie } from "../../workbook/chart-proto-name-maps";

import { patternTypeProtoToName as Vie } from "../../workbook/theme-color";

import { resolveThemeAccentSlot as Wye } from "../../workbook/theme-color";
import {
  Fill as workbookCt,
  ensureFillInit as workbookWt,
} from "../../workbook/fill";

import { isEmptyFill as iCe } from "../../workbook/fill-empty";
import {
  clampRange as Sae,
  colorTransformOf as Cae,
  isSystemColor as wae,
  resolveColorProtoToRgbaString as Tae,
  resolveColorToCssRgba as workbookSt,
} from "../../workbook/color-resolve";

import {
  TextStyle as workbookVt,
  ensureTextStyleInit as workbookBt,
  ensureStyleResolveInit as workbookT,
  workbookGt,
  normalizeTextShadowFromCss as noe,
  applyTextStylePatch as workbookYt,
} from "../../workbook/text-style";

// Binding433/434 were protobuf enum side-effect inits; remaining call sites are no-ops.
const workbookBinding433 = (): void => {};
const workbookBinding434 = (): void => {};

// Wire extracted CSS-shadow parser into TextStyle.shadow setter.
// Wire extracted Tae (scheme/system color → rgba) into stylesheet helpers.
// Whitespace ensure (legacy $d / Jie) — tokenizers now own /\s/ locally.
const $d = (): void => {};
const Jie = /\s/;

// Named-color table ensure (legacy qre / Binding379) — eager consts.
const qre = (): void => {};
const workbookBinding379 = (): void => {};
const workbookBinding405 = Vie;

/** Local no-op stubs for app-initial __esm / vite preload (not waiting on producer). */
function ensureD3ScaleClusterInit(): void {}
function ensureD3ShapeClusterInit(): void {}
function ensureD3FormatClusterInit(): void {}
function ensureD3ArrayClusterInit(): void {}
function ensureD3ColorClusterInit(): void {}
function ensureViteModulepreloadRuntime(): void {}
async function vitePreload<T>(
  factory: () => Promise<T>,
  _deps?: readonly string[],
  _importer?: string,
): Promise<T> {
  return factory();
}

import {
  requireWorkbookHelp as kue,
  installPresetShapeDefinitions as WorkbookW,
  ensurePluginSlotsInit as workbookU,
} from "../../workbook/preset-shape";
export { WorkbookW };

import {
  measureTextElementMetrics as Rue,
  ensureTextElementAutofitInit as Hue,
} from "../../workbook/text-element-autofit";

import {
  ensureMermaidSlideAdaptersInit,
  getMermaidSlidePlugins,
  getConvertTreeView,
  getIsTreeViewSource,
  CONNECTOR_EPSILON,
} from "../../workbook/mermaid-slide-adapters";

var workbookBinding1687 = CONNECTOR_EPSILON;
var P$: any = new Proxy([] as any[], {
  get(_target, prop) {
    ensureMermaidSlideAdaptersInit();
    const arr = getMermaidSlidePlugins();
    const value = (arr as any)[prop];
    return typeof value === "function" ? value.bind(arr) : value;
  },
});
var SIe = (...args: any[]) => {
  ensureMermaidSlideAdaptersInit();
  return getConvertTreeView()(...args);
};
var _Ie = (src: any) => {
  ensureMermaidSlideAdaptersInit();
  return getIsTreeViewSource()(src);
};
var lIe = ensureMermaidSlideAdaptersInit;
var CIe = ensureMermaidSlideAdaptersInit;
// Thin aliases for WorkbookN / create-ops env bag (legacy Binding1967 cluster).
import {
  ensureSheetInit,
  SXe,
  Sheet,
  sheet as sheetBag,
  ensureWorksheetsCollectionInit,
  TXe,
  wXe,
} from "../../workbook/sheet";

import {
  paintSpreadsheetCanvas as paintSpreadsheetCanvasFn,
  paintSheetShapes,
  ensurePaintEmuMapsInit,
  ensureCanvasPaintClusterInit,
} from "../../workbook/canvas-paint";

import { JCe } from "../../workbook/canvas-paint";

// Thin aliases for legacy BYe / Binding1824 / jYe / bYe / xYe.
var BYe = paintSpreadsheetCanvasFn;
var bYe = paintSheetShapes;
var xYe = ensurePaintEmuMapsInit;
var ensureCanvasPaintCluster = ensureCanvasPaintClusterInit;

import {
  layoutCatAxis as _be,
  layoutValAxisBottom as vbe,
  categoryLabelInset as ybe,
} from "../../workbook/chart-axis-reserve";

import {
  padDomainByTickStep as wye,
  layoutValAxisRight as bbe,
} from "../../workbook/chart-axis-scale-domain";

import { exportChartPng as Amt, Zmt } from "../../workbook/chart-raster";

import { layoutCategoryLabels as RCe } from "../../workbook/chart-paint";

import { layoutSunburstArcs as BSe } from "../../workbook/chart-sunburst-layout";

setPresentationRefSlideClass(X$);
import { fCe } from "../../workbook/chart-waterfall-bar";

import { paintChartCard as ASe } from "../../workbook/chart-card-paint";

import {
  paintCharts as zCe,
  hydrateChartSeries as BCe,
  sheetMapByName as VCe,
} from "../../workbook/canvas-paint";

// Thin aliases: chart-paint cluster drained (wave-89).

import { applyWorkbookDocOps as Zht } from "../../workbook/doc-op-apply";

// Thin aliases: doc-op-apply cluster drained (wave-90).
import {
  layoutThreeBarSegments as Qbe,
  paintPie3d as txe,
} from "../../workbook/three-chart-paint";

import { Zbe } from "../../workbook/three-chart-paint";

// Live leave-behind bindings (populated by exe / font ensures).
// Thin aliases: three-chart-paint cluster drained (wave-90).

import { convertUnits as N1e } from "../../workbook/unit-convert";

import { RXe, zXe } from "../../workbook/named-ranges";

// Thin aliases: named-ranges cluster drained (wave-91).

import { Ogt, kgt } from "../../workbook/styles-yjs";

// Thin aliases: styles-yjs cluster drained (wave-91).

import { paintMapLegend as lbe } from "../../workbook/chart-legend";

// Thin aliases: chart-legend cluster drained (wave-92).

import {
  drawCustomPaths as Rwe,
  pathCommandsToClipPoints as cTe,
  roundRectPath as NSe,
} from "../../workbook/shape-path";

import { pathCommandsBBox as tTe } from "../../workbook/shape-path";

import { swe, Swe } from "../../workbook/shape-path";

// Thin aliases: shape-path cluster drained (wave-92).

import {
  escapeHtmlText as Gpt,
  buildExcelHtmlClipboard as Kpt,
  Wpt,
} from "../../workbook/html-table-export";

// Thin aliases: html-table-export cluster drained (wave-92).

import {
  ensureChartJsxPropAllowlistsInit as _ke,
  lowerChartElement as dke,
} from "../../workbook/chart-jsx-lower";

// Thin aliases: chart-jsx-lower cluster drained (wave-93).

import {
  parseComposeInput as vke,
  assertAllowedComposeProps as workbookHelper749Compose,
  ensureComposeJsxPropAllowlistsInit as Cke,
  qOe,
} from "../../workbook/compose-jsx-lower";

import {
  lowerListChildren as MOe,
  lowerListTag as YOe,
  lowerImgTag as XOe,
} from "../../workbook/compose-jsx-lower";

import { flattenComposeChildren as QOe } from "../../workbook/compose-jsx-lower";

// Thin aliases: compose-jsx-lower cluster drained (wave-93).

import { paintSecondaryValueAxis as _xe } from "../../workbook/chart-axis-ticks";

import { wOe } from "../../workbook/shape-geometry-paint";

import { Lwe } from "../../workbook/shape-geometry-paint";

import { paintConnectorRoute as Qwe } from "../../workbook/shape-geometry-paint";

import {
  layoutTableFrame as workbookA,
  strokeTableBorders as TTe,
} from "../../workbook/table-frame-layout";

import {
  renderSlideCanvas as vEe,
  paintSlideText as nEe,
  paintViewOverlay as dEe,
} from "../../workbook/slide-canvas-render";

// Thin aliases: chart-axis-ticks + shape-geometry-paint + table-frame-layout + slide-canvas-render drained (wave-94).

import { paintBarDirectionSeries as Dbe } from "../../workbook/chart-bar-direction";

import { paintRadarChart as Txe } from "../../workbook/chart-radar";

import { prepareRadarSeries as Cxe } from "../../workbook/chart-radar";

import {
  layoutCategoryChartPlot as Xxe,
  normalizePlotAreaManualLayout as bSe,
  reserveDataTablePlot as iSe,
} from "../../workbook/chart-plot-layout";

// Thin aliases: chart-bar-direction + chart-bar-series + chart-radar + chart-plot-layout drained (wave-95).

import { paintCategoryAxes as Tbe } from "../../workbook/chart-category-axes";

import { paintScatterSeries as nCe } from "../../workbook/chart-scatter-series";

import { resolveTrendlineLabel as cxe } from "../../workbook/chart-trendline";

import { paintHistogramAxes as gCe } from "../../workbook/chart-histogram-axes";

import { paintHierarchyDataTable as DSe } from "../../workbook/chart-data-table";

import { jwe, Owe } from "../../workbook/image-svg-decode";

import { Vye, Zye, awe } from "../../workbook/paint-mids";

import { Jwe, Ywe } from "../../workbook/picture-fill-paint";

import { JSe } from "../../workbook/contrast-text-colors";

import { parseSheetRangeRef as UCe } from "../../workbook/chart-data-table";

// Thin aliases: chart-category-axes + chart-scatter-series + chart-histogram-axes + chart-data-table + chart-scatter-axes drained (wave-96).

import { fitThreeChartCamera as rxe } from "../../workbook/three-chart-camera";

import { ctlH as __ctlHWave107, sxe } from "../../workbook/chart-trendline";

__ctlHWave107.hasLabel = (...args: any[]) => sxe(...args);
__ctlHWave107.resolveLabel = (...args: any[]) => cxe(...args);
__ctlHWave107.layoutLabel = (...args: any[]) => lxe(...args);
__ctlHWave107.paintText = (...args: any[]) => workbookX(...args);
__ctlHWave107.ELEMENT_TYPE_TEXT = j.ELEMENT_TYPE_TEXT;
__ctlHWave107.ALIGNMENT_TYPE_LEFT = Jn.ALIGNMENT_TYPE_LEFT;
__ctlHWave107.FILL_TYPE_SOLID = tr.FILL_TYPE_SOLID;
__ctlHWave107.COLOR_TYPE_RGB = Zn.COLOR_TYPE_RGB;

import { fitPercentBubbleDomain as Oxe } from "../../workbook/chart-scatter-scale";

import { paintImages as Fwe } from "../../workbook/paint-images";

import {
  ensureConstraintLayoutInit as kDe,
  Align as __clAlign,
  Direction as __clDirection,
  AutoLayout as __clAutoLayout,
  ODe,
  EDe,
  DDe,
  SDe,
  TDe,
  CDe,
  wDe,
} from "../../workbook/constraint-layout";

void __clAlign;
void __clDirection;
void __clAutoLayout;
void ODe;
void EDe;
void DDe;
void SDe;
void TDe;
void CDe;
void wDe;

import { buildSelectionStyleGrid as Upt } from "../../workbook/selection-style-grid";

import {
  layoutLegendAroundPlot as jxe,
  layoutLegendPlot as wSe,
  reserveTitleBand as uSe,
} from "../../workbook/chart-legend-plot";

import { lxe } from "../../workbook/chart-legend-plot";

import { lSe } from "../../workbook/chart-legend-plot";

import { paintCategoryAxisLabels as Nxe } from "../../workbook/chart-category-axis-labels";

import {
  prepareBoxWhiskerData as ECe,
  buildBoxWhiskerScales as OCe,
  paintBoxWhiskerChart as jCe,
} from "../../workbook/chart-box-whisker";

import { stackLineLayers as axe } from "../../workbook/chart-line-series";

import { buildContinuousScale as _O } from "../../workbook/chart-group-scales";

import { buildBarPlotScales as hbe } from "../../workbook/chart-group-scales";

import { buildLogChartScale as yye } from "../../workbook/chart-group-scales";

import { computeShapePathEndpoints as Vwe } from "../../workbook/shape-path-endpoints";

import { pTe } from "../../workbook/shape-path-endpoints";

import {
  paintTableCells as STe,
  materializeBorderStrokes as xTe,
  vTe,
} from "../../workbook/table-cell-paint";

import {
  measureEmbedElement as NTe,
  workbookN,
} from "../../workbook/text-frame-embeds";

import { paintEmbeddedWorkbookView as BTe } from "../../workbook/text-frame-embeds";

import { ZTe } from "../../workbook/slide-image-paint";

import {
  legendEntries as ibe,
  measureMapLegend as abe,
  packLegendRows as sbe,
} from "../../workbook/chart-legend-layout";

import { stackAreaLayers as hxe } from "../../workbook/chart-area-series";

import { paintHistogramBars as sCe } from "../../workbook/chart-histogram-bars";

import { paintSurfaceMap as Kye } from "../../workbook/chart-surface-map";

import { lowerInlineTextChildren as NOe } from "../../workbook/compose-inline-text";

import {
  remapElementIds as LIe,
  fitElementsInBbox as RIe,
} from "../../workbook/presentation-element-fit";

import {
  setTextRangeFormatting as bLe,
  centerInFrame as lLe,
} from "../../workbook/presentation-edit";

import {
  autoLayoutFrames as ADe,
  ensureGridLayoutInit as jDe,
} from "../../workbook/grid-frame-layout";

import { ict } from "../../workbook/formula-sort-filter";

import { Jdt } from "../../workbook/formula-text-split";

import {
  replaceFormulaFunctionName as ppt,
  matchFormulaFunctionNameAt as mpt,
} from "../../workbook/formula-text-replace";

import { Fht, Iht, Rht } from "../../workbook/cf-icon-color-scale";

import {
  collectRangeNumerics as Sht,
  aboveAverageThreshold as mht,
  wht,
  Aht,
  Mht,
} from "../../workbook/cf-range-stats";

import { buildConditionalFormatDxfColorMaps as jht } from "../../workbook/cf-dxf-color-maps";

import { eft, Tft, Nft } from "../../workbook/formula-call-dispatch";

import { Uft, Gft } from "../../workbook/formula-range-index";

import { qft, tpt } from "../../workbook/formula-structured-ref";

import { cloneRichWorkbookMetadata as apt } from "../../workbook/worksheet-metadata-clone";

import { semanticTagStyle as ROe } from "../../workbook/compose-jsx-lower";
import {
  paintWaterfallBar as dCe,
  paintWaterfallSeries as pCe,
} from "../../workbook/chart-waterfall-bar";

import {
  paintPieLabels as fbe,
  paintDonutArcLabels as qSe,
} from "../../workbook/chart-pie-series";

import { ube, dbe } from "../../workbook/chart-pie-series";

import { paintBubbleSeries as aCe } from "../../workbook/chart-bubble-series";

import {
  paintSparkline as YCe,
  paintLineSparkline as XCe,
  paintColumnSparkline as ZCe,
} from "../../workbook/sparkline-paint";

import {
  uwe,
  layoutUnsupportedIconBadge as lwe,
} from "../../workbook/icon-set-paint";

import { lowerPanelSurfaceTag as JOe } from "../../workbook/compose-jsx-lower";

import {
  computeIrr as F0e,
  computeXirr as Z0e,
  computeRate as W0e,
} from "../../workbook/formula-irr";

import {
  findFormulaSccs as VXe,
  updateCellPrecedents as WXe,
} from "../../workbook/formula-dep-scc";

import { orderFormulaDeps as BXe } from "../../workbook/formula-dep-scc";
import { qQe, z$e, days360 } from "../../workbook/formula-scalar-funcs";

import {
  formulaErrorFromMessage as Q2e,
  coerceAverageACell as l4e,
  averageA as _4e,
} from "../../workbook/formula-average-a";

import { averageIf as g4e } from "../../workbook/formula-averageif";

import { collectNumericSamples as s4e } from "../../workbook/formula-skew";

import { computeGrowth as pQe } from "../../workbook/formula-growth";

import {
  computeYield as k0e,
  computePriceDisc as H0e,
} from "../../workbook/formula-securities";

import {
  Kat,
  computePvAnnuity as Uat,
  parseBondPriceArgs as Wat,
} from "../../workbook/formula-bond-basis";

import { computeUsedRangeBounds as UTe } from "../../workbook/worksheet-used-range";

import {
  cumIpmt as E0e,
  dbDepreciation as D0e,
  cumPrinc as T0e,
  ddb as O0e,
  ppmt as P0e,
  w0e,
  Q0e,
} from "../../workbook/formula-financial";

import {
  matchesCfDatePeriod as oht,
  buildColorScaleRuntime as Nht,
  buildDataBarRuntime as Pht,
} from "../../workbook/conditional-format";

import {
  rowMatchesAnyCriteriaGroup as F8e,
  buildCriteriaPredicate as I8e,
} from "../../workbook/formula-criteria-predicate";

import {
  cloneMatrixOrArrayValues as j8e,
  buildDsumCriteriaGroups as P8e,
} from "../../workbook/formula-dsum-criteria";

import {
  pasteHtmlIntoSheet as wmt,
  applyHtmlCell as Dmt,
  parseHtmlTable as Jpt,
  resolvePasteTarget as Tmt,
  rectToA1 as Emt,
} from "../../workbook/html-paste";

import {
  eachTableRow as Ypt,
  buildHtmlCell as Qpt,
  pmt,
} from "../../workbook/html-paste";

import {
  validateWorkbook as Tpt,
  workbookR,
  _workbookA,
  _WorkbookI,
  validateSheetCells as kpt,
  validateTables as Apt,
} from "../../workbook/xlsx-workbook-validate";

import { annotateDynamicArrayCells as opt } from "../../workbook/xlsx-dynamic-array-meta";

import { remapRangeRef as Bht } from "../../workbook/formula-ast-remap";

import { layoutTreemapPlot as Cbe } from "../../workbook/chart-treemap-plot-layout";

import { layoutTreemapTiles as Yye } from "../../workbook/chart-treemap-tiles";

import { layoutOverlappingParentLabels as PSe } from "../../workbook/chart-treemap-tiles";

import { aggregateHistogramBins as _Se } from "../../workbook/chart-histogram-bins";

import { paintFunnelBars as vCe } from "../../workbook/chart-funnel-segments";

import {
  computeHiddenBoundaries as ewe,
  twe,
} from "../../workbook/sheet-hidden-boundaries";

import { paintSlideBackground as RTe } from "../../workbook/slide-background-paint";

import {
  invertMatrix as Alt,
  computeDeterminant as klt,
} from "../../workbook/formula-matrix-inverse";

import { computeAxisAutoDomain as bye } from "../../workbook/chart-axis-auto-domain";

import { paintComboGroups as yxe } from "../../workbook/chart-combo-groups";

import {
  densifyShapePath as dTe,
  trimPathStart as uTe,
  pathEndpointMetrics as mTe,
} from "../../workbook/shape-path-densify";

import {
  resolveFloatingPlacement as jTe,
  resolvePlacementOrBBox as MTe,
} from "../../workbook/floating-placement";

import {
  tableCellsFromElement as iOe,
  GDe,
} from "../../workbook/compose-element-snapshot";

import {
  buildSlideLayoutBlob as PDe,
  buildInheritedLayers as BDe,
  attachOverlappingTableCells as vOe,
} from "../../workbook/compose-element-snapshot";

// Thin aliases: three-chart-camera + chart-trendline + chart-scatter-scale + paint-images + constraint-layout + selection-style-grid drained (wave-97).

var workbookHelper749 = workbookHelper749Compose;

import { The, Ohe, ige } from "../../workbook/chart-elements";

// Thin alias: cluster ensure for Binding722 / chart asset init.

import { ensureImageConnectorInit } from "../../workbook/image-connector";

import { roundedConnectorCorner as FPe } from "../../workbook/image-connector";

var ensureImageConnectorCluster = ensureImageConnectorInit;

import { ensureChartAssetInit, Che, She } from "../../workbook/chart-asset";

var ensureChartAssetCluster = ensureChartAssetInit;

import { ensureTableVoInit, fhe, yhe, xhe } from "../../workbook/table-vo";

var ensureTableVoCluster = ensureTableVoInit;

import {
  ensureChartsCollectionInit,
  workbookC,
  workbookS,
  REe,
  CEe,
} from "../../workbook/charts-collection";

var ensureChartsCollectionCluster = ensureChartsCollectionInit;

import {
  ensureMermaidFlowchartInit,
  OPe,
  PPe,
  NPe,
} from "../../workbook/mermaid-flowchart";

var ensureMermaidFlowchartCluster = ensureMermaidFlowchartInit;

import { ensureDeckKindsInit, qRe, wRe } from "../../workbook/deck-kinds";

var ensureDeckKindsCluster = ensureDeckKindsInit;

import {
  ensureShapeElementInit,
  normalizeShapeAddProps as hze,
} from "../../workbook/shape-element";

import {
  applyShapeElementPatch as fze,
  resolveFontSizeFromPtOrPx as vze,
} from "../../workbook/shape-style-apply";

var ensureShapeElementCluster = ensureShapeElementInit;

import {
  ensureSlidesCollectionInit,
  _workbookY,
  _workbookV,
} from "../../workbook/slides-collection";

var ensureSlidesCollectionCluster = ensureSlidesCollectionInit;

import {
  ensureConstraintSolverInit,
  csH,
  bDe,
  createPairMap,
  workbookBinding1350,
  workbookBinding1351,
  workbookBinding1354,
  workbookBinding1362,
} from "../../workbook/constraint-solver";

var ensureConstraintSolverCluster = ensureConstraintSolverInit;

void csH;
void createPairMap;
void workbookBinding1350;
void workbookBinding1351;
void workbookBinding1354;
void workbookBinding1362;

import {
  ensureFormulaOpcodesInit,
  X_t,
  Z_t,
} from "../../workbook/formula-opcodes";

var ensureFormulaOpcodesCluster = ensureFormulaOpcodesInit;
import {
  ensureTableElementInit,
  _workbookH,
  _workbookM,
  eDe,
  cDe,
} from "../../workbook/table-element";

import {
  ensureTableRowRangeInit,
  YEe,
  QEe,
  JEe,
  _workbookG,
  workbookUnderscore,
} from "../../workbook/table-row-range";

var ensureTableElementCluster = ensureTableElementInit;

var ensureTableRowRangeCluster = ensureTableRowRangeInit;

// Thin aliases: JEe / Binding1315 reunited into table-row-range (wave-88).

void Z_t;

import { matchLookup as DZe } from "../../workbook/formula-match";

import {
  uniqueColumns as Ost,
  uniqueRows as Dst,
} from "../../workbook/formula-unique";

import { normalizeCodeChildren as YIe } from "../../workbook/compose-code-children";

import { maxVisibleDataLabelFontPx as tSe } from "../../workbook/chart-data-label-font";
import { resolveMarkerColor as QCe } from "../../workbook/chart-marker-color";
import { resolveShapeEffects as Kwe } from "../../workbook/shape-effects";
import {
  normalizeSheetCatalog as jgt,
  Agt,
} from "../../workbook/sheet-catalog";
import { newtonRaphson as vrt } from "../../workbook/formula-newton";

import {
  edate as s1e,
  F1e,
  I1e,
  q1e,
  d4e,
  n0e,
  n2e,
  Dot,
} from "../../workbook/formula-eng-mids";

import {
  monthsBetween as _9e,
  isSameMonthEnd as N9e,
  countMonthSteps as F9e,
  g1e,
  Qnt,
} from "../../workbook/formula-date-months";
import { transposeMatrix as A8e } from "../../workbook/formula-matrix-transpose";
import { addMonthsClamped as A7e } from "../../workbook/formula-date-add-months";
import { normalizeWorkbookDocShape as cvt } from "../../workbook/workbook-doc-shape";
import { resolveHistogramBinWidth as gSe } from "../../workbook/chart-bin-width";
import { paintCheckboxBox as owe } from "../../workbook/paint-checkbox";
import { resolveShapeFill as Gwe } from "../../workbook/shape-fill-resolve";
import { paintMaskedImage as qwe } from "../../workbook/shape-geometry-apply";
import {
  loadSlideGroupBitmaps as _Ee,
  Xwe,
  Zwe,
} from "../../workbook/mid-paint-helpers";
import {
  filterCategoryDomain as zye,
  buildCategorySeries as Bye,
} from "../../workbook/chart-category-time";
import {
  categoryLabelOverflowPx as Rxe,
  minCategoryLabelGapPx as Vxe,
} from "../../workbook/chart-label-overflow";

import {
  ensureFormulaRegistryInit,
  Xdt,
  Zdt,
} from "../../workbook/formula-registry";
import {
  ensureSlidesListInit,
  cLe,
  sLe,
  X$,
} from "../../workbook/presentation-slide";

// Thin alias: cluster ensure for formula engine stats catalog.

var ensureFormulaRegistryCluster = ensureFormulaRegistryInit;

var ensureSlidesListCluster = ensureSlidesListInit;

import {
  addFromCodePlugin as cAe,
  hljsTokenStyle as vAe,
} from "../../workbook/presentation-code-block";

import { IIe } from "../../workbook/presentation-plugin-add";

import { bAe } from "../../workbook/presentation-code-block";

import { SAe, QAe } from "../../workbook/mermaid-slide-helpers";

// Thin alias: cluster ensure for mermaid slide helpers (Binding1592…QAe).

import {
  workbookBinding688,
  Ame,
  jme,
  Mme,
  Nme,
  Pme,
  Fme,
  Ime,
  Lme,
  Rme,
  zme,
  Bme,
  Vme,
  Hme,
  workbookBinding689,
  workbookBinding690,
  Ume,
  _w,
  Qme,
  ehe,
  workbookBinding691,
  workbookBinding692,
  workbookBinding693,
  workbookBinding694,
  workbookBinding695,
  workbookBinding696,
  workbookBinding697,
  the,
  nhe,
  rhe,
  ihe,
  workbookBinding698,
  workbookBinding699,
  ahe,
  normalizeStyleNameKey,
  Gme,
  resolvePresetSchemeColor,
  Kme,
  qme,
  Jme,
  Yme,
  Xme,
  Zme,
  $me,
} from "../../workbook/table-styles";

import { dye, fye } from "../../workbook/table-styles";

void workbookBinding688;
void Ame;
void jme;
void Mme;
void Nme;
void Pme;
void Fme;
void Ime;
void Lme;
void Rme;
void zme;
void Bme;
void Vme;
void Hme;
void workbookBinding689;
void workbookBinding690;
void Ume;
void _w;
void Qme;
void $me;
void ehe;
void workbookBinding691;
void workbookBinding692;
void workbookBinding693;
void workbookBinding694;
void workbookBinding695;
void workbookBinding696;
void workbookBinding697;
void the;
void nhe;
void rhe;
void ihe;
void workbookBinding698;
void workbookBinding699;
void normalizeStyleNameKey;
void Gme;
void resolvePresetSchemeColor;
void Kme;
void qme;
void Jme;
void Yme;
void Xme;
void Zme;

// Thin alias: cluster ensure for Excel table/pivot styles (Nme…ahe).

import {
  ensurePresentationTemplatesInit as dJe,
  ensureGoogleSlidesUnitsInit as pJe,
  ensureGoogleSlidesAdapterInit as SJe,
  oJe,
  sJe,
  cJe,
  lJe,
  fJe,
  workbookBinding1807,
  workbookBinding1808,
  workbookBinding1809,
  workbookBinding1810,
  workbookBinding1811,
  mJe,
  hJe,
  gJe,
  _Je,
  vJe,
  yJe,
  xJe,
  GoogleSlidesAdapter,
} from "../../workbook/google-slides-adapter";

void oJe;
void sJe;
void cJe;
void lJe;
void fJe;
void workbookBinding1807;
void workbookBinding1808;
void workbookBinding1809;
void workbookBinding1810;
void workbookBinding1811;
void mJe;
void hJe;
void gJe;
void _Je;
void vJe;
void yJe;
void xJe;
void GoogleSlidesAdapter;
void pJe;

// Thin alias: cluster ensure for Google Slides adapter (oJe/pJe/SJe).

import {
  ensureComposeLayoutMetaInit as DOe,
  ensureComposeSizeHelpersInit as workbookBinding1499,
  ensureComposeElementBuildersInit as OOe,
  ensureComposeDslAggregatorInit as workbookBinding1528,
  workbookBinding1490,
  workbookBinding1491,
  workbookBinding1492,
  workbookBinding1493,
  workbookBinding1494,
  workbookBinding1495,
  workbookBinding1496,
  workbookBinding1497,
  workbookBinding1498,
  workbookBinding1500,
  workbookBinding1501,
  workbookBinding1502,
  workbookBinding1503,
  workbookBinding1504,
  workbookBinding1505,
  workbookBinding1506,
  workbookBinding1507,
  workbookBinding1508,
  workbookBinding1509,
  workbookBinding1510,
  workbookBinding1511,
  workbookBinding1512,
  workbookBinding1513,
  workbookBinding1514,
  workbookBinding1515,
  _q,
  workbookBinding1516,
  workbookBinding1517,
  workbookBinding1518,
  workbookBinding1519,
  workbookBinding1520,
  workbookBinding1521,
  workbookBinding1522,
  workbookBinding1523,
  workbookBinding1524,
  workbookBinding1525,
  workbookBinding1526,
  workbookBinding1527,
  $K,
} from "../../workbook/compose-dsl";

void workbookBinding1490;
void workbookBinding1491;
void workbookBinding1492;
void workbookBinding1493;
void workbookBinding1494;
void workbookBinding1495;
void workbookBinding1496;
void workbookBinding1497;
void workbookBinding1498;
void $K;
void workbookBinding1499;
void workbookBinding1500;
void workbookBinding1501;
void workbookBinding1502;
void workbookBinding1503;
void workbookBinding1504;
void workbookBinding1505;
void workbookBinding1506;
void workbookBinding1507;
void workbookBinding1508;
void workbookBinding1509;
void workbookBinding1510;
void workbookBinding1511;
void workbookBinding1512;
void workbookBinding1513;
void workbookBinding1514;
void workbookBinding1515;
void _q;
void workbookBinding1516;
void workbookBinding1517;
void workbookBinding1518;
void workbookBinding1519;
void workbookBinding1520;
void workbookBinding1521;
void workbookBinding1522;
void workbookBinding1523;
void workbookBinding1524;
void workbookBinding1525;
void workbookBinding1526;
void workbookBinding1527;
void DOe;
void OOe;
void workbookBinding1528;

// Thin alias: cluster ensure for compose DSL (Binding1490–1528).

var ensureWorksheetsCollectionCluster = ensureWorksheetsCollectionInit;

// Thin aliases for TXe / WorkbookN (legacy Binding1827 / SXe cluster).
var workbookBinding1827 = "__oaiPopcornFreezePanes";
var workbookBinding1828: any = new Proxy(function () {} as any, {
  construct(_t, args) {
    ensureSheetInit();
    return new (sheetBag.Sheet as any)(...args);
  },
  get(_t, prop) {
    ensureSheetInit();
    const v = (sheetBag.Sheet as any)[prop];
    return typeof v === "function" ? v.bind(sheetBag.Sheet) : v;
  },
});
var yXe: any = new Proxy(function () {} as any, {
  construct(_t, args) {
    ensureSheetInit();
    return new (sheetBag.yXe as any)(...args);
  },
  get(_t, prop) {
    ensureSheetInit();
    const v = (sheetBag.yXe as any)[prop];
    return typeof v === "function" ? v.bind(sheetBag.yXe) : v;
  },
});
var _Xe: any = new Proxy(function () {} as any, {
  construct(_t, args) {
    ensureSheetInit();
    return new (sheetBag._Xe as any)(...args);
  },
});
// SXe already imported as ensure.

import {
  fallbackRandomUuid as Uue,
  bracedUuidUpper as workbookV,
  ensureStableIdConstantsInit as workbookH,
} from "../../workbook/stable-id";

import { resolvePresentationAid as ZRe } from "../../workbook/presentation-aid";
import {
  setPresentationRefSlideClass,
  ensureDetachedTextValue as dze,
  parseSchemeColorRef as yze,
  elementToAid as bze,
} from "../../workbook/presentation-ref";

import { rze } from "../../workbook/presentation-apply";

import {
  ensureElementStyleReferences as ide,
  isPositiveNumericId as ade,
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "../../workbook/slide-element";

import { parseContentTypeMime as ode } from "../../workbook/image-mime";

import {
  resolveBorderRadiusToken as hde,
  ensureBorderRadiusTokensInit as _de,
  resolveShadowEffectReference as bde,
} from "../../workbook/shape-utility";

import {
  insertAxisElbow as xde,
  clampFixedPercent as jde,
} from "../../workbook/path-geometry";

import {
  ensureRoundRectAdjInit as Pde,
  stripUrlPath as Fde,
  composeImageAid as Kde,
  reverseShapeGeometryNameMap as Jde,
} from "../../workbook/image-source";

import {
  buildThreadAddOp as Yde,
  buildSparklineSetOp as Sfe,
} from "../../workbook/mutation-ops";

import { ensureDataValidationInit as Bpe } from "../../workbook/data-validation";

import {
  tokenizeFormula as WorkbookR,
  parseA1CellRef as WorkbookI,
  parseWholeColumnRef as workbookL,
  columnNumberToLetters as workbookP,
  ensureFormulaInit as workbookF,
} from "../../workbook/formula";

import { fillRangeFrom as dme } from "../../workbook/range-fill";
import { Range as workbookBinding672Import } from "../../workbook/range";
const Range = workbookBinding672Import;

import { PivotCaches as workbookBinding676Import } from "../../workbook/pivot-caches";
const PivotCaches = workbookBinding676Import;

import {
  Slicer as workbookBinding683Import,
  Slicers as workbookBinding684Import,
} from "../../workbook/slicers";
const Slicer = workbookBinding683Import;
const Slicers = workbookBinding684Import;

import { PivotTable as workbookBinding369Import } from "../../workbook/pivot-table";
const PivotTable = workbookBinding369Import;

const appInitialIit = ensureD3ScaleClusterInit;
const AppInitialRrt = ensureD3ShapeClusterInit;
const AppInitialQat = ensureD3FormatClusterInit;
const appInitialBat = ensureD3ArrayClusterInit;
const AppInitialYat = ensureD3ColorClusterInit;
const appInitialGmt = ensureViteModulepreloadRuntime;
const appInitialWmt = vitePreload;

/** Browser / UMD globals referenced by bundled three.js + sheet helpers. */
const __THREE_DEVTOOLS__:
  | {
      dispatchEvent?: (event: Event) => void;
    }
  | undefined = (
  globalThis as {
    __THREE_DEVTOOLS__?: {
      dispatchEvent?: (event: Event) => void;
    };
  }
).__THREE_DEVTOOLS__;
const HTMLVideoElement = globalThis.HTMLVideoElement;
const ImageBitmap = globalThis.ImageBitmap;
const VideoFrame = (
  globalThis as typeof globalThis & {
    VideoFrame?: typeof ImageBitmap;
  }
).VideoFrame;
import { D, S } from "../lodash-reduce-runtime";
import { K } from "../lodash-base-for";
import { j, Jn, tr, v, Zn } from "../../workbook/presentation-protobuf";
import { d, I, p, Z } from "../../workbook/spreadsheet-protobuf";
import { oye } from "../../workbook/merged-range-index";
import {
  _workbookB,
  _workbookF,
  _workbookX,
  _workbookP,
} from "../../workbook/slide-layout";
import { _workbookS, _workbookO } from "../../workbook/presentation-doc";

import {
  WorkbookN,
  __workbookT,
  workbookKt,
} from "../../workbook/workbook-core";

import { WorkbookD, _workbookU } from "../../workbook/comments";

import { aJe } from "../../workbook/workbook-shell-ensures";

import { workbookTt, workbookEt } from "../../workbook/emu-units";

import { workbookO } from "../../workbook/guide-layout-consts";
import { _u, Mde, _C, Cme, Tme, Eme } from "../../workbook/binding662-gate";
import { workbookM } from "../../workbook/shell-mid-ensures";
import { _workbookJ } from "../../workbook/text-frame-insets";

import { exe } from "../../workbook/chart-layout-ensures";

import {
  workbookE,
  workbookD,
  workbookW,
  _workbookT,
} from "../../workbook/presentation-assets";

import { _workbookEt } from "../../workbook/mid-paint-helpers/clamp-nonneg-impl";
import { a, c, s, u } from "../d3-hierarchy";
import { B, O, T, z } from "../lodash-hNqv-runtime";
var workbookAt = yMergeUpdates;
export {
  workbookA,
  WorkbookAt,
  workbookAt,
  workbookB,
  workbookC,
  workbookCt,
  workbookD,
  workbookDollar,
  workbookDt,
  workbookE,
  workbookEt,
  workbookF,
  workbookG,
  workbookH,
  WorkbookI,
  workbookJ,
  workbookK,
  workbookL,
  workbookM,
  workbookN,
  workbookO,
  workbookOt,
  workbookP,
  workbookQ,
  WorkbookR,
  workbookS,
  workbookSt,
  _workbookT,
  workbookTt,
  workbookU,
  workbookV,
  workbookX,
  workbookY,
  workbookZ,
  workbookUnderscore,
  workbookT as _t,
  _workbookA,
  _workbookB,
  workbookBt,
  _workbookC,
  _workbookCt,
  WorkbookD,
  _workbookDt,
  _workbookEt,
  _workbookF,
  workbookFt,
  _workbookG,
  workbookGt,
  _workbookH,
  _WorkbookI,
  workbookIt,
  _workbookJ,
  workbookKt,
  _workbookL,
  workbookLt,
  _workbookM,
  workbookHt,
  workbookMt,
  WorkbookN,
  workbookNt,
  _workbookO,
  _workbookOt,
  _workbookP,
  workbookPt,
  _workbookQ,
  workbookR,
  workbookRt,
  _workbookS,
  _workbookSt,
  __workbookT,
  _workbookTt,
  _workbookU,
  workbookUt,
  _workbookV,
  workbookVt,
  workbookW,
  workbookWt,
  _workbookX,
  workbookXt,
  _workbookY,
  workbookYt,
  _workbookZ,
};
