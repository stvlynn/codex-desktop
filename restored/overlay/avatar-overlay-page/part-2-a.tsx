// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 2/3
/* split-lane-import-depth:1 */

import {
  ensureAvatarOverlayPillDismissButtonAtomsInit,
  ensureAvatarOverlayPillDismissButtonHelpersInit,
  ensureAvatarOverlayPillDismissButtonIconsInit,
  ensureAvatarOverlayPillDismissButtonInit,
  ensureAvatarOverlayPillDismissButtonStylesInit,
  ensureAvatarOverlayPillDismissButtonUiInit,
  ensureAvatarOverlayPillDismissButtonYieldInit,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureAvatarMascotButtonInit } from "../../avatar/avatar-mascot-button";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { defaultAvatarOverlayMascotWidthPx } from "../../desktop/avatar-overlay-mascot-size";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureHooksQueriesInit } from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { RealtimeVoiceHandoffTarget } from "../../ui/realtime-voice-handoff-target";
import { ensureCreateResizeObserverInit } from "../../utils/create-resize-observer";
import { identity } from "../../utils/identity";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import {
  avatarOverlaySelectionD,
  avatarOverlaySelectionO,
} from "../use-avatar-overlay-selection";

// Cross-part stubs (same-package helpers live in sibling parts).
export const $: any = undefined;

const AppInitialFct: any = undefined;

const AppInitialSct: any = undefined;

export const AppInitialXct: any = undefined;

export const DeferredUiN2: any = undefined;

const DeferredUiV2: any = undefined;

export const IntlProvider: any = undefined;

const ListPermissionProfiles: any = undefined;

export const AvatarOverlayPageHelper31: any = undefined;

export const alpha: any = undefined;

const bravo: any = undefined;

const copper: any = undefined;

const delta: any = undefined;

const avatarOverlayPillDismissButtonUnderscore: any = undefined;

const initializeAppHostServices: any = undefined;

export const ReadLoginRouteQuerySnapshot: any = undefined;

