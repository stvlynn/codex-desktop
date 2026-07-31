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
| Codex chart i18n / locales | `chartWidgetStoresA`/`I` + `locales/*` (~14k) | locale catalogs + IntlProvider wrapper | **Drained** → `visualization/` |
| Codex Chart component | `_chartWidgetStoresS` + helpers 914–933 (~2.4k) | series/legend/tooltip chrome | **Drained** → `visualization/chart.tsx` API + `boundaries/.../chart-component.tsx` body (Flat boundary; Recharts via surface) |
| Codex props / evaluate / action | `chartWidgetStoresC` / `S` / `$_` | `$prop` eval + soft-failure | **Drained** → `use-widget-expression.ts` (wave-4) |
| Codex useIntl | `chartWidgetStoresU` | mega react-intl context reader | **Drained** → `use-chart-intl.ts` (context injected from `L`) |
| Codex theme colors | `chartWidgetStoresB` / `X` | palette check + theme color resolve | **Drained** → `chart-theme-colors.ts` (wave-4) |
| Codex Box / style helpers | Y-init near B/X (`D`, `_H`, radius/margin/padding/border) + `V` | Widget Box + tokenized styles | **Drained** → `widget-box.tsx` / `widget-style-helpers.ts` / `widget-class-names.ts` (wave-5); dead helpers 827–830 removed (wave-7) |
| Recharts surface aliases | `G`/`P`/`_`/`F`/`H`/`M` + Bar/Line/Area/… | ResponsiveContainer, Legend, Tooltip, Cell, PieChart, Pie, series | **Wrapped** → `recharts-surface-aliases.ts` (bodies still mega; Chart + pie via surface) |
| Immer (stock) | ~3k+ embedded + `vendor/immer.ts` | `Symbol.for("immer-*")`, `produce` | **npm-shimmed** (`vendor/immer` → `immer`); body still inlined for RTK |
| Redux Toolkit (stock) | ~configureStore/createSlice cluster (~4k–6k) | redux-toolkit.js.org error strings; slices `chartLayout`/`legend`/`tooltip`/… | **Blocked** — entangled with Recharts store; no consumer bare import |
| Recharts (stock) | ~legend/pie/bar/line/area/scatter (~40k+) | `recharts-*` classNames; ComposedChart/Bar/Line/… | **Blocked** — ~50k RTK+Recharts cluster (pre-Y defs + `chartWidgetStoresY`); surface aliases only |
| react-intl (stock) | post-Y ~4.6k (`L` / Formatted*) | formatjs.github.io strings; `MemoizedFormattedMessage` | **Blocked** — Chart `Binding1317` + intl bridges share inlined context |

## Decision

**Not a single npm-first shim.** The dump is a **composite** of stock Recharts 3.x + RTK/Immer + react-intl **plus** Codex WidgetContext / app-scope widget store / chart chrome / i18n / Chart / Box. A bare `export * from "recharts"` cannot replace `chartWidgetStores*` consumers.

## Wave-7 — joint Recharts+RTK npm cut: **UNSAFE**

Version signal: pnpm path `decimal.js-light@2.5.1` + RTK slices (`chartLayout`, `legend`, `tooltip`, `chartData`, `graphicalItems`, `rootProps`, `errorBars`) ⇒ **Recharts 3.x** (npm `recharts@3` declares `@reduxjs/toolkit` + `immer` + `decimal.js-light@^2.5.1`). Exact patch not pinable from the bundle. `immer` already in `restored/package.json`; `recharts` / `@reduxjs/toolkit` not added (no safe consumer yet).

### Exact blockers

1. **Cluster ≠ Y alone** — Recharts+RTK+Immer spans module-scope helpers (~648–28400, immer/redux/RTK/recharts defs) **plus** `chartWidgetStoresY` (28401–55338). Deleting only Y orphans ~27k of defs and breaks surface assignments that live *inside* Y (`G`/`P`/Bar/…).
2. **Internal store selector on the Chart surface** — `chartWidgetStoresBinding1022` is a hook over the bundled RTK chart offset/layout (`.width`), not a drop-in public export. Recharts 3 has `useOffset` / `useChartWidth`, but Chart must be migrated; mixing npm Recharts with the inlined store breaks.
3. **Surface bag is multi-package** — `setChartBundleSurface` carries Recharts components **and** React (`Binding1326` = `appInitialLvt`) **and** react-intl `MemoizedFormattedMessage` (`Binding1317`). An npm Recharts shim cannot replace the bag.
4. **Post-Y react-intl (~4.6k)** — `chartWidgetStoresL` + Formatted* still inlined; `ChartIntlProvider` / `useChartIntl` intentionally share that context (npm `react-intl` would be a separate tree). Joint Recharts+RTK cut does not clear the intl bridge.
5. **Codex Box wire still inside Y** — stubs at ~55279–55337 (`vizEnsureWidgetBoxInit` / `D`/`B`/`X`) must survive any vendor deletion.
6. **No partial cut** — Legend/Tooltip/series share the bundled Redux chart store; ResponsiveContainer-only npm mix is unsafe (wave-6).

### Residual Codex extracted (wave-7)

- Removed dead Box helpers `chartWidgetStoresHelper827`–`830` (spacing stub + IntersectionObserver / visible-action / assignRef) — already implemented in `visualization/chart-widget-stores/widget-box.tsx`; zero remaining call sites in the mega.

## Why it stays in `boundaries/`

Same as workbook-runtime: oversized flat dump + residual vendor body, parked as a documented vendor-runtime terminal so full-tree QG stays green. `openBoundary` remains until Recharts/RTK **and** the react-intl bridge are shimmed, Chart migrated off internal selectors, and `setChartBundleSurface` removed.

## Exit criteria

1. Migrate Chart off `Binding1022` / surface React / `Binding1317` onto public `recharts` + `react-intl` APIs.
2. npm-shim Recharts 3 (+ transitive RTK/Immer) **and** react-intl; delete pre-Y vendor defs + Y vendor body + post-Y intl together via script.
3. Drop `setChartBundleSurface`; promote remaining Codex glue; thin or remove this boundary; clear `openBoundary`.
4. QG on promoted `visualization/*` (and any new npm shims) without the flat-boundary exemption.

## Drain notes

- Mega edits are **script/line-range only** (`_tmp-chart-widget-stores-drain/drain-*.ts`), never hand StrReplace.
- Do not fight concurrent workbook-runtime drain agents.
- `ChartIntlProvider` uses `setChartBundleIntlProvider`; `useChartIntl` uses `setChartBundleIntlContext`; Chart / pie use `setChartBundleSurface` + `getRechartsSurfaceAliases`.
