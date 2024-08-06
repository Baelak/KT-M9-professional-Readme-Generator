// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {generateCompleteMarkdown} = require('./utils/generateMarkdown.js');
const logoPath = "../generatedQR.png";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your Project title 😊",

    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your Project 😊",
    
    },
    {
        type: "input",
        name: "link",
        message: "Please enter a URL for your Project 😊",
    
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select licenses used for your Project 😊",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    
    },
    {
        type: "input",
        name: "require",
        message: "Please enter dependencies for your Project 😊",
    
    },
    {
        type: "input",
        name: "features",
        message: "Please enter features of your Project 😊",
    
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter languages and technologies used for your Project 😊",
    
    },
    {
        type: "input",
        name: "creator",
        message: "Please enter your GitHub username 😊",
    
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your Email address 😊",
    
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter any contributor's GitHub usernames 😊",
        default: "",
    
    },
    {
        type: "input",
        name: "test",
        message: "Please enter walkthrough of required tests if applicable 😊",
    
    },
    {
        type: "prompt",
        name: "questions",
        message: "Please feel free to email me at teklemichaelkaleab@gmail.com if you have any questions 😊",
    
    },
    
];

// TODO: Create a function to write README file
function init() {
     inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      responses.logoPath = logoPath;
      const markdownContent = generateCompleteMarkdown(responses);
       writeToFile("./generatedREADME/README.md", markdownContent);
    });
  }

init();
// TODO: Create a function to write to a README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };


  