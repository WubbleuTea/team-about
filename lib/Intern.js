const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
    }

    getSchool() {
        return `<p class="card-text">${this.school}</p>`
    }

    getRole() {
        return `<h3 class="card-subtitle mb-2 text-muted">Intern</h3>`;
    }
}

module.exports = Intern