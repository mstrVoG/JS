"use strict"
    let result = prompt("Введите слово")
    let stringArr = result.split("").reverse().join("")
    if (result == stringArr) {
        alert("Палиндром")
    } else {
        alert("Не палиндром")
    }