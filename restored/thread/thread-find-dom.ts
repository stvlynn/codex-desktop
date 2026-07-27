// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DOM highlight helpers for in-thread find (bundle yBi/wBi/TBi/ABi/DBi/…).

import {
  CODEX_THREAD_FIND_MATCH_CLASS,
  CODEX_THREAD_FIND_SHADOW_STYLE_ID,
  CONTENT_SEARCH_MATCH_ID_ATTR,
} from "./thread-find-constants";

const SKIP_SELECTOR =
  "script, style, textarea, [contenteditable='true'], [data-thread-find-skip]";

const SHADOW_STYLE = `
mark.${CODEX_THREAD_FIND_MATCH_CLASS} {
  background-color: var(--vscode-charts-yellow);
  color: var(--color-token-foreground);
  border-radius: var(--radius-2xs);
  padding: 0;
  margin: 0;
  border: none;
}
`;

/** Bundle `PBi`. */
export function cssEscapeAttr(value: string): string {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(value);
  }
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** Bundle `OBi`. */
export function ensureShadowFindStyle(root: ShadowRoot | Document): void {
  if (root.getElementById(CODEX_THREAD_FIND_SHADOW_STYLE_ID) != null) return;
  const style = document.createElement("style");
  style.id = CODEX_THREAD_FIND_SHADOW_STYLE_ID;
  style.textContent = SHADOW_STYLE;
  root.append(style);
}

/** Bundle `DBi`. */
export function collectSearchRoots(
  root: ParentNode,
  options: { includeShadowRoots?: boolean } = {},
): ParentNode[] {
  const roots: ParentNode[] = [root];
  if (!options.includeShadowRoots) return roots;
  const stack: ParentNode[] = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current == null) continue;
    const walker = document.createTreeWalker(
      current as Node,
      NodeFilter.SHOW_ELEMENT,
    );
    let node: Node | null = walker.currentNode;
    while (node != null) {
      if (node instanceof HTMLElement && node.shadowRoot != null) {
        ensureShadowFindStyle(node.shadowRoot);
        roots.push(node.shadowRoot);
        stack.push(node.shadowRoot);
      }
      node = walker.nextNode();
    }
  }
  return roots;
}

/** Bundle `yBi` / export `rU`. */
export function setContentSearchMatchId(options: {
  element: Element;
  matchId: string;
}): void {
  options.element.setAttribute(CONTENT_SEARCH_MATCH_ID_ATTR, options.matchId);
}

/** Bundle `bBi`. */
export function queryMatchElement(options: {
  container: ParentNode;
  matchId: string;
  includeShadowRoots?: boolean;
}): Element | null {
  const escaped = cssEscapeAttr(options.matchId);
  for (const root of collectSearchRoots(options.container, options)) {
    const el = (root as ParentNode).querySelector?.(
      `[${CONTENT_SEARCH_MATCH_ID_ATTR}="${escaped}"]`,
    );
    if (el != null) return el;
  }
  return null;
}

/** Bundle `wBi` / export `ZH`. */
export function clearThreadFindMarks(
  container: ParentNode,
  options: { includeShadowRoots?: boolean } = {},
): void {
  for (const root of collectSearchRoots(container, options)) {
    root
      .querySelectorAll?.(`mark.${CODEX_THREAD_FIND_MATCH_CLASS}`)
      .forEach((mark) => {
        const parent = mark.parentNode;
        if (parent == null) return;
        while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
        parent.removeChild(mark);
      });
  }
}

type TextNodeSpan = { node: Text; start: number; end: number };

function collectTextNodes(root: ParentNode): Text[] {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node != null) {
    const parent = node.parentElement;
    if (
      parent != null &&
      parent.closest(SKIP_SELECTOR) == null &&
      node.textContent
    ) {
      nodes.push(node as Text);
    }
    node = walker.nextNode();
  }
  return nodes;
}

function findSpanAt(
  spans: TextNodeSpan[],
  offset: number,
): TextNodeSpan | null {
  for (const span of spans) {
    if (offset >= span.start && offset < span.end) return span;
  }
  return spans.length > 0 && offset === spans[spans.length - 1]!.end
    ? spans[spans.length - 1]!
    : null;
}

/** Bundle `ABi`. */
export function highlightMatchesInRoot(options: {
  root: ParentNode;
  query: string;
  maxMatches: number;
}): { matches: HTMLElement[]; isCapped: boolean } {
  if (options.maxMatches <= 0) return { matches: [], isCapped: false };
  const textNodes = collectTextNodes(options.root);
  if (textNodes.length === 0) return { matches: [], isCapped: false };
  const spans: TextNodeSpan[] = [];
  let cursor = 0;
  for (const node of textNodes) {
    const text = node.textContent ?? "";
    const end = cursor + text.length;
    spans.push({ node, start: cursor, end });
    cursor = end;
  }
  const joined = spans
    .map((s) => s.node.textContent ?? "")
    .join("")
    .toLowerCase();
  const needle = options.query.toLowerCase();
  const ranges: Array<{ start: number; end: number }> = [];
  let searchFrom = 0;
  while (searchFrom < joined.length && ranges.length < options.maxMatches) {
    const start = joined.indexOf(needle, searchFrom);
    if (start === -1) break;
    ranges.push({ start, end: start + options.query.length });
    searchFrom = start + options.query.length;
  }
  const isCapped =
    ranges.length === options.maxMatches &&
    joined.indexOf(needle, searchFrom) !== -1;
  const marks: HTMLElement[] = [];
  for (let i = ranges.length - 1; i >= 0; --i) {
    const range = ranges[i]!;
    const startSpan = findSpanAt(spans, range.start);
    const endSpan = findSpanAt(spans, range.end - 1);
    if (startSpan == null || endSpan == null) continue;
    const domRange = document.createRange();
    domRange.setStart(startSpan.node, range.start - startSpan.start);
    domRange.setEnd(endSpan.node, range.end - endSpan.start);
    const mark = document.createElement("mark");
    mark.className = CODEX_THREAD_FIND_MATCH_CLASS;
    const contents = domRange.extractContents();
    mark.append(contents);
    domRange.insertNode(mark);
    marks.push(mark);
  }
  return { matches: marks.reverse(), isCapped };
}

/** Bundle `TBi` / export `tU`. */
export function searchDomForMatches(options: {
  target: ParentNode;
  query: string;
  maxMatches: number;
  includeShadowRoots?: boolean;
}): { matches: HTMLElement[]; isCapped: boolean } {
  if (options.maxMatches <= 0) return { matches: [], isCapped: false };
  const query = options.query.trim();
  if (query.length === 0) return { matches: [], isCapped: false };
  const matches: HTMLElement[] = [];
  let isCapped = false;
  for (const root of collectSearchRoots(options.target, options)) {
    const remaining = options.maxMatches - matches.length;
    if (remaining <= 0) {
      isCapped = true;
      break;
    }
    const result = highlightMatchesInRoot({
      root,
      query,
      maxMatches: remaining,
    });
    matches.push(...result.matches);
    if (result.isCapped) {
      isCapped = true;
      break;
    }
  }
  return { matches, isCapped };
}
