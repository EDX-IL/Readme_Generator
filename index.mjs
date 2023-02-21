import inquirer from "inquirer";
import Inq from "inquirer";
import fs from "fs/promises";

let { title, description, tableOfContents } = await inquirer.prompt([
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

  {
    type: "input",
    name: "tableOfContents",
    message: "Please your Table of Contents",
  },


]);

console.log(response);

let readMeText = `
#Project Title 
${title}

##Description
${description}



`;

fs.writeFile('GeneratedREADME.md',readMeText);

// * Description
//       * Table of Contents
//       * Installation
//       * Usage
//       * License
//       * Contributing
//       * Tests
//       * Questions
