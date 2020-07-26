let employeeArr = [];
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
                extraInfo: manager.getOfficeNumber(),
                email: manager.getEmail()
            };
            employeeArr.push(managerObj)
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
                extraInfo: engineer.getGithub(),
                email: engineer.getEmail()
            }
            employeeArr.push(engineerObj)
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
                name: intern.getName(),
                role: intern.getRole(),
                id: intern.getId(),
                extraInfo: intern.getSchool(),
                email: intern.getEmail()
            }
            employeeArr.push(internObj)
            generateOrNot(anotherMember)
        })
}

const generateOrNot = (anotherMember) => {
    if (anotherMember === 'Engineer'){
        engineerInfo();
    } else if (anotherMember === 'Intern') {
        internInfo();
    } else {
        console.log(employeeArr)
        generateHTML();

    }
}

managerInfo();

module.exports = [ employeeArr ]