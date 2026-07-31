// Restored from ref/webview/assets/share-invite-autocomplete-CSfuQIPj.js
// Share-invite autocomplete shared types.

import type { ReactNode } from "react";

export type ShareInviteOption = {
  id: string;
  label: string;
  chipLabel?: string;
  secondaryLabel?: string;
  imageUrl?: string;
  Icon?: (props: { "aria-hidden"?: boolean; className?: string }) => ReactNode;
};

export type ShareInviteOptionSection = {
  id: string;
  label: string;
  options: ShareInviteOption[];
};
