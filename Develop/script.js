// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@","\", ^", "_", "`", "{", "|", "}", "~"];
// var passwordLength = randomNumber(7, 127);

// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1));

//   return value;
// };

var prompts = function () {

  // How long is password?
   var passwordLengthSelect =  window.prompt ("How long would you like your password between 8 and 128 characters?");

   if (passwordLengthSelect < 8 && passwordLengthSelect > 128) {
     window.prompt("Please choose a character between 8 and 128 characters");
   } else {
   }

   //Numbers Character Confirmation
   var numbersConfirm = window.confirm("Would you like to include number characters?");
      if (numbersConfirm) {
      } else {
      }

  //Special Characters Confirmation
  var specialCharactersConfirm = window.confirm("Would you like to include special characters?")
      if (specialCharactersConfirm) {
      } else {
      }

  // Uppercase Characters Confirmation
  var uppercaseCharactersConfirm = window.confirm("Would you like to include uppercase letters?")
      if (uppercaseCharactersConfirm) {
      } else {
      }

  // Lowercase Characters Confirmation
  var lowercaseCharactersConfirm = window.confirm("Would you like to include lowercase letters?")
      if (lowercaseCharactersConfirm) {
      } else {
      }


  //Container for prompts function answers
  var passwordSelections = {
  passwordLengthSelect: passwordLengthSelect,
  numbersConfirm: numbersConfirm,
  specialCharactersConfirm: specialCharactersConfirm,
  uppercaseCharactersConfirm: uppercaseCharactersConfirm,
  lowercaseCharactersConfirm: lowercaseCharactersConfirm,
  }

  return passwordSelections;
    // If no selections, nothing to generate.

};


// Generating the Actual Passwords
function (generatePassword) {
var runPassword = prompts();
var passwordResults = [];
var potentialResults = [];
var actualResults = [];

//Ability to call password results outside of function
return generatePassword;
};
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Listener for the button click to write password. 



//All answered, Password must generate that matches criteria.
  //Once answered, must display in alert or written on page.
