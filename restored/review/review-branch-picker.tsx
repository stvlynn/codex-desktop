// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dQo`) / export `NE`.

export type BindReviewBranchPickerPeers = {
  Ju: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  fQo: (...args: unknown[]) => unknown;
  find: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  lY: (...args: unknown[]) => unknown;
  mQo: (...args: unknown[]) => unknown;
  pQo: (...args: unknown[]) => unknown;
};
let peers: BindReviewBranchPickerPeers | null = null;

/** Wire bindReviewBranchPicker peers once companions land. */
export function setBindReviewBranchPickerPeers(
  next: BindReviewBranchPickerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `NE` / internal `dQo`.
 */
export function bindReviewBranchPicker(props: unknown) {
  const Item = peers.KR.Item;
  const Z = peers.Z;
  const Jp = peers.jp;
  const SectionLabel = peers.KR.SectionLabel;
  const Section = peers.KR.Section;
  const SearchInput = peers.KR.SearchInput;
  if (peers == null) {
    throw new Error("bindReviewBranchPicker peers are not configured");
  }
  let {
      branches,
      selectedBranch,
      disabled = false,
      isError,
      isLoading,
      isSearchError = false,
      isSearchLoading = false,
      onClose,
      onRetry,
      onRetrySearch,
      onSearchQueryChange,
      onSelectCustomBranch,
      onSelectBranch,
      renderBranchSubText,
      searchedBranches,
      searchQuery: _,
    } = props,
    x = peers.Ju(),
    [S, C] = peers.mQo.useState(""),
    w = _ ?? S,
    T,
    E,
    D,
    O,
    k,
    A;
  {
    A = w.trim();
    let e = A.toLowerCase();
    O = e.length > 0;
    D =
      branches == null
        ? undefined
        : O
          ? (searchedBranches ??
            branches.filter((item) => {
              return item.toLowerCase().includes(e);
            }))
          : branches;
    k = O ? isSearchLoading : isLoading;
    let i = O ? isSearchError : isError,
      s = O ? onRetrySearch : onRetry;
    E = D?.find((e) => {
      return e === A;
    });
    let c =
      O && onSelectCustomBranch != null && E == null ? (
        <Item
          disabled={disabled}
          onSelect={() => {
            onSelectCustomBranch?.(A);
          }}
        >
          <Z
            id="composer.reviewMode.branches.useExactRef"
            defaultMessage={"Use {branch}"}
            description="Action to use an exact Git ref typed into the branch search field"
            values={{
              branch: A,
            }}
          />
        </Item>
      ) : null;
    if (k) {
      let e;
      e = (
        <Item disabled={true}>
          <span className="inline-flex items-center gap-2">
            {<Jp className="icon-xxs" />}
            {
              <Z
                id="localConversation.syncSetup.branchesLoading"
                defaultMessage="Loading branches…"
                description="Label shown while loading branches"
              />
            }
          </span>
        </Item>
      );
      T = e;
    } else if (i) {
      let e = (
        <SectionLabel>
          <Z
            id="composer.reviewMode.branches.error"
            defaultMessage="Unable to load branches"
            description="Error message when branch list could not be loaded"
          />
        </SectionLabel>
      );
      let n =
        s == null ? null : (
          <Item
            onSelect={() => {
              s();
            }}
          >
            <Z
              id="composer.reviewMode.branches.retry"
              defaultMessage="Retry"
              description="Retry button for branch list error"
            />
          </Item>
        );
      let r;
      r = (
        <Section className="flex flex-col gap-1">
          {e}
          {n}
        </Section>
      );
      T = r;
    } else if (c != null && (D == null || D.length === 0)) T = c;
    else if (D == null || D.length === 0) {
      let e;
      e = (
        <Item disabled={true}>
          <Z
            id="localConversation.syncSetup.noBranches"
            defaultMessage="No branches found"
            description="Label shown when no branches are available"
          />
        </Item>
      );
      T = e;
    } else {
      let e;
      e = (e) => {
        return (
          <peers.fQo
            key={e}
            branch={e}
            disabled={disabled}
            selected={e === selectedBranch}
            subText={renderBranchSubText?.(e) ?? null}
            onSelect={() => {
              return onSelectBranch(e);
            }}
          />
        );
      };
      T = (
        <Section className="flex flex-col">
          {c}
          {D.map(e)}
        </Section>
      );
    }
  }
  let j = x.formatMessage({
    id: "codex.composer.searchBranches",
    defaultMessage: "Search branches",
    description: "Placeholder for the branch search input",
  });
  let M = (event) => {
    let t = event.currentTarget.value;
    C(t);
    onSearchQueryChange?.(t);
  };
  let N = (event) => {
    if (event.key !== "Enter") return;
    if ((event.preventDefault(), !O)) {
      onClose?.();
      return;
    }
    if (disabled || k) return;
    if (E != null) {
      onSelectBranch(E);
      return;
    }
    if (onSelectCustomBranch != null) {
      onSelectCustomBranch(A);
      return;
    }
    let t =
      D?.find((e) => {
        return e !== selectedBranch;
      }) ?? D?.[0];
    if (t != null) {
      onSelectBranch(t);
      return;
    }
  };
  let P = (
    <SearchInput
      autoFocus={false}
      placeholder={j}
      value={w}
      onChange={M}
      onKeyDown={N}
    />
  );
  let F = (
    <SectionLabel>
      <Z
        id="composer.remote.branchesSectionHeading"
        defaultMessage="Branches"
        description="Section heading for remote branch search results"
      />
    </SectionLabel>
  );
  let I = (
    <div className="vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto">
      {F}
      {T}
    </div>
  );
  return (
    <div className="flex w-72 flex-col gap-1.5 overflow-hidden">
      {P}
      {I}
    </div>
  );
}
