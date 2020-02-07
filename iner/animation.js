//reset window web
function reset() {
  window.location.reload()
}


//work with animations
let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black"
}
function makeCurcle() {
  box.style.borderRadius = "50%"
}
function move() {
  box.style.margin = "100px 100px"
}
function makeBlinking() {
  box.style.opacity = "50%"
}
