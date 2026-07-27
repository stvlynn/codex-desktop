// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared CI check status unions used by ring / status icon helpers.

export type CiCheckItemStatus =
  | "failing"
  | "neutral"
  | "passing"
  | "pending"
  | "skipped"
  | "unknown";

export type CiCheckItem = {
  status: CiCheckItemStatus;
};

export type CiStatus = "failing" | "none" | "passing" | "pending";

export type CiCheckSegment = {
  color: string;
  key: string;
  ratio: number;
};
