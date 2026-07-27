// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Site share / access-policy helpers (exports `fO`/`gO`/`hO`/`mO`; init `_O`).

export type SiteAccessMode = string;

export type SiteAccessUser = {
  account_user_id?: string;
  email?: string | null;
  [key: string]: unknown;
};

export type SiteAccessGroup = {
  id: string;
  source?: "workspace" | "tenant" | string;
  [key: string]: unknown;
};

export type SiteAccessPolicy = {
  access_mode: SiteAccessMode;
  allowed_users?: SiteAccessUser[];
  allowed_groups?: SiteAccessGroup[];
  [key: string]: unknown;
};

export type AccessModeOption = {
  disabled: boolean;
  value: SiteAccessMode;
};

function compactEmails(emails: Array<string | null | undefined>): string[] {
  return emails.flatMap((email) =>
    email == null || email === "" ? [] : [email],
  );
}

function uniqueGroupIds(groups: SiteAccessGroup[]): string[] {
  return Array.from(new Set(groups.map((group) => group.id)));
}

function resolveGroupIds(args: {
  accessGroups: SiteAccessGroup[];
  knownAccessGroups: SiteAccessGroup[];
  existingGroups: SiteAccessGroup[];
  removedGroups: SiteAccessGroup[];
  selectedGroups: SiteAccessGroup[];
}): {
  allowed_workspace_group_ids?: string[];
  allowed_tenant_group_ids?: string[];
} {
  const byId = new Map(
    [...args.knownAccessGroups, ...args.accessGroups].map((group) => [
      group.id,
      group,
    ]),
  );
  const existing = args.existingGroups.flatMap((group) => {
    const resolved = byId.get(group.id);
    return resolved == null ? [] : [resolved];
  });
  const removed = args.removedGroups.flatMap((group) => {
    const resolved = byId.get(group.id);
    return resolved == null ? [] : [resolved];
  });
  const selectedOrExisting = [...existing, ...args.selectedGroups];
  const changed = [...args.selectedGroups, ...removed];
  const touchesWorkspace = changed.some(
    (group) => group.source === "workspace",
  );
  const touchesTenant = changed.some((group) => group.source === "tenant");
  return {
    ...(touchesWorkspace
      ? {
          allowed_workspace_group_ids: uniqueGroupIds(
            selectedOrExisting.filter((group) => group.source === "workspace"),
          ),
        }
      : {}),
    ...(touchesTenant
      ? {
          allowed_tenant_group_ids: uniqueGroupIds(
            selectedOrExisting.filter((group) => group.source === "tenant"),
          ),
        }
      : {}),
  };
}

/**
 * Bundle export `fO` / `OIo` — access-mode radio options, keeping an unknown
 * current mode visible but disabled.
 */
export function buildAccessModeOptions(args: {
  availableAccessModes?: SiteAccessMode[] | null;
  currentAccessMode: SiteAccessMode;
  isWorkspaceAccount: boolean;
}): AccessModeOption[] {
  const modes =
    args.availableAccessModes ??
    (args.isWorkspaceAccount ? ["workspace_all", "custom"] : []);
  const options = modes.map((value) => ({ disabled: false, value }));
  return modes.some((mode) => mode === args.currentAccessMode)
    ? options
    : [...options, { disabled: true, value: args.currentAccessMode }];
}

/**
 * Bundle export `gO` / `NIo` — drop one account user from an access policy
 * while preserving mode + remaining emails.
 */
export function accessPolicyEmailsWithoutUser(policy: SiteAccessPolicy, accountUserId: string): {
  access_mode: SiteAccessMode;
  allowed_user_emails: string[];
} {
  return {
    access_mode: policy.access_mode,
    allowed_user_emails: compactEmails(
      (policy.allowed_users ?? [])
        .filter((user) => user.account_user_id !== accountUserId)
        .map((user) => user.email),
    ),
  };
}

/**
 * Bundle export `hO` / `PIo` — remove one group from an access policy payload.
 */
export function accessPolicyWithoutGroup(args: {
  accessGroups: SiteAccessGroup[];
  accessPolicy: SiteAccessPolicy;
  group: SiteAccessGroup;
  knownAccessGroups: SiteAccessGroup[];
}): {
  access_mode: SiteAccessMode;
  allowed_user_emails: string[];
  allowed_workspace_group_ids?: string[];
  allowed_tenant_group_ids?: string[];
} {
  return {
    access_mode: args.accessPolicy.access_mode,
    allowed_user_emails: compactEmails(
      (args.accessPolicy.allowed_users ?? []).map((user) => user.email),
    ),
    ...resolveGroupIds({
      accessGroups: args.accessGroups,
      knownAccessGroups: args.knownAccessGroups,
      existingGroups: (args.accessPolicy.allowed_groups ?? []).filter(
        (group) => group.id !== args.group.id,
      ),
      removedGroups: [args.group],
      selectedGroups: [],
    }),
  };
}

/**
 * Bundle export `mO` / `kIo` — build `sites_update_site_access` mutation body.
 */
export function buildSiteAccessUpdatePayload(args: {
  accessGroups: SiteAccessGroup[];
  accessMode: SiteAccessMode;
  allowedUserEmails: Array<string | null | undefined>;
  canManageInvitees: boolean;
  existingGroups: SiteAccessGroup[];
  knownAccessGroups: SiteAccessGroup[];
  selectedGroups: SiteAccessGroup[];
}): {
  access_mode: SiteAccessMode;
  allowed_user_emails?: string[];
  allowed_workspace_group_ids?: string[];
  allowed_tenant_group_ids?: string[];
} {
  if (!args.canManageInvitees) {
    return { access_mode: args.accessMode };
  }
  return {
    access_mode: args.accessMode,
    allowed_user_emails: compactEmails(args.allowedUserEmails),
    ...resolveGroupIds({
      accessGroups: args.accessGroups,
      knownAccessGroups: args.knownAccessGroups,
      existingGroups: args.existingGroups,
      removedGroups: [],
      selectedGroups: args.selectedGroups,
    }),
  };
}

/** Bundle export `_O` / `RIo` — lodash-compact ESM init retained as no-op. */
export function ensureSiteAccessHelpersInit(): void {}
