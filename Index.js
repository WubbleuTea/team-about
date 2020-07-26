const employeeArr = [];
const internArr = [];
const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, internQuestions, engineerQuestions } = require('./utils/questions');
const { Console } = require('console');

const managerInfo = () => {
    //prompts Manager questions
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            //creates manager object
            const { name, id, email, officeNumber, anotherMember } = answers;
            let manager = new Manager(name, id, email, officeNumber);
            // uses manager object to create an object to hold the HTML needed later
            let managerObj = {
                role: manager.getRole(),
                name: manager.getName(),
                id: manager.getId(),
                extraInfo: manager.getOfficeNumber(),
                email: manager.getEmail()
            };
            //push HTML object to the employee arr and then ask if they want to add another team member
            employeeArr.push(managerObj)
            generateOrNot(anotherMember)
        })
}

const engineerInfo = () => {
    //prompts engineer questions
    inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            //creates engineer object
            const { name, id, email, github, anotherMember } = answers
            const engineer = new Engineer(name, id, email, github)
            // uses engineer object to create an object to hold the HTML needed later
            const engineerObj = {
                role: engineer.getRole(),
                name: engineer.getName(),
                id: engineer.getId(),
                extraInfo: engineer.getGithub(),
                email: engineer.getEmail()
            }
            //push HTML object to the employee arr and then ask if they want to add another team member
            employeeArr.push(engineerObj)
            generateOrNot(anotherMember)
        })
}

const internInfo = () => {
    // prompts intern questions
    inquirer
        .prompt(internQuestions)
        .then(answers => {
            //creates intern object
            const { name, id, email, school, anotherMember } = answers
            const intern = new Intern(name, id, email, school)
            // uses intern object to create an object to hold the HTML needed later
            const internObj = {
                name: intern.getName(),
                role: intern.getRole(),
                id: intern.getId(),
                extraInfo: intern.getSchool(),
                email: intern.getEmail()
            }
            //push HTML object to the intern arr ewhich will be pushed to the employee array right before the page is generated and then ask if they want to add another team member
            internArr.push(internObj)
            generateOrNot(anotherMember)
        })
}
//this takes the answer to the question asked at the end of adding every memeber and decides what to do.
const generateOrNot = (anotherMember) => {
    if (anotherMember === 'Engineer'){
        engineerInfo();
    } else if (anotherMember === 'Intern') {
        internInfo();
    } else {
        //intern arr is then added to employee arr (this is done at the end to keep the Engineers at the top of the page and the interns at the bottom)
        internArr.map(intern => {
            employeeArr.push(intern)
        })
        //goes to function to create HTML
        generateHTML();

    }
}
// creates HTML
const generateHTML = () => {
    fs.writeFile('./dist/index.html', writeHTML(), (err) => {
        if (err) throw err;
        console.log('The file has been created! You can view the file in the dist folder.');
      }); 
}
// adds the code for the HTML
const writeHTML = () => {
    console.log(`HTML being written`);
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About the Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #e3f2fd;">
        <h1 class="navbar-text text-body">Our Team</h1>
    </nav>
    <div class="container d-flex flex-wrap p-4">
        ${writeCards()}
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>`

}

// runs through everything in the array in order to create cards to append to the HTML file
const writeCards = () =>{
    let html = ``;
    employeeArr.map(employee => {
        const { name, role, id, extraInfo, email } = employee
        html +=
         `
        <div class="card m-4 shadow-lg" style="width: 18rem;">
            <div class="card-header bg-success">
                ${name}
                ${role}
            </div>
            <div class="card-body">
                ${id}
                ${extraInfo}
                ${email}
            </div>
        </div>`
    });    
    return html;
}
// run Index
managerInfo();