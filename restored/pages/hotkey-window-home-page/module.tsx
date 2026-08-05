// Restored from ref/webview/assets/hotkey-window-home-page-SLdyPBTP.js
// Wave FY — full polished body from `hotkey-window-home-page-SLdyPBTP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 88/122).
// Wave FZ-support — PascalCase invalid JSX tags: coerceLocalFilesystemPath→CoerceLocalFilesystemPath, copyContinuousScale→CopyContinuousScale, ensureWorktreeEnvironmentDropdownInit→EnsureWorktreeEnvironmentDropdownInit, renamedId→HotkeyWindowHomePageHelper1, renamedId→HotkeyWindowHomePageHelper4, renamedId→HotkeyWindowHomePageHelper7, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, toggleSortedIdList→ToggleSortedIdList, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, worktreeEnvironmentDropdownR→WorktreeEnvironmentDropdownR.
// AST split 1/1
/* split-lane-import-depth:1 */

import { dataFileBlameAuthor } from "../../account/data-file-blame-author";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { RateLimitResetCreditsDialog } from "../../account/rate-limit-reset-credits-dialog";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { resolveCodexCloudAccess } from "../../cloud/resolve-codex-cloud-access";
import { buildComposerCwdCacheKey } from "../../composer/build-composer-cwd-cache-key";
import { dictationErrorMessages } from "../../composer/dictation-error-messages";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { agentMessage } from "../../conversation/agent-message";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { deferredConversationUJ } from "../../conversation/deferred-conversation-uj";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { copyContinuousScale as CopyContinuousScale } from "../../d3/copy-continuous-scale";
import { DebugNameProbe } from "../../debug/debug-name-probe";
import { appServices } from "../../desktop/desktop-services";
import { ProjectSelectorControl } from "../../desktop/project-selector-control";
import {
  CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL,
  CHATGPT_COM_CODEX_PURCHASE_TEAM_URL,
} from "../../docs/codex-doc-urls";
import {
  EnsureWorktreeEnvironmentDropdownInit,
  WorktreeEnvironmentDropdown,
  worktreeEnvironmentDropdownI,
  worktreeEnvironmentDropdownN,
  worktreeEnvironmentDropdownO,
  WorktreeEnvironmentDropdownR,
} from "../../environments/worktree-environment-dropdown";
import { CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import {
  ensureUseFloatingWindowPointerInteractivityInit,
  useFloatingWindowPointerInteractivity,
} from "../../hooks/use-floating-window-pointer-interactivity";
import {
  ensureUseHotkeyWindowDismissOnEscapeInit,
  useHotkeyWindowDismissOnEscape,
} from "../../hooks/use-hotkey-window-dismiss-on-escape";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useResolvedHostConfigValue } from "../../hosts/use-resolved-host-config-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconMA } from "../../icons/app-icon-ma";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTv } from "../../icons/app-icon-tv";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { generalDesktopSettingsDefinitions } from "../../settings/general-desktop-settings-definitions";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { SettingsDependenciesGuard } from "../../settings/settings-dependencies-guard";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { getCodeThemeRegistration } from "../../themes/get-code-theme-registration";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { titleCaseLastPathSegment } from "../../utils/title-case-last-path-segment";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureNewThreadBhInit } from "../../utils/wave-av-gap-ensure-inits";

