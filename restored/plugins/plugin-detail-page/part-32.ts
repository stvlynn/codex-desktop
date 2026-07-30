// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 32/39
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { ensureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { ChatgptTrustedContactEntryPoint } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CODEX_SKILL_TRY_CLICKED_TYPE } from "../../analytics/codex-skill-try-clicked-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_Jj_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { ensureShareInviteAutocompleteInit, ShareInviteAutocomplete } from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { ConversationMarkdownText } from "../../conversation/conversation-markdown-text";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { ensureWebviewResumeConversationInit } from "../../conversation/ensure-webview-resume-conversation-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { groupActivityItemsWithSourceIndex } from "../../conversation/group-activity-items-with-source-index";
import { toggleConversationPinned } from "../../conversation/toggle-conversation-pinned";
import { walkAssistantBranchPath } from "../../conversation/walk-assistant-branch-path";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL, GITHUB_COM_OPENAI_PLUGINS_URL } from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { remoteControlHostKey } from "../../environments/remote-host-keys";
import { areVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { repoWorktreeWorkspaceRoots } from "../../git/repo-worktree-workspace-roots";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { ensureUsePluginScheduledTasksInit, usePluginScheduledTasksN } from "../../hooks/use-plugin-scheduled-tasks";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { ensureUseRecommendedSkillsInit, useRecommendedSkills } from "../../hooks/use-recommended-skills";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconId } from "../../icons/app-icon-id";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensureTeamIconInit, TeamIcon } from "../../icons/team-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { listHooksForHostQueryAtom } from "../../settings/hooks-query-atoms";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { partitionPluginSkills } from "../../skills/partition-plugin-skills";
import { ensureRecommendedSkillStatsigOverridesInit, getRecommendedSkillStatsigOverride, useRecommendedSkillStatsigOverrides } from "../../skills/recommended-skill-statsig-overrides";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU } from "../../ui/deferred-ui-u";
import { DETAIL_PAGE_STACK_CLASS, DetailPage, DetailPageSection, DetailPageSectionHeader, ensureDetailPageInit, ensureDetailPageSectionHeaderInit, ensureDetailPageSectionInit } from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ght } from "../../ui/ght";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { compareSemver } from "../../utils/compare-semver";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { ensureZodRuntime } from "../../vendor/zod";
import { installModalBrowserExtensionMessages } from "../install-modal-browser-extension-messages";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isPluginInstallModalOpenInLocationState } from "../is-plugin-install-modal-open-in-location-state";
import { matchConnectorIconKeyFromPlugin } from "../match-connector-icon-key-from-plugin";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { mergeDirectoryPluginApps } from "../merge-directory-plugin-apps";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery, resolvePluginMarketplaceDirectRoute } from "../plugin-marketplace-route";
import { pluginProductBrowseNav } from "../plugin-product-browse-nav";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";
import { usePluginNavigationTelemetry } from "../use-plugin-navigation-telemetry";


