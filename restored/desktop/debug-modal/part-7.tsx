// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Careful split 7/17

// Wave5d unbound soft stubs.
const apex1: any = undefined;
const brook1: any = undefined;
const cliff1: any = undefined;
const coral1: any = undefined;
const glide1: any = undefined;
const honey1: any = undefined;
const iris1: any = undefined;
const jewel1: any = undefined;
const js: any = undefined;
const knoll1: any = undefined;
const lunar1: any = undefined;
const moss1: any = undefined;
const north1: any = undefined;
const orbit1: any = undefined;
const quest1: any = undefined;
const ridge1: any = undefined;
const storm1: any = undefined;
const tide1: any = undefined;
const unity1: any = undefined;
const vale1: any = undefined;
const wave1: any = undefined;

/* split-lane-import-depth:1 */

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import {
  appActionSidebarProjectRefSchema,
  ensureAppActionPayloadSchemasInit,
} from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import {
  clampZoomPercent,
  decayZoomPercent,
} from "../../artifact/clamp-zoom-percent";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_E4_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_ML_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sp_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_TI_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_A0_Init,
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_Mx_Init,
} from "../../conversation/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { ensureCommandQueueActiveHelpersInit } from "../../commands/ensure-command-queue-active-helpers-init";
import { ensurePromptHistoryStorageInit } from "../../composer/ensure-prompt-history-storage-init";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { firstRepoMapEntry } from "../../environments/first-repo-map-entry";
import {
  CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID,
  PLAYGROUND_ONBOARDING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import {
  ensureUseDebugPanelInit,
  ensureUseDebugPanelParsersInit,
  useDebugPanelEditedFilePaths,
  useDebugPanelEntries,
  useDebugPanelReferencedFilePaths,
} from "../../hooks/use-debug-panel";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  clampFloatingWindowRect,
  getCenteredFloatingWindowRect,
  initFloatingWindowPointerDragConstants,
  resizeFloatingWindowRect,
  useFloatingWindowPointerDrag,
} from "../../hooks/use-floating-window-pointer-drag";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { bindZ2BindableHelper } from "../../hosts/z2-bindable-helper";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetByTurn,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { resolveOnboardingItemSource } from "../../onboarding/resolve-onboarding-item-source";
import { T5_ONBOARDING_V2_ID } from "../../onboarding/t5-onboarding-v2-id";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { deferredVM } from "../../ui/deferred-vm";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ght } from "../../ui/ght";
import { inProgress } from "../../ui/in-progress";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { isUsageRateLimitBlocked } from "../../usage/is-usage-rate-limit-blocked";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import {
  buildThreadVirtualizerLayout,
  initThreadVirtualizer,
  visibleRangeFromDistance,
} from "../../utils/thread-virtualizer";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensureImportSettingsB4Init,
  ensureKeyboardShortcutsHMInit,
  ensurePersonalizationCInit,
  ensurePersonalizationG0Init,
  ensurePersonalizationJutInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { appServices } from "../desktop-services";
import { findProcessManagerRow } from "../find-process-manager-row";
import { getBuildFlavor } from "../get-build-flavor";
import { DesktopPersistenceKeys } from "../persistence-keys";
import { isRemoteControlConnectionFailedError } from "../remote-control-connection-failed-error";

const $o: any = undefined;
const Ember1: any = undefined;
const Flint1: any = undefined;
const Garnet1: any = undefined;
const Hazel1: any = undefined;
const Ivory1: any = undefined;
const Jasper1: any = undefined;
const Kelp1: any = undefined;
const Nova1: any = undefined;
const Reef1: any = undefined;
const as: any = undefined;
const id: any = undefined;
const is: any = undefined;
const os: any = undefined;

