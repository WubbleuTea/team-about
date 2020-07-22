const Employee = require('../lib/Employee');

test('creates and asks employee questions', () => {
    const employee = new Employee('Jake', '87309fhu', 'asdfasdf@yahoo.com');

    expect(employee.name).toBe('Jake');
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.stringContaining('@'))
})