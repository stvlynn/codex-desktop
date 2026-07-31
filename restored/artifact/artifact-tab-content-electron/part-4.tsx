// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 4/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const ArtifactTabContentHelper18: any = undefined;
const ArtifactTabContentHelper24: any = undefined;
const ArtifactTabContentHelper37: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const ArtifactTabContentHelper58: any = undefined;
const ArtifactTabContentHelper6: any = undefined;
const ArtifactTabContentHelper9: any = undefined;
const _r: any = undefined;
const aurora: any = undefined;
const basalt: any = undefined;
const drift: any = undefined;
const nadir: any = undefined;
const nimbus: any = undefined;
const stratus: any = undefined;
const vitePreload: any = undefined;
const zeal: any = undefined;

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

function ArtifactTabContentHelper38(matrix) {
  try {
    matrix.resolvedUrl ||
      ArtifactTabContentHelper51(false, "Request's resolvedUrl must be set");
    let tensor = (async function (scalar) {
        let spiral = await (async function (helix) {
          let vortex = zeal;
          if (
            !vortex ||
            helix.noCache ||
            !helix.hash ||
            helix.hash.length === 0
          )
            return;
          let cyclone = ArtifactTabContentHelper18(helix),
            tempest;
          basalt[cyclone] = true;
          try {
            tempest = await vortex.match(cyclone);
          } catch {}
          if (!tempest) return;
          let monsoon = parseInt(tempest.headers.get("content-length") || "0");
          return (
            (nimbus[helix.name] = {
              responseBytes: monsoon,
            }),
            tempest
          );
        })(scalar);
        return (
          spiral ||
            ((spiral = await (function (breeze) {
              let squall = breeze.resolvedUrl;
              if (drift.loadBootResource) {
                let gale = ArtifactTabContentHelper39(breeze);
                if (gale instanceof Promise) return gale;
                typeof gale == "string" && (squall = gale);
              }
              let blizzard = {};
              return (
                drift.config.disableNoCacheFetch ||
                  (blizzard.cache = "no-cache"),
                breeze.useCredentials
                  ? (blizzard.credentials = "include")
                  : !drift.config.disableIntegrityCheck &&
                    breeze.hash &&
                    (blizzard.integrity = breeze.hash),
                drift.fetch_like(squall, blizzard)
              );
            })(scalar)),
            (function (drizzle, shower) {
              let torrent = zeal;
              if (
                !torrent ||
                drizzle.noCache ||
                !drizzle.hash ||
                drizzle.hash.length === 0
              )
                return;
              let cascade = shower.clone();
              setTimeout(() => {
                let rapids = ArtifactTabContentHelper18(drizzle);
                (async function (whirl, surge, swell, breaker) {
                  let foam = await breaker.arrayBuffer(),
                    spray = (function (fog) {
                      if (typeof performance < "u")
                        return performance.getEntriesByName(fog)[0];
                    })(breaker.url),
                    cloud = (spray && spray.encodedBodySize) || undefined;
                  _r[surge] = {
                    responseBytes: cloud,
                  };
                  let cirrus = new Response(foam, {
                    headers: {
                      "content-type": breaker.headers.get("content-type") || "",
                      "content-length": (
                        cloud ||
                        breaker.headers.get("content-length") ||
                        ""
                      ).toString(),
                    },
                  });
                  try {
                    await whirl.put(swell, cirrus);
                  } catch {}
                })(torrent, drizzle.name, rapids, cascade);
              }, 0);
            })(scalar, spiral)),
          spiral
        );
      })(matrix),
      cumulus = {
        name: matrix.name,
        url: matrix.resolvedUrl,
        response: tensor,
      };
    return (
      stratus.add(matrix.name),
      cumulus.response.then(() => {
        matrix.behavior == "assembly" &&
          drift.loadedAssemblies.push(matrix.name);
        aurora++;
        drift.onDownloadResourceProgress &&
          drift.onDownloadResourceProgress(aurora, stratus.size);
      }),
      cumulus
    );
  } catch (corona) {
    let eclipse = {
      ok: false,
      url: matrix.resolvedUrl,
      status: 500,
      statusText: "ERR29: " + corona,
      arrayBuffer: () => {
        throw corona;
      },
      json: () => {
        throw corona;
      },
    };
    return {
      name: matrix.name,
      url: matrix.resolvedUrl,
      response: Promise.resolve(eclipse),
    };
  }
}
function ArtifactTabContentHelper39(solstice) {
  if (drift.loadBootResource) {
    let equinox = solstice.hash ?? "",
      meridian = solstice.resolvedUrl,
      horizon = nadir[solstice.behavior];
    if (horizon) {
      let vertex = drift.loadBootResource(
        horizon,
        solstice.name,
        meridian,
        equinox,
        solstice.behavior,
      );
      return typeof vertex == "string"
        ? ArtifactTabContentHelper24(vertex)
        : vertex;
    }
  }
}
function ArtifactTabContentHelper40(canvas) {
  canvas.pendingDownloadInternal = null;
  canvas.pendingDownload = null;
  canvas.buffer = null;
  canvas.moduleExports = null;
}
function ArtifactTabContentHelper41(palette) {
  let stroke = palette.lastIndexOf("/");
  return (stroke >= 0 && stroke++, palette.substring(stroke));
}
async function ArtifactTabContentHelper42(glyph) {
  if (!glyph) return;
  let serif = Object.keys(glyph);
  await Promise.all(
    serif.map((item) =>
      (async function (sans) {
        try {
          let ledger = ArtifactTabContentHelper37(
            drift.locateFile(sans),
            "js-module-library-initializer",
          );
          drift.diagnosticTracing &&
            ArtifactTabContentHelper6(
              `Attempting to import '${ledger}' for ${sans}`,
            );
          let folio = await vitePreload(
            () => import(ledger),
            [],
            import.meta.url,
          );
          drift.libraryInitializers.push({
            scriptName: sans,
            exports: folio,
          });
        } catch (codex) {
          ArtifactTabContentHelper9(
            `Failed to import library initializer '${sans}': ${codex}`,
          );
        }
      })(item),
    ),
  );
}
async function ArtifactTabContentHelper43(scroll, tablet) {
  if (!drift.libraryInitializers) return;
  let parchment = [];
  for (let inkwell = 0; inkwell < drift.libraryInitializers.length; inkwell++) {
    let quilltip = drift.libraryInitializers[inkwell];
    quilltip.exports[scroll] &&
      parchment.push(
        ArtifactTabContentHelper44(quilltip.scriptName, scroll, () =>
          quilltip.exports[scroll](...tablet),
        ),
      );
  }
  await Promise.all(parchment);
}
async function ArtifactTabContentHelper44(margin, gutter, column) {
  try {
    await column();
  } catch (row) {
    throw (
      ArtifactTabContentHelper9(
        `Failed to invoke '${gutter}' on library initializer '${margin}': ${row}`,
      ),
      ArtifactTabContentHelper58(1, row),
      row
    );
  }
}
function ArtifactTabContentHelper45(cell, sheet) {
  if (cell === sheet) return cell;
  let slide = {
    ...sheet,
  };
  return (
    slide.assets !== undefined &&
      slide.assets !== cell.assets &&
      (slide.assets = [...(cell.assets || []), ...(slide.assets || [])]),
    slide.resources !== undefined &&
      (slide.resources = ArtifactTabContentHelper47(
        cell.resources || {
          assembly: {},
          jsModuleNative: {},
          jsModuleRuntime: {},
          wasmNative: {},
        },
        slide.resources,
      )),
    slide.environmentVariables !== undefined &&
      (slide.environmentVariables = {
        ...(cell.environmentVariables || {}),
        ...(slide.environmentVariables || {}),
      }),
    slide.runtimeOptions !== undefined &&
      slide.runtimeOptions !== cell.runtimeOptions &&
      (slide.runtimeOptions = [
        ...(cell.runtimeOptions || []),
        ...(slide.runtimeOptions || []),
      ]),
    Object.assign(cell, slide)
  );
}
function ArtifactTabContentHelper46(deck, page) {
  if (deck === page) return deck;
  let leaf = {
    ...page,
  };
  return (
    (leaf.config &&=
      ((deck.config ||= {}),
      ArtifactTabContentHelper45(deck.config, leaf.config))),
    Object.assign(deck, leaf)
  );
}
function ArtifactTabContentHelper47(binder, clip) {
  if (binder === clip) return binder;
  let staple = {
    ...clip,
  };
  return (
    staple.assembly !== undefined &&
      (staple.assembly = {
        ...(binder.assembly || {}),
        ...(staple.assembly || {}),
      }),
    staple.lazyAssembly !== undefined &&
      (staple.lazyAssembly = {
        ...(binder.lazyAssembly || {}),
        ...(staple.lazyAssembly || {}),
      }),
    staple.pdb !== undefined &&
      (staple.pdb = {
        ...(binder.pdb || {}),
        ...(staple.pdb || {}),
      }),
    staple.jsModuleWorker !== undefined &&
      (staple.jsModuleWorker = {
        ...(binder.jsModuleWorker || {}),
        ...(staple.jsModuleWorker || {}),
      }),
    staple.jsModuleNative !== undefined &&
      (staple.jsModuleNative = {
        ...(binder.jsModuleNative || {}),
        ...(staple.jsModuleNative || {}),
      }),
    staple.jsModuleGlobalization !== undefined &&
      (staple.jsModuleGlobalization = {
        ...(binder.jsModuleGlobalization || {}),
        ...(staple.jsModuleGlobalization || {}),
      }),
    staple.jsModuleRuntime !== undefined &&
      (staple.jsModuleRuntime = {
        ...(binder.jsModuleRuntime || {}),
        ...(staple.jsModuleRuntime || {}),
      }),
    staple.wasmSymbols !== undefined &&
      (staple.wasmSymbols = {
        ...(binder.wasmSymbols || {}),
        ...(staple.wasmSymbols || {}),
      }),
    staple.wasmNative !== undefined &&
      (staple.wasmNative = {
        ...(binder.wasmNative || {}),
        ...(staple.wasmNative || {}),
      }),
    staple.icu !== undefined &&
      (staple.icu = {
        ...(binder.icu || {}),
        ...(staple.icu || {}),
      }),
    staple.satelliteResources !== undefined &&
      (staple.satelliteResources = ArtifactTabContentHelper48(
        binder.satelliteResources || {},
        staple.satelliteResources || {},
      )),
    staple.modulesAfterConfigLoaded !== undefined &&
      (staple.modulesAfterConfigLoaded = {
        ...(binder.modulesAfterConfigLoaded || {}),
        ...(staple.modulesAfterConfigLoaded || {}),
      }),
    staple.modulesAfterRuntimeReady !== undefined &&
      (staple.modulesAfterRuntimeReady = {
        ...(binder.modulesAfterRuntimeReady || {}),
        ...(staple.modulesAfterRuntimeReady || {}),
      }),
    staple.extensions !== undefined &&
      (staple.extensions = {
        ...(binder.extensions || {}),
        ...(staple.extensions || {}),
      }),
    staple.vfs !== undefined &&
      (staple.vfs = ArtifactTabContentHelper48(
        binder.vfs || {},
        staple.vfs || {},
      )),
    Object.assign(binder, staple)
  );
}
function ArtifactTabContentHelper48(pin, tack) {
  if (pin === tack) return pin;
  for (let cork in tack)
    pin[cork] = {
      ...pin[cork],
      ...tack[cork],
    };
  return pin;
}
