const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the manager's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter this manager's id.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your manager's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter this manager's e-mail address.",
        validate: emailInput => {
            const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailInput.match(val)) {
                return true;
            } else {
                console.log('\n Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter this manager's office number.",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter your manager's office number!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'anotherMember',
        message: 'Please choose either another member to add or to finish adding members',
        choices: ['Engineer', 'Intern', 'Generate Page']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter this engineer's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter this engineer's id.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your engineer's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter this engineer's e-mail address.",
        validate: emailInput => {
            const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailInput.match(val)) {
                return true;
            } else {
                console.log('\n Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter this engineer's GitHub username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your engineer's GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'anotherMember',
        message: 'Please choose either another member to add or to finish adding members',
        choices: ['Engineer', 'Intern', 'Generate Page']
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter this intern's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter this intern's id.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your intern's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter this intern's e-mail address.",
        validate: emailInput => {
            const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailInput.match(val)) {
                return true;
            } else {
                console.log('\n Please enter a valid email address!\nIf you need to delete what you have already put and try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter this intern's school.",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter your intern's school!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'anotherMember',
        message: 'Please choose either another member to add or to finish adding members',
        choices: ['Engineer', 'Intern', 'Generate Page']
    }
];

module.exports = { managerQuestions, internQuestions, engineerQuestions }