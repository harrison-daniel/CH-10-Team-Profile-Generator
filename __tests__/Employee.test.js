const Employee = require('../lib/Employee.js');

// employee name
test('test to get employee values', () => {
  const employee = new Employee('John');

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(1)
  expect(employee.email).toBe('john@email.com');
});



