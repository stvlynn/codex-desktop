// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT markdown/confirmation link gated by host egress + allow-context.

import { BrowserSidebarGate as AppInitialSL } from "../../conversation/browser-sidebar-gate";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { NavigationAllowContext as appInitialIL } from "../../navigation/navigation-allow-context";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";

reactCompilerRuntime();

const React = rolldownRuntimeS(react(), 1) as {
  useContext: (context: unknown) => unknown;
};

export function useChatgptComposerControllerHelper65(request5019: any) {
  const { requiresConfirmation, ...rest } = request5019;
  const host = useChatgptComposerControllerHelper31();
  const allow = React.useContext(appInitialIL);
  const blocked =
    requiresConfirmation === true ||
    host?.shouldBlockExternalEgress === true ||
    allow === "restricted";
  return <AppInitialSL {...rest} requiresConfirmation={blocked} />;
}
