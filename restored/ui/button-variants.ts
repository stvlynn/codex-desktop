// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Button radius / color / size Tailwind class maps (`e$e` / `d$e` / `f$e`).

export type ButtonRadius = keyof typeof BUTTON_RADIUS_CLASS;
export type ButtonColor = keyof typeof BUTTON_COLOR_CLASS;
export type ButtonSize = keyof typeof BUTTON_SIZE_CLASS;
export type ButtonContentLayout = "default" | "balanced";

export const BUTTON_RADIUS_CLASS = {
  default: "rounded-full",
  icon: "rounded-full electron:rounded-md",
  iconMd: "rounded-md",
  iconSm: "rounded-md",
  large: "rounded-full",
  medium: "rounded-lg",
  composer: "rounded-full",
  composerSm: "rounded-full",
  tabStripAction: "rounded-lg",
  toolbar: "rounded-lg",
  toolbarLabel: "rounded-lg",
} as const;

export const BUTTON_COLOR_CLASS = {
  accent:
    "bg-token-text-link-foreground enabled:hover:bg-token-text-link-foreground/90 enabled:active:bg-token-text-link-foreground/80 data-[state=open]:bg-token-text-link-foreground/90 text-token-on-accent border-transparent",
  accentSubtle:
    "bg-token-text-link-foreground/10 enabled:hover:bg-token-text-link-foreground/15 enabled:active:bg-token-text-link-foreground/20 data-[state=open]:bg-token-text-link-foreground/15 text-token-text-link-foreground border-transparent",
  danger:
    "bg-token-charts-red/10 enabled:hover:bg-token-charts-red/20 enabled:active:bg-token-charts-red/30 text-token-charts-red border-transparent",
  dangerSolid:
    "bg-token-charts-red enabled:hover:bg-token-charts-red/90 enabled:active:bg-token-charts-red/80 text-token-on-accent border-transparent",
  ghost:
    "text-token-text-tertiary enabled:hover:bg-token-list-hover-background enabled:active:bg-token-foreground/15 data-[state=open]:bg-token-list-hover-background border-transparent",
  outlineActive:
    "border-token-border text-token-button-tertiary-foreground bg-token-foreground/10 enabled:hover:bg-token-foreground/15 enabled:active:bg-token-foreground/20 data-[state=open]:bg-token-foreground/15 border",
  ghostActive:
    "text-token-foreground enabled:hover:bg-token-list-hover-background enabled:active:bg-token-foreground/15 data-[state=open]:bg-token-list-hover-background border-transparent",
  ghostMuted:
    "text-token-muted-foreground enabled:hover:bg-transparent enabled:active:text-token-foreground/70 data-[state=open]:bg-transparent hover:text-token-foreground border-transparent",
  ghostTertiary:
    "text-token-text-tertiary enabled:hover:bg-transparent enabled:active:text-token-foreground/70 data-[state=open]:bg-transparent enabled:hover:text-token-foreground border-transparent",
  outline:
    "border-token-border text-token-button-tertiary-foreground bg-token-bg-fog enabled:hover:bg-token-list-hover-background enabled:active:bg-token-foreground/15 data-[state=open]:bg-token-list-hover-background border",
  primary:
    "bg-token-foreground enabled:hover:bg-token-foreground/80 enabled:active:bg-token-foreground/70 data-[state=open]:bg-token-foreground/80 text-token-dropdown-background",
  secondary:
    "text-token-foreground bg-token-foreground/5 enabled:hover:bg-token-foreground/10 enabled:active:bg-token-foreground/15 data-[state=open]:bg-token-foreground/10 border-transparent",
} as const;

export const BUTTON_SIZE_CLASS = {
  composer: "h-token-button-composer px-2 py-0 text-sm leading-[18px]",
  composerSm: "h-token-button-composer-sm px-1.5 py-0 text-sm leading-[18px]",
  default: "px-2 py-0.5 text-sm leading-[18px]",
  icon: "electron:p-1 electron:[&>svg]:icon-sm flex items-center justify-center p-0.5",
  iconMd: "flex size-5 items-center justify-center p-0.5 [&>svg]:icon-2xs",
  iconSm: "flex h-4 w-4 items-center justify-center p-0.5 [&>svg]:icon-2xs",
  large: "px-5 py-2 text-base leading-[18px]",
  medium: "px-4 py-1.5 text-base leading-[18px]",
  tabStripAction:
    "h-[calc(var(--spacing-token-button-composer)+6px)] px-2 py-0 text-base leading-[18px]",
  toolbar: "h-token-button-composer px-2 py-0 text-base leading-[18px]",
  toolbarLabel: "h-token-button-composer px-2.5 py-0 text-sm leading-[18px]",
} as const;
