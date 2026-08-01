// Restored from ref/webview/assets/settings-command-menu-section-items-BzoP-M1E.js
// Command-menu Settings group: visible sections + external ChatGPT account/security links.

import {
  type ComponentType,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type SVGProps,
} from "react";
import type { MessageDescriptor } from "react-intl";
import { CODEX_PROFILE_PAGE_ENTRYPOINT_CLICKED_TYPE } from "../analytics/codex-profile-page-entrypoint-clicked-type";
import { logProductEvent } from "../analytics/log-product-event";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_tlt_Init,
} from "../composer/composer-esm-inits";
import { useFeatureGateEnabled } from "../feature-gates/use-feature-gate-enabled";
import {
  ensureUseVisibleSettingsSectionsInit,
  ensureVisibleSettingsNavMessagesInit,
  ensureVisibleSettingsSectionsRuntimeInit,
  getVisibleSettingsNavEntries,
  getVisibleSettingsSectionComponents,
  useVisibleSettingsSections,
  VISIBLE_SETTINGS_GATE_ID,
} from "../hooks/use-visible-settings-sections";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { AppIconsz } from "../icons/app-icon-sz";
import {
  ensureHostMessageBusInit,
  hostMessageBus,
} from "../navigation/host-message-bus";
import { openHrefViaBrowserBridge } from "../navigation/open-href-via-browser-bridge";
import { lookupMessageDescriptor } from "../utils/lookup-message-descriptor";
import { SettingsCommandMenuSectionItem } from "./settings-command-menu-section-item";

type SettingsIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SettingsCommandMenuSection = {
  slug: string;
  disabled?: boolean;
  externalUrl?: string | null;
};

export type ExternalSettingsCommandMenuItem = {
  href: string;
  icon: SettingsIcon | unknown;
  message: MessageDescriptor | unknown;
};

export type VisibleSettingsCommandMenuSectionItemsProps = {
  close: () => void;
  isSelectedHostLocal?: boolean;
  selectedHostId?: string;
};

