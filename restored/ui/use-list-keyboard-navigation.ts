// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Listbox keyboard navigation hook (bundle `SVa` / export `RM`).

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type RefObject,
} from "react";

import { preventDefaultAndStopPropagation } from "../dom/prevent-default-and-stop-propagation";

function wrapIndex(index: number, length: number): number {
  if (length <= 0) return -1;
  const next = index % length;
  return next < 0 ? next + length : next;
}

export type UseListKeyboardNavigationArgs<T> = {
  items: T[] | null | undefined;
  isActive: boolean;
  onSelect: (item: T, index: number) => void;
  onEscape?: () => void;
  onHighlight?: (item: T | null, index: number) => void;
  getItemKey?: (item: T) => unknown;
  autoHighlightFirst?: boolean;
  captureWindowKeydown?: boolean;
  keyboardEventScope?: ParentNode | null;
  keyboardEventTarget?: EventTarget | null;
  preserveHighlightOnItemsChange?: boolean;
  shouldHandleKeyDown?: (event: KeyboardEvent) => boolean;
  /** When true, treat Ctrl+N / Ctrl+P like ArrowDown / ArrowUp (emacs-style). */
  enableCtrlNp?: boolean;
};

export type ListKeyboardNavigationApi = {
  highlightedIndex: number;
  setHighlightedIndex: (index: number | ((prev: number) => number)) => void;
  listRef: RefObject<HTMLElement | null>;
  handleKeyDown: (event: KeyboardEvent) => boolean;
  getInputProps: (extra?: {
    onKeyDown?: (event: ReactKeyboardEvent<HTMLInputElement>) => void;
  }) => {
    onKeyDown: (event: ReactKeyboardEvent<HTMLInputElement>) => void;
  };
  getItemProps: (
    index: number,
    extra?: {
      onClick?: (event: ReactMouseEvent<HTMLElement>) => void;
      onMouseMove?: (event: ReactMouseEvent<HTMLElement>) => void;
    },
  ) => {
    onClick: (event: ReactMouseEvent<HTMLElement>) => void;
    onMouseMove: (event: ReactMouseEvent<HTMLElement>) => void;
    "data-list-navigation-item": "true";
  };
};

