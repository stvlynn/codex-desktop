// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Markdown-registry fan-in peers (former Value40/45/108/111/134).

import {
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_AS_Init as AppInitialAS,
  ensureComposerEsm_BI_Init as appInitialBI,
  ensureComposerEsm_Bl_Init as AppInitialBl,
  ensureComposerEsm_b8_Init as appInitialB8,
  ensureComposerEsm_cL_Init as appInitialCL,
  ensureComposerEsm_Fl_Init as appInitialFl,
  ensureComposerEsm_FZ_Init as AppInitialFZ,
  ensureComposerEsm_Hlt_Init as appInitialHlt,
  ensureComposerEsm_i7_Init as appInitialI7,
  ensureComposerEsm_K1_Init as appInitialK1,
  ensureComposerEsm_LL_Init as appInitialLL,
  ensureComposerEsm_Ll_Init as appInitialLl,
  ensureComposerEsm_Nl_Init as AppInitialNl,
  ensureComposerEsm_oL_Init as AppInitialOL,
  ensureComposerEsm_QN_Init as appInitialQN,
  ensureComposerEsm_qlt_Init as appInitialQlt,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_tl_Init as AppInitialTl,
  ensureComposerEsm_t7_Init as appInitialT7,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_udt_Init as appInitialUdt,
  ensureComposerEsm_UL_Init as AppInitialUL,
  ensureComposerEsm_Ul_Init as appInitialUl,
  ensureComposerEsm_Wlt_Init as appInitialWlt,
  ensureComposerEsm_xI_Init as AppInitialXI,
  ensureComposerEsm_XP_Init as appInitialXP,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit as appInitialOpt } from "../../navigation/app-shell-atoms";
import {
  ensureViteModulepreloadRuntime as appInitialGmt,
  vitePreload as appInitialWmt,
} from "../../runtime/vite-preload";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { DialogSection as _appInitialU } from "../../ui/dialog-section";
import {
  zodObject as appInitialXT,
  zodString as appInitialCT,
} from "../../vendor/zod";
import { ensureChatgptDilActionSchemasInit } from "./chatgpt-dil-action-helpers";
import { ensureChatgptImageGroupDirectiveInit } from "./chatgpt-image-group-directive";
import { ensureChatgptBrowserHostContextInit } from "./chatgpt-browser-host-context";
import { setEnsureChatgptContentReferenceFootnoteDepsInit } from "./chatgpt-content-reference-footnote-registry";
import {
  useChatgptComposerControllerX,
  useChatgptComposerControllerY,
} from "./ensure-chatgpt-composer-controller-context-inits";

const dilRendererMapDeps = (
  ids: number[],
  mapDeps: { f?: string[] } & ((
    ids: number[],
  ) => string[]) = dilRendererMapDeps,
  table = mapDeps.f ||
    (mapDeps.f = [
      "../../apps/dil-renderer",
      "../../runtime/rolldown-runtime.js",
      "../react-cjs-runtime",
      "../react-cjs-runtime",
    ]),
) => ids.map((item) => table[item]);

/** Drained wave-8 stubs still referenced by the DIL lazy-renderer ensure. */
const ensureDrainedDilStubA = rolldownRuntimeN(() => {});
const ensureDrainedDilStubB = rolldownRuntimeN(() => {});
const ensureDrainedDilStubC = rolldownRuntimeN(() => {});
const ensureDrainedDilStubD = rolldownRuntimeN(() => {});
const ensureDrainedDilStubE = rolldownRuntimeN(() => {});
const ensureDrainedDilStubF = rolldownRuntimeN(() => {});
const ensureDrainedDilStubG = rolldownRuntimeN(() => {});

/** Former Value40 — citation / intl chrome peer before footnote + markdown registry. */
export const ensureChatgptCitationChromePeerInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialTft();
  void rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  appInitialCL();
  AppInitialUL();
  AppInitialOL();
  appInitialLL();
  appInitialHlt();
  appInitialWlt();
  AppInitialFZ();
  appInitialJvt();
});

