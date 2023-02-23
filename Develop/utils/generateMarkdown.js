//  a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License badge](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  return "";
}

//  a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license == "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license == "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  } else {
    return "";
  }
}

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Description
${data.Description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

## Installation
 ${data.Installation}

## Usage 
${data.Usage}

## Tests
${data.Test}

## Licence

This project is licenced under ${data.license} license
${renderLicenseLink(data.license)}

## Contributing

Contributors: ${data.Contributing}

## Questions
Please contact me  https://github.com/${data.Username} or email ${data.Email}


`;
}

module.exports = generateMarkdown;