// Wave5d soft JSX companions.
function DeferredUiB(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiH(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiU(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Honey(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Iris(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Jewel(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Knoll(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Lunar(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Moss(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Quest(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UsePointerSurfaceInteractionGate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UseWorkspaceUsersF(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UseWorkspaceUsersI(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UseWorkspaceUsersM(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const Drift1: any = undefined;
const NativeContextMenuSurface: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const frost1: any = undefined;
const honey1: any = undefined;
const iris1: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const useWorkspaceUsersC: any = undefined;
const useWorkspaceUsersF: any = undefined;
const useWorkspaceUsersI: any = undefined;
const useWorkspaceUsersL: any = undefined;
const useWorkspaceUsersM: any = undefined;
const useWorkspaceUsersN: any = undefined;
const useWorkspaceUsersR: any = undefined;
const useWorkspaceUsersU: any = undefined;
export function _pluginDetailPageU({
  initialSharePrincipals = [],
  onClose,
  onCopyLink,
  onSaveShareTargets,
  onStopSharing,
  onUpdateSharedVersion,
  pluginDisplayName,
  shouldShowCopyLinkCreationProgress,
  shouldShowUpdateSharedVersion = false
}: unknown) {
  let harbor8 = useIntl(),
    {
      accountId
    } = useAuth(),
    {
      data
    } = reuseArrayIfShallowEqual(),
    indigo8 = NativeContextMenuSurface("2248542797"),
    [jade8, kite8] = frost1.useState(false),
    [lemon8, marble8] = frost1.useState(false),
    [nickel8, onyx8] = frost1.useState(false),
    [pearl8, quartz8] = frost1.useState(false),
    [river8, slate8] = frost1.useState("idle"),
    timber8 = frost1.useRef(null),
    umbra8 = frost1.useRef(null),
    [violet8, willow8] = frost1.useState(""),
    [xenon8, yellow8] = frost1.useState([]),
    [zinc8, amber8] = frost1.useState("reader"),
    basalt8 = _l(initialSharePrincipals),
    [cedar8, daisy8] = frost1.useState(basalt8),
    [ember8, flint8] = frost1.useState(basalt8),
    garnet8 = Quill1(initialSharePrincipals),
    [hazel8, ivory8] = frost1.useState(() => Ivory1(initialSharePrincipals)),
    {
      data: _data
    } = useWorkspaceUsersN(violet8),
    {
      data: __data
    } = useWorkspaceUsersR(violet8),
    jasper8 = useWorkspaceUsersC({
      currentAccountUserId: data?.account_user_id,
      existingAccountUserIds: hazel8.flatMap(item => item.type === "user" ? [item.id] : []),
      selectedAccountUserIds: xenon8.flatMap(item => item.kind === "user" ? [item.user.account_user_id] : []),
      workspaceUsers: __data
    }),
    kelp8 = Olive1({
      existingGroupIds: hazel8.flatMap(item => item.type === "group" ? [item.id] : []),
      selectedGroupIds: xenon8.flatMap(item => item.kind === "group" ? [item.group.id] : []),
      workspaceGroups: _data
    }),
    lotus8 = kelp8 == null && jasper8 == null ? undefined : [{
      id: "groups",
      label: <MemoizedFormattedMessage {...{
        id: "plugins.detail.shareDialog.groups",
        defaultMessage: "Groups",
        description: "Section heading for group invite results in the plugin share dialog"
      }} />,
      options: kelp8?.map(vapor8 => Lotus1(vapor8, harbor8)) ?? []
    }, {
      id: "people",
      label: <MemoizedFormattedMessage {...{
        id: "plugins.detail.shareDialog.people",
        defaultMessage: "People",
        description: "Section heading for people invite results in the plugin share dialog"
      }} />,
      options: jasper8?.map(Kelp1) ?? []
    }],
    mint8 = ember8 !== cedar8,
    nova8 = xenon8.length > 0,
    olive8 = river8 === "creating" || river8 === "progress" || jade8 || lemon8 || nickel8,
    prism8 = shouldShowUpdateSharedVersion && !pearl8 && onUpdateSharedVersion != null && !nova8 && !mint8;
  frost1.useEffect(() => () => {
    timber8.current != null && clearTimeout(timber8.current);
    umbra8.current != null && clearTimeout(umbra8.current);
  }, []);
  let quill8 = async (wheat8, yarn8) => {
      if (olive8) return false;
      let zephyr8 = yarn8 === "workspace" ? garnet8 ?? (accountId == null ? null : {
        principal_type: "workspace",
        principal_id: accountId,
        role: "reader"
      }) : null;
      if (yarn8 === "workspace" && zephyr8 == null) return false;
      kite8(true);
      try {
        let acorn8 = await onSaveShareTargets(Prism1(wheat8, zephyr8)),
          bloom8 = _l(acorn8);
        return ivory8(Ivory1(acorn8)), daisy8(bloom8), flint8(bloom8), slate8("idle"), true;
      } catch {
        return false;
      } finally {
        kite8(false);
      }
    },
    reef8 = async () => {
      if (olive8) return;
      if (xenon8.length > 0) {
        let frost8 = [...hazel8, ...xenon8.map(item => Jasper1(item, zinc8))];
        (await quill8(frost8, ember8)) && (yellow8([]), willow8(""), amber8("reader"));
        return;
      }
      let coral8 = shouldShowCopyLinkCreationProgress?.() === true,
        drift8 = river8 === "copied";
      drift8 && timber8.current != null && (clearTimeout(timber8.current), timber8.current = null);
      coral8 && (slate8("creating"), umbra8.current = setTimeout(() => {
        slate8("progress");
        umbra8.current = null;
      }, iris1));
      let eagle8 = await onCopyLink();
      if (umbra8.current != null && (clearTimeout(umbra8.current), umbra8.current = null), eagle8) {
        slate8("copied");
        timber8.current != null && clearTimeout(timber8.current);
        timber8.current = setTimeout(() => {
          slate8("idle");
        }, honey1);
        return;
      }
      if (coral8) {
        slate8("idle");
        return;
      }
      drift8 && (timber8.current = setTimeout(() => {
        slate8("idle");
      }, honey1));
    },
    sage8 = async () => {
      if (!(onStopSharing == null || olive8)) {
        marble8(true);
        try {
          await onStopSharing();
        } catch {
          return;
        } finally {
          marble8(false);
        }
        onClose();
      }
    },
    topaz8 = async () => {
      if (!(onUpdateSharedVersion == null || olive8)) {
        onyx8(true);
        try {
          await onUpdateSharedVersion();
          quartz8(true);
        } catch {
          return;
        } finally {
          onyx8(false);
        }
      }
    },
    ultra8 = <MemoizedFormattedMessage {...{
      id: "plugins.detail.shareDialog.title",
      defaultMessage: "Share {name}",
      description: "Title for the plugin sharing dialog",
      values: {
        name: pluginDisplayName
      }
    }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    contentOverflow: "visible",
    contentProps: {
      "aria-describedby": undefined
    },
    onOpenChange: glide8 => {
      glide8 || onClose();
    },
    children: <DeferredUiB {...{
      as: "form",
      onSubmit: event => {
        event.preventDefault();
        reef8();
      },
      children: [<div className="flex w-full flex-col">{<RealtimeVoiceHostId {...{
          className: "sr-only",
          children: ultra8
        }} />}{<DeferredUiH {...{
          title: ultra8
        }} />}</div>, <DeferredUiU {...{
        children: <ShareInviteAutocomplete {...{
          ariaLabel: harbor8.formatMessage({
            id: "plugins.detail.shareDialog.workspaceShareTargetSearch",
            defaultMessage: "Add people or groups",
            description: "Accessible label for searching workspace users and groups in the plugin share dialog"
          }),
          emptyMessage: <MemoizedFormattedMessage {...{
            id: "plugins.detail.shareDialog.noWorkspaceShareTargets",
            defaultMessage: "No matching people or groups",
            description: "Empty state shown when no workspace users or groups match the plugin share dialog autocomplete query"
          }} />,
          optionSections: lotus8,
          placeholder: harbor8.formatMessage({
            id: "plugins.detail.shareDialog.workspaceShareTargetPlaceholder",
            defaultMessage: "Add people or groups",
            description: "Placeholder for the plugin share dialog workspace user and group autocomplete"
          }),
          query: violet8,
          selectedOptions: xenon8.map(item => Mint1(item, harbor8)),
          trailingContent: xenon8.length === 0 ? null : <Honey {...{
            isEditorRoleEnabled: indigo8,
            role: zinc8,
            onRoleChange: amber8
          }} />,
          onQueryChange: willow8,
          onRemoveOption: event => {
            yellow8(honey8 => {
              let iris8 = honey8.filter(item => Nova1(item) !== Nova1(event.target));
              return iris8.length === 0 && amber8("reader"), iris8;
            });
          },
          onSelectOption: event => {
            yellow8(jewel8 => [...jewel8, event.target]);
          },
          getRemoveLabel: knoll8 => harbor8.formatMessage({
            id: "plugins.detail.shareDialog.removeSelectedUser",
            defaultMessage: "Remove {name}",
            description: "Accessible label for removing a selected workspace share target from the plugin share dialog"
          }, {
            name: knoll8.chipLabel ?? knoll8.label
          })
        }} />
      }} />, prism8 ? <DeferredUiU {...{
        children: <div className="flex items-center justify-between gap-3 rounded-md bg-token-foreground/5 px-3 py-2 text-sm"><span className="min-w-0 text-token-description-foreground">{<MemoizedFormattedMessage {...{
              id: "plugins.detail.shareDialog.sharedVersionOutOfDate",
              defaultMessage: "Shared version is out of date",
              description: "Status text shown in the plugin share dialog when the local plugin version is newer than the shared version"
            }} />}</span>{<ReadLoginRouteQuerySnapshot {...{
            color: "secondary",
            loading: nickel8,
            size: "default",
            onClick: () => {
              topaz8();
            },
            children: <MemoizedFormattedMessage {...{
              id: "plugins.detail.shareDialog.updateSharedVersion",
              defaultMessage: "Update",
              description: "Button label for uploading a newer local plugin version to an existing plugin share"
            }} />
          }} />}</div>
      }} /> : null, <DeferredUiU {...{
        children: <div className="flex flex-col gap-3"><div className="text-base font-medium">{<MemoizedFormattedMessage {...{
              id: "plugins.detail.shareDialog.whoHasAccess",
              defaultMessage: "Who has access",
              description: "Heading for the access section in the plugin sharing dialog"
            }} />}</div>{<Iris {...{
            shareAccess: ember8,
            onShareAccessChange: lunar8 => {
              flint8(lunar8);
            }
          }} />}<div className="flex flex-col gap-3">{hazel8.length === 0 ? <div className="text-sm text-token-description-foreground">{<MemoizedFormattedMessage {...{
                id: "plugins.detail.shareDialog.noInvitedShareTargets",
                defaultMessage: "No people or groups invited yet",
                description: "Empty state shown when no people or groups have been invited to a plugin yet"
              }} />}</div> : hazel8.map(item => <Jewel key={`${item.type}:${item.id}`} {...{
              isEditorRoleEnabled: indigo8,
              principal: item,
              onRoleChange: moss8 => {
                quill8(hazel8.map(_item => _item.type === item.type && _item.id === item.id ? {
                  ..._item,
                  role: moss8
                } : _item), ember8);
              },
              onRemoveAccess: () => {
                quill8(hazel8.filter(_item => _item.type !== item.type || _item.id !== item.id), ember8);
              }
            }} />)}</div></div>
      }} />, <DeferredUiU {...{
        children: <div className="mt-1 flex justify-end gap-2">{onStopSharing == null ? null : <ReadLoginRouteQuerySnapshot {...{
            className: "mr-auto -ml-4 enabled:hover:underline",
            color: "ghostMuted",
            disabled: olive8,
            loading: lemon8,
            size: "medium",
            onClick: () => {
              sage8();
            },
            children: <MemoizedFormattedMessage {...{
              id: "plugins.detail.stopSharing",
              defaultMessage: "Stop sharing",
              description: "Button label for stopping plugin sharing"
            }} />
          }} />}{<UseWorkspaceUsersF {...{
            actions: {
              invite: {
                type: "submit"
              },
              share: {
                onClick: () => {
                  quill8(hazel8, ember8);
                }
              }
            },
            cancelAction: nova8 ? {
              onClick: event => {
                event.preventDefault();
                yellow8([]);
                willow8("");
                amber8("reader");
                slate8("idle");
              }
            } : {
              onClick: event => {
                event.preventDefault();
                flint8(cedar8);
                slate8("idle");
              }
            },
            disabled: olive8,
            hasPendingAccessChange: mint8,
            hasPendingInvitees: nova8,
            idleActions: jade8 ? <ReadLoginRouteQuerySnapshot {...{
              color: "primary",
              disabled: true,
              size: "medium",
              children: [<VSCODE_EDITOR_ID {...{
                className: "icon-xs"
              }} />, <MemoizedFormattedMessage {...{
                id: "plugins.detail.shareDialog.saving",
                defaultMessage: "Saving",
                description: "Button label shown while plugin share settings are being saved"
              }} />]
            }} /> : <Knoll {...{
              state: river8
            }} />,
            isSaving: jade8,
            size: "medium",
            spinnerClassName: "icon-xs"
          }} />}</div>
      }} />]
    }} />
  }} />;
}
function _l(north8) {
  return north8.some(item => item.principal_type === "workspace") ? "workspace" : "invited";
}
function Ivory1(orbit8) {
  let pine8 = orbit8.flatMap(item => item.principal_type === "workspace" ? [] : [{
    email: null,
    id: item.principal_id,
    name: item.name,
    role: item.role ?? "reader",
    type: item.principal_type
  }]);
  return [...pine8.filter(item => item.role === "owner"), ...pine8.filter(item => item.role !== "owner")];
}
function Jasper1(quest8, ridge8) {
  switch (quest8.kind) {
    case "group":
      return {
        email: null,
        id: quest8.group.id,
        name: quest8.group.name,
        role: ridge8,
        type: "group"
      };
    case "user":
      return {
        email: quest8.user.email ?? null,
        id: quest8.user.account_user_id,
        name: useWorkspaceUsersU(quest8.user),
        role: ridge8,
        type: "user"
      };
  }
}
function Kelp1(storm8) {
  return {
    ...useWorkspaceUsersL(storm8),
    target: {
      kind: "user",
      user: storm8
    }
  };
}
function Lotus1(tide8, unity8) {
  return {
    chipLabel: tide8.name,
    Icon: ensureTeamIconInit,
    id: `group:${tide8.id}`,
    label: tide8.name,
    secondaryLabel: unity8.formatMessage({
      id: "shareDialog.workspaceGroupMemberCount",
      defaultMessage: "{count, plural, one {# member} other {# members}}",
      description: "Member count shown for a workspace group invite result"
    }, {
      count: tide8.num_members
    }),
    target: {
      kind: "group",
      group: tide8
    }
  };
}
function Mint1(vale8, wave8) {
  switch (vale8.kind) {
    case "group":
      return Lotus1(vale8.group, wave8);
    case "user":
      return Kelp1(vale8.user);
  }
}
function Nova1(apex8) {
  switch (apex8.kind) {
    case "group":
      return `group:${apex8.group.id}`;
    case "user":
      return `user:${apex8.user.account_user_id}`;
  }
}
function Olive1({
  existingGroupIds,
  selectedGroupIds,
  workspaceGroups
}) {
  let brook8 = new Set(existingGroupIds),
    cliff8 = new Set(selectedGroupIds);
  return workspaceGroups?.filter(dusk8 => !brook8.has(dusk8.id) && !cliff8.has(dusk8.id));
}
function Prism1(elm8, fern8) {
  return [...elm8.flatMap(item => item.role === "owner" ? [] : [{
    principal_type: item.type,
    principal_id: item.id,
    role: item.role
  }]), ...(fern8 == null ? [] : [fern8])];
}
function Quill1(grove8) {
  let hill8 = grove8.find(item => item.principal_type === "workspace");
  return hill8 == null ? null : {
    principal_type: hill8.principal_type,
    principal_id: hill8.principal_id,
    role: hill8.role === "editor" ? "editor" : "reader"
  };
}
function Reef1(isle8) {
  let {
      shareAccess,
      onShareAccessChange
    } = isle8,
    juniper8 = ["invited", "workspace"].map(Topaz1);
  return <UseWorkspaceUsersM {...{
    options: juniper8,
    value: shareAccess,
    renderLabel: Sage1,
    onChange: onShareAccessChange
  }} />;
}
function Sage1(lagoon8) {
  return <Lunar {...{
    shareAccess: lagoon8
  }} />;
}
function Topaz1(meadow8) {
  return {
    Icon: Drift1(meadow8),
    value: meadow8
  };
}
function Ultra1(nest8) {
  let {
    shareAccess
  } = nest8;
  switch (shareAccess) {
    case "invited":
      {
        let oak8;
        return <MemoizedFormattedMessage {...{
          id: "plugins.detail.shareDialog.access.invited",
          defaultMessage: "Only those invited",
          description: "Private access option for a shared plugin"
        }} />;
      }
    case "workspace":
      {
        let petal8;
        return <MemoizedFormattedMessage {...{
          id: "plugins.detail.shareDialog.access.workspace",
          defaultMessage: "Anyone in this workspace with the link",
          description: "Workspace-wide access option for a shared plugin"
        }} />;
      }
  }
}
function Vapor1(quiet8) {
  let {
      isEditorRoleEnabled,
      principal,
      onRoleChange,
      onRemoveAccess
    } = quiet8,
    rain8 = principal.role === "owner" ? <Moss {...{
      role: principal.role
    }} /> : <Quest {...{
      isEditorRoleEnabled,
      role: principal.role,
      onRoleChange,
      onRemoveAccess
    }} />;
  return <UseWorkspaceUsersI {...{
    label: principal.name,
    secondaryLabel: principal.email,
    trailingContent: rain8
  }} />;
}
