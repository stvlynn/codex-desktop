// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ADt` / export `Bot` (+ `jDt` / `EDt`).

function quoteShellArgBashStyle(arg: string): string {
  return arg === ""
    ? "''"
    : /[^\w@%\-+=:,./]/.test(arg)
      ? ("'" + arg.replace(/('+)/g, "'\"$1\"'") + "'").replace(/^''|''$/g, "")
      : arg;
}

function quoteShellArg(arg: string): string {
  return /^[A-Za-z0-9_@+=:,./-]+$/.test(arg)
    ? arg
    : !/[\`$\\!]/.test(arg) && !arg.includes('"')
      ? `"${arg}"`
      : quoteShellArgBashStyle(arg);
}

/** Join argv with shell-safe quoting. */
export function quoteShellArgs(args: string[]): string {
  return args.map(quoteShellArg).join(" ");
}
