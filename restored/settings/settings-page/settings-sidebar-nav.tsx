// Restored from ref/webview/assets/settings-page-CXDiYo2f.js
// Settings sidebar navigation, search field, and external account/security links.

import { useRef, useState, type ReactNode } from "react";
import { ConversationPageShell } from "../../conversation/conversation-page-shell";
import { CodexMicroDeviceGate } from "../../devices/codex-micro-device-gate";
import { codexMicroDeviceNameMessages } from "../../devices/codex-micro-device-name-messages";
import { useFeatureGateEnabled } from "../../feature-gates/use-feature-gate-enabled";
import {
  getVisibleSettingsNavEntries,
  getVisibleSettingsSectionComponents,
  VISIBLE_SETTINGS_GATE_ID,
} from "../../hooks/use-visible-settings-sections";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconB } from "../../icons/app-icon-b";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconsz } from "../../icons/app-icon-sz";
import { CloseIcon } from "../../icons/close-icon";
import { handleAnchorOpenHref } from "../../navigation/handle-anchor-open-href";
import { openHrefViaBrowserBridge } from "../../navigation/open-href-via-browser-bridge";
import { cx } from "../../ui/cx";
import { ExternalLinkIconButton } from "../../ui/external-link-icon-button";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { useListKeyboardNavigation } from "../../ui/use-list-keyboard-navigation";
import { lookupMessageDescriptor } from "../../utils/lookup-message-descriptor";
import { scoreFuzzyMatch } from "../../utils/score-fuzzy-match";
import { SettingsPetsNavIcon } from "../settings-pets-nav-icon";
import {
  collectSettingsSearchHits,
  useSettingsSearchIndex,
} from "./settings-search";
import {
  DEFAULT_SETTINGS_SECTION_ORDER,
  SETTINGS_SECTION_NAV_GROUPS,
  SIDEBAR_COLLAPSE_TOGGLE,
} from "./settings-section-groups";
import {
  prefetchKeyedResource,
  WorktreesSettingsAcceleratorRow,
} from "./runtime-bridges";

type SettingsSidebarSectionGroupProps = {
  className?: string;
  title?: ReactNode;
  children?: ReactNode;
};

