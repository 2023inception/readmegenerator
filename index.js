const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Enter a description?"
},
{
    type: "input",
    name: "installation",
    message: "Enter installation instructions:"
},
{
    type: "input",
    name: "usage",
    message: "Enter usage information:",
},
{

    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:"
},
{

    type: "input",
    name: "tests",
    message: "Enter test instructions"
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['ISC', 'Apache 2.0', 'GNU GPLv3'],
},

];

inquirer.prompt(questions)
  .then(answer => {
    console.log(answer);

    const content = `# ${answer.title} - ${answer.github}
    ![License Badge](https://img.shields.io/badge/License-${encodeURIComponent(
      answer.license
    )}-blue.svg)

    ## Description
    ${answer.description}

    ## Installation
    ${answer.installation}

    ## Usage
    ${answer.usage}

    ## Contributing
    ${answer.contributing}

    ## Tests
    ${answer.tests}

    ## License
    This application is covered under the ${answer.license} license.`;

    fs.writeFile('assets/README.md', content, err => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log('README.md file has been generated successfully!');
      }
    });
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