const Remote3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiB@ui/deferred-ui-b.ts) */
const AppInitialB: any = undefined;
/** Wave FY unresolved companion (jsx-collision:resolveComposerMode@composer/resolve-composer-mode.ts) */
const AppInitialBq: any = undefined;
/** Wave FY unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave FY unresolved companion (jsx-collision:tokenInvalidated@hosts/token-invalidated.ts) */
const AppInitialF: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (missing-export:projects/codex-cloud-access.tsx) */
const CodexCloudAccess: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_IB_Init@composer/composer-esm-inits.ts) */
const AppInitialIB: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/ide-context.tsx) */
const IdeContext: any = undefined;
/** Wave FY unresolved companion (jsx-collision:hero@worktree/hero.ts) */
const AppInitialKm: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FY unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (jsx-collision:buildComposerCwdCacheKey@composer/build-composer-cwd-cache-key.ts) */
const AppInitialMJ: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/remote3.tsx) */
const AppInitialNJ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:createRateLimitCreditRedeemer@account/create-rate-limit-credit-redeemer.ts) */
const AppInitialPv: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureHotkeyThreadQptInit@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialQpt: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-footer-uoylu2.ts) */
const applyFooterUoylu2: any = undefined;
/** Wave FY unresolved companion (missing-export:composer/deferred-tc.tsx) */
const DeferredTC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:parseDiffFromFile@diff/parse-diff-from-file.ts) */
const AppInitialTW: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensurePromptHistoryStorageInit@composer/ensure-prompt-history-storage-init.ts) */
const AppInitialVq: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/auth-elicitation.tsx) */
const AuthElicitation: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-z4.ts) */
const deferredHostsZ4: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setKeyedAtomValueWithCleanup@utils/set-keyed-atom-value-with-cleanup.ts) */
const AppInitialZh: any = undefined;
function HotkeyWindowHomePageHelper1(xenon) {
  let {
      canUseCloud,
      composerMode,
      setComposerMode,
      showLabel = false,
      disabledTooltipText,
      showWorktree,
    } = xenon,
    yellow = useIntl(),
    zinc =
      composerMode === "cloud" ? (
        <AppInitialD className="icon-2xs" />
      ) : composerMode === "worktree" && showWorktree ? (
        <ProjectDropdownGlyphIcon
          {...{
            className: "icon-2xs",
          }}
        />
      ) : (
        <AppIconFB
          {...{
            className: "icon-2xs",
          }}
        />
      );
  let amber = showLabel ? (
    <span className="max-w-40 truncate text-left whitespace-nowrap">
      {composerMode === "cloud" ? (
        <MemoizedFormattedMessage
          {...{
            id: "composer.footer.v2.cloudTab",
            defaultMessage: "Cloud",
            description: "Cloud mode label",
          }}
        />
      ) : composerMode === "worktree" && showWorktree ? (
        <MemoizedFormattedMessage
          {...{
            id: "composer.mode.worktreeSegment",
            defaultMessage: "Worktree",
            description: "Worktree mode label for the segmented toggle",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "composer.hotkeyWindow.modeDropdown.localProject",
            defaultMessage: "Local project",
            description:
              "Hotkey window overflow menu label for local project mode",
          }}
        />
      )}
    </span>
  ) : null;
  let basalt = (
    <AppIconSft
      {...{
        className: "icon-2xs text-token-input-placeholder-foreground",
      }}
    />
  );
  let cedar = (
    <>
      {zinc}
      {amber}
      {basalt}
    </>
  );
  let daisy = cedar;
  if (disabledTooltipText) {
    let wheat = (
      <span>
        {
          <ReadLoginRouteQuerySnapshot
            {...{
              size: "composerSm",
              color: "ghost",
              className: "gap-1 px-1.5",
              disabled: true,
              children: daisy,
            }}
          />
        }
      </span>
    );
    let yarn;
    return (
      <OptionalTooltip
        {...{
          tooltipContent: disabledTooltipText,
          children: wheat,
        }}
      />
    );
  }
  let ember = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.hotkeyWindow.modeDropdown.tooltip",
        defaultMessage: "Select where to run the chat",
        description: "Tooltip for the hotkey-window mode selector",
      }}
    />
  );
  let flint = (
    <OptionalTooltip
      {...{
        tooltipContent: ember,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              size: "composerSm",
              color: "ghost",
              className: "gap-1 px-1.5",
              children: daisy,
            }}
          />
        ),
      }}
    />
  );
  let garnet = composerMode === "local" ? AppIconZlt : undefined,
    hazel = () => {
      setComposerMode("local");
    };
  let ivory = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.mode.local",
        defaultMessage: "Work locally",
        description: "Local mode label",
      }}
    />
  );
  let jasper = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconFB,
        RightIcon: garnet,
        onSelect: hazel,
        children: ivory,
      }}
    />
  );
  let kelp = composerMode === "cloud" ? AppIconZlt : undefined,
    lotus = !canUseCloud,
    mint = () => {
      setComposerMode("cloud");
    };
  let nova = canUseCloud
    ? undefined
    : yellow.formatMessage({
        id: "composer.hotkeyWindow.modeDropdown.cloudUnavailable",
        defaultMessage: "Cloud is unavailable",
        description: "Tooltip for disabled hotkey-window Cloud mode",
      });
  let olive = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.v2.cloudTab",
        defaultMessage: "Cloud",
        description: "Cloud mode label",
      }}
    />
  );
  let prism = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppInitialD,
        RightIcon: kelp,
        disabled: lotus,
        onSelect: mint,
        tooltipText: nova,
        children: olive,
      }}
    />
  );
  let quill = composerMode === "worktree" ? AppIconZlt : undefined,
    reef = () => {
      setComposerMode("worktree");
    };
  let sage = !showWorktree,
    topaz = showWorktree
      ? undefined
      : yellow.formatMessage({
          id: "composer.hotkeyWindow.modeDropdown.localOnly",
          defaultMessage: "Initialize a git repo to run tasks in worktrees",
          description:
            "Tooltip for disabled hotkey-window worktree mode selector",
        });
  let ultra = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.mode.worktreeSegment",
        defaultMessage: "Worktree",
        description: "Worktree mode label for the segmented toggle",
      }}
    />
  );
  let vapor = (
    <DropdownMenu.Item
      {...{
        LeftIcon: ProjectDropdownGlyphIcon,
        RightIcon: quill,
        onSelect: reef,
        disabled: sage,
        tooltipText: topaz,
        children: ultra,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        triggerButton: flint,
        contentWidth: "menuNarrow",
        children: [jasper, prism, vapor],
      }}
    />
  );
}
var alpha,
  bravo,
  copper = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Hlt_Init();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    AppInitialF();
    AppInitialIB();
    ensureSettingsGlyphRBInit();
  });
