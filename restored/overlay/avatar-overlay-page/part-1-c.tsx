// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 1/3
/* split-lane-import-depth:1 */

import {
  AvatarOverlayPillDismissButtonMark,
  getAvatarOverlayPillDismissState,
  renderAvatarOverlayPillDismissButton,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { AvatarMascotButton } from "../../avatar/avatar-mascot-button";
import { ensureAvatarOverlayMascotSizeInit } from "../../desktop/avatar-overlay-mascot-size";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconSft } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { writeScrollTop } from "../../navigation/app-action-dom";
import { EnsureRealtimeVoiceHandoffTargetInit } from "../../ui/realtime-voice-handoff-target";
import { Identity } from "../../utils/identity";
import { ParseErrorMessageDetail } from "../../utils/parse-error-message-detail";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { avatarOverlaySelectionU } from "../use-avatar-overlay-selection";

import {
  AvatarOverlayPageHelper12,
  IntlProvider,
  NativeContextMenuSurfaceStub,
  alpha,
  bravo,
  echo,
  gamma,
  indigo,
  xenon,
} from "./part-1-a";
import { AvatarOverlayPageHelper4, AvatarOverlayPageHelper6 } from "./part-1-b";

function willow({
  avatar,
  avatarMenuItems,
  debugWindowBorderVisible = false,
  interactiveRegionRef,
  isDragging = false,
  isNotificationTrayOpen = true,
  realtimeVoiceSurface,
  layout,
  mascotLayout = layout.mascot,
  mascotStyle,
  mascotDragState,
  mascotResizeHandle,
  notifications,
  onLostPointerCapture,
  onCloseNotificationTray,
  onPointerCancel,
  onPointerDown,
  onPointerMove: fern,
  onPointerUp,
  onDismissNotification,
  onOpenNotificationActions,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onNotificationReplyEditorActiveChange,
  onOpenNotificationReply,
  onSubmitNotificationReply,
  onOpenNotificationTray,
}) {
  let grove = useIntl(),
    hill = replaceInMemoryStorageEntries(),
    isle = AvatarOverlayPillDismissButtonMark(notifications[0]),
    juniper = notifications.length > 0,
    lagoon = realtimeVoiceSurface?.phase ?? "inactive",
    meadow = renderAvatarOverlayPillDismissButton(
      realtimeVoiceSurface?.isSessionActive ?? false,
      lagoon !== "inactive",
    ),
    nest = meadow === "voice-orb",
    oak = meadow === "hidden",
    petal =
      meadow === "pet"
        ? mascotLayout
        : {
            ...mascotLayout,
            height: 121,
            width: ensureAvatarOverlayMascotSizeInit,
          },
    [quiet, rain] = echo.useState(null),
    [seed, trail] = echo.useState(null);
  writeScrollTop("avatar-overlay-computer-use-cursor-changed", (ink) => {
    rain(ink.point);
  });
  let urn = seed ?? quiet,
    vine =
      urn == null
        ? null
        : getAvatarOverlayPillDismissState(
            petal,
            urn,
            avatar.spriteVersionNumber,
          ),
    wind = juniper && isNotificationTrayOpen,
    yarrow = realtimeVoiceSurface?.controlsHovered === true && !isDragging,
    azure = realtimeVoiceSurface?.caption ?? null,
    birch = wind || azure != null,
    canyon = juniper || birch,
    dew = layout.placement.startsWith("top"),
    ever = notifications.length > 1,
    field = layout.tray == null ? undefined : Math.max(0, layout.tray.height),
    grain;
  wind
    ? (grain = {
        ariaLabel: grove.formatMessage(gamma.collapseNotificationTray),
        backgroundColor: "var(--color-token-bg-primary)",
        content: <AppIconSft className="icon-xs opacity-80" />,
        foregroundColor: "var(--color-token-text-secondary)",
        onClick: onCloseNotificationTray,
      })
    : juniper &&
      (grain = {
        ariaLabel: grove.formatMessage(
          {
            id: "avatarOverlay.toggleNotificationTray",
            defaultMessage:
              "Open activity tray, {count, plural, one {# item} other {# items}}",
            description:
              "Accessible label for the floating avatar activity count button",
          },
          {
            count: notifications.length,
          },
        ),
        backgroundColor: isle.badgeBackgroundColor,
        content: notifications.length,
        foregroundColor: isle.badgeForegroundColor,
        onClick: onOpenNotificationTray,
      });
  let haven = (
    <AvatarMascotButton
      ariaLabel={grove.formatMessage(gamma.mascotLabel, {
        petName: avatar.displayName,
      })}
      assetRef={avatar.assetRef}
      lookFrame={isDragging ? null : vine}
      spriteVersionNumber={avatar.spriteVersionNumber}
      spritesheetUrl={avatar.spritesheetUrl}
      notificationBadge={grain}
      resizeHandle={
        mascotResizeHandle == null
          ? undefined
          : {
              ariaLabel: grove.formatMessage(gamma.resizeMascot),
              ...mascotResizeHandle,
            }
      }
      state={isle.mascotState}
      style={mascotStyle}
      transientState={mascotDragState}
    />
  );
  return (
    <main
      className={IntlProvider(
        "relative h-screen w-screen overflow-hidden bg-transparent",
        debugWindowBorderVisible &&
          "-outline-offset-2 outline-2 outline-[#ff0000]",
      )}
      data-avatar-overlay-debug-window-border={
        debugWindowBorderVisible || undefined
      }
    >
      <section
        ref={interactiveRegionRef}
        data-avatar-overlay-content-frame="true"
        className="relative h-full w-full cursor-grab active:cursor-grabbing"
        onLostPointerCapture={onLostPointerCapture}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        onPointerMove={fern}
        onPointerUp={onPointerUp}
      >
        {canyon ? (
          <div
            aria-hidden={birch ? undefined : true}
            data-avatar-overlay-hit-region="notification-tray"
            inert={!birch}
            className={IntlProvider(
              "absolute flex cursor-interaction text-sm text-token-foreground",
              dew ? "items-end" : "items-start",
            )}
            style={{
              height: layout.tray?.height,
              left: layout.tray?.left,
              pointerEvents: birch ? undefined : "none",
              top: layout.tray?.top,
              visibility: layout.tray == null ? "hidden" : undefined,
              width: layout.tray?.width,
            }}
          >
            {
              <ensureIntlFormattersInit.div
                animate={{
                  opacity: +!!birch,
                }}
                className="relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]"
                data-avatar-overlay-size="notification-tray"
                initial={false}
                style={
                  ever
                    ? {
                        maxHeight: field,
                      }
                    : undefined
                }
                transition={
                  hill
                    ? {
                        duration: 0,
                      }
                    : {
                        duration: 0.18,
                        ease: "easeOut",
                      }
                }
              >
                <div
                  className="h-0 overflow-hidden"
                  data-avatar-overlay-size="notification-tray-header"
                />
                <div>
                  {
                    <AvatarOverlayPageHelper8
                      areNotificationsVisible={wind}
                      isTrayAboveMascot={dew}
                      isNotificationTrayVisible={birch}
                      notifications={notifications}
                      prefersReducedMotion={!!hill}
                      realtimeVoiceCaption={azure}
                      trayMaxHeight={field}
                      onDismissNotification={onDismissNotification}
                      onOpenNotificationActions={onOpenNotificationActions}
                      onRunNotificationAction={onRunNotificationAction}
                      onSubmitQuestionOption={onSubmitQuestionOption}
                      onNotificationReplyEditorActiveChange={
                        onNotificationReplyEditorActiveChange
                      }
                      onReplyCaretPointChange={trail}
                      onOpenNotificationReply={onOpenNotificationReply}
                      onSubmitNotificationReply={onSubmitNotificationReply}
                    />
                  }
                </div>
              </ensureIntlFormattersInit.div>
            }
          </div>
        ) : null}
        {
          <NativeContextMenuSurfaceStub items={avatarMenuItems}>
            <div
              data-avatar-overlay-hit-region={oak ? undefined : "mascot"}
              className={IntlProvider(
                "group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none",
                oak && "pointer-events-none",
                isDragging && !nest
                  ? "scale-95 transition-transform"
                  : "transition-none",
              )}
              style={{
                height: petal.height,
                left: petal.left,
                top: petal.top,
                width: petal.width,
              }}
            >
              {
                <EnsureRealtimeVoiceHandoffTargetInit
                  className="relative size-full"
                  handoff={realtimeVoiceSurface?.handoff ?? null}
                  surface="global-overlay"
                >
                  {nest ? (
                    <ParseErrorMessageDetail
                      placement={layout.placement}
                      presentationAnchorRef={
                        realtimeVoiceSurface?.presentationAnchorRef
                      }
                      phase={lagoon}
                      voiceActivity={realtimeVoiceSurface?.activity ?? "idle"}
                    />
                  ) : oak ? null : (
                    haven
                  )}
                  {oak ? null : (
                    <AvatarOverlayPageHelper4
                      className={
                        nest
                          ? IntlProvider(
                              layout.placement.endsWith("end")
                                ? "-ml-5"
                                : "ml-5",
                              layout.placement.startsWith("top")
                                ? "-translate-y-5"
                                : "translate-y-5",
                            )
                          : undefined
                      }
                      areControlsVisible={yarrow}
                      canRevealControls={!isDragging}
                      canStart={realtimeVoiceSurface?.canStart ?? false}
                      isRealtimeVoiceSurfaceVisible={nest}
                      isMicrophoneMuted={
                        realtimeVoiceSurface?.microphoneMuted ?? false
                      }
                      isMuted={realtimeVoiceSurface?.muted ?? false}
                      phase={lagoon}
                      willResume={realtimeVoiceSurface?.willResume}
                      onOpenThread={realtimeVoiceSurface?.onOpenThread}
                      onStart={realtimeVoiceSurface?.onStart}
                      onStop={realtimeVoiceSurface?.onStop}
                      onToggleMicrophoneMute={
                        realtimeVoiceSurface?.onToggleMicrophoneMute
                      }
                      onToggleMute={realtimeVoiceSurface?.onToggleMute}
                    />
                  )}
                </EnsureRealtimeVoiceHandoffTargetInit>
              }
            </div>
          </NativeContextMenuSurfaceStub>
        }
      </section>
    </main>
  );
}

