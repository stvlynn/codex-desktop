# chart-widget-stores (thin boundary — openBoundary cleared)

**Chunk:** `chart-widget-stores-SIOpvGDe`  
**Public path:** `boundaries/chart-widget-stores/index.tsx` (~171 LOC)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: false`

## Inventory (Stage-3 drain)

| Slice | Status |
| ----- | ------ |
| Codex WidgetContext / scope / chrome / i18n / Box | **Drained** → `visualization/` |
| Codex Chart component | **Promoted** wave-11 → `visualization/chart-widget-stores/chart/*` |
| Recharts / Immer / RTK / intl mega bodies | **Deleted** wave-10 |

## Exit criteria

1. ~~Chart + pie on public recharts + react-intl.~~ **Done.**
2. ~~Joint-delete vendor bodies.~~ **Done.**
3. ~~Promote chart-component; clear openBoundary.~~ **Done (wave-11).**
