// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qk` / export `q$` — thin wrapper; overlay impl injectable.

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let OverlayImpl: ComponentType<AnyProps> | null = null;

/** Wire dialog overlay primitive (`sDr` in the bundle). */
export function setDialogOverlayImpl(impl: ComponentType<AnyProps>): void {
  OverlayImpl = impl;
}

export function DialogOverlay(props: AnyProps): ReactNode {
  if (OverlayImpl == null) {
    throw new Error("DialogOverlay impl has not been configured");
  }
  return <OverlayImpl {...props} />;
}
