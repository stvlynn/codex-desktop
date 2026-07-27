// Restored from ref/webview/assets/highlight-code-IUEcEehV.js
// App wrapper: register a Codex language subset on highlight.js, then highlight.

import hljs from "highlight.js/lib/core";
import arduino from "highlight.js/lib/languages/arduino";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import css from "highlight.js/lib/languages/css";
import diff from "highlight.js/lib/languages/diff";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import dos from "highlight.js/lib/languages/dos";
import go from "highlight.js/lib/languages/go";
import graphql from "highlight.js/lib/languages/graphql";
import ini from "highlight.js/lib/languages/ini";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import kotlin from "highlight.js/lib/languages/kotlin";
import latex from "highlight.js/lib/languages/latex";
import less from "highlight.js/lib/languages/less";
import lua from "highlight.js/lib/languages/lua";
import makefile from "highlight.js/lib/languages/makefile";
import markdown from "highlight.js/lib/languages/markdown";
import mathematica from "highlight.js/lib/languages/mathematica";
import matlab from "highlight.js/lib/languages/matlab";
import nginx from "highlight.js/lib/languages/nginx";
import objectivec from "highlight.js/lib/languages/objectivec";
import perl from "highlight.js/lib/languages/perl";
import pgsql from "highlight.js/lib/languages/pgsql";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import plaintext from "highlight.js/lib/languages/plaintext";
import powershell from "highlight.js/lib/languages/powershell";
import python from "highlight.js/lib/languages/python";
import pythonRepl from "highlight.js/lib/languages/python-repl";
import r from "highlight.js/lib/languages/r";
import ruby from "highlight.js/lib/languages/ruby";
import rust from "highlight.js/lib/languages/rust";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import sql from "highlight.js/lib/languages/sql";
import swift from "highlight.js/lib/languages/swift";
import typescript from "highlight.js/lib/languages/typescript";
import vbnet from "highlight.js/lib/languages/vbnet";
import wasm from "highlight.js/lib/languages/wasm";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
const LANGUAGE_LOADERS: Record<string, typeof javascript> = {
  arduino,
  bash,
  c,
  cpp,
  csharp,
  css,
  diff,
  dockerfile,
  dos,
  go,
  graphql,
  ini,
  java,
  javascript,
  json,
  kotlin,
  less,
  lua,
  makefile,
  markdown,
  objectivec,
  perl,
  php,
  "php-template": phpTemplate,
  plaintext,
  powershell,
  python,
  "python-repl": pythonRepl,
  r,
  ruby,
  rust,
  scss,
  shell,
  sql,
  swift,
  typescript,
  vbnet,
  wasm,
  xml,
  yaml,
  latex,
  mathematica,
  matlab,
  nginx,
  pgsql,
};
let languagesRegistered = false;
function ensureLanguagesRegistered(): void {
  if (languagesRegistered) return;
  for (const [name, loader] of Object.entries(LANGUAGE_LOADERS)) {
    hljs.registerLanguage(name, loader);
  }
  hljs.registerAliases(["wolfram"], {
    languageName: "mathematica",
  });
  languagesRegistered = true;
}
export type HighlightCodeResult = {
  code: string;
  html: string;
  language: string | undefined;
};

/**
 * Highlight source with an optional language; falls back to highlightAuto.
 * Export name matches the bundle's `highlightCode` / `HighlightCode` surface.
 */
export function HighlightCode(
  code: string,
  language?: string,
): HighlightCodeResult {
  ensureLanguagesRegistered();
  if (language) {
    const { value } = hljs.highlight(code, {
      language,
    });
    return {
      code,
      html: value,
      language,
    };
  }
  const { value, language: detected } = hljs.highlightAuto(code);
  return {
    code,
    html: value,
    language: detected,
  };
}
export { HighlightCode as highlightCode };
