// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `F6s`) / export `Gm`.

export type ProjectSelectorControlPeers = {
  $: (...args: unknown[]) => unknown;
  Bj: (...args: unknown[]) => unknown;
  DAr: (...args: unknown[]) => unknown;
  Fos: (...args: unknown[]) => unknown;
  HX: (...args: unknown[]) => unknown;
  I6s: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  L6s: (...args: unknown[]) => unknown;
  Lus: (...args: unknown[]) => unknown;
  O6s: (...args: unknown[]) => unknown;
  OPr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RXi: (...args: unknown[]) => unknown;
  RZ: (...args: unknown[]) => unknown;
  TE: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  YYo: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  b$t: (...args: unknown[]) => unknown;
  cd: (...args: unknown[]) => unknown;
  dGr: (...args: unknown[]) => unknown;
  dZ: (...args: unknown[]) => unknown;
  eY: (...args: unknown[]) => unknown;
  g6o: (...args: unknown[]) => unknown;
  hostDisplayName: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  i1: (...args: unknown[]) => unknown;
  jPr: (...args: unknown[]) => unknown;
  jZi: (...args: unknown[]) => unknown;
  lGr: (...args: unknown[]) => unknown;
  label: (...args: unknown[]) => unknown;
  mA: (...args: unknown[]) => unknown;
  path: (...args: unknown[]) => unknown;
  ph: (...args: unknown[]) => unknown;
  projectKind: (...args: unknown[]) => unknown;
  qus: (...args: unknown[]) => unknown;
  t1: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  v6s: (...args: unknown[]) => unknown;
  wA: (...args: unknown[]) => unknown;
  xE: (...args: unknown[]) => unknown;
  y$t: (...args: unknown[]) => unknown;
};
let peers: ProjectSelectorControlPeers | null = null;

