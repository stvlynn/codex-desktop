// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tA` / export `H$`.

import type { ReactNode } from "react";
import { cx } from "./cx";

type DebugLabel = (props: { name: string }) => ReactNode;

let isDebugLayout = false;
let DebugLabelImpl: DebugLabel | null = null;

export function setDialogHeaderDebug(args: {
  enabled?: boolean;
  Label?: DebugLabel;
}): void {
  if (args.enabled != null) isDebugLayout = args.enabled;
  if (args.Label != null) DebugLabelImpl = args.Label;
}

function titleHeadingClass(size: string): string {
  if (size === "lg") return "heading-lg";
  if (size === "base") return "heading-base";
  if (size === "sm") return "heading-sm";
  return "heading-dialog";
}

export type DialogHeaderProps = {
  icon?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  iconClassName?: string;
  iconBackgroundClassName?: string;
  titleSize?: "dialog" | "lg" | "base" | "sm" | string;
  titleClassName?: string;
  subtitleSize?: "base" | "sm" | string;
  subtitleClassName?: string;
};

export function DialogHeader({
  icon,
  title,
  subtitle,
  className,
  iconClassName,
  iconBackgroundClassName,
  titleSize = "dialog",
  titleClassName,
  subtitleSize = "base",
  subtitleClassName,
}: DialogHeaderProps): ReactNode {
  const debug = isDebugLayout;
  return (
    <div
      className={cx(
        "flex flex-col items-start gap-3",
        debug && "outline outline-1 outline-dashed outline-token-border",
        className,
      )}
    >
      {debug ? DebugLabelImpl?.({ name: "DialogHeader" }) : null}
      {icon != null ? (
        <span
          className={cx(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl p-2",
            iconBackgroundClassName ?? "bg-token-foreground/10",
            iconClassName,
          )}
        >
          {icon}
        </span>
      ) : null}
      <div className="flex min-w-0 flex-col gap-1">
        {title != null ? (
          <div className={cx(titleHeadingClass(titleSize), titleClassName)}>
            {title}
          </div>
        ) : null}
        {subtitle != null ? (
          <div
            className={cx(
              subtitleSize === "base"
                ? "text-base leading-normal tracking-normal"
                : "text-sm leading-normal tracking-normal",
              "text-token-text-secondary",
              subtitleClassName,
            )}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
