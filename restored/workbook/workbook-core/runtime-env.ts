// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN runtime env wired from workbook-runtime.

export type WorkbookCoreEnv = Record<string, any>;

let env: WorkbookCoreEnv | null = null;

export function wireWorkbookCoreEnv(next: WorkbookCoreEnv): void {
  env = next;
}

export function getWorkbookCoreEnv(): WorkbookCoreEnv {
  if (!env) {
    throw new Error("workbook-core env not wired (call from WorkbookN init)");
  }
  return env;
}
