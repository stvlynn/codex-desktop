// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eqa`) / export `fM`.

export type BuildLocalAndRemoteThreadSearchItemsPeers = {
  DSt: (...args: unknown[]) => unknown;
  LA: (...args: unknown[]) => unknown;
  RA: (...args: unknown[]) => unknown;
  b_: (...args: unknown[]) => unknown;
  branch: (...args: unknown[]) => unknown;
  environment_label: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  map: (...args: unknown[]) => unknown;
};
let peers: BuildLocalAndRemoteThreadSearchItemsPeers | null = null;

/** Wire buildLocalAndRemoteThreadSearchItems peers once companions land. */
export function setBuildLocalAndRemoteThreadSearchItemsPeers(
  next: BuildLocalAndRemoteThreadSearchItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fM` / internal `Eqa`.
 */
export function buildLocalAndRemoteThreadSearchItems({
  cloudTasks,
  conversationsMeta,
  hostIds,
  projectLabelByThreadKey,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "buildLocalAndRemoteThreadSearchItems peers are not configured",
    );
  }
  return [
    ...conversationsMeta
      .filter((item) => {
        return hostIds.has(item.hostId ?? "local");
      })
      .map((item) => {
        let t = item.cwd ?? "",
          n = peers.b_(item),
          i = (peers.DSt(item) ?? t) || item.id,
          a = peers.kl(item.id),
          o = peers.LA(a);
        return {
          kind: "local",
          threadKey: o,
          conversationId: a,
          threadId: item.id,
          title: n,
          searchTitle: i,
          cwd: t,
          branch: item.gitInfo?.branch ?? "",
          projectLabel: projectLabelByThreadKey?.get(o),
          updatedAt: item.recencyAt ?? item.updatedAt,
          searchPreview: null,
        };
      }),
    ...(cloudTasks?.map((e) => {
      let t = peers.RA(e.id);
      return {
        kind: "remote",
        threadKey: t,
        taskId: e.id,
        title: e.title,
        searchTitle: e.title ?? e.id,
        environmentLabel: e.task_status_display?.environment_label ?? "",
        projectLabel: projectLabelByThreadKey?.get(t),
        updatedAt: (e.updated_at ?? e.created_at ?? 0) * 1e3,
        searchPreview: null,
      };
    }) ?? []),
  ];
}
