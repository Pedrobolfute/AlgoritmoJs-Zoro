// 23 - Algoritmo que encontre o maior divisor comum (MDC) de dois números.

function mdc(a, b) {
  let track = 2
  let mdc = 1
  let conditionA = a % track === 0
  let conditionB = b % track === 0

  while (a !== 1 || b !== 1) {
    console.log(a, b)
    conditionA = a % track === 0
    conditionB = b % track === 0
    if (conditionA) {
      a = a / track
    }
    if (conditionB) {
      b = b / track
    }
    if(conditionA && conditionB){
      mdc = mdc * track
    }
    if (conditionA === false && conditionB === false) {
      track++
    }
  }
  return 'MDC: ' + mdc
}

console.log(mdc(18, 60))