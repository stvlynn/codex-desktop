// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave5d soft stubs.
// Careful split export-budget 1/2 from part-17
/* split-lane-import-depth:1 */

const Icon: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 17/19

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

const $: any = undefined;
const $c: any = undefined;
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

function Brook3({
  controller,
  plugins,
  title,
  fileMenuContent,
  headerTitleContent,
  headerRightContent,
  renderHeaderZoomControl,
  onClose,
  accentFill,
  accentStroke,
  theme,
  isEditing,
  reviewTools,
  bottomScrollReservePx,
  annotationHeaderButtonEnabled = true,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  artifactSearchEnabled: yarn22 = true,
  commentThreadsEnabled = true,
}) {
  let zephyr22 = Delta(),
    { toolbarActions, panels, viewportOverlays } = dusk3.useMemo(
      () => Indigo(plugins),
      [plugins],
    ),
    acorn22 = dusk3.useMemo(
      () => panels.filter((item) => item.placement === "sidebar"),
      [panels],
    ),
    bloom22 = dusk3.useMemo(
      () => panels.filter((item) => item.placement === "floating"),
      [panels],
    ),
    [coral22, drift22] = dusk3.useState(() =>
      Object.fromEntries(
        bloom22.map((item) => [item.id, item.defaultOpen ?? false]),
      ),
    ),
    [eagle22, frost22] = dusk3.useState(0),
    glide22 = annotationsEnabled && reviewTools?.annotation?.enabled !== false,
    honey22 = annotationHeaderButtonEnabled && glide22,
    [iris22, jewel22] = dusk3.useState(false),
    knoll22 =
      drawingAnnotationsEnabled && reviewTools?.drawing?.enabled !== false,
    [lunar22, moss22] = dusk3.useState(false),
    [north22, orbit22] = dusk3.useState(0),
    {
      beginInputSession,
      endInputSession,
      formulaHighlightRects,
      inputFocused,
      refColors,
      updateFormulaReferences,
    } = Zephyr3({
      sheetName: zephyr22.activeSheetName,
      resetSelectionAddr: zephyr22.selectedAddress,
      resetSheet: `${zephyr22.activeSheetName}:${zephyr22.workbookVersion}`,
    });
  dusk3.useEffect(() => Eagle3(controller), [controller]);
  dusk3.useEffect(() => {
    glide22 || jewel22(false);
  }, [glide22]);
  dusk3.useEffect(() => {
    knoll22 || moss22(false);
  }, [knoll22]);
  dusk3.useEffect(() => {
    if (!iris22) return;
    let storm22 = (event) => {
      event.key === "Escape" &&
        ((event.target instanceof HTMLElement &&
          event.target.closest("[data-testid='popcorn-annotation-editor']")) ||
          jewel22(false));
    };
    return (
      window.addEventListener("keydown", storm22, true),
      () => {
        window.removeEventListener("keydown", storm22, true);
      }
    );
  }, [iris22]);
  dusk3.useEffect(() => {
    if (!lunar22) return;
    let tide22 = (event) => {
      event.key === "Escape" && moss22(false);
    };
    return (
      window.addEventListener("keydown", tide22, true),
      () => {
        window.removeEventListener("keydown", tide22, true);
      }
    );
  }, [lunar22]);
  let pine22 = dusk3.useMemo(
      () =>
        Meadow(controller, {
          activeSheetName: zephyr22.activeSheetName,
          selectedFloatingElement: zephyr22.selectedFloatingElement,
        }),
      [
        controller,
        zephyr22.activeSheetName,
        zephyr22.selectedFloatingElement,
        zephyr22.workbookVersion,
      ],
    ),
    quest22 = dusk3.useMemo(
      () => [...pine22, ...formulaHighlightRects],
      [pine22, formulaHighlightRects],
    );
  dusk3.useEffect(() => {
    drift22((unity22) => {
      let vale22 = {},
        wave22 = false;
      for (let apex22 of bloom22) {
        let brook22 = unity22[apex22.id] ?? apex22.defaultOpen ?? false;
        vale22[apex22.id] = brook22;
        Object.is(unity22[apex22.id], brook22) || (wave22 = true);
      }
      for (let cliff22 of Object.keys(unity22))
        if (!(cliff22 in vale22)) {
          wave22 = true;
          break;
        }
      return wave22 ? vale22 : unity22;
    });
  }, [bloom22]);
  let ridge22 = dusk3.useMemo(
    () =>
      bloom22.flatMap((item) =>
        item.toolbarTrigger
          ? [
              {
                id: item.id,
                label: item.toolbarTrigger.label,
                title: item.toolbarTrigger.title,
                ariaLabel: item.toolbarTrigger.ariaLabel,
                icon: item.toolbarTrigger.icon,
                isActive: coral22[item.id] ?? false,
                onSelect: () => {
                  drift22((dusk22) => ({
                    ...dusk22,
                    [item.id]: !(dusk22[item.id] ?? false),
                  }));
                },
              },
            ]
          : [],
      ),
    [coral22, bloom22],
  );
  return (
    <div
      data-testid="popcorn-editor-surface"
      className="bg-token-bg-primary relative flex h-full min-h-0 flex-col"
      onKeyDownCapture={(event) => {
        !(event.metaKey || event.ctrlKey) ||
          event.altKey ||
          event.key.toLowerCase() !== "f" ||
          (yarn22 &&
            (event.preventDefault(),
            event.stopPropagation(),
            frost22((elm22) => elm22 + 1)));
      }}
    >
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          {
            <Mint3
              {...{
                controller,
                snapshot: zephyr22,
                title,
                headerTitleContent,
                actions: [...toolbarActions, ...ridge22],
                reviewToolControl:
                  (reviewTools?.annotation && honey22) ||
                  (reviewTools?.drawing && knoll22) ? (
                    <div className="flex items-center gap-2">
                      {reviewTools?.annotation && honey22 ? (
                        <PopcornSurfaceStyle_at
                          {...{
                            active: iris22,
                            onClick: () => {
                              let fern22 = !iris22;
                              fern22 &&
                                (reviewTools?.annotation?.onModeEnabled?.(),
                                moss22(false));
                              jewel22(fern22);
                            },
                          }}
                        />
                      ) : null}
                      {reviewTools?.drawing && knoll22 ? (
                        <PopcornSurfaceStyle_Q
                          {...{
                            active: lunar22,
                            onClick: () => {
                              moss22((grove22) => {
                                let hill22 = !grove22;
                                return (
                                  hill22
                                    ? jewel22(false)
                                    : orbit22((isle22) => isle22 + 1),
                                  hill22
                                );
                              });
                            },
                          }}
                        />
                      ) : null}
                    </div>
                  ) : null,
                headerRightContent,
                renderHeaderZoomControl,
                fileMenuContent,
                sheetTabAccentFill: theme === "codex" ? undefined : accentFill,
                sheetTabAccentStroke:
                  theme === "codex" ? undefined : accentStroke,
                theme,
                isEditing,
                onClose,
              }}
            />
          }
          {
            <Amber3
              {...{
                controller,
                snapshot: zephyr22,
                onFxFocus: () => {
                  beginInputSession(zephyr22.formulaInput);
                },
                onFxBlur: () => {
                  endInputSession();
                },
                refColors,
                accentColor: accentStroke,
                isEditing,
                showZoomSelect: theme !== "codex",
              }}
            />
          }
          <div className="min-h-0 flex-1">
            <div className="h-full min-h-0">
              {
                <Kelp2
                  {...{
                    controller,
                    snapshot: zephyr22,
                    accentFill,
                    accentStroke,
                    inputFocused,
                    formulaHighlightRects: quest22,
                    onCellEditorFocus: () => {
                      beginInputSession(zephyr22.formulaInput);
                    },
                    onCellEditorBlur: () => {
                      endInputSession();
                    },
                    onCellEditorChange: (juniper22) => {
                      updateFormulaReferences(juniper22);
                    },
                    viewportOverlays,
                    findRequestToken: eagle22,
                    artifactSearchEnabled: yarn22,
                    isEditing,
                    annotationMode: iris22,
                    onAnnotationModeChange: jewel22,
                    drawingMode: lunar22,
                    onDrawingModeChange: moss22,
                    drawingCommitToken: north22,
                    reviewTools,
                    bottomScrollReservePx,
                    annotationsEnabled,
                    drawingAnnotationsEnabled,
                    commentThreadsEnabled,
                  }}
                />
              }
            </div>
          </div>
        </div>
        {acorn22.length > 0 ? (
          <aside
            data-testid="popcorn-editor-sidebar"
            className="border-token-border-light min-h-0 w-[320px] shrink-0 border-s"
          >
            <div className="h-full overflow-auto p-3">
              {acorn22.map((item) => (
                <section
                  key={item.id}
                  className="border-token-border-light bg-token-bg-primary mb-3 rounded-xl border p-3 last:mb-0"
                >
                  <h3 className="text-token-text-primary mb-2 text-sm font-medium">
                    {item.title}
                  </h3>
                  {item.render({
                    controller,
                    snapshot: zephyr22,
                  })}
                </section>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
      {bloom22.length > 0 ? (
        <div className="pointer-events-none absolute inset-0 z-40">
          {bloom22.map((item, index) =>
            coral22[item.id] ? (
              <Prism2
                key={item.id}
                {...{
                  title: item.title,
                  widthPx: item.widthPx,
                  topPx: 96 + index * 24,
                  onClose: () => {
                    drift22((lagoon22) => ({
                      ...lagoon22,
                      [item.id]: false,
                    }));
                  },
                  children: item.render({
                    controller,
                    snapshot: zephyr22,
                  }),
                }}
              />
            ) : null,
          )}
        </div>
      ) : null}
    </div>
  );
}
function Cliff3({
  controller,
  controllerOptions,
  plugins = [],
  className,
  title = "New spreadsheet",
  fileMenuContent,
  headerTitleContent,
  headerRightContent,
  renderHeaderZoomControl,
  onClose,
  accentFill,
  accentStroke,
  theme = "web",
  isEditing = true,
  reviewTools,
  bottomScrollReservePx,
  annotationHeaderButtonEnabled = true,
  annotationsEnabled: meadow22 = true,
  drawingAnnotationsEnabled = true,
  artifactSearchEnabled = true,
  commentThreadsEnabled = true,
}) {
  let nest22 =
      accentFill ??
      (theme === "codex"
        ? "var(--color-token-interactive-bg-accent-muted-context, rgba(51, 156, 255, 0.18))"
        : reef3),
    oak22 =
      accentStroke ??
      (theme === "codex"
        ? "var(--color-token-text-link-foreground, #339cff)"
        : sage3),
    petal22 = RemoteTextEditSessionW(
      controller,
      dusk3.useCallback(() => {
        if (typeof window > "u")
          throw Error(
            "Popcorn workbook editor requires an explicit controller outside the browser.",
          );
        return new wave3(controllerOptions);
      }, [controllerOptions]),
    );
  return petal22 ? (
    <div
      className={IntlProvider("no-drag", className)}
      data-codex-popcorn-editor={true}
      data-popcorn-input-boundary={true}
      data-testid="popcorn-editor-root"
      style={{
        height: "100%",
        minHeight: 0,
      }}
    >
      {
        <Copper
          {...{
            controller: petal22,
            children: (
              <Brook3
                {...{
                  controller: petal22,
                  plugins,
                  title,
                  fileMenuContent,
                  headerTitleContent,
                  headerRightContent,
                  renderHeaderZoomControl,
                  onClose,
                  accentFill: nest22,
                  accentStroke: oak22,
                  theme,
                  isEditing,
                  reviewTools,
                  bottomScrollReservePx,
                  annotationHeaderButtonEnabled,
                  annotationsEnabled: meadow22,
                  drawingAnnotationsEnabled,
                  artifactSearchEnabled,
                  commentThreadsEnabled,
                }}
              />
            ),
          }}
        />
      }
    </div>
  ) : null;
}
var dusk3,
  elm3,
  fern3 = esmInit(() => {
    ensureComposerEsm_Tft_Init();
    dusk3 = commonJsInit(react());
    harbor();
    jade();
    olive2();
    reef2();
    daisy3();
    prism3();
    topaz3();
    coral3();
    $c();
    nest();
    apex3();
    popcornSurfaceStyle__t();
    RemoteTextEditSessionC();
    popcornSurfaceStyle_it();
  }),
  grove3,
  hill3 = esmInit(() => {
    grove3 = {
      Purple: {
        1e3: "#000000",
        900: "#200D53",
        800: "#35158E",
        700: "#4C20CA",
        600: "#6D3FDC",
        500: "#875BE1",
        400: "#A47EE7",
        300: "#BC9EED",
        200: "#D3BEF2",
        100: "#E8DFF6",
        0: "#FFFFFF",
      },
      Pink: {
        1e3: "#000000",
        900: "#310E28",
        800: "#541945",
        700: "#782563",
        600: "#9D3383",
        500: "#D347B0",
        400: "#E659C2",
        300: "#EC8ACF",
        200: "#F1B4DD",
        100: "#F5DBEC",
        0: "#FFFFFF",
      },
      Red: {
        1e3: "#000000",
        900: "#360C19",
        800: "#5B142D",
        700: "#831D42",
        600: "#AB2958",
        500: "#D53670",
        400: "#EE4D83",
        300: "#F28BA6",
        200: "#F5B5C3",
        100: "#F7DBE1",
        0: "#FFFFFF",
      },
      Orange: {
        1e3: "#000000",
        900: "#29170C",
        800: "#4D2510",
        700: "#723414",
        600: "#96461C",
        500: "#BB5926",
        400: "#E36E30",
        300: "#EF9262",
        200: "#F3B99C",
        100: "#F6DDD1",
        0: "#FFFFFF",
      },
      Yellow: {
        1e3: "#000000",
        900: "#231A07",
        800: "#3F2D07",
        700: "#5C4107",
        600: "#7A570C",
        500: "#996E12",
        400: "#B98618",
        300: "#DB9F1E",
        200: "#F1B023",
        100: "#FADEB3",
        0: "#FFFFFF",
      },
      Olive: {
        1e3: "#000000",
        900: "#1E1C06",
        800: "#323204",
        700: "#494903",
        600: "#616106",
        500: "#7A7A0A",
        400: "#95950E",
        300: "#B0B013",
        200: "#CCCC24",
        100: "#EAE848",
        0: "#FFFFFF",
      },
      Green: {
        1e3: "#000000",
        900: "#0E2008",
        800: "#0C380D",
        700: "#135215",
        600: "#1D6D1E",
        500: "#268928",
        400: "#30A633",
        300: "#3DCB40",
        200: "#4DE24E",
        100: "#94F98A",
        0: "#FFFFFF",
      },
      Turquoise: {
        1e3: "#000000",
        900: "#06201A",
        800: "#08372F",
        700: "#0A5044",
        600: "#116B5B",
        500: "#188673",
        400: "#20A38C",
        300: "#27C0A6",
        200: "#2CD1B4",
        100: "#67FBDC",
        0: "#FFFFFF",
      },
      Cyan: {
        1e3: "#000000",
        900: "#061F26",
        800: "#053642",
        700: "#044E5F",
        600: "#08687E",
        500: "#0C839E",
        400: "#129FBF",
        300: "#16B7DB",
        200: "#51D7FC",
        100: "#BCEBFB",
        0: "#FFFFFF",
      },
      Blue: {
        1e3: "#000000",
        900: "#0D1B37",
        800: "#15305F",
        700: "#1E4788",
        600: "#2A5EB1",
        500: "#3A7DE8",
        400: "#6490F0",
        300: "#91AAF3",
        200: "#B8C6F6",
        100: "#DDE2F8",
        0: "#FFFFFF",
      },
      DesaturatedCool: {
        1e3: "#000000",
        900: "#1A1A1A",
        800: "#262626",
        700: "#333333",
        600: "#474747",
        500: "#595959",
        400: "#747474",
        300: "#8C8C8C",
        200: "#B3B3B3",
        100: "#D8D8D8",
        0: "#FFFFFF",
      },
      DesaturatedWarm: {
        1e3: "#000000",
        900: "#1E1C1B",
        800: "#2C2927",
        700: "#393634",
        600: "#4E4947",
        500: "#62605E",
        400: "#7A7775",
        300: "#928E8D",
        200: "#B3ACAB",
        100: "#D8D1D0",
        0: "#FFFFFF",
      },
    };
  });
function Isle3({
  icon,
  hideLabel,
  isActive,
  label,
  subLabel,
  iconClassName,
  labelClassName,
}) {
  return (
    <>
      {icon ? (
        <Icon
          {...{
            className: IntlProvider(
              "size-4",
              {
                "me-0.5": !hideLabel,
                "text-token-text-tertiary": !hideLabel && !isActive,
                "text-token-text-primary": hideLabel && !isActive,
                "text-token-interactive-label-accent-default": isActive,
              },
              iconClassName,
            ),
          }}
        />
      ) : null}
      {hideLabel ? null : (
        <span
          className={IntlProvider(
            "truncate text-sm",
            {
              "text-token-text-primary": !isActive,
              "text-token-interactive-label-accent-default": isActive,
            },
            labelClassName,
          )}
        >
          {label}
        </span>
      )}
      {subLabel}
    </>
  );
}
function Juniper3({ children }) {
  return (
    <div
      className={IntlProvider(
        "bg-token-main-surface-primary m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 py-1",
        petal3,
      )}
    >
      {children}
    </div>
  );
}
function Lagoon3({
  label,
  subLabel,
  icon,
  isDisabled = false,
  isActive = false,
  hideLabel = false,
  onClick,
  onMouseDown,
  iconClassName,
  labelClassName,
}) {
  return (
    <button
      type="button"
      className="flex h-full items-center gap-2 rounded-lg px-2 hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
      onClick={onClick}
      onMouseDown={onMouseDown}
      aria-label={hideLabel ? label : undefined}
      disabled={isDisabled}
      aria-pressed={isActive || undefined}
      data-state={isActive ? "on" : undefined}
    >
      {
        <Isle3
          {...{
            icon,
            hideLabel,
            label,
            subLabel,
            isActive,
            iconClassName,
            labelClassName,
          }}
        />
      }
    </button>
  );
}
function Meadow3({ label, hideLabel, icon, children, align = "end" }) {
  return (
    <AppInitialFrt>
      {
        <PopoverPrimitiveTrigger
          {...{
            asChild: true,
            children: (
              <button
                type="button"
                className="flex h-full items-center gap-2 rounded-lg px-2 hover:bg-black/5"
                aria-label={hideLabel ? label : undefined}
              >
                {
                  <Isle3
                    {...{
                      icon,
                      hideLabel,
                      label,
                    }}
                  />
                }
              </button>
            ),
          }}
        />
      }
      <AppInitialPrt>
        <AppInitialNrt align={align} sideOffset={8} className="z-50">
          {children}
        </AppInitialNrt>
      </AppInitialPrt>
    </AppInitialFrt>
  );
}
function Nest3() {
  return <div className="mx-1 h-3 w-px bg-token-border-default" />;
}
var oak3,
  petal3,
  quiet3 = esmInit(() => {
    AppInitialLrt();
    ensureComposerEsm_Tft_Init();
    petal3 =
      "shadow-[0_8px_12px_0_rgba(0,0,0,0.16),0_0_1px_0_rgba(0,0,0,0.60)]";
  });
