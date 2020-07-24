const Manager = require('../lib/Manager');

test('creating manager object and updating role', () => {
    let managerOffice = 100
    const manager = new Manager('Manager', 20202, 'Manager@gmail.com', 100);
    
    expect(manager.officeNumber).toBe(managerOffice);
})

test('creating manager object and updating role', () => {
    let managerName = 'Manager'
    const manager = new Manager('Manager', '020202', 'Manager@gmail.com', '100');
   
    expect(manager.getRole()).toBe(managerName)
})
// .toHaveLength(10)
