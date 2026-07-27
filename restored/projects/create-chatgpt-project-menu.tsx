// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OYl`) / export `xa`.

export type BindCreateChatGptProjectMenuPeers = {
  AYl: (...args: unknown[]) => unknown;
  BGl: (...args: unknown[]) => unknown;
  Bac: (...args: unknown[]) => unknown;
  DY: (...args: unknown[]) => unknown;
  IFl: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  L8: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  O6s: (...args: unknown[]) => unknown;
  OY: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RZ: (...args: unknown[]) => unknown;
  UFl: (...args: unknown[]) => unknown;
  Vac: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Y5: (...args: unknown[]) => unknown;
  Yac: (...args: unknown[]) => unknown;
  gZ: (...args: unknown[]) => unknown;
  kY: (...args: unknown[]) => unknown;
  kYl: (...args: unknown[]) => unknown;
  ph: (...args: unknown[]) => unknown;
  qA: (...args: unknown[]) => unknown;
  zac: (...args: unknown[]) => unknown;
};
let peers: BindCreateChatGptProjectMenuPeers | null = null;

/** Wire bindCreateChatGptProjectMenu peers once companions land. */
export function setBindCreateChatGptProjectMenuPeers(
  next: BindCreateChatGptProjectMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xa` / internal `OYl`.
 */
export function bindCreateChatGptProjectMenu(props: unknown) {
  const Np = peers.Np;
  const Ph = peers.ph;
  const O6s = peers.O6s;
  const UFl = peers.UFl;
  const BGl = peers.BGl;
  if (peers == null) {
    throw new Error("bindCreateChatGptProjectMenu peers are not configured");
  }
  let {
      chatGptProjectCrudStatus,
      customTriggerButton,
      mode,
      onCreateChatGptProject,
      sidebarMode,
      showOrganizeControl = true,
    } = props,
    l = peers.Io(peers.Q),
    u = peers.Y(peers.DY) && sidebarMode === "codex",
    d = peers.Y(peers.OY),
    f = peers.Y(peers.qA),
    p = peers.Ju(),
    m = peers.RZ(),
    h = peers.Y(peers.kY),
    g = peers.gZ(),
    _ = peers.L8(),
    v = sidebarMode === "codex" && h && !m,
    y = sidebarMode === "chatgpt" && onCreateChatGptProject != null,
    b = peers.IFl({
      chatGptProjectCreationEnabled: y,
      canCreateChatGptProjectDirectly:
        y && chatGptProjectCrudStatus === "allowed",
      directLocalProjectCreationEnabled: !m,
      localProjectsEnabled: u,
      remoteProjectsEnabled: v,
    }),
    x = p.formatMessage({
      id: "sidebarElectron.addGenericWorkspaceRoot",
      defaultMessage: "Add new project",
      description:
        "Toolbar button label for adding a new workspace root option",
    });
  let S = x,
    C = p.formatMessage({
      id: "sidebarElectron.newThread",
      defaultMessage: "New chat",
      description: "Starts a new chat from the sidebar",
    });
  let w = C,
    T = () => {
      peers.zac(l);
    };
  let E = T,
    D = () => {
      peers.Bac(l);
    };
  let O = D,
    k = () => {
      peers.Vac(l);
    };
  let A = k,
    j = () => {
      peers.Yac(l, {
        canStartProjectlessChat: d,
        currentThreadKey: f,
        localProjectActionsEnabled: u,
        projectless: true,
        startNewConversation: g,
        startNewConversationInProject: _,
      });
    };
  let M = j,
    N = customTriggerButton ?? (
      <Np
        className="relative isolate sidebar-icon-button overflow-visible sidebar-hover-icon-button-tint"
        color="ghostMuted"
        size="icon"
        aria-label={S}
      >
        <Ph className="icon-xs" />
      </Np>
    );
  let P = N,
    F = null;
  if (b === "direct-chatgpt") {
    let e;
    e = peers.AYl.cloneElement(P, {
      onClick: onCreateChatGptProject,
    });
    F = e;
  } else if (b === "direct-local") {
    let e;
    e = peers.AYl.cloneElement(P, {
      onClick: E,
    });
    F = e;
  } else if (b === "project-type-dialog") {
    let e = m ? O : E,
      r = y ? onCreateChatGptProject : undefined,
      i;
    i = (
      <O6s
        chatGptProjectCrudStatus={chatGptProjectCrudStatus}
        localProjectsEnabled={u}
        showRemoteProjectItem={v}
        triggerButton={P}
        onCreateLocalProject={e}
        onSelectRemote={A}
        onCreateChatGptProject={r}
      />
    );
    F = i;
  }
  let I = showOrganizeControl ? (
    <UFl
      mode={mode}
      sectionKind={mode === "project" ? "projects" : "connections"}
      sidebarMode={sidebarMode}
    />
  ) : null;
  let L = mode === "connection" ? null : F,
    R =
      sidebarMode === "codex" && mode === "connection" && d ? (
        <BGl
          newChatMessage={w}
          onStartChat={M}
          shortcutCommandId="newProjectlessTask"
        />
      ) : null;
  return (
    <div className="flex items-center gap-1">
      {I}
      {L}
      {R}
    </div>
  );
}
