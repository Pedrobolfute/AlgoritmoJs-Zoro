// 30 - Criar um algoritmo que verifique se um número é um quadrado perfeito.

function isPerfectSquare(num) {
  let verify = true
  let n = Math.sqrt(num).toString()
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '.') {
      verify = false
    }
  }
  console.log(num, verify)
}
isPerfectSquare(9)