var echo2 = esmInit(() => {
  coral1 = "debugHeaders";
  drift1 = {
    createTable: (garnet13) => {
      garnet13.getHeaderGroups = Ivory1(
        () => [
          garnet13.getAllColumns(),
          garnet13.getVisibleLeafColumns(),
          garnet13.getState().columnPinning.left,
          garnet13.getState().columnPinning.right,
        ],
        (hazel13, ivory13, jasper13, kelp13) => {
          let lotus13 =
              jasper13
                ?.map((olive13) => ivory13.find((item) => item.id === olive13))
                .filter(Boolean) ?? [],
            mint13 =
              kelp13
                ?.map((prism13) => ivory13.find((item) => item.id === prism13))
                .filter(Boolean) ?? [],
            nova13 = ivory13.filter(
              (item) =>
                !(jasper13 != null && jasper13.includes(item.id)) &&
                !(kelp13 != null && kelp13.includes(item.id)),
            );
          return is(hazel13, [...lotus13, ...nova13, ...mint13], garnet13);
        },
        Jasper1(garnet13.options, coral1, "getHeaderGroups"),
      );
      garnet13.getCenterHeaderGroups = Ivory1(
        () => [
          garnet13.getAllColumns(),
          garnet13.getVisibleLeafColumns(),
          garnet13.getState().columnPinning.left,
          garnet13.getState().columnPinning.right,
        ],
        (quill13, reef13, sage13, topaz13) => (
          (reef13 = reef13.filter(
            (item) =>
              !(sage13 != null && sage13.includes(item.id)) &&
              !(topaz13 != null && topaz13.includes(item.id)),
          )),
          is(quill13, reef13, garnet13, "center")
        ),
        Jasper1(garnet13.options, coral1, "getCenterHeaderGroups"),
      );
      garnet13.getLeftHeaderGroups = Ivory1(
        () => [
          garnet13.getAllColumns(),
          garnet13.getVisibleLeafColumns(),
          garnet13.getState().columnPinning.left,
        ],
        (ultra13, vapor13, wheat13) =>
          is(
            ultra13,
            wheat13
              ?.map((yarn13) => vapor13.find((item) => item.id === yarn13))
              .filter(Boolean) ?? [],
            garnet13,
            "left",
          ),
        Jasper1(garnet13.options, coral1, "getLeftHeaderGroups"),
      );
      garnet13.getRightHeaderGroups = Ivory1(
        () => [
          garnet13.getAllColumns(),
          garnet13.getVisibleLeafColumns(),
          garnet13.getState().columnPinning.right,
        ],
        (zephyr13, acorn13, bloom13) =>
          is(
            zephyr13,
            bloom13
              ?.map((coral13) => acorn13.find((item) => item.id === coral13))
              .filter(Boolean) ?? [],
            garnet13,
            "right",
          ),
        Jasper1(garnet13.options, coral1, "getRightHeaderGroups"),
      );
      garnet13.getFooterGroups = Ivory1(
        () => [garnet13.getHeaderGroups()],
        (drift13) => [...drift13].reverse(),
        Jasper1(garnet13.options, coral1, "getFooterGroups"),
      );
      garnet13.getLeftFooterGroups = Ivory1(
        () => [garnet13.getLeftHeaderGroups()],
        (eagle13) => [...eagle13].reverse(),
        Jasper1(garnet13.options, coral1, "getLeftFooterGroups"),
      );
      garnet13.getCenterFooterGroups = Ivory1(
        () => [garnet13.getCenterHeaderGroups()],
        (frost13) => [...frost13].reverse(),
        Jasper1(garnet13.options, coral1, "getCenterFooterGroups"),
      );
      garnet13.getRightFooterGroups = Ivory1(
        () => [garnet13.getRightHeaderGroups()],
        (glide13) => [...glide13].reverse(),
        Jasper1(garnet13.options, coral1, "getRightFooterGroups"),
      );
      garnet13.getFlatHeaders = Ivory1(
        () => [garnet13.getHeaderGroups()],
        (honey13) => honey13.map((item) => item.headers).flat(),
        Jasper1(garnet13.options, coral1, "getFlatHeaders"),
      );
      garnet13.getLeftFlatHeaders = Ivory1(
        () => [garnet13.getLeftHeaderGroups()],
        (iris13) => iris13.map((item) => item.headers).flat(),
        Jasper1(garnet13.options, coral1, "getLeftFlatHeaders"),
      );
      garnet13.getCenterFlatHeaders = Ivory1(
        () => [garnet13.getCenterHeaderGroups()],
        (jewel13) => jewel13.map((item) => item.headers).flat(),
        Jasper1(garnet13.options, coral1, "getCenterFlatHeaders"),
      );
      garnet13.getRightFlatHeaders = Ivory1(
        () => [garnet13.getRightHeaderGroups()],
        (knoll13) => knoll13.map((item) => item.headers).flat(),
        Jasper1(garnet13.options, coral1, "getRightFlatHeaders"),
      );
      garnet13.getCenterLeafHeaders = Ivory1(
        () => [garnet13.getCenterFlatHeaders()],
        (lunar13) =>
          lunar13.filter((item) => {
            var moss13;
            return !((moss13 = item.subHeaders) != null && moss13.length);
          }),
        Jasper1(garnet13.options, coral1, "getCenterLeafHeaders"),
      );
      garnet13.getLeftLeafHeaders = Ivory1(
        () => [garnet13.getLeftFlatHeaders()],
        (north13) =>
          north13.filter((item) => {
            var orbit13;
            return !((orbit13 = item.subHeaders) != null && orbit13.length);
          }),
        Jasper1(garnet13.options, coral1, "getLeftLeafHeaders"),
      );
      garnet13.getRightLeafHeaders = Ivory1(
        () => [garnet13.getRightFlatHeaders()],
        (pine13) =>
          pine13.filter((item) => {
            var quest13;
            return !((quest13 = item.subHeaders) != null && quest13.length);
          }),
        Jasper1(garnet13.options, coral1, "getRightLeafHeaders"),
      );
      garnet13.getLeafHeaders = Ivory1(
        () => [
          garnet13.getLeftHeaderGroups(),
          garnet13.getCenterHeaderGroups(),
          garnet13.getRightHeaderGroups(),
        ],
        (ridge13, storm13, tide13) =>
          [
            ...(ridge13[0]?.headers ?? []),
            ...(storm13[0]?.headers ?? []),
            ...(tide13[0]?.headers ?? []),
          ]
            .map((item) => item.getLeafHeaders())
            .flat(),
        Jasper1(garnet13.options, coral1, "getLeafHeaders"),
      );
    },
  };
  eagle1 = (unity13, vale13, wave13, apex13, brook13, cliff13, dusk13) => {
    let elm13 = {
      id: vale13,
      index: apex13,
      original: wave13,
      depth: brook13,
      parentId: dusk13,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (fern13) => {
        if (elm13._valuesCache.hasOwnProperty(fern13))
          return elm13._valuesCache[fern13];
        let grove13 = unity13.getColumn(fern13);
        if (grove13 != null && grove13.accessorFn)
          return (
            (elm13._valuesCache[fern13] = grove13.accessorFn(
              elm13.original,
              apex13,
            )),
            elm13._valuesCache[fern13]
          );
      },
      getUniqueValues: (hill13) => {
        if (elm13._uniqueValuesCache.hasOwnProperty(hill13))
          return elm13._uniqueValuesCache[hill13];
        let isle13 = unity13.getColumn(hill13);
        if (isle13 != null && isle13.accessorFn)
          return isle13.columnDef.getUniqueValues
            ? ((elm13._uniqueValuesCache[hill13] =
                isle13.columnDef.getUniqueValues(elm13.original, apex13)),
              elm13._uniqueValuesCache[hill13])
            : ((elm13._uniqueValuesCache[hill13] = [elm13.getValue(hill13)]),
              elm13._uniqueValuesCache[hill13]);
      },
      renderValue: (juniper13) =>
        elm13.getValue(juniper13) ?? unity13.options.renderFallbackValue,
      subRows: cliff13 ?? [],
      getLeafRows: () => Hazel1(elm13.subRows, (lagoon13) => lagoon13.subRows),
      getParentRow: () =>
        elm13.parentId ? unity13.getRow(elm13.parentId, true) : undefined,
      getParentRows: () => {
        let meadow13 = [],
          nest13 = elm13;
        for (;;) {
          let oak13 = nest13.getParentRow();
          if (!oak13) break;
          meadow13.push(oak13);
          nest13 = oak13;
        }
        return meadow13.reverse();
      },
      getAllCells: Ivory1(
        () => [unity13.getAllLeafColumns()],
        (petal13) =>
          petal13.map((item) => Kelp1(unity13, elm13, item, item.id)),
        Jasper1(unity13.options, "debugRows", "getAllCells"),
      ),
      _getAllCellsByColumnId: Ivory1(
        () => [elm13.getAllCells()],
        (quiet13) =>
          quiet13.reduce(
            (accumulator, current) => (
              (accumulator[current.column.id] = current),
              accumulator
            ),
            {},
          ),
        Jasper1(unity13.options, "debugRows", "getAllCellsByColumnId"),
      ),
    };
    for (let rain13 = 0; rain13 < unity13._features.length; rain13++) {
      let seed13 = unity13._features[rain13];
      seed13 == null ||
        seed13.createRow == null ||
        seed13.createRow(elm13, unity13);
    }
    return elm13;
  };
  frost1 = {
    createColumn: (trail13, urn13) => {
      trail13._getFacetedRowModel =
        urn13.options.getFacetedRowModel &&
        urn13.options.getFacetedRowModel(urn13, trail13.id);
      trail13.getFacetedRowModel = () =>
        trail13._getFacetedRowModel
          ? trail13._getFacetedRowModel()
          : urn13.getPreFilteredRowModel();
      trail13._getFacetedUniqueValues =
        urn13.options.getFacetedUniqueValues &&
        urn13.options.getFacetedUniqueValues(urn13, trail13.id);
      trail13.getFacetedUniqueValues = () =>
        trail13._getFacetedUniqueValues
          ? trail13._getFacetedUniqueValues()
          : new Map();
      trail13._getFacetedMinMaxValues =
        urn13.options.getFacetedMinMaxValues &&
        urn13.options.getFacetedMinMaxValues(urn13, trail13.id);
      trail13.getFacetedMinMaxValues = () => {
        if (trail13._getFacetedMinMaxValues)
          return trail13._getFacetedMinMaxValues();
      };
    },
  };
  glide1 = (vine13, wind13, yarrow13) => {
    var azure13, birch13;
    let canyon13 =
      yarrow13 == null || (azure13 = yarrow13.toString()) == null
        ? undefined
        : azure13.toLowerCase();
    return !!(
      !(
        (birch13 = vine13.getValue(wind13)) == null ||
        (birch13 = birch13.toString()) == null ||
        (birch13 = birch13.toLowerCase()) == null
      ) && birch13.includes(canyon13)
    );
  };
  glide1.autoRemove = (dew13) => as(dew13);
  honey1 = (alpha14, bravo14, copper14) => {
    var delta14;
    return !!(
      !(
        (delta14 = alpha14.getValue(bravo14)) == null ||
        (delta14 = delta14.toString()) == null
      ) && delta14.includes(copper14)
    );
  };
  honey1.autoRemove = (echo14) => as(echo14);
  iris1 = (falcon14, gamma14, harbor14) => {
    var indigo14;
    return (
      ((indigo14 = falcon14.getValue(gamma14)) == null ||
      (indigo14 = indigo14.toString()) == null
        ? undefined
        : indigo14.toLowerCase()) === harbor14?.toLowerCase()
    );
  };
  iris1.autoRemove = (jade14) => as(jade14);
  jewel1 = (kite14, lemon14, marble14) =>
    kite14.getValue(lemon14)?.includes(marble14);
  jewel1.autoRemove = (nickel14) => as(nickel14);
  js = (onyx14, pearl14, quartz14) =>
    !quartz14.some((item) => {
      var river14;
      return !(
        (river14 = onyx14.getValue(pearl14)) != null && river14.includes(item)
      );
    });
  js.autoRemove = (slate14) =>
    as(slate14) || !(slate14 != null && slate14.length);
  knoll1 = (timber14, umbra14, violet14) =>
    violet14.some((item) => timber14.getValue(umbra14)?.includes(item));
  knoll1.autoRemove = (willow14) =>
    as(willow14) || !(willow14 != null && willow14.length);
  lunar1 = (xenon14, yellow14, zinc14) => xenon14.getValue(yellow14) === zinc14;
  lunar1.autoRemove = (amber14) => as(amber14);
  moss1 = (basalt14, cedar14, daisy14) => basalt14.getValue(cedar14) == daisy14;
  moss1.autoRemove = (ember14) => as(ember14);
  north1 = (flint14, garnet14, hazel14) => {
    let [ivory14, jasper14] = hazel14,
      kelp14 = flint14.getValue(garnet14);
    return kelp14 >= ivory14 && kelp14 <= jasper14;
  };
  north1.resolveFilterValue = (lotus14) => {
    let [mint14, nova14] = lotus14,
      olive14 = typeof mint14 == "number" ? mint14 : parseFloat(mint14),
      prism14 = typeof nova14 == "number" ? nova14 : parseFloat(nova14),
      quill14 = mint14 === null || Number.isNaN(olive14) ? -1 / 0 : olive14,
      reef14 = nova14 === null || Number.isNaN(prism14) ? 1 / 0 : prism14;
    if (quill14 > reef14) {
      let sage14 = quill14;
      quill14 = reef14;
      reef14 = sage14;
    }
    return [quill14, reef14];
  };
  north1.autoRemove = (topaz14) =>
    as(topaz14) || (as(topaz14[0]) && as(topaz14[1]));
  orbit1 = {
    includesString: glide1,
    includesStringSensitive: honey1,
    equalsString: iris1,
    arrIncludes: jewel1,
    arrIncludesAll: js,
    arrIncludesSome: knoll1,
    equals: lunar1,
    weakEquals: moss1,
    inNumberRange: north1,
  };
  pine1 = {
    getDefaultColumnDef: () => ({
      filterFn: "auto",
    }),
    getInitialState: (ultra14) => ({
      columnFilters: [],
      ...ultra14,
    }),
    getDefaultOptions: (vapor14) => ({
      onColumnFiltersChange: Flint1("columnFilters", vapor14),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100,
    }),
    createColumn: (wheat14, yarn14) => {
      wheat14.getAutoFilterFn = () => {
        let zephyr14 = yarn14
          .getCoreRowModel()
          .flatRows[0]?.getValue(wheat14.id);
        return typeof zephyr14 == "string"
          ? orbit1.includesString
          : typeof zephyr14 == "number"
            ? orbit1.inNumberRange
            : typeof zephyr14 == "boolean" ||
                (typeof zephyr14 == "object" && zephyr14)
              ? orbit1.equals
              : Array.isArray(zephyr14)
                ? orbit1.arrIncludes
                : orbit1.weakEquals;
      };
      wheat14.getFilterFn = () =>
        Garnet1(wheat14.columnDef.filterFn)
          ? wheat14.columnDef.filterFn
          : wheat14.columnDef.filterFn === "auto"
            ? wheat14.getAutoFilterFn()
            : (yarn14.options.filterFns?.[wheat14.columnDef.filterFn] ??
              orbit1[wheat14.columnDef.filterFn]);
      wheat14.getCanFilter = () =>
        (wheat14.columnDef.enableColumnFilter ?? true) &&
        (yarn14.options.enableColumnFilters ?? true) &&
        (yarn14.options.enableFilters ?? true) &&
        !!wheat14.accessorFn;
      wheat14.getIsFiltered = () => wheat14.getFilterIndex() > -1;
      wheat14.getFilterValue = () => {
        var acorn14;
        return (acorn14 = yarn14.getState().columnFilters) == null ||
          (acorn14 = acorn14.find((item) => item.id === wheat14.id)) == null
          ? undefined
          : acorn14.value;
      };
      wheat14.getFilterIndex = () =>
        yarn14
          .getState()
          .columnFilters?.findIndex((bloom14) => bloom14.id === wheat14.id) ??
        -1;
      wheat14.setFilterValue = (coral14) => {
        yarn14.setColumnFilters((drift14) => {
          let eagle14 = wheat14.getFilterFn(),
            frost14 = drift14?.find((iris14) => iris14.id === wheat14.id),
            glide14 = Ember1(coral14, frost14 ? frost14.value : undefined);
          if (os(eagle14, glide14, wheat14))
            return (
              drift14?.filter((jewel14) => jewel14.id !== wheat14.id) ?? []
            );
          let honey14 = {
            id: wheat14.id,
            value: glide14,
          };
          return frost14
            ? (drift14?.map((knoll14) =>
                knoll14.id === wheat14.id ? honey14 : knoll14,
              ) ?? [])
            : drift14 != null && drift14.length
              ? [...drift14, honey14]
              : [honey14];
        });
      };
    },
    createRow: (lunar14, moss14) => {
      lunar14.columnFilters = {};
      lunar14.columnFiltersMeta = {};
    },
    createTable: (north14) => {
      north14.setColumnFilters = (orbit14) => {
        let pine14 = north14.getAllLeafColumns();
        north14.options.onColumnFiltersChange == null ||
          north14.options.onColumnFiltersChange((quest14) =>
            Ember1(orbit14, quest14)?.filter((ridge14) => {
              let storm14 = pine14.find((item) => item.id === ridge14.id);
              return !(
                storm14 && os(storm14.getFilterFn(), ridge14.value, storm14)
              );
            }),
          );
      };
      north14.resetColumnFilters = (tide14) => {
        north14.setColumnFilters(
          tide14 ? [] : (north14.initialState?.columnFilters ?? []),
        );
      };
      north14.getPreFilteredRowModel = () => north14.getCoreRowModel();
      north14.getFilteredRowModel = () => (
        !north14._getFilteredRowModel &&
          north14.options.getFilteredRowModel &&
          (north14._getFilteredRowModel =
            north14.options.getFilteredRowModel(north14)),
        north14.options.manualFiltering || !north14._getFilteredRowModel
          ? north14.getPreFilteredRowModel()
          : north14._getFilteredRowModel()
      );
    },
  };
  quest1 = (unity14, vale14, wave14) =>
    wave14.reduce((accumulator, current) => {
      let apex14 = current.getValue(unity14);
      return accumulator + (typeof apex14 == "number" ? apex14 : 0);
    }, 0);
  ridge1 = (brook14, cliff14, dusk14) => {
    let elm14;
    return (
      dusk14.forEach((item) => {
        let fern14 = item.getValue(brook14);
        fern14 != null &&
          (elm14 > fern14 || (elm14 === undefined && fern14 >= fern14)) &&
          (elm14 = fern14);
      }),
      elm14
    );
  };
  storm1 = (grove14, hill14, isle14) => {
    let juniper14;
    return (
      isle14.forEach((item) => {
        let lagoon14 = item.getValue(grove14);
        lagoon14 != null &&
          (juniper14 < lagoon14 ||
            (juniper14 === undefined && lagoon14 >= lagoon14)) &&
          (juniper14 = lagoon14);
      }),
      juniper14
    );
  };
  tide1 = (meadow14, nest14, oak14) => {
    let petal14, quiet14;
    return (
      oak14.forEach((item) => {
        let rain14 = item.getValue(meadow14);
        rain14 != null &&
          (petal14 === undefined
            ? rain14 >= rain14 && (petal14 = quiet14 = rain14)
            : (petal14 > rain14 && (petal14 = rain14),
              quiet14 < rain14 && (quiet14 = rain14)));
      }),
      [petal14, quiet14]
    );
  };
  unity1 = (seed14, trail14) => {
    let urn14 = 0,
      vine14 = 0;
    if (
      (trail14.forEach((item) => {
        let wind14 = item.getValue(seed14);
        wind14 != null &&
          (wind14 = +wind14) >= wind14 &&
          (++urn14, (vine14 += wind14));
      }),
      urn14)
    )
      return vine14 / urn14;
  };
  vale1 = (yarrow14, azure14) => {
    if (!azure14.length) return;
    let birch14 = azure14.map((item) => item.getValue(yarrow14));
    if (!$o(birch14)) return;
    if (birch14.length === 1) return birch14[0];
    let canyon14 = Math.floor(birch14.length / 2),
      dew14 = birch14.sort((alpha15, bravo15) => alpha15 - bravo15);
    return birch14.length % 2 == 0
      ? (dew14[canyon14 - 1] + dew14[canyon14]) / 2
      : dew14[canyon14];
  };
  wave1 = (copper15, delta15) =>
    Array.from(
      new Set(delta15.map((item) => item.getValue(copper15))).values(),
    );
  apex1 = (echo15, falcon15) =>
    new Set(falcon15.map((item) => item.getValue(echo15))).size;
  brook1 = (gamma15, harbor15) => harbor15.length;
  cliff1 = {
    sum: quest1,
    min: ridge1,
    max: storm1,
    extent: tide1,
    mean: unity1,
    median: vale1,
    unique: wave1,
    uniqueCount: apex1,
    count: brook1,
  };
  dusk1 = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (indigo15) => {
        var jade15;
        return (
          ((jade15 = indigo15.getValue()) == null || jade15.toString == null
            ? undefined
            : jade15.toString()) ?? null
        );
      },
      aggregationFn: "auto",
    }),
    getInitialState: (kite15) => ({
      grouping: [],
      ...kite15,
    }),
    getDefaultOptions: (lemon15) => ({
      onGroupingChange: Flint1("grouping", lemon15),
      groupedColumnMode: "reorder",
    }),
    createColumn: (marble15, nickel15) => {
      marble15.toggleGrouping = () => {
        nickel15.setGrouping((onyx15) =>
          onyx15 != null && onyx15.includes(marble15.id)
            ? onyx15.filter((item) => item !== marble15.id)
            : [...(onyx15 ?? []), marble15.id],
        );
      };
      marble15.getCanGroup = () =>
        (marble15.columnDef.enableGrouping ?? true) &&
        (nickel15.options.enableGrouping ?? true) &&
        (!!marble15.accessorFn || !!marble15.columnDef.getGroupingValue);
      marble15.getIsGrouped = () =>
        nickel15.getState().grouping?.includes(marble15.id);
      marble15.getGroupedIndex = () =>
        nickel15.getState().grouping?.indexOf(marble15.id);
      marble15.getToggleGroupingHandler = () => {
        let pearl15 = marble15.getCanGroup();
        return () => {
          pearl15 && marble15.toggleGrouping();
        };
      };
      marble15.getAutoAggregationFn = () => {
        let quartz15 = nickel15
          .getCoreRowModel()
          .flatRows[0]?.getValue(marble15.id);
        if (typeof quartz15 == "number") return cliff1.sum;
        if (Object.prototype.toString.call(quartz15) === "[object Date]")
          return cliff1.extent;
      };
      marble15.getAggregationFn = () => {
        if (!marble15) throw Error();
        return Garnet1(marble15.columnDef.aggregationFn)
          ? marble15.columnDef.aggregationFn
          : marble15.columnDef.aggregationFn === "auto"
            ? marble15.getAutoAggregationFn()
            : (nickel15.options.aggregationFns?.[
                marble15.columnDef.aggregationFn
              ] ?? cliff1[marble15.columnDef.aggregationFn]);
      };
    },
    createTable: (river15) => {
      river15.setGrouping = (slate15) =>
        river15.options.onGroupingChange == null
          ? undefined
          : river15.options.onGroupingChange(slate15);
      river15.resetGrouping = (timber15) => {
        river15.setGrouping(
          timber15 ? [] : (river15.initialState?.grouping ?? []),
        );
      };
      river15.getPreGroupedRowModel = () => river15.getFilteredRowModel();
      river15.getGroupedRowModel = () => (
        !river15._getGroupedRowModel &&
          river15.options.getGroupedRowModel &&
          (river15._getGroupedRowModel =
            river15.options.getGroupedRowModel(river15)),
        river15.options.manualGrouping || !river15._getGroupedRowModel
          ? river15.getPreGroupedRowModel()
          : river15._getGroupedRowModel()
      );
    },
    createRow: (umbra15, violet15) => {
      umbra15.getIsGrouped = () => !!umbra15.groupingColumnId;
      umbra15.getGroupingValue = (willow15) => {
        if (umbra15._groupingValuesCache.hasOwnProperty(willow15))
          return umbra15._groupingValuesCache[willow15];
        let xenon15 = violet15.getColumn(willow15);
        return xenon15 != null && xenon15.columnDef.getGroupingValue
          ? ((umbra15._groupingValuesCache[willow15] =
              xenon15.columnDef.getGroupingValue(umbra15.original)),
            umbra15._groupingValuesCache[willow15])
          : umbra15.getValue(willow15);
      };
      umbra15._groupingValuesCache = {};
    },
    createCell: (yellow15, zinc15, amber15, basalt15) => {
      yellow15.getIsGrouped = () =>
        zinc15.getIsGrouped() && zinc15.id === amber15.groupingColumnId;
      yellow15.getIsPlaceholder = () =>
        !yellow15.getIsGrouped() && zinc15.getIsGrouped();
      yellow15.getIsAggregated = () => {
        var cedar15;
        return (
          !yellow15.getIsGrouped() &&
          !yellow15.getIsPlaceholder() &&
          !!((cedar15 = amber15.subRows) != null && cedar15.length)
        );
      };
    },
  };
  elm1 = {
    getInitialState: (daisy15) => ({
      columnOrder: [],
      ...daisy15,
    }),
    getDefaultOptions: (ember15) => ({
      onColumnOrderChange: Flint1("columnOrder", ember15),
    }),
    createColumn: (flint15, garnet15) => {
      flint15.getIndex = Ivory1(
        (hazel15) => [Reef1(garnet15, hazel15)],
        (ivory15) => ivory15.findIndex((item) => item.id === flint15.id),
        Jasper1(garnet15.options, "debugColumns", "getIndex"),
      );
      flint15.getIsFirstColumn = (jasper15) =>
        Reef1(garnet15, jasper15)[0]?.id === flint15.id;
      flint15.getIsLastColumn = (kelp15) => {
        let lotus15 = Reef1(garnet15, kelp15);
        return lotus15[lotus15.length - 1]?.id === flint15.id;
      };
    },
    createTable: (mint15) => {
      mint15.setColumnOrder = (nova15) =>
        mint15.options.onColumnOrderChange == null
          ? undefined
          : mint15.options.onColumnOrderChange(nova15);
      mint15.resetColumnOrder = (olive15) => {
        mint15.setColumnOrder(
          olive15 ? [] : (mint15.initialState.columnOrder ?? []),
        );
      };
      mint15._getOrderColumnsFn = Ivory1(
        () => [
          mint15.getState().columnOrder,
          mint15.getState().grouping,
          mint15.options.groupedColumnMode,
        ],
        (prism15, quill15, reef15) => (sage15) => {
          let topaz15 = [];
          if (!(prism15 != null && prism15.length)) topaz15 = sage15;
          else {
            let ultra15 = [...prism15],
              vapor15 = [...sage15];
            for (; vapor15.length && ultra15.length; ) {
              let wheat15 = ultra15.shift(),
                yarn15 = vapor15.findIndex((item) => item.id === wheat15);
              yarn15 > -1 && topaz15.push(vapor15.splice(yarn15, 1)[0]);
            }
            topaz15 = [...topaz15, ...vapor15];
          }
          return Nova1(topaz15, quill15, reef15);
        },
        Jasper1(mint15.options, "debugTable", "_getOrderColumnsFn"),
      );
    },
  };
  fern1 = () => ({
    left: [],
    right: [],
  });
  return undefined as any;
});
