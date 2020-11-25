// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// // function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!  Your README.md file has been generated");
  });
}

// // function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "project",
        message: "What is your project's name?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description of your project?",
      },
      {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "contributing",
        message:
          "What does the user need to know about contributing to the repo?",
      },
    ])
    .then(function (answers) {
      writeToFile("README2.md", generateMarkdown(answers));
      console.log(answers);
    });
}

// // function call to initialize program
init();
