// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xm` / export `Blt` — pass-through when disabled / no content.

import type { ComponentType, ReactNode } from "react";
import { Fragment, createContext, useContext } from "react";

export const TooltipDefaultDelayContext = createContext<number | null>(null);

// Peer context from tooltip provider (`C9e` in the bundle); read for parity.
export const TooltipProviderPeerContext = createContext<unknown>(null);

type TooltipProps = {
  children?: ReactNode;
  delayDuration?: number;
  disabled?: boolean;
  tooltipContent?: ReactNode;
  [key: string]: unknown;
};

let TooltipImpl: ComponentType<TooltipProps> | null = null;
const DEFAULT_DELAY_MS = 700;

/** Wire tooltip primitive (`$7e` in the bundle). */
export function setOptionalTooltipImpl(
  impl: ComponentType<TooltipProps>,
): void {
  TooltipImpl = impl;
}

export function OptionalTooltip(props: TooltipProps): ReactNode {
  useContext(TooltipProviderPeerContext);
  const ctxDelay = useContext(TooltipDefaultDelayContext);
  if (props.disabled || props.tooltipContent == null) {
    return <Fragment>{props.children}</Fragment>;
  }
  if (TooltipImpl == null) {
    return <Fragment>{props.children}</Fragment>;
  }
  const delayDuration = props.delayDuration ?? ctxDelay ?? DEFAULT_DELAY_MS;
  return <TooltipImpl {...props} delayDuration={delayDuration} />;
}
