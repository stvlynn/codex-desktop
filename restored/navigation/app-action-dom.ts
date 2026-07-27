// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DOM helpers for sidebar / review / timeline app-actions
// (bundle `BXe`/`VXe`/`HXe`/`UXe`/`WXe`/`GXe`/`KXe`/`qXe`).

import { AppActionSelector } from "./app-action-selectors";

export type AppActionScrollBy =
  | { type: "pixels"; y: number }
  | { type: "pages"; count: number }
  | { type: "edge"; edge: "top" | "bottom" };

export type AppActionScrollTo =
  | AppActionScrollBy
  | { type: "edge"; edge: "top" | "bottom" };

export type SidebarSectionRef = { ordinal: number } | { heading: string };

export type SidebarProjectRef =
  | { ordinal: number }
  | { projectId: string }
  | { label: string };

/** Bundle `Ll` + `xXe` — normalize review paths for comparison. */
export function normalizeReviewPath(raw: string): string {
  let pathValue = raw;
  const unc = pathValue.match(/^\\\\\?\\UNC\\(.*)$/i);
  if (unc != null) {
    pathValue = `\\\\${unc[1]}`;
  } else {
    const drive = pathValue.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/);
    if (drive != null) pathValue = drive[1];
  }
  return pathValue.replace(/\\/g, "/");
}

/** Bundle `IXe` / export `Fdt` — distance from bottom under flex-col-reverse. */
export function readScrollTop(element: HTMLElement): number {
  return Math.max(0, -element.scrollTop);
}

/** Bundle `LXe` / export `Ldt` — set distance from bottom under flex-col-reverse. */
export function writeScrollTop(element: HTMLElement, top: number): void {
  const next = Math.max(0, top);
  element.scrollTop = next === 0 ? 0 : -next;
}

/**
 * Bundle `BXe` / export `vdt` — `querySelector` or throw.
 */
export function requireAppActionTarget(selector: string): Element {
  const el = document.querySelector(selector);
  if (el == null) {
    throw new Error(`Missing app action target: ${selector}`);
  }
  return el;
}

/**
 * Bundle `VXe` / export `wdt` — apply a relative / edge scroll command.
 */
export function scrollAppActionTarget(
  element: HTMLElement,
  command: AppActionScrollBy,
  options: { isReversed?: boolean } = {},
): void {
  switch (command.type) {
    case "pixels":
      element.scrollBy({ top: command.y, behavior: "auto" });
      return;
    case "pages":
      element.scrollBy({
        top: element.clientHeight * command.count,
        behavior: "auto",
      });
      return;
    case "edge":
      if (options.isReversed) {
        writeScrollTop(
          element,
          command.edge === "bottom" ? 0 : element.scrollHeight,
        );
        return;
      }
      element.scrollTo({
        top: command.edge === "top" ? 0 : element.scrollHeight,
        behavior: "auto",
      });
      return;
  }
}

/**
 * Bundle `WXe` / export `Tdt` — scroll so a pixel/page offset lands at the
 * viewport edge, or jump to an edge.
 */
export function scrollAppActionTargetTo(element: HTMLElement, command: AppActionScrollTo): void {
  if (command.type === "edge") {
    scrollAppActionTarget(element, command, { isReversed: true });
    return;
  }
  const delta =
    command.type === "pixels"
      ? command.y
      : element.clientHeight * command.count;
  writeScrollTop(element, readScrollTop(element) - delta);
}

function findAdjacentTimelineTurn(
  container: HTMLElement,
  direction: "previous" | "next",
): Element | null {
  const viewport = container.getBoundingClientRect();
  const turns = Array.from(
    container.querySelectorAll(AppActionSelector.timelineTurn),
  );
  let best: Element | null = null;
  for (const turn of turns) {
    const box = turn.getBoundingClientRect();
    if (direction === "previous") {
      if (box.top >= viewport.top - 1) continue;
      if (best == null || box.top > best.getBoundingClientRect().top) {
        best = turn;
      }
      continue;
    }
    if (box.bottom <= viewport.bottom + 1) continue;
    if (best == null || box.bottom < best.getBoundingClientRect().bottom) {
      best = turn;
    }
  }
  return best;
}

/**
 * Bundle `GXe` / export `Edt` — scroll timeline to previous/next turn, or
 * fall back to an edge jump.
 */
