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
  const Je2 = je;
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
      onReadonlyCommentReply: _,
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
    de = allowCommentDrafts === undefined ? enableComments : allowCommentDrafts,
    me = showFileActions === undefined ? showHunkActions : showFileActions,
    Ae = peers.Io(peers.Q),
    je = peers.mla() == null ? peers.Gd : peers.Jq.Fragment,
    Me = headerVariant === "full-review",
    [Ne, Pe] = peers.Jq.useState(diffViewWrap),
    Fe = peers.Jq.useRef(null),
    Ie = peers.Jq.useRef(null),
    Le = peers.Jq.useRef(peers.ABo),
    { platform } = peers.uk(),
    ze = peers.CBo(onOpenChange, expandScope),
    Be = peers.Ju(),
    Ve = peers.Lm(),
    He = diff.metadata.type === "deleted",
    Ue = diff.metadata.name,
    We = Ue && Ue !== "/dev/null" ? peers.o_(Ue, cwd ?? undefined) : Ue;
  let Ge = We,
    Ke = displayPathOverride ?? Ge ?? Ue ?? "",
    qe = Ke && !peers.Af(Ke) ? Ke : null;
  let Je = qe,
    Ye,
    Xe;
  Ye =
    (diff.metadata.type === "rename-pure" ||
      diff.metadata.type === "rename-changed") &&
    diff.metadata.prevName != null
      ? peers.o_(diff.metadata.prevName, cwd ?? undefined)
      : null;
  Xe = Ye == null ? null : (peers.Tf(Ye).split("/").pop() ?? Ye);
  let Ze = Xe,
    Qe;
  bb0: {
    if (openFilePathOverride !== undefined) {
      if (openFilePathOverride == null) {
        Qe = null;
        break bb0;
      }
      let e = platform === "windows",
        n;
      n = peers.EXe("", openFilePathOverride, e);
      Qe = n;
      break bb0;
    }
    if (Ge === "/dev/null" || !cwd) {
      Qe = Ge;
      break bb0;
    }
    let e = platform === "windows",
      n;
    n = peers.EXe(cwd, Ge, e);
    Qe = n;
  }
  let $e = Qe,
    J = peers.Tf(Ke).split("/").pop() ?? Ke;
  let et = J,
    tt = Ye == null ? Ke : `${Ye}${peers.iVo}${Ke}`,
    nt = Ze == null ? et : `${Ze}${peers.iVo}${et}`,
    rt =
      Ye == null || Ze == null
        ? [
            {
              fileName: et,
              path: Ke,
            },
          ]
        : [
            {
              fileName: Ze,
              path: Ye,
            },
            {
              fileName: et,
              path: Ke,
            },
          ];
  let it = rt,
    at = hostConfig?.id,
    ot,
    st;
  ot = () => {
    Pe(diffViewWrap);
  };
  st = [diffViewWrap];
  peers.Jq.useEffect(ot, st);
  let lt = {
    cwd,
    hostId: at,
    openPath: $e,
  };
  let ut = peers.Fo(peers.Zvo, lt),
    dt = async () => {
      try {
        return await peers.Yvo(Ae, {
          cwd: cwd ?? null,
          hostId: at,
          openPath: $e,
        });
      } catch {
        return null;
      }
    };
  let ft = peers.Wm(dt),
    pt = !!$e && $e !== "/dev/null",
    mt = () => {
      if (!(!$e || $e === "/dev/null")) {
        if (onCopyPath) {
          onCopyPath($e);
          return;
        }
        peers.BL($e);
      }
    };
  let ht = mt,
    gt = () => {
      if (onToggleWrap) {
        onToggleWrap();
        return;
      }
      Pe(peers.kBo);
    };
  let _t = gt,
    vt = He ? (diff.firstDeletionLine ?? 1) : (diff.firstAdditionLine ?? 1),
    yt = (e) => {
      let { lineNumber, event } = e;
      $e &&
        peers.$Bo(event) &&
        peers.Jvo(Ae, {
          path: $e,
          line: lineNumber,
          cwd: cwd ?? null,
          hostId: at,
        });
    };
  let bt = peers.Wm(yt),
    xt = (e, t, n) => {
      if (!$e) return;
      let r = Fe.current ?? vt;
      Fe.current = null;
      peers.Xvo(Ae, {
        cwd: cwd ?? null,
        hostId: at,
        line: r,
        openPath: $e,
        appPath: n,
        persistPreferred: t,
        target: e,
      });
    };
  let St = peers.Wm(xt),
    Ct = () => {
      $e &&
        (async () => {
          let { primaryTarget } = peers.qvo({
            data: await ft(),
            preferredTargetOverride: ut,
          });
          if (primaryTarget != null) {
            peers.Xvo(Ae, {
              cwd: cwd ?? null,
              hostId: at,
              line: vt,
              openPath: $e,
              persistPreferred: false,
              target: primaryTarget.target,
              appPath: primaryTarget.appPath,
            });
            return;
          }
          peers.Jvo(Ae, {
            cwd: cwd ?? null,
            hostId: at,
            line: vt,
            path: $e,
          });
        })();
    };
  let wt = Ct,
    Tt = (e) => {
      bt(e);
    };
  let Et = Tt,
    Dt = (e) => {
      bt(e);
    };
  let Ot = Dt,
    kt = (event) => {
      let t = !open;
      if (
        (preserveHeaderPositionOnToggle &&
          event != null &&
          peers.Rzo(event.currentTarget, Ve),
        event?.altKey)
      ) {
        ze(t);
        return;
      }
      onOpenChange(t);
      onDirectFileToggle?.(t);
    };
  let At = peers.Wm(kt),
    jt = (event) => {
      event.stopPropagation();
      At(event);
    };
  let Mt = peers.Wm(jt),
    Nt = () => {
      Le.current();
    };
  let Pt = Nt,
    Ft = (event) => {
      let t =
        typeof event.nativeEvent.composedPath == "function"
          ? event.nativeEvent.composedPath()
          : [event.target];
      Fe.current = peers.Pla(t);
    };
  let It = Ft,
    Lt =
      !He && cwd != null && hostConfig != null && $e != null
        ? {
            cwd,
            hostConfig,
            path: $e,
          }
        : null;
  let Rt =
    Je == null
      ? undefined
      : () => {
          peers.BL(Je);
        };
  let zt = roundedCorners && "rounded-lg",
    Bt = Me && open && "pb-0.5",
    Vt = peers.$(
      "group/file-diff flex flex-col overflow-clip",
      zt,
      Bt,
      containerClassName,
    );
  let Ht = peers.Lla(background, diffSurface);
  let Ut = `var(--codex-diffs-surface-override, ${Ht})`,
    Wt = background ? "var(--codex-diffs-surface)" : undefined,
    Gt = {
      "--codex-diffs-surface": Ut,
      backgroundColor: Wt,
    };
  let Kt = (event) => {
    event.stopPropagation();
    headerEndContentOpenOnClick != null &&
      (onOpenChange(headerEndContentOpenOnClick),
      headerEndContentOpenOnClick !== open &&
        onDirectFileToggle?.(headerEndContentOpenOnClick));
  };
  let qt = (e) => {
    onHunkAction?.({
      path: diff.metadata.name,
      action: e,
      scope: "file",
    });
  };
  let Jt = pt,
    Yt = Be.formatMessage({
      id: "diff.fileHeader.toggle",
      defaultMessage: "Toggle file diff",
      description: "Button label for toggling the file diff section",
    });
  let Xt = (
    <JBo
      diff={diff}
      displayFileName={nt}
      displayPath={tt}
      displayPathParts={it}
      onFileNameClick={Mt}
      onOpenInEditor={wt}
      headerEndContent={headerEndContent}
      onHeaderEndContentClick={Kt}
      headerOpenAction={headerOpenAction}
      fileActionsDisabled={fileActionsDisabled}
      onFileToggle={At}
      onFileAction={qt}
      open={open}
      stickyHeader={stickyHeader}
      showOpenInButton={Jt}
      showDiffStats={showHeaderDiffStats}
      toggleAriaLabel={Yt}
      workspaceRelativePath={Ge}
      showFileActions={me}
      hunkActionsVariant={hunkActionsVariant}
      headerVariant={headerVariant}
      isLoading={isLoading}
    />
  );
  let Zt = open ? (
    <FBo
      canOpenFile={pt}
      comments={comments}
      modelComments={modelComments}
      conversationId={conversationId}
      cwd={cwd}
      diff={diff}
      diffViewClassName={diffViewClassName}
      enableComments={enableComments}
      allowCommentDrafts={de}
      handleLineClick={Et}
      handleLineNumberClick={Ot}
      hostConfig={hostConfig}
      hoveredLineRef={Ie}
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
      onReadonlyCommentReply={_}
      renderReadonlyCommentActions={renderReadonlyCommentActions}
      renderReadonlyCommentBody={renderReadonlyCommentBody}
      onLoadRetry={onLoadRetry}
      onHunkAction={onHunkAction}
      onPostRender={onPostRender}
      onOpenInEditor={wt}
      onRequestChanges={onRequestChanges}
      openFilePath={$e ?? null}
      open={open}
      requestChangesRef={Le}
      richPreviewEnabled={richPreviewEnabled}
      showHunkActions={showHunkActions}
      showLoadError={showLoadError}
      useReviewLineInfoSeparators={Me}
      viewType={viewType}
      wrapLines={Ne}
      metrics={metrics}
    />
  ) : null;
  let Qt = <Je2>{Zt}</Je2>;
  let $t = (
    <div onContextMenu={It} className={Vt} style={Gt}>
      {Xt}
      {Qt}
    </div>
  );
  return (
    <Tyo
      canOpenFile={pt}
      githubFileLookup={Lt}
      loadOpenTargets={ft}
      preferredTargetOverride={ut}
      onRequestChanges={Pt}
      onCopyPath={ht}
      onCopyRelativePath={Rt}
      onToggleWrap={_t}
      handleOpenInTarget={St}
      disableNative={disableNativeContextMenu}
    >
      {$t}
    </Tyo>
  );
}
