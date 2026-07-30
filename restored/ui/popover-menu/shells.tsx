// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu shell peers: Root / Content / PopoverContent / HeaderButton (`wJo`/`EJo`/`TJo`/`DJo`).

import {
  createContext,
  useContext,
  type ReactElement,
  type SVGProps,
} from "react";
import { motion } from "../../vendor/framer-motion";

import { Button } from "../button";
import { OptionalTooltip } from "../optional-tooltip";
import { cx } from "../cx";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import type {
  PopoverMenuContentProps,
  PopoverMenuHeaderButtonProps,
  PopoverMenuPopoverContentProps,
  PopoverMenuRootProps,
} from "./types";

const PopoverMenuInlineContext = createContext(true);

/** Whether the menu is currently shown inline (bundle `jJo` / `CJo`). */
export function usePopoverMenuInlineVisible(): boolean {
  return useContext(PopoverMenuInlineContext);
}

/** Bundle `Aqo` — settings/sliders glyph used by HeaderButton. */
export function PanelSettingsIcon(
  props: SVGProps<SVGSVGElement>,
): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M5.693 11.056a2.71 2.71 0 0 1 2.432 2.694l-.015.277a2.71 2.71 0 0 1-2.694 2.432l-.276-.015a2.71 2.71 0 0 1-2.418-2.417l-.014-.277a2.709 2.709 0 0 1 2.708-2.708l.277.014Zm-.277 1.316a1.378 1.378 0 1 0 0 2.757 1.378 1.378 0 0 0 0-2.757Zm11.384.727a.665.665 0 0 1 0 1.302l-.134.014h-5.833a.665.665 0 0 1 0-1.33h5.833l.135.014ZM5.693 3.556A2.71 2.71 0 0 1 8.125 6.25l-.015.277A2.71 2.71 0 0 1 5.416 8.96l-.276-.015a2.71 2.71 0 0 1-2.418-2.417l-.014-.277a2.709 2.709 0 0 1 2.708-2.708l.277.014Zm-.277 1.316a1.378 1.378 0 1 0 .001 2.757 1.378 1.378 0 0 0-.001-2.757Zm11.384.727a.665.665 0 0 1 0 1.302l-.134.014h-5.833a.665.665 0 0 1 0-1.33h5.833l.135.014Z" />
    </svg>
  );
}

/** Bundle `EJo` — scrollable panel chrome. */
export function PopoverMenuContent(
  props: PopoverMenuContentProps,
): ReactElement {
  const { children } = props;

  return (
    <div className="relative flex max-h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-token-dropdown-background pt-2.5 electron:elevation-prominent extension:border extension:border-token-border-default extension:shadow-md">
      <div className="flex h-fit max-h-full min-h-0 flex-col gap-3 overflow-y-auto pb-1.5">
        {children}
      </div>
    </div>
  );
}

/** Bundle `TJo` — radix popover-sized content shell. */
export function PopoverMenuPopoverContent(
  props: PopoverMenuPopoverContentProps,
): ReactElement {
  const { children, style } = props;

  return (
    <div
      className="flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col gap-3"
      style={{ width: 300, ...style }}
    >
      <PopoverMenuInlineContext.Provider value={true}>
        {children}
      </PopoverMenuInlineContext.Provider>
    </div>
  );
}

/** Bundle `DJo` — toolbar header toggle button. */
export function PopoverMenuHeaderButton(
  props: PopoverMenuHeaderButtonProps,
): ReactElement {
  const { label, onClick, pressed, shortcut, ...rest } = props;

  const button = (
    <Button
      size="toolbar"
      color={pressed ? "secondary" : "ghost"}
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      onClick={onClick}
      uniform
      {...rest}
    >
      <PanelSettingsIcon className="icon-xs" />
    </Button>
  );

  return (
    <OptionalTooltip delayOpen shortcut={shortcut} tooltipContent={label}>
      {button}
    </OptionalTooltip>
  );
}

/** Bundle `wJo` — floating animated root for the thread summary panel. */
export function PopoverMenuRoot(props: PopoverMenuRootProps): ReactElement {
  const {
    children,
    shouldHideInlineImmediately = false,
    shouldShow = false,
  } = props;
  const shouldUseReducedMotion = usePrefersReducedMotion();
  const pipObstacle = shouldShow ? "thread-summary-panel" : undefined;
  const shellClassName = cx(
    "pointer-events-none pe-4 max-h-full min-h-0 origin-top-right",
    shouldHideInlineImmediately && "invisible",
  );
  const animate = {
    opacity: shouldShow ? 1 : 0,
    translateX: shouldShow ? 0 : "100%",
    scale: shouldShow ? 1 : 0.8,
  };
  const transition =
    shouldHideInlineImmediately || shouldUseReducedMotion
      ? { duration: 0 }
      : { type: "spring" as const, duration: 0.3, bounce: 0.01 };

  return (
    <div className="pointer-events-none absolute top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) z-40">
      <div className="relative flex max-h-full">
        <motion.div
          data-pip-obstacle={pipObstacle}
          initial={false}
          className={shellClassName}
          animate={animate}
          transition={transition}
        >
          <div
            className={cx(
              "flex max-h-full min-h-0 flex-col gap-3",
              shouldShow ? "pointer-events-auto" : "pointer-events-none",
            )}
            style={{ width: 300 }}
          >
            <PopoverMenuInlineContext.Provider value={shouldShow}>
              {children}
            </PopoverMenuInlineContext.Provider>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
