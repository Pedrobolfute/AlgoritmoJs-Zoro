// 25 - Algoritmo que encontre o comprimento da hipotenusa de um triângulo retângulo dados os catetos.

function hypotenuse(ca, co){
  let h = Math.sqrt(ca)+Math.sqrt(co)
  return h
}
console.log(hypotenuse(100, 100))