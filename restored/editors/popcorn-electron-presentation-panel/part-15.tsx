// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 15/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const IntlProvider: any = undefined;
const Meadow: any = undefined;
const _t: any = undefined;
const deferredDesktopErt: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const lagoon: any = undefined;
const moss: any = undefined;
const nook: any = undefined;
const quarry: any = undefined;
const rain: any = undefined;
const rapids: any = undefined;
const spur: any = undefined;
const tor: any = undefined;
const ultra: any = undefined;
const verge: any = undefined;
const weir: any = undefined;
const wheat: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react } from "../../boundaries/react-cjs-runtime";
import { workbookO, workbookS } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureDndAxisLockModifiersInit,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull as JoinStringsOrNull } from "../../utils/join-strings-or-null";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  popcornSurfaceStyle_B as PopcornSurfaceStyle_B,
  popcornSurfaceStyle_Ct as PopcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_E,
  popcornSurfaceStyle_F,
  popcornSurfaceStyle_ft as PopcornSurfaceStyle_ft,
  popcornSurfaceStyle_G,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_I,
  popcornSurfaceStyle_it as PopcornSurfaceStyle_it,
  popcornSurfaceStyle_K as PopcornSurfaceStyle_K,
  popcornSurfaceStyle_L,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_R as PopcornSurfaceStyle_R,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
  popcornSurfaceStyle_T,
  popcornSurfaceStyle_tt as PopcornSurfaceStyle_tt,
  popcornSurfaceStyle_Tt,
  popcornSurfaceStyle_U as PopcornSurfaceStyle_U,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_V as PopcornSurfaceStyle_V,
  popcornSurfaceStyle_Y as PopcornSurfaceStyle_Y,
  popcornSurfaceStyle_Z as PopcornSurfaceStyle_Z,
} from "../popcorn-electron-surface-style";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerB,
  RemoteTextEditSessionLowerG,
  RemoteTextEditSessionLowerH,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerV,
  RemoteTextEditSessionLowerW,
  RemoteTextEditSessionLowerX,
  RemoteTextEditSessionLowerY,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

