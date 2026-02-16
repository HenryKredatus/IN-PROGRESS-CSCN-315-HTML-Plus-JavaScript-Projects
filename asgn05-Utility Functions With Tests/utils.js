// Formats a number as U.S. currency (e.g., 10 → "$10.00")
// Returns "Invalid number" if input cannot be converted
function formatCurrency(amount) {
  if (isNaN(amount)) return "Invalid number";
  return "$" + Number(amount).toFixed(2);
}

// Safely parses a string into an integer.
// Returns null if the string is not a valid number.
function parseIntegerSafe(str) {
  const num = parseInt(str, 10);
  return isNaN(num) ? null : num;
}

// Capitalizes the first letter of each word in a string.
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Reverses the characters in a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Validates whether a string follows basic email format rules.
// Returns true or false.
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Removes duplicate values from an array.
// Returns a new array with unique elements.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Truncates a string to a specified length and adds "..." if shortened.
function truncateString(str, length) {
  if (str.length <= length) return str;
  return str.substring(0, length) + "...";
}

// Creates a debounced version of a function.
// The function executes only after the user stops triggering it for a given delay.
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
