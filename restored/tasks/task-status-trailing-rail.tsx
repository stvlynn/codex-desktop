// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BVl`) / export `yo`.

export type BindTaskStatusTrailingRailPeers = {
  HVl: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  JB: (...args: unknown[]) => unknown;
  JLl: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Nzl: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RA: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  VVl: (...args: unknown[]) => unknown;
  YLl: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _Ll: (...args: unknown[]) => unknown;
  eh: (...args: unknown[]) => unknown;
  f3o: (...args: unknown[]) => unknown;
  f5: (...args: unknown[]) => unknown;
  latest_turn_status_display: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  lnc: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  tRl: (...args: unknown[]) => unknown;
  toISOString: (...args: unknown[]) => unknown;
  turn_status: (...args: unknown[]) => unknown;
  uzl: (...args: unknown[]) => unknown;
  y_: (...args: unknown[]) => unknown;
};
let peers: BindTaskStatusTrailingRailPeers | null = null;

/** Wire bindTaskStatusTrailingRail peers once companions land. */
export function setBindTaskStatusTrailingRailPeers(
  next: BindTaskStatusTrailingRailPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yo` / internal `BVl`.
 */
export function bindTaskStatusTrailingRail(props: unknown) {
  const JB = peers.JB;
  const Z = peers.Z;
  const Uzl = peers.uzl;
  const YLl = peers.YLl;
  const JLl = peers.JLl;
  const TRl = peers.tRl;
  const Eh = peers.eh;
  if (peers == null) {
    throw new Error("bindTaskStatusTrailingRail peers are not configured");
  }
  let {
      task,
      titlePrefix,
      onClose,
      onSelect,
      isActive = false,
      envIconLocation = "end",
      useStableTrailingRail = false,
      statusIndicatorReplacesMeta = false,
      hideStatusIndicator = false,
      idleIndicatorNode,
      indicatorRestNode,
      indicatorHoverNode,
      reserveLeadingSlot = false,
      additionalHoverActionCount = 0,
      renderActions,
      hideInlineBadgesOnHover: _ = false,
      metaHidden = false,
      metaContent,
      overlayMetaContent,
      extraIconBadges,
      floatStatusIconsRight = false,
      hoverCardProjectLabel,
      hoverCardProjectIcon,
      hoverCardRepositoryLabel,
      hoverCardSections,
      contextMenuItems,
      getAdditionalContextMenuItems,
      variant,
      onArchiveStart,
      onArchiveSuccess,
      onArchiveError,
      dataAttributes,
    } = props,
    W = peers.Io(peers.Q),
    G = peers.Ju(),
    K = peers.rt(),
    q,
    ee,
    te;
  {
    ee = () => {
      peers.lnc(W, peers.RA(q));
      onSelect?.();
      onClose();
      peers.f3o(W, `/remote/${q}`);
    };
    let { id, title } = task;
    te = title;
    q = id;
  }
  let ne = task.task_status_display?.latest_turn_status_display?.turn_status,
    re = ne === "in_progress" || ne === "pending",
    ie = ne === "failed",
    ae = task.updated_at ?? task.created_at ?? null,
    oe = ae ? new Date(ae * 1e3) : null,
    se = re ? "loading" : ie ? "error" : "idle",
    ce = metaContent ?? (oe ? <JB dateString={oe.toISOString()} /> : null),
    le = oe ? "default" : re ? "loading" : "default",
    ue = !re && !!oe,
    de = {
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
    } = peers.Nzl(de),
    ve = () => {
      return peers.Uh.safePost("/wham/tasks/{task_id}/archive", {
        parameters: {
          path: {
            task_id: q,
          },
        },
      });
    };
  let ye = () => {
    const Ll = peers._Ll;
    handleArchiveSuccess();
    let e = W.get(peers.rh).info(
      <Ll
        onUndo={() => {
          e.close();
          peers.Uh.safePost("/wham/tasks/{task_id}/recover", {
            parameters: {
              path: {
                task_id: q,
              },
            },
          })
            .then(() => {
              restoreArchivedRow();
              K.invalidateQueries({
                queryKey: ["tasks"],
              });
              K.invalidateQueries({
                queryKey: ["task", q],
              });
            })
            .catch(() => {
              W.get(peers.rh).danger(
                G.formatMessage({
                  id: "cloudTaskRow.unarchiveError",
                  defaultMessage: "Failed to unarchive chat",
                  description:
                    "Error message when undoing a cloud task archive",
                }),
              );
            });
        }}
        onOpenSettings={() => {
          peers.f3o(W, "/settings/data-controls");
        }}
      />,
      {
        id: "archive-task",
      },
    );
    K.invalidateQueries({
      queryKey: ["tasks"],
    });
    K.invalidateQueries({
      queryKey: ["task", q],
    });
  };
  let be = () => {
    handleArchiveError();
    W.get(peers.rh).danger(
      G.formatMessage({
        id: "cloudTaskRow.archiveError",
        defaultMessage: "Failed to archive chat",
        description: "Error message when archiving a Codex task",
      }),
    );
  };
  let xe = {
    mutationFn: ve,
    onSuccess: ye,
    onError: be,
  };
  let Se = peers.qt(xe),
    Ce = () => {
      beginArchive(false);
      Se.mutate();
    };
  let we = Ce;
  if (archived && !usesExternalArchiveHandling) return null;
  let Te = te ?? "",
    Ee = peers.y_(Te);
  let De = Ee,
    Oe = De || <Z {...peers.HVl.defaultTaskTitle} />;
  let ke = Oe,
    Ae = De || G.formatMessage(peers.HVl.defaultTaskTitle);
  let je = Ae,
    Me =
      hoverCardProjectLabel != null && hoverCardProjectLabel !== "" ? (
        <Uzl
          projectLabel={hoverCardProjectLabel}
          projectIcon={hoverCardProjectIcon}
          repositoryLabel={hoverCardRepositoryLabel}
          sections={[
            {
              id: "environment",
              rows: [
                {
                  id: "environment",
                  icon: <YLl envType="cloud" disableTooltip={true} />,
                  label: <JLl envType="cloud" />,
                },
              ],
            },
            ...(hoverCardSections ?? []),
          ]}
          showUnreadDot={task.has_unread_turn}
          timestampDateString={oe?.toISOString()}
          threadTitle={ke}
        />
      ) : null,
    Ne = {
      type: se,
      unread: task.has_unread_turn,
    };
  let Pe = (statusIndicatorReplacesMeta || re) && metaContent == null,
    Fe = ue ? we : null,
    Ie = G.formatMessage(peers.HVl.archiveTask);
  let Le = (
    <Z
      id="codex.cloudTaskRow.confirmArchiveTask"
      defaultMessage="Confirm"
      description="Confirmation button for archiving a cloud task"
    />
  );
  let Re = variant === "tableRow" ? "bottom" : undefined,
    ze = variant === "tableRow" ? "end" : undefined,
    Be = variant === "tableRow" ? -36 : undefined,
    Ve = (
      <TRl
        isActive={isActive}
        onClick={ee}
        idleIndicatorNode={idleIndicatorNode}
        indicatorRestNode={indicatorRestNode}
        indicatorHoverNode={indicatorHoverNode}
        reserveLeadingSlot={reserveLeadingSlot}
        additionalHoverActionCount={additionalHoverActionCount}
        variant={variant}
        statusState={Ne}
        statusIndicatorReplacesMeta={Pe}
        hideStatusIndicator={hideStatusIndicator}
        useStableTrailingRail={useStableTrailingRail}
        envType="cloud"
        envIconLocation={envIconLocation}
        title={ke}
        ariaLabel={je}
        titlePrefix={titlePrefix}
        hoverCardContent={Me}
        iconBadges={extraIconBadges}
        floatStatusIconsRight={floatStatusIconsRight}
        hideInlineBadgesOnHover={_}
        metaHidden={metaHidden}
        metaContent={ce}
        overlayMetaContent={overlayMetaContent}
        metaState={le}
        onArchive={Fe}
        archiveAriaLabel={Ie}
        archiveConfirmLabel={Le}
        renderActions={renderActions}
        hoverCardSide={Re}
        hoverCardAlign={ze}
        hoverCardSideOffset={Be}
        dataAttributes={dataAttributes}
      />
    );
  let He = Ve;
  if (
    (contextMenuItems === undefined &&
      getAdditionalContextMenuItems === undefined) ||
    (getAdditionalContextMenuItems === undefined &&
      contextMenuItems?.length === 0 &&
      !ue)
  )
    return He;
  let Ue = () => {
    let e = [
      ...(contextMenuItems ?? []),
      ...(getAdditionalContextMenuItems?.() ?? []),
    ];
    return (
      ue &&
        e.push({
          id: "archive-task",
          message: peers.HVl.archiveTask,
          onSelect: we,
        }),
      e
    );
  };
  let We = Ue;
  return <Eh getItems={We}>{He}</Eh>;
}
