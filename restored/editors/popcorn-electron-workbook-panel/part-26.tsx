// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Careful split export-budget 2/2 from part-17
/* split-lane-import-depth:1 */
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 17/19

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
  popcornSurfaceStyle_at as PopcornSurfaceStyle_at,
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
  popcornSurfaceStyle_Q as PopcornSurfaceStyle_Q,
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

// Wave5d soft stubs.
const Juniper3: any = undefined;
const Lagoon3: any = undefined;
const Meadow3: any = undefined;
const Nest3: any = undefined;
const Icon: any = undefined;
const Amber3: any = undefined;
const AppInitialFrt: any = undefined;
const AppInitialGut: any = undefined;
const AppInitialLrt: any = undefined;
const AppInitialNrt: any = undefined;
const AppInitialPrt: any = undefined;
const Copper: any = undefined;
const Delta: any = undefined;
const Eagle3: any = undefined;
const Indigo: any = undefined;
const IntlProvider: any = undefined;
const Kelp2: any = undefined;
const Meadow: any = undefined;
const Mint3: any = undefined;
const PopoverPrimitiveTrigger: any = undefined;
const Prism2: any = undefined;
const Zephyr3: any = undefined;
const apex3: any = undefined;
const coral3: any = undefined;
const daisy3: any = undefined;
const harbor: any = undefined;
const jade: any = undefined;
const nest: any = undefined;
const olive2: any = undefined;
const prism3: any = undefined;
const reef2: any = undefined;
const reef3: any = undefined;
const sage3: any = undefined;
const topaz3: any = undefined;
const trail3: any = undefined;
const urn3: any = undefined;
const wave3: any = undefined;

const $: any = undefined;
const $c: any = undefined;

function Rain3({ bounds, zoom = 1, isVisible, items }) {
  let [quiet22, rain22] = trail3.useState(() => typeof window > "u"),
    { refs, floatingStyles, update } = AppInitialGut({
      placement: "top",
      strategy: "absolute",
      middleware: [
        ensureSettingsQueryAtomsInit(12),
        ensurePersistedAtomInit({
          fallbackPlacements: ["bottom"],
        }),
        readPrefersReducedMotionAtom({
          padding: 8,
        }),
      ],
      whileElementsMounted: buildMemoryFeatureFlags,
    }),
    seed22 = trail3.useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
    }, []);
  if (
    (trail3.useEffect(() => {
      if (typeof window > "u") {
        rain22(true);
        return;
      }
      if (!isVisible) {
        rain22(false);
        return;
      }
      rain22(true);
    }, [isVisible]),
    trail3.useEffect(() => {
      isVisible && update?.();
    }, [
      bounds?.height,
      bounds?.left,
      bounds?.top,
      bounds?.width,
      isVisible,
      update,
      zoom,
    ]),
    !bounds || !isVisible)
  )
    return null;
  let trail22 = (bounds.left + bounds.width / 2) * zoom,
    urn22 = Math.max(8, bounds.top * zoom - urn3);
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div
        ref={refs.setReference}
        className="pointer-events-none absolute"
        style={{
          left: trail22,
          top: urn22,
          width: 1,
          height: 1,
        }}
      />
      <div
        ref={refs.setFloating}
        className="pointer-events-auto absolute drop-shadow-lg"
        style={{
          ...floatingStyles,
          zIndex: 30,
        }}
        data-testid="popcorn-edit-toolbar"
      >
        <div
          className={IntlProvider(
            "transition-all duration-150 ease-out",
            quiet22 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          {
            <Juniper3
              {...{
                children: items.map((item) => {
                  switch (item.kind) {
                    case "button":
                      return (
                        <Lagoon3
                          key={item.id}
                          {...{
                            label: item.label,
                            icon: item.icon,
                            hideLabel: item.hideLabel,
                            isActive: item.isActive,
                            isDisabled: item.isDisabled,
                            subLabel: item.subLabel,
                            iconClassName: item.iconClassName,
                            labelClassName: item.labelClassName,
                            onClick: (vine22) => {
                              seed22(vine22);
                              item.onClick?.();
                            },
                          }}
                        />
                      );
                    case "popover":
                      return (
                        <Meadow3
                          key={item.id}
                          {...{
                            label: item.label,
                            icon: item.icon,
                            hideLabel: item.hideLabel,
                            align: item.align,
                            children: item.content,
                          }}
                        />
                      );
                    case "separator":
                      return <Nest3 key={item.id} {...{}} />;
                    default:
                      return item;
                  }
                }),
              }}
            />
          }
        </div>
      </div>
    </div>
  );
}
