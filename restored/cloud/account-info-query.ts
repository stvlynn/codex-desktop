// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Account-info react-query helpers (`d2r` / `EN`).

export const ACCOUNT_INFO_QUERY_KEY = "account-info" as const;

export type AccountInfoQueryOptions = {
  enabled?: boolean;
};

export type AccountInfoQueryConfig = {
  queryConfig: {
    enabled: boolean;
  };
};

/** Base query config for the `account-info` cache entry (`d2r`). */
export function getAccountInfoQueryConfig({
  enabled = true,
}: AccountInfoQueryOptions = {}): AccountInfoQueryConfig {
  return {
    queryConfig: {
      enabled,
    },
  };
}

export type ChatGptAccountInfoQueryOptions = AccountInfoQueryOptions & {
  authMethod: string;
};

/**
 * Enables account-info fetching only for ChatGPT auth (`EN`).
 */
export function getChatGptAccountInfoQueryConfig({
  enabled = true,
  authMethod,
}: ChatGptAccountInfoQueryOptions): AccountInfoQueryConfig {
  return getAccountInfoQueryConfig({
    enabled: authMethod === "chatgpt" && enabled,
  });
}
