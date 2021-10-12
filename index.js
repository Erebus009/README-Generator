// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
      },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        
     
      },
    {
        type: "input",
        name: "description",
        message: "What is your project description",
        
      },
    {
        type: "input",
        name: "install",
        message: "How to install your project?",
        
      },
    {
        type: "input",
        name: "Usage",
        message: "Explain the usage of your project?",
        
      },
    {
        type: "list",
        name: "license",
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC']
        
      },
    {
        type: "input",
        name: "contributions",
        message: 'Contribution guidelines to give others?'
        
      },
    {
        type: "input",
        name: "test",
        message: 'Please enter any testing guidelines for users'
        
      },
    {
        type: "input",
        name: "email",
        message: 'What is your email address to best contact you?'
        
      },
])
.then(data => {
    return generateMarkdown(data);
})
.then(pageMarkdown => {
    return writeFile(pageMarkdown);
})
.catch(err => {
    console.log(err);
})

};


    
    // fs.watchFilSync(path.join(process.cwd()))
// TODO: Create a function to initialize app
function init() {
    questions();
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app

init();