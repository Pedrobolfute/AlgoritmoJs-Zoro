//19 - Algoritmo que verifica se um número é par ou ímpar.

function isPar(num) {
  if (num % 2 === 0) {
    return 'Is par!'
  } else {
    return 'Is impar!'
  }
}

console.log(isPar(9))