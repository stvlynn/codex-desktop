// Restored from ref/webview/assets/composer-work-home-plugins-control.electron-NF4BT3EF.js
// Chat-home composer Plugins picker: search, toggle mentions, connect featured plugins.

import {
  useRef,
  useState,
  type ChangeEvent,
  type ReactElement,
  type ReactNode,
} from "react";

import {
  createAppScope,
  ensureAppScopeHostInit,
  useAppScope,
} from "../boundaries/app-scope-runtime";
import {
  ensureComposerEsm_AG_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Utt_Init,
} from "../boundaries/composer-esm-inits";
import { useNavigate } from "../boundaries/react-router-navigation";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../home/onboarding-storage-keys";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { AppIconLV } from "../icons/app-icon-lv";
import { PlusIcon } from "../icons/plus-icon";
import { CodexPluginDirectoryEntrypoint } from "../plugins/codex-plugin-directory-entrypoint";
import {
  connectPluginsSubmenuItemI as useConnectPluginsSubmenuModel,
  connectPluginsSubmenuItemN as ensureConnectPluginsSubmenuItemInit,
  connectPluginsSubmenuItemR as ensureConnectPluginsSubmenuModelInit,
  connectPluginsSubmenuItemT as ConnectPluginsSubmenuSection,
} from "../plugins/connect-plugins-submenu-item";
import { filterPluginsByMarketplaceQuery } from "../plugins/filter-plugins-by-marketplace-query";
import { navigateToPluginsOrSkills } from "../plugins/navigate-to-plugins-or-skills";
import { UseInstallPluginForHost } from "../plugins/use-install-plugin-for-host";
import { esmInit } from "../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../skills/skills-page-helpers";
import { AppLogoImage } from "../ui/app-logo-image";
import {
  ConnectorLogoStack,
  ensureConnectorLogoStackInit,
} from "../ui/connector-logo-stack";
import { DropdownMenu, ensureDropdownMenuInit } from "../ui/dropdown-menu";
import { Spinner } from "../ui/spinner";
import { identity } from "../utils/identity";
import { ComposerCategoryValueChip } from "./composer-category-value-chip";
import { ComposerNavigationMenuButton } from "./composer-navigation-menu-button";
import { composerNavigation2 as ensureComposerNavigation2Init } from "./composer-navigation2";
import { formatPluginMentionLabels } from "./format-plugin-mention-labels";
import { getPluginDisplayName } from "./get-plugin-display-name";
import { toPluginMentionItem } from "./to-plugin-mention-item";

/** Bundle `kY` — conversation app-scope brand (deferred extract). */
const pluginDirectoryAppScope = createAppScope("plugin-directory");
/** Bundle `iM` — composer controller selector subscription (deferred UI). */
const useComposerControllerSelector: any = undefined;
/** Bundle `bS` / ariaLabel init companion. */
const ensureAriaLabelInit: any = undefined;
/** Bundle `uw` / Skills2 init companion. */
const ensureSkills2Init: any = undefined;
/** Bundle `yM` / macOS2 init companion. */
const ensureMacOs2Init: any = undefined;
/** Bundle `nM` / completeQuery init companion. */
const ensureCompleteQueryInit: any = undefined;
/** Bundle `xJ` / ensureComposerEsm_xJ_Init. */
const ensureComposerEsm_xJ_Init: any = undefined;
/** Bundle `eq` / ensurePluginDisplayNameHelperInit. */
const ensurePluginDisplayNameHelperInit: any = undefined;
/** Bundle `PY` / composerScope init. */
const ensureComposerScopeInit: any = undefined;
/** Bundle `Qo` / ensureSidebarModeClusterInit. */
const ensureSidebarModeClusterInit: any = undefined;

export type PluginInstallationStatus = {
  phase: "loading" | "installing" | string;
  pluginDisplayName: string;
  hostId?: string;
} | null;

export type ComposerPluginRow = {
  plugin: {
    id: string;
    name: string;
  };
  logoPath?: string | null;
  logoDarkPath?: string | null;
  displayName?: string | null;
};

export type ComposerControllerForPlugins = {
  insertMentionAtSelection: (mention: unknown) => void;
  removePluginMentions: (pluginId: string) => void;
  getMentionedPluginIdsKey: () => string;
};

export type ComposerWorkHomePluginsControlProps = {
  composerController: ComposerControllerForPlugins;
  cwd?: string | null;
  hostId: string;
  onRequestComposerFocus: () => void;
};

