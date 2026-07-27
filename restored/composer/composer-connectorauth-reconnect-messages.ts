// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `UQ`).

import { defineMessages } from "react-intl";

export const composerConnectorauthReconnectMessages = defineMessages({
  reconnect: {
    id: "composer.connectorAuth.reconnect.button.label",
    defaultMessage: "Reconnect",
    description:
      "Primary action label for reconnecting expired connector credentials.",
  },
  continue: {
    id: "composer.connectorAuth.continue.button.label",
    defaultMessage: "Continue",
    description:
      "Primary action label shown after the user has opened the connector auth flow and Codex is checking whether auth completed.",
  },
  connect: {
    id: "composer.connectorAuth.connect.button.label",
    defaultMessage: "Connect",
    description:
      "Primary action label for starting a first-time connector auth flow.",
  },
  updateAccess: {
    id: "composer.connectorAuth.updateAccess.button.label",
    defaultMessage: "Update access",
    description:
      "Primary action label for starting a connector permission-upgrade auth flow.",
  },
  missingConnectionTitle: {
    id: "composer.connectorAuth.missingConnection.title",
    defaultMessage: "Connect {connectorName}",
    description:
      "Title for a connector auth elicitation that requires first-time connection. Placeholder {connectorName} is the connector name, for example Gmail.",
  },
  missingConnectionDescription: {
    id: "composer.connectorAuth.missingConnection.description",
    defaultMessage:
      "ChatGPT needs access to {connectorName} to help with this request",
    description:
      "Description for a connector auth elicitation that requires first-time connection. Placeholder {connectorName} is the connector name, for example Gmail.",
  },
  missingScopesTitle: {
    id: "composer.connectorAuth.missingScopes.title",
    defaultMessage: "ChatGPT needs more {connectorName} access",
    description:
      "Title for a connector auth elicitation that requires additional permissions. Placeholder {connectorName} is the connector name, for example Gmail.",
  },
  missingScopesDescription: {
    id: "composer.connectorAuth.missingScopes.description",
    defaultMessage:
      "Your current connection doesn't include the permissions needed for this request.",
    description:
      "Description for a connector auth elicitation that requires additional permissions.",
  },
  reconnectTitle: {
    id: "composer.connectorAuth.reconnect.title",
    defaultMessage: "Reconnect {connectorName}",
    description:
      "Title for a connector auth elicitation that requires reconnecting expired connector credentials. Placeholder {connectorName} is the connector name, for example Gmail.",
  },
  reconnectDescription: {
    id: "composer.connectorAuth.reconnect.description",
    defaultMessage:
      "Your {connectorName} connection has expired. Reconnect it before ChatGPT can use it for this request.",
    description:
      "Description for a connector auth elicitation that requires reconnecting expired connector credentials. Placeholder {connectorName} is the connector name, for example Gmail.",
  },
  connectorNotReady: {
    id: "composer.connectorAuth.connectorNotReady",
    defaultMessage:
      "{connectorName} is not ready yet. Finish signing in, then continue.",
    description:
      "Toast shown when a connector auth elicitation has not completed yet",
  },
  genericLoadError: {
    id: "composer.connectorAuth.loadError",
    defaultMessage: "Could not refresh this connector.",
    description:
      "Toast shown when a connector auth elicitation cannot refresh connector state",
  },
});
