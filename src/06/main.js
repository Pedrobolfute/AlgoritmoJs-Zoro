// 6 - Criar um algoritmo que verifica se um número é primo.

let number = Math.floor(Math.random() * 10)

function verify(val) {
  if
    (
      (val === 1) || 
      (val % 2 === 0 && val !== 2) || 
      (val % 3 === 0 && val !== 3) || 
      (val % 5 === 0 && val !== 5)
    )
      {console.log(`${val} is NOT prime number!`)} 
      else {console.log(`${val} is prime number!`)}}
verify(number)

// for (let i = 0; i <= 500; i++) {
//   verify(i)
// }