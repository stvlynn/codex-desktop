// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d unbound soft stubs.
// Careful split 6a
/* split-lane-import-depth:1 */

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { siteAnalyticsEventsPath, siteAnalyticsPath } from "../../appgen/site-analytics-paths";
import { clampZoomPercent, decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_E4_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Mx_Init } from "../../conversation/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
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
import { CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID, PLAYGROUND_ONBOARDING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { ensureUseDebugPanelInit, ensureUseDebugPanelParsersInit, useDebugPanelEditedFilePaths, useDebugPanelEntries, useDebugPanelReferencedFilePaths } from "../../hooks/use-debug-panel";
import { useEventCallback } from "../../hooks/use-event-callback";
import { clampFloatingWindowRect, getCenteredFloatingWindowRect, initFloatingWindowPointerDragConstants, resizeFloatingWindowRect, useFloatingWindowPointerDrag } from "../../hooks/use-floating-window-pointer-drag";
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
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetByTurn, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
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
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
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
import { buildThreadVirtualizerLayout, initThreadVirtualizer, visibleRangeFromDistance } from "../../utils/thread-virtualizer";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsB4Init, ensureKeyboardShortcutsHMInit, ensurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { appServices } from "../desktop-services";
import { findProcessManagerRow } from "../find-process-manager-row";
import { getBuildFlavor } from "../get-build-flavor";
import { DesktopPersistenceKeys } from "../persistence-keys";
import { isRemoteControlConnectionFailedError } from "../remote-control-connection-failed-error";
const delta2: any = undefined;
const eagle1: any = undefined;
const juniper1: any = undefined;
const yarrow1: any = undefined;

/* split-lane-import-depth:1 */

function Ivory1(cedar11, daisy11, event) {
  let ember11 = [],
    flint11;
  return garnet11 => {
    let hazel11;
    event.key && event.debug && (hazel11 = Date.now());
    let ivory11 = cedar11(garnet11);
    if (!(ivory11.length !== ember11.length || ivory11.some((item, index) => ember11[index] !== item))) return flint11;
    ember11 = ivory11;
    let jasper11;
    if (event.key && event.debug && (jasper11 = Date.now()), flint11 = daisy11(...ivory11), event == null || event.onChange == null || event.onChange(flint11), event.key && event.debug && event != null && event.debug()) {
      let kelp11 = Math.round((Date.now() - hazel11) * 100) / 100,
        lotus11 = Math.round((Date.now() - jasper11) * 100) / 100,
        mint11 = lotus11 / 16,
        nova11 = (olive11, prism11) => {
          for (olive11 = String(olive11); olive11.length < prism11;) olive11 = " " + olive11;
          return olive11;
        };
      console.info(`%c⏱ ${nova11(lotus11, 5)} /${nova11(kelp11, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * mint11, 120))}deg 100% 31%);`, event?.key);
    }
    return flint11;
  };
}
function Jasper1(quill11, reef11, sage11, topaz11) {
  return {
    debug: () => quill11?.debugAll ?? quill11[reef11],
    key: false,
    onChange: topaz11
  };
}
function Kelp1(ultra11, vapor11, wheat11, yarn11) {
  let zephyr11 = {
    id: `${vapor11.id}_${wheat11.id}`,
    row: vapor11,
    column: wheat11,
    getValue: () => vapor11.getValue(yarn11),
    renderValue: () => zephyr11.getValue() ?? ultra11.options.renderFallbackValue,
    getContext: Ivory1(() => [ultra11, wheat11, vapor11, zephyr11], (acorn11, bloom11, coral11, drift11) => ({
      table: acorn11,
      column: bloom11,
      row: coral11,
      cell: drift11,
      getValue: drift11.getValue,
      renderValue: drift11.renderValue
    }), Jasper1(ultra11.options, "debugCells", "cell.getContext"))
  };
  return ultra11._features.forEach(item => {
    item.createCell == null || item.createCell(zephyr11, wheat11, vapor11, ultra11);
  }, {}), zephyr11;
}
function Lotus1(eagle11, frost11, glide11, honey11) {
  let iris11 = {
      ...eagle11._getDefaultColumnDef(),
      ...frost11
    },
    jewel11 = iris11.accessorKey,
    knoll11 = iris11.id ?? (jewel11 ? typeof String.prototype.replaceAll == "function" ? jewel11.replaceAll(".", "_") : jewel11.replace(/\./g, "_") : undefined) ?? (typeof iris11.header == "string" ? iris11.header : undefined),
    lunar11;
  if (iris11.accessorFn ? lunar11 = iris11.accessorFn : jewel11 && (lunar11 = jewel11.includes(".") ? north11 => {
    let orbit11 = north11;
    for (let pine11 of jewel11.split(".")) orbit11 = orbit11?.[pine11];
    return orbit11;
  } : quest11 => quest11[iris11.accessorKey]), !knoll11) throw Error();
  let moss11 = {
    id: `${String(knoll11)}`,
    accessorFn: lunar11,
    parent: honey11,
    depth: glide11,
    columnDef: iris11,
    columns: [],
    getFlatColumns: Ivory1(() => [true], () => [moss11, ...moss11.columns?.flatMap(ridge11 => ridge11.getFlatColumns())], Jasper1(eagle11.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: Ivory1(() => [eagle11._getOrderColumnsFn()], storm11 => {
      var tide11;
      return (tide11 = moss11.columns) != null && tide11.length ? storm11(moss11.columns.flatMap(item => item.getLeafColumns())) : [moss11];
    }, Jasper1(eagle11.options, "debugColumns", "column.getLeafColumns"))
  };
  for (let unity11 of eagle11._features) unity11.createColumn == null || unity11.createColumn(moss11, eagle11);
  return moss11;
}
function Mint1(vale11, wave11, apex11) {
  let brook11 = {
    id: apex11.id ?? wave11.id,
    column: wave11,
    index: apex11.index,
    isPlaceholder: !!apex11.isPlaceholder,
    placeholderId: apex11.placeholderId,
    depth: apex11.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      let cliff11 = [],
        dusk11 = elm11 => {
          elm11.subHeaders && elm11.subHeaders.length && elm11.subHeaders.map(dusk11);
          cliff11.push(elm11);
        };
      return dusk11(brook11), cliff11;
    },
    getContext: () => ({
      table: vale11,
      header: brook11,
      column: wave11
    })
  };
  return vale11._features.forEach(item => {
    item.createHeader == null || item.createHeader(brook11, vale11);
  }), brook11;
}
function is(fern11, grove11, hill11, isle11) {
  let juniper11 = 0,
    lagoon11 = function (petal11, quiet11) {
      quiet11 === undefined && (quiet11 = 1);
      juniper11 = Math.max(juniper11, quiet11);
      petal11.filter(item => item.getIsVisible()).forEach(item => {
        var rain11;
        (rain11 = item.columns) != null && rain11.length && lagoon11(item.columns, quiet11 + 1);
      }, 0);
    };
  lagoon11(fern11);
  let meadow11 = [],
    nest11 = (seed11, trail11) => {
      let urn11 = {
          depth: trail11,
          id: [isle11, `${trail11}`].filter(Boolean).join("_"),
          headers: []
        },
        vine11 = [];
      seed11.forEach(item => {
        let wind11 = [...vine11].reverse()[0],
          yarrow11 = item.column.depth === urn11.depth,
          azure11,
          birch11 = false;
        if (yarrow11 && item.column.parent ? azure11 = item.column.parent : (azure11 = item.column, birch11 = true), wind11 && wind11?.column === azure11) wind11.subHeaders.push(item);else {
          let canyon11 = Mint1(hill11, azure11, {
            id: [isle11, trail11, azure11.id, item?.id].filter(Boolean).join("_"),
            isPlaceholder: birch11,
            placeholderId: birch11 ? `${vine11.filter(_item => _item.column === azure11).length}` : undefined,
            depth: trail11,
            index: vine11.length
          });
          canyon11.subHeaders.push(item);
          vine11.push(canyon11);
        }
        urn11.headers.push(item);
        item.headerGroup = urn11;
      });
      meadow11.push(urn11);
      trail11 > 0 && nest11(vine11, trail11 - 1);
    };
  nest11(grove11.map((item, index) => Mint1(hill11, item, {
    depth: juniper11,
    index
  })), juniper11 - 1);
  meadow11.reverse();
  let oak11 = dew11 => dew11.filter(item => item.column.getIsVisible()).map(item => {
    let alpha12 = 0,
      bravo12 = 0,
      copper12 = [0];
    item.subHeaders && item.subHeaders.length ? (copper12 = [], oak11(item.subHeaders).forEach(_item => {
      let {
        colSpan,
        rowSpan
      } = _item;
      alpha12 += colSpan;
      copper12.push(rowSpan);
    })) : alpha12 = 1;
    let delta12 = Math.min(...copper12);
    return bravo12 += delta12, item.colSpan = alpha12, item.rowSpan = bravo12, {
      colSpan: alpha12,
      rowSpan: bravo12
    };
  });
  return oak11(meadow11[0]?.headers ?? []), meadow11;
}
function as(echo12) {
  return echo12 == null || echo12 === "";
}
function os(falcon12, gamma12, harbor12) {
  return (falcon12 && falcon12.autoRemove ? falcon12.autoRemove(gamma12, harbor12) : false) || gamma12 === undefined || typeof gamma12 == "string" && !gamma12;
}
function Nova1(indigo12, jade12, kite12) {
  if (!(jade12 != null && jade12.length) || !kite12) return indigo12;
  let lemon12 = indigo12.filter(item => !jade12.includes(item.id));
  return kite12 === "remove" ? lemon12 : [...jade12.map(item => indigo12.find(_item => _item.id === item)).filter(Boolean), ...lemon12];
}
function Olive1(marble12) {
  return marble12 || (typeof document < "u" ? document : null);
}
function Prism1() {
  if (typeof juniper1 == "boolean") return juniper1;
  let nickel12 = false;
  try {
    let onyx12 = {
        get passive() {
          return nickel12 = true, false;
        }
      },
      pearl12 = () => {};
    window.addEventListener("test", pearl12, onyx12);
    window.removeEventListener("test", pearl12);
  } catch {
    nickel12 = false;
  }
  return nickel12;
}
function Quill1(quartz12) {
  return quartz12.type === "touchstart";
}
function Reef1(river12, slate12) {
  return slate12 ? slate12 === "center" ? river12.getCenterVisibleLeafColumns() : slate12 === "left" ? river12.getLeftVisibleLeafColumns() : river12.getRightVisibleLeafColumns() : river12.getVisibleLeafColumns();
}
function fs(timber12, umbra12) {
  let violet12 = timber12.getState().rowSelection,
    willow12 = [],
    xenon12 = {},
    yellow12 = function (zinc12, amber12) {
      return zinc12.map(item => {
        var basalt12;
        let cedar12 = Sage1(item, violet12);
        if (cedar12 && (willow12.push(item), xenon12[item.id] = item), (basalt12 = item.subRows) != null && basalt12.length && (item = {
          ...item,
          subRows: yellow12(item.subRows)
        }), cedar12) return item;
      }).filter(Boolean);
    };
  return {
    rows: yellow12(umbra12.rows),
    flatRows: willow12,
    rowsById: xenon12
  };
}
function Sage1(daisy12, ember12) {
  return ember12[daisy12.id] ?? false;
}
function Topaz1(flint12, garnet12, hazel12) {
  var ivory12;
  if (!((ivory12 = flint12.subRows) != null && ivory12.length)) return false;
  let jasper12 = true,
    kelp12 = false;
  return flint12.subRows.forEach(item => {
    if (!(kelp12 && !jasper12) && (item.getCanSelect() && (Sage1(item, garnet12) ? kelp12 = true : jasper12 = false), item.subRows && item.subRows.length)) {
      let lotus12 = Topaz1(item, garnet12);
      lotus12 === "all" ? kelp12 = true : (lotus12 === "some" && (kelp12 = true), jasper12 = false);
    }
  }), jasper12 ? "all" : kelp12 ? "some" : false;
}
function Ultra1(mint12, nova12) {
  return mint12 === nova12 ? 0 : mint12 > nova12 ? 1 : -1;
}
function Vapor1(olive12) {
  return typeof olive12 == "number" ? isNaN(olive12) || olive12 === 1 / 0 || olive12 === -1 / 0 ? "" : String(olive12) : typeof olive12 == "string" ? olive12 : "";
}
function _s(prism12, quill12) {
  let reef12 = prism12.split(yarrow1).filter(Boolean),
    sage12 = quill12.split(yarrow1).filter(Boolean);
  for (; reef12.length && sage12.length;) {
    let topaz12 = reef12.shift(),
      ultra12 = sage12.shift(),
      vapor12 = parseInt(topaz12, 10),
      wheat12 = parseInt(ultra12, 10),
      yarn12 = [vapor12, wheat12].sort();
    if (isNaN(yarn12[0])) {
      if (topaz12 > ultra12) return 1;
      if (ultra12 > topaz12) return -1;
      continue;
    }
    if (isNaN(yarn12[1])) return isNaN(vapor12) ? -1 : 1;
    if (vapor12 > wheat12) return 1;
    if (wheat12 > vapor12) return -1;
  }
  return reef12.length - sage12.length;
}
function Wheat1(zephyr12) {
  let acorn12 = [...delta2, ...(zephyr12._features ?? [])],
    bloom12 = {
      _features: acorn12
    },
    coral12 = bloom12._features.reduce((accumulator, current) => Object.assign(accumulator, current.getDefaultOptions == null ? undefined : current.getDefaultOptions(bloom12)), {}),
    drift12 = iris12 => bloom12.options.mergeOptions ? bloom12.options.mergeOptions(coral12, iris12) : {
      ...coral12,
      ...iris12
    },
    eagle12 = {
      ...(zephyr12.initialState ?? {})
    };
  bloom12._features.forEach(item => {
    eagle12 = (item.getInitialState == null ? undefined : item.getInitialState(eagle12)) ?? eagle12;
  });
  let frost12 = [],
    glide12 = false,
    honey12 = {
      _features: acorn12,
      options: {
        ...coral12,
        ...zephyr12
      },
      initialState: eagle12,
      _queue: jewel12 => {
        frost12.push(jewel12);
        glide12 || (glide12 = true, Promise.resolve().then(() => {
          for (; frost12.length;) frost12.shift()();
          glide12 = false;
        }).catch(error => setTimeout(() => {
          throw error;
        })));
      },
      reset: () => {
        bloom12.setState(bloom12.initialState);
      },
      setOptions: knoll12 => {
        let lunar12 = Ember1(knoll12, bloom12.options);
        bloom12.options = drift12(lunar12);
      },
      getState: () => bloom12.options.state,
      setState: moss12 => {
        bloom12.options.onStateChange == null || bloom12.options.onStateChange(moss12);
      },
      _getRowId: (north12, orbit12, pine12) => (bloom12.options.getRowId == null ? undefined : bloom12.options.getRowId(north12, orbit12, pine12)) ?? `${pine12 ? [pine12.id, orbit12].join(".") : orbit12}`,
      getCoreRowModel: () => (bloom12._getCoreRowModel ||= bloom12.options.getCoreRowModel(bloom12), bloom12._getCoreRowModel()),
      getRowModel: () => bloom12.getPaginationRowModel(),
      getRow: (quest12, ridge12) => {
        let storm12 = (ridge12 ? bloom12.getPrePaginationRowModel() : bloom12.getRowModel()).rowsById[quest12];
        if (!storm12 && (storm12 = bloom12.getCoreRowModel().rowsById[quest12], !storm12)) throw Error();
        return storm12;
      },
      _getDefaultColumnDef: Ivory1(() => [bloom12.options.defaultColumn], tide12 => (tide12 ??= {}, {
        header: unity12 => {
          let vale12 = unity12.header.column.columnDef;
          return vale12.accessorKey ? vale12.accessorKey : vale12.accessorFn ? vale12.id : null;
        },
        cell: wave12 => {
          var apex12;
          return ((apex12 = wave12.renderValue()) == null || apex12.toString == null ? undefined : apex12.toString()) ?? null;
        },
        ...bloom12._features.reduce((accumulator, current) => Object.assign(accumulator, current.getDefaultColumnDef == null ? undefined : current.getDefaultColumnDef()), {}),
        ...tide12
      }), Jasper1(zephyr12, "debugColumns", "_getDefaultColumnDef")),
      _getColumnDefs: () => bloom12.options.columns,
      getAllColumns: Ivory1(() => [bloom12._getColumnDefs()], brook12 => {
        let cliff12 = function (dusk12, elm12, fern12) {
          return fern12 === undefined && (fern12 = 0), dusk12.map(item => {
            let grove12 = Lotus1(bloom12, item, fern12, elm12),
              hill12 = item;
            return grove12.columns = hill12.columns ? cliff12(hill12.columns, grove12, fern12 + 1) : [], grove12;
          });
        };
        return cliff12(brook12);
      }, Jasper1(zephyr12, "debugColumns", "getAllColumns")),
      getAllFlatColumns: Ivory1(() => [bloom12.getAllColumns()], isle12 => isle12.flatMap(item => item.getFlatColumns()), Jasper1(zephyr12, "debugColumns", "getAllFlatColumns")),
      _getAllFlatColumnsById: Ivory1(() => [bloom12.getAllFlatColumns()], juniper12 => juniper12.reduce((accumulator, current) => (accumulator[current.id] = current, accumulator), {}), Jasper1(zephyr12, "debugColumns", "getAllFlatColumnsById")),
      getAllLeafColumns: Ivory1(() => [bloom12.getAllColumns(), bloom12._getOrderColumnsFn()], (lagoon12, meadow12) => meadow12(lagoon12.flatMap(item => item.getLeafColumns())), Jasper1(zephyr12, "debugColumns", "getAllLeafColumns")),
      getColumn: nest12 => bloom12._getAllFlatColumnsById()[nest12]
    };
  Object.assign(bloom12, honey12);
  for (let oak12 = 0; oak12 < bloom12._features.length; oak12++) {
    let petal12 = bloom12._features[oak12];
    petal12 == null || petal12.createTable == null || petal12.createTable(bloom12);
  }
  return bloom12;
}
function Yarn1() {
  return quiet12 => Ivory1(() => [quiet12.options.data], rain12 => {
    let seed12 = {
        rows: [],
        flatRows: [],
        rowsById: {}
      },
      trail12 = function (urn12, vine12, wind12) {
        vine12 === undefined && (vine12 = 0);
        let yarrow12 = [];
        for (let birch12 = 0; birch12 < urn12.length; birch12++) {
          let canyon12 = eagle1(quiet12, quiet12._getRowId(urn12[birch12], birch12, wind12), urn12[birch12], birch12, vine12, undefined, wind12?.id);
          if (seed12.flatRows.push(canyon12), seed12.rowsById[canyon12.id] = canyon12, yarrow12.push(canyon12), quiet12.options.getSubRows) {
            var azure12;
            canyon12.originalSubRows = quiet12.options.getSubRows(urn12[birch12], birch12);
            (azure12 = canyon12.originalSubRows) != null && azure12.length && (canyon12.subRows = trail12(canyon12.originalSubRows, vine12 + 1, canyon12));
          }
        }
        return yarrow12;
      };
    return seed12.rows = trail12(rain12), seed12;
  }, Jasper1(quiet12.options, "debugTable", "getRowModel", () => quiet12._autoResetPageIndex()));
}
function Zephyr1() {
  return dew12 => Ivory1(() => [dew12.getState().expanded, dew12.getPreExpandedRowModel(), dew12.options.paginateExpandedRows], (alpha13, bravo13, copper13) => !bravo13.rows.length || alpha13 !== true && !Object.keys(alpha13 ?? {}).length || !copper13 ? bravo13 : Acorn1(bravo13), Jasper1(dew12.options, "debugTable", "getExpandedRowModel"));
}
function Acorn1(delta13) {
  let echo13 = [],
    falcon13 = gamma13 => {
      var harbor13;
      echo13.push(gamma13);
      (harbor13 = gamma13.subRows) != null && harbor13.length && gamma13.getIsExpanded() && gamma13.subRows.forEach(falcon13);
    };
  return delta13.rows.forEach(falcon13), {
    rows: echo13,
    flatRows: delta13.flatRows,
    rowsById: delta13.rowsById
  };
}
function Bloom1() {
  return indigo13 => Ivory1(() => [indigo13.getState().sorting, indigo13.getPreSortedRowModel()], (jade13, kite13) => {
    if (!kite13.rows.length || !(jade13 != null && jade13.length)) return kite13;
    let lemon13 = indigo13.getState().sorting,
      marble13 = [],
      nickel13 = lemon13.filter(item => indigo13.getColumn(item.id)?.getCanSort()),
      onyx13 = {};
    nickel13.forEach(item => {
      let quartz13 = indigo13.getColumn(item.id);
      quartz13 && (onyx13[item.id] = {
        sortUndefined: quartz13.columnDef.sortUndefined,
        invertSorting: quartz13.columnDef.invertSorting,
        sortingFn: quartz13.getSortingFn()
      });
    });
    let pearl13 = river13 => {
      let slate13 = river13.map(item => ({
        ...item
      }));
      return slate13.sort((timber13, umbra13) => {
        for (let violet13 = 0; violet13 < nickel13.length; violet13 += 1) {
          let willow13 = nickel13[violet13],
            xenon13 = onyx13[willow13.id],
            yellow13 = xenon13.sortUndefined,
            zinc13 = willow13?.desc ?? false,
            amber13 = 0;
          if (yellow13) {
            let basalt13 = timber13.getValue(willow13.id),
              cedar13 = umbra13.getValue(willow13.id),
              daisy13 = basalt13 === undefined,
              ember13 = cedar13 === undefined;
            if (daisy13 || ember13) {
              if (yellow13 === "first") return daisy13 ? -1 : 1;
              if (yellow13 === "last") return daisy13 ? 1 : -1;
              amber13 = daisy13 && ember13 ? 0 : daisy13 ? yellow13 : -yellow13;
            }
          }
          if (amber13 === 0 && (amber13 = xenon13.sortingFn(timber13, umbra13, willow13.id)), amber13 !== 0) return zinc13 && (amber13 *= -1), xenon13.invertSorting && (amber13 *= -1), amber13;
        }
        return timber13.index - umbra13.index;
      }), slate13.forEach(item => {
        var flint13;
        marble13.push(item);
        (flint13 = item.subRows) != null && flint13.length && (item.subRows = pearl13(item.subRows));
      }), slate13;
    };
    return {
      rows: pearl13(kite13.rows),
      flatRows: marble13,
      rowsById: kite13.rowsById
    };
  }, Jasper1(indigo13.options, "debugTable", "getSortedRowModel", () => indigo13._autoResetPageIndex()));
}
const Ember1: any = undefined;
const id: any = undefined;