function delta({
  activeWorkspaceRoot,
  defaultToProjectless,
  localProjects,
  projectId,
}) {
  if (projectId === undefined)
    return defaultToProjectless ? "~" : activeWorkspaceRoot;
  if (projectId == null) return "~";
  let zephyr = localProjects[projectId];
  return StackedCardHeader(zephyr?.rootPaths);
}
function echo({ composerWorkspaceRoot, selectedRemoteProjectPath }) {
  return (
    selectedRemoteProjectPath ??
    (composerWorkspaceRoot === "~" ? null : composerWorkspaceRoot)
  );
}
var falcon = esmInit(() => {
  strongMarkerFromOptions();
});
function HotkeyWindowHomePageHelper4(acorn) {
  let { composerMode, enabled, setComposerMode, showWorktree } = acorn,
    bloom = useIntl(),
    coral = () => {
      RateLimitResetCreditsDialog({
        composerMode,
        setComposerMode,
      });
    };
  let drift = enabled && showWorktree,
    eagle;
  eagle = {
    enabled: drift,
  };
  useResolvedHostConfigValue("composer.toggleWorktreeMode", coral, eagle);
  let frost = bloom.formatMessage({
    id: "composer.mode.local",
    defaultMessage: "Work locally",
    description: "Local mode label",
  });
  let glide = bloom.formatMessage({
    id: "composer.hotkeyWindow.mode.localSlashCommand.description",
    defaultMessage: "Run this chat locally",
    description: "Description for the Quick Chat local mode slash command",
  });
  let honey = enabled && composerMode !== "local",
    iris = async () => {
      setComposerMode("local");
    };
  let jewel = iris,
    knoll;
  knoll = {
    id: "local",
    title: frost,
    description: glide,
    requiresEmptyComposer: false,
    Icon: AppIconFB,
    enabled: honey,
    onSelect: jewel,
  };
  SettingsDependenciesGuard(knoll);
  let lunar = bloom.formatMessage({
    id: "composer.mode.worktree",
    defaultMessage: "New worktree",
    description: "Worktree mode label",
  });
  let moss = bloom.formatMessage({
    id: "composer.hotkeyWindow.mode.worktreeSlashCommand.description",
    defaultMessage: "Run this chat in a new worktree",
    description: "Description for the Quick Chat worktree mode slash command",
  });
  let north = enabled && showWorktree && composerMode !== "worktree",
    orbit = async () => {
      setComposerMode("worktree");
    };
  let pine = orbit,
    quest;
  return (
    (quest = {
      id: "worktree",
      title: lunar,
      description: moss,
      requiresEmptyComposer: false,
      Icon: ProjectDropdownGlyphIcon,
      enabled: north,
      onSelect: pine,
    }),
    SettingsDependenciesGuard(quest),
    null
  );
}
var gamma,
  harbor = esmInit(() => {
    gamma = reactCompilerRuntime();
    ensureIntlFormattersInit();
    AppInitialPv();
    titleCaseLastPathSegment();
    DeferredTC();
    AppInitialIB();
    ensureSettingsGlyphRBInit();
  });
