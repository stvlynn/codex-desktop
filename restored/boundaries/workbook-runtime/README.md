# workbook-runtime (intentional oversized terminal)

**Chunk:** `workbook-C49Dgk1_`  
**Public path:** `boundaries/workbook-runtime/index.ts` (~185.3k LOC remaining)  
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
- Boundary LOC ≈ 193481.
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
- Next: ~~canvas line-dash / gradient / pattern fill~~ (done wave-19); worksheet/spreadsheet core if a clean slice appears, or fill-resolve neighbors (`helper200+`/`workbookHelper212`).


## Wave-19 progress

- Extracted canvas line-dash (`M_`/`N_`) + gradient stop/blend (`Ace`…`L_`) + linear/radial gradient painters (`Pce`/`Fce`/`Ice`/`Lce`) + pattern tile painters (`R_`/`z_`/`Rce`) + pattern fill resolve (`zce`…`Wce`/`Gce`) → `workbook/canvas-fill/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 213985.
- Next: ~~fill-resolve neighbors (`helper200+` / picture-fill / `workbookHelper212`)~~ (done wave-20); worksheet/spreadsheet core if a clean slice appears.


## Wave-20 progress

- Extracted picture pixel/effect pipeline (`helper200`…`ule`/`Binding542`) + fill emptiness/gradient-kind helpers (`dle`/`fle`/`ple`) + picture-fill (`mle`/`hle`/`gle`) + canvas fill-resolve (`workbookHelper212`/`Binding543`) → `workbook/canvas-fill/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 213230.
- Next: ~~`helper213`/`yle` text canvas renderer (+ `helper214`)~~ (done wave-21); worksheet/spreadsheet core if a clean line-range slice appears, or text-box inset neighbors (`ble`/`Binding215+`).


## Wave-21 progress

- Extracted polar/shadow offset (`helper213`/`Binding544`/`Binding545`) + explicit-none fill (`helper214`) + line-cap/join (`_le`/`vle`) + text canvas renderer (`yle`/`Binding546`/`Binding547`) → `workbook/text-canvas/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 212644.
- Next: ~~text-box inset neighbors (`ble`/`Binding215+`/`workbookZ`)~~ (done wave-22); worksheet/spreadsheet core if a clean line-range slice appears, or design-token Binding558+ neighbors.


## Wave-22 progress

- Extracted default text-box insets (`ble`/`Binding548`–`550`) + inset resolvers (`Binding215`–`217`/`xle`/`Binding219`) + master paragraph defaults (`Binding218`) + layout box (`Binding220`) + layout/render (`workbookQ`/`Binding221`/`workbookX`) + cluster ensure (`workbookZ`) → `workbook/text-box/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 212401.
- Next: ~~design-token Binding558+ / WorkbookTheme~~ (done wave-23); worksheet/spreadsheet core or SSF Binding571 if a clean npm/line-range path appears.


## Wave-23 progress

