// Restored from ref/webview/assets/use-floating-window-pointer-drag-D8cbvRUA.js
// Geometry + pointer-drag helpers for floating windows.
// Stage 3: Ivt/Lvt → react; ESM inits dropped; size constants inlined.

import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

export type FloatingWindowRect = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export type FloatingWindowViewport = {
  height: number;
  width: number;
  topInset?: number;
};

export type FloatingWindowClampOptions = {
  minWidth?: number;
  minHeight?: number;
};

const EDGE_MARGIN_X = 96;
const EDGE_MARGIN_Y = 40;
const MIN_WIDTH = 480;
const MIN_HEIGHT = 320;

/**
 * Bundle export `i` — centered default rect for a floating window.
 */
export function getDefaultFloatingWindowRect({
  height,
  topInset = 0,
  width,
}: FloatingWindowViewport): FloatingWindowRect {
  const nextWidth = Math.min(920, width - 32);
  const availableHeight = height - topInset;
  const nextHeight = Math.min(840, availableHeight - 32);
  return {
    height: Math.max(MIN_HEIGHT, nextHeight),
    width: Math.max(MIN_WIDTH, nextWidth),
    x: Math.round((width - nextWidth) / 2),
    y: topInset + Math.round((availableHeight - nextHeight) / 2),
  };
}

/**
 * Bundle export `r` — clamp a rect inside the viewport.
 */
export function clampFloatingWindowRect(
  rect: FloatingWindowRect,
  viewport: FloatingWindowViewport,
  options: FloatingWindowClampOptions = {},
): FloatingWindowRect {
  const topInset = viewport.topInset ?? 0;
  const availableHeight = viewport.height - topInset;
  const minWidth = options.minWidth ?? MIN_WIDTH;
  const minHeight = options.minHeight ?? MIN_HEIGHT;
  const width = Math.max(minWidth, Math.min(rect.width, viewport.width));
  return {
    height: Math.max(minHeight, Math.min(rect.height, availableHeight)),
    width,
    x: Math.min(
      viewport.width - EDGE_MARGIN_X,
      Math.max(EDGE_MARGIN_X - width, rect.x),
    ),
    y: Math.min(viewport.height - EDGE_MARGIN_Y, Math.max(topInset, rect.y)),
  };
}

/**
 * Bundle export `a` — clamp after applying a delta.
 */
export function clampFloatingWindowRectWithDelta(
  rect: FloatingWindowRect,
  delta: { x: number; y: number },
  viewport: FloatingWindowViewport,
  options: FloatingWindowClampOptions = {},
): FloatingWindowRect {
  return clampFloatingWindowRect(
    {
      ...rect,
      height: rect.height + delta.y,
      width: rect.width + delta.x,
    },
    viewport,
    options,
  );
}

export type FloatingWindowPointerDragHandler = (
  event: ReactPointerEvent | PointerEvent,
  onDelta: (delta: { x: number; y: number }) => void,
) => void;

/**
 * Bundle export `n` — pointer-drag listener factory (move → delta callbacks).
 */
export function useFloatingWindowPointerDrag(): FloatingWindowPointerDragHandler {
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (event, onDelta) => {
    event.preventDefault();
    (event.currentTarget as Element | null)?.setPointerCapture?.(
      (event as PointerEvent).pointerId,
    );
    cleanupRef.current?.();

    let lastX = event.clientX;
    let lastY = event.clientY;

    const onMove = (moveEvent: PointerEvent) => {
      onDelta({
        x: moveEvent.clientX - lastX,
        y: moveEvent.clientY - lastY,
      });
      lastX = moveEvent.clientX;
      lastY = moveEvent.clientY;
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      if (cleanupRef.current === onUp) cleanupRef.current = null;
    };

    cleanupRef.current = onUp;
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };
}

/** Bundle export `o` — size-constant ESM init retained as no-op. */
export function ensureFloatingWindowPointerDragConstantsInit(): void {}

/** Bundle export `t` — React ESM init retained as no-op. */
export function ensureUseFloatingWindowPointerDragInit(): void {}

// --- qg-full-green: IMPORT_MAP export stubs ---
export const getCenteredFloatingWindowRect: any = undefined;
export const initFloatingWindowPointerDragConstants: any = undefined;
export const resizeFloatingWindowRect: any = undefined;