export type PluginsPickerMenuProps = {
  connectedPlugins: ComposerPluginRow[];
  featuredPlugins: ComposerPluginRow[];
  hasLoadError: boolean;
  isLoading: boolean;
  onConnectPlugin: (plugin: ComposerPluginRow) => void;
  onOpenPluginDirectory: () => void;
  onPluginSelectionChange: (
    plugin: ComposerPluginRow,
    checked: boolean,
  ) => void;
  onRequestComposerFocus: () => void;
  pluginInstallationStatus: PluginInstallationStatus;
  selectedPluginIds: string[];
};

const pluginsPickerMessages = identity({
  pluginsTooltip: {
    id: "composer.workMode.plugins.tooltip",
    defaultMessage: "Work with ChatGPT across your favorite tools",
    description:
      "Tooltip for the Plugins picker in the Chat home composer utility bar",
  },
  connectPlugins: {
    id: "composer.workMode.plugins.connect",
    defaultMessage: "Connect plugins",
    description:
      "Label and action for connecting plugins from the Chat home composer plugin picker",
  },
  installingPlugin: {
    id: "composer.workMode.plugins.installing",
    defaultMessage: "Installing {pluginName}",
    description: "Label for the Plugins picker while installing a named plugin",
  },
  loadingPlugin: {
    id: "composer.workMode.plugins.loading",
    defaultMessage: "Loading {pluginName}",
    description:
      "Label for the Plugins picker while loading a named plugin installation",
  },
});

function PluginsPickerLoadingChip(): ReactElement {
  return (
    <ComposerCategoryValueChip
      categoryLabel={null}
      className="disabled:cursor-default disabled:opacity-100"
      collapse="xs"
      disabled={true}
      icon={null}
      indicator="none"
      value={
        <span className="flex items-center gap-1">
          <Spinner className="icon-xs shrink-0 text-token-text-secondary" />
          <span>
            <MemoizedFormattedMessage
              id="composer.workMode.plugins.label"
              defaultMessage="Plugins"
              description="Label for the Plugins picker in the Chat home composer utility bar"
            />
          </span>
        </span>
      }
      valueClassName="!max-w-60 text-token-foreground"
    />
  );
}

function pluginRowLabel(pluginRow: ComposerPluginRow): string {
  const fromRow = pluginRow.displayName?.trim();
  if (fromRow) return fromRow;
  return getPluginDisplayName(pluginRow.plugin);
}

function ConnectedPluginLogo({
  pluginRow,
}: {
  pluginRow: ComposerPluginRow;
}): ReactElement {
  return (
    <AppLogoImage
      alt=""
      className="size-full object-contain"
      knownAppId={pluginRow.plugin.name}
      logoDarkUrl={pluginRow.logoDarkPath}
      logoUrl={pluginRow.logoPath}
      fallback={<AppIconLV className="size-1/2 text-token-text-secondary" />}
    />
  ) as ReactElement;
}