- Extracted design-token resolvers (`Binding558`–`565`) + default scheme colors/text styles (`Binding566`/`_y`) + `WorkbookTheme` (`workbookJ`/`Binding567`–`568`/`workbookY`) + theme-from-proto (`helper222`) + scheme color aliases (`Binding569`–`570`) → `workbook/design-tokens/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and SSF `Binding571` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 212002.
- Next: ~~SSF Binding571~~ (done wave-24); worksheet/spreadsheet core if a clean line-range slice appears.


## Wave-24 progress

- Replaced inlined SSF `Binding571` (`ssf@0.11.2`, version + `DO_NOT_EXPORT_SSF` fingerprint) with `vendor/ssf` npm shim; boundary keeps thin `workbookBinding571 = () => workbookSsf` for existing `toEsm(...)` call-sites.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 209067.
- Next: ~~jStat qXe + Bessel JXe~~ (done wave-25); worksheet/spreadsheet core if a clean line-range slice appears, or post-SSF cell-XF helpers (helper223+).


## Wave-25 progress

- Replaced inlined jStat `qXe` (`jstat@1.9.6`, UMD `jStat` fingerprint) + Bessel `JXe` (`bessel@1.0.2`, `DO_NOT_EXPORT_BESSEL` fingerprint) with `vendor/jstat` + `vendor/bessel` npm shims; boundary keeps thin `qXe`/`JXe` factories for existing `toEsm(..., 1)` call-sites.
- Worksheet/spreadsheet core still not cuttable as a clean line-range cluster (RangeFormat Binding589+ entangled with in-boundary VO classes; cell-XF helper223–231 is the next contiguous post-SSF neighbor ~0.6–3k LOC).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shims + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 200386.
- Next: ~~post-SSF cell-XF / numFmt / col-row extents (helper223–Binding586)~~ (done wave-26); RangeFormat Binding589 once VO deps (workbookBinding337/339/420/421) are drained.


## Wave-26 progress

- Extracted cell-XF apply/color helpers (`helper223`–`227`/`Cle`) + SSF numFmt table (`Binding572`–`577`) + default digit-width (`helper228`/`Binding578`–`581`) + SSF cell-value format (`wle`/`helper229`/`Binding582`–`583`) + col-row extents (`helper230`–`231`/`Binding584`) + font-face name strip (`Binding585`–`586`) → `workbook/cell-xf-format/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and RangeFormat `Binding589` (entangled with in-boundary VOs) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 199740.
- Next: ~~worksheet helpers after Binding586 (`Tle`/`Binding232`–`Rle`)~~ (done wave-27); RangeFormat Binding589 once VO deps (workbookBinding337/339/420/421) are drained.


## Wave-27 progress

- Extracted worksheet autofit cluster: solid-fill (`Tle`) + merge text-style (`Binding232`/`Binding587`) + dropdown padding (`Ele`/`$y`/`Binding233`/`Binding588`) + col/row span parse (`Dle`/`Ole`) + styleIndex maps (`Binding234`–`236`) + measure cell text (`kle`/`Ale`/`Binding237`) + format/table/validation helpers (`Binding238`–`239`/`jle`/`Mle`/`Nle`/`Ple`/`Fle`) + autofit columns/rows (`Ile`/`Lle`) + cluster ensure (`Rle`) → `workbook/worksheet-autofit/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and RangeFormat `Binding589` (entangled with in-boundary VOs Binding337/339/420/421) in boundary.
- Vendor scan: no additional stock npm fingerprints in the post-586 locus (SSF/jStat/Bessel already drained).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 199093.
- Next: ~~RangeFormat Binding589 once VO deps drained~~ (done wave-28); next contiguous post-RangeFormat neighbor (icon-set Binding594+) or remaining pivot VO cluster.


## Wave-28 progress

- Extracted RangeFormat unlock cluster: horizontalAlignment enum (`Binding337`, peeled from pivot `Binding339` init) + fill/font/border clone helpers (`helper240`–`244`) + 2D array shape (`zle`/`Ble`) + border/color/alignment helpers (`helper245`–`255`/`Ule`/`Wle`/`_b`/`Gle`/`Kle`/`qle`/`Jle`) + RangeFormatFill/RangeFormat/Font/Borders/BorderEdge (`Binding589`–`593`) + cluster ensure (`Yle`) → `workbook/range-format/`.
- VO status: `Binding420`/`421` already drained (wave-5 stylesheet); `Binding337` drained this wave; `Binding339` remains as pivot-enum init for 335/336/338 only (no longer required by RangeFormat).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain + AST Binding337 peel (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 197285.
- Next: ~~post-RangeFormat icon-set + text-run/paragraph VOs~~ (done wave-29); remaining pivot VO surface (335/336/338) or next contiguous Qle/font-weight cluster.


## Wave-29 progress

- Extracted conditional-format icon-set catalog (`Binding594`–`596`) + name/count helpers (`helper256`–`259`) → `workbook/icon-set/`.
- Extracted TextRun/TextRuns/Paragraph/Paragraphs VOs (`Binding597`–`603`/`Xle`/`Zle`) + paragraphStyle clone (`helper260`) + list/numbered defaults (`Binding604`–`612`/`helper261`) → `workbook/text-run/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 196605.
- Next: ~~contiguous post-text-run `Qle`/font-weight CSS / style token maps~~ (done wave-30); Binding622/623 text-selection class or remaining pivot VO surface (335/336/338).


