// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `QZl`/`JZl`/`TQl`/`NQl` — export `na`.

const PLAN_DISPLAY_NAMES: Record<string, string> = {
  business: "Enterprise",
  enterprise: "Enterprise",
  enterprise_cbp_automation: "Enterprise",
  enterprise_cbp_usage_based: "Enterprise",
  free: "Free",
  free_workspace: "Free",
  go: "Go",
  guest: "Free",
  plus: "Plus",
  pro: "Pro",
  prolite: "Pro",
  self_serve_business_usage_based: "Business",
  team: "Business",
};

function trimNonEmpty(value: string | null | undefined): string | null {
  const t = value?.trim();
  return t == null || t.length === 0 ? null : t;
}

function formatPlanDisplayName(plan: string | null | undefined): string | null {
  const t = trimNonEmpty(plan);
  if (t == null) return null;
  return (
    PLAN_DISPLAY_NAMES[t.toLowerCase()] ??
    t
      .split(/[_-]+/)
      .filter((part) => part.length > 0)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

/** Prefer workspace name for workspace accounts; else humanized plan. */
export function resolveWorkspaceOrPlanDisplayName(args: {
  accountStructure: string | null | undefined;
  plan: string | null | undefined;
  workspaceName: string | null | undefined;
}): string | null {
  const workspace = trimNonEmpty(args.workspaceName);
  if (
    workspace != null &&
    args.accountStructure?.toLowerCase() === "workspace"
  ) {
    return workspace;
  }
  return formatPlanDisplayName(args.plan);
}
