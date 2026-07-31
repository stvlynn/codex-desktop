// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Reveal-in-file-manager toolbar button (export hN).

import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactElement,
  SVGProps,
} from "react";

import { Button, type ButtonSize } from "../ui/button";

export type RevealFolderIconProps = SVGProps<SVGSVGElement>;

/** Default glyph for reveal-in-FM (local `iV` in this scope). */
export function RevealFolderIcon(props: RevealFolderIconProps): ReactElement {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.5 4.5h4l1 1.5h6v7h-11v-8.5z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type RevealInFileManagerButtonProps = {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  iconClassName?: string;
  uniform?: boolean;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color" | "onClick" | "children" | "size"
>;

/** Bundle `nIa` / export `hN`. */
export function RevealInFileManagerButton({
  label,
  onClick,
  size = "toolbar",
  iconClassName = "icon-xs",
  uniform = true,
  ...rest
}: RevealInFileManagerButtonProps): ReactElement {
  return (
    <Button
      color="ghost"
      size={size}
      uniform={uniform}
      aria-label={label}
      {...rest}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.(event);
      }}
    >
      <RevealFolderIcon className={iconClassName} />
    </Button>
  );
}

RevealInFileManagerButton.displayName = "RevealInFileManagerButton";
