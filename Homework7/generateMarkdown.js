

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
      }
    
      const badges = {
        MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        Apache: '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-red.svg)',
        BSD: '![License: BSD](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)',
      };
    
      return badges[license] || '';
    }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (!license) {
        return '';
      }
    
      const badges = {
        MIT: '(https://img.shields.io/badge/License-MIT-yellow.svg)',
        GPLv3: '(https://img.shields.io/badge/License-GPLv3-blue.svg)',
        Apache: '(https://img.shields.io/badge/License-Apache_2.0-red.svg)',
        BSD: '(https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)',
      };
    
      return badges[license] || '';
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (!license) {
      return '';
    }

    return `## License
    This project is licensed under the ${license} license.`;
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${data.license}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contribution)
    - [Tests](#testing)
    - [Questions](#questions)
    
    ## Installation
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    ${data.usage}
    
    ## License
    ${data.license}
    
    ## Contributing
    ${data.contribution}
    
    ## Tests
    \`\`\`
    ${data.testing}
    \`\`\`
    
    ## Questions
    If you have any questions, feel free to reach out:
    - GitHub: [${data.userName}](https://github.com/${data.userName})
    - Email: [${data.emailAddress}](mailto:${data.emailAddress})
    `;   
          
}

export default generateMarkdown;
