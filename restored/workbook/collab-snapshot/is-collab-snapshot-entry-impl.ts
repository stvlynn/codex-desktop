// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: collab snapshot entry predicate (legacy workbookHelper376).
// Stage-3 wave-142; renamed primary export wave-144.

export function isCollabSnapshotEntry(csIn8631: any) {
  if (!csIn8631 || typeof csIn8631 != "object") return false;
  let csBind19132 = csIn8631;
  return (
    typeof csBind19132.clock == "number" &&
    (csBind19132.snapshot === undefined ||
      typeof csBind19132.snapshot == "string")
  );
}

export const workbookHelper376 = isCollabSnapshotEntry;
