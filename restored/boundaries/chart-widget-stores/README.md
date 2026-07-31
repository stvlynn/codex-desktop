# chart-widget-stores (intentional oversized terminal)

**Chunk:** `chart-widget-stores-SIOpvGDe`  
**Public path:** `boundaries/chart-widget-stores/index.tsx` (~78k LOC)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true`

## Decision

**Not a single npm-first shim.** The dump is a **composite**:

- Stock **Recharts** (`recharts-*` classNames, Pie/Bar/Line/Area/Scatter charts)
- Stock **Redux Toolkit** / **Immer** (`configureStore`, `createSlice`, immer symbols)
- Codex **WidgetContext** + app-scope widget store (`nameToId` / `widgetState`)

A bare `export * from "recharts"` (or RTK) cannot replace the public surface consumers already import as `chartWidgetStores*`.

## Why it stays in `boundaries/`

Same as workbook-runtime: oversized flat dump + Codex glue, parked as a documented vendor-runtime terminal so full-tree QG stays green without pretending Stage-3 acceptance of the body.

## Exit criteria

1. When module boundaries allow, npm-shim separable Recharts / `@reduxjs/toolkit` / `immer` slices (add deps; thin re-exports under `vendor/` or direct bare imports).
2. Promote Codex widget-store / context glue into `visualization/`.
3. Thin or remove this boundary; clear `openBoundary`.
4. QG on promoted `visualization/*` (and any new npm shims) without the flat-boundary exemption.
