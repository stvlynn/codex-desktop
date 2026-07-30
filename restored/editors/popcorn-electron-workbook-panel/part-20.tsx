// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave5d soft stubs.
const Hazel1: any = undefined;
const Ivory1: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 2/2 from part-5
/* split-lane-import-depth:1 */

// Careful split 5/19

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react } from "../../boundaries/react-cjs-runtime";
import {
  _workbookT,
  workbookB,
  workbookL,
  WorkbookR,
  workbookZ,
} from "../../boundaries/workbook-runtime/index";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { buildMemoryFeatureFlags } from "../../settings/build-memory-feature-flags";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { deferredUiYat } from "../../ui/deferred-ui-yat";
import {
  ensureDndAxisLockModifiersInit,
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull } from "../../utils/join-strings-or-null";
import { safeZodValue } from "../../utils/safe-zod-value";
import {
  colIndexToLetters,
  formatA1,
  initAddressMetrics,
  initAddressUtils,
  lettersToColIndex,
  parseA1Range,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  listFeatureCatalogRows,
  PopcornFindBar,
} from "../feature-catalog";
import {
  popcornSurfaceStyle__t,
  popcornSurfaceStyle_A,
  popcornSurfaceStyle_at,
  popcornSurfaceStyle_B,
  popcornSurfaceStyle_ct,
  popcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_et,
  popcornSurfaceStyle_ft,
  popcornSurfaceStyle_gt,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_ht,
  popcornSurfaceStyle_it,
  popcornSurfaceStyle_J,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_nt,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_ot,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_pt,
  popcornSurfaceStyle_Q,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_St,
  popcornSurfaceStyle_t,
  popcornSurfaceStyle_tt,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_wt,
} from "../popcorn-electron-surface-style";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionG,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionJ,
  RemoteTextEditSessionL,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionQ,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  remoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZ,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

const AppInitialGut: any = undefined;
const IntlProvider: any = undefined;
const Marble: any = undefined;
const Nickel: any = undefined;
const Quartz: any = undefined;
const Slate: any = undefined;
const Umbra: any = undefined;
const _n: any = undefined;
const fetchSettingValue: any = undefined;
const ultra1: any = undefined;
const violet: any = undefined;

function Jasper1({
  btn,
  isOpen,
  onOpen,
  onClose,
  zoom,
  values,
  selectedValues,
  onToggleValue,
  onSelectAll,
  onSort,
  filterSortTitle,
  filterHeaderLabel,
  noDiscreteValuesLabel,
  selectAllLabel,
  sortAZLabel,
  sortZALabel,
}) {
  let ember10 = Math.min(btn.width, nova1),
    flint10 = Math.min(btn.height, olive1),
    garnet10 = btn.left + Math.max(0, btn.width - ember10 - prism1),
    hazel10 = btn.top + Math.max(0, (btn.height - flint10) / 2),
    { refs, floatingStyles, update } = AppInitialGut({
      placement: "bottom-end",
      middleware: [
        ensureSettingsQueryAtomsInit(6),
        ensurePersistedAtomInit(),
        readPrefersReducedMotionAtom({
          padding: 8,
        }),
      ],
      whileElementsMounted: buildMemoryFeatureFlags,
    }),
    ivory10 = kelp1.useCallback(
      (kelp10) => {
        refs.setReference(kelp10);
      },
      [refs],
    ),
    jasper10 = kelp1.useCallback(
      (lotus10) => {
        refs.setFloating(lotus10);
      },
      [refs],
    );
  return (
    kelp1.useEffect(() => {
      isOpen && update?.();
    }, [btn.height, btn.left, btn.top, btn.width, isOpen, update, zoom]),
    kelp1.useEffect(() => {
      if (!isOpen) return;
      let mint10 = (event) => {
          let olive10 = event.target;
          if (!(olive10 instanceof Node)) return;
          let prism10 = refs.reference.current,
            quill10 = refs.floating.current;
          (prism10 && prism10.contains(olive10)) ||
            (quill10 && quill10.contains(olive10)) ||
            onClose();
        },
        nova10 = (event) => {
          event.key === "Escape" && onClose();
        };
      return (
        window.addEventListener("pointerdown", mint10, {
          capture: true,
        }),
        window.addEventListener("keydown", nova10),
        () => {
          window.removeEventListener("pointerdown", mint10, true);
          window.removeEventListener("keydown", nova10);
        }
      );
    }, [isOpen, onClose, refs.floating, refs.reference]),
    (
      <div
        className="pointer-events-auto absolute"
        style={{
          left: garnet10,
          top: hazel10,
          width: ember10,
          height: flint10,
        }}
      >
        <div className="flex h-full items-center justify-end">
          <button
            ref={ivory10}
            type="button"
            data-testid={`popcorn-filter-button-${btn.tableId}-${btn.colIdx}`}
            data-popcorn-filter-button="true"
            className={IntlProvider(
              "hover:bg-token-bg-secondary inline-flex items-center gap-0.5 rounded-[2px] border text-[10px] leading-none",
              "border-token-border-heavy bg-white",
            )}
            title={filterSortTitle}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              isOpen ? onClose() : onOpen();
            }}
          >
            {btn.isFiltered ? (
              <svg
                aria-hidden="true"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
              </svg>
            ) : null}
            {btn.isSorted ? (
              btn.sortDir === "asc" ? (
                <Ivory1
                  {...{
                    className: "size-3",
                  }}
                />
              ) : (
                <Hazel1
                  {...{
                    className: "size-3",
                  }}
                />
              )
            ) : null}
            {!btn.isFiltered && !btn.isSorted ? (
              <svg
                aria-hidden="true"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            ) : null}
          </button>
        </div>
        {isOpen
          ? lotus1.createPortal(
              <div
                ref={jasper10}
                data-testid={`popcorn-filter-menu-${btn.tableId}-${btn.colIdx}`}
                data-popcorn-filter-menu="true"
                className="mt-1 w-56 rounded-md border bg-white text-xs shadow-lg"
                style={{
                  ...floatingStyles,
                  zIndex: 1e3,
                  pointerEvents: "auto",
                }}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
                onMouseUp={(event) => {
                  event.stopPropagation();
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <div className="flex items-center justify-between border-b p-2 font-medium">
                  <span>{filterHeaderLabel}</span>
                  <button
                    type="button"
                    className="text-token-text-secondary hover:text-token-text-primary text-[11px]"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onSelectAll();
                    }}
                  >
                    {selectAllLabel}
                  </button>
                </div>
                <div className="max-h-48 space-y-1 overflow-auto p-2">
                  {values.map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={
                          selectedValues ? selectedValues.has(item) : true
                        }
                        onChange={() => onToggleValue(item)}
                      />
                      <span className="truncate" title={item}>
                        {item}
                      </span>
                    </label>
                  ))}
                  {values.length === 0 ? (
                    <div className="text-token-text-secondary">
                      {noDiscreteValuesLabel}
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center gap-2 border-t p-2">
                  <div className="ms-auto flex items-center gap-2">
                    <button
                      type="button"
                      className="flex-1 rounded border px-2 py-1"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        onSort("asc");
                        onClose();
                      }}
                    >
                      {sortAZLabel}
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded border px-2 py-1"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        onSort("desc");
                        onClose();
                      }}
                    >
                      {sortZALabel}
                    </button>
                  </div>
                </div>
              </div>,
              document.body,
            )
          : null}
      </div>
    )
  );
}
var kelp1,
  lotus1,
  mint1,
  nova1,
  olive1,
  prism1,
  quill1 = esmInit(() => {
    fetchSettingValue();
    ensureComposerEsm_Tft_Init();
    kelp1 = commonJsInit(react());
    lotus1 = commonJsInit(safeZodValue());
    nova1 = 22;
    olive1 = 20;
    prism1 = 4;
  });
