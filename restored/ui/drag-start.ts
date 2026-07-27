// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ey`) / export `brt`.
// npm identity: @dnd-kit/core — see vendor/dnd-kit-core.ts.

import { ensureDndKitCoreRuntime } from "../vendor/dnd-kit-core";

export {
  AutoScrollActivator,
  DndContext,
  DragOverlay,
  KeyboardCode,
  KeyboardSensor,
  MeasuringFrequency,
  MeasuringStrategy,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  TraversalOrder,
  applyModifiers,
  closestCenter,
  closestCorners,
  defaultAnnouncements,
  defaultCoordinates,
  defaultDropAnimation,
  defaultDropAnimationSideEffects,
  defaultKeyboardCoordinateGetter,
  defaultScreenReaderInstructions,
  getClientRect,
  getFirstCollision,
  getScrollableAncestors,
  pointerWithin,
  rectIntersection,
  useDndContext,
  useDndMonitor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  ensureDndKitCoreRuntime,
} from "../vendor/dnd-kit-core";

export type DragStartPeers = Record<string, unknown>;

/** @deprecated No-op; @dnd-kit/core is side-effect free. */
export function setDragStartPeers(_next: DragStartPeers): void {}

/**
 * Bundle export `brt` / internal `ey` — dnd-kit core runtime init.
 * No-op under the npm package.
 */
export function dragStart(): void {
  ensureDndKitCoreRuntime();
}
