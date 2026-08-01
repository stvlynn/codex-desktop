// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave5d soft stubs.
const Ember3: any = undefined;

const Flint3: any = undefined;
const Garnet3: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 2/2 from part-14
/* split-lane-import-depth:1 */

// Careful split 14/19

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react } from "../../boundaries/react-cjs-runtime";
import {
  _workbookT,
  workbookB,
  workbookL,
  WorkbookR,
  workbookZ,
} from "../../workbook/editor-compat";
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
import { joinStringsOrNull as JoinStringsOrNull } from "../../utils/join-strings-or-null";
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
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
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

const $o: any = undefined;
const AppInitialFrt: any = undefined;
const AppInitialHrt: any = undefined;
const AppInitialMrt: any = undefined;
const AppInitialNrt: any = undefined;
const AppInitialPrt: any = undefined;
const AppInitialRt: any = undefined;
const Cliff2: any = undefined;
const Drift2: any = undefined;
const Falcon3: any = undefined;
const Indigo3: any = undefined;
const IntlProvider: any = undefined;
const Lemon3: any = undefined;
const PopoverPrimitiveTrigger: any = undefined;
const River3: any = undefined;
const Sage2: any = undefined;
const Topaz2: any = undefined;
const Urn2: any = undefined;
const Vapor2: any = undefined;
const _c: any = undefined;
const coral2: any = undefined;
const deferredDesktopErt: any = undefined;
const echo3: any = undefined;
const harbor3: any = undefined;
const ivory3: any = undefined;
const jasper3: any = undefined;
const kelp3: any = undefined;
const kite3: any = undefined;
const petal1: any = undefined;
const quartz3: any = undefined;
const quiet1: any = undefined;
const slate3: any = undefined;
const trail2: any = undefined;
function Hazel3({
  controller,
  snapshot,
  accentFill,
  accentStroke,
  variant = "inline",
  density = "regular",
  addButtonPosition = "end",
  isEditing = true,
}) {
  let [grove19, hill19] = ivory3.useState(null),
    [isle19, juniper19] = ivory3.useState(""),
    [lagoon19, meadow19] = ivory3.useState(null),
    [nest19, oak19] = ivory3.useState(snapshot.sheetNames.length),
    petal19 = ivory3.useRef(null),
    quiet19 = ivory3.useRef([]),
    rain19 = ivory3.useRef([]),
    seed19 = ivory3.useRef(null),
    trail19 = ivory3.useMemo(
      () => snapshot.sheetNames.indexOf(snapshot.activeSheetName),
      [snapshot.activeSheetName, snapshot.sheetNames],
    ),
    urn19 = useDndSensors(
      stack(AppInitialRt, {
        activationConstraint: {
          distance: 4,
        },
      }),
    ),
    vine19 = variant === "row",
    wind19 = density === "compact" || vine19,
    yarrow19 =
      accentFill != null && accentStroke != null
        ? {
            backgroundColor: accentFill,
            color: accentStroke,
          }
        : undefined,
    azure19 = yarrow19 == null,
    birch19 =
      "group/tab relative flex h-7 max-w-39 shrink-0 items-center overflow-hidden rounded-lg bg-token-main-surface-primary px-2 py-1 text-sm font-normal touch-none";
  if (!azure19) {
    let quartz20 = "inline-flex h-[30px] py-1.5";
    vine19 ? (quartz20 = "flex h-6") : wind19 && (quartz20 = "inline-flex h-6");
    birch19 = IntlProvider(
      "max-w-[200px] shrink-0 items-center gap-1 overflow-hidden rounded-lg border border-transparent px-3 text-sm font-normal transition-colors touch-none",
      quartz20,
    );
  }
  ivory3.useEffect(() => {
    grove19 != null && (seed19.current?.focus(), seed19.current?.select());
  }, [grove19]);
  ivory3.useLayoutEffect(() => {
    let river20 = () => {
      let timber20 = petal19.current?.getBoundingClientRect().width ?? 0,
        umbra20 = snapshot.sheetNames.map(
          (item, index) =>
            quiet19.current[index]?.getBoundingClientRect().width ?? 0,
        ),
        violet20 = Ember3({
          containerWidth: timber20,
          gapWidth: 4,
          moreButtonWidths: Array.from(
            {
              length: snapshot.sheetNames.length + 1,
            },
            (willow20, xenon20) =>
              rain19.current[xenon20]?.getBoundingClientRect().width ?? 0,
          ),
          tabWidths: umbra20,
        });
      oak19((yellow20) => (yellow20 === violet20 ? yellow20 : violet20));
    };
    if ((river20(), typeof ResizeObserver > "u" || petal19.current == null))
      return;
    let slate20 = new ResizeObserver(river20);
    return (
      slate20.observe(petal19.current),
      () => {
        slate20.disconnect();
      }
    );
  }, [4, snapshot.sheetNames]);
  function Canyon19() {
    hill19(null);
    juniper19("");
  }
  function Dew19() {
    if (grove19 == null) return;
    let zinc20 = snapshot.sheetNames[grove19];
    if (!zinc20) {
      Canyon19();
      return;
    }
    let amber20 = isle19.trim(),
      basalt20 = amber20.length > 0 ? amber20 : zinc20;
    controller.renameSheet(grove19, basalt20);
    Canyon19();
  }
  function Alpha20(cedar20) {
    let daisy20 = snapshot.sheetNames[cedar20];
    daisy20 && (hill19(cedar20), juniper19(daisy20));
  }
  function Bravo20(ember20) {
    meadow19(null);
    let flint20 =
        typeof ember20.active.id == "string" ? ember20.active.id : null,
      garnet20 = typeof ember20.over?.id == "string" ? ember20.over.id : null;
    if (!flint20 || !garnet20 || flint20 === garnet20) return;
    let hazel20 = snapshot.sheetNames.indexOf(flint20),
      ivory20 = snapshot.sheetNames.indexOf(garnet20);
    hazel20 < 0 ||
      ivory20 < 0 ||
      hazel20 === ivory20 ||
      controller.moveSheet(hazel20, ivory20);
  }
  function Copper20(jasper20) {
    meadow19(typeof jasper20.active.id == "string" ? jasper20.active.id : null);
  }
  function Delta20() {
    meadow19(null);
  }
  let echo20 = isEditing ? (
      <button
        type="button"
        onClick={() => controller.addSheet()}
        className={
          azure19
            ? "text-token-text-secondary hover:bg-[var(--app-shell-tab-background)] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
            : IntlProvider(
                "text-token-text-tertiary hover:text-token-text-primary hover:bg-token-bg-tertiary inline-flex shrink-0 items-center justify-center rounded-md",
                wind19 ? "size-6" : "h-[30px] w-[30px]",
              )
        }
        style={azure19 ? kelp3 : undefined}
        aria-label="Add sheet"
        data-testid="popcorn-add-sheet"
      >
        {
          <RemoteTextEditSessionX
            {...{
              className: "size-4",
            }}
          />
        }
      </button>
    ) : null,
    falcon20 = Math.min(nest19, snapshot.sheetNames.length),
    gamma20 = snapshot.sheetNames.slice(0, falcon20),
    harbor20 = snapshot.sheetNames.slice(falcon20),
    indigo20 = IntlProvider(
      birch19,
      azure19
        ? "text-token-text-secondary hover:bg-[var(--app-shell-tab-background)]"
        : "text-token-text-tertiary hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-primary",
    );
  function Jade20(kelp20) {
    return azure19
      ? IntlProvider(
          birch19,
          kelp20 ? "text-token-text-primary" : "text-token-text-secondary",
        )
      : IntlProvider(
          birch19,
          kelp20
            ? "bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover"
            : "text-token-text-tertiary hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-primary",
        );
  }
  function Kite20(lotus20) {
    return azure19 ? kelp3 : lotus20 ? yarrow19 : undefined;
  }
  function Lemon20(mint20, nova20, olive20) {
    return (
      <div
        key={`${mint20}-${nova20}`}
        className={IntlProvider(olive20, "cursor-text")}
        style={Kite20(nova20 === trail19)}
      >
        {azure19 ? (
          <span
            aria-hidden="true"
            className={IntlProvider(
              "pointer-events-none absolute inset-0 z-0 rounded-md",
              "group-hover/tab:bg-[var(--app-shell-tab-background)]",
              nova20 === trail19 && "bg-[var(--app-shell-tab-background)]",
            )}
          />
        ) : null}
        <input
          ref={seed19}
          value={isle19}
          aria-label="Rename sheet"
          onChange={(event) => juniper19(event.target.value)}
          onBlur={Dew19}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              Dew19();
              return;
            }
            event.key === "Escape" && (event.preventDefault(), Canyon19());
          }}
          className="relative z-10 block w-full min-w-0 appearance-none border-0 bg-transparent p-0 text-sm leading-5 font-normal text-inherit shadow-none ring-0 outline-none focus:border-0 focus:shadow-none focus:ring-0 focus:outline-none"
        />
      </div>
    );
  }
  function Marble20(prism20, quill20) {
    let reef20 = quill20 === trail19,
      sage20 = Jade20(reef20);
    return grove19 === quill20 ? (
      Lemon20(prism20, quill20, sage20)
    ) : (
      <Garnet3
        key={`${prism20}-${quill20}`}
        {...{
          sheetName: prism20,
          index: quill20,
          isActive: reef20,
          tabClassName: sage20,
          tabStyle: Kite20(reef20),
          showsAppShellTabBackground: azure19,
          controller,
          snapshot,
          startRenameSheet: Alpha20,
        }}
      />
    );
  }
  function Nickel20(topaz20, ultra20) {
    let vapor20 = ultra20 === trail19;
    return (
      <Flint3
        key={`${topaz20}-${ultra20}`}
        {...{
          sheetName: topaz20,
          onClick: () => controller.setActiveSheetName(topaz20),
          isActive: vapor20,
          tabClassName: Jade20(vapor20),
          tabStyle: Kite20(vapor20),
          showsAppShellTabBackground: azure19,
        }}
      />
    );
  }
  let onyx20 =
      harbor20.length > 0 ? (
        <AppInitialFrt>
          {
            <PopoverPrimitiveTrigger
              {...{
                asChild: true,
                children: (
                  <button
                    type="button"
                    className={indigo20}
                    style={azure19 ? kelp3 : undefined}
                    data-testid="popcorn-sheet-tabs-more"
                    aria-label={`${harbor20.length} more sheets`}
                  >
                    <span className="block min-w-0 truncate">
                      {harbor20.length}
                      {" more"}
                    </span>
                  </button>
                ),
              }}
            />
          }
          <AppInitialPrt>
            <AppInitialNrt
              align="start"
              sideOffset={6}
              className="border-token-border-light bg-token-bg-primary z-50 min-w-[180px] rounded-xl border p-1 shadow-lg"
              data-testid="popcorn-sheet-tabs-more-menu"
            >
              {harbor20.map((item, index) => {
                let wheat20 = falcon20 + index,
                  yarn20 = item === snapshot.activeSheetName;
                return (
                  <AppInitialMrt key={`${item}-${wheat20}`} asChild={true}>
                    <button
                      type="button"
                      className={IntlProvider(
                        "flex w-full min-w-0 cursor-default items-center rounded-lg px-3 py-2 text-left text-sm outline-none",
                        yarn20
                          ? "bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover focus-visible:bg-token-interactive-bg-accent-muted-hover"
                          : "text-token-text-primary hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background",
                      )}
                      aria-current={yarn20 ? "true" : undefined}
                      data-testid={`popcorn-sheet-tabs-more-item-${item}`}
                      onClick={() => controller.setActiveSheetName(item)}
                    >
                      <span className="block min-w-0 truncate">{item}</span>
                    </button>
                  </AppInitialMrt>
                );
              })}
            </AppInitialNrt>
          </AppInitialPrt>
        </AppInitialFrt>
      ) : null,
    pearl20 = (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -z-10 flex min-w-max items-center gap-1 opacity-0"
      >
        {snapshot.sheetNames.map((item, index) => (
          <button
            key={`measure-tab-${item}-${index}`}
            ref={(zephyr20) => {
              quiet19.current[index] = zephyr20;
            }}
            type="button"
            className={Jade20(index === trail19)}
            tabIndex={-1}
          >
            <span className="block min-w-0 truncate">{item}</span>
          </button>
        ))}
        {Array.from(
          {
            length: snapshot.sheetNames.length + 1,
          },
          (acorn20, bloom20) => (
            <button
              key={`measure-more-${bloom20}`}
              ref={(coral20) => {
                rain19.current[bloom20] = coral20;
              }}
              type="button"
              className={indigo20}
              tabIndex={-1}
            >
              <span className="block min-w-0 truncate">
                {bloom20}
                {" more"}
              </span>
            </button>
          ),
        )}
      </div>
    );
  return (
    <div
      data-testid="popcorn-pages-bar"
      className={IntlProvider(
        "flex items-center gap-2",
        variant === "row"
          ? "bg-token-bg-primary border-token-border-light h-9 border-t px-3 sm:px-4"
          : "min-w-0 flex-1",
      )}
    >
      {addButtonPosition === "start" ? echo20 : null}
      <div
        ref={petal19}
        data-testid="popcorn-pages-scroll"
        className="relative min-w-0 flex-1 overflow-hidden"
      >
        {pearl20}
        {isEditing ? (
          <JoinStringsOrNull
            {...{
              sensors: urn19,
              collisionDetection: stackOffsetExpand,
              modifiers: [
                restrictToFirstScrollableAncestor,
                restrictToVerticalAxis,
              ],
              onDragStart: Copper20,
              onDragCancel: Delta20,
              onDragEnd: Bravo20,
              children: [
                <PopcornSurfaceStyle_t
                  {...{
                    items: gamma20,
                    strategy: popcornSurfaceStyle_lt,
                    children: (
                      <div className="flex min-w-0 items-center gap-1 overflow-hidden">
                        {gamma20.map((item, index) => Marble20(item, index))}
                        {onyx20}
                      </div>
                    ),
                  }}
                />,
                <AppInitialHrt
                  modifiers={[
                    restrictToFirstScrollableAncestor,
                    restrictToVerticalAxis,
                  ]}
                >
                  {lagoon19 ? (
                    <Flint3
                      {...{
                        sheetName: lagoon19,
                        tabClassName: IntlProvider(birch19, "shadow-lg"),
                        tabStyle: Kite20(true),
                        isActive: true,
                        showsAppShellTabBackground: azure19,
                        isDragging: true,
                      }}
                    />
                  ) : null}
                </AppInitialHrt>,
              ],
            }}
          />
        ) : (
          <div className="flex min-w-0 items-center gap-1 overflow-hidden">
            {gamma20.map((item, index) => Nickel20(item, index))}
            {onyx20}
          </div>
        )}
      </div>
      {addButtonPosition === "end" ? echo20 : null}
    </div>
  );
}
