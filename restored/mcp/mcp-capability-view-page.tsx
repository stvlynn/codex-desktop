// Restored from ref/webview/assets/mcp-capability-view-page-O_triaiK.js
// Route page that resolves an MCP server/tool view from the capability catalog.
// Stage 3: SX/oB/sB/yX→mcp-capability-host; U5→useRouteParams; iO→EmptyState.

import type { ReactElement } from "react";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useAppScopeValue } from "../composer/composer-appscope-atoms";
import { useRouteParams } from "../hooks/use-route-params";
import { EmptyState } from "../skills/skills-page-helpers";
import {
  ensureMcpCapabilityCatalogInit,
  ensureMcpCapabilityHostViewInit,
  McpCapabilityHostView,
  mcpGlobalCapabilityCatalogAtom,
  type McpCapabilityCatalogEntry,
} from "../mcp/mcp-capability-host";
ensureMcpCapabilityCatalogInit();
ensureMcpCapabilityHostViewInit();
function McpCapabilityViewNotFound(): ReactElement {
  return (
    <div className="flex h-full min-h-0 items-center justify-center">
      <EmptyState
        title={
          <MemoizedFormattedMessage
            id="openaiMcpCapabilities.view.notFound"
            defaultMessage="MCP app view not found"
            description="Title shown when an MCP app view route does not match an available server tool"
          />
        }
      />
    </div>
  );
}

/**
 * Bundle export `McpCapabilityViewPage` — match route params to a catalog entry.
 */
export function McpCapabilityViewPage(): ReactElement {
  const { server, toolName } = useRouteParams() as {
    server?: string | null;
    toolName?: string | null;
  };
  const catalog = useAppScopeValue(
    mcpGlobalCapabilityCatalogAtom,
  ) as McpCapabilityCatalogEntry[];
  const view =
    server == null || toolName == null
      ? null
      : (catalog.find((entry) => {
          return entry.server === server && entry.tool.name === toolName;
        }) ?? null);
  if (view == null) return <McpCapabilityViewNotFound />;
  return <McpCapabilityHostView view={view} />;
}
