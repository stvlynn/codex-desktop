// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Footnote renderer bridge — residual Helper123 registers the real impl.

import type { ReactNode } from "react";

type FootnoteProps = {
  isTerminalInline?: boolean;
  reference: unknown;
};

type FootnoteRenderer = (props: FootnoteProps) => ReactNode;

let footnoteRenderer: FootnoteRenderer = () => null;

export function setChatgptContentReferenceFootnoteRenderer(
  renderer: FootnoteRenderer,
): void {
  footnoteRenderer = renderer;
}

export function useChatgptComposerControllerHelper256(
  reference: unknown,
  index: number,
): ReactNode {
  return footnoteRenderer({
    isTerminalInline: true,
    reference,
  });
}

let ensureContentReferenceFootnoteDepsInitImpl: (() => void) | null = null;

/** Boundary registers Value134 here so extracted Value324 avoids a circular import. */
export function setEnsureChatgptContentReferenceFootnoteDepsInit(
  fn: () => void,
): void {
  ensureContentReferenceFootnoteDepsInitImpl = fn;
}

export function ensureChatgptContentReferenceFootnoteDepsInit(): void {
  ensureContentReferenceFootnoteDepsInitImpl?.();
}
