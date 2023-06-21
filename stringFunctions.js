// function splits string into array of characters, then reverse those charachters and final step join them back from array to string
const reverseString = (str) => str.split("").reverse().join("");

// chekcing if characters from left side match characters from right side. It loop to half of the string from each side and if they do not match it return false otherwise return tree
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
// exporting functions
module.exports = { reverseString, isPalindrome };
