// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bRo`) / export `rO`.

export type UseGitInitRepoActionPeers = {
  $T: (...args: unknown[]) => unknown;
  $f: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  XT: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  xRo: (...args: unknown[]) => unknown;
};
let peers: UseGitInitRepoActionPeers | null = null;

/** Wire useGitInitRepoAction peers once companions land. */
export function setUseGitInitRepoActionPeers(
  next: UseGitInitRepoActionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rO` / internal `bRo`.
 */
export function useGitInitRepoAction(e: unknown) {
  if (peers == null) {
    throw new Error("useGitInitRepoAction peers are not configured");
  }
  let { cwd = "", hostConfig, onErrorMessage, showErrorToast = false } = e,
    s = peers.Io(peers.Q),
    c = peers.rt(),
    l = peers.Ju(),
    u = peers.$T(hostConfig);
  let d = u,
    p = ["git", "init-repo", d, cwd];
  let m = async () => {
    if (cwd == null) throw Error("Missing git context");
    await peers.XT("git").request({
      method: "git-init-repo",
      params: {
        cwd: peers.eu(cwd),
        hostConfig,
        operationSource: "review_model",
      },
    });
  };
  let h = async () => {
    s.get(peers.rh).success(
      l.formatMessage({
        id: "codex.review.noDiff.gitInit.success",
        defaultMessage: "Git repository created",
        description:
          "Toast shown after creating a git repository from the diff empty state",
      }),
    );
    let e = [
      c.invalidateQueries({
        queryKey: peers.$f("git-origins"),
      }),
    ];
    cwd != null &&
      e.push(
        c.invalidateQueries({
          queryKey: ["git", "metadata", d, cwd],
        }),
      );
    await Promise.all(e);
  };
  let g = (e) => {
    let t = e instanceof Error ? e.message : String(e);
    showErrorToast &&
      s.get(peers.rh).danger(
        l.formatMessage(
          {
            id: "codex.review.noDiff.gitInit.error",
            defaultMessage: "Git init failed: {message}",
            description:
              "Error text shown when git initialization fails from the diff empty state",
          },
          {
            message: t,
          },
        ),
      );
    onErrorMessage?.(t);
  };
  let _ = {
    mutationKey: p,
    mutationFn: m,
    onSuccess: h,
    onError: g,
  };
  let v = peers.qt(_),
    y = async () => {
      if (!(cwd == null || v.isPending))
        try {
          await v.mutateAsync();
        } catch {
          return;
        }
    };
  let b = y,
    x = cwd != null;
  return {
    canCreateGitRepository: x,
    createGitRepository: b,
    isCreatingGitRepository: v.isPending,
  };
}
