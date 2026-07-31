// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave5 stub-pass soft companions.
const $t: any = undefined;
const Chatgpt2: any = undefined;
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const on: any = undefined;

// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 5/8
/* split-lane-import-depth:1 */

import { ensureChatGptPlanIdInit } from "../../account/chatgpt-plan-ids";
import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan, isTeamPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { createAppScopeQueryAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAo } from "../../icons/app-icon-ao";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { readScrollTop } from "../../navigation/app-action-dom";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureCloudApiClientInit } from "../cloud-api-client";
import { previewCloudFilenamePattern, useCloudUserPreferences } from "../cloud-preferences";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft stubs.
const CloudEnvironmentsSettingsPageHelper46: any = undefined;
const CloudEnvironmentsSettingsPageHelper47: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
var cedar,
  daisy,
  ember,
  _n,
  flint,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp = esmInit(() => {
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    zinc();
    cedar = useQuery(appScopeAtom, ultra => ({
      queryKey: ["cloud-environments", "details", ultra],
      queryFn: () => bravo(ultra),
      refetchOnMount: true,
      staleTime: readScrollTop.FIVE_MINUTES
    }));
    daisy = createAppScopeQueryAtom(appScopeAtom, () => ({
      queryKey: ["cloud-environments", "machines"],
      queryFn: $t,
      refetchOnMount: true,
      retry: false,
      staleTime: readScrollTop.FIVE_MINUTES
    }));
    ember = createAppScopeQueryAtom(appScopeAtom, () => ({
      queryKey: ["cloud-environments", "github-connectors"],
      queryFn: copper,
      refetchOnMount: true,
      retry: false,
      staleTime: readScrollTop.FIVE_MINUTES
    }));
    _n = useQuery(appScopeAtom, ({
      connectorId,
      query
    }) => ({
      queryKey: ["cloud-environments", "repositories", connectorId, query],
      enabled: query !== "" && connectorId != null,
      queryFn: () => {
        if (connectorId == null) throw Error("A connector ID is required to search repositories");
        return delta(query, connectorId);
      },
      refetchOnMount: true,
      retry: false,
      staleTime: readScrollTop.FIVE_MINUTES
    }));
    flint = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationFn: echo,
      onSuccess: () => indigo(scope)
    }));
    garnet = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationFn: vapor => falcon(vapor),
      onSuccess: async (wheat, {
        environmentId
      }) => {
        await Promise.all([indigo(scope), scope.query.invalidate(cedar, environmentId, {
          exact: true
        })]);
      }
    }));
    hazel = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationFn: gamma,
      onSuccess: async (yarn, zephyr) => {
        scope.queryClient.removeQueries({
          queryKey: scope.query.getOptions(cedar, zephyr).queryKey
        });
        await indigo(scope);
      }
    }));
    ivory = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationFn: acorn => on(acorn),
      onSuccess: (bloom, coral) => scope.query.invalidate(cedar, coral, {
        exact: true
      })
    }));
    jasper = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationFn: drift => harbor(drift),
      onSuccess: async (eagle, {
        environmentId
      }) => {
        await Promise.all([indigo(scope), scope.query.invalidate(cedar, environmentId, {
          exact: true
        })]);
      }
    }));
  });
