const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    console.log("Hello World!");
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
