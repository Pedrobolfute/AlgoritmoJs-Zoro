// 12 - Criar um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
  console.log(`Fatorial de ${num}: `)
  for (let i = num; i > 1; i--) {
    num = num * (i - 1)
  }
  console.log(`${num}`)
}

fatorial(4)