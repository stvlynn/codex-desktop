// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oJi` / export `aV`.

import { isCodexAppsServer } from "./is-codex-apps-server";

export type CodexAppConnectorTarget = {
  connectorId: string;
  instanceFallbackId: string;
  kind: "codex_app";
};

export type McpServerTarget = {
  kind: "mcp_server";
  server: string;
};

export type ConnectorOrMcpTarget = CodexAppConnectorTarget | McpServerTarget;

export function toConnectorOrMcpTarget(args: {
  connectorId: string;
  instanceFallbackId: string;
  server: string;
}): ConnectorOrMcpTarget {
  return isCodexAppsServer(args.server)
    ? {
        connectorId: args.connectorId,
        instanceFallbackId: args.instanceFallbackId,
        kind: "codex_app",
      }
    : { kind: "mcp_server", server: args.server };
}
