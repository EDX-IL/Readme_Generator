import inquirer from "inquirer";
import fs from "fs/promises";

let {
  title,
  description,
//  tableOfContents,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
  username,
  email,
} = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description for your project",
  },

//   {
//     type: "input",
//     name: "tableOfContents",
//     message: "Please enter your Table of Contents",
//   },

  {
    type: "input",
    name: "installation",
    message: "Please provide instructions on how to install your project",
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter details of how to use your project",
  },

  {
    type: "list",
    name: "license",
    message: "What license do you need?",
    choices: ["Boost", "CCO", "IBM", "MIT"],
    filter(val) {
      return val.toLowerCase();
    },
  },

  {
    type: "input",
    name: "contributing",
    message: "Who contributed to your project",
  },

  {
    type: "input",
    name: "tests",
    message: "Please enter details of how to use your project",
  },

  {
    type: "input",
    name: "questions",
    message: "Please end your FAQs here",
  },

  {
    type: "input",
    name: "username",
    message: "What is your github username",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address",
  },
]);

let readMeText = `
# Project Title 
${title}

## Table Of Contents
- [Description] (#description)
- [Installation] (#installation)
- [Usage]
- [License]
- [Contributors]
- [Tests]
- [Questions]
- [Author]
- [Email]

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${generateLicense(license)}

## Contributors 
${contributing}

## Tests
${tests}

## Questions
${questions}

## Author
-- GitHub [${username}](https://github.com/${username})

## Email
${email}


`;

fs.writeFile("GeneratedREADME.md", readMeText);

function generateLicense(license) {
  if (license === "boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  }

  if (license === "cco") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
  }

  if (license === "ibm") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";
  }

  if (license === "mit") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}
