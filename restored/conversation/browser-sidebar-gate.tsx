// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xfa` / export `sL` — pick browser-sidebar vs fallback panel.

import type { ComponentType, ReactNode } from "react";

type AnyProps = {
  conversationId?: string | null;
  isBrowserSidebarEnabled?: boolean | null;
  [key: string]: unknown;
};

let BrowserSidebar: ComponentType<AnyProps> | null = null;
let FallbackPanel: ComponentType<AnyProps> | null = null;

export function setBrowserSidebarGateImpls(args: {
  BrowserSidebar: ComponentType<AnyProps>;
  FallbackPanel: ComponentType<AnyProps>;
}): void {
  BrowserSidebar = args.BrowserSidebar;
  FallbackPanel = args.FallbackPanel;
}

export function BrowserSidebarGate(props: AnyProps): ReactNode {
  if (BrowserSidebar == null || FallbackPanel == null) {
    throw new Error("BrowserSidebarGate impls have not been configured");
  }
  if (props.isBrowserSidebarEnabled != null) {
    return (
      <BrowserSidebar
        {...props}
        conversationId={props.conversationId ?? null}
        isBrowserSidebarEnabled={props.isBrowserSidebarEnabled}
      />
    );
  }
  return <FallbackPanel {...props} />;
}
