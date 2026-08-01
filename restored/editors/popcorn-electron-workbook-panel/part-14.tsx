// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 1/2 from part-14
/* split-lane-import-depth:1 */

// Careful split 14/19

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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
  popcornSurfaceStyle_J as PopcornSurfaceStyle_J,
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

// Wave5d soft stubs.
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
var timber3 = esmInit(() => {
    react();
  }),
  umbra3,
  violet3,
  Willow3,
  xenon3 = esmInit(() => {
    echo3();
    trail2();
    ensureComposerEsm_Tft_Init();
    umbra3 = commonJsInit(react());
    coral2();
    harbor3();
    kite3();
    quartz3();
    slate3();
    timber3();
    Willow3 = umbra3.forwardRef(function (
      {
        value,
        onChange,
        onSubmit,
        onCancel,
        onFocus,
        onBlur,
        readOnly = false,
        refColors,
        className,
        allowShiftEnterNewline = true,
        inputId,
        inputLabel,
        inputTestId,
      },
      vine18,
    ) {
      let wind18 = value.kind === "formula" ? value.text : Vapor2(value.runs),
        [yarrow18, azure18] = umbra3.useState(value.kind),
        [birch18, canyon18] = umbra3.useState(wind18),
        [dew18, alpha19] = umbra3.useState({
          start: wind18.length,
          end: wind18.length,
        }),
        [bravo19, copper19] = umbra3.useState(false),
        [delta19, echo19] = umbra3.useState(0),
        falcon19 = umbra3.useRef(null),
        gamma19 = umbra3.useRef(null),
        [harbor19, indigo19] = umbra3.useState(0),
        jade19 = umbra3.useRef(value),
        kite19 = umbra3.useRef(onChange),
        lemon19 = umbra3.useMemo(
          () => (value.kind === "formula" ? value.text : Vapor2(value.runs)),
          [value],
        ),
        marble19 = bravo19 ? yarrow18 : value.kind,
        nickel19 = bravo19 ? birch18 : lemon19;
      umbra3.useEffect(() => {
        jade19.current = value;
      }, [value]);
      umbra3.useEffect(() => {
        kite19.current = onChange;
      }, [onChange]);
      let onyx19 = umbra3.useCallback((jasper19, kelp19) => {
          let lotus19 = jasper19 === "formula" ? Sage2(kelp19) : Topaz2(kelp19);
          jade19.current = lotus19;
          kite19.current(lotus19);
        }, []),
        pearl19 = umbra3.useCallback(
          (mint19, nova19, olive19) => {
            let prism19 =
              mint19 ??
              (nova19.trimStart().startsWith("=") ? "formula" : "text");
            azure18(prism19);
            canyon18(nova19);
            onyx19(prism19, nova19);
            typeof olive19 == "number" &&
              requestAnimationFrame(() => {
                falcon19.current?.setSelectionRange(olive19, olive19);
                alpha19({
                  start: olive19,
                  end: olive19,
                });
              });
          },
          [onyx19],
        );
      umbra3.useImperativeHandle(
        vine18,
        () => ({
          focus: () => falcon19.current?.focus(),
          setValue: (quill19) => {
            let reef19 =
              quill19.kind === "formula" ? quill19.text : Vapor2(quill19.runs);
            canyon18(reef19);
            azure18(quill19.kind);
            jade19.current = quill19;
          },
          getValue: () => jade19.current,
          insertReference: (sage19) => {
            let topaz19 = falcon19.current;
            if (!topaz19) return;
            let { selectionStart = 0, selectionEnd = 0 } = topaz19,
              ultra19 = `${birch18.slice(0, selectionStart)}${sage19}${birch18.slice(selectionEnd)}`;
            pearl19("formula", ultra19, selectionStart + sage19.length);
          },
          getCaretClientRect: () => {
            let vapor19 = falcon19.current;
            if (!vapor19) return null;
            let wheat19 = _c(vapor19, vapor19.selectionStart ?? 0);
            return wheat19
              ? new DOMRect(
                  wheat19.left,
                  wheat19.top,
                  1,
                  wheat19.height ??
                    (parseFloat(getComputedStyle(vapor19).lineHeight) || 16),
                )
              : null;
          },
        }),
        [pearl19, birch18],
      );
      let quartz19 = umbra3.useCallback(
          (event) => {
            let yarn19 = event.target.value,
              zephyr19 = yarn19.trimStart(),
              acorn19 =
                (zephyr19.startsWith("=") || yarrow18 === "formula") &&
                zephyr19.startsWith("=")
                  ? "formula"
                  : "text";
            azure18(acorn19);
            canyon18(yarn19);
            onyx19(acorn19, yarn19);
            echo19(0);
          },
          [onyx19, yarrow18],
        ),
        river19 = umbra3.useCallback(() => {
          if (!bravo19) return;
          let bloom19 = falcon19.current;
          bloom19 &&
            alpha19({
              start: bloom19.selectionStart ?? 0,
              end: bloom19.selectionEnd ?? 0,
            });
        }, [bravo19]),
        slate19 = umbra3.useCallback(() => {
          let coral19 = lemon19;
          azure18(value.kind);
          canyon18(coral19);
          alpha19({
            start: coral19.length,
            end: coral19.length,
          });
          copper19(true);
          onFocus?.();
        }, [lemon19, onFocus, value.kind]),
        timber19 = umbra3.useCallback(() => {
          copper19(false);
          onBlur?.();
        }, [onBlur]),
        umbra19 = umbra3.useCallback(() => {
          let drift19 =
            yarrow18 === "formula" ? Sage2(birch18) : Topaz2(birch18);
          jade19.current = drift19;
          onSubmit?.(drift19);
          falcon19.current?.blur();
        }, [birch18, yarrow18, onSubmit]),
        violet19 = umbra3.useCallback(() => {
          onCancel?.();
        }, [onCancel]),
        willow19 = umbra3.useMemo(
          () => (marble19 === "formula" ? Cliff2(nickel19) : null),
          [marble19, nickel19],
        ),
        xenon19 = umbra3.useMemo(
          () =>
            yarrow18 === "formula"
              ? Falcon3(birch18, dew18.start, willow19?.tokens ?? [])
              : null,
          [birch18, yarrow18, dew18.start, willow19?.tokens],
        ),
        yellow19 = umbra3.useMemo(
          () =>
            yarrow18 === "formula"
              ? Urn2({
                  formula: birch18,
                  caret: dew18.start,
                })
              : null,
          [birch18, yarrow18, dew18.start],
        ),
        zinc19 =
          yellow19?.kind === "functions" ? yellow19.suggestions.length : 0,
        amber19 = (xenon19?.prefix?.trim().length ?? 0) >= 1,
        basalt19 =
          yarrow18 === "formula" &&
          bravo19 &&
          yellow19?.kind === "functions" &&
          amber19 &&
          zinc19 > 0,
        cedar19 =
          yarrow18 === "formula" && bravo19 && yellow19?.kind === "parameters",
        daisy19 = basalt19 ? Math.min(delta19, Math.max(zinc19 - 1, 0)) : 0;
      umbra3.useEffect(() => {
        let eagle19 = gamma19.current;
        eagle19 && indigo19(eagle19.offsetHeight + 4);
      }, [bravo19, readOnly, marble19, nickel19]);
      let ember19 = umbra3.useCallback(
          (event) => {
            if ((event.stopPropagation(), !readOnly)) {
              if (basalt19 && yellow19?.kind === "functions") {
                let frost19 = yellow19.suggestions,
                  glide19 = frost19.length;
                if (glide19 > 0) {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    echo19((honey19) => (honey19 + 1) % glide19);
                    return;
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    echo19((iris19) => (iris19 - 1 + glide19) % glide19);
                    return;
                  }
                  if (event.key === "Enter") {
                    event.preventDefault();
                    let jewel19 = frost19[Math.min(daisy19, glide19 - 1)];
                    jewel19 &&
                      River3(jewel19, xenon19, birch18, dew18, pearl19, () =>
                        echo19(0),
                      );
                    return;
                  }
                }
              }
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                umbra19();
                return;
              }
              (event.key === "Enter" &&
                event.shiftKey &&
                allowShiftEnterNewline &&
                yarrow18 === "text") ||
                (event.key === "Escape" &&
                  (event.preventDefault(), violet19()));
            }
          },
          [
            daisy19,
            allowShiftEnterNewline,
            pearl19,
            yellow19,
            birch18,
            violet19,
            umbra19,
            xenon19,
            yarrow18,
            readOnly,
            dew18,
            basalt19,
          ],
        ),
        flint19 = marble19 === "formula",
        garnet19 =
          marble19 === "formula" && willow19 ? (
            <Lemon3
              {...{
                text: nickel19,
                tokenized: willow19,
                refColors,
              }}
            />
          ) : null,
        hazel19 = () => ({
          left: 0,
          top: harbor19,
        }),
        ivory19 = null;
      return (
        basalt19 && yellow19?.kind === "functions"
          ? (ivory19 = (
              <Indigo3
                {...{
                  result: yellow19,
                  position: hazel19(),
                  selectedIndex: daisy19,
                  onSuggestionHover: (knoll19) => echo19(knoll19),
                  onSuggestionSelect: (lunar19) =>
                    River3(lunar19, xenon19, birch18, dew18, pearl19, () =>
                      echo19(0),
                    ),
                }}
              />
            ))
          : cedar19 &&
            yellow19?.kind === "parameters" &&
            (ivory19 = (
              <Indigo3
                {...{
                  result: yellow19,
                  position: hazel19(),
                  selectedIndex: 0,
                  onSuggestionHover: () => {},
                  onSuggestionSelect: () => {},
                }}
              />
            )),
        (
          <div
            ref={gamma19}
            className={IntlProvider(
              "border-token-border-heavy relative flex min-h-[30px] items-center rounded border",
              "bg-token-bg-primary text-xs",
              className,
            )}
            onKeyDown={(event) => {
              event.stopPropagation();
            }}
          >
            <textarea
              ref={falcon19}
              id={inputId}
              aria-label={inputLabel}
              data-testid={inputTestId}
              value={nickel19}
              readOnly={readOnly}
              spellCheck={false}
              className={IntlProvider(
                "peer block w-full resize-none overflow-hidden border-0 bg-transparent text-xs outline-none",
                "focus:ring-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none",
                "px-1.5 py-0",
                marble19 === "formula" ? "font-mono" : "font-sans",
                flint19
                  ? "caret-token-text-primary text-transparent"
                  : "text-token-text-primary",
              )}
              rows={1}
              style={{
                height: 26,
                lineHeight: "26px",
                color: flint19 ? "transparent" : undefined,
                boxShadow: "none",
                opacity: 1,
                outline: "none",
              }}
              onChange={quartz19}
              onSelect={river19}
              onFocus={slate19}
              onBlur={timber19}
              onKeyDown={ember19}
            />
            <div
              className={IntlProvider(
                "pointer-events-none absolute inset-x-1.5 top-1/2 h-[26px] -translate-y-1/2 overflow-hidden text-xs leading-[26px]",
                "text-token-text-primary font-mono",
                marble19 === "formula" ? "opacity-100" : "opacity-0",
              )}
              style={{
                borderRadius: "inherit",
              }}
            >
              {garnet19}
            </div>
            {ivory19}
          </div>
        )
      );
    });
  });
