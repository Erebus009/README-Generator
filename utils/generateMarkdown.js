// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ['MIT','Apache', 'GNU','BSD','ISC']


function renderLicenseBadge(license) {

  if(license === 'MIT'){
      return "![GitHub license](https://img.shields.io/badge/license-MIT-black.svg)";
  }else if(license === 'Apache'){
    return "![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";

  }

  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  
return `# ${data.title}
   
  
  # Description
  ${data.description}
  # License Under
  ${renderLicenseBadge(data.license)}
  # Table of Contents
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

  ## Installation
  <code>${data.install}</code>
  ## Usage
  <code>${data.usage}</code>
  
  ## Tests
  <code>${data.test}</code>
  
  ## License
  Project is licensed under ${data.license} 

  
  ## Contributors
  List of Contributors : ${data.contributions}
  
  ## Questions
  If you have any questions about this app then contact me at ${data.email}



`;
}

module.exports = generateMarkdown;
