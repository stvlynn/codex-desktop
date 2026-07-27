// Restored from ref/webview/assets/gitGraphDiagram-UUTBAWPF-DT1C1u2o.js
// Mermaid gitGraph diagram definition (primary).
// Stage 3 candidate: auto-renamed export→local (incl. mermaid-config); parser cores promoted.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  J as chunkICPOFSXXJ,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  b as chunkICPOFSXXB,
  d as chunkICPOFSXXD,
  s as chunkICPOFSXXS,
  v as _chunkICPOFSXXV,
  y as chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWG,
  chunk5PVQY5BWM,
  chunk5PVQY5BWR,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import { populateCommonDb as chunk4BX2VUABN, initPopulateCommonDbChunk as chunk4BX2VUABT } from "../../diagrams/populate-common-db";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "../../diagrams/mermaid-parser-core";
import { initImperativeStateChunk as chunkQZHKN3VNN, ImperativeState as chunkQZHKN3VNT } from "../../diagrams/imperative-state";
function gitGraphDiagramUUTBAWPFHelper1() {
  return chunk5PVQY5BWM({
    length: 7,
  });
}
function gitGraphDiagramUUTBAWPFHelper2(
  gitGraphDiagramUUTBAWPFInput80,
  gitGraphDiagramUUTBAWPFInput81,
) {
  let gitGraphDiagramUUTBAWPFBinding248 = Object.create(null);
  return gitGraphDiagramUUTBAWPFInput80.reduce((accumulator, current) => {
    let gitGraphDiagramUUTBAWPFBinding259 =
      gitGraphDiagramUUTBAWPFInput81(current);
    return (
      gitGraphDiagramUUTBAWPFBinding248[gitGraphDiagramUUTBAWPFBinding259] ||
        ((gitGraphDiagramUUTBAWPFBinding248[gitGraphDiagramUUTBAWPFBinding259] =
          true),
        accumulator.push(current)),
      accumulator
    );
  }, []);
}
function gitGraphDiagramUUTBAWPFHelper3(
  gitGraphDiagramUUTBAWPFInput90,
  gitGraphDiagramUUTBAWPFInput91,
  gitGraphDiagramUUTBAWPFInput92,
) {
  let gitGraphDiagramUUTBAWPFBinding254 =
    gitGraphDiagramUUTBAWPFInput90.indexOf(gitGraphDiagramUUTBAWPFInput91);
  gitGraphDiagramUUTBAWPFBinding254 === -1
    ? gitGraphDiagramUUTBAWPFInput90.push(gitGraphDiagramUUTBAWPFInput92)
    : gitGraphDiagramUUTBAWPFInput90.splice(
        gitGraphDiagramUUTBAWPFBinding254,
        1,
        gitGraphDiagramUUTBAWPFInput92,
      );
}
function gitGraphDiagramUUTBAWPFHelper4(gitGraphDiagramUUTBAWPFInput38) {
  let gitGraphDiagramUUTBAWPFBinding163 = gitGraphDiagramUUTBAWPFInput38.reduce(
      (accumulator, current) =>
        accumulator.seq > current.seq ? accumulator : current,
      gitGraphDiagramUUTBAWPFInput38[0],
    ),
    gitGraphDiagramUUTBAWPFBinding164 = "";
  gitGraphDiagramUUTBAWPFInput38.forEach(function (item) {
    item === gitGraphDiagramUUTBAWPFBinding163
      ? (gitGraphDiagramUUTBAWPFBinding164 += "\t*")
      : (gitGraphDiagramUUTBAWPFBinding164 += "\t|");
  });
  let gitGraphDiagramUUTBAWPFBinding165 = [
    gitGraphDiagramUUTBAWPFBinding164,
    gitGraphDiagramUUTBAWPFBinding163.id,
    gitGraphDiagramUUTBAWPFBinding163.seq,
  ];
  for (let gitGraphDiagramUUTBAWPFBinding258 in gitGraphDiagramUUTBAWPFBinding4
    .records.branches)
    gitGraphDiagramUUTBAWPFBinding4.records.branches.get(
      gitGraphDiagramUUTBAWPFBinding258,
    ) === gitGraphDiagramUUTBAWPFBinding163.id &&
      gitGraphDiagramUUTBAWPFBinding165.push(gitGraphDiagramUUTBAWPFBinding258);
  if (
    (chunkAGHRB4JFI.debug(gitGraphDiagramUUTBAWPFBinding165.join(" ")),
    gitGraphDiagramUUTBAWPFBinding163.parents &&
      gitGraphDiagramUUTBAWPFBinding163.parents.length == 2 &&
      gitGraphDiagramUUTBAWPFBinding163.parents[0] &&
      gitGraphDiagramUUTBAWPFBinding163.parents[1])
  ) {
    let gitGraphDiagramUUTBAWPFBinding252 =
      gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
        gitGraphDiagramUUTBAWPFBinding163.parents[0],
      );
    gitGraphDiagramUUTBAWPFHelper3(
      gitGraphDiagramUUTBAWPFInput38,
      gitGraphDiagramUUTBAWPFBinding163,
      gitGraphDiagramUUTBAWPFBinding252,
    );
    gitGraphDiagramUUTBAWPFBinding163.parents[1] &&
      gitGraphDiagramUUTBAWPFInput38.push(
        gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
          gitGraphDiagramUUTBAWPFBinding163.parents[1],
        ),
      );
  } else if (gitGraphDiagramUUTBAWPFBinding163.parents.length == 0) return;
  else if (gitGraphDiagramUUTBAWPFBinding163.parents[0]) {
    let gitGraphDiagramUUTBAWPFBinding260 =
      gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
        gitGraphDiagramUUTBAWPFBinding163.parents[0],
      );
    gitGraphDiagramUUTBAWPFHelper3(
      gitGraphDiagramUUTBAWPFInput38,
      gitGraphDiagramUUTBAWPFBinding163,
      gitGraphDiagramUUTBAWPFBinding260,
    );
  }
  gitGraphDiagramUUTBAWPFInput38 = gitGraphDiagramUUTBAWPFHelper2(
    gitGraphDiagramUUTBAWPFInput38,
    (gitGraphDiagramUUTBAWPFInput117) => gitGraphDiagramUUTBAWPFInput117.id,
  );
  gitGraphDiagramUUTBAWPFHelper4(gitGraphDiagramUUTBAWPFInput38);
}
var gitGraphDiagramUUTBAWPFBinding1,
  gitGraphDiagramUUTBAWPFBinding2,
  gitGraphDiagramUUTBAWPFBinding3,
  gitGraphDiagramUUTBAWPFBinding4,
  gitGraphDiagramUUTBAWPFBinding5,
  gitGraphDiagramUUTBAWPFBinding6,
  gitGraphDiagramUUTBAWPFBinding7,
  gitGraphDiagramUUTBAWPFBinding8,
  gitGraphDiagramUUTBAWPFBinding9,
  gitGraphDiagramUUTBAWPFBinding10,
  gitGraphDiagramUUTBAWPFBinding11,
  gitGraphDiagramUUTBAWPFBinding12,
  gitGraphDiagramUUTBAWPFBinding13,
  _e,
  gitGraphDiagramUUTBAWPFBinding14,
  gitGraphDiagramUUTBAWPFBinding15,
  be,
  gitGraphDiagramUUTBAWPFBinding16,
  gitGraphDiagramUUTBAWPFBinding17,
  gitGraphDiagramUUTBAWPFBinding18,
  gitGraphDiagramUUTBAWPFBinding19,
  gitGraphDiagramUUTBAWPFBinding20,
  gitGraphDiagramUUTBAWPFBinding21,
  gitGraphDiagramUUTBAWPFBinding22,
  gitGraphDiagramUUTBAWPFBinding23,
  gitGraphDiagramUUTBAWPFBinding24,
  gitGraphDiagramUUTBAWPFBinding25,
  gitGraphDiagramUUTBAWPFBinding26,
  gitGraphDiagramUUTBAWPFBinding27,
  gitGraphDiagramUUTBAWPFBinding28,
  gitGraphDiagramUUTBAWPFBinding29,
  gitGraphDiagramUUTBAWPFBinding30,
  gitGraphDiagramUUTBAWPFBinding31,
  gitGraphDiagramUUTBAWPFBinding32,
  gitGraphDiagramUUTBAWPFBinding33,
  gitGraphDiagramUUTBAWPFBinding34,
  gitGraphDiagramUUTBAWPFBinding35,
  gitGraphDiagramUUTBAWPFBinding36,
  gitGraphDiagramUUTBAWPFBinding37,
  gitGraphDiagramUUTBAWPFBinding38,
  gitGraphDiagramUUTBAWPFBinding39,
  gitGraphDiagramUUTBAWPFBinding40,
  gitGraphDiagramUUTBAWPFBinding41,
  gitGraphDiagramUUTBAWPFBinding42,
  gitGraphDiagramUUTBAWPFBinding43,
  gitGraphDiagramUUTBAWPFBinding44,
  gitGraphDiagramUUTBAWPFBinding45,
  gitGraphDiagramUUTBAWPFBinding46,
  gitGraphDiagramUUTBAWPFBinding47,
  gitGraphDiagramUUTBAWPFBinding48,
  gitGraphDiagramUUTBAWPFBinding49,
  gitGraphDiagramUUTBAWPFBinding50,
  gitGraphDiagramUUTBAWPFBinding51,
  gitGraphDiagramUUTBAWPFBinding52,
  gitGraphDiagramUUTBAWPFBinding53,
  gitGraphDiagramUUTBAWPFBinding54,
  gitGraphDiagramUUTBAWPFBinding55,
  gitGraphDiagramUUTBAWPFBinding56,
  gitGraphDiagramUUTBAWPFBinding57,
  gitGraphDiagramUUTBAWPFBinding58,
  gitGraphDiagramUUTBAWPFBinding59,
  gitGraphDiagramUUTBAWPFBinding60,
  gitGraphDiagramUUTBAWPFBinding61,
  gitGraphDiagramUUTBAWPFBinding62,
  gitGraphDiagramUUTBAWPFBinding63,
  gitGraphDiagramUUTBAWPFBinding64,
  gitGraphDiagramUUTBAWPFBinding65,
  gitGraphDiagramUUTBAWPFBinding66,
  $,
  gitGraphDiagramUUTBAWPFBinding67,
  gitGraphDiagramUUTBAWPFBinding68,
  gitGraphDiagramUUTBAWPFBinding69,
  gitGraphDiagramUUTBAWPFBinding70,
  gitGraphDiagramUUTBAWPFBinding71,
  $e,
  gitGraphDiagramUUTBAWPFBinding72,
  gitGraphDiagramUUTBAWPF;
