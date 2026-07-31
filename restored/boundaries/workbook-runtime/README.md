# workbook-runtime (intentional oversized terminal)

**Chunk:** `workbook-C49Dgk1_`  
**Public path:** `boundaries/workbook-runtime/index.ts` (~71.8k LOC remaining)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true`

## Decision

**Not npm-first.** This is Codex’s popcorn workbook / spreadsheet / presentation / document engine (formula + worksheet + D3 charts + mermaid + xlsx validation), not a stock package such as HyperFormula, SheetJS, Univer, or FortuneSheet.

## Domain inventory (wave-1)

| Domain | Approx locus (pre-drain) | Notes |
| ------ | ------------------------ | ----- |
| Shape geometry enum + name map | ~16k–17k | **Drained** → `workbook/shape-geometry.ts` + `workbook/chart-proto-name-maps/` |
| Chart/presentation proto ↔ camelCase bridges | Binding404 cluster | **Drained** with shape maps |
| Theme / pattern fill (Hie) | ~15.7k–16.2k | **Drained** → `workbook/theme-color/` |
| Fill value object (workbookCt) | ~15.6k | **Drained (wave-4)** → `workbook/fill/` |
| Stylesheet Bae / Binding424 | ~15.5k–16.4k | **Drained (wave-5)** → `workbook/stylesheet/` |
| Line Binding431 stroke VO | ~15.7k | **Drained (wave-6)** → `workbook/line/` |
| Color-resolve helpers (Tae/St) | ~15.4k | **Drained (wave-7)** → `workbook/color-resolve/` |
| TextStyle VO (workbookVt) | ~15.5k–16.2k | **Drained (wave-8)** → `workbook/text-style/` |
| TextStyle CSS / shadow parsers | ~14.9k–15.7k | **Drained (wave-9)** → `workbook/text-style/` |
| Placeholder-style helpers (Vae/Uae/helper97+) | ~15.0k | **Drained (wave-10)** → `workbook/presentation-theme/` |
| Font metrics + grapheme segmenter | ~15.3k–15.8k | **Drained (wave-10)** → `workbook/font-metrics/` |
| Math LaTeX + plain-text | ~15.1k | **Drained (wave-12)** → `workbook/math-plain-text/` |
| MathML codec | ~15.1k | **Drained (wave-13)** → `workbook/math-ml/` |
| Font-stack / math-font / typography units | ~15.1k | **Drained (wave-14)** → `workbook/font-stack/` |
| Worksheet / spreadsheet core | ~50k–72k, ~210k–230k | Range/table/drawing APIs |
| Presentation + Mermaid hooks | ~142k–174k | Theme palettes drained → `workbook/presentation-theme/`; Mermaid/collab remain |
| Formula / xlsx validation | ~177k–230k | Serial dates, workbook validation (`WorkbookN`) |
| SSF number-format (`Binding571`) | ~2.9k | **Drained (wave-24)** → `vendor/ssf` npm shim (`ssf@0.11.2`)
| jStat stats (`qXe`) | ~8.1k | **Drained (wave-25)** → `vendor/jstat` npm shim (`jstat@1.9.6`)
| Bessel (`JXe`) | ~0.57k | **Drained (wave-25)** → `vendor/bessel` npm shim (`bessel@1.0.2`)
| Cell-XF / numFmt / col-row extents (`helper223`–`Binding586`) | ~0.7k | **Drained (wave-26)** → `workbook/cell-xf-format/`
| Worksheet autofit (`Tle` / `Binding232`–`Rle`) | ~0.7k | **Drained (wave-27)** → `workbook/worksheet-autofit/`
| RangeFormat (`Binding337` + `helper240`–`Jle` + `Binding589`–`593`/`Yle`) | ~1.8k | **Drained (wave-28)** → `workbook/range-format/`
| Icon-set (`Binding594`/`helper256`–`259`) | ~0.13k | **Drained (wave-29)** → `workbook/icon-set/`
| TextRun/Paragraph VOs (`Binding597`–`612`/`Xle`/`Zle`/`helper260`–`261`) | ~0.58k | **Drained (wave-29)** → `workbook/text-run/`
| Style-tokens (`Qle`/`Binding613`–`621`/`helper262`–`271`/`iue`/`aue`/`_x`) | ~0.43k | **Drained (wave-30)** → `workbook/style-tokens/`
| Text-selection (`Binding622`/`623` / WorkbookClass6) | ~1.06k | **Drained (wave-31)** → `workbook/text-selection/`
| Document glue | scattered | DOCX protobuf already faced under `workbook/document-*` |
| Shape utility-class / border-radius / shadow→effect | ~15.6k (post-mde) | **Drained (wave-38)** → `workbook/shape-utility/` |
| Path-geometry polyline / rect-edge helpers | ~15.7k (post-bde) | **Drained (wave-38)** → `workbook/path-geometry/` |
| Image-source VO / payload normalize | ~15.7k (post-Mde) | **Drained (wave-39)** → `workbook/image-source/` |
| Image element VO (Binding660) | ~15.7k (post-source) | **Drained (wave-40)** → `workbook/image-element/` |
| Thread/chart/CF mutation builders (Yde…helper319) | ~15.7k (post-image) | **Drained (wave-41)** → `workbook/mutation-ops/` |
| Sparkline/DV/shape/image mutation (Sfe…Wfe) + helper333 | ~15.7k (post-mutation) | **Drained (wave-42)** → `workbook/mutation-ops/` + `worksheet-attachment/` |
| CF/DV VO+API (helper322…Bpe) | ~1.2k (post-Binding662) | **Drained (wave-43)** → `workbook/conditional-format/` + `data-validation/` |
| Formula/token/WorkbookR (Vpe…workbookF) | ~1.4k (post-Binding662) | **Drained (wave-44)** → `workbook/formula/` |
| Fill-from / formula-address (dme…helper336) | ~0.4k (post-formula) | **Drained (wave-45)** → `workbook/range-fill/` + `formula-address/` |
| Range VO (Binding672/675 + bme/xme/Sme) | ~3.0k | **Drained (wave-46)** → `workbook/range/` |
| PivotCaches (Binding676 / Cme) | ~1.1k | **Drained (wave-47)** → `workbook/pivot-caches/` |
| Slicers (Binding677–684 / Tme/Eme) | ~0.42k | **Drained (wave-48)** → `workbook/slicers/` |
| PivotTable (Binding369 / `_u`) | ~0.85k | **Drained (wave-49)** → `workbook/pivot-table/` (peeled) |
| Field VOs (Binding343–361 + enums 335/336 + Class53) | ~2.7k | **Drained (wave-50)** → `workbook/pivot-fields/` |
| Formula array/eval (helper31–61 + $u Binding370–374) | ~1.1k | **Drained (wave-51)** → `workbook/formula-array/` |
| PivotLayout/cache hydrate (Binding334/wne + Cne/el/332/333 + helper24/hre) | ~0.37k | **Drained (wave-52)** → `workbook/pivot-table/` + `workbook/pivot-caches/`
| Yjs + lib0 (`Binding1`–`331` / `no` / `Bte`) | ~9.5k | **Drained (wave-53)** → `vendor/yjs` npm shim (`yjs@13.6.27`)
| Three.js (`Binding929`/`Xbe` + MathUtils helpers) | ~15.3k | **Drained (wave-54)** → `vendor/three` npm shim (`three@0.170.0`)
| highlight.js grammars (`wke`…`aAe` + `oAe`/`sAe`; contiguous after Binding1574/`Cke`) | ~7.9k | **Drained (wave-55)** → `boundaries/highlight-js` npm shim (`highlight.js@^11.11.1`)
| Zod (`helper789` / `$Zod*` / Binding1790–1799; Binding1790 var tail = recipes kept) | ~6.4k | **Drained (wave-56)** → `vendor/zod` npm shim (`zod@^4.4.3`)
| presentation recipes (`Binding1800`/`qWe`…`Yqe` + `Xqe`/`Zqe`/`aJe`) | ~7.3k | **Drained (wave-57)** → `workbook/presentation-recipes/`
| compose-layout engine (`Binding1390`/`MDe`…`Binding1488`) | ~3.9k | **Drained (wave-58)** → `workbook/compose-layout/` |
| WorkbookN / `__workbookT` (`Binding1996`) | ~4.4k | **Drained (wave-59)** → `workbook/workbook-core/` |
| Worksheet drawings (`helper373`…`Sve` + `Binding740`–`789`) | ~3.1k | **Drained (wave-60)** → `workbook/worksheet-drawings/` |
| Drawing-layout + sparklines (`Lve`/`Binding790`–`815`/`_D`) | ~1.6k | **Drained (wave-61)** → `workbook/worksheet-drawings/` + `workbook/sparklines/` |
| Mermaid→slide adapters (`Binding1687` / gitGraph·sequence·class·treeView) | ~3.0k | **Drained (wave-62)** → `workbook/mermaid-slide-adapters/`
| decimal.js (`helper939`…/`Binding1906`/`lit`/`Vit`) | ~4.4k | **Drained (wave-63)** → `vendor/decimal` npm shim (`decimal.js@10.6.0`) |
| D3 chart helpers | imports + mid body | Prefer existing `vendor/d3-*` / ensure-* stubs |
| graphlib Graph + dagre layout (`Binding1671` / `wNe` / `YNe`) | ~3.6k | **Drained (wave-73)** → `vendor/graphlib` + `vendor/dagre` npm shims |
| Image asset + connector routing (`Binding723`–`735` / `Jge` / `Yge`…`pve`) | ~3.1k | **Drained (wave-74)** → `workbook/image-connector/` |
| Chart asset (`She`/`Che`…`Binding721`/`722`) | ~2.4k | **Drained (wave-75)** → `workbook/chart-asset/` |
| Table VO (`fhe`/`yhe`/`xhe` + Binding700–702) | ~1.0k | **Drained (wave-76)** → `workbook/table-vo/` |
| Charts collection (`CEe`/`REe`/`Binding1299`/`workbookC`) | ~1.0k | **Drained (wave-77)** → `workbook/charts-collection/` |
| Mermaid flowchart (`$Ne`/Binding1675/`OPe`/Binding1685/`NPe`/`PPe`) | ~0.8k | **Drained (wave-78)** → `workbook/mermaid-flowchart/` |
| Deck kinds (`wRe`/`qRe`/Binding1738–1748) | ~0.9k | **Drained (wave-79)** → `workbook/deck-kinds/` |
| Shape element (`Binding736`/`739`) | ~0.76k | **Drained (wave-80)** → `workbook/shape-element/` |
| Slides collection (`_workbookY`/`_workbookV`) | ~0.91k | **Drained (wave-81)** → `workbook/slides-collection/` |
| Constraint solver (`bDe` / Binding1364–1368) | ~0.76k | **Drained (wave-82)** → `workbook/constraint-solver/` |
| Constraint solver prelude (Binding1350–1363) | ~0.39k | **Drained (wave-83)** → `workbook/constraint-solver/` |
| Formula opcodes (`Z_t`/`X_t`) | ~0.50k | **Drained (wave-83)** → `workbook/formula-opcodes/` |
| Table element (`_workbookH`/`eDe`…`cDe`/`_workbookM`) | ~0.72k | **Drained (wave-84)** → `workbook/table-element/` |
| Table row/range/columns/borders (`YEe`/`Binding1321`/`QEe`/`$Ee`) | ~0.58k | **Drained (wave-85)** → `workbook/table-row-range/` |
| Formula registry (`$dt`/`Xdt`/`Zdt`/`Binding1947`) | ~0.57k | **Drained (wave-86)** → `workbook/formula-registry/` |
| Presentation slide (`Z$`/`X$`/`cLe`/`sLe`) | ~0.79k | **Drained (wave-87)** → `workbook/presentation-slide/` |
| Table cell (`JEe`/`Binding1315`) | ~0.43k | **Drained (wave-88)** → `workbook/table-row-range/` (reunite) |
| Worksheets collection (`TXe`/`wXe`/`CXe`/`EXe`) | ~0.40k | **Drained (wave-88)** → `workbook/sheet/` |
| Chart canvas paint (`helper579`–`585` / `NCe` / `LCe` / `PCe`) | ~1.28k | **Drained (wave-89)** → `workbook/chart-paint/` |
| Doc-op apply (`helper1024` / `Zht` / `Qht`…`ggt` / `_gt`) | ~1.26k | **Drained (wave-90)** → `workbook/doc-op-apply/` |
| Three.js chart paint (`helper521` / `Qbe` / `$be`) | ~0.97k | **Drained (wave-90)** → `workbook/three-chart-paint/` |

## Why it stays in `boundaries/`

Full Stage-3 rewrite of a ~230kLOC flat dump is not a single-session deliverable. The file is a documented **vendor-runtime** terminal so full-tree QG does not false-fail on cryptic bindings / flat size. The `// Flat boundary … vendored` header is the per-file exemption (eligible only under `boundaries/`).

