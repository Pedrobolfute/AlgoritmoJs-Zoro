// 21 - Algoritmo que calcule a soma dos dígitos de um número.

function toSome(n) {
  let result = 0
  n = n.toString()
  for (let i = 0; i < n.length; i++) {
    result = parseInt(n[i]) + result
  }
  return result
}

console.log(toSome(124))