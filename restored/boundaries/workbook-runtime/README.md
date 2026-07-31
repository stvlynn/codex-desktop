# workbook-runtime (intentional oversized terminal)

**Chunk:** `workbook-C49Dgk1_`  
**Public path:** `boundaries/workbook-runtime/index.ts` (~224.1k LOC remaining)  
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
- Next: ~~TextStyle VO + alignment/autofit/caps~~ (done wave-8); text-style CSS parsers (`helper80`–`83`, `workbookYt`) or worksheet core.

## Wave-8 progress

- Extracted TextStyle VO (`workbookVt`), Binding437, `workbookBt` ensure, and alignment/autofit/capitalization helpers (`$f`/`$ae`/helper100–102, `eoe`/`toe`/`roe`/helper105, `ioe`/`aoe`) → `workbook/text-style/`.
- Left `noe` / `workbookYt` / helper103–104 in boundary (shadow-CSS + declaration parsers); wired `noe` into TextStyle.shadow.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: text-style CSS declaration parsers (`helper80`–`83`, `workbookYt`), or worksheet/spreadsheet core clusters.
