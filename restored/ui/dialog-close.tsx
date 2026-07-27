// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Zk` / export `J$` — thin wrapper; close impl injectable.

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let CloseImpl: ComponentType<AnyProps> | null = null;

/** Wire dialog close primitive (`oDr` in the bundle). */
export function setDialogCloseImpl(impl: ComponentType<AnyProps>): void {
  CloseImpl = impl;
}

export function DialogClose(props: AnyProps): ReactNode {
  if (CloseImpl == null) {
    throw new Error("DialogClose impl has not been configured");
  }
  return <CloseImpl {...props} />;
}
