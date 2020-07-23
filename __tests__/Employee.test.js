const Employee = require('../lib/Employee');

test('creates and asks employee questions', () => {
    const employee = new Employee('Jake', '010101', 'Jake@gmail.com');

    expect(employee.name).toBe('Jake');
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
});


test('returns Employee information', () => {
    const employee = new Employee('Jake', '87309fhu', 'Jake@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jake'));
    expect(employee.getId()).toEqual(expect.any(String))
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'))
    expect(employee.getRole()).toEqual(expect.stringMatching('Employee'))
});