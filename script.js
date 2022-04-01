// Assignment Code
var generateBtn = document.querySelector("#generate");
// concated arrays




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var length = prompt("how many characters would you like to include in your password","8-128");
  // makes string to numeric value
  var passlength=parseInt(length);
  console.log(passlength);
  if(length < 8 || length > 128 || isNaN(length)){
    alert("password must contain atleast 8-128 characters");
    return;
    
  }


var concarrays = [];
// value arrays 
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase="abcdefghijklmnopqrstuvwxyz".split("");
var numbers="0123456789".split("");
var specialCharacters= "+-*/|\]}[{]!@#$%^&()`~".split("");


if(upperCasecon !== false && lowerCasecon !==false && numberscon !== false && specialCharacterscon !==false){
  alert("must click atleast on of the criteria");
} 


// prompt for lowercases
var lowerCasecon = confirm("would you like your password to contain lowercases?");
  if(lowerCasecon === true){
      for(var i =0; i <lowerCase.length; i++) {
      concarrays.push(lowerCase[i]);
  }
}

// prompt for uppercase

var upperCasecon = confirm("would you like your password to contain upercases?");
  if(upperCasecon === true){
    for(var i=0; i<upperCase.length; i++){
      concarrays.push(upperCase[i]);
    }
}

var numberscon = confirm("do you want your password to contain numeric?");
  if(numberscon === true){
    for(var i=0; i<upperCase.length;i++){
      concarrays.push(upperCase[i]);
      }
    } 

var specialCharacterscon = confirm("would you like your password to contain spacial characters?");
  if (specialCharacterscon === true){
    for(var i=0; i<specialCharacters.length;i++){
      concarrays.push(specialCharacters[i]);
    }
  }

 var passwords ="";
 for(var i = 0; i < passlength; i++){
  concarrays[
    Math.floor(Math.random()*concarrays.length)
  ];
  passwords += concarrays[
    Math.floor(Math.random()*concarrays.length)
  ];
  
  }
  console.log(passwords);
  return passwords;
  
  
}
    
