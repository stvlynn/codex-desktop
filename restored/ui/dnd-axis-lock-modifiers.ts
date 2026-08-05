// Restored from ref/webview/assets/modifiers.esm-D44vPoX2.js
// dnd-kit style transform modifiers: lock X, lock Y, clamp to scroll parent.
// Stage 3: Drt dropped (react layout-effect bootstrap unused by these pure fns).

export type DndTransform = { x: number; y: number; [key: string]: unknown };

export type DndRect = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  height: number;
  width: number;
};

export type DndModifierArgs = {
  transform: DndTransform;
  draggingNodeRect?: DndRect | null;
  scrollableAncestorRects?: DndRect[];
};

function clampTransformToRect(
  transform: DndTransform,
  nodeRect: DndRect,
  boundary: DndRect,
): DndTransform {
  const next = { ...transform };
  if (nodeRect.top + transform.y <= boundary.top) {
    next.y = boundary.top - nodeRect.top;
  } else if (nodeRect.bottom + transform.y >= boundary.top + boundary.height) {
    next.y = boundary.top + boundary.height - nodeRect.bottom;
  }
  if (nodeRect.left + transform.x <= boundary.left) {
    next.x = boundary.left - nodeRect.left;
  } else if (nodeRect.right + transform.x >= boundary.left + boundary.width) {
    next.x = boundary.left + boundary.width - nodeRect.right;
  }
  return next;
}

/** Bundle export `r` — zero the Y component of a drag transform. */
export function restrictToHorizontalAxis(args: DndModifierArgs): DndTransform {
  const { transform } = args;
  return { ...transform, y: 0 };
}

/** Bundle export `i` — zero the X component of a drag transform. */
export function restrictToVerticalAxis(args: DndModifierArgs): DndTransform {
  const { transform } = args;
  return { ...transform, x: 0 };
}

/**
 * Bundle export `n` — clamp the dragging node inside the first scroll ancestor.
 */
export function restrictToFirstScrollableAncestor(
  args: DndModifierArgs,
): DndTransform {
  const { draggingNodeRect, transform, scrollableAncestorRects } = args;
  const boundary = scrollableAncestorRects?.[0];
  if (!draggingNodeRect || !boundary) return transform;
  return clampTransformToRect(transform, draggingNodeRect, boundary);
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureDndAxisLockModifiersInit(): void {}
