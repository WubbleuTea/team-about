const Intern = require('../lib/Intern');

test('creating intern object', () => {
    const intern = new Intern('Intern', '40404', 'Intern@gmail.com', 'UT-Austin');

    expect(intern.name).toBe('Intern');
    expect(intern.id).toBe('40404')
    expect(intern.email).toBe('Intern@gmail.com')
    expect(intern.school).toBe('UT-Austin');
})

test('returns HTML Intern information', () => {
    const intern = new Intern('Intern', '40404', 'Intern@gmail.com', 'UT-Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UT-Austin'))
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})