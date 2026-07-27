// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hlu`) / export `Zt`.

export type AppInstallProgressDialogPeers = {
  Aou: (...args: unknown[]) => unknown;
  Clu: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Slu: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  glu: (...args: unknown[]) => unknown;
  h9: (...args: unknown[]) => unknown;
  iA: (...args: unknown[]) => unknown;
  m9: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  p9: (...args: unknown[]) => unknown;
  rA: (...args: unknown[]) => unknown;
  scrollTo: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
  tA: (...args: unknown[]) => unknown;
  wlu: (...args: unknown[]) => unknown;
  xlu: (...args: unknown[]) => unknown;
};
let peers: AppInstallProgressDialogPeers | null = null;

/** Wire AppInstallProgressDialog peers once companions land. */
export function setAppInstallProgressDialogPeers(
  next: AppInstallProgressDialogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zt` / internal `hlu`.
 */
export function AppInstallProgressDialog(props: unknown) {
  const IA = peers.iA;
  const TA = peers.tA;
  const Glu = peers.glu;
  const Aou = peers.Aou;
  const RA = peers.rA;
  const Np = peers.Np;
  const Z = peers.Z;
  const NA = peers.nA;
  const Xk = peers.Xk;
  if (peers == null) {
    throw new Error("AppInstallProgressDialog peers are not configured");
  }
  let { appName, codexHome, progress, onClose } = props,
    o = peers.Ju(),
    s = peers.m9.useRef(null),
    [c, l] = peers.m9.useState(false),
    u = progress?.status === "running",
    d = () => {
      let e = s.current;
      if (e == null) {
        l(false);
        return;
      }
      let t = e.scrollHeight - e.scrollTop - e.clientHeight;
      l(t > 8);
    };
  let f = peers.Wm(d),
    p = () => {
      let e = window.requestAnimationFrame(f);
      return () => {
        window.cancelAnimationFrame(e);
      };
    };
  let m;
  m = [progress, f];
  peers.m9.useEffect(p, m);
  let h = () => {
    let e = s.current;
    e?.scrollTo({
      behavior: "smooth",
      top: e.scrollHeight,
    });
  };
  let g = peers.Wm(h),
    _ = progress != null,
    v = (e) => {
      !e && !u && onClose();
    };
  let y = progress?.status,
    b = peers.xlu(y);
  let x = progress?.status,
    S = peers.Slu(x);
  let C = peers.Clu(progress);
  let w = peers.wlu(progress, appName);
  let T = (
    <IA className="gap-0">
      <TA
        icon={b}
        className="gap-4"
        iconClassName="h-10 w-10 rounded-2xl p-0"
        iconBackgroundClassName={S}
        title={C}
        titleClassName="font-semibold"
        subtitle={w}
        subtitleClassName="text-base leading-6"
      />
    </IA>
  );
  let E =
    progress != null && progress.items.length > 0 ? (
      <IA className="min-h-0 gap-3 pt-5">
        <Glu
          codexHome={codexHome}
          items={progress.items}
          status={progress.status}
        />
      </IA>
    ) : null;
  let D = (
    <div
      ref={s}
      className="vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto px-6 pt-5 pb-8"
      onScroll={f}
    >
      {T}
      {E}
    </div>
  );
  let O = o.formatMessage({
    id: "settings.agent.importSettings.progress.scrollToBottom",
    defaultMessage: "Scroll to bottom",
    description:
      "Label for button that scrolls to the bottom of the external agent config import progress dialog",
  });
  let k = (
    <IA className="pointer-events-none absolute right-0 bottom-0 left-0 h-0 pt-0">
      <Aou
        className="pointer-events-auto bottom-10"
        label={O}
        show={c}
        onClick={g}
      />
    </IA>
  );
  let A = (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      {D}
      {k}
    </div>
  );
  let j =
    progress?.status === "success" ? (
      <IA className="shrink-0 px-6 pb-5">
        <RA>
          <Np color="primary" type="button" onClick={onClose}>
            <Z
              id="settings.agent.importSettings.progress.ok"
              defaultMessage="OK"
              description="Button label to close the external agent config import success dialog"
            />
          </Np>
        </RA>
      </IA>
    ) : null;
  let M = (
    <NA className="max-h-[min(720px,calc(100vh-64px))] gap-0 overflow-hidden p-0">
      {A}
      {j}
    </NA>
  );
  return (
    <Xk open={_} onOpenChange={v} shouldIgnoreClickOutside={u} size="default">
      {M}
    </Xk>
  );
}
