// 33 - Algoritmo que converta um número decimal para binário.

function toBinary(decimal) {
  const divider = 2
  let dividend = decimal
  let quotient
  let rest
  let result = []
  while (dividend !== 0) {
    quotient = dividend / divider
    rest = dividend % divider
    result.unshift(rest)
    dividend = Math.floor(quotient)
  }
  console.log(result)
}
toBinary(8)