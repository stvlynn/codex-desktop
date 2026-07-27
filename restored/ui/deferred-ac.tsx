// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NAl`) / export `ac`.

export type DeferredAcPeers = {
  DAl: (...args: unknown[]) => unknown;
  EAl: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Qw: (...args: unknown[]) => unknown;
  ZKn: (...args: unknown[]) => unknown;
  _8: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  g8: (...args: unknown[]) => unknown;
  gAl: (...args: unknown[]) => unknown;
  jAl: (...args: unknown[]) => unknown;
  rIc: (...args: unknown[]) => unknown;
};
let peers: DeferredAcPeers | null = null;

/** Wire deferredAc peers once companions land. */
export function setDeferredAcPeers(next: DeferredAcPeers): void {
  peers = next;
}

/**
 * Bundle export `ac` / internal `NAl`.
 */
export function deferredAc() {
  if (peers == null) {
    throw new Error("deferredAc peers are not configured");
  }
  return peers.g8.memo(function (props) {
    const GAl = peers.gAl;
    let {
        activitySummaryWithoutAssistant,
        hideUserMessageActions,
        voiceWorkActivity,
        conversationId,
        hostId,
        turnSearchKey,
        turn,
        turnState,
        turnRequests,
        preserveServerUserMessages = false,
        isBackgroundSubagentsEnabled = false,
        conversationDetailLevel,
        cwd,
        isMostRecentTurn = false,
        isReadOnly = false,
        totalTurnCount: _,
        turnNumber,
        projectlessOutputDirectory = null,
        isCollapsed,
        onSetCollapsed,
        emptyUserMessageOverride,
        parentThreadAttachment,
        onEditLastTurnMessage,
        onForkTurnMessage,
        completedThreadGoal,
        generatedImages,
        renderMcpApps,
        supersededMcpAppWidgetCallIds,
        threadHandoffOperation,
        reportEntityType = "thread",
        startAfterTurnIntro = false,
        showInProgressFixedContent = true,
        deferOffscreenDiffRendering = false,
        resolvedApps,
        isAeonThread = false,
        modelProvider,
        transcriptBlock,
        includeEndResources,
        includeTranscriptTurnExtras,
        latestTurnFollowContentRef,
        onOpenAeonDetails,
        showFullTranscript = false,
      } = props,
      te =
        supersededMcpAppWidgetCallIds === undefined
          ? peers.jAl
          : supersededMcpAppWidgetCallIds,
      ce =
        turnState ??
        peers.Qw(turn, turnRequests ?? peers.DAl, {
          isBackgroundSubagentsEnabled,
          preserveServerUserMessages,
        });
    let le = ce,
      ue;
    bb0: {
      if (te.size === 0) {
        ue = le;
        break bb0;
      }
      let e, n;
      e = false;
      n = le.items.map((item) => {
        return item.type !== "mcp-tool-call" || !te.has(item.callId)
          ? item
          : ((e = true),
            {
              ...item,
              isMcpAppWidgetSuperseded: true,
            });
      });
      let r = n,
        i;
      i = e
        ? {
            ...le,
            items: r,
          }
        : le;
      ue = i;
    }
    let de = ue,
      fe = peers.Fo(peers.rIc, conversationId),
      pe = turn.params.clientUserMessageId ?? null,
      me = peers.ZKn(turn) ? null : (turn.durationMs ?? null),
      he = turn.turnId != null && fe.has(turn.turnId);
    let ge = isMostRecentTurn ? undefined : turnNumber,
      _e = renderMcpApps != null,
      ve = renderMcpApps != null,
      ye = renderMcpApps === "auto-expand",
      be =
        !isMostRecentTurn ||
        onEditLastTurnMessage == null ||
        turn.turnId == null ||
        turn.status === "inProgress"
          ? undefined
          : async (e) => {
              await onEditLastTurnMessage(turn, e);
            };
    let xe =
      onForkTurnMessage == null ||
      turn.turnId == null ||
      turn.status === "inProgress"
        ? undefined
        : () => {
            onForkTurnMessage(turn);
          };
    return (
      <GAl
        activitySummaryWithoutAssistant={activitySummaryWithoutAssistant}
        hideUserMessageActions={hideUserMessageActions}
        voiceWorkActivity={voiceWorkActivity}
        conversationId={conversationId}
        hostId={hostId}
        turnSearchKey={turnSearchKey}
        turnId={turn.turnId}
        clientUserMessageId={pe}
        mcpTurn={turn}
        turn={de}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
        workedDurationMs={me}
        interruptedByThisClient={he}
        conversationDetailLevel={conversationDetailLevel}
        cwd={cwd}
        isMostRecentTurn={isMostRecentTurn}
        isReadOnly={isReadOnly}
        previousTurnNumber={ge}
        totalTurnCount={_}
        projectlessOutputDirectory={projectlessOutputDirectory}
        isCollapsed={isCollapsed}
        onSetCollapsed={onSetCollapsed}
        emptyUserMessageOverride={emptyUserMessageOverride}
        parentThreadAttachment={parentThreadAttachment}
        resolvedApps={resolvedApps}
        renderMcpApps={_e}
        keepMcpAppEntriesPersistent={ve}
        threadHandoffOperation={threadHandoffOperation}
        reportEntityType={reportEntityType}
        shouldAutoExpandMcpApps={ye}
        deferOffscreenDiffRendering={deferOffscreenDiffRendering}
        onEditUserMessage={be}
        onForkTurn={xe}
        completedThreadGoal={completedThreadGoal}
        generatedImages={generatedImages}
        startAfterTurnIntro={startAfterTurnIntro}
        showInProgressFixedContent={showInProgressFixedContent}
        modelProvider={modelProvider}
        transcriptBlock={transcriptBlock}
        includeEndResources={includeEndResources}
        includeTranscriptTurnExtras={includeTranscriptTurnExtras}
        latestTurnFollowContentRef={latestTurnFollowContentRef}
        onOpenAeonDetails={onOpenAeonDetails}
        showFullTranscript={showFullTranscript}
      />
    );
  });
}
