// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Markdown directive registry fill (former Value303/306/308).

import {
  ensureComposerEsm_KF_Init as appInitialKF,
  ensureComposerEsm_S8_Init as appInitial8,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { CHATGPT_CITATION_ID as AppInitialUF } from "../../chatgpt/chatgpt-citation-id";
import { CHATGPT_CONTENT_REFERENCE_ID as appInitialZF } from "../../chatgpt/chatgpt-content-reference-id";
import { CHATGPT_DIL_ID as AppInitialWF } from "../../chatgpt/chatgpt-dil-id";
import { CHATGPT_IMAGE_GROUP_ID as AppInitialGF } from "../../chatgpt/chatgpt-image-group-id";
import { WRITING_MODE_ID as appInitialQ8 } from "../../config/writing-mode-id";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { useChatgptComposerControllerHelper24 } from "./chatgpt-markdown-citation-directive";
import { useChatgptComposerControllerHelper244 } from "./chatgpt-content-reference-directive";
import { useChatgptComposerControllerHelper93 } from "./chatgpt-dil-widget-directive";
import { useChatgptComposerControllerHelper106 } from "./chatgpt-image-group-directive";
import { useChatgptComposerControllerHelper32 } from "./chatgpt-writing-block-directive";
import { useChatgptComposerControllerO } from "./parse-chatgpt-citation-attributes";
import { ensureChatgptBrowserHostContextInit } from "./chatgpt-browser-host-context";
import {
  setChatgptMarkdownDirectives,
  setEnsureChatgptMarkdownDirectivesInit,
} from "./chatgpt-markdown-directives-registry";
import { ensureChatgptImageGroupDirectiveInit } from "./chatgpt-image-group-directive";
import {
  ensureChatgptBrowserHostAppscopePeerInit,
  ensureChatgptCitationChromePeerInit,
  ensureChatgptDilLazyRendererInit,
  ensureChatgptDilLazyRendererPeerInit,
} from "./ensure-chatgpt-composer-markdown-fanin-peers";
import { ensureChatgptMarkdownRegistryPeerInits } from "./chatgpt-markdown-registry-peer-inits";

/** Hidden content-reference types suppressed by the markdown router. */
export let chatgptHiddenContentReferenceTypes: Set<string>;

/** Former Value303 — fan-in all markdown directive peers + hidden-type set. */
export const ensureChatgptMarkdownDirectivePeersInit = rolldownRuntimeN(() => {
  appInitialIvt();
  ensureChatgptMarkdownRegistryPeerInits();
  appInitialJvt();
  chatgptHiddenContentReferenceTypes = new Set([
    "attribution",
    "calculator",
    "container",
    "file",
    "file_navlist",
    "followup_a",
    "followup_memory_a",
    "forecast",
    "link_title",
    "location_search",
    "nav_list",
    "navigation",
    "python",
    "sports_schedule",
    "sports_standings",
    "stock",
    "strix",
    "title_citation",
    "tldr",
    "video",
  ]);
});

/** Former Value306 — citation + host + DIL schema peer over Value303. */
export const ensureChatgptMarkdownDirectiveCitationPeerInit = rolldownRuntimeN(
  () => {
    appInitialIvt();
    useChatgptComposerControllerO();
    (_appInitialYI as any)();
    ensureChatgptBrowserHostContextInit();
    ensureChatgptDilLazyRendererPeerInit();
    ensureChatgptImageGroupDirectiveInit();
    ensureChatgptMarkdownDirectivePeersInit();
    appInitialJvt();
  },
);

/** Former Value308 — fill mutable markdown directive registry. */
export const ensureChatgptMarkdownDirectivesRegistryInit = rolldownRuntimeN(
  () => {
    appInitial8();
    ensureChatgptCitationChromePeerInit();
    ensureChatgptBrowserHostAppscopePeerInit();
    (_appInitialYI as any)();
    ensureChatgptDilLazyRendererInit();
    appInitialKF();
    ensureChatgptMarkdownDirectiveCitationPeerInit();
    ensureChatgptImageGroupDirectiveInit();
    setChatgptMarkdownDirectives({
      [AppInitialUF]: useChatgptComposerControllerHelper24,
      [appInitialZF]: useChatgptComposerControllerHelper244,
      [AppInitialWF]: useChatgptComposerControllerHelper93,
      [AppInitialGF]: useChatgptComposerControllerHelper106,
      [appInitialQ8]: useChatgptComposerControllerHelper32,
    });
  },
);

setEnsureChatgptMarkdownDirectivesInit(
  ensureChatgptMarkdownDirectivesRegistryInit,
);
