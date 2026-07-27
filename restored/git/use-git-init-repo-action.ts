// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `bRo`) / export `rO`.

export type UseGitInitRepoActionPeers = {
  hostKey: (hostConfig: unknown) => unknown;
  normalizeCwd: (cwd: unknown) => unknown;
  requestGitInit: (input: {
    cwd: unknown;
    hostConfig: unknown;
    operationSource: "review_model";
  }) => Promise<void>;
  useScope: () => {
    get: (atom: unknown) => {
      success: (message: unknown) => void;
      danger: (message: unknown) => void;
    };
  };
  useQueryClient: () => {
    invalidateQueries: (opts: { queryKey: unknown }) => Promise<unknown>;
  };
  useIntl: () => {
    formatMessage: (
      descriptor: {
        id: string;
        defaultMessage: string;
        description: string;
      },
      values?: Record<string, unknown>,
    ) => unknown;
  };
  toastAtom: unknown;
  originsQueryKey: (prefix: "git-origins") => unknown;
  useMutation: (options: Record<string, unknown>) => {
    isPending: boolean;
    mutateAsync: () => Promise<unknown>;
  };
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
 * Mutation action to initialize a git repository with toasts.
 */
export function useGitInitRepoAction(options: {
  cwd: unknown;
  hostConfig: unknown;
  onErrorMessage?: (message: string) => void;
  showErrorToast?: boolean;
}): {
  canCreateGitRepository: boolean;
  createGitRepository: () => Promise<void>;
  isCreatingGitRepository: boolean;
} {
  if (peers == null) {
    throw new Error("UseGitInitRepoAction peers are not configured");
  }
  const showErrorToast = options.showErrorToast === true;
  const scope = peers.useScope();
  const queryClient = peers.useQueryClient();
  const intl = peers.useIntl();
  const hostKey = peers.hostKey(options.hostConfig);
  const cwdKey = options.cwd ?? "";
  const mutation = peers.useMutation({
    mutationKey: ["git", "init-repo", hostKey, cwdKey],
    mutationFn: async () => {
      if (options.cwd == null) throw new Error("Missing git context");
      await peers!.requestGitInit({
        cwd: peers!.normalizeCwd(options.cwd),
        hostConfig: options.hostConfig,
        operationSource: "review_model",
      });
    },
    onSuccess: async () => {
      scope.get(peers!.toastAtom).success(
        intl.formatMessage({
          id: "codex.review.noDiff.gitInit.success",
          defaultMessage: "Git repository created",
          description:
            "Toast shown after creating a git repository from the diff empty state",
        }),
      );
      const tasks = [
        queryClient.invalidateQueries({
          queryKey: peers!.originsQueryKey("git-origins"),
        }),
      ];
      if (options.cwd != null) {
        tasks.push(
          queryClient.invalidateQueries({
            queryKey: ["git", "metadata", hostKey, options.cwd],
          }),
        );
      }
      await Promise.all(tasks);
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      if (showErrorToast) {
        scope.get(peers!.toastAtom).danger(
          intl.formatMessage(
            {
              id: "codex.review.noDiff.gitInit.error",
              defaultMessage: "Git init failed: {message}",
              description:
                "Error text shown when git initialization fails from the diff empty state",
            },
            { message },
          ),
        );
      }
      options.onErrorMessage?.(message);
    },
  });
  const createGitRepository = async () => {
    if (options.cwd == null || mutation.isPending) return;
    try {
      await mutation.mutateAsync();
    } catch {
      return;
    }
  };
  return {
    canCreateGitRepository: options.cwd != null,
    createGitRepository,
    isCreatingGitRepository: mutation.isPending,
  };
}
