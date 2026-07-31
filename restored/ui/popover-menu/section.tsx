// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu.Section (`lJo`) + SectionCount (`OJo`).
//
// Expand persistence + timed autoCollapse via `$E`/`SJo` (`bJo`/`xJo`/`hT`).
// Dropdown `sectionOptions` uses restored DropdownMenuPopover (`VR`) +
// DropdownMenu.Item (`BR`).

import {
  useEffect,
  useImperativeHandle,
  type ReactElement,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "../../vendor/framer-motion";
import ChevronDown from "../../icons/chevron-down";

import {
  SECTION_AUTO_COLLAPSE_MS,
  sectionAutoCollapseStatusAtom,
  sectionExpandedAtom,
} from "../../conversation/thread-summary-panel-section-expanded";
import { useAppScopeFamilyValue } from "../../runtime/app-scope-runtime";
import { cx } from "../cx";
import { DropdownMenu, DropdownMenuPopover } from "../dropdown-menu";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import {
  SECTION_COLLAPSED_STYLE,
  SECTION_COLLAPSE_TRANSITION,
  SECTION_CONTENT_CLASS,
  SECTION_EXPANDED_STYLE,
} from "./constants";
import type {
  PopoverMenuSectionHandle,
  PopoverMenuSectionMode,
  PopoverMenuSectionProps,
} from "./types";

function isRenderProp(
  value: ReactNode | ((state: { isExpanded: boolean }) => ReactNode),
): value is (state: { isExpanded: boolean }) => ReactNode {
  return typeof value === "function";
}

type SectionHeaderProps = {
  after?: ReactNode;
  children?: ReactNode;
  isExpanded: boolean;
  mode: PopoverMenuSectionMode;
  onChange?: (option: string) => void;
  onToggle?: () => void;
  sectionOptions?: readonly string[];
  shouldUseReducedMotion: boolean;
  titleSuffix?: ReactNode;
};

function PopoverMenuSectionHeader(props: SectionHeaderProps): ReactElement {
  const {
    after,
    children,
    isExpanded,
    mode,
    onChange,
    onToggle,
    sectionOptions,
    shouldUseReducedMotion,
    titleSuffix,
  } = props;

  const hasDropdownOptions =
    sectionOptions != null && sectionOptions.length > 1;
  const showChevron = mode === "accordion" || hasDropdownOptions;
  const onClick = mode === "accordion" ? onToggle : undefined;

  const titleButton = (
    <button
      aria-expanded={isExpanded}
      className="group/section-toggle inline-flex min-w-0 shrink-0 cursor-interaction items-center gap-1.5 rounded-md py-0.5 pr-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
      onClick={onClick}
      type="button"
    >
      <span className="truncate">{children}</span>
      {isExpanded ? null : titleSuffix}
      {showChevron ? (
        <ChevronDown
          aria-hidden
          className={cx(
            "icon-2xs shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100",
            !shouldUseReducedMotion && "transition-transform",
            isExpanded ? "opacity-0" : "opacity-100",
            isExpanded ? "rotate-0" : "-rotate-90",
          )}
        />
      ) : null}
    </button>
  );

  const titleNode =
    mode === "dropdown" && hasDropdownOptions ? (
      <DropdownMenuPopover triggerButton={titleButton}>
        {sectionOptions.map((option) => (
          <DropdownMenu.Item
            key={option}
            onSelect={() => onChange?.(option)}
          >
            {option}
          </DropdownMenu.Item>
        ))}
      </DropdownMenuPopover>
    ) : (
      titleButton
    );

  return (
    <header className="sticky top-0 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 bg-token-dropdown-background ps-3.5 pe-2.5 pb-0.5 text-base text-token-text-tertiary">
      {titleNode}
      {after == null ? null : (
        <div className="flex min-w-0 flex-1">{after}</div>
      )}
    </header>
  );
}

/** Bundle `OJo` — numeric section count badge. */
export function PopoverMenuSectionCount(props: {
  count: number;
}): ReactElement | null {
  const { count } = props;
  if (count === 0) return null;
  return (
    <span className="text-base text-token-description-foreground opacity-50">
      {count}
    </span>
  );
}

/**
 * Bundle `lJo` — accordion / headerless / dropdown section.
 * Expand state persists via `sectionExpandedAtom` (`bJo` / `Fm`);
 * timed autoCollapse via `sectionAutoCollapseStatusAtom` (`xJo` / `Da(hT)`).
 */
export function PopoverMenuSection(
  props: PopoverMenuSectionProps,
): ReactElement {
  const {
    after,
    autoCollapse,
    children,
    defaultCollapsed = false,
    mode = "accordion",
    onChange,
    ref,
    sectionKey,
    sectionOptions,
    title,
    titleSuffix,
  } = props;

  const shouldUseReducedMotion = usePrefersReducedMotion();
  const autoCollapseStatus = useAppScopeFamilyValue(
    sectionAutoCollapseStatusAtom,
    sectionKey,
  );
  const storedExpanded = useAppScopeFamilyValue(
    sectionExpandedAtom,
    sectionKey,
  );

  const autoCollapseActive =
    autoCollapse != null && autoCollapseStatus !== "canceled";
  const isExpanded =
    !(autoCollapse === true && autoCollapseStatus === "collapsed") &&
    (storedExpanded ?? !defaultCollapsed);

  const setExpanded = (expanded: boolean): void => {
    sectionExpandedAtom.write(sectionKey, expanded);
  };

  useImperativeHandle(ref, () => ({
    collapse: () => setExpanded(false),
    expand: () => setExpanded(true),
  }));

  useEffect(() => {
    if (!autoCollapseActive) return;
    if (!autoCollapse) {
      if (autoCollapseStatus === "collapsed") {
        sectionAutoCollapseStatusAtom.write(sectionKey, "pending");
      }
      return;
    }
    if (autoCollapseStatus !== "pending") return;
    const timeoutId = window.setTimeout(() => {
      sectionAutoCollapseStatusAtom.write(sectionKey, "collapsed");
    }, SECTION_AUTO_COLLAPSE_MS);
    return () => window.clearTimeout(timeoutId);
  }, [
    autoCollapse,
    autoCollapseActive,
    autoCollapseStatus,
    sectionKey,
  ]);

  const showContent =
    mode === "headerless" || isExpanded || mode === "dropdown";
  const afterNode = isRenderProp(after) ? after({ isExpanded }) : after;

  const staticContent = (
    <div className="relative z-0 mt-0.5 overflow-hidden">
      <div className={SECTION_CONTENT_CLASS}>{children}</div>
    </div>
  );

  const animatedContent = shouldUseReducedMotion ? (
    showContent && staticContent
  ) : (
    <AnimatePresence initial={false}>
      {showContent ? (
        <motion.div
          key="content"
          initial={SECTION_COLLAPSED_STYLE}
          animate={SECTION_EXPANDED_STYLE}
          exit={SECTION_COLLAPSED_STYLE}
          transition={SECTION_COLLAPSE_TRANSITION}
          className="relative z-0 overflow-hidden"
        >
          <div className={SECTION_CONTENT_CLASS}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <section
      className={cx(
        "relative z-0 flex flex-col pb-3 after:absolute after:inset-x-3.5 after:bottom-0 after:h-[0.5px] after:bg-token-border-default after:content-[''] last:after:hidden",
        mode === "accordion" && !isExpanded ? "last:pb-0.5" : "last:pb-0",
      )}
      data-popover-section={sectionKey}
      onClick={
        autoCollapseActive
          ? () => {
              sectionAutoCollapseStatusAtom.write(sectionKey, "canceled");
            }
          : undefined
      }
    >
      {mode === "headerless" ? null : (
        <PopoverMenuSectionHeader
          after={afterNode}
          isExpanded={isExpanded}
          mode={mode}
          onChange={onChange}
          onToggle={() => {
            if (mode !== "dropdown") setExpanded(!isExpanded);
          }}
          sectionOptions={sectionOptions}
          shouldUseReducedMotion={shouldUseReducedMotion}
          titleSuffix={titleSuffix}
        >
          {title}
        </PopoverMenuSectionHeader>
      )}
      {animatedContent}
    </section>
  );
}
