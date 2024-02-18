// 34 - Criar um algoritmo que verifique se um número é um número de Armstrong.

function isArmstrong(n) {
  const nSize = n.toString().length
  let nArr = n.toString().split('')
  let result = 0
  for (let i = 0; i < nSize; i++) {
    result += Math.pow(nArr[i], nSize)
  }
  if (n === result) {
    console.log(true)
  } else {
    console.log(false)
  }
}
isArmstrong(371)