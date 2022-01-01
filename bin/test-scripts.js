#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error("Failed to execute ${command}", e);
    return false;
  }
  return true;
};

process.on("unhandledRejection", (err) => {
  throw err;
});

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  (x) => x === "build" || x === "start" || x === "test"
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];

if (["build", "start", "test"].includes(script)) {
  switch (script) {
    case "build":
      console.log("building...");
      break;
    case "start":
      runStart();
      break;
    case "test":
      console.log("testing...");
      break;
  }
  process.exit(result.status);
} else {
  console.log('Unknown script "' + script + '".');
  console.log("Perhaps you need to update react-scripts?");
  console.log(
    "See: https://facebook.github.io/create-react-app/docs/updating-to-new-releases"
  );
}

// const gitCheckoutCommand = `git clone --depth 1 https://github.com/hhimanshu/react-ts-starter ${repoName}`;
// const installDepsCommand = `cd ${repoName} && npm install`;

// console.log(`Cloning the repository with name ${repoName}`);
// const checkedOut = runCommand(gitCheckoutCommand);
// if (!checkedOut) process.exit(-1);

// console.log(`Installing dependencies for ${repoName}`);
// const installedDeps = runCommand(installDepsCommand);
// if (!installedDeps) process.exit(-1);

// console.log(
//   'Congratulations! You are ready. Follow the following commands to start'
// );
// console.log(`cd ${repoName} && npm start`);

const runStart = () => {
  console.log("starting...");
  // const installDepsCommand = `npm install`;

  // const installedDeps = runCommand(installDepsCommand);
  // if (!installedDeps) process.exit(-1);

  // console.log(
  //   "Congratulations! You are ready. Dont forget configure your Webpack."
  // );
};
