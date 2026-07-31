// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 7/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const $r: any = undefined;
const ArtifactTabContentHelper19: any = undefined;
const ArtifactTabContentHelper21: any = undefined;
const ArtifactTabContentHelper28: any = undefined;
const ArtifactTabContentHelper29: any = undefined;
const ArtifactTabContentHelper30: any = undefined;
const ArtifactTabContentHelper31: any = undefined;
const ArtifactTabContentHelper34: any = undefined;
const ArtifactTabContentHelper42: any = undefined;
const ArtifactTabContentHelper43: any = undefined;
const ArtifactTabContentHelper45: any = undefined;
const ArtifactTabContentHelper49: any = undefined;
const ArtifactTabContentHelper50: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const ArtifactTabContentHelper56: any = undefined;
const ArtifactTabContentHelper57: any = undefined;
const ArtifactTabContentHelper58: any = undefined;
const ArtifactTabContentHelper6: any = undefined;
const ArtifactTabContentHelper62: any = undefined;
const ArtifactTabContentHelper9: any = undefined;
const beam: any = undefined;
const card: any = undefined;
const chip: any = undefined;
const drift: any = undefined;
const fill: any = undefined;
const heath: any = undefined;
const modal: any = undefined;
const pivot: any = undefined;
const sharp: any = undefined;
const skew: any = undefined;
const tab: any = undefined;
const tile: any = undefined;
const tilt: any = undefined;
const umbra: any = undefined;
const vitePreload: any = undefined;
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

