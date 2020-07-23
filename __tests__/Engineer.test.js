const Engineer = require('../lib/Engineer');

test('creating engineer object and updating role', () => {
    const engineer = new Engineer('Engineer', '040404', 'engineer@gmail.com', 'GitHubUSERNAME');

    expect(engineer.name).toBe('Engineer');
    expect(engineer.id).toEqual(expect.any(String))
    expect(engineer.email).toEqual(expect.stringContaining('@'))
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(expect.stringMatching('Engineer'))
})