// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rA` / export `V$`.

import type { ReactNode } from "react";
import { cx } from "./cx";

export type DialogFooterProps = {
  children?: ReactNode;
  className?: string;
  expandSingleButton?: boolean;
};

export function DialogFooter({
  children,
  className,
  expandSingleButton = true,
}: DialogFooterProps): ReactNode {
  return (
    <div
      className={cx(
        "flex w-full items-center justify-end gap-2 px-5 pb-5 pt-2",
        expandSingleButton && "[&>:only-child]:flex-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
