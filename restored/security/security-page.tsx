// Restored from ref/webview/assets/security-page-C3xazhLy.js
// Codex Security workbench shell page.
// Stage 3: Lb/rlt/jK/es mapped; Ib/OK/rs/ts inits dropped.

import type { ReactNode } from "react";
import { FEATURE_GATE_NUMERIC_ID_NS } from "../config/feature-gate-numeric-id-ns";
import { useFeatureGateEnabled } from "../feature-gates/use-feature-gate-enabled";
import {
  ensureUseIsRemoteHostInit,
  useIsRemoteHost,
} from "../hosts/use-is-remote-host";
import { LOCAL_HOST_ID } from "../hosts/local-host-id";
import {
  ensureInstalledPluginsQueryInit,
  useInstalledPluginsQuery,
} from "../plugins/use-installed-plugins-query";
import { EmptyState } from "../skills/skills-page-helpers";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { AppIconcv } from "../icons/app-icon-cv";
import { Spinner } from "../ui/spinner";
import {
  ensureSecurityShellIconsInit,
  ensureSecurityShellStateInit,
  resolveSecurityShellState,
  type SecurityShellState,
} from "./resolve-security-shell-state";
ensureUseIsRemoteHostInit();
ensureInstalledPluginsQueryInit();
ensureSecurityShellStateInit();
ensureSecurityShellIconsInit();
function securityUnavailableDescription(
  state: Exclude<SecurityShellState, "loading" | "ready">,
): ReactNode {
  switch (state) {
    case "gate-disabled":
      return (
        <MemoizedFormattedMessage
          id="security.shell.gateDisabled.description"
          defaultMessage="The Codex Security workbench is not enabled for this build"
          description="Message shown when the native Codex Security workbench rollout gate is disabled"
        />
      );
    case "remote-host":
      return (
        <MemoizedFormattedMessage
          id="security.shell.remoteHost.description"
          defaultMessage="Codex Security is available when working on a local host"
          description="Message shown when the native Codex Security workbench is opened on a remote host"
        />
      );
    case "disabled-by-admin":
      return (
        <MemoizedFormattedMessage
          id="security.shell.disabledByAdmin.description"
          defaultMessage="Your administrator has disabled the Codex Security plugin"
          description="Message shown when an administrator has disabled the Codex Security plugin"
        />
      );
    case "plugin-unavailable":
      return (
        <MemoizedFormattedMessage
          id="security.shell.pluginUnavailable.description"
          defaultMessage="Install and enable the Codex Security plugin to use this workbench"
          description="Message shown when the Codex Security plugin is not installed or enabled"
        />
      );
  }
}

/**
 * Bundle export `SecurityPage`.
 * Shows an empty-state shell until the Security plugin webview is available.
 */
export function SecurityPage(): ReactNode {
  const isGateEnabled = useFeatureGateEnabled(FEATURE_GATE_NUMERIC_ID_NS);
  const isRemoteHost = useIsRemoteHost();
  const enabled = isGateEnabled && !isRemoteHost;
  const { installedPlugins, isLoading } = useInstalledPluginsQuery(
    LOCAL_HOST_ID,
    undefined,
    {
      enabled,
    },
  );
  const state = resolveSecurityShellState({
    installedPlugins,
    isGateEnabled,
    isLoading,
    isRemoteHost,
  });
  const unavailable = state !== "loading" && state !== "ready";
  const title = unavailable ? (
    <MemoizedFormattedMessage
      id="security.shell.unavailable.title"
      defaultMessage="Codex Security is unavailable"
      description="Title shown when the native Codex Security workbench cannot be used"
    />
  ) : (
    <MemoizedFormattedMessage
      id="security.shell.ready.title"
      defaultMessage="Codex Security"
      description="Title for the native Codex Security workbench"
    />
  );
  return (
    <EmptyState
      description={
        unavailable ? securityUnavailableDescription(state) : undefined
      }
      illustration={state === "loading" ? <Spinner /> : <AppIconcv />}
      illustrationSize="icon"
      layout="page"
      title={title}
    />
  );
}
