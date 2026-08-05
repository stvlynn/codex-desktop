// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Careful split 8/17

// Wave5d unbound soft stubs.
const $s: any = undefined;
const fern1: any = undefined;
const hill1: any = undefined;
const orbit1: any = undefined;

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

function echo2__splitRest1(__splitParams: any) {
  grove1 = {
    getInitialState: (zephyr15) => ({
      columnPinning: fern1(),
      ...zephyr15,
    }),
    getDefaultOptions: (acorn15) => ({
      onColumnPinningChange: Flint1("columnPinning", acorn15),
    }),
    createColumn: (bloom15, coral15) => {
      bloom15.pin = (drift15) => {
        let eagle15 = bloom15
          .getLeafColumns()
          .map((item) => item.id)
          .filter(Boolean);
        coral15.setColumnPinning((frost15) =>
          drift15 === "right"
            ? {
                left: (frost15?.left ?? []).filter(
                  (item) => !(eagle15 != null && eagle15.includes(item)),
                ),
                right: [
                  ...(frost15?.right ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                  ...eagle15,
                ],
              }
            : drift15 === "left"
              ? {
                  left: [
                    ...(frost15?.left ?? []).filter(
                      (item) => !(eagle15 != null && eagle15.includes(item)),
                    ),
                    ...eagle15,
                  ],
                  right: (frost15?.right ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                }
              : {
                  left: (frost15?.left ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                  right: (frost15?.right ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                },
        );
      };
      bloom15.getCanPin = () =>
        bloom15
          .getLeafColumns()
          .some(
            (item) =>
              (item.columnDef.enablePinning ?? true) &&
              (coral15.options.enableColumnPinning ??
                coral15.options.enablePinning ??
                true),
          );
      bloom15.getIsPinned = () => {
        let glide15 = bloom15.getLeafColumns().map((item) => item.id),
          { left, right } = coral15.getState().columnPinning,
          honey15 = glide15.some((item) => left?.includes(item)),
          iris15 = glide15.some((item) => right?.includes(item));
        return honey15 ? "left" : iris15 ? "right" : false;
      };
      bloom15.getPinnedIndex = () => {
        var jewel15;
        let knoll15 = bloom15.getIsPinned();
        return knoll15
          ? (((jewel15 = coral15.getState().columnPinning) == null ||
            (jewel15 = jewel15[knoll15]) == null
              ? undefined
              : jewel15.indexOf(bloom15.id)) ?? -1)
          : 0;
      };
    },
    createRow: (lunar15, moss15) => {
      lunar15.getCenterVisibleCells = Ivory1(
        () => [
          lunar15._getAllVisibleCells(),
          moss15.getState().columnPinning.left,
          moss15.getState().columnPinning.right,
        ],
        (north15, orbit15, pine15) => {
          let quest15 = [...(orbit15 ?? []), ...(pine15 ?? [])];
          return north15.filter((item) => !quest15.includes(item.column.id));
        },
        Jasper1(moss15.options, "debugRows", "getCenterVisibleCells"),
      );
      lunar15.getLeftVisibleCells = Ivory1(
        () => [
          lunar15._getAllVisibleCells(),
          moss15.getState().columnPinning.left,
        ],
        (ridge15, storm15) =>
          (storm15 ?? [])
            .map((item) => ridge15.find((_item) => _item.column.id === item))
            .filter(Boolean)
            .map((item) => ({
              ...item,
              position: "left",
            })),
        Jasper1(moss15.options, "debugRows", "getLeftVisibleCells"),
      );
      lunar15.getRightVisibleCells = Ivory1(
        () => [
          lunar15._getAllVisibleCells(),
          moss15.getState().columnPinning.right,
        ],
        (tide15, unity15) =>
          (unity15 ?? [])
            .map((item) => tide15.find((_item) => _item.column.id === item))
            .filter(Boolean)
            .map((item) => ({
              ...item,
              position: "right",
            })),
        Jasper1(moss15.options, "debugRows", "getRightVisibleCells"),
      );
    },
    createTable: (vale15) => {
      vale15.setColumnPinning = (wave15) =>
        vale15.options.onColumnPinningChange == null
          ? undefined
          : vale15.options.onColumnPinningChange(wave15);
      vale15.resetColumnPinning = (apex15) =>
        vale15.setColumnPinning(
          apex15 ? fern1() : (vale15.initialState?.columnPinning ?? fern1()),
        );
      vale15.getIsSomeColumnsPinned = (brook15) => {
        let cliff15 = vale15.getState().columnPinning;
        return brook15
          ? !!cliff15[brook15]?.length
          : !!(cliff15.left?.length || cliff15.right?.length);
      };
      vale15.getLeftLeafColumns = Ivory1(
        () => [
          vale15.getAllLeafColumns(),
          vale15.getState().columnPinning.left,
        ],
        (dusk15, elm15) =>
          (elm15 ?? [])
            .map((item) => dusk15.find((_item) => _item.id === item))
            .filter(Boolean),
        Jasper1(vale15.options, "debugColumns", "getLeftLeafColumns"),
      );
      vale15.getRightLeafColumns = Ivory1(
        () => [
          vale15.getAllLeafColumns(),
          vale15.getState().columnPinning.right,
        ],
        (fern15, grove15) =>
          (grove15 ?? [])
            .map((item) => fern15.find((_item) => _item.id === item))
            .filter(Boolean),
        Jasper1(vale15.options, "debugColumns", "getRightLeafColumns"),
      );
      vale15.getCenterLeafColumns = Ivory1(
        () => [
          vale15.getAllLeafColumns(),
          vale15.getState().columnPinning.left,
          vale15.getState().columnPinning.right,
        ],
        (hill15, isle15, juniper15) => {
          let lagoon15 = [...(isle15 ?? []), ...(juniper15 ?? [])];
          return hill15.filter((item) => !lagoon15.includes(item.id));
        },
        Jasper1(vale15.options, "debugColumns", "getCenterLeafColumns"),
      );
    },
  };
  hill1 = {
    size: 150,
    minSize: 20,
    maxSize: 9007199254740991,
  };
  $s = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: [],
  });
  isle1 = {
    getDefaultColumnDef: () => hill1,
    getInitialState: (meadow15) => ({
      columnSizing: {},
      columnSizingInfo: $s(),
      ...meadow15,
    }),
    getDefaultOptions: (nest15) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Flint1("columnSizing", nest15),
      onColumnSizingInfoChange: Flint1("columnSizingInfo", nest15),
    }),
    createColumn: (oak15, petal15) => {
      oak15.getSize = () => {
        let quiet15 = petal15.getState().columnSizing[oak15.id];
        return Math.min(
          Math.max(
            oak15.columnDef.minSize ?? hill1.minSize,
            quiet15 ?? oak15.columnDef.size ?? hill1.size,
          ),
          oak15.columnDef.maxSize ?? hill1.maxSize,
        );
      };
      oak15.getStart = Ivory1(
        (rain15) => [
          rain15,
          Reef1(petal15, rain15),
          petal15.getState().columnSizing,
        ],
        (seed15, trail15) =>
          trail15
            .slice(0, oak15.getIndex(seed15))
            .reduce(
              (accumulator, current) => accumulator + current.getSize(),
              0,
            ),
        Jasper1(petal15.options, "debugColumns", "getStart"),
      );
      oak15.getAfter = Ivory1(
        (urn15) => [
          urn15,
          Reef1(petal15, urn15),
          petal15.getState().columnSizing,
        ],
        (vine15, wind15) =>
          wind15
            .slice(oak15.getIndex(vine15) + 1)
            .reduce(
              (accumulator, current) => accumulator + current.getSize(),
              0,
            ),
        Jasper1(petal15.options, "debugColumns", "getAfter"),
      );
      oak15.resetSize = () => {
        petal15.setColumnSizing((yarrow15) => {
          let { [oak15.id]: azure15, ...rest } = yarrow15;
          return rest;
        });
      };
      oak15.getCanResize = () =>
        (oak15.columnDef.enableResizing ?? true) &&
        (petal15.options.enableColumnResizing ?? true);
      oak15.getIsResizing = () =>
        petal15.getState().columnSizingInfo.isResizingColumn === oak15.id;
    },
    createHeader: (birch15, canyon15) => {
      birch15.getSize = () => {
        let dew15 = 0,
          alpha16 = (bravo16) => {
            bravo16.subHeaders.length
              ? bravo16.subHeaders.forEach(alpha16)
              : (dew15 += bravo16.column.getSize() ?? 0);
          };
        return (alpha16(birch15), dew15);
      };
      birch15.getStart = () => {
        if (birch15.index > 0) {
          let copper16 = birch15.headerGroup.headers[birch15.index - 1];
          return copper16.getStart() + copper16.getSize();
        }
        return 0;
      };
      birch15.getResizeHandler = (delta16) => {
        let echo16 = canyon15.getColumn(birch15.column.id),
          falcon16 = echo16?.getCanResize();
        return (event) => {
          if (
            !echo16 ||
            !falcon16 ||
            (event.persist == null || event.persist(),
            Quill1(event) && event.touches && event.touches.length > 1)
          )
            return;
          let gamma16 = birch15.getSize(),
            harbor16 = birch15
              ? birch15
                  .getLeafHeaders()
                  .map((item) => [item.column.id, item.column.getSize()])
              : [[echo16.id, echo16.getSize()]],
            indigo16 = Quill1(event)
              ? Math.round(event.touches[0].clientX)
              : event.clientX,
            jade16 = {},
            kite16 = (river16, slate16) => {
              typeof slate16 == "number" &&
                (canyon15.setColumnSizingInfo((timber16) => {
                  let umbra16 =
                      canyon15.options.columnResizeDirection === "rtl" ? -1 : 1,
                    violet16 =
                      (slate16 - (timber16?.startOffset ?? 0)) * umbra16,
                    willow16 = Math.max(
                      violet16 / (timber16?.startSize ?? 0),
                      -0.999999,
                    );
                  return (
                    timber16.columnSizingStart.forEach((item) => {
                      let [xenon16, yellow16] = item;
                      jade16[xenon16] =
                        Math.round(
                          Math.max(yellow16 + yellow16 * willow16, 0) * 100,
                        ) / 100;
                    }),
                    {
                      ...timber16,
                      deltaOffset: violet16,
                      deltaPercentage: willow16,
                    }
                  );
                }),
                (canyon15.options.columnResizeMode === "onChange" ||
                  river16 === "end") &&
                  canyon15.setColumnSizing((zinc16) => ({
                    ...zinc16,
                    ...jade16,
                  })));
            },
            lemon16 = (amber16) => kite16("move", amber16),
            marble16 = (basalt16) => {
              kite16("end", basalt16);
              canyon15.setColumnSizingInfo((cedar16) => ({
                ...cedar16,
                isResizingColumn: false,
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                columnSizingStart: [],
              }));
            },
            nickel16 = Olive1(delta16),
            onyx16 = {
              moveHandler: (_event) => lemon16(_event.clientX),
              upHandler: (_event) => {
                nickel16?.removeEventListener("mousemove", onyx16.moveHandler);
                nickel16?.removeEventListener("mouseup", onyx16.upHandler);
                marble16(_event.clientX);
              },
            },
            pearl16 = {
              moveHandler: (_event) => (
                _event.cancelable &&
                  (_event.preventDefault(), _event.stopPropagation()),
                lemon16(_event.touches[0].clientX),
                false
              ),
              upHandler: (_event) => {
                nickel16?.removeEventListener("touchmove", pearl16.moveHandler);
                nickel16?.removeEventListener("touchend", pearl16.upHandler);
                _event.cancelable &&
                  (_event.preventDefault(), _event.stopPropagation());
                marble16(_event.touches[0]?.clientX);
              },
            },
            quartz16 = Prism1()
              ? {
                  passive: false,
                }
              : false;
          Quill1(event)
            ? (nickel16?.addEventListener(
                "touchmove",
                pearl16.moveHandler,
                quartz16,
              ),
              nickel16?.addEventListener(
                "touchend",
                pearl16.upHandler,
                quartz16,
              ))
            : (nickel16?.addEventListener(
                "mousemove",
                onyx16.moveHandler,
                quartz16,
              ),
              nickel16?.addEventListener(
                "mouseup",
                onyx16.upHandler,
                quartz16,
              ));
          canyon15.setColumnSizingInfo((daisy16) => ({
            ...daisy16,
            startOffset: indigo16,
            startSize: gamma16,
            deltaOffset: 0,
            deltaPercentage: 0,
            columnSizingStart: harbor16,
            isResizingColumn: echo16.id,
          }));
        };
      };
    },
    createTable: (ember16) => {
      ember16.setColumnSizing = (flint16) =>
        ember16.options.onColumnSizingChange == null
          ? undefined
          : ember16.options.onColumnSizingChange(flint16);
      ember16.setColumnSizingInfo = (garnet16) =>
        ember16.options.onColumnSizingInfoChange == null
          ? undefined
          : ember16.options.onColumnSizingInfoChange(garnet16);
      ember16.resetColumnSizing = (hazel16) => {
        ember16.setColumnSizing(
          hazel16 ? {} : (ember16.initialState.columnSizing ?? {}),
        );
      };
      ember16.resetHeaderSizeInfo = (ivory16) => {
        ember16.setColumnSizingInfo(
          ivory16 ? $s() : (ember16.initialState.columnSizingInfo ?? $s()),
        );
      };
      ember16.getTotalSize = () =>
        ember16
          .getHeaderGroups()[0]
          ?.headers.reduce(
            (jasper16, kelp16) => jasper16 + kelp16.getSize(),
            0,
          ) ?? 0;
      ember16.getLeftTotalSize = () =>
        ember16
          .getLeftHeaderGroups()[0]
          ?.headers.reduce(
            (lotus16, mint16) => lotus16 + mint16.getSize(),
            0,
          ) ?? 0;
      ember16.getCenterTotalSize = () =>
        ember16
          .getCenterHeaderGroups()[0]
          ?.headers.reduce(
            (nova16, olive16) => nova16 + olive16.getSize(),
            0,
          ) ?? 0;
      ember16.getRightTotalSize = () =>
        ember16
          .getRightHeaderGroups()[0]
          ?.headers.reduce(
            (prism16, quill16) => prism16 + quill16.getSize(),
            0,
          ) ?? 0;
    },
  };
  juniper1 = null;
  lagoon1 = {
    getInitialState: (reef16) => ({
      columnVisibility: {},
      ...reef16,
    }),
    getDefaultOptions: (sage16) => ({
      onColumnVisibilityChange: Flint1("columnVisibility", sage16),
    }),
    createColumn: (topaz16, ultra16) => {
      topaz16.toggleVisibility = (vapor16) => {
        topaz16.getCanHide() &&
          ultra16.setColumnVisibility((wheat16) => ({
            ...wheat16,
            [topaz16.id]: vapor16 ?? !topaz16.getIsVisible(),
          }));
      };
      topaz16.getIsVisible = () => {
        let yarn16 = topaz16.columns;
        return (
          (yarn16.length
            ? yarn16.some((item) => item.getIsVisible())
            : ultra16.getState().columnVisibility?.[topaz16.id]) ?? true
        );
      };
      topaz16.getCanHide = () =>
        (topaz16.columnDef.enableHiding ?? true) &&
        (ultra16.options.enableHiding ?? true);
      topaz16.getToggleVisibilityHandler = () => (event) => {
        topaz16.toggleVisibility == null ||
          topaz16.toggleVisibility(event.target.checked);
      };
    },
    createRow: (zephyr16, acorn16) => {
      zephyr16._getAllVisibleCells = Ivory1(
        () => [zephyr16.getAllCells(), acorn16.getState().columnVisibility],
        (bloom16) => bloom16.filter((item) => item.column.getIsVisible()),
        Jasper1(acorn16.options, "debugRows", "_getAllVisibleCells"),
      );
      zephyr16.getVisibleCells = Ivory1(
        () => [
          zephyr16.getLeftVisibleCells(),
          zephyr16.getCenterVisibleCells(),
          zephyr16.getRightVisibleCells(),
        ],
        (coral16, drift16, eagle16) => [...coral16, ...drift16, ...eagle16],
        Jasper1(acorn16.options, "debugRows", "getVisibleCells"),
      );
    },
    createTable: (frost16) => {
      let glide16 = (honey16, iris16) =>
        Ivory1(
          () => [
            iris16(),
            iris16()
              .filter((item) => item.getIsVisible())
              .map((item) => item.id)
              .join("_"),
          ],
          (jewel16) =>
            jewel16.filter((item) =>
              item.getIsVisible == null ? undefined : item.getIsVisible(),
            ),
          Jasper1(frost16.options, "debugColumns", honey16),
        );
      frost16.getVisibleFlatColumns = glide16("getVisibleFlatColumns", () =>
        frost16.getAllFlatColumns(),
      );
      frost16.getVisibleLeafColumns = glide16("getVisibleLeafColumns", () =>
        frost16.getAllLeafColumns(),
      );
      frost16.getLeftVisibleLeafColumns = glide16(
        "getLeftVisibleLeafColumns",
        () => frost16.getLeftLeafColumns(),
      );
      frost16.getRightVisibleLeafColumns = glide16(
        "getRightVisibleLeafColumns",
        () => frost16.getRightLeafColumns(),
      );
      frost16.getCenterVisibleLeafColumns = glide16(
        "getCenterVisibleLeafColumns",
        () => frost16.getCenterLeafColumns(),
      );
      frost16.setColumnVisibility = (knoll16) =>
        frost16.options.onColumnVisibilityChange == null
          ? undefined
          : frost16.options.onColumnVisibilityChange(knoll16);
      frost16.resetColumnVisibility = (lunar16) => {
        frost16.setColumnVisibility(
          lunar16 ? {} : (frost16.initialState.columnVisibility ?? {}),
        );
      };
      frost16.toggleAllColumnsVisible = (moss16) => {
        moss16 ??= !frost16.getIsAllColumnsVisible();
        frost16.setColumnVisibility(
          frost16.getAllLeafColumns().reduce(
            (accumulator, current) => ({
              ...accumulator,
              [current.id]:
                moss16 || !(current.getCanHide != null && current.getCanHide()),
            }),
            {},
          ),
        );
      };
      frost16.getIsAllColumnsVisible = () =>
        !frost16
          .getAllLeafColumns()
          .some((item) => !(item.getIsVisible != null && item.getIsVisible()));
      frost16.getIsSomeColumnsVisible = () =>
        frost16
          .getAllLeafColumns()
          .some((item) =>
            item.getIsVisible == null ? undefined : item.getIsVisible(),
          );
      frost16.getToggleAllColumnsVisibilityHandler = () => (event) => {
        frost16.toggleAllColumnsVisible(event.target?.checked);
      };
    },
  };
  meadow1 = {
    createTable: (north16) => {
      north16._getGlobalFacetedRowModel =
        north16.options.getFacetedRowModel &&
        north16.options.getFacetedRowModel(north16, "__global__");
      north16.getGlobalFacetedRowModel = () =>
        north16.options.manualFiltering || !north16._getGlobalFacetedRowModel
          ? north16.getPreFilteredRowModel()
          : north16._getGlobalFacetedRowModel();
      north16._getGlobalFacetedUniqueValues =
        north16.options.getFacetedUniqueValues &&
        north16.options.getFacetedUniqueValues(north16, "__global__");
      north16.getGlobalFacetedUniqueValues = () =>
        north16._getGlobalFacetedUniqueValues
          ? north16._getGlobalFacetedUniqueValues()
          : new Map();
      north16._getGlobalFacetedMinMaxValues =
        north16.options.getFacetedMinMaxValues &&
        north16.options.getFacetedMinMaxValues(north16, "__global__");
      north16.getGlobalFacetedMinMaxValues = () => {
        if (north16._getGlobalFacetedMinMaxValues)
          return north16._getGlobalFacetedMinMaxValues();
      };
    },
  };
  nest1 = {
    getInitialState: (orbit16) => ({
      globalFilter: undefined,
      ...orbit16,
    }),
    getDefaultOptions: (pine16) => ({
      onGlobalFilterChange: Flint1("globalFilter", pine16),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (quest16) => {
        var ridge16;
        let storm16 =
          (ridge16 = pine16.getCoreRowModel().flatRows[0]) == null ||
          (ridge16 = ridge16._getAllCellsByColumnId()[quest16.id]) == null
            ? undefined
            : ridge16.getValue();
        return typeof storm16 == "string" || typeof storm16 == "number";
      },
    }),
    createColumn: (tide16, unity16) => {
      tide16.getCanGlobalFilter = () =>
        (tide16.columnDef.enableGlobalFilter ?? true) &&
        (unity16.options.enableGlobalFilter ?? true) &&
        (unity16.options.enableFilters ?? true) &&
        ((unity16.options.getColumnCanGlobalFilter == null
          ? undefined
          : unity16.options.getColumnCanGlobalFilter(tide16)) ??
          true) &&
        !!tide16.accessorFn;
    },
    createTable: (vale16) => {
      vale16.getGlobalAutoFilterFn = () => orbit1.includesString;
      vale16.getGlobalFilterFn = () => {
        let { globalFilterFn } = vale16.options;
        return Garnet1(globalFilterFn)
          ? globalFilterFn
          : globalFilterFn === "auto"
            ? vale16.getGlobalAutoFilterFn()
            : (vale16.options.filterFns?.[globalFilterFn] ??
              orbit1[globalFilterFn]);
      };
      vale16.setGlobalFilter = (wave16) => {
        vale16.options.onGlobalFilterChange == null ||
          vale16.options.onGlobalFilterChange(wave16);
      };
      vale16.resetGlobalFilter = (apex16) => {
        vale16.setGlobalFilter(
          apex16 ? undefined : vale16.initialState.globalFilter,
        );
      };
    },
  };
  oak1 = {
    getInitialState: (brook16) => ({
      expanded: {},
      ...brook16,
    }),
    getDefaultOptions: (cliff16) => ({
      onExpandedChange: Flint1("expanded", cliff16),
      paginateExpandedRows: true,
    }),
    createTable: (dusk16) => {
      let elm16 = false,
        fern16 = false;
      dusk16._autoResetExpanded = () => {
        if (!elm16) {
          dusk16._queue(() => {
            elm16 = true;
          });
          return;
        }
        if (
          dusk16.options.autoResetAll ??
          dusk16.options.autoResetExpanded ??
          !dusk16.options.manualExpanding
        ) {
          if (fern16) return;
          fern16 = true;
          dusk16._queue(() => {
            dusk16.resetExpanded();
            fern16 = false;
          });
        }
      };
      dusk16.setExpanded = (grove16) =>
        dusk16.options.onExpandedChange == null
          ? undefined
          : dusk16.options.onExpandedChange(grove16);
      dusk16.toggleAllRowsExpanded = (hill16) => {
        (hill16 ?? !dusk16.getIsAllRowsExpanded())
          ? dusk16.setExpanded(true)
          : dusk16.setExpanded({});
      };
      dusk16.resetExpanded = (isle16) => {
        dusk16.setExpanded(isle16 ? {} : (dusk16.initialState?.expanded ?? {}));
      };
      dusk16.getCanSomeRowsExpand = () =>
        dusk16
          .getPrePaginationRowModel()
          .flatRows.some((item) => item.getCanExpand());
      dusk16.getToggleAllRowsExpandedHandler = () => (event) => {
        event.persist == null || event.persist();
        dusk16.toggleAllRowsExpanded();
      };
      dusk16.getIsSomeRowsExpanded = () => {
        let juniper16 = dusk16.getState().expanded;
        return juniper16 === true || Object.values(juniper16).some(Boolean);
      };
      dusk16.getIsAllRowsExpanded = () => {
        let lagoon16 = dusk16.getState().expanded;
        return typeof lagoon16 == "boolean"
          ? lagoon16 === true
          : !(
              !Object.keys(lagoon16).length ||
              dusk16
                .getRowModel()
                .flatRows.some((item) => !item.getIsExpanded())
            );
      };
      dusk16.getExpandedDepth = () => {
        let meadow16 = 0;
        return (
          (dusk16.getState().expanded === true
            ? Object.keys(dusk16.getRowModel().rowsById)
            : Object.keys(dusk16.getState().expanded)
          ).forEach((item) => {
            let nest16 = item.split(".");
            meadow16 = Math.max(meadow16, nest16.length);
          }),
          meadow16
        );
      };
      dusk16.getPreExpandedRowModel = () => dusk16.getSortedRowModel();
      dusk16.getExpandedRowModel = () => (
        !dusk16._getExpandedRowModel &&
          dusk16.options.getExpandedRowModel &&
          (dusk16._getExpandedRowModel =
            dusk16.options.getExpandedRowModel(dusk16)),
        dusk16.options.manualExpanding || !dusk16._getExpandedRowModel
          ? dusk16.getPreExpandedRowModel()
          : dusk16._getExpandedRowModel()
      );
    },
    createRow: (oak16, petal16) => {
      oak16.toggleExpanded = (quiet16) => {
        petal16.setExpanded((rain16) => {
          let seed16 =
              rain16 === true ? true : !!(rain16 != null && rain16[oak16.id]),
            trail16 = {};
          if (
            (rain16 === true
              ? Object.keys(petal16.getRowModel().rowsById).forEach((item) => {
                  trail16[item] = true;
                })
              : (trail16 = rain16),
            (quiet16 ??= !seed16),
            !seed16 && quiet16)
          )
            return {
              ...trail16,
              [oak16.id]: true,
            };
          if (seed16 && !quiet16) {
            let { [oak16.id]: urn16, ...rest } = trail16;
            return rest;
          }
          return rain16;
        });
      };
      oak16.getIsExpanded = () => {
        let vine16 = petal16.getState().expanded;
        return !!(
          (petal16.options.getIsRowExpanded == null
            ? undefined
            : petal16.options.getIsRowExpanded(oak16)) ??
          (vine16 === true || vine16?.[oak16.id])
        );
      };
      oak16.getCanExpand = () => {
        var wind16;
        return (
          (petal16.options.getRowCanExpand == null
            ? undefined
            : petal16.options.getRowCanExpand(oak16)) ??
          ((petal16.options.enableExpanding ?? true) &&
            !!((wind16 = oak16.subRows) != null && wind16.length))
        );
      };
      oak16.getIsAllParentsExpanded = () => {
        let yarrow16 = true,
          azure16 = oak16;
        for (; yarrow16 && azure16.parentId; ) {
          azure16 = petal16.getRow(azure16.parentId, true);
          yarrow16 = azure16.getIsExpanded();
        }
        return yarrow16;
      };
      oak16.getToggleExpandedHandler = () => {
        let birch16 = oak16.getCanExpand();
        return () => {
          birch16 && oak16.toggleExpanded();
        };
      };
    },
  };
  return undefined as any;
}

