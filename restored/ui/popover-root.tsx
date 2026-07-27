// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zDr` / export `k$` — thin data-slot wrapper; radix root injectable.

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let RootImpl: ComponentType<AnyProps> | null = null;

/** Wire radix Popover.Root (`SBt` in the bundle). */
export function setPopoverRootImpl(impl: ComponentType<AnyProps>): void {
  RootImpl = impl;
}

export function PopoverRoot(props: AnyProps): ReactNode {
  if (RootImpl == null) {
    throw new Error("PopoverRoot impl has not been configured");
  }
  return <RootImpl data-slot="popover" {...props} />;
}
