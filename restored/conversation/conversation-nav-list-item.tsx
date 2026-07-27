// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lzl`) / export `Mo`.

export type ConversationNavListItemPeers = {
  $So: (...args: unknown[]) => unknown;
  Azl: (...args: unknown[]) => unknown;
  BUa: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Bzl: (...args: unknown[]) => unknown;
  Dnr: (...args: unknown[]) => unknown;
  FQ: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  GAr: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  JAr: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  KAr: (...args: unknown[]) => unknown;
  LA: (...args: unknown[]) => unknown;
  LAr: (...args: unknown[]) => unknown;
  Nzl: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Rzl: (...args: unknown[]) => unknown;
  SM: (...args: unknown[]) => unknown;
  TDe: (...args: unknown[]) => unknown;
  Vnr: (...args: unknown[]) => unknown;
  Vzl: (...args: unknown[]) => unknown;
  Xh: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _Ll: (...args: unknown[]) => unknown;
  azl: (...args: unknown[]) => unknown;
  bnr: (...args: unknown[]) => unknown;
  commit: (...args: unknown[]) => unknown;
  createdAt: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  discard: (...args: unknown[]) => unknown;
  eOt: (...args: unknown[]) => unknown;
  eg: (...args: unknown[]) => unknown;
  fD: (...args: unknown[]) => unknown;
  fg: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  hasUnreadTurn: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  iD: (...args: unknown[]) => unknown;
  label: (...args: unknown[]) => unknown;
  lnc: (...args: unknown[]) => unknown;
  mD: (...args: unknown[]) => unknown;
  mRs: (...args: unknown[]) => unknown;
  n5: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  p3o: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  tRl: (...args: unknown[]) => unknown;
  znr: (...args: unknown[]) => unknown;
  zzl: (...args: unknown[]) => unknown;
};
let peers: ConversationNavListItemPeers | null = null;

