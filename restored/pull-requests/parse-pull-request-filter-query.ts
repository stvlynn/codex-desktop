// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `E8s` / export `Nm`.

const LIFECYCLE_FILTER_KEYS = new Set(["closed", "draft", "merged", "state"]);
const RELATIONSHIP_FILTER_KEYS = new Set([
  "assignee",
  "author",
  "commenter",
  "involves",
  "mentions",
  "review-involves",
  "review-requested",
  "reviewed-by",
  "team",
  "team-review-requested",
  "user",
  "user-review-requested",
]);
const PULL_REQUEST_FILTER_KEYS = new Set(
  [
    "archived assignee author base checks closed commenter comments created draft head in interactions involves is label language linked",
    "merged mentions milestone no org project reactions repo review review-involves review-requested reviewed-by sort state status team team-review-requested type updated user user-review-requested",
  ]
    .join(" ")
    .split(" "),
);

/** Parse GitHub-style PR filter query text into structured filters. */
export function parsePullRequestFilterQuery(input: {
  lifecycle: string;
  repository: string | null;
  text: string;
  view: string;
}): {
  filters: {
    lifecycle: string;
    rawQuery?: string;
    relationship: string;
    repository: string | null;
    text: string;
  };
  hasExplicitLifecycleQualifier: boolean;
  hasExplicitRelationshipQualifier: boolean;
} {
  const stripped = input.text.replaceAll(/"(?:\\.|[^"\\])*(?:"|$)/gu, "");
  const keys = Array.from(
    stripped.matchAll(/(?:^|[\s(])-?([a-z-]+):/giu),
    (match) => match[1]?.toLowerCase() ?? "",
  ).filter((key) => PULL_REQUEST_FILTER_KEYS.has(key));
  const hasExplicitRelationshipQualifier = keys.some((key) =>
    RELATIONSHIP_FILTER_KEYS.has(key),
  );
  const hasExplicitLifecycleQualifier =
    keys.some((key) => LIFECYCLE_FILTER_KEYS.has(key)) ||
    /(?:^|[s(])-?is:(?:closed|draft|merged|open|unmerged)/iu.test(stripped);
  let lifecycle = input.lifecycle;
  if (hasExplicitLifecycleQualifier) lifecycle = "all";
  else if (input.view === "reviewing") lifecycle = "open";
  return {
    filters: {
      lifecycle,
      rawQuery: keys.length > 0 ? input.text : undefined,
      relationship: "all",
      repository: keys.some((key) => ["org", "repo", "user"].includes(key))
        ? null
        : input.repository,
      text: input.text,
    },
    hasExplicitLifecycleQualifier,
    hasExplicitRelationshipQualifier,
  };
}
