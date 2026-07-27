// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `j1i` / export `fB` — sync MCP app inline-expanded flag into store.

import { useEffect } from "react";

let useScope: (() => unknown) | null = null;
let syncExpanded:
  | ((scope: unknown, mcpAppId: string, expanded: boolean) => void)
  | null = null;

export function setSyncMcpAppInlineExpandedDeps(args: {
  useScope: () => unknown;
  syncExpanded: (scope: unknown, mcpAppId: string, expanded: boolean) => void;
}): void {
  useScope = args.useScope;
  syncExpanded = args.syncExpanded;
}

export function useSyncMcpAppInlineExpanded(args: {
  isInlineExpanded: boolean;
  mcpAppId: string;
}): void {
  if (useScope == null || syncExpanded == null) {
    throw new Error(
      "useSyncMcpAppInlineExpanded deps have not been configured",
    );
  }
  const scope = useScope();
  const { isInlineExpanded, mcpAppId } = args;
  useEffect(() => {
    syncExpanded?.(scope, mcpAppId, isInlineExpanded);
  }, [scope, mcpAppId, isInlineExpanded]);
}
