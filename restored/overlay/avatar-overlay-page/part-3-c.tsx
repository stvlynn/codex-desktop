// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 3/3
/* split-lane-import-depth:1 */

import { ensureAvatarOverlayPillDismissButtonUiInit } from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  defaultAvatarOverlayMascotWidthPx,
  ensureAvatarOverlayMascotSizeInit,
} from "../../desktop/avatar-overlay-mascot-size";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { ensureUseFloatingWindowPointerInteractivityInit } from "../../hooks/use-floating-window-pointer-interactivity";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import {
  avatarOverlaySelectionD,
  avatarOverlaySelectionH,
  avatarOverlaySelectionO,
  avatarOverlaySelectionT,
  avatarOverlaySelectionUpperC,
  avatarOverlaySelectionV,
} from "../use-avatar-overlay-selection";

import {
  $,
  AppInitialH,
  AppInitialM9,
  DeferredUiV2,
  DeferredYot,
  FormattedMessage,
  Install,
  RealtimeVoiceHostId,
  _n,
  avatarOverlayDebugStateIState,
  cedar,
  daisy,
  deferredUiWX,
  delta,
  echo,
  ember,
  ensureUseSelectedAvatarInit,
  falcon,
  flint,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp,
  lotus,
  mint,
  nova,
  olive,
  prism,
  quill,
  useAvatarOverlaySelectionUnderscore,
} from "./part-3-a";

esmInit(() => {
  cedar = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  $ = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  deferredUiWX();
  DeferredUiV2();
  AppActionSelector();
  Install();
  DeferredYot();
  nonEmptyTrimmedStringOrNull();
  ensureCodexSpriteAssetsInit();
  ensureUseSelectedAvatarInit();
  RealtimeVoiceHostId();
  ensureUseFloatingWindowPointerInteractivityInit();
  findSidebarSectionElement();
  ensureComposerEsm_K9_Init();
  isOpenaiCuratedMarketplaceToken();
  _n();
  delta();
  avatarOverlaySelectionUpperC();
  avatarOverlaySelectionV();
  echo();
  useAvatarOverlaySelectionUnderscore();
  ensureRemoteSshConnectionEventInit();
  AppInitialM9();
  AppInitialH();
  ensureAppScopeInit();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  FormattedMessage();
  avatarOverlayDebugStateIState();
  avatarOverlaySelectionH();
  falcon();
  avatarOverlaySelectionD();
  defaultAvatarOverlayMascotWidthPx();
  avatarOverlaySelectionUpperC();
  REALTIME_VOICE_MODE_ID();
  avatarOverlaySelectionO();
  ensureAvatarOverlayPillDismissButtonUiInit();
  avatarOverlaySelectionT();
  daisy = getJsxRuntime();
  ember = 15e3;
  flint = "first-awake-pet-notification-avatar-ids";
  garnet = ["[data-avatar-overlay-hit-region]", "[data-avatar-mascot='true']"];
  hazel = ".codex-avatar-root";
  ivory = "[data-avatar-overlay-size='notification-tray']";
  jasper = "[data-avatar-overlay-size='notification-tray-header']";
  kelp = "[data-avatar-overlay-size='notification-tray-content']";
  lotus = "[data-avatar-overlay-size='notification-tray-list']";
  mint = "[data-avatar-overlay-size='notification-tray-caption']";
  nova = "[data-avatar-overlay-measure='notification-tray-row']";
  olive = "codex-avatar-overlay-force-resize-cursor";
  prism = [hazel, ivory, jasper, kelp, lotus, mint, nova];
  quill = {
    mascot: {
      left: 216,
      top: 191,
      width: ensureAvatarOverlayMascotSizeInit,
      height: 121,
    },
    placement: "top-end",
    tray: {
      left: 11,
      top: 56,
      width: 345,
      height: 131,
    },
    viewport: {
      width: 356,
      height: 320,
    },
  };
})();
