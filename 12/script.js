"use strict"
let color = document.querySelector('.color')
let btn = document.querySelector('.btn')
function col(color) {
    document.body.style.background = color
}
btn.addEventListener('click', () => {
    col(color.value)
})