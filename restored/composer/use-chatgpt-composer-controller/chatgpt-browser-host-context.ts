// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Browser-host React context for ChatGPT composer rows (egress / streaming host).

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";

reactCompilerRuntime();

type ReactRuntime = {
  createContext: (defaultValue: unknown) => { Provider: unknown };
  useContext: (context: unknown) => any;
};

const React = rolldownRuntimeS(react(), 1) as ReactRuntime;

export const chatgptBrowserHostContext = React.createContext(null);

export function useChatgptComposerControllerHelper31(): any {
  return React.useContext(chatgptBrowserHostContext);
}

export const chatgptBrowserHostContextProvider =
  chatgptBrowserHostContext.Provider;
