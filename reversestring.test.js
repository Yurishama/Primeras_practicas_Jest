const reverseString = require('./reversestrings');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

//   .toLowerCase()
test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});