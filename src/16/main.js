// 16 - Criar um algoritmo que gere os primeiros "n" números da sequência de Fibonacci.

function fibonacci(num) {
  let seq = 0
  let track = 1
  let last = 0
  let aux = 0
  while (seq < num) {
    console.log(last)
    seq++
    aux = track + last
    last = track
    track = aux
  }
}

fibonacci(7)