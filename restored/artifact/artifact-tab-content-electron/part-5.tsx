// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 5/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const ArtifactTabContentHelper10: any = undefined;
const ArtifactTabContentHelper24: any = undefined;
const ArtifactTabContentHelper37: any = undefined;
const ArtifactTabContentHelper42: any = undefined;
const ArtifactTabContentHelper43: any = undefined;
const ArtifactTabContentHelper45: any = undefined;
const ArtifactTabContentHelper47: any = undefined;
const ArtifactTabContentHelper58: any = undefined;
const ArtifactTabContentHelper59: any = undefined;
const ArtifactTabContentHelper6: any = undefined;
const ArtifactTabContentHelper60: any = undefined;
const canvas2: any = undefined;
const drift: any = undefined;
const sharp: any = undefined;
const skew: any = undefined;
const tilt: any = undefined;
const umbra: any = undefined;
const zindex: any = undefined;
const zone: any = undefined;

import type { ReactNode } from "react";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Z8_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildSkillMentionMarkdown } from "../../composer/build-skill-mention-markdown";
import { composerNavigation } from "../../composer/composer-navigation";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { conversationArchiveInFlightAtom } from "../../conversation/conversation-page-family-atoms";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { UseInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconOH } from "../../icons/app-icon-oh";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ImageFileIcon } from "../../icons/image-file-icon";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { setReviewScrollTarget } from "../../review/set-review-scroll-target";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import {
  conversationFindActiveMatchAtom,
  conversationFindResultAtom,
} from "../../thread/thread-find-atoms";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { cx } from "../../ui/cx";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { macOS4 } from "../../ui/mac-os4";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationModeEnabled,
  logArtifactAnnotationStarted,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../artifact-analytics";
import {
  buildArtifactAnnotationCommentForTarget,
  collectRemovedArtifactAnnotationIds,
  ensureArtifactAnnotationCommentInit,
  filterArtifactAnnotationCommentsForPath,
  nextArtifactAnnotationCommentLine,
  removeArtifactAnnotationCommentsForPath,
} from "../artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../artifact-preview-page-nav";
import { ArtifactPreviewZoomToFitLabel } from "../artifact-preview-zoom-to-fit-label";
import { artifactTabLoading } from "../artifact-tab-loading";
import { hypotDistance } from "../hypot-distance";

