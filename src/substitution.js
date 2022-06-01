// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false
    if (alphabet.length !=26) return false
    for (let i = 0; i < alphabet.length - 1; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
          if (alphabet[i] == alphabet[j]) {
              return false;
          }
        }
  }
 input = input.toLowerCase()
  let answer = []
  let realAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const map = {}
  for (let i = 0; i < alphabet.length; i++) {
    map[realAlphabet[i]] = alphabet[i]
  }

  const altMap = {}
  for (let i = 0; i < alphabet.length; i++) {
    altMap[alphabet[i]] = realAlphabet[i]
  }
if (!encode){
  for (let i = 0; i < input.length; i ++) {
    //console.log('input I ->', input[i])
  const ele = input[i]
  if (ele == " ") {answer.push(" ")}
  else answer.push(altMap[ele])
   }
}
if (encode){
 for (let i = 0; i < input.length; i ++) {
  //console.log('input I ->', input[i])
const ele = input[i]
if (ele == " ") {answer.push(" ")}
else answer.push(map[ele])
 }}
return answer.join("")
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
