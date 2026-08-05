// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uKo`) / export `bD`.

export type BindReviewCommitPushModalPeers = {
  Bm: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  JH: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  KHo: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  MJ: (...args: unknown[]) => unknown;
  NR: (...args: unknown[]) => unknown;
  NWo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SJ: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  _D: (...args: unknown[]) => unknown;
  aJ: (...args: unknown[]) => unknown;
  bp: (...args: unknown[]) => unknown;
  cJ: (...args: unknown[]) => unknown;
  cUo: (...args: unknown[]) => unknown;
  cWo: (...args: unknown[]) => unknown;
  cd: (...args: unknown[]) => unknown;
  commitsAhead: (...args: unknown[]) => unknown;
  dKo: (...args: unknown[]) => unknown;
  eKo: (...args: unknown[]) => unknown;
  fJ: (...args: unknown[]) => unknown;
  fKo: (...args: unknown[]) => unknown;
  hKo: (...args: unknown[]) => unknown;
  iP: (...args: unknown[]) => unknown;
  jJ: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  lWo: (...args: unknown[]) => unknown;
  mJ: (...args: unknown[]) => unknown;
  mKo: (...args: unknown[]) => unknown;
  nKo: (...args: unknown[]) => unknown;
  pJ: (...args: unknown[]) => unknown;
  pKo: (...args: unknown[]) => unknown;
  ph: (...args: unknown[]) => unknown;
  sJ: (...args: unknown[]) => unknown;
  sUo: (...args: unknown[]) => unknown;
  sWo: (...args: unknown[]) => unknown;
  tN: (...args: unknown[]) => unknown;
  uWo: (...args: unknown[]) => unknown;
  wu: (...args: unknown[]) => unknown;
  yWo: (...args: unknown[]) => unknown;
};
let peers: BindReviewCommitPushModalPeers | null = null;

