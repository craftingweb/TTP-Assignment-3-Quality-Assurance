// importing file with functions
const math = require("./mathFunctions");
// destructiring functions from the file for testing
let { sum, subtract, multiply, divide } = math;
// creating test suit for checking math operations
describe("checking calculator functionality", () => {
  // unit test for summation
  test("checking summation", () => {
    expect(sum(1, 4)).toBe(5);
  });
  test("checking summation", () => {
    expect(sum(NaN, 4)).toBe(NaN);
  });
  test("checking summation", () => {
    expect(sum(Infinity, 4)).toBe(Infinity);
  });
  test("checking summation", () => {
    expect(sum(-500000000, -800000000)).toBe(-1300000000);
  });
  // unit test for subtraction
  test("checking subtraction", () => {
    expect(subtract(1, 4)).toBe(-3);
  });
  // unit test for mulitplication
  test("checking multiplication", () => {
    expect(multiply(1, 0)).toBe(0);
  });
  test("checking multiplication", () => {
    expect(multiply(Infinity, -2)).toBe(-Infinity);
  });
  test("checking multiplication", () => {
    expect(multiply(Infinity, 2)).toBe(Infinity);
  });
  test("checking multiplication", () => {
    expect(multiply(Infinity, 0)).toBeNaN();
  });
  // unit test for division
  test("checking division", () => {
    expect(divide(1, 0)).toBe(Infinity);
  });
  test("checking division", () => {
    expect(divide(0, 0)).toBeNaN();
  });
  test("checking division", () => {
    expect(divide(Infinity, 10)).toBe(Infinity);
  });
  test("checking division", () => {
    expect(divide(-20, -5)).toBe(4);
  });
});
