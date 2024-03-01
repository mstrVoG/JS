"use strict"
let numbers = [1,2,3,4,5,6,7,8,9,10,11]
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] <10) {
        result += numbers[i];
    }
}
alert(result)