const Employee = require('../lib/Employee');

test('Employee name', () => {
    const employee = new Employee('Jake', '10101', 'Jake@gmail.com');

    expect(employee.name).toBe('Jake');
    expect(employee.id).toBe('10101')
    expect(employee.email).toBe('Jake@gmail.com')
});

test('returns Employee information', () => {
    const employee = new Employee('Jake', '10101', 'Jake@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jake'));
    expect(employee.getId()).toEqual(expect.stringContaining('10101'))
    expect(employee.getEmail()).toEqual(expect.stringContaining('Jake@gmail.com'))
    expect(employee.getRole()).toEqual(expect.stringMatching('Employee'))
});