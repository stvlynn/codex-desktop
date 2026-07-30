// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Careful split 9b

// Wave5d unbound soft stubs.
const Ember1: any = undefined;
const Flint1: any = undefined;
const Garnet1: any = undefined;
const Ivory1: any = undefined;
const Jasper1: any = undefined;
const Sage1: any = undefined;
const Topaz1: any = undefined;
const Ultra1: any = undefined;
const Umbra2: any = undefined;
const Vapor1: any = undefined;
const Wheat1: any = undefined;
const Yellow2: any = undefined;
const Zinc2: any = undefined;
const _c: any = undefined;
const _s: any = undefined;
const alpha2: any = undefined;
const azure1: any = undefined;
const birch1: any = undefined;
const bravo2: any = undefined;
const canyon1: any = undefined;
const copper2: any = undefined;
const dew1: any = undefined;
const drift1: any = undefined;
const dusk1: any = undefined;
const echo2: any = undefined;
const elm1: any = undefined;
const frost1: any = undefined;
const fs: any = undefined;
const grove1: any = undefined;
const isle1: any = undefined;
const lagoon1: any = undefined;
const meadow1: any = undefined;
const nest1: any = undefined;
const oak1: any = undefined;
const petal1: any = undefined;
const pine1: any = undefined;
const quiet1: any = undefined;
const rain1: any = undefined;
const seed1: any = undefined;
const trail1: any = undefined;
const urn1: any = undefined;
const vine1: any = undefined;
const wind1: any = undefined;
const yarrow1: any = undefined;

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
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_E4_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Mx_Init } from "../../boundaries/conversation-page-esm-inits";
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
function echo2__splitRest2(__splitParams: any) {
  petal1 = 0;
  quiet1 = 10;
  rain1 = () => ({
    pageIndex: petal1,
    pageSize: quiet1
  });
  seed1 = {
    getInitialState: canyon16 => ({
      ...canyon16,
      pagination: {
        ...rain1(),
        ...canyon16?.pagination
      }
    }),
    getDefaultOptions: dew16 => ({
      onPaginationChange: Flint1("pagination", dew16)
    }),
    createTable: alpha17 => {
      let bravo17 = false,
        copper17 = false;
      alpha17._autoResetPageIndex = () => {
        if (!bravo17) {
          alpha17._queue(() => {
            bravo17 = true;
          });
          return;
        }
        if (alpha17.options.autoResetAll ?? alpha17.options.autoResetPageIndex ?? !alpha17.options.manualPagination) {
          if (copper17) return;
          copper17 = true;
          alpha17._queue(() => {
            alpha17.resetPageIndex();
            copper17 = false;
          });
        }
      };
      alpha17.setPagination = delta17 => alpha17.options.onPaginationChange == null ? undefined : alpha17.options.onPaginationChange(echo17 => Ember1(delta17, echo17));
      alpha17.resetPagination = falcon17 => {
        alpha17.setPagination(falcon17 ? rain1() : alpha17.initialState.pagination ?? rain1());
      };
      alpha17.setPageIndex = gamma17 => {
        alpha17.setPagination(harbor17 => {
          let indigo17 = Ember1(gamma17, harbor17.pageIndex),
            jade17 = alpha17.options.pageCount === undefined || alpha17.options.pageCount === -1 ? 9007199254740991 : alpha17.options.pageCount - 1;
          return indigo17 = Math.max(0, Math.min(indigo17, jade17)), {
            ...harbor17,
            pageIndex: indigo17
          };
        });
      };
      alpha17.resetPageIndex = kite17 => {
        var lemon17;
        alpha17.setPageIndex(kite17 ? petal1 : ((lemon17 = alpha17.initialState) == null || (lemon17 = lemon17.pagination) == null ? undefined : lemon17.pageIndex) ?? petal1);
      };
      alpha17.resetPageSize = marble17 => {
        var nickel17;
        alpha17.setPageSize(marble17 ? quiet1 : ((nickel17 = alpha17.initialState) == null || (nickel17 = nickel17.pagination) == null ? undefined : nickel17.pageSize) ?? quiet1);
      };
      alpha17.setPageSize = onyx17 => {
        alpha17.setPagination(pearl17 => {
          let quartz17 = Math.max(1, Ember1(onyx17, pearl17.pageSize)),
            river17 = pearl17.pageSize * pearl17.pageIndex,
            slate17 = Math.floor(river17 / quartz17);
          return {
            ...pearl17,
            pageIndex: slate17,
            pageSize: quartz17
          };
        });
      };
      alpha17.setPageCount = timber17 => alpha17.setPagination(umbra17 => {
        let violet17 = Ember1(timber17, alpha17.options.pageCount ?? -1);
        return typeof violet17 == "number" && (violet17 = Math.max(-1, violet17)), {
          ...umbra17,
          pageCount: violet17
        };
      });
      alpha17.getPageOptions = Ivory1(() => [alpha17.getPageCount()], willow17 => {
        let xenon17 = [];
        return willow17 && willow17 > 0 && (xenon17 = [...Array(willow17)].fill(null).map((item, index) => index)), xenon17;
      }, Jasper1(alpha17.options, "debugTable", "getPageOptions"));
      alpha17.getCanPreviousPage = () => alpha17.getState().pagination.pageIndex > 0;
      alpha17.getCanNextPage = () => {
        let {
            pageIndex
          } = alpha17.getState().pagination,
          yellow17 = alpha17.getPageCount();
        return yellow17 === -1 ? true : yellow17 === 0 ? false : pageIndex < yellow17 - 1;
      };
      alpha17.previousPage = () => alpha17.setPageIndex(zinc17 => zinc17 - 1);
      alpha17.nextPage = () => alpha17.setPageIndex(amber17 => amber17 + 1);
      alpha17.firstPage = () => alpha17.setPageIndex(0);
      alpha17.lastPage = () => alpha17.setPageIndex(alpha17.getPageCount() - 1);
      alpha17.getPrePaginationRowModel = () => alpha17.getExpandedRowModel();
      alpha17.getPaginationRowModel = () => (!alpha17._getPaginationRowModel && alpha17.options.getPaginationRowModel && (alpha17._getPaginationRowModel = alpha17.options.getPaginationRowModel(alpha17)), alpha17.options.manualPagination || !alpha17._getPaginationRowModel ? alpha17.getPrePaginationRowModel() : alpha17._getPaginationRowModel());
      alpha17.getPageCount = () => alpha17.options.pageCount ?? Math.ceil(alpha17.getRowCount() / alpha17.getState().pagination.pageSize);
      alpha17.getRowCount = () => alpha17.options.rowCount ?? alpha17.getPrePaginationRowModel().rows.length;
    }
  };
  trail1 = () => ({
    top: [],
    bottom: []
  });
  urn1 = {
    getInitialState: basalt17 => ({
      rowPinning: trail1(),
      ...basalt17
    }),
    getDefaultOptions: cedar17 => ({
      onRowPinningChange: Flint1("rowPinning", cedar17)
    }),
    createRow: (daisy17, ember17) => {
      daisy17.pin = (flint17, garnet17, hazel17) => {
        let ivory17 = garnet17 ? daisy17.getLeafRows().map(item => {
            let {
              id: _id
            } = item;
            return _id;
          }) : [],
          jasper17 = hazel17 ? daisy17.getParentRows().map(item => {
            let {
              id: _id
            } = item;
            return _id;
          }) : [],
          kelp17 = new Set([...jasper17, daisy17.id, ...ivory17]);
        ember17.setRowPinning(lotus17 => flint17 === "bottom" ? {
          top: (lotus17?.top ?? []).filter(item => !(kelp17 != null && kelp17.has(item))),
          bottom: [...(lotus17?.bottom ?? []).filter(item => !(kelp17 != null && kelp17.has(item))), ...Array.from(kelp17)]
        } : flint17 === "top" ? {
          top: [...(lotus17?.top ?? []).filter(item => !(kelp17 != null && kelp17.has(item))), ...Array.from(kelp17)],
          bottom: (lotus17?.bottom ?? []).filter(item => !(kelp17 != null && kelp17.has(item)))
        } : {
          top: (lotus17?.top ?? []).filter(item => !(kelp17 != null && kelp17.has(item))),
          bottom: (lotus17?.bottom ?? []).filter(item => !(kelp17 != null && kelp17.has(item)))
        });
      };
      daisy17.getCanPin = () => {
        let {
          enableRowPinning,
          enablePinning
        } = ember17.options;
        return typeof enableRowPinning == "function" ? enableRowPinning(daisy17) : enableRowPinning ?? enablePinning ?? true;
      };
      daisy17.getIsPinned = () => {
        let mint17 = [daisy17.id],
          {
            top,
            bottom
          } = ember17.getState().rowPinning,
          nova17 = mint17.some(item => top?.includes(item)),
          olive17 = mint17.some(item => bottom?.includes(item));
        return nova17 ? "top" : olive17 ? "bottom" : false;
      };
      daisy17.getPinnedIndex = () => {
        let prism17 = daisy17.getIsPinned();
        return prism17 ? (prism17 === "top" ? ember17.getTopRows() : ember17.getBottomRows())?.map(quill17 => {
          let {
            id: _id
          } = quill17;
          return _id;
        })?.indexOf(daisy17.id) ?? -1 : -1;
      };
    },
    createTable: reef17 => {
      reef17.setRowPinning = sage17 => reef17.options.onRowPinningChange == null ? undefined : reef17.options.onRowPinningChange(sage17);
      reef17.resetRowPinning = topaz17 => reef17.setRowPinning(topaz17 ? trail1() : reef17.initialState?.rowPinning ?? trail1());
      reef17.getIsSomeRowsPinned = ultra17 => {
        let vapor17 = reef17.getState().rowPinning;
        return ultra17 ? !!vapor17[ultra17]?.length : !!(vapor17.top?.length || vapor17.bottom?.length);
      };
      reef17._getPinnedRows = (wheat17, yarn17, zephyr17) => (reef17.options.keepPinnedRows ?? true ? (yarn17 ?? []).map(item => {
        let acorn17 = reef17.getRow(item, true);
        return acorn17.getIsAllParentsExpanded() ? acorn17 : null;
      }) : (yarn17 ?? []).map(item => wheat17.find(_item => _item.id === item))).filter(Boolean).map(item => ({
        ...item,
        position: zephyr17
      }));
      reef17.getTopRows = Ivory1(() => [reef17.getRowModel().rows, reef17.getState().rowPinning.top], (bloom17, coral17) => reef17._getPinnedRows(bloom17, coral17, "top"), Jasper1(reef17.options, "debugRows", "getTopRows"));
      reef17.getBottomRows = Ivory1(() => [reef17.getRowModel().rows, reef17.getState().rowPinning.bottom], (drift17, eagle17) => reef17._getPinnedRows(drift17, eagle17, "bottom"), Jasper1(reef17.options, "debugRows", "getBottomRows"));
      reef17.getCenterRows = Ivory1(() => [reef17.getRowModel().rows, reef17.getState().rowPinning.top, reef17.getState().rowPinning.bottom], (frost17, glide17, honey17) => {
        let iris17 = new Set([...(glide17 ?? []), ...(honey17 ?? [])]);
        return frost17.filter(item => !iris17.has(item.id));
      }, Jasper1(reef17.options, "debugRows", "getCenterRows"));
    }
  };
  vine1 = {
    getInitialState: jewel17 => ({
      rowSelection: {},
      ...jewel17
    }),
    getDefaultOptions: knoll17 => ({
      onRowSelectionChange: Flint1("rowSelection", knoll17),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
    }),
    createTable: lunar17 => {
      lunar17.setRowSelection = moss17 => lunar17.options.onRowSelectionChange == null ? undefined : lunar17.options.onRowSelectionChange(moss17);
      lunar17.resetRowSelection = north17 => lunar17.setRowSelection(north17 ? {} : lunar17.initialState.rowSelection ?? {});
      lunar17.toggleAllRowsSelected = orbit17 => {
        lunar17.setRowSelection(pine17 => {
          orbit17 = orbit17 === undefined ? !lunar17.getIsAllRowsSelected() : orbit17;
          let quest17 = {
              ...pine17
            },
            ridge17 = lunar17.getPreGroupedRowModel().flatRows;
          return orbit17 ? ridge17.forEach(item => {
            item.getCanSelect() && (quest17[item.id] = true);
          }) : ridge17.forEach(item => {
            delete quest17[item.id];
          }), quest17;
        });
      };
      lunar17.toggleAllPageRowsSelected = storm17 => lunar17.setRowSelection(tide17 => {
        let unity17 = storm17 === undefined ? !lunar17.getIsAllPageRowsSelected() : storm17,
          vale17 = {
            ...tide17
          };
        return lunar17.getRowModel().rows.forEach(item => {
          wind1(vale17, item.id, unity17, true, lunar17);
        }), vale17;
      });
      lunar17.getPreSelectedRowModel = () => lunar17.getCoreRowModel();
      lunar17.getSelectedRowModel = Ivory1(() => [lunar17.getState().rowSelection, lunar17.getCoreRowModel()], (wave17, apex17) => Object.keys(wave17).length ? fs(lunar17, apex17) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, Jasper1(lunar17.options, "debugTable", "getSelectedRowModel"));
      lunar17.getFilteredSelectedRowModel = Ivory1(() => [lunar17.getState().rowSelection, lunar17.getFilteredRowModel()], (brook17, cliff17) => Object.keys(brook17).length ? fs(lunar17, cliff17) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, Jasper1(lunar17.options, "debugTable", "getFilteredSelectedRowModel"));
      lunar17.getGroupedSelectedRowModel = Ivory1(() => [lunar17.getState().rowSelection, lunar17.getSortedRowModel()], (dusk17, elm17) => Object.keys(dusk17).length ? fs(lunar17, elm17) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, Jasper1(lunar17.options, "debugTable", "getGroupedSelectedRowModel"));
      lunar17.getIsAllRowsSelected = () => {
        let fern17 = lunar17.getFilteredRowModel().flatRows,
          {
            rowSelection
          } = lunar17.getState(),
          grove17 = !!(fern17.length && Object.keys(rowSelection).length);
        return grove17 && fern17.some(item => item.getCanSelect() && !rowSelection[item.id]) && (grove17 = false), grove17;
      };
      lunar17.getIsAllPageRowsSelected = () => {
        let hill17 = lunar17.getPaginationRowModel().flatRows.filter(item => item.getCanSelect()),
          {
            rowSelection
          } = lunar17.getState(),
          isle17 = !!hill17.length;
        return isle17 && hill17.some(item => !rowSelection[item.id]) && (isle17 = false), isle17;
      };
      lunar17.getIsSomeRowsSelected = () => {
        let juniper17 = Object.keys(lunar17.getState().rowSelection ?? {}).length;
        return juniper17 > 0 && juniper17 < lunar17.getFilteredRowModel().flatRows.length;
      };
      lunar17.getIsSomePageRowsSelected = () => {
        let lagoon17 = lunar17.getPaginationRowModel().flatRows;
        return lunar17.getIsAllPageRowsSelected() ? false : lagoon17.filter(item => item.getCanSelect()).some(item => item.getIsSelected() || item.getIsSomeSelected());
      };
      lunar17.getToggleAllRowsSelectedHandler = () => event => {
        lunar17.toggleAllRowsSelected(event.target.checked);
      };
      lunar17.getToggleAllPageRowsSelectedHandler = () => event => {
        lunar17.toggleAllPageRowsSelected(event.target.checked);
      };
    },
    createRow: (meadow17, nest17) => {
      meadow17.toggleSelected = (oak17, petal17) => {
        let quiet17 = meadow17.getIsSelected();
        nest17.setRowSelection(rain17 => {
          if (oak17 = oak17 === undefined ? !quiet17 : oak17, meadow17.getCanSelect() && quiet17 === oak17) return rain17;
          let seed17 = {
            ...rain17
          };
          return wind1(seed17, meadow17.id, oak17, petal17?.selectChildren ?? true, nest17), seed17;
        });
      };
      meadow17.getIsSelected = () => {
        let {
          rowSelection
        } = nest17.getState();
        return Sage1(meadow17, rowSelection);
      };
      meadow17.getIsSomeSelected = () => {
        let {
          rowSelection
        } = nest17.getState();
        return Topaz1(meadow17, rowSelection) === "some";
      };
      meadow17.getIsAllSubRowsSelected = () => {
        let {
          rowSelection
        } = nest17.getState();
        return Topaz1(meadow17, rowSelection) === "all";
      };
      meadow17.getCanSelect = () => typeof nest17.options.enableRowSelection == "function" ? nest17.options.enableRowSelection(meadow17) : nest17.options.enableRowSelection ?? true;
      meadow17.getCanSelectSubRows = () => typeof nest17.options.enableSubRowSelection == "function" ? nest17.options.enableSubRowSelection(meadow17) : nest17.options.enableSubRowSelection ?? true;
      meadow17.getCanMultiSelect = () => typeof nest17.options.enableMultiRowSelection == "function" ? nest17.options.enableMultiRowSelection(meadow17) : nest17.options.enableMultiRowSelection ?? true;
      meadow17.getToggleSelectedHandler = () => {
        let trail17 = meadow17.getCanSelect();
        return event => {
          trail17 && meadow17.toggleSelected(event.target?.checked);
        };
      };
    }
  };
  wind1 = (urn17, vine17, wind17, yarrow17, azure17) => {
    var birch17;
    let canyon17 = azure17.getRow(vine17, true);
    wind17 ? (canyon17.getCanMultiSelect() || Object.keys(urn17).forEach(item => delete urn17[item]), canyon17.getCanSelect() && (urn17[vine17] = true)) : delete urn17[vine17];
    yarrow17 && (birch17 = canyon17.subRows) != null && birch17.length && canyon17.getCanSelectSubRows() && canyon17.subRows.forEach(item => wind1(urn17, item.id, wind17, yarrow17, azure17));
  };
  yarrow1 = /([0-9]+)/gm;
  azure1 = (dew17, alpha18, bravo18) => _s(Vapor1(dew17.getValue(bravo18)).toLowerCase(), Vapor1(alpha18.getValue(bravo18)).toLowerCase());
  birch1 = (copper18, delta18, echo18) => _s(Vapor1(copper18.getValue(echo18)), Vapor1(delta18.getValue(echo18)));
  _c = (falcon18, gamma18, harbor18) => Ultra1(Vapor1(falcon18.getValue(harbor18)).toLowerCase(), Vapor1(gamma18.getValue(harbor18)).toLowerCase());
  canyon1 = (indigo18, jade18, kite18) => Ultra1(Vapor1(indigo18.getValue(kite18)), Vapor1(jade18.getValue(kite18)));
  dew1 = (lemon18, marble18, nickel18) => {
    let onyx18 = lemon18.getValue(nickel18),
      pearl18 = marble18.getValue(nickel18);
    return onyx18 > pearl18 ? 1 : onyx18 < pearl18 ? -1 : 0;
  };
  alpha2 = (quartz18, river18, slate18) => Ultra1(quartz18.getValue(slate18), river18.getValue(slate18));
  bravo2 = {
    alphanumeric: azure1,
    alphanumericCaseSensitive: birch1,
    text: _c,
    textCaseSensitive: canyon1,
    datetime: dew1,
    basic: alpha2
  };
  copper2 = {
    getInitialState: timber18 => ({
      sorting: [],
      ...timber18
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: umbra18 => ({
      onSortingChange: Flint1("sorting", umbra18),
      isMultiSortEvent: event => event.shiftKey
    }),
    createColumn: (violet18, willow18) => {
      violet18.getAutoSortingFn = () => {
        let xenon18 = willow18.getFilteredRowModel().flatRows.slice(10),
          yellow18 = false;
        for (let zinc18 of xenon18) {
          let amber18 = zinc18?.getValue(violet18.id);
          if (Object.prototype.toString.call(amber18) === "[object Date]") return bravo2.datetime;
          if (typeof amber18 == "string" && (yellow18 = true, amber18.split(yarrow1).length > 1)) return bravo2.alphanumeric;
        }
        return yellow18 ? bravo2.text : bravo2.basic;
      };
      violet18.getAutoSortDir = () => typeof willow18.getFilteredRowModel().flatRows[0]?.getValue(violet18.id) == "string" ? "asc" : "desc";
      violet18.getSortingFn = () => {
        if (!violet18) throw Error();
        return Garnet1(violet18.columnDef.sortingFn) ? violet18.columnDef.sortingFn : violet18.columnDef.sortingFn === "auto" ? violet18.getAutoSortingFn() : willow18.options.sortingFns?.[violet18.columnDef.sortingFn] ?? bravo2[violet18.columnDef.sortingFn];
      };
      violet18.toggleSorting = (basalt18, cedar18) => {
        let daisy18 = violet18.getNextSortingOrder(),
          ember18 = basalt18 != null;
        willow18.setSorting(flint18 => {
          let garnet18 = flint18?.find(lotus18 => lotus18.id === violet18.id),
            hazel18 = flint18?.findIndex(mint18 => mint18.id === violet18.id),
            ivory18 = [],
            jasper18,
            kelp18 = ember18 ? basalt18 : daisy18 === "desc";
          return jasper18 = flint18 != null && flint18.length && violet18.getCanMultiSort() && cedar18 ? garnet18 ? "toggle" : "add" : flint18 != null && flint18.length && hazel18 !== flint18.length - 1 ? "replace" : garnet18 ? "toggle" : "replace", jasper18 === "toggle" && (ember18 || daisy18 || (jasper18 = "remove")), jasper18 === "add" ? (ivory18 = [...flint18, {
            id: violet18.id,
            desc: kelp18
          }], ivory18.splice(0, ivory18.length - (willow18.options.maxMultiSortColCount ?? 9007199254740991))) : ivory18 = jasper18 === "toggle" ? flint18.map(item => item.id === violet18.id ? {
            ...item,
            desc: kelp18
          } : item) : jasper18 === "remove" ? flint18.filter(item => item.id !== violet18.id) : [{
            id: violet18.id,
            desc: kelp18
          }], ivory18;
        });
      };
      violet18.getFirstSortDir = () => violet18.columnDef.sortDescFirst ?? willow18.options.sortDescFirst ?? violet18.getAutoSortDir() === "desc" ? "desc" : "asc";
      violet18.getNextSortingOrder = nova18 => {
        let olive18 = violet18.getFirstSortDir(),
          prism18 = violet18.getIsSorted();
        return prism18 ? prism18 !== olive18 && (willow18.options.enableSortingRemoval ?? true) && (!nova18 || (willow18.options.enableMultiRemove ?? true)) ? false : prism18 === "desc" ? "asc" : "desc" : olive18;
      };
      violet18.getCanSort = () => (violet18.columnDef.enableSorting ?? true) && (willow18.options.enableSorting ?? true) && !!violet18.accessorFn;
      violet18.getCanMultiSort = () => violet18.columnDef.enableMultiSort ?? willow18.options.enableMultiSort ?? !!violet18.accessorFn;
      violet18.getIsSorted = () => {
        let quill18 = willow18.getState().sorting?.find(reef18 => reef18.id === violet18.id);
        return quill18 ? quill18.desc ? "desc" : "asc" : false;
      };
      violet18.getSortIndex = () => willow18.getState().sorting?.findIndex(sage18 => sage18.id === violet18.id) ?? -1;
      violet18.clearSorting = () => {
        willow18.setSorting(topaz18 => topaz18 != null && topaz18.length ? topaz18.filter(item => item.id !== violet18.id) : []);
      };
      violet18.getToggleSortingHandler = () => {
        let ultra18 = violet18.getCanSort();
        return event => {
          ultra18 && (event.persist == null || event.persist(), violet18.toggleSorting == null || violet18.toggleSorting(undefined, violet18.getCanMultiSort() ? willow18.options.isMultiSortEvent == null ? undefined : willow18.options.isMultiSortEvent(event) : false));
        };
      };
    },
    createTable: vapor18 => {
      vapor18.setSorting = wheat18 => vapor18.options.onSortingChange == null ? undefined : vapor18.options.onSortingChange(wheat18);
      vapor18.resetSorting = yarn18 => {
        vapor18.setSorting(yarn18 ? [] : vapor18.initialState?.sorting ?? []);
      };
      vapor18.getPreSortedRowModel = () => vapor18.getGroupedRowModel();
      vapor18.getSortedRowModel = () => (!vapor18._getSortedRowModel && vapor18.options.getSortedRowModel && (vapor18._getSortedRowModel = vapor18.options.getSortedRowModel(vapor18)), vapor18.options.manualSorting || !vapor18._getSortedRowModel ? vapor18.getPreSortedRowModel() : vapor18._getSortedRowModel());
    }
  };
  delta2 = [drift1, lagoon1, elm1, grove1, frost1, pine1, meadow1, nest1, copper2, dusk1, oak1, seed1, urn1, vine1, isle1];
  return undefined as any;
}
function Falcon2(zephyr18, acorn18) {
  return zephyr18 ? Gamma2(zephyr18) ? kite2.createElement(zephyr18, acorn18) : zephyr18 : null;
}
function Gamma2(bloom18) {
  return Harbor2(bloom18) || typeof bloom18 == "function" || Indigo2(bloom18);
}
function Harbor2(coral18) {
  return typeof coral18 == "function" && (() => {
    let drift18 = Object.getPrototypeOf(coral18);
    return drift18.prototype && drift18.prototype.isReactComponent;
  })();
}
function Indigo2(eagle18) {
  return typeof eagle18 == "object" && typeof eagle18.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(eagle18.$$typeof.description);
}
function Jade2(frost18) {
  let glide18 = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...frost18
    },
    [honey18] = kite2.useState(() => ({
      current: Wheat1(glide18)
    })),
    [iris18, jewel18] = kite2.useState(() => honey18.current.initialState);
  return honey18.current.setOptions(knoll18 => ({
    ...knoll18,
    ...frost18,
    state: {
      ...iris18,
      ...frost18.state
    },
    onStateChange: lunar18 => {
      jewel18(lunar18);
      frost18.onStateChange == null || frost18.onStateChange(lunar18);
    }
  })), honey18.current;
}
var kite2,
  lemon2 = esmInit(() => {
    kite2 = commonJsInit(react(), 1);
    echo2();
    echo2();
  });
function Marble2(moss18, north18) {
  if (moss18 == null) return null;
  let orbit18 = new Map();
  for (let pine18 of north18) {
    let quest18 = orbit18.get(pine18.parentPid) ?? [];
    quest18.push(pine18);
    orbit18.set(pine18.parentPid, quest18);
  }
  return Umbra2(moss18, orbit18);
}
function Nickel2(ridge18) {
  let storm18 = ridge18.trim();
  if (storm18.length === 0) return "(command unavailable)";
  let tide18 = /^"([^"]+)"/.exec(storm18);
  if (tide18 != null) return Yellow2(tide18[1]);
  let unity18 = /^.+?\/([^/]+)\.app\/Contents\/MacOS\/(.+)$/.exec(storm18);
  if (unity18 != null) {
    let wave18 = unity18[1],
      apex18 = unity18[2];
    if (apex18 === wave18 || apex18.startsWith(`${wave18} `)) return wave18;
  }
  let vale18 = storm18.split(/\s+/, 1)[0];
  return Yellow2(vale18);
}
function Onyx2(brook18) {
  let cliff18 = {
    "app-server": null,
    "codex-app": null,
    "other-child-processes": null,
    "rollout-child-processes": null
  };
  function Dusk18(elm18, fern18) {
    let grove18 = Zinc2(brook18, elm18, fern18),
      {
        rssKb
      } = elm18.process;
    rssKb != null && Number.isFinite(rssKb) && (cliff18[grove18] = (cliff18[grove18] ?? 0) + rssKb);
    for (let hill18 of elm18.children) Dusk18(hill18, fern18 || grove18 === "app-server");
  }
  return Dusk18(brook18, false), cliff18;
}
function Pearl2(isle18, juniper18) {
  let lagoon18 = [];
  function Meadow18(nest18, oak18) {
    let petal18 = Zinc2(isle18, nest18, oak18);
    (juniper18 === "all" || petal18 === juniper18) && lagoon18.push(nest18);
    for (let quiet18 of nest18.children) Meadow18(quiet18, oak18 || petal18 === "app-server");
  }
  return Meadow18(isle18, false), lagoon18;
}
function Quartz2(rain18) {
  return rain18 == null || !Number.isFinite(rain18) ? "n/a" : rain18 >= 1048576 ? `${(rain18 / 1048576).toFixed(2)} GB` : rain18 >= 1024 ? `${(rain18 / 1024).toFixed(1)} MB` : `${rain18} KB`;
}
