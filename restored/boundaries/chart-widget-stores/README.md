# chart-widget-stores (intentional oversized terminal)

**Chunk:** `chart-widget-stores-SIOpvGDe`  
**Public path:** `boundaries/chart-widget-stores/index.tsx` (~60.1k LOC)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true`

## Inventory (Stage-3 drain)

| Slice | Approx LOC / locus | Identity | Status |
| ----- | ------------------- | -------- | ------ |
| Codex WidgetContext | early init + `visualization/chart-widget-stores/widget-context.tsx` | `createContext` / `useWidgetContext` | **Drained** → `visualization/` |
| Codex widget scope store | end glue + `widget-scope-store.ts` | `nameToId` / `widgetState` + host bag | **Drained** → `visualization/` |
| Codex chart chrome constants | `_chartWidgetStoresC` → `chart-chrome-constants.ts` | `Chart_*` classNames, palette, gaps | **Drained** → `visualization/` |
| Codex chart i18n / locales | `chartWidgetStoresA`/`I` + `locales/*` (~14k) | locale catalogs + IntlProvider wrapper | **Drained** → `visualization/` |
| Codex Chart component | `_chartWidgetStoresS` + helpers 914–933 (~2.4k) | series/legend/tooltip chrome | **Drained** → `visualization/chart.tsx` API + `boundaries/.../chart-component.tsx` body (Flat boundary; Recharts via surface) |
| Codex props / evaluate / action | `chartWidgetStoresC` / `S` / `$_` | `$prop` eval + soft-failure | **Drained** → `use-widget-expression.ts` (wave-4) |
| Codex useIntl | `chartWidgetStoresU` | mega react-intl context reader | **Drained** → `use-chart-intl.ts` (context injected from `L`) |
| Codex theme colors | `chartWidgetStoresB` / `X` | palette check + theme color resolve | **Drained** → `chart-theme-colors.ts` (wave-4) |
| Codex Box / style helpers | Y-init near B/X (`D`, `_H`, radius/margin/padding/border) + `V` | Widget Box + tokenized styles | **Drained** → `widget-box.tsx` / `widget-style-helpers.ts` / `widget-class-names.ts` (wave-5) |
| Recharts surface aliases | `G`/`P`/`_`/`F`/`H`/`M` + Bar/Line/Area/… | ResponsiveContainer, Legend, Tooltip, Cell, PieChart, Pie, series | **Wrapped** → `recharts-surface-aliases.ts` (bodies still mega; Chart + pie via surface) |
| Immer (stock) | ~3k+ embedded + `vendor/immer.ts` | `Symbol.for("immer-*")`, `produce` | **npm-shimmed** (`vendor/immer` → `immer`); body still inlined for RTK |
| Redux Toolkit (stock) | ~configureStore/createSlice cluster (~4k–6k) | redux-toolkit.js.org error strings | **Blocked** — entangled with Recharts store; no consumer bare import |
| Recharts (stock) | ~legend/pie/bar/line/area/scatter (~40k+) | `recharts-*` classNames; ComposedChart/Bar/Line/… | **Blocked** — ~50k RTK+Recharts cluster inside `chartWidgetStoresY`; surface aliases only |

## Decision

**Not a single npm-first shim.** The dump is a **composite** of stock Recharts + RTK/Immer **plus** Codex WidgetContext / app-scope widget store / chart chrome / i18n / Chart / Box. A bare `export * from "recharts"` cannot replace `chartWidgetStores*` consumers.

## Recharts / RTK blockers (wave-6)

1. **Surface aliases extracted** — `getRechartsSurfaceAliases()` maps `G`→ResponsiveContainer, `P`→Legend, `_`→Tooltip, Binding1063/1113/1130→Bar/Line/Area, `H`/`M`→PieChart/Pie. Bodies remain in mega `Y` init.
2. **RTK is the Recharts internal store** — `configureStore` / `createSlice` cluster is referenced by Tooltip/Legend state helpers inside the same flat dump; cutting RTK without Recharts leaves a hole.
3. **Immer body still inlined** for that RTK cluster even though `vendor/immer` is npm-shimmed for other consumers.
4. **No clean npm cut** — ResponsiveContainer alone is relatively isolated, but Legend/Tooltip/series share the bundled Redux chart store; mixing npm Recharts with inlined store breaks. Full ~50k swap needed together.

## Why it stays in `boundaries/`

Same as workbook-runtime: oversized flat dump + residual vendor body, parked as a documented vendor-runtime terminal so full-tree QG stays green. `openBoundary` remains until Recharts/RTK are shimmed and the surface bridge removed.

## Exit criteria

1. npm-shim separable Recharts / `@reduxjs/toolkit` slices together; drop `setChartBundleSurface`.
2. Promote remaining Codex glue; thin or remove this boundary; clear `openBoundary`.
3. QG on promoted `visualization/*` (and any new npm shims) without the flat-boundary exemption.

## Drain notes

- Mega edits are **script/line-range only** (`_tmp-chart-widget-stores-drain/drain-*.ts`), never hand StrReplace.
- Do not fight concurrent workbook-runtime drain agents.
- `ChartIntlProvider` uses `setChartBundleIntlProvider`; `useChartIntl` uses `setChartBundleIntlContext`; Chart / pie use `setChartBundleSurface` + `getRechartsSurfaceAliases`.
