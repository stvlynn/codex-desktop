// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `M1i` / export `dB` — CSP/error-aware MCP app HTML host shell.

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let Surface: ComponentType<AnyProps> | null = null;

export function setMcpAppHtmlHostSurface(impl: ComponentType<AnyProps>): void {
  Surface = impl;
}

export type McpAppHtmlHostProps = {
  conversationId?: string;
  csp?: string;
  error?: unknown;
  fullSurface?: boolean;
  hostId?: string;
  hostedInThreadScrollLayout?: boolean;
  html?: string | null;
  isLoading?: boolean;
  mcpAppId?: string;
  [key: string]: unknown;
};

export function McpAppHtmlHost(props: McpAppHtmlHostProps): ReactNode {
  if (Surface == null) {
    throw new Error("McpAppHtmlHost surface has not been configured");
  }
  return <Surface {...props} />;
}
