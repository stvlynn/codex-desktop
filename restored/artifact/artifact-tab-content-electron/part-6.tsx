// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 6/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const $r: any = undefined;
const ArtifactTabContentHelper10: any = undefined;
const ArtifactTabContentHelper11: any = undefined;
const ArtifactTabContentHelper12: any = undefined;
const ArtifactTabContentHelper23: any = undefined;
const ArtifactTabContentHelper25: any = undefined;
const ArtifactTabContentHelper46: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const ArtifactTabContentHelper52: any = undefined;
const ArtifactTabContentHelper56: any = undefined;
const ArtifactTabContentHelper57: any = undefined;
const ArtifactTabContentHelper6: any = undefined;
const ArtifactTabContentHelper8: any = undefined;
const ArtifactTabContentHelper9: any = undefined;
const __vite__mapDeps: any = undefined;
const canyon: any = undefined;
const drift: any = undefined;
const fill: any = undefined;
const hotel: any = undefined;
const pipe: any = undefined;
const skew: any = undefined;
const stamp: any = undefined;
const tilt: any = undefined;
const umbra: any = undefined;
const vitePreload: any = undefined;
const yarrow: any = undefined;
const zone: any = undefined;

import type { ReactNode } from "react";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Z8_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
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

function ArtifactTabContentHelper58(warp, bend) {
  var fold;
  let crease = bend && typeof bend == "object";
  warp =
    crease && typeof bend.status == "number"
      ? bend.status
      : warp === undefined
        ? -1
        : warp;
  let seam =
    crease && typeof bend.message == "string" ? bend.message : "" + bend;
  (bend = crease
    ? bend
    : zone.ExitStatus
      ? (function (edge, corner) {
          let bevel = new zone.ExitStatus(edge);
          return (
            (bevel.message = corner),
            (bevel.toString = () => corner),
            bevel
          );
        })(warp, seam)
      : Error("Exit with code " + warp + " " + seam)).status = warp;
  bend.message ||= seam;
  let round = "" + (bend.stack || Error().stack);
  try {
    Object.defineProperty(bend, "stack", {
      get: () => round,
    });
  } catch {}
  let stroke2 = !!bend.silent;
  if (((bend.silent = true), ArtifactTabContentHelper52()))
    drift.diagnosticTracing &&
      ArtifactTabContentHelper6("mono_exit called after exit");
  else {
    try {
      fill.onAbort == ArtifactTabContentHelper57 && (fill.onAbort = skew);
      fill.onExit == ArtifactTabContentHelper56 && (fill.onExit = tilt);
      umbra &&
        (globalThis.removeEventListener(
          "unhandledrejection",
          ArtifactTabContentHelper59,
        ),
        globalThis.removeEventListener("error", ArtifactTabContentHelper60));
      zone.runtimeReady
        ? (zone.jiterpreter_dump_stats && zone.jiterpreter_dump_stats(false),
          warp === 0 &&
            (fold = drift.config) != null &&
            fold.interopCleanupOnExit &&
            zone.forceDisposeProxies(true, true))
        : (drift.diagnosticTracing &&
            ArtifactTabContentHelper6(`abort_startup, reason: ${bend}`),
          (function (pad) {
            drift.allDownloadsQueued.promise_control.reject(pad);
            drift.allDownloadsFinished.promise_control.reject(pad);
            drift.afterConfigLoaded.promise_control.reject(pad);
            drift.wasmCompilePromise.promise_control.reject(pad);
            drift.runtimeModuleLoaded.promise_control.reject(pad);
            zone.dotnetReady &&
              (zone.dotnetReady.promise_control.reject(pad),
              zone.afterInstantiateWasm.promise_control.reject(pad),
              zone.beforePreInit.promise_control.reject(pad),
              zone.afterPreInit.promise_control.reject(pad),
              zone.afterPreRun.promise_control.reject(pad),
              zone.beforeOnRuntimeInitialized.promise_control.reject(pad),
              zone.afterOnRuntimeInitialized.promise_control.reject(pad),
              zone.afterPostRun.promise_control.reject(pad));
          })(bend));
    } catch (inset) {
      ArtifactTabContentHelper9("mono_exit A failed", inset);
    }
    try {
      stroke2 ||
        ((function (outset, spread) {
          if (outset !== 0 && spread) {
            let glow =
              zone.ExitStatus && spread instanceof zone.ExitStatus
                ? ArtifactTabContentHelper6
                : ArtifactTabContentHelper10;
            typeof spread == "string"
              ? glow(spread)
              : (spread.stack === undefined &&
                  (spread.stack = Error().stack + ""),
                spread.message
                  ? glow(
                      zone.stringify_as_error_with_stack
                        ? zone.stringify_as_error_with_stack(
                            spread.message + "\n" + spread.stack,
                          )
                        : spread.message + "\n" + spread.stack,
                    )
                  : glow(JSON.stringify(spread)));
          }
          !hotel &&
            drift.config &&
            (drift.config.logExitCode
              ? drift.config.forwardConsoleLogsToWS
                ? ArtifactTabContentHelper12("WASM EXIT " + outset)
                : ArtifactTabContentHelper8("WASM EXIT " + outset)
              : drift.config.forwardConsoleLogsToWS &&
                ArtifactTabContentHelper12());
        })(warp, bend),
        (function (halo) {
          if (
            umbra &&
            !hotel &&
            drift.config &&
            drift.config.appendElementOnExit &&
            document
          ) {
            let ring = document.createElement("label");
            ring.id = "tests_done";
            halo !== 0 && (ring.style.background = "red");
            ring.innerHTML = "" + halo;
            document.body.appendChild(ring);
          }
        })(warp));
    } catch (dot) {
      ArtifactTabContentHelper9("mono_exit B failed", dot);
    }
    drift.exitCode = warp;
    drift.exitReason ||= bend;
    !hotel && zone.runtimeReady && fill.runtimeKeepalivePop();
  }
  if (drift.config && drift.config.asyncFlushOnExit && warp === 0)
    throw (
      (async () => {
        try {
          await (async function () {
            try {
              let dash = await vitePreload(
                  () =>
                    import("../../runtime/vite-browser-external").then(
                      (value) => commonJsInit(value.default),
                    ),
                  __vite__mapDeps([0, 1]),
                  import.meta.url,
                ),
                arc = (chord) =>
                  new Promise((sector, wedge) => {
                    chord.on("error", wedge);
                    chord.end("", "utf8", sector);
                  }),
                pie = arc(dash.stderr),
                plot = arc(dash.stdout),
                chart,
                graph = new Promise((grid) => {
                  chart = setTimeout(() => grid("timeout"), 1e3);
                });
              await Promise.race([Promise.all([plot, pie]), graph]);
              clearTimeout(chart);
            } catch (list) {
              ArtifactTabContentHelper10(
                `flushing std* streams failed: ${list}`,
              );
            }
          })();
        } finally {
          $n(warp, bend);
        }
      })(),
      bend
    );
  $n(warp, bend);
}
function $n(forest, queue) {
  if (zone.runtimeReady && zone.nativeExit)
    try {
      zone.nativeExit(forest);
    } catch (stack2) {
      !zone.ExitStatus ||
        stack2 instanceof zone.ExitStatus ||
        ArtifactTabContentHelper9(
          "set_exit_code_and_quit_now failed: " + stack2.toString(),
        );
    }
  if (forest !== 0 || !umbra)
    throw (
      yarrow && canyon.process
        ? canyon.process.exit(forest)
        : zone.quit && zone.quit(forest, queue),
      queue
    );
}
function ArtifactTabContentHelper59(deque) {
  ArtifactTabContentHelper61(deque, deque.reason, "rejection");
}
function ArtifactTabContentHelper60(set2) {
  ArtifactTabContentHelper61(set2, set2.error, "error");
}
function ArtifactTabContentHelper61(event, map2, dict) {
  event.preventDefault();
  try {
    map2 ||= Error("Unhandled " + dict);
    map2.stack === undefined && (map2.stack = Error().stack);
    map2.stack += "";
    map2.silent ||
      (ArtifactTabContentHelper10("Unhandled error:", map2),
      ArtifactTabContentHelper58(1, map2));
  } catch {}
}
async function ArtifactTabContentHelper62(bloom2) {
  if (!pipe) {
    if (
      ((pipe = true),
      umbra &&
        drift.config.forwardConsoleLogsToWS &&
        globalThis.WebSocket !== undefined &&
        ArtifactTabContentHelper11(
          "main",
          globalThis.console,
          globalThis.location.origin,
        ),
      fill || ArtifactTabContentHelper51(false, "Null moduleConfig"),
      drift.config ||
        ArtifactTabContentHelper51(false, "Null moduleConfig.config"),
      typeof bloom2 == "function")
    ) {
      let stream = bloom2($r.api);
      if (stream.ready) throw Error("Module.ready couldn't be redefined.");
      Object.assign(fill, stream);
      ArtifactTabContentHelper46(fill, stream);
    } else {
      if (typeof bloom2 != "object")
        throw Error(
          "Can't use moduleFactory callback of createDotnetRuntime function.",
        );
      ArtifactTabContentHelper46(fill, bloom2);
    }
    await (async function (store) {
      if (yarrow) {
        let vault = await vitePreload(
          () =>
            import("../../runtime/vite-browser-external").then((value) =>
              commonJsInit(value.default),
            ),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        );
        if (vault.versions.node.split(".")[0] < 14)
          throw Error(
            `NodeJS at '${vault.execPath}' has too low version '${vault.versions.node}', please use at least 14. See also https://aka.ms/dotnet-wasm-features`,
          );
      }
      let chest = import.meta.url,
        safe = chest.indexOf("?");
      var lock;
      if (
        (safe > 0 && (drift.modulesUniqueQuery = chest.substring(safe)),
        (drift.scriptUrl = chest.replace(/\\/g, "/").replace(/[?#].*/, "")),
        (drift.scriptDirectory =
          (lock = drift.scriptUrl).slice(0, lock.lastIndexOf("/")) + "/"),
        (drift.locateFile = (seal) =>
          "URL" in globalThis && globalThis.URL !== stamp
            ? new URL(seal, drift.scriptDirectory).toString()
            : ArtifactTabContentHelper25(seal)
              ? seal
              : drift.scriptDirectory + seal),
        (drift.fetch_like = ArtifactTabContentHelper23),
        (drift.out = console.log),
        (drift.err = console.error),
        (drift.onDownloadResourceProgress = store.onDownloadResourceProgress),
        umbra && globalThis.navigator)
      ) {
        let mark = globalThis.navigator,
          tag = mark.userAgentData && mark.userAgentData.brands;
        tag && tag.length > 0
          ? (drift.isChromium = tag.some(
              (item) =>
                item.brand === "Google Chrome" ||
                item.brand === "Microsoft Edge" ||
                item.brand === "Chromium",
            ))
          : mark.userAgent &&
            ((drift.isChromium = mark.userAgent.includes("Chrome")),
            (drift.isFirefox = mark.userAgent.includes("Firefox")));
      }
      canyon.require = yarrow
        ? await vitePreload(
            () =>
              import("../../runtime/vite-browser-external")
                .then((value) => commonJsInit(value.default))
                .then((value) => value.createRequire(import.meta.url)),
            __vite__mapDeps([0, 1]),
            import.meta.url,
          )
        : Promise.resolve(() => {
            throw Error("require not supported");
          });
      globalThis.URL === undefined && (globalThis.URL = stamp);
    })(fill);
  }
}
