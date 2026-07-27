// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `e1c`) / export `ru`.

import type { ReactElement, ReactNode } from "react";

export type OverlayPanelWithTitleProps = {
  actions?: ReactNode;
  children?: ReactNode;
  title?: ReactNode;
};

/**
 * Bundle export `ru` / internal `e1c`.
 * Overlay panel chrome: title row + scrollable body.
 */
export function OverlayPanelWithTitle(
  props: OverlayPanelWithTitleProps,
): ReactElement {
  const { actions, children, title } = props;
  return (
    <section className="flex min-h-0 flex-col">
      <div className="flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-token-input-placeholder-foreground">
        <span className="opacity-75">{title}</span>
        {actions}
      </div>
      <div className="flex min-h-0 flex-col">{children}</div>
    </section>
  );
}
