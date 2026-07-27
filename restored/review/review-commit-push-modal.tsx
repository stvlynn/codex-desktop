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
  const Zk = peers.Zk;
  const VR = peers.VR;
  const IP = peers.iP;
  const Z = peers.Z;
  const Cd = peers.cd;
  const SectionLabel = peers.KR.SectionLabel;
  const Item = peers.KR.Item;
  const Jp = peers.jp;
  const FKo = peers.fKo;
  const NKo = peers.nKo;
  const NR = peers.NR;
  const SUo = peers.sUo;
  const PKo = peers.pKo;
  const CUo = peers.cUo;
  const List = peers.JH.List;
  const JH = peers.JH;
  const Xk = peers.Xk;
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
    m = peers.Io(peers.Q),
    h = peers.Ju(),
    { cwd, hostConfig: _ } = target,
    [v, y] = peers.hKo.useState(null),
    [b, x] = peers.hKo.useState(null),
    S = peers.bp(peers.wu.branchPrefix),
    C = peers.Fo(peers._D, conversationId),
    w = peers.Y(peers.yWo),
    E,
    D;
  D = {
    ...target,
    codexWorktree,
    conversationId,
  };
  E = peers.fJ(D);
  let O = E,
    k = peers.Fo(peers.mJ, O),
    A = peers.Fo(peers.SJ, D),
    j = peers.Fo(peers.NWo, D),
    M = {
      cwd,
      hostConfig: _,
    };
  let N = peers.Fo(peers.lWo, M),
    P = {
      cwd,
      hostConfig: _,
    };
  let F = peers.Fo(peers.uWo, P),
    I = {
      ...D,
      operationSource,
    };
  let L = peers.Fo(peers.eKo, I),
    R = {
      cwd,
      hostConfig: _,
      operationSource,
    };
  let z = peers.Fo(peers.aJ, R),
    B = z.type === "success" ? z.data : undefined,
    V = peers.Fo(peers.pJ, O),
    H = L.isPending || V != null,
    U = {
      cwd,
      hostConfig: _,
      includeUnstaged: w,
    };
  let W = peers.Fo(peers.sWo, U),
    G = {
      cwd,
      hostConfig: _,
      includeUnstaged: w,
    };
  let K = peers.Fo(peers.cWo, G),
    q = {
      cwd,
      hostConfig: _,
      includeUnstaged: true,
    };
  let ee = peers.Fo(peers.cWo, q),
    te = null;
  B && (te = B.branch ?? B.upstreamRef ?? null);
  let ne = !j && A?.trim() ? A.trim() : j ? null : te;
  let re = ne,
    ie = enablePushActions,
    ae = ie && (v ?? j),
    oe = peers.jJ({
      branchPrefix: S,
      conversationTitle: C,
    });
  let se = b ?? oe,
    ce = se.trim();
  let le = ce,
    ue = peers.tN(le, 200),
    de = open && ae && ue.length > 0 && !ue.endsWith("/");
  let fe = de,
    pe = {
      cwd,
      hostConfig: _,
    };
  let me = {
    branch: ue,
    enabled: fe,
    operationSource,
    lookup: pe,
  };
  let { data } = peers.Fo(peers.KHo, me),
    ge = ue === le && data === true,
    _e = ae && (le.length === 0 || le.endsWith("/") || ge);
  let ve = _e,
    ye = ee == null || ee === "changes-loading",
    be = K == null && !H && !ve,
    xe = !H && !ve && (ae ? (B?.commitsAhead ?? 0) > 0 : N == null),
    Se = be && (ae || F == null),
    Ce = enablePushActions
      ? h.formatMessage({
          id: "review.commit.form.commitAndPushTitle",
          defaultMessage: "Commit or push",
          description:
            "Title for the commit modal when commit and push actions are available",
        })
      : h.formatMessage({
          id: "review.commit.form.commitTitle",
          defaultMessage: "Commit",
          description:
            "Title for the commit modal when only commit is available",
        });
  let we = Ce,
    Te = (e) => {
      if (H || ve || (e !== "push" && K != null)) return;
      onOpenChange(false);
      onStatusChange?.("loading");
      let t = ae
        ? {
            kind: "commit",
            newBranch: le,
            nextStep: e,
          }
        : {
            kind: "commit",
            nextStep: e,
          };
      L.mutate(t, {
        onSuccess: (e) => {
          onStatusChange?.(e ? "success" : "error");
        },
        onSettled: onRequestReset,
      });
    };
  let Ee = Te,
    De = (e) => {
      if (!e && !H) {
        onRequestReset();
        return;
      }
      onOpenChange(e);
    };
  let Oe = De,
    ke = <Zk className="sr-only">{we}</Zk>;
  let Ae = (
    <span className="flex min-w-0 items-center gap-2 text-token-description-foreground">
      {ie ? (
        <VR
          align="start"
          contentWidth="xs"
          disabled={H}
          triggerButton={
            <button
              type="button"
              className="flex min-w-0 cursor-interaction items-center gap-2 text-token-description-foreground"
            >
              {<IP className="icon-xs shrink-0" />}
              <span className="truncate">
                {ae ? (
                  <Z
                    id="review.commit.branchTarget.newBranch"
                    defaultMessage="New branch"
                    description="Label for selecting a new commit branch"
                  />
                ) : (
                  (re ?? (
                    <Z
                      id="review.commit.form.commitTo.none"
                      defaultMessage="-"
                      description="Placeholder shown when no commit target is available"
                    />
                  ))
                )}
              </span>
              {<Cd className="icon-2xs shrink-0" />}
            </button>
          }
        >
          <SectionLabel>
            <Z
              id="review.commit.branchTarget.title"
              defaultMessage="Commit to"
              description="Heading for commit branch target options"
            />
          </SectionLabel>
          {re == null ? null : (
            <Item
              LeftIcon={peers.iP}
              RightIcon={ae ? undefined : peers.Bm}
              onSelect={() => {
                y(false);
              }}
            >
              {re}
            </Item>
          )}
          <Item
            LeftIcon={peers.ph}
            RightIcon={ae ? peers.Bm : undefined}
            onSelect={() => {
              y(true);
            }}
          >
            <Z
              id="review.commit.branchTarget.newBranch"
              defaultMessage="New branch"
              description="Label for selecting a new commit branch"
            />
          </Item>
        </VR>
      ) : (
        <>
          {<IP className="icon-xs shrink-0" />}
          <span className="truncate">
            {te ?? (
              <Z
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
  let je = ye ? (
    <span className="flex shrink-0 items-center gap-2">
      <span className="inline-flex size-4 shrink-0 items-center justify-center">
        {W.isLoading || W.isFetching ? (
          <Jp className="icon-xs text-token-description-foreground" />
        ) : null}
      </span>
      {
        <FKo
          isLoading={W.isLoading}
          isUnavailable={W.isUnavailable}
          selectionSummary={W.selectionSummary}
        />
      }
    </span>
  ) : null;
  let Me = (
    <div className="flex h-9 items-center justify-between gap-3 px-3">
      {Ae}
      {je}
    </div>
  );
  let Ne = ae ? (
    <NKo
      branchAlreadyExists={ge}
      disabled={H}
      placeholder={S?.trim()}
      value={se}
      onChange={x}
    />
  ) : null;
  let Pe = ye ? (
    <>
      <textarea
        autoFocus={!ae}
        rows={3}
        className="h-20 w-full resize-none bg-transparent px-3 py-2 text-token-input-foreground outline-none"
        aria-label={h.formatMessage({
          id: "review.commit.messageLabel",
          defaultMessage: "Commit message",
          description: "Label for commit message textarea",
        })}
        placeholder={h.formatMessage({
          id: "review.commit.autoGeneratePlaceholder",
          defaultMessage: "Commit message (leave blank to generate)…",
          description:
            "Placeholder for commit message fields that can be generated automatically",
        })}
        value={k}
        disabled={H}
        onKeyDown={peers.dKo}
        onChange={(event) => {
          m.set(peers.mJ, O, event.target.value);
        }}
      />
      <div className="relative flex items-center gap-2 px-3 pt-2 pb-3">
        {
          <NR
            id="commit-include-unstaged-changes"
            checked={w}
            disabled={H}
            onCheckedChange={(e) => {
              m.set(peers.yWo, e);
            }}
          />
        }
        <label
          htmlFor="commit-include-unstaged-changes"
          className="text-token-foreground"
        >
          {
            <Z
              id="review.commit.selection.includeUnstagedChanges"
              defaultMessage="Include unstaged changes"
              description="Label for selecting unstaged changes in the commit modal"
            />
          }
        </label>
      </div>
    </>
  ) : null;
  let Fe = !be,
    Ie = <SUo reason={K} />;
  let Le = () => {
    return Ee("commit");
  };
  let Re = (
    <Z
      id="review.commit.nextSteps.commit"
      defaultMessage="Commit"
      description="Label for the commit-only option"
    />
  );
  let ze = (
    <PKo
      Icon={peers.sJ}
      disabled={Fe}
      loading={H}
      tooltipContent={Ie}
      value="commit"
      onSelect={Le}
    >
      {Re}
    </PKo>
  );
  let Be = enablePushActions ? (
    <PKo
      Icon={peers.cJ}
      disabled={!Se}
      loading={false}
      tooltipContent={K == null ? <CUo reason={F} /> : <SUo reason={K} />}
      value="commit-and-push"
      onSelect={() => {
        return Ee("commit-and-push");
      }}
    >
      <Z
        id="review.commit.nextSteps.commitAndPush"
        defaultMessage="Commit and push"
        description="Label for the commit and push option"
      />
    </PKo>
  ) : null;
  let Ve = enablePushActions ? (
    <PKo
      Icon={peers.cJ}
      disabled={!xe}
      loading={false}
      tooltipContent={<CUo reason={N} />}
      value="push"
      onSelect={() => {
        return Ee("push");
      }}
    >
      <Z
        id="review.commit.nextSteps.push"
        defaultMessage="Push"
        description="Label for the push-only option"
      />
    </PKo>
  ) : null;
  let He = (
    <div className="border-t border-token-border py-1">
      {
        <List>
          <div className="flex flex-col gap-1">
            {ze}
            {Be}
            {Ve}
          </div>
        </List>
      }
    </div>
  );
  let Ue = (
    <div className="command-menu-dialog contents">
      {
        <JH
          data-codex-shortcut-capture={true}
          className="w-[420px] max-w-[92vw]"
          label={we}
          shouldFilter={false}
          loop={true}
        >
          {Me}
          {Ne}
          {Pe}
          {He}
        </JH>
      }
    </div>
  );
  return (
    <Xk
      open={open}
      showDialogClose={false}
      unstyledContent={true}
      onOpenChange={Oe}
    >
      {ke}
      {Ue}
    </Xk>
  );
}
