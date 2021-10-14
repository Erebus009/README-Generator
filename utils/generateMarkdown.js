// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![GitHub license](https://img.shields.io/badge/License-MIT-black.svg)";
  } else if (license === "Apache") {
    return "![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-orange.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === 'BSD') {
    return  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }else if (license === 'ISC') {
    return  "[![License: ISC](https://img.shields.io/badge/License-ISC-purple.svg)](https://opensource.org/licenses/ISC)";
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return '[<img src="https://img.shields.io/badge/link-MIT-black.svg">](https://opensource.org/licenses/MIT)'
  }
  if (license === "Apache") {
    return '[<img src="https://img.shields.io/badge/link-Apache%202.0-blue.svg">](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === "GNU") {
    return '[<img src="https://img.shields.io/badge/link-GNU-orange.svg">](https://opensource.org/licenses/lgpl-3.0.html)'
  }
  if (license === "BSD") {
    return '[<img src="https://img.shields.io/badge/link-BSD-green.svg">](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === "ISC") {
    return '[<img src="https://img.shields.io/badge/link-ISC-purple.svg">](https://opensource.org/licenses/ISC)'
  } else {
    return ''
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.'
  }
  if (license === "Apache") {
    return ' Apache License, Version 2.0 you may not use this file except in compliance with the License.'
  }
  if (license === "GNU") {
    return 'The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software'
  }
  if (license === "BSD") {
    return 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met click button link for more info'
  }
  if (license === "ISC") {
    return 'Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   
  
  # Description
  ${data.description}
  # Licensed Under
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
  
  
  
  
  
  ## Contributors
  >${data.contributions}
  #
  *Follow the guidelines set by*    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/)
  ## License
  #
  ${renderLicenseLink(data.license)}
  <br>
  >${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions about this app then contact me at ${data.email}



`
}


module.exports = generateMarkdown;