## Wave-30 progress

- Extracted Tailwind-like style token maps (`Qle`/`Binding613`–`619`/`$le`/`eue`/`tue`/`nue`/`rue`) + className parser (`helper262`) + cluster ensure (`Binding620`) → `workbook/style-tokens/`.
- Extracted style-config helpers (`helper263`–`271`/`iue`/`aue`/`_x`) + ensure (`Binding621`, peeled from shared var with Binding622/623) → `workbook/style-tokens/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, pivot enums `Binding335`/`336`/`338`, and text-selection `Binding622`/`623` in boundary.
- Boundary wired via line-range drain + Binding621 peel (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 196204.
- Next: ~~Binding622/623 text-selection class (WorkbookClass6)~~ (done wave-31); remaining pivot VO surface (335/336/338) or WorkbookClass4 / helper272+ detached-text cluster.


## Wave-31 progress

- Extracted TextSelection VO (`Binding622`/`WorkbookClass6`) with method peels (compare + replace/insertAfter/run-split/mutation helpers) → `workbook/text-selection/`.
- Extracted cluster ensure (`Binding623`) → `workbook/text-selection/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, pivot enums `Binding335`/`336`/`338`, and WorkbookClass4 / helper272+ detached-text cluster in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 195149.
- Next: ~~WorkbookClass4 / helper272–285 detached-text cluster~~ (done wave-32); remaining pivot VO surface (335/336/338) or next contiguous post-helper286 geometry cluster.


## Wave-32 progress

- Extracted detached-text input helpers (`helper272`–`285` + math/run/paragraph converters) → `workbook/detached-text/`.
- Extracted DetachedText VO (`Binding626`/`WorkbookClass4`) with style accessor + style-apply peels → `workbook/detached-text/`.
- Extracted stub host (`Binding625`) + helper/class ensures (`workbookK`/`Binding627`) → `workbook/detached-text/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 193481.
- Next: ~~post-helper286 geometry/transform cluster (helper286–290 / Class11)~~ (done wave-33); remaining pivot VO surface (335/336/338) or next contiguous post-kue/plugin / helper291+ preset-shape cluster.


## Wave-33 progress

- Extracted element-frame resolver (`helper286`) + rotation unit helpers (`helper287`–`289` / Binding629) → `workbook/geometry-transform/`.
- Extracted canvas transform helpers (`Eue` / `helper290`) + FrameBbox VO (`Binding632` / WorkbookClass11) → `workbook/geometry-transform/`.
- Extracted deps/rotation/class ensures (`Binding628` / `$x` / `Oue`) → `workbook/geometry-transform/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 192767.
- Next: ~~post-kue / helper291+ preset-shape formula cluster~~ (done wave-34); remaining pivot VO surface (335/336/338) or next contiguous post-Rue / id-gen cluster.


## Wave-34 progress

