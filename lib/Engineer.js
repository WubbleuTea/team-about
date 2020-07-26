const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github

    }
    getGithub() {
        return `<p>Github: <a href="https://github.com/${this.github}" class="card-link">${this.github}</a></p>`
    }
    getRole() {
        return `<img src="../assets/icons/tools.svg" alt="" width="32" height="32" title="tools">
      <h3 class="card-subtitle mb-2 text-muted">Engineer</h3>`;
    }
}

module.exports = Engineer