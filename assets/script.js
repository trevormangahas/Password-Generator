// Assignment code here

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let charArray = ['!', '#', '$', '=', '?', '@', '&'];
let uppercaseArray = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
let lowercase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

// pulls random letters, numbers or signs from arrays
let passwordNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
console.log(passwordNumber)

let passwordChar = charArray[Math.floor(Math.random() * charArray.length)];
console.log(passwordChar)

let passwordUpper = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
console.log(passwordUpper)


function generatePassword() {
    // getting password length from user input
    let passwordLength = Math.floor(prompt('How many characters is your password?'))
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert('Invalid Number! Please enter a number between 8 and 128.');
        passwordLength = prompt('How many characters is your password?');
}
    // giving user input from prompt to variable, answering in lowercase only
    let passwordCriteriaOne = prompt('Does your password need special characters? Enter "YES" or  "NO" ').toLocaleLowerCase();
    let passwordCriteriaTwo = prompt('Does your password need numbers? Enter "YES" or "NO" ').toLocaleLowerCase();
    let passwordCriteriaThree = prompt('Does your password need Uppercase and Lowercase letters? Enter "YES" or "NO"').toLocaleLowerCase();

































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
