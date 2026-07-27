// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Z8c`) / export `xl`.

import { createElement, type ReactElement, type ReactNode } from "react";

export type AnsiCodeBlockProps = {
  children?: ReactNode;
  className?: string;
};

export type AnsiCodeBlockPeers = {
  normalizeChildren: (children: unknown) => unknown;
  prepareAnsiInput: (value: unknown) => unknown;
  ansiToJson: (input: unknown, options: Record<string, unknown>) => unknown[];
  renderAnsiToken: (token: unknown) => ReactNode;
};

let peers: AnsiCodeBlockPeers | null = null;

/** Wire ANSI code-block peers once companions land. */
export function setAnsiCodeBlockPeers(next: AnsiCodeBlockPeers): void {
  peers = next;
}

/**
 * Bundle export `xl` / internal `Z8c`.
 * Render ANSI text as a classed code block.
 */
export function AnsiCodeBlock(props: AnsiCodeBlockProps): ReactElement {
  if (peers == null) {
    throw new Error("AnsiCodeBlock peers are not configured");
  }
  const { children, className } = props;
  const tokens = peers.ansiToJson(
    peers.prepareAnsiInput(peers.normalizeChildren(children)),
    { json: true, remove_empty: true, use_classes: true },
  );
  return createElement(
    "code",
    { className },
    ...tokens.map(peers.renderAnsiToken),
  );
}