export var slate,
  timber,
  umbra,
  violet,
  willow,
  xenon,
  yellow,
  or,
  zinc,
  amber,
  basalt,
  cedar,
  daisy,
  ember = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    ensureComposerEsm_MT_Init();
    timber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureAvatarMascotButtonInit();
    avatarOverlayPillDismissButtonUnderscore();
    initializeAppHostServices();
    ensureSettingsQueryAtomsInit();
    AppIconZlt();
    ensureComposerEsm_Hlt_Init();
    ListPermissionProfiles();
    ensureHooksQueriesInit();
    AppIconYlt();
    ensureAppIconSftInit();
    CHATGPT_PRODUCT_ID();
    AppInitialSct();
    buildCodexDesktopRequestHeaders();
    findSidebarSectionElement();
    delta();
    AppInitialFct();
    RealtimeVoiceHandoffTarget();
    ensureCreateResizeObserverInit();
    ensureAvatarOverlayPillDismissButtonStylesInit();
    ensureAvatarOverlayPillDismissButtonIconsInit();
    avatarOverlaySelectionD();
    defaultAvatarOverlayMascotWidthPx();
    ensureAvatarOverlayPillDismissButtonHelpersInit();
    REALTIME_VOICE_MODE_ID();
    avatarOverlaySelectionO();
    ensureAvatarOverlayPillDismissButtonInit();
    bravo();
    ensureAvatarOverlayPillDismissButtonUiInit();
    ensureAvatarOverlayPillDismissButtonAtomsInit();
    ensureAvatarOverlayPillDismissButtonYieldInit();
    umbra = getJsxRuntime();
    violet = identity({
      mascotLabel: {
        id: "petOverlay.mascotLabel",
        defaultMessage: "{petName} pet",
        description: "Accessible label for the floating Codex pet",
      },
      openNotification: {
        id: "avatarOverlay.openNotification",
        defaultMessage: "Open notification",
        description:
          "Accessible label for an actionable row in the floating avatar notification tray",
      },
      dismissNotification: {
        id: "avatarOverlay.dismissNotification",
        defaultMessage: "Dismiss {title}",
        description:
          "Accessible label for dismissing a notification in the floating avatar notification tray",
      },
      dismissNotificationTooltip: {
        id: "avatarOverlay.dismissNotificationTooltip",
        defaultMessage: "Dismiss",
        description:
          "Tooltip for the icon button that dismisses a floating avatar notification",
      },
      replyNotification: {
        id: "avatarOverlay.replyNotification",
        defaultMessage: "Reply to {title}",
        description:
          "Accessible label for replying to a floating avatar notification",
      },
      replyNotificationButton: {
        id: "avatarOverlay.replyNotificationButton",
        defaultMessage: "Reply",
        description:
          "Compact button label for replying to a floating avatar notification",
      },
      sendNotificationReply: {
        id: "avatarOverlay.sendNotificationReply",
        defaultMessage: "Send reply to {title}",
        description:
          "Accessible label for submitting a floating avatar notification reply",
      },
      notificationReplyPlaceholder: {
        id: "avatarOverlay.notificationReplyPlaceholder",
        defaultMessage: "Reply",
        description:
          "Placeholder for the one-line floating avatar notification reply input",
      },
      notificationReplyError: {
        id: "avatarOverlay.notificationReplyError",
        defaultMessage: "Unable to send reply",
        description:
          "Compact error shown when a floating avatar notification reply fails",
      },
      expandNotification: {
        id: "avatarOverlay.expandNotification",
        defaultMessage: "Expand {title}",
        description:
          "Accessible label for expanding a floating avatar notification row",
      },
      collapseNotification: {
        id: "avatarOverlay.collapseNotification",
        defaultMessage: "Collapse {title}",
        description:
          "Accessible label for collapsing a floating avatar notification row",
      },
      expandNotificationTooltip: {
        id: "avatarOverlay.expandNotificationTooltip",
        defaultMessage: "Expand",
        description:
          "Tooltip for the icon button that expands a floating avatar notification",
      },
      collapseNotificationTooltip: {
        id: "avatarOverlay.collapseNotificationTooltip",
        defaultMessage: "Collapse",
        description:
          "Tooltip for the icon button that collapses a floating avatar notification",
      },
      collapseNotificationTray: {
        id: "avatarOverlay.collapseNotificationTray",
        defaultMessage: "Collapse activity",
        description:
          "Accessible label and tooltip for the button that collapses the floating avatar activity tray",
      },
      resizeMascot: {
        id: "avatarOverlay.resizeMascot",
        defaultMessage: "Resize pet",
        description:
          "Accessible label for the handle that resizes the floating Codex pet",
      },
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description:
          "Accessible label for the list of floating avatar activity notifications",
      },
      latestNotifications: {
        id: "avatarOverlay.latestNotifications",
        defaultMessage: "Latest",
        description:
          "Label for the button that scrolls the floating avatar activity list back to the newest notifications",
      },
      showLatestNotifications: {
        id: "avatarOverlay.showLatestNotifications",
        defaultMessage: "Show latest activity",
        description:
          "Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications",
      },
      showOlderNotifications: {
        id: "avatarOverlay.showOlderNotifications",
        defaultMessage:
          "Show {count, plural, one {# older activity item} other {# older activity items}}",
        description:
          "Accessible label for the button that scrolls the floating avatar activity list toward older notifications",
      },
      olderNotificationCount: {
        id: "avatarOverlay.olderNotificationCount",
        defaultMessage: "{count, plural, one {# more} other {# more}}",
        description:
          "Label for the button that shows there are more floating avatar activity notifications below",
      },
      compactOlderNotificationCount: {
        id: "avatarOverlay.compactOlderNotificationCount",
        defaultMessage: "+{count}",
        description:
          "Compact label for the edge button that shows hidden floating avatar activity notifications",
      },
      questionStatusIcon: {
        id: "avatarOverlay.questionStatusIcon",
        defaultMessage: "Question",
        description:
          "Accessible label for a floating avatar notification waiting on a question answer",
      },
      compactPatchFileCount: {
        id: "avatarOverlay.compactPatchFileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description:
          "Compact file count for a patch request in the floating avatar notification tray",
      },
      compactPatchAdditions: {
        id: "avatarOverlay.compactPatchAdditions",
        defaultMessage: "+{count}",
        description:
          "Compact additions count for a patch request in the floating avatar notification tray",
      },
      compactPatchDeletions: {
        id: "avatarOverlay.compactPatchDeletions",
        defaultMessage: "-{count}",
        description:
          "Compact deletions count for a patch request in the floating avatar notification tray",
      },
    });
    willow = 2;
    xenon = 2;
    yellow = 0.035;
    or = 32;
    zinc = 84;
    amber = 512;
    basalt = 1;
    cedar =
      "group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]";
    daisy = "bg-token-main-surface-primary";
  });
