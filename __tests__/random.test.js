const randoms = require('../lib/random');

test('Adds 2 + 2 to equal 4', () => {
  expect(randoms.add(2, 2)).toBe(4);
});