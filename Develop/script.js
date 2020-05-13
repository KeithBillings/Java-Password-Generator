// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write Password to the #password input
// function writePassword(){
//   var password = generatePassword;

//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// };



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// Generator Functions

function getRandomLowercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  var symbols = "!@#$%^&*()[]=<>.,/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}



console.log(getRandomUppercase());