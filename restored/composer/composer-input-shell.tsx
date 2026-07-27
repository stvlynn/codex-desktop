// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LQ` / export `F_`.

import type { ComponentPropsWithoutRef, ReactNode, Ref } from "react";
import { cx } from "../ui/cx";

export type ComposerInputShellProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
};

export function ComposerInputShell({
  children,
  className,
  ref,
  ...rest
}: ComposerInputShellProps): ReactNode {
  return (
    <div
      ref={ref}
      className={cx(
        "flex flex-col overflow-hidden rounded-3xl bg-token-input-background text-token-foreground extension:border extension:border-token-border electron:elevation-prominent focus:outline-none",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
