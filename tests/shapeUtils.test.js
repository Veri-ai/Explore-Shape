// tests/shapeUtils.test.js
const calculateArea = require("../shapeUtils");

test("calculates square area", () => {
  expect(calculateArea("square", 4)).toBe(16);
});

test("calculates circle area", () => {
  expect(calculateArea("circle", 3)).toBeCloseTo(28.27, 2);
});