/** Keyboard + pointer list navigation for combobox / listbox UIs. */
export function useListKeyboardNavigation<T>(
  args: UseListKeyboardNavigationArgs<T>,
): ListKeyboardNavigationApi {
  const {
    items,
    isActive,
    onSelect,
    onEscape,
    onHighlight,
    getItemKey,
    autoHighlightFirst = true,
    captureWindowKeydown = false,
    keyboardEventScope,
    keyboardEventTarget,
    preserveHighlightOnItemsChange = false,
    shouldHandleKeyDown,
    enableCtrlNp = false,
  } = args;

  const listRef = useRef<HTMLElement | null>(null);
  const prevItemsRef = useRef<T[] | null | undefined>(null);
  const itemCount = items == null ? 0 : items.length;
  const [highlightedIndex, setHighlightedIndex] = useState(
    autoHighlightFirst && itemCount > 0 ? 0 : -1,
  );

  const highlightedItem =
    isActive && highlightedIndex >= 0 && highlightedIndex < itemCount
      ? (items?.[highlightedIndex] ?? null)
      : null;
  const highlightedKey =
    highlightedItem == null
      ? null
      : (getItemKey?.(highlightedItem) ?? highlightedItem);

  const emitHighlight = useEffectEvent((index: number) => {
    onHighlight?.(items?.[index] ?? null, index);
  });

  useEffect(() => {
    const previous = prevItemsRef.current;
    const itemsChanged =
      previous != null &&
      (items == null ||
        previous.length !== itemCount ||
        previous.some((item, index) => item !== items[index]));
    prevItemsRef.current = items;

    if (!isActive || itemCount === 0) {
      if (highlightedIndex !== -1) setHighlightedIndex(-1);
      return;
    }
    if (
      highlightedIndex >= 0 &&
      highlightedIndex < itemCount &&
      (preserveHighlightOnItemsChange || !itemsChanged)
    ) {
      return;
    }
    const next = autoHighlightFirst ? 0 : -1;
    if (highlightedIndex !== next) setHighlightedIndex(next);
  }, [
    autoHighlightFirst,
    highlightedIndex,
    isActive,
    items,
    itemCount,
    preserveHighlightOnItemsChange,
  ]);

  useEffect(() => {
    if (highlightedKey == null) {
      emitHighlight(-1);
      return;
    }
    emitHighlight(highlightedIndex);
  }, [emitHighlight, highlightedIndex, highlightedKey]);

  useEffect(() => {
    if (!isActive || highlightedIndex < 0 || highlightedIndex >= itemCount) {
      return;
    }
    listRef.current
      ?.querySelectorAll('[data-list-navigation-item="true"]')
      .item(highlightedIndex)
      ?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex, isActive, itemCount]);

  const selectAt = useEffectEvent((index: number) => {
    const item =
      items != null && index >= 0 && index < itemCount
        ? items[index]
        : undefined;
    if (item != null) {
      setHighlightedIndex(index);
      onSelect(item, index);
    }
  });

  const moveHighlight = (delta: number) => {
    setHighlightedIndex((current) => {
      if (itemCount === 0) return -1;
      if (current < 0) return delta >= 0 ? 0 : itemCount - 1;
      return wrapIndex(current + delta, itemCount);
    });
  };

  const handleKeyDown = (event: KeyboardEvent): boolean => {
    if (!isActive || shouldHandleKeyDown?.(event) === false) return false;
    const { key } = event;
    if (itemCount === 0) {
      if (key === "Escape" && onEscape) {
        onEscape();
        preventDefaultAndStopPropagation(event);
        return true;
      }
      return false;
    }
    if (key === "ArrowDown" || (enableCtrlNp && event.ctrlKey && key === "n")) {
      moveHighlight(1);
      preventDefaultAndStopPropagation(event);
      return true;
    }
    if (key === "ArrowUp" || (enableCtrlNp && event.ctrlKey && key === "p")) {
      moveHighlight(-1);
      preventDefaultAndStopPropagation(event);
      return true;
    }
    if (key === "Enter") {
      const index =
        highlightedIndex >= 0 ? highlightedIndex : autoHighlightFirst ? 0 : -1;
      if (index >= 0 && index < itemCount) {
        selectAt(index);
        preventDefaultAndStopPropagation(event);
        return true;
      }
      return false;
    }
    if (key === "Escape" && onEscape) {
      onEscape();
      preventDefaultAndStopPropagation(event);
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!captureWindowKeydown || !isActive) return;
    const onWindowKeyDown = (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (
        keyboardEventScope != null &&
        (!(keyboardEvent.target instanceof Node) ||
          !keyboardEventScope.contains(keyboardEvent.target))
      ) {
        return;
      }
      handleKeyDown(keyboardEvent);
    };
    const target = keyboardEventTarget ?? window;
    target.addEventListener("keydown", onWindowKeyDown, true);
    return () => {
      target.removeEventListener("keydown", onWindowKeyDown, true);
    };
  }, [
    captureWindowKeydown,
    handleKeyDown,
    isActive,
    keyboardEventScope,
    keyboardEventTarget,
  ]);

  const getInputProps = (extra?: {
    onKeyDown?: (event: ReactKeyboardEvent<HTMLInputElement>) => void;
  }) => ({
    onKeyDown: (event: ReactKeyboardEvent<HTMLInputElement>) => {
      if (!handleKeyDown(event.nativeEvent)) {
        extra?.onKeyDown?.(event);
      }
    },
  });

  const getItemProps = (
    index: number,
    extra?: {
      onClick?: (event: ReactMouseEvent<HTMLElement>) => void;
      onMouseMove?: (event: ReactMouseEvent<HTMLElement>) => void;
    },
  ) => ({
    onClick: (event: ReactMouseEvent<HTMLElement>) => {
      selectAt(index);
      extra?.onClick?.(event);
    },
    onMouseMove: (event: ReactMouseEvent<HTMLElement>) => {
      if (isActive && index >= 0 && index < itemCount) {
        setHighlightedIndex(index);
      }
      extra?.onMouseMove?.(event);
    },
    "data-list-navigation-item": "true" as const,
  });

  return {
    highlightedIndex,
    setHighlightedIndex,
    listRef,
    handleKeyDown,
    getInputProps,
    getItemProps,
  };
}

/** Lazy-init companion for list keyboard navigation (bundle export `LM`). */
export function ensureListKeyboardNavigationInit(): void {}
