// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-119: formula-criteria-lookup boundary hooks.

export type FormulaCriteriaLookupHooks = {
  getEvalContext: () => any;
  roman: { MATH: (...args: any[]) => any; PRECISE: (...args: any[]) => any };
  arabic: { MATH: (...args: any[]) => any; PRECISE: (...args: any[]) => any };
  sqrtFloor: (...args: any[]) => any;
  absNumber: (...args: any[]) => any;
  multiGcd: (...args: any[]) => any;
  math: {
    F$e: (...args: any[]) => any;
    t$e: (...args: any[]) => any;
    W$e: (...args: any[]) => any;
    ZQe: (...args: any[]) => any;
    C$e: (...args: any[]) => any;
    L$e: (...args: any[]) => any;
    u$e: (...args: any[]) => any;
    m$e: (...args: any[]) => any;
    g$e: (...args: any[]) => any;
    HQe: (...args: any[]) => any;
    f$e: (...args: any[]) => any;
    P$e: (...args: any[]) => any;
    O$e: (...args: any[]) => any;
    v$e: (...args: any[]) => any;
    E$e: (...args: any[]) => any;
    QQe: (...args: any[]) => any;
    YQe: (...args: any[]) => any;
    UQe: (...args: any[]) => any;
    h$e: (...args: any[]) => any;
    _$e: (...args: any[]) => any;
    K$e: (...args: any[]) => any;
    A$e: (...args: any[]) => any;
    k$e: (...args: any[]) => any;
    I$e: (...args: any[]) => any;
    n$e: (...args: any[]) => any;
    G$e: (...args: any[]) => any;
    XQe: (...args: any[]) => any;
    WQe: (...args: any[]) => any;
    $Qe: (...args: any[]) => any;
    l$e: (...args: any[]) => any;
    S$e: (...args: any[]) => any;
    U$e: (...args: any[]) => any;
    V$e: (...args: any[]) => any;
    H$e: (...args: any[]) => any;
    w$e: (...args: any[]) => any;
    T$e: (...args: any[]) => any;
    c$e: (...args: any[]) => any;
    z$e: (...args: any[]) => any;
    D$e: (...args: any[]) => any;
    N$e: (...args: any[]) => any;
    R$e: (...args: any[]) => any;
    y$e: (...args: any[]) => any;
    d$e: (...args: any[]) => any;
    b$e: (...args: any[]) => any;
    p$e: (...args: any[]) => any;
    B$e: (...args: any[]) => any;
    qQe: (...args: any[]) => any;
    GQe: (...args: any[]) => any;
    KQe: (...args: any[]) => any;
    r$e: (...args: any[]) => any;
    i$e: (...args: any[]) => any;
    a$e: (...args: any[]) => any;
    o$e: (...args: any[]) => any;
    j$e: (...args: any[]) => any;
    M$e: (...args: any[]) => any;
    e$e: (...args: any[]) => any;
    s$e: (...args: any[]) => any;
    x$e: (...args: any[]) => any;
    JQe: (...args: any[]) => any;
  };
};

export const fclH: FormulaCriteriaLookupHooks =
  {} as FormulaCriteriaLookupHooks;

export function wireFormulaCriteriaLookupBoundaryHooks(
  next: FormulaCriteriaLookupHooks,
): void {
  Object.assign(fclH, next);
  if (next.math) fclH.math = { ...fclH.math, ...next.math };
}
