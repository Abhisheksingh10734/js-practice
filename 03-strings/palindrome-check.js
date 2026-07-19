// Problem: Check if a given string is a palindrome

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("madam"));      // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
