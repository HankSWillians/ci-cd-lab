const { sumar } = require('./app');

test('sumar(2, 3) debe retornar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('sumar(0, 0) debe retornar 0', () => {
  expect(sumar(0, 0)).toBe(0);
});

test('sumar(-1, 1) debe retornar 0', () => {
  expect(sumar(-1, 1)).toBe(0);
});
