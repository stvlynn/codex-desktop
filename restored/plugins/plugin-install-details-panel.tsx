// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `S0s`) / export `Hh`.
// Plugin install/enable peers bind via setPluginInstallDetailsPanelParts.

import type { ReactElement, ReactNode } from "react";

export type PluginInstallDetailsPanelProps = {
  activeProject?: unknown;
  availablePlugins?: unknown[];
  hostId?: unknown;
  pendingPluginId?: string | null;
  reloadPlugins?: () => void;
  source?: unknown;
};

export type PluginInstallDetailsAction = {
  disabled?: boolean;
  onSelect?: () => void;
};

export type PluginInstallDetailsPanelParts = {
  resolveAction: (
    props: PluginInstallDetailsPanelProps,
  ) => PluginInstallDetailsAction | null;
  render: (
    props: PluginInstallDetailsPanelProps & {
      action: PluginInstallDetailsAction;
    },
  ) => ReactNode;
};

let parts: PluginInstallDetailsPanelParts | null = null;

/** Wire plugin install/enable action once companions land. */
export function setPluginInstallDetailsPanelParts(
  next: PluginInstallDetailsPanelParts,
): void {
  parts = next;
}

/**
 * Bundle export `Hh` / internal `S0s`.
 * Plugin install details panel — resolves install/enable/open action.
 */
export function PluginInstallDetailsPanel(
  props: PluginInstallDetailsPanelProps,
): ReactElement | null {
  if (parts == null) {
    return (
      <div className="flex flex-col gap-2 p-3 text-sm text-token-description-foreground">
        Plugin details
      </div>
    );
  }
  const action = parts.resolveAction(props);
  if (action == null) return null;
  return parts.render({ ...props, action }) as ReactElement;
}
