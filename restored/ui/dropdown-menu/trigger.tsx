// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.Trigger (`eXi`) — styled radix trigger.

import type { ReactElement } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cx } from "../cx";
import type { DropdownMenuTriggerProps } from "./types";

/** Bundle `eXi` — clickable menu trigger. */
export function DropdownMenuTrigger(
  props: DropdownMenuTriggerProps,
): ReactElement {
  const { className, disabled, ref, ...rest } = props;

  return (
    <DropdownMenuPrimitive.Trigger
      ref={ref}
      aria-disabled={disabled || undefined}
      className={cx(
        "outline-hidden",
        disabled ? "cursor-default opacity-25" : "cursor-interaction",
        className,
      )}
      disabled={disabled}
      {...rest}
    />
  );
}