const Flint1: any = undefined;
const Garnet1: any = undefined;
const Ivory1: any = undefined;
const Jasper1: any = undefined;
const Olive1: any = undefined;
const Prism1: any = undefined;
const Quill1: any = undefined;
const Reef1: any = undefined;

function echo2__splitRest1(__splitParams: any) {
  grove1 = {
    getInitialState: (zephyr15) => ({
      columnPinning: fern1(),
      ...zephyr15,
    }),
    getDefaultOptions: (acorn15) => ({
      onColumnPinningChange: Flint1("columnPinning", acorn15),
    }),
    createColumn: (bloom15, coral15) => {
      bloom15.pin = (drift15) => {
        let eagle15 = bloom15
          .getLeafColumns()
          .map((item) => item.id)
          .filter(Boolean);
        coral15.setColumnPinning((frost15) =>
          drift15 === "right"
            ? {
                left: (frost15?.left ?? []).filter(
                  (item) => !(eagle15 != null && eagle15.includes(item)),
                ),
                right: [
                  ...(frost15?.right ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                  ...eagle15,
                ],
              }
            : drift15 === "left"
              ? {
                  left: [
                    ...(frost15?.left ?? []).filter(
                      (item) => !(eagle15 != null && eagle15.includes(item)),
                    ),
                    ...eagle15,
                  ],
                  right: (frost15?.right ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                }
              : {
                  left: (frost15?.left ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                  right: (frost15?.right ?? []).filter(
                    (item) => !(eagle15 != null && eagle15.includes(item)),
                  ),
                },
        );
      };
      bloom15.getCanPin = () =>
        bloom15
          .getLeafColumns()
          .some(
            (item) =>
              (item.columnDef.enablePinning ?? true) &&
              (coral15.options.enableColumnPinning ??
                coral15.options.enablePinning ??
                true),
          );
      bloom15.getIsPinned = () => {
        let glide15 = bloom15.getLeafColumns().map((item) => item.id),
          { left, right } = coral15.getState().columnPinning,
          honey15 = glide15.some((item) => left?.includes(item)),
          iris15 = glide15.some((item) => right?.includes(item));
        return honey15 ? "left" : iris15 ? "right" : false;
      };
      bloom15.getPinnedIndex = () => {
        var jewel15;
        let knoll15 = bloom15.getIsPinned();
        return knoll15
          ? (((jewel15 = coral15.getState().columnPinning) == null ||
            (jewel15 = jewel15[knoll15]) == null
              ? undefined
              : jewel15.indexOf(bloom15.id)) ?? -1)
          : 0;
      };
    },
    createRow: (lunar15, moss15) => {
      lunar15.getCenterVisibleCells = Ivory1(
        () => [
          lunar15._getAllVisibleCells(),
          moss15.getState().columnPinning.left,
          moss15.getState().columnPinning.right,
        ],
        (north15, orbit15, pine15) => {
          let quest15 = [...(orbit15 ?? []), ...(pine15 ?? [])];
          return north15.filter((item) => !quest15.includes(item.column.id));
        },
        Jasper1(moss15.options, "debugRows", "getCenterVisibleCells"),
      );
      lunar15.getLeftVisibleCells = Ivory1(
        () => [
          lunar15._getAllVisibleCells(),
          moss15.getState().columnPinning.left,
        ],
        (ridge15, storm15) =>
          (storm15 ?? [])
            .map((item) => ridge15.find((_item) => _item.column.id === item))
            .filter(Boolean)
            .map((item) => ({
              ...item,
              position: "left",
            })),
        Jasper1(moss15.options, "debugRows", "getLeftVisibleCells"),
      );
      lunar15.getRightVisibleCells = Ivory1(
        () => [
          lunar15._getAllVisibleCells(),
          moss15.getState().columnPinning.right,
        ],
        (tide15, unity15) =>
          (unity15 ?? [])
            .map((item) => tide15.find((_item) => _item.column.id === item))
            .filter(Boolean)
            .map((item) => ({
              ...item,
              position: "right",
            })),
        Jasper1(moss15.options, "debugRows", "getRightVisibleCells"),
      );
    },
    createTable: (vale15) => {
      vale15.setColumnPinning = (wave15) =>
        vale15.options.onColumnPinningChange == null
          ? undefined
          : vale15.options.onColumnPinningChange(wave15);
      vale15.resetColumnPinning = (apex15) =>
        vale15.setColumnPinning(
          apex15 ? fern1() : (vale15.initialState?.columnPinning ?? fern1()),
        );
      vale15.getIsSomeColumnsPinned = (brook15) => {
        let cliff15 = vale15.getState().columnPinning;
        return brook15
          ? !!cliff15[brook15]?.length
          : !!(cliff15.left?.length || cliff15.right?.length);
      };
      vale15.getLeftLeafColumns = Ivory1(
        () => [
          vale15.getAllLeafColumns(),
          vale15.getState().columnPinning.left,
        ],
        (dusk15, elm15) =>
          (elm15 ?? [])
            .map((item) => dusk15.find((_item) => _item.id === item))
            .filter(Boolean),
        Jasper1(vale15.options, "debugColumns", "getLeftLeafColumns"),
      );
      vale15.getRightLeafColumns = Ivory1(
        () => [
          vale15.getAllLeafColumns(),
          vale15.getState().columnPinning.right,
        ],
        (fern15, grove15) =>
          (grove15 ?? [])
            .map((item) => fern15.find((_item) => _item.id === item))
            .filter(Boolean),
        Jasper1(vale15.options, "debugColumns", "getRightLeafColumns"),
      );
      vale15.getCenterLeafColumns = Ivory1(
        () => [
          vale15.getAllLeafColumns(),
          vale15.getState().columnPinning.left,
          vale15.getState().columnPinning.right,
        ],
        (hill15, isle15, juniper15) => {
          let lagoon15 = [...(isle15 ?? []), ...(juniper15 ?? [])];
          return hill15.filter((item) => !lagoon15.includes(item.id));
        },
        Jasper1(vale15.options, "debugColumns", "getCenterLeafColumns"),
      );
    },
  };
  hill1 = {
    size: 150,
    minSize: 20,
    maxSize: 9007199254740991,
  };
  $s = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: [],
  });
  isle1 = {
    getDefaultColumnDef: () => hill1,
    getInitialState: (meadow15) => ({
      columnSizing: {},
      columnSizingInfo: $s(),
      ...meadow15,
    }),
    getDefaultOptions: (nest15) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Flint1("columnSizing", nest15),
      onColumnSizingInfoChange: Flint1("columnSizingInfo", nest15),
    }),
    createColumn: (oak15, petal15) => {
      oak15.getSize = () => {
        let quiet15 = petal15.getState().columnSizing[oak15.id];
        return Math.min(
          Math.max(
            oak15.columnDef.minSize ?? hill1.minSize,
            quiet15 ?? oak15.columnDef.size ?? hill1.size,
          ),
          oak15.columnDef.maxSize ?? hill1.maxSize,
        );
      };
      oak15.getStart = Ivory1(
        (rain15) => [
          rain15,
          Reef1(petal15, rain15),
          petal15.getState().columnSizing,
        ],
        (seed15, trail15) =>
          trail15
            .slice(0, oak15.getIndex(seed15))
            .reduce(
              (accumulator, current) => accumulator + current.getSize(),
              0,
            ),
        Jasper1(petal15.options, "debugColumns", "getStart"),
      );
      oak15.getAfter = Ivory1(
        (urn15) => [
          urn15,
          Reef1(petal15, urn15),
          petal15.getState().columnSizing,
        ],
        (vine15, wind15) =>
          wind15
            .slice(oak15.getIndex(vine15) + 1)
            .reduce(
              (accumulator, current) => accumulator + current.getSize(),
              0,
            ),
        Jasper1(petal15.options, "debugColumns", "getAfter"),
      );
      oak15.resetSize = () => {
        petal15.setColumnSizing((yarrow15) => {
          let { [oak15.id]: azure15, ...rest } = yarrow15;
          return rest;
        });
      };
      oak15.getCanResize = () =>
        (oak15.columnDef.enableResizing ?? true) &&
        (petal15.options.enableColumnResizing ?? true);
      oak15.getIsResizing = () =>
        petal15.getState().columnSizingInfo.isResizingColumn === oak15.id;
    },
    createHeader: (birch15, canyon15) => {
      birch15.getSize = () => {
        let dew15 = 0,
          alpha16 = (bravo16) => {
            bravo16.subHeaders.length
              ? bravo16.subHeaders.forEach(alpha16)
              : (dew15 += bravo16.column.getSize() ?? 0);
          };
        return (alpha16(birch15), dew15);
      };
      birch15.getStart = () => {
        if (birch15.index > 0) {
          let copper16 = birch15.headerGroup.headers[birch15.index - 1];
          return copper16.getStart() + copper16.getSize();
        }
        return 0;
      };
      birch15.getResizeHandler = (delta16) => {
        let echo16 = canyon15.getColumn(birch15.column.id),
          falcon16 = echo16?.getCanResize();
        return (event) => {
          if (
            !echo16 ||
            !falcon16 ||
            (event.persist == null || event.persist(),
            Quill1(event) && event.touches && event.touches.length > 1)
          )
            return;
          let gamma16 = birch15.getSize(),
            harbor16 = birch15
              ? birch15
                  .getLeafHeaders()
                  .map((item) => [item.column.id, item.column.getSize()])
              : [[echo16.id, echo16.getSize()]],
            indigo16 = Quill1(event)
              ? Math.round(event.touches[0].clientX)
              : event.clientX,
            jade16 = {},
            kite16 = (river16, slate16) => {
              typeof slate16 == "number" &&
                (canyon15.setColumnSizingInfo((timber16) => {
                  let umbra16 =
                      canyon15.options.columnResizeDirection === "rtl" ? -1 : 1,
                    violet16 =
                      (slate16 - (timber16?.startOffset ?? 0)) * umbra16,
                    willow16 = Math.max(
                      violet16 / (timber16?.startSize ?? 0),
                      -0.999999,
                    );
                  return (
                    timber16.columnSizingStart.forEach((item) => {
                      let [xenon16, yellow16] = item;
                      jade16[xenon16] =
                        Math.round(
                          Math.max(yellow16 + yellow16 * willow16, 0) * 100,
                        ) / 100;
                    }),
                    {
                      ...timber16,
                      deltaOffset: violet16,
                      deltaPercentage: willow16,
                    }
                  );
                }),
                (canyon15.options.columnResizeMode === "onChange" ||
                  river16 === "end") &&
                  canyon15.setColumnSizing((zinc16) => ({
                    ...zinc16,
                    ...jade16,
                  })));
            },
            lemon16 = (amber16) => kite16("move", amber16),
            marble16 = (basalt16) => {
              kite16("end", basalt16);
              canyon15.setColumnSizingInfo((cedar16) => ({
                ...cedar16,
                isResizingColumn: false,
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                columnSizingStart: [],
              }));
            },
            nickel16 = Olive1(delta16),
            onyx16 = {
              moveHandler: (_event) => lemon16(_event.clientX),
              upHandler: (_event) => {
                nickel16?.removeEventListener("mousemove", onyx16.moveHandler);
                nickel16?.removeEventListener("mouseup", onyx16.upHandler);
                marble16(_event.clientX);
              },
            },
            pearl16 = {
              moveHandler: (_event) => (
                _event.cancelable &&
                  (_event.preventDefault(), _event.stopPropagation()),
                lemon16(_event.touches[0].clientX),
                false
              ),
              upHandler: (_event) => {
                nickel16?.removeEventListener("touchmove", pearl16.moveHandler);
                nickel16?.removeEventListener("touchend", pearl16.upHandler);
                _event.cancelable &&
                  (_event.preventDefault(), _event.stopPropagation());
                marble16(_event.touches[0]?.clientX);
              },
            },
            quartz16 = Prism1()
              ? {
                  passive: false,
                }
              : false;
          Quill1(event)
            ? (nickel16?.addEventListener(
                "touchmove",
                pearl16.moveHandler,
                quartz16,
              ),
              nickel16?.addEventListener(
                "touchend",
                pearl16.upHandler,
                quartz16,
              ))
            : (nickel16?.addEventListener(
                "mousemove",
                onyx16.moveHandler,
                quartz16,
              ),
              nickel16?.addEventListener(
                "mouseup",
                onyx16.upHandler,
                quartz16,
              ));
          canyon15.setColumnSizingInfo((daisy16) => ({
            ...daisy16,
            startOffset: indigo16,
            startSize: gamma16,
            deltaOffset: 0,
            deltaPercentage: 0,
            columnSizingStart: harbor16,
            isResizingColumn: echo16.id,
          }));
        };
      };
    },
    createTable: (ember16) => {
      ember16.setColumnSizing = (flint16) =>
        ember16.options.onColumnSizingChange == null
          ? undefined
          : ember16.options.onColumnSizingChange(flint16);
      ember16.setColumnSizingInfo = (garnet16) =>
        ember16.options.onColumnSizingInfoChange == null
          ? undefined
          : ember16.options.onColumnSizingInfoChange(garnet16);
      ember16.resetColumnSizing = (hazel16) => {
        ember16.setColumnSizing(
          hazel16 ? {} : (ember16.initialState.columnSizing ?? {}),
        );
      };
      ember16.resetHeaderSizeInfo = (ivory16) => {
        ember16.setColumnSizingInfo(
          ivory16 ? $s() : (ember16.initialState.columnSizingInfo ?? $s()),
        );
      };
      ember16.getTotalSize = () =>
        ember16
          .getHeaderGroups()[0]
          ?.headers.reduce(
            (jasper16, kelp16) => jasper16 + kelp16.getSize(),
            0,
          ) ?? 0;
      ember16.getLeftTotalSize = () =>
        ember16
          .getLeftHeaderGroups()[0]
          ?.headers.reduce(
            (lotus16, mint16) => lotus16 + mint16.getSize(),
            0,
          ) ?? 0;
      ember16.getCenterTotalSize = () =>
        ember16
          .getCenterHeaderGroups()[0]
          ?.headers.reduce(
            (nova16, olive16) => nova16 + olive16.getSize(),
            0,
          ) ?? 0;
      ember16.getRightTotalSize = () =>
        ember16
          .getRightHeaderGroups()[0]
          ?.headers.reduce(
            (prism16, quill16) => prism16 + quill16.getSize(),
            0,
          ) ?? 0;
    },
  };
  juniper1 = null;
  lagoon1 = {
    getInitialState: (reef16) => ({
      columnVisibility: {},
      ...reef16,
    }),
    getDefaultOptions: (sage16) => ({
      onColumnVisibilityChange: Flint1("columnVisibility", sage16),
    }),
    createColumn: (topaz16, ultra16) => {
      topaz16.toggleVisibility = (vapor16) => {
        topaz16.getCanHide() &&
          ultra16.setColumnVisibility((wheat16) => ({
            ...wheat16,
            [topaz16.id]: vapor16 ?? !topaz16.getIsVisible(),
          }));
      };
      topaz16.getIsVisible = () => {
        let yarn16 = topaz16.columns;
        return (
          (yarn16.length
            ? yarn16.some((item) => item.getIsVisible())
            : ultra16.getState().columnVisibility?.[topaz16.id]) ?? true
        );
      };
      topaz16.getCanHide = () =>
        (topaz16.columnDef.enableHiding ?? true) &&
        (ultra16.options.enableHiding ?? true);
      topaz16.getToggleVisibilityHandler = () => (event) => {
        topaz16.toggleVisibility == null ||
          topaz16.toggleVisibility(event.target.checked);
      };
    },
    createRow: (zephyr16, acorn16) => {
      zephyr16._getAllVisibleCells = Ivory1(
        () => [zephyr16.getAllCells(), acorn16.getState().columnVisibility],
        (bloom16) => bloom16.filter((item) => item.column.getIsVisible()),
        Jasper1(acorn16.options, "debugRows", "_getAllVisibleCells"),
      );
      zephyr16.getVisibleCells = Ivory1(
        () => [
          zephyr16.getLeftVisibleCells(),
          zephyr16.getCenterVisibleCells(),
          zephyr16.getRightVisibleCells(),
        ],
        (coral16, drift16, eagle16) => [...coral16, ...drift16, ...eagle16],
        Jasper1(acorn16.options, "debugRows", "getVisibleCells"),
      );
    },
    createTable: (frost16) => {
      let glide16 = (honey16, iris16) =>
        Ivory1(
          () => [
            iris16(),
            iris16()
              .filter((item) => item.getIsVisible())
              .map((item) => item.id)
              .join("_"),
          ],
          (jewel16) =>
            jewel16.filter((item) =>
              item.getIsVisible == null ? undefined : item.getIsVisible(),
            ),
          Jasper1(frost16.options, "debugColumns", honey16),
        );
      frost16.getVisibleFlatColumns = glide16("getVisibleFlatColumns", () =>
        frost16.getAllFlatColumns(),
      );
      frost16.getVisibleLeafColumns = glide16("getVisibleLeafColumns", () =>
        frost16.getAllLeafColumns(),
      );
      frost16.getLeftVisibleLeafColumns = glide16(
        "getLeftVisibleLeafColumns",
        () => frost16.getLeftLeafColumns(),
      );
      frost16.getRightVisibleLeafColumns = glide16(
        "getRightVisibleLeafColumns",
        () => frost16.getRightLeafColumns(),
      );
      frost16.getCenterVisibleLeafColumns = glide16(
        "getCenterVisibleLeafColumns",
        () => frost16.getCenterLeafColumns(),
      );
      frost16.setColumnVisibility = (knoll16) =>
        frost16.options.onColumnVisibilityChange == null
          ? undefined
          : frost16.options.onColumnVisibilityChange(knoll16);
      frost16.resetColumnVisibility = (lunar16) => {
        frost16.setColumnVisibility(
          lunar16 ? {} : (frost16.initialState.columnVisibility ?? {}),
        );
      };
      frost16.toggleAllColumnsVisible = (moss16) => {
        moss16 ??= !frost16.getIsAllColumnsVisible();
        frost16.setColumnVisibility(
          frost16.getAllLeafColumns().reduce(
            (accumulator, current) => ({
              ...accumulator,
              [current.id]:
                moss16 || !(current.getCanHide != null && current.getCanHide()),
            }),
            {},
          ),
        );
      };
      frost16.getIsAllColumnsVisible = () =>
        !frost16
          .getAllLeafColumns()
          .some((item) => !(item.getIsVisible != null && item.getIsVisible()));
      frost16.getIsSomeColumnsVisible = () =>
        frost16
          .getAllLeafColumns()
          .some((item) =>
            item.getIsVisible == null ? undefined : item.getIsVisible(),
          );
      frost16.getToggleAllColumnsVisibilityHandler = () => (event) => {
        frost16.toggleAllColumnsVisible(event.target?.checked);
      };
    },
  };
  meadow1 = {
    createTable: (north16) => {
      north16._getGlobalFacetedRowModel =
        north16.options.getFacetedRowModel &&
        north16.options.getFacetedRowModel(north16, "__global__");
      north16.getGlobalFacetedRowModel = () =>
        north16.options.manualFiltering || !north16._getGlobalFacetedRowModel
          ? north16.getPreFilteredRowModel()
          : north16._getGlobalFacetedRowModel();
      north16._getGlobalFacetedUniqueValues =
        north16.options.getFacetedUniqueValues &&
        north16.options.getFacetedUniqueValues(north16, "__global__");
      north16.getGlobalFacetedUniqueValues = () =>
        north16._getGlobalFacetedUniqueValues
          ? north16._getGlobalFacetedUniqueValues()
          : new Map();
      north16._getGlobalFacetedMinMaxValues =
        north16.options.getFacetedMinMaxValues &&
        north16.options.getFacetedMinMaxValues(north16, "__global__");
      north16.getGlobalFacetedMinMaxValues = () => {
        if (north16._getGlobalFacetedMinMaxValues)
          return north16._getGlobalFacetedMinMaxValues();
      };
    },
  };
  nest1 = {
    getInitialState: (orbit16) => ({
      globalFilter: undefined,
      ...orbit16,
    }),
    getDefaultOptions: (pine16) => ({
      onGlobalFilterChange: Flint1("globalFilter", pine16),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (quest16) => {
        var ridge16;
        let storm16 =
          (ridge16 = pine16.getCoreRowModel().flatRows[0]) == null ||
          (ridge16 = ridge16._getAllCellsByColumnId()[quest16.id]) == null
            ? undefined
            : ridge16.getValue();
        return typeof storm16 == "string" || typeof storm16 == "number";
      },
    }),
    createColumn: (tide16, unity16) => {
      tide16.getCanGlobalFilter = () =>
        (tide16.columnDef.enableGlobalFilter ?? true) &&
        (unity16.options.enableGlobalFilter ?? true) &&
        (unity16.options.enableFilters ?? true) &&
        ((unity16.options.getColumnCanGlobalFilter == null
          ? undefined
          : unity16.options.getColumnCanGlobalFilter(tide16)) ??
          true) &&
        !!tide16.accessorFn;
    },
    createTable: (vale16) => {
      vale16.getGlobalAutoFilterFn = () => orbit1.includesString;
      vale16.getGlobalFilterFn = () => {
        let { globalFilterFn } = vale16.options;
        return Garnet1(globalFilterFn)
          ? globalFilterFn
          : globalFilterFn === "auto"
            ? vale16.getGlobalAutoFilterFn()
            : (vale16.options.filterFns?.[globalFilterFn] ??
              orbit1[globalFilterFn]);
      };
      vale16.setGlobalFilter = (wave16) => {
        vale16.options.onGlobalFilterChange == null ||
          vale16.options.onGlobalFilterChange(wave16);
      };
      vale16.resetGlobalFilter = (apex16) => {
        vale16.setGlobalFilter(
          apex16 ? undefined : vale16.initialState.globalFilter,
        );
      };
    },
  };
  oak1 = {
    getInitialState: (brook16) => ({
      expanded: {},
      ...brook16,
    }),
    getDefaultOptions: (cliff16) => ({
      onExpandedChange: Flint1("expanded", cliff16),
      paginateExpandedRows: true,
    }),
    createTable: (dusk16) => {
      let elm16 = false,
        fern16 = false;
      dusk16._autoResetExpanded = () => {
        if (!elm16) {
          dusk16._queue(() => {
            elm16 = true;
          });
          return;
        }
        if (
          dusk16.options.autoResetAll ??
          dusk16.options.autoResetExpanded ??
          !dusk16.options.manualExpanding
        ) {
          if (fern16) return;
          fern16 = true;
          dusk16._queue(() => {
            dusk16.resetExpanded();
            fern16 = false;
          });
        }
      };
      dusk16.setExpanded = (grove16) =>
        dusk16.options.onExpandedChange == null
          ? undefined
          : dusk16.options.onExpandedChange(grove16);
      dusk16.toggleAllRowsExpanded = (hill16) => {
        (hill16 ?? !dusk16.getIsAllRowsExpanded())
          ? dusk16.setExpanded(true)
          : dusk16.setExpanded({});
      };
      dusk16.resetExpanded = (isle16) => {
        dusk16.setExpanded(isle16 ? {} : (dusk16.initialState?.expanded ?? {}));
      };
      dusk16.getCanSomeRowsExpand = () =>
        dusk16
          .getPrePaginationRowModel()
          .flatRows.some((item) => item.getCanExpand());
      dusk16.getToggleAllRowsExpandedHandler = () => (event) => {
        event.persist == null || event.persist();
        dusk16.toggleAllRowsExpanded();
      };
      dusk16.getIsSomeRowsExpanded = () => {
        let juniper16 = dusk16.getState().expanded;
        return juniper16 === true || Object.values(juniper16).some(Boolean);
      };
      dusk16.getIsAllRowsExpanded = () => {
        let lagoon16 = dusk16.getState().expanded;
        return typeof lagoon16 == "boolean"
          ? lagoon16 === true
          : !(
              !Object.keys(lagoon16).length ||
              dusk16
                .getRowModel()
                .flatRows.some((item) => !item.getIsExpanded())
            );
      };
      dusk16.getExpandedDepth = () => {
        let meadow16 = 0;
        return (
          (dusk16.getState().expanded === true
            ? Object.keys(dusk16.getRowModel().rowsById)
            : Object.keys(dusk16.getState().expanded)
          ).forEach((item) => {
            let nest16 = item.split(".");
            meadow16 = Math.max(meadow16, nest16.length);
          }),
          meadow16
        );
      };
      dusk16.getPreExpandedRowModel = () => dusk16.getSortedRowModel();
      dusk16.getExpandedRowModel = () => (
        !dusk16._getExpandedRowModel &&
          dusk16.options.getExpandedRowModel &&
          (dusk16._getExpandedRowModel =
            dusk16.options.getExpandedRowModel(dusk16)),
        dusk16.options.manualExpanding || !dusk16._getExpandedRowModel
          ? dusk16.getPreExpandedRowModel()
          : dusk16._getExpandedRowModel()
      );
    },
    createRow: (oak16, petal16) => {
      oak16.toggleExpanded = (quiet16) => {
        petal16.setExpanded((rain16) => {
          let seed16 =
              rain16 === true ? true : !!(rain16 != null && rain16[oak16.id]),
            trail16 = {};
          if (
            (rain16 === true
              ? Object.keys(petal16.getRowModel().rowsById).forEach((item) => {
                  trail16[item] = true;
                })
              : (trail16 = rain16),
            (quiet16 ??= !seed16),
            !seed16 && quiet16)
          )
            return {
              ...trail16,
              [oak16.id]: true,
            };
          if (seed16 && !quiet16) {
            let { [oak16.id]: urn16, ...rest } = trail16;
            return rest;
          }
          return rain16;
        });
      };
      oak16.getIsExpanded = () => {
        let vine16 = petal16.getState().expanded;
        return !!(
          (petal16.options.getIsRowExpanded == null
            ? undefined
            : petal16.options.getIsRowExpanded(oak16)) ??
          (vine16 === true || vine16?.[oak16.id])
        );
      };
      oak16.getCanExpand = () => {
        var wind16;
        return (
          (petal16.options.getRowCanExpand == null
            ? undefined
            : petal16.options.getRowCanExpand(oak16)) ??
          ((petal16.options.enableExpanding ?? true) &&
            !!((wind16 = oak16.subRows) != null && wind16.length))
        );
      };
      oak16.getIsAllParentsExpanded = () => {
        let yarrow16 = true,
          azure16 = oak16;
        for (; yarrow16 && azure16.parentId; ) {
          azure16 = petal16.getRow(azure16.parentId, true);
          yarrow16 = azure16.getIsExpanded();
        }
        return yarrow16;
      };
      oak16.getToggleExpandedHandler = () => {
        let birch16 = oak16.getCanExpand();
        return () => {
          birch16 && oak16.toggleExpanded();
        };
      };
    },
  };
  return undefined as any;
}