function Reef1(reef10) {
  let sage10 = reef10.split(":"),
    topaz10 = sage10[0] ?? "A1",
    ultra10 = sage10[1] ?? sage10[0] ?? "A1";
  return {
    c1: lettersToColIndex(topaz10),
    r1: rowTokenToIndex(topaz10),
    c2: lettersToColIndex(ultra10),
    r2: rowTokenToIndex(ultra10),
  };
}
var sage1 = esmInit(() => {
  initAddressMetrics();
});
function Topaz1(
  vapor10,
  wheat10,
  yarn10,
  zephyr10,
  acorn10,
  bloom10,
  coral10,
  drift10,
  eagle10,
) {
  return ultra1.useMemo(() => {
    let frost10 = [];
    for (let glide10 of vapor10.tables ?? []) {
      if (!glide10.ref || (!glide10.autoFilter && !glide10.hasAutoFilter))
        continue;
      let { c1, r1, c2, r2 } = Reef1(glide10.ref),
        honey10 = Math.min(c1, c2),
        iris10 = Math.max(c1, c2),
        jewel10 = Math.min(r1, r2);
      if (Math.max(0, Math.min(1, glide10.headerRowCount ?? 1)) === 0) continue;
      let knoll10 = jewel10,
        lunar10 = 20 + (acorn10[knoll10] ?? 0);
      for (let moss10 = honey10; moss10 <= iris10; moss10 += 1) {
        let north10 = Umbra({
          camera: drift10,
          worldX: 40 + (zephyr10[moss10] ?? 0),
          worldY: lunar10,
          width: wheat10[moss10] ?? 0,
          height: yarn10[knoll10] ?? 0,
          freezePanes: eagle10,
          columnWidths: wheat10,
          rowHeights: yarn10,
        })[0];
        if (!north10 || north10.width <= 0 || north10.height <= 0) continue;
        let orbit10 = `${vapor10.name}:${glide10.id ?? 0}:${moss10}`,
          pine10 = !!bloom10[orbit10]?.length,
          quest10 = coral10[`${vapor10.name}:${glide10.id ?? 0}`],
          ridge10 = !!(quest10 && quest10.colIdx === moss10);
        frost10.push({
          key: orbit10,
          left: north10.x,
          top: north10.y,
          width: north10.width,
          height: north10.height,
          tableId: glide10.id ?? 0,
          colIdx: moss10,
          isFiltered: pine10,
          isSorted: ridge10,
          sortDir: ridge10 ? quest10?.dir : undefined,
        });
      }
    }
    return frost10;
  }, [
    bloom10,
    coral10,
    zephyr10,
    yarn10,
    acorn10,
    vapor10,
    wheat10,
    drift10,
    eagle10,
  ]);
}
