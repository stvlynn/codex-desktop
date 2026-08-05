// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 12/17
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

// Wave5d soft JSX companions.
function Base64(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Coral1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Daisy1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Drift1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Eagle1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Falcon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Falcon2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Kite2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Lemon2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const Vapor3: any = undefined;
const coral3: any = undefined;
const deferredUiXT: any = undefined;
const eagle3: any = undefined;
const falcon: any = undefined;
const frost3: any = undefined;
const glide3: any = undefined;
const honey3: any = undefined;
const knoll3: any = undefined;

var _u,
  bravo3,
  copper3,
  delta3,
  echo3,
  falcon3,
  gamma3,
  harbor3,
  indigo3,
  jade3,
  kite3 = esmInit(() => {
    _u = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    bravo3 = commonJsInit(react(), 1);
    ensureDropdownMenuInit();
    AppInitialBC();
    ensureAppIconSftInit();
    ensureAppScopeInit();
    falcon();
    delta3 = "debug-maitai-section";
    echo3 = ["all", "family", "signal", "derived", "query", "mutation"];
    falcon3 = 50;
    gamma3 = 3;
    harbor3 = 12;
    indigo3 = 4;
    jade3 = 180;
  });
function Lemon3(marble22) {
  let nickel22 = Marble3(marble22);
  return nickel22.totalCount === 0
    ? {
        lines: [
          {
            label: "status",
            value: "No Node REPL tool calls for this thread",
          },
        ],
      }
    : {
        lines: [
          {
            label: "toolCallCount",
            value: String(nickel22.totalCount),
          },
          {
            label: "inProgressCount",
            value: String(nickel22.inProgressCount),
          },
          {
            label: "completedCount",
            value: String(nickel22.completedCount),
          },
          {
            label: "failedCount",
            value: String(nickel22.failedCount),
          },
          {
            label: "showing",
            value: `${nickel22.recentCalls.length} of ${nickel22.totalCount} most recent`,
          },
          ...nickel22.recentCalls.flatMap((item, index) => Onyx3(item, index)),
        ],
      };
}
function Marble3(onyx22) {
  let pearl22 = [],
    quartz22 = 0,
    river22 = 0,
    slate22 = 0,
    timber22 = 0;
  for (let umbra22 of onyx22)
    for (let violet22 of umbra22.items)
      Nickel3(violet22) &&
        ((timber22 += 1),
        violet22.status === "completed"
          ? (quartz22 += 1)
          : violet22.status === "failed"
            ? (river22 += 1)
            : violet22.status === "inProgress" && (slate22 += 1),
        pearl22.push({
          conversationId: umbra22.conversationId ?? null,
          item: violet22,
          turnId: umbra22.turnId,
        }),
        pearl22.length > cedar3 && pearl22.shift());
  return (
    pearl22.reverse(),
    {
      completedCount: quartz22,
      failedCount: river22,
      inProgressCount: slate22,
      recentCalls: pearl22,
      totalCount: timber22,
    }
  );
}
function Nickel3(willow22) {
  return willow22.type === "mcpToolCall" && willow22.server === garnet3;
}
function Onyx3({ conversationId, item, turnId }, xenon22) {
  let yellow22 = [
    {
      label: `call[${xenon22}]`,
      value:
        item.durationMs == null
          ? `${item.tool}: ${item.status}`
          : `${item.tool}: ${item.status}, ${item.durationMs}ms`,
    },
    {
      label: `call[${xenon22}].id`,
      value: item.id,
    },
    ...Yellow3(item.arguments, xenon22),
  ];
  return (
    conversationId != null &&
      yellow22.push({
        label: `call[${xenon22}].threadId`,
        value: conversationId,
      }),
    yellow22.push({
      label: `call[${xenon22}].turnId`,
      value: turnId ?? "none",
    }),
    item.error != null &&
      yellow22.push({
        label: `call[${xenon22}].error`,
        value: item.error.message,
      }),
    item.result != null &&
      (yellow22.push(...River3(item.result, xenon22)),
      yellow22.push({
        kind: "json",
        label: `call[${xenon22}].result`,
        value: Pearl3(item.result, ember3),
      })),
    yellow22
  );
}
function Pearl3(zinc22, amber22 = daisy3) {
  return Basalt3(JSON.stringify(zinc22, Quartz3, 2) ?? String(zinc22), amber22);
}
function Quartz3(basalt22, cedar22) {
  return basalt22 === "data" && typeof cedar22 == "string" && Violet3(this)
    ? `<Base64 image data: ${cedar22.length} chars>`
    : cedar22;
}
function River3(daisy22, ember22) {
  let flint22 = Slate3(daisy22);
  return flint22 == null
    ? []
    : flint22.flatMap((item, index) => {
        let garnet22 = Timber3(item);
        if (garnet22 != null)
          return [
            {
              kind: "multiline",
              label: `call[${ember22}].result.content[${index}]`,
              value: Basalt3(garnet22, flint3),
            },
          ];
        let hazel22 = Umbra3(item);
        return hazel22 == null
          ? []
          : [
              {
                kind: "image",
                data: hazel22.data,
                label: `call[${ember22}].result.content[${index}]`,
                mimeType: hazel22.mimeType,
                src: hazel22.src,
              },
            ];
      });
}
function Slate3(ivory22) {
  if (typeof ivory22 != "object" || !ivory22) return null;
  let jasper22 = ivory22.content;
  return Array.isArray(jasper22) ? jasper22 : null;
}
function Timber3(kelp22) {
  let lotus22 = ivory3.safeParse(kelp22);
  return lotus22.success ? lotus22.data.text : null;
}
function Umbra3(mint22) {
  let nova22 = hazel3.safeParse(mint22);
  if (!nova22.success) return null;
  let olive22 = nova22.data.data.trim();
  if (olive22.startsWith("data:image/")) {
    let quill22 = Willow3(olive22);
    return quill22 == null
      ? null
      : {
          data: olive22,
          mimeType: quill22,
          src: olive22,
        };
  }
  let prism22 =
    nova22.data.mimeType ?? nova22.data.mime_type ?? Xenon3(olive22);
  return prism22.startsWith("image/")
    ? {
        data: olive22,
        mimeType: prism22,
      }
    : null;
}
function Violet3(reef22) {
  return hazel3.safeParse(reef22).success;
}
function Willow3(sage22) {
  return /^data:(image\/[a-z0-9.+-]+);base64,/iu.exec(sage22)?.[1] ?? null;
}
function Xenon3(topaz22) {
  return topaz22.startsWith("iVBOR")
    ? "image/png"
    : topaz22.startsWith("/9j/")
      ? "image/jpeg"
      : topaz22.startsWith("R0lGOD")
        ? "image/gif"
        : topaz22.startsWith("UklGR")
          ? "image/webp"
          : topaz22.startsWith("PHN2Zy")
            ? "image/svg+xml"
            : "image/png";
}
function Yellow3(ultra22, vapor22) {
  let wheat22 = Zinc3(ultra22);
  if (wheat22 == null)
    return [
      {
        label: `call[${vapor22}].arguments`,
        value: Pearl3(ultra22),
      },
    ];
  let yarn22 = [];
  return (
    wheat22.title != null &&
      yarn22.push({
        label: `call[${vapor22}].title`,
        value: wheat22.title,
      }),
    wheat22.timeoutMs != null &&
      yarn22.push({
        label: `call[${vapor22}].timeoutMs`,
        value: String(wheat22.timeoutMs),
      }),
    yarn22.push({
      kind: "javascript",
      label: `call[${vapor22}].script`,
      value: Amber3(wheat22.code),
    }),
    Object.keys(wheat22.extraArguments).length > 0 &&
      yarn22.push({
        label: `call[${vapor22}].arguments`,
        value: Pearl3(wheat22.extraArguments),
      }),
    yarn22
  );
}
function Zinc3(zephyr22) {
  let acorn22 = jasper3.safeParse(zephyr22);
  if (!acorn22.success) return null;
  let { code, timeout_ms, title, ...rest } = acorn22.data;
  return {
    code,
    extraArguments: rest,
    timeoutMs: typeof timeout_ms == "number" ? timeout_ms : null,
    title: typeof title == "string" ? title : null,
  };
}
function Amber3(bloom22) {
  return Basalt3(
    bloom22.replaceAll("\r\n", "\n").replaceAll("\r", "\n").trim(),
    flint3,
  );
}
function Basalt3(coral22, drift22 = daisy3) {
  return coral22.length <= drift22
    ? coral22
    : `${coral22.slice(0, drift22)}… (${coral22.length} chars)`;
}
var cedar3,
  daisy3,
  ember3,
  flint3,
  garnet3,
  hazel3,
  ivory3,
  jasper3,
  kelp3 = esmInit(() => {
    coalesceTruthy();
    cedar3 = 8;
    daisy3 = 1200;
    ember3 = 8e3;
    flint3 = 12e3;
    garnet3 = "node_repl";
    hazel3 = deferredUiXT({
      type: sortedArrayFrom("image"),
      data: coalesceTruthy(),
      mimeType: coalesceTruthy().optional(),
      mime_type: coalesceTruthy().optional(),
    }).catchall(siteAnalyticsPath());
    ivory3 = deferredUiXT({
      type: sortedArrayFrom("text"),
      text: coalesceTruthy(),
    }).catchall(siteAnalyticsPath());
    jasper3 = deferredUiXT({
      code: coalesceTruthy(),
      timeout_ms: siteAnalyticsPath().optional(),
      title: siteAnalyticsPath().optional(),
    }).catchall(siteAnalyticsPath());
  });
function $u(eagle22) {
  let { conversationId } = eagle22;
  if (conversationId != null) {
    let frost22;
    return (
      <Daisy1
        {...{
          conversationId,
        }}
      />
    );
  }
  return <Coral1 {...{}} />;
}
function Lotus3() {
  let glide22 = CodexPluginActionResult(knoll3);
  return (
    <Drift1
      {...{
        lines: glide22.lines,
      }}
    />
  );
}
function Mint3(honey22) {
  let { conversationId } = honey22,
    iris22 =
      CodexBrowserSurfaceActionType(MCP_SERVERS_STATUS_PATH, conversationId) ??
      eagle3,
    jewel22;
  {
    let lunar22;
    lunar22 = (moss22) => ({
      conversationId,
      items: moss22.items,
      turnId: moss22.turnId,
    });
    jewel22 = Lemon3(iris22.map(lunar22));
  }
  let knoll22 = jewel22;
  return (
    <Drift1
      {...{
        lines: knoll22.lines,
      }}
    />
  );
}
function Nova3(north22) {
  let { lines } = north22;
  return (
    <Copper
      {...{
        storageKey: "debug-node-repl-section",
        title: "Node REPL",
        variant: "global",
        unmountChildrenWhenClosed: true,
        children: (
          <Eagle1
            {...{
              lines,
            }}
          />
        ),
      }}
    />
  );
}
function Olive3({ lines }) {
  let orbit22 = coral3.useMemo(
      () =>
        lines.map((item, index) => ({
          estimatedHeightPx: frost3,
          line: item,
          turnKey: `${index}:${item.label}`,
        })),
      [lines],
    ),
    [pine22, quest22] = coral3.useState({}),
    [ridge22, storm22] = coral3.useState(null),
    [tide22, unity22] = coral3.useState(() => Quill3(orbit22.length)),
    vale22 = coral3.useRef(null),
    wave22 = coral3.useRef(pine22),
    apex22 = buildThreadVirtualizerLayout({
      entries: orbit22,
      gapPx: 0,
      measuredHeightsByKey: pine22,
    });
  wave22.current = pine22;
  let brook22 = useEventCallback(() => {
      if (orbit22.length === 0 || ridge22 == null) {
        unity22({
          startIndex: 0,
          endIndex: 0,
        });
        return;
      }
      let hill22 = Topaz3(ridge22);
      if (hill22 == null) {
        unity22((petal22) => {
          let quiet22 = Quill3(orbit22.length);
          return Sage3(petal22, quiet22) ? petal22 : quiet22;
        });
        return;
      }
      let isle22 = ridge22.getBoundingClientRect(),
        juniper22 = hill22.getBoundingClientRect(),
        lagoon22 = isle22.top - juniper22.top + hill22.scrollTop,
        meadow22 = hill22.scrollTop - lagoon22,
        nest22 = meadow22 + hill22.clientHeight,
        oak22 = Reef3({
          layout: apex22,
          viewportBottomPx: nest22,
          viewportTopPx: meadow22,
        });
      unity22((rain22) => (Sage3(rain22, oak22) ? rain22 : oak22));
    }),
    cliff22 = useEventCallback((seed22) => {
      if (seed22.size === 0) return;
      let trail22 = wave22.current,
        urn22 = trail22;
      for (let [vine22, wind22] of seed22) {
        let yarrow22 = Math.max(1, wind22);
        trail22[vine22] !== yarrow22 &&
          (urn22 === trail22 &&
            (urn22 = {
              ...trail22,
            }),
          (urn22[vine22] = yarrow22));
      }
      urn22 !== trail22 && ((wave22.current = urn22), quest22(urn22));
    }),
    dusk22 = useEventCallback(() => {
      if (typeof ResizeObserver > "u")
        throw Error("ResizeObserver is unavailable.");
      if (vale22.current != null) return vale22.current;
      let azure22 = new ResizeObserver((birch22) => {
        let canyon22 = new Map();
        for (let dew22 of birch22) {
          let alpha23 = dew22.target.dataset.debugLineKey;
          alpha23 != null && canyon22.set(alpha23, Vapor3(dew22));
        }
        cliff22(canyon22);
      });
      return ((vale22.current = azure22), azure22);
    }),
    elm22 = useEventCallback((bravo23) => {
      if (bravo23 == null || typeof ResizeObserver > "u") return;
      let copper23 = dusk22();
      return (
        copper23.observe(bravo23),
        () => {
          copper23.unobserve(bravo23);
        }
      );
    });
  coral3.useLayoutEffect(() => {
    brook22();
  }, [orbit22.length, pine22, brook22]);
  coral3.useLayoutEffect(() => {
    if (ridge22 == null) return;
    let delta23 = Topaz3(ridge22);
    if (delta23 == null || typeof ResizeObserver > "u") return;
    delta23.addEventListener("scroll", brook22, {
      passive: true,
    });
    let echo23 = new ResizeObserver(() => {
      brook22();
    });
    return (
      echo23.observe(delta23),
      echo23.observe(ridge22),
      brook22(),
      () => {
        delta23.removeEventListener("scroll", brook22);
        echo23.disconnect();
      }
    );
  }, [ridge22, brook22]);
  coral3.useLayoutEffect(
    () => () => {
      vale22.current?.disconnect();
      vale22.current = null;
    },
    [],
  );
  let fern22 = orbit22.slice(tide22.startIndex, tide22.endIndex),
    grove22 = apex22.topOffsetsPx[tide22.startIndex] ?? 0;
  return (
    <div className="py-1.5">
      <div
        ref={storm22}
        className="relative"
        style={{
          height: `${apex22.totalHeightPx}px`,
        }}
      >
        <div
          style={{
            transform: `translateY(${grove22}px)`,
          }}
        >
          {fern22.map((item) => (
            <Falcon2
              key={item.turnKey}
              {...{
                entry: item,
                measureLineRef: elm22,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function id(falcon23) {
  let { line } = falcon23;
  switch (line.kind) {
    case "javascript": {
      let gamma23;
      return (
        <Kite2
          {...{
            label: line.label,
            language: "javascript",
            title: "JavaScript",
            value: line.value,
          }}
        />
      );
    }
    case "json": {
      let harbor23;
      return (
        <Kite2
          {...{
            label: line.label,
            language: "json",
            title: "JSON",
            value: line.value,
          }}
        />
      );
    }
    case "multiline": {
      let indigo23;
      return (
        <Kite2
          {...{
            label: line.label,
            shouldWrapCode: true,
            title: "Text",
            value: line.value,
          }}
        />
      );
    }
    case "image": {
      let jade23;
      return (
        <Lemon2
          {...{
            line,
          }}
        />
      );
    }
    case undefined: {
      let kite23;
      return (
        <Falcon
          {...{
            label: line.label,
            value: line.value,
          }}
        />
      );
    }
  }
}
function Prism3(lemon23) {
  let { children, label } = lemon23,
    marble23 = {
      "--debug-label-width": "110px",
    };
  let nickel23 = {
    width: "var(--debug-label-width)",
  };
  let onyx23 = (
    <span
      className="shrink-0 text-left break-words text-token-description-foreground"
      style={nickel23}
    >
      {label}
    </span>
  );
  let pearl23 = <div className="min-w-0 flex-1 pr-3 text-left">{children}</div>;
  return (
    <div
      className="relative flex items-start justify-between border-t-[0.5px] border-token-border py-1.5 tabular-nums first:border-t-0"
      style={marble23}
    >
      {onyx23}
      {pearl23}
    </div>
  );
}
function Quill3(quartz23) {
  return {
    startIndex: 0,
    endIndex: Math.min(quartz23, honey3),
  };
}
function Reef3({ layout, viewportBottomPx, viewportTopPx }) {
  let river23 = layout.turnKeys.length;
  if (river23 === 0)
    return {
      startIndex: 0,
      endIndex: 0,
    };
  if (viewportBottomPx <= 0)
    return {
      startIndex: 0,
      endIndex: Math.min(river23, glide3),
    };
  if (viewportTopPx >= layout.totalHeightPx)
    return {
      startIndex: Math.max(0, river23 - glide3),
      endIndex: river23,
    };
  let slate23 = Math.max(0, viewportTopPx),
    timber23 = Math.min(layout.totalHeightPx, viewportBottomPx);
  return visibleRangeFromDistance({
    distanceFromBottomPx: layout.totalHeightPx - timber23,
    layout,
    overscanCount: glide3,
    viewportHeightPx: timber23 - slate23,
  });
}
function Sage3(umbra23, violet23) {
  return (
    umbra23.startIndex === violet23.startIndex &&
    umbra23.endIndex === violet23.endIndex
  );
}
function Topaz3(willow23) {
  return (
    willow23.closest("[data-debug-panel-scroll-container]") ?? Ultra3(willow23)
  );
}
function Ultra3(xenon23) {
  let yellow23 = xenon23.parentElement;
  for (; yellow23 != null; ) {
    let zinc23 = window.getComputedStyle(yellow23).overflowY;
    if (zinc23 === "auto" || zinc23 === "scroll" || zinc23 === "overlay")
      return yellow23;
    yellow23 = yellow23.parentElement;
  }
  return null;
}
