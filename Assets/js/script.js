// Assignment Code
const generateBtn = document.getElementById("generate");
const password = "";

// Length input and checkboxes 
const lengthSetting = document.getElementById("length");
const uppercaseSetting = document.getElementById("uppercase");
const lowercaseSetting = document.getElementById("lowercase");
const numbersSetting = document.getElementById("numbers");
const symbolsSetting = document.getElementById("symbols");

// Creating an object array for the character creation functions
const characterFunctionObj = {
  "lowercase": getRandomLowercase,
  "uppercase": getRandomUppercase, 
  "numbers": getRandomNumber,
  "symbols": getRandomSymbol,
};

// When the "Generate" button is clicked, this will run
generateBtn.addEventListener("click", () => {
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
function generatePassword(lower, upper, number, symbol, length){
  // Placeholder for password to manipulate
  let generatedPassword = "";
  // Making a variable to house the different types of input settings
  const typesCount = userUppercaseInput + userLowercaseInput + userNumbersInput + userSymbolsInput;

  console.log(typesCount);
  // Making an array that will filter out the unchecked boxes
  const typesArray = [{userUppercaseInput}, {userLowercaseInput}, {userNumbersInput}, {userSymbolsInput}].filter(item => Object.values(item)[0]);

  console.log(typesArray);

  if(typesCount === 0){
    return "Please select an option.";
  };

  for(i = 0; i < length; i += typesCount){
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log(funcName);
      password += characterFunctionObj[funcName]();
     
    });
  }

};

// Generator Functions
function getRandomLowercase(){
  // abcdefghijklmnopqrstuvwxyz
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUppercase(){
  // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
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