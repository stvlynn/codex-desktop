// Restored from ref/webview/assets/shiki-highlight-provider-C6sAgO-B.js
// Wave FZ — chunk-local soft host from IMPORT_MAP/`shiki-highlight-provider-C6sAgO-B` (former deferred-scaffold).
// Open-runtime soft host; NOT app-initial extractFn.

import type { ReactElement, ReactNode } from "react";

export type ShikiHighlightProviderProps = {
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

type ShikiHighlightProviderImpl = (
  props: ShikiHighlightProviderProps,
) => ReactNode;
let impl: ShikiHighlightProviderImpl | null = null;

export function bindShikiHighlightProvider(
  next: ShikiHighlightProviderImpl,
): void {
  impl = next;
}

export function ShikiHighlightProvider(
  props: ShikiHighlightProviderProps = {},
): ReactElement {
  if (impl != null) return impl(props) as ReactElement;
  const { className, children } = props;
  return (
    <div
      className={className ?? "flex min-w-0 flex-col gap-2"}
      data-fz-soft="ShikiHighlightProvider"
      aria-label="ShikiHighlightProvider"
    >
      {children ?? (
        <div className="text-sm text-token-text-secondary">
          ShikiHighlightProvider
        </div>
      )}
    </div>
  );
}

export function ensureShikiHighlightProviderInit(): void {}
