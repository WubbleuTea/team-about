const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github

    }
    getGithub() {
        return `<a href="https://github.com/${this.github}" class="card-link">${this.github}</a>`
    }
    getRole() {
        return `<h3 class="card-subtitle mb-2 text-muted">Engineer</h3>`;
    }
}

module.exports = Engineer