function AvatarOverlayPageHelper8(jadeite) {
  let {
      areNotificationsVisible,
      isTrayAboveMascot,
      isNotificationTrayVisible,
      notifications,
      onDismissNotification,
      onOpenNotificationActions,
      onNotificationReplyEditorActiveChange,
      onReplyCaretPointChange,
      onOpenNotificationReply,
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitNotificationReply,
      prefersReducedMotion,
      realtimeVoiceCaption,
      trayMaxHeight,
    } = jadeite,
    kernel = useIntl(),
    leaf = echo.useRef(null),
    maple = avatarOverlaySelectionU(notifications, kernel);
  let nimbus = maple,
    opal = realtimeVoiceCaption == null ? "" : "caption",
    plume = isTrayAboveMascot ? "tray-above" : "tray-below",
    quillow = [nimbus, opal, plume];
  let root = quillow.join("\0"),
    silk = notifications.length > 1,
    thorn = {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0,
    };
  let [upland, vista] = echo.useState(thorn),
    [wisp, yonder] = echo.useState(null),
    zenith = echo.useRef(null),
    anvil = notifications.some((item) => item.id === wisp) ? wisp : null;
  let beacon = anvil,
    crag = beacon != null && areNotificationsVisible,
    dome,
    eddy;
  dome = () => {
    if (crag)
      return (
        onNotificationReplyEditorActiveChange?.(true),
        () => {
          onNotificationReplyEditorActiveChange?.(false);
          onReplyCaretPointChange(null);
        }
      );
  };
  eddy = [crag, onNotificationReplyEditorActiveChange, onReplyCaretPointChange];
  echo.useEffect(dome, eddy);
  let fjord, glen;
  glen = () => {
    zenith.current?.focus();
  };
  fjord = [];
  writeScrollTop("avatar-overlay-keyboard-interaction-ready", glen, fjord);
  let hearth = upland.hiddenOlderNotificationCount,
    inlet = upland.hasScrollableContent,
    jetty =
      areNotificationsVisible &&
      inlet &&
      silk &&
      upland.hasLatestNotificationsAbove,
    knob = areNotificationsVisible && inlet && silk && hearth > 0,
    ledge = areNotificationsVisible && inlet && silk,
    mire = areNotificationsVisible && inlet,
    nook = notifications.length > 0,
    oxbow = nook && silk,
    pond = prefersReducedMotion
      ? {
          duration: 0,
        }
      : {
          duration: 0.18,
          ease: [0.16, 1, 0.3, 1],
        };
  let quarry = pond,
    rapids =
      realtimeVoiceCaption == null ? null : (
        <AvatarOverlayPageHelper6
          key="realtime-voice-caption"
          prefersReducedMotion={prefersReducedMotion}
          shouldInsetForScrollbar={mire}
          text={realtimeVoiceCaption}
        />
      );
  let spur = rapids,
    tor = (joint) => {
      vista((keystone) => {
        let latch = alpha(joint);
        return bravo(keystone, latch) ? keystone : latch;
      });
    };
  let updraft = tor,
    verge = (motor) => {
      leaf.current = motor;
      motor != null && updraft(motor);
    };
  let weir = verge,
    yard = () => {
      let nut = leaf.current;
      if (nut == null) return;
      updraft(nut);
      let piston = window.requestAnimationFrame(() => {
          updraft(nut);
        }),
        rivet = new ResizeObserver(() => {
          updraft(nut);
        });
      return (
        rivet.observe(nut),
        () => {
          window.cancelAnimationFrame(piston);
          rivet.disconnect();
        }
      );
    };
  let anchor;
  anchor = [root, trayMaxHeight, updraft];
  echo.useLayoutEffect(yard, anchor);
  let bolt = () => {
    let screw = leaf.current;
    screw != null &&
      (screw.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: 0,
      }),
      vista(alpha(screw, 0)));
  };
  let cog = bolt,
    _e = () => {
      let torque = leaf.current;
      if (torque == null) return;
      let valve = xenon(torque, hearth);
      torque.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: valve,
      });
      vista(alpha(torque, valve));
    };
  let disc = _e,
    edge = spur != null && "gap-1.5",
    be = IntlProvider(
      "relative flex w-full min-w-0 flex-col overflow-hidden",
      edge,
    );
  let forge = oxbow
    ? {
        height: trayMaxHeight,
        maxHeight: trayMaxHeight,
      }
    : undefined;
  let gear = isTrayAboveMascot ? null : spur,
    hinge = nook ? (
      <ensureIntlFormattersInit.div
        layout={oxbow}
        className="relative min-h-0 min-w-0 flex-1"
        transition={quarry}
      >
        {
          <Identity>
            {jetty ? (
              <AvatarOverlayPageHelper9
                key="latest"
                prefersReducedMotion={prefersReducedMotion}
                onClick={cog}
              />
            ) : null}
          </Identity>
        }
        <ensureIntlFormattersInit.div
          ref={weir}
          animate={{
            opacity: +!!isNotificationTrayVisible,
            y: isNotificationTrayVisible || prefersReducedMotion ? 0 : 3,
          }}
          aria-label={kernel.formatMessage(gamma.notificationList)}
          className={IntlProvider(
            "scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]",
            ledge && "vertical-scroll-fade-mask snap-y snap-mandatory",
          )}
          data-avatar-overlay-size="notification-tray-list"
          role="list"
          initial={false}
          transition={
            prefersReducedMotion
              ? {
                  duration: 0,
                }
              : {
                  duration: 0.16,
                  ease: "easeOut",
                }
          }
          onScroll={(event) => {
            let axle = alpha(event.currentTarget);
            vista((bracket) => (bravo(bracket, axle) ? bracket : axle));
          }}
        >
          {notifications.map((item, index) => (
            <AvatarOverlayPageHelper12
              key={item.id}
              isReplying={beacon === item.id}
              notification={item}
              notificationIndex={index}
              onCloseReply={() => {
                yonder((clamp) => (clamp === item.id ? null : clamp));
              }}
              onDismissNotification={onDismissNotification}
              onOpenNotificationActions={onOpenNotificationActions}
              onOpenReply={() => {
                onOpenNotificationReply?.(item);
                yonder(item.id);
              }}
              onRunNotificationAction={onRunNotificationAction}
              onReplyCaretPointChange={onReplyCaretPointChange}
              onSubmitQuestionOption={onSubmitQuestionOption}
              onSubmitNotificationReply={onSubmitNotificationReply}
              prefersReducedMotion={prefersReducedMotion}
              replyInputRef={zenith}
            />
          ))}
        </ensureIntlFormattersInit.div>
        {
          <Identity>
            {knob ? (
              <AvatarOverlayPageHelper10
                key="older"
                count={hearth}
                prefersReducedMotion={prefersReducedMotion}
                onClick={disc}
              />
            ) : null}
          </Identity>
        }
      </ensureIntlFormattersInit.div>
    ) : null;
  let iron = isTrayAboveMascot ? spur : null;
  return (
    <ensureIntlFormattersInit.div
      layout={oxbow}
      className={be}
      data-avatar-overlay-size="notification-tray-content"
      style={forge}
      transition={quarry}
    >
      {gear}
      {hinge}
      {iron}
    </ensureIntlFormattersInit.div>
  );
}