/** Former Value45 — browser-host / appscope peer before DIL lazy renderer. */
export const ensureChatgptBrowserHostAppscopePeerInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialI7();
  AppInitialXI();
  appInitialMT();
  appInitialXP();
  ensureChatgptBrowserHostContextInit();
  appInitialIft();
  appInitialQlt();
  appInitialUl();
  AppInitialBl();
  appInitialFl();
  appInitialT7();
  AppInitialNl();
  AppInitialAS();
  appInitialLl();
  appInitialJvt();
});

export let chatgptDilReact: any;
export let chatgptDilWidgetNodeSchema: unknown;
export let chatgptDilRendererCustomCss: string;
export let chatgptDilRendererLazy: any;

/** Former Value108 — DIL lazy renderer + widget node schema + custom CSS. */
export const ensureChatgptDilLazyRendererInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialMT();
  appInitialOpt();
  chatgptDilReact = rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  (appInitialCT as any)();
  appInitialLL();
  appInitialK1();
  ensureChatgptDilActionSchemasInit();
  AppInitialTl();
  appInitialB8();
  (_appInitialU as any)();
  appInitialUdt();
  (_appInitialYI as any)();
  appInitialTI();
  ensureDrainedDilStubA();
  ensureDrainedDilStubB();
  ensureDrainedDilStubC();
  appInitialQN();
  ensureDrainedDilStubD();
  ensureDrainedDilStubE();
  appInitialBI();
  ensureChatgptBrowserHostContextInit();
  ensureDrainedDilStubF();
  useChatgptComposerControllerX();
  useChatgptComposerControllerY();
  ensureDrainedDilStubG();
  appInitialJvt();
  appInitialGmt();
  chatgptDilWidgetNodeSchema = appInitialXT({
    type: appInitialCT(),
  }).passthrough();
  chatgptDilRendererCustomCss =
    "\n:host,\n:where([data-theme]) {\n  --font-sans: var(--vscode-font-family, var(--font-sans-default));\n  --color-text: var(--color-token-foreground);\n  --color-text-emphasis: var(--color-token-foreground);\n  --color-text-prose: var(--color-token-foreground);\n  --color-text-secondary: var(--color-token-description-foreground);\n  --color-text-tertiary: var(--color-token-description-foreground);\n  --color-surface: var(--color-token-main-surface-primary);\n  --color-surface-secondary: var(--color-token-bg-secondary);\n  --color-surface-tertiary: var(--color-token-bg-tertiary);\n  --color-border: var(--color-token-border);\n  --color-border-subtle: var(--color-token-border-light);\n  --color-border-strong: var(--color-token-border-heavy);\n  --color-ring: var(--color-token-focus-border);\n  --font-text-md-size: var(--codex-chat-font-size);\n  --font-text-md-line-height: calc(var(--codex-chat-font-size) + 8px);\n  --font-text-sm-size: calc(var(--codex-chat-font-size) - 1px);\n  --font-text-sm-line-height: calc(var(--codex-chat-font-size) + 6px);\n}\n";
  chatgptDilRendererLazy = chatgptDilReact.lazy(async () => {
    let { DILRenderer } = await appInitialWmt(
      async () => {
        let { DILRenderer: _DILRenderer } =
          await import("../../apps/dil-renderer");
        return {
          DILRenderer: _DILRenderer,
        };
      },
      dilRendererMapDeps([0, 1, 2, 3]),
      import.meta.url,
    );
    return {
      default: DILRenderer,
    };
  });
});

/** Former Value111 — thin DIL lazy-renderer peer used by registry Value306. */
export const ensureChatgptDilLazyRendererPeerInit = rolldownRuntimeN(() => {
  appInitialIvt();
  ensureChatgptDilLazyRendererInit();
  appInitialJvt();
});

/** Former Value134 — content-reference footnote deps peer. */
export const ensureChatgptContentReferenceFootnotePeerInit = rolldownRuntimeN(
  () => {
    appInitialIvt();
    ensureChatgptCitationChromePeerInit();
    (_appInitialYI as any)();
    appInitialJvt();
  },
);

setEnsureChatgptContentReferenceFootnoteDepsInit(
  ensureChatgptContentReferenceFootnotePeerInit,
);