function Disc({
  controller,
  notesHeight,
  setNotesHeight,
  isEditing,
  theme,
  leftInset,
}) {
  let leafFourth = elm(controller);
  return (
    <div
      className="popcorn-presentation-notes-panel popcorn-presentation-desktop-only pointer-events-none absolute right-0 bottom-0 z-20 px-6 pt-4 pb-6"
      style={
        theme === "codex"
          ? {
              ...popcornSurfaceStyle_N,
              left: `${leftInset}px`,
              right: 0,
            }
          : {
              left: `${leftInset}px`,
              right: 0,
            }
      }
      data-testid="popcorn-presentation-notes-panel"
    >
      {theme === "codex" ? null : (
        <div className="pointer-events-auto pb-3">
          {
            <Meadow
              {...{
                notesHeight,
                setNotesHeight,
              }}
            />
          }
        </div>
      )}
      <div className="w-full text-sm">
        {notesHeight > 0 ? (
          <textarea
            data-testid="popcorn-presentation-notes"
            placeholder={
              isEditing ? "Add speaker notes..." : "No speaker notes"
            }
            className="pointer-events-auto h-full w-full resize-none p-4 text-sm text-token-text-primary outline-none placeholder:text-token-text-secondary"
            style={{
              ...bracket,
              height: `${notesHeight}px`,
            }}
            value={leafFourth.notesText}
            readOnly={!isEditing}
            onChange={(event) => {
              controller.updateSpeakerNotes(event.target.value);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
function Edge({
  controller,
  panels,
  panelControls,
  panelOpenState,
  isEditing,
}) {
  return !isEditing || panels.length === 0 ? null : (
    <div className="popcorn-presentation-desktop-only pointer-events-none absolute inset-y-4 right-4 z-20 max-w-full">
      {panels.map((item) => (
        <Forge
          key={item.id}
          {...{
            controller,
            panel: item,
            panelControls,
            isPanelOpen: panelOpenState[item.id] ?? false,
          }}
        />
      ))}
    </div>
  );
}
function Forge({ controller, panel, panelControls, isPanelOpen }) {
  let mapleFourth = fern(controller, panel.snapshotScope ?? "editor");
  return (panel.isVisible?.({
    controller,
    snapshot: mapleFourth,
  }) ?? true) ? (
    <div
      data-testid={isPanelOpen ? "popcorn-presentation-sidebar" : undefined}
      aria-hidden={!isPanelOpen}
      inert={!isPanelOpen}
      className={IntlProvider(
        "h-full min-h-0 max-w-full transition-transform duration-300 ease-out",
        isPanelOpen
          ? "pointer-events-auto translate-x-0"
          : "pointer-events-none translate-x-full",
      )}
      style={{
        width: `${panel.widthPx ?? 336}px`,
      }}
    >
      {panel.render({
        controller,
        snapshot: mapleFourth,
        panelControls,
      })}
    </div>
  ) : null;
}
var gear,
  $,
  hinge,
  iron,
  $r,
  joint,
  keystone,
  latch,
  motor,
  nut,
  piston,
  rivet,
  screw,
  torque,
  valve,
  ui,
  axle,
  bracket,
  Clamp,
  Drill,
  Engine,
  gasket = esmInit(() => {
    ensureD3ShapeStackOffsetInit();
    ensureDndAxisLockModifiersInit();
    PopcornSurfaceStyle_Ct();
    dndAxisLockModifiers();
    ensureComposerEsm_Tft_Init();
    gear = commonJsInit(react());
    RemoteTextEditSessionC();
    popcornSurfaceStyle_I();
    popcornSurfaceStyle_I();
    RemoteTextEditSessionLowerH();
    RemoteTextEditSessionUnderscore();
    popcornSurfaceStyle_L();
    ensurePopcornPageNumberNavigationInit();
    RemoteTextEditSessionLowerG();
    RemoteTextEditSessionLowerX();
    PopcornSurfaceStyle_K();
    ultra();
    wheat();
    moss();
    _t();
    lagoon();
    rain();
    nook();
    quarry();
    rapids();
    hinge = 104;
    iron = 220;
    $r = 40;
    joint = 11;
    keystone = 1e-4;
    latch = [0.25, 0.5, 1, 1.5, 2];
    motor = 960;
    nut = {
      width: "94px",
    };
    piston = {
      width: "18px",
      minWidth: "18px",
      fontSize: "11px",
      lineHeight: "14px",
    };
    rivet = {
      borderRadius: "8px",
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
    };
    screw =
      "var(--color-token-interactive-label-accent-default, rgba(2, 133, 255, 1))";
    torque =
      "var(--color-token-interactive-bg-accent-muted-context, rgba(2, 133, 255, 0.10))";
    valve = [
      `0px 0px 0px 1px ${screw}`,
      "0px 2px 8px 0px rgba(2, 133, 255, 0.16)",
      "0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
    ].join(", ");
    ui =
      "var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))";
    axle = {
      ...rivet,
      borderColor: ui,
    };
    bracket = {
      borderRadius: "16px",
      border:
        "1px solid var(--color-token-border-default, rgba(13, 13, 13, 0.1))",
      backgroundColor:
        "var(--color-token-bg-secondary, rgba(250, 250, 250, 0.9))",
      backdropFilter: "blur(28px)",
      WebkitBackdropFilter: "blur(28px)",
    };
    clamp = gear.memo(function ({
      slideId,
      index,
      label,
      thumbnail,
      isSelected,
      onSelect,
      renderSlideThumbnailOverlay,
      slideThumbnailPlacement = "responsive",
      thumbnailSize = "default",
      slideButtonTestIdPrefix = "popcorn-presentation-slide",
      buttonRef,
      dragAttributes,
      dragListeners,
      isDragging = false,
    }) {
      let nimbusFourth = spur(slideThumbnailPlacement, thumbnailSize),
        opalFourth = tor(slideThumbnailPlacement, thumbnailSize),
        plumeFourth = verge(thumbnailSize),
        quillowFourth = weir(thumbnailSize),
        rootFourth = thumbnailSize === "floating" ? nut : undefined,
        silkFourth = {
          ...(thumbnailSize === "floating" ? piston : {}),
          ...(isSelected
            ? {
                color: screw,
              }
            : {}),
        };
      return (
        <button
          ref={buttonRef}
          data-index={index}
          type="button"
          data-testid={`${slideButtonTestIdPrefix}-${index}`}
          data-active={isSelected}
          data-dragging={isDragging ? "true" : "false"}
          aria-label={label}
          onClick={onSelect}
          className={IntlProvider(
            "flex shrink-0 cursor-interaction touch-none items-start gap-2.5 rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none",
            nimbusFourth,
          )}
          style={
            isSelected
              ? {
                  backgroundColor: torque,
                }
              : undefined
          }
          {...dragAttributes}
          {...dragListeners}
        >
          <div
            className={IntlProvider(
              "text-token-text-primary",
              quillowFourth,
              opalFourth,
            )}
            style={silkFourth}
          >
            {index + 1}
          </div>
          <div
            data-testid={`${slideButtonTestIdPrefix}-${index}-surface`}
            className={IntlProvider(
              "relative overflow-hidden border bg-white",
              plumeFourth,
              isDragging ? "shadow-lg" : null,
            )}
            style={{
              ...rivet,
              ...rootFourth,
              borderColor: isSelected ? screw : ui,
              boxShadow: isSelected ? valve : rivet.boxShadow,
            }}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt=""
                className={IntlProvider("block", plumeFourth)}
                style={rootFourth}
                draggable={false}
              />
            ) : (
              <div
                className={IntlProvider(
                  plumeFourth,
                  "animate-pulse bg-gray-200",
                )}
                style={{
                  ...rootFourth,
                  aspectRatio: 1.7777777777777777,
                }}
              />
            )}
            {renderSlideThumbnailOverlay ? (
              <div className="pointer-events-none absolute right-1.5 bottom-1.5 flex items-center justify-end">
                {renderSlideThumbnailOverlay(slideId)}
              </div>
            ) : null}
          </div>
        </button>
      );
    });
    drill = gear.memo(function ({
      slideId,
      index,
      snapshotIndex,
      label,
      thumbnail,
      isSelected,
      canDelete,
      onSelectSlide,
      onDeleteSlide,
      renderSlideThumbnailOverlay,
      slideThumbnailPlacement = "responsive",
      thumbnailSize = "default",
      slideButtonTestIdPrefix = "popcorn-presentation-slide",
      onRegisterButtonRef,
    }) {
      let {
          attributes,
          listeners,
          setNodeRef,
          transform,
          transition,
          isDragging,
        } = popcornSurfaceStyle_Tt({
          id: slideId,
        }),
        thornFourth = gear.useCallback(() => {
          onSelectSlide(snapshotIndex);
        }, [onSelectSlide, snapshotIndex]),
        uplandFourth = gear.useCallback(() => {
          onDeleteSlide(snapshotIndex);
        }, [onDeleteSlide, snapshotIndex]),
        vistaFourth = gear.useCallback(
          (wispFourth) => {
            onRegisterButtonRef(index, wispFourth, thumbnail == null);
          },
          [index, onRegisterButtonRef, thumbnail],
        );
      return (
        <PopcornSurfaceStyle_B
          {...{
            actions: gear.useMemo(
              () => [
                {
                  kind: "item",
                  id: "view",
                  label,
                  icon: RemoteTextEditSessionZoomControl,
                  onSelect: thornFourth,
                  testId: `popcorn-presentation-slide-view-${index}`,
                },
                {
                  kind: "separator",
                  id: "slide-actions-separator",
                },
                {
                  kind: "item",
                  id: "delete",
                  label: "Delete slide",
                  icon: RemoteTextEditSessionLowerR,
                  color: "danger",
                  disabled: !canDelete,
                  onSelect: uplandFourth,
                  testId: `popcorn-presentation-slide-delete-${index}`,
                },
              ],
              [canDelete, uplandFourth, thornFourth, index, label],
            ),
            trigger: (
              <div
                ref={setNodeRef}
                style={{
                  transform: deferredDesktopErt.Translate.toString(transform),
                  transition: isDragging ? undefined : transition,
                  opacity: +!isDragging,
                  position: "relative",
                  display: "inline-flex",
                }}
              >
                {
                  <Clamp
                    {...{
                      slideId,
                      index,
                      label,
                      thumbnail,
                      isSelected,
                      onSelect: thornFourth,
                      renderSlideThumbnailOverlay,
                      slideThumbnailPlacement,
                      thumbnailSize,
                      slideButtonTestIdPrefix,
                      buttonRef: vistaFourth,
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
    });
    engine = gear.memo(function ({
      onAddSlide,
      slideThumbnailPlacement = "responsive",
      thumbnailSize = "default",
    }) {
      let yonderFourth = spur(slideThumbnailPlacement, thumbnailSize),
        zenithFourth = tor(slideThumbnailPlacement, thumbnailSize),
        anvilFourth = verge(thumbnailSize),
        beaconFourth = weir(thumbnailSize),
        cragFourth = thumbnailSize === "floating" ? nut : undefined,
        domeFourth = thumbnailSize === "floating" ? piston : undefined;
      return (
        <button
          type="button"
          onClick={onAddSlide}
          aria-label="Add slide"
          title="Add slide"
          data-testid="popcorn-presentation-add-slide"
          className={IntlProvider(
            "flex shrink-0 cursor-interaction items-start gap-2.5 rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none",
            yonderFourth,
          )}
        >
          <div
            aria-hidden="true"
            className={IntlProvider(
              "text-token-text-primary invisible",
              beaconFourth,
              zenithFourth,
            )}
            style={domeFourth}
          >
            {"00"}
          </div>
          <div
            className={IntlProvider(
              "text-token-text-secondary relative flex items-center justify-center overflow-hidden border border-dashed bg-white",
              anvilFourth,
            )}
            style={{
              ...axle,
              ...cragFourth,
            }}
          >
            <div
              className="flex w-full items-center justify-center transition-colors hover:bg-token-bg-tertiary"
              style={{
                aspectRatio: 1.7777777777777777,
              }}
            >
              {
                <RemoteTextEditSessionLowerY
                  {...{
                    className: "size-4",
                  }}
                />
              }
            </div>
          </div>
        </button>
      );
    });
  });