function PluginsPickerMenu({
  connectedPlugins,
  featuredPlugins,
  hasLoadError,
  isLoading,
  onConnectPlugin,
  onOpenPluginDirectory,
  onPluginSelectionChange,
  onRequestComposerFocus,
  pluginInstallationStatus,
  selectedPluginIds,
}: PluginsPickerMenuProps): ReactNode {
  const intl = useIntl();
  const skipCloseFocusRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlugins = filterPluginsByMarketplaceQuery({
    plugins: connectedPlugins,
    query: searchQuery,
  });
  const hasSearchQuery = searchQuery.trim().length > 0;
  const hasConnectedPlugins = connectedPlugins.length > 0;

  const pluginsLabel = intl.formatMessage({
    id: "composer.workMode.plugins.label",
    defaultMessage: "Plugins",
    description:
      "Label for the Plugins picker in the Chat home composer utility bar",
  });
  const connectPluginsLabel = intl.formatMessage(
    pluginsPickerMessages.connectPlugins,
  );
  const pluginsTooltip = intl.formatMessage(
    pluginsPickerMessages.pluginsTooltip,
  );
  const installationLabel =
    pluginInstallationStatus == null
      ? null
      : pluginInstallationStatus.phase === "loading"
        ? intl.formatMessage(pluginsPickerMessages.loadingPlugin, {
            pluginName: pluginInstallationStatus.pluginDisplayName,
          })
        : intl.formatMessage(pluginsPickerMessages.installingPlugin, {
            pluginName: pluginInstallationStatus.pluginDisplayName,
          });

  const valueLabel =
    installationLabel ??
    (hasConnectedPlugins ? pluginsLabel : connectPluginsLabel);
  const valueNode =
    installationLabel == null ? (
      valueLabel
    ) : (
      <span className="loading-shimmer-pure-text [--text-primary:var(--color-token-foreground)]">
        {valueLabel}
      </span>
    );

  if (isLoading) {
    return <PluginsPickerLoadingChip />;
  }

  const triggerIcon = hasConnectedPlugins ? null : (
    <AppIconLV aria-hidden={true} className="icon-xs shrink-0" />
  );

  const triggerValue = hasConnectedPlugins ? (
    <span className="flex items-center gap-1">
      <span aria-hidden={true} className="flex items-center">
        {connectedPlugins.length < 3 ? (
          <PlusIcon className="icon-xs shrink-0" />
        ) : null}
        <ConnectorLogoStack size="small">
          {connectedPlugins.slice(0, 3).map((pluginRow) => (
            <ConnectedPluginLogo
              key={pluginRow.plugin.id}
              pluginRow={pluginRow}
            />
          ))}
        </ConnectorLogoStack>
      </span>
      {valueNode}
    </span>
  ) : (
    valueNode
  );

  const handleOpenChange = (open: boolean) => {
    setMenuOpen(open);
    if (open) setSearchQuery("");
  };

  const handleCloseAutoFocus = (event: Event) => {
    if (skipCloseFocusRef.current) {
      skipCloseFocusRef.current = false;
      event.preventDefault();
      onRequestComposerFocus();
    }
  };

  const searchPlaceholder = intl.formatMessage({
    id: "composer.workMode.plugins.search",
    defaultMessage: "Search plugins…",
    description:
      "Placeholder for the plugin search field in the Chat home composer",
  });

  const pluginItems = filteredPlugins.map((item: ComposerPluginRow) => (
    <DropdownMenu.CheckboxItem
      key={item.plugin.id}
      checked={selectedPluginIds.includes(item.plugin.id)}
      onCheckedChange={(checked: boolean) => {
        skipCloseFocusRef.current = true;
        onPluginSelectionChange(item, checked);
        setMenuOpen(false);
      }}
    >
      <DropdownMenu.ItemIcon size="xs">
        <AppLogoImage
          alt=""
          className="size-full object-contain"
          knownAppId={item.plugin.name}
          logoDarkUrl={item.logoDarkPath}
          logoUrl={item.logoPath}
          fallback={
            <AppIconLV className="size-full text-token-text-secondary" />
          }
        />
      </DropdownMenu.ItemIcon>
      <span>{pluginRowLabel(item)}</span>
    </DropdownMenu.CheckboxItem>
  ));

  const emptyOrErrorMessage = hasLoadError ? (
    <DropdownMenu.Message compact={true} role="status" tone="error">
      <MemoizedFormattedMessage
        id="composer.workMode.plugins.loadError"
        defaultMessage="Couldn't load plugins"
        description="Error shown when plugins fail to load in the Chat home composer"
      />
    </DropdownMenu.Message>
  ) : filteredPlugins.length === 0 ? (
    <DropdownMenu.Message compact={true} role="status">
      {hasSearchQuery ? (
        <MemoizedFormattedMessage
          id="composer.workMode.plugins.search.empty"
          defaultMessage="No plugins found"
          description="Empty state when plugin search has no matches in the Chat home composer"
        />
      ) : (
        <MemoizedFormattedMessage
          id="composer.workMode.plugins.installed.empty"
          defaultMessage="No connected plugins"
          description="Empty state when there are no connected and available plugins in the Chat home composer"
        />
      )}
    </DropdownMenu.Message>
  ) : null;

  return (
    <ComposerNavigationMenuButton
      aria-label={valueLabel}
      data-composer-navigation-target="plugins"
      contentClassName="overflow-hidden!"
      contentMaxHeight="list"
      contentSurface="opaque"
      contentWidth="menuWide"
      icon={triggerIcon}
      menuOpen={menuOpen}
      tooltipContent={pluginsTooltip}
      value={triggerValue}
      onOpenChange={handleOpenChange}
      onCloseAutoFocus={handleCloseAutoFocus}
    >
      <DropdownMenu.SearchInput
        autoFocus={true}
        className="mb-1"
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.currentTarget.value)
        }
      />
      <DropdownMenu.Section className="min-h-0 flex-1 overflow-y-auto">
        {pluginItems}
        {emptyOrErrorMessage}
      </DropdownMenu.Section>
      <DropdownMenu.Separator />
      <DropdownMenu.Section className="flex flex-col">
        <ConnectPluginsSubmenuSection
          featuredPlugins={featuredPlugins}
          label={
            <MemoizedFormattedMessage
              {...pluginsPickerMessages.connectPlugins}
            />
          }
          onConnectPlugin={onConnectPlugin}
          onOpenPluginDirectory={onOpenPluginDirectory}
        />
      </DropdownMenu.Section>
    </ComposerNavigationMenuButton>
  );
}

