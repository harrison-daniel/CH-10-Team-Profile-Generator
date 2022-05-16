const Manager = require('../lib/Manager');
const manager = new Manager('Bob', '222222', 'bob@manager.com', '2323')

test('test constructor', () => {
  expect(manager.name).toBe('Bob');
  expect(manager.id).toBe('222222');
  expect(manager.email).toBe('bob@manager.com');
  expect(manager.officeNum).toBe('2323');
});

test('test getName()', () => {
  expect(manager.getName()).toBe('Bob');
});

test('test getId()', () => {
  expect(manager.getId()).toBe('222222');
});

test('test getEmail()', () => {
  expect(manager.getEmail()).toBe('bob@manager.com');
});
test('test getRole()', () => {
  expect(manager.getRole()).toBe('Manager');
});
