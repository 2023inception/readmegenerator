const inquirer = require('inquirer')
const question = 
    [
        {
            type: "input",
            name: "firstName",
            message: "What is your first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is your last name?"
        },
        {
            type: "list",
            name: "color",
            message: "What is your favourite color?",
            choices: ["black", "brown", "yellow", "blue", "green"]
        }
    ]
inquirer.prompt(question)   
.then(function(answer){
    console.log(answer);
})