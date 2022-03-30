// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  document.getElementById("generate").addEventListener("click",function() {
    let person = prompt("how many characters would you like your password to contain", "8-128")
    let text;
    if (person <= 8 ){
      alert("invalid number");
    }else if (person >= 8) {
      console.log("greater than 8")
    }
})
