// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave GA — upgraded former deferred-scaffold soft host (no extractFn wording).
// iconSmall/showTooltip button

import type { ReactElement, ReactNode } from "react";

export type IconButtonWithTooltipProps = {
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

type IconButtonWithTooltipImpl = (
  props: IconButtonWithTooltipProps,
) => ReactNode;
let impl: IconButtonWithTooltipImpl | null = null;

/** Wire the full IconButtonWithTooltip once deeper restore lands. */
export function bindIconButtonWithTooltip(
  next: IconButtonWithTooltipImpl,
): void {
  impl = next;
}

/**
 * Bundle export `GL` / export `GL` / internal `Ara`.
 * iconSmall/showTooltip button; heavy UI via bind.
 */
export function IconButtonWithTooltip(
  props: IconButtonWithTooltipProps,
): ReactElement {
  if (impl != null) return impl(props) as ReactElement;
  const { className, children } = props;
  return (
    <div
      className={className ?? "flex min-w-0 flex-col gap-2"}
      data-ee-scaffold="GL"
      aria-label="IconButtonWithTooltip"
    >
      {children ?? (
        <div className="text-sm text-token-text-secondary">
          iconSmall/showTooltip button
        </div>
      )}
    </div>
  );
}
