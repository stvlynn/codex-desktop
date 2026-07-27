// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VDr` / export `M$` — thin data-slot wrapper; radix trigger injectable.

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let TriggerImpl: ComponentType<AnyProps> | null = null;

/** Wire radix Popover.Trigger (`wBt` in the bundle). */
export function setPopoverTriggerImpl(impl: ComponentType<AnyProps>): void {
  TriggerImpl = impl;
}

export function PopoverTrigger(props: AnyProps): ReactNode {
  if (TriggerImpl == null) {
    throw new Error("PopoverTrigger impl has not been configured");
  }
  return <TriggerImpl data-slot="popover-trigger" {...props} />;
}
