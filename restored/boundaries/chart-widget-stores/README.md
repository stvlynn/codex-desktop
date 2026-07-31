# chart-widget-stores (intentional oversized terminal)

**Chunk:** `chart-widget-stores-SIOpvGDe`  
**Public path:** `boundaries/chart-widget-stores/index.tsx` (~78k LOC)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true`

## Inventory (Stage-3 drain)

| Slice | Approx LOC / locus | Identity | Status |
| ----- | ------------------- | -------- | ------ |
| Codex WidgetContext | early init + `visualization/chart-widget-stores/widget-context.tsx` | `createContext` / `useWidgetContext` | **Drained** → `visualization/` |
| Codex widget scope store | end glue + `widget-scope-store.ts` | `nameToId` / `widgetState` + host bag | **Drained** → `visualization/` |
| Immer (stock) | ~3k+ embedded + `vendor/immer.ts` | `Symbol.for("immer-*")`, `produce` | **npm-shimmed** (`vendor/immer` → `immer`); body still inlined for RTK |
| Redux Toolkit (stock) | ~configureStore/createSlice cluster (~4k–6k) | redux-toolkit.js.org error strings | **Not separable yet** — entangled with Recharts store; no consumer bare import |
| Recharts (stock) | ~legend/pie/bar/line/area/scatter (~6k–40k) | `recharts-*` classNames | **Not separable yet** — Codex chart wrappers (`_chartWidgetStoresS`, Pie/Bar…) own the public aliases |
| Codex chart chrome / i18n | mid–end (`chartWidgetStoresA`/`I`, locales, `_chartWidgetStoresS`) | Chart_* data attrs, locale JSON map | **Next slices** |

## Decision

**Not a single npm-first shim.** The dump is a **composite** of stock Recharts + RTK/Immer **plus** Codex WidgetContext / app-scope widget store. A bare `export * from "recharts"` cannot replace `chartWidgetStores*` consumers.

## Why it stays in `boundaries/`

Same as workbook-runtime: oversized flat dump + residual Codex/vendor body, parked as a documented vendor-runtime terminal so full-tree QG stays green. `openBoundary` remains until Recharts/RTK/chart-chrome slices are drained.

## Exit criteria

1. When module boundaries allow, npm-shim separable Recharts / `@reduxjs/toolkit` / `immer` slices (immer already shimmed; RTK/Recharts still entangled).
2. Promote Codex widget-store / context glue into `visualization/` — **started** (`visualization/chart-widget-stores/`).
3. Thin or remove this boundary; clear `openBoundary`.
4. QG on promoted `visualization/*` (and any new npm shims) without the flat-boundary exemption.

## Drain notes

- Mega edits are **script/line-range only** (`_tmp-chart-widget-stores-drain/drain-codex-glue.ts`), never hand StrReplace.
- Do not fight concurrent workbook-runtime drain agents.