## Exit criteria

1. Split coherent domains out of the dump into `workbook/` (spreadsheet, presentation, document, formula, chart helpers).
2. Replace this path with a thin barrel (or delete once all consumers remapped).
3. Clear `openBoundary` and drop the vendored flat-boundary header.
4. `quality-gate.ts` on the promoted `workbook/*` modules (not `--vendored`).

## Wave-1 progress

- Extracted ~1.2k LOC: OOXML shape-geometry enum + 55 chart/presentation proto name-map bridges.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.

## Wave-2 progress

- Extracted theme scheme color sets, named CSS colors, color transform/parse helpers, `WorkbookColor`, and `PatternFill`.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.

## Wave-3 progress

- Extracted classic CSS named colors (Eae), ChatGPT theme + style defaults (Mae/jae), slide placeholder role maps, and warm alternate ChatGPT theme (Sle).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.

## Wave-4 progress

- Extracted Fill value object (`workbookCt`), gradient-kind maps, fill proto helpers, CSS value tokenizers, and gradient fill string parser.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~Stylesheet Bae/Binding424~~ (done wave-5).

## Wave-5 progress

- Extracted Stylesheet (`Bae`/`Binding424`), SpreadsheetFont/BorderSide/Borders/CellXf/NumberFormat (`Binding419`–`423`), and stylesheet helpers (border/fill clone, deep-clone, theme dxf).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept; Tae color resolver wired into helpers.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~Line Binding431~~ (done wave-6).

## Wave-6 progress

- Extracted Line stroke VO (`Binding431`), dash/compound style parsers + proto↔name maps (`Binding427`–`430`, `Yae`, `Xae`), and `ensureLineInit` (`Binding432`).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~color-resolve helpers~~ (done wave-7); TextStyle VO (`workbookVt` / Binding437 cluster).

## Wave-7 progress

- Extracted color-resolve helpers (`Sae`, `Cae`, `wae`, hex/value accessors, `Tae`, `workbookSt`) → `workbook/color-resolve/`.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept; Tae wire retained for stylesheet.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~TextStyle VO + alignment/autofit/caps~~ (done wave-8); ~~text-style CSS parsers~~ (done wave-9); worksheet/spreadsheet core.

## Wave-8 progress

- Extracted TextStyle VO (`workbookVt`), Binding437, `workbookBt` ensure, and alignment/autofit/capitalization helpers (`$f`/`$ae`/helper100–102, `eoe`/`toe`/`roe`/helper105, `ioe`/`aoe`) → `workbook/text-style/`.
- Left `noe` / `workbookYt` / helper103–104 in boundary (shadow-CSS + declaration parsers); wired `noe` into TextStyle.shadow.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~text-style CSS parsers~~ (done wave-9); worksheet/spreadsheet core clusters, or residual presentation placeholder helpers.

## Wave-9 progress

- Extracted CSS declaration parsers (`workbookHelper 80/81`, `iae`/`aae`/`oae`…`hae`, `tae`/`nae`), shadow-CSS (`workbookHelper 82/83`, `_ae`, `noe`), and TextStyle patch helpers (`workbookYt`, `workbookHelper 103/104`) → `workbook/text-style/`.
- Left `gae`/`workbookEt` EMU converters in boundary (still used by geometry mid-body); `rae`/`Binding411` re-exported as ensures.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~placeholder-style helpers + font-metrics~~ (done wave-10); worksheet/spreadsheet core clusters, or residual TextStyle style-resolve (`helper110`/`workbookT`).

## Wave-10 progress

