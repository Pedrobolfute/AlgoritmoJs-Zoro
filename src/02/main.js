// 2 - Algoritmo que passa elementos de 1 array pro outro.

let arr = []
let newArr = []
let elements = 50

for (let i = 0; i <= elements; i++) {
  arr.push(i)
  console.log('push arr: ' + arr[i])
}

console.log('arr: ' + arr)
console.log('newArr: ' + newArr)

createElement(arr, 'arr')
createElement(newArr, 'newArr')

const arraySize = arr.length
for (let i = 0; i < arraySize; i++) {
  newArr[i] = arr.shift()
  console.log('change arr: ' + newArr[i])
}

console.log('arr: ' + arr)
console.log('newArr: ' + newArr)

createElement(newArr, 'newArr')
createElement(arr, 'arr')


function createElement(array, message) {
  let body = document.body
  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      let div = document.createElement('div')
      body.appendChild(div)
      div.textContent = `${message}: ${i}`
    }
  } else {
    let div = document.createElement('div')
    body.appendChild(div)
    div.textContent = `${message}: Empty!`
    div.style.color = 'red'
  }
}