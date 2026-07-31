// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 3/8
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

// Wave5d soft JSX companions.
function REDACTED(props: {
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

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialVC: any = undefined;
const CloudEnvironmentsSettingsPageHelper6: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function violet(quill) {
  let {
      form,
      isPending
    } = quill,
    reef = useIntl(),
    sage = topaz => <UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.sharing",
          defaultMessage: "Sharing",
          description: "Heading for cloud environment sharing settings"
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: [<EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.sharing.visibility",
              defaultMessage: "Visibility",
              description: "Label for cloud environment visibility"
            }} />,
            control: <AppInitialPl ariaLabel={reef.formatMessage({
              id: "settings.cloudEnvironments.editor.sharing.visibility.aria",
              defaultMessage: "Environment visibility",
              description: "Accessible label for cloud environment visibility"
            })} options={[{
              id: "private",
              label: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.sharing.private",
                defaultMessage: "Private",
                description: "Label for a private cloud environment"
              }} />,
              disabled: isPending
            }, {
              id: "workspace",
              label: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.sharing.workspace",
                defaultMessage: "Workspace",
                description: "Label for a workspace cloud environment"
              }} />,
              disabled: isPending
            }, {
              id: "public",
              label: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.sharing.public",
                defaultMessage: "Public",
                description: "Label for a public cloud environment"
              }} />,
              disabled: isPending
            }]} selectedId={topaz.shareSettings} onSelect={ultra => form.setFieldValue("shareSettings", ultra)} />
          }} />, <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.sharing.editors",
              defaultMessage: "Additional editors",
              description: "Label for additional cloud environment editors"
            }} />,
            control: <ReadLoginRouteQuerySnapshot {...{
              color: "secondary",
              disabled: isPending || topaz.shareSettings === "private",
              onClick: () => form.setFieldValue("shareTargets", [...topaz.shareTargets, ""]),
              size: "toolbar",
              type: "button",
              children: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.editor.sharing.addEditor",
                defaultMessage: "Add editor",
                description: "Button label for adding a cloud environment editor"
              }} />
            }} />
          }} />, topaz.shareTargets.map((item, index) => <EnsurePersonalizationCInit key={index} {...{
            label: null,
            variant: "nested",
            control: <div className="flex w-full items-center gap-2">
                                    {<CloudEnvironmentsSettingsPageHelper6 {...{
                "aria-label": reef.formatMessage({
                  id: "settings.cloudEnvironments.editor.sharing.editor.aria",
                  defaultMessage: "Editor email {number}",
                  description: "Accessible label for a cloud environment editor email input"
                }, {
                  number: index + 1
                }),
                disabled: isPending || topaz.shareSettings === "private",
                type: "email",
                value: item,
                onChange: event => form.setFieldValue("shareTargets", topaz.shareTargets.map((_item, _index) => _index === index ? event.target.value : _item))
              }} />}
                                    {<ReadLoginRouteQuerySnapshot {...{
                color: "secondary",
                disabled: isPending || topaz.shareSettings === "private",
                onClick: () => form.setFieldValue("shareTargets", topaz.shareTargets.filter((_item, _index) => _index !== index)),
                size: "toolbar",
                type: "button",
                children: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.sharing.removeEditor",
                  defaultMessage: "Remove",
                  description: "Button label for removing a cloud environment editor"
                }} />
              }} />}
                                  </div>
          }} />)]
        }} />
      }} />]
    }} />;
  return <form.Subscribe {...{
    selector: willow,
    children: sage
  }} />;
}
function willow(vapor) {
  return vapor.values;
}
var xenon,
  yellow,
  zinc = esmInit(() => {
    xenon = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    WritingBlockRenderer();
    AppInitialBC();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    umbra();
  });
