// Special character array
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Numbers array
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Lowercase letters array
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Uppercase letters array
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Random element array function
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate passwords array
function generatePassword(length, useLower, useUpper, useNumbers, useSpecial) {
  let password = "";
  let possibleCharacters = [];

  if (useLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  if (useUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if (useNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }

  if (useSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  if (possibleCharacters.length === 0) {
    alert("You must select at least one character type!");
    return "";
  }

  for (let i = 0; i < length; i++) {
    password += getRandomElement(possibleCharacters);
  }

  return password;
}

const generateButton = document.querySelector("#generate");
const passwordDisplay = document.querySelector("#password");

generateButton.addEventListener("click", function () {
  let passwordLengthPrompt = prompt(
    "How long would you like your password to be? Please enter a number between 8 and 128"
  );

  let passwordLength = parseInt(passwordLengthPrompt);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128!");
    return;
  }

  let lowerCasePrompt = prompt(
    "Would you like your password to contain lowercase letters? Answer yes or no"
  );
  let useLower = lowerCasePrompt.toLowerCase() === "yes";

  let upperCasePrompt = prompt(
    "Would you like your password to contain uppercase letters? Answer yes or no"
  );
  let useUpper = upperCasePrompt.toLowerCase() === "yes";

  let numbersPrompt = prompt(
    "Would you like your password to contain numbers? Answer yes or no"
  );
  let useNumbers = numbersPrompt.toLowerCase() === "yes";

  let specialCharactersPrompt = prompt(
    "Would you like your password to contain special characters? Like $!*&. Answer yes or no"
  );
  let useSpecial = specialCharactersPrompt.toLowerCase() === "yes";

  let password = generatePassword(
    passwordLength,
    useLower,
    useUpper,
    useNumbers,
    useSpecial
  );

  if (password !== "") {
    passwordDisplay.textContent = password;
  }
});
