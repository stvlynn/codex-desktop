// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xf` / export `idt`.

export class HostApiError extends Error {
  status: number | string | undefined;
  errorCode: string | number | undefined;

  constructor(
    message: string,
    status?: number | string,
    errorCode?: string | number,
  ) {
    super(message);
    this.name = "HostApiError";
    this.status = status;
    this.errorCode = errorCode;
  }
}
