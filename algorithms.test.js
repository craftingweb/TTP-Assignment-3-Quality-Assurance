const {
  twoSum,
  reverseString,
  lengthOfLongestSubstring,
  maxArea,
} = require("./algorithms");
describe("twoSum", () => {
  test("Two numbers exist that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("Two numbers exist that add up to the target", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("Two numbers exist that add up to the target", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});

describe("Reversing string", () => {
  test("Reversing string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("Reversing string", () => {
    expect(reverseString("OpenAI")).toBe("IAnepO");
  });
  test("Reversing string", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
});
describe("Longest Substring Without Repeating Characters", () => {
  test("checking substring", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  test("checking substring", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  test("checking substring", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});
describe("Container With Most Water", () => {
  test("checking max area", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  test("checking max area", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
  test("checking max area", () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });
});
