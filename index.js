const inquirer = require('inquirer')
const fs = require('fs');

const question = [
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
        }
    ];
inquirer.prompt(question)   
.then(function(answer){
    console.log(answer);

    const content = `#Answers
    ## title
   - ${answer.title}
    ## description 
   - ${answer.description}
    ## installation
   - ${answer.installation}
   ## usage
   - ${answer.usage}
    ## contributing 
   - ${answer.contributing}
    ## tests
   - ${answer.tests}
    `
    
    fs.writeFile('assets/README.md', content, (error) => {
        if(err) {
           console.log('There is something wrong');
        }
       })
})