// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  document.getElementById("generate").addEventListener("click",function(){
   var length= characterlength();
   
  }
)

// character length prompt
function characterlength(){
  var person = prompt("how many characters would you like your password to contain","8-128")
   if (person <= 8){
     alert("password needs to contain at least 8 characters");         
  }
  return person;
}

// function 

function lowercase(){
  var lowercase = confirm("would you like your password to include lowercase?");
  return lowercase;
 
}

function upercase(){
  var upercase = confirm("would you like your password to include upercasses?");
  return upercase;
}

function numeric(){
  var numeric = confirm("would you like your password to include numbers?");
  return numeric;
}

function specialcharacter(){
  var specialcharacter = confirm("would you like your password ");
  return specialcharacter;
}


function nothingclicked(){
  if(lowercase !== false && upercase !== false && numeric !== false && specialcharacter !== false){
    alert("must click one");
  }
}