export function scrollAppActionTargetByTurn(element: HTMLElement, direction: "previous" | "next"): void {
  const turn = findAdjacentTimelineTurn(element, direction);
  if (turn == null) {
    scrollAppActionTargetTo(element, {
      type: "edge",
      edge: direction === "previous" ? "top" : "bottom",
    });
    return;
  }
  const viewport = element.getBoundingClientRect();
  const box = turn.getBoundingClientRect();
  const aligned = readScrollTop(element) + (viewport.bottom - box.bottom);
  writeScrollTop(
    element,
    direction === "previous"
      ? Math.max(0, aligned - element.clientHeight + box.height)
      : Math.max(0, aligned),
  );
}

/**
 * Bundle `HXe` / export `Sdt` — resolve a sidebar section element.
 */
export function findSidebarSectionElement(ref: SidebarSectionRef): Element {
  const sections = Array.from(
    document.querySelectorAll(AppActionSelector.sidebarSection),
  );
  if ("ordinal" in ref) {
    const el = sections[ref.ordinal];
    if (el == null) {
      throw new Error(`Missing sidebar section at ordinal ${ref.ordinal}`);
    }
    return el;
  }
  const matches = sections.filter(
    (el) =>
      ((el as HTMLElement).dataset.appActionSidebarSectionHeading ?? "") ===
      ref.heading,
  );
  if (matches.length === 0) {
    throw new Error(`Missing sidebar section: ${ref.heading}`);
  }
  if (matches.length > 1) {
    throw new Error(`Ambiguous sidebar section: ${ref.heading}`);
  }
  return matches[0]!;
}

/**
 * Bundle `UXe` / export `bdt` — resolve a sidebar project row element.
 */
export function findSidebarProjectRowElement(ref: SidebarProjectRef): Element {
  const rows = Array.from(
    document.querySelectorAll(AppActionSelector.sidebarProjectRow),
  );
  if ("ordinal" in ref) {
    const el = rows[ref.ordinal];
    if (el == null) {
      throw new Error(`Missing sidebar project at ordinal ${ref.ordinal}`);
    }
    return el;
  }
  const matches = rows.filter((el) => {
    const dataset = (el as HTMLElement).dataset;
    return "projectId" in ref
      ? dataset.appActionSidebarProjectId === ref.projectId
      : dataset.appActionSidebarProjectLabel === ref.label;
  });
  if (matches.length === 0) {
    throw new Error(
      "projectId" in ref
        ? `Missing sidebar project: ${ref.projectId}`
        : `Missing sidebar project: ${ref.label}`,
    );
  }
  if (matches.length > 1) {
    throw new Error(
      "projectId" in ref
        ? `Ambiguous sidebar project: ${ref.projectId}`
        : `Ambiguous sidebar project: ${ref.label}`,
    );
  }
  return matches[0]!;
}

/**
 * Bundle `KXe` / export `ydt` — resolve a review file row by path.
 */
export function findReviewFileElement(reviewPath: string): Element {
  const normalized = normalizeReviewPath(reviewPath);
  const rows = Array.from(
    document.querySelectorAll(AppActionSelector.reviewFile),
  );
  const exact =
    rows.find(
      (el) =>
        normalizeReviewPath((el as HTMLElement).dataset.reviewPath ?? "") ===
        normalized,
    ) ?? null;
  if (exact != null) return exact;

  const partial = rows.filter((el) => {
    const pathValue = normalizeReviewPath(
      (el as HTMLElement).dataset.reviewPath ?? "",
    );
    return (
      pathValue.endsWith(`/${normalized}`) ||
      normalized.endsWith(`/${pathValue}`)
    );
  });
  if (partial.length === 1) return partial[0]!;

  const available = rows
    .map((el) => (el as HTMLElement).dataset.reviewPath)
    .filter((value): value is string => value != null);
  const listing = available.join("\n");
  if (partial.length > 1) {
    throw new Error(
      `Ambiguous review file row: ${reviewPath}\nAvailable review paths:\n${listing}`,
    );
  }
  throw new Error(
    `Missing review file row: ${reviewPath}\nAvailable review paths:\n${listing}`,
  );
}

/**
 * Bundle `qXe` / export `xdt` — CSS selector for a sidebar project list.
 */
export function sidebarProjectListSelector(projectListId: string): string {
  return AppActionSelector.sidebarProjectList(projectListId);
}
