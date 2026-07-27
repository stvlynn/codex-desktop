// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OBo`) / export `JD`.

export type BindEditorDiffPagePeers = {
  $: (...args: unknown[]) => unknown;
  $Bo: (...args: unknown[]) => unknown;
  ABo: (...args: unknown[]) => unknown;
  Af: (...args: unknown[]) => unknown;
  BL: (...args: unknown[]) => unknown;
  CBo: (...args: unknown[]) => unknown;
  EXe: (...args: unknown[]) => unknown;
  FBo: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Gd: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Jq: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Jvo: (...args: unknown[]) => unknown;
  Lla: (...args: unknown[]) => unknown;
  Lm: (...args: unknown[]) => unknown;
  Pla: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Rzo: (...args: unknown[]) => unknown;
  Tf: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Xvo: (...args: unknown[]) => unknown;
  Yq: (...args: unknown[]) => unknown;
  Yvo: (...args: unknown[]) => unknown;
  Zvo: (...args: unknown[]) => unknown;
  altKey: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  iVo: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  jBo: (...args: unknown[]) => unknown;
  kBo: (...args: unknown[]) => unknown;
  mla: (...args: unknown[]) => unknown;
  o_: (...args: unknown[]) => unknown;
  qq: (...args: unknown[]) => unknown;
  qvo: (...args: unknown[]) => unknown;
  tyo: (...args: unknown[]) => unknown;
  uk: (...args: unknown[]) => unknown;
};
let peers: BindEditorDiffPagePeers | null = null;

/** Wire bindEditorDiffPage peers once companions land. */
export function setBindEditorDiffPagePeers(
  next: BindEditorDiffPagePeers,
): void {
  peers = next;
}

/**
 * Bundle export `JD` / internal `OBo`.
 */