function lotus(frost) {
  let {
      form,
      isPending,
      preferredConnectorId
    } = frost,
    glide = useIntl(),
    [honey, iris] = olive.useState(""),
    jewel = honey.trim();
  let knoll = Chatgpt2(jewel, 200),
    [lunar, moss] = olive.useState(null),
    north = CodexPluginActionResult(ember),
    orbit = north.data?.find(vale => vale.id === (lunar ?? preferredConnectorId))?.id ?? north.data?.[0]?.id ?? null;
  let pine = orbit,
    quest = {
      connectorId: pine,
      query: knoll
    };
  let ridge = CodexBrowserSurfaceActionType(_n, quest),
    storm = honey.trim();
  let tide = knoll !== storm,
    unity = wave => {
      let {
        repositoryId,
        repositoryName
      } = wave;
      return <DropdownMenuPopover {...{
        contentMaxHeight: "list",
        contentWidth: "menu",
        disabled: isPending || north.isPending,
        triggerButton: <DropdownTriggerButton disabled={isPending || north.isPending}>
                {repositoryId === "" ? <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.repository.select",
            defaultMessage: "Select a repository",
            description: "Placeholder for the cloud environment repository selector"
          }} /> : repositoryName}
              </DropdownTriggerButton>,
        children: [north.isError ? <DropdownMenu.Item {...{
          onSelect: () => void north.refetch(),
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.connector.retry",
            defaultMessage: "Retry loading GitHub connections",
            description: "Button label for retrying GitHub connections in the cloud environment repository selector"
          }} />
        }} /> : north.data?.length === 0 ? <DropdownMenu.Message {...{
          centered: true,
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.connector.empty",
            defaultMessage: "No GitHub connections available",
            description: "Empty state when no GitHub connection can be used for a cloud environment"
          }} />
        }} /> : north.data != null && north.data.length > 1 ? <>
                  {<DropdownMenu.Section {...{
            children: [<DropdownMenu.SectionLabel {...{
              children: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.editor.connector",
                defaultMessage: "GitHub connection",
                description: "Label for choosing a GitHub connection when creating a cloud environment"
              }} />
            }} />, north.data.map(item => <DropdownMenu.Item key={item.id} {...{
              RightIcon: item.id === pine ? AppIconZlt : undefined,
              onSelect: () => {
                moss(item.id);
                form.setFieldValue("githubConnectorId", item.id);
                form.setFieldValue("repositoryId", "");
                form.setFieldValue("repositoryName", "");
              },
              children: item.name
            }} />)]
          }} />}
                  {<DropdownMenu.Separator {...{}} />}
                </> : null, pine == null ? null : <>
                  {<DropdownMenu.SearchInput {...{
            "aria-label": glide.formatMessage(quill.repositorySearch),
            autoFocus: true,
            placeholder: glide.formatMessage(quill.repositorySearch),
            trailingContent: ridge.isFetching || tide ? <VSCODE_EDITOR_ID {...{
              className: "icon-2xs"
            }} /> : undefined,
            value: honey,
            onChange: event => iris(event.currentTarget.value)
          }} />}
                  {tide ? null : knoll === "" ? <DropdownMenu.Message {...{
            centered: true,
            children: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.repository.searchPrompt",
              defaultMessage: "Search by repository name",
              description: "Prompt shown before searching for a cloud environment repository"
            }} />
          }} /> : ridge.isError ? <DropdownMenu.Message {...{
            centered: true,
            children: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.repository.error",
              defaultMessage: "Unable to load repositories",
              description: "Error shown when repository search fails"
            }} />
          }} /> : ridge.data?.repositories.length === 0 ? <DropdownMenu.Message {...{
            centered: true,
            children: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.repository.empty",
              defaultMessage: "No repositories found",
              description: "Empty state for cloud environment repository search"
            }} />
          }} /> : ridge.data?.repositories.map(apex => <DropdownMenu.Item key={apex.id} {...{
            onSelect: () => {
              form.setFieldValue("repositoryId", apex.id);
              form.setFieldValue("repositoryName", apex.repository_full_name);
              form.setFieldValue("githubConnectorId", alpha(apex.id) ?? pine);
            },
            children: apex.repository_full_name
          }} />)}
                </>]
      }} />;
    };
  return <form.Subscribe {...{
    selector: mint,
    children: unity
  }} />;
}
function mint(brook) {
  return {
    repositoryId: brook.values.repositoryId,
    repositoryName: brook.values.repositoryName
  };
}
var nova,
  olive,
  prism,
  quill,
  reef = esmInit(() => {
    nova = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    olive = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    ensureDropdownMenuPopoverInit();
    ensureSettingsSectionTitleInit();
    HasSeenKnowledgeWorkAnnouncement();
    jade();
    kelp();
    quill = identity({
      repositorySearch: {
        id: "settings.cloudEnvironments.editor.repository.search",
        defaultMessage: "Search repositories",
        description: "Accessible label and placeholder for searching repositories when creating a cloud environment"
      }
    });
  });
function sage(cliff) {
  let {
    environment,
    onCancel,
    onSaved
  } = cliff;
  if (environment == null) {
    let dusk;
    return <CloudEnvironmentsSettingsPageHelper46 {...{
      onCancel,
      onSaved
    }} />;
  }
  return <CloudEnvironmentsSettingsPageHelper47 {...{
    environment,
    onCancel,
    onSaved,
    preferredConnectorId: null
  }} />;
}
function topaz(elm) {
  let {
      onCancel,
      onSaved
    } = elm,
    fern = useCloudUserPreferences().data?.preferred_github_connector_id ?? null;
  return <CloudEnvironmentsSettingsPageHelper47 {...{
    environment: null,
    onCancel,
    onSaved,
    preferredConnectorId: fern
  }} />;
}
