const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Joe', '44444', 'joe@engineer.com', 'engineerGithub')

test('test constructor', () => {
  expect(engineer.name).toBe('Joe');
  expect(engineer.id).toBe('44444');
  expect(engineer.email).toBe('joe@engineer.com');
  expect(engineer.engineerGithub).toBe('engineerGithub');

});

test('test getName()', () => {
  expect(engineer.getName()).toBe('Joe');
});

test('test getId()', () => {
  expect(engineer.getId()).toBe('44444');
});

test('test getEmail()', () => {
  expect(engineer.getEmail()).toBe('joe@engineer.com');
});
test('test getRole()', () => {
  expect(engineer.getRole()).toBe('Engineer');
});
test('test getEngineerGithub()', () => {
  expect(engineer.getEngineerGithub()).toBe('engineerGithub');
});