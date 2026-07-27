// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `bk`) / export `F1`.

import type { ReactElement, ReactNode } from "react";

export type SortableContextPeers = {
  useDndContext: () => {
    active: { id: unknown } | null;
    dragOverlay: { rect: unknown };
    droppableRects: unknown;
    over: { id: unknown } | null;
    measureDroppableContainers: (ids: unknown[]) => void;
  };
  resolveContainerId: (namespace: unknown, id: unknown) => unknown;
  defaultStrategy: unknown;
  namespace: unknown;
  itemsEqual: (a: unknown[], b: unknown[]) => boolean;
  normalizeDisabled: (disabled: unknown) => {
    draggable: boolean;
    droppable: boolean;
  };
  useIsomorphicLayoutEffect: (effect: () => void, deps: unknown[]) => void;
  sortedRects: (items: unknown[], rects: unknown) => unknown;
  Provider: unknown;
  createElement: (
    type: unknown,
    props: { value: unknown },
    children: ReactNode,
  ) => ReactElement;
  useMemo: <T>(factory: () => T, deps: unknown[]) => T;
  useRef: <T>(value: T) => { current: T };
  useEffect: (effect: () => void, deps: unknown[]) => void;
};

let peers: SortableContextPeers | null = null;

/** Wire SortableContext peers once companions land. */
export function setSortableContextPeers(next: SortableContextPeers): void {
  peers = next;
}

/**
 * Bundle export `F1` / internal `bk`.
 * Provide sortable DnD context derived from active/over items.
 */
export type SortableContextProps = {
  children?: ReactNode;
  id?: unknown;
  items: Array<unknown | { id: unknown }>;
  strategy?: unknown;
  disabled?: unknown;
};

export function SortableContext(props: SortableContextProps): ReactElement {
  if (peers == null) {
    throw new Error("SortableContext peers are not configured");
  }
  const {
    children,
    id,
    items,
    strategy = peers.defaultStrategy,
    disabled = false,
  } = props;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers,
  } = peers.useDndContext();
  const containerId = peers.resolveContainerId(peers.namespace, id);
  const useDragOverlay = dragOverlay.rect !== null;
  const itemIds = peers.useMemo(
    () =>
      items.map((item) =>
        typeof item === "object" && item != null && "id" in item
          ? (item as { id: unknown }).id
          : item,
      ),
    [items],
  );
  const isDragging = active != null;
  const activeIndex = active ? itemIds.indexOf(active.id) : -1;
  const overIndex = over ? itemIds.indexOf(over.id) : -1;
  const previousItems = peers.useRef(itemIds);
  const itemsChanged = !peers.itemsEqual(itemIds, previousItems.current);
  const disableTransforms =
    (overIndex !== -1 && activeIndex === -1) || itemsChanged;
  const normalizedDisabled = peers.normalizeDisabled(disabled);
  peers.useIsomorphicLayoutEffect(() => {
    if (itemsChanged && isDragging) measureDroppableContainers(itemIds);
  }, [itemsChanged, itemIds, isDragging, measureDroppableContainers]);
  peers.useEffect(() => {
    previousItems.current = itemIds;
  }, [itemIds]);
  const value = peers.useMemo(
    () => ({
      activeIndex,
      containerId,
      disabled: normalizedDisabled,
      disableTransforms,
      items: itemIds,
      overIndex,
      useDragOverlay,
      sortedRects: peers!.sortedRects(itemIds, droppableRects),
      strategy,
    }),
    [
      activeIndex,
      containerId,
      normalizedDisabled.draggable,
      normalizedDisabled.droppable,
      disableTransforms,
      itemIds,
      overIndex,
      droppableRects,
      useDragOverlay,
      strategy,
    ],
  );
  return peers.createElement(peers.Provider, { value }, children);
}
