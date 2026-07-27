// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nA` / export `B$`.

import type { ReactNode } from "react";
import { cx } from "./cx";

type DebugLabel = (props: { name: string }) => ReactNode;

let isDebugLayout = false;
let DebugLabelImpl: DebugLabel | null = null;
let sizeClass: (size?: string) => string | undefined = () => undefined;

/** Wire layout-debug gate + size class helper. */
export function setDialogBodyDeps(args: {
  enabled?: boolean;
  Label?: DebugLabel;
  sizeClass?: (size?: string) => string | undefined;
}): void {
  if (args.enabled != null) isDebugLayout = args.enabled;
  if (args.Label != null) DebugLabelImpl = args.Label;
  if (args.sizeClass != null) sizeClass = args.sizeClass;
}

export type DialogBodyProps = {
  as?: "div" | "form";
  children?: ReactNode;
  className?: string;
  size?: string;
  [key: string]: unknown;
};

export function DialogBody({
  as = "div",
  children,
  className,
  size,
  ...rest
}: DialogBodyProps): ReactNode {
  const debug = isDebugLayout;
  const classNames = cx(
    "flex flex-col gap-0 px-5 py-5 text-base leading-normal tracking-normal",
    debug && "outline outline-1 outline-dashed outline-token-border",
    sizeClass(size),
    className,
  );
  const label = debug ? DebugLabelImpl?.({ name: "DialogBody" }) : null;
  if (as === "form") {
    return (
      <form className={classNames} {...rest}>
        {label}
        {children}
      </form>
    );
  }
  return (
    <div className={classNames} {...rest}>
      {label}
      {children}
    </div>
  );
}
