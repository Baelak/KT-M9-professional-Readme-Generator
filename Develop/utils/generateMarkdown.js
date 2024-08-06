//Function to display logo
function generatedLogo(logoPath = "Logo", logoAltText = "Logo"){
  return `
  <div style="display: flex; justify-content: center; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 20px;">
  <img src="${logoPath}" alt="${logoAltText}" style="max-height: 200px; max-width: 200px;">
</div>
  `;
}
// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license && license.length > 0) {
    return license.map(license =>`![Github license](https://img.shields.io/badge/license-${license}-green.svg)`).join(' ');
  }
  return "";
}

// Function to generate markdown for README
function generateCompleteMarkdown(data) {
  const logoSnippet = generatedLogo(data.logoPath);
  return `${logoSnippet} 
## ${data.title}
\n${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Table of Contents
* [Features](#features)
* [Dependencies](#dependencies)
* [Languages and Technologies](#languages-and-technologies)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${data.features}
## Dependencies
${data.require}
## Languages and Technologies:
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = {generatedLogo, generateCompleteMarkdown};