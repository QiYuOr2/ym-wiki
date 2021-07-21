const execSync = require("child_process").execSync;

/**
 * @param {Array} cmds
 */
function execCommands(cmds, { cwd }) {
  try {
    cmds.forEach((cmd) => {
      execSync(cmd, { cwd });
    });
    console.log("finish");
  } catch (error) {
    console.warn(error);
  }
}

const moduleName = process.argv[2];

execCommands(
  [
    `nest g module modules/${moduleName}`,
    `nest g service modules/${moduleName}`,
    `nest g controller modules/${moduleName}`,
  ],
  { cwd: "server" }
);
