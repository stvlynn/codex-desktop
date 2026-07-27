// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hk` / export `G1` — render children only when `electron` is set.

import type { ReactNode } from "react";
import { Fragment } from "react";

export type ElectronOnlyProps = {
  browser?: ReactNode;
  chromeExtension?: ReactNode;
  children?: ReactNode;
  electron?: boolean;
  extension?: ReactNode;
};

export function ElectronOnly({
  children,
  electron,
}: ElectronOnlyProps): ReactNode {
  if (!(electron !== undefined && electron)) return null;
  return <Fragment>{children}</Fragment>;
}
