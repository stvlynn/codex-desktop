# chart-widget-stores (intentional oversized terminal → thin)

**Chunk:** `chart-widget-stores-SIOpvGDe`  
**Public path:** `boundaries/chart-widget-stores/index.tsx` (~0.2k LOC after wave-10)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true` (justified: residual Flat `chart-component.tsx`; mega vendor bodies deleted)

## Inventory (Stage-3 drain)

| Slice | Approx LOC / locus | Identity | Status |
| ----- | ------------------- | -------- | ------ |
| Codex WidgetContext | early init + `visualization/.../widget-context.tsx` | `createContext` / `useWidgetContext` | **Drained** → `visualization/` |
| Codex widget scope store | end glue + `widget-scope-store.ts` | `nameToId` / `widgetState` + host bag | **Drained** → `visualization/` |
| Codex chart chrome constants | `_chartWidgetStoresC` → `chart-chrome-constants.ts` | `Chart_*` classNames, palette, gaps | **Drained** → `visualization/` |
| Codex chart i18n / locales | `chartWidgetStoresA`/`I` + `locales/*` | locale catalogs + IntlProvider wrapper | **Drained** → `visualization/` (npm `react-intl`) |
| Codex Chart component | `_chartWidgetStoresS` + helpers | series/legend/tooltip chrome | **Migrated** → public `recharts` + `react-intl` + `react` (Flat body in `chart-component.tsx`) |
| Codex props / evaluate / action | `chartWidgetStoresC` / `S` / `$_` | `$prop` eval + soft-failure | **Drained** → `use-widget-expression.ts` |
| Codex useIntl | `chartWidgetStoresU` | mega react-intl context reader | **Migrated** → npm `useIntl` |
| Codex theme colors | `chartWidgetStoresB` / `X` | palette check + theme color resolve | **Drained** → `chart-theme-colors.ts` |
| Codex Box / style helpers | thin Y wire | Widget Box + tokenized styles | **Drained** → `widget-box.tsx` / helpers (thin Y only) |
| Recharts surface aliases | `G`/`P`/`_`/`F`/`H`/`M` + series | ResponsiveContainer, Legend, Tooltip, … | **npm** via `getChartWidgetStoresRechartsLocals` / bare `recharts` |
| Immer / RTK / Recharts bodies | pre-Y + Y (~50k) | inlined vendor | **Deleted** (wave-10) |
| react-intl body | post-Y `L` / Formatted* (~4.6k) | formatjs inlined | **Deleted** (wave-10) |

## Decision

**Not a single npm-first shim** for the Codex glue. Stock Recharts/RTK/Immer/react-intl **bodies are gone**; Chart + pie + aliases use public packages. This boundary is a **thin ESM-init / export compat** layer plus Flat `chart-component.tsx` until that Chart body is promoted fully out of `boundaries/`.

## Wave-10 — joint vendor delete

### Deleted

1. Pre-Y Recharts/RTK/Immer def cluster (`helper1` … bindings into Y).
2. `chartWidgetStoresY` vendor body (~50k); residual Box wire kept as thin Y.
3. Post-Y `chartWidgetStoresL` + Formatted* / formatjs (~4.6k); L is a no-op init.
4. Mega `vizSetChartBundleSurface()` call from `_chartWidgetStoresC`.

### Kept

- Codex ESM inits: `T`/`W`/`E`, `O`, `_C`, `I`, `A`, `R`, `_T`, `N`, `_S`.
- Drained stubs: `C`/`S`/`$_`/`U` + npm Recharts locals `F`/`G`/`H`/`M`/`P`/`Underscore`.
- Thin Y assigns `B`/`X`/`D`/`V` from visualization/.

## Why it stays in `boundaries/`

Residual Flat `chart-component.tsx` (~2.5k mechanical Chart body) + thin index compat. Known terminal basename still recognized by QG. Promote Chart body + drop Flat headers to fully exit.

## Exit criteria

1. ~~Migrate Chart + pie onto public `recharts` + `react-intl`.~~ **Done (wave-8/9).**
2. ~~Joint-delete pre-Y + Y vendor + post-Y intl.~~ **Done (wave-10).**
3. Promote `chart-component.tsx` out of Flat boundary; drop thin mega if unused; QG without Flat exemption.

## Drain notes

- Mega edits are **script only** (`drain-wave10-joint-delete.ts`), never hand StrReplace.
- Stay out of concurrent `workbook/*` drain agents.
