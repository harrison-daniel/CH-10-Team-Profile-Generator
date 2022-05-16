const Intern = require('../lib/Intern');
const intern = new Intern('Sarah', '77777', 'sarah@intern.com', 'JMU')

test('test constructor', () => {
  expect(intern.name).toBe('Sarah');
  expect(intern.id).toBe('77777');
  expect(intern.email).toBe('sarah@intern.com');
  expect(intern.internSchool).toBe('JMU');
});

test('test getName()', () => {
  expect(intern.getName()).toBe('Sarah');
});

test('test getId()', () => {
  expect(intern.getId()).toBe('77777');
});

test('test getEmail()', () => {
  expect(intern.getEmail()).toBe('sarah@intern.com');
});
test('test getRole()', () => {
  expect(intern.getRole()).toBe('Intern');
});
test('test getInternSchool()', () => {
  expect(intern.getInternSchool()).toBe('JMU');
});