function AvatarOverlayPageHelper9(drill) {
  let { onClick, prefersReducedMotion } = drill,
    engine = useIntl(),
    frame = engine.formatMessage(gamma.showLatestNotifications);
  let gasket = {
    opacity: 1,
    scale: 1,
    x: "-50%",
  };
  let handle = prefersReducedMotion ? 1 : 0.96,
    insert = {
      opacity: 0,
      scale: handle,
      x: "-50%",
    };
  let jacket = prefersReducedMotion ? 1 : 0.96,
    knurl = {
      opacity: 0,
      scale: jacket,
      x: "-50%",
    };
  let lever = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.14,
        ease: "easeOut",
      };
  let mount = IntlProvider(indigo, "top-1 min-w-12");
  let nozzle = prefersReducedMotion
    ? undefined
    : {
        scale: 1.03,
      };
  let platen = prefersReducedMotion
    ? undefined
    : {
        scale: 0.96,
      };
  let ratchet = engine.formatMessage(gamma.latestNotifications);
  let shim = <span>{ratchet}</span>;
  let tappet = (
    <AppIconYlt className="icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block" />
  );
  return (
    <ensureIntlFormattersInit.button
      type="button"
      aria-label={frame}
      data-avatar-overlay-hit-region="notification-scroll-control"
      animate={gasket}
      exit={insert}
      initial={knurl}
      transition={lever}
      className={mount}
      whileHover={nozzle}
      whileTap={platen}
      onClick={onClick}
    >
      {shim}
      {tappet}
    </ensureIntlFormattersInit.button>
  );
}

