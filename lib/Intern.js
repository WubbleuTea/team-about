const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
    }

    getSchool() {
        return `<p class="card-text">School: ${this.school}</p>`
    }

    getRole() {
        return `<svg class="bi" width="32" height="32" fill="currentColor">
        <use xlink:href="bootstrap-icons.svg#book"/>
      </svg><h3 class="card-subtitle mb-2 text-muted">Intern</h3>`;
    }
}

module.exports = Intern