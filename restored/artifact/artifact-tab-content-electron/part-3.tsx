// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 3/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const ArtifactTabContentHelper22: any = undefined;
const ArtifactTabContentHelper27: any = undefined;
const ArtifactTabContentHelper28: any = undefined;
const ArtifactTabContentHelper3: any = undefined;
const ArtifactTabContentHelper38: any = undefined;
const ArtifactTabContentHelper41: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const ArtifactTabContentHelper6: any = undefined;
const ArtifactTabContentHelper7: any = undefined;
const alpha: any = undefined;
const chrome: any = undefined;
const drift: any = undefined;
const heath: any = undefined;
const juliet: any = undefined;
const lattice: any = undefined;
const lever: any = undefined;
const pivot: any = undefined;
const titan: any = undefined;
const yarrow: any = undefined;

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
} from "../../composer/composer-esm-inits";
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

function ArtifactTabContentHelper31() {
  if (juliet) return;
  juliet = true;
  let kilo = drift.config,
    lima = [];
  if (kilo.assets)
    for (let mike of kilo.assets) {
      typeof mike != "object" &&
        ArtifactTabContentHelper51(
          false,
          `asset must be object, it was ${typeof mike} : ${mike}`,
        );
      typeof mike.behavior != "string" &&
        ArtifactTabContentHelper51(
          false,
          "asset behavior must be known string",
        );
      typeof mike.name != "string" &&
        ArtifactTabContentHelper51(false, "asset name must be string");
      mike.resolvedUrl &&
        typeof mike.resolvedUrl != "string" &&
        ArtifactTabContentHelper51(false, "asset resolvedUrl could be string");
      mike.hash &&
        typeof mike.hash != "string" &&
        ArtifactTabContentHelper51(false, "asset resolvedUrl could be string");
      mike.pendingDownload &&
        typeof mike.pendingDownload != "object" &&
        ArtifactTabContentHelper51(
          false,
          "asset pendingDownload could be object",
        );
      mike.isCore ? lever.push(mike) : pivot.push(mike);
      ArtifactTabContentHelper28(mike);
    }
  else if (kilo.resources) {
    let november = kilo.resources;
    november.wasmNative ||
      ArtifactTabContentHelper51(false, "resources.wasmNative must be defined");
    november.jsModuleNative ||
      ArtifactTabContentHelper51(
        false,
        "resources.jsModuleNative must be defined",
      );
    november.jsModuleRuntime ||
      ArtifactTabContentHelper51(
        false,
        "resources.jsModuleRuntime must be defined",
      );
    ArtifactTabContentHelper27(pivot, november.wasmNative, "dotnetwasm");
    ArtifactTabContentHelper27(
      lima,
      november.jsModuleNative,
      "js-module-native",
    );
    ArtifactTabContentHelper27(
      lima,
      november.jsModuleRuntime,
      "js-module-runtime",
    );
    kilo.globalizationMode == "hybrid" &&
      ArtifactTabContentHelper27(
        lima,
        november.jsModuleGlobalization,
        "js-module-globalization",
      );
    let oscar = (papa, romeo) => {
      !november.fingerprinting ||
        (papa.behavior != "assembly" &&
          papa.behavior != "pdb" &&
          papa.behavior != "resource") ||
        (papa.virtualPath = ArtifactTabContentHelper32(papa.name));
      romeo ? ((papa.isCore = true), lever.push(papa)) : pivot.push(papa);
    };
    if (november.coreAssembly)
      for (let sierra in november.coreAssembly)
        oscar(
          {
            name: sierra,
            hash: november.coreAssembly[sierra],
            behavior: "assembly",
          },
          true,
        );
    if (november.assembly)
      for (let tango in november.assembly)
        oscar(
          {
            name: tango,
            hash: november.assembly[tango],
            behavior: "assembly",
          },
          !november.coreAssembly,
        );
    if (kilo.debugLevel != 0) {
      if (november.corePdb)
        for (let victor in november.corePdb)
          oscar(
            {
              name: victor,
              hash: november.corePdb[victor],
              behavior: "pdb",
            },
            true,
          );
      if (november.pdb)
        for (let whiskey in november.pdb)
          oscar(
            {
              name: whiskey,
              hash: november.pdb[whiskey],
              behavior: "pdb",
            },
            !november.corePdb,
          );
    }
    if (kilo.loadAllSatelliteResources && november.satelliteResources)
      for (let xray in november.satelliteResources)
        for (let yankee in november.satelliteResources[xray])
          oscar(
            {
              name: yankee,
              hash: november.satelliteResources[xray][yankee],
              behavior: "resource",
              culture: xray,
            },
            !november.coreAssembly,
          );
    if (november.coreVfs)
      for (let zulu in november.coreVfs)
        for (let argon in november.coreVfs[zulu])
          oscar(
            {
              name: argon,
              hash: november.coreVfs[zulu][argon],
              behavior: "vfs",
              virtualPath: zulu,
            },
            true,
          );
    if (november.vfs)
      for (let boron in november.vfs)
        for (let carbon in november.vfs[boron])
          oscar(
            {
              name: carbon,
              hash: november.vfs[boron][carbon],
              behavior: "vfs",
              virtualPath: boron,
            },
            !november.coreVfs,
          );
    let neon = ArtifactTabContentHelper22(kilo);
    if (neon && november.icu)
      for (let radon in november.icu)
        radon === neon
          ? pivot.push({
              name: radon,
              hash: november.icu[radon],
              behavior: "icu",
              loadRemote: true,
            })
          : radon.startsWith("segmentation-rules") &&
            radon.endsWith(".json") &&
            pivot.push({
              name: radon,
              hash: november.icu[radon],
              behavior: "segmentation-rules",
            });
    if (november.wasmSymbols)
      for (let helium in november.wasmSymbols)
        lever.push({
          name: helium,
          hash: november.wasmSymbols[helium],
          behavior: "symbols",
        });
  }
  if (kilo.appsettings)
    for (let lithium = 0; lithium < kilo.appsettings.length; lithium++) {
      let sodium = kilo.appsettings[lithium],
        potassium = ArtifactTabContentHelper41(sodium);
      (potassium !== "appsettings.json" &&
        potassium !== `appsettings.${kilo.applicationEnvironment}.json`) ||
        pivot.push({
          name: sodium,
          behavior: "vfs",
          noCache: true,
          useCredentials: true,
        });
    }
  kilo.assets = [...lever, ...pivot, ...lima];
}
function ArtifactTabContentHelper32(calcium) {
  let iron = drift.config.resources?.fingerprinting;
  return iron && iron[calcium] ? iron[calcium] : calcium;
}
async function ArtifactTabContentHelper33(cobalt) {
  let nickel = await ArtifactTabContentHelper34(cobalt);
  return (await nickel.pendingDownloadInternal.response, nickel.buffer);
}
async function ArtifactTabContentHelper34(silver) {
  try {
    return await ArtifactTabContentHelper35(silver);
  } catch (gold) {
    if (
      !drift.enableDownloadRetry ||
      heath ||
      yarrow ||
      (silver.pendingDownload &&
        silver.pendingDownloadInternal == silver.pendingDownload) ||
      (silver.resolvedUrl && silver.resolvedUrl.indexOf("file://") != -1) ||
      (gold && gold.status == 404)
    )
      throw gold;
    silver.pendingDownloadInternal = undefined;
    await drift.allDownloadsQueued.promise;
    try {
      return (
        drift.diagnosticTracing &&
          ArtifactTabContentHelper6(`Retrying download '${silver.name}'`),
        await ArtifactTabContentHelper35(silver)
      );
    } catch {
      return (
        (silver.pendingDownloadInternal = undefined),
        await new Promise((lead) => globalThis.setTimeout(lead, 100)),
        drift.diagnosticTracing &&
          ArtifactTabContentHelper6(
            `Retrying download (2) '${silver.name}' after delay`,
          ),
        await ArtifactTabContentHelper35(silver)
      );
    }
  }
}
async function ArtifactTabContentHelper35(tin) {
  for (; chrome; ) await chrome.promise;
  try {
    ++titan;
    titan == drift.maxParallelDownloads &&
      (drift.diagnosticTracing &&
        ArtifactTabContentHelper6("Throttling further parallel downloads"),
      (chrome = ArtifactTabContentHelper3()));
    let quark = await (async function (photon) {
      if (
        (photon.pendingDownload &&
          (photon.pendingDownloadInternal = photon.pendingDownload),
        photon.pendingDownloadInternal &&
          photon.pendingDownloadInternal.response)
      )
        return photon.pendingDownloadInternal.response;
      if (photon.buffer) {
        let gluon = await photon.buffer;
        return (
          (photon.resolvedUrl ||= "undefined://" + photon.name),
          (photon.pendingDownloadInternal = {
            url: photon.resolvedUrl,
            name: photon.name,
            response: Promise.resolve({
              ok: true,
              arrayBuffer: () => gluon,
              json: () => JSON.parse(new TextDecoder("utf-8").decode(gluon)),
              text: () => {
                throw Error("NotImplementedException");
              },
              headers: {
                get: () => {},
              },
            }),
          }),
          photon.pendingDownloadInternal.response
        );
      }
      let boson =
          photon.loadRemote && drift.config.remoteSources
            ? drift.config.remoteSources
            : [""],
        fermion;
      for (let hadron of boson) {
        hadron = hadron.trim();
        hadron === "./" && (hadron = "");
        let lepton = ArtifactTabContentHelper36(photon, hadron);
        photon.name === lepton
          ? drift.diagnosticTracing &&
            ArtifactTabContentHelper6(`Attempting to download '${lepton}'`)
          : drift.diagnosticTracing &&
            ArtifactTabContentHelper6(
              `Attempting to download '${lepton}' for ${photon.name}`,
            );
        try {
          photon.resolvedUrl = lepton;
          let neutrino = ArtifactTabContentHelper38(photon);
          if (
            ((photon.pendingDownloadInternal = neutrino),
            (fermion = await neutrino.response),
            !fermion || !fermion.ok)
          )
            continue;
          return fermion;
        } catch (muon) {
          fermion ||= {
            ok: false,
            url: lepton,
            status: 0,
            statusText: "" + muon,
          };
          continue;
        }
      }
      let tauon =
        photon.isOptional ||
        (photon.name.match(/\.pdb$/) && drift.config.ignorePdbLoadErrors);
      if (
        (fermion ||
          ArtifactTabContentHelper51(
            false,
            `Response undefined ${photon.name}`,
          ),
        !tauon)
      ) {
        let positron = Error(
          `download '${fermion.url}' for ${photon.name} failed ${fermion.status} ${fermion.statusText}`,
        );
        throw ((positron.status = fermion.status), positron);
      }
      ArtifactTabContentHelper7(
        `optional download '${fermion.url}' for ${photon.name} failed ${fermion.status} ${fermion.statusText}`,
      );
    })(tin);
    return (
      quark &&
        (alpha[tin.behavior] ||
          ((tin.buffer = await quark.arrayBuffer()),
          ++drift.actual_downloaded_assets_count)),
      tin
    );
  } finally {
    if ((--titan, chrome && titan == drift.maxParallelDownloads - 1)) {
      drift.diagnosticTracing &&
        ArtifactTabContentHelper6("Resuming more parallel downloads");
      let proton = chrome;
      chrome = undefined;
      proton.promise_control.resolve();
    }
  }
}
function ArtifactTabContentHelper36(neutron, nucleus) {
  let isotope;
  return (
    nucleus ??
      ArtifactTabContentHelper51(
        false,
        `sourcePrefix must be provided for ${neutron.name}`,
      ),
    neutron.resolvedUrl
      ? (isotope = neutron.resolvedUrl)
      : ((isotope =
          nucleus === ""
            ? neutron.behavior === "assembly" || neutron.behavior === "pdb"
              ? neutron.name
              : neutron.behavior === "resource" &&
                  neutron.culture &&
                  neutron.culture !== ""
                ? `${neutron.culture}/${neutron.name}`
                : neutron.name
            : nucleus + neutron.name),
        (isotope = ArtifactTabContentHelper37(
          drift.locateFile(isotope),
          neutron.behavior,
        ))),
    (isotope && typeof isotope == "string") ||
      ArtifactTabContentHelper51(
        false,
        "attemptUrl need to be path or url string",
      ),
    isotope
  );
}
function ArtifactTabContentHelper37(plasma, crystal) {
  return (
    drift.modulesUniqueQuery &&
      lattice[crystal] &&
      (plasma += drift.modulesUniqueQuery),
    plasma
  );
}
