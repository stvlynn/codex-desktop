// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `NR`) / export `tV`.

import type { ReactElement, ReactNode } from "react";

export type SettingsToggleSwitchPeers = {
  Switch: unknown;
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: SettingsToggleSwitchPeers | null = null;

/** Wire SettingsToggleSwitch peers once companions land. */
export function setSettingsToggleSwitchPeers(
  next: SettingsToggleSwitchPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tV` / internal `NR`.
 * Settings checkbox/switch styled for editor backgrounds.
 */
export type SettingsToggleSwitchProps = {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  [key: string]: unknown;
};

export function SettingsToggleSwitch(
  props: SettingsToggleSwitchProps,
): ReactElement {
  if (peers == null) {
    throw new Error("SettingsToggleSwitch peers are not configured");
  }
  const {
    className,
    checked,
    defaultChecked,
    onCheckedChange,
    disabled = false,
    ...rest
  } = props;
  return peers.renderNode(peers.Switch, {
    ...rest,
    checked,
    defaultChecked,
    onCheckedChange,
    disabled,
    className: peers.cx(
      "border-token-border peer",
      "data-[state=checked]:bg-token-checkbox-background data-[state=checked]:text-token-checkbox-foreground",
      "data-[state=checked]:border-token-border",
      "data-[state=indeterminate]:bg-token-checkbox-background data-[state=indeterminate]:text-token-checkbox-foreground",
      !disabled && "hover:bg-token-editor-background",
      className,
    ),
  }) as ReactElement;
}
