//  packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
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
        name: "usage",
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
]





// takes user inputs and filename to create a file based on the parameters.
function writeToFile(fileName,data) {
   

    fs.writeFile(fileName, data, function(err) {
    if(err){
        return console.log(err);
} else {
    console.log('wrtieFile Success.');
}
    })
}


// fucntion that is called when to start the questions through the installed module inquirer
function init() {
    inquirer.prompt(questions)
    .then(function(data){
         
    writeToFile('README.md', generateMarkdown(data));
        console.log(data);
    })
}


// intialize the app
init();