/** Wire ConversationNavListItem peers once companions land. */
export function setConversationNavListItemPeers(
  next: ConversationNavListItemPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mo` / internal `Lzl`.
 */
export function ConversationNavListItem(props: unknown) {
  const Rzl = peers.Rzl;
  const Z = peers.Z;
  const Xh = peers.Xh;
  const Eg = peers.eg;
  const TRl = peers.tRl;
  if (peers == null) {
    throw new Error("ConversationNavListItem peers are not configured");
  }
  let {
      conversationId,
      displayCwd,
      icon,
      onSelect,
      onClick,
      onBeforeNavigate,
      onDoubleClick,
      isActive = false,
      isGrouped = false,
      envIconLocation,
      useStableTrailingRail = false,
      statusIndicatorReplacesMeta = false,
      hideStatusIndicator = false,
      hideInlineBadgesOnHover = false,
      idleIndicatorNode,
      idleStatusIndicatorNode: _,
      statusIndicatorOverride,
      indicatorRestNode,
      indicatorHoverNode,
      reserveLeadingSlot = false,
      additionalHoverActionCount = 0,
      priorityIndicatorNode,
      onContextMenu,
      renderActions,
      metaHidden = false,
      extraIconBadges,
      floatStatusIconsRight = false,
      onArchiveStart,
      onArchiveSuccess,
      onArchiveError,
      onActiveArchiveStart,
      variant,
      titleOverride,
      titlePrefix,
      hoverLabel,
      titleSuffix,
      hoverCardSections,
      hoverCardHostConfig,
      disableHoverCard = false,
      forceLoadingIndicator = false,
      attentionIndicatorOnly = false,
      blurOnClick = false,
      hasPendingChildApproval = false,
      hideRemoteHostEnvIcon = false,
      disableEnvTooltip,
      disabled = false,
      allowActionsWhenDisabled = false,
      isAutomationRun = false,
      isProjectlessHoverCard = false,
      isUnread,
      hasAttachedHeartbeatAutomation = false,
      heartbeatAutomationTooltipContent,
      metaContent,
      overlayMetaContent,
      hoverCardProjectFallbackIcon,
      hoverCardProjectId,
      hoverCardProjectLabel,
      hoverCardRepositoryLabel,
      isWorkTaskHoverCard = false,
      threadSummary = null,
      dataAttributes,
    } = props,
    Re = peers.Io(peers.Q),
    ze = peers.Ju(),
    Be = peers.Fo(peers.iD, conversationId),
    Ve = peers.Fo(peers.bnr, conversationId) ?? threadSummary?.createdAt,
    He = peers.Fo(peers.oD, conversationId),
    Ue = displayCwd ?? He ?? threadSummary?.cwd ?? null,
    We = peers.Fo(peers.LAr, conversationId) ?? threadSummary?.hasUnreadTurn,
    Ge = peers.Fo(peers.Dnr, conversationId),
    Ke = peers.Fo(peers.rD, conversationId) ?? threadSummary?.hostId ?? null;
  peers.Fo(peers.fD, conversationId) ?? threadSummary?.modelProvider;
  let qe = peers.SM(Ke ?? "local"),
    Je = peers.Fo(peers.KAr, conversationId),
    Ye = peers.Fo(peers.mD, conversationId),
    Xe = Ke ?? "local",
    Ze = {
      conversationId,
      hostId: Xe,
    };
  let Qe = peers.Fo(peers.FQ, Ze),
    $e = peers.Fo(peers.GAr, conversationId),
    J = peers.Fo(peers.znr, conversationId) ?? threadSummary?.source,
    et = peers.Fo(peers.JAr, conversationId) ?? threadSummary?.title ?? null,
    tt = peers.eOt(
      peers.Fo(peers.Vnr, conversationId) ?? threadSummary?.threadSource,
      et,
    ),
    nt = {
      onActiveArchiveStart,
      onArchiveStart,
      onArchiveSuccess,
      onArchiveError,
    };
  let {
      archived,
      usesExternalArchiveHandling,
      beginArchive,
      handleArchiveSuccess,
      handleArchiveError,
      restoreArchivedRow,
    } = peers.Nzl(nt),
    lt = peers.BUa(),
    ut = peers.fg(J);
  let dt = lt && ut?.parentThreadId != null,
    ft = $e;
  (Je === "response" || (attentionIndicatorOnly && ft === "loading")) &&
    (ft = "idle");
  let pt = <Rzl title={et} titleOverride={titleOverride} />;
  let mt = pt,
    [ht, gt] = peers.Bzl.useState(false),
    _t = forceLoadingIndicator
      ? {
          type: "loading",
        }
      : {
          type: ft,
          unread: dt
            ? false
            : (isUnread ?? We === true) ||
              (attentionIndicatorOnly &&
                ((Ge ?? 0) > 0 || Je != null || hasPendingChildApproval)),
          unreadCount: dt || attentionIndicatorOnly ? 0 : (Ge ?? 0),
        };
  let vt = _t,
    yt = () => {
      beginArchive(isActive);
      let e = dt
        ? null
        : peers.$So(Re, {
            archiveSource: "recent_tasks_menu",
            conversationId,
            hostId: Ke ?? "local",
            onRedoError: handleArchiveError,
            onRedoStart: beginArchive,
            onRedoSuccess: () => {
              handleArchiveSuccess();
            },
            onUndoSuccess: restoreArchivedRow,
          });
      peers
        .Bf("archive-conversation", {
          conversationId,
          hostId: Ke ?? undefined,
          source: "recent_tasks_menu",
        })
        .then(() => {
          const Ll = peers._Ll;
          handleArchiveSuccess();
          let t = e?.commit() === true,
            n = () => {
              peers.Jf.dispatchHostMessage({
                type: "navigate-to-route",
                path: "/settings/data-controls",
              });
            };
          if (t && e != null) {
            let t = Re.get(peers.rh).info(
              <Ll onUndo={e.undo} onOpenSettings={n} />,
              {
                duration: peers.TDe / 1e3,
                id: "archive-thread",
              },
            );
            e.attachDismiss(t.close);
          }
        })
        .catch(() => {
          e?.discard();
          handleArchiveError();
          Re.get(peers.rh).danger(
            ze.formatMessage({
              id: "localTaskRow.archiveError",
              defaultMessage: "Failed to archive conversation",
              description:
                "Error message when archiving a local Codex conversation",
            }),
          );
        });
    };
  let bt = yt,
    xt =
      Je === "approval" || hasPendingChildApproval
        ? {
            id: "awaiting-approval",
            label: (
              <Z
                id="codex.localTaskRow.awaitingApproval"
                defaultMessage="Awaiting approval"
                description="Chip indicating a local task is waiting for user approval"
              />
            ),
          }
        : null,
    St = xt == null ? [] : [xt],
    Ct = Ye?.type === "userInput" ? Ye : null,
    wt = Ct != null && Qe?.requestId === Ct.item.requestId ? Qe : null,
    Tt = wt?.resolutionState.status === "scheduled" ? wt.resolutionState : null,
    Et = wt?.resolutionState.status === "scheduled" ? wt.requestId : null,
    Dt =
      Je === "response" && !isActive && !attentionIndicatorOnly
        ? {
            ariaLabel:
              Tt == null
                ? undefined
                : ze.formatMessage(peers.Vzl.snoozeInputTimeout),
            label: (
              <Z
                id="codex.localTaskRow.needsInput"
                defaultMessage="Needs input"
                description="Status pill indicating an inactive local task needs user input"
              />
            ),
            hoverLabel:
              Tt == null ? undefined : <Z {...peers.Vzl.snoozeInputTimeout} />,
            onClick:
              Et == null
                ? undefined
                : () => {
                    peers.gp.requestUserInputAutoResolution.snooze({
                      conversationId,
                      hostId: Ke ?? "local",
                      requestId: Et,
                    });
                  },
            progress:
              Tt == null
                ? undefined
                : {
                    deadlineMs: Tt.deadlineMs,
                    durationMs: peers.mRs,
                  },
          }
        : undefined;
  let Ot = Dt,
    kt =
      isAutomationRun || hasAttachedHeartbeatAutomation
        ? {
            id: "automation",
            icon: <Xh className="shrink-0" />,
            ariaLabel: isAutomationRun
              ? ze.formatMessage({
                  id: "codex.localTaskRow.automation",
                  defaultMessage: "Scheduled task run",
                  description:
                    "Accessible label for the scheduled task run icon",
                })
              : ze.formatMessage({
                  id: "codex.localTaskRow.attachedHeartbeatAutomation",
                  defaultMessage: "Scheduled task attached",
                  description:
                    "Accessible label for the scheduled task icon shown on a task with an attached scheduled task",
                }),
            tooltipContent: hasAttachedHeartbeatAutomation
              ? heartbeatAutomationTooltipContent
              : null,
          }
        : null;
  let At = kt,
    jt = tt
      ? ze.formatMessage({
          id: "codex.localTaskRow.voiceChat",
          defaultMessage: "Voice chat",
          description:
            "Accessible label and tooltip for the waveform icon on voice chat rows",
        })
      : null,
    Mt =
      jt == null
        ? extraIconBadges
        : [
            {
              id: "voice-chat",
              icon: <Eg />,
              ariaLabel: jt,
              tooltipContent: jt,
            },
            ...(extraIconBadges ?? []),
          ];
  let Nt = Mt;
  if (At != null) {
    let e;
    e = Nt == null ? [At] : [...Nt, At];
    Nt = e;
  }
  let Pt = peers.azl({
    codexHome: qe,
    cwd: Ue,
    hideRemoteHostEnvIcon,
    hostId: Ke,
    isGrouped,
  });
  let Ft = Pt,
    It = Ft === "remote" || Ft === "remote-worktree" ? null : Ue,
    Lt = disableHoverCard
      ? null
      : peers.Azl({
          conversationId,
          displayCwd,
          hasAttachedHeartbeatAutomation,
          hasSystemError: vt.type === "error",
          heartbeatAutomationTooltipContent,
          hideRemoteHostEnvIcon,
          hoverCardSections,
          hoverCardHostConfig,
          hoverCardProjectId,
          hoverCardProjectLabel,
          hoverCardRepositoryLabel,
          threadSummary,
          hasUnreadTurn: dt ? false : We === true,
          isAutomationRun,
          isVoiceChat: tt,
          isGrouped,
          isProjectlessHoverCard,
          isWorkTaskHoverCard,
          projectFallbackIcon: hoverCardProjectFallbackIcon,
          shouldFetchHoverBranch: ht,
          threadTitle: mt,
          threadTitleStatusLabel: xt?.label,
        });
  if (
    (archived && !usesExternalArchiveHandling) ||
    (Be !== true && threadSummary == null) ||
    Ve == null
  )
    return null;
  let Rt = typeof titleOverride == "string" ? titleOverride.trim() : "";
  let zt = Rt,
    Bt = titleOverride != null && typeof titleOverride != "string",
    Vt = Bt
      ? undefined
      : (et ??
        (zt.length > 0
          ? zt
          : ze.formatMessage({
              id: "codex.taskRow.title",
              defaultMessage: "New chat",
              description:
                "Default title for a Codex task that doesn't have a title",
            })));
  let Ht = Vt,
    Ut = Ke ?? undefined,
    Wt = () => {
      peers.lnc(Re, peers.LA(conversationId));
      onBeforeNavigate?.();
      peers.p3o(Re, conversationId);
      peers.Bzl.startTransition(() => {
        onSelect?.();
        onClick?.();
      });
    };
  let Gt = Nt,
    Kt = variant === "tableRow" ? "bottom" : undefined,
    qt = variant === "tableRow" ? "end" : undefined,
    Jt = variant === "tableRow" ? -36 : undefined,
    Yt = ze.formatMessage({
      id: "codex.localTaskRow.archiveTask",
      defaultMessage: "Archive chat",
      description: "Label for archiving a local task",
    });
  let Xt = (
    <Z
      id="codex.localTaskRow.confirmArchiveTask"
      defaultMessage="Confirm"
      description="Confirmation button for archiving a local task"
    />
  );
  return (
    <TRl
      icon={icon}
      hostId={Ut}
      isActive={isActive}
      idleIndicatorNode={idleIndicatorNode}
      idleStatusIndicatorNode={_}
      statusIndicatorOverride={statusIndicatorOverride}
      indicatorRestNode={indicatorRestNode}
      indicatorHoverNode={indicatorHoverNode}
      reserveLeadingSlot={reserveLeadingSlot}
      additionalHoverActionCount={additionalHoverActionCount}
      priorityIndicatorNode={priorityIndicatorNode}
      variant={variant}
      onContextMenu={onContextMenu}
      onClick={Wt}
      onDoubleClick={onDoubleClick}
      disabled={disabled}
      allowActionsWhenDisabled={allowActionsWhenDisabled}
      statusState={vt}
      statusIndicatorReplacesMeta={statusIndicatorReplacesMeta}
      hideStatusIndicator={hideStatusIndicator}
      useStableTrailingRail={useStableTrailingRail}
      envType={Ft}
      envIconLocation={envIconLocation}
      disableEnvTooltip={disableEnvTooltip}
      envTooltip={It}
      hoverCardContent={Lt}
      blurOnClick={blurOnClick}
      title={mt}
      ariaLabel={Ht}
      titlePrefix={titlePrefix}
      hoverLabel={hoverLabel}
      titleSuffix={titleSuffix}
      chips={St}
      statusPill={Ot}
      iconBadges={Gt}
      floatStatusIconsRight={floatStatusIconsRight}
      hideInlineBadgesOnHover={hideInlineBadgesOnHover}
      metaHidden={metaHidden}
      metaContent={metaContent}
      overlayMetaContent={overlayMetaContent}
      onArchive={bt}
      onHoverCardOpenChange={gt}
      hoverCardSide={Kt}
      hoverCardAlign={qt}
      hoverCardSideOffset={Jt}
      dataAttributes={dataAttributes}
      archiveAriaLabel={Yt}
      archiveConfirmLabel={Xt}
      renderActions={renderActions}
    />
  );
}
