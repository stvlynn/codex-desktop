# workbook-runtime (intentional oversized terminal)

**Chunk:** `workbook-C49Dgk1_`  
**Public path:** `boundaries/workbook-runtime/index.ts` (~215.8k LOC remaining)  
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
| Document glue | scattered | DOCX protobuf already faced under `workbook/document-*` |
| D3 chart helpers | imports + mid body | Prefer existing `vendor/d3-*` / ensure-* stubs |

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
- Boundary LOC ≈ 221739.
- Next: ~~MathML cluster (`helper127`+/Doe/Eoe)~~ (done wave-13); ~~font-stack helpers (`helper147`+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-13 progress

- Extracted MathML codec (`helper127`–`146`, `Doe`/`Eoe`, token splitters, attr maps, `Binding466`–`482` / `$m`) → `workbook/math-ml/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and font-stack helpers (`helper147`+) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 220444.
- Next: ~~font-stack / math-font helpers (`helper147`+/Binding483+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-14 progress

- Extracted CSS font-stack (`helper147`–`149`, `sse`, `Binding483`–`489`) + math-font names (`Binding490`–`494`) + TeX layout constants (`helper150`–`151` / `_h` / `cse`) + typography units (`helper152`–`153` / `_workbookDt` / `Binding495`–`496` / `workbookUt`) → `workbook/font-stack/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and math-layout engine (`lse`/`use`/`helper154+`/`Hse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 220320.
- Next: ~~math-layout engine (`lse`/`use`/`helper154+`/`Hse`)~~ (done wave-15); worksheet/spreadsheet core if a clean slice appears, or effects/`_g` cluster.

## Wave-15 progress

- Extracted math-layout engine (`lse`/`use`/`helper154`–`180` / `*se` node layouters / `Hse` + `Binding497`–`515`) → `workbook/math-layout/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 217915.
- Next: ~~effects/`_g` + document-style cluster~~ (done wave-16); worksheet/spreadsheet core if a clean slice appears, or placeholder-resolve neighbors.

## Wave-16 progress

- Extracted effects/`_g` (`Binding516`) + contiguous document-style / theme-style cluster (`helper181`–`188`, `workbookLt`/`It`/`Nt`/`Rt`, `WorkbookAt`, `workbookDollar`) → `workbook/document-style/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 217443.
- Next: ~~placeholder-resolve / `_workbookTt` neighbors~~ (done wave-17); `yce`/text-layout engine (`kce`/`j_`) if a clean slice appears, or worksheet/spreadsheet core.

## Wave-17 progress

- Extracted `_workbookTt` + placeholder-resolve neighbors (`helper189`–`193`, `ece`/`tce`/`nce`, `Binding521`) + theme typeface (`helper194`–`196`, `Binding522`) + contiguous layout helpers through auto-number format (`helper197`/`198`, `rce`/`ice`, `ace`/`$g`, docx-scheme parsers, `i_`/`a_`/`vce`) → `workbook/placeholder-resolve/`.
- Lifted DOCX scheme constants (`v_`/`y_`/`b_`/`x_`/`S_`/`C_`/`w_`/`T_`/`O_`/`A_`) out of `kce`; left `yce` + text-layout engine (`kce`/`j_`) in boundary.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 217035.
- Next: ~~`yce`/text-layout engine (`kce`/`j_`)~~ (done wave-18); worksheet/spreadsheet core if a clean slice appears.

## Wave-18 progress

- Extracted `yce` + line-box helpers (`bce`…`Oce`) + text-layout engine (`kce`/`j_`) with lifted constants (`l_`/`u_`/`d_`/`f_`/`p_`/`m_`/`h_`/`g_`/`__`/`E_`/`D_`/`k_`) → `workbook/text-layout/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary (engine uses a local `remainingSpaceAfterPriorOverlap` stand-in).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 215800.
- Next: worksheet/spreadsheet core if a clean line-range slice appears, or neighboring presentation/document glue.


