// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared Zod payloads for windows.* app actions (bundle `eZe` cluster:
// `YXe`/`XXe`/`ZXe`/`QXe`/`$Xe`; exports `_dt`/`Adt`/`kdt`/`Odt`/`Ddt`/`Cdt`).

import {
  ensureZodRuntime,
  zodDiscriminatedUnion,
  zodEnum,
  zodLiteral,
  zodNumber,
  zodObject,
  zodString,
  zodUnion,
} from "../vendor/zod";

ensureZodRuntime();

/** Bundle `zf` — literal window id accepted by app actions. */
export const APP_ACTION_WINDOW_ID_CURRENT = "current" as const;

/**
 * Bundle `YXe` / export `_dt` — `windowId: "current"`.
 */
export const appActionWindowIdSchema = zodLiteral(APP_ACTION_WINDOW_ID_CURRENT);

/**
 * Bundle `XXe` / export `Adt` — scroll intent for sidebar/review/timeline.
 */
export const appActionScrollSchema = zodDiscriminatedUnion("type", [
  zodObject({
    type: zodLiteral("pixels"),
    y: zodNumber(),
  }),
  zodObject({
    type: zodLiteral("pages"),
    count: zodNumber(),
  }),
  zodObject({
    type: zodLiteral("edge"),
    edge: zodEnum(["top", "bottom"]),
  }),
]);

/**
 * Bundle `ZXe` / export `kdt` — timeline turn navigation direction.
 */
export const appActionTimelineDirectionSchema = zodEnum(["previous", "next"]);

/**
 * Bundle `QXe` / export `Odt` — sidebar section by heading or ordinal.
 */
export const appActionSidebarSectionRefSchema = zodUnion([
  zodObject({ heading: zodString() }),
  zodObject({ ordinal: zodNumber().int().nonnegative() }),
]);

/**
 * Bundle `$Xe` / export `Ddt` — sidebar project by id, label, or ordinal.
 */
export const appActionSidebarProjectRefSchema = zodUnion([
  zodObject({ projectId: zodString() }),
  zodObject({ label: zodString() }),
  zodObject({ ordinal: zodNumber().int().nonnegative() }),
]);

export type AppActionScroll = ReturnType<typeof appActionScrollSchema.parse>;
export type AppActionTimelineDirection = ReturnType<
  typeof appActionTimelineDirectionSchema.parse
>;
export type AppActionSidebarSectionRef = ReturnType<
  typeof appActionSidebarSectionRefSchema.parse
>;
export type AppActionSidebarProjectRef = ReturnType<
  typeof appActionSidebarProjectRefSchema.parse
>;

/**
 * Bundle `eZe` / export `Cdt` — original ESM init that assigned the schemas
 * above after chaining zod runtime helpers. Schemas are module-level; no-op.
 */
export function ensureAppActionPayloadSchemasInit(): void {}
