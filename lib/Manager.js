const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return `<p class="card-text">${this.officeNumber}</p>`;
    }
    getRole() {
        return `<h3 class="card-subtitle mb-2 text-muted">Manager</h3>`;
    }
}

module.exports = Manager