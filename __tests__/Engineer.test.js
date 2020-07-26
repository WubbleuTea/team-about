const Engineer = require('../lib/Engineer');

test('creating engineer object and updating role', () => {
    const engineer = new Engineer('Engineer', '40404', 'engineer@gmail.com', 'GitHubUSERNAME');

    expect(engineer.name).toBe('Engineer');
    expect(engineer.id).toBe('40404')
    expect(engineer.email).toBe('engineer@gmail.com')
    expect(engineer.github).toBe('GitHubUSERNAME')

})


test('creating engineer object and updating role', () => {
    const engineer = new Engineer('Engineer', '40404', 'engineer@gmail.com', 'GitHubUSERNAME');
    
    expect(engineer.getGithub()).toEqual(expect.stringMatching('GitHubUSERNAME'))
    expect(engineer.getRole()).toEqual(expect.stringMatching('Engineer'))

})
