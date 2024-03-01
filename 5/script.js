"use strict"
let num = prompt('Введите число')
function getSumm(num){
    num = '' + num;
    return +num[0] + (+num[num.length-1]);
}
 
alert(getSumm(12345));