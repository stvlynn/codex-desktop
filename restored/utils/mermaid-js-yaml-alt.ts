// Restored from ref/webview/assets/chunk-MI3HLSF2-BVJpT9C8.js
// js-yaml 4.x embedded in the Mermaid webview bundle (alternate diagram variant).

import yaml, { CORE_SCHEMA, type LoadOptions, type Schema } from "js-yaml";
import { initDayjsLoggerRuntime } from "./dayjs-core-alt-dup";

/** Rolldown lazy-init: retain dayjs logger side-effects from the sibling chunk. */
export function initMermaidJsYamlAlt(): void {
  initDayjsLoggerRuntime();
}

/** js-yaml CORE_SCHEMA used by Mermaid diagram parsers. */
export const yamlCoreSchema: Schema = CORE_SCHEMA;

/** Parse YAML source with optional js-yaml load options. */
export function yamlLoad(source: string, options?: LoadOptions): unknown {
  return yaml.load(source, options);
}
