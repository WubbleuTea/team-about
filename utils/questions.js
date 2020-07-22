const inquirer = require('inquirer');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter this employee's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your employee's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter this employee's id.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your employee's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter this employee's e-mail address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your employee's e-mail!");
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: "Enter this employee's school.",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter your employee's school!");
                return false;
            }
        }
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter this employee's office number.",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter your employee's school!");
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: "Enter this employee's GitHub username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your employee's GitHub username!");
                return false;
            }
        }
    }
]