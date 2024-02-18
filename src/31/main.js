// 31 - Algoritmo que calcule o cosseno de um ângulo em graus.

function coss(ang) {
  let rad = ang * Math.PI/180
  let k = Math.cos(rad)
  console.log(k)
  return k
}
coss(60)