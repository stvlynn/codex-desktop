// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jIo` / `vIc` companions for exports `nf` / `rf`.

export type AppgenAccessLike = {
  accessMode?: string | null;
  groupCount?: number | null;
  userCount?: number | null;
};

/** Owner-only when admins/custom mode has zero people and groups. */
export function isAppgenOwnerOnlyAccess(access: AppgenAccessLike): boolean {
  const mode = access.accessMode;
  return (
    (mode === "admins_only" || mode === "custom") &&
    (access.groupCount ?? 0) === 0 &&
    (access.userCount ?? 0) === 0
  );
}

export type AppgenAccessStateKey =
  | "owner_only"
  | "people"
  | "groups"
  | "people_and_groups"
  | "public"
  | "workspace_all"
  | "admins_only"
  | "custom";

/** Normalize access mode + counts into a message table key. */
export function appgenAccessStateKey(access: AppgenAccessLike): AppgenAccessStateKey | undefined {
  if (isAppgenOwnerOnlyAccess(access)) return "owner_only";
  const mode = access.accessMode;
  const groups = access.groupCount ?? 0;
  const users = access.userCount ?? 0;
  switch (mode) {
    case "admins_only":
    case "custom":
      return users > 0 && groups > 0
        ? "people_and_groups"
        : users > 0
          ? "people"
          : groups > 0
            ? "groups"
            : "people";
    case "public":
    case "workspace_all":
      return mode;
  }
}
