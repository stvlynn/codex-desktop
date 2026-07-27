// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dda` / export `gL` — portal popover anchored to a text selection.

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cx } from "./cx";

export type AnchoredPortalAnchor = {
  rect: DOMRectReadOnly;
  horizontalBounds: { left: number; right: number };
  portalTarget: Element | null;
};

export type AnchoredPortalPopoverProps = {
  bottomBoundarySelector?: string;
  children: (anchor: AnchoredPortalAnchor) => ReactNode;
  className?: string;
  onOpen?: (anchor: AnchoredPortalAnchor) => void;
  portalTargetSelector?: string;
  targetContainer?: ParentNode | null;
  targetSelector?: string;
};

const SELECTED_TEXT_OVERLAY_TARGET_ATTR = "data-selected-text-overlay-target";
export const DEFAULT_ANCHORED_PORTAL_TARGET_SELECTOR = `[${SELECTED_TEXT_OVERLAY_TARGET_ATTR}]`;

const EDGE_PADDING_PX = 8;
const SELECTION_SETTLE_MS = 16;

export type AnchoredPortalPopoverDeps = {
  /** Bundle `Lm` — current window zoom factor. */
  useWindowZoom: () => number;
  /** Bundle `pda` — measure selection / target rects. */
  measureAnchor: (options: {
    bottomBoundarySelector?: string;
    portalTarget?: Element;
    targetContainer?: ParentNode | null;
    targetSelector: string;
    windowZoom: number;
  }) => AnchoredPortalAnchor | null;
  /** Bundle `mda` — shallow equality for anchor snapshots. */
  anchorsEqual: (
    previous: AnchoredPortalAnchor | null,
    next: AnchoredPortalAnchor | null,
  ) => boolean;
};

let deps: AnchoredPortalPopoverDeps | null = null;

export function setAnchoredPortalPopoverDeps(next: AnchoredPortalPopoverDeps): void {
  deps = next;
}

function requireDeps(): AnchoredPortalPopoverDeps {
  if (deps == null) {
    throw new Error("AnchoredPortalPopover deps have not been configured");
  }
  return deps;
}

/** Bundle `Dda` / export `gL`. */
export function AnchoredPortalPopover({
  bottomBoundarySelector,
  children,
  className,
  onOpen,
  portalTargetSelector,
  targetContainer,
  targetSelector = DEFAULT_ANCHORED_PORTAL_TARGET_SELECTOR,
}: AnchoredPortalPopoverProps): ReactNode {
  const { useWindowZoom, measureAnchor, anchorsEqual } = requireDeps();
  const windowZoom = useWindowZoom();
  const rafRef = useRef<number | null>(null);
  const pointerDownRef = useRef(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const lastAnchorRef = useRef<AnchoredPortalAnchor | null>(null);
  const [anchor, setAnchor] = useState<AnchoredPortalAnchor | null>(null);

  const notifyOpen = useEffectEvent((next: AnchoredPortalAnchor) => {
    onOpen?.(next);
  });

  useEffect(() => {
    const portalTarget =
      portalTargetSelector == null
        ? undefined
        : (targetContainer?.querySelector(portalTargetSelector) ?? undefined);

    let settleTimer: number | null = null;

    const cancelRaf = () => {
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const refresh = () => {
      const next = measureAnchor({
        bottomBoundarySelector,
        portalTarget,
        targetContainer,
        targetSelector,
        windowZoom,
      });
      if (!anchorsEqual(lastAnchorRef.current, next)) {
        if (lastAnchorRef.current == null && next != null) {
          notifyOpen(next);
        }
        lastAnchorRef.current = next;
        setAnchor(next);
      }
    };

    const scheduleRefresh = () => {
      cancelRaf();
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        refresh();
      });
    };

    const refreshIfSelection = () => {
      const selection = window.getSelection();
      if (
        pointerDownRef.current ||
        selection == null ||
        selection.rangeCount === 0 ||
        selection.isCollapsed
      ) {
        return;
      }
      scheduleRefresh();
    };

    const settleSelection = () => {
      if (settleTimer != null) window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        settleTimer = null;
        refreshIfSelection();
      }, SELECTION_SETTLE_MS);
    };

    const onScroll = (event: Event) => {
      const selection = window.getSelection();
      if (
        pointerDownRef.current ||
        selection == null ||
        selection.rangeCount === 0 ||
        selection.isCollapsed
      ) {
        return;
      }
      if (
        portalTarget != null &&
        portalTarget.contains(selection.getRangeAt(0).commonAncestorContainer)
      ) {
        const target = event.target;
        if (!(target instanceof Node && portalTarget.contains(target))) {
          settleSelection();
          return;
        }
        if (!selection.getRangeAt(0).intersectsNode(target)) return;
      }
      scheduleRefresh();
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && popoverRef.current?.contains(target)) {
        return;
      }
      pointerDownRef.current = true;
      cancelRaf();
      lastAnchorRef.current = null;
      setAnchor(null);
    };

    const onPointerUp = () => {
      pointerDownRef.current = false;
      scheduleRefresh();
    };

    const onSelectionChange = () => {
      if (pointerDownRef.current) {
        cancelRaf();
        lastAnchorRef.current = null;
        setAnchor(null);
        return;
      }
      scheduleRefresh();
    };

    scheduleRefresh();
    document.addEventListener("selectionchange", onSelectionChange);
    window.addEventListener("keyup", scheduleRefresh);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", refreshIfSelection);
    window.addEventListener("scroll", onScroll, true);

    return () => {
      if (settleTimer != null) window.clearTimeout(settleTimer);
      cancelRaf();
      document.removeEventListener("selectionchange", onSelectionChange);
      window.removeEventListener("keyup", scheduleRefresh);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", refreshIfSelection);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [
    anchorsEqual,
    bottomBoundarySelector,
    measureAnchor,
    notifyOpen,
    portalTargetSelector,
    targetContainer,
    targetSelector,
    windowZoom,
  ]);

  if (anchor == null) return null;

  const centerX = anchor.rect.left + anchor.rect.width / 2;
  const minTranslateX =
    anchor.horizontalBounds.left + EDGE_PADDING_PX - centerX;
  const maxTranslateX =
    anchor.horizontalBounds.right - EDGE_PADDING_PX - centerX;
  const positionClass =
    anchor.portalTarget == null ? "fixed z-50" : "absolute z-[1]";
  const style: CSSProperties = {
    left: centerX,
    maxWidth:
      anchor.horizontalBounds.right -
      anchor.horizontalBounds.left -
      EDGE_PADDING_PX * 2,
    top: anchor.rect.top - 8,
    transform: `translateX(clamp(${minTranslateX}px, -50%, calc(${maxTranslateX}px - 100%))) translateY(-100%)`,
  };

  const content =
    anchor.portalTarget == null && windowZoom !== 1 ? (
      <div style={{ zoom: windowZoom }}>{children(anchor)}</div>
    ) : (
      children(anchor)
    );

  const node = (
    <div
      ref={popoverRef}
      className={cx("pointer-events-none", positionClass, className)}
      style={style}
    >
      {content}
    </div>
  );

  return createPortal(node, anchor.portalTarget ?? document.body);
}