function Yellow3(moss19) {
  let north19 = moss19.trimStart();
  return north19.startsWith("=") ? Sage2(north19) : Topaz2(moss19);
}
var zinc3 = esmInit(() => {
  coral2();
});
function Amber3({
  controller,
  snapshot,
  onFxFocus,
  onFxBlur,
  refColors,
  isEditing = true,
  showZoomSelect = true,
}) {
  let orbit19 = basalt3.useRef(null),
    pine19 = basalt3.useRef(false),
    quest19 = controller.getSelectionSummarySource?.() ?? petal1,
    ridge19 = basalt3.useSyncExternalStore(
      quest19.subscribe,
      quest19.getSnapshot,
      quest19.getSnapshot,
    ),
    storm19 = basalt3.useMemo(
      () =>
        ridge19.isDragging && (ridge19.rows > 1 || ridge19.cols > 1)
          ? `${ridge19.rows}R x ${ridge19.cols}C`
          : snapshot.selectedAddress,
      [ridge19, snapshot.selectedAddress],
    ),
    tide19 = basalt3.useMemo(
      () => Yellow3(snapshot.formulaInput),
      [snapshot.formulaInput],
    );
  return (
    <div
      data-testid="popcorn-formula-bar"
      className="bg-token-bg-primary border-token-border-light flex h-10 items-center gap-2 border-b px-3 sm:px-4"
    >
      <div className="text-token-text-secondary flex w-[64px] items-center justify-start rounded-md py-1 ps-1 text-xs font-medium">
        <span className="block truncate">{storm19}</span>
      </div>
      <div className="bg-token-border-light h-8 w-px shrink-0" />
      <button
        type="button"
        className="text-token-text-secondary hover:bg-token-bg-primary hover:text-token-text-primary inline-flex size-8 items-center justify-center rounded-md disabled:pointer-events-none disabled:opacity-50"
        aria-label="Insert function"
        data-testid="popcorn-formula-picker"
        disabled={!isEditing}
        onClick={() => orbit19.current?.focus()}
      >
        {
          <RemoteTextEditSessionSurfaceKind
            {...{
              className: "size-4",
            }}
          />
        }
      </button>
      <div className="min-w-0 flex-1">
        {
          <Willow3
            {...{
              ref: orbit19,
              inputId: "popcorn-formula-bar",
              inputLabel: "Formula bar",
              inputTestId: "popcorn-formula-input",
              value: tide19,
              onChange: (unity19) => {
                isEditing && controller.updateFormulaInput(Drift2(unity19));
              },
              onSubmit: (vale19) => {
                if (!isEditing) return;
                let wave19 = Drift2(vale19);
                controller.updateFormulaInput(wave19);
                pine19.current = true;
                controller.commitFormulaInput(wave19);
              },
              onFocus: isEditing ? onFxFocus : undefined,
              onBlur: () => {
                if (pine19.current) {
                  pine19.current = false;
                  onFxBlur?.();
                  return;
                }
                isEditing && controller.commitFormulaInput();
                onFxBlur?.();
              },
              readOnly: !isEditing,
              refColors,
              allowShiftEnterNewline: false,
              className: "rounded-md border-0 bg-transparent shadow-none",
            }}
          />
        }
      </div>
      {showZoomSelect ? (
        <>
          <div className="bg-token-border-light mx-2 h-8 w-px shrink-0" />
          {
            <RemoteTextEditSessionZoomControl
              {...{
                zoom: snapshot.zoom,
                onZoomChange: (apex19) => {
                  controller.setZoom(apex19);
                },
              }}
            />
          }
        </>
      ) : null}
    </div>
  );
}
var basalt3,
  cedar3,
  daisy3 = esmInit(() => {
    basalt3 = commonJsInit(react());
    quiet1();
    $o();
    xenon3();
    zinc3();
    RemoteTextEditSessionE();
    RemoteTextEditSessionLowerT();
  });
