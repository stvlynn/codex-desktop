// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Markdown-directive surface ensure (Value311) — fans into Value308 registry fill.

import {
  ensureAppScopeHostInit as appInitialMT,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_q0_Init as appInitialQ0,
  ensureComposerEsm_rN_Init as appInitialRN,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { ensureChatgptBrowserHostContextInit } from "./chatgpt-browser-host-context";
import { ensureChatgptMarkdownDirectivesInit } from "./chatgpt-markdown-directives-registry";

export const ensureChatgptComposerMarkdownSurfaceInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialMT();
  appInitialQ0();
  appInitialRN();
  void _appInitialYI;
  ensureChatgptMarkdownDirectivesInit();
  ensureChatgptBrowserHostContextInit();
  appInitialJvt();
});
