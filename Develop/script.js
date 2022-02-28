// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays

//Main password holder
var password = "";

//Numbers array
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Uppercase array
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Lowercase array
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Special Characters Array
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~"];

//empty placeholder for concat arrays.
var finalPasswordOptions = [];


function generatePassword () {
  // How long is password?
   var lengthSelect =  window.prompt ("How long would you like your password between 8 and 128 characters?");

      if (lengthSelect > 8 && lengthSelect < 128) {
        window.confirm("Is" + lengthSelect + "the correct length?");
      }
      // If amount is selected outside of above permiters, return to null
      else {
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

      //Adding randomized characters based upon user selection for length
  for (var i = 0; i < lengthSelect; i++) {
      password += randomCharacters (0, finalPasswordOptions.length);
  }

  // allowing final password to be used outside function
  return password;
};

//Randomizing the characters included in main array
var randomCharacters = function (min, max) {
  var randomizedNumbers = Math.floor(Math.random() * max-1);
  var charactersPlaceholders = finalPasswordOptions[randomizedNumbers];

  //placeholder to allow randomized characters var used outside function
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