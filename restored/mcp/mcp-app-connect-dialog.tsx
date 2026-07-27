// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `r6i`) / export `tz`.
// OAuth / connector peers bind via setMcpAppConnectDialogParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type McpAppConnectDialogProps = {
  onOpenChange?: (open: boolean) => void;
  appName?: ReactNode;
  isLoading?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
};

export type McpAppConnectDialogParts = {
  render: (props: McpAppConnectDialogProps) => ReactNode;
};

let parts: McpAppConnectDialogParts | null = null;

/** Wire full MCP connect / OAuth dialog once companions land. */
export function setMcpAppConnectDialogParts(
  next: McpAppConnectDialogParts,
): void {
  parts = next;
}

/** @deprecated Prefer setMcpAppConnectDialogParts */
export function bindMcpAppConnectDialog(
  next: (props: McpAppConnectDialogProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `tz` / internal `r6i`.
 * MCP app-connect / connector OAuth settings dialog scaffold.
 */
export function McpAppConnectDialog(
  props: McpAppConnectDialogProps,
): ReactElement {
  if (parts != null) return parts.render(props) as ReactElement;
  const { appName, isLoading = false, onOpenChange, children } = props;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={() => onOpenChange?.(false)}
    >
      <div
        className="w-[min(480px,92vw)] overflow-hidden rounded-2xl bg-token-dropdown-background p-4 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">
          {appName ?? (
            <FormattedMessage
              id="mcp.appConnect.title"
              defaultMessage="App"
              description="Default title for MCP app connect dialog"
            />
          )}
        </h2>
        <p className="mt-2 text-sm text-token-description-foreground">
          {isLoading ? (
            <FormattedMessage
              id="mcp.appConnect.loading"
              defaultMessage="Loading connection details..."
              description="Loading state for MCP app connect dialog"
            />
          ) : (
            <FormattedMessage
              id="mcp.appConnect.permissions"
              defaultMessage="Permissions always respected"
              description="Permissions note in MCP app connect dialog"
            />
          )}
        </p>
        {children}
      </div>
    </div>
  );
}