- Extracted presentation placeholder-style helpers (`Vae`/`Uae`/`Wae`/`helper97`–`99`/`Gae`/`Kae`/`qae`/`Hae`) → `workbook/presentation-theme/placeholder-style.ts`.
- Extracted font-family match + OffscreenCanvas metrics cache + grapheme segmenter (`soe`…`goe`, `workbookMt`/`Ht`, `workbookPt`/`Ft`, `Soe`) → `workbook/font-metrics/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, and TextStyle style-resolve (`helper106`–`110`/`workbookT`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~TextStyle style-resolve + glyph-advance~~ (done wave-11); worksheet/spreadsheet core clusters (range/table/drawing), or math-plain-text helpers near the drained locus.

## Wave-11 progress

- Extracted TextStyle style-resolve (`helper106`–`111`, `_p`, `workbookT`/`workbookGt`/`Binding438`) → `workbook/text-style/`.
- Extracted glyph-advance / ink-bounds cache (`$p` / `Binding456`) → `workbook/font-metrics/glyph-advance-cache.ts`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, and `ooe` geometry helper in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~math-plain-text (Coe/helper121+)~~ (done wave-12); ~~MathML cluster (`helper127`+/Doe/Eoe)~~ (done wave-13); ~~font-stack helpers (`helper147`+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-12 progress

- Extracted math LaTeX parser (`Coe` / `Binding464`) + AST→plain-text helpers (`helper121`–`126`, `woe`, `Toe`) + unicode maps (`Binding457`–`463`) → `workbook/math-plain-text/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and MathML cluster (`helper127`+/Doe/Eoe) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~MathML cluster (`helper127`+/Doe/Eoe)~~ (done wave-13); ~~font-stack helpers (`helper147`+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-13 progress

- Extracted MathML codec (`helper127`–`146`, `Doe`/`Eoe`, token splitters, attr maps, `Binding466`–`482` / `$m`) → `workbook/math-ml/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and font-stack helpers (`helper147`+) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~font-stack / math-font helpers (`helper147`+/Binding483+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-14 progress

- Extracted CSS font-stack (`helper147`–`149`, `sse`, `Binding483`–`489`) + math-font names (`Binding490`–`494`) + TeX layout constants (`helper150`–`151` / `_h` / `cse`) + typography units (`helper152`–`153` / `_workbookDt` / `Binding495`–`496` / `workbookUt`) → `workbook/font-stack/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and math-layout engine (`lse`/`use`/`helper154+`/`Hse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~math-layout engine (`lse`/`use`/`helper154+`/`Hse`)~~ (done wave-15); worksheet/spreadsheet core if a clean slice appears, or effects/`_g` cluster.

## Wave-15 progress

- Extracted math-layout engine (`lse`/`use`/`helper154`–`180` / `*se` node layouters / `Hse` + `Binding497`–`515`) → `workbook/math-layout/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~effects/`_g` + document-style cluster~~ (done wave-16); worksheet/spreadsheet core if a clean slice appears, or placeholder-resolve neighbors.

## Wave-16 progress

- Extracted effects/`_g` (`Binding516`) + contiguous document-style / theme-style cluster (`helper181`–`188`, `workbookLt`/`It`/`Nt`/`Rt`, `WorkbookAt`, `workbookDollar`) → `workbook/document-style/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~placeholder-resolve / `_workbookTt` neighbors~~ (done wave-17); `yce`/text-layout engine (`kce`/`j_`) if a clean slice appears, or worksheet/spreadsheet core.

## Wave-17 progress

- Extracted `_workbookTt` + placeholder-resolve neighbors (`helper189`–`193`, `ece`/`tce`/`nce`, `Binding521`) + theme typeface (`helper194`–`196`, `Binding522`) + contiguous layout helpers through auto-number format (`helper197`/`198`, `rce`/`ice`, `ace`/`$g`, docx-scheme parsers, `i_`/`a_`/`vce`) → `workbook/placeholder-resolve/`.
- Lifted DOCX scheme constants (`v_`/`y_`/`b_`/`x_`/`S_`/`C_`/`w_`/`T_`/`O_`/`A_`) out of `kce`; left `yce` + text-layout engine (`kce`/`j_`) in boundary.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~`yce`/text-layout engine (`kce`/`j_`)~~ (done wave-18); worksheet/spreadsheet core if a clean slice appears.

## Wave-18 progress

- Extracted `yce` + line-box helpers (`bce`…`Oce`) + text-layout engine (`kce`/`j_`) with lifted constants (`l_`/`u_`/`d_`/`f_`/`p_`/`m_`/`h_`/`g_`/`__`/`E_`/`D_`/`k_`) → `workbook/text-layout/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary (engine uses a local `remainingSpaceAfterPriorOverlap` stand-in).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~canvas line-dash / gradient / pattern fill~~ (done wave-19); worksheet/spreadsheet core if a clean slice appears, or fill-resolve neighbors (`helper200+`/`workbookHelper212`).


## Wave-19 progress

- Extracted canvas line-dash (`M_`/`N_`) + gradient stop/blend (`Ace`…`L_`) + linear/radial gradient painters (`Pce`/`Fce`/`Ice`/`Lce`) + pattern tile painters (`R_`/`z_`/`Rce`) + pattern fill resolve (`zce`…`Wce`/`Gce`) → `workbook/canvas-fill/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~fill-resolve neighbors (`helper200+` / picture-fill / `workbookHelper212`)~~ (done wave-20); worksheet/spreadsheet core if a clean slice appears.


## Wave-20 progress

- Extracted picture pixel/effect pipeline (`helper200`…`ule`/`Binding542`) + fill emptiness/gradient-kind helpers (`dle`/`fle`/`ple`) + picture-fill (`mle`/`hle`/`gle`) + canvas fill-resolve (`workbookHelper212`/`Binding543`) → `workbook/canvas-fill/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~`helper213`/`yle` text canvas renderer (+ `helper214`)~~ (done wave-21); worksheet/spreadsheet core if a clean line-range slice appears, or text-box inset neighbors (`ble`/`Binding215+`).


## Wave-21 progress

- Extracted polar/shadow offset (`helper213`/`Binding544`/`Binding545`) + explicit-none fill (`helper214`) + line-cap/join (`_le`/`vle`) + text canvas renderer (`yle`/`Binding546`/`Binding547`) → `workbook/text-canvas/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~text-box inset neighbors (`ble`/`Binding215+`/`workbookZ`)~~ (done wave-22); worksheet/spreadsheet core if a clean line-range slice appears, or design-token Binding558+ neighbors.


## Wave-22 progress

- Extracted default text-box insets (`ble`/`Binding548`–`550`) + inset resolvers (`Binding215`–`217`/`xle`/`Binding219`) + master paragraph defaults (`Binding218`) + layout box (`Binding220`) + layout/render (`workbookQ`/`Binding221`/`workbookX`) + cluster ensure (`workbookZ`) → `workbook/text-box/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~design-token Binding558+ / WorkbookTheme~~ (done wave-23); worksheet/spreadsheet core or SSF Binding571 if a clean npm/line-range path appears.


## Wave-23 progress

- Extracted design-token resolvers (`Binding558`–`565`) + default scheme colors/text styles (`Binding566`/`_y`) + `WorkbookTheme` (`workbookJ`/`Binding567`–`568`/`workbookY`) + theme-from-proto (`helper222`) + scheme color aliases (`Binding569`–`570`) → `workbook/design-tokens/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and SSF `Binding571` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~SSF Binding571~~ (done wave-24); worksheet/spreadsheet core if a clean line-range slice appears.


## Wave-24 progress

- Replaced inlined SSF `Binding571` (`ssf@0.11.2`, version + `DO_NOT_EXPORT_SSF` fingerprint) with `vendor/ssf` npm shim; boundary keeps thin `workbookBinding571 = () => workbookSsf` for existing `toEsm(...)` call-sites.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 177434.
- Next: ~~jStat qXe + Bessel JXe~~ (done wave-25); worksheet/spreadsheet core if a clean line-range slice appears, or post-SSF cell-XF helpers (helper223+).


## Wave-25 progress

- Replaced inlined jStat `qXe` (`jstat@1.9.6`, UMD `jStat` fingerprint) + Bessel `JXe` (`bessel@1.0.2`, `DO_NOT_EXPORT_BESSEL` fingerprint) with `vendor/jstat` + `vendor/bessel` npm shims; boundary keeps thin `qXe`/`JXe` factories for existing `toEsm(..., 1)` call-sites.
- Worksheet/spreadsheet core still not cuttable as a clean line-range cluster (RangeFormat Binding589+ entangled with in-boundary VO classes; cell-XF helper223–231 is the next contiguous post-SSF neighbor ~0.6–3k LOC).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shims + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 177434.
- Next: ~~post-SSF cell-XF / numFmt / col-row extents (helper223–Binding586)~~ (done wave-26); RangeFormat Binding589 once VO deps (workbookBinding337/339/420/421) are drained.


## Wave-26 progress

- Extracted cell-XF apply/color helpers (`helper223`–`227`/`Cle`) + SSF numFmt table (`Binding572`–`577`) + default digit-width (`helper228`/`Binding578`–`581`) + SSF cell-value format (`wle`/`helper229`/`Binding582`–`583`) + col-row extents (`helper230`–`231`/`Binding584`) + font-face name strip (`Binding585`–`586`) → `workbook/cell-xf-format/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and RangeFormat `Binding589` (entangled with in-boundary VOs) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~worksheet helpers after Binding586 (`Tle`/`Binding232`–`Rle`)~~ (done wave-27); RangeFormat Binding589 once VO deps (workbookBinding337/339/420/421) are drained.


## Wave-27 progress

- Extracted worksheet autofit cluster: solid-fill (`Tle`) + merge text-style (`Binding232`/`Binding587`) + dropdown padding (`Ele`/`$y`/`Binding233`/`Binding588`) + col/row span parse (`Dle`/`Ole`) + styleIndex maps (`Binding234`–`236`) + measure cell text (`kle`/`Ale`/`Binding237`) + format/table/validation helpers (`Binding238`–`239`/`jle`/`Mle`/`Nle`/`Ple`/`Fle`) + autofit columns/rows (`Ile`/`Lle`) + cluster ensure (`Rle`) → `workbook/worksheet-autofit/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and RangeFormat `Binding589` (entangled with in-boundary VOs Binding337/339/420/421) in boundary.
- Vendor scan: no additional stock npm fingerprints in the post-586 locus (SSF/jStat/Bessel already drained).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~RangeFormat Binding589 once VO deps drained~~ (done wave-28); next contiguous post-RangeFormat neighbor (icon-set Binding594+) or remaining pivot VO cluster.


## Wave-28 progress

- Extracted RangeFormat unlock cluster: horizontalAlignment enum (`Binding337`, peeled from pivot `Binding339` init) + fill/font/border clone helpers (`helper240`–`244`) + 2D array shape (`zle`/`Ble`) + border/color/alignment helpers (`helper245`–`255`/`Ule`/`Wle`/`_b`/`Gle`/`Kle`/`qle`/`Jle`) + RangeFormatFill/RangeFormat/Font/Borders/BorderEdge (`Binding589`–`593`) + cluster ensure (`Yle`) → `workbook/range-format/`.
- VO status: `Binding420`/`421` already drained (wave-5 stylesheet); `Binding337` drained this wave; `Binding339` remains as pivot-enum init for 335/336/338 only (no longer required by RangeFormat).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain + AST Binding337 peel (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-RangeFormat icon-set + text-run/paragraph VOs~~ (done wave-29); remaining pivot VO surface (335/336/338) or next contiguous Qle/font-weight cluster.


## Wave-29 progress

- Extracted conditional-format icon-set catalog (`Binding594`–`596`) + name/count helpers (`helper256`–`259`) → `workbook/icon-set/`.
- Extracted TextRun/TextRuns/Paragraph/Paragraphs VOs (`Binding597`–`603`/`Xle`/`Zle`) + paragraphStyle clone (`helper260`) + list/numbered defaults (`Binding604`–`612`/`helper261`) → `workbook/text-run/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~contiguous post-text-run `Qle`/font-weight CSS / style token maps~~ (done wave-30); Binding622/623 text-selection class or remaining pivot VO surface (335/336/338).


## Wave-30 progress

- Extracted Tailwind-like style token maps (`Qle`/`Binding613`–`619`/`$le`/`eue`/`tue`/`nue`/`rue`) + className parser (`helper262`) + cluster ensure (`Binding620`) → `workbook/style-tokens/`.
- Extracted style-config helpers (`helper263`–`271`/`iue`/`aue`/`_x`) + ensure (`Binding621`, peeled from shared var with Binding622/623) → `workbook/style-tokens/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, pivot enums `Binding335`/`336`/`338`, and text-selection `Binding622`/`623` in boundary.
- Boundary wired via line-range drain + Binding621 peel (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding622/623 text-selection class (WorkbookClass6)~~ (done wave-31); remaining pivot VO surface (335/336/338) or WorkbookClass4 / helper272+ detached-text cluster.


## Wave-31 progress

- Extracted TextSelection VO (`Binding622`/`WorkbookClass6`) with method peels (compare + replace/insertAfter/run-split/mutation helpers) → `workbook/text-selection/`.
- Extracted cluster ensure (`Binding623`) → `workbook/text-selection/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, pivot enums `Binding335`/`336`/`338`, and WorkbookClass4 / helper272+ detached-text cluster in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~WorkbookClass4 / helper272–285 detached-text cluster~~ (done wave-32); remaining pivot VO surface (335/336/338) or next contiguous post-helper286 geometry cluster.


## Wave-32 progress

- Extracted detached-text input helpers (`helper272`–`285` + math/run/paragraph converters) → `workbook/detached-text/`.
- Extracted DetachedText VO (`Binding626`/`WorkbookClass4`) with style accessor + style-apply peels → `workbook/detached-text/`.
- Extracted stub host (`Binding625`) + helper/class ensures (`workbookK`/`Binding627`) → `workbook/detached-text/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-helper286 geometry/transform cluster (helper286–290 / Class11)~~ (done wave-33); remaining pivot VO surface (335/336/338) or next contiguous post-kue/plugin / helper291+ preset-shape cluster.


## Wave-33 progress

- Extracted element-frame resolver (`helper286`) + rotation unit helpers (`helper287`–`289` / Binding629) → `workbook/geometry-transform/`.
- Extracted canvas transform helpers (`Eue` / `helper290`) + FrameBbox VO (`Binding632` / WorkbookClass11) → `workbook/geometry-transform/`.
- Extracted deps/rotation/class ensures (`Binding628` / `$x` / `Oue`) → `workbook/geometry-transform/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-kue / helper291+ preset-shape formula cluster~~ (done wave-34); remaining pivot VO surface (335/336/338) or next contiguous post-Rue / id-gen cluster.


## Wave-34 progress

- Extracted granola plugin accessors (`kue`/`Aue`/`jue`/`Mue`) + slots (`Binding633`–`636`) → `workbook/preset-shape/`.
- Extracted preset-shape registry (`WorkbookW`/`helper291`/`Binding637`–`638`) + formula engine (`Pue`/`helper292`–`294`/`Binding639`–`641`) → `workbook/preset-shape/`.
- Extracted guide eval + text-frame rect (`Iue`/`helper295`–`297`/`Binding642`–`644`) → `workbook/preset-shape/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, Rue/zue/Bue/Vue/Hue autofit helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Rue autofit / UUID helpers (workbookHelper298+)~~ (done wave-35); remaining pivot VO surface (335/336/338) or next contiguous post-workbookHelper303 style-ref / element VO cluster.


## Wave-35 progress

- Extracted text-element autofit metrics (`Rue`/`zue`/`Bue`/`Vue`) + deps ensure (`Hue`) → `workbook/text-element-autofit/`.
- Extracted UUID / hash / scoped-id helpers (`Uue`/`workbookHelper298`–`302`/`workbookV`/`Gue`/`Kue`/`que`/`Jue`/`tde`/`nde`) + constants/ensures (`workbookH`/`Binding647`) → `workbook/stable-id/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, style-ref `workbookHelper303`/`ide`, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-workbookHelper303 style-ref / `_workbookZ` element VO~~ (done wave-36); remaining pivot VO surface (335/336/338) or next contiguous post-ode mime-sniff / helper304+ cluster.


## Wave-36 progress

- Extracted style-ref helpers (`workbookHelper303`/`ide`) + positive-id guard (`ade`) → `workbook/slide-element/`.
- Extracted base slide Element VO (`_workbookZ`) + cluster ensure (`workbookB`) → `workbook/slide-element/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, mime-sniff `ode`/`sde`/Binding648+, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-ode mime-sniff / Binding648–654 / sde/pde/mde~~ (done wave-37); remaining helper304+ border-radius/utility parsers, or pivot VO surface (335/336/338).


## Wave-37 progress

- Extracted content-type + magic-byte mime sniff (`ode`/`Binding648`/`sde`) → `workbook/image-mime/`.
- Extracted PNG/GIF/JPEG/WEBP size readers + probe (`Binding649`/`cde`/`lde`/`ude`/`dde`/`fde`/`Binding650`/`pde`) → `workbook/image-mime/`.
- Extracted object-fit contain/cover + letterbox helpers (`Binding651`–`654`/`mde`) → `workbook/image-mime/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, helper304+ border-radius/utility parsers (`hde`/`gde`/`_de`/`Binding655`…), and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~helper304+ border-radius / utility-class / shadow parsers~~ (done wave-38); remaining pivot VO surface (335/336/338), or post-Mde image/shape VO cluster.


## Wave-38 progress

- Verified helper82/83 are text-style re-exports only (no residual boundary bodies); workbookHelper68/`workbookCt` already drained — helper304+ peel is cycle-free.
- Extracted border-radius tokens + shape utility-class parser + borderRadius coerce + shadow→effectReference (`hde`/`gde`/`_de`/`helper304`/`Binding655`/`vde`/`yde`/`helper305`/`bde`) → `workbook/shape-utility/`.
- Extracted contiguous path-geometry helpers (`xde`/`Sde`/`helper306`–`310`/`Cde`/`wde`/`Tde`/`Ede`/`Dde`/`Ode`/`kde`/`Ade`/`jde`) → `workbook/path-geometry/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, `Mde`/image+shape VO neighbors (`Binding656`/`Nde`/`$S`/…), and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Mde image/shape VO cluster~~ (done wave-39); Binding660 Image class, or pivot Binding335/336/338 + Class53 if a clean peel appears.


## Wave-39 progress

- Extracted roundRect adj helpers (`Binding656`/`Nde`/`$S`/`Pde`) → `workbook/image-source/`.
- Extracted image payload / options normalize (`Fde`/`Ide`/`helper311`–`313`/`Lde`/`Rde`/`zde`/`Bde`/`Vde`/`Ude`/`Wde`/`Hde`/`Gde`/`Kde`) → `workbook/image-source/`.
- Extracted constants (`Binding657`/`qde`/`Binding658`/`Jde`/`Binding659`) → `workbook/image-source/`; left Binding660 Image class + slim Binding661 in boundary.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, thin `Mde` ensure, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding660 Image class~~ (done wave-40); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Yde chart/thread VO cluster.


## Wave-40 progress

- Extracted Binding660 Image element VO → `workbook/image-element/`.
- Extracted Binding661 drained ensure half → `ensureImageElementInit`; thin residual Binding661 keeps `workbookEt` + `Mde`.
- Left thin `Mde` in boundary (Binding412 → `gae` intentionally retained).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Yde thread/chart/CF mutation builders~~ (done wave-41); sparkline Sfe+ / data-validation Efe+, or pivot Binding335/336/338 + Class53 if cleanly separable.


## Wave-41 progress

- Extracted thread mutation builders (`Yde`/`Xde`/`Zde`) → `workbook/mutation-ops/`.
- Extracted chart.add/set builders (`Qde`/`$de`/`efe`…`helper314`) → `workbook/mutation-ops/`.
- Extracted conditionalformat.add + fill/color serializers (`pfe`/`mfe`…`helper319`) → `workbook/mutation-ops/`.
- Left sparkline (`Sfe`+) + data-validation (`Efe`+) in boundary; re-exported `workbookHelper319` for sparkline color peels.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~sparkline Sfe+ / data-validation Efe+~~ (done wave-42); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Binding662 VO cluster.


## Wave-42 progress

- Extracted sparkline builders (`Sfe`/`Cfe`/`wfe`/`Tfe`/`helper320`) → `workbook/mutation-ops/`.
- Extracted data-validation builders (`Efe`…`Nfe`) → `workbook/mutation-ops/`.
- Extracted shape.add/set builders (`Pfe`…`helper321`) → `workbook/mutation-ops/`.
- Extracted image.add/set builders (`Vfe`/`Hfe`/`Ufe`/`Wfe`) → `workbook/mutation-ops/`.
- Extracted worksheet owner WeakMap (`helper333`/`Binding669`) → `workbook/worksheet-attachment/`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Binding662 CF/DV VO cluster~~ (done wave-43); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Vpe formula/token cluster.


## Wave-43 progress

- Extracted CF helpers + rule factory (`helper322`…`lpe`) → `workbook/conditional-format/`.
- Extracted CF dataBar/iconSet/cfvo builders (`upe`…`ype`) + Binding663/xpe/Spe/Cpe → `workbook/conditional-format/`.
- Extracted DV builders (`Tpe`…`helper326`) + Lpe/Rpe/Binding664/zpe/Binding665 → `workbook/data-validation/`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, Vpe+ formula/token cluster, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Vpe formula/token/WorkbookR cluster~~ (done wave-44); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-dme fill-from / address cluster.


## Wave-44 progress

- Extracted formula char classifiers (`Vpe`/`helper327`/`Hpe`/`Upe`) → `workbook/formula/`.
- Extracted token scanners (`Wpe`…`Ype`) + tokenizer (`WorkbookR`) → `workbook/formula/`.
- Extracted A1/structured-ref helpers (`Zpe`/`WorkbookI`/`workbookL`/`helper329`/`workbookP`…) → `workbook/formula/`.
- Extracted formula parser (`ume`) + ensure (`workbookF`) + `parseFormula` (`helper328`) → `workbook/formula/`.
- Left Binding662/`_C` init gate, dme+ fill-from helpers, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-dme fill-from / formula-address helpers~~ (done wave-45); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Binding669 Range VO / address-utils cluster.


## Wave-45 progress

- Extracted fill-from core (`dme`/`helper330`/`331`/`fme`/`pme`/`mme`) + ensure (`hme`) → `workbook/range-fill/`.
- Extracted Excel serial/date coerce (`helper332`/`gme`) + typed cell coerce (`helper336`) → `workbook/range-fill/`.
- Extracted A1 shift + A1↔R1C1 converters (`helper334`/`_me`/`helper335`/`vme`/`yme`) + worksheet limits → `workbook/formula-address/`.
- Left Binding662/`_C` init gate, Binding669+/Binding675 Range VO init, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding675 Range VO / serial-date init~~ (done wave-46); pivot Binding335/336/338 + Class53 if cleanly separable, or Binding676 PivotCaches if peelable under flat limit.



## Wave-46 progress

- Extracted Range VO (`Binding672`/`WorkbookClass2`) with method peels (write/fill/copy/formulas/nav/matrix) → `workbook/range/`.
- Extracted DV guard (`bme`), ISO date-time RE (`xme`), sparklines helper (`Sme`); wired Binding670/671/673/674 to existing epoch/limit constants.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, Binding676 PivotCaches, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding676 PivotCaches~~ (done wave-47); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Cme slicer / PivotTable VO cluster.


## Wave-47 progress

- Extracted PivotCaches VO (`Binding676`/`Cme`) with method peels (`#l` render-layout + leaf `#E`/`#k`/`#M`) → `workbook/pivot-caches/`.
- Wired boundary pivot proto helpers (`helper8`/`27`/`28`/`29`, Binding332, `_re`) via `wirePivotCachesBoundaryHooks`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, slicer Binding677+, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Cme slicer Binding677+~~ (done wave-48); pivot Binding335/336/338 + Class53 if cleanly separable, or PivotTable Binding369/`_u` (peel under flat limit).


## Wave-48 progress

- Extracted slicer / Slicers VO (`Binding677`–`684` / `helper337` / `wme` / `Tme`/`Eme`) → `workbook/slicers/`.
- Wired layout refresh via existing `pivot-caches` `refreshPivotTableLayout` hook; boundary keeps thin `Tme`/`Eme` aliases for `Binding683`/`684`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, PivotTable Binding369/`_u`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~field VO cluster Binding343–361 + enums 335/336 + Class53~~ (done wave-50); next contiguous post-helper31 formula/array cluster, or Binding334/wne + cache el/332.


## Wave-49 progress

- Extracted PivotTable VO (`Binding369`/`_u`) with peels (`rebuildCache` + `#D` filter descriptor) + helpers 25–30/`_re`/`vre`/WeakMaps → `workbook/pivot-table/`.
- Extracted layout enum `Binding338` (`PivotLayoutType`); left `Binding335`/`336` + Class53 in boundary (still required by PivotField/DataField VO cluster).
- Wired field-VO ctors / filter tokens / `el`/`helper22`/`24` via `wirePivotTableBoundaryHooks`; pivot-caches proto hooks now re-export from pivot-table.
- Left Binding662/`_C` init gate, pivot enums Binding335/336 + Class53 + field VOs, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: field VO cluster Binding343–361 (+ enums 335/336 + Class53), or next contiguous post-helper31 formula/array cluster; continue scanning for stock vendor fingerprints.


## Wave-50 progress

- Extracted field VO cluster (`Binding343`–`361`) with enums `Binding335`/`336` + Class53 (`Binding341`/PivotShowAs) + layout refresh helpers (`helper8`–`21`) + filter tokens (`dre`/`fre`/`pre`) → `workbook/pivot-fields/`.
- Reused `PivotLayoutType` from pivot-table for `Binding338`; left `Binding334`/wne, cache `el`/`Binding332`/`333`, and `helper24`/`hre` in boundary.
- Wired via `ensurePivotFieldsInit` + thin boundary stubs; `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-helper31 formula/array cluster~~ (done wave-51); Binding334/wne + cache el/332/333, or next contiguous post-gae residual.


## Wave-51 progress

- Extracted formula array/eval cluster (`helper31`–`61` + `Are`/`Ore`/`kre`/`jre`/`Mre`/`Nre` + `$u` Binding370–374) → `workbook/formula-array/`.
- Left `Binding334`/wne, cache `el`/`Binding332`/`333`, `helper24`/`hre`, Binding662/`_C`, and intentional terminals in boundary.
- Wired via thin boundary stubs + `ensureFormulaArrayInit` (`$u`); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 176346.
- Next: ~~Binding334/wne + cache hydrate leftovers~~ (done wave-52); next contiguous post-gae residual (or Binding662/`_C` when finally clean); continue scanning for stock vendor fingerprints.


## Wave-52 progress

- Extracted PivotLayout (`Binding334`/`wne`), cache hydrate (`Cne`/`$c`/`el`), PivotCacheModel (`Binding332`/`333`), and cell-hint helpers (`helper24`/`hre`) → `workbook/pivot-table/` + `workbook/pivot-caches/`.
- Peeled residual field/table glue stubs between layout and formula-array; boundary hooks now re-export real modules (wire kept as no-op).
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Wired via thin boundary stubs + `ensurePivotLayoutInit` / `ensurePivotCacheModelInit`; `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 176004.
- Next: contiguous post-gae residual, or Binding662/`_C` when finally clean; continue scanning for stock vendor fingerprints.


## Wave-53 progress

- Replaced inlined Yjs + lib0 (`workbookBinding1`…`zte` + `Bte` + `no`/`Binding187`–`331`, ~9.5k LOC) with `vendor/yjs` npm shim (`yjs@13.6.27`).
- Kept thin boundary aliases for external CRDT surface: `_o`=`Doc`, `is`=`UndoManager`, `Binding265`=`Array`, `Binding266`=`Map`, `Binding210`=`applyUpdate`, `Binding211`=`encodeStateAsUpdate`, `os`=`decodeUpdate`, `workbookAt`=`mergeUpdates`, `workbookKt`=no-op init.
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 166535.
- Next: contiguous post-gae residual / worksheet core / chart proto neighbors, or Binding662/`_C` when finally clean; continue scanning for stock vendor fingerprints (e.g. THREE remnants).


## Wave-54 progress

- Replaced inlined Three.js (`helper502`…`Ybe` + `Binding929`/`Xbe`, ~15.3k LOC) with `vendor/three` npm shim (`three@0.170.0`).
- Kept thin boundary aliases for external 3D surface: `Binding957`=`Vector3`, `Binding1041`=`Color`, `Binding1060`=`BufferGeometry`, `Binding1099`=`Line`, `Binding1091`=`LineBasicMaterial`, `Binding1073`=`Group`, `Binding972`=`Vector4`, `Binding973`=`Box3`, `Binding954`=`MathUtils`, `Binding1103`=`MeshPhysicalMaterial`, `Binding1101`=`CylinderGeometry`, `Binding1100`=`CanvasTexture`, `Binding1090`=`Sprite`, `Binding1077`=`SpriteMaterial`, `Binding1072`=`BoxGeometry`, `$P`=`Mesh`, `Binding1135`=no-op init.
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 151261.
- Next: Binding1574 (~8.2k) / Binding1790 (~8.0k) / Binding1996 (~4.5k), or Binding740 / `The` / `BYe`; continue scanning for stock vendor fingerprints.


## Wave-55 progress

- Identified Binding1574 as layout-element kind/prop Sets (`Cke`, ~258 LOC) — app schema, not vendor. Contiguous ~8.2k block = Cke + stock highlight.js language pack.
- Replaced inlined highlight.js grammars (`wke`…`aAe`) + `oAe`/`sAe` registerLanguage bootstrap (~7.9k LOC) with existing `boundaries/highlight-js` npm shim (`Core()` → `highlight.js@^11.11.1`).
- Kept thin boundary aliases: `Binding1591`=`Core()`, `sAe`=no-op init. Retained Binding1574/`Cke` in boundary.
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on highlight-js shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 143331.
- Next: Binding1790 (~8.0k Zod cluster) / Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or `The`/`BYe`; continue scanning for stock vendor fingerprints.


## Wave-56 progress

- Confirmed Binding1790 fingerprints as stock Zod (`ZodType` / `ZodPipe` / `ZodReadonly` / `$Zod*`). Binding1790's ~8.0k var chain is Zod public API (~1.0k) + presentation-recipe schemas (~7k) — only the Zod slice + preceding `$Zod*` core were cut.
- Replaced inlined Zod (`helper789` / Binding1751… / `$Zod*` / Binding1790–1799, ~6.4k LOC) with existing `vendor/zod` npm shim (`zod@^4.4.3`).
- Kept thin boundary aliases for recipe consumers: `helper816`=`zodString`, `helper817`=`zodNumber`, `helper818`=`zodArray`, `helper819`=`zodObject`, `YUe`=`zodEnum`, `Binding1799`=`ensureZodRuntime`. Recipe cluster `qWe`… retained.
- Left Binding662/`_C`, Binding1574/`Cke`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 136962.
- Next: Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or `The`/`BYe`; continue scanning for stock vendor fingerprints.


## Wave-57 progress

- Extracted presentation-recipe cluster (`Binding1800`/`qWe`…`Yqe` + `Xqe`/`Zqe`/`aJe` registry, ~7.3k LOC) → `workbook/presentation-recipes/`.
- Compose-layout builders stay in-boundary; recipes call them via `layout-hooks` wired from thin `aJe` stub.
- Left `dJe` presentation templates + Google Slides adapter (`pJe`/`SJe`), Binding662/`_C`, Binding1574/`Cke`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 129681.
- Next: Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or `The`/`BYe`; continue scanning for stock vendor fingerprints.




## Wave-58 progress

- Identified Binding1996 as WorkbookN/`__workbookT` core class (~4.4k, feature property bags + collab + calc) — **not vendor**; single private-field class needs Range-style method peel (deferred).
- Extracted Binding1390 compose-layout engine (`MDe`/`NDe`/helper673–675 + Binding1393 case-transform + Binding1465 measure + Binding1485 apply + Binding1488 theme tokens, ~3.9k LOC) → `workbook/compose-layout/`.
- Left public compose DSL (`Binding1490`–`1528`/`DOe`/`OOe`), Google Slides adapter (`pJe`/`SJe`), Binding662/`_C`, Binding1574/`Cke`, Binding1996/WorkbookN, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 125862.
- Next: Binding1996 WorkbookN class peel / compose DSL Binding1490–1528 / Binding740 (~3.0k) / `The`/`BYe` / Google Slides `pJe`/`SJe`.


## Wave-59 progress

- Extracted Binding1996 WorkbookN / `__workbookT` method bodies (~4.4k) → `workbook/workbook-core/` Range-style peels; class shell + `#opsHost` retained in open boundary (flat exemption).
- Wired boundary via `wireWorkbookCoreEnv` + thin WorkbookN init (line-range drain; no mega-file StrReplace); `openBoundary` kept.
- Left Binding662/`_C`, Binding1574/`Cke`, public compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 123201.
- Next: compose DSL Binding1490–1528 / Binding740 (~3.0k) / `The`/`BYe` / Google Slides `pJe`/`SJe`.

## Wave-60 progress

- Extracted worksheet-drawings cluster (`helper373`/`yve`/`bve`/`helper374`/`xve` + `Sve` + Binding740–789 anchors/chart·shape·image drawings, ~3.1k LOC) → `workbook/worksheet-drawings/`.
- Left `Lve` + Binding790 drawing-layout helpers, compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, Binding662/`_C`, Binding1574/`Cke`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 120160 (was 123201).
- Next: Binding790 layout helpers / compose DSL Binding1490–1528 / `The`/`BYe` / Google Slides `pJe`/`SJe`.

## Wave-61 progress

- Extracted Binding790 contiguous cluster (`Lve` + Binding790–803 drawing-layout + Binding804–815/`_D` cell/sparkline VOs, ~1.6k LOC) → `workbook/worksheet-drawings/drawing-layout.ts` + `workbook/sparklines/`.
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`/`BYe`, Binding662/`_C`, Binding1574/`Cke`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 118625 (was 120164).
- Next: compose DSL Binding1490–1528 / `The`/`BYe` / Google Slides `pJe`/`SJe` / Binding1687 (~3.0k) / Binding1906 (~2.4k).

## Wave-62 progress

- Identified Binding1687 (~3.0k) as Codex Mermaid→presentation slide adapters (gitGraph / sequence / class·state·er·requirement·mindmap / treeView + `P$` registry) — **not** stock `mermaid` npm (custom slide-element emitters).
- Extracted contiguous cluster → `workbook/mermaid-slide-adapters/` (split under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`/`BYe`, Binding1906/1967, Binding662/`_C`, Binding1574/`Cke`, earlier mermaid helpers (Binding1615–1685 / flowchart `NPe` / chart-like `zAe`), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 115720 (was 118625).
- Next: ~~Binding1906 decimal.js~~ (done wave-63); Binding1967 (~2.4k) / `BYe` (~2.4k) / `The` (~2.2k) / Binding1827 (~2.3k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe`.

## Wave-63 progress

- Confirmed Binding1906 contiguous cluster as stock `decimal.js` (`[DecimalError]`, `Symbol.toStringTag="Decimal"`, `nodejs.util.inspect.custom`, LN10/PI strings, `lit` factory). Full body is helper939…Pit + Binding1906/`$`/`Vit` (~4.4k), not only the ~2.4k Binding1906 var init.
- Replaced inlined decimal.js with `vendor/decimal` npm shim (`decimal.js@10.6.0`).
- Kept thin boundary aliases: `Binding1926`=`Decimal` constructor, `Vit`=`ensureDecimalInit` (no-op) for `rot()`/`Uat` call-sites.
- Left bond helpers (Prt/Lrt), Binding1967, `BYe`, `The`, Binding1827, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 111324.
- Next: Binding1967 (~2.4k) / `BYe` (~2.4k) / Binding1827 (~2.3k) / `The` (~2.2k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / earlier mermaid helpers Binding1615–1685.

## Wave-64 progress

- Identified Binding1967 contiguous cluster as Codex entity-query / snapshot helpers (NOT vendor): Kgt…e_t find/truncate + R_t kind maps/query ops + B_t path-split + J_t thread-comment serializers (~2.3k LOC).
- Extracted → `workbook/entity-query/` (split under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`/`BYe`, Binding1827/SXe sheet API, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Also drained `Ygt` find/inspect helper into `find-cells.ts` (was contiguous with Kgt…Jgt).
- Boundary LOC ≈ 109187 (was 111324; Δ −2,137).
- Next: Binding1827/SXe (~2.3–2.8k sheet/range API) / `BYe` canvas paint (~2.4k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / earlier mermaid helpers Binding1615–1685 / Ume table-styles (~1.4k).

## Wave-65 progress

- Identified Binding1827 contiguous cluster as Codex Sheet / worksheet API (NOT vendor): GYe…gXe helpers + Binding1826/aXe auto-heights + `_Xe` FreezePanes + Binding1828/`SXe` Sheet class + `yXe` null-sheet + `bXe`/`xXe` cell VOs (~2.8k LOC).
- Extracted → `workbook/sheet/` (prototype installers split under flat limit; private fields demoted to public `_x` for cross-file methods).
- Left `BYe` canvas paint, compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 106544 (was 109187; Δ −2,643).
- Next: `BYe` canvas paint (~2.4k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / earlier mermaid helpers Binding1615–1685 / Ume table-styles (~1.4k).

## Wave-66 progress

- Identified BYe contiguous cluster as Codex spreadsheet canvas painter (NOT vendor): `bYe` shape overlay + Binding1818/`xYe` emu maps + SYe…Helper831 paint helpers + `BYe` (~2.4k) + Binding1822–1824 paint consts (~3.2k LOC).
- Extracted → `workbook/canvas-paint/` (BYe split across setup/cells/cell-interactive/overlays via mutable paint bag under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 103388 (was 106544; Δ -3156).
- Next: compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / `The` (~2.2k) / earlier mermaid helpers Binding1615–1685 / Ume table-styles (~1.4k).

## Wave-67 progress

- Identified `The` contiguous cluster as Codex chart axis/series/legend/trendline VOs (NOT vendor): Ohe/`The` Axis number-format + Axis (`Binding705`) + Ahe…zhe series options + Binding712 legend + Hhe…Jhe plot extras + Yhe…nge markers/points + ige trendline (~2.2k LOC).
- Extracted → `workbook/chart-elements/` (split under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, Binding1831/`xLe`, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 101269 (was 103388; Δ -2119).
- Next: compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / Binding1831/`xLe` (~1.9k) / Binding1592 (~1.5k) / Ume table-styles (~1.4k) / earlier mermaid helpers Binding1615–1685.

## Wave-68 progress

- Identified contiguous `Binding1831`/`Binding1874` cluster as Codex Excel formula-stats wrappers over jstat/bessel (NOT vendor body): error consts + date serial mode + TYPE + BETA…Z.TEST distribution catalog + short aliases (~1.9k LOC).
- Extracted → `workbook/formula-stats/` (split under flat limit; helpers remain in boundary via `fsH` hooks; jstat/bessel via `vendor/*` + `toEsm`).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`/`oJe`, `xLe` walnut/comments cluster, Binding1592, Binding662/`_C`, Binding1574/`Cke`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 99489 (was 101269; Δ -1780).
- Next: `xLe` walnut layout consts (peel before comments/`_C`) / compose DSL Binding1490–1528 / Google Slides `oJe`/`pJe`/`SJe` (~1.4k) / Binding1592 (~1.5k) / Ume table-styles / formula helpers that feed Binding1831.

## Wave-69 progress

- Identified contiguous `Binding1592`/`SAe`…`QAe` cluster as Codex mermaid-slide helpers (NOT vendor): code theme tokens + text measure/run-style/scratch-slide + chart-like timeline/gantt plugins + fallback plugin + state/mind/arrow geometry (~1.4k LOC).
- Extracted → `workbook/mermaid-slide-helpers/` (split under flat limit; `workbookEt`/`_workbookS`/`_workbookO` remain in boundary via `mshH` hooks). Feeds existing `mermaid-slide-adapters` wire.
- Left compose DSL Binding1490–1528, Google Slides `oJe`/`pJe`/`SJe`, `xLe` walnut/comments (incl. `_C`), Ume table-styles, Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 98173 (was 99489; Δ -1316).
- Next: Google Slides `oJe`/`pJe`/`SJe` (~1.4k) / Ume table-styles (~1.4k) / clean `xLe` walnut peel before comments/`_C` (~660) / compose DSL Binding1490–1528 / flowchart `NPe` cluster.

## Wave-70 progress

- Identified contiguous `Nme`/`Ume`/`ahe` cluster as Codex Excel table/pivot style presets (NOT vendor): region names + preset color/font/fill/line/DXF templates + resolve helpers + style registry (~1.95k LOC).
- Extracted → `workbook/table-styles/` (split under flat limit; `wr`/`Zn`/`tr` via `presentation-protobuf`).
- Left compose DSL Binding1490–1528, Google Slides `oJe`/`pJe`/`SJe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, Table VO `fhe`/`ohe`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 96321 (was 98173; Δ -1852).
- Next: Google Slides `oJe`/`pJe`/`SJe` (~1.4k) / clean `xLe` walnut peel before comments/`_C` (~660) / compose DSL Binding1490–1528 / flowchart `NPe` cluster / Table VO `fhe`.

## Wave-71 progress

- Identified contiguous `oJe`/`pJe`/`SJe` cluster as Codex Google Slides adapter (NOT vendor): presentation templates + EMU/PT helpers + Slides↔presentation bridge class (~1.36k LOC).
- Extracted → `workbook/google-slides-adapter/` (class peeled via prototype installers under flat limit; `workbookEt`/`Z$`/`Binding739`/`Binding1389`/`Binding736`/`of`/`Binding410` remain in boundary via `gsaH` hooks).
- Left compose DSL Binding1490–1528, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, Table VO `fhe`/`ohe`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 95036 (was 96321; Δ -1285).
- Next: clean `xLe` walnut peel before comments/`_C` (~660) / compose DSL Binding1490–1528 / flowchart `NPe` cluster / Table VO `fhe`.

## Wave-72 progress

- Identified contiguous Binding1490–1528/`DOe`/`OOe` cluster as Codex presentation compose DSL (NOT vendor): layout MIME/meta + size modes + element builders (row/col/grid/table/image/shape) (~886 LOC).
- Extracted → `workbook/compose-dsl/` (split under flat limit; Binding661/739/1489/`_workbookH`/433/1213/1330/1328 remain in boundary via `cdslH` hooks; fill/design-tokens/compose-layout/etc. imported directly).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, Table VO `fhe`/`ohe`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 94271 (was 95036; Δ -765).
- Next: flowchart `NPe`/`PPe` + Binding1675/1685 (~0.8k) / Table VO `fhe`/`ohe` (~0.5k) / clean `xLe` walnut peel before comments/`_C` (~660).


## Wave-73 progress

- Identified contiguous inlined `graphlib` Graph (`Binding1671`/`rje`) + `dagre` layout (`wNe`/`YNe`/network-simplex/order/position, ~3.6k LOC) as stock vendor (NOT Codex) — already shimmed at `vendor/graphlib` + `vendor/dagre`.
- Replaced inlined body with thin aliases: `Binding1671`=`Graph`, `Binding1672`/`YNe`=no-op ensures, `wNe`→`dagre.layout`.
- Left flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, Table VO `fhe`/`ohe`, Chart `Binding721`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shims + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 90666 (was 94271; Δ -3605).
- Next: flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.8k) / Table VO `fhe`+Tables/DataTables (~1.0k) / Chart Binding721 (~0.7k) / image+path Binding723–735 (~3.0k mixed) / clean `xLe` walnut peel before comments/`_C`.

## Wave-74 progress

- Identified contiguous Binding723–735 cluster as Codex image-asset decode (EMF/WMF/SVG/bitmap `Jge`/`Binding728`) + connector pathfinding/routing (`Yge`…`pve` + `Binding734`/`735`) (~3.1k LOC) — NOT vendor.
- Extracted → `workbook/image-connector/` (split under flat limit via `icR` bag; path-geometry / geometry-transform / preset-shape / stable-id imported directly).
- Left Chart Binding721 (needs Che→Ege prelude), Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, Table VO `fhe`/`ohe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 87615 (was 90666; Δ -3051).
- Next: Chart Binding721 + Che→Ege prelude (~2.4k) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.8k) / Table VO `fhe`+Tables (~1.0k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-75 progress

- Identified contiguous She/Che→Ege + Binding721/722 cluster as Codex chart-asset / series VO (NOT vendor): area-grouping + axis patches + trendline collection + series fill/stroke + chart option VOs + regression helpers + Chart class (~2.4k LOC).
- Extracted → `workbook/chart-asset/` (split under flat limit; `Zae`/`Qae` remain in boundary via `caH` hooks; chart-elements / fill / line / text-style imported directly).
- Left Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, Table VO `fhe`/`ohe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 85270 (was 87616; Δ -2346).
- Next: Binding736 Shape (~?) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.8k) / Table VO `fhe`+Tables (~1.0k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-76 progress

- Identified contiguous fhe/yhe/xhe cluster as Codex Excel Table / Tables / DataTables VO (NOT vendor): header/totals helpers + Table class (`fhe`/Binding702) + Tables collection (`yhe`/`vhe`) + DataTables (`xhe`/`bhe`) (~1.0k LOC).
- Extracted → `workbook/table-vo/` (split under flat limit; address-utils + table-styles/`ahe`/`Wme` imported directly).
- Left Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `REe` chart-ref, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 84295 (was 85270; Δ -975).
- Next: Binding736 Shape (~0.76k) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.79k) / `REe`+Charts collection (~1.0k) / `cDe`+`_workbookH` table-element (~0.8k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-77 progress

- Identified contiguous CEe…workbookC cluster as Codex presentation ChartReference element + Charts collection (NOT vendor): default bbox (`CEe`) + chart option patches + `REe` aid + Binding1298/1299 chart-ref + `workbookS`/`workbookC` (~0.98k LOC).
- Extracted → `workbook/charts-collection/` (split under flat limit; chart-elements / slide-element / geometry-transform `frameUnitToEmu` imported directly; intentional `workbookEt` call dropped — EMU via `frameUnitToEmu`).
- Left Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 83337 (was 84295; Δ -958).
- Next: Binding736 Shape (~0.76k) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.79k) / `cDe`+`_workbookH` table-element (~0.8k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-78 progress

- Identified contiguous helper784/`$Ne`/Binding1675/`OPe`/Binding1685/`NPe`/`PPe` cluster as Codex mermaid flowchart layout+render+plugin (NOT vendor): px parse + dagre graph layout + scratch-slide render helpers + flowchart plugin (~0.81k LOC).
- Extracted → `workbook/mermaid-flowchart/` (split under flat limit; mermaid-slide-helpers Binding1615/1616/1618/1620/1667/`KAe`/`XAe`/`QAe`/`UAe`/`ZAe` + vendor graphlib/dagre imported directly).
- Left Binding736 Shape, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `qRe` deck kinds, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 82535 (was 83337; Δ -802).
- Next: Binding736 Shape (~0.76k) / `qRe` deck kinds (~0.82k) / `_workbookY` slides collection (~0.75k) / `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-79 progress

- Identified contiguous `wRe`/`qRe`/Binding1738–1748 cluster as Codex deck kind token maps + field parsers + NDJSON builders + snapshot query (NOT vendor): kind/field alias maps, include/exclude filters, slide/layout/shape builders, truncated NDJSON export (~0.92k LOC).
- Extracted → `workbook/deck-kinds/` (impl + query under flat limit; `ensureStableIdConstantsInit` / `randomBase36Id` from `workbook/stable-id`).
- Left Binding736 Shape, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `_workbookY` slides (~0.75k), `bDe` (~0.74k), `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 81619 (was 82535; Δ -916).
- Next: Binding736/739 Shape (~0.76k) / `_workbookY` slides collection (~0.75k) / `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-80 progress

- Identified contiguous Binding739/736 Shape cluster as Codex presentation Shape element VO (NOT vendor): Shape class + fill-config predicate + line cap/join/end maps + connector hit-pad (~755 LOC).
- Extracted → `workbook/shape-element/` (single impl under flat limit; `Mde`/Binding412/`gae` remain in boundary via `seH` hooks; slide-element / fill / line / image-connector / shape-utility / preset-shape / geometry-transform imported directly; intentional `workbookEt` ensure dropped — unused in class body).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `_workbookY` slides (~0.75k), `bDe` (~0.74k), `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 80878 (was 81619; Δ -741).
- Next: `_workbookY` slides collection (~0.75k) / `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-81 progress

- Identified contiguous helper660–665/`GEe`/`KEe`/`qEe` + `_workbookY`/`_workbookV`/Binding1313 cluster as Codex presentation slide shapes collection (NOT vendor): connector geometry helpers + shape-props builders + Shapes VO + edge map (~913 LOC).
- Extracted → `workbook/slides-collection/` (helpers + collection impl under flat limit; Binding1312/`helper659` remain in boundary via `scH` hooks; shape-element / image-connector / preset-shape / shape-geometry / stable-id / yjs imported directly; empty `workbookKt` stub dropped as noop).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `bDe` (~0.74k), `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 79982 (was 80878; Δ -896).
- Next: `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-82 progress

- Identified contiguous helper669 + `gDe`/`_De`/`vDe`/`yDe` + Binding1364–1368/`bDe` cluster as Codex Cassowary/kiwi constraint Solver (NOT vendor): nearZero + Solver/Symbol/Row + SymbolType enum (~763 LOC).
- Extracted → `workbook/constraint-solver/` (nearZero + impl under flat limit; Expression/Strength/Constraint/PairMap Binding1352/1357/1358/1359/1360/1361/1363 remain in boundary via `csH` hooks; `xDe` var-chain re-anchored after peel).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 79255 (was 79982; Δ -727).
- Next: no remaining ≥700 safe peels — only leave-behinds (`_workbookS` ~1.2k, WorkbookN shell ~1.8k) or strategy change (lower bar / peel Expression+Strength prelude with solver / walnut `xLe`).

## Wave-83 progress

- Re-scan ≥400 esmInit clusters: WorkbookN ~1845 (leave), `_workbookS` ~1236 (leave), `_workbookH` ~568, `$dt` ~566, `Z_t` ~498, `Z$` ~460. No ≥700 safe peels.
- Expanded constraint-solver with Expression/Strength/Constraint/PairMap/Variable prelude (helper668 + Binding1350–1363 + hDe, ~387 LOC); `csH` leave-behind hooks cleared.
- Extracted self-contained Excel formula opcode map `Z_t`/`X_t` (~498 LOC) → `workbook/formula-opcodes/`.
- Deferred `_workbookH`/`$dt` (heavy boundary ensure fan-out) and leave-behinds `_workbookS`/WorkbookN shell.
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `$dt`, `Z$`, `jgt` sheet-meta, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 78381 (was 79255; Δ -874).
- Next: `_workbookH`+eDe..cDe table-element (~0.7k) / `$dt` formula registry (~0.57k) / clean `xLe` walnut / leave-behinds only if consumers clean.

## Wave-84 progress

- Identified contiguous eDe…cDe + `_workbookH`/`_workbookM` cluster as Codex presentation Table element VO (NOT vendor): style-id resolve, cell-margin/column-track helpers, preview trim, Table class (~719 LOC).
- Extracted → `workbook/table-element/` (single impl under flat limit; YEe/Binding1321/QEe/`$Ee`/Binding1330 remain in boundary via `teH` hooks; slide-element / fill / geometry-transform / stable-id imported directly; intentional `workbookEt` ensure dropped — `of`/`workbookTt` from geometry-transform).
- Compose-dsl `ensureWorkbookH` hook cleared → direct `ensureTableElementInit` import.
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), YEe…Binding1330 table support (~0.6k), `$dt` formula registry (~0.57k), `Z$` (~460), and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 77713 (was 78381; Δ -668).
- Next: YEe…`$Ee` table row/range/columns/borders (~0.58k) / `$dt` formula registry (~0.57k) / clean `xLe` walnut / `Z$` (~460) / leave-behinds only if consumers clean.

## Wave-85 progress

- Identified contiguous YEe…`$Ee` cluster as Codex presentation table row/range/columns/borders (NOT vendor): Binding1316 row + XEe/ZEe helpers + Binding1317–1320 range + Binding1322–1323 columns + Binding1324 borders (~582 LOC).
- Extracted → `workbook/table-row-range/` (single impl under flat limit; JEe/Binding1315 remain in boundary via `trH` hooks; Binding1312/helper659 via slides-collection `scH`; text-style / fill / geometry-transform / line imported directly; intentional `workbookEt` ensure dropped).
- Table-element `teH` wire now resolves YEe/Binding1321/QEe/`$Ee`/Binding1316–1324 from imported module; Binding1330/1327 leave-behind unchanged.
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), JEe/Binding1315 (~0.39k), Binding1330 compose tracks, `$dt` formula registry (~0.57k), `Z$` (~460), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 77155 (was 77713; Δ -558).
- Next: `$dt` formula registry (~0.57k) / clean `xLe` walnut / `Z$` (~460) / JEe cell (~0.39k) / leave-behinds only if consumers clean.

## Wave-86 progress

- Identified contiguous Xdt/Zdt/`$dt` cluster as Codex Excel formula name→impl registry (NOT vendor): lookup helpers + Binding1947 map + Qdt error bag (~580 LOC).
- Extracted → `workbook/formula-registry/` (single impl under flat limit; 17 formula-impl ensures remain in boundary via `frH` hooks; 502 hoisted impl `function`s wired once via compact `setFormulaImplBag`; `workbookBinding1874`/`Z2e` from formula-stats; Ydt leave-behind).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), JEe/Binding1315 (~0.39k), `Z$` (~460), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 76686 (was 77155; Δ -469).
- Next: `Z$` presentation slide (~0.46k) / JEe table cell (~0.39k reunite with table-row-range) / clean `xLe` walnut / leave-behinds only if consumers clean.

## Wave-87 progress

- Identified contiguous `Z$`/`X$` + `cLe`/`sLe` cluster as Codex presentation Slide VO + Slides collection (NOT vendor): JSX prop sets + title helpers + slide/list classes (~788 LOC).
- Extracted → `workbook/presentation-slide/` (slide-vo + slides-list under flat limit; element/notes/background/placeholder/layout/add helpers remain in boundary via `psH` hooks; `scH` for Binding1312/helper659; compose-layout/theme/geometry/stable-id imported directly).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), JEe/Binding1315 (~0.39k), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 75978 (was 76686; Δ -708).
- Next: JEe table cell (~0.39k reunite with table-row-range) / clean `xLe` walnut / leave-behinds (`WorkbookN`/`_workbookS`) only if consumers clean — or lower peel bar / strategy change.

## Wave-88 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), helper585 (~924 chart paint), Zht (~596), $be (~578), … JEe (~389), zXe (~368), TXe (~364), kgt (~361).
- Skipped full `_workbookS`/`_workbookO`: consumers already hooked (canvas-paint / mermaid-slide-helpers) but 45-ensure fan-out still entangled with presentation leave-behinds (jLe…aYe / WorkbookN) — unsafe this wave.
- Reunited `JEe`/`Binding1315` (+ `_workbookG` / helper666) → `workbook/table-row-range/table-cell-impl.ts`; cleared `trH` JEe hooks; Paragraphs/Fill/Line/TextStyle/DetachedText/geometry/scH/Qt imported directly; intentional `workbookEt` ensure dropped.
- Peeled `CXe`+`TXe`/`wXe`+`EXe` → `workbook/sheet/worksheets-collection-impl.ts`; kme/Binding686 logger via `shH` hooks; Sheet/yXe via sheet bag.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on changed modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 75165 (was 75978; Δ -813).
- Next: zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / clean `xLe` walnut / partial WorkbookN method peel / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-89 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), helper579–585 chart paint (~1282 contiguous), Zht (~596), $be (~578), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Kpt/Qbe (~352/328).
- Skipped full `_workbookS`/`_workbookO`: 45-ensure fan-out still entangled with presentation leave-behinds (jLe…aYe / WorkbookN) — unsafe this wave.
- Peeled contiguous chart canvas paint `helper579`–`585` + `NCe`/`FCe`/`ICe`/`LCe`/`PCe` → `workbook/chart-paint/` (prelude + paint body under flat limit); ~45 chart helper leave-behinds via `cpH` hooks; `Cn`/`Mn`/`Yn`/`tr`/`workbookX`/`helper212`/`Binding721` imported directly.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 73958 (was 75165; Δ -1207).
- Next: zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / Zht export (~0.60k) / clean `xLe` walnut / partial WorkbookN method peel / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-90 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), Zht (~596) + contiguous converters/_gt (~1261 total), $be (~578) + Qbe/helper521 (~971 contiguous), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Kpt (~352).
- Skipped full `_workbookS`/`_workbookO` (45-ensure fan-out) and WorkbookN leave-behind.
- `$be` is app 3D chart paint — **not** covered by `vendor/three` (wave-54 stock three@0.170.0 shim).
- Peeled doc-op apply `helper1024`/`Zht` + `Qht`…`ggt`/`Binding1964`/`_gt` → `workbook/doc-op-apply/` (apply + converters under flat limit); comment-thread class + range/comments ensures via `doH` hooks; spreadsheetVn / chart-proto maps / getAttachedWorksheet imported directly.
- Peeled contiguous `helper521`/`Qbe`/`$be` → `workbook/three-chart-paint/`; three.js via `vendor/three`; chart helpers + SSF/camera via `tcH` hooks; chart-paint now imports `paintThreeChart` directly (dropped `cpH.paintThreeChart`).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 71784 (was 73958; Δ -2174).
- Next: N1e unit-convert (~0.52k) / zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / helpers 491+ / `_workbookS` only after presentation leave-behind ensures drain.



