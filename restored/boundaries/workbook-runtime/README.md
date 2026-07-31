# workbook-runtime (intentional oversized terminal)

**Chunk:** `workbook-C49Dgk1_`  
**Public path:** `boundaries/workbook-runtime/index.ts` (~226.0k LOC remaining; was ~226.6k)  
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
- Next: Stylesheet Bae/Binding424 (~font/fill/border/xf tables), or Line Binding431.
