// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LH` / export `oN` — markdown wrapped in error boundary.

import type { ComponentType, ReactNode } from "react";

type AnyProps = { children?: ReactNode; [key: string]: unknown };
type BoundaryProps = {
  name: string;
  resetKey?: unknown;
  fallback: ComponentType<{ resetError: () => void }>;
  children?: ReactNode;
};

let MarkdownImpl: ComponentType<AnyProps> | null = null;
let ErrorBoundary: ComponentType<BoundaryProps> | null = null;
let Fallback: ComponentType<{ resetError: () => void }> | null = null;

export function setSafeMarkdownImpl(impl: ComponentType<AnyProps>): void {
  MarkdownImpl = impl;
}
export function setSafeMarkdownErrorBoundary(impl: ComponentType<BoundaryProps>): void {
  ErrorBoundary = impl;
}
export function setSafeMarkdownFallback(
  impl: ComponentType<{ resetError: () => void }>,
): void {
  Fallback = impl;
}

export function SafeMarkdown(props: AnyProps): ReactNode {
  if (MarkdownImpl == null || ErrorBoundary == null || Fallback == null) {
    throw new Error("SafeMarkdown deps have not been configured");
  }
  const inner = <MarkdownImpl {...props} />;
  return (
    <ErrorBoundary
      name="Markdown"
      resetKey={props.children}
      fallback={Fallback}
    >
      {inner}
    </ErrorBoundary>
  );
}
