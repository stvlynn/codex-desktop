// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `W1` / export `bp` — shimmer when active + context enabled.

import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import { createContext, useContext } from "react";

export const ShimmerTextEnabledContext = createContext(true);

type ShimmerSpanProps = ComponentPropsWithoutRef<"span"> & {
  children?: ReactNode;
};

let ShimmerSpan: ComponentType<ShimmerSpanProps> | null = null;

/** Wire animated shimmer span (`_oc` in the bundle). */
export function setShimmerSpanImpl(
  impl: ComponentType<ShimmerSpanProps>,
): void {
  ShimmerSpan = impl;
}

export type ShimmerTextProps = ComponentPropsWithoutRef<"span"> & {
  active?: boolean;
  children?: ReactNode;
  className?: string;
};

export function ShimmerText({
  active = true,
  children,
  className,
  ...rest
}: ShimmerTextProps): ReactNode {
  const enabled = useContext(ShimmerTextEnabledContext);
  if (!active || !enabled) {
    return (
      <span className={className} {...rest}>
        {children}
      </span>
    );
  }
  if (ShimmerSpan == null) {
    return (
      <span className={className} {...rest}>
        {children}
      </span>
    );
  }
  return (
    <ShimmerSpan className={className} {...rest}>
      {children}
    </ShimmerSpan>
  );
}