async function ArtifactTabContentHelper63(caption) {
  return (
    await ArtifactTabContentHelper62(caption),
    (skew = fill.onAbort),
    (tilt = fill.onExit),
    (fill.onAbort = ArtifactTabContentHelper57),
    (fill.onExit = ArtifactTabContentHelper56),
    fill.ENVIRONMENT_IS_PTHREAD
      ? (async function () {
          (function () {
            let subtitle = new MessageChannel(),
              heading = subtitle.port1,
              footer = subtitle.port2;
            heading.addEventListener(
              "message",
              (header) => {
                var nav = JSON.parse(header.data.config),
                  ribbon = JSON.parse(header.data.monoThreadInfo);
                tab
                  ? drift.diagnosticTracing &&
                    ArtifactTabContentHelper6("mono config already received")
                  : (ArtifactTabContentHelper45(drift.config, nav),
                    (zone.monoThreadInfo = ribbon),
                    ArtifactTabContentHelper49(),
                    drift.diagnosticTracing &&
                      ArtifactTabContentHelper6("mono config received"),
                    (tab = true),
                    drift.afterConfigLoaded.promise_control.resolve(
                      drift.config,
                    ),
                    umbra &&
                      nav.forwardConsoleLogsToWS &&
                      globalThis.WebSocket !== undefined &&
                      drift.setup_proxy_console(
                        "worker-idle",
                        console,
                        globalThis.location.origin,
                      ));
                heading.close();
                footer.close();
              },
              {
                once: true,
              },
            );
            heading.start();
            self.postMessage(
              {
                [chip]: {
                  monoCmd: "preload",
                  port: footer,
                },
              },
              [footer],
            );
          })();
          await drift.afterConfigLoaded.promise;
          (function () {
            let pill = drift.config;
            pill.assets ||
              ArtifactTabContentHelper51(
                false,
                "config.assets must be defined",
              );
            for (let toast of pill.assets) {
              ArtifactTabContentHelper28(toast);
              modal[toast.behavior] && pivot.push(toast);
            }
          })();
          setTimeout(async () => {
            try {
              await ArtifactTabContentHelper30();
            } catch (dialog) {
              ArtifactTabContentHelper58(1, dialog);
            }
          }, 0);
          let drawer = ArtifactTabContentHelper64();
          return (await or(await Promise.all(drawer)), fill);
        })()
      : (async function () {
          await ArtifactTabContentHelper50(fill);
          ArtifactTabContentHelper31();
          let sheet2 = ArtifactTabContentHelper64();
          return (
            await ArtifactTabContentHelper19(),
            (async function () {
              try {
                let popover = ArtifactTabContentHelper29("dotnetwasm");
                await ArtifactTabContentHelper34(popover);
                (popover &&
                  popover.pendingDownloadInternal &&
                  popover.pendingDownloadInternal.response) ||
                  ArtifactTabContentHelper51(
                    false,
                    "Can't load dotnet.native.wasm",
                  );
                let tooltip = await popover.pendingDownloadInternal.response,
                  hint =
                    tooltip.headers && tooltip.headers.get
                      ? tooltip.headers.get("Content-Type")
                      : undefined,
                  cue;
                if (
                  typeof WebAssembly.compileStreaming == "function" &&
                  hint === "application/wasm"
                )
                  cue = await WebAssembly.compileStreaming(tooltip);
                else {
                  umbra &&
                    hint !== "application/wasm" &&
                    ArtifactTabContentHelper9(
                      'WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.',
                    );
                  let input = await tooltip.arrayBuffer();
                  drift.diagnosticTracing &&
                    ArtifactTabContentHelper6(
                      "instantiate_wasm_module buffered",
                    );
                  cue = heath
                    ? await Promise.resolve(new WebAssembly.Module(input))
                    : await WebAssembly.compile(input);
                }
                popover.pendingDownloadInternal = null;
                popover.pendingDownload = null;
                popover.buffer = null;
                popover.moduleExports = null;
                drift.wasmCompilePromise.promise_control.resolve(cue);
              } catch (field) {
                drift.wasmCompilePromise.promise_control.reject(field);
              }
            })(),
            setTimeout(async () => {
              try {
                ArtifactTabContentHelper21();
                await ArtifactTabContentHelper30();
              } catch (form) {
                ArtifactTabContentHelper58(1, form);
              }
            }, 0),
            await or(await Promise.all(sheet2)),
            await zone.dotnetReady.promise,
            await ArtifactTabContentHelper42(
              drift.config.resources?.modulesAfterRuntimeReady,
            ),
            await ArtifactTabContentHelper43("onRuntimeReady", [$r.api]),
            sharp
          );
        })()
  );
}
function ArtifactTabContentHelper64() {
  let group = ArtifactTabContentHelper29("js-module-runtime"),
    block = ArtifactTabContentHelper29("js-module-native");
  return (
    (card && tile) ||
      (typeof group.moduleExports == "object"
        ? (card = group.moduleExports)
        : (drift.diagnosticTracing &&
            ArtifactTabContentHelper6(
              `Attempting to import '${group.resolvedUrl}' for ${group.name}`,
            ),
          (card = vitePreload(
            () => import(group.resolvedUrl),
            [],
            import.meta.url,
          ))),
      typeof block.moduleExports == "object"
        ? (tile = block.moduleExports)
        : (drift.diagnosticTracing &&
            ArtifactTabContentHelper6(
              `Attempting to import '${block.resolvedUrl}' for ${block.name}`,
            ),
          (tile = vitePreload(
            () => import(block.resolvedUrl),
            [],
            import.meta.url,
          )))),
    [card, tile]
  );
}
async function or(brick) {
  let {
      initializeExports,
      initializeReplacements,
      configureRuntimeStartup,
      configureEmscriptenStartup,
      configureWorkerStartup,
      setRuntimeGlobals,
      passEmscriptenInternals,
    } = brick[0],
    { default: _default } = brick[1];
  if (
    (setRuntimeGlobals($r),
    initializeExports($r),
    drift.config.globalizationMode === "hybrid")
  ) {
    let { initHybrid } = await (async function () {
      let slab,
        plank = ArtifactTabContentHelper29("js-module-globalization");
      return (
        typeof plank.moduleExports == "object"
          ? (slab = plank.moduleExports)
          : (ArtifactTabContentHelper6(
              `Attempting to import '${plank.resolvedUrl}' for ${plank.name}`,
            ),
            (slab = vitePreload(
              () => import(plank.resolvedUrl),
              [],
              import.meta.url,
            ))),
        await slab
      );
    })();
    initHybrid(beam, zone);
  }
  await configureRuntimeStartup(fill);
  drift.runtimeModuleLoaded.promise_control.resolve();
  _default(
    (post) => (
      Object.assign(fill, {
        ready: post.ready,
        __dotnet_runtime: {
          initializeReplacements,
          configureEmscriptenStartup,
          configureWorkerStartup,
          passEmscriptenInternals,
        },
      }),
      fill
    ),
  ).catch((error) => {
    throw error.message && error.message.toLowerCase().includes("out of memory")
      ? Error(
          ".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features",
        )
      : error;
  });
}
