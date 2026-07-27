// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gac` companion for exports `Lp` / `Ip`.

import { z } from "zod";

/** Zod schema for remembered pull-request host refs (bundle `gac`). */
export const pullRequestHostRefSchema = z.object({
  hostId: z.string().min(1),
  hostname: z.string().min(1),
});

export type PullRequestHostRef = z.infer<typeof pullRequestHostRefSchema>;
