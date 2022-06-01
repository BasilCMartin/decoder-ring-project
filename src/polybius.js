// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    let answer = ""
    input = input.toLowerCase()
    if (!encode){ 
      
    let wordArray = input.split(" ")
    let isEven = wordArray.every((word) => word.length % 2 === 0);
    if (!isEven) {
      return false;
    }
      for (let i = 0; i < input.length; (input[i] == " " ? i++: i+=2)) {
         if (input[i] + input[i+1] == '11' ) {answer += 'a'} 
        else if (input[i] + input[i+1] == '21') (answer += 'b')
        else if (input[i] + input[i+1] == '31') (answer += 'c')
        else if (input[i] + input[i+1] == '41') (answer += 'd')
        else if (input[i] + input[i+1] == '51') (answer += 'e')
        else if (input[i] + input[i+1] == '12') (answer += 'f')
        else if (input[i] + input[i+1] == '22') (answer += 'g')
        else if (input[i] + input[i+1] == '32') (answer += 'h')
        else if (input[i] + input[i+1] == '42') (answer += 'i/j')
        else if (input[i] + input[i+1] == '52') (answer += 'k')
        else if (input[i] + input[i+1] == '13') (answer += 'l')
        else if (input[i] + input[i+1] == '23') (answer += 'm')
        else if (input[i] + input[i+1] == '33') (answer += 'n')
        else if (input[i] + input[i+1] == '43') (answer += 'o')
        else if (input[i] + input[i+1] == '53') (answer += 'p')
        else if (input[i] + input[i+1] == '14') (answer += 'q')
        else if (input[i] + input[i+1] == '24') (answer += 'r')
        else if (input[i] + input[i+1] == '34') (answer += 's')
        else if (input[i] + input[i+1] == '44') (answer += 't')
        else if (input[i] + input[i+1] == '54') (answer += 'u')
        else if (input[i] + input[i+1] == '15') (answer += 'v')
        else if (input[i] + input[i+1] == '25') (answer += 'w')
        else if (input[i] + input[i+1] == '35') (answer += 'x')
        else if (input[i] + input[i+1] == '45') (answer += 'y')
        else if (input[i] + input[i+1] == '55') (answer += 'z')
        else (answer += " ")
      }
     }
    else {
    for (let i = 0; i < input.length; i++){
      if (input[i] == 'a') {answer += '11'}
      else if (input[i] == 'b') {answer += '21'}
      else if (input[i] == 'c') {answer += '31'}
      else if (input[i] == 'd') {answer += '41'}
      else if (input[i] == 'e') {answer += '51'}
      else if (input[i] == 'f') {answer += '12'}
      else if (input[i] == 'g') {answer += '22'}
      else if (input[i] == 'h') {answer += '32'}
      else if (input[i] == 'i') {answer += '42'}
      else if (input[i] == 'j') {answer += '42'}
      else if (input[i] == 'k') {answer += '52'}
      else if (input[i] == 'l') {answer += '13'}
      else if (input[i] == 'm') {answer += '23'}
      else if (input[i] == 'n') {answer += '33'}
      else if (input[i] == 'o') {answer += '43'}
      else if (input[i] == 'p') {answer += '53'}
      else if (input[i] == 'q') {answer += '14'}
      else if (input[i] == 'r') {answer += '24'}
      else if (input[i] == 's') {answer += '34'}
      else if (input[i] == 't') {answer += '44'}
      else if (input[i] == 'u') {answer += '54'}
      else if (input[i] == 'v') {answer += '15'}
      else if (input[i] == 'w') {answer += '25'}
      else if (input[i] == 'x') {answer += '35'}
      else if (input[i] == 'y') {answer += '45'}
      else if (input[i] == 'z') {answer += '55'}
      else answer += input[i]
    }}

    
    return answer
 }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
