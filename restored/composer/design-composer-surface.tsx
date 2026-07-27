// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UNo`) / export `RO`.

export type DesignComposerSurfacePeers = {
  GNo: (...args: unknown[]) => unknown;
  WNo: (...args: unknown[]) => unknown;
  _q: (...args: unknown[]) => unknown;
  dPo: (...args: unknown[]) => unknown;
};
let peers: DesignComposerSurfacePeers | null = null;

/** Wire DesignComposerSurface peers once companions land. */
export function setDesignComposerSurfacePeers(
  next: DesignComposerSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `RO` / internal `UNo`.
 */
export function DesignComposerSurface(props: unknown) {
  const WNo = peers.WNo;
  const GNo = peers.GNo;
  if (peers == null) {
    throw new Error("DesignComposerSurface peers are not configured");
  }
  let {
    allowImageAttachments = true,
    allowDirectSubmit = true,
    allowEmptySubmit = false,
    defaultCreateSubmitMode = "saved",
    defaultDesignEditorOpen = false,
    defaultExpandedSpacingGroups,
    inputAriaLabel,
    placeholder,
    session,
    browserTabId,
    annotationSelectionAnchors,
    showAdjustEntry = true,
    windowHeight,
    keyboardEventTarget,
    onSubmit,
    onDirectSubmit: _,
    onDesignChangeDelete,
    onDesignChangeUpdate,
    onDesignScrubPropertyChange,
    onAnnotationSelectionRemove,
    onTweaksEditorOpenChange,
    onDelete,
    onCancel,
    onEscape,
    onMounted,
    onBodyChange,
    onAttachmentPreviewOpenChange,
    onLightDismissibilityChange,
  } = props;
  if (session.surfaceMode === "preview") {
    let e;
    return (
      <WNo
        session={session}
        showAdjustEntry={showAdjustEntry}
        windowHeight={windowHeight}
        onMounted={onMounted}
      />
    );
  }
  return (
    <GNo
      session={session}
      browserTabId={browserTabId}
      annotationSelectionAnchors={annotationSelectionAnchors}
      defaultDesignEditorOpen={defaultDesignEditorOpen}
      defaultExpandedSpacingGroups={defaultExpandedSpacingGroups}
      showAdjustEntry={showAdjustEntry}
      windowHeight={windowHeight}
      keyboardEventTarget={keyboardEventTarget}
      onSubmit={onSubmit}
      onDirectSubmit={_}
      onDesignChangeDelete={onDesignChangeDelete}
      onDesignChangeUpdate={onDesignChangeUpdate}
      onDesignScrubPropertyChange={onDesignScrubPropertyChange}
      onAnnotationSelectionRemove={onAnnotationSelectionRemove}
      onTweaksEditorOpenChange={onTweaksEditorOpenChange}
      onDelete={onDelete}
      onCancel={onCancel}
      onEscape={onEscape}
      onMounted={onMounted}
      onBodyChange={onBodyChange}
      onAttachmentPreviewOpenChange={onAttachmentPreviewOpenChange}
      onLightDismissibilityChange={onLightDismissibilityChange}
      allowImageAttachments={allowImageAttachments}
      allowDirectSubmit={allowDirectSubmit}
      allowEmptySubmit={allowEmptySubmit}
      defaultCreateSubmitMode={defaultCreateSubmitMode}
      inputAriaLabel={inputAriaLabel}
      placeholder={placeholder}
    />
  );
}
