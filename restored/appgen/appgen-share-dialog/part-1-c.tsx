// Restored from ref/webview/assets/appgen-share-dialog-j88Mseym.js
// Wave FY — full polished body from `appgen-share-dialog-j88Mseym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 33 (verified 51/83).
// AST split 1/2 (lane c — access data helpers)
/* split-lane-import-depth:1 */

/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersL: any = undefined;
export function copper() {}
export function delta(ember: any) {
  return ember.email;
}
export function echo(flint: any) {
  return flint.id;
}
export function falcon(garnet: any) {
  return garnet.id;
}
export function gamma(hazel: any) {
  return hazel.account_user_id;
}
export function harbor(ivory: any) {
  return ivory.account_user_id;
}
export function quartz(field: any) {
  return [
    ...(field?.workspace_groups.map((grain) => ({
      ...grain,
      source: "workspace",
    })) ?? []),
    ...(field?.tenant_groups.map((haven) => ({
      ...haven,
      source: "tenant",
    })) ?? []),
  ];
}
export function river(...ink: any[]) {
  return {
    tenant_groups: slate(ink.flatMap((item) => item?.tenant_groups ?? [])),
    workspace_groups: slate(
      ink.flatMap((item) => item?.workspace_groups ?? []),
    ),
  };
}
function slate(jadeite) {
  return Array.from(new Map(jadeite.map((item) => [item.id, item])).values());
}
export function at(kernel: any, leaf: any) {
  return {
    chipLabel: kernel.name,
    id: `group:${kernel.source}:${kernel.id}`,
    label: kernel.name,
    secondaryLabel: leaf.formatMessage(
      {
        id: "appgenShareDialog.access.groupSize",
        defaultMessage: "{count, plural, one {# member} other {# members}}",
        description: "Member count shown for a group in the site share dialog",
      },
      {
        count: kernel.size,
      },
    ),
    target: {
      kind: "group",
      group: kernel,
    },
  };
}
export function timber(maple: any) {
  let nimbus = useWorkspaceUsersL(maple);
  return {
    chipLabel: nimbus.chipLabel,
    id: `user:${maple.account_user_id}`,
    label: nimbus.label,
    secondaryLabel: nimbus.secondaryLabel,
    target: {
      kind: "user",
      user: maple,
    },
  };
}
