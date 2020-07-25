const employeeArr = [];
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateHTML } = require('./utils/generateHTML')
const { managerQuestions, internQuestions, engineerQuestions } = require('./utils/questions')

const managerInfo = () => {
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const { name, id, email, officeNumber, anotherMember } = answers;
            let manager = new Manager(name, id, email, officeNumber);
            let managerObj = {
                role: manager.getRole(),
                name: manager.getName(),
                id: manager.getId(),
                email: manager.getEmail(),
                extraInfo: manager.getOfficeNumber()
            };
            console.table(managerObj)
            employeeArr.push(managerObj)
            console.log(employeeArr)
            generateOrNot(anotherMember)
        })
}

const engineerInfo = () => {
    inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            const { name, id, email, github, anotherMember } = answers
            const engineer = new Engineer(name, id, email, github)
            const engineerObj = {
                role: engineer.getRole(),
                name: engineer.getName(),
                id: engineer.getId(),
                email: engineer.getEmail(),
                extraInfo: engineer.getOfficeNumber(),
            }
            employeeArr.push(engineerObj)
            console.log(employeeArr)
            generateOrNot(anotherMember)
        })
}

const internInfo = () => {
    inquirer
        .prompt(internQuestions)
        .then(answers => {
            const { name, id, email, github, anotherMember } = answers
            const intern = new Intern(name, id, email, github)
            const internObj = {
                role: intern.getRole(),
                name: intern.getName(),
                id: intern.getId(),
                email: intern.getEmail(),
                extraInfo: intern.getOfficeNumber(),
            }
            employeeArr.push(internObj)
            console.log(employeeArr)
            generateOrNot(anotherMember)
        })
}

const generateOrNot = (anotherMember) => {
    if (anotherMember === 'Engineer'){
        engineerInfo();
    } else if (anotherMember === 'Intern') {
        internInfo();
    } else {
        console.table(employeeArr)
        generateHTML();

    }
}

managerInfo();

module.exports = { managerArr, internArr, engineerArr }