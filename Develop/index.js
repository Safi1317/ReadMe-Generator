// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

//  an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the tittle of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "what is the project about?",
    name: "Description",
  },

  {
    type: "input",
    message: "How is the application used?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What does the user need to install to run this application?",
    name: "Installation",
  },
  {
    type: "list",
    message: "What licence was used for this project?",
    name: "license",
    choices: ["MIT", "Apache", "IBM", "none"],
  },
  {
    type: "input",
    message: "Who was involved in the project?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "what commands are used to test this project?",
    name: "Test",
  },
  {
    type: "input",
    message: "What is your git username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "Email",
  },
];

//  a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//  a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile("README.md", generateMarkdown({ ...responses }));
    console.log(responses);
  });
}

// Function call to initialize app
init();