function indigo(ridge) {
  let { activationNonce, interactiveRegionRef, onInteractiveChange } = ridge,
    storm;
  return (
    (storm = {
      activationNonce,
      floatingElementSelectors: kite,
      includeInteractiveRegion: true,
      interactiveRegionRef,
      onInteractiveChange,
    }),
    useFloatingWindowPointerInteractivity(storm)
  );
}
var jade,
  kite,
  lemon = esmInit(() => {
    jade = reactCompilerRuntime();
    ensureUseFloatingWindowPointerInteractivityInit();
    kite = [
      "[data-composer-overlay-floating-ui]",
      "[data-above-composer-portal] > *",
      "[data-radix-popper-content-wrapper] > *",
    ];
  }),
  marble,
  nickel,
  onyx,
  pearl,
  quartz,
  river = esmInit(() => {
    marble = "_home_reiaa_1";
    nickel = "_homeShell_reiaa_20";
    onyx = "_shellUnderlay_reiaa_21";
    pearl = "_composerSurface_reiaa_22";
    quartz = {
      home: marble,
      homeShell: nickel,
      shellUnderlay: onyx,
      composerSurface: pearl,
    };
  });
export function HotkeyWindowHomePage() {
  let cliff = CodexPluginActionType(HostCwdPathLabel);
  useHotkeyWindowDismissOnEscape();
  let dusk = useIntl(),
    elm = useLocation(),
    fern = useNavigate(),
    grove = NativeContextMenuSurface("505458"),
    hill = applyFooterUoylu2(),
    { access } = resolveCodexCloudAccess(),
    { isLoading, remoteProjects, selectedRemoteProject } = AppInitialB(),
    isle = violet.useRef(null),
    juniper = violet.useRef(null),
    lagoon = violet.useRef(null),
    meadow = violet.useRef(null),
    nest = elm.state,
    oak = nest?.focusComposerNonce ?? null,
    petal = nest?.project,
    quiet =
      petal === undefined
        ? undefined
        : petal?.type === "local"
          ? petal.projectId
          : null,
    { data, isLoading: _isLoading } = CodexPluginActionResult(deferredHostsZ4),
    rain = useSettingValue(
      generalDesktopSettingsDefinitions.hotkeyWindowProjectlessDefaultEnabled,
    ),
    seed = CodexPluginActionResult(agentMessage),
    trail = delta({
      activeWorkspaceRoot: data?.roots[0] ?? null,
      defaultToProjectless: rain === true,
      localProjects: seed,
      projectId: quiet,
    }),
    urn =
      petal === undefined
        ? selectedRemoteProject
        : petal?.type === "remote"
          ? (remoteProjects.find((item) => item.id === petal.projectId) ?? null)
          : null,
    vine = urn == null && trail === "~",
    wind = CodexPluginActionResult(getCodeThemeRegistration),
    yarrow = urn?.hostId ?? "local",
    azure = ensureSteeringUserMessageClusterInit(yarrow),
    birch = readCodexHomeFromQuery(yarrow),
    canyon = echo({
      composerWorkspaceRoot: trail,
      selectedRemoteProjectPath: urn?.remotePath ?? null,
    }),
    dew =
      urn == null &&
      trail == null &&
      (petal === undefined
        ? _isLoading
        : petal?.type === "remote" && isLoading),
    ever = AppInitialMJ({
      cwd: canyon,
      hostId: yarrow,
      isLoading: dew,
    }),
    field = CodexPluginActionResult(getHostConfigId),
    { data: _data, isLoading: __isLoading } = AppInitialF3(
      canyon == null
        ? null
        : {
            cwd: canyon,
            hostConfig: azure,
          },
      "hotkey_window_home_page",
      {
        retainRepoWatch: field,
      },
    ),
    grain = _data?.root ?? null,
    haven =
      canyon != null &&
      grain != null &&
      grove &&
      !pathContainsWorktreesDir(canyon, birch),
    ink = urn == null && !_isLoading && !__isLoading && grain == null,
    jadeite = vine || ink,
    _e = {
      fallbackMode: "local",
      isAvailabilityLoading:
        !jadeite && ((urn == null && _isLoading) || __isLoading || hill),
      isCloudAvailable: !jadeite,
      isLocalAvailable: true,
      isWorktreeAvailable: haven,
    },
    kernel = CodexBrowserSurfaceActionType(Remote3, ever),
    leaf = CodexPluginActionResult(isStartingProcessExpired),
    maple = dictationErrorMessages(),
    nimbus = AppInitialBq({
      ..._e,
      composerMode: kernel,
      cloudAccess: access,
      isEverydayWorkMode: false,
    }),
    { gitRoot } = CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL(canyon, {
      enabled: nimbus === "worktree" && canyon != null,
      hostId: yarrow,
      source: "hotkey_window_worktree_source",
    }),
    {
      environments,
      isLoading: ___isLoading,
      error,
      resolvedConfigPath,
      repairConfigPath,
      updateSelection,
    } = dataFileBlameAuthor({
      hostId: yarrow,
      workspaceRoot: nimbus === "worktree" ? canyon : null,
    }),
    [opal, plume] = violet.useState(false),
    [quillow, silk] = violet.useState(null),
    thorn = indigo({
      activationNonce: oak,
      interactiveRegionRef: juniper,
      onInteractiveChange: (knob) => {
        appServices.hotkeyWindowHotkeys?.homePointerInteractionChanged({
          isInteractive: knob,
        });
      },
    });
  writeScrollTop("hotkey-window-home-composer-position-changed", (ledge) => {
    silk(ledge.topInsetPx);
  });
  let upland = (mire) => {
    let nook = isle.current,
      oxbow = juniper.current;
    if (!nook || !oxbow) return;
    let pond = timber(window.getComputedStyle(nook).paddingBottom),
      quarry = nook.getBoundingClientRect(),
      rapids = oxbow.getBoundingClientRect(),
      spur = rapids.top;
    if (mire)
      for (let verge of willow)
        for (let weir of document.querySelectorAll(verge))
          spur = Math.min(spur, weir.getBoundingClientRect().top);
    let tor = {
        minimumComposerTopInsetPx: Math.max(0, Math.ceil(rapids.top - spur)),
        restingComposerTopInsetPx: Math.ceil(
          Math.max(0, quarry.height - rapids.height - pond),
        ),
      },
      updraft = meadow.current;
    (updraft?.minimumComposerTopInsetPx === tor.minimumComposerTopInsetPx &&
      updraft.restingComposerTopInsetPx === tor.restingComposerTopInsetPx) ||
      ((meadow.current = tor),
      appServices.hotkeyWindowHotkeys?.homeLayoutChanged(tor));
  };
  violet.useEffect(() => {
    AppIconMZ();
  }, [oak]);
  let vista = maple || opal;
  violet.useLayoutEffect(() => {
    let yard = null,
      anchor = () => {
        yard ??= window.requestAnimationFrame(() => {
          yard = null;
          upland(vista);
        });
      },
      bolt = typeof ResizeObserver > "u" ? null : new ResizeObserver(anchor),
      cog =
        vista && typeof MutationObserver < "u"
          ? new MutationObserver(anchor)
          : null;
    return (
      juniper.current != null && bolt?.observe(juniper.current),
      cog?.observe(document.body, {
        childList: true,
        subtree: true,
      }),
      anchor(),
      () => {
        yard != null && window.cancelAnimationFrame(yard);
        bolt?.disconnect();
        cog?.disconnect();
      }
    );
  }, [vista]);
  let wisp = violet.useCallback(
      (disc) => {
        deferredConversationUJ(cliff, ever, disc);
      },
      [ever, cliff],
    ),
    yonder = (edge) => {
      buildComposerCwdCacheKey(cliff, (forge) => {
        forge.asyncThreadStartingState = edge;
      });
    },
    zenith = (gear) => {
      if (canyon == null) {
        ensureAppActionPayloadSchemasInit.dispatchMessage("show-settings", {
          section: "local-environments",
        });
        return;
      }
      ensureAppActionPayloadSchemasInit.dispatchMessage("show-settings", {
        section:
          gear == null
            ? `local-environments?${new URLSearchParams({
                workspaceRoot: canyon,
              }).toString()}`
            : ProjectSelectorControl({
                configPath: gear,
                workspaceRoot: canyon,
              }).slice(10),
        state: {
          hostId: yarrow,
          returnTo: "/settings/local-environments",
        },
      });
    },
    anvil = (hinge) => {
      appServices.hotkeyWindowHotkeys?.open({
        path: AppInitialQpt(hinge),
      });
    },
    beacon = (iron) => {
      let joint = {
        ...nest,
        project:
          iron == null
            ? null
            : {
                type: "local",
                projectId: AuthElicitation(iron),
              },
      };
      fern(
        {
          pathname: elm.pathname,
          search: elm.search,
          hash: elm.hash,
        },
        {
          replace: true,
          state: joint,
        },
      );
    },
    crag = (event) => {
      lagoon.current === event.pointerId &&
        ((lagoon.current = null),
        event.currentTarget.hasPointerCapture?.(event.pointerId) &&
          event.currentTarget.releasePointerCapture?.(event.pointerId),
        appServices.hotkeyWindowHotkeys?.homeDragEnd());
    },
    dome = (event) => {
      event.button === 0 &&
        (event.preventDefault(),
        (lagoon.current = event.pointerId),
        event.currentTarget.setPointerCapture?.(event.pointerId),
        appServices.hotkeyWindowHotkeys?.homeDragStart({
          pointerWindowX: event.clientX,
          pointerWindowY: event.clientY,
        }));
    },
    eddy = (event) => {
      lagoon.current === event.pointerId &&
        appServices.hotkeyWindowHotkeys?.homeDragMove();
    },
    fjord =
      AppInitialL(urn?.remotePath ?? canyon, urn?.label) ??
      dusk.formatMessage({
        id: "hotkeyWindow.home.placeholder.unknownProject",
        defaultMessage: "this project",
        description:
          "Fallback project name in the hotkey window composer placeholder",
      }),
    glen = vine
      ? dusk.formatMessage({
          id: "hotkeyWindow.home.placeholder.projectless",
          defaultMessage: "Ask ChatGPT anything locally",
          description: "Hotkey window placeholder for projectless local mode",
        })
      : nimbus === "cloud"
        ? dusk.formatMessage({
            id: "hotkeyWindow.home.placeholder.cloud",
            defaultMessage: "Ask ChatGPT anything in the cloud",
            description: "Hotkey window placeholder for cloud mode",
          })
        : nimbus === "worktree"
          ? dusk.formatMessage(
              {
                id: "hotkeyWindow.home.placeholder.worktree",
                defaultMessage:
                  "Ask ChatGPT anything in a worktree in {project}",
                description: "Hotkey window placeholder for worktree mode",
              },
              {
                project: fjord,
              },
            )
          : dusk.formatMessage(
              {
                id: "hotkeyWindow.home.placeholder.local",
                defaultMessage: "Ask ChatGPT anything locally in {project}",
                description: "Hotkey window placeholder for local mode",
              },
              {
                project: fjord,
              },
            );
  let hearth;
  dew
    ? (hearth = dusk.formatMessage({
        id: "hotkeyWindow.home.taskMenu.startIn.loadingTooltip",
        defaultMessage: "Loading project",
        description:
          "Tooltip shown when the hotkey-window project is still loading",
      }))
    : vine
      ? (hearth = dusk.formatMessage({
          id: "hotkeyWindow.home.taskMenu.startIn.projectlessTooltip",
          defaultMessage: "Standalone chats run in a local folder",
          description:
            "Tooltip shown when the hotkey-window start-in control is disabled for projectless chats",
        }))
      : ink &&
        (hearth = dusk.formatMessage({
          id: "hotkeyWindow.home.taskMenu.startIn.disabledTooltip",
          defaultMessage:
            "Initialize a git repo to start in cloud or worktree mode",
          description:
            "Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo",
        }));
  let inlet =
      nimbus === "worktree" ? (
        <WorktreeEnvironmentDropdown
          {...{
            startingState: leaf,
            setStartingState: yonder,
            hostConfig: azure,
            gitRootOverride: gitRoot ?? canyon,
            branchSource: "worktree",
          }}
        />
      ) : grain == null ? null : (
        <WorktreeEnvironmentDropdownR
          {...{
            gitRoot: grain,
            hostConfig: azure,
            localConversationId: null,
            shouldShow: true,
          }}
        />
      ),
    jetty = dusk.formatMessage({
      id: "hotkeyWindow.home.taskMenu.label",
      defaultMessage: "Chat settings",
      description: "Accessible label for the hotkey window chat settings menu",
    });
  return (
    <div
      ref={isle}
      className={IntlProvider(
        quartz.home,
        "relative h-full w-full overflow-hidden bg-transparent pb-1",
      )}
    >
      {<CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID {...{}} />}
      <div
        ref={juniper}
        className={IntlProvider(
          quartz.homeShell,
          "absolute inset-x-1 bottom-1 px-[15px] pb-[13px] pt-[17px]",
          thorn && "no-drag",
        )}
        style={
          quillow == null
            ? undefined
            : {
                bottom: "auto",
                top: quillow,
              }
        }
      >
        <div
          className={quartz.shellUnderlay}
          aria-hidden="true"
          onLostPointerCapture={crag}
          onPointerCancel={crag}
          onPointerDown={dome}
          onPointerMove={eddy}
          onPointerUp={crag}
        />
        {
          <HotkeyWindowHomePageHelper4
            {...{
              composerMode: nimbus,
              enabled: !vine && !dew,
              setComposerMode: wisp,
              showWorktree: haven,
            }}
          />
        }
        <div className="no-drag relative">
          <AppInitialTT>
            <AppInitialZh
              showWorkspaceDropdownInUtilityBar={false}
              showUtilityBar={false}
              surfaceClassName={quartz.composerSurface}
              composerModeAvailability={_e}
              placeholderText={glen}
              defaultCwd={
                trail ?? (vine || petal !== undefined ? "~" : undefined)
              }
              selectedProject={vine ? null : (petal ?? wind)}
              hotkeyWindowHomeFooterControls={
                <UsePointerSurfaceInteractionGate
                  {...{
                    open: opal,
                    onOpenChange: plume,
                    children: [
                      <AppInitialM asChild={true}>
                        {
                          <CoerceLocalFilesystemPath
                            {...{
                              label: jetty,
                              size: "composer",
                            }}
                          />
                        }
                      </AppInitialM>,
                      <ToggleSortedIdList
                        {...{
                          align: "center",
                          side: "top",
                          sideOffset: 10,
                          className:
                            "no-drag w-auto min-w-[320px] rounded-3xl p-0",
                          children: (
                            <div className="flex flex-col gap-4 p-3">
                              {
                                <HotkeyWindowHomePageHelper7
                                  {...{
                                    label: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "hotkeyWindow.home.taskMenu.project",
                                          defaultMessage: "Project",
                                          description:
                                            "Label for the hotkey window project row",
                                        }}
                                      />
                                    ),
                                    control: (
                                      <ProjectSelectorControl
                                        activeProjectIdOverride={
                                          petal === undefined
                                            ? undefined
                                            : quiet
                                        }
                                        allowRemoteProjects={false}
                                        onProjectSelected={beacon}
                                      />
                                    ),
                                  }}
                                />
                              }
                              {
                                <HotkeyWindowHomePageHelper7
                                  {...{
                                    label: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "hotkeyWindow.home.taskMenu.startIn",
                                          defaultMessage: "Start in",
                                          description:
                                            "Label for the hotkey window mode row on the home page",
                                        }}
                                      />
                                    ),
                                    control: (
                                      <HotkeyWindowHomePageHelper1
                                        {...{
                                          canUseCloud:
                                            _e.isCloudAvailable &&
                                            access === "enabled",
                                          composerMode: nimbus,
                                          setComposerMode: wisp,
                                          showLabel: true,
                                          disabledTooltipText: hearth,
                                          showWorktree: haven,
                                        }}
                                      />
                                    ),
                                  }}
                                />
                              }
                              {nimbus === "worktree" ? (
                                <HotkeyWindowHomePageHelper7
                                  {...{
                                    label: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "hotkeyWindow.home.taskMenu.environment",
                                          defaultMessage: "Environment",
                                          description:
                                            "Label for the hotkey window environment row",
                                        }}
                                      />
                                    ),
                                    control: (
                                      <EnsureWorktreeEnvironmentDropdownInit
                                        {...{
                                          environments,
                                          isLoading: ___isLoading,
                                          hasError: error != null,
                                          selectedConfigPath:
                                            resolvedConfigPath,
                                          repairConfigPath,
                                          onSelectConfigPath: updateSelection,
                                          onOpenSettings: zenith,
                                        }}
                                      />
                                    ),
                                  }}
                                />
                              ) : null}
                              {inlet ? (
                                <HotkeyWindowHomePageHelper7
                                  {...{
                                    label: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "hotkeyWindow.home.taskMenu.branch",
                                          defaultMessage: "Branch",
                                          description:
                                            "Label for the hotkey window branch row",
                                        }}
                                      />
                                    ),
                                    control: inlet,
                                  }}
                                />
                              ) : null}
                              {nimbus === "cloud" ? null : (
                                <CopyContinuousScale
                                  {...{
                                    conversationId: null,
                                    hostId: LOCAL_HOST_ID,
                                    DropdownContainer: slate,
                                  }}
                                />
                              )}
                            </div>
                          ),
                        }}
                      />,
                    ],
                  }}
                />
              }
              onLocalConversationCreated={anvil}
            />
          </AppInitialTT>
        </div>
      </div>
    </div>
  );
}
function slate(tide) {
  let { children } = tide,
    unity = (
      <MemoizedFormattedMessage
        {...{
          id: "hotkeyWindow.home.taskMenu.permissions",
          defaultMessage: "Permissions",
          description: "Label for the hotkey window permissions row",
        }}
      />
    );
  return (
    <HotkeyWindowHomePageHelper7
      {...{
        label: unity,
        control: children,
      }}
    />
  );
}
function HotkeyWindowHomePageHelper7(vale) {
  let { label, control } = vale,
    wave = (
      <div className="shrink-0 text-sm font-medium text-token-foreground">
        {label}
      </div>
    );
  let apex = <div className="min-w-0">{control}</div>;
  return (
    <div className="flex items-center justify-between gap-4">
      {wave}
      {apex}
    </div>
  );
}
function timber(brook) {
  return Number.parseFloat(brook) || 0;
}
var umbra, violet, $, willow;
esmInit(() => {
  umbra = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  violet = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  CodexCloudAccess();
  ensurePinnedConversationsQueryInit();
  deferredConversationN();
  worktreeEnvironmentDropdownO();
  ensureNewThreadBhInit();
  CodexBrowserProfileImportCookieStatus();
  AppInitialVq();
  AppInitialNJ();
  worktreeEnvironmentDropdownI();
  getPluginShortDescription();
  chatProcessRegister();
  copper();
  AppInitialKm();
  AppIconTv();
  IdeContext();
  worktreeEnvironmentDropdownN();
  AppInitialP3();
  ensureSelectWorkspacePXInit();
  AppIconMA();
  findSidebarSectionElement();
  setRemoteControlEnabledForHost();
  useLocalEnvironmentEditorState();
  ensureDynamicScriptLoadInit();
  composerScope();
  AppInitialTW();
  extractColonPrefixedNamedTokens();
  ensureSettingsQueryAtomsInit();
  DebugNameProbe();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  deferredUiU();
  CHATGPT_COM_CODEX_PURCHASE_TEAM_URL();
  falcon();
  harbor();
  ensureUseHotkeyWindowDismissOnEscapeInit();
  lemon();
  river();
  willow = [
    "[data-composer-overlay-floating-ui]",
    "[data-above-composer-portal] > *",
    "[data-radix-popper-content-wrapper] > *",
  ];
})();
