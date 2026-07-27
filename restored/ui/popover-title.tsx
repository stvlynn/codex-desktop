// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HDr` / export `j$`.

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "./cx";

export type PopoverTitleProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};

export function PopoverTitle({
  className,
  ...rest
}: PopoverTitleProps): ReactNode {
  return (
    <div
      data-slot="popover-title"
      className={cx("font-medium", className)}
      {...rest}
    />
  );
}
