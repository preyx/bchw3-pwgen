// Assignment Code
var generateBtn = document.querySelector('#generate')

var generatePassword = function () {
  let pwLen = 0
  let pwLow = false
  let pwUp = false
  let pwNum = false
  let pwSpc = false

  // Repeat question if invalid inputs
  while (pwLen < 8 || pwLen > 128 || isNaN(pwLen)) {
    pwLen = parseInt(window.prompt('How long of a password (8-128)?'))
  }
  while (!(pwLow || pwUp || pwNum || pwSpc)) {
    pwLow = window.confirm('Include lowercase?')
    pwUp = window.confirm('Include uppercase?')
    pwNum = window.confirm('Include numbers?')
    pwSpc = window.confirm('Include specials?')
  }

  // Generate possible character string based on user response
  let stringBase = ''
  if (pwLow) stringBase = stringBase.concat('abcdefghijklmnopqrstuvwxyz')
  if (pwUp) stringBase = stringBase.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  if (pwNum) stringBase = stringBase.concat('1234567890')
  if (pwSpc) stringBase = stringBase.concat("@%+\\/'!#$^?:,(){}[]~`-_.")

  // Generate random sequence using stringBase
  let pwOut = ''
  for (let i = 0; i < pwLen; i++) {
    pwOut = pwOut.concat(
      stringBase.charAt(Math.floor(Math.random() * stringBase.length))
    )
  }

  return pwOut
}

// Write password to the #password input
function writePassword () {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
