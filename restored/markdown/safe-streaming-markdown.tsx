// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jRa` / export `iN` — streaming markdown + error boundary.

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

export function setSafeStreamingMarkdownImpl(impl: ComponentType<AnyProps>): void {
  MarkdownImpl = impl;
}
export function setSafeStreamingMarkdownErrorBoundary(impl: ComponentType<BoundaryProps>): void {
  ErrorBoundary = impl;
}
export function setSafeStreamingMarkdownFallback(
  impl: ComponentType<{ resetError: () => void }>,
): void {
  Fallback = impl;
}

export function SafeStreamingMarkdown(props: AnyProps): ReactNode {
  if (MarkdownImpl == null || ErrorBoundary == null || Fallback == null) {
    throw new Error("SafeStreamingMarkdown deps have not been configured");
  }
  const inner = <MarkdownImpl {...props} />;
  return (
    <ErrorBoundary
      name="StreamingMarkdown"
      resetKey={props.children}
      fallback={Fallback}
    >
      {inner}
    </ErrorBoundary>
  );
}