/** Sidebar nav group with optional heading (bundle export `ds` — not zod normalizeErrorParams). */
function SettingsSidebarSectionGroup({
  className,
  title,
  children,
}: SettingsSidebarSectionGroupProps) {
  return (
    <div className={cx("flex flex-col", className)}>
      {title != null ? (
        <div className="px-row-x pb-1 text-sm font-medium text-token-text-secondary">
          {title}
        </div>
      ) : null}
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export type RenderSettingsSidebarTrailingProps = {
  settingsSections: any[];
  activeSection: string | null;
  onSelect: (slug: string) => void;
  className?: string;
  onBack?: () => void;
  canCollapse?: boolean;
  groupSettingsSections?: boolean;
  onClearHostFilter?: (() => void) | null;
  searchHostId?: string;
  searchTargets?: any[];
  sidebarHostSelector?: ReactNode;
  codexMicroDeviceModel?: string | null;
  securitySettingsEnabled?: boolean;
};

export function RenderSettingsSidebarTrailing(
  props: RenderSettingsSidebarTrailingProps,
) {
  return <SettingsSidebarTrailingContent {...props} />;
}
function SettingsSidebarTrailingContent(props) {
  let securitySettingsEnabled = useFeatureGateEnabled(VISIBLE_SETTINGS_GATE_ID);
  return (
    <SettingsSidebarNav
      {...props}
      securitySettingsEnabled={securitySettingsEnabled}
    />
  );
}
function SettingsSidebarNav(props) {
  let {
      settingsSections,
      activeSection,
      onSelect,
      className,
      onBack,
      canCollapse = false,
      groupSettingsSections = false,
      onClearHostFilter,
      searchHostId,
      searchTargets,
      sidebarHostSelector,
      codexMicroDeviceModel = null,
      securitySettingsEnabled,
    } = props,
    resolvedSearchHostId =
      searchHostId === undefined ? LOCAL_HOST_ID : searchHostId,
    intl = useIntl(),
    [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false),
    [searchQuery, setSearchQuery] = useState(""),
    hideLabels = canCollapse && isSidebarCollapsed,
    showGroupedSearch = groupSettingsSections && !hideLabels,
    isSearchActive = showGroupedSearch && searchQuery.trim().length > 0;
  let searchEnabled = isSearchActive,
    searchIndexOptions = {
      enabled: searchEnabled,
      query: searchQuery,
      selectedHostId: resolvedSearchHostId,
    };
  let defaultSearchTargets = useSettingsSearchIndex(searchIndexOptions),
    searchResults;
  {
    let searchHits = collectSettingsSearchHits({
        codexMicroDeviceModel: codexMicroDeviceModel,
        intl: intl,
        query: searchQuery,
        targets: searchTargets ?? defaultSearchTargets,
        visibleSectionSlugs: settingsSections.flatMap(
          visibleSectionSlugsFromEntry,
        ),
      }),
      securitySettingsLabel = intl.formatMessage(
        getVisibleSettingsNavEntries.securitySettings.message,
      );
    searchResults = [
      ...searchHits.map(toSettingsSectionListItem),
      ...(securitySettingsEnabled &&
      scoreFuzzyMatch(securitySettingsLabel, searchQuery) > 0
        ? [
            {
              href: getVisibleSettingsNavEntries.securitySettings.href,
              id: "external:security-settings",
              kind: "external",
              label: securitySettingsLabel,
            },
          ]
        : []),
    ];
  }
  let resolvedSearchResults = searchResults,
    searchResultIds = resolvedSearchResults.map(getSettingsItemId);
  let searchResultIdsKey = searchResultIds.join("\0"),
    keyboardNavItems =
      searchResultIdsKey.length === 0 ? [] : searchResultIdsKey.split("\0");
  let listNavigationItems = keyboardNavItems,
    isKeyboardNavActive = showGroupedSearch && searchQuery.length > 0,
    handleSearchResultSelect = (_items, index) => {
      let selectedResult = resolvedSearchResults[index];
      selectedResult != null &&
        (selectedResult.kind === "section"
          ? onSelect(selectedResult.sectionSlug)
          : openHrefViaBrowserBridge({
              href: selectedResult.href,
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
            }));
    };
  let handleSearchResultHighlight = (_items, index) => {
    let highlightedResult = resolvedSearchResults[index];
    highlightedResult?.kind === "section" &&
      prefetchKeyedResource(highlightedResult.sectionSlug).catch(
        ignorePrefetchError,
      );
  };
  let clearSearchQuery = () => {
    setSearchQuery("");
  };
  let listKeyboardNavigationOptions = {
    items: listNavigationItems,
    isActive: isKeyboardNavActive,
    autoHighlightFirst: false,
    onSelect: handleSearchResultSelect,
    onHighlight: handleSearchResultHighlight,
    onEscape: clearSearchQuery,
  };
  let listKeyboardNavigation = useListKeyboardNavigation(
      listKeyboardNavigationOptions,
    ),
    notImplementedTooltip = (
      <MemoizedFormattedMessage
        id="settings.nav.notImplemented"
        defaultMessage="[alpha] Not available in Alpha"
        description="Tooltip shown for settings sections that are not available in the alpha build"
      />
    );
  let disabledSectionTooltip = notImplementedTooltip,
    externalLinkTooltip = (
      <MemoizedFormattedMessage
        id="settings.nav.externalTooltip"
        defaultMessage="[alpha] Opens in browser"
        description="Tooltip for settings items that open externally during alpha"
      />
    );
  let opensInBrowserTooltip = externalLinkTooltip,
    collapseToggleConfig = hideLabels
      ? SIDEBAR_COLLAPSE_TOGGLE.collapsed
      : SIDEBAR_COLLAPSE_TOGGLE.expanded,
    collapseToggleLabel = intl.formatMessage(collapseToggleConfig.message);
  let collapseToggleAriaLabel = collapseToggleLabel,
    collapseToggleIcon = collapseToggleConfig.icon,
    navScrollClassName,
    navMainContent,
    navBodyClassName,
    collapseToggleElement,
    backLinkElement,
    hostSelectorElement,
    searchFieldElement,
    navClassName,
    navAriaLabel;
  {
    let sectionGroups = [
      {
        key: "settings",
        heading: null,
        sections: orderSettingsSectionsBySlug(
          settingsSections,
          DEFAULT_SETTINGS_SECTION_ORDER,
        ),
      },
    ];
    groupSettingsSections &&
      (sectionGroups = mergeSettingsSectionsBySlug(
        settingsSections,
        SETTINGS_SECTION_NAV_GROUPS,
      ));
    let flatInteractiveSections = sectionGroups.flatMap(
      filterEnabledSettingsSections,
    );
    navClassName = cx(
      "flex min-h-0 flex-1 flex-col select-none px-row-x",
      className,
    );
    navAriaLabel = intl.formatMessage({
      id: "settings.nav.ariaLabel",
      defaultMessage: "Settings",
      description: "Aria label for settings navigation",
    });
    navBodyClassName = "flex min-h-0 flex-1 flex-col";
    collapseToggleElement = canCollapse ? (
      <div className="mb-2 shrink-0">
        {
          <OptionalTooltip
            tooltipContent={
              <MemoizedFormattedMessage {...collapseToggleConfig.message} />
            }
          >
            <ConversationPageShell
              aria-label={collapseToggleAriaLabel}
              fullWidth={false}
              icon={collapseToggleIcon}
              iconClassName="icon-xs"
              hideLabel={true}
              label={
                <MemoizedFormattedMessage {...collapseToggleConfig.message} />
              }
              title={collapseToggleAriaLabel}
              onClick={() => {
                setIsSidebarCollapsed(isTruthyNegated);
              }}
            />
          </OptionalTooltip>
        }
      </div>
    ) : null;
    backLinkElement = onBack ? (
      <div
        role="link"
        tabIndex={0}
        className={cx(
          "sidebar-item group relative mb-2 flex w-full items-center px-row-x py-row-y text-base outline-none",
          !hideLabels && "gap-2",
          "cursor-interaction text-token-text-secondary hover:bg-token-list-hover-background",
          "focus-visible:ring-token-focus focus-visible:ring-1 electron:opacity-75",
          "shrink-0",
        )}
        onClick={onBack}
        onKeyDown={(event) => {
          (event.key === "Enter" || event.key === " ") &&
            (event.preventDefault(), onBack());
        }}
      >
        {<AppIconPZ className="icon-xs" />}
        {hideLabels ? (
          <span className="sr-only">
            {
              <MemoizedFormattedMessage
                id="settings.nav.back"
                defaultMessage="Back to app"
                description="Button to return to the main app from settings"
              />
            }
          </span>
        ) : (
          <MemoizedFormattedMessage
            id="settings.nav.back"
            defaultMessage="Back to app"
            description="Button to return to the main app from settings"
          />
        )}
      </div>
    ) : null;
    hostSelectorElement =
      sidebarHostSelector != null && !hideLabels ? (
        <div className="mb-4 shrink-0">{sidebarHostSelector}</div>
      ) : null;
    searchFieldElement = showGroupedSearch ? (
      <SettingsSearchField
        onKeyDown={listKeyboardNavigation.getInputProps().onKeyDown}
        searchQuery={searchQuery}
        onQueryChange={(nextQuery) => {
          listKeyboardNavigation.setHighlightedIndex(-1);
          setSearchQuery(nextQuery);
        }}
      />
    ) : null;
    let scrollGapClassName = hideLabels
      ? "flex flex-col gap-2"
      : "flex flex-col gap-4";
    navScrollClassName = cx(
      "min-h-0 flex-1 overflow-y-auto pb-2",
      scrollGapClassName,
    );
    navMainContent = searchEnabled ? (
      <SettingsSearchResultsList
        intl={intl}
        highlightedIndex={listKeyboardNavigation.highlightedIndex}
        listRef={listKeyboardNavigation.listRef}
        onSelect={onSelect}
        searchResults={resolvedSearchResults}
      />
    ) : (
      sectionGroups.map((item) => (
        <SettingsSidebarSectionGroup
          key={item.key}
          className="gap-0"
          title={
            hideLabels || item.heading == null ? null : (
              <MemoizedFormattedMessage {...item.heading} />
            )
          }
        >
          {item.sections.map((_item) => {
            let isActiveSection = _item.slug === activeSection,
              isExternalSection = !!_item.externalUrl,
              isDisabledSection = !!_item.disabled,
              SectionIcon =
                isActiveSection && _item.slug === "pets"
                  ? SettingsPetsNavIcon
                  : getVisibleSettingsSectionComponents[_item.slug],
              sectionLabel =
                _item.slug === "codex-micro" &&
                codexMicroDeviceModel === "creator-micro-v2"
                  ? intl.formatMessage(
                      codexMicroDeviceNameMessages.creatorMicro,
                    )
                  : intl.formatMessage(lookupMessageDescriptor(_item.slug)),
              handleSectionClick = (event) => {
                if (!isDisabledSection) {
                  if (isExternalSection && _item.externalUrl) {
                    handleAnchorOpenHref({
                      event: event,
                      href: _item.externalUrl,
                      initiator: "open_in_browser_bridge",
                    });
                    return;
                  }
                  onSelect(_item.slug);
                }
              },
              prefetchSection = () => {
                isDisabledSection ||
                  isExternalSection ||
                  prefetchKeyedResource(_item.slug).catch(ignorePrefetchError);
              };
            return (
              <OptionalTooltip
                key={_item.slug}
                tooltipContent={
                  hideLabels ? (
                    <CodexMicroDeviceGate
                      codexMicroDeviceModel={codexMicroDeviceModel}
                      slug={_item.slug}
                    />
                  ) : isExternalSection ? (
                    opensInBrowserTooltip
                  ) : (
                    disabledSectionTooltip
                  )
                }
                side="right"
                sideOffset={12}
                disabled={
                  !hideLabels && !isDisabledSection && !isExternalSection
                }
              >
                <ConversationPageShell
                  aria-label={sectionLabel}
                  icon={SectionIcon}
                  iconClassName="icon-sm inline-block align-middle"
                  isActive={isActiveSection}
                  disabled={isDisabledSection}
                  data-settings-panel-slug={
                    groupSettingsSections &&
                    !isDisabledSection &&
                    !isExternalSection
                      ? _item.slug
                      : undefined
                  }
                  hideLabel={canCollapse ? hideLabels : undefined}
                  onClick={handleSectionClick}
                  onFocus={prefetchSection}
                  onKeyDown={
                    groupSettingsSections &&
                    !isDisabledSection &&
                    !isExternalSection
                      ? (event) => {
                          if (
                            event.key !== "ArrowDown" &&
                            event.key !== "ArrowUp"
                          )
                            return;
                          event.preventDefault();
                          let currentIndex = flatInteractiveSections.findIndex(
                              (__item) => __item.slug === _item.slug,
                            ),
                            adjacentSection =
                              flatInteractiveSections[
                                currentIndex +
                                  (event.key === "ArrowDown" ? 1 : -1)
                              ];
                          adjacentSection != null &&
                            (event.currentTarget
                              .closest("nav")
                              ?.querySelector(
                                `[data-settings-panel-slug="${adjacentSection.slug}"]`,
                              )
                              ?.focus(),
                            onSelect(adjacentSection.slug));
                        }
                      : undefined
                  }
                  onPointerEnter={prefetchSection}
                  weightClassName="font-normal"
                  label={
                    <CodexMicroDeviceGate
                      codexMicroDeviceModel={codexMicroDeviceModel}
                      slug={_item.slug}
                    />
                  }
                  trailing={
                    !hideLabels && _item.externalUrl != null ? (
                      <ExternalLinkIconButton
                        className="icon-xs text-token-text-secondary opacity-50"
                        ExternalIcon={AppIconsz}
                        href={_item.externalUrl}
                      />
                    ) : undefined
                  }
                />
              </OptionalTooltip>
            );
          })}
          {item.key === (groupSettingsSections ? "personal" : "settings") ? (
            <SettingsAccountExternalLink
              canCollapse={canCollapse}
              externalTooltip={opensInBrowserTooltip}
              hideLabels={hideLabels}
            />
          ) : null}
        </SettingsSidebarSectionGroup>
      ))
    );
  }
  let securityExternalLinkElement =
    !searchEnabled && securitySettingsEnabled ? (
      <SettingsSecurityExternalLink
        canCollapse={canCollapse}
        externalTooltip={opensInBrowserTooltip}
        hideLabels={hideLabels}
      />
    ) : null;
  let clearHostFilterElement =
    onClearHostFilter == null ? null : (
      <div className="shrink-0 px-row-x pb-2 text-sm text-token-text-secondary">
        <button
          type="button"
          className="me-1 cursor-interaction border-0 bg-transparent p-0 underline underline-offset-2 hover:text-token-foreground"
          onClick={onClearHostFilter}
        >
          {
            <MemoizedFormattedMessage
              id="settings.nav.clearHostFilter"
              defaultMessage="Clear filter"
              description="Button to show all settings by clearing the selected remote host"
            />
          }
        </button>
        {
          <MemoizedFormattedMessage
            id="settings.nav.clearHostFilterDescription"
            defaultMessage="to view all settings"
            description="Text explaining that clearing the selected remote host shows all settings"
          />
        }
      </div>
    );
  let scrollRegionElement = (
    <div className={navScrollClassName}>
      {navMainContent}
      {securityExternalLinkElement}
      {clearHostFilterElement}
    </div>
  );
  let navBodyElement = (
    <div className={navBodyClassName}>
      {collapseToggleElement}
      {backLinkElement}
      {hostSelectorElement}
      {searchFieldElement}
      {scrollRegionElement}
    </div>
  );
  return (
    <nav className={navClassName} aria-label={navAriaLabel}>
      {navBodyElement}
    </nav>
  );
}
function ignorePrefetchError() {}
function isTruthyNegated(previous) {
  return !previous;
}
function filterEnabledSettingsSections(group) {
  return group.sections.filter(isInteractiveSettingsSection);
}
function isInteractiveSettingsSection(section) {
  return !section.disabled && section.externalUrl == null;
}
function getSettingsItemId(item) {
  return item.id;
}
function toSettingsSectionListItem(hit) {
  return {
    ...hit,
    id: `section:${hit.sectionSlug}`,
    kind: "section",
  };
}
function visibleSectionSlugsFromEntry(sectionEntry) {
  return sectionEntry.disabled || sectionEntry.externalUrl != null
    ? []
    : [sectionEntry.slug];
}
function SettingsAccountExternalLink(props) {
  let { canCollapse, externalTooltip, hideLabels } = props,
    intl = useIntl(),
    tooltipContent = hideLabels ? (
      <MemoizedFormattedMessage
        {...getVisibleSettingsNavEntries.account.message}
      />
    ) : (
      externalTooltip
    );
  let accountAriaLabel = intl.formatMessage(
    getVisibleSettingsNavEntries.account.message,
  );
  let hideLabel = canCollapse ? hideLabels : undefined,
    accountLabel = (
      <MemoizedFormattedMessage
        {...getVisibleSettingsNavEntries.account.message}
      />
    );
  let accountTrailing = hideLabels ? undefined : (
    <ExternalLinkIconButton
      className="icon-xs text-token-text-secondary opacity-50"
      ExternalIcon={AppIconsz}
      href={getVisibleSettingsNavEntries.account.href}
      openTarget="external-browser"
    />
  );
  let accountRow = (
    <ConversationPageShell
      aria-label={accountAriaLabel}
      icon={getVisibleSettingsNavEntries.account.icon}
      iconClassName="icon-sm inline-block align-middle"
      hideLabel={hideLabel}
      label={accountLabel}
      onClick={openSettingsAccountHref}
      trailing={accountTrailing}
      weightClassName="font-normal"
    />
  );
  return (
    <OptionalTooltip
      tooltipContent={tooltipContent}
      side="right"
      sideOffset={12}
    >
      {accountRow}
    </OptionalTooltip>
  );
}
function openSettingsAccountHref(event) {
  handleAnchorOpenHref({
    event: event,
    href: getVisibleSettingsNavEntries.account.href,
    initiator: "open_in_browser_bridge",
    openTarget: "external-browser",
  });
}
function SettingsSecurityExternalLink(props) {
  let { canCollapse, externalTooltip, hideLabels } = props,
    intl = useIntl(),
    tooltipContent = hideLabels ? (
      <MemoizedFormattedMessage
        {...getVisibleSettingsNavEntries.securitySettings.message}
      />
    ) : (
      externalTooltip
    );
  let securityAriaLabel = intl.formatMessage(
    getVisibleSettingsNavEntries.securitySettings.message,
  );
  let hideLabel = canCollapse ? hideLabels : undefined,
    securityLabel = (
      <MemoizedFormattedMessage
        {...getVisibleSettingsNavEntries.securitySettings.message}
      />
    );
  let securityTrailing = hideLabels ? undefined : (
    <ExternalLinkIconButton
      className="icon-xs text-token-text-secondary opacity-50"
      ExternalIcon={AppIconsz}
      href={getVisibleSettingsNavEntries.securitySettings.href}
      openTarget="external-browser"
    />
  );
  let securityRow = (
    <ConversationPageShell
      aria-label={securityAriaLabel}
      icon={getVisibleSettingsNavEntries.securitySettings.icon}
      iconClassName="icon-sm inline-block align-middle"
      hideLabel={hideLabel}
      label={securityLabel}
      onClick={openSettingsSecurityHref}
      trailing={securityTrailing}
      weightClassName="font-normal"
    />
  );
  return (
    <OptionalTooltip
      tooltipContent={tooltipContent}
      side="right"
      sideOffset={12}
    >
      {securityRow}
    </OptionalTooltip>
  );
}
function openSettingsSecurityHref(event) {
  handleAnchorOpenHref({
    event: event,
    href: getVisibleSettingsNavEntries.securitySettings.href,
    initiator: "open_in_browser_bridge",
    openTarget: "external-browser",
  });
}
function SettingsSearchField(props) {
  let { onKeyDown, searchQuery, onQueryChange } = props,
    intl = useIntl(),
    inputRef = useRef(null),
    findAccelerator;
  findAccelerator = {
    accelerator: "CmdOrCtrl+F",
    onKeyDown: (event) => {
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    },
  };
  WorktreesSettingsAcceleratorRow(findAccelerator);
  let searchIcon = (
    <AppIconB className="icon-xs ms-2 shrink-0 text-token-input-placeholder-foreground" />
  );
  let searchAriaLabel = intl.formatMessage({
    id: "settings.search.label",
    defaultMessage: "Search settings",
    description: "Accessible label for the settings search input",
  });
  let handleSearchChange = (event) => {
    onQueryChange(event.target.value);
  };
  let searchPlaceholder = intl.formatMessage({
    id: "settings.search.placeholder",
    defaultMessage: "Search settings…",
    description: "Placeholder text for the settings search input",
  });
  let searchInput = (
    <input
      ref={inputRef}
      aria-label={searchAriaLabel}
      className="ms-1 w-full appearance-none border-none bg-transparent py-0 ps-px pe-1.5 text-token-foreground ring-0 outline-none placeholder:text-token-input-placeholder-foreground focus:border-none focus:ring-0 focus:outline-none"
      onChange={handleSearchChange}
      onKeyDown={onKeyDown}
      placeholder={searchPlaceholder}
      role="searchbox"
      type="text"
      value={searchQuery}
    />
  );
  let clearSearchButton =
    searchQuery.length > 0 ? (
      <button
        aria-label={intl.formatMessage({
          id: "settings.search.clear",
          defaultMessage: "Clear settings search",
          description: "Button label to clear settings search input",
        })}
        className="flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-md text-token-input-placeholder-foreground hover:text-token-foreground"
        onClick={() => {
          onQueryChange("");
        }}
        type="button"
      >
        {<CloseIcon className="icon-2xs" />}
      </button>
    ) : null;
  return (
    <div className="mb-4 flex h-token-button-composer w-full shrink-0 items-center rounded-lg border border-token-border-heavy bg-token-input-background/50 text-base leading-[18px] shadow-sm backdrop-blur-sm [.electron-dark_&]:border-token-border [.electron-dark_&]:bg-token-bg-fog [.electron-dark_&]:shadow-none [.electron-dark_&]:backdrop-blur-none">
      {searchIcon}
      {searchInput}
      {clearSearchButton}
    </div>
  );
}
function SettingsSearchResultsList(props) {
  let { highlightedIndex, intl, listRef, onSelect, searchResults } = props;
  if (searchResults.length === 0) {
    let _emptyStateUnused;
    return (
      <div className="px-row-x pt-2 text-sm text-token-text-secondary">
        {
          <MemoizedFormattedMessage
            id="settings.search.noResults"
            defaultMessage="No results found"
            description="Empty state shown when settings search has no matching destinations"
          />
        }
      </div>
    );
  }
  let resultNodes;
  {
    let renderSearchResult;
    renderSearchResult = (result, index) => {
      if (result.kind === "external")
        return (
          <button
            key={result.id}
            aria-label={result.label}
            className={cx(
              "sidebar-item focus-visible:ring-token-focus flex cursor-interaction items-center gap-2 px-row-x py-1.5 text-left text-base text-token-foreground hover:bg-token-list-hover-background focus-visible:ring-1 focus-visible:outline-none",
              index === highlightedIndex && "bg-token-list-hover-background",
            )}
            data-list-navigation-item="true"
            onClick={(event) => {
              handleAnchorOpenHref({
                event: event,
                href: result.href,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
              });
            }}
            type="button"
          >
            {
              <getVisibleSettingsNavEntries.securitySettings.icon className="icon-sm shrink-0" />
            }
            <span className="min-w-0 flex-1 truncate">{result.label}</span>
            {
              <ExternalLinkIconButton
                className="icon-xs shrink-0 text-token-text-secondary opacity-50"
                ExternalIcon={AppIconsz}
                href={result.href}
                openTarget="external-browser"
              />
            }
          </button>
        );
      let ResultIcon = getVisibleSettingsSectionComponents[result.sectionSlug],
        prefetchResultSection = () => {
          prefetchKeyedResource(result.sectionSlug).catch(ignorePrefetchError);
        };
      return (
        <div key={result.id} className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2 px-row-x py-1 text-base text-token-text-secondary">
            <ResultIcon className="icon-sm shrink-0" />
            <span className="truncate">{result.panelLabel}</span>
          </div>
          <button
            aria-label={intl.formatMessage(
              {
                id: "settings.search.result.ariaLabel",
                defaultMessage: "{destination}, {panel}",
                description:
                  "Accessible label for a settings search result and its containing panel",
              },
              {
                destination: result.label,
                panel: result.panelLabel,
              },
            )}
            className={cx(
              "sidebar-item focus-visible:ring-token-focus flex cursor-interaction items-center py-1.5 pe-2 ps-8.5 text-left text-base text-token-foreground hover:bg-token-list-hover-background focus-visible:ring-1 focus-visible:outline-none",
              index === highlightedIndex && "bg-token-list-hover-background",
            )}
            data-list-navigation-item="true"
            onClick={() => {
              onSelect(result.sectionSlug);
            }}
            onFocus={prefetchResultSection}
            onPointerEnter={prefetchResultSection}
            type="button"
          >
            <span className="truncate">{result.label}</span>
          </button>
        </div>
      );
    };
    resultNodes = searchResults.map(renderSearchResult);
  }
  return (
    <div ref={listRef} className="flex flex-col gap-3 pt-1">
      {resultNodes}
    </div>
  );
}
function mergeSettingsSectionsBySlug(sections, groups) {
  let sectionsBySlug = new Map(sections.map((item) => [item.slug, item])),
    mergedGroups = groups.map((item) => ({
      ...item,
      sections: item.slugs.flatMap((_item) => {
        let matchedSection = sectionsBySlug.get(_item);
        return matchedSection == null
          ? []
          : (sectionsBySlug.delete(_item), [matchedSection]);
      }),
    })),
    remainingSections = Array.from(sectionsBySlug.values());
  return (
    remainingSections.length > 0 &&
      mergedGroups[mergedGroups.length - 1]?.sections.push(
        ...remainingSections,
      ),
    mergedGroups.filter((item) => item.sections.length > 0)
  );
}
function orderSettingsSectionsBySlug(sections, preferredOrder) {
  let sectionsBySlug = new Map(sections.map((item) => [item.slug, item]));
  return [
    ...preferredOrder.flatMap((item) => {
      let matchedSection = sectionsBySlug.get(item);
      return matchedSection == null
        ? []
        : (sectionsBySlug.delete(item), [matchedSection]);
    }),
    ...sectionsBySlug.values(),
  ];
}
