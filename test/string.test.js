import app from '../src/string';

const {
  func1, func2, func3, func4, func5, func6, func7, func8
} = app;

test('func1 should return "ab" string', () => {
  const testData = ['abccd', 'abccc', 'abcdec'];
  expect(func1(testData)).toMatch('ab');
});

test('func1 should return empty string', () => {
  const testData = ['asdf', 'qwer', 'zxcv'];
  expect(func1(testData)).toMatch('');
});

test('func2 will reverse string', () => {
  const testData = 'wefioE#'
  expect(func2(testData)).toMatch('#Eoifew');
});

test('func3 will return result array', () => {
  const testData = [
    { s: 'anagram', t: 'nagaram' },
    { s: 'rat', t: 'car' },
    { s: 'rat2', t: 'car' },
  ];
  expect(func3(testData)).toEqual(expect.arrayContaining([true, false, false]));
});