- Extracted granola plugin accessors (`kue`/`Aue`/`jue`/`Mue`) + slots (`Binding633`–`636`) → `workbook/preset-shape/`.
- Extracted preset-shape registry (`WorkbookW`/`helper291`/`Binding637`–`638`) + formula engine (`Pue`/`helper292`–`294`/`Binding639`–`641`) → `workbook/preset-shape/`.
- Extracted guide eval + text-frame rect (`Iue`/`helper295`–`297`/`Binding642`–`644`) → `workbook/preset-shape/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, Rue/zue/Bue/Vue/Hue autofit helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 192344.
- Next: ~~post-Rue autofit / UUID helpers (workbookHelper298+)~~ (done wave-35); remaining pivot VO surface (335/336/338) or next contiguous post-workbookHelper303 style-ref / element VO cluster.


## Wave-35 progress

- Extracted text-element autofit metrics (`Rue`/`zue`/`Bue`/`Vue`) + deps ensure (`Hue`) → `workbook/text-element-autofit/`.
- Extracted UUID / hash / scoped-id helpers (`Uue`/`workbookHelper298`–`302`/`workbookV`/`Gue`/`Kue`/`que`/`Jue`/`tde`/`nde`) + constants/ensures (`workbookH`/`Binding647`) → `workbook/stable-id/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, style-ref `workbookHelper303`/`ide`, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 192052.
- Next: ~~post-workbookHelper303 style-ref / `_workbookZ` element VO~~ (done wave-36); remaining pivot VO surface (335/336/338) or next contiguous post-ode mime-sniff / helper304+ cluster.


## Wave-36 progress

- Extracted style-ref helpers (`workbookHelper303`/`ide`) + positive-id guard (`ade`) → `workbook/slide-element/`.
- Extracted base slide Element VO (`_workbookZ`) + cluster ensure (`workbookB`) → `workbook/slide-element/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, mime-sniff `ode`/`sde`/Binding648+, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 191433.
- Next: ~~post-ode mime-sniff / Binding648–654 / sde/pde/mde~~ (done wave-37); remaining helper304+ border-radius/utility parsers, or pivot VO surface (335/336/338).


## Wave-37 progress

- Extracted content-type + magic-byte mime sniff (`ode`/`Binding648`/`sde`) → `workbook/image-mime/`.
- Extracted PNG/GIF/JPEG/WEBP size readers + probe (`Binding649`/`cde`/`lde`/`ude`/`dde`/`fde`/`Binding650`/`pde`) → `workbook/image-mime/`.
- Extracted object-fit contain/cover + letterbox helpers (`Binding651`–`654`/`mde`) → `workbook/image-mime/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, helper304+ border-radius/utility parsers (`hde`/`gde`/`_de`/`Binding655`…), and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 191060.
- Next: ~~helper304+ border-radius / utility-class / shadow parsers~~ (done wave-38); remaining pivot VO surface (335/336/338), or post-Mde image/shape VO cluster.


## Wave-38 progress