function mentionedPluginIdsKeySelector(
  composerController: ComposerControllerForPlugins,
): string {
  return composerController.getMentionedPluginIdsKey();
}

/**
 * Bundle export surface used as `ComposerWorkHomePluginsControl`.
 */
export function ComposerWorkHomePluginsControl(
  props: ComposerWorkHomePluginsControlProps,
): ReactNode {
  const { composerController, cwd, hostId, onRequestComposerFocus } = props;
  const intl = useIntl();
  const navigate = useNavigate();
  const appScope = useAppScope(pluginDirectoryAppScope);
  const onPluginInstalledForHost = UseInstallPluginForHost({ hostId });
  const mentionedPluginIdsKey = useComposerControllerSelector?.(
    composerController,
    mentionedPluginIdsKeySelector,
  );

  const {
    connectedPlugins,
    featuredPlugins,
    hasLoadError,
    isLoading,
    openPluginInstall,
    pluginsFeatureEnabled,
    pluginInstallationStatus,
  } = useConnectPluginsSubmenuModel({ cwd, hostId });

  if (!pluginsFeatureEnabled) return null;

  const openPluginDirectory = () => {
    navigateToPluginsOrSkills(
      appScope,
      navigate,
      pluginsFeatureEnabled,
      CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER,
      hostId,
    );
  };

  const handlePluginSelectionChange = (
    pluginRow: ComposerPluginRow,
    checked: boolean,
  ) => {
    if (checked) {
      composerController.insertMentionAtSelection(
        toPluginMentionItem(pluginRow, formatPluginMentionLabels(intl)),
      );
      onPluginInstalledForHost?.(pluginRow);
      return;
    }
    composerController.removePluginMentions(pluginRow.plugin.id);
  };

  const selectedPluginIds =
    mentionedPluginIdsKey === "" || mentionedPluginIdsKey == null
      ? []
      : String(mentionedPluginIdsKey).split("\0");

  return (
    <PluginsPickerMenu
      connectedPlugins={connectedPlugins as ComposerPluginRow[]}
      featuredPlugins={featuredPlugins as ComposerPluginRow[]}
      hasLoadError={Boolean(hasLoadError)}
      isLoading={Boolean(isLoading)}
      onConnectPlugin={openPluginInstall as (plugin: ComposerPluginRow) => void}
      onOpenPluginDirectory={openPluginDirectory}
      onPluginSelectionChange={handlePluginSelectionChange}
      onRequestComposerFocus={onRequestComposerFocus}
      pluginInstallationStatus={
        pluginInstallationStatus as PluginInstallationStatus
      }
      selectedPluginIds={selectedPluginIds}
    />
  );
}

/** Alias kept for electron chunk consumers — not a separate public export. */
const ComposerWorkHomePluginsControlElectron = ComposerWorkHomePluginsControl;
void ComposerWorkHomePluginsControlElectron;

/** Rolldown ESM init retained as no-op after promote. */
function ensureComposerWorkHomePluginsControlInit(): void {
  esmInit(() => {
    ensureIntlFormattersInit();
    ensureComposerEsm_AG_Init();
    ensureConnectorLogoStackInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_RV_Init();
    ensureSkillsPageHelpersInit();
    ensureConnectPluginsSubmenuItemInit();
    void CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY;
    ensureConnectPluginsSubmenuModelInit();
    ensureComposerEsm_Sut_Init();
    ensureComposerNavigation2Init();
    ensureAriaLabelInit?.();
    ensureComposerEsm_Utt_Init();
    ensureComposerEsm_MT_Init();
    ensureComposerEsm_P5_Init();
    ensureComposerScopeInit?.();
    ensureSidebarModeClusterInit?.();
    ensureAppScopeHostInit();
    ensurePluginDisplayNameHelperInit?.();
    ensureCompleteQueryInit?.();
    ensureComposerEsm_xJ_Init?.();
    ensureSkills2Init?.();
    ensureMacOs2Init?.();
  });
}

// Touch init so side-effect imports stay referenced without a public export.
void ensureComposerWorkHomePluginsControlInit;

/** Soft-shell bind no longer required after full body promote. */
function bindComposerWorkHomePluginsControl(
  _next: (props: ComposerWorkHomePluginsControlProps) => ReactNode,
): void {}
void bindComposerWorkHomePluginsControl;
