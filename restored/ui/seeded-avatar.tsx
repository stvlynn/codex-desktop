// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Deterministic seeded avatar (bundle `nGa` / export `xM`).
// Full dark/light image palette stays in app-initial; this Stage 3 surface uses
// a hash → color disc so consumers can promote without the asset table.

import type { ImgHTMLAttributes, ReactElement } from "react";

import { cx } from "./cx";

const AVATAR_COLORS = [
  "#7C3AED",
  "#2563EB",
  "#0891B2",
  "#059669",
  "#CA8A04",
  "#EA580C",
  "#DC2626",
  "#DB2777",
  "#4F46E5",
  "#0D9488",
] as const;

function hashSeed(seed: string): number {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % 2147483647;
  }
  return hash % AVATAR_COLORS.length;
}

export type SeededAvatarProps = {
  seed: string;
  className?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className">;

/**
 * Seed → palette avatar (bundle `nGa` / export `xM`; init `cGa` / `SM`).
 * Renders a colored disc with the first seed character when image assets are
 * not yet alias-out of app-initial.
 */
export function SeededAvatar({
  seed,
  className,
  style,
  ...rest
}: SeededAvatarProps): ReactElement {
  const color = AVATAR_COLORS[hashSeed(seed)] ?? AVATAR_COLORS[0];
  const initial = (seed.trim().charAt(0) || "?").toUpperCase();
  return (
    <span
      className={cx(
        "inline-flex size-3.5 shrink-0 items-center justify-center rounded-full text-[0.55rem] font-semibold text-white",
        className,
      )}
      style={{ backgroundColor: color, ...style }}
      aria-hidden={rest["aria-hidden"]}
      {...(rest as Record<string, unknown>)}
    >
      {/* Prefer a disc over <img> until palette URLs are extracted. */}
      {initial}
    </span>
  );
}

/** Rolldown ESM init for SeededAvatar (bundle `cGa` / export `SM`). */
export function ensureSeededAvatarInit(): void {}
