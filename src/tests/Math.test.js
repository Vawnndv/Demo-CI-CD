// math.test.js
const add = require('../utils/Math')

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0)
})

test('adds -3 + -1 to equal -4', () => {
  expect(add(-3, -1)).toBe(-4)
})

test('adds 3 + -1 to equal 2', () => {
  expect(add(3, -1)).toBe(2)
})