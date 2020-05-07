// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordLettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";                     //Possible password letters uppercase
var passwordLettersLowercase = "abcdefghijklmnopqrstuvwxyz";                     //Possible password letters lowercase   
var passwordLettersAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //All Possible password letters
var passwordNumbers = "0123456789";                                              //Possible password numbers
var passwordSpecialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";              //Possible password special characters. Was not able to add double quotations, need to ask about that later.
var allPasswordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; //All possible password characters

var passwordLength = prompt(
  "How many characters do you want your password? Choose length from 8 to 128."
);
var passwordCharacterTypeUppercase = confirm(
  "Press OK if you want your password to include uppercase letters."
);
var passwordCharacterTypeLowercase = confirm(
  "Press OK if you want your password to include lowercase letters."
)
var passwordCharacterTypeNumbers = confirm(
  "Press OK if you want your password to include numbers."
)
var passwordCharacterTypeSpecialCharacters = confirm(
  "Press OK if you want your password to include special characters."
)




function writePassword(){

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