function Ember3({ containerWidth, gapWidth, moreButtonWidths, tabWidths }) {
  if (
    containerWidth <= 0 ||
    tabWidths.reduce((accumulator, current) => accumulator + current, 0) +
      Math.max(0, tabWidths.length - 1) * gapWidth <=
      containerWidth
  )
    return tabWidths.length;
  let brook19 = [0];
  for (let cliff19 of tabWidths)
    brook19.push((brook19[brook19.length - 1] ?? 0) + cliff19);
  for (let dusk19 = tabWidths.length - 1; dusk19 >= 0; --dusk19) {
    let elm19 =
      moreButtonWidths[tabWidths.length - dusk19] ??
      moreButtonWidths[moreButtonWidths.length - 1] ??
      0;
    if ((brook19[dusk19] ?? 0) + dusk19 * gapWidth + elm19 <= containerWidth)
      return dusk19;
  }
  return 0;
}
function Flint3({
  sheetName,
  tabClassName,
  tabStyle,
  isActive,
  showsAppShellTabBackground,
  onClick,
  onDoubleClick,
  buttonRef,
  dragAttributes,
  dragListeners,
  isDragging = false,
}) {
  return (
    <button
      ref={buttonRef ?? undefined}
      type="button"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={tabClassName}
      style={tabStyle}
      data-testid={`popcorn-sheet-tab-${sheetName}`}
      data-dragging={isDragging ? "true" : "false"}
      {...dragAttributes}
      {...dragListeners}
    >
      {showsAppShellTabBackground ? (
        <span
          aria-hidden="true"
          className={IntlProvider(
            "pointer-events-none absolute inset-0 z-0 rounded-md",
            "group-hover/tab:bg-[var(--app-shell-tab-background)]",
            (isActive || isDragging) && "bg-[var(--app-shell-tab-background)]",
          )}
        />
      ) : null}
      <span className="relative z-10 block min-w-0 truncate">{sheetName}</span>
    </button>
  );
}
function Garnet3({
  sheetName,
  index,
  isActive,
  tabClassName,
  tabStyle,
  showsAppShellTabBackground,
  controller,
  snapshot,
  startRenameSheet,
}) {
  let { attributes, listeners, setNodeRef, transform, transition, isDragging } =
      popcornSurfaceStyle_ut({
        id: sheetName,
      }),
    fern19 = {
      transform: deferredDesktopErt.Translate.toString(transform),
      transition: isDragging ? undefined : transition,
      opacity: +!isDragging,
      zIndex: isDragging ? 0 : undefined,
      position: "relative",
      display: "inline-flex",
    };
  return (
    <PopcornSurfaceStyle_J
      {...{
        actions: [
          {
            kind: "item",
            id: "view",
            icon: RemoteTextEditSessionH,
            label: "View page",
            onSelect: () => controller.setActiveSheetName(sheetName),
            testId: `popcorn-sheet-view-${index}`,
          },
          {
            kind: "item",
            id: "rename",
            icon: RemoteTextEditSessionY,
            label: "Rename",
            onSelect: () => {
              startRenameSheet(index);
            },
            testId: `popcorn-sheet-rename-${index}`,
          },
          {
            kind: "separator",
            id: "sheet-actions-separator",
          },
          {
            kind: "item",
            id: "delete",
            icon: RemoteTextEditSessionLowerR,
            label: "Delete",
            color: "danger",
            disabled: snapshot.sheetNames.length <= 1,
            onSelect: () => {
              controller.deleteSheet(index);
            },
            testId: `popcorn-sheet-delete-${index}`,
          },
        ],
        trigger: (
          <div ref={setNodeRef} style={fern19}>
            {
              <Flint3
                {...{
                  sheetName,
                  tabClassName,
                  tabStyle,
                  isActive,
                  showsAppShellTabBackground,
                  onClick: () => controller.setActiveSheetName(sheetName),
                  onDoubleClick: () => {
                    startRenameSheet(index);
                  },
                  dragAttributes: attributes,
                  dragListeners: listeners,
                  isDragging,
                }}
              />
            }
          </div>
        ),
      }}
    />
  );
}
