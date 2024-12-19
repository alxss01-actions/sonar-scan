const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const projectName = core.getInput("projectName", { required: true });
    const projectKey = core.getInput("projectKey", { required: true });
    const appVersion = core.getInput("appVersion", { required: false });
    const url = core.getInput("url", { required: true });
    const token = core.getInput("token", { required: true });

    console.log(`Nome do Projeto: ${projectName}`);

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
