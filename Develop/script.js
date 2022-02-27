// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@","\", ^", "_", "`", "{", "|", "}", "~"];
var randomCharacters = (7, 127);

randomCharacters = function (min, max) {
  var value = Math.floor(Math.random())
 }

function prompts () {
  // How long is password?
   var passwordLengthSelect =  window.prompt ("How long would you like your password between 8 and 128 characters?");

   if (passwordLengthSelect < 8 && passwordLengthSelect > 128) {
     window.prompt("Please choose a character between 8 and 128 characters");
     return null;
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
function generatePassword () {
  //Randomizing Prompts results.
  var runPrompts = prompts();
  var potentialResults = [];
  var actualResults = [];

  // Number Characters selected?
  if (runPrompts.numbersConfirm) {
    potentialResults = potentialResults.concat(numbers);
        // If answer was yes, put into random generator.
    actualResults.push(randomCharacters(numbers));
  }  

  //Uppercase Characters Selected?
  if (runPrompts.uppercaseCharactersConfirm) {
    potentialResults = potentialResults.concat(uppercase);
        // If answer was yes, put into random generator.
    actualResults.push(randomCharacters(uppercase));
  }  

  //Lowercase Characters Selected?
  if (runPrompts.lowercaseCharactersConfirm) {
    potentialResults = potentialResults.concat(lowercase);
        // If answer was yes, put into random generator.
    actualResults.push(randomCharacters(lowercase));
  }  

  //Special Characters Selected?
  if (runPrompts.specialCharactersConfirm) {
    potentialResults = potentialResults.concat(special);
        // If answer was yes, put into random generator.
    actualResults.push(randomCharacters(special));
  }  

  for (var i = 0; i < runPrompts.passwordLengthSelect; i++) {
  var potentialResults = randomCharacters(potentialResults);
  potentialResults.push(potentialResults(actualResults));
  }
  for (var i = 0; i < potentialResults.passwordLengthSelect; i++) {
  result[i] = actualResults[i];
  }

  //Ability to call password results outside of function
  return actualResults.join('');
};

randomCharacters = function (min, max) {
  var value = (Math.random());
 }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
