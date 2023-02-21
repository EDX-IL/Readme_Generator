README Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Create a CLI command line interface professional readme.md generator from user prompted responses.

### The challenge

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ReadMe Generator](git@github.com:EDX-IL/Readme_Generator.git)

## My process

I started by creating the repository on github and cloning to my local machine. Then installed NMP Inquirer and set up the file structure and dependencies. 

The then created the questions and deconstructed those responses to create a basic GeneratedREADME.md file.

I then when through the markup documentation to improve each section so that it looked better. 

### Built with

- Javascript
- node.js


### What I learned

Here I learned to deconstruct an asynchronous response achieved using the await function 

```js
let {
  title,
  description,
  tableOfContents,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
  username,
  email,
} = await inquirer.prompt


```
Here is learned how offer the user multiple choices

```js
{
    type: "list",
    name: "license",
    message: "What license do you need?",
    choices: ["Boost", "CCO", "IBM", "MIT"],
    filter(val) {
      return val.toLowerCase();
    },
  },

```


### Continued development

With more time i would create much more expansive formatting options including size and colour of headings and paragraphs

### Useful resources

- [Git Hub Licenses](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) - This resource helped me find the links to the licenses to enter in my generated file
- [NPM Inquirer Documentation](https://www.npmjs.com/package/inquirer) - This resource was invaluable in how to install and use command line interface features of NPM/Inquirer
- [README.md Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - This provided invaluable information as to how to create the readme file. 

## Author
Ian Logendra
- Repo - [README Generator](https://github.com/EDX-IL/Readme_Generator)
- GitHub - [EDX-IL](https://github.com/EDX-IL)

## Acknowledgments

Dane for his excellent video without which i could not even have done this much