// Assignment Code
var generateBtn = document.getElementById("generate");
var password;

// Generator Functions
function getRandomLowercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomSymbol(){
  var symbols = "!@#$%^&*()[]=<>.,/";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Creating an object array for the character creation functions
const characterFunctionArray = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase, 
  numbers: getRandomNumber,
  symbols: getRandomSymbol,
};

// Setting elements aka the length input and the checkboxes 
const lengthSetting = document.getElementById("length");
const uppercaseSetting = document.getElementById("uppercase");
const lowercaseSetting = document.getElementById("lowercase");
const numbersSetting = document.getElementById("numbers");
const symbolsSetting = document.getElementById("symbols");

// Function creating the password
function generatePassword(){
  // Getting the values of the user's input of preferred settings
  var userLengthInput = +lengthSetting.value;
  var userUppercaseInput = uppercaseSetting.checked;
  var userLowercaseInput = lowercaseSetting.checked;
  var userNumbersInput = numbersSetting.checked;
  var userSymbolsInput = symbolsSetting.checked;
  

  // return typeof userSymbolsInput;
};

// Writing Password On The Webpage
//
// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  // The password variable is now equal to the result of the function generating the password
  password = generatePassword();
  // Creating a variable that is choosing the text area the user will see
  var passwordText = document.querySelector("#password");
  // Putting the actual password into the text area
  passwordText.value = password;
});


// Testing things with console.log 
// console.log(characterFunctionArray.lowercase());