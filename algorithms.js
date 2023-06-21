function twoSum(nums, target) {
  const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(nums[i], i);
  }

  return [];
}

const reverseString = (str) => str.split("").reverse().join("");

function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let start = 0;
  const charIndices = new Map();

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    if (charIndices.has(currentChar) && charIndices.get(currentChar) >= start) {
      start = charIndices.get(currentChar) + 1;
    }

    charIndices.set(currentChar, end);
    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

function maxArea(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const currentArea =
      Math.min(heights[left], heights[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

module.exports = { twoSum, reverseString, lengthOfLongestSubstring, maxArea };
