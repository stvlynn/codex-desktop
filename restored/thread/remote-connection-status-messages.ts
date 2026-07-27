// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `B5` near export `Ia`).

import { defineMessages } from "react-intl";

export const remoteConnectionStatusMessages = defineMessages({
  connecting: {
    id: "threadPage.remoteConnectionStatusBadge.connecting",
    defaultMessage: "Connecting",
    description: "Label shown when remote connection is in progress",
  },
  restarting: {
    id: "threadPage.remoteConnectionStatusBadge.restarting",
    defaultMessage: "Restarting",
    description:
      "Label shown when a remote connection is restarting after a user action",
  },
  restartNow: {
    id: "threadPage.remoteConnectionStatusBadge.restartNow",
    defaultMessage: "Restart now",
    description:
      "Action label shown when remote Codex has a newer installed version and can be restarted",
  },
  restartNowTooltip: {
    id: "threadPage.remoteConnectionStatusBadge.restartNowTooltip",
    defaultMessage:
      "Restarting will stop the running Codex CLI process and any ongoing tasks on this remote host",
    description: "Tooltip warning for a remote Codex restart action",
  },
  login: {
    id: "threadPage.remoteConnectionStatusBadge.login",
    defaultMessage: "Sign in to Codex",
    description: "Action label shown when a remote connection needs login",
  },
  installCodex: {
    id: "threadPage.remoteConnectionStatusBadge.installCodex",
    defaultMessage: "Install Codex CLI",
    description:
      "Action label shown when the Codex CLI is missing from an SSH remote connection",
  },
  installingCodex: {
    id: "threadPage.remoteConnectionStatusBadge.installingCodex",
    defaultMessage: "Installing…",
    description:
      "Action label shown while Codex is being installed on an SSH remote connection",
  },
  updateCodex: {
    id: "threadPage.remoteConnectionStatusBadge.updateCodex",
    defaultMessage: "Update Codex CLI",
    description:
      "Action label shown when an SSH remote connection needs a newer Codex version",
  },
  updateWslCodexMessage: {
    id: "threadPage.remoteConnectionStatusBadge.updateWslCodexMessage",
    defaultMessage:
      "Codex CLI in WSL is out of date. Open your WSL distro and update the Codex CLI to {minRequiredVersion} or newer. Current version: {currentVersion}",
    description:
      "Tooltip message shown when a WSL connection needs a newer Codex version",
  },
  updatingCodex: {
    id: "threadPage.remoteConnectionStatusBadge.updatingCodex",
    defaultMessage: "Updating…",
    description:
      "Action label shown while Codex is being updated on an SSH remote connection",
  },
  goToSettings: {
    id: "threadPage.remoteConnectionStatusBadge.goToSettings",
    defaultMessage: "See Settings to connect",
    description: "Label shown for a remote connection settings action",
  },
  connected: {
    id: "threadPage.remoteConnectionStatusBadge.connected",
    defaultMessage: "Connected",
    description: "Label shown when remote connection is established",
  },
  disconnected: {
    id: "threadPage.remoteConnectionStatusBadge.disconnected",
    defaultMessage: "Disconnected",
    description: "Label shown when remote connection is unavailable",
  },
  error: {
    id: "threadPage.remoteConnectionStatusBadge.error",
    defaultMessage: "Error",
    description: "Label shown when remote connection is in error",
  },
});
