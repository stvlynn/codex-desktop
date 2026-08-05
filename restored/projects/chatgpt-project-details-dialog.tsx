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
  const Alpha = peers.nA;
  const Bravo = peers.Xk;
  if (peers == null) {
    throw new Error("bindChatGptProjectDetailsDialog peers are not configured");
  }
  let { onOpenChange, project, projectCrudStatus } = props,
    a = peers.Io(peers.Q),
    copper = peers.Ju(),
    s = peers.rt(),
    delta = a.get(peers.MV);
  let echo = delta,
    u = peers.x5.useRef(null),
    falcon = peers.V8i(),
    gamma = peers.x5.useId(),
    p = peers.x5.useId(),
    harbor = peers.x5.useId(),
    [indigo, jade] = peers.x5.useState("main"),
    [kite, lemon] = peers.x5.useState(false),
    marble = [];
  let [b, nickel] = peers.x5.useState(marble),
    [onyx, pearl] = peers.x5.useState(""),
    quartz = project.gizmo.id,
    river = project.gizmo.display.emoji ?? null,
    slate = project.gizmo.display.name,
    timber = project.gizmo.display.theme ?? null,
    umbra = project.gizmo.instructions ?? null,
    violet = project.gizmo.memory_scope,
    willow = indigo === "advanced" && (umbra == null || violet == null),
    xenon = ["chatgpt-project-details", quartz];
  let yellow = () => {
    return echo.getGizmo(quartz);
  };
  let zinc = {
    queryKey: xenon,
    queryFn: yellow,
    enabled: willow,
    staleTime: peers.Hf.ONE_MINUTE,
  };
  let amber = peers.jt(zinc),
    basalt = umbra ?? amber.data?.gizmo.instructions ?? "",
    cedar = basalt.slice(0, peers.jWl);
  let daisy = cedar,
    [ember, flint] = peers.x5.useState(river),
    [garnet, hazel] = peers.x5.useState(slate),
    [ivory, jasper] = peers.x5.useState(timber),
    [kelp, lotus] = peers.x5.useState(null),
    [mint, q] = peers.x5.useState(false),
    [Nova, Olive] = peers.x5.useState(false),
    Prism = garnet.trim();
  let Quill = Prism,
    Reef = Quill.length === 0,
    Sage = Quill.length > peers.AWl,
    Topaz = Reef || Sage,
    Ultra = project.gizmo.current_user_permission?.can_write,
    Vapor = peers.cja(Ultra, projectCrudStatus);
  let Wheat = Vapor,
    Yarn = Wheat,
    Zephyr = slate.trim();
  let Acorn = Quill !== Zephyr,
    Bloom = ember !== river || ivory !== timber,
    Coral = kelp ?? daisy,
    Drift = Coral !== daisy,
    Eagle = umbra == null && amber.isPending,
    _e = umbra == null && amber.isError,
    Frost =
      violet ??
      (amber.data != null && "memory_scope" in amber.data.gizmo
        ? amber.data.gizmo.memory_scope
        : undefined),
    Glide,
    be;
  Glide = Frost == null ? null : peers.uja(Frost);
  be =
    Glide == null ? null : peers.dja(Glide, project.gizmo.gizmo_snorlax_type);
  let Honey = be,
    Iris = peers.wWl(project);
  let Jewel = Iris,
    Knoll = ["chatgpt-project-connector-scopes", quartz];
  let Lunar = () => {
    return peers.TWl(echo, quartz);
  };
  let Moss = {
    queryKey: Knoll,
    queryFn: Lunar,
    enabled: Jewel,
    staleTime: peers.Hf.ONE_MINUTE,
  };
  let North = peers.jt(Moss),
    Orbit = peers.yUl(quartz);
  let Pine = () => {
    return peers.EWl(echo, quartz);
  };
  let Quest = {
    queryKey: Orbit,
    queryFn: Pine,
    staleTime: peers.Hf.ONE_MINUTE,
  };
  let Ridge = peers.jt(Quest),
    Storm = {
      projectId: quartz,
    };
  let Tide = peers.CUl(Storm),
    Unity = {
      projectId: quartz,
    };
  let Vale = peers.wUl(Unity),
    Wave = (Jewel && North.isPending) || Ridge.isPending,
    Apex = (Jewel && North.isError) || Ridge.isError,
    Brook = Yarn && !Tide.isPending,
    Cliff = Wheat && !mint && !Topaz && (Acorn || Bloom || Drift),
    Dusk = (dew, ever, field) => {
      let grain = peers.dUl(dew)?.trim() || field;
      a.get(peers.rh).danger(ever, {
        description: grain,
      });
      falcon() && pearl(`${ever}: ${grain}`);
    };
  let Elm = Dusk,
    Fern = (haven) => {
      haven.length === 0 ||
        !Yarn ||
        Tide.isPending ||
        (nickel(haven),
        pearl(""),
        Tide.mutateAsync(haven)
          .catch((error) => {
            Elm(
              error,
              copper.formatMessage({
                id: "chatgptConversations.sidebar.projectSettings.addSourceError",
                defaultMessage: "Could not add sources",
                description:
                  "Error state for adding sources to a ChatGPT project",
              }),
              copper.formatMessage({
                id: "chatgptConversations.sidebar.projectSettings.addSourceErrorDescription",
                defaultMessage: "Try again",
                description:
                  "Fallback toast description when adding sources to a ChatGPT project fails without a user-facing server message",
              }),
            );
          })
          .finally(() => {
            falcon() && nickel([]);
          }));
    };
  let Grove = Fern,
    Hill = (ink) => {
      pearl("");
      Vale.mutateAsync(ink).catch((error) => {
        Elm(
          error,
          copper.formatMessage({
            id: "chatgptConversations.sidebar.projectSettings.deleteSourceError",
            defaultMessage: "Could not delete source",
            description:
              "Error state for deleting a source from a ChatGPT project",
          }),
          copper.formatMessage({
            id: "chatgptConversations.sidebar.projectSettings.deleteSourceErrorDescription",
            defaultMessage: "Try again",
            description:
              "Fallback toast description when deleting a source from a ChatGPT project fails without a user-facing server message",
          }),
        );
      });
    };
  let Isle = Hill,
    Juniper = (event) => {
      let jadeite = Array.from(event.currentTarget.files ?? []);
      event.currentTarget.value = "";
      Grove(jadeite);
    };
  let Lagoon = Juniper,
    Meadow = (event) => {
      peers.mU(event.dataTransfer) &&
        (peers.CWl(event, Brook), Brook && lemon(true));
    };
  let Nest = Meadow,
    Oak = (event) => {
      peers.mU(event.dataTransfer) &&
        (peers.CWl(event, Brook), Brook && lemon(true));
    };
  let Petal = Oak,
    Quiet = (event) => {
      (event.relatedTarget instanceof peers.Node &&
        event.currentTarget.contains(event.relatedTarget)) ||
        lemon(false);
    };
  let $e = Quiet,
    rain = (event) => {
      peers.mU(event.dataTransfer) &&
        (peers.CWl(event, Brook),
        lemon(false),
        Brook && Grove(peers.q6o(event.dataTransfer)));
    };
  let Seed = rain,
    Trail = async () => {
      Olive(false);
      q(true);
      try {
        await peers.bUl({
          emoji: ember,
          instructions: Drift ? Coral : null,
          name: garnet,
          project,
          queryClient: s,
          scope: a,
          theme: ivory,
        });
        q(false);
        onOpenChange(false);
      } catch {
        Olive(true);
        q(false);
      }
    };
  let Urn = Trail,
    Vine = (event) => {
      event.preventDefault();
      !(indigo === "advanced" || !Cliff) && Urn();
    };
  let at = Vine,
    Wind = (kernel) => {
      (!kernel && mint) || onOpenChange(kernel);
    };
  let Yarrow = Wind,
    Azure = {
      "aria-describedby": undefined,
    };
  let lt = (
    <span aria-atomic="true" aria-live="assertive" className="sr-only">
      {onyx}
    </span>
  );
  let Birch =
    indigo === "advanced" ? (
      <NUl
        canEditProject={Wheat}
        didLoadInstructionsFail={_e}
        instructions={Coral}
        instructionsInputId={harbor}
        isLoadingInstructions={Eagle}
        isSaving={mint}
        libraryAccess={Honey}
        memoryAccess={Glide}
        maxInstructionsLength={peers.jWl}
        onBack={() => {
          jade("main");
        }}
        onInstructionsChange={(leaf) => {
          lotus(leaf);
          Olive(false);
        }}
      />
    ) : (
      <BUl
        canAddSources={Yarn}
        canDeleteFileSources={Yarn}
        canEditProject={Wheat}
        canOpenAdvanced={!Topaz && !mint}
        canSave={Cliff}
        connectorScopes={Jewel ? (North.data?.items ?? []) : []}
        didSaveFail={Nova}
        editDisabledStatus={Wheat ? undefined : projectCrudStatus}
        emoji={ember}
        fileInputRef={u}
        hasNameError={Topaz}
        isAddingSources={Tide.isPending}
        isError={Apex}
        isLoading={Wave}
        isNameEmpty={Reef}
        isNameTooLong={Sage}
        isSaving={mint}
        isSourceDragActive={kite}
        maxNameLength={peers.AWl}
        mayHaveUnfetchedProjectSaves={Ridge.data?.cursor != null}
        name={garnet}
        nameErrorId={p}
        nameInputId={gamma}
        optimisticallyDeletedFileIds={Vale.optimisticallyDeletedFileIds}
        pendingSourceFiles={b}
        projectId={quartz}
        projectFiles={project.files ?? []}
        projectShortUrl={project.gizmo.short_url}
        projectSaves={Ridge.data?.items ?? []}
        theme={ivory}
        onAddSourceClick={() => {
          return u.current?.click();
        }}
        onAdvanced={() => {
          jade("advanced");
        }}
        onDeleteFileSource={Isle}
        onEmojiChange={(maple) => {
          flint(maple);
          Olive(false);
        }}
        onFileInputChange={Lagoon}
        onNameChange={(event) => {
          hazel(event.target.value);
          Olive(false);
        }}
        onSourcesDragEnter={Nest}
        onSourcesDragLeave={$e}
        onSourcesDragOver={Petal}
        onSourcesDrop={Seed}
        onThemeChange={(nimbus) => {
          jasper(nimbus);
          Olive(false);
        }}
      />
    );
  let Canyon = (
    <Alpha
      as="form"
      className="max-h-[calc(100vh-6rem)] min-h-0 gap-4 overflow-hidden"
      onSubmit={at}
    >
      {lt}
      {Birch}
    </Alpha>
  );
  return (
    <Bravo
      open={true}
      contentProps={Azure}
      onOpenChange={Yarrow}
      size="default"
    >
      {Canyon}
    </Bravo>
  );
}
