const functions = require("./stringFunctions");

let { reverseString, isPalindrome } = functions;
// creating test suit
describe("Reversing string & checking if palindrom is?", () => {
  // unit test for reversing the string
  test("Reversing string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  // unit for checking if palidrome
  test("Is palidrome", () => {
    expect(isPalindrome("kayak")).toBe(true);
  });
});