function AvatarOverlayPageHelper10(arbor) {
  let { count, onClick, prefersReducedMotion } = arbor,
    bushing = useIntl(),
    collar = bushing.formatMessage(gamma.showOlderNotifications, {
      count,
    });
  let dowel = {
    opacity: 1,
    scale: 1,
    x: "-50%",
  };
  let flange = prefersReducedMotion ? 1 : 0.96,
    gib = {
      opacity: 0,
      scale: flange,
      x: "-50%",
    };
  let hub = prefersReducedMotion ? 1 : 0.96,
    idler = {
      opacity: 0,
      scale: hub,
      x: "-50%",
    };
  let jig = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.14,
        ease: "easeOut",
      };
  let keeper = IntlProvider(indigo, "bottom-1 min-w-9");
  let lug = prefersReducedMotion
    ? undefined
    : {
        scale: 1.03,
      };
  let mandrel = prefersReducedMotion
    ? undefined
    : {
        scale: 0.96,
      };
  let nipple = bushing.formatMessage(gamma.compactOlderNotificationCount, {
    count,
  });
  let orifice = (
    <span className="group-hover:hidden group-focus:hidden">{nipple}</span>
  );
  let pin = bushing.formatMessage(gamma.olderNotificationCount, {
    count,
  });
  let race = (
    <span className="hidden group-hover:inline group-focus:inline">{pin}</span>
  );
  let sleeve = (
    <AppIconYlt className="icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block" />
  );
  return (
    <ensureIntlFormattersInit.button
      type="button"
      aria-label={collar}
      data-avatar-overlay-hit-region="notification-scroll-control"
      animate={dowel}
      exit={gib}
      initial={idler}
      transition={jig}
      className={keeper}
      whileHover={lug}
      whileTap={mandrel}
      onClick={onClick}
    >
      {orifice}
      {race}
      {sleeve}
    </ensureIntlFormattersInit.button>
  );
}
