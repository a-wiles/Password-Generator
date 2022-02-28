// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays

var password = "";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~"];
var finalPasswordOptions = [];


function generatePassword () {
  // How long is password?
   var lengthSelect =  window.prompt ("How long would you like your password between 8 and 128 characters?");

   if (lengthSelect > 8 && lengthSelect < 128) {
     window.confirm("Is" + lengthSelect + "the correct length?");
   }

   if (lengthSelect < 8) {
     window.alert ("Please enter a valid length");
     return null;
   }

   if (lengthSelect > 128) {
    window.alert ("Please enter a valid length");
    return null;
  }

   //Numbers Character Confirmation
   var numbersConfirm = window.confirm("Would you like to include number characters?");
      if (numbersConfirm) {
        finalPasswordOptions = finalPasswordOptions.concat(numbers);
      } else {
      }

  //Special Characters Confirmation
  var specialCharactersConfirm = window.confirm("Would you like to include special characters?");
      if (specialCharactersConfirm) {
        finalPasswordOptions = finalPasswordOptions.concat(special);
      } else {
      }

  // Uppercase Characters Confirmation
  var uppercaseCharactersConfirm = window.confirm("Would you like to include uppercase letters?");
      if (uppercaseCharactersConfirm) {
        finalPasswordOptions = finalPasswordOptions.concat(uppercase);
      } else {
      }

  // Lowercase Characters Confirmation
  var lowercaseCharactersConfirm = window.confirm("Would you like to include lowercase letters?");
      if (lowercaseCharactersConfirm) {
        finalPasswordOptions = finalPasswordOptions.concat(lowercase)
      } else {
      }

  for (var i = 0; i < lengthSelect; i++) {
      password += randomCharacters (0, finalPasswordOptions.length);
  }

  return password;
};

var randomCharacters = function (min, max) {
  var randomizedNumbers = Math.floor(Math.random() * max-1);
  var charactersPlaceholders = finalPasswordOptions[randomizedNumbers];
  
  return charactersPlaceholders;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);