// Assignment Code
var generateBtn = document.getElementById("generate");
var passwordEl  = document.getElementById("password");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordEl.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var length = prompt("how many characters would you like to include in your password","8-128");

  if(length < 8 || length > 128 || isNaN(length)) {
    alert("password must contain atleast 8-128 characters");
    return;
    
  };


  var concarrays = [];
  // value arrays 
  var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase="abcdefghijklmnopqrstuvwxyz".split("");
  var specialCharacters= "+-*/|\]}[{]!@#$%^&()`~".split("");
  var numeric ="1234567890".split("");


  // prompt for lowercases
  var lowerCasecon = confirm("would you like your password to contain lowercases?");
  if(lowerCasecon === true) {
      for(var i =0; i <lowerCase.length; i++) {
      concarrays.push(lowerCase[i]);
    };
  };

  // prompt for uppercase
  var upperCasecon = confirm("would you like your password to contain uppercase");
  if(upperCasecon === true) {
    for(var i=0; i<upperCase.length; i++) {
      concarrays.push(upperCase[i]);
    };
  };

  // prompt for numeric values
  var numberscon = confirm("do you want your password to contain numeric?");
  if(numberscon === true) {
    for(var i=0; i<numeric.length;i++) {
      concarrays.push(numeric[i]);
      };
    };

  // prompt for special characters
  var specialCharacterscon = confirm("would you like your password to contain spacial characters?");
  if (specialCharacterscon === true) { 
    for(var i=0; i<specialCharacters.length;i++) { 
      concarrays.push(specialCharacters[i]);
    };
  };

  // user validation for confirms
  if(lowerCasecon === false && upperCasecon === false && specialCharacterscon === false && numberscon === false){
    alert("must click at least one of the criteria");
  };
  

 var passwords ="";
 for(var i = 0; i < passlength; i++) {
  concarrays[
    Math.floor(Math.random()*concarrays.length)
  ];
  passwords += concarrays[
    Math.floor(Math.random()*concarrays.length)
  ];
  };
  
  return passwords;
};