function ArtifactTabContentHelper49() {
  let board = drift.config;
  if (
    ((board.environmentVariables = board.environmentVariables || {}),
    (board.runtimeOptions = board.runtimeOptions || []),
    (board.resources = board.resources || {
      assembly: {},
      jsModuleNative: {},
      jsModuleGlobalization: {},
      jsModuleWorker: {},
      jsModuleRuntime: {},
      wasmNative: {},
      vfs: {},
      satelliteResources: {},
    }),
    board.assets)
  ) {
    drift.diagnosticTracing &&
      ArtifactTabContentHelper6(
        "config.assets is deprecated, use config.resources instead",
      );
    for (let pane of board.assets) {
      let frame2 = {};
      frame2[pane.name] = pane.hash || "";
      let viewport = {};
      switch (pane.behavior) {
        case "assembly":
          viewport.assembly = frame2;
          break;
        case "pdb":
          viewport.pdb = frame2;
          break;
        case "resource":
          viewport.satelliteResources = {};
          viewport.satelliteResources[pane.culture] = frame2;
          break;
        case "icu":
          viewport.icu = frame2;
          break;
        case "symbols":
          viewport.wasmSymbols = frame2;
          break;
        case "vfs":
          viewport.vfs = {};
          viewport.vfs[pane.virtualPath] = frame2;
          break;
        case "dotnetwasm":
          viewport.wasmNative = frame2;
          break;
        case "js-module-threads":
          viewport.jsModuleWorker = frame2;
          break;
        case "js-module-globalization":
          viewport.jsModuleGlobalization = frame2;
          break;
        case "js-module-runtime":
          viewport.jsModuleRuntime = frame2;
          break;
        case "js-module-native":
          viewport.jsModuleNative = frame2;
          break;
        case "js-module-dotnet":
          break;
        default:
          throw Error(
            `Unexpected behavior ${pane.behavior} of asset ${pane.name}`,
          );
      }
      ArtifactTabContentHelper47(board.resources, viewport);
    }
  }
  board.debugLevel === undefined &&
    canvas2 === "Debug" &&
    (board.debugLevel = -1);
  board.cachedResourcesPurgeDelay === undefined &&
    (board.cachedResourcesPurgeDelay = 1e4);
  board.applicationCulture &&
    (board.environmentVariables.LANG = `${board.applicationCulture}.UTF-8`);
  zone.diagnosticTracing = drift.diagnosticTracing = !!board.diagnosticTracing;
  zone.waitForDebugger = board.waitForDebugger;
  zone.enablePerfMeasure =
    !!board.browserProfilerOptions &&
    globalThis.performance &&
    typeof globalThis.performance.measure == "function";
  drift.maxParallelDownloads =
    board.maxParallelDownloads || drift.maxParallelDownloads;
  drift.enableDownloadRetry =
    board.enableDownloadRetry === undefined
      ? drift.enableDownloadRetry
      : board.enableDownloadRetry;
}
async function ArtifactTabContentHelper50(layer) {
  if (zindex) return void (await drift.afterConfigLoaded.promise);
  let opacity;
  try {
    if (
      (layer.configSrc ||
        (drift.config &&
          Object.keys(drift.config).length !== 0 &&
          (drift.config.assets || drift.config.resources)) ||
        (layer.configSrc = "./blazor.boot.json"),
      (opacity = layer.configSrc),
      (zindex = true),
      opacity &&
        (drift.diagnosticTracing &&
          ArtifactTabContentHelper6("mono_wasm_load_config"),
        await (async function (tint) {
          let shade = drift.locateFile(tint.configSrc),
            hue =
              drift.loadBootResource === undefined
                ? ArtifactTabContentHelper91(shade)
                : drift.loadBootResource(
                    "manifest",
                    "blazor.boot.json",
                    shade,
                    "",
                    "manifest",
                  ),
            chroma = hue
              ? typeof hue == "string"
                ? await ArtifactTabContentHelper91(
                    ArtifactTabContentHelper24(hue),
                  )
                : await hue
              : await ArtifactTabContentHelper91(
                  ArtifactTabContentHelper37(shade, "manifest"),
                );
          let luma = await (async function (gamma2) {
            let contrast = drift.config,
              balance = await gamma2.json();
            contrast.applicationEnvironment ||
              (balance.applicationEnvironment =
                gamma2.headers.get("Blazor-Environment") ||
                gamma2.headers.get("DotNet-Environment") ||
                "Production");
            balance.environmentVariables ||= {};
            let exposure = gamma2.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");
            exposure &&
              (balance.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES =
                exposure);
            let focus = gamma2.headers.get("ASPNETCORE-BROWSER-TOOLS");
            return (
              focus &&
                (balance.environmentVariables.__ASPNETCORE_BROWSER_TOOLS =
                  focus),
              balance
            );
          })(chroma);
          function ArtifactTabContentHelper91(blur) {
            return drift.fetch_like(blur, {
              method: "GET",
              credentials: "include",
              cache: "no-cache",
            });
          }
          ArtifactTabContentHelper45(drift.config, luma);
        })(layer)),
      ArtifactTabContentHelper49(),
      await ArtifactTabContentHelper42(
        drift.config.resources?.modulesAfterConfigLoaded,
      ),
      await ArtifactTabContentHelper43("onRuntimeConfigLoaded", [drift.config]),
      layer.onConfigLoaded)
    )
      try {
        await layer.onConfigLoaded(drift.config, sharp);
        ArtifactTabContentHelper49();
      } catch (soften) {
        throw (
          ArtifactTabContentHelper10("onConfigLoaded() failed", soften),
          soften
        );
      }
    ArtifactTabContentHelper49();
    drift.afterConfigLoaded.promise_control.resolve(drift.config);
  } catch (feather) {
    let mask = `Failed to load config file ${opacity} ${feather} ${feather?.stack}`;
    throw (
      (drift.config = layer.config =
        Object.assign(drift.config, {
          message: mask,
          error: feather,
          isError: true,
        })),
      ArtifactTabContentHelper58(1, Error(mask)),
      feather
    );
  }
}
function ArtifactTabContentHelper51(clip2, crop) {
  if (clip2) return;
  let scale = "Assert failed: " + (typeof crop == "function" ? crop() : crop),
    zoom = Error(scale);
  ArtifactTabContentHelper10(scale, zoom);
  zone.nativeAbort(zoom);
}
function ArtifactTabContentHelper52() {
  return drift.exitCode !== undefined;
}
function ArtifactTabContentHelper53() {
  return zone.runtimeReady && !ArtifactTabContentHelper52();
}
function ArtifactTabContentHelper54() {
  ArtifactTabContentHelper52() &&
    ArtifactTabContentHelper51(
      false,
      `.NET runtime already exited with ${drift.exitCode} ${drift.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`,
    );
  zone.runtimeReady ||
    ArtifactTabContentHelper51(
      false,
      ".NET runtime didn't start yet. Please call dotnet.create() first.",
    );
}
function ArtifactTabContentHelper55() {
  umbra &&
    (globalThis.addEventListener(
      "unhandledrejection",
      ArtifactTabContentHelper59,
    ),
    globalThis.addEventListener("error", ArtifactTabContentHelper60));
}
function ArtifactTabContentHelper56(pan) {
  tilt && tilt(pan);
  ArtifactTabContentHelper58(pan, drift.exitReason);
}
function ArtifactTabContentHelper57(rotate) {
  skew && skew(rotate || drift.exitReason);
  ArtifactTabContentHelper58(1, rotate || drift.exitReason);
}