/** Wire bindReviewCommitPushModal peers once companions land. */
export function setBindReviewCommitPushModalPeers(
  next: BindReviewCommitPushModalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bD` / internal `uKo`.
 */
export function bindReviewCommitPushModal(props: unknown) {
  const Alpha = peers.Zk;
  const Bravo = peers.VR;
  const Copper = peers.iP;
  const FormattedMessage = peers.Z;
  const Echo = peers.cd;
  const SectionLabel = peers.KR.SectionLabel;
  const Item = peers.KR.Item;
  const Falcon = peers.jp;
  const FKo = peers.fKo;
  const NKo = peers.nKo;
  const Gamma = peers.NR;
  const SUo = peers.sUo;
  const PKo = peers.pKo;
  const CUo = peers.cUo;
  const List = peers.JH.List;
  const Harbor = peers.JH;
  const Indigo = peers.Xk;
  if (peers == null) {
    throw new Error("bindReviewCommitPushModal peers are not configured");
  }
  let {
      open,
      onOpenChange,
      conversationId = null,
      target,
      codexWorktree = false,
      enablePushActions = false,
      operationSource = "commit_modal",
      onStatusChange,
      onRequestReset,
    } = props,
    jade = peers.Io(peers.Q),
    kite = peers.Ju(),
    { cwd, hostConfig: lemon } = target,
    [marble, nickel] = peers.hKo.useState(null),
    [b, onyx] = peers.hKo.useState(null),
    pearl = peers.bp(peers.wu.branchPrefix),
    quartz = peers.Fo(peers._D, conversationId),
    river = peers.Y(peers.yWo),
    slate,
    timber;
  timber = {
    ...target,
    codexWorktree,
    conversationId,
  };
  slate = peers.fJ(timber);
  let umbra = slate,
    violet = peers.Fo(peers.mJ, umbra),
    willow = peers.Fo(peers.SJ, timber),
    xenon = peers.Fo(peers.NWo, timber),
    yellow = {
      cwd,
      hostConfig: lemon,
    };
  let zinc = peers.Fo(peers.lWo, yellow),
    amber = {
      cwd,
      hostConfig: lemon,
    };
  let basalt = peers.Fo(peers.uWo, amber),
    cedar = {
      ...timber,
      operationSource,
    };
  let daisy = peers.Fo(peers.eKo, cedar),
    ember = {
      cwd,
      hostConfig: lemon,
      operationSource,
    };
  let flint = peers.Fo(peers.aJ, ember),
    garnet = flint.type === "success" ? flint.data : undefined,
    hazel = peers.Fo(peers.pJ, umbra),
    ivory = daisy.isPending || hazel != null,
    jasper = {
      cwd,
      hostConfig: lemon,
      includeUnstaged: river,
    };
  let kelp = peers.Fo(peers.sWo, jasper),
    lotus = {
      cwd,
      hostConfig: lemon,
      includeUnstaged: river,
    };
  let mint = peers.Fo(peers.cWo, lotus),
    q = {
      cwd,
      hostConfig: lemon,
      includeUnstaged: true,
    };
  let Nova = peers.Fo(peers.cWo, q),
    Olive = null;
  garnet && (Olive = garnet.branch ?? garnet.upstreamRef ?? null);
  let Prism = !xenon && willow?.trim() ? willow.trim() : xenon ? null : Olive;
  let Quill = Prism,
    Reef = enablePushActions,
    Sage = Reef && (marble ?? xenon),
    Topaz = peers.jJ({
      branchPrefix: pearl,
      conversationTitle: quartz,
    });
  let Ultra = b ?? Topaz,
    Vapor = Ultra.trim();
  let Wheat = Vapor,
    Yarn = peers.tN(Wheat, 200),
    Zephyr = open && Sage && Yarn.length > 0 && !Yarn.endsWith("/");
  let Acorn = Zephyr,
    Bloom = {
      cwd,
      hostConfig: lemon,
    };
  let Coral = {
    branch: Yarn,
    enabled: Acorn,
    operationSource,
    lookup: Bloom,
  };
  let { data } = peers.Fo(peers.KHo, Coral),
    Drift = Yarn === Wheat && data === true,
    _e = Sage && (Wheat.length === 0 || Wheat.endsWith("/") || Drift);
  let Eagle = _e,
    Frost = Nova == null || Nova === "changes-loading",
    be = mint == null && !ivory && !Eagle,
    Glide =
      !ivory &&
      !Eagle &&
      (Sage ? (garnet?.commitsAhead ?? 0) > 0 : zinc == null),
    Honey = be && (Sage || basalt == null),
    Iris = enablePushActions
      ? kite.formatMessage({
          id: "review.commit.form.commitAndPushTitle",
          defaultMessage: "Commit or push",
          description:
            "Title for the commit modal when commit and push actions are available",
        })
      : kite.formatMessage({
          id: "review.commit.form.commitTitle",
          defaultMessage: "Commit",
          description:
            "Title for the commit modal when only commit is available",
        });
  let Jewel = Iris,
    Knoll = (grove) => {
      if (ivory || Eagle || (grove !== "push" && mint != null)) return;
      onOpenChange(false);
      onStatusChange?.("loading");
      let hill = Sage
        ? {
            kind: "commit",
            newBranch: Wheat,
            nextStep: grove,
          }
        : {
            kind: "commit",
            nextStep: grove,
          };
      daisy.mutate(hill, {
        onSuccess: (isle) => {
          onStatusChange?.(isle ? "success" : "error");
        },
        onSettled: onRequestReset,
      });
    };
  let Lunar = Knoll,
    Moss = (juniper) => {
      if (!juniper && !ivory) {
        onRequestReset();
        return;
      }
      onOpenChange(juniper);
    };
  let North = Moss,
    Orbit = <Alpha className="sr-only">{Jewel}</Alpha>;
  let Pine = (
    <span className="flex min-w-0 items-center gap-2 text-token-description-foreground">
      {Reef ? (
        <Bravo
          align="start"
          contentWidth="xs"
          disabled={ivory}
          triggerButton={
            <button
              type="button"
              className="flex min-w-0 cursor-interaction items-center gap-2 text-token-description-foreground"
            >
              {<Copper className="icon-xs shrink-0" />}
              <span className="truncate">
                {Sage ? (
                  <FormattedMessage
                    id="review.commit.branchTarget.newBranch"
                    defaultMessage="New branch"
                    description="Label for selecting a new commit branch"
                  />
                ) : (
                  (Quill ?? (
                    <FormattedMessage
                      id="review.commit.form.commitTo.none"
                      defaultMessage="-"
                      description="Placeholder shown when no commit target is available"
                    />
                  ))
                )}
              </span>
              {<Echo className="icon-2xs shrink-0" />}
            </button>
          }
        >
          <SectionLabel>
            <FormattedMessage
              id="review.commit.branchTarget.title"
              defaultMessage="Commit to"
              description="Heading for commit branch target options"
            />
          </SectionLabel>
          {Quill == null ? null : (
            <Item
              LeftIcon={peers.iP}
              RightIcon={Sage ? undefined : peers.Bm}
              onSelect={() => {
                nickel(false);
              }}
            >
              {Quill}
            </Item>
          )}
          <Item
            LeftIcon={peers.ph}
            RightIcon={Sage ? peers.Bm : undefined}
            onSelect={() => {
              nickel(true);
            }}
          >
            <FormattedMessage
              id="review.commit.branchTarget.newBranch"
              defaultMessage="New branch"
              description="Label for selecting a new commit branch"
            />
          </Item>
        </Bravo>
      ) : (
        <>
          {<Copper className="icon-xs shrink-0" />}
          <span className="truncate">
            {Olive ?? (
              <FormattedMessage
                id="review.commit.form.commitTo.none"
                defaultMessage="-"
                description="Placeholder shown when no commit target is available"
              />
            )}
          </span>
        </>
      )}
    </span>
  );
  let Quest = Frost ? (
    <span className="flex shrink-0 items-center gap-2">
      <span className="inline-flex size-4 shrink-0 items-center justify-center">
        {kelp.isLoading || kelp.isFetching ? (
          <Falcon className="icon-xs text-token-description-foreground" />
        ) : null}
      </span>
      {
        <FKo
          isLoading={kelp.isLoading}
          isUnavailable={kelp.isUnavailable}
          selectionSummary={kelp.selectionSummary}
        />
      }
    </span>
  ) : null;
  let Ridge = (
    <div className="flex h-9 items-center justify-between gap-3 px-3">
      {Pine}
      {Quest}
    </div>
  );
  let Storm = Sage ? (
    <NKo
      branchAlreadyExists={Drift}
      disabled={ivory}
      placeholder={pearl?.trim()}
      value={Ultra}
      onChange={onyx}
    />
  ) : null;
  let Tide = Frost ? (
    <>
      <textarea
        autoFocus={!Sage}
        rows={3}
        className="h-20 w-full resize-none bg-transparent px-3 py-2 text-token-input-foreground outline-none"
        aria-label={kite.formatMessage({
          id: "review.commit.messageLabel",
          defaultMessage: "Commit message",
          description: "Label for commit message textarea",
        })}
        placeholder={kite.formatMessage({
          id: "review.commit.autoGeneratePlaceholder",
          defaultMessage: "Commit message (leave blank to generate)…",
          description:
            "Placeholder for commit message fields that can be generated automatically",
        })}
        value={violet}
        disabled={ivory}
        onKeyDown={peers.dKo}
        onChange={(event) => {
          jade.set(peers.mJ, umbra, event.target.value);
        }}
      />
      <div className="relative flex items-center gap-2 px-3 pt-2 pb-3">
        {
          <Gamma
            id="commit-include-unstaged-changes"
            checked={river}
            disabled={ivory}
            onCheckedChange={(lagoon) => {
              jade.set(peers.yWo, lagoon);
            }}
          />
        }
        <label
          htmlFor="commit-include-unstaged-changes"
          className="text-token-foreground"
        >
          {
            <FormattedMessage
              id="review.commit.selection.includeUnstagedChanges"
              defaultMessage="Include unstaged changes"
              description="Label for selecting unstaged changes in the commit modal"
            />
          }
        </label>
      </div>
    </>
  ) : null;
  let Unity = !be,
    Vale = <SUo reason={mint} />;
  let Wave = () => {
    return Lunar("commit");
  };
  let Apex = (
    <FormattedMessage
      id="review.commit.nextSteps.commit"
      defaultMessage="Commit"
      description="Label for the commit-only option"
    />
  );
  let Brook = (
    <PKo
      Icon={peers.sJ}
      disabled={Unity}
      loading={ivory}
      tooltipContent={Vale}
      value="commit"
      onSelect={Wave}
    >
      {Apex}
    </PKo>
  );
  let Cliff = enablePushActions ? (
    <PKo
      Icon={peers.cJ}
      disabled={!Honey}
      loading={false}
      tooltipContent={
        mint == null ? <CUo reason={basalt} /> : <SUo reason={mint} />
      }
      value="commit-and-push"
      onSelect={() => {
        return Lunar("commit-and-push");
      }}
    >
      <FormattedMessage
        id="review.commit.nextSteps.commitAndPush"
        defaultMessage="Commit and push"
        description="Label for the commit and push option"
      />
    </PKo>
  ) : null;
  let Dusk = enablePushActions ? (
    <PKo
      Icon={peers.cJ}
      disabled={!Glide}
      loading={false}
      tooltipContent={<CUo reason={zinc} />}
      value="push"
      onSelect={() => {
        return Lunar("push");
      }}
    >
      <FormattedMessage
        id="review.commit.nextSteps.push"
        defaultMessage="Push"
        description="Label for the push-only option"
      />
    </PKo>
  ) : null;
  let Elm = (
    <div className="border-t border-token-border py-1">
      {
        <List>
          <div className="flex flex-col gap-1">
            {Brook}
            {Cliff}
            {Dusk}
          </div>
        </List>
      }
    </div>
  );
  let Fern = (
    <div className="command-menu-dialog contents">
      {
        <Harbor
          data-codex-shortcut-capture={true}
          className="w-[420px] max-w-[92vw]"
          label={Jewel}
          shouldFilter={false}
          loop={true}
        >
          {Ridge}
          {Storm}
          {Tide}
          {Elm}
        </Harbor>
      }
    </div>
  );
  return (
    <Indigo
      open={open}
      showDialogClose={false}
      unstyledContent={true}
      onOpenChange={North}
    >
      {Orbit}
      {Fern}
    </Indigo>
  );
}
