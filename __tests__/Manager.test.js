const Manager = require('../lib/Manager');

test('creating manager object and updating role', () => {
    const manager = new Manager('Manager', '20202', 'Manager@gmail.com', '100');
    
    expect(manager.officeNumber).toBe('100');
})

test('creating manager object and updating role', () => {
    const manager = new Manager('Manager', '020202', 'Manager@gmail.com', '100');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('100'))
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})
