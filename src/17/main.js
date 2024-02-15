// 17 - Algoritmo que encontre o mínimo múltiplo comum (MMC) de dois números.

function findMMC(a, b) {
  let keep = 2
  let mmc = 1
  let condisionA = a % keep === 0
  let condisionB = b % keep === 0
  while (a !== 1 || b !== 1) {
    condisionA = a % keep === 0
    condisionB = b % keep === 0
    if (condisionA) {
      a = a / keep
    }
    if (condisionB) {
      b = b / keep
    }
    if (condisionA || condisionB) {
      mmc = mmc * keep
    }
    if (condisionA === false && condisionB === false) {
      keep++
    }
  }
  return mmc
}

console.log(findMMC(9, 12))