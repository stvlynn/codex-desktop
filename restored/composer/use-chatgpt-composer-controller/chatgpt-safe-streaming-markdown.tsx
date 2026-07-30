// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// SafeStreamingMarkdown wrapper with host egress + directive defaults.

import { useAppScopeValue as appInitialRT } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_J0_Init as appInitialJ0 } from "../../boundaries/composer-esm-inits";
import { codexDirectiveMarkedExtensions as appInitialQF } from "../../markdown/codex-directive-marked-extensions";
import { SafeStreamingMarkdown as appInitialIN } from "../../markdown/safe-streaming-markdown";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper246 } from "./chatgpt-markdown-directives-registry";

export function useChatgptComposerControllerHelper247(request2264: any) {
  const AppInitialIN = appInitialIN;
  const {
    conversationId = null,
    directives,
    extensions,
    isBrowserSidebarEnabled,
    ...rest
  } = request2264;
  const sidebarEnabled = appInitialRT(appInitialJ0);
  const host = useChatgptComposerControllerHelper31();
  const mergedExtensions =
    extensions == null ? appInitialQF : [...appInitialQF, ...extensions];
  const defaultDirectives = useChatgptComposerControllerHelper246();
  const mergedDirectives =
    directives == null
      ? defaultDirectives
      : { ...defaultDirectives, ...directives };
  const externalResourcePolicy =
    host?.shouldBlockExternalEgress === true
      ? "restricted"
      : rest.externalResourcePolicy;
  const sidebar = isBrowserSidebarEnabled ?? sidebarEnabled;
  return (
    <AppInitialIN
      {...rest}
      conversationId={conversationId}
      directives={mergedDirectives}
      extensions={mergedExtensions}
      externalResourcePolicy={externalResourcePolicy}
      isBrowserSidebarEnabled={sidebar}
    />
  );
}