/** Wire ProjectSelectorControl peers once companions land. */
export function setProjectSelectorControlPeers(
  next: ProjectSelectorControlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gm` / internal `F6s`.
 */
export function ProjectSelectorControl({
  activeProjectIdOverride,
  allowLocalProjects = true,
  allowLocalProjectActions = allowLocalProjects,
  allowRemoteProjects = true,
  disabled = false,
  hideLabel = false,
  onProjectSelected,
  variant = "default",
  isOpen,
  onOpenChange,
  shortcut,
  triggerButton,
}: Record<string, unknown>) {
  const DZ = peers.dZ;
  const HX = peers.HX;
  const Z = peers.Z;
  const Action = peers.eY.Action;
  const T1 = peers.t1;
  const Qus = peers.qus;
  const Xm = peers.Xm;
  const Fos = peers.Fos;
  const O6s = peers.O6s;
  const VR = peers.VR;
  const V6s = peers.v6s;
  const YYo = peers.YYo;
  const Lus = peers.Lus;
  if (peers == null) {
    throw new Error("ProjectSelectorControl peers are not configured");
  }
  let f = peers.Io(peers.Q),
    p = peers.Ju(),
    [m, h] = peers.L6s.useState(false),
    g = variant === "home",
    _ = peers.L6s.useRef(false),
    v = peers.L6s.useRef(false),
    y = peers.Y(peers.g6o).filter((item) => {
      return peers.jZi(item)
        ? false
        : item.projectKind === "local"
          ? allowLocalProjects
          : allowRemoteProjects;
    }),
    b = peers.RZ(),
    x = peers.lGr(),
    S = activeProjectIdOverride !== undefined,
    C = !b,
    { selectedRemoteProject, selectedRemoteProjectId } = peers.DAr(),
    { remoteConnections } = peers.dGr(),
    D = peers.RXi(remoteConnections),
    { data, isLoading } = peers.Y(peers.xE),
    A = peers.Y(peers.TE),
    j = allowRemoteProjects && x && !b && D.length > 0,
    M = (e) => {
      peers.Ub(f, peers.b$t, {});
      let t = y.find((item) => {
        return item.projectId === e;
      });
      if (t != null) {
        if (onProjectSelected != null) {
          onProjectSelected(t.projectId);
          return;
        }
        if (t.projectKind === "remote") {
          peers.wA(f, {
            projectId: t.projectId,
            projectKind: "remote",
          });
          return;
        }
        peers.mA.select(f, t);
      }
    },
    N = () => {
      peers.Ub(f, peers.y$t, {});
      peers.OPr(f);
    },
    P = (event) => {
      if (_.current) {
        _.current = false;
        event.preventDefault();
        N();
        return;
      }
      v.current && ((v.current = false), event.preventDefault(), peers.Bj());
    },
    F = () => {
      peers.Ub(f, peers.y$t, {});
      peers.jPr({
        setActive: true,
      });
    },
    I = () => {
      if ((peers.Ub(f, peers.b$t, {}), onProjectSelected != null)) {
        onProjectSelected(null);
        return;
      }
      peers.wA(f, null);
    },
    L = A?.type === "local" ? A.projectId : null;
  S
    ? (L = activeProjectIdOverride)
    : allowRemoteProjects && (L = selectedRemoteProjectId ?? L);
  let R = L == null && C && true,
    z = C && L != null,
    B = isOpen ?? m,
    V = (e) => {
      h(e);
      onOpenChange?.(e);
    },
    H = allowLocalProjectActions && variant === "home" && y.length === 0 && !b;
  if (!S && isLoading && data == null && !H && selectedRemoteProjectId == null)
    return null;
  let U =
      L == null
        ? null
        : peers.I6s({
            activeProjectId: L,
            groups: y,
            remoteConnections,
            selectedRemoteProject,
          }),
    W = (
      <DZ
        className="icon-xs shrink-0"
        remoteHostId={U?.hostId}
        isRemoteProject={U?.projectKind === "remote"}
      />
    ),
    G =
      L == null ? null : (
        <HX
          className="icon-xs"
          fallbackIcon={W}
          isRemoteProject={U?.projectKind === "remote"}
          markerClassName="size-4"
          projectId={L}
        />
      ),
    K =
      U?.hostDisplayName == null
        ? (U?.label ?? U?.path ?? null)
        : `${U.label} · ${U.hostDisplayName}`,
    q =
      U?.label ??
      (R && g ? (
        <Z
          id="composer.localCwdDropdown.noProject"
          defaultMessage="Choose project"
          description="Home utility bar value shown when no project is selected"
        />
      ) : R ? (
        <Z
          id="composer.localCwdDropdown.chooseProject"
          defaultMessage="Choose project"
          description="Home page button label shown when no project is selected"
        />
      ) : (
        <Z
          id="composer.localCwdDropdown.noActiveRoot"
          defaultMessage="Select your project"
          description="Shown when no active root is selected"
        />
      )),
    ee =
      L == null
        ? p.formatMessage({
            id: "composer.localCwdDropdown.selectProjectTooltip",
            defaultMessage: "Select a project to run your chat in",
            description:
              "Tooltip for the home page project selector when no project is selected",
          })
        : p.formatMessage({
            id: "composer.localCwdDropdown.changeProjectTooltip",
            defaultMessage: "Change the project for this chat",
            description:
              "Tooltip for the home page project selector when a project is selected",
          }),
    te =
      K == null
        ? p.formatMessage({
            id: "composer.localCwdDropdown.chooseProjectAccessibleLabel",
            defaultMessage: "Choose project",
            description:
              "Accessible label for the home page project selector when no project is selected",
          })
        : p.formatMessage(
            {
              id: "composer.localCwdDropdown.changeProjectAccessibleLabel",
              defaultMessage: "Change project: {projectName}",
              description:
                "Accessible label for the home page project selector when a project is selected",
            },
            {
              projectName: K,
            },
          ),
    ne =
      K ??
      (R ? (
        <Z
          id="composer.localCwdDropdown.newChat"
          defaultMessage="New chat"
          description="Label shown when no project is selected in the electron app"
        />
      ) : (
        <Z
          id="composer.localCwdDropdown.noActiveRoot"
          defaultMessage="Select your project"
          description="Shown when no active root is selected"
        />
      )),
    re = (
      <Action
        LeftIcon={peers.ph}
        onClick={() => {
          _.current = true;
          V(false);
        }}
      >
        <Z
          id="composer.localCwdDropdown.newProject"
          defaultMessage="New project"
          description="Menu item that opens the local project creation flow from the composer project picker"
        />
      </Action>
    ),
    ie;
  ie = R ? <T1 className="icon-xs shrink-0" /> : (G ?? W);
  let ae = () => {
      return (
        <peers.Xm
          shortcut={shortcut}
          tooltipContent={
            <peers.Z
              id="composer.localCwdDropdown.tooltip"
              defaultMessage="Select project"
              description="Tooltip for the active project selector in the composer footer"
            />
          }
        >
          <peers.Fos
            className="min-w-0"
            data-composer-navigation-target="workspace-project"
            categoryLabel={null}
            collapse="none"
            icon={<span data-project-selector-icon={z || undefined}>{ie}</span>}
            indicator="chevron"
            value={hideLabel ? null : ne}
            valueClassName="max-w-[240px] text-left"
          />
        </peers.Xm>
      );
    },
    oe = "always";
  !g && U == null && shortcut == null && (oe = "visibility-target-hidden");
  let se = () => {
    return (
      <button
        className={peers.$(
          "heading-xl text-token-text-tertiary ml-2 -mt-1 flex min-w-0 items-center gap-1 font-normal transition-colors duration-basic hover:text-token-foreground select-none",
          disabled ? "cursor-default opacity-60" : "cursor-interaction",
        )}
        type="button"
        disabled={disabled}
      >
        <span className="inline-flex max-w-[420px] min-w-0 items-center">
          <span className="min-w-0 truncate">{ne}</span>
        </span>
        {
          <peers.cd className="icon-sm mt-1 shrink-0 self-center text-token-input-placeholder-foreground" />
        }
      </button>
    );
  };
  if (H) {
    if (!j && triggerButton == null)
      return (
        <Qus
          aria-label={te}
          contentWidth="menu"
          disabled={disabled}
          isBrowserEnvironment={false}
          isRemoteProject={U?.projectKind === "remote"}
          menuOpen={false}
          onCloseAutoFocus={P}
          onOpenChange={(e) => {
            e && N();
          }}
          projectIcon={U == null ? null : G}
          shortcut={shortcut}
          subtleHover={g}
          tooltipContent={ee}
          tooltipOpenWhen={oe}
          value={q}
        >
          {null}
        </Qus>
      );
    let e = triggerButton ?? (
      <Xm cloneCustomTrigger={true} openWhen={oe} tooltipContent={ee}>
        <Fos
          aria-label={te}
          categoryLabel={null}
          collapse="xs"
          disabled={disabled}
          icon={G ?? W}
          indicator="none"
          value={q}
        />
      </Xm>
    );
    return j ? (
      <O6s
        chatGptProjectCrudStatus={undefined}
        localProjectsEnabled={allowLocalProjectActions}
        showRemoteProjectItem={true}
        triggerButton={e}
        onCreateLocalProject={N}
        onSelectRemote={F}
      />
    ) : (
      <VR
        open={false}
        onOpenChange={(e) => {
          e && N();
        }}
        triggerButton={e}
      >
        {null}
      </VR>
    );
  }
  let ce = (
    <V6s
      groups={y}
      selectedProjectIds={L ? [L] : []}
      onRequestClose={() => {
        return V(false);
      }}
      onSelectProjectId={(e) => {
        v.current = true;
        M(e);
      }}
      projectlessActionLabel={
        <Z
          id="composer.localCwdDropdown.clearProject"
          defaultMessage="Don't work in a project"
          description="Menu item that clears the selected project and starts projectless tasks"
        />
      }
      onSelectProjectless={z ? I : undefined}
      footerItems={allowLocalProjectActions ? re : null}
      onAddRemoteProject={j ? F : undefined}
    >
      {null}
    </V6s>
  );
  if (variant === "home" && triggerButton == null)
    return (
      <Qus
        aria-label={te}
        disabled={disabled}
        isBrowserEnvironment={false}
        isRemoteProject={U?.projectKind === "remote"}
        menuOpen={B}
        onClearProject={z ? I : undefined}
        onCloseAutoFocus={P}
        onOpenChange={V}
        projectIcon={U == null ? null : G}
        shortcut={shortcut}
        subtleHover={g}
        tooltipContent={ee}
        tooltipOpenWhen={oe}
        value={q}
      >
        {ce}
      </Qus>
    );
  let le = (
    <YYo
      open={B}
      onOpenChange={V}
      onCloseAutoFocus={P}
      side="top"
      align={variant === "hero" ? "center" : "start"}
      disabled={disabled}
      triggerButton={triggerButton ?? (variant === "hero" ? se() : ae())}
      contentWidth="workspace"
      contentMaxHeight="tall"
    >
      {ce}
    </YYo>
  );
  return variant === "default" && z && triggerButton == null ? (
    <Lus disabled={disabled} menuOpen={B} onClearProject={I}>
      {le}
    </Lus>
  ) : (
    le
  );
}