function amber(wheat, yarn) {
  let zephyr = ivory(wheat);
  return {
    label: wheat?.label ?? "",
    description: wheat?.description ?? "",
    shareSettings: wheat?.share_settings ?? "private",
    shareTargets: wheat?.share_targets?.map(({
      email
    }) => email) ?? [],
    machineId: wheat?.machine_id ?? olive,
    repositoryId: wheat?.repos[0] ?? "",
    repositoryName: wheat?.repo_map?.[wheat.repos[0] ?? ""]?.repository_full_name ?? wheat?.repos[0] ?? "",
    githubConnectorId: wheat?.github_connector_id ?? yarn ?? null,
    workspaceDirectory: wheat?.workspace_dir ?? "/workspace",
    agentNetworkAccess: wheat?.agent_network_access ?? {
      mode: "off"
    },
    setupCommands: garnet(wheat?.setup),
    maintenanceSetupCommands: garnet(wheat?.maintenance_setup),
    secrets: zephyr.map(({
      name,
      domain
    }) => ({
      key: name,
      value: nova,
      domain,
      previousKey: name,
      previousDomain: domain
    })),
    environmentVariables: Object.entries(wheat?.env_vars ?? {}).map(([acorn, bloom]) => ({
      key: acorn,
      value: bloom
    })),
    autoSetupSettings: wheat?.auto_setup_settings ?? {
      use_auto_setup: true
    },
    cacheSettings: wheat?.cache_settings ?? {
      post_setup_cache_enabled: true
    },
    enableAuthtranslator: wheat?.enable_authtranslator ?? false,
    enableDockerInDocker: wheat?.enable_docker_in_docker ?? false
  };
}
function basalt(coral) {
  let drift = {};
  coral.label.trim() === "" && (drift.label = "required");
  coral.machineId === "" && (drift.machineId = "required");
  coral.repositoryId === "" && (drift.repositoryId = "required");
  let eagle = coral.secrets.map(({
    key,
    domain
  }) => ({
    key: key.trim(),
    identity: kelp(key.trim(), lotus(domain))
  }));
  eagle.some(({
    key
  }) => key === "") ? drift.secrets = "name-required" : new Set(eagle.map(({
    identity
  }) => identity)).size === eagle.length ? coral.secrets.some(({
    value
  }) => value.trim() === "") ? drift.secrets = "value-required" : coral.secrets.some(mint) && (drift.secrets = "global-rename-value-required") : drift.secrets = "duplicate-name";
  let frost = coral.environmentVariables.map(({
    key
  }) => key.trim());
  return frost.some(item => item === "") ? drift.environmentVariables = "name-required" : new Set(frost).size === frost.length ? coral.environmentVariables.some(({
    value
  }) => value.trim() === "") && (drift.environmentVariables = "value-required") : drift.environmentVariables = "duplicate-name", drift;
}
function cedar(glide, honey, iris) {
  return (honey || glide.machineId === iris) && Object.keys(basalt(glide)).length === 0;
}
function daisy(jewel) {
  return {
    label: jewel.label.trim(),
    description: jewel.description,
    machine_id: jewel.machineId,
    repos: [jewel.repositoryId],
    github_connector_id: jewel.githubConnectorId,
    workspace_dir: jewel.workspaceDirectory,
    agent_network_access: jewel.agentNetworkAccess,
    setup: jewel.setupCommands,
    maintenance_setup: jewel.maintenanceSetupCommands,
    env_vars: Object.fromEntries(jewel.environmentVariables.map(({
      key,
      value
    }) => [key.trim(), value])),
    secrets_with_domains: jewel.secrets.map(({
      key,
      value,
      domain
    }) => ({
      name: key.trim(),
      domain: lotus(domain),
      value
    })),
    share_settings: jewel.shareSettings,
    share_targets: hazel(jewel),
    auto_setup_settings: jewel.autoSetupSettings,
    cache_settings: jewel.cacheSettings,
    enable_authtranslator: jewel.enableAuthtranslator,
    enable_docker_in_docker: jewel.enableDockerInDocker
  };
}
function ember(knoll) {
  let lunar = knoll.indexOf(":");
  return lunar === -1 ? null : knoll.slice(7, lunar);
}
function flint(moss, north) {
  return {
    etag: north.etag,
    label: moss.label.trim(),
    description: moss.description,
    machine_id: moss.machineId,
    workspace_dir: moss.workspaceDirectory,
    agent_network_access: moss.agentNetworkAccess,
    setup: moss.setupCommands,
    maintenance_setup: moss.maintenanceSetupCommands,
    env_vars: Object.fromEntries(moss.environmentVariables.map(({
      key,
      value
    }) => [key.trim(), value])),
    secrets_with_domains: jasper(moss.secrets, ivory(north)),
    share_settings: moss.shareSettings,
    share_targets: hazel(moss),
    auto_setup_settings: moss.autoSetupSettings,
    cache_settings: moss.cacheSettings,
    enable_authtranslator: moss.enableAuthtranslator,
    enable_docker_in_docker: moss.enableDockerInDocker
  };
}
function garnet(orbit) {
  return Array.isArray(orbit) ? orbit.join("\n") : orbit ?? "";
}
function hazel(pine) {
  return pine.shareSettings === "private" ? [] : pine.shareTargets.map(item => item.trim()).filter(item => item !== "").map(item => ({
    email: item,
    permission: "editor",
    type: "user"
  }));
}
function ivory(quest) {
  return quest?.secrets_with_domains == null ? Object.keys(quest?.secrets ?? {}).map(item => {
    let [ridge, ...storm] = item.split("::");
    return storm.length === 0 ? {
      name: item,
      domain: null
    } : {
      name: storm.join("::") || item,
      domain: ridge || null
    };
  }) : quest.secrets_with_domains.flatMap(item => typeof item.name != "string" || item.name === "" ? [] : [{
    name: item.name,
    domain: item.domain ?? null
  }]);
}
function jasper(tide, unity) {
  let vale = new Set(),
    wave = [];
  for (let apex of tide) {
    let brook = apex.key.trim(),
      cliff = lotus(apex.domain);
    if (apex.previousDomain === undefined) {
      apex.value !== "" && (vale.add(kelp(brook, cliff)), wave.push({
        name: brook,
        domain: cliff,
        value: apex.value
      }));
      continue;
    }
    let dusk = apex.previousKey ?? apex.key,
      elm = lotus(apex.previousDomain);
    vale.add(kelp(dusk, elm));
    let fern = dusk !== brook,
      grove = elm !== cliff,
      hill = apex.value !== nova;
    !fern && !grove && !hill || wave.push({
      name: brook,
      domain: cliff,
      value: hill ? apex.value : null,
      previous_domain: elm,
      ...(fern ? {
        previous_name: dusk
      } : {})
    });
  }
  for (let {
    name,
    domain
  } of unity) {
    let isle = kelp(name, domain);
    vale.has(isle) || wave.push({
      name,
      domain: null,
      value: null,
      previous_domain: domain
    });
  }
  return wave;
}
function kelp(juniper, lagoon) {
  return `${juniper}::${lagoon ?? "__global__"}`;
}
function lotus(meadow) {
  return meadow?.trim() || null;
}
function mint(event) {
  return event.previousDomain !== undefined && event.previousDomain == null && lotus(event.domain) == null && event.previousKey != null && event.previousKey !== event.key.trim() && event.value === "<REDACTED>";
}
var nova,
  olive,
  prism = esmInit(() => {
    nova = "<REDACTED>";
    olive = "wham-public/wham-universal";
  });
