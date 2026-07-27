// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `O_` / export `est` — MCP JSON-RPC Result base (`{ _meta? }`).
// Bundle `qwt` / export `$ot` — tools/call result (content | toolResult).

import { z } from "zod";

/** Bundle `O_` / export `est`. */
export const mcpResultSchema = z.object({
  _meta: z.record(z.string(), z.unknown()).optional(),
});

const mcpContentBlockSchema = z.unknown();

/** Bundle `qwt` / export `$ot` — CallToolResult-shaped schema. */
export const mcpCallToolResultSchema = mcpResultSchema
  .extend({
    content: z.array(mcpContentBlockSchema).default([]),
    structuredContent: z.record(z.string(), z.unknown()).optional(),
    isError: z.boolean().optional(),
  })
  .or(
    mcpResultSchema.extend({
      toolResult: z.unknown(),
    }),
  );

export type McpResult = z.infer<typeof mcpResultSchema>;
export type McpCallToolResult = z.infer<typeof mcpCallToolResultSchema>;
