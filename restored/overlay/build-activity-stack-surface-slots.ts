// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qge` / export `egt`.

import { VOICE_SURFACE_IDS } from "../voice/voice-surface-ids";

export type ActivityStackSlotPresentation = {
  slotId: string;
  visibleRect: { height: number };
};

export type ActivityStackSurfaceSlot = {
  acceptsPointerEvents: boolean;
  id: string;
  presentationOffset: { x: number; y: number };
};

/** Build overlay surface slots from activity-stack + chrome flags. */
export function buildActivityStackSurfaceSlots(args: {
  activityStackPresentation: {
    slots: readonly ActivityStackSlotPresentation[];
  };
  isNotificationStackExpanded: boolean;
  isQuickChatVisible: boolean;
  showsRealtimeCaption: boolean;
  showsNotificationBadge: boolean;
  showsVoiceControls: boolean;
  showsVoiceStatus?: boolean;
}): ActivityStackSurfaceSlot[] {
  const {
    activityStackPresentation,
    isNotificationStackExpanded,
    isQuickChatVisible,
    showsRealtimeCaption,
    showsNotificationBadge,
    showsVoiceControls,
    showsVoiceStatus = false,
  } = args;
  const slots: ActivityStackSurfaceSlot[] = activityStackPresentation.slots.map(
    ({ slotId, visibleRect }, index) => ({
      acceptsPointerEvents:
        visibleRect.height > 0 && (isNotificationStackExpanded || index === 0),
      id: slotId,
      presentationOffset: { x: 0, y: 0 },
    }),
  );
  if (isQuickChatVisible) {
    slots.push({
      acceptsPointerEvents: true,
      id: "composer",
      presentationOffset: { x: 0, y: 0 },
    });
  }
  if (showsRealtimeCaption) {
    slots.push({
      acceptsPointerEvents: false,
      id: "realtime-caption",
      presentationOffset: { x: 0, y: 0 },
    });
  }
  if (showsVoiceStatus) {
    slots.push({
      acceptsPointerEvents: false,
      id: "voice-status",
      presentationOffset: { x: 0, y: 0 },
    });
  }
  if (showsVoiceControls) {
    for (const id of VOICE_SURFACE_IDS) {
      slots.push({
        acceptsPointerEvents: true,
        id,
        presentationOffset: { x: 0, y: 0 },
      });
    }
  }
  if (showsNotificationBadge || showsVoiceControls) {
    slots.push({
      acceptsPointerEvents: showsNotificationBadge,
      id: "mascot-badge",
      presentationOffset: { x: 0, y: 0 },
    });
  }
  return slots;
}
