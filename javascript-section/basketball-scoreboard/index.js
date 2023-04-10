let left_display = document.getElementById("left-display")
let right_display = document.getElementById("right-display")

let x = 0
let y = 0

//Left display functions
function leftAdd1() {
    x += 1
    left_display.textContent = x
}

function leftAdd2() {
    x += 2
    left_display.textContent = x
}

function leftAdd3() {
    x += 3
    left_display.textContent = x
}

//Right display functions
function rightAdd1() {
    y += 1
    right_display.textContent = y
}

function rightAdd2() {
    y += 2
    right_display.textContent = y
}

function rightAdd3() {
    y += 3
    right_display.textContent = y
}