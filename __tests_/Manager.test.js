const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Eric', 10, 'ewebber283@gmail.com', 9876543210)

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number))
});