esmInit(() => {
  chunk4BX2VUABT();
  chunkQZHKN3VNN();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  srcT();
  gitGraphDiagramUUTBAWPFBinding1 = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4,
  };
  gitGraphDiagramUUTBAWPFBinding2 = chunkICPOFSXXD.gitGraph;
  gitGraphDiagramUUTBAWPFBinding3 = chunkAGHRB4JFN(
    () =>
      chunk5PVQY5BWR({
        ...gitGraphDiagramUUTBAWPFBinding2,
        ...chunkICPOFSXXY().gitGraph,
      }),
    "getConfig",
  );
  gitGraphDiagramUUTBAWPFBinding4 = new chunkQZHKN3VNT(() => {
    let gitGraphDiagramUUTBAWPFBinding196 = gitGraphDiagramUUTBAWPFBinding3(),
      gitGraphDiagramUUTBAWPFBinding197 =
        gitGraphDiagramUUTBAWPFBinding196.mainBranchName,
      gitGraphDiagramUUTBAWPFBinding198 =
        gitGraphDiagramUUTBAWPFBinding196.mainBranchOrder;
    return {
      mainBranchName: gitGraphDiagramUUTBAWPFBinding197,
      commits: new Map(),
      head: null,
      branchConfig: new Map([
        [
          gitGraphDiagramUUTBAWPFBinding197,
          {
            name: gitGraphDiagramUUTBAWPFBinding197,
            order: gitGraphDiagramUUTBAWPFBinding198,
          },
        ],
      ]),
      branches: new Map([[gitGraphDiagramUUTBAWPFBinding197, null]]),
      currBranch: gitGraphDiagramUUTBAWPFBinding197,
      direction: "LR",
      seq: 0,
      options: {},
    };
  });
  chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper1, "getID");
  chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper2, "uniqBy");
  gitGraphDiagramUUTBAWPFBinding5 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput96,
  ) {
    gitGraphDiagramUUTBAWPFBinding4.records.direction =
      gitGraphDiagramUUTBAWPFInput96;
  }, "setDirection");
  gitGraphDiagramUUTBAWPFBinding6 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput65,
  ) {
    chunkAGHRB4JFI.debug("options str", gitGraphDiagramUUTBAWPFInput65);
    gitGraphDiagramUUTBAWPFInput65 = gitGraphDiagramUUTBAWPFInput65?.trim();
    gitGraphDiagramUUTBAWPFInput65 ||= "{}";
    try {
      gitGraphDiagramUUTBAWPFBinding4.records.options = JSON.parse(
        gitGraphDiagramUUTBAWPFInput65,
      );
    } catch (gitGraphDiagramUUTBAWPFBinding257) {
      chunkAGHRB4JFI.error(
        "error while parsing gitGraph options",
        gitGraphDiagramUUTBAWPFBinding257.message,
      );
    }
  }, "setOptions");
  gitGraphDiagramUUTBAWPFBinding7 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramUUTBAWPFBinding4.records.options;
  }, "getOptions");
  gitGraphDiagramUUTBAWPFBinding8 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput36,
  ) {
    let gitGraphDiagramUUTBAWPFBinding153 = gitGraphDiagramUUTBAWPFInput36.msg,
      gitGraphDiagramUUTBAWPFBinding154 = gitGraphDiagramUUTBAWPFInput36.id,
      gitGraphDiagramUUTBAWPFBinding155 = gitGraphDiagramUUTBAWPFInput36.type,
      gitGraphDiagramUUTBAWPFBinding156 = gitGraphDiagramUUTBAWPFInput36.tags;
    chunkAGHRB4JFI.info(
      "commit",
      gitGraphDiagramUUTBAWPFBinding153,
      gitGraphDiagramUUTBAWPFBinding154,
      gitGraphDiagramUUTBAWPFBinding155,
      gitGraphDiagramUUTBAWPFBinding156,
    );
    chunkAGHRB4JFI.debug(
      "Entering commit:",
      gitGraphDiagramUUTBAWPFBinding153,
      gitGraphDiagramUUTBAWPFBinding154,
      gitGraphDiagramUUTBAWPFBinding155,
      gitGraphDiagramUUTBAWPFBinding156,
    );
    let gitGraphDiagramUUTBAWPFBinding157 = gitGraphDiagramUUTBAWPFBinding3();
    gitGraphDiagramUUTBAWPFBinding154 = chunkICPOFSXXS.sanitizeText(
      gitGraphDiagramUUTBAWPFBinding154,
      gitGraphDiagramUUTBAWPFBinding157,
    );
    gitGraphDiagramUUTBAWPFBinding153 = chunkICPOFSXXS.sanitizeText(
      gitGraphDiagramUUTBAWPFBinding153,
      gitGraphDiagramUUTBAWPFBinding157,
    );
    gitGraphDiagramUUTBAWPFBinding156 = gitGraphDiagramUUTBAWPFBinding156?.map(
      (gitGraphDiagramUUTBAWPFInput101) =>
        chunkICPOFSXXS.sanitizeText(
          gitGraphDiagramUUTBAWPFInput101,
          gitGraphDiagramUUTBAWPFBinding157,
        ),
    );
    let gitGraphDiagramUUTBAWPFBinding158 = {
      id:
        gitGraphDiagramUUTBAWPFBinding154 ||
        gitGraphDiagramUUTBAWPFBinding4.records.seq +
          "-" +
          gitGraphDiagramUUTBAWPFHelper1(),
      message: gitGraphDiagramUUTBAWPFBinding153,
      seq: gitGraphDiagramUUTBAWPFBinding4.records.seq++,
      type:
        gitGraphDiagramUUTBAWPFBinding155 ??
        gitGraphDiagramUUTBAWPFBinding1.NORMAL,
      tags: gitGraphDiagramUUTBAWPFBinding156 ?? [],
      parents:
        gitGraphDiagramUUTBAWPFBinding4.records.head == null
          ? []
          : [gitGraphDiagramUUTBAWPFBinding4.records.head.id],
      branch: gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
    };
    gitGraphDiagramUUTBAWPFBinding4.records.head =
      gitGraphDiagramUUTBAWPFBinding158;
    chunkAGHRB4JFI.info(
      "main branch",
      gitGraphDiagramUUTBAWPFBinding157.mainBranchName,
    );
    gitGraphDiagramUUTBAWPFBinding4.records.commits.has(
      gitGraphDiagramUUTBAWPFBinding158.id,
    ) &&
      chunkAGHRB4JFI.warn(
        `Commit ID ${gitGraphDiagramUUTBAWPFBinding158.id} already exists`,
      );
    gitGraphDiagramUUTBAWPFBinding4.records.commits.set(
      gitGraphDiagramUUTBAWPFBinding158.id,
      gitGraphDiagramUUTBAWPFBinding158,
    );
    gitGraphDiagramUUTBAWPFBinding4.records.branches.set(
      gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
      gitGraphDiagramUUTBAWPFBinding158.id,
    );
    chunkAGHRB4JFI.debug(
      "in pushCommit " + gitGraphDiagramUUTBAWPFBinding158.id,
    );
  }, "commit");
  gitGraphDiagramUUTBAWPFBinding9 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput43,
  ) {
    let gitGraphDiagramUUTBAWPFBinding179 = gitGraphDiagramUUTBAWPFInput43.name,
      gitGraphDiagramUUTBAWPFBinding180 = gitGraphDiagramUUTBAWPFInput43.order;
    if (
      ((gitGraphDiagramUUTBAWPFBinding179 = chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFBinding179,
        gitGraphDiagramUUTBAWPFBinding3(),
      )),
      gitGraphDiagramUUTBAWPFBinding4.records.branches.has(
        gitGraphDiagramUUTBAWPFBinding179,
      ))
    )
      throw Error(
        `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${gitGraphDiagramUUTBAWPFBinding179}")`,
      );
    gitGraphDiagramUUTBAWPFBinding4.records.branches.set(
      gitGraphDiagramUUTBAWPFBinding179,
      gitGraphDiagramUUTBAWPFBinding4.records.head == null
        ? null
        : gitGraphDiagramUUTBAWPFBinding4.records.head.id,
    );
    gitGraphDiagramUUTBAWPFBinding4.records.branchConfig.set(
      gitGraphDiagramUUTBAWPFBinding179,
      {
        name: gitGraphDiagramUUTBAWPFBinding179,
        order: gitGraphDiagramUUTBAWPFBinding180,
      },
    );
    gitGraphDiagramUUTBAWPFBinding12(gitGraphDiagramUUTBAWPFBinding179);
    chunkAGHRB4JFI.debug("in createBranch");
  }, "branch");
  gitGraphDiagramUUTBAWPFBinding10 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput10) => {
      let gitGraphDiagramUUTBAWPFBinding93 =
          gitGraphDiagramUUTBAWPFInput10.branch,
        gitGraphDiagramUUTBAWPFBinding94 = gitGraphDiagramUUTBAWPFInput10.id,
        gitGraphDiagramUUTBAWPFBinding95 = gitGraphDiagramUUTBAWPFInput10.type,
        gitGraphDiagramUUTBAWPFBinding96 = gitGraphDiagramUUTBAWPFInput10.tags,
        gitGraphDiagramUUTBAWPFBinding97 = gitGraphDiagramUUTBAWPFBinding3();
      gitGraphDiagramUUTBAWPFBinding93 = chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFBinding93,
        gitGraphDiagramUUTBAWPFBinding97,
      );
      gitGraphDiagramUUTBAWPFBinding94 &&= chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFBinding94,
        gitGraphDiagramUUTBAWPFBinding97,
      );
      let gitGraphDiagramUUTBAWPFBinding98 =
          gitGraphDiagramUUTBAWPFBinding4.records.branches.get(
            gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
          ),
        gitGraphDiagramUUTBAWPFBinding99 =
          gitGraphDiagramUUTBAWPFBinding4.records.branches.get(
            gitGraphDiagramUUTBAWPFBinding93,
          ),
        gitGraphDiagramUUTBAWPFBinding100 = gitGraphDiagramUUTBAWPFBinding98
          ? gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
              gitGraphDiagramUUTBAWPFBinding98,
            )
          : undefined,
        gitGraphDiagramUUTBAWPFBinding101 = gitGraphDiagramUUTBAWPFBinding99
          ? gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
              gitGraphDiagramUUTBAWPFBinding99,
            )
          : undefined;
      if (
        gitGraphDiagramUUTBAWPFBinding100 &&
        gitGraphDiagramUUTBAWPFBinding101 &&
        gitGraphDiagramUUTBAWPFBinding100.branch ===
          gitGraphDiagramUUTBAWPFBinding93
      )
        throw Error(
          `Cannot merge branch '${gitGraphDiagramUUTBAWPFBinding93}' into itself.`,
        );
      if (
        gitGraphDiagramUUTBAWPFBinding4.records.currBranch ===
        gitGraphDiagramUUTBAWPFBinding93
      ) {
        let gitGraphDiagramUUTBAWPFBinding216 = Error(
          'Incorrect usage of "merge". Cannot merge a branch to itself',
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding216.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            token: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramUUTBAWPFBinding216
        );
      }
      if (
        gitGraphDiagramUUTBAWPFBinding100 === undefined ||
        !gitGraphDiagramUUTBAWPFBinding100
      ) {
        let gitGraphDiagramUUTBAWPFBinding215 = Error(
          `Incorrect usage of "merge". Current branch (${gitGraphDiagramUUTBAWPFBinding4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding215.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            token: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            expected: ["commit"],
          }),
          gitGraphDiagramUUTBAWPFBinding215
        );
      }
      if (
        !gitGraphDiagramUUTBAWPFBinding4.records.branches.has(
          gitGraphDiagramUUTBAWPFBinding93,
        )
      ) {
        let gitGraphDiagramUUTBAWPFBinding209 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramUUTBAWPFBinding93 +
            ") does not exist",
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding209.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            token: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            expected: [`branch ${gitGraphDiagramUUTBAWPFBinding93}`],
          }),
          gitGraphDiagramUUTBAWPFBinding209
        );
      }
      if (
        gitGraphDiagramUUTBAWPFBinding101 === undefined ||
        !gitGraphDiagramUUTBAWPFBinding101
      ) {
        let gitGraphDiagramUUTBAWPFBinding210 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramUUTBAWPFBinding93 +
            ") has no commits",
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding210.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            token: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            expected: ['"commit"'],
          }),
          gitGraphDiagramUUTBAWPFBinding210
        );
      }
      if (
        gitGraphDiagramUUTBAWPFBinding100 === gitGraphDiagramUUTBAWPFBinding101
      ) {
        let gitGraphDiagramUUTBAWPFBinding218 = Error(
          'Incorrect usage of "merge". Both branches have same head',
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding218.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            token: `merge ${gitGraphDiagramUUTBAWPFBinding93}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramUUTBAWPFBinding218
        );
      }
      if (
        gitGraphDiagramUUTBAWPFBinding94 &&
        gitGraphDiagramUUTBAWPFBinding4.records.commits.has(
          gitGraphDiagramUUTBAWPFBinding94,
        )
      ) {
        let gitGraphDiagramUUTBAWPFBinding188 = Error(
          'Incorrect usage of "merge". Commit with id:' +
            gitGraphDiagramUUTBAWPFBinding94 +
            " already exists, use different custom id",
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding188.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFBinding93} ${gitGraphDiagramUUTBAWPFBinding94} ${gitGraphDiagramUUTBAWPFBinding95} ${gitGraphDiagramUUTBAWPFBinding96?.join(" ")}`,
            token: `merge ${gitGraphDiagramUUTBAWPFBinding93} ${gitGraphDiagramUUTBAWPFBinding94} ${gitGraphDiagramUUTBAWPFBinding95} ${gitGraphDiagramUUTBAWPFBinding96?.join(" ")}`,
            expected: [
              `merge ${gitGraphDiagramUUTBAWPFBinding93} ${gitGraphDiagramUUTBAWPFBinding94}_UNIQUE ${gitGraphDiagramUUTBAWPFBinding95} ${gitGraphDiagramUUTBAWPFBinding96?.join(" ")}`,
            ],
          }),
          gitGraphDiagramUUTBAWPFBinding188
        );
      }
      let gitGraphDiagramUUTBAWPFBinding102 =
          gitGraphDiagramUUTBAWPFBinding99 || "",
        gitGraphDiagramUUTBAWPFBinding103 = {
          id:
            gitGraphDiagramUUTBAWPFBinding94 ||
            `${gitGraphDiagramUUTBAWPFBinding4.records.seq}-${gitGraphDiagramUUTBAWPFHelper1()}`,
          message: `merged branch ${gitGraphDiagramUUTBAWPFBinding93} into ${gitGraphDiagramUUTBAWPFBinding4.records.currBranch}`,
          seq: gitGraphDiagramUUTBAWPFBinding4.records.seq++,
          parents:
            gitGraphDiagramUUTBAWPFBinding4.records.head == null
              ? []
              : [
                  gitGraphDiagramUUTBAWPFBinding4.records.head.id,
                  gitGraphDiagramUUTBAWPFBinding102,
                ],
          branch: gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
          type: gitGraphDiagramUUTBAWPFBinding1.MERGE,
          customType: gitGraphDiagramUUTBAWPFBinding95,
          customId: !!gitGraphDiagramUUTBAWPFBinding94,
          tags: gitGraphDiagramUUTBAWPFBinding96 ?? [],
        };
      gitGraphDiagramUUTBAWPFBinding4.records.head =
        gitGraphDiagramUUTBAWPFBinding103;
      gitGraphDiagramUUTBAWPFBinding4.records.commits.set(
        gitGraphDiagramUUTBAWPFBinding103.id,
        gitGraphDiagramUUTBAWPFBinding103,
      );
      gitGraphDiagramUUTBAWPFBinding4.records.branches.set(
        gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
        gitGraphDiagramUUTBAWPFBinding103.id,
      );
      chunkAGHRB4JFI.debug(gitGraphDiagramUUTBAWPFBinding4.records.branches);
      chunkAGHRB4JFI.debug("in mergeBranch");
    },
    "merge",
  );
  gitGraphDiagramUUTBAWPFBinding11 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput5,
  ) {
    let gitGraphDiagramUUTBAWPFBinding83 = gitGraphDiagramUUTBAWPFInput5.id,
      gitGraphDiagramUUTBAWPFBinding84 = gitGraphDiagramUUTBAWPFInput5.targetId,
      gitGraphDiagramUUTBAWPFBinding85 = gitGraphDiagramUUTBAWPFInput5.tags,
      gitGraphDiagramUUTBAWPFBinding86 = gitGraphDiagramUUTBAWPFInput5.parent;
    chunkAGHRB4JFI.debug(
      "Entering cherryPick:",
      gitGraphDiagramUUTBAWPFBinding83,
      gitGraphDiagramUUTBAWPFBinding84,
      gitGraphDiagramUUTBAWPFBinding85,
    );
    let gitGraphDiagramUUTBAWPFBinding87 = gitGraphDiagramUUTBAWPFBinding3();
    if (
      ((gitGraphDiagramUUTBAWPFBinding83 = chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFBinding83,
        gitGraphDiagramUUTBAWPFBinding87,
      )),
      (gitGraphDiagramUUTBAWPFBinding84 = chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFBinding84,
        gitGraphDiagramUUTBAWPFBinding87,
      )),
      (gitGraphDiagramUUTBAWPFBinding85 = gitGraphDiagramUUTBAWPFBinding85?.map(
        (gitGraphDiagramUUTBAWPFInput102) =>
          chunkICPOFSXXS.sanitizeText(
            gitGraphDiagramUUTBAWPFInput102,
            gitGraphDiagramUUTBAWPFBinding87,
          ),
      )),
      (gitGraphDiagramUUTBAWPFBinding86 = chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFBinding86,
        gitGraphDiagramUUTBAWPFBinding87,
      )),
      !gitGraphDiagramUUTBAWPFBinding83 ||
        !gitGraphDiagramUUTBAWPFBinding4.records.commits.has(
          gitGraphDiagramUUTBAWPFBinding83,
        ))
    ) {
      let gitGraphDiagramUUTBAWPFBinding208 = Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
      throw (
        (gitGraphDiagramUUTBAWPFBinding208.hash = {
          text: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
          token: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
          expected: ["cherry-pick abc"],
        }),
        gitGraphDiagramUUTBAWPFBinding208
      );
    }
    let gitGraphDiagramUUTBAWPFBinding88 =
      gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
        gitGraphDiagramUUTBAWPFBinding83,
      );
    if (
      gitGraphDiagramUUTBAWPFBinding88 === undefined ||
      !gitGraphDiagramUUTBAWPFBinding88
    )
      throw Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
    if (
      gitGraphDiagramUUTBAWPFBinding86 &&
      !(
        Array.isArray(gitGraphDiagramUUTBAWPFBinding88.parents) &&
        gitGraphDiagramUUTBAWPFBinding88.parents.includes(
          gitGraphDiagramUUTBAWPFBinding86,
        )
      )
    )
      throw Error(
        "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.",
      );
    let gitGraphDiagramUUTBAWPFBinding89 =
      gitGraphDiagramUUTBAWPFBinding88.branch;
    if (
      gitGraphDiagramUUTBAWPFBinding88.type ===
        gitGraphDiagramUUTBAWPFBinding1.MERGE &&
      !gitGraphDiagramUUTBAWPFBinding86
    )
      throw Error(
        "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.",
      );
    if (
      !gitGraphDiagramUUTBAWPFBinding84 ||
      !gitGraphDiagramUUTBAWPFBinding4.records.commits.has(
        gitGraphDiagramUUTBAWPFBinding84,
      )
    ) {
      if (
        gitGraphDiagramUUTBAWPFBinding89 ===
        gitGraphDiagramUUTBAWPFBinding4.records.currBranch
      ) {
        let gitGraphDiagramUUTBAWPFBinding201 = Error(
          'Incorrect usage of "cherryPick". Source commit is already on current branch',
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding201.hash = {
            text: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
            token: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramUUTBAWPFBinding201
        );
      }
      let gitGraphDiagramUUTBAWPFBinding131 =
        gitGraphDiagramUUTBAWPFBinding4.records.branches.get(
          gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
        );
      if (
        gitGraphDiagramUUTBAWPFBinding131 === undefined ||
        !gitGraphDiagramUUTBAWPFBinding131
      ) {
        let gitGraphDiagramUUTBAWPFBinding199 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramUUTBAWPFBinding4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding199.hash = {
            text: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
            token: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramUUTBAWPFBinding199
        );
      }
      let gitGraphDiagramUUTBAWPFBinding132 =
        gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
          gitGraphDiagramUUTBAWPFBinding131,
        );
      if (
        gitGraphDiagramUUTBAWPFBinding132 === undefined ||
        !gitGraphDiagramUUTBAWPFBinding132
      ) {
        let gitGraphDiagramUUTBAWPFBinding200 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramUUTBAWPFBinding4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramUUTBAWPFBinding200.hash = {
            text: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
            token: `cherryPick ${gitGraphDiagramUUTBAWPFBinding83} ${gitGraphDiagramUUTBAWPFBinding84}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramUUTBAWPFBinding200
        );
      }
      let gitGraphDiagramUUTBAWPFBinding133 = {
        id:
          gitGraphDiagramUUTBAWPFBinding4.records.seq +
          "-" +
          gitGraphDiagramUUTBAWPFHelper1(),
        message: `cherry-picked ${gitGraphDiagramUUTBAWPFBinding88?.message} into ${gitGraphDiagramUUTBAWPFBinding4.records.currBranch}`,
        seq: gitGraphDiagramUUTBAWPFBinding4.records.seq++,
        parents:
          gitGraphDiagramUUTBAWPFBinding4.records.head == null
            ? []
            : [
                gitGraphDiagramUUTBAWPFBinding4.records.head.id,
                gitGraphDiagramUUTBAWPFBinding88.id,
              ],
        branch: gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
        type: gitGraphDiagramUUTBAWPFBinding1.CHERRY_PICK,
        tags: gitGraphDiagramUUTBAWPFBinding85
          ? gitGraphDiagramUUTBAWPFBinding85.filter(Boolean)
          : [
              `cherry-pick:${gitGraphDiagramUUTBAWPFBinding88.id}${gitGraphDiagramUUTBAWPFBinding88.type === gitGraphDiagramUUTBAWPFBinding1.MERGE ? `|parent:${gitGraphDiagramUUTBAWPFBinding86}` : ""}`,
            ],
      };
      gitGraphDiagramUUTBAWPFBinding4.records.head =
        gitGraphDiagramUUTBAWPFBinding133;
      gitGraphDiagramUUTBAWPFBinding4.records.commits.set(
        gitGraphDiagramUUTBAWPFBinding133.id,
        gitGraphDiagramUUTBAWPFBinding133,
      );
      gitGraphDiagramUUTBAWPFBinding4.records.branches.set(
        gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
        gitGraphDiagramUUTBAWPFBinding133.id,
      );
      chunkAGHRB4JFI.debug(gitGraphDiagramUUTBAWPFBinding4.records.branches);
      chunkAGHRB4JFI.debug("in cherryPick");
    }
  }, "cherryPick");
  gitGraphDiagramUUTBAWPFBinding12 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput42,
  ) {
    if (
      ((gitGraphDiagramUUTBAWPFInput42 = chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFInput42,
        gitGraphDiagramUUTBAWPFBinding3(),
      )),
      gitGraphDiagramUUTBAWPFBinding4.records.branches.has(
        gitGraphDiagramUUTBAWPFInput42,
      ))
    ) {
      gitGraphDiagramUUTBAWPFBinding4.records.currBranch =
        gitGraphDiagramUUTBAWPFInput42;
      let gitGraphDiagramUUTBAWPFBinding226 =
        gitGraphDiagramUUTBAWPFBinding4.records.branches.get(
          gitGraphDiagramUUTBAWPFBinding4.records.currBranch,
        );
      gitGraphDiagramUUTBAWPFBinding226 === undefined ||
      !gitGraphDiagramUUTBAWPFBinding226
        ? (gitGraphDiagramUUTBAWPFBinding4.records.head = null)
        : (gitGraphDiagramUUTBAWPFBinding4.records.head =
            gitGraphDiagramUUTBAWPFBinding4.records.commits.get(
              gitGraphDiagramUUTBAWPFBinding226,
            ) ?? null);
    } else {
      let gitGraphDiagramUUTBAWPFBinding214 = Error(
        `Trying to checkout branch which is not yet created. (Help try using "branch ${gitGraphDiagramUUTBAWPFInput42}")`,
      );
      throw (
        (gitGraphDiagramUUTBAWPFBinding214.hash = {
          text: `checkout ${gitGraphDiagramUUTBAWPFInput42}`,
          token: `checkout ${gitGraphDiagramUUTBAWPFInput42}`,
          expected: [`branch ${gitGraphDiagramUUTBAWPFInput42}`],
        }),
        gitGraphDiagramUUTBAWPFBinding214
      );
    }
  }, "checkout");
  chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper3, "upsert");
  chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper4, "prettyPrintCommitHistory");
  gitGraphDiagramUUTBAWPFBinding13 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFI.debug(gitGraphDiagramUUTBAWPFBinding4.records.commits);
    let gitGraphDiagramUUTBAWPFBinding255 =
      gitGraphDiagramUUTBAWPFBinding16()[0];
    gitGraphDiagramUUTBAWPFHelper4([gitGraphDiagramUUTBAWPFBinding255]);
  }, "prettyPrint");
  _e = chunkAGHRB4JFN(function () {
    gitGraphDiagramUUTBAWPFBinding4.reset();
    _chunkICPOFSXXA();
  }, "clear");
  gitGraphDiagramUUTBAWPFBinding14 = chunkAGHRB4JFN(function () {
    return [...gitGraphDiagramUUTBAWPFBinding4.records.branchConfig.values()]
      .map((item, index) =>
        item.order !== null && item.order !== undefined
          ? item
          : {
              ...item,
              order: parseFloat(`0.${index}`),
            },
      )
      .sort(
        (gitGraphDiagramUUTBAWPFInput98, gitGraphDiagramUUTBAWPFInput99) =>
          (gitGraphDiagramUUTBAWPFInput98.order ?? 0) -
          (gitGraphDiagramUUTBAWPFInput99.order ?? 0),
      )
      .map(({ name }) => ({
        name,
      }));
  }, "getBranchesAsObjArray");
  gitGraphDiagramUUTBAWPFBinding15 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramUUTBAWPFBinding4.records.branches;
  }, "getBranches");
  be = chunkAGHRB4JFN(function () {
    return gitGraphDiagramUUTBAWPFBinding4.records.commits;
  }, "getCommits");
  gitGraphDiagramUUTBAWPFBinding16 = chunkAGHRB4JFN(function () {
    let gitGraphDiagramUUTBAWPFBinding232 = [
      ...gitGraphDiagramUUTBAWPFBinding4.records.commits.values(),
    ];
    return (
      gitGraphDiagramUUTBAWPFBinding232.forEach(function (item) {
        chunkAGHRB4JFI.debug(item.id);
      }),
      gitGraphDiagramUUTBAWPFBinding232.sort(
        (gitGraphDiagramUUTBAWPFInput105, gitGraphDiagramUUTBAWPFInput106) =>
          gitGraphDiagramUUTBAWPFInput105.seq -
          gitGraphDiagramUUTBAWPFInput106.seq,
      ),
      gitGraphDiagramUUTBAWPFBinding232
    );
  }, "getCommitsArray");
  gitGraphDiagramUUTBAWPFBinding17 = {
    commitType: gitGraphDiagramUUTBAWPFBinding1,
    getConfig: gitGraphDiagramUUTBAWPFBinding3,
    setDirection: gitGraphDiagramUUTBAWPFBinding5,
    setOptions: gitGraphDiagramUUTBAWPFBinding6,
    getOptions: gitGraphDiagramUUTBAWPFBinding7,
    commit: gitGraphDiagramUUTBAWPFBinding8,
    branch: gitGraphDiagramUUTBAWPFBinding9,
    merge: gitGraphDiagramUUTBAWPFBinding10,
    cherryPick: gitGraphDiagramUUTBAWPFBinding11,
    checkout: gitGraphDiagramUUTBAWPFBinding12,
    prettyPrint: gitGraphDiagramUUTBAWPFBinding13,
    clear: _e,
    getBranchesAsObjArray: gitGraphDiagramUUTBAWPFBinding14,
    getBranches: gitGraphDiagramUUTBAWPFBinding15,
    getCommits: be,
    getCommitsArray: gitGraphDiagramUUTBAWPFBinding16,
    getCurrentBranch: chunkAGHRB4JFN(function () {
      return gitGraphDiagramUUTBAWPFBinding4.records.currBranch;
    }, "getCurrentBranch"),
    getDirection: chunkAGHRB4JFN(function () {
      return gitGraphDiagramUUTBAWPFBinding4.records.direction;
    }, "getDirection"),
    getHead: chunkAGHRB4JFN(function () {
      return gitGraphDiagramUUTBAWPFBinding4.records.head;
    }, "getHead"),
    setAccTitle: chunkICPOFSXXH,
    getAccTitle: _chunkICPOFSXXV,
    getAccDescription: chunkICPOFSXXUnderscore,
    setAccDescription: chunkICPOFSXXV,
    setDiagramTitle: chunkICPOFSXXG,
    getDiagramTitle: chunkICPOFSXXC,
  };
  gitGraphDiagramUUTBAWPFBinding18 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput87, gitGraphDiagramUUTBAWPFInput88) => {
      chunk4BX2VUABN(
        gitGraphDiagramUUTBAWPFInput87,
        gitGraphDiagramUUTBAWPFInput88,
      );
      gitGraphDiagramUUTBAWPFInput87.dir &&
        gitGraphDiagramUUTBAWPFInput88.setDirection(
          gitGraphDiagramUUTBAWPFInput87.dir,
        );
      for (let gitGraphDiagramUUTBAWPFBinding261 of gitGraphDiagramUUTBAWPFInput87.statements)
        gitGraphDiagramUUTBAWPFBinding19(
          gitGraphDiagramUUTBAWPFBinding261,
          gitGraphDiagramUUTBAWPFInput88,
        );
    },
    "populate",
  );
  gitGraphDiagramUUTBAWPFBinding19 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput53, gitGraphDiagramUUTBAWPFInput54) => {
      let gitGraphDiagramUUTBAWPFBinding189 = {
        Commit: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput107) =>
            gitGraphDiagramUUTBAWPFInput54.commit(
              gitGraphDiagramUUTBAWPFBinding20(gitGraphDiagramUUTBAWPFInput107),
            ),
          "Commit",
        ),
        Branch: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput108) =>
            gitGraphDiagramUUTBAWPFInput54.branch(
              gitGraphDiagramUUTBAWPFBinding21(gitGraphDiagramUUTBAWPFInput108),
            ),
          "Branch",
        ),
        Merge: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput109) =>
            gitGraphDiagramUUTBAWPFInput54.merge(
              gitGraphDiagramUUTBAWPFBinding22(gitGraphDiagramUUTBAWPFInput109),
            ),
          "Merge",
        ),
        Checkout: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput104) =>
            gitGraphDiagramUUTBAWPFInput54.checkout(
              gitGraphDiagramUUTBAWPFBinding23(gitGraphDiagramUUTBAWPFInput104),
            ),
          "Checkout",
        ),
        CherryPicking: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput103) =>
            gitGraphDiagramUUTBAWPFInput54.cherryPick(
              gitGraphDiagramUUTBAWPFBinding24(gitGraphDiagramUUTBAWPFInput103),
            ),
          "CherryPicking",
        ),
      }[gitGraphDiagramUUTBAWPFInput53.$type];
      gitGraphDiagramUUTBAWPFBinding189
        ? gitGraphDiagramUUTBAWPFBinding189(gitGraphDiagramUUTBAWPFInput53)
        : chunkAGHRB4JFI.error(
            `Unknown statement type: ${gitGraphDiagramUUTBAWPFInput53.$type}`,
          );
    },
    "parseStatement",
  );
  gitGraphDiagramUUTBAWPFBinding20 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput82) => ({
      id: gitGraphDiagramUUTBAWPFInput82.id,
      msg: gitGraphDiagramUUTBAWPFInput82.message ?? "",
      type:
        gitGraphDiagramUUTBAWPFInput82.type === undefined
          ? gitGraphDiagramUUTBAWPFBinding1.NORMAL
          : gitGraphDiagramUUTBAWPFBinding1[
              gitGraphDiagramUUTBAWPFInput82.type
            ],
      tags: gitGraphDiagramUUTBAWPFInput82.tags ?? undefined,
    }),
    "parseCommit",
  );
  gitGraphDiagramUUTBAWPFBinding21 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput97) => ({
      name: gitGraphDiagramUUTBAWPFInput97.name,
      order: gitGraphDiagramUUTBAWPFInput97.order ?? 0,
    }),
    "parseBranch",
  );
  gitGraphDiagramUUTBAWPFBinding22 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput83) => ({
      branch: gitGraphDiagramUUTBAWPFInput83.branch,
      id: gitGraphDiagramUUTBAWPFInput83.id ?? "",
      type:
        gitGraphDiagramUUTBAWPFInput83.type === undefined
          ? undefined
          : gitGraphDiagramUUTBAWPFBinding1[
              gitGraphDiagramUUTBAWPFInput83.type
            ],
      tags: gitGraphDiagramUUTBAWPFInput83.tags ?? undefined,
    }),
    "parseMerge",
  );
  gitGraphDiagramUUTBAWPFBinding23 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput116) => gitGraphDiagramUUTBAWPFInput116.branch,
    "parseCheckout",
  );
  gitGraphDiagramUUTBAWPFBinding24 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput86) => ({
      id: gitGraphDiagramUUTBAWPFInput86.id,
      targetId: "",
      tags:
        gitGraphDiagramUUTBAWPFInput86.tags?.length === 0
          ? undefined
          : gitGraphDiagramUUTBAWPFInput86.tags,
      parent: gitGraphDiagramUUTBAWPFInput86.parent,
    }),
    "parseCherryPicking",
  );
  gitGraphDiagramUUTBAWPFBinding25 = {
    parse: chunkAGHRB4JFN(async (gitGraphDiagramUUTBAWPFInput89) => {
      let gitGraphDiagramUUTBAWPFBinding253 = await mermaidParserCoreN(
        "gitGraph",
        gitGraphDiagramUUTBAWPFInput89,
      );
      chunkAGHRB4JFI.debug(gitGraphDiagramUUTBAWPFBinding253);
      gitGraphDiagramUUTBAWPFBinding18(
        gitGraphDiagramUUTBAWPFBinding253,
        gitGraphDiagramUUTBAWPFBinding17,
      );
    }, "parse"),
  };
  gitGraphDiagramUUTBAWPFBinding26 = 10;
  gitGraphDiagramUUTBAWPFBinding27 = 40;
  gitGraphDiagramUUTBAWPFBinding28 = 4;
  gitGraphDiagramUUTBAWPFBinding29 = 2;
  gitGraphDiagramUUTBAWPFBinding30 = 8;
  gitGraphDiagramUUTBAWPFBinding31 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
  ]);
  gitGraphDiagramUUTBAWPFBinding32 = 12;
  gitGraphDiagramUUTBAWPFBinding33 = new Set([
    "redux-color",
    "redux-dark-color",
  ]);
  gitGraphDiagramUUTBAWPFBinding34 = new Set([
    "dark",
    "redux-dark",
    "redux-dark-color",
    "neo-dark",
  ]);
  gitGraphDiagramUUTBAWPFBinding35 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput93,
      gitGraphDiagramUUTBAWPFInput94,
      gitGraphDiagramUUTBAWPFInput95 = false,
    ) =>
      gitGraphDiagramUUTBAWPFInput95 && gitGraphDiagramUUTBAWPFInput93 > 0
        ? ((gitGraphDiagramUUTBAWPFInput93 - 1) %
            (gitGraphDiagramUUTBAWPFInput94 - 1)) +
          1
        : gitGraphDiagramUUTBAWPFInput93 % gitGraphDiagramUUTBAWPFInput94,
    "calcColorIndex",
  );
  gitGraphDiagramUUTBAWPFBinding36 = new Map();
  gitGraphDiagramUUTBAWPFBinding37 = new Map();
  gitGraphDiagramUUTBAWPFBinding38 = 30;
  gitGraphDiagramUUTBAWPFBinding39 = new Map();
  gitGraphDiagramUUTBAWPFBinding40 = [];
  gitGraphDiagramUUTBAWPFBinding41 = 0;
  gitGraphDiagramUUTBAWPFBinding42 = "LR";
  gitGraphDiagramUUTBAWPFBinding43 = chunkAGHRB4JFN(() => {
    gitGraphDiagramUUTBAWPFBinding36.clear();
    gitGraphDiagramUUTBAWPFBinding37.clear();
    gitGraphDiagramUUTBAWPFBinding39.clear();
    gitGraphDiagramUUTBAWPFBinding41 = 0;
    gitGraphDiagramUUTBAWPFBinding40 = [];
    gitGraphDiagramUUTBAWPFBinding42 = "LR";
  }, "clear");
  gitGraphDiagramUUTBAWPFBinding44 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput37) => {
      let gitGraphDiagramUUTBAWPFBinding162 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      return (
        (typeof gitGraphDiagramUUTBAWPFInput37 == "string"
          ? gitGraphDiagramUUTBAWPFInput37.split(/\\n|\n|<br\s*\/?>/gi)
          : gitGraphDiagramUUTBAWPFInput37
        ).forEach((item) => {
          let gitGraphDiagramUUTBAWPFBinding181 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          gitGraphDiagramUUTBAWPFBinding181.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          gitGraphDiagramUUTBAWPFBinding181.setAttribute("dy", "1em");
          gitGraphDiagramUUTBAWPFBinding181.setAttribute("x", "0");
          gitGraphDiagramUUTBAWPFBinding181.setAttribute("class", "row");
          gitGraphDiagramUUTBAWPFBinding181.textContent = item.trim();
          gitGraphDiagramUUTBAWPFBinding162.appendChild(
            gitGraphDiagramUUTBAWPFBinding181,
          );
        }),
        gitGraphDiagramUUTBAWPFBinding162
      );
    },
    "drawText",
  );
  gitGraphDiagramUUTBAWPFBinding45 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput55) => {
      let gitGraphDiagramUUTBAWPFBinding190,
        gitGraphDiagramUUTBAWPFBinding191,
        gitGraphDiagramUUTBAWPFBinding192;
      return (
        gitGraphDiagramUUTBAWPFBinding42 === "BT"
          ? ((gitGraphDiagramUUTBAWPFBinding191 = chunkAGHRB4JFN(
              (
                gitGraphDiagramUUTBAWPFInput111,
                gitGraphDiagramUUTBAWPFInput112,
              ) =>
                gitGraphDiagramUUTBAWPFInput111 <=
                gitGraphDiagramUUTBAWPFInput112,
              "comparisonFunc",
            )),
            (gitGraphDiagramUUTBAWPFBinding192 = 1 / 0))
          : ((gitGraphDiagramUUTBAWPFBinding191 = chunkAGHRB4JFN(
              (
                gitGraphDiagramUUTBAWPFInput113,
                gitGraphDiagramUUTBAWPFInput114,
              ) =>
                gitGraphDiagramUUTBAWPFInput113 >=
                gitGraphDiagramUUTBAWPFInput114,
              "comparisonFunc",
            )),
            (gitGraphDiagramUUTBAWPFBinding192 = 0)),
        gitGraphDiagramUUTBAWPFInput55.forEach((item) => {
          let gitGraphDiagramUUTBAWPFBinding249 =
            gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
            gitGraphDiagramUUTBAWPFBinding42 == "BT"
              ? gitGraphDiagramUUTBAWPFBinding37.get(item)?.y
              : gitGraphDiagramUUTBAWPFBinding37.get(item)?.x;
          gitGraphDiagramUUTBAWPFBinding249 !== undefined &&
            gitGraphDiagramUUTBAWPFBinding191(
              gitGraphDiagramUUTBAWPFBinding249,
              gitGraphDiagramUUTBAWPFBinding192,
            ) &&
            ((gitGraphDiagramUUTBAWPFBinding190 = item),
            (gitGraphDiagramUUTBAWPFBinding192 =
              gitGraphDiagramUUTBAWPFBinding249));
        }),
        gitGraphDiagramUUTBAWPFBinding190
      );
    },
    "findClosestParent",
  );
  gitGraphDiagramUUTBAWPFBinding46 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput71) => {
      let gitGraphDiagramUUTBAWPFBinding236 = "",
        gitGraphDiagramUUTBAWPFBinding237 = 1 / 0;
      return (
        gitGraphDiagramUUTBAWPFInput71.forEach((item) => {
          let gitGraphDiagramUUTBAWPFBinding256 =
            gitGraphDiagramUUTBAWPFBinding37.get(item).y;
          gitGraphDiagramUUTBAWPFBinding256 <=
            gitGraphDiagramUUTBAWPFBinding237 &&
            ((gitGraphDiagramUUTBAWPFBinding236 = item),
            (gitGraphDiagramUUTBAWPFBinding237 =
              gitGraphDiagramUUTBAWPFBinding256));
        }),
        gitGraphDiagramUUTBAWPFBinding236 || undefined
      );
    },
    "findClosestParentBT",
  );
  gitGraphDiagramUUTBAWPFBinding47 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput39,
      gitGraphDiagramUUTBAWPFInput40,
      gitGraphDiagramUUTBAWPFInput41,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding166 = gitGraphDiagramUUTBAWPFInput41,
        gitGraphDiagramUUTBAWPFBinding167 = gitGraphDiagramUUTBAWPFInput41,
        gitGraphDiagramUUTBAWPFBinding168 = [];
      gitGraphDiagramUUTBAWPFInput39.forEach((item) => {
        let gitGraphDiagramUUTBAWPFBinding238 =
          gitGraphDiagramUUTBAWPFInput40.get(item);
        if (!gitGraphDiagramUUTBAWPFBinding238)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramUUTBAWPFBinding238.parents.length
          ? ((gitGraphDiagramUUTBAWPFBinding166 =
              gitGraphDiagramUUTBAWPFBinding49(
                gitGraphDiagramUUTBAWPFBinding238,
              )),
            (gitGraphDiagramUUTBAWPFBinding167 = Math.max(
              gitGraphDiagramUUTBAWPFBinding166,
              gitGraphDiagramUUTBAWPFBinding167,
            )))
          : gitGraphDiagramUUTBAWPFBinding168.push(
              gitGraphDiagramUUTBAWPFBinding238,
            );
        gitGraphDiagramUUTBAWPFBinding50(
          gitGraphDiagramUUTBAWPFBinding238,
          gitGraphDiagramUUTBAWPFBinding166,
        );
      });
      gitGraphDiagramUUTBAWPFBinding166 = gitGraphDiagramUUTBAWPFBinding167;
      gitGraphDiagramUUTBAWPFBinding168.forEach((item) => {
        gitGraphDiagramUUTBAWPFBinding51(
          item,
          gitGraphDiagramUUTBAWPFBinding166,
          gitGraphDiagramUUTBAWPFInput41,
        );
      });
      gitGraphDiagramUUTBAWPFInput39.forEach((item) => {
        let gitGraphDiagramUUTBAWPFBinding219 =
          gitGraphDiagramUUTBAWPFInput40.get(item);
        if (gitGraphDiagramUUTBAWPFBinding219?.parents.length) {
          let gitGraphDiagramUUTBAWPFBinding233 =
            gitGraphDiagramUUTBAWPFBinding46(
              gitGraphDiagramUUTBAWPFBinding219.parents,
            );
          gitGraphDiagramUUTBAWPFBinding166 =
            gitGraphDiagramUUTBAWPFBinding37.get(
              gitGraphDiagramUUTBAWPFBinding233,
            ).y - gitGraphDiagramUUTBAWPFBinding27;
          gitGraphDiagramUUTBAWPFBinding166 <=
            gitGraphDiagramUUTBAWPFBinding167 &&
            (gitGraphDiagramUUTBAWPFBinding167 =
              gitGraphDiagramUUTBAWPFBinding166);
          let gitGraphDiagramUUTBAWPFBinding234 =
              gitGraphDiagramUUTBAWPFBinding36.get(
                gitGraphDiagramUUTBAWPFBinding219.branch,
              ).pos,
            gitGraphDiagramUUTBAWPFBinding235 =
              gitGraphDiagramUUTBAWPFBinding166 -
              gitGraphDiagramUUTBAWPFBinding26;
          gitGraphDiagramUUTBAWPFBinding37.set(
            gitGraphDiagramUUTBAWPFBinding219.id,
            {
              x: gitGraphDiagramUUTBAWPFBinding234,
              y: gitGraphDiagramUUTBAWPFBinding235,
            },
          );
        }
      });
    },
    "setParallelBTPos",
  );
  gitGraphDiagramUUTBAWPFBinding48 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput64) => {
      let gitGraphDiagramUUTBAWPFBinding221 = gitGraphDiagramUUTBAWPFBinding45(
        gitGraphDiagramUUTBAWPFInput64.parents.filter((item) => item !== null),
      );
      if (!gitGraphDiagramUUTBAWPFBinding221)
        throw Error(
          `Closest parent not found for commit ${gitGraphDiagramUUTBAWPFInput64.id}`,
        );
      let gitGraphDiagramUUTBAWPFBinding222 =
        gitGraphDiagramUUTBAWPFBinding37.get(
          gitGraphDiagramUUTBAWPFBinding221,
        )?.y;
      if (gitGraphDiagramUUTBAWPFBinding222 === undefined)
        throw Error(
          `Closest parent position not found for commit ${gitGraphDiagramUUTBAWPFInput64.id}`,
        );
      return gitGraphDiagramUUTBAWPFBinding222;
    },
    "findClosestParentPos",
  );
  gitGraphDiagramUUTBAWPFBinding49 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput115) =>
      gitGraphDiagramUUTBAWPFBinding48(gitGraphDiagramUUTBAWPFInput115) +
      gitGraphDiagramUUTBAWPFBinding27,
    "calculateCommitPosition",
  );
  gitGraphDiagramUUTBAWPFBinding50 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput69, gitGraphDiagramUUTBAWPFInput70) => {
      let gitGraphDiagramUUTBAWPFBinding229 =
        gitGraphDiagramUUTBAWPFBinding36.get(
          gitGraphDiagramUUTBAWPFInput69.branch,
        );
      if (!gitGraphDiagramUUTBAWPFBinding229)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramUUTBAWPFInput69.id}`,
        );
      let gitGraphDiagramUUTBAWPFBinding230 =
          gitGraphDiagramUUTBAWPFBinding229.pos,
        gitGraphDiagramUUTBAWPFBinding231 =
          gitGraphDiagramUUTBAWPFInput70 + gitGraphDiagramUUTBAWPFBinding26;
      return (
        gitGraphDiagramUUTBAWPFBinding37.set(
          gitGraphDiagramUUTBAWPFInput69.id,
          {
            x: gitGraphDiagramUUTBAWPFBinding230,
            y: gitGraphDiagramUUTBAWPFBinding231,
          },
        ),
        {
          x: gitGraphDiagramUUTBAWPFBinding230,
          y: gitGraphDiagramUUTBAWPFBinding231,
        }
      );
    },
    "setCommitPosition",
  );
  gitGraphDiagramUUTBAWPFBinding51 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput72,
      gitGraphDiagramUUTBAWPFInput73,
      gitGraphDiagramUUTBAWPFInput74,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding242 =
        gitGraphDiagramUUTBAWPFBinding36.get(
          gitGraphDiagramUUTBAWPFInput72.branch,
        );
      if (!gitGraphDiagramUUTBAWPFBinding242)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramUUTBAWPFInput72.id}`,
        );
      let gitGraphDiagramUUTBAWPFBinding243 =
          gitGraphDiagramUUTBAWPFInput73 + gitGraphDiagramUUTBAWPFInput74,
        gitGraphDiagramUUTBAWPFBinding244 =
          gitGraphDiagramUUTBAWPFBinding242.pos;
      gitGraphDiagramUUTBAWPFBinding37.set(gitGraphDiagramUUTBAWPFInput72.id, {
        x: gitGraphDiagramUUTBAWPFBinding244,
        y: gitGraphDiagramUUTBAWPFBinding243,
      });
    },
    "setRootPosition",
  );
  gitGraphDiagramUUTBAWPFBinding52 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput11,
      gitGraphDiagramUUTBAWPFInput12,
      gitGraphDiagramUUTBAWPFInput13,
      gitGraphDiagramUUTBAWPFInput14,
      gitGraphDiagramUUTBAWPFInput15,
      gitGraphDiagramUUTBAWPFInput16,
    ) => {
      let { theme } = chunkICPOFSXXB(),
        gitGraphDiagramUUTBAWPFBinding116 =
          gitGraphDiagramUUTBAWPFBinding31.has(theme ?? ""),
        gitGraphDiagramUUTBAWPFBinding117 =
          gitGraphDiagramUUTBAWPFBinding33.has(theme ?? ""),
        gitGraphDiagramUUTBAWPFBinding118 =
          gitGraphDiagramUUTBAWPFBinding34.has(theme ?? "");
      if (
        gitGraphDiagramUUTBAWPFInput16 ===
        gitGraphDiagramUUTBAWPFBinding1.HIGHLIGHT
      ) {
        gitGraphDiagramUUTBAWPFInput11
          .append("rect")
          .attr(
            "x",
            gitGraphDiagramUUTBAWPFInput13.x -
              10 +
              (gitGraphDiagramUUTBAWPFBinding116 ? 3 : 0),
          )
          .attr(
            "y",
            gitGraphDiagramUUTBAWPFInput13.y -
              10 +
              (gitGraphDiagramUUTBAWPFBinding116 ? 3 : 0),
          )
          .attr("width", gitGraphDiagramUUTBAWPFBinding116 ? 14 : 20)
          .attr("height", gitGraphDiagramUUTBAWPFBinding116 ? 14 : 20)
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} commit-highlight${gitGraphDiagramUUTBAWPFBinding35(gitGraphDiagramUUTBAWPFInput15, gitGraphDiagramUUTBAWPFBinding30, gitGraphDiagramUUTBAWPFBinding117)} ${gitGraphDiagramUUTBAWPFInput14}-outer`,
          );
        gitGraphDiagramUUTBAWPFInput11
          .append("rect")
          .attr(
            "x",
            gitGraphDiagramUUTBAWPFInput13.x -
              6 +
              (gitGraphDiagramUUTBAWPFBinding116 ? 2 : 0),
          )
          .attr(
            "y",
            gitGraphDiagramUUTBAWPFInput13.y -
              6 +
              (gitGraphDiagramUUTBAWPFBinding116 ? 2 : 0),
          )
          .attr("width", gitGraphDiagramUUTBAWPFBinding116 ? 8 : 12)
          .attr("height", gitGraphDiagramUUTBAWPFBinding116 ? 8 : 12)
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} commit${gitGraphDiagramUUTBAWPFBinding35(gitGraphDiagramUUTBAWPFInput15, gitGraphDiagramUUTBAWPFBinding30, gitGraphDiagramUUTBAWPFBinding117)} ${gitGraphDiagramUUTBAWPFInput14}-inner`,
          );
      } else if (
        gitGraphDiagramUUTBAWPFInput16 ===
        gitGraphDiagramUUTBAWPFBinding1.CHERRY_PICK
      ) {
        gitGraphDiagramUUTBAWPFInput11
          .append("circle")
          .attr("cx", gitGraphDiagramUUTBAWPFInput13.x)
          .attr("cy", gitGraphDiagramUUTBAWPFInput13.y)
          .attr("r", gitGraphDiagramUUTBAWPFBinding116 ? 7 : 10)
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} ${gitGraphDiagramUUTBAWPFInput14}`,
          );
        gitGraphDiagramUUTBAWPFInput11
          .append("circle")
          .attr("cx", gitGraphDiagramUUTBAWPFInput13.x - 3)
          .attr("cy", gitGraphDiagramUUTBAWPFInput13.y + 2)
          .attr("r", gitGraphDiagramUUTBAWPFBinding116 ? 2.5 : 2.75)
          .attr("fill", gitGraphDiagramUUTBAWPFBinding118 ? "#000000" : "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} ${gitGraphDiagramUUTBAWPFInput14}`,
          );
        gitGraphDiagramUUTBAWPFInput11
          .append("circle")
          .attr("cx", gitGraphDiagramUUTBAWPFInput13.x + 3)
          .attr("cy", gitGraphDiagramUUTBAWPFInput13.y + 2)
          .attr("r", gitGraphDiagramUUTBAWPFBinding116 ? 2.5 : 2.75)
          .attr("fill", gitGraphDiagramUUTBAWPFBinding118 ? "#000000" : "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} ${gitGraphDiagramUUTBAWPFInput14}`,
          );
        gitGraphDiagramUUTBAWPFInput11
          .append("line")
          .attr("x1", gitGraphDiagramUUTBAWPFInput13.x + 3)
          .attr("y1", gitGraphDiagramUUTBAWPFInput13.y + 1)
          .attr("x2", gitGraphDiagramUUTBAWPFInput13.x)
          .attr("y2", gitGraphDiagramUUTBAWPFInput13.y - 5)
          .attr(
            "stroke",
            gitGraphDiagramUUTBAWPFBinding118 ? "#000000" : "#fff",
          )
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} ${gitGraphDiagramUUTBAWPFInput14}`,
          );
        gitGraphDiagramUUTBAWPFInput11
          .append("line")
          .attr("x1", gitGraphDiagramUUTBAWPFInput13.x - 3)
          .attr("y1", gitGraphDiagramUUTBAWPFInput13.y + 1)
          .attr("x2", gitGraphDiagramUUTBAWPFInput13.x)
          .attr("y2", gitGraphDiagramUUTBAWPFInput13.y - 5)
          .attr(
            "stroke",
            gitGraphDiagramUUTBAWPFBinding118 ? "#000000" : "#fff",
          )
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} ${gitGraphDiagramUUTBAWPFInput14}`,
          );
      } else {
        let gitGraphDiagramUUTBAWPFBinding161 =
          gitGraphDiagramUUTBAWPFInput11.append("circle");
        if (
          (gitGraphDiagramUUTBAWPFBinding161.attr(
            "cx",
            gitGraphDiagramUUTBAWPFInput13.x,
          ),
          gitGraphDiagramUUTBAWPFBinding161.attr(
            "cy",
            gitGraphDiagramUUTBAWPFInput13.y,
          ),
          gitGraphDiagramUUTBAWPFBinding161.attr(
            "r",
            gitGraphDiagramUUTBAWPFBinding116 ? 7 : 10,
          ),
          gitGraphDiagramUUTBAWPFBinding161.attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput12.id} commit${gitGraphDiagramUUTBAWPFBinding35(gitGraphDiagramUUTBAWPFInput15, gitGraphDiagramUUTBAWPFBinding30, gitGraphDiagramUUTBAWPFBinding117)}`,
          ),
          gitGraphDiagramUUTBAWPFInput16 ===
            gitGraphDiagramUUTBAWPFBinding1.MERGE)
        ) {
          let gitGraphDiagramUUTBAWPFBinding227 =
            gitGraphDiagramUUTBAWPFInput11.append("circle");
          gitGraphDiagramUUTBAWPFBinding227.attr(
            "cx",
            gitGraphDiagramUUTBAWPFInput13.x,
          );
          gitGraphDiagramUUTBAWPFBinding227.attr(
            "cy",
            gitGraphDiagramUUTBAWPFInput13.y,
          );
          gitGraphDiagramUUTBAWPFBinding227.attr(
            "r",
            gitGraphDiagramUUTBAWPFBinding116 ? 5 : 6,
          );
          gitGraphDiagramUUTBAWPFBinding227.attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFInput14} ${gitGraphDiagramUUTBAWPFInput12.id} commit${gitGraphDiagramUUTBAWPFBinding35(gitGraphDiagramUUTBAWPFInput15, gitGraphDiagramUUTBAWPFBinding30, gitGraphDiagramUUTBAWPFBinding117)}`,
          );
        }
        if (
          gitGraphDiagramUUTBAWPFInput16 ===
          gitGraphDiagramUUTBAWPFBinding1.REVERSE
        ) {
          let gitGraphDiagramUUTBAWPFBinding223 =
              gitGraphDiagramUUTBAWPFInput11.append("path"),
            gitGraphDiagramUUTBAWPFBinding224 =
              gitGraphDiagramUUTBAWPFBinding116 ? 4 : 5;
          gitGraphDiagramUUTBAWPFBinding223
            .attr(
              "d",
              `M ${gitGraphDiagramUUTBAWPFInput13.x - gitGraphDiagramUUTBAWPFBinding224},${gitGraphDiagramUUTBAWPFInput13.y - gitGraphDiagramUUTBAWPFBinding224}L${gitGraphDiagramUUTBAWPFInput13.x + gitGraphDiagramUUTBAWPFBinding224},${gitGraphDiagramUUTBAWPFInput13.y + gitGraphDiagramUUTBAWPFBinding224}M${gitGraphDiagramUUTBAWPFInput13.x - gitGraphDiagramUUTBAWPFBinding224},${gitGraphDiagramUUTBAWPFInput13.y + gitGraphDiagramUUTBAWPFBinding224}L${gitGraphDiagramUUTBAWPFInput13.x + gitGraphDiagramUUTBAWPFBinding224},${gitGraphDiagramUUTBAWPFInput13.y - gitGraphDiagramUUTBAWPFBinding224}`,
            )
            .attr(
              "class",
              `commit ${gitGraphDiagramUUTBAWPFInput14} ${gitGraphDiagramUUTBAWPFInput12.id} commit${gitGraphDiagramUUTBAWPFBinding35(gitGraphDiagramUUTBAWPFInput15, gitGraphDiagramUUTBAWPFBinding30, gitGraphDiagramUUTBAWPFBinding117)}`,
            );
        }
      }
    },
    "drawCommitBullet",
  );
  gitGraphDiagramUUTBAWPFBinding53 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput27,
      gitGraphDiagramUUTBAWPFInput28,
      gitGraphDiagramUUTBAWPFInput29,
      gitGraphDiagramUUTBAWPFInput30,
      gitGraphDiagramUUTBAWPFInput31,
    ) => {
      if (
        gitGraphDiagramUUTBAWPFInput28.type !==
          gitGraphDiagramUUTBAWPFBinding1.CHERRY_PICK &&
        ((gitGraphDiagramUUTBAWPFInput28.customId &&
          gitGraphDiagramUUTBAWPFInput28.type ===
            gitGraphDiagramUUTBAWPFBinding1.MERGE) ||
          gitGraphDiagramUUTBAWPFInput28.type !==
            gitGraphDiagramUUTBAWPFBinding1.MERGE) &&
        gitGraphDiagramUUTBAWPFInput31.showCommitLabel
      ) {
        let gitGraphDiagramUUTBAWPFBinding137 =
            gitGraphDiagramUUTBAWPFInput27.append("g"),
          gitGraphDiagramUUTBAWPFBinding138 = gitGraphDiagramUUTBAWPFBinding137
            .insert("rect")
            .attr("class", "commit-label-bkg"),
          gitGraphDiagramUUTBAWPFBinding139 = gitGraphDiagramUUTBAWPFBinding137
            .append("text")
            .attr("x", gitGraphDiagramUUTBAWPFInput30)
            .attr("y", gitGraphDiagramUUTBAWPFInput29.y + 25)
            .attr("class", "commit-label")
            .text(gitGraphDiagramUUTBAWPFInput28.id),
          gitGraphDiagramUUTBAWPFBinding140 = gitGraphDiagramUUTBAWPFBinding139
            .node()
            ?.getBBox();
        if (
          gitGraphDiagramUUTBAWPFBinding140 &&
          (gitGraphDiagramUUTBAWPFBinding138
            .attr(
              "x",
              gitGraphDiagramUUTBAWPFInput29.posWithOffset -
                gitGraphDiagramUUTBAWPFBinding140.width / 2 -
                gitGraphDiagramUUTBAWPFBinding29,
            )
            .attr("y", gitGraphDiagramUUTBAWPFInput29.y + 13.5)
            .attr(
              "width",
              gitGraphDiagramUUTBAWPFBinding140.width +
                2 * gitGraphDiagramUUTBAWPFBinding29,
            )
            .attr(
              "height",
              gitGraphDiagramUUTBAWPFBinding140.height +
                2 * gitGraphDiagramUUTBAWPFBinding29,
            ),
          gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
          gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? (gitGraphDiagramUUTBAWPFBinding138
                .attr(
                  "x",
                  gitGraphDiagramUUTBAWPFInput29.x -
                    (gitGraphDiagramUUTBAWPFBinding140.width +
                      4 * gitGraphDiagramUUTBAWPFBinding28 +
                      5),
                )
                .attr("y", gitGraphDiagramUUTBAWPFInput29.y - 12),
              gitGraphDiagramUUTBAWPFBinding139
                .attr(
                  "x",
                  gitGraphDiagramUUTBAWPFInput29.x -
                    (gitGraphDiagramUUTBAWPFBinding140.width +
                      4 * gitGraphDiagramUUTBAWPFBinding28),
                )
                .attr(
                  "y",
                  gitGraphDiagramUUTBAWPFInput29.y +
                    gitGraphDiagramUUTBAWPFBinding140.height -
                    12,
                ))
            : gitGraphDiagramUUTBAWPFBinding139.attr(
                "x",
                gitGraphDiagramUUTBAWPFInput29.posWithOffset -
                  gitGraphDiagramUUTBAWPFBinding140.width / 2,
              ),
          gitGraphDiagramUUTBAWPFInput31.rotateCommitLabel)
        )
          if (
            gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
            gitGraphDiagramUUTBAWPFBinding42 === "BT"
          ) {
            gitGraphDiagramUUTBAWPFBinding139.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramUUTBAWPFInput29.x +
                ", " +
                gitGraphDiagramUUTBAWPFInput29.y +
                ")",
            );
            gitGraphDiagramUUTBAWPFBinding138.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramUUTBAWPFInput29.x +
                ", " +
                gitGraphDiagramUUTBAWPFInput29.y +
                ")",
            );
          } else {
            let gitGraphDiagramUUTBAWPFBinding194 =
                -7.5 -
                ((gitGraphDiagramUUTBAWPFBinding140.width + 10) / 25) * 9.5,
              gitGraphDiagramUUTBAWPFBinding195 =
                10 + (gitGraphDiagramUUTBAWPFBinding140.width / 25) * 8.5;
            gitGraphDiagramUUTBAWPFBinding137.attr(
              "transform",
              "translate(" +
                gitGraphDiagramUUTBAWPFBinding194 +
                ", " +
                gitGraphDiagramUUTBAWPFBinding195 +
                ") rotate(-45, " +
                gitGraphDiagramUUTBAWPFInput30 +
                ", " +
                gitGraphDiagramUUTBAWPFInput29.y +
                ")",
            );
          }
      }
    },
    "drawCommitLabel",
  );
  gitGraphDiagramUUTBAWPFBinding54 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput22,
      gitGraphDiagramUUTBAWPFInput23,
      gitGraphDiagramUUTBAWPFInput24,
      gitGraphDiagramUUTBAWPFInput25,
    ) => {
      if (gitGraphDiagramUUTBAWPFInput23.tags.length > 0) {
        let gitGraphDiagramUUTBAWPFBinding127 = 0,
          gitGraphDiagramUUTBAWPFBinding128 = 0,
          gitGraphDiagramUUTBAWPFBinding129 = 0,
          gitGraphDiagramUUTBAWPFBinding130 = [];
        for (let gitGraphDiagramUUTBAWPFBinding174 of gitGraphDiagramUUTBAWPFInput23.tags.reverse()) {
          let gitGraphDiagramUUTBAWPFBinding175 =
              gitGraphDiagramUUTBAWPFInput22.insert("polygon"),
            gitGraphDiagramUUTBAWPFBinding176 =
              gitGraphDiagramUUTBAWPFInput22.append("circle"),
            gitGraphDiagramUUTBAWPFBinding177 = gitGraphDiagramUUTBAWPFInput22
              .append("text")
              .attr(
                "y",
                gitGraphDiagramUUTBAWPFInput24.y -
                  16 -
                  gitGraphDiagramUUTBAWPFBinding127,
              )
              .attr("class", "tag-label")
              .text(gitGraphDiagramUUTBAWPFBinding174),
            gitGraphDiagramUUTBAWPFBinding178 =
              gitGraphDiagramUUTBAWPFBinding177.node()?.getBBox();
          if (!gitGraphDiagramUUTBAWPFBinding178)
            throw Error("Tag bbox not found");
          gitGraphDiagramUUTBAWPFBinding128 = Math.max(
            gitGraphDiagramUUTBAWPFBinding128,
            gitGraphDiagramUUTBAWPFBinding178.width,
          );
          gitGraphDiagramUUTBAWPFBinding129 = Math.max(
            gitGraphDiagramUUTBAWPFBinding129,
            gitGraphDiagramUUTBAWPFBinding178.height,
          );
          gitGraphDiagramUUTBAWPFBinding177.attr(
            "x",
            gitGraphDiagramUUTBAWPFInput24.posWithOffset -
              gitGraphDiagramUUTBAWPFBinding178.width / 2,
          );
          gitGraphDiagramUUTBAWPFBinding130.push({
            tag: gitGraphDiagramUUTBAWPFBinding177,
            hole: gitGraphDiagramUUTBAWPFBinding176,
            rect: gitGraphDiagramUUTBAWPFBinding175,
            yOffset: gitGraphDiagramUUTBAWPFBinding127,
          });
          gitGraphDiagramUUTBAWPFBinding127 += 20;
        }
        for (let {
          tag,
          hole,
          rect,
          yOffset,
        } of gitGraphDiagramUUTBAWPFBinding130) {
          let gitGraphDiagramUUTBAWPFBinding135 =
              gitGraphDiagramUUTBAWPFBinding129 / 2,
            gitGraphDiagramUUTBAWPFBinding136 =
              gitGraphDiagramUUTBAWPFInput24.y - 19.2 - yOffset;
          if (
            (rect.attr("class", "tag-label-bkg").attr(
              "points",
              `
      ${gitGraphDiagramUUTBAWPFInput25 - gitGraphDiagramUUTBAWPFBinding128 / 2 - gitGraphDiagramUUTBAWPFBinding28 / 2},${gitGraphDiagramUUTBAWPFBinding136 + gitGraphDiagramUUTBAWPFBinding29}  
      ${gitGraphDiagramUUTBAWPFInput25 - gitGraphDiagramUUTBAWPFBinding128 / 2 - gitGraphDiagramUUTBAWPFBinding28 / 2},${gitGraphDiagramUUTBAWPFBinding136 - gitGraphDiagramUUTBAWPFBinding29}
      ${gitGraphDiagramUUTBAWPFInput24.posWithOffset - gitGraphDiagramUUTBAWPFBinding128 / 2 - gitGraphDiagramUUTBAWPFBinding28},${gitGraphDiagramUUTBAWPFBinding136 - gitGraphDiagramUUTBAWPFBinding135 - gitGraphDiagramUUTBAWPFBinding29}
      ${gitGraphDiagramUUTBAWPFInput24.posWithOffset + gitGraphDiagramUUTBAWPFBinding128 / 2 + gitGraphDiagramUUTBAWPFBinding28},${gitGraphDiagramUUTBAWPFBinding136 - gitGraphDiagramUUTBAWPFBinding135 - gitGraphDiagramUUTBAWPFBinding29}
      ${gitGraphDiagramUUTBAWPFInput24.posWithOffset + gitGraphDiagramUUTBAWPFBinding128 / 2 + gitGraphDiagramUUTBAWPFBinding28},${gitGraphDiagramUUTBAWPFBinding136 + gitGraphDiagramUUTBAWPFBinding135 + gitGraphDiagramUUTBAWPFBinding29}
      ${gitGraphDiagramUUTBAWPFInput24.posWithOffset - gitGraphDiagramUUTBAWPFBinding128 / 2 - gitGraphDiagramUUTBAWPFBinding28},${gitGraphDiagramUUTBAWPFBinding136 + gitGraphDiagramUUTBAWPFBinding135 + gitGraphDiagramUUTBAWPFBinding29}`,
            ),
            hole
              .attr("cy", gitGraphDiagramUUTBAWPFBinding136)
              .attr(
                "cx",
                gitGraphDiagramUUTBAWPFInput25 -
                  gitGraphDiagramUUTBAWPFBinding128 / 2 +
                  gitGraphDiagramUUTBAWPFBinding28 / 2,
              )
              .attr("r", 1.5)
              .attr("class", "tag-hole"),
            gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
              gitGraphDiagramUUTBAWPFBinding42 === "BT")
          ) {
            let gitGraphDiagramUUTBAWPFBinding152 =
              gitGraphDiagramUUTBAWPFInput25 + yOffset;
            rect
              .attr("class", "tag-label-bkg")
              .attr(
                "points",
                `
        ${gitGraphDiagramUUTBAWPFInput24.x},${gitGraphDiagramUUTBAWPFBinding152 + 2}
        ${gitGraphDiagramUUTBAWPFInput24.x},${gitGraphDiagramUUTBAWPFBinding152 - 2}
        ${gitGraphDiagramUUTBAWPFInput24.x + gitGraphDiagramUUTBAWPFBinding26},${gitGraphDiagramUUTBAWPFBinding152 - gitGraphDiagramUUTBAWPFBinding135 - 2}
        ${gitGraphDiagramUUTBAWPFInput24.x + gitGraphDiagramUUTBAWPFBinding26 + gitGraphDiagramUUTBAWPFBinding128 + 4},${gitGraphDiagramUUTBAWPFBinding152 - gitGraphDiagramUUTBAWPFBinding135 - 2}
        ${gitGraphDiagramUUTBAWPFInput24.x + gitGraphDiagramUUTBAWPFBinding26 + gitGraphDiagramUUTBAWPFBinding128 + 4},${gitGraphDiagramUUTBAWPFBinding152 + gitGraphDiagramUUTBAWPFBinding135 + 2}
        ${gitGraphDiagramUUTBAWPFInput24.x + gitGraphDiagramUUTBAWPFBinding26},${gitGraphDiagramUUTBAWPFBinding152 + gitGraphDiagramUUTBAWPFBinding135 + 2}`,
              )
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramUUTBAWPFInput24.x +
                  "," +
                  gitGraphDiagramUUTBAWPFInput25 +
                  ")",
              );
            hole
              .attr(
                "cx",
                gitGraphDiagramUUTBAWPFInput24.x +
                  gitGraphDiagramUUTBAWPFBinding28 / 2,
              )
              .attr("cy", gitGraphDiagramUUTBAWPFBinding152)
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramUUTBAWPFInput24.x +
                  "," +
                  gitGraphDiagramUUTBAWPFInput25 +
                  ")",
              );
            tag
              .attr("x", gitGraphDiagramUUTBAWPFInput24.x + 5)
              .attr("y", gitGraphDiagramUUTBAWPFBinding152 + 3)
              .attr(
                "transform",
                "translate(14,14) rotate(45, " +
                  gitGraphDiagramUUTBAWPFInput24.x +
                  "," +
                  gitGraphDiagramUUTBAWPFInput25 +
                  ")",
              );
          }
        }
      }
    },
    "drawCommitTags",
  );
  gitGraphDiagramUUTBAWPFBinding55 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput52) => {
      switch (
        gitGraphDiagramUUTBAWPFInput52.customType ??
        gitGraphDiagramUUTBAWPFInput52.type
      ) {
        case gitGraphDiagramUUTBAWPFBinding1.NORMAL:
          return "commit-normal";
        case gitGraphDiagramUUTBAWPFBinding1.REVERSE:
          return "commit-reverse";
        case gitGraphDiagramUUTBAWPFBinding1.HIGHLIGHT:
          return "commit-highlight";
        case gitGraphDiagramUUTBAWPFBinding1.MERGE:
          return "commit-merge";
        case gitGraphDiagramUUTBAWPFBinding1.CHERRY_PICK:
          return "commit-cherry-pick";
        default:
          return "commit-normal";
      }
    },
    "getCommitClassType",
  );
  gitGraphDiagramUUTBAWPFBinding56 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput45,
      gitGraphDiagramUUTBAWPFInput46,
      gitGraphDiagramUUTBAWPFInput47,
      gitGraphDiagramUUTBAWPFInput48,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding182 = {
        x: 0,
        y: 0,
      };
      if (gitGraphDiagramUUTBAWPFInput45.parents.length > 0) {
        let gitGraphDiagramUUTBAWPFBinding225 =
          gitGraphDiagramUUTBAWPFBinding45(
            gitGraphDiagramUUTBAWPFInput45.parents,
          );
        if (gitGraphDiagramUUTBAWPFBinding225) {
          let gitGraphDiagramUUTBAWPFBinding245 =
            gitGraphDiagramUUTBAWPFInput48.get(
              gitGraphDiagramUUTBAWPFBinding225,
            ) ?? gitGraphDiagramUUTBAWPFBinding182;
          return gitGraphDiagramUUTBAWPFInput46 === "TB"
            ? gitGraphDiagramUUTBAWPFBinding245.y +
                gitGraphDiagramUUTBAWPFBinding27
            : gitGraphDiagramUUTBAWPFInput46 === "BT"
              ? (
                  gitGraphDiagramUUTBAWPFInput48.get(
                    gitGraphDiagramUUTBAWPFInput45.id,
                  ) ?? gitGraphDiagramUUTBAWPFBinding182
                ).y - gitGraphDiagramUUTBAWPFBinding27
              : gitGraphDiagramUUTBAWPFBinding245.x +
                gitGraphDiagramUUTBAWPFBinding27;
        }
      } else if (gitGraphDiagramUUTBAWPFInput46 === "TB")
        return gitGraphDiagramUUTBAWPFBinding38;
      else if (gitGraphDiagramUUTBAWPFInput46 === "BT")
        return (
          (
            gitGraphDiagramUUTBAWPFInput48.get(
              gitGraphDiagramUUTBAWPFInput45.id,
            ) ?? gitGraphDiagramUUTBAWPFBinding182
          ).y - gitGraphDiagramUUTBAWPFBinding27
        );
      else return 0;
      return 0;
    },
    "calculatePosition",
  );
  gitGraphDiagramUUTBAWPFBinding57 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput49,
      gitGraphDiagramUUTBAWPFInput50,
      gitGraphDiagramUUTBAWPFInput51,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding184 =
          gitGraphDiagramUUTBAWPFBinding42 === "BT" &&
          gitGraphDiagramUUTBAWPFInput51
            ? gitGraphDiagramUUTBAWPFInput50
            : gitGraphDiagramUUTBAWPFInput50 + gitGraphDiagramUUTBAWPFBinding26,
        gitGraphDiagramUUTBAWPFBinding185 =
          gitGraphDiagramUUTBAWPFBinding36.get(
            gitGraphDiagramUUTBAWPFInput49.branch,
          )?.pos,
        gitGraphDiagramUUTBAWPFBinding186 =
          gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
          gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? gitGraphDiagramUUTBAWPFBinding36.get(
                gitGraphDiagramUUTBAWPFInput49.branch,
              )?.pos
            : gitGraphDiagramUUTBAWPFBinding184;
      if (
        gitGraphDiagramUUTBAWPFBinding186 === undefined ||
        gitGraphDiagramUUTBAWPFBinding185 === undefined
      )
        throw Error(
          `Position were undefined for commit ${gitGraphDiagramUUTBAWPFInput49.id}`,
        );
      let gitGraphDiagramUUTBAWPFBinding187 =
        gitGraphDiagramUUTBAWPFBinding31.has(chunkICPOFSXXB().theme ?? "");
      return {
        x: gitGraphDiagramUUTBAWPFBinding186,
        y:
          gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
          gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? gitGraphDiagramUUTBAWPFBinding184
            : gitGraphDiagramUUTBAWPFBinding185 +
              (gitGraphDiagramUUTBAWPFBinding187
                ? gitGraphDiagramUUTBAWPFBinding32 / 2 + 1
                : -2),
        posWithOffset: gitGraphDiagramUUTBAWPFBinding184,
      };
    },
    "getCommitPosition",
  );
  gitGraphDiagramUUTBAWPFBinding58 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput32,
      gitGraphDiagramUUTBAWPFInput33,
      gitGraphDiagramUUTBAWPFInput34,
      gitGraphDiagramUUTBAWPFInput35,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding143 = gitGraphDiagramUUTBAWPFInput32
          .append("g")
          .attr("class", "commit-bullets"),
        gitGraphDiagramUUTBAWPFBinding144 = gitGraphDiagramUUTBAWPFInput32
          .append("g")
          .attr("class", "commit-labels"),
        gitGraphDiagramUUTBAWPFBinding145 =
          gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
          gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? gitGraphDiagramUUTBAWPFBinding38
            : 0,
        gitGraphDiagramUUTBAWPFBinding146 = [
          ...gitGraphDiagramUUTBAWPFInput33.keys(),
        ],
        gitGraphDiagramUUTBAWPFBinding147 =
          gitGraphDiagramUUTBAWPFInput35.parallelCommits ?? false,
        gitGraphDiagramUUTBAWPFBinding148 = chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput84, gitGraphDiagramUUTBAWPFInput85) => {
            let gitGraphDiagramUUTBAWPFBinding250 =
                gitGraphDiagramUUTBAWPFInput33.get(
                  gitGraphDiagramUUTBAWPFInput84,
                )?.seq,
              gitGraphDiagramUUTBAWPFBinding251 =
                gitGraphDiagramUUTBAWPFInput33.get(
                  gitGraphDiagramUUTBAWPFInput85,
                )?.seq;
            return gitGraphDiagramUUTBAWPFBinding250 !== undefined &&
              gitGraphDiagramUUTBAWPFBinding251 !== undefined
              ? gitGraphDiagramUUTBAWPFBinding250 -
                  gitGraphDiagramUUTBAWPFBinding251
              : 0;
          },
          "sortKeys",
        ),
        gitGraphDiagramUUTBAWPFBinding149 =
          gitGraphDiagramUUTBAWPFBinding146.sort(
            gitGraphDiagramUUTBAWPFBinding148,
          );
      gitGraphDiagramUUTBAWPFBinding42 === "BT" &&
        (gitGraphDiagramUUTBAWPFBinding147 &&
          gitGraphDiagramUUTBAWPFBinding47(
            gitGraphDiagramUUTBAWPFBinding149,
            gitGraphDiagramUUTBAWPFInput33,
            gitGraphDiagramUUTBAWPFBinding145,
          ),
        (gitGraphDiagramUUTBAWPFBinding149 =
          gitGraphDiagramUUTBAWPFBinding149.reverse()));
      gitGraphDiagramUUTBAWPFBinding149.forEach((item) => {
        let gitGraphDiagramUUTBAWPFBinding170 =
          gitGraphDiagramUUTBAWPFInput33.get(item);
        if (!gitGraphDiagramUUTBAWPFBinding170)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramUUTBAWPFBinding147 &&
          (gitGraphDiagramUUTBAWPFBinding145 = gitGraphDiagramUUTBAWPFBinding56(
            gitGraphDiagramUUTBAWPFBinding170,
            gitGraphDiagramUUTBAWPFBinding42,
            gitGraphDiagramUUTBAWPFBinding145,
            gitGraphDiagramUUTBAWPFBinding37,
          ));
        let gitGraphDiagramUUTBAWPFBinding171 =
          gitGraphDiagramUUTBAWPFBinding57(
            gitGraphDiagramUUTBAWPFBinding170,
            gitGraphDiagramUUTBAWPFBinding145,
            gitGraphDiagramUUTBAWPFBinding147,
          );
        if (gitGraphDiagramUUTBAWPFInput34) {
          let gitGraphDiagramUUTBAWPFBinding239 =
              gitGraphDiagramUUTBAWPFBinding55(
                gitGraphDiagramUUTBAWPFBinding170,
              ),
            gitGraphDiagramUUTBAWPFBinding240 =
              gitGraphDiagramUUTBAWPFBinding170.customType ??
              gitGraphDiagramUUTBAWPFBinding170.type,
            gitGraphDiagramUUTBAWPFBinding241 =
              gitGraphDiagramUUTBAWPFBinding36.get(
                gitGraphDiagramUUTBAWPFBinding170.branch,
              )?.index ?? 0;
          gitGraphDiagramUUTBAWPFBinding52(
            gitGraphDiagramUUTBAWPFBinding143,
            gitGraphDiagramUUTBAWPFBinding170,
            gitGraphDiagramUUTBAWPFBinding171,
            gitGraphDiagramUUTBAWPFBinding239,
            gitGraphDiagramUUTBAWPFBinding241,
            gitGraphDiagramUUTBAWPFBinding240,
          );
          gitGraphDiagramUUTBAWPFBinding53(
            gitGraphDiagramUUTBAWPFBinding144,
            gitGraphDiagramUUTBAWPFBinding170,
            gitGraphDiagramUUTBAWPFBinding171,
            gitGraphDiagramUUTBAWPFBinding145,
            gitGraphDiagramUUTBAWPFInput35,
          );
          gitGraphDiagramUUTBAWPFBinding54(
            gitGraphDiagramUUTBAWPFBinding144,
            gitGraphDiagramUUTBAWPFBinding170,
            gitGraphDiagramUUTBAWPFBinding171,
            gitGraphDiagramUUTBAWPFBinding145,
          );
        }
        gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
        gitGraphDiagramUUTBAWPFBinding42 === "BT"
          ? gitGraphDiagramUUTBAWPFBinding37.set(
              gitGraphDiagramUUTBAWPFBinding170.id,
              {
                x: gitGraphDiagramUUTBAWPFBinding171.x,
                y: gitGraphDiagramUUTBAWPFBinding171.posWithOffset,
              },
            )
          : gitGraphDiagramUUTBAWPFBinding37.set(
              gitGraphDiagramUUTBAWPFBinding170.id,
              {
                x: gitGraphDiagramUUTBAWPFBinding171.posWithOffset,
                y: gitGraphDiagramUUTBAWPFBinding171.y,
              },
            );
        gitGraphDiagramUUTBAWPFBinding145 =
          gitGraphDiagramUUTBAWPFBinding42 === "BT" &&
          gitGraphDiagramUUTBAWPFBinding147
            ? gitGraphDiagramUUTBAWPFBinding145 +
              gitGraphDiagramUUTBAWPFBinding27
            : gitGraphDiagramUUTBAWPFBinding145 +
              gitGraphDiagramUUTBAWPFBinding27 +
              gitGraphDiagramUUTBAWPFBinding26;
        gitGraphDiagramUUTBAWPFBinding145 > gitGraphDiagramUUTBAWPFBinding41 &&
          (gitGraphDiagramUUTBAWPFBinding41 =
            gitGraphDiagramUUTBAWPFBinding145);
      });
    },
    "drawCommits",
  );
  gitGraphDiagramUUTBAWPFBinding59 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput56,
      gitGraphDiagramUUTBAWPFInput57,
      gitGraphDiagramUUTBAWPFInput58,
      gitGraphDiagramUUTBAWPFInput59,
      gitGraphDiagramUUTBAWPFInput60,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding211 = (
          gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
          gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? gitGraphDiagramUUTBAWPFInput58.x <
              gitGraphDiagramUUTBAWPFInput59.x
            : gitGraphDiagramUUTBAWPFInput58.y <
              gitGraphDiagramUUTBAWPFInput59.y
        )
          ? gitGraphDiagramUUTBAWPFInput57.branch
          : gitGraphDiagramUUTBAWPFInput56.branch,
        gitGraphDiagramUUTBAWPFBinding212 = chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput110) =>
            gitGraphDiagramUUTBAWPFInput110.branch ===
            gitGraphDiagramUUTBAWPFBinding211,
          "isOnBranchToGetCurve",
        ),
        gitGraphDiagramUUTBAWPFBinding213 = chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFInput100) =>
            gitGraphDiagramUUTBAWPFInput100.seq >
              gitGraphDiagramUUTBAWPFInput56.seq &&
            gitGraphDiagramUUTBAWPFInput100.seq <
              gitGraphDiagramUUTBAWPFInput57.seq,
          "isBetweenCommits",
        );
      return [...gitGraphDiagramUUTBAWPFInput60.values()].some(
        (item) =>
          gitGraphDiagramUUTBAWPFBinding213(item) &&
          gitGraphDiagramUUTBAWPFBinding212(item),
      );
    },
    "shouldRerouteArrow",
  );
  gitGraphDiagramUUTBAWPFBinding60 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput66,
      gitGraphDiagramUUTBAWPFInput67,
      gitGraphDiagramUUTBAWPFInput68 = 0,
    ) => {
      let gitGraphDiagramUUTBAWPFBinding228 =
        gitGraphDiagramUUTBAWPFInput66 +
        Math.abs(
          gitGraphDiagramUUTBAWPFInput66 - gitGraphDiagramUUTBAWPFInput67,
        ) /
          2;
      return gitGraphDiagramUUTBAWPFInput68 > 5
        ? gitGraphDiagramUUTBAWPFBinding228
        : gitGraphDiagramUUTBAWPFBinding40.every(
              (item) =>
                Math.abs(item - gitGraphDiagramUUTBAWPFBinding228) >= 10,
            )
          ? (gitGraphDiagramUUTBAWPFBinding40.push(
              gitGraphDiagramUUTBAWPFBinding228,
            ),
            gitGraphDiagramUUTBAWPFBinding228)
          : gitGraphDiagramUUTBAWPFBinding60(
              gitGraphDiagramUUTBAWPFInput66,
              gitGraphDiagramUUTBAWPFInput67 -
                Math.abs(
                  gitGraphDiagramUUTBAWPFInput66 -
                    gitGraphDiagramUUTBAWPFInput67,
                ) /
                  5,
              gitGraphDiagramUUTBAWPFInput68 + 1,
            );
    },
    "findLane",
  );
  gitGraphDiagramUUTBAWPFBinding61 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput1,
      gitGraphDiagramUUTBAWPFInput2,
      gitGraphDiagramUUTBAWPFInput3,
      gitGraphDiagramUUTBAWPFInput4,
    ) => {
      let { theme } = chunkICPOFSXXB(),
        gitGraphDiagramUUTBAWPFBinding73 = gitGraphDiagramUUTBAWPFBinding33.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFBinding74 = gitGraphDiagramUUTBAWPFBinding37.get(
          gitGraphDiagramUUTBAWPFInput2.id,
        ),
        gitGraphDiagramUUTBAWPFBinding75 = gitGraphDiagramUUTBAWPFBinding37.get(
          gitGraphDiagramUUTBAWPFInput3.id,
        );
      if (
        gitGraphDiagramUUTBAWPFBinding74 === undefined ||
        gitGraphDiagramUUTBAWPFBinding75 === undefined
      )
        throw Error(
          `Commit positions not found for commits ${gitGraphDiagramUUTBAWPFInput2.id} and ${gitGraphDiagramUUTBAWPFInput3.id}`,
        );
      let gitGraphDiagramUUTBAWPFBinding76 = gitGraphDiagramUUTBAWPFBinding59(
          gitGraphDiagramUUTBAWPFInput2,
          gitGraphDiagramUUTBAWPFInput3,
          gitGraphDiagramUUTBAWPFBinding74,
          gitGraphDiagramUUTBAWPFBinding75,
          gitGraphDiagramUUTBAWPFInput4,
        ),
        gitGraphDiagramUUTBAWPFBinding77 = "",
        gitGraphDiagramUUTBAWPFBinding78 = "",
        gitGraphDiagramUUTBAWPFBinding79 = 0,
        gitGraphDiagramUUTBAWPFBinding80 = 0,
        gitGraphDiagramUUTBAWPFBinding81 = gitGraphDiagramUUTBAWPFBinding36.get(
          gitGraphDiagramUUTBAWPFInput3.branch,
        )?.index;
      gitGraphDiagramUUTBAWPFInput3.type ===
        gitGraphDiagramUUTBAWPFBinding1.MERGE &&
        gitGraphDiagramUUTBAWPFInput2.id !==
          gitGraphDiagramUUTBAWPFInput3.parents[0] &&
        (gitGraphDiagramUUTBAWPFBinding81 =
          gitGraphDiagramUUTBAWPFBinding36.get(
            gitGraphDiagramUUTBAWPFInput2.branch,
          )?.index);
      let gitGraphDiagramUUTBAWPFBinding82;
      if (gitGraphDiagramUUTBAWPFBinding76) {
        gitGraphDiagramUUTBAWPFBinding77 = "A 10 10, 0, 0, 0,";
        gitGraphDiagramUUTBAWPFBinding78 = "A 10 10, 0, 0, 1,";
        gitGraphDiagramUUTBAWPFBinding79 = 10;
        gitGraphDiagramUUTBAWPFBinding80 = 10;
        let gitGraphDiagramUUTBAWPFBinding141 =
            gitGraphDiagramUUTBAWPFBinding74.y <
            gitGraphDiagramUUTBAWPFBinding75.y
              ? gitGraphDiagramUUTBAWPFBinding60(
                  gitGraphDiagramUUTBAWPFBinding74.y,
                  gitGraphDiagramUUTBAWPFBinding75.y,
                )
              : gitGraphDiagramUUTBAWPFBinding60(
                  gitGraphDiagramUUTBAWPFBinding75.y,
                  gitGraphDiagramUUTBAWPFBinding74.y,
                ),
          gitGraphDiagramUUTBAWPFBinding142 =
            gitGraphDiagramUUTBAWPFBinding74.x <
            gitGraphDiagramUUTBAWPFBinding75.x
              ? gitGraphDiagramUUTBAWPFBinding60(
                  gitGraphDiagramUUTBAWPFBinding74.x,
                  gitGraphDiagramUUTBAWPFBinding75.x,
                )
              : gitGraphDiagramUUTBAWPFBinding60(
                  gitGraphDiagramUUTBAWPFBinding75.x,
                  gitGraphDiagramUUTBAWPFBinding74.x,
                );
        gitGraphDiagramUUTBAWPFBinding42 === "TB"
          ? gitGraphDiagramUUTBAWPFBinding74.x <
            gitGraphDiagramUUTBAWPFBinding75.x
            ? (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding142 - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding74.y + gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding75.y - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding142 + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`)
            : ((gitGraphDiagramUUTBAWPFBinding81 =
                gitGraphDiagramUUTBAWPFBinding36.get(
                  gitGraphDiagramUUTBAWPFInput2.branch,
                )?.index),
              (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding142 + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding74.y + gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding75.y - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding142 - gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`))
          : gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? gitGraphDiagramUUTBAWPFBinding74.x <
              gitGraphDiagramUUTBAWPFBinding75.x
              ? (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding142 - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding74.y - gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding75.y + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding142 + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`)
              : ((gitGraphDiagramUUTBAWPFBinding81 =
                  gitGraphDiagramUUTBAWPFBinding36.get(
                    gitGraphDiagramUUTBAWPFInput2.branch,
                  )?.index),
                (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding142 + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding74.y - gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding142} ${gitGraphDiagramUUTBAWPFBinding75.y + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding142 - gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`))
            : gitGraphDiagramUUTBAWPFBinding74.y <
                gitGraphDiagramUUTBAWPFBinding75.y
              ? (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding141 - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding74.x + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding141} L ${gitGraphDiagramUUTBAWPFBinding75.x - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding141} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding141 + gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`)
              : ((gitGraphDiagramUUTBAWPFBinding81 =
                  gitGraphDiagramUUTBAWPFBinding36.get(
                    gitGraphDiagramUUTBAWPFInput2.branch,
                  )?.index),
                (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding141 + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding74.x + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding141} L ${gitGraphDiagramUUTBAWPFBinding75.x - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding141} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding141 - gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`));
      } else {
        gitGraphDiagramUUTBAWPFBinding77 = "A 20 20, 0, 0, 0,";
        gitGraphDiagramUUTBAWPFBinding78 = "A 20 20, 0, 0, 1,";
        gitGraphDiagramUUTBAWPFBinding79 = 20;
        gitGraphDiagramUUTBAWPFBinding80 = 20;
        gitGraphDiagramUUTBAWPFBinding42 === "TB"
          ? (gitGraphDiagramUUTBAWPFBinding74.x <
              gitGraphDiagramUUTBAWPFBinding75.x &&
              (gitGraphDiagramUUTBAWPFBinding82 =
                gitGraphDiagramUUTBAWPFInput3.type ===
                  gitGraphDiagramUUTBAWPFBinding1.MERGE &&
                gitGraphDiagramUUTBAWPFInput2.id !==
                  gitGraphDiagramUUTBAWPFInput3.parents[0]
                  ? `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding75.y - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding74.x + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`
                  : `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding74.y + gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`),
            gitGraphDiagramUUTBAWPFBinding74.x >
              gitGraphDiagramUUTBAWPFBinding75.x &&
              ((gitGraphDiagramUUTBAWPFBinding77 = "A 20 20, 0, 0, 0,"),
              (gitGraphDiagramUUTBAWPFBinding78 = "A 20 20, 0, 0, 1,"),
              (gitGraphDiagramUUTBAWPFBinding79 = 20),
              (gitGraphDiagramUUTBAWPFBinding80 = 20),
              (gitGraphDiagramUUTBAWPFBinding82 =
                gitGraphDiagramUUTBAWPFInput3.type ===
                  gitGraphDiagramUUTBAWPFBinding1.MERGE &&
                gitGraphDiagramUUTBAWPFInput2.id !==
                  gitGraphDiagramUUTBAWPFInput3.parents[0]
                  ? `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding75.y - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding74.x - gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`
                  : `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding74.y + gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`)),
            gitGraphDiagramUUTBAWPFBinding74.x ===
              gitGraphDiagramUUTBAWPFBinding75.x &&
              (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`))
          : gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? (gitGraphDiagramUUTBAWPFBinding74.x <
                gitGraphDiagramUUTBAWPFBinding75.x &&
                (gitGraphDiagramUUTBAWPFBinding82 =
                  gitGraphDiagramUUTBAWPFInput3.type ===
                    gitGraphDiagramUUTBAWPFBinding1.MERGE &&
                  gitGraphDiagramUUTBAWPFInput2.id !==
                    gitGraphDiagramUUTBAWPFInput3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding75.y + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding74.x + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`
                    : `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding74.y - gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`),
              gitGraphDiagramUUTBAWPFBinding74.x >
                gitGraphDiagramUUTBAWPFBinding75.x &&
                ((gitGraphDiagramUUTBAWPFBinding77 = "A 20 20, 0, 0, 0,"),
                (gitGraphDiagramUUTBAWPFBinding78 = "A 20 20, 0, 0, 1,"),
                (gitGraphDiagramUUTBAWPFBinding79 = 20),
                (gitGraphDiagramUUTBAWPFBinding80 = 20),
                (gitGraphDiagramUUTBAWPFBinding82 =
                  gitGraphDiagramUUTBAWPFInput3.type ===
                    gitGraphDiagramUUTBAWPFBinding1.MERGE &&
                  gitGraphDiagramUUTBAWPFInput2.id !==
                    gitGraphDiagramUUTBAWPFInput3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding75.y + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding74.x - gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`
                    : `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding74.y - gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`)),
              gitGraphDiagramUUTBAWPFBinding74.x ===
                gitGraphDiagramUUTBAWPFBinding75.x &&
                (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`))
            : (gitGraphDiagramUUTBAWPFBinding74.y <
                gitGraphDiagramUUTBAWPFBinding75.y &&
                (gitGraphDiagramUUTBAWPFBinding82 =
                  gitGraphDiagramUUTBAWPFInput3.type ===
                    gitGraphDiagramUUTBAWPFBinding1.MERGE &&
                  gitGraphDiagramUUTBAWPFInput2.id !==
                    gitGraphDiagramUUTBAWPFInput3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding74.y + gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`
                    : `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding75.y - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding74.x + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`),
              gitGraphDiagramUUTBAWPFBinding74.y >
                gitGraphDiagramUUTBAWPFBinding75.y &&
                (gitGraphDiagramUUTBAWPFBinding82 =
                  gitGraphDiagramUUTBAWPFInput3.type ===
                    gitGraphDiagramUUTBAWPFBinding1.MERGE &&
                  gitGraphDiagramUUTBAWPFInput2.id !==
                    gitGraphDiagramUUTBAWPFInput3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x - gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding74.y} ${gitGraphDiagramUUTBAWPFBinding77} ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding74.y - gitGraphDiagramUUTBAWPFBinding80} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`
                    : `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding75.y + gitGraphDiagramUUTBAWPFBinding79} ${gitGraphDiagramUUTBAWPFBinding78} ${gitGraphDiagramUUTBAWPFBinding74.x + gitGraphDiagramUUTBAWPFBinding80} ${gitGraphDiagramUUTBAWPFBinding75.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`),
              gitGraphDiagramUUTBAWPFBinding74.y ===
                gitGraphDiagramUUTBAWPFBinding75.y &&
                (gitGraphDiagramUUTBAWPFBinding82 = `M ${gitGraphDiagramUUTBAWPFBinding74.x} ${gitGraphDiagramUUTBAWPFBinding74.y} L ${gitGraphDiagramUUTBAWPFBinding75.x} ${gitGraphDiagramUUTBAWPFBinding75.y}`));
      }
      if (gitGraphDiagramUUTBAWPFBinding82 === undefined)
        throw Error("Line definition not found");
      gitGraphDiagramUUTBAWPFInput1
        .append("path")
        .attr("d", gitGraphDiagramUUTBAWPFBinding82)
        .attr(
          "class",
          "arrow arrow" +
            gitGraphDiagramUUTBAWPFBinding35(
              gitGraphDiagramUUTBAWPFBinding81,
              gitGraphDiagramUUTBAWPFBinding30,
              gitGraphDiagramUUTBAWPFBinding73,
            ),
        );
    },
    "drawArrow",
  );
  gitGraphDiagramUUTBAWPFBinding62 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput62, gitGraphDiagramUUTBAWPFInput63) => {
      let gitGraphDiagramUUTBAWPFBinding220 = gitGraphDiagramUUTBAWPFInput62
        .append("g")
        .attr("class", "commit-arrows");
      [...gitGraphDiagramUUTBAWPFInput63.keys()].forEach((item) => {
        let gitGraphDiagramUUTBAWPFBinding246 =
          gitGraphDiagramUUTBAWPFInput63.get(item);
        gitGraphDiagramUUTBAWPFBinding246.parents &&
          gitGraphDiagramUUTBAWPFBinding246.parents.length > 0 &&
          gitGraphDiagramUUTBAWPFBinding246.parents.forEach((_item) => {
            gitGraphDiagramUUTBAWPFBinding61(
              gitGraphDiagramUUTBAWPFBinding220,
              gitGraphDiagramUUTBAWPFInput63.get(_item),
              gitGraphDiagramUUTBAWPFBinding246,
              gitGraphDiagramUUTBAWPFInput63,
            );
          });
      });
    },
    "drawArrows",
  );
  gitGraphDiagramUUTBAWPFBinding63 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFInput6,
      gitGraphDiagramUUTBAWPFInput7,
      gitGraphDiagramUUTBAWPFInput8,
      gitGraphDiagramUUTBAWPFInput9,
    ) => {
      let { look, theme, themeVariables } = chunkICPOFSXXB(),
        { dropShadow, THEME_COLOR_LIMIT } = themeVariables,
        gitGraphDiagramUUTBAWPFBinding90 = gitGraphDiagramUUTBAWPFBinding31.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFBinding91 = gitGraphDiagramUUTBAWPFBinding33.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFBinding92 =
          gitGraphDiagramUUTBAWPFInput6.append("g");
      gitGraphDiagramUUTBAWPFInput7.forEach((item, index) => {
        let gitGraphDiagramUUTBAWPFBinding104 =
            gitGraphDiagramUUTBAWPFBinding35(
              index,
              gitGraphDiagramUUTBAWPFBinding90
                ? THEME_COLOR_LIMIT
                : gitGraphDiagramUUTBAWPFBinding30,
              gitGraphDiagramUUTBAWPFBinding91,
            ),
          gitGraphDiagramUUTBAWPFBinding105 =
            gitGraphDiagramUUTBAWPFBinding36.get(item.name)?.pos;
        if (gitGraphDiagramUUTBAWPFBinding105 === undefined)
          throw Error(`Position not found for branch ${item.name}`);
        let gitGraphDiagramUUTBAWPFBinding106 =
            gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
            gitGraphDiagramUUTBAWPFBinding42 === "BT"
              ? gitGraphDiagramUUTBAWPFBinding105
              : gitGraphDiagramUUTBAWPFBinding90
                ? gitGraphDiagramUUTBAWPFBinding105 +
                  gitGraphDiagramUUTBAWPFBinding32 / 2 +
                  1
                : gitGraphDiagramUUTBAWPFBinding105 - 2,
          gitGraphDiagramUUTBAWPFBinding107 =
            gitGraphDiagramUUTBAWPFBinding92.append("line");
        gitGraphDiagramUUTBAWPFBinding107.attr("x1", 0);
        gitGraphDiagramUUTBAWPFBinding107.attr(
          "y1",
          gitGraphDiagramUUTBAWPFBinding106,
        );
        gitGraphDiagramUUTBAWPFBinding107.attr(
          "x2",
          gitGraphDiagramUUTBAWPFBinding41,
        );
        gitGraphDiagramUUTBAWPFBinding107.attr(
          "y2",
          gitGraphDiagramUUTBAWPFBinding106,
        );
        gitGraphDiagramUUTBAWPFBinding107.attr(
          "class",
          "branch branch" + gitGraphDiagramUUTBAWPFBinding104,
        );
        gitGraphDiagramUUTBAWPFBinding42 === "TB"
          ? (gitGraphDiagramUUTBAWPFBinding107.attr(
              "y1",
              gitGraphDiagramUUTBAWPFBinding38,
            ),
            gitGraphDiagramUUTBAWPFBinding107.attr(
              "x1",
              gitGraphDiagramUUTBAWPFBinding105,
            ),
            gitGraphDiagramUUTBAWPFBinding107.attr(
              "y2",
              gitGraphDiagramUUTBAWPFBinding41,
            ),
            gitGraphDiagramUUTBAWPFBinding107.attr(
              "x2",
              gitGraphDiagramUUTBAWPFBinding105,
            ))
          : gitGraphDiagramUUTBAWPFBinding42 === "BT" &&
            (gitGraphDiagramUUTBAWPFBinding107.attr(
              "y1",
              gitGraphDiagramUUTBAWPFBinding41,
            ),
            gitGraphDiagramUUTBAWPFBinding107.attr(
              "x1",
              gitGraphDiagramUUTBAWPFBinding105,
            ),
            gitGraphDiagramUUTBAWPFBinding107.attr(
              "y2",
              gitGraphDiagramUUTBAWPFBinding38,
            ),
            gitGraphDiagramUUTBAWPFBinding107.attr(
              "x2",
              gitGraphDiagramUUTBAWPFBinding105,
            ));
        gitGraphDiagramUUTBAWPFBinding40.push(
          gitGraphDiagramUUTBAWPFBinding106,
        );
        let gitGraphDiagramUUTBAWPFBinding108 = item.name,
          gitGraphDiagramUUTBAWPFBinding109 = gitGraphDiagramUUTBAWPFBinding44(
            gitGraphDiagramUUTBAWPFBinding108,
          ),
          gitGraphDiagramUUTBAWPFBinding110 =
            gitGraphDiagramUUTBAWPFBinding92.insert("rect"),
          gitGraphDiagramUUTBAWPFBinding111 = gitGraphDiagramUUTBAWPFBinding92
            .insert("g")
            .attr("class", "branchLabel")
            .insert("g")
            .attr(
              "class",
              "label branch-label" + gitGraphDiagramUUTBAWPFBinding104,
            );
        gitGraphDiagramUUTBAWPFBinding111
          .node()
          .appendChild(gitGraphDiagramUUTBAWPFBinding109);
        let gitGraphDiagramUUTBAWPFBinding112 =
            gitGraphDiagramUUTBAWPFBinding109.getBBox(),
          gitGraphDiagramUUTBAWPFBinding113 = gitGraphDiagramUUTBAWPFBinding90
            ? 0
            : 4,
          gitGraphDiagramUUTBAWPFBinding114 = gitGraphDiagramUUTBAWPFBinding90
            ? 16
            : 0,
          gitGraphDiagramUUTBAWPFBinding115 = gitGraphDiagramUUTBAWPFBinding90
            ? gitGraphDiagramUUTBAWPFBinding32
            : 0;
        look === "neo" &&
          gitGraphDiagramUUTBAWPFBinding110.attr("data-look", "neo");
        gitGraphDiagramUUTBAWPFBinding110
          .attr(
            "class",
            "branchLabelBkg label" + gitGraphDiagramUUTBAWPFBinding104,
          )
          .attr(
            "style",
            look === "neo"
              ? `filter:${gitGraphDiagramUUTBAWPFBinding90 ? `url(#${gitGraphDiagramUUTBAWPFInput9}-drop-shadow)` : dropShadow}`
              : "",
          )
          .attr("rx", gitGraphDiagramUUTBAWPFBinding113)
          .attr("ry", gitGraphDiagramUUTBAWPFBinding113)
          .attr(
            "x",
            -gitGraphDiagramUUTBAWPFBinding112.width -
              4 -
              (gitGraphDiagramUUTBAWPFInput8.rotateCommitLabel === true
                ? 30
                : 0),
          )
          .attr("y", -gitGraphDiagramUUTBAWPFBinding112.height / 2 + 10)
          .attr(
            "width",
            gitGraphDiagramUUTBAWPFBinding112.width +
              18 +
              gitGraphDiagramUUTBAWPFBinding114,
          )
          .attr(
            "height",
            gitGraphDiagramUUTBAWPFBinding112.height +
              4 +
              gitGraphDiagramUUTBAWPFBinding115,
          );
        gitGraphDiagramUUTBAWPFBinding111.attr(
          "transform",
          "translate(" +
            (-gitGraphDiagramUUTBAWPFBinding112.width -
              14 -
              (gitGraphDiagramUUTBAWPFInput8.rotateCommitLabel === true
                ? 30
                : 0) +
              gitGraphDiagramUUTBAWPFBinding114 / 2) +
            ", " +
            (gitGraphDiagramUUTBAWPFBinding106 -
              gitGraphDiagramUUTBAWPFBinding112.height / 2 -
              2) +
            ")",
        );
        gitGraphDiagramUUTBAWPFBinding42 === "TB"
          ? (gitGraphDiagramUUTBAWPFBinding110
              .attr(
                "x",
                gitGraphDiagramUUTBAWPFBinding105 -
                  gitGraphDiagramUUTBAWPFBinding112.width / 2 -
                  10,
              )
              .attr("y", 0),
            gitGraphDiagramUUTBAWPFBinding111.attr(
              "transform",
              "translate(" +
                (gitGraphDiagramUUTBAWPFBinding105 -
                  gitGraphDiagramUUTBAWPFBinding112.width / 2 -
                  5) +
                ", 0)",
            ),
            gitGraphDiagramUUTBAWPFBinding90 &&
              (gitGraphDiagramUUTBAWPFBinding110.attr(
                "transform",
                `translate(${-gitGraphDiagramUUTBAWPFBinding114 / 2 - 3}, ${-gitGraphDiagramUUTBAWPFBinding115 - 10})`,
              ),
              gitGraphDiagramUUTBAWPFBinding111.attr(
                "transform",
                "translate(" +
                  (gitGraphDiagramUUTBAWPFBinding105 -
                    gitGraphDiagramUUTBAWPFBinding112.width / 2 -
                    5) +
                  ", " +
                  (-gitGraphDiagramUUTBAWPFBinding115 * 2 + 7) +
                  ")",
              )))
          : gitGraphDiagramUUTBAWPFBinding42 === "BT"
            ? (gitGraphDiagramUUTBAWPFBinding110
                .attr(
                  "x",
                  gitGraphDiagramUUTBAWPFBinding105 -
                    gitGraphDiagramUUTBAWPFBinding112.width / 2 -
                    10,
                )
                .attr("y", gitGraphDiagramUUTBAWPFBinding41),
              gitGraphDiagramUUTBAWPFBinding111.attr(
                "transform",
                "translate(" +
                  (gitGraphDiagramUUTBAWPFBinding105 -
                    gitGraphDiagramUUTBAWPFBinding112.width / 2 -
                    5) +
                  ", " +
                  gitGraphDiagramUUTBAWPFBinding41 +
                  ")",
              ),
              gitGraphDiagramUUTBAWPFBinding90 &&
                (gitGraphDiagramUUTBAWPFBinding110.attr(
                  "transform",
                  `translate(${-gitGraphDiagramUUTBAWPFBinding114 / 2 - 3}, ${gitGraphDiagramUUTBAWPFBinding115 + 10})`,
                ),
                gitGraphDiagramUUTBAWPFBinding111.attr(
                  "transform",
                  "translate(" +
                    (gitGraphDiagramUUTBAWPFBinding105 -
                      gitGraphDiagramUUTBAWPFBinding112.width / 2 -
                      5) +
                    ", " +
                    (gitGraphDiagramUUTBAWPFBinding41 +
                      gitGraphDiagramUUTBAWPFBinding115 * 2 +
                      4) +
                    ")",
                )))
            : gitGraphDiagramUUTBAWPFBinding110.attr(
                "transform",
                "translate(-19, " +
                  (gitGraphDiagramUUTBAWPFBinding106 -
                    12 -
                    gitGraphDiagramUUTBAWPFBinding115 / 2) +
                  ")",
              );
      });
    },
    "drawBranches",
  );
  gitGraphDiagramUUTBAWPFBinding64 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFInput75,
    gitGraphDiagramUUTBAWPFInput76,
    gitGraphDiagramUUTBAWPFInput77,
    gitGraphDiagramUUTBAWPFInput78,
    gitGraphDiagramUUTBAWPFInput79,
  ) {
    return (
      gitGraphDiagramUUTBAWPFBinding36.set(gitGraphDiagramUUTBAWPFInput75, {
        pos: gitGraphDiagramUUTBAWPFInput76,
        index: gitGraphDiagramUUTBAWPFInput77,
      }),
      (gitGraphDiagramUUTBAWPFInput76 +=
        50 +
        (gitGraphDiagramUUTBAWPFInput79 ? 40 : 0) +
        (gitGraphDiagramUUTBAWPFBinding42 === "TB" ||
        gitGraphDiagramUUTBAWPFBinding42 === "BT"
          ? gitGraphDiagramUUTBAWPFInput78.width / 2
          : 0)),
      gitGraphDiagramUUTBAWPFInput76
    );
  }, "setBranchPosition");
  gitGraphDiagramUUTBAWPFBinding65 = {
    draw: chunkAGHRB4JFN(function (
      gitGraphDiagramUUTBAWPFInput18,
      gitGraphDiagramUUTBAWPFInput19,
      gitGraphDiagramUUTBAWPFInput20,
      gitGraphDiagramUUTBAWPFInput21,
    ) {
      gitGraphDiagramUUTBAWPFBinding43();
      chunkAGHRB4JFI.debug(
        "in gitgraph renderer",
        gitGraphDiagramUUTBAWPFInput18 + "\n",
        "id:",
        gitGraphDiagramUUTBAWPFInput19,
        gitGraphDiagramUUTBAWPFInput20,
      );
      let gitGraphDiagramUUTBAWPFBinding120 = gitGraphDiagramUUTBAWPFInput21.db;
      if (!gitGraphDiagramUUTBAWPFBinding120.getConfig) {
        chunkAGHRB4JFI.error("getConfig method is not available on db");
        return;
      }
      let gitGraphDiagramUUTBAWPFBinding121 =
          gitGraphDiagramUUTBAWPFBinding120.getConfig(),
        gitGraphDiagramUUTBAWPFBinding122 =
          gitGraphDiagramUUTBAWPFBinding121.rotateCommitLabel ?? false;
      gitGraphDiagramUUTBAWPFBinding39 =
        gitGraphDiagramUUTBAWPFBinding120.getCommits();
      let gitGraphDiagramUUTBAWPFBinding123 =
        gitGraphDiagramUUTBAWPFBinding120.getBranchesAsObjArray();
      gitGraphDiagramUUTBAWPFBinding42 =
        gitGraphDiagramUUTBAWPFBinding120.getDirection();
      let gitGraphDiagramUUTBAWPFBinding124 = srcR(
          `[id="${gitGraphDiagramUUTBAWPFInput19}"]`,
        ),
        { look, theme, themeVariables } = chunkICPOFSXXB(),
        {
          useGradient,
          gradientStart: gitGraphDiagramUUTBAWPFBinding125,
          gradientStop,
          filterColor,
        } = themeVariables;
      if (useGradient) {
        let gitGraphDiagramUUTBAWPFBinding172 =
          gitGraphDiagramUUTBAWPFBinding124
            .append("defs")
            .append("linearGradient")
            .attr("id", gitGraphDiagramUUTBAWPFInput19 + "-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");
        gitGraphDiagramUUTBAWPFBinding172
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", gitGraphDiagramUUTBAWPFBinding125)
          .attr("stop-opacity", 1);
        gitGraphDiagramUUTBAWPFBinding172
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", gradientStop)
          .attr("stop-opacity", 1);
      }
      look === "neo" &&
        gitGraphDiagramUUTBAWPFBinding31.has(theme ?? "") &&
        gitGraphDiagramUUTBAWPFBinding124
          .append("defs")
          .append("filter")
          .attr("id", gitGraphDiagramUUTBAWPFInput19 + "-drop-shadow")
          .attr("height", "130%")
          .attr("width", "130%")
          .append("feDropShadow")
          .attr("dx", "4")
          .attr("dy", "4")
          .attr("stdDeviation", 0)
          .attr("flood-opacity", "0.06")
          .attr("flood-color", filterColor);
      let gitGraphDiagramUUTBAWPFBinding126 = 0;
      gitGraphDiagramUUTBAWPFBinding123.forEach((item, index) => {
        let gitGraphDiagramUUTBAWPFBinding202 =
            gitGraphDiagramUUTBAWPFBinding44(item.name),
          gitGraphDiagramUUTBAWPFBinding203 =
            gitGraphDiagramUUTBAWPFBinding124.append("g"),
          gitGraphDiagramUUTBAWPFBinding204 = gitGraphDiagramUUTBAWPFBinding203
            .insert("g")
            .attr("class", "branchLabel"),
          gitGraphDiagramUUTBAWPFBinding205 = gitGraphDiagramUUTBAWPFBinding204
            .insert("g")
            .attr("class", "label branch-label");
        gitGraphDiagramUUTBAWPFBinding205
          .node()
          ?.appendChild(gitGraphDiagramUUTBAWPFBinding202);
        let gitGraphDiagramUUTBAWPFBinding206 =
          gitGraphDiagramUUTBAWPFBinding202.getBBox();
        gitGraphDiagramUUTBAWPFBinding126 = gitGraphDiagramUUTBAWPFBinding64(
          item.name,
          gitGraphDiagramUUTBAWPFBinding126,
          index,
          gitGraphDiagramUUTBAWPFBinding206,
          gitGraphDiagramUUTBAWPFBinding122,
        );
        gitGraphDiagramUUTBAWPFBinding205.remove();
        gitGraphDiagramUUTBAWPFBinding204.remove();
        gitGraphDiagramUUTBAWPFBinding203.remove();
      });
      gitGraphDiagramUUTBAWPFBinding58(
        gitGraphDiagramUUTBAWPFBinding124,
        gitGraphDiagramUUTBAWPFBinding39,
        false,
        gitGraphDiagramUUTBAWPFBinding121,
      );
      gitGraphDiagramUUTBAWPFBinding121.showBranches &&
        gitGraphDiagramUUTBAWPFBinding63(
          gitGraphDiagramUUTBAWPFBinding124,
          gitGraphDiagramUUTBAWPFBinding123,
          gitGraphDiagramUUTBAWPFBinding121,
          gitGraphDiagramUUTBAWPFInput19,
        );
      gitGraphDiagramUUTBAWPFBinding62(
        gitGraphDiagramUUTBAWPFBinding124,
        gitGraphDiagramUUTBAWPFBinding39,
      );
      gitGraphDiagramUUTBAWPFBinding58(
        gitGraphDiagramUUTBAWPFBinding124,
        gitGraphDiagramUUTBAWPFBinding39,
        true,
        gitGraphDiagramUUTBAWPFBinding121,
      );
      chunk5PVQY5BWG.insertTitle(
        gitGraphDiagramUUTBAWPFBinding124,
        "gitTitleText",
        gitGraphDiagramUUTBAWPFBinding121.titleTopMargin ?? 0,
        gitGraphDiagramUUTBAWPFBinding120.getDiagramTitle(),
      );
      chunkICPOFSXXJ(
        undefined,
        gitGraphDiagramUUTBAWPFBinding124,
        gitGraphDiagramUUTBAWPFBinding121.diagramPadding,
        gitGraphDiagramUUTBAWPFBinding121.useMaxWidth,
      );
    }, "draw"),
  };
  gitGraphDiagramUUTBAWPFBinding66 = 8;
  $ = new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
  gitGraphDiagramUUTBAWPFBinding67 = new Set([
    "redux-color",
    "redux-dark-color",
  ]);
  gitGraphDiagramUUTBAWPFBinding68 = new Set(["neo", "neo-dark"]);
  gitGraphDiagramUUTBAWPFBinding69 = new Set([
    "dark",
    "redux-dark",
    "redux-dark-color",
    "neo-dark",
  ]);
  gitGraphDiagramUUTBAWPFBinding70 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
    "neo",
    "neo-dark",
  ]);
  gitGraphDiagramUUTBAWPFBinding71 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput61) => {
      let { svgId } = gitGraphDiagramUUTBAWPFInput61,
        gitGraphDiagramUUTBAWPFBinding217 = "";
      if (gitGraphDiagramUUTBAWPFInput61.useGradient && svgId)
        for (
          let gitGraphDiagramUUTBAWPFBinding247 = 0;
          gitGraphDiagramUUTBAWPFBinding247 <
          gitGraphDiagramUUTBAWPFInput61.THEME_COLOR_LIMIT;
          gitGraphDiagramUUTBAWPFBinding247++
        )
          gitGraphDiagramUUTBAWPFBinding217 += `
      .label${gitGraphDiagramUUTBAWPFBinding247}  { fill: ${gitGraphDiagramUUTBAWPFInput61.mainBkg}; stroke: url(${svgId}-gradient); stroke-width: ${gitGraphDiagramUUTBAWPFInput61.strokeWidth};}
             `;
      return gitGraphDiagramUUTBAWPFBinding217;
    },
    "genGitGraphGradient",
  );
  $e = chunkAGHRB4JFN((gitGraphDiagramUUTBAWPFInput17) => {
    let { theme, themeVariables } = chunkICPOFSXXY(),
      { borderColorArray } = themeVariables,
      gitGraphDiagramUUTBAWPFBinding119 = $.has(theme);
    if (gitGraphDiagramUUTBAWPFBinding68.has(theme)) {
      let gitGraphDiagramUUTBAWPFBinding159 = "";
      for (
        let gitGraphDiagramUUTBAWPFBinding160 = 0;
        gitGraphDiagramUUTBAWPFBinding160 <
        gitGraphDiagramUUTBAWPFInput17.THEME_COLOR_LIMIT;
        gitGraphDiagramUUTBAWPFBinding160++
      )
        if (gitGraphDiagramUUTBAWPFBinding160 === 0)
          gitGraphDiagramUUTBAWPFBinding159 += `
        .branch-label${gitGraphDiagramUUTBAWPFBinding160} { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder};}
        .commit${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder};   }
        .commit-highlight${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .arrow${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .commit-bullets { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .commit-cherry-pick${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        ${gitGraphDiagramUUTBAWPFBinding71(gitGraphDiagramUUTBAWPFInput17)}`;
        else {
          let gitGraphDiagramUUTBAWPFBinding207 =
            gitGraphDiagramUUTBAWPFBinding160 %
            gitGraphDiagramUUTBAWPFBinding66;
          gitGraphDiagramUUTBAWPFBinding159 += `
        .branch-label${gitGraphDiagramUUTBAWPFBinding160} { fill: ${gitGraphDiagramUUTBAWPFInput17["gitBranchLabel" + gitGraphDiagramUUTBAWPFBinding207]}; }
        .commit${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17["git" + gitGraphDiagramUUTBAWPFBinding207]}; fill: ${gitGraphDiagramUUTBAWPFInput17["git" + gitGraphDiagramUUTBAWPFBinding207]}; }
        .commit-highlight${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17["gitInv" + gitGraphDiagramUUTBAWPFBinding207]}; fill: ${gitGraphDiagramUUTBAWPFInput17["gitInv" + gitGraphDiagramUUTBAWPFBinding207]}; }
        .arrow${gitGraphDiagramUUTBAWPFBinding160} { stroke: ${gitGraphDiagramUUTBAWPFInput17["git" + gitGraphDiagramUUTBAWPFBinding207]}; }
        `;
        }
      return gitGraphDiagramUUTBAWPFBinding159;
    } else if (gitGraphDiagramUUTBAWPFBinding67.has(theme)) {
      let gitGraphDiagramUUTBAWPFBinding150 = "";
      for (
        let gitGraphDiagramUUTBAWPFBinding151 = 0;
        gitGraphDiagramUUTBAWPFBinding151 <
        gitGraphDiagramUUTBAWPFInput17.THEME_COLOR_LIMIT;
        gitGraphDiagramUUTBAWPFBinding151++
      )
        if (gitGraphDiagramUUTBAWPFBinding151 === 0)
          gitGraphDiagramUUTBAWPFBinding150 += `
        .branch-label${gitGraphDiagramUUTBAWPFBinding151} { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; ${gitGraphDiagramUUTBAWPFBinding119 ? `font-weight:${gitGraphDiagramUUTBAWPFInput17.noteFontWeight}` : ""} }
        .commit${gitGraphDiagramUUTBAWPFBinding151} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .commit-highlight${gitGraphDiagramUUTBAWPFBinding151} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; fill: ${gitGraphDiagramUUTBAWPFInput17.mainBkg}; }
        .label${gitGraphDiagramUUTBAWPFBinding151}  { fill: ${gitGraphDiagramUUTBAWPFInput17.mainBkg}; stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; stroke-width: ${gitGraphDiagramUUTBAWPFInput17.strokeWidth}; ${gitGraphDiagramUUTBAWPFBinding119 ? `font-weight:${gitGraphDiagramUUTBAWPFInput17.noteFontWeight}` : ""} }
        .arrow${gitGraphDiagramUUTBAWPFBinding151} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .commit-bullets { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        `;
        else {
          let gitGraphDiagramUUTBAWPFBinding183 =
            gitGraphDiagramUUTBAWPFBinding151 % borderColorArray.length;
          gitGraphDiagramUUTBAWPFBinding150 += `
        .branch-label${gitGraphDiagramUUTBAWPFBinding151} { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; ${gitGraphDiagramUUTBAWPFBinding119 ? `font-weight:${gitGraphDiagramUUTBAWPFInput17.noteFontWeight}` : ""} }
        .commit${gitGraphDiagramUUTBAWPFBinding151} { stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFBinding183]}; fill: ${borderColorArray[gitGraphDiagramUUTBAWPFBinding183]}; }
        .commit-highlight${gitGraphDiagramUUTBAWPFBinding151} { stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFBinding183]}; fill: ${borderColorArray[gitGraphDiagramUUTBAWPFBinding183]}; }
        .label${gitGraphDiagramUUTBAWPFBinding151}  { fill: ${gitGraphDiagramUUTBAWPFBinding69.has(theme) ? gitGraphDiagramUUTBAWPFInput17.mainBkg : borderColorArray[gitGraphDiagramUUTBAWPFBinding183]}; stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFBinding183]};  stroke-width: ${gitGraphDiagramUUTBAWPFInput17.strokeWidth}; }
        .arrow${gitGraphDiagramUUTBAWPFBinding151} { stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFBinding183]}; }
        `;
        }
      return gitGraphDiagramUUTBAWPFBinding150;
    } else {
      let gitGraphDiagramUUTBAWPFBinding169 = "";
      for (
        let gitGraphDiagramUUTBAWPFBinding173 = 0;
        gitGraphDiagramUUTBAWPFBinding173 <
        gitGraphDiagramUUTBAWPFInput17.THEME_COLOR_LIMIT;
        gitGraphDiagramUUTBAWPFBinding173++
      )
        gitGraphDiagramUUTBAWPFBinding169 += `
        .branch-label${gitGraphDiagramUUTBAWPFBinding173} { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; ${gitGraphDiagramUUTBAWPFBinding119 ? `font-weight:${gitGraphDiagramUUTBAWPFInput17.noteFontWeight}` : ""} }
        .commit${gitGraphDiagramUUTBAWPFBinding173} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder};   }
        .commit-highlight${gitGraphDiagramUUTBAWPFBinding173} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .label${gitGraphDiagramUUTBAWPFBinding173}  { fill: ${gitGraphDiagramUUTBAWPFInput17.mainBkg}; stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; stroke-width: ${gitGraphDiagramUUTBAWPFInput17.strokeWidth}; ${gitGraphDiagramUUTBAWPFBinding119 ? `font-weight:${gitGraphDiagramUUTBAWPFInput17.noteFontWeight}` : ""}}
        .arrow${gitGraphDiagramUUTBAWPFBinding173} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .commit-bullets { fill: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        .commit-cherry-pick${gitGraphDiagramUUTBAWPFBinding173} { stroke: ${gitGraphDiagramUUTBAWPFInput17.nodeBorder}; }
        `;
      return gitGraphDiagramUUTBAWPFBinding169;
    }
  }, "genColor");
  gitGraphDiagramUUTBAWPFBinding72 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFInput44) =>
      `${Array.from(
        {
          length: gitGraphDiagramUUTBAWPFInput44.THEME_COLOR_LIMIT,
        },
        (gitGraphDiagramUUTBAWPFInput118, gitGraphDiagramUUTBAWPFInput119) =>
          gitGraphDiagramUUTBAWPFInput119,
      )
        .map((item) => {
          let gitGraphDiagramUUTBAWPFBinding193 =
            item % gitGraphDiagramUUTBAWPFBinding66;
          return `
        .branch-label${item} { fill: ${gitGraphDiagramUUTBAWPFInput44["gitBranchLabel" + gitGraphDiagramUUTBAWPFBinding193]}; }
        .commit${item} { stroke: ${gitGraphDiagramUUTBAWPFInput44["git" + gitGraphDiagramUUTBAWPFBinding193]}; fill: ${gitGraphDiagramUUTBAWPFInput44["git" + gitGraphDiagramUUTBAWPFBinding193]}; }
        .commit-highlight${item} { stroke: ${gitGraphDiagramUUTBAWPFInput44["gitInv" + gitGraphDiagramUUTBAWPFBinding193]}; fill: ${gitGraphDiagramUUTBAWPFInput44["gitInv" + gitGraphDiagramUUTBAWPFBinding193]}; }
        .label${item}  { fill: ${gitGraphDiagramUUTBAWPFInput44["git" + gitGraphDiagramUUTBAWPFBinding193]}; }
        .arrow${item} { stroke: ${gitGraphDiagramUUTBAWPFInput44["git" + gitGraphDiagramUUTBAWPFBinding193]}; }
        `;
        })
        .join("\n")}`,
    "normalTheme",
  );
  gitGraphDiagramUUTBAWPF = {
    parser: gitGraphDiagramUUTBAWPFBinding25,
    db: gitGraphDiagramUUTBAWPFBinding17,
    renderer: gitGraphDiagramUUTBAWPFBinding65,
    styles: chunkAGHRB4JFN((gitGraphDiagramUUTBAWPFInput26) => {
      let { theme } = chunkICPOFSXXY(),
        gitGraphDiagramUUTBAWPFBinding134 =
          gitGraphDiagramUUTBAWPFBinding70.has(theme);
      return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${gitGraphDiagramUUTBAWPFBinding134 ? $e(gitGraphDiagramUUTBAWPFInput26) : gitGraphDiagramUUTBAWPFBinding72(gitGraphDiagramUUTBAWPFInput26)}

  .branch {
    stroke-width: ${gitGraphDiagramUUTBAWPFInput26.strokeWidth};
    stroke: ${gitGraphDiagramUUTBAWPFInput26.commitLineColor ?? gitGraphDiagramUUTBAWPFInput26.lineColor};
    stroke-dasharray:  ${gitGraphDiagramUUTBAWPFBinding134 ? "4 2" : "2"};
  }
  .commit-label { font-size: ${gitGraphDiagramUUTBAWPFInput26.commitLabelFontSize}; fill: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.nodeBorder : gitGraphDiagramUUTBAWPFInput26.commitLabelColor}; ${gitGraphDiagramUUTBAWPFBinding134 ? `font-weight:${gitGraphDiagramUUTBAWPFInput26.noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${gitGraphDiagramUUTBAWPFInput26.commitLabelFontSize}; fill: ${gitGraphDiagramUUTBAWPFBinding134 ? "transparent" : gitGraphDiagramUUTBAWPFInput26.commitLabelBackground}; opacity: ${gitGraphDiagramUUTBAWPFBinding134 ? "" : 0.5};  }
  .tag-label { font-size: ${gitGraphDiagramUUTBAWPFInput26.tagLabelFontSize}; fill: ${gitGraphDiagramUUTBAWPFInput26.tagLabelColor};}
  .tag-label-bkg { fill: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.tagLabelBackground}; stroke: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.nodeBorder : gitGraphDiagramUUTBAWPFInput26.tagLabelBorder}; ${gitGraphDiagramUUTBAWPFBinding134 ? `filter:${gitGraphDiagramUUTBAWPFInput26.dropShadow}` : ""}  }
  .tag-hole { fill: ${gitGraphDiagramUUTBAWPFInput26.textColor}; }

  .commit-merge {
    stroke: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.primaryColor};
    fill: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.primaryColor};
  }
  .commit-reverse {
    stroke: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.primaryColor};
    fill: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.primaryColor};
    stroke-width: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.primaryColor};
    fill: ${gitGraphDiagramUUTBAWPFBinding134 ? gitGraphDiagramUUTBAWPFInput26.mainBkg : gitGraphDiagramUUTBAWPFInput26.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${$.has(theme) ? gitGraphDiagramUUTBAWPFInput26.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${gitGraphDiagramUUTBAWPFInput26.textColor};
  }
`;
    }, "getStyles"),
  };
})();
export { gitGraphDiagramUUTBAWPF as diagram };
