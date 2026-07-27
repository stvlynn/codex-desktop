// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `R1i` / export `uB` — host inline/side-panel MCP app frame.

import type { ComponentType, ReactNode } from "react";

type FrameState = {
  isInlineExpanded: boolean;
  isFullScreen: boolean;
};

type AppRecord = {
  mcpAppId: string;
  inlineFrameContent?: Record<string, unknown> | null;
  sidePanelFrameContent?: Record<string, unknown> | null;
  inlineFrameContainer?: { isConnected?: boolean } | null;
};

let useApp: ((id: string) => AppRecord | null) | null = null;
let useFrameState: ((id: string) => FrameState) | null = null;
let useSidePanelOpen: ((id: string) => boolean) | null = null;
let Frame: ComponentType<Record<string, unknown>> | null = null;

export function setMcpAppFrameHostDeps(args: {
  useApp: (id: string) => AppRecord | null;
  useFrameState: (id: string) => FrameState;
  useSidePanelOpen: (id: string) => boolean;
  Frame: ComponentType<Record<string, unknown>>;
}): void {
  useApp = args.useApp;
  useFrameState = args.useFrameState;
  useSidePanelOpen = args.useSidePanelOpen;
  Frame = args.Frame;
}

export type McpAppFrameHostProps = { mcpAppId: string };

export function McpAppFrameHost({ mcpAppId }: McpAppFrameHostProps): ReactNode {
  if (
    useApp == null ||
    useFrameState == null ||
    useSidePanelOpen == null ||
    Frame == null
  ) {
    throw new Error("McpAppFrameHost deps have not been configured");
  }
  const app = useApp(mcpAppId);
  const frameState = useFrameState(mcpAppId);
  const sidePanelOpen = useSidePanelOpen(mcpAppId);
  if (
    app == null ||
    (!frameState.isInlineExpanded && !frameState.isFullScreen && !sidePanelOpen)
  ) {
    return null;
  }
  const content =
    frameState.isFullScreen ||
    (!frameState.isInlineExpanded &&
      app.inlineFrameContainer?.isConnected !== true &&
      sidePanelOpen)
      ? (app.sidePanelFrameContent ?? app.inlineFrameContent)
      : app.inlineFrameContent;
  return (
    <Frame
      {...(content ?? {})}
      inlineFrameContainer={app.inlineFrameContainer}
      mcpAppId={app.mcpAppId}
      frameState={frameState}
    />
  );
}
