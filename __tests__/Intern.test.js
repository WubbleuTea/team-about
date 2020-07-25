const Intern = require('../lib/Intern');

test('creating intern object and updating role', () => {
    const intern = new Intern('Intern', 40404, 'Intern@gmail.com', 'UT-Austin');

    expect(intern.name).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.stringContaining('@'))
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual(expect.stringMatching('Intern'))
})