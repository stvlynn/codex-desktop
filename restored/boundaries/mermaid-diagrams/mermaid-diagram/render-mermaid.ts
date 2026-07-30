// Restored from ref/webview/assets/mermaid-diagram-BzeSLuAD.js
// Theme + initialize helpers for the Codex Mermaid markdown host.

import type { MermaidConfig } from "mermaid-v14";
import mermaid from "../mermaid-core";

const SURFACE_CSS =
  ".edgeLabel .label rect { fill: var(--mermaid-surface-background); opacity: 1; }";

const INIT_DIRECTIVE_RE =
  /%%\{\s*(?:init|initialize)\s*:\s*\{[\s\S]*?\}\s*\}%%/gi;

/** Strip init directives and normalize newlines for Mermaid render input. */
export function normalizeMermaidSource(code: string): string {
  return code
    .replace(INIT_DIRECTIVE_RE, "")
    .replaceAll("\\n", "<br/>")
    .trim();
}

function readCssColor(
  el: Element,
  cssVar: string,
  fallback: string,
): string {
  const view = el.ownerDocument.defaultView;
  if (view == null) return fallback;
  const probe = el.ownerDocument.createElement("span");
  probe.style.color = cssVar;
  el.appendChild(probe);
  const resolved = view.getComputedStyle(probe).color || fallback;
  probe.remove();
  return resolved;
}

/** Build Mermaid themeVariables from Codex CSS tokens when available. */
export function buildThemeVariables(
  host: Element | null,
  isDark: boolean,
): MermaidConfig["themeVariables"] {
  const background = host
    ? readCssColor(
        host,
        "var(--color-token-main-surface-primary)",
        isDark ? "#0d1117" : "#ffffff",
      )
    : isDark
      ? "#0d1117"
      : "#ffffff";
  const textColor = host
    ? readCssColor(
        host,
        "var(--color-token-foreground)",
        isDark ? "#e6edf3" : "#1f2328",
      )
    : isDark
      ? "#e6edf3"
      : "#1f2328";
  return {
    background,
    primaryTextColor: textColor,
    textColor,
    fontFamily: "var(--font-family-sans, ui-sans-serif, system-ui, sans-serif)",
  };
}

export function initializeMermaidHost(options: {
  host: Element | null;
  isDark: boolean;
}): void {
  const { host, isDark } = options;
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    suppressErrorRendering: true,
    deterministicIds: true,
    deterministicIDSeed: "codex-mermaid",
    htmlLabels: false,
    flowchart: {
      htmlLabels: false,
    },
    darkMode: isDark,
    theme: "base",
    themeCSS: SURFACE_CSS,
    themeVariables: buildThemeVariables(host, isDark),
  });
}

export async function renderMermaidSvg(
  id: string,
  code: string,
): Promise<string> {
  const source = normalizeMermaidSource(code);
  if (source.length === 0) return "";
  const { svg } = await mermaid.render(id, source);
  return svg;
}
