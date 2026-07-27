// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SDr`) / export `W$`.

export type FormFieldStackPeers = {
  $: (...args: unknown[]) => unknown;
  aA: (...args: unknown[]) => unknown;
  oA: (...args: unknown[]) => unknown;
  sA: (...args: unknown[]) => unknown;
  vDr: (...args: unknown[]) => unknown;
  yDr: (...args: unknown[]) => unknown;
};
let peers: FormFieldStackPeers | null = null;

/** Wire FormFieldStack peers once companions land. */
export function setFormFieldStackPeers(next: FormFieldStackPeers): void {
  peers = next;
}

/**
 * Bundle export `W$` / internal `SDr`.
 */
export function FormFieldStack(props: unknown) {
  const YDr = peers.yDr;
  if (peers == null) {
    throw new Error("FormFieldStack peers are not configured");
  }
  let { children, className } = props,
    i,
    a;
  i = peers.vDr();
  a = peers.$("flex flex-col gap-2", i && peers.sA, className);
  let o = i ? <YDr name="FieldStack" /> : null;
  return (
    <div className={a}>
      {o}
      {children}
    </div>
  );
}
