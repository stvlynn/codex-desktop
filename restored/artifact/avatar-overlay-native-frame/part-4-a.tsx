// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Split companion for avatar-overlay-native-frame part-4 (notification tray stack).
import { GlobalDictationOrbT } from "../../desktop/global-dictation-orb";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { Identity } from "../../utils/identity";

/** split companion stub */
const Component_n: any = undefined;
/** split companion stub */
const Echo: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const Iris: any = undefined;
/** split companion stub */
const Knoll: any = undefined;
/** split companion stub */
const alpha: any = undefined;
/** split companion stub */
const isle: any = undefined;

function Coral(land) {
  let {
      activityCopies,
      activityStackPresentation,
      areActivityPillsLaidOut,
      areActivityPillsVisible,
      compositionSurfaceId,
      expandedNotificationIds,
      isQuickChatVisible,
      isNotificationStackCollapsed,
      isNotificationTrayExpanded,
      isNotificationTrayVisiblyExpanded,
      isTrayAboveMascot,
      isGlobalDictationEnabled,
      isGlobalDictationVisible,
      notifications,
      notificationFollowUp,
      pointerSurfaceId: mesh,
      quickChatDictation,
      onActivityStackScroll,
      onActivateNotification,
      onGlobalDictationVisibilityChange,
      nativeMaterialAttached,
      nativePresentationOwnsMotion,
      usesStableBackingCanvases,
      onDismissNotification,
      onOpenNotificationActions,
      onNotificationExpansionChange,
      onTrayAnimationFrame,
      onQuickChatEditorActiveChange,
      onQuickChatDraftChange,
      onQuickChatPointerEnter,
      onQuickChatPointerLeave,
      onRunNotificationControl,
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitQuickChat,
      trayMaxHeight,
      quickChatDraft,
      quickChatEnabled,
    } = land,
    neck = isGlobalDictationEnabled ? (
      <div
        className={IntlProvider(
          "flex h-10 w-[345px] shrink-0 items-center justify-center",
          !isGlobalDictationVisible && "hidden",
        )}
        data-avatar-overlay-measure="notification-tray-row"
      >
        {
          <GlobalDictationOrbT
            cleanupEnabled={quickChatDictation.cleanupEnabled}
            streamingEnabled={quickChatDictation.streamingEnabled}
            onVisibilityChange={onGlobalDictationVisibilityChange}
          />
        }
      </div>
    ) : null;
  let pad = neck,
    quillshaft = quickChatEnabled ? (
      <div className="relative h-10 w-[344px] shrink-0">
        <div
          aria-hidden={
            nativePresentationOwnsMotion && compositionSurfaceId == null
              ? "true"
              : undefined
          }
          className={IntlProvider(
            "absolute top-0 left-1/2 -translate-x-1/2",
            nativePresentationOwnsMotion &&
              compositionSurfaceId == null &&
              "invisible",
          )}
          inert={
            nativePresentationOwnsMotion && compositionSurfaceId == null
              ? true
              : undefined
          }
        >
          {
            <Identity>
              {isQuickChatVisible &&
              (compositionSurfaceId == null ||
                compositionSurfaceId === "composer") ? (
                <Iris
                  hasNotifications={notifications.length > 0}
                  nativeMaterialAttached={nativeMaterialAttached}
                  nativePresentationOwnsMotion={nativePresentationOwnsMotion}
                  quickChatDictation={quickChatDictation}
                  onActiveChange={onQuickChatEditorActiveChange}
                  onAnimationFrame={onTrayAnimationFrame}
                  onDraftChange={onQuickChatDraftChange}
                  onPointerEnter={onQuickChatPointerEnter}
                  onPointerLeave={onQuickChatPointerLeave}
                  onSubmitQuickChat={onSubmitQuickChat}
                  quickChatDraft={quickChatDraft}
                />
              ) : null}
            </Identity>
          }
        </div>
      </div>
    ) : null;
  let roller = quillshaft,
    spindle = (
      <>
        {pad}
        {roller}
      </>
    );
  let thrust = spindle,
    yoke = {
      maxHeight: trayMaxHeight,
    };
  let baffle = isTrayAboveMascot ? thrust : null,
    capstan = areActivityPillsVisible ? (
      <ensureIntlFormattersInit.div
        key="activity-pills"
        animate={
          nativePresentationOwnsMotion
            ? undefined
            : {
                opacity: +!!areActivityPillsLaidOut,
              }
        }
        exit={
          nativePresentationOwnsMotion
            ? undefined
            : {
                opacity: 0,
              }
        }
        initial={false}
        transition={
          nativePresentationOwnsMotion
            ? {
                duration: 0,
              }
            : {
                duration: 0.18,
                ease: "easeOut",
              }
        }
        onUpdate={onTrayAnimationFrame}
      >
        {
          <Drift
            activityCopies={activityCopies}
            activityStackPresentation={activityStackPresentation}
            compositionSurfaceId={compositionSurfaceId}
            isNotificationStackCollapsed={isNotificationStackCollapsed}
            isExpanded={isNotificationTrayExpanded}
            isVisiblyExpanded={isNotificationTrayVisiblyExpanded}
            isTrayAboveMascot={isTrayAboveMascot}
            nativeMaterialAttached={nativeMaterialAttached}
            nativePresentationOwnsMotion={nativePresentationOwnsMotion}
            usesStableBackingCanvases={usesStableBackingCanvases}
            notifications={notifications}
            notificationFollowUp={notificationFollowUp}
            expandedNotificationIds={expandedNotificationIds}
            pointerSurfaceId={mesh}
            onActivityStackScroll={onActivityStackScroll}
            onActivateNotification={onActivateNotification}
            onAnimationFrame={onTrayAnimationFrame}
            onDismissNotification={onDismissNotification}
            onOpenNotificationActions={onOpenNotificationActions}
            onNotificationExpansionChange={onNotificationExpansionChange}
            onRunNotificationControl={onRunNotificationControl}
            onRunNotificationAction={onRunNotificationAction}
            onSubmitQuestionOption={onSubmitQuestionOption}
          />
        }
      </ensureIntlFormattersInit.div>
    ) : null;
  let diaphragm = (
    <Identity initial={false} onExitComplete={onTrayAnimationFrame}>
      {capstan}
    </Identity>
  );
  let elbow = isTrayAboveMascot ? null : thrust;
  return (
    <div
      className="flex flex-col items-center gap-2"
      data-avatar-overlay-size="notification-tray-list"
      style={yoke}
    >
      {baffle}
      {diaphragm}
      {elbow}
    </div>
  );
}
function Drift(ferrule) {
  let {
      activityCopies,
      activityStackPresentation,
      compositionSurfaceId,
      expandedNotificationIds,
      isNotificationStackCollapsed,
      isExpanded,
      isVisiblyExpanded,
      isTrayAboveMascot,
      nativeMaterialAttached,
      nativePresentationOwnsMotion,
      usesStableBackingCanvases,
      notifications,
      notificationFollowUp,
      pointerSurfaceId,
      onActivityStackScroll,
      onActivateNotification: grommet,
      onAnimationFrame,
      onDismissNotification,
      onOpenNotificationActions,
      onNotificationExpansionChange,
      onRunNotificationControl,
      onRunNotificationAction,
      onSubmitQuestionOption,
    } = ferrule,
    header = useIntl();
  if (notifications.length === 0) return null;
  let injector = nativePresentationOwnsMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      };
  let jumper = injector;
  if (activityStackPresentation != null) {
    let packing = compositionSurfaceId != null || !usesStableBackingCanvases,
      reducer;
    return (
      <Component_n
        activityCopies={activityCopies}
        activityStackPresentation={activityStackPresentation}
        compositionSurfaceId={compositionSurfaceId}
        expandedNotificationIds={expandedNotificationIds}
        isNotificationStackCollapsed={isNotificationStackCollapsed}
        isExpanded={isExpanded}
        isVisiblyExpanded={isVisiblyExpanded}
        isTrayAboveMascot={isTrayAboveMascot}
        nativeMaterialAttached={nativeMaterialAttached}
        nativePresentationOwnsMotion={nativePresentationOwnsMotion}
        notifications={notifications}
        notificationFollowUp={notificationFollowUp}
        pointerSurfaceId={pointerSurfaceId}
        publishesFollowUpVisibility={packing}
        onActivityStackScroll={onActivityStackScroll}
        onActivateNotification={grommet}
        stackTransition={jumper}
        onAnimationFrame={onAnimationFrame}
        onDismissNotification={onDismissNotification}
        onOpenNotificationActions={onOpenNotificationActions}
        onNotificationExpansionChange={onNotificationExpansionChange}
        onRunNotificationControl={onRunNotificationControl}
        onRunNotificationAction={onRunNotificationAction}
        onSubmitQuestionOption={onSubmitQuestionOption}
      />
    );
  }
  let kerf =
    activityCopies?.[0]?.notificationListAriaLabel ??
    header.formatMessage(isle.notificationList);
  let louver = isExpanded ? "flex flex-col gap-2" : "pb-2",
    manifold = IntlProvider("relative w-[345px] max-w-full shrink-0", louver);
  let nip =
    !isExpanded && notifications.length > 1 && compositionSurfaceId == null ? (
      <Echo
        nativeMaterialAttached={nativeMaterialAttached}
        notificationCount={notifications.length}
      />
    ) : null;
  let outlet;
  {
    let strainer;
    strainer = (tee, union) => {
      let vent = alpha[union],
        wye = union === 0 ? "primary" : "secondary",
        zener = !isExpanded && wye === "secondary",
        alphaPrime =
          (nativePresentationOwnsMotion && compositionSurfaceId == null) ||
          (usesStableBackingCanvases &&
            compositionSurfaceId == null &&
            zener) ||
          (compositionSurfaceId != null && compositionSurfaceId !== vent);
      if (zener && !usesStableBackingCanvases) return null;
      let bravoPrime = "relative z-10";
      return (
        wye === "primary"
          ? (bravoPrime = "relative z-20")
          : zener &&
            (bravoPrime =
              "pointer-events-none absolute top-0 right-0 left-0 z-10"),
        (
          <ensureIntlFormattersInit.div
            key={tee.id}
            layout={!nativePresentationOwnsMotion}
            layoutDependency={isExpanded}
            aria-hidden={alphaPrime || zener ? "true" : undefined}
            data-avatar-overlay-backing-canvas={zener ? "true" : undefined}
            className={IntlProvider(bravoPrime, alphaPrime && "invisible")}
            inert={alphaPrime || undefined}
            transition={jumper}
            onUpdate={onAnimationFrame}
          >
            {
              <Knoll
                canExpandActivityStack={
                  !isExpanded && wye === "primary" && notifications.length > 1
                }
                copy={activityCopies?.[union]}
                isStackedBehindPrimary={zener}
                isNativeMeasurementPlaceholder={
                  nativePresentationOwnsMotion && compositionSurfaceId == null
                }
                isNotificationStackCollapsed={isNotificationStackCollapsed}
                isPointerSurfaceHovered={pointerSurfaceId === vent}
                nativeMaterialAttached={nativeMaterialAttached}
                nativePresentationOwnsMotion={nativePresentationOwnsMotion}
                nativeSurfaceId={vent}
                notification={tee}
                notificationFollowUp={notificationFollowUp}
                publishesFollowUpVisibility={
                  compositionSurfaceId != null || !usesStableBackingCanvases
                }
                isExpanded={
                  onNotificationExpansionChange == null
                    ? undefined
                    : expandedNotificationIds.includes(tee.id)
                }
                onAnimationFrame={onAnimationFrame}
                role={wye}
                onActivateNotification={grommet}
                onDismissNotification={onDismissNotification}
                onOpenNotificationActions={onOpenNotificationActions}
                onExpansionChange={onNotificationExpansionChange}
                onRunNotificationControl={onRunNotificationControl}
                onRunNotificationAction={onRunNotificationAction}
                onSubmitQuestionOption={onSubmitQuestionOption}
              />
            }
          </ensureIntlFormattersInit.div>
        )
      );
    };
    outlet = notifications.slice(0, alpha.length).map(strainer);
  }
  return (
    <div aria-label={kerf} className={manifold} role="list">
      {nip}
      {outlet}
    </div>
  );
}

export { Coral };
