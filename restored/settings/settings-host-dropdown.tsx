// Restored from ref/webview/assets/settings-host-dropdown-CQUeY2x_.js
// Host picker dropdown for settings surfaces.
// Stage 3: JB→DropdownMenu; Jr→DropdownTriggerButton; KB→DropdownMenuPopover;
// sh→HostColorDot; Tot→LOCAL_HOST_ID; QB/Qlt/ch/qS/n ESM inits dropped.

import type { ComponentType, ReactNode } from "react";
import { LOCAL_HOST_ID } from "../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { DropdownMenu } from "../ui/dropdown-menu.tsx";
import { DropdownMenuPopover } from "../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../ui/dropdown-trigger-button";
import { HostColorDot } from "../ui/host-color-dot";
import { AppIconKS } from "../icons/app-icon-ks";
import { AppIconZlt } from "../icons/app-icon-zlt";
import { cx } from "../ui/cx";
export type SettingsHostConnection = {
  hostId: string;
  displayName: string;
};
export type SettingsHostDropdownProps = {
  connectedRemoteConnections: SettingsHostConnection[];
  disabled?: boolean;
  onSelectHost: (hostId: string) => void;
  selectedHostId: string;
  align?: "start" | "center" | "end";
  contentWidth?: string;
  localIcon?: ComponentType<{
    className?: string;
  }>;
  localLabel?: string;
  showConnectedIndicator?: boolean;
  triggerClassName?: string;
  triggerColor?: "outline" | "ghost" | "secondary" | "primary";
};
function ConnectedDot() {
  return (
    <span
      aria-hidden
      className="block size-2 shrink-0 rounded-full bg-green-500"
    />
  );
}

/**
 * Local + remote host selector for settings pages (export `t`).
 */
export function SettingsHostDropdown({
  connectedRemoteConnections,
  disabled = false,
  onSelectHost,
  selectedHostId,
  align = "end",
  contentWidth = "menuWide",
  localIcon: LocalIcon = AppIconKS,
  localLabel,
  showConnectedIndicator = false,
  triggerClassName,
  triggerColor,
}: SettingsHostDropdownProps): ReactNode {
  const intl = useIntl();
  const selectedRemote =
    connectedRemoteConnections.find((item) => {
      return item.hostId === selectedHostId;
    }) ?? null;
  const resolvedLocalLabel =
    localLabel ??
    intl.formatMessage({
      id: "settings.hostDropdown.local",
      defaultMessage: "Local",
      description: "Label for the local host in settings connection dropdowns",
    });
  const displayName = selectedRemote?.displayName ?? resolvedLocalLabel;
  const hosts: SettingsHostConnection[] = [
    {
      hostId: LOCAL_HOST_ID,
      displayName: resolvedLocalLabel,
    },
    ...connectedRemoteConnections,
  ];
  const triggerIcon =
    selectedRemote == null ? (
      <LocalIcon className="icon-xs shrink-0 text-token-foreground" />
    ) : (
      <HostColorDot
        className="icon-xs shrink-0"
        hostId={selectedRemote.hostId}
      />
    );
  const triggerButton = (
    <DropdownTriggerButton
      className={triggerClassName}
      color={triggerColor}
      disabled={disabled}
      chevronClassName={disabled ? "hidden" : undefined}
    >
      {triggerIcon}
      <span className="truncate text-left text-token-foreground">
        {displayName}
      </span>
      {selectedRemote != null && showConnectedIndicator ? (
        <ConnectedDot />
      ) : null}
    </DropdownTriggerButton>
  );
  if (disabled) return triggerButton;
  return (
    <DropdownMenuPopover
      align={align}
      contentWidth={contentWidth}
      triggerButton={triggerButton}
    >
      <DropdownMenu.Title>
        <MemoizedFormattedMessage
          id="settings.hostDropdown.title"
          defaultMessage="Host"
          description="Title for the Host dropdown shown in settings pages"
        />
      </DropdownMenu.Title>
      <DropdownMenu.Section className="max-h-40 overflow-y-auto">
        {hosts.map((item) => {
          return (
            <DropdownMenu.Item
              key={item.hostId}
              RightIcon={
                item.hostId === selectedHostId ? AppIconZlt : undefined
              }
              onSelect={() => {
                onSelectHost(item.hostId);
              }}
            >
              <span className={cx("flex min-w-0 items-center gap-2")}>
                {item.hostId === LOCAL_HOST_ID ? (
                  <LocalIcon className="icon-xs shrink-0" />
                ) : (
                  <HostColorDot
                    className="icon-xs shrink-0"
                    hostId={item.hostId}
                  />
                )}
                <span className="truncate">{item.displayName}</span>
                {item.hostId !== LOCAL_HOST_ID && showConnectedIndicator ? (
                  <ConnectedDot />
                ) : null}
              </span>
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Section>
    </DropdownMenuPopover>
  );
}

/** No-op Rolldown ESM init retained for graph compatibility (export `n`). */
export function ensureSettingsHostDropdownInit(): void {}
