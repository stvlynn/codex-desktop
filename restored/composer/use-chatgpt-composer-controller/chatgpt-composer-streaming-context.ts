// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Streaming-enabled React context for ChatGPT assistant message rows.

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

export const chatgptComposerStreamingContext = React.createContext(true);

export const chatgptComposerStreamingContextProvider =
  chatgptComposerStreamingContext.Provider;
