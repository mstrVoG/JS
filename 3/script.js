"use strict"
// let word = prompt('Введите слово',)
// let reverse = i => {
//     i.split('')
//     .reverse()
//     .join('')
// }
// alert(reverse(word))
let str = prompt('Введите слово',)
alert([...str].reverse().join(''))