const Manager = require('../lib/Manager');

test('creating manager object and updating role', () => {
    const manager = new Manager('Manager', '020202', 'Manager@gmail.com', '2549632542');

    expect(manager.name).toBe('Manager');
    expect(manager.id).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.stringContaining('@'))
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(expect.stringMatching('Manager'))
})
// .toHaveLength(10)
