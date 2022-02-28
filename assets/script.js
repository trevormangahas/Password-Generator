// Assignment code here

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let charArray = ['!', '#', '$', '=', '?', '@', '&'];
let uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// pulls random letters, numbers or signs from arrays
let passwordNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
console.log(passwordNumber)

let passwordChar = charArray[Math.floor(Math.random() * charArray.length)];
console.log(passwordChar)

let passwordUpper = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
console.log(passwordUpper)


function generatePassword() {
    // getting password length from user input
    let passwordLength = Math.floor(prompt('How many characters would you like in your password?'))
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert('Invalid Number! Please enter a number between 8 and 128.');
        passwordLength = prompt('How many characters is your password?');
}
    // giving user input from prompt to variable, answering in lowercase only
    let passwordCriteriaOne = prompt('Does your password need special characters? Enter "YES" or  "NO" ').toLocaleLowerCase();
    let passwordCriteriaTwo = prompt('Does your password need numbers? Enter "YES" or "NO" ').toLocaleLowerCase();
    let passwordCriteriaThree = prompt('Does your password need Uppercase and Lowercase letters? Enter "YES" or "NO"').toLocaleLowerCase();

      //  generating password based on the answers of the prompts by the user
    if (passwordCriteriaOne === "yes" && passwordCriteriaTwo === "yes" && passwordCriteriaThree === "yes") {
      
      // function made to randomly generate lowercase letters to meet the users password length needed
      function repeatLowercase() {
          let outPut = ""
          for (let i = 3; passwordLength > i; i++) {
              let passwordLower = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
              outPut += passwordLower
          }
          
          // setting the return value of each loop
          return outPut;
      }
      
      // setting the function to a variable so i can recall the rertun value of the function
      let passwordLower = repeatLowercase()
      
      // this will be printed to the site as the password
      return passwordUpper + passwordChar + passwordNumber + passwordLower;

      // code will loop this base code for every condition only thing that changes are the answers to the user prompts and the value of i to account for how many items are used from the arrays
      } else if (passwordCriteriaOne === "no" && passwordCriteriaTwo === "no" && passwordCriteriaThree === "no") {
      function repeatLowercase() {
          let outPut = ""
          for (let i = 0; passwordLength > i; i++) {
              let passwordLower = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
              outPut += passwordLower
          }
          return outPut;
      }
      let passwordLower = repeatLowercase()

      return passwordLower

      } else if (passwordCriteriaOne === "yes" && passwordCriteriaTwo === "no" && passwordCriteriaThree === "no") {
      function repeatLowercase() {
          let outPut = ""
          for (let i = 1; passwordLength > i; i++) {
              let passwordLower = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
              outPut += passwordLower
          }
          return outPut;
      }

      let passwordLower = repeatLowercase()

      return passwordChar + passwordLower

      } else if

      (passwordCriteriaOne === "yes" && passwordCriteriaTwo === "yes" && passwordCriteriaThree === "no") {
      function repeatLowercase() {
          let outPut = ""
          for (let i = 2; passwordLength > i; i++) {
              let passwordLower = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
              outPut += passwordLower
          }
          return outPut;
      }

      let passwordLower = repeatLowercase()

      return passwordChar + passwordNumber + passwordLower

  } else if

  (passwordCriteriaOne === "no" && passwordCriteriaTwo === "yes" && passwordCriteriaThree === "no") {
      function repeatLowercase() {
          let outPut = ""
          for (let i = 1; passwordLength > i; i++) {
              let passwordLower = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
              outPut += passwordLower
          }
          return outPut;
      }

      let passwordLower = repeatLowercase()

      return passwordNumber + passwordLower
  } else if (passwordCriteriaOne === "no" && passwordCriteriaTwo === "yes" && passwordCriteriaThree === "yes") {
      function repeatLowercase() {
          let outPut = ""
          for (let i = 2; passwordLength > i; i++) {
              let passwordLower = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
              outPut += passwordLower
          }
          return outPut;
      }

      let passwordLower = repeatLowercase()

      return passwordUpper + passwordNumber + passwordLower
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
