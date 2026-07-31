// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 2/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const ArtifactTabContentHelper10: any = undefined;
const ArtifactTabContentHelper32: any = undefined;
const ArtifactTabContentHelper34: any = undefined;
const ArtifactTabContentHelper37: any = undefined;
const ArtifactTabContentHelper39: any = undefined;
const ArtifactTabContentHelper40: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const ArtifactTabContentHelper58: any = undefined;
const ArtifactTabContentHelper6: any = undefined;
const ArtifactTabContentHelper7: any = undefined;
const alpha: any = undefined;
const alpine: any = undefined;
const anchor: any = undefined;
const brook: any = undefined;
const canyon: any = undefined;
const drift: any = undefined;
const heath: any = undefined;
const hinge: any = undefined;
const hotel: any = undefined;
const isle: any = undefined;
const jetty: any = undefined;
const joint: any = undefined;
const lever: any = undefined;
const pivot: any = undefined;
const summit: any = undefined;
const tundra: any = undefined;
const umbra: any = undefined;
const yard: any = undefined;
const yarrow: any = undefined;
const zeal: any = undefined;
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

/** QG unbound stub */
const read: any = undefined;

async function ArtifactTabContentHelper19() {
  zeal = await (async function (dune) {
    if (
      !drift.config.cacheBootResources ||
      globalThis.caches === undefined ||
      globalThis.document === undefined ||
      false === globalThis.isSecureContext
    )
      return null;
    let forge = `dotnet-resources-${globalThis.document.baseURI.substring(globalThis.document.location.origin.length)}`;
    try {
      return (await caches.open(forge)) || null;
    } catch {
      return null;
    }
  })();
}
function ArtifactTabContentHelper20(granite) {
  return granite.reduce(
    (accumulator, current) => accumulator + (current.responseBytes || 0),
    0,
  );
}
function _n(harbor) {
  return `${(harbor / 1048576).toFixed(2)} MB`;
}
function ArtifactTabContentHelper21() {
  drift.preferredIcuAsset = ArtifactTabContentHelper22(drift.config);
  let inlet = drift.config.globalizationMode == "invariant";
  if (!inlet)
    if (drift.preferredIcuAsset)
      drift.diagnosticTracing &&
        ArtifactTabContentHelper6(
          "ICU data archive(s) available, disabling invariant mode",
        );
    else {
      if (
        drift.config.globalizationMode === "custom" ||
        drift.config.globalizationMode === "all" ||
        drift.config.globalizationMode === "sharded"
      ) {
        throw (
          ArtifactTabContentHelper10(
            `ERROR: ${"invariant globalization mode is inactive and no ICU data archives are available"}`,
          ),
          Error(
            "invariant globalization mode is inactive and no ICU data archives are available",
          )
        );
      }
      drift.diagnosticTracing &&
        ArtifactTabContentHelper6(
          "ICU data archive(s) not available, using invariant globalization mode",
        );
      inlet = true;
      drift.preferredIcuAsset = null;
    }
  let jasper = drift.config.environmentVariables;
  if (
    (jasper.DOTNET_SYSTEM_GLOBALIZATION_HYBRID === undefined &&
    drift.config.globalizationMode === "hybrid"
      ? (jasper.DOTNET_SYSTEM_GLOBALIZATION_HYBRID = "1")
      : jasper.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT === undefined &&
        inlet &&
        (jasper.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT = "1"),
    jasper.TZ === undefined)
  )
    try {
      let keel = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
      keel && (jasper.TZ = keel);
    } catch {
      ArtifactTabContentHelper7(
        "failed to detect timezone, will fallback to UTC",
      );
    }
}
function ArtifactTabContentHelper22(ledge) {
  if (ledge.resources?.icu && ledge.globalizationMode != "invariant") {
    let mesa =
        ledge.applicationCulture ||
        (umbra
          ? globalThis.navigator &&
            globalThis.navigator.languages &&
            globalThis.navigator.languages[0]
          : Intl.DateTimeFormat().resolvedOptions().locale),
      notch = Object.keys(ledge.resources.icu),
      oak = {};
    for (let prairie = 0; prairie < notch.length; prairie++) {
      let quarry = notch[prairie];
      ledge.resources.fingerprinting
        ? (oak[ArtifactTabContentHelper32(quarry)] = quarry)
        : (oak[quarry] = quarry);
    }
    let spire = null;
    if (ledge.globalizationMode === "custom") {
      if (notch.length >= 1) return notch[0];
    } else
      ledge.globalizationMode === "hybrid"
        ? (spire = "icudt_hybrid.dat")
        : mesa && ledge.globalizationMode !== "all"
          ? ledge.globalizationMode === "sharded" &&
            (spire = (function (terrace) {
              let upland = terrace.split("-")[0];
              return upland === "en" ||
                [
                  "fr",
                  "fr-FR",
                  "it",
                  "it-IT",
                  "de",
                  "de-DE",
                  "es",
                  "es-ES",
                ].includes(terrace)
                ? "icudt_EFIGS.dat"
                : ["zh", "ko", "ja"].includes(upland)
                  ? "icudt_CJK.dat"
                  : "icudt_no_CJK.dat";
            })(mesa))
          : (spire = "icudt.dat");
    if (spire && oak[spire]) return oak[spire];
  }
  return ((ledge.globalizationMode = "invariant"), null);
}
async function ArtifactTabContentHelper23(verge, warren) {
  try {
    let xeric = typeof globalThis.fetch == "function";
    if (yarrow) {
      let zonal = verge.startsWith("file://");
      if (!zonal && xeric)
        return globalThis.fetch(
          verge,
          warren || {
            credentials: "same-origin",
          },
        );
      alpine ||= ((brook = canyon.require("url")), canyon.require("fs"));
      zonal && (verge = brook.fileURLToPath(verge));
      let dale = await alpine.promises.readFile(verge);
      return {
        ok: true,
        headers: {
          length: 0,
          get: () => null,
        },
        url: verge,
        arrayBuffer: () => dale,
        json: () => JSON.parse(dale),
        text: () => {
          throw Error("NotImplementedException");
        },
      };
    }
    if (xeric)
      return globalThis.fetch(
        verge,
        warren || {
          credentials: "same-origin",
        },
      );
    if (typeof read == "function")
      return {
        ok: true,
        url: verge,
        headers: {
          length: 0,
          get: () => null,
        },
        arrayBuffer: () => new Uint8Array(read(verge, "binary")),
        json: () => JSON.parse(read(verge, "utf8")),
        text: () => read(verge, "utf8"),
      };
  } catch (estuary) {
    return {
      ok: false,
      url: verge,
      status: 500,
      headers: {
        length: 0,
        get: () => null,
      },
      statusText: "ERR28: " + estuary,
      arrayBuffer: () => {
        throw estuary;
      },
      json: () => {
        throw estuary;
      },
      text: () => {
        throw estuary;
      },
    };
  }
  throw Error("No fetch implementation available");
}
function ArtifactTabContentHelper24(firth) {
  return (
    typeof firth != "string" &&
      ArtifactTabContentHelper51(false, "url must be a string"),
    !ArtifactTabContentHelper25(firth) &&
      firth.indexOf("./") !== 0 &&
      firth.indexOf("../") !== 0 &&
      globalThis.URL &&
      globalThis.document &&
      globalThis.document.baseURI &&
      (firth = new URL(firth, globalThis.document.baseURI).toString()),
    firth
  );
}
function ArtifactTabContentHelper25(glen) {
  return yarrow || heath
    ? glen.startsWith("/") ||
        glen.startsWith("\\") ||
        glen.indexOf("///") !== -1 ||
        isle.test(glen)
    : jetty.test(glen);
}
function ArtifactTabContentHelper26(karst) {
  return !(karst.behavior == "icu" && karst.name != drift.preferredIcuAsset);
}
function ArtifactTabContentHelper27(loch, marsh, needle) {
  let oxbow = Object.keys(marsh || {});
  ArtifactTabContentHelper51(
    oxbow.length == 1,
    `Expect to have one ${needle} asset in resources`,
  );
  let pass = oxbow[0],
    quay = {
      name: pass,
      hash: marsh[pass],
      behavior: needle,
    };
  return (ArtifactTabContentHelper28(quay), loch.push(quay), quay);
}
function ArtifactTabContentHelper28(ravine) {
  summit[ravine.behavior] && tundra.set(ravine.behavior, ravine);
}
function ArtifactTabContentHelper29(updraft) {
  let valley = (function (woodland) {
    ArtifactTabContentHelper51(
      summit[woodland],
      `Unknown single asset behavior ${woodland}`,
    );
    let xylose = tundra.get(woodland);
    return (
      ArtifactTabContentHelper51(
        xylose,
        `Single asset for ${woodland} not found`,
      ),
      xylose
    );
  })(updraft);
  if (!valley.resolvedUrl) {
    if (
      ((valley.resolvedUrl = drift.locateFile(valley.name)),
      yard[valley.behavior])
    ) {
      let zenith = ArtifactTabContentHelper39(valley);
      zenith
        ? (typeof zenith != "string" &&
            ArtifactTabContentHelper51(
              false,
              "loadBootResource response for 'dotnetjs' type should be a URL string",
            ),
          (valley.resolvedUrl = zenith))
        : (valley.resolvedUrl = ArtifactTabContentHelper37(
            valley.resolvedUrl,
            valley.behavior,
          ));
    } else if (valley.behavior !== "dotnetwasm")
      throw Error(`Unknown single asset behavior ${updraft}`);
  }
  return valley;
}
async function ArtifactTabContentHelper30() {
  if (!anchor) {
    anchor = true;
    drift.diagnosticTracing &&
      ArtifactTabContentHelper6("mono_download_assets");
    try {
      let beacon = [],
        compass = [],
        datum = (frame, gauge) => {
          !hinge[frame.behavior] &&
            ArtifactTabContentHelper26(frame) &&
            drift.expected_instantiated_assets_count++;
          !joint[frame.behavior] &&
            ArtifactTabContentHelper26(frame) &&
            (drift.expected_downloaded_assets_count++,
            gauge.push(ArtifactTabContentHelper34(frame)));
        };
      for (let kernel of lever) datum(kernel, beacon);
      for (let offset of pivot) datum(offset, compass);
      drift.allDownloadsQueued.promise_control.resolve();
      Promise.all([...beacon, ...compass])
        .then(() => {
          drift.allDownloadsFinished.promise_control.resolve();
        })
        .catch((error) => {
          throw (
            drift.err("Error in mono_download_assets: " + error),
            ArtifactTabContentHelper58(1, error),
            error
          );
        });
      await drift.runtimeModuleLoaded.promise;
      let relay = async (signal) => {
          let unit = await signal;
          if (unit.buffer) {
            if (!hinge[unit.behavior]) {
              (unit.buffer && typeof unit.buffer == "object") ||
                ArtifactTabContentHelper51(
                  false,
                  "asset buffer must be array-like or buffer-like or promise of these",
                );
              typeof unit.resolvedUrl != "string" &&
                ArtifactTabContentHelper51(false, "resolvedUrl must be string");
              let vector = unit.resolvedUrl,
                widget = await unit.buffer,
                yield = new Uint8Array(widget);
              ArtifactTabContentHelper40(unit);
              await zone.beforeOnRuntimeInitialized.promise;
              zone.instantiate_asset(unit, vector, yield);
            }
          } else
            alpha[unit.behavior]
              ? (unit.behavior === "symbols"
                  ? (await zone.instantiate_symbols_asset(unit),
                    ArtifactTabContentHelper40(unit))
                  : unit.behavior === "segmentation-rules" &&
                    (await zone.instantiate_segmentation_rules_asset(unit),
                    ArtifactTabContentHelper40(unit)),
                alpha[unit.behavior] && ++drift.actual_downloaded_assets_count)
              : (unit.isOptional ||
                  ArtifactTabContentHelper51(
                    false,
                    "Expected asset to have the downloaded buffer",
                  ),
                !joint[unit.behavior] &&
                  ArtifactTabContentHelper26(unit) &&
                  drift.expected_downloaded_assets_count--,
                !hinge[unit.behavior] &&
                  ArtifactTabContentHelper26(unit) &&
                  drift.expected_instantiated_assets_count--);
        },
        bravo = [],
        charlie = [];
      for (let foxtrot of beacon) bravo.push(relay(foxtrot));
      for (let golf of compass) charlie.push(relay(golf));
      Promise.all(bravo)
        .then(() => {
          hotel || zone.coreAssetsInMemory.promise_control.resolve();
        })
        .catch((error) => {
          throw (
            drift.err("Error in mono_download_assets: " + error),
            ArtifactTabContentHelper58(1, error),
            error
          );
        });
      Promise.all(charlie)
        .then(async () => {
          hotel ||
            (await zone.coreAssetsInMemory.promise,
            zone.allAssetsInMemory.promise_control.resolve());
        })
        .catch((error) => {
          throw (
            drift.err("Error in mono_download_assets: " + error),
            ArtifactTabContentHelper58(1, error),
            error
          );
        });
    } catch (india) {
      throw (drift.err("Error in mono_download_assets: " + india), india);
    }
  }
}
