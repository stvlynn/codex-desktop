// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `QN` / export `cK` — apps list query + hard-refetch mutation.

type QueryResult = {
  data?: unknown;
  isLoading?: boolean;
  error?: unknown;
  [key: string]: unknown;
};

let useAuth: (() => { isLoading?: boolean; userId?: string | null }) | null =
  null;
let isAppsEnabled: ((args: { hostId: string }) => boolean) | null = null;
let buildQueryOptions: ((hostId: string) => Record<string, unknown>) | null =
  null;
let useQuery: ((opts: Record<string, unknown>) => QueryResult) | null = null;
let useMutation:
  | ((opts: Record<string, unknown>) => {
      mutate: () => void;
      isPending?: boolean;
    })
  | null = null;
let useQueryClient:
  | (() => {
      cancelQueries: (args: { queryKey: unknown }) => Promise<unknown>;
    })
  | null = null;
let hardRefetch:
  | ((args: { hostId: string; queryClient: unknown }) => Promise<unknown>)
  | null = null;
let appsQueryKey: ((hostId: string) => unknown) | null = null;
const FIVE_MINUTES = 5 * 60 * 1000;

export function setCodexAppsListDeps(args: {
  useAuth: () => { isLoading?: boolean; userId?: string | null };
  isAppsEnabled: (args: { hostId: string }) => boolean;
  buildQueryOptions: (hostId: string) => Record<string, unknown>;
  useQuery: (opts: Record<string, unknown>) => QueryResult;
  useMutation: (opts: Record<string, unknown>) => {
    mutate: () => void;
    isPending?: boolean;
  };
  useQueryClient: () => {
    cancelQueries: (args: { queryKey: unknown }) => Promise<unknown>;
  };
  hardRefetch: (args: {
    hostId: string;
    queryClient: unknown;
  }) => Promise<unknown>;
  appsQueryKey: (hostId: string) => unknown;
}): void {
  useAuth = args.useAuth;
  isAppsEnabled = args.isAppsEnabled;
  buildQueryOptions = args.buildQueryOptions;
  useQuery = args.useQuery;
  useMutation = args.useMutation;
  useQueryClient = args.useQueryClient;
  hardRefetch = args.hardRefetch;
  appsQueryKey = args.appsQueryKey;
}

export function useCodexAppsList(
  args: {
    enabled?: boolean;
    hostId?: string;
  } = {},
): QueryResult & {
  hardRefetchAppsList: () => void;
  isHardRefetchingAppsList?: boolean;
} {
  if (
    useAuth == null ||
    isAppsEnabled == null ||
    buildQueryOptions == null ||
    useQuery == null ||
    useMutation == null ||
    useQueryClient == null ||
    hardRefetch == null ||
    appsQueryKey == null
  ) {
    throw new Error("useCodexAppsList deps have not been configured");
  }
  const enabled = args.enabled ?? true;
  const hostId = args.hostId ?? "local";
  const auth = useAuth();
  const appsOn = isAppsEnabled({ hostId });
  const ready = !auth.isLoading && auth.userId != null;
  const base = buildQueryOptions(hostId);
  const query = useQuery({
    ...base,
    enabled: enabled && appsOn && ready,
    staleTime: FIVE_MINUTES,
  });
  const client = useQueryClient();
  const mutation = useMutation({
    retry: false,
    onMutate: async () => {
      await client.cancelQueries({ queryKey: appsQueryKey!(hostId) });
    },
    mutationFn: async () => hardRefetch!({ hostId, queryClient: client }),
  });
  return {
    ...query,
    hardRefetchAppsList: () => mutation.mutate(),
    isHardRefetchingAppsList: mutation.isPending,
  };
}
