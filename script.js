// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

/* Steps to develop generator:

1. Add event listener. When 'Generate Password' button is clicked this begins the initial prompt. 

2. Series of prompts to collect user input/data. 

3. Validate the data - return error, subsequent promt if incorrect data gathered. Must choose at least one character type. 

4.  Answer to each prompt to be stored in a variable. [would invidiual variables be needed or would an array work?] 

5. Generate password. Either via an alert or displayed on the page. */

//Start Code

//1. Add event listener &&
// 2. Series of prompts collecting user for password options.

const generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
  let passwordLengthPrompt = prompt(
    "How long would you like your password to be? Please enter a number between 8 and 128"
  );

  //i.convert passwordlength to a number?....
  let passwordLength = parseInt(passwordLengthPrompt);
  //ii. If statement
  if (passwordLength is not a number || passwordLength < 8 || passwordLength > 128) {
  prompt("Please enter a valid number between 8 and 128!");
  }

  let lowerCasePrompt = prompt(
    "Would you like your password to contain Lowercase letters? Answer yes or no"
  );

  //i.convert passwordlength to a true/false statement?....

  let uppercaseCasePrompt = prompt(
    "Would you like your password to contain Uppercase letters? Answer yes or no"
  );

  //i.convert passwordlength to a true/false statement?....

  let numbersPrompt = prompt(
    "Would you like your password to contain Numbers? Answer yes or no"
  );

  //i.convert passwordlength to a true/false statement?....

  let specialCharactersPrompt = prompt(
    "Would you like your password to contain Special characters? Like $!*&. Answer yes or no"
  );

  //i.convert passwordlength to a true/false statement?....
});
