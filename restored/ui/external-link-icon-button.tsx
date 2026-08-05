// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `PD` / export `z0` — open href in-app browser or external.

import type { ComponentType, ReactNode } from "react";
import { cx } from "./cx";

export type ExternalLinkIconButtonProps = {
  className?: string;
  ExternalIcon?: ComponentType<{ className?: string }>;
  href: string;
  isBrowserSidebarEnabled?: boolean;
  openTarget?: string;
  PrimaryIcon?: ComponentType<{ className?: string }>;
  useExternalBrowser?: boolean;
};

let Impl: (props: ExternalLinkIconButtonProps) => ReactNode = ({
  className,
  href,
  PrimaryIcon,
}) => (
  <a
    className={cx("inline-flex items-center", className)}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {PrimaryIcon ? <PrimaryIcon className="icon-xs" /> : null}
  </a>
);

export function bindExternalLinkIconButton(
  impl: (props: ExternalLinkIconButtonProps) => ReactNode,
): void {
  Impl = impl;
}

export function ExternalLinkIconButton(
  props: ExternalLinkIconButtonProps,
): ReactNode {
  return Impl(props);
}
