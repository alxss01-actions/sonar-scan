const core = require("@actions/core");
const github = require("@actions/github");
const { exec } = require("child_process");

async function run() {
  try {
    const projectName = core.getInput("projectName", { required: true });
    const projectKey = core.getInput("projectKey", { required: true });
    const appVersion = core.getInput("appVersion", { required: false });
    const url = core.getInput("url", { required: true });
    const token = core.getInput("token", { required: true });

    const command =
      `mvn sonar:sonar -Dsonar.projectName=${projectName} ` +
      `-Dsonar.projectKey=${projectKey} ` +
      `-Dsonar.projectVersion=${appVersion} ` +
      `-Dsonar.host.url=${url} ` +
      `-Dsonar.login=${token}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        core.setFailed(`Erro ao executar Sonar Scanner: ${error.message}`);
      }
      if (stderr) {
        core.warning(`Aviso: ${stderr}`);
      }
      core.info(stdout);
    });
    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
