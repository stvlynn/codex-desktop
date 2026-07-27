// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `N1i` / export `pB`.

import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { codexMcpToolAppFrameMessages as msgs } from "./codex-mcp-tool-app-frame-messages";

export type McpAppFrameSurfaceProps = {
  error?: unknown;
  fullSurface?: boolean;
  heightHint?: number;
  html?: string | null;
  inlineSurface?: boolean;
  isLoading?: boolean;
  mcpAppId?: string;
  minFrameHeight?: number;
};

export function McpAppFrameSurface({
  error,
  fullSurface = false,
  html,
  isLoading = false,
  minFrameHeight,
}: McpAppFrameSurfaceProps): ReactNode {
  if (isLoading) {
    return (
      <div style={{ minHeight: minFrameHeight }}>
        <FormattedMessage {...msgs.loading} />
      </div>
    );
  }
  if (error != null) {
    return (
      <div style={{ minHeight: minFrameHeight }}>
        <FormattedMessage {...msgs.loadFailed} />
      </div>
    );
  }
  if (html == null) {
    return (
      <div style={{ minHeight: minFrameHeight }}>
        <FormattedMessage {...msgs.tooLarge} />
      </div>
    );
  }
  return (
    <div
      className={fullSurface ? "size-full" : undefined}
      style={{ minHeight: minFrameHeight }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
