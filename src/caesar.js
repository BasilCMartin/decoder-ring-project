// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift >25 || shift < -25) {return false}
    if (!encode) {shift *= -1}
    input = input.toLowerCase()
    let answer = ""
    for (let i = 0; i < input.length; i++) {
      let letter = input[i]
      if (letter.match(/[a-z]/)){
      let charCode = input.charCodeAt(i) + shift
      if (charCode > 122) {
        charCode = charCode - 26
      }
      if (charCode < 97) {
        charCode = charCode + 26
      }
      let shiftedLetter = String.fromCharCode(charCode)
      answer += shiftedLetter
    }
  else {answer += letter}
}
    return answer
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
