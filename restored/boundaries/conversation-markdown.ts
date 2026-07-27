// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.
// Flat boundary facade — vendored oversized conversation markdown runtime module.

import { esmInit } from "../runtime/rolldown-runtime";
import { quoteShellArgs } from "../utils/quote-shell-args";
import {
  isAbsoluteWorkspacePath,
  toPosixPath,
  normalizePathKey,
  identityCwd,
  isUnderProjectlessOutput,
} from "../utils/workspace-paths";
import { formatFileChangeDiff } from "../utils/format-file-change-diff";
import { stripPrivateUseMentionMarkers } from "../composer/strip-private-use-mention-markers";
import { rewriteFileCitationMarkers } from "../markdown/rewrite-file-citation-markers";
import { stripWritingDirectiveBlocks } from "../markdown/strip-writing-directive-blocks";
import { stripCodexVisDirectives } from "../markdown/strip-codex-vis-directives";
import { partitionTurnItems } from "../conversation/partition-turn-items";
import { groupClassifiedAgentItems } from "../conversation/group-classified-agent-items";
import { buildRenderableAgentItems } from "../conversation/build-renderable-agent-items";
import { summarizeAgentToolActivity } from "../conversation/summarize-agent-tool-activity";
export type ConversationMarkdownInput = {
  cwd?: string | null;
  projectlessOutputDirectory?: string | null;
  title?: string | null;
  turns: Array<{
    cwd?: string | null;
    status?: string;
    items: unknown[];
    [key: string]: unknown;
  }>;
};
export function conversationMarkdown({
  cwd = null,
  projectlessOutputDirectory = null,
  title,
  turns,
}: ConversationMarkdownInput) {
  let conversationMarkdownBinding34 = [],
    conversationMarkdownBinding35 = conversationMarkdownHelper43(cwd);
  conversationMarkdownBinding34.push(
    `# ${conversationMarkdownHelper27(title ?? "Codex conversation")}`,
  );
  for (let conversationMarkdownBinding81 of turns) {
    let conversationMarkdownBinding86 = conversationMarkdownHelper1(
      conversationMarkdownBinding81,
      cwd,
      conversationMarkdownBinding35,
      projectlessOutputDirectory,
    );
    conversationMarkdownBinding86 != null &&
      conversationMarkdownBinding34.push(conversationMarkdownBinding86);
  }
  return `${conversationMarkdownBinding34.join("\n\n").trimEnd()}\n`;
}
function conversationMarkdownHelper1(
  conversationMarkdownInput3,
  conversationMarkdownInput4,
  conversationMarkdownInput5,
  conversationMarkdownInput6,
) {
  let conversationMarkdownBinding6 = [],
    conversationMarkdownBinding7 =
      conversationMarkdownInput3.cwd == null
        ? conversationMarkdownInput5
        : conversationMarkdownHelper43(conversationMarkdownInput3.cwd),
    conversationMarkdownBinding8 =
      conversationMarkdownInput6 == null
        ? undefined
        : (conversationMarkdownInput52) =>
            isUnderProjectlessOutput({
              cwd:
                conversationMarkdownInput3.cwd ??
                (conversationMarkdownInput4 == null
                  ? null
                  : identityCwd(conversationMarkdownInput4)),
              projectlessOutputDirectory: conversationMarkdownInput6,
              resourcePath: conversationMarkdownInput52,
            }),
    {
      userItems,
      assistantItem,
      agentItems,
      automationUpdateItems,
      toolOutputItems,
      postAssistantItems,
      systemEventItem,
      remoteTaskCreatedItems,
      personalityChangedItems,
      forkedFromConversationItems,
      modelChangedItems,
      modelReroutedItems: conversationMarkdownBinding9,
      todoListItem,
      proposedPlanItem,
      planImplementationItem,
      mcpServerElicitationItems,
      permissionRequestItems,
      approvalItem: _conversationMarkdown,
      userInputItem,
    } = partitionTurnItems(
      conversationMarkdownBinding8 == null
        ? conversationMarkdownInput3.items
        : conversationMarkdownInput3.items.map((item) =>
            item.type === "assistant-message"
              ? {
                  ...item,
                  content: rewriteFileCitationMarkers(
                    item.content,
                    conversationMarkdownBinding8,
                  ),
                }
              : item,
          ),
      conversationMarkdownInput3.status,
    );
  for (let conversationMarkdownBinding92 of modelChangedItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper2(
        conversationMarkdownBinding92,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding90 of userItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper3(
        conversationMarkdownBinding90,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding93 of conversationMarkdownBinding9)
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper2(
        conversationMarkdownBinding93,
        conversationMarkdownBinding7,
      ),
    );
  let conversationMarkdownBinding10 = [];
  for (let conversationMarkdownBinding88 of groupClassifiedAgentItems(
    agentItems,
  ))
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper16(
        conversationMarkdownBinding88,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding94 of automationUpdateItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        conversationMarkdownBinding94,
        conversationMarkdownBinding7,
      ),
    );
  systemEventItem != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        systemEventItem,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding95 of toolOutputItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        conversationMarkdownBinding95,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding89 of groupClassifiedAgentItems(
    postAssistantItems,
  ))
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper16(
        conversationMarkdownBinding89,
        conversationMarkdownBinding7,
      ),
    );
  todoListItem != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(todoListItem, conversationMarkdownBinding7),
    );
  proposedPlanItem != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        proposedPlanItem,
        conversationMarkdownBinding7,
      ),
    );
  planImplementationItem != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        planImplementationItem,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding96 of mcpServerElicitationItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        conversationMarkdownBinding96,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding97 of permissionRequestItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        conversationMarkdownBinding97,
        conversationMarkdownBinding7,
      ),
    );
  _conversationMarkdown != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(
        _conversationMarkdown,
        conversationMarkdownBinding7,
      ),
    );
  userInputItem != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding10,
      conversationMarkdownHelper2(userInputItem, conversationMarkdownBinding7),
    );
  conversationMarkdownBinding10.length > 0 &&
    conversationMarkdownBinding6.push(
      conversationMarkdownHelper29(
        conversationMarkdownHelper53(conversationMarkdownBinding10.length),
        conversationMarkdownBinding10.join("\n\n"),
      ),
    );
  assistantItem != null &&
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper6(assistantItem, {
        pathContext: conversationMarkdownBinding7,
      }),
    );
  for (let conversationMarkdownBinding98 of remoteTaskCreatedItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper2(
        conversationMarkdownBinding98,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding91 of personalityChangedItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper2(
        conversationMarkdownBinding91,
        conversationMarkdownBinding7,
      ),
    );
  for (let conversationMarkdownBinding99 of forkedFromConversationItems)
    conversationMarkdownHelper25(
      conversationMarkdownBinding6,
      conversationMarkdownHelper2(
        conversationMarkdownBinding99,
        conversationMarkdownBinding7,
      ),
    );
  return conversationMarkdownBinding6.length === 0
    ? null
    : conversationMarkdownBinding6.join("\n\n");
}
function conversationMarkdownHelper2(
  conversationMarkdownInput1,
  conversationMarkdownInput2,
) {
  switch (conversationMarkdownInput1.type) {
    case "user-message":
      return conversationMarkdownHelper4(conversationMarkdownInput1, {
        escapeDetailsTags: true,
        pathContext: conversationMarkdownInput2,
      });
    case "assistant-message":
      return conversationMarkdownHelper6(conversationMarkdownInput1, {
        escapeDetailsTags: true,
        pathContext: conversationMarkdownInput2,
      });
    case "reasoning":
      return null;
    case "proposed-plan":
      return conversationMarkdownHelper23(
        "Plan",
        conversationMarkdownInput1.content,
      );
    case "todo-list":
      return conversationMarkdownHelper10(conversationMarkdownInput1);
    case "exec":
      return conversationMarkdownHelper7(conversationMarkdownInput1);
    case "patch":
      return conversationMarkdownHelper8(conversationMarkdownInput1);
    case "turn-diff":
      return conversationMarkdownHelper9(conversationMarkdownInput1);
    case "web-search":
      return `Searched the web for ${conversationMarkdownHelper48(conversationMarkdownInput1.query)}`;
    case "generated-image":
      return conversationMarkdownHelper15(
        conversationMarkdownInput1.src,
        conversationMarkdownInput1.status,
      );
    case "image-view":
      return conversationMarkdownInput1.imageCount === 1
        ? "Viewed an image"
        : `Viewed ${conversationMarkdownInput1.imageCount} images`;
    case "userInput":
      return conversationMarkdownHelper24(
        conversationMarkdownInput1.completed
          ? "User input request"
          : "User input requested",
        conversationMarkdownInput1.questions.map(
          (item) => `- ${item.question}`,
        ),
      );
    case "user-input-response":
      return conversationMarkdownHelper24(
        "User input response",
        conversationMarkdownInput1.questionsAndAnswers.flatMap((item) => [
          `- ${item.question}`,
          ...item.answers.map((_item) => `  - ${_item}`),
        ]),
      );
    case "mcp-server-elicitation":
      return conversationMarkdownHelper24("MCP server elicitation", [
        conversationMarkdownInput1.completed
          ? "Status: completed"
          : "Status: pending",
        `Action: ${conversationMarkdownInput1.action ?? "none"}`,
      ]);
    case "permission-request":
      return conversationMarkdownHelper24("Permission request", [
        conversationMarkdownInput1.completed
          ? "Status: completed"
          : "Status: pending",
        `Reason: ${conversationMarkdownInput1.reason ?? "Not provided"}`,
        `Response: ${conversationMarkdownInput1.response == null ? "none" : "granted"}`,
      ]);
    case "mcp-tool-call":
      return conversationMarkdownHelper11(conversationMarkdownInput1);
    case "automation-update":
      return conversationMarkdownHelper24("Scheduled task update", [
        `Mode: ${conversationMarkdownInput1.result?.mode ?? "pending"}`,
        `Automation ID: ${conversationMarkdownInput1.result?.automationId ?? "pending"}`,
      ]);
    case "dynamic-tool-call":
      return conversationMarkdownHelper24("Tool call", [
        `Tool: ${conversationMarkdownInput1.tool}`,
        conversationMarkdownInput1.completed
          ? "Status: completed"
          : "Status: running",
      ]);
    case "worktree-init":
      return conversationMarkdownHelper24("Worktree initialization", [
        "Worktree: created",
        conversationMarkdownInput1.setup == null
          ? null
          : `Environment setup: ${conversationMarkdownInput1.setup.outcome}`,
      ]);
    case "automatic-approval-review":
      return conversationMarkdownHelper13(conversationMarkdownInput1);
    case "multi-agent-action":
      return conversationMarkdownHelper24("Subagent action", [
        `Action: ${conversationMarkdownInput1.action}`,
        `Status: ${conversationMarkdownInput1.status}`,
        `Receiver threads: ${conversationMarkdownInput1.receiverThreads.length}`,
        conversationMarkdownInput1.prompt == null
          ? null
          : `Prompt: ${conversationMarkdownInput1.prompt}`,
      ]);
    case "subagent-activity":
      return null;
    case "plan-implementation":
      return conversationMarkdownHelper24("Plan implementation", [
        conversationMarkdownInput1.isCompleted
          ? "Status: completed"
          : "Status: running",
        conversationMarkdownInput1.planContent,
      ]);
    case "remote-task-created":
      return conversationMarkdownHelper24("Remote task created", [
        `Task ID: ${conversationMarkdownInput1.taskId}`,
      ]);
    case "context-compaction":
      return conversationMarkdownHelper24("Context compaction", [
        `Source: ${conversationMarkdownInput1.source}`,
        conversationMarkdownInput1.completed
          ? "Status: completed"
          : "Status: running",
      ]);
    case "personality-changed":
      return conversationMarkdownHelper24("Personality changed", [
        `Personality: ${conversationMarkdownInput1.personality}`,
      ]);
    case "forked-from-conversation":
      return conversationMarkdownHelper24("Copied conversation", [
        `Source conversation: ${conversationMarkdownInput1.sourceConversationId}`,
      ]);
    case "model-changed":
      return conversationMarkdownHelper24("Model changed", [
        `${conversationMarkdownInput1.fromModel} -> ${conversationMarkdownInput1.toModel}`,
      ]);
    case "model-rerouted":
      return conversationMarkdownHelper24("Model rerouted", [
        `${conversationMarkdownInput1.fromModel} -> ${conversationMarkdownInput1.toModel}`,
        `Reason: ${conversationMarkdownInput1.reason}`,
      ]);
    case "auto-review-interruption-warning":
      return null;
    case "system-error":
      return conversationMarkdownHelper23(
        "System error",
        conversationMarkdownInput1.content,
      );
    case "stream-error":
      return conversationMarkdownHelper24("Stream error", [
        conversationMarkdownInput1.content,
        conversationMarkdownInput1.additionalDetails,
      ]);
    case "realtime-transcript":
      return conversationMarkdownHelper24(
        "Realtime transcript",
        conversationMarkdownInput1.entries.map(
          ({ role, text }) => `${role}: ${text}`,
        ),
      );
    case "steered":
    case "worked-for":
      return null;
  }
}
function conversationMarkdownHelper3(
  conversationMarkdownInput81,
  conversationMarkdownInput82,
) {
  let conversationMarkdownBinding79 = conversationMarkdownHelper4(
    conversationMarkdownInput81,
    {
      pathContext: conversationMarkdownInput82,
    },
  );
  return conversationMarkdownBinding79 == null
    ? null
    : conversationMarkdownHelper30(conversationMarkdownBinding79);
}
function conversationMarkdownHelper4(
  conversationMarkdownInput21,
  {
    escapeDetailsTags = false,
    pathContext = conversationMarkdownBinding2,
  } = {},
) {
  let conversationMarkdownBinding37 = [],
    conversationMarkdownBinding38 = conversationMarkdownHelper32(
      conversationMarkdownInput21.message,
      pathContext,
    ).trim();
  conversationMarkdownBinding38.length > 0 &&
    conversationMarkdownBinding37.push(conversationMarkdownBinding38);
  let conversationMarkdownBinding39 = conversationMarkdownHelper5(
    conversationMarkdownInput21,
    pathContext,
  );
  if (
    (conversationMarkdownBinding39.length > 0 &&
      conversationMarkdownBinding37.push(
        conversationMarkdownHelper24(
          "User context",
          conversationMarkdownBinding39,
        ),
      ),
    conversationMarkdownBinding37.length === 0)
  )
    return null;
  let conversationMarkdownBinding40 =
    conversationMarkdownBinding37.join("\n\n");
  return escapeDetailsTags
    ? conversationMarkdownHelper47(conversationMarkdownBinding40)
    : conversationMarkdownBinding40;
}
function conversationMarkdownHelper5(
  conversationMarkdownInput7,
  conversationMarkdownInput8,
) {
  let conversationMarkdownBinding11 = [];
  if (conversationMarkdownInput7.attachments.length > 0) {
    conversationMarkdownBinding11.push("Attachments:");
    for (let conversationMarkdownBinding84 of conversationMarkdownInput7.attachments)
      conversationMarkdownBinding11.push(
        `- ${conversationMarkdownBinding84.label}: ${conversationMarkdownHelper37(conversationMarkdownBinding84.path, conversationMarkdownInput8)}`,
      );
  }
  if (conversationMarkdownInput7.images.length > 0) {
    conversationMarkdownBinding11.push("Images:");
    for (let conversationMarkdownBinding87 of conversationMarkdownInput7.images)
      conversationMarkdownBinding11.push(
        `- ${conversationMarkdownHelper37(conversationMarkdownBinding87, conversationMarkdownInput8)}`,
      );
  }
  if (
    conversationMarkdownInput7.comments != null &&
    conversationMarkdownInput7.comments.length > 0
  ) {
    conversationMarkdownBinding11.push("Comments:");
    for (let conversationMarkdownBinding46 of conversationMarkdownInput7.comments) {
      let conversationMarkdownBinding56 =
        conversationMarkdownBinding46.lineRange == null
          ? ""
          : ` ${conversationMarkdownHelper48(conversationMarkdownBinding46.lineRange)}`;
      conversationMarkdownBinding11.push(
        `- ${conversationMarkdownHelper40(conversationMarkdownBinding46.path, conversationMarkdownInput8)}${conversationMarkdownBinding56}: ${conversationMarkdownHelper31(conversationMarkdownBinding46.body).replaceAll("\n", " ")}`,
      );
    }
  }
  return (
    conversationMarkdownInput7.referencesPriorConversation &&
      conversationMarkdownBinding11.push("Referenced prior conversation"),
    conversationMarkdownInput7.reviewMode &&
      conversationMarkdownBinding11.push("Mode: code review"),
    conversationMarkdownInput7.pullRequestFixMode &&
      conversationMarkdownBinding11.push("Mode: pull request fix"),
    conversationMarkdownInput7.autoResolveSync &&
      conversationMarkdownBinding11.push("Mode: auto resolve merge"),
    conversationMarkdownInput7.pullRequestCheckNames != null &&
      conversationMarkdownInput7.pullRequestCheckNames.length > 0 &&
      conversationMarkdownBinding11.push(
        `Pull request checks: ${conversationMarkdownInput7.pullRequestCheckNames.join(", ")}`,
      ),
    conversationMarkdownInput7.pullRequestMergeConflictNumber !== undefined &&
      conversationMarkdownBinding11.push(
        conversationMarkdownInput7.pullRequestMergeConflictNumber == null
          ? "Pull request merge conflict"
          : `Pull request merge conflict: #${conversationMarkdownInput7.pullRequestMergeConflictNumber}`,
      ),
    conversationMarkdownBinding11
  );
}
function conversationMarkdownHelper6(
  conversationMarkdownInput55,
  {
    escapeDetailsTags = false,
    pathContext = conversationMarkdownBinding2,
  } = {},
) {
  let conversationMarkdownBinding65 = conversationMarkdownHelper32(
    stripWritingDirectiveBlocks(
      stripPrivateUseMentionMarkers(conversationMarkdownInput55.content),
    ),
    pathContext,
  ).trim();
  return conversationMarkdownBinding65.length === 0
    ? null
    : escapeDetailsTags
      ? conversationMarkdownHelper47(conversationMarkdownBinding65)
      : conversationMarkdownBinding65;
}
function conversationMarkdownHelper7(conversationMarkdownInput18) {
  let conversationMarkdownBinding31 = [],
    conversationMarkdownBinding32 = quoteShellArgs(
      conversationMarkdownInput18.cmd,
    );
  conversationMarkdownBinding31.push(
    conversationMarkdownHelper50("bash", `$ ${conversationMarkdownBinding32}`),
  );
  let conversationMarkdownBinding33 =
    conversationMarkdownInput18.output?.aggregatedOutput;
  if (conversationMarkdownBinding33 != null) {
    let conversationMarkdownBinding83 = conversationMarkdownHelper31(
      conversationMarkdownBinding33,
    );
    conversationMarkdownBinding83.trim().length > 0 &&
      conversationMarkdownBinding31.push(
        conversationMarkdownHelper50("text", conversationMarkdownBinding83),
      );
  }
  return (
    conversationMarkdownBinding31.push(
      conversationMarkdownHelper62(conversationMarkdownInput18),
    ),
    conversationMarkdownHelper25(
      conversationMarkdownBinding31,
      conversationMarkdownHelper14(
        conversationMarkdownInput18.automaticApprovalReviews,
      ),
    ),
    conversationMarkdownHelper28(
      `Ran ${conversationMarkdownHelper49(conversationMarkdownBinding32)}`,
      conversationMarkdownBinding31.join("\n\n"),
    )
  );
}
function conversationMarkdownHelper8(conversationMarkdownInput17) {
  let conversationMarkdownBinding30 = Object.entries(
    conversationMarkdownInput17.changes,
  ).flatMap(([conversationMarkdownInput37, conversationMarkdownInput38]) => {
    let conversationMarkdownBinding51 = formatFileChangeDiff(
      conversationMarkdownInput37,
      conversationMarkdownInput38,
    );
    if (
      conversationMarkdownBinding51 == null ||
      conversationMarkdownBinding51.trim().length === 0
    )
      return [];
    let conversationMarkdownBinding52 = conversationMarkdownHelper61(
      conversationMarkdownBinding51,
    );
    return [
      conversationMarkdownHelper28(
        `${conversationMarkdownHelper60(conversationMarkdownInput38.type)} ${conversationMarkdownHelper49(conversationMarkdownInput37)} +${conversationMarkdownBinding52.additions} -${conversationMarkdownBinding52.deletions}`,
        conversationMarkdownHelper50("diff", conversationMarkdownBinding51),
      ),
    ];
  });
  return (
    conversationMarkdownHelper25(
      conversationMarkdownBinding30,
      conversationMarkdownHelper14(
        conversationMarkdownInput17.automaticApprovalReviews,
      ),
    ),
    conversationMarkdownBinding30.length === 0
      ? null
      : conversationMarkdownBinding30.join("\n")
  );
}
function conversationMarkdownHelper9(conversationMarkdownInput101) {
  return conversationMarkdownHelper28(
    "Diff",
    conversationMarkdownHelper50(
      "diff",
      conversationMarkdownInput101.unifiedDiff,
    ),
  );
}
function conversationMarkdownHelper10(conversationMarkdownInput24) {
  let conversationMarkdownBinding41 = [];
  return (
    conversationMarkdownInput24.explanation != null &&
      conversationMarkdownInput24.explanation.trim().length > 0 &&
      conversationMarkdownBinding41.push(
        conversationMarkdownHelper46(
          conversationMarkdownInput24.explanation,
        ).trim(),
      ),
    conversationMarkdownBinding41.push(
      conversationMarkdownInput24.plan
        .map(
          (item) =>
            `- [${conversationMarkdownHelper26(item.status)}] ${conversationMarkdownHelper46(item.step)}`,
        )
        .join("\n"),
    ),
    conversationMarkdownHelper28(
      "Plan",
      conversationMarkdownBinding41.join("\n\n"),
    )
  );
}
function conversationMarkdownHelper11(conversationMarkdownInput10) {
  let conversationMarkdownBinding14 = [];
  if (
    (conversationMarkdownBinding14.push(
      `MCP tool call\n\n${conversationMarkdownHelper46(`${conversationMarkdownInput10.invocation.server}.${conversationMarkdownInput10.invocation.tool}`)}`,
    ),
    conversationMarkdownBinding14.push(
      conversationMarkdownHelper50(
        "json",
        conversationMarkdownHelper52(
          conversationMarkdownInput10.invocation.arguments,
        ),
      ),
    ),
    conversationMarkdownHelper25(
      conversationMarkdownBinding14,
      conversationMarkdownHelper14(
        conversationMarkdownInput10.automaticApprovalReviews,
      ),
    ),
    conversationMarkdownInput10.result == null)
  )
    return (
      conversationMarkdownBinding14.push(
        conversationMarkdownInput10.completed
          ? "Result: none"
          : "Status: running",
      ),
      conversationMarkdownBinding14.join("\n\n")
    );
  if (conversationMarkdownInput10.result.type === "error")
    return (
      conversationMarkdownBinding14.push(
        conversationMarkdownHelper46(
          `Error: ${conversationMarkdownInput10.result.error}`,
        ),
      ),
      conversationMarkdownBinding14.join("\n\n")
    );
  let conversationMarkdownBinding15 = conversationMarkdownInput10.result.content
    .map(conversationMarkdownHelper12)
    .filter((item) => item.length > 0)
    .join("\n\n");
  return (
    conversationMarkdownBinding15.length > 0 &&
      conversationMarkdownBinding14.push(conversationMarkdownBinding15),
    conversationMarkdownInput10.result.structuredContent != null &&
      conversationMarkdownBinding14.push(
        conversationMarkdownHelper50(
          "json",
          conversationMarkdownHelper52(
            conversationMarkdownInput10.result.structuredContent,
          ),
        ),
      ),
    conversationMarkdownBinding14.join("\n\n")
  );
}
function conversationMarkdownHelper12(conversationMarkdownInput15) {
  switch (conversationMarkdownInput15.type) {
    case "text":
      return conversationMarkdownHelper50(
        "text",
        conversationMarkdownInput15.text,
      );
    case "image":
      return conversationMarkdownHelper46(
        `Image output: ${conversationMarkdownInput15.mimeType}`,
      );
    case "audio":
      return conversationMarkdownHelper46(
        `Audio output: ${conversationMarkdownInput15.mimeType}`,
      );
    case "resource_link":
      return conversationMarkdownHelper46(
        `Resource: ${conversationMarkdownInput15.title ?? conversationMarkdownInput15.name ?? conversationMarkdownInput15.uri} (${conversationMarkdownInput15.uri})`,
      );
    case "embedded_resource": {
      let conversationMarkdownBinding44 =
        conversationMarkdownInput15.resource.title ??
        conversationMarkdownInput15.resource.name ??
        conversationMarkdownInput15.resource.uri;
      return conversationMarkdownInput15.resource.text != null &&
        conversationMarkdownInput15.resource.text.trim().length > 0
        ? `${conversationMarkdownHelper46(`Resource: ${conversationMarkdownBinding44}`)}\n\n${conversationMarkdownHelper50("text", conversationMarkdownInput15.resource.text)}`
        : conversationMarkdownHelper46(
            `Resource: ${conversationMarkdownBinding44}`,
          );
    }
    case "unknown":
      return conversationMarkdownHelper50(
        "json",
        conversationMarkdownHelper52(conversationMarkdownInput15.raw),
      );
  }
}
function conversationMarkdownHelper13(conversationMarkdownInput44) {
  return conversationMarkdownHelper24("Auto-review", [
    `Status: ${conversationMarkdownInput44.status}`,
    conversationMarkdownInput44.riskLevel == null
      ? null
      : `Risk: ${conversationMarkdownInput44.riskLevel}`,
    conversationMarkdownInput44.rationale == null
      ? null
      : `Rationale: ${conversationMarkdownInput44.rationale}`,
  ]);
}
function conversationMarkdownHelper14(conversationMarkdownInput95) {
  return conversationMarkdownInput95 == null
    ? null
    : conversationMarkdownInput95
        .map(conversationMarkdownHelper13)
        .join("\n\n");
}
function conversationMarkdownHelper15(
  conversationMarkdownInput58,
  conversationMarkdownInput59,
) {
  return conversationMarkdownInput58 == null
    ? conversationMarkdownHelper24("Generated image", [
        `Status: ${conversationMarkdownInput59}`,
      ])
    : `Generated image\n\n![Generated image](${conversationMarkdownInput58})`;
}
function conversationMarkdownHelper16(
  conversationMarkdownInput11,
  conversationMarkdownInput12,
) {
  if (conversationMarkdownInput11.kind === "standalone")
    return conversationMarkdownHelper2(
      conversationMarkdownInput11.item.item,
      conversationMarkdownInput12,
    );
  let conversationMarkdownBinding16 = conversationMarkdownInput11.items.map(
      ({ item }) => item,
    ),
    { renderableAgentItems } = buildRenderableAgentItems({
      agentItems: conversationMarkdownBinding16,
      isTurnInProgress: false,
      isAnyNonAgentItemInProgress: false,
    }),
    conversationMarkdownBinding17 = renderableAgentItems[0];
  if (
    renderableAgentItems.length === 1 &&
    conversationMarkdownBinding17?.kind === "exploration"
  )
    return conversationMarkdownHelper22(
      conversationMarkdownBinding17,
      conversationMarkdownInput12,
    );
  let conversationMarkdownBinding18 = conversationMarkdownBinding16.filter(
      (item) => item.type === "dynamic-tool-call",
    ).length,
    conversationMarkdownBinding19 = conversationMarkdownHelper55(
      summarizeAgentToolActivity(conversationMarkdownInput11.items)
        .toolActivity,
    ),
    conversationMarkdownBinding20 =
      conversationMarkdownBinding19 === "Tool activity" &&
      conversationMarkdownBinding18 > 0
        ? conversationMarkdownHelper59(conversationMarkdownBinding18)
        : conversationMarkdownBinding19,
    conversationMarkdownBinding21 = renderableAgentItems
      .map((item) =>
        conversationMarkdownHelper17(item, conversationMarkdownInput12),
      )
      .filter((item) => item != null),
    conversationMarkdownBinding22 = conversationMarkdownBinding21.join(
      conversationMarkdownBinding21.every((item) => item.startsWith("- "))
        ? "\n"
        : "\n\n",
    );
  return conversationMarkdownBinding22.length === 0
    ? conversationMarkdownBinding20
    : conversationMarkdownHelper28(
        conversationMarkdownBinding20,
        conversationMarkdownBinding22,
      );
}
function conversationMarkdownHelper17(
  conversationMarkdownInput29,
  conversationMarkdownInput30,
) {
  if (conversationMarkdownInput29.kind === "exploration")
    return conversationMarkdownHelper22(
      conversationMarkdownInput29,
      conversationMarkdownInput30,
    );
  if (
    conversationMarkdownInput29.item.type !== "exec" &&
    conversationMarkdownInput29.item.type !== "patch"
  )
    return conversationMarkdownHelper2(
      conversationMarkdownInput29.item,
      conversationMarkdownInput30,
    );
  let conversationMarkdownBinding45 = conversationMarkdownHelper18(
    conversationMarkdownInput29,
    conversationMarkdownInput30,
  );
  return conversationMarkdownBinding45.length === 0
    ? null
    : conversationMarkdownBinding45.map((item) => `- ${item}`).join("\n");
}
function conversationMarkdownHelper18(
  conversationMarkdownInput25,
  conversationMarkdownInput26,
) {
  return conversationMarkdownInput25.kind === "item"
    ? conversationMarkdownInput25.item.type === "exec"
      ? [
          `Ran ${conversationMarkdownHelper48(_e(conversationMarkdownInput25.item))}`,
          ...conversationMarkdownHelper19(
            conversationMarkdownInput25.item.automaticApprovalReviews,
          ),
        ]
      : conversationMarkdownInput25.item.type === "patch"
        ? [
            ...conversationMarkdownHelper20(
              conversationMarkdownInput25.item,
              conversationMarkdownInput26,
            ),
            ...conversationMarkdownHelper19(
              conversationMarkdownInput25.item.automaticApprovalReviews,
            ),
          ]
        : []
    : [];
}
function conversationMarkdownHelper19(conversationMarkdownInput23) {
  return conversationMarkdownInput23 == null
    ? []
    : conversationMarkdownInput23.flatMap((item) => [
        `Auto-review: ${item.status}`,
        ...(item.riskLevel == null
          ? []
          : [`Auto-review risk: ${item.riskLevel}`]),
        ...(item.rationale == null
          ? []
          : [
              `Auto-review rationale: ${conversationMarkdownHelper46(item.rationale)}`,
            ]),
      ]);
}
function _e(conversationMarkdownInput78) {
  let conversationMarkdownBinding77 =
    conversationMarkdownInput78.parsedCmd.cmd.trim();
  return conversationMarkdownBinding77.length === 0
    ? quoteShellArgs(conversationMarkdownInput78.cmd)
    : conversationMarkdownBinding77;
}
function conversationMarkdownHelper20(
  conversationMarkdownInput19,
  conversationMarkdownInput20,
) {
  let conversationMarkdownBinding36 =
    conversationMarkdownInput19.grantRoot == null
      ? conversationMarkdownInput20
      : conversationMarkdownHelper43(conversationMarkdownInput19.grantRoot);
  return Object.entries(conversationMarkdownInput19.changes).flatMap(
    ([conversationMarkdownInput47, conversationMarkdownInput48]) => {
      let conversationMarkdownBinding58 = formatFileChangeDiff(
        conversationMarkdownInput47,
        conversationMarkdownInput48,
      );
      if (
        conversationMarkdownBinding58 == null ||
        conversationMarkdownBinding58.trim().length === 0
      )
        return [];
      let conversationMarkdownBinding59 = conversationMarkdownHelper61(
        conversationMarkdownBinding58,
      );
      return [
        `${conversationMarkdownHelper21(conversationMarkdownInput48.type)} ${conversationMarkdownHelper38(conversationMarkdownInput47, conversationMarkdownBinding36)} (+${conversationMarkdownBinding59.additions} -${conversationMarkdownBinding59.deletions})`,
      ];
    },
  );
}
function conversationMarkdownHelper21(conversationMarkdownInput60) {
  switch (conversationMarkdownInput60) {
    case "add":
    case "update":
      return "Wrote";
    case "delete":
      return "Deleted";
  }
}
function conversationMarkdownHelper22(
  conversationMarkdownInput33,
  conversationMarkdownInput34,
) {
  let conversationMarkdownBinding47 = conversationMarkdownInput33.items
    .map((item) => be(item, conversationMarkdownInput34))
    .filter((item) => item != null)
    .map((item) => `- ${item}`);
  return conversationMarkdownBinding47.length === 0
    ? null
    : conversationMarkdownHelper28(
        conversationMarkdownHelper54(conversationMarkdownInput33.items),
        conversationMarkdownBinding47.join("\n"),
      );
}
function be(conversationMarkdownInput13, conversationMarkdownInput14) {
  if (conversationMarkdownInput13.type !== "exec") return null;
  let conversationMarkdownBinding23 = conversationMarkdownInput13.parsedCmd,
    conversationMarkdownBinding24 =
      conversationMarkdownInput13.cwd == null
        ? conversationMarkdownInput14
        : conversationMarkdownHelper43(conversationMarkdownInput13.cwd);
  switch (conversationMarkdownBinding23.type) {
    case "read":
      return `Read ${conversationMarkdownHelper37(conversationMarkdownBinding23.path ?? conversationMarkdownBinding23.name, conversationMarkdownBinding24)}`;
    case "search":
      return conversationMarkdownBinding23.query != null &&
        conversationMarkdownBinding23.path != null
        ? `Searched for ${conversationMarkdownHelper48(conversationMarkdownBinding23.query)} in ${conversationMarkdownHelper37(conversationMarkdownBinding23.path, conversationMarkdownBinding24)}`
        : conversationMarkdownBinding23.query == null
          ? "Searched for files"
          : `Searched for ${conversationMarkdownHelper48(conversationMarkdownBinding23.query)}`;
    case "list_files":
      return conversationMarkdownBinding23.path == null
        ? "Listed files"
        : `Listed files in ${conversationMarkdownHelper37(conversationMarkdownBinding23.path, conversationMarkdownBinding24)}`;
    case "format":
    case "test":
    case "lint":
    case "noop":
    case "unknown":
      return conversationMarkdownHelper48(conversationMarkdownBinding23.cmd);
  }
}
function conversationMarkdownHelper23(
  conversationMarkdownInput79,
  conversationMarkdownInput80,
) {
  let conversationMarkdownBinding78 = conversationMarkdownHelper46(
    conversationMarkdownInput80,
  ).trim();
  return conversationMarkdownBinding78.length === 0
    ? null
    : `${conversationMarkdownInput79}\n\n${conversationMarkdownBinding78}`;
}
function conversationMarkdownHelper24(
  conversationMarkdownInput39,
  conversationMarkdownInput40,
) {
  let conversationMarkdownBinding53 = conversationMarkdownInput40.flatMap(
    (item) => {
      if (item == null) return [];
      let conversationMarkdownBinding74 = conversationMarkdownHelper46(item);
      return conversationMarkdownBinding74.trim().length === 0
        ? []
        : [conversationMarkdownBinding74];
    },
  );
  return conversationMarkdownBinding53.length === 0
    ? conversationMarkdownInput39
    : `${conversationMarkdownInput39}\n\n${conversationMarkdownBinding53.join("\n")}`;
}
function conversationMarkdownHelper25(
  conversationMarkdownInput96,
  conversationMarkdownInput97,
) {
  conversationMarkdownInput97 != null &&
    conversationMarkdownInput97.trim().length > 0 &&
    conversationMarkdownInput96.push(conversationMarkdownInput97);
}
function conversationMarkdownHelper26(conversationMarkdownInput57) {
  switch (conversationMarkdownInput57) {
    case "completed":
      return "x";
    case "in_progress":
    case "pending":
      return " ";
  }
}
function conversationMarkdownHelper27(conversationMarkdownInput61) {
  let conversationMarkdownBinding66 = conversationMarkdownInput61
    .replaceAll(/\s+/g, " ")
    .trim();
  return conversationMarkdownBinding66.length === 0
    ? "Codex conversation"
    : conversationMarkdownBinding66.replaceAll("#", "\\#");
}
function conversationMarkdownHelper28(
  conversationMarkdownInput76,
  conversationMarkdownInput77,
) {
  return `<details><summary>${conversationMarkdownInput76}</summary>\n\n${conversationMarkdownHelper31(conversationMarkdownInput77).trim()}\n\n</details>`;
}
function conversationMarkdownHelper29(
  conversationMarkdownInput83,
  conversationMarkdownInput84,
) {
  return `<details><summary>${conversationMarkdownInput83}</summary>\n\n${conversationMarkdownHelper30(conversationMarkdownInput84)}\n</details>`;
}
function conversationMarkdownHelper30(conversationMarkdownInput62) {
  return conversationMarkdownHelper31(conversationMarkdownInput62)
    .trim()
    .split("\n")
    .map((item) => (item.length === 0 ? ">" : `> ${item}`))
    .join("\n");
}
function conversationMarkdownHelper31(conversationMarkdownInput98) {
  return conversationMarkdownInput98.replaceAll(/\r\n?/g, "\n");
}
function conversationMarkdownHelper32(
  conversationMarkdownInput104,
  conversationMarkdownInput105,
) {
  return conversationMarkdownHelper34(
    conversationMarkdownHelper33(
      conversationMarkdownHelper31(
        rewriteFileCitationMarkers(conversationMarkdownInput104),
      ),
    ),
    conversationMarkdownInput105,
  );
}
function conversationMarkdownHelper33(conversationMarkdownInput28) {
  return stripCodexVisDirectives(conversationMarkdownInput28)
    .split("\n")
    .map((item) => {
      let conversationMarkdownBinding75 = item.replaceAll(
        conversationMarkdownBinding1,
        "",
      );
      return conversationMarkdownBinding75.trim().length === 0
        ? ""
        : conversationMarkdownBinding75.trimEnd();
    })
    .join("\n")
    .replaceAll(/\n{3,}/g, "\n\n");
}
function conversationMarkdownHelper34(
  conversationMarkdownInput31,
  conversationMarkdownInput32,
) {
  return conversationMarkdownInput31.replaceAll(
    conversationMarkdownBinding3,
    (
      conversationMarkdownInput49,
      conversationMarkdownInput50,
      conversationMarkdownInput51,
    ) => {
      let conversationMarkdownBinding61 =
          conversationMarkdownInput50.startsWith("<") &&
          conversationMarkdownInput50.endsWith(">"),
        conversationMarkdownBinding62 = conversationMarkdownBinding61
          ? conversationMarkdownInput50.slice(1, -1)
          : conversationMarkdownInput50,
        conversationMarkdownBinding63 = conversationMarkdownHelper35(
          conversationMarkdownBinding62,
          conversationMarkdownInput32,
        );
      return conversationMarkdownBinding63 === conversationMarkdownBinding62
        ? conversationMarkdownInput49
        : `](${conversationMarkdownHelper36(conversationMarkdownBinding63, conversationMarkdownBinding61)}${conversationMarkdownInput51 ?? ""})`;
    },
  );
}
function conversationMarkdownHelper35(
  conversationMarkdownInput91,
  conversationMarkdownInput92,
) {
  let { path } = conversationMarkdownHelper41(conversationMarkdownInput91);
  return isAbsoluteWorkspacePath(path)
    ? conversationMarkdownHelper40(
        conversationMarkdownInput91,
        conversationMarkdownInput92,
      )
    : conversationMarkdownInput91;
}
function conversationMarkdownHelper36(
  conversationMarkdownInput99,
  conversationMarkdownInput100,
) {
  return conversationMarkdownInput100 ||
    /[\s()]/.test(conversationMarkdownInput99)
    ? `<${conversationMarkdownInput99}>`
    : conversationMarkdownInput99;
}
function conversationMarkdownHelper37(
  conversationMarkdownInput108,
  conversationMarkdownInput109,
) {
  return conversationMarkdownHelper48(
    conversationMarkdownHelper40(
      conversationMarkdownInput108,
      conversationMarkdownInput109,
    ),
  );
}
function conversationMarkdownHelper38(
  conversationMarkdownInput106,
  conversationMarkdownInput107,
) {
  return conversationMarkdownHelper48(
    conversationMarkdownHelper39(
      conversationMarkdownInput106,
      conversationMarkdownInput107,
    ),
  );
}
function conversationMarkdownHelper39(
  conversationMarkdownInput45,
  conversationMarkdownInput46,
) {
  let conversationMarkdownBinding57 = conversationMarkdownHelper40(
    conversationMarkdownInput45,
    conversationMarkdownInput46,
  );
  return conversationMarkdownBinding57 === "." ||
    conversationMarkdownBinding57 === "~" ||
    conversationMarkdownBinding57.startsWith("./") ||
    conversationMarkdownBinding57.startsWith("../") ||
    conversationMarkdownBinding57.startsWith("~/") ||
    isAbsoluteWorkspacePath(conversationMarkdownBinding57)
    ? conversationMarkdownBinding57
    : `./${conversationMarkdownBinding57}`;
}
function conversationMarkdownHelper40(
  conversationMarkdownInput35,
  conversationMarkdownInput36,
) {
  let { path, lineSuffix } = conversationMarkdownHelper41(
      conversationMarkdownInput35,
    ),
    conversationMarkdownBinding48 = toPosixPath(path),
    conversationMarkdownBinding49 = conversationMarkdownHelper42(
      conversationMarkdownBinding48,
      conversationMarkdownInput36.cwd,
      ".",
    );
  if (conversationMarkdownBinding49 != null)
    return `${conversationMarkdownBinding49}${lineSuffix}`;
  let conversationMarkdownBinding50 = conversationMarkdownHelper42(
    conversationMarkdownBinding48,
    conversationMarkdownInput36.homeDir,
    "~",
  );
  return conversationMarkdownBinding50 == null
    ? `${conversationMarkdownBinding48}${lineSuffix}`
    : `${conversationMarkdownBinding50}${lineSuffix}`;
}
function conversationMarkdownHelper41(conversationMarkdownInput53) {
  let conversationMarkdownBinding64 = $.exec(conversationMarkdownInput53);
  return conversationMarkdownBinding64?.[1] == null ||
    conversationMarkdownBinding64[2] == null ||
    !isAbsoluteWorkspacePath(conversationMarkdownBinding64[1])
    ? {
        lineSuffix: "",
        path: conversationMarkdownInput53,
      }
    : {
        lineSuffix: conversationMarkdownBinding64[2],
        path: conversationMarkdownBinding64[1],
      };
}
function conversationMarkdownHelper42(
  conversationMarkdownInput41,
  conversationMarkdownInput42,
  conversationMarkdownInput43,
) {
  if (
    conversationMarkdownInput42 == null ||
    conversationMarkdownInput42 === "/"
  )
    return null;
  let conversationMarkdownBinding54 = normalizePathKey(
      conversationMarkdownInput41,
    ),
    conversationMarkdownBinding55 = normalizePathKey(
      conversationMarkdownInput42,
    );
  return conversationMarkdownBinding54 === conversationMarkdownBinding55
    ? conversationMarkdownInput43
    : conversationMarkdownBinding54.startsWith(
          `${conversationMarkdownBinding55}/`,
        )
      ? `${conversationMarkdownInput43}/${conversationMarkdownInput41.slice(conversationMarkdownInput42.length + 1)}`
      : null;
}
function conversationMarkdownHelper43(conversationMarkdownInput66) {
  if (conversationMarkdownInput66 == null) return conversationMarkdownBinding2;
  let conversationMarkdownBinding71 = conversationMarkdownHelper44(
    conversationMarkdownInput66,
  );
  return conversationMarkdownBinding71 == null
    ? conversationMarkdownBinding2
    : {
        cwd: conversationMarkdownBinding71,
        homeDir: conversationMarkdownHelper45(conversationMarkdownBinding71),
      };
}
function conversationMarkdownHelper44(conversationMarkdownInput89) {
  let conversationMarkdownBinding80 = toPosixPath(
    conversationMarkdownInput89,
  ).replace(/\/+$/, "");
  return isAbsoluteWorkspacePath(conversationMarkdownBinding80)
    ? conversationMarkdownBinding80
    : null;
}
function conversationMarkdownHelper45(conversationMarkdownInput63) {
  let conversationMarkdownBinding67 = conversationMarkdownBinding4.exec(
    conversationMarkdownInput63,
  );
  if (conversationMarkdownBinding67 != null)
    return conversationMarkdownBinding67[0];
  let conversationMarkdownBinding68 = conversationMarkdownBinding5.exec(
    conversationMarkdownInput63,
  );
  return conversationMarkdownBinding68 == null
    ? null
    : conversationMarkdownBinding68[0];
}
function conversationMarkdownHelper46(conversationMarkdownInput110) {
  return conversationMarkdownHelper47(
    conversationMarkdownHelper31(conversationMarkdownInput110),
  );
}
function conversationMarkdownHelper47(conversationMarkdownInput85) {
  return conversationMarkdownInput85.replaceAll(
    /<\/?details(?=[\s>])[^>]*>/gi,
    (conversationMarkdownInput111) =>
      conversationMarkdownHelper63(conversationMarkdownInput111),
  );
}
function conversationMarkdownHelper48(conversationMarkdownInput94) {
  let conversationMarkdownBinding82 = "`".repeat(
    conversationMarkdownHelper51(conversationMarkdownInput94) + 1,
  );
  return `${conversationMarkdownBinding82}${conversationMarkdownInput94}${conversationMarkdownBinding82}`;
}
function conversationMarkdownHelper49(conversationMarkdownInput103) {
  return `<code>${conversationMarkdownHelper63(conversationMarkdownInput103)}</code>`;
}
function conversationMarkdownHelper50(
  conversationMarkdownInput64,
  conversationMarkdownInput65,
) {
  let conversationMarkdownBinding69 = conversationMarkdownHelper31(
      conversationMarkdownInput65,
    ).trimEnd(),
    conversationMarkdownBinding70 = "`".repeat(
      Math.max(
        3,
        conversationMarkdownHelper51(conversationMarkdownBinding69) + 1,
      ),
    );
  return `${conversationMarkdownBinding70}${conversationMarkdownInput64}\n${conversationMarkdownBinding69}\n${conversationMarkdownBinding70}`;
}
function conversationMarkdownHelper51(conversationMarkdownInput73) {
  let conversationMarkdownBinding73 = 0;
  for (let conversationMarkdownBinding85 of conversationMarkdownInput73.matchAll(
    /`+/g,
  ))
    conversationMarkdownBinding73 = Math.max(
      conversationMarkdownBinding73,
      conversationMarkdownBinding85[0].length,
    );
  return conversationMarkdownBinding73;
}
function conversationMarkdownHelper52(conversationMarkdownInput102) {
  return JSON.stringify(conversationMarkdownInput102, null, 2) ?? "null";
}
function conversationMarkdownHelper53(conversationMarkdownInput90) {
  return `${conversationMarkdownInput90} previous ${conversationMarkdownInput90 === 1 ? "message" : "messages"}`;
}
function conversationMarkdownHelper54(conversationMarkdownInput16) {
  let conversationMarkdownBinding25 = 0,
    conversationMarkdownBinding26 = 0,
    conversationMarkdownBinding27 = 0;
  for (let conversationMarkdownBinding29 of conversationMarkdownInput16)
    if (conversationMarkdownBinding29.type === "exec")
      switch (conversationMarkdownBinding29.parsedCmd.type) {
        case "read":
          conversationMarkdownBinding25 += 1;
          break;
        case "search":
          conversationMarkdownBinding26 += 1;
          break;
        case "list_files":
          conversationMarkdownBinding27 += 1;
          break;
        case "format":
        case "test":
        case "lint":
        case "noop":
        case "unknown":
          break;
      }
  let conversationMarkdownBinding28 = [
    conversationMarkdownHelper58(
      conversationMarkdownBinding25,
      "file",
      "files",
    ),
    conversationMarkdownHelper58(
      conversationMarkdownBinding26,
      "search",
      "searches",
    ),
    conversationMarkdownHelper58(
      conversationMarkdownBinding27,
      "list",
      "lists",
    ),
  ].filter((item) => item != null);
  return conversationMarkdownBinding28.length === 0
    ? "Explored"
    : `Explored ${conversationMarkdownBinding28.join(", ")}`;
}
function conversationMarkdownHelper55(conversationMarkdownInput9) {
  let conversationMarkdownBinding12 = [];
  conversationMarkdownHelper56(
    conversationMarkdownBinding12,
    conversationMarkdownInput9.createdFileCount,
    "Created",
    "created",
    "file",
    "files",
  );
  conversationMarkdownHelper56(
    conversationMarkdownBinding12,
    conversationMarkdownInput9.editedFileCount,
    "Edited",
    "edited",
    "file",
    "files",
  );
  conversationMarkdownHelper56(
    conversationMarkdownBinding12,
    conversationMarkdownInput9.deletedFileCount,
    "Deleted",
    "deleted",
    "file",
    "files",
  );
  let conversationMarkdownBinding13 = [
    conversationMarkdownHelper58(
      conversationMarkdownInput9.exploredFileCount,
      "file",
      "files",
    ),
    conversationMarkdownHelper58(
      conversationMarkdownInput9.searchCount,
      "search",
      "searches",
    ),
    conversationMarkdownHelper58(
      conversationMarkdownInput9.listCount,
      "list",
      "lists",
    ),
  ].filter((item) => item != null);
  return (
    conversationMarkdownBinding13.length > 0 &&
      conversationMarkdownBinding12.push(
        `${conversationMarkdownBinding12.length === 0 ? "Explored" : "explored"} ${conversationMarkdownBinding13.join(", ")}`,
      ),
    conversationMarkdownHelper56(
      conversationMarkdownBinding12,
      conversationMarkdownInput9.deniedRequestCount,
      "Denied",
      "denied",
      "request",
      "requests",
    ),
    conversationMarkdownHelper57(
      conversationMarkdownBinding12,
      conversationMarkdownInput9.timedOutRequestCount,
    ),
    conversationMarkdownHelper56(
      conversationMarkdownBinding12,
      conversationMarkdownInput9.commandCount,
      "Ran",
      "ran",
      "command",
      "commands",
    ),
    conversationMarkdownHelper56(
      conversationMarkdownBinding12,
      conversationMarkdownInput9.mcpToolCallCount,
      "Called",
      "called",
      "tool",
      "tools",
    ),
    conversationMarkdownInput9.webSearchCount > 0 &&
      conversationMarkdownBinding12.push(
        conversationMarkdownBinding12.length === 0
          ? "Searched the web"
          : "searched the web",
      ),
    conversationMarkdownBinding12.length === 0
      ? "Tool activity"
      : conversationMarkdownBinding12.join(", ")
  );
}
function conversationMarkdownHelper56(
  conversationMarkdownInput67,
  conversationMarkdownInput68,
  conversationMarkdownInput69,
  conversationMarkdownInput70,
  conversationMarkdownInput71,
  conversationMarkdownInput72,
) {
  let conversationMarkdownBinding72 = conversationMarkdownHelper58(
    conversationMarkdownInput68,
    conversationMarkdownInput71,
    conversationMarkdownInput72,
  );
  conversationMarkdownBinding72 != null &&
    conversationMarkdownInput67.push(
      `${conversationMarkdownInput67.length === 0 ? conversationMarkdownInput69 : conversationMarkdownInput70} ${conversationMarkdownBinding72}`,
    );
}
function conversationMarkdownHelper57(
  conversationMarkdownInput74,
  conversationMarkdownInput75,
) {
  let conversationMarkdownBinding76 = conversationMarkdownHelper58(
    conversationMarkdownInput75,
    "request",
    "requests",
  );
  conversationMarkdownBinding76 != null &&
    conversationMarkdownInput74.push(
      `${conversationMarkdownBinding76} timed out`,
    );
}
function conversationMarkdownHelper58(
  conversationMarkdownInput86,
  conversationMarkdownInput87,
  conversationMarkdownInput88,
) {
  return conversationMarkdownInput86 === 0
    ? null
    : conversationMarkdownInput86 === 1
      ? `a ${conversationMarkdownInput87}`
      : `${conversationMarkdownInput86} ${conversationMarkdownInput88}`;
}
function conversationMarkdownHelper59(conversationMarkdownInput93) {
  return conversationMarkdownInput93 === 1
    ? "Called a tool"
    : `Called ${conversationMarkdownInput93} tools`;
}
function conversationMarkdownHelper60(conversationMarkdownInput54) {
  switch (conversationMarkdownInput54) {
    case "add":
      return "Created";
    case "delete":
      return "Deleted";
    case "update":
      return "Edited";
  }
}
function conversationMarkdownHelper61(conversationMarkdownInput27) {
  let conversationMarkdownBinding42 = 0,
    conversationMarkdownBinding43 = 0;
  for (let conversationMarkdownBinding60 of conversationMarkdownHelper31(
    conversationMarkdownInput27,
  ).split("\n")) {
    if (
      conversationMarkdownBinding60.startsWith("+") &&
      !conversationMarkdownBinding60.startsWith("+++")
    ) {
      conversationMarkdownBinding42 += 1;
      continue;
    }
    conversationMarkdownBinding60.startsWith("-") &&
      !conversationMarkdownBinding60.startsWith("---") &&
      (conversationMarkdownBinding43 += 1);
  }
  return {
    additions: conversationMarkdownBinding42,
    deletions: conversationMarkdownBinding43,
  };
}
function conversationMarkdownHelper62(conversationMarkdownInput22) {
  return conversationMarkdownInput22.executionStatus === "interrupted"
    ? "Stopped"
    : conversationMarkdownInput22.output?.exitCode == null
      ? conversationMarkdownInput22.executionStatus === "completed"
        ? "Success"
        : "Running"
      : conversationMarkdownInput22.output.exitCode === 0
        ? "Success"
        : `Failed with exit code ${conversationMarkdownInput22.output.exitCode}`;
}
function conversationMarkdownHelper63(conversationMarkdownInput56) {
  return conversationMarkdownInput56
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
var conversationMarkdownBinding1,
  conversationMarkdownBinding2,
  conversationMarkdownBinding3,
  conversationMarkdownBinding4,
  conversationMarkdownBinding5,
  $;
esmInit(() => {
  conversationMarkdownBinding1 = /::git-[a-z-]+\{[^}\n]*\}/g;
  conversationMarkdownBinding2 = {
    cwd: null,
    homeDir: null,
  };
  conversationMarkdownBinding3 =
    /\]\((<[^>\n]+>|[^)\s\n]+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)/g;
  conversationMarkdownBinding4 = /^\/(?:Users|home)\/[^/]+(?=\/|$)/;
  conversationMarkdownBinding5 = /^[A-Za-z]:\/Users\/[^/]+(?=\/|$)/;
  $ = /^(.*?)(:\d+(?:-\d+)?)$/;
})();

/** Bundle public export name. */
export const renderConversationMarkdown = conversationMarkdown;
