//9 - Algoritmo que verifica se uma string é um palíndromo.

function verifyPalindrome(word) {
  let characters = word.toLowerCase().split('')
  let count = 0
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === characters[characters.length - 1 - i]) { count++ }
    else { count = 0 }
  }
  if (count === characters.length) {
    console.log(`${word}: Is a palindrome!`)
  }
}
verifyPalindrome('Radar')