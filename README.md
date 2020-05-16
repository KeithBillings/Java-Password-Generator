# Java-Password-Generator

## Getting Started

In this assignment I was tasked with writing a section of javascript code that would generate a random password and write it into a text box for the user to copy. I chose to use text boxes to select password parameters instead of prompts to save the user time and effort. The user can input a number to determine the string length of the password. The user can select to add capital letters, lowercase letters, numbers, and symbols. 

## Deployment

* https://keithbillings.github.io/Java-Password-Generator/

## Screenshot

![Alt text](Assets\images\Screenshot.png?raw=true "Screenshot")

## What I Did

* I first pushed the homework files from the school folder. 
* I changed the background to be more appealing :)
* Then I created check boxes with labels for each of the password settings
* Write functions that will generate random characters of uppercase letters, lowercase letters, numbers, and symbols using character codes and math.random
* Build an array that stores these character generation functions
* Add element variables
* Refactor with comments
* Create variables that obtain the values of the user's preferred settings
* Add an if statement if no settings are selected
* Debug and refactor 
* Created an event listener that will run function on button click. This function will check the values of user preferred settings. 
* Create a function that will create the password
  * I made it start with a variable declaring an empty string
  * Then it checks the number of checkboxes selected
  * I then made an array that will filter out settings that are not selected
  * I refactored my if statement of no settings selected into this function
  * I then built a for loop that will pull from the character creating functions for the duration of the user selected length, taking into consideration the filtered array
  * I then returned the final product and terminated the function
* Added the generating function into the event listener so now it writes to the text area on the webpage
* Refactored and commented
* Add a function that is designed to shuffle strings and put it into the generate password function right before the function returns 
* Debug
* Added an if statement if the length was too long
* Added an if statement if the length was too short
* Added more comments

## Built With

* local CSS stylesheet
* local javascript file

## Author

* Keith Billings