- Verified helper82/83 are text-style re-exports only (no residual boundary bodies); workbookHelper68/`workbookCt` already drained — helper304+ peel is cycle-free.
- Extracted border-radius tokens + shape utility-class parser + borderRadius coerce + shadow→effectReference (`hde`/`gde`/`_de`/`helper304`/`Binding655`/`vde`/`yde`/`helper305`/`bde`) → `workbook/shape-utility/`.
- Extracted contiguous path-geometry helpers (`xde`/`Sde`/`helper306`–`310`/`Cde`/`wde`/`Tde`/`Ede`/`Dde`/`Ode`/`kde`/`Ade`/`jde`) → `workbook/path-geometry/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, `Mde`/image+shape VO neighbors (`Binding656`/`Nde`/`$S`/…), and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 190712.
- Next: ~~post-Mde image/shape VO cluster~~ (done wave-39); Binding660 Image class, or pivot Binding335/336/338 + Class53 if a clean peel appears.


## Wave-39 progress

- Extracted roundRect adj helpers (`Binding656`/`Nde`/`$S`/`Pde`) → `workbook/image-source/`.
- Extracted image payload / options normalize (`Fde`/`Ide`/`helper311`–`313`/`Lde`/`Rde`/`zde`/`Bde`/`Vde`/`Ude`/`Wde`/`Hde`/`Gde`/`Kde`) → `workbook/image-source/`.
- Extracted constants (`Binding657`/`qde`/`Binding658`/`Jde`/`Binding659`) → `workbook/image-source/`; left Binding660 Image class + slim Binding661 in boundary.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, thin `Mde` ensure, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 190412.
- Next: ~~Binding660 Image class~~ (done wave-40); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Yde chart/thread VO cluster.


## Wave-40 progress

- Extracted Binding660 Image element VO → `workbook/image-element/`.
- Extracted Binding661 drained ensure half → `ensureImageElementInit`; thin residual Binding661 keeps `workbookEt` + `Mde`.
- Left thin `Mde` in boundary (Binding412 → `gae` intentionally retained).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 189598.
- Next: ~~post-Yde thread/chart/CF mutation builders~~ (done wave-41); sparkline Sfe+ / data-validation Efe+, or pivot Binding335/336/338 + Class53 if cleanly separable.


## Wave-41 progress

- Extracted thread mutation builders (`Yde`/`Xde`/`Zde`) → `workbook/mutation-ops/`.
- Extracted chart.add/set builders (`Qde`/`$de`/`efe`…`helper314`) → `workbook/mutation-ops/`.
- Extracted conditionalformat.add + fill/color serializers (`pfe`/`mfe`…`helper319`) → `workbook/mutation-ops/`.
- Left sparkline (`Sfe`+) + data-validation (`Efe`+) in boundary; re-exported `workbookHelper319` for sparkline color peels.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 188864.
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
- Boundary LOC ≈ 188299.
- Next: ~~post-Binding662 CF/DV VO cluster~~ (done wave-43); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Vpe formula/token cluster.


## Wave-43 progress

- Extracted CF helpers + rule factory (`helper322`…`lpe`) → `workbook/conditional-format/`.
- Extracted CF dataBar/iconSet/cfvo builders (`upe`…`ype`) + Binding663/xpe/Spe/Cpe → `workbook/conditional-format/`.
- Extracted DV builders (`Tpe`…`helper326`) + Lpe/Rpe/Binding664/zpe/Binding665 → `workbook/data-validation/`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, Vpe+ formula/token cluster, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 187071.
- Next: ~~post-Vpe formula/token/WorkbookR cluster~~ (done wave-44); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-dme fill-from / address cluster.


## Wave-44 progress

- Extracted formula char classifiers (`Vpe`/`helper327`/`Hpe`/`Upe`) → `workbook/formula/`.
- Extracted token scanners (`Wpe`…`Ype`) + tokenizer (`WorkbookR`) → `workbook/formula/`.
- Extracted A1/structured-ref helpers (`Zpe`/`WorkbookI`/`workbookL`/`helper329`/`workbookP`…) → `workbook/formula/`.
- Extracted formula parser (`ume`) + ensure (`workbookF`) + `parseFormula` (`helper328`) → `workbook/formula/`.
- Left Binding662/`_C` init gate, dme+ fill-from helpers, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 185683.
- Next: ~~post-dme fill-from / formula-address helpers~~ (done wave-45); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Binding669 Range VO / address-utils cluster.


## Wave-45 progress

- Extracted fill-from core (`dme`/`helper330`/`331`/`fme`/`pme`/`mme`) + ensure (`hme`) → `workbook/range-fill/`.
- Extracted Excel serial/date coerce (`helper332`/`gme`) + typed cell coerce (`helper336`) → `workbook/range-fill/`.
- Extracted A1 shift + A1↔R1C1 converters (`helper334`/`_me`/`helper335`/`vme`/`yme`) + worksheet limits → `workbook/formula-address/`.
- Left Binding662/`_C` init gate, Binding669+/Binding675 Range VO init, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 185281.
- Next: pivot Binding335/336/338 + Class53 if cleanly separable, or contiguous post-Binding669 Range VO / serial-date init cluster; continue scanning for stock vendor fingerprints.


