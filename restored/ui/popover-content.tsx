// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gA` / export `A$` — radix content wrapper with Codex styling.

import type { ComponentType, CSSProperties, ReactNode } from "react";
import { cx } from "./cx";

type AnyProps = Record<string, unknown>;

let ContentImpl: ComponentType<AnyProps> | null = null;
let PortalImpl: ComponentType<AnyProps> | null = null;
let usePortalContainer: (() => Element | null | undefined) | null = null;

export function setPopoverContentImpls(args: {
  Content: ComponentType<AnyProps>;
  Portal?: ComponentType<AnyProps>;
  usePortalContainer?: () => Element | null | undefined;
}): void {
  ContentImpl = args.Content;
  PortalImpl = args.Portal ?? null;
  usePortalContainer = args.usePortalContainer ?? null;
}

export type PopoverContentProps = {
  className?: string;
  align?: "start" | "center" | "end" | string;
  sideOffset?: number;
  size?: "default" | "large" | string;
  style?: CSSProperties;
  disablePortal?: boolean;
  opaque?: boolean;
  portalContainer?: Element | null;
  unstyled?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
};

export function PopoverContent({
  className,
  align = "start",
  sideOffset = 4,
  size = "default",
  style,
  disablePortal = false,
  opaque = false,
  portalContainer,
  unstyled = false,
  children,
  ...rest
}: PopoverContentProps): ReactNode {
  if (ContentImpl == null) {
    throw new Error("PopoverContent impl has not been configured");
  }
  const container = portalContainer ?? usePortalContainer?.() ?? undefined;
  const content = (
    <ContentImpl
      data-slot="popover-content"
      align={align}
      sideOffset={sideOffset}
      className={
        unstyled
          ? className
          : cx(
              "text-token-foreground ring-token-border z-50 flex origin-[var(--radix-popover-content-transform-origin)] flex-col overflow-y-auto rounded-xl px-1 py-1 shadow-lg ring-[0.5px] outline-hidden",
              opaque
                ? "bg-token-dropdown-background"
                : "bg-token-dropdown-background/90 backdrop-blur-sm",
              size === "large" ? "w-96" : "w-72",
              "max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] max-w-[min(var(--radix-popover-content-available-width),calc(100vw-16px))]",
              className,
            )
      }
      style={style}
      {...rest}
    >
      {children}
    </ContentImpl>
  );
  if (disablePortal || PortalImpl == null) return content;
  return <PortalImpl container={container}>{content}</PortalImpl>;
}
