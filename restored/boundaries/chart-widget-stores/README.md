# chart-widget-stores (intentional oversized terminal)

**Chunk:** `chart-widget-stores-SIOpvGDe`  
**Public path:** `boundaries/chart-widget-stores/index.tsx` (~60.0k LOC)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true`

## Inventory (Stage-3 drain)

| Slice | Approx LOC / locus | Identity | Status |
| ----- | ------------------- | -------- | ------ |
| Codex WidgetContext | early init + `visualization/chart-widget-stores/widget-context.tsx` | `createContext` / `useWidgetContext` | **Drained** → `visualization/` |
| Codex widget scope store | end glue + `widget-scope-store.ts` | `nameToId` / `widgetState` + host bag | **Drained** → `visualization/` |
| Codex chart chrome constants | `_chartWidgetStoresC` → `chart-chrome-constants.ts` | `Chart_*` classNames, palette, gaps | **Drained** → `visualization/` |
| Codex chart i18n / locales | `chartWidgetStoresA`/`I` + `locales/*` (~14k) | locale catalogs + IntlProvider wrapper | **Drained** → `visualization/` (wave-8: npm `react-intl`) |
| Codex Chart component | `_chartWidgetStoresS` + helpers 914–933 (~2.4k) | series/legend/tooltip chrome | **Migrated** → public `recharts` + `react-intl` + `react` (Flat body still in `boundaries/.../chart-component.tsx`) |
| Codex props / evaluate / action | `chartWidgetStoresC` / `S` / `$_` | `$prop` eval + soft-failure | **Drained** → `use-widget-expression.ts` (wave-4) |
| Codex useIntl | `chartWidgetStoresU` | mega react-intl context reader | **Migrated** → npm `useIntl` (wave-8) |
| Codex theme colors | `chartWidgetStoresB` / `X` | palette check + theme color resolve | **Drained** → `chart-theme-colors.ts` (wave-4) |
| Codex Box / style helpers | Y-init near B/X (`D`, `_H`, radius/margin/padding/border) + `V` | Widget Box + tokenized styles | **Drained** → `widget-box.tsx` / `widget-style-helpers.ts` / `widget-class-names.ts` (wave-5); dead helpers 827–830 removed (wave-7) |
| Recharts surface aliases | `G`/`P`/`_`/`F`/`H`/`M` + Bar/Line/Area/… | ResponsiveContainer, Legend, Tooltip, Cell, PieChart, Pie, series | **Partial** — Chart on npm; **pie still surface** |
| Immer (stock) | ~3k+ embedded + `vendor/immer.ts` | `Symbol.for("immer-*")`, `produce` | **npm-shimmed** (`vendor/immer` → `immer`); body still inlined for RTK |
| Redux Toolkit (stock) | ~configureStore/createSlice cluster (~4k–6k) | redux-toolkit.js.org error strings; slices `chartLayout`/`legend`/`tooltip`/… | **Blocked** — entangled with Recharts store; no consumer bare import |
| Recharts (stock) | ~legend/pie/bar/line/area/scatter (~40k+) | `recharts-*` classNames; ComposedChart/Bar/Line/… | **Partial** — Chart uses npm `recharts@3`; mega body kept for pie |
| react-intl (stock) | post-Y ~4.6k (`L` / Formatted*) | formatjs.github.io strings; `MemoizedFormattedMessage` | **Partial** — Chart/pie intl via npm; mega `L` body still inlined |

## Decision

**Not a single npm-first shim.** The dump is a **composite** of stock Recharts 3.x + RTK/Immer + react-intl **plus** Codex WidgetContext / app-scope widget store / chart chrome / i18n / Chart / Box. A bare `export * from "recharts"` cannot replace `chartWidgetStores*` consumers.

## Wave-8 — Chart off surface bag (partial npm migrate)

Added `recharts@3` + `react-intl` to `restored/package.json`; `vendor/recharts.ts` + `vendor/react-intl.tsx` are npm-backed shims.

### Migrated

1. **Chart** — `Binding1022` → `usePlotArea`; surface React (`Binding1326`) → `react`; `Binding1317` → `FormattedMessage`; Recharts locals → bare `recharts` imports. No longer calls `getChartBundleSurface`.
2. **ChartIntlProvider / useChartIntl** — npm `IntlProvider` / `useIntl`. Mega `setChartBundleIntl*` setters are no-ops.
3. **Surface bag slimmed** — dropped `createElement` / `$_` / `Binding1022` / `Binding1317` / `Binding1326` (Chart-only). Pie still uses Recharts aliases.

### Still blocked for joint delete

1. **Cluster ≠ Y alone** — Recharts+RTK+Immer spans pre-Y defs + `chartWidgetStoresY` (~50k).
2. **Pie still on surface** — `chatgpt-pie-chart-widget` uses `getRechartsSurfaceAliases`.
3. **Post-Y react-intl (~4.6k)** — mega `chartWidgetStoresL` + Formatted* still inlined (unused by Chart path).
4. **Codex Box wire still inside Y** — stubs at end of Y must survive vendor deletion.
5. **No partial vendor cut** — Legend/Tooltip/series share the bundled Redux chart store for pie.

## Why it stays in `boundaries/`

Same as workbook-runtime: oversized flat dump + residual vendor body, parked as a documented vendor-runtime terminal so full-tree QG stays green. `openBoundary` remains until pie migrates, pre-Y+Y+post-Y intl deleted together, and `setChartBundleSurface` removed.

## Exit criteria

1. ~~Migrate Chart off `Binding1022` / surface React / `Binding1317` onto public `recharts` + `react-intl` APIs.~~ **Done (wave-8).**
2. Migrate pie off surface aliases onto public `recharts`.
3. npm-shim remaining Recharts 3 (+ transitive RTK/Immer) consumers; delete pre-Y vendor defs + Y vendor body + post-Y intl together via script.
4. Drop `setChartBundleSurface`; promote remaining Codex glue; thin or remove this boundary; clear `openBoundary`.
5. QG on promoted `visualization/*` (and npm shims) without the flat-boundary exemption.

## Drain notes

- Mega edits are **script/line-range only** (`_tmp-chart-widget-stores-drain/drain-*.ts`), never hand StrReplace.
- Do not fight concurrent workbook-runtime drain agents.
- Chart uses public `recharts` + `react-intl`; pie uses `setChartBundleSurface` + `getRechartsSurfaceAliases`.
