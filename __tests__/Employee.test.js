const Employee = require('../lib/Employee.js');
const employee = new Employee('John', '123123', 'john@employee.com')
// employee values

test('test constructor', () => {
  expect(employee.name).toBe('John');
  expect(employee.id).toBe('123123');
  expect(employee.email).toBe('john@employee.com');
});

test('test getName()', () => {
  expect(employee.getName()).toBe('John');
});

test('test getId()', () => {
  expect(employee.getId()).toBe('123123');
});

test('test getEmail()', () => {
  expect(employee.getEmail()).toBe('john@employee.com');
});
test('test getRole()', () => {
  expect(employee.getRole()).toBe('Employee');
});