type SettingsCommandMenuGroupProps = {
  heading?: ReactNode;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * cmdk Command.Group stand-in.
 * IMPORT_MAP maps bundle `FM` → `findByModel` (name collision); this chunk uses
 * `FM.Group` as the command-menu group surface (heading + items).
 */
function CommandMenuGroup({
  heading,
  className,
  style,
  children,
}: SettingsCommandMenuGroupProps): ReactElement {
  return (
    <div className={className} style={style} cmdk-group="">
      {heading != null ? <div cmdk-group-heading="">{heading}</div> : null}
      <div cmdk-group-items="">{children}</div>
    </div>
  );
}

/** Resolve section slug → react-intl message (bundle `Qr` one-arg consumer shape). */
function messageDescriptorForSectionSlug(slug: string): MessageDescriptor {
  return (
    lookupMessageDescriptor as unknown as (key: string) => MessageDescriptor
  )(slug);
}

/**
 * Settings entries in the global command menu: enabled visible sections plus
 * Account / optional Security Settings external links.
 */
export function VisibleSettingsCommandMenuSectionItems({
  close,
  isSelectedHostLocal = true,
  selectedHostId,
}: VisibleSettingsCommandMenuSectionItemsProps): ReactElement | null {
  const securitySettingsGateEnabled = useFeatureGateEnabled(
    VISIBLE_SETTINGS_GATE_ID,
  );
  const { visibleSettingsSections } = useVisibleSettingsSections(
    null,
    isSelectedHostLocal,
    selectedHostId,
  );
  const enabledSections = (
    visibleSettingsSections as readonly SettingsCommandMenuSection[]
  ).filter((section) => !section.disabled);

  if (enabledSections.length === 0) return null;

  const externalItems: ExternalSettingsCommandMenuItem[] = [
    getVisibleSettingsNavEntries.account as ExternalSettingsCommandMenuItem,
    ...(securitySettingsGateEnabled
      ? [
          getVisibleSettingsNavEntries.securitySettings as ExternalSettingsCommandMenuItem,
        ]
      : []),
  ];

  return (
    <SettingsCommandMenuSectionItemsGroup
      close={close}
      externalItems={externalItems}
      settingsSections={enabledSections}
    />
  );
}

type SettingsCommandMenuSectionItemsGroupProps = {
  close: () => void;
  externalItems: readonly ExternalSettingsCommandMenuItem[];
  settingsSections: readonly SettingsCommandMenuSection[];
};

function SettingsCommandMenuSectionItemsGroup({
  close,
  externalItems,
  settingsSections,
}: SettingsCommandMenuSectionItemsGroupProps): ReactElement {
  const intl = useIntl();
  const heading = (
    <span className="block px-2 pt-2 text-sm text-token-description-foreground">
      <MemoizedFormattedMessage
        id="codex.commandMenu.settingsGroup"
        defaultMessage="Settings"
        description="Command group label for settings sections in the command menu"
      />
    </span>
  );

  const sectionItems = settingsSections.map((section) => (
    <SettingsCommandMenuSectionRow
      key={section.slug}
      close={close}
      section={section}
    />
  ));

  const externalItemNodes = externalItems.map((item) => {
    const title = intl.formatMessage(item.message as MessageDescriptor);
    const LeftIcon = item.icon as SettingsIcon;
    return (
      <SettingsCommandMenuSectionItem
        key={item.href}
        value={`settings ${title}`}
        title={title}
        LeftIcon={LeftIcon}
        RightIcon={AppIconsz}
        onSelect={() => {
          openHrefViaBrowserBridge({
            href: item.href,
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          });
          close();
        }}
      />
    );
  });

  return (
    <CommandMenuGroup
      heading={heading}
      className="flex flex-col"
      style={{ gap: "var(--spacing)" }}
    >
      {sectionItems}
      {externalItemNodes}
    </CommandMenuGroup>
  );
}

type SettingsCommandMenuSectionRowProps = {
  close: () => void;
  section: SettingsCommandMenuSection;
};

function SettingsCommandMenuSectionRow({
  close,
  section,
}: SettingsCommandMenuSectionRowProps): ReactElement {
  const appScope = useAppScope(appScopeAtom);
  const intl = useIntl();
  const title = intl.formatMessage(
    messageDescriptorForSectionSlug(section.slug),
  );
  const searchValue = `settings ${title}${
    section.slug === "mcp-settings"
      ? " mcp settings"
      : section.slug === "personalization"
        ? " personality tone"
        : ""
  }`;
  const LeftIcon = getVisibleSettingsSectionComponents[section.slug] as
    | SettingsIcon
    | undefined;
  const RightIcon = section.externalUrl == null ? undefined : AppIconsz;

  const onSelect = () => {
    if (section.externalUrl == null) {
      if (section.slug === "profile") {
        logProductEvent(
          appScope as never,
          CODEX_PROFILE_PAGE_ENTRYPOINT_CLICKED_TYPE,
          {
            source: "command_menu",
          },
        );
      }
      hostMessageBus.dispatchHostMessage({
        type: "navigate-to-route",
        path: `/settings/${section.slug}`,
      });
    } else {
      openHrefViaBrowserBridge({
        href: section.externalUrl,
        initiator: "open_in_browser_bridge",
      });
    }
    close();
  };

  return (
    <SettingsCommandMenuSectionItem
      value={searchValue}
      title={title}
      LeftIcon={LeftIcon}
      RightIcon={RightIcon}
      onSelect={onSelect}
    />
  );
}

/** ESM prelude retained from the chunk’s rolldown init block. */
export function ensureVisibleSettingsCommandMenuSectionItemsInit(): void {
  ensureComposerEsm_Utt_Init();
  ensureAppScopeHostInit();
  ensureIntlFormattersInit();
  ensureComposerEsm_Qtt_Init();
  ensureHostMessageBusInit();
  ensureComposerEsm_K9_Init();
  ensureAppScopeInit();
  ensureVisibleSettingsNavMessagesInit();
  ensureVisibleSettingsSectionsRuntimeInit();
  ensureUseVisibleSettingsSectionsInit();
  ensureComposerEsm_tlt_Init();
}
