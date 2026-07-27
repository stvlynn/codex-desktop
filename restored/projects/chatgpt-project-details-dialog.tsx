// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SWl`) / export `Ga`.

export type BindChatGptProjectDetailsDialogPeers = {
  AWl: (...args: unknown[]) => unknown;
  BUl: (...args: unknown[]) => unknown;
  CUl: (...args: unknown[]) => unknown;
  CWl: (...args: unknown[]) => unknown;
  DWl: (...args: unknown[]) => unknown;
  EWl: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  MV: (...args: unknown[]) => unknown;
  NUl: (...args: unknown[]) => unknown;
  Node: (...args: unknown[]) => unknown;
  OWl: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TWl: (...args: unknown[]) => unknown;
  V8i: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  bUl: (...args: unknown[]) => unknown;
  can_write: (...args: unknown[]) => unknown;
  cja: (...args: unknown[]) => unknown;
  click: (...args: unknown[]) => unknown;
  cursor: (...args: unknown[]) => unknown;
  dUl: (...args: unknown[]) => unknown;
  dja: (...args: unknown[]) => unknown;
  gizmo: (...args: unknown[]) => unknown;
  instructions: (...args: unknown[]) => unknown;
  items: (...args: unknown[]) => unknown;
  jWl: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  mU: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  q6o: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
  uja: (...args: unknown[]) => unknown;
  wUl: (...args: unknown[]) => unknown;
  wWl: (...args: unknown[]) => unknown;
  x5: (...args: unknown[]) => unknown;
  yUl: (...args: unknown[]) => unknown;
};
let peers: BindChatGptProjectDetailsDialogPeers | null = null;

