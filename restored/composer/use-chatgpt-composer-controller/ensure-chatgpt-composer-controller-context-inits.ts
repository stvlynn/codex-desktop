// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Letter React contexts materialized by composer-controller ESM inits X/Y.

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";

reactCompilerRuntime();

type ReactRuntime = {
  createContext: (defaultValue: unknown) => unknown;
};

let slot99: ReactRuntime | undefined;
export let useChatgptComposerControllerB: unknown;
export const useChatgptComposerControllerX = rolldownRuntimeN(() => {
  slot99 = rolldownRuntimeS(react(), 1) as ReactRuntime;
  useChatgptComposerControllerB = slot99.createContext(null);
});

let slot100: ReactRuntime | undefined;
export let useChatgptComposerControllerV: unknown;
export const useChatgptComposerControllerY = rolldownRuntimeN(() => {
  slot100 = rolldownRuntimeS(react(), 1) as ReactRuntime;
  useChatgptComposerControllerV = slot100.createContext(null);
});

/** Semantic aliases. */
export const ensureChatgptComposerControllerAuxInitX =
  useChatgptComposerControllerX;
export const ensureChatgptComposerControllerAuxInitY =
  useChatgptComposerControllerY;
export const chatgptComposerControllerRuntimeB = {
  get current() {
    return useChatgptComposerControllerB;
  },
};
export const chatgptComposerControllerRuntimeV = {
  get current() {
    return useChatgptComposerControllerV;
  },
};
