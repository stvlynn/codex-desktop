// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iA` / export `U$`. Debug label left injectable.

import type { ReactNode } from "react";
import { cx } from "./cx";

type DebugLabel = (props: { name: string }) => ReactNode;

let isDebugLayout = false;
let DebugLabelImpl: DebugLabel | null = null;

/** Wire layout-debug gate (`vDr` / `yDr` in the bundle). */
export function setDialogSectionDebug(args: {
  enabled?: boolean;
  Label?: DebugLabel;
}): void {
  if (args.enabled != null) isDebugLayout = args.enabled;
  if (args.Label != null) DebugLabelImpl = args.Label;
}

export type DialogSectionProps = {
  children?: ReactNode;
  className?: string;
};

export function DialogSection({
  children,
  className,
}: DialogSectionProps): ReactNode {
  const debug = isDebugLayout;
  return (
    <div
      className={cx(
        "flex w-full flex-col pt-3 first:pt-0",
        debug && "outline outline-1 outline-dashed outline-token-border",
        className,
      )}
    >
      {debug ? DebugLabelImpl?.({ name: "DialogSection" }) : null}
      {children}
    </div>
  );
}
