// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.SubmenuItem (`fXi`) — inline expand-in-place submenu.

import {
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
} from "react";
import { AnimatePresence, motion } from "../../vendor/framer-motion";

import { cx } from "../cx";
import { ITEM_CLASS, SUBMENU_COLLAPSE_TRANSITION } from "./constants";
import { DropdownMenuChevronRightIcon } from "./chevron-right-icon";
import type { DropdownMenuSubmenuItemProps } from "./types";

function toggleOpen(previous: boolean): boolean {
  return !previous;
}

/** Bundle `fXi` — expands children below a cloned trigger Item. */
export function DropdownMenuSubmenuItem(
  props: DropdownMenuSubmenuItemProps,
): ReactElement {
  const { trigger, children, isDefaultOpen = false } = props;
  const disabled = Boolean(
    isValidElement(trigger) ? trigger.props.disabled : false,
  );
  const [isOpen, setIsOpen] = useState(disabled ? false : isDefaultOpen);
  const showChildren = isOpen && !disabled;

  const triggerNode = isValidElement(trigger)
    ? cloneElement(trigger, {
        onSelect: (event: Event) => {
          trigger.props.onSelect?.(event);
          if (event.defaultPrevented) return;
          event.preventDefault();
          event.stopPropagation();
          if (!disabled) setIsOpen(toggleOpen);
        },
        rightIcon: (
          <span
            aria-hidden
            className={cx(
              "inline-flex items-center justify-center text-token-input-placeholder-foreground",
              showChildren && "rotate-90",
            )}
          >
            <DropdownMenuChevronRightIcon
              className={cx(
                trigger.props.rightIconClassName ?? "icon-xs",
                ITEM_CLASS.icon,
              )}
            />
          </span>
        ),
      } as never)
    : trigger;

  return (
    <div data-state={showChildren ? "open" : "closed"}>
      {triggerNode}
      <div
        className={
          showChildren
            ? undefined
            : "pointer-events-none invisible h-0 overflow-hidden"
        }
      >
        <AnimatePresence initial={false}>
          {showChildren ? (
            <motion.div
              key="dropdown-submenu"
              initial={false}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={SUBMENU_COLLAPSE_TRANSITION}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
