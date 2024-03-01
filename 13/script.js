// Тут ваше решение
"use strict"
let name = document.querySelector('.name')
let email = document.querySelector('.email')
let button = document.querySelector('.button')
button.addEventListener("click", () => {
    if (email.value == "" || name.value == ""){
        alert("Ошибка валидации")
    }
})
console.log(name,email)
