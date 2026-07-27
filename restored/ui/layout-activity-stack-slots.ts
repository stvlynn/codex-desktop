// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Ige`) / export `cgt`.

export type LayoutActivityStackSlotsPeers = {
  measureItem: (
    item: unknown,
    index: number,
  ) => { height: number; key: unknown };
  clamp: (value: number, min: number, max: number) => number;
};

let peers: LayoutActivityStackSlotsPeers | null = null;

/** Wire layoutActivityStackSlots peers once companions land. */
export function setLayoutActivityStackSlotsPeers(
  next: LayoutActivityStackSlotsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cgt` / internal `Ige`.
 * Compute visible activity-stack slot layout from scroll/viewport.
 */
export type LayoutActivityStackSlotsArgs = {
  expanded: boolean;
  items: unknown[];
  scrollOffset: number;
  viewportRect: { height: number; top?: number };
};

export type LayoutActivityStackSlot = {
  key: unknown;
  index: number;
  offset: number;
  height: number;
  visible: boolean;
};

export function layoutActivityStackSlots(
  args: LayoutActivityStackSlotsArgs,
): LayoutActivityStackSlot[] {
  if (peers == null) {
    throw new Error("LayoutActivityStackSlots peers are not configured");
  }
  const { expanded, items, scrollOffset, viewportRect } = args;
  const slots: LayoutActivityStackSlot[] = [];
  let offset = 0;
  for (let index = 0; index < items.length; index++) {
    const measured = peers.measureItem(items[index], index);
    const height = expanded ? measured.height : Math.min(measured.height, 48);
    const top = offset - scrollOffset;
    const visible = top + height > 0 && top < viewportRect.height;
    slots.push({
      key: measured.key,
      index,
      offset,
      height,
      visible,
    });
    offset += height;
  }
  void peers.clamp;
  return slots;
}