/** Wire bindChatGptProjectDetailsDialog peers once companions land. */
export function setBindChatGptProjectDetailsDialogPeers(
  next: BindChatGptProjectDetailsDialogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ga` / internal `SWl`.
 */
export function bindChatGptProjectDetailsDialog(props: unknown) {
  const NUl = peers.NUl;
  const BUl = peers.BUl;
  const NA = peers.nA;
  const Xk = peers.Xk;
  if (peers == null) {
    throw new Error("bindChatGptProjectDetailsDialog peers are not configured");
  }
  let { onOpenChange, project, projectCrudStatus } = props,
    a = peers.Io(peers.Q),
    o = peers.Ju(),
    s = peers.rt(),
    c = a.get(peers.MV);
  let l = c,
    u = peers.x5.useRef(null),
    d = peers.V8i(),
    f = peers.x5.useId(),
    p = peers.x5.useId(),
    m = peers.x5.useId(),
    [h, g] = peers.x5.useState("main"),
    [_, v] = peers.x5.useState(false),
    y = [];
  let [b, x] = peers.x5.useState(y),
    [S, C] = peers.x5.useState(""),
    w = project.gizmo.id,
    T = project.gizmo.display.emoji ?? null,
    E = project.gizmo.display.name,
    D = project.gizmo.display.theme ?? null,
    O = project.gizmo.instructions ?? null,
    k = project.gizmo.memory_scope,
    A = h === "advanced" && (O == null || k == null),
    j = ["chatgpt-project-details", w];
  let M = () => {
    return l.getGizmo(w);
  };
  let N = {
    queryKey: j,
    queryFn: M,
    enabled: A,
    staleTime: peers.Hf.ONE_MINUTE,
  };
  let P = peers.jt(N),
    F = O ?? P.data?.gizmo.instructions ?? "",
    I = F.slice(0, peers.jWl);
  let L = I,
    [R, z] = peers.x5.useState(T),
    [B, V] = peers.x5.useState(E),
    [H, U] = peers.x5.useState(D),
    [W, G] = peers.x5.useState(null),
    [K, q] = peers.x5.useState(false),
    [ee, te] = peers.x5.useState(false),
    ne = B.trim();
  let re = ne,
    ie = re.length === 0,
    ae = re.length > peers.AWl,
    oe = ie || ae,
    se = project.gizmo.current_user_permission?.can_write,
    ce = peers.cja(se, projectCrudStatus);
  let le = ce,
    ue = le,
    de = E.trim();
  let fe = re !== de,
    pe = R !== T || H !== D,
    me = W ?? L,
    he = me !== L,
    ge = O == null && P.isPending,
    _e = O == null && P.isError,
    ve =
      k ??
      (P.data != null && "memory_scope" in P.data.gizmo
        ? P.data.gizmo.memory_scope
        : undefined),
    ye,
    be;
  ye = ve == null ? null : peers.uja(ve);
  be = ye == null ? null : peers.dja(ye, project.gizmo.gizmo_snorlax_type);
  let xe = be,
    Se = peers.wWl(project);
  let Ce = Se,
    we = ["chatgpt-project-connector-scopes", w];
  let Te = () => {
    return peers.TWl(l, w);
  };
  let Ee = {
    queryKey: we,
    queryFn: Te,
    enabled: Ce,
    staleTime: peers.Hf.ONE_MINUTE,
  };
  let De = peers.jt(Ee),
    Oe = peers.yUl(w);
  let ke = () => {
    return peers.EWl(l, w);
  };
  let Ae = {
    queryKey: Oe,
    queryFn: ke,
    staleTime: peers.Hf.ONE_MINUTE,
  };
  let je = peers.jt(Ae),
    Me = {
      projectId: w,
    };
  let Ne = peers.CUl(Me),
    Pe = {
      projectId: w,
    };
  let Fe = peers.wUl(Pe),
    Ie = (Ce && De.isPending) || je.isPending,
    Le = (Ce && De.isError) || je.isError,
    Re = ue && !Ne.isPending,
    ze = le && !K && !oe && (fe || pe || he),
    Be = (e, t, n) => {
      let r = peers.dUl(e)?.trim() || n;
      a.get(peers.rh).danger(t, {
        description: r,
      });
      d() && C(`${t}: ${r}`);
    };
  let Ve = Be,
    He = (e) => {
      e.length === 0 ||
        !ue ||
        Ne.isPending ||
        (x(e),
        C(""),
        Ne.mutateAsync(e)
          .catch((error) => {
            Ve(
              error,
              o.formatMessage({
                id: "chatgptConversations.sidebar.projectSettings.addSourceError",
                defaultMessage: "Could not add sources",
                description:
                  "Error state for adding sources to a ChatGPT project",
              }),
              o.formatMessage({
                id: "chatgptConversations.sidebar.projectSettings.addSourceErrorDescription",
                defaultMessage: "Try again",
                description:
                  "Fallback toast description when adding sources to a ChatGPT project fails without a user-facing server message",
              }),
            );
          })
          .finally(() => {
            d() && x([]);
          }));
    };
  let Ue = He,
    We = (e) => {
      C("");
      Fe.mutateAsync(e).catch((error) => {
        Ve(
          error,
          o.formatMessage({
            id: "chatgptConversations.sidebar.projectSettings.deleteSourceError",
            defaultMessage: "Could not delete source",
            description:
              "Error state for deleting a source from a ChatGPT project",
          }),
          o.formatMessage({
            id: "chatgptConversations.sidebar.projectSettings.deleteSourceErrorDescription",
            defaultMessage: "Try again",
            description:
              "Fallback toast description when deleting a source from a ChatGPT project fails without a user-facing server message",
          }),
        );
      });
    };
  let Ge = We,
    Ke = (event) => {
      let t = Array.from(event.currentTarget.files ?? []);
      event.currentTarget.value = "";
      Ue(t);
    };
  let qe = Ke,
    Je = (event) => {
      peers.mU(event.dataTransfer) && (peers.CWl(event, Re), Re && v(true));
    };
  let Ye = Je,
    Xe = (event) => {
      peers.mU(event.dataTransfer) && (peers.CWl(event, Re), Re && v(true));
    };
  let Ze = Xe,
    Qe = (event) => {
      (event.relatedTarget instanceof peers.Node &&
        event.currentTarget.contains(event.relatedTarget)) ||
        v(false);
    };
  let $e = Qe,
    J = (event) => {
      peers.mU(event.dataTransfer) &&
        (peers.CWl(event, Re),
        v(false),
        Re && Ue(peers.q6o(event.dataTransfer)));
    };
  let et = J,
    tt = async () => {
      te(false);
      q(true);
      try {
        await peers.bUl({
          emoji: R,
          instructions: he ? me : null,
          name: B,
          project,
          queryClient: s,
          scope: a,
          theme: H,
        });
        q(false);
        onOpenChange(false);
      } catch {
        te(true);
        q(false);
      }
    };
  let nt = tt,
    it = (event) => {
      event.preventDefault();
      !(h === "advanced" || !ze) && nt();
    };
  let at = it,
    ot = (e) => {
      (!e && K) || onOpenChange(e);
    };
  let st = ot,
    ct = {
      "aria-describedby": undefined,
    };
  let lt = (
    <span aria-atomic="true" aria-live="assertive" className="sr-only">
      {S}
    </span>
  );
  let ut =
    h === "advanced" ? (
      <NUl
        canEditProject={le}
        didLoadInstructionsFail={_e}
        instructions={me}
        instructionsInputId={m}
        isLoadingInstructions={ge}
        isSaving={K}
        libraryAccess={xe}
        memoryAccess={ye}
        maxInstructionsLength={peers.jWl}
        onBack={() => {
          g("main");
        }}
        onInstructionsChange={(e) => {
          G(e);
          te(false);
        }}
      />
    ) : (
      <BUl
        canAddSources={ue}
        canDeleteFileSources={ue}
        canEditProject={le}
        canOpenAdvanced={!oe && !K}
        canSave={ze}
        connectorScopes={Ce ? (De.data?.items ?? []) : []}
        didSaveFail={ee}
        editDisabledStatus={le ? undefined : projectCrudStatus}
        emoji={R}
        fileInputRef={u}
        hasNameError={oe}
        isAddingSources={Ne.isPending}
        isError={Le}
        isLoading={Ie}
        isNameEmpty={ie}
        isNameTooLong={ae}
        isSaving={K}
        isSourceDragActive={_}
        maxNameLength={peers.AWl}
        mayHaveUnfetchedProjectSaves={je.data?.cursor != null}
        name={B}
        nameErrorId={p}
        nameInputId={f}
        optimisticallyDeletedFileIds={Fe.optimisticallyDeletedFileIds}
        pendingSourceFiles={b}
        projectId={w}
        projectFiles={project.files ?? []}
        projectShortUrl={project.gizmo.short_url}
        projectSaves={je.data?.items ?? []}
        theme={H}
        onAddSourceClick={() => {
          return u.current?.click();
        }}
        onAdvanced={() => {
          g("advanced");
        }}
        onDeleteFileSource={Ge}
        onEmojiChange={(e) => {
          z(e);
          te(false);
        }}
        onFileInputChange={qe}
        onNameChange={(event) => {
          V(event.target.value);
          te(false);
        }}
        onSourcesDragEnter={Ye}
        onSourcesDragLeave={$e}
        onSourcesDragOver={Ze}
        onSourcesDrop={et}
        onThemeChange={(e) => {
          U(e);
          te(false);
        }}
      />
    );
  let dt = (
    <NA
      as="form"
      className="max-h-[calc(100vh-6rem)] min-h-0 gap-4 overflow-hidden"
      onSubmit={at}
    >
      {lt}
      {ut}
    </NA>
  );
  return (
    <Xk open={true} contentProps={ct} onOpenChange={st} size="default">
      {dt}
    </Xk>
  );
}
