// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu.Section (`lJo`) + SectionCount (`OJo`).
//
// Leftover: persisted expand / autoCollapse store atoms (`$E` / `SJo` —
// `bJo`/`xJo`/`hT`) stay soft. This restore uses local React state so the
// accordion UI works; wiring the real store peers unblocks cross-session
// collapse memory and timed auto-collapse. Dropdown `sectionOptions` also
// soft-degrades to accordion until DropdownMenu compound peers bind.

import {
  useEffect,
  useImperativeHandle,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "../../vendor/framer-motion";
import ChevronDown from "../../icons/chevron-down";

import { cx } from "../cx";
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
    onToggle,
    sectionOptions,
    shouldUseReducedMotion,
    titleSuffix,
  } = props;

  // Dropdown mode with options soft-degrades to accordion until DropdownMenu binds.
  const showChevron =
    mode === "accordion" ||
    (sectionOptions != null && sectionOptions.length > 1);
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

  return (
    <header className="sticky top-0 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 bg-token-dropdown-background ps-3.5 pe-2.5 pb-0.5 text-base text-token-text-tertiary">
      {titleButton}
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
 * Bundle `lJo` — accordion / headerless / (soft) dropdown section.
 * Expand state is local until `$E` store peers land.
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
  const [isExpanded, setIsExpanded] = useState(!defaultCollapsed);

  // Soft autoCollapse: honor boolean collapse only; timed store collapse stays open.
  useEffect(() => {
    if (autoCollapse === true) {
      setIsExpanded(false);
    }
  }, [autoCollapse]);

  useImperativeHandle(ref, () => ({
    collapse: () => setIsExpanded(false),
    expand: () => setIsExpanded(true),
  }));

  const showContent =
    mode === "headerless" || isExpanded || mode === "dropdown";
  const afterNode = isRenderProp(after)
    ? after({ isExpanded })
    : after;

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
    >
      {mode === "headerless" ? null : (
        <PopoverMenuSectionHeader
          after={afterNode}
          isExpanded={isExpanded}
          mode={mode}
          onChange={onChange}
          onToggle={() => {
            if (mode !== "dropdown") setIsExpanded(!isExpanded);
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
