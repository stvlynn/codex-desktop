// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oCu` / export `d` (+ companion `cCu`).

export type ChronicleSidecarState =
  | { kind: "preparing" }
  | { kind: "ready" }
  | { kind: "starting" }
  | { kind: "screen-recording-permission-needed"; status: unknown }
  | { kind: "accessibility-permission-needed"; status: unknown }
  | { kind: "failed"; message: string };

function permissionNeeded(status: unknown): boolean {
  return status != null && status !== "granted";
}

/** Resolve Chronicle sidecar readiness / permission UI state. */
export function resolveChronicleSidecarState(args: {
  accessibilityStatus: unknown;
  errorMessage: string | null | undefined;
  isSidecarPresent: boolean;
  isUpdatingChronicle: boolean;
  processState: string | null | undefined;
  screenRecordingStatus: unknown;
}): ChronicleSidecarState {
  const {
    accessibilityStatus,
    errorMessage,
    isSidecarPresent,
    isUpdatingChronicle,
    processState,
    screenRecordingStatus,
  } = args;
  if (errorMessage != null) return { kind: "failed", message: errorMessage };
  if (isUpdatingChronicle) return { kind: "preparing" };
  if (!isSidecarPresent) {
    return {
      kind: "failed",
      message: "Chronicle sidecar binary is missing from app resources.",
    };
  }
  if (permissionNeeded(screenRecordingStatus)) {
    return {
      kind: "screen-recording-permission-needed",
      status: screenRecordingStatus,
    };
  }
  if (permissionNeeded(accessibilityStatus)) {
    return {
      kind: "accessibility-permission-needed",
      status: accessibilityStatus,
    };
  }
  if (
    processState === "running" &&
    screenRecordingStatus === "granted" &&
    accessibilityStatus === "granted"
  ) {
    return { kind: "ready" };
  }
  return { kind: "starting" };
}
