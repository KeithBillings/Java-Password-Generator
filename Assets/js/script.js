// Assignment Code
const generateBtn = document.getElementById("generate");
const password = document.getElementById("password");

// Length input and checkboxes 
const lengthSetting = document.getElementById("length");
const uppercaseSetting = document.getElementById("uppercase");
const lowercaseSetting = document.getElementById("lowercase");
const numbersSetting = document.getElementById("numbers");
const symbolsSetting = document.getElementById("symbols");

// Creating an object array for the character creation functions
const characterFunctionObj = {  
  upper: getRandomUppercase, 
  lower: getRandomLowercase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// When the "Generate" button is clicked, this will run
generate.addEventListener("click", () => {
  // Getting the values of the user's input of preferred settings
  const userLengthInput = +lengthSetting.value;
  const userUppercaseInput = uppercaseSetting.checked;
  const userLowercaseInput = lowercaseSetting.checked;
  const userNumbersInput = numbersSetting.checked;
  const userSymbolsInput = symbolsSetting.checked;

  // Writing the password to the text area using said preferances 
  password.innerText = generatePassword(userUppercaseInput, userLowercaseInput, userNumbersInput, userSymbolsInput, userLengthInput);
});

// Function creating the password 
function generatePassword(upper, lower, number, symbol, length){
  // Placeholder for password to manipulate
  let generatedPassword = "";
  // TypesCount is the number of checked boxes 0-4
  const typesCount = upper + lower + number + symbol;
  // Making an array that will filter out the unchecked boxes
  const typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  // Return Statement in text area if no setting is selected
  if(typesCount === 0){
    return "Please select an option.";
  };
  // Creating a loop that will 
  for(let i = 0; i < length; i += typesCount){
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += characterFunctionObj[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

// Generator Functions
function getRandomUppercase(){
  // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomLowercase(){
  // abcdefghijklmnopqrstuvwxyz
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomNumber(){
  // 0123456789
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomSymbol(){
  // !@#$%^&*()[]=<>.,/
  var symbols = "!@#$%^&*()[]=<>.,/";
  return symbols[Math.floor(Math.random() * symbols.length)];
};


// Testing things with console.log 
// console.log(characterFunctionObj.lowercase());