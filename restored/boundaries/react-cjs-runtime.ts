// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// npm-shim: React CJS interop thunks (react / compiler-runtime /
// react-dom / react-is / JSX transform module). Stock packages stay npm-backed;
// this boundary only wraps the bundle's `alias()` call shape.
// Bundle: o/Lvt≈react, c/Ivt≈compiler-runtime, J/jvt≈JSX module, ju/apt≈react-dom, mlc/Lf≈react-is.

import * as React from "react";
import * as CompilerRuntime from "react/compiler-runtime";
import * as ReactDOM from "react-dom";
import * as ReactIs from "../vendor/react-is-runtime";
import * as JsxRuntime from "./react-jsx-module";

/** Bundle `o` / export `Lvt`. */
export function react(): typeof React {
  return React;
}

/** Bundle `c` / export `Ivt`. */
export function reactCompilerRuntime(): typeof CompilerRuntime {
  return CompilerRuntime;
}

/** Bundle `J` / export `jvt`. */
export function jsxRuntime(): typeof JsxRuntime {
  return JsxRuntime;
}

/** Bundle `ju` / export `apt`. */
export function reactDom(): typeof ReactDOM {
  return ReactDOM;
}

/** Bundle `mlc` / export `Lf`. */
export function reactIs(): typeof ReactIs {
  return ReactIs;
}