export function bindEditorDiffPage(props: unknown) {
  const JBo = peers.jBo;
  const FBo = peers.FBo;
  const Je2 = Echo;
  const Tyo = peers.tyo;
  if (peers == null) {
    throw new Error("bindEditorDiffPage peers are not configured");
  }
  let {
      containerClassName,
      diffViewClassName,
      diff,
      viewType,
      stickyHeader,
      hunkSeparators,
      enableComments = false,
      allowCommentDrafts,
      comments,
      modelComments,
      readonlyComments,
      submittingCommentKeys,
      onCommentsChange,
      commentAuthorLabel,
      commentAuthorAvatarUrl,
      onReadonlyCommentReply: alpha,
      renderReadonlyCommentActions,
      renderReadonlyCommentBody,
      open,
      diffViewWrap = false,
      showHunkActions = false,
      showFileActions,
      fileActionsDisabled = false,
      onHunkAction,
      onPostRender,
      hunkActionsVariant = "unstaged",
      cwd = null,
      richPreviewEnabled = false,
      roundedCorners = true,
      background = true,
      diffSurface = "main",
      disableNativeContextMenu = false,
      onRequestChanges,
      onCopyPath,
      onToggleWrap,
      onDirectFileToggle,
      onOpenChange,
      expandScope,
      conversationId,
      hostConfig,
      loadFullContent = true,
      fullContentNextFallbackToDisk = false,
      fullContentIgnoreWhitespace = false,
      fullContentSnapshotGeneration,
      metrics,
      displayPathOverride,
      isLoading = false,
      openFilePathOverride,
      onLoadRetry,
      showLoadError = false,
      headerEndContent,
      headerEndContentOpenOnClick,
      headerOpenAction,
      headerVariant = "default",
      showHeaderDiffStats = true,
      preserveHeaderPositionOnToggle = false,
    } = props,
    Bravo =
      allowCommentDrafts === undefined ? enableComments : allowCommentDrafts,
    Copper = showFileActions === undefined ? showHunkActions : showFileActions,
    Delta = peers.Io(peers.Q),
    Echo = peers.mla() == null ? peers.Gd : peers.Jq.Fragment,
    Falcon = headerVariant === "full-review",
    [Gamma, Harbor] = peers.Jq.useState(diffViewWrap),
    Indigo = peers.Jq.useRef(null),
    Jade = peers.Jq.useRef(null),
    Kite = peers.Jq.useRef(peers.ABo),
    { platform } = peers.uk(),
    Lemon = peers.CBo(onOpenChange, expandScope),
    Marble = peers.Ju(),
    Nickel = peers.Lm(),
    Onyx = diff.metadata.type === "deleted",
    Pearl = diff.metadata.name,
    Quartz =
      Pearl && Pearl !== "/dev/null"
        ? peers.o_(Pearl, cwd ?? undefined)
        : Pearl;
  let River = Quartz,
    Slate = displayPathOverride ?? River ?? Pearl ?? "",
    Timber = Slate && !peers.Af(Slate) ? Slate : null;
  let Umbra = Timber,
    Violet,
    Willow;
  Violet =
    (diff.metadata.type === "rename-pure" ||
      diff.metadata.type === "rename-changed") &&
    diff.metadata.prevName != null
      ? peers.o_(diff.metadata.prevName, cwd ?? undefined)
      : null;
  Willow =
    Violet == null ? null : (peers.Tf(Violet).split("/").pop() ?? Violet);
  let Xenon = Willow,
    Yellow;
  bb0: {
    if (openFilePathOverride !== undefined) {
      if (openFilePathOverride == null) {
        Yellow = null;
        break bb0;
      }
      let cliff = platform === "windows",
        dusk;
      dusk = peers.EXe("", openFilePathOverride, cliff);
      Yellow = dusk;
      break bb0;
    }
    if (River === "/dev/null" || !cwd) {
      Yellow = River;
      break bb0;
    }
    let apex = platform === "windows",
      brook;
    brook = peers.EXe(cwd, River, apex);
    Yellow = brook;
  }
  let $e = Yellow,
    zinc = peers.Tf(Slate).split("/").pop() ?? Slate;
  let Amber = zinc,
    Basalt = Violet == null ? Slate : `${Violet}${peers.iVo}${Slate}`,
    Cedar = Xenon == null ? Amber : `${Xenon}${peers.iVo}${Amber}`,
    Daisy =
      Violet == null || Xenon == null
        ? [
            {
              fileName: Amber,
              path: Slate,
            },
          ]
        : [
            {
              fileName: Xenon,
              path: Violet,
            },
            {
              fileName: Amber,
              path: Slate,
            },
          ];
  let Ember = Daisy,
    at = hostConfig?.id,
    Flint,
    Garnet;
  Flint = () => {
    Harbor(diffViewWrap);
  };
  Garnet = [diffViewWrap];
  peers.Jq.useEffect(Flint, Garnet);
  let lt = {
    cwd,
    hostId: at,
    openPath: $e,
  };
  let Hazel = peers.Fo(peers.Zvo, lt),
    Ivory = async () => {
      try {
        return await peers.Yvo(Delta, {
          cwd: cwd ?? null,
          hostId: at,
          openPath: $e,
        });
      } catch {
        return null;
      }
    };
  let Jasper = peers.Wm(Ivory),
    Kelp = !!$e && $e !== "/dev/null",
    Lotus = () => {
      if (!(!$e || $e === "/dev/null")) {
        if (onCopyPath) {
          onCopyPath($e);
          return;
        }
        peers.BL($e);
      }
    };
  let Mint = Lotus,
    gt = () => {
      if (onToggleWrap) {
        onToggleWrap();
        return;
      }
      Harbor(peers.kBo);
    };
  let _t = gt,
    Nova = Onyx ? (diff.firstDeletionLine ?? 1) : (diff.firstAdditionLine ?? 1),
    Olive = (elm) => {
      let { lineNumber, event } = elm;
      $e &&
        peers.$Bo(event) &&
        peers.Jvo(Delta, {
          path: $e,
          line: lineNumber,
          cwd: cwd ?? null,
          hostId: at,
        });
    };
  let Prism = peers.Wm(Olive),
    Quill = (fern, grove, hill) => {
      if (!$e) return;
      let isle = Indigo.current ?? Nova;
      Indigo.current = null;
      peers.Xvo(Delta, {
        cwd: cwd ?? null,
        hostId: at,
        line: isle,
        openPath: $e,
        appPath: hill,
        persistPreferred: grove,
        target: fern,
      });
    };
  let Reef = peers.Wm(Quill),
    Sage = () => {
      $e &&
        (async () => {
          let { primaryTarget } = peers.qvo({
            data: await Jasper(),
            preferredTargetOverride: Hazel,
          });
          if (primaryTarget != null) {
            peers.Xvo(Delta, {
              cwd: cwd ?? null,
              hostId: at,
              line: Nova,
              openPath: $e,
              persistPreferred: false,
              target: primaryTarget.target,
              appPath: primaryTarget.appPath,
            });
            return;
          }
          peers.Jvo(Delta, {
            cwd: cwd ?? null,
            hostId: at,
            line: Nova,
            path: $e,
          });
        })();
    };
  let Topaz = Sage,
    Ultra = (juniper) => {
      Prism(juniper);
    };
  let Vapor = Ultra,
    Wheat = (lagoon) => {
      Prism(lagoon);
    };
  let Yarn = Wheat,
    Zephyr = (event) => {
      let meadow = !open;
      if (
        (preserveHeaderPositionOnToggle &&
          event != null &&
          peers.Rzo(event.currentTarget, Nickel),
        event?.altKey)
      ) {
        Lemon(meadow);
        return;
      }
      onOpenChange(meadow);
      onDirectFileToggle?.(meadow);
    };
  let Acorn = peers.Wm(Zephyr),
    Bloom = (event) => {
      event.stopPropagation();
      Acorn(event);
    };
  let Coral = peers.Wm(Bloom),
    Drift = () => {
      Kite.current();
    };
  let Eagle = Drift,
    Frost = (event) => {
      let nest =
        typeof event.nativeEvent.composedPath == "function"
          ? event.nativeEvent.composedPath()
          : [event.target];
      Indigo.current = peers.Pla(nest);
    };
  let Glide = Frost,
    Honey =
      !Onyx && cwd != null && hostConfig != null && $e != null
        ? {
            cwd,
            hostConfig,
            path: $e,
          }
        : null;
  let Iris =
    Umbra == null
      ? undefined
      : () => {
          peers.BL(Umbra);
        };
  let Jewel = roundedCorners && "rounded-lg",
    Knoll = Falcon && open && "pb-0.5",
    Lunar = peers.$(
      "group/file-diff flex flex-col overflow-clip",
      Jewel,
      Knoll,
      containerClassName,
    );
  let Moss = peers.Lla(background, diffSurface);
  let North = `var(--codex-diffs-surface-override, ${Moss})`,
    Orbit = background ? "var(--codex-diffs-surface)" : undefined,
    Pine = {
      "--codex-diffs-surface": North,
      backgroundColor: Orbit,
    };
  let Quest = (event) => {
    event.stopPropagation();
    headerEndContentOpenOnClick != null &&
      (onOpenChange(headerEndContentOpenOnClick),
      headerEndContentOpenOnClick !== open &&
        onDirectFileToggle?.(headerEndContentOpenOnClick));
  };
  let Ridge = (oak) => {
    onHunkAction?.({
      path: diff.metadata.name,
      action: oak,
      scope: "file",
    });
  };
  let Storm = Kelp,
    Tide = Marble.formatMessage({
      id: "diff.fileHeader.toggle",
      defaultMessage: "Toggle file diff",
      description: "Button label for toggling the file diff section",
    });
  let Unity = (
    <JBo
      diff={diff}
      displayFileName={Cedar}
      displayPath={Basalt}
      displayPathParts={Ember}
      onFileNameClick={Coral}
      onOpenInEditor={Topaz}
      headerEndContent={headerEndContent}
      onHeaderEndContentClick={Quest}
      headerOpenAction={headerOpenAction}
      fileActionsDisabled={fileActionsDisabled}
      onFileToggle={Acorn}
      onFileAction={Ridge}
      open={open}
      stickyHeader={stickyHeader}
      showOpenInButton={Storm}
      showDiffStats={showHeaderDiffStats}
      toggleAriaLabel={Tide}
      workspaceRelativePath={River}
      showFileActions={Copper}
      hunkActionsVariant={hunkActionsVariant}
      headerVariant={headerVariant}
      isLoading={isLoading}
    />
  );
  let Vale = open ? (
    <FBo
      canOpenFile={Kelp}
      comments={comments}
      modelComments={modelComments}
      conversationId={conversationId}
      cwd={cwd}
      diff={diff}
      diffViewClassName={diffViewClassName}
      enableComments={enableComments}
      allowCommentDrafts={Bravo}
      handleLineClick={Vapor}
      handleLineNumberClick={Yarn}
      hostConfig={hostConfig}
      hoveredLineRef={Jade}
      hunkActionsVariant={hunkActionsVariant}
      hunkSeparators={hunkSeparators}
      loadFullContent={loadFullContent}
      fullContentNextFallbackToDisk={fullContentNextFallbackToDisk}
      fullContentIgnoreWhitespace={fullContentIgnoreWhitespace}
      fullContentSnapshotGeneration={fullContentSnapshotGeneration}
      readonlyComments={readonlyComments}
      submittingCommentKeys={submittingCommentKeys}
      onCommentsChange={onCommentsChange}
      commentAuthorLabel={commentAuthorLabel}
      commentAuthorAvatarUrl={commentAuthorAvatarUrl}
      isLoading={isLoading}
      onReadonlyCommentReply={alpha}
      renderReadonlyCommentActions={renderReadonlyCommentActions}
      renderReadonlyCommentBody={renderReadonlyCommentBody}
      onLoadRetry={onLoadRetry}
      onHunkAction={onHunkAction}
      onPostRender={onPostRender}
      onOpenInEditor={Topaz}
      onRequestChanges={onRequestChanges}
      openFilePath={$e ?? null}
      open={open}
      requestChangesRef={Kite}
      richPreviewEnabled={richPreviewEnabled}
      showHunkActions={showHunkActions}
      showLoadError={showLoadError}
      useReviewLineInfoSeparators={Falcon}
      viewType={viewType}
      wrapLines={Gamma}
      metrics={metrics}
    />
  ) : null;
  let Wave = <Je2>{Vale}</Je2>;
  let $t = (
    <div onContextMenu={Glide} className={Lunar} style={Pine}>
      {Unity}
      {Wave}
    </div>
  );
  return (
    <Tyo
      canOpenFile={Kelp}
      githubFileLookup={Honey}
      loadOpenTargets={Jasper}
      preferredTargetOverride={Hazel}
      onRequestChanges={Eagle}
      onCopyPath={Mint}
      onCopyRelativePath={Iris}
      onToggleWrap={_t}
      handleOpenInTarget={Reef}
      disableNative={disableNativeContextMenu}
    >
      {$t}
    </Tyo>
  );
}
