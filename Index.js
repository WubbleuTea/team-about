const managerArr = [];
const engineerArr = [];
const internArr = [];
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, internQuestions, engineerQuestions } = require('./utils/questions')

const managerInfo = () => {
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const { name, id, email, officeNumber, anotherMember } = answers
            let manager = new Manager(name, id, email, officeNumber)
            console.log(manager)
            managerArr.push(manager)
            console.log(managerArr)
            if (anotherMember === 'Engineer'){
                engineerInfo();
            } else if (anotherMember === 'Intern') {
                internInfo();
            } else {
                console.table(managerArr)
                console.table(engineerArr)
                console.table(internArr)
            }
            //else go to generate html

        })
}

const engineerInfo = () => {
    inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            const { name, id, email, github, anotherMember } = answers
            let engineer = new Engineer(name, id, email, github)
            console.table(engineer)
            engineerArr.push(engineer)
            console.log(engineerArr)
            if (anotherMember === 'Engineer'){
                engineerInfo();
            } else if (anotherMember === 'Intern') {
                internInfo();
            } else {
                console.table(managerArr)
                console.table(engineerArr)
                console.table(internArr)
            }
            //else go to generate html

        })
}

const internInfo = () => {
    inquirer
        .prompt(internQuestions)
        .then(answers => {
            const { name, id, email, school, anotherMember } = answers
            let intern = new Intern(name, id, email, school)
            console.table(intern)
            internArr.push(intern)
            console.log(internArr)
            if (anotherMember === 'Engineer'){
                engineerInfo();
            } else if (anotherMember === 'Intern') {
                internInfo();
            } else {
                console.table(managerArr)
                console.table(engineerArr)
                console.table(internArr)
            }
            //else go to generate html

        })
}

managerInfo()

module.exports = { managerArr, internArr, engineerArr }