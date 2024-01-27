const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('два плюс два равно четыре', () => {
  expect(2 + 2).toBe(4);
});
test('присваивание объекту', () => {
  const data = {один: 1};
  data['два'] = 2;
  expect(data).toEqual({один: 1, два: 2});
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
test('присваивание объекту', () => {
  const data = {один: 1};
  data['два'] = 2;
  expect(data).toEqual({один: 1, два: 2});
});
test('сложение положительных чисел не равно нулю', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

