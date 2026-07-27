// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hz` / export `AR` — copy affordance with brief "copied" state.
// Icon / intl / mounted guard left injectable.

import type { ComponentType, MouseEvent, ReactNode } from "react";
import { useState } from "react";

type IntlLike = {
  formatMessage: (descriptor: {
    id?: string;
    defaultMessage: string;
    description?: string;
  }) => string;
};

type IconProps = { className?: string };

let useIntl: (() => IntlLike) | null = null;
let useIsMounted: (() => () => boolean) | null = null;
let CopyIcon: ComponentType<IconProps> | null = null;
let CheckIcon: ComponentType<IconProps> | null = null;

export function setCopyButtonIntl(hook: () => IntlLike): void {
  useIntl = hook;
}
export function setCopyButtonMountedGuard(hook: () => () => boolean): void {
  useIsMounted = hook;
}
export function setCopyButtonIcons(args: {
  Copy: ComponentType<IconProps>;
  Check: ComponentType<IconProps>;
}): void {
  CopyIcon = args.Copy;
  CheckIcon = args.Check;
}

export type CopyButtonProps = {
  buttonText?: string;
  iconClassName?: string;
  showIcon?: boolean;
  onCopy: (event: MouseEvent) => void;
  ariaLabel?: string;
  className?: string;
  iconOnly?: boolean;
};

export function CopyButton({
  buttonText,
  iconClassName = "icon-sm",
  showIcon = true,
  onCopy,
  ariaLabel,
  className,
  iconOnly = false,
}: CopyButtonProps): ReactNode {
  const intl = useIntl?.();
  const isMounted = useIsMounted?.() ?? (() => true);
  const [copied, setCopied] = useState(false);
  const label =
    ariaLabel ??
    intl?.formatMessage({
      defaultMessage: "Copy",
      description: "Aria label for copy button",
    }) ??
    "Copy";
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    onCopy(event);
    setCopied(true);
    setTimeout(() => {
      if (isMounted()) setCopied(false);
    }, 2000);
  };
  const Icon = copied ? CheckIcon : CopyIcon;
  return (
    <button
      type="button"
      aria-label={label}
      className={className}
      onClick={handleClick}
    >
      {showIcon && Icon != null ? <Icon className={iconClassName} /> : null}
      {!iconOnly ? (copied ? "Copied" : (buttonText ?? "Copy")) : null}
    </button>
  );
}
