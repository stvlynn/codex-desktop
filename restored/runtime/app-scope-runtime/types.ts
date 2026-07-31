// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Codex AppScope brand / family / node types (NOT stock jotai).

export type AppScopeBrand = {
  __scopeBrand: string;
  id: symbol;
  parent?: AppScopeBrand;
  getKey?: unknown;
  retain?: unknown;
};

export type AppScopeFamilySignal<T> = {
  __brand: string;
  __kind: "signal-family";
  read: (key: unknown) => T;
  write: (key: unknown, value: T | ((prev: T) => T)) => void;
  subscribe: (key: unknown, listener: () => void) => () => void;
};

export type AppScopeNode = {
  scope: AppScopeBrand;
  value: unknown;
  queryClient: unknown;
  get: <T>(atom: AppScopeFamilySignal<T>, key: unknown) => T;
  set: <T>(
    atom: AppScopeFamilySignal<T>,
    key: unknown,
    value: T | ((prev: T) => T),
  ) => void;
};

export type ScopedSignalOptions = {
  isEqual?: (a: unknown, b: unknown) => boolean;
  onMount?: (get: () => unknown) => void | (() => void);
};
