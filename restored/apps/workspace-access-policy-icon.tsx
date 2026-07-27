// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `dIc`) / export `af`.

import type { ReactElement, ReactNode } from "react";

export type WorkspaceAccessPolicyIconProps = {
  accessPolicy: unknown;
  [key: string]: unknown;
};

export type WorkspaceAccessPolicyIconParts = {
  normalizePolicy: (policy: unknown) => {
    accessMode: string;
  };
  isCustomRestricted: (policy: { accessMode: string }) => boolean;
  AdminsOnlyIcon: (props: Record<string, unknown>) => ReactNode;
  CustomRestrictedIcon: (props: Record<string, unknown>) => ReactNode;
  WorkspaceAllIcon: (props: Record<string, unknown>) => ReactNode;
  PublicIcon: (props: Record<string, unknown>) => ReactNode;
};

let parts: WorkspaceAccessPolicyIconParts | null = null;

/** Wire access-policy icon variants once companions land. */
export function setWorkspaceAccessPolicyIconParts(
  next: WorkspaceAccessPolicyIconParts,
): void {
  parts = next;
}

/**
 * Bundle export `af` / internal `dIc`.
 * Icon for workspace access policy modes.
 */
export function WorkspaceAccessPolicyIcon(
  props: WorkspaceAccessPolicyIconProps,
): ReactElement | null {
  if (parts == null) {
    throw new Error("WorkspaceAccessPolicyIcon parts are not configured");
  }
  const { accessPolicy, ...rest } = props;
  const normalized = parts.normalizePolicy(accessPolicy);
  switch (normalized.accessMode) {
    case "admins_only":
    case "custom":
      return (
        <>
          {parts.isCustomRestricted(normalized)
            ? parts.CustomRestrictedIcon(rest)
            : parts.AdminsOnlyIcon(rest)}
        </>
      ) as ReactElement;
    case "workspace_all":
      return (<>{parts.WorkspaceAllIcon(rest)}</>) as ReactElement;
    case "public":
      return (<>{parts.PublicIcon(rest)}</>) as ReactElement;
    default:
      return null;
  }
}
