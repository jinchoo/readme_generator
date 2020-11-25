// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            name:  'username',
            message:  'What is your GitHub username?'
        },
        {
            type:  'input',
            name:  'email',
            message:  'What is your email address?',
        },
        {
            type: 'input',
            name:  'project',
            message:  "What is your project's name?"
        },
        {
            type:  'input',
            name:  'description',
            message:  'Write a short description of your project?'
        },
        {
            type:  'list',
            message:  'What kind of license should your project have?',
            name:  'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type:  'input',
            name:  'dependencies',
            message:  'What command should be run to install dependencies? npm i',
        },
        {
            type:  'input',
            name:  'tests',
            message:  'What command should be run to run tests? npm tests',
        },
        {
            type:  'input',
            name:  'repo',
            message:  'What does the user need to know about using the repo?'
        },
        {
            type:  'input',
            name:  'contributing',
            message:  'What does the user need to know about contributing to the repo?'
        }
    ])
    .then(function(answers) {
        console.log(answers